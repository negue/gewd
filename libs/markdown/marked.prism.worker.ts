import { expose } from 'comlink';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import * as xss from 'xss';
import { Lazy } from '@gewd/lazy/utils';
import {
  checkAndReplaceToUnicodeChar,
  emojiRegex,
  highlightCode,
  linkRendererWithFavIcon,
  mermaidRegex
} from '@gewd/markdown/worker-functions';
import { DEFAULT_PRISM_OPTIONS, MarkdownWorker, PrismOptions, WorkerOptions } from '@gewd/markdown/contracts';

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

renderer.link = linkRendererWithFavIcon;


let currentConfigObject: WorkerOptions = {
  prism: DEFAULT_PRISM_OPTIONS
};

const lazyPrism = Lazy.create(() => import('prismjs'));
const lazyEmoji = Lazy.create(() => import('@gewd/markdown/emoji-map'));

// apply changes to marked
marked.setOptions({
  // needed for mermaid
  renderer
}).use(markedHighlight({
  async: true,

  async highlight (code, lang) {
    // if it is a mermaid tag, don't need to go through prism it
    // also for code blocks without a language
    if (!lang || mermaidRegex.test(lang)) {
      return code;
    }

    const highlightedCode = await highlightCode(lazyPrism, lang, code, currentConfigObject.prism, importScripts);

    return highlightedCode;
  }
}));

const workerMethods: MarkdownWorker = {
  name: 'marked',
  init: config => {
    currentConfigObject = config;
  },
  initPrism (options: PrismOptions) {
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

    const result = await marked(input, {
      // aditional marked config, also enables highlight callback
    });

    // extract?^^
    function resolveCleanMarkup (generatedHTML) {
      const sanatizedHTML = xss.filterXSS(generatedHTML, {
        whiteList: {
          ...xss.whiteList,
          a: ['class', 'title', 'href'], // link with custom styles like fav-icon
          div: ['class'],  // mermaid class
          span: ['class', 'style']  // prism colors
        }
      });

      resolve(sanatizedHTML);
    }

    resolveCleanMarkup(result);
  }),
  highlight: (code, lang) => new Promise<string>(async (resolve, reject) => {
    if (!code) {
      resolve('');
      return;
    }

    function resolveCleanMarkup (generatedHTML) {
      const sanatizedHTML = xss.filterXSS(generatedHTML, {
        whiteList: {
          ...xss.whiteList,
          span: ['class', 'style']  // prism colors
        }
      });

      resolve(sanatizedHTML);
    }

    highlightCode(lazyPrism, lang, code, currentConfigObject.prism, importScripts).then(highlightedCode => {
      resolveCleanMarkup(highlightedCode);
    });

    return;
  })
};

expose(workerMethods);
