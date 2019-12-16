import { expose } from 'comlink';
import * as marked from 'marked';
import * as xss from 'xss';

// Extend Code-Renderer for Mermaid, remove if not needed
const renderer = new marked.Renderer();
const oldCodeRenderer = renderer.code;
renderer.code = function (code, language, isEscaped) {
  if (language.match(/^(sequenceDiagram|graph|gantt|classDiagram|stateDiagram|pie|git)/)) {
    return `<div class="mermaid">${language}\n${code}</div>`;
  }
  return oldCodeRenderer.call(this, code, language, isEscaped);
};

// apply changes to marked
marked.setOptions({
  renderer, // needed for mermaid
});

const workerMethods = {
  name: 'marked',
  compile: input => new Promise((resolve, reject) => {
    if (input) {
      marked(input, {
        // aditional marked config
      }, (err, result) => {
        resolve('rest' + xss.filterXSS(result, {
          whiteList: {
            ...xss.whiteList,
            div: ['class']  // mermaid class
          }
        }));
      });

      return;
    }

    resolve('');
  })
};

expose(workerMethods);
