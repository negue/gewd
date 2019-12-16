import { expose } from 'comlink';
import * as marked from 'marked';
import * as xss from 'xss';
import {Lazy} from '@gewd/markdown/utils';

// web-worker importScripts
declare function importScripts(...urls: string[]): void;

// Extend Code-Renderer for Mermaid, remove if not needed
const mermaidRegex = new RegExp(/^(sequenceDiagram|graph|gantt|classDiagram|stateDiagram|pie|git)/);

const renderer = new marked.Renderer();
const oldCodeRenderer = renderer.code;
renderer.code = function (code, language, isEscaped) {
  if (mermaidRegex.test(language)) {
    return `<div class="mermaid">${language}\n${code}</div>`;
  }
  return oldCodeRenderer.call(this, code, language, isEscaped);
};


/* Prism Config/Importer */
(self as any).Prism = {
  disableWorkerMessageHandler: true
};

const lazyPrism = Lazy.create(() => import('prismjs'));
const prismPath = '/assets/prism/';

// map to a different file
const languageMap = {
  ts: 'typescript'
};

function loadLanguage(prismInstance, lang) {
  // if language not exist import-it :)
  if (!prismInstance.languages[lang]) {
    const langToLoad = languageMap[lang] || lang;

    const fileToLoad = `${prismPath}prism-${langToLoad}.js`;
    importScripts(fileToLoad);
  }

  return prismInstance.languages[lang];
}

// apply changes to marked
marked.setOptions({
  renderer, // needed for mermaid
  // highlight override for prismjs
  highlight: function(code, lang, callback): any {
    if (mermaidRegex.test(lang)) {
      callback(undefined, code);
      return;
    }

    lazyPrism.getValue().then(prismInstance => {
      const langConfig = loadLanguage(prismInstance, lang);

      const result = prismInstance.highlight(code, langConfig, lang);

      callback(undefined, result);
    });
  }
});

const workerMethods = {
  name: 'marked',
  compile: input => new Promise<string>((resolve, reject) => {
    if (input) {
      marked(input, {
        // aditional marked config
      }, (err, result) => {
        resolve(xss.filterXSS(result, {
          whiteList: {
            ...xss.whiteList,
            div: ['class'],  // mermaid class
            span: ['class'],  // prism colors
          }
        }));
      });

      return;
    }

    resolve('');
  })
};

expose(workerMethods);
