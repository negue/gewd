import { expose } from 'comlink';

export const workerMethods = {
  nameOf: 'none',
  compile: (input) => {
    return '';
  }
};

expose(workerMethods);
