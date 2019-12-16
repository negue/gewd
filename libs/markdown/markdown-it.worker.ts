import * as MarkdownIt from 'markdown-it';
import { expose } from 'comlink';

const  mdInstance = new MarkdownIt({

});

const workerMethods = {
  name: 'markdown-it',
  compile: input => {
    if (input) {
      return mdInstance.render(input);
    }

    return '';
  }
};

expose(workerMethods);
