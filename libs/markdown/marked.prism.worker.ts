import { expose } from 'comlink';
import * as marked from 'marked';
import * as xss from 'xss';
import { Lazy } from '@gewd/markdown/utils';
import { checkAndReplaceToUnicodeChar, emojiRegex, mermaidRegex } from '@gewd/markdown/worker-functions';
import { DEFAULT_PRISM_OPTIONS, WorkerOptions } from '@gewd/markdown/contracts';

// web-worker importScripts
declare function importScripts (...urls: string[]): void;

const renderer = new marked.Renderer();
const oldCodeRenderer = renderer.code;
renderer.code = function(code, language, isEscaped) {
  if (mermaidRegex.test(language)) {
    return `<div class="mermaid">${language}\n${code}</div>`;
  }
  return oldCodeRenderer.call(this, code, language, isEscaped);
};
renderer.link = function( href, title, text ) {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
};

let currentConfigObject: WorkerOptions = {
  prism: DEFAULT_PRISM_OPTIONS
};

/* Prism Config/Importer */
(self as any).Prism = {
  disableWorkerMessageHandler: true
};

const lazyPrism = Lazy.create(() => import('prismjs'));

function loadLanguage (prismInstance, lang) {
  // if language not exist import-it :)
  if (!prismInstance.languages[lang]) {
    const langToLoad = currentConfigObject.prism.languageMap[lang] || lang;

    const fileToLoad = `${currentConfigObject.prism.assetPath}prism-${langToLoad}.${currentConfigObject.prism.languageFileType}`;

    // sync load once
    importScripts(fileToLoad);
  }

  return prismInstance.languages[lang];
}

const lazyEmoji = Lazy.create(() => import('@gewd/markdown/emoji-map'));

// apply changes to marked
marked.setOptions({
  // needed for mermaid
  renderer,
  // highlight override for prismjs
  highlight: function(code, lang, callback): any {
    // if it is a mermaid tag, don't need to go through prism it
    // also for code blocks without a language
    if (!lang ||  mermaidRegex.test(lang)) {
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
  init: config => {
    currentConfigObject = config;
  },
  compile: input => new Promise<string>(async (resolve, reject) => {
    if (!input) {
      resolve('');
      return;
    }

    if (emojiRegex.test(input)) {
      // load emoji-map
      const { EMOJI_MAP, colonToUnicode } = await lazyEmoji.getValue();

      input = checkAndReplaceToUnicodeChar(input, EMOJI_MAP, colonToUnicode);
    }

    marked(input, {
      // aditional marked config, also enables highlight callback
    }, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      // extract?^^
      function resolveCleanMarkup (generatedHTML) {
        const sanatizedHTML = xss.filterXSS(generatedHTML, {
          whiteList: {
            ...xss.whiteList,
            div: ['class'],  // mermaid class
            span: ['class']  // prism colors
          }
        });

        resolve(sanatizedHTML);
      }

      resolveCleanMarkup(result);
    });

    return;
  })
};

expose(workerMethods);
