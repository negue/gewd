# Changelog

## [0.3.0] - 2021-01-25

### Breaking Changes

The Registration Syntax is now a method instead of a Dictionary everyone could override (which may produce issues)

New Syntax:

```ts
DynamicLoaderRegistry.RegisterLazyComponent('test-comp',
  new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
);

DynamicLoaderRegistry.RegisterLazyModuleComponent('test-module', {
  load: new Lazy(
    () => import('./lazy-wrapper/test-module-comp')
    .then(({TestModule}) => TestModule)
  )
});
```

## [0.2.0] - 2020-02-25

### [`gewd-lazy-module-component`]

#### Added

- `isLoading` can be also applied to a content-child so have it visible during load/building-time of the needed component
- `[showError]="false"` if any of the error shouldn't be displayed

## [0.1.0]

Start of Changelog
