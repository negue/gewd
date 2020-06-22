import { expose } from 'comlink';
import * as marked from 'marked';
import * as xss from 'xss';
import { Lazy } from '@gewd/markdown/utils';
import {
  checkAndReplaceToUnicodeChar,
  emojiRegex,
  mermaidRegex,
  wrapEmojiInSpan
} from '@gewd/markdown/worker-functions';
import { DEFAULT_PRISM_OPTIONS, MarkdownWorker, WorkerOptions } from '@gewd/markdown/contracts';

const lazyEmoji = Lazy.create(() => import('@gewd/markdown/emoji-map'));
// if the first markdown contains emojis, this is filled
let lazyEmojiLoaded = null;

// web-worker importScripts
declare function importScripts (...urls: string[]): void;

const renderer = new marked.Renderer();
const oldCodeRenderer = renderer.code;
renderer.code = function(code, language, isEscaped) {
  if (language === 'custom') {
    return code;
  }

  if (mermaidRegex.test(language)) {
    const emojiInIt = emojiRegex.test(code);
    // check if code contains emojis
    if (emojiInIt) {
      // only replace emojis without wrapping, mermaid can't handle <span> inside
      code = checkAndReplaceToUnicodeChar(code, lazyEmojiLoaded.EMOJI_MAP, lazyEmojiLoaded.colonToUnicode);
    }

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


// apply changes to marked
marked.setOptions({
  // needed for mermaid
  renderer,
  // highlight override for prismjs
  highlight: function(code, lang, callback): any {
    // if it is a mermaid tag, don't need to go through prism it
    // also for code blocks without a language
    if (!lang || mermaidRegex.test(lang) || lang === 'custom') {
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

const workerMethods: MarkdownWorker = {
  name: 'marked',
  init: config => {
    currentConfigObject = config;
  },
  compile: (input, xssSettingString = '{}') => new Promise<string>(async (resolve, reject) => {
    if (!input) {
      resolve('');
      return;
    }

    const xssSettings = JSON.parse(xssSettingString);

    if (emojiRegex.test(input)) {
      if (!lazyEmojiLoaded) {
        // load emoji-map
        lazyEmojiLoaded = await lazyEmoji.getValue();
      }
    }

    marked(input, {
      // aditional marked config, also enables highlight callback
    }, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      const fltersSetting = {
        whiteList: {
          ...xss.whiteList,
          div: ['class'],  // mermaid class
          span: ['class'],  // prism colors

          ...xssSettings
        }
      };

      // extract?^^
      let sanatizedHTML = xss.filterXSS(result, fltersSetting );

      // replace all other emojis in the wrapped way
      if (emojiRegex.test(sanatizedHTML)) {
        // load emoji-map
        const { EMOJI_MAP, colonToUnicode } = lazyEmojiLoaded;

        sanatizedHTML = checkAndReplaceToUnicodeChar(sanatizedHTML, EMOJI_MAP, colonToUnicode, wrapEmojiInSpan);
      }

      resolve(sanatizedHTML);
    });

    return;
  })
};

expose(workerMethods);
