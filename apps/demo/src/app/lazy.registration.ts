import { DynamicLoaderRegistry } from '@gewd/lazy/registry';
import { Lazy } from '@gewd/lazy/utils';

DynamicLoaderRegistry.LazyModuleComponents = {
  'markdown-example': {
    load: new Lazy(
      () => import(/* webpackChunkName: "markdown-example-module" */ './examples/markdown-example/markdown-example.module')
        .then(({MarkdownExampleModule}) => MarkdownExampleModule)
    )
  },
  'lazyload-example': {
    load: new Lazy(
      () => import(/* webpackChunkName: "lazyload-example-module" */ './examples/lazyload-example/lazyload-example.module')
        .then(({LazyloadExampleModule}) => LazyloadExampleModule)
    )
  },


};
