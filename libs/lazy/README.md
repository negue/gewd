# `@gewd/lazy`

Collection of functions around Angular Lazy-Loading Components and some other utils

[![NPM Version][npm-img]][npm-url]
[![Package Size][size-img]][size-url]

[npm-img]: https://img.shields.io/npm/v/@gewd/lazy.svg?
[npm-url]: https://www.npmjs.com/package/@gewd/lazy
[size-img]: https://img.shields.io/bundlephobia/minzip/@gewd/lazy.svg
[size-url]: https://bundlephobia.com/result?p=@gewd/lazy

## `@gewd/lazy/utils`

Like the C# Lazy<T>-Class
```ts
// create
var myLazy = Lazy.create(() => import(/*...*/))

// callback/promise will be only executed once `.getValue()` is called
const result = await myLazy.getValue();

// once the value was loaded, it'll just use this cached promise
```

## Lazy Components

Register the lazy component, without a module

```ts
DynamicLoaderRegistry.LazyComponents = {
  'test-comp': new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
};
```

Use it inside your app with:

```html
<gewd-lazy-component 
   [componentInputs]="{ testProp: 'Component Binding from outside' }"
   component="test-comp"
>
   Normal content that is visible the content isn't loaded.

   <div isLoading>
      This content will be visible while the component is loading / being created.
   </div>                  
</gewd-lazy-component>
```

Properties:

|Prop|Type|Description|
| ---|----|-----------|
|`component`|string|Key used in `DynamicLoaderRegistry.LazyComponents`|
|`componentInputs`|InputMap|Key-Value map of the lazy loaded component properties|
|`componentOutputs`|OutputMap| Map of outputs|
|`componentCreated`|EventEmitter| Event when the component is created |
|`componentLoading`|EventEmitter| Event when the component is loading |

Useful for components that don't need any other module's or using 3rd party web-components

> Note, using components of the host-module not working yet. Got a fix ? Open a PR :+1: 

## Lazy Module Components

This is for component that needs other components in it, e.g. Angular Material.

```ts
DynamicLoaderRegistry.LazyModuleComponents = {
  'test-module': {
    load: new Lazy<any>(
      () => import('./lazy-wrapper/test-module-comp')
      .then(({TestModule}) => TestModule)
    )
  },
};
```

Your module need to implement `LazyModule`

```ts
@NgModule({
  declarations: [
    MyModuleComp // Your Component
  ],
  imports: [
    CommonModule,
    MatButtonModule // any dependent module
  ]
})
export class TestModule implements LazyModule {
  getComponents (): LazyModuleComponentInfo[] {
    return [
      {
        name: 'MyModuleComp',  // key to access it
        componentType: MyModuleComp  // your component
      }
    ];
  }
}
```


Use it inside your app with:

```html
<gewd-lazy-module-component
    [componentInputs]="{ testProp: 'Module Component Example' }"
    [componentOutputs]="outputBinding"
    moduleAlias="test-module"
    component="MyModuleComp"
    >
   Normal content that is visible the content isn't loaded.

   <div isLoading>
      This content will be visible while the component is loading / being created.
   </div>  
</gewd-lazy-module-component>
```

Properties:

|Prop|Type|Description|
| ---|----|-----------|
|`moduleAlias`|string|Key used in `DynamicLoaderRegistry.LazyModuleComponents`|
|`component`|string|Key used in `getComponents`|
|`componentInputs`|InputMap|Key-Value map of the lazy loaded component properties|
|`componentOutputs`|OutputMap| Map of outputs|
|`componentCreated`|EventEmitter| Event when the component is created |
|`componentLoading`|EventEmitter| Event when the component is loading |

## Articles / Tutorials

- https://dev.to/negue/lazy-loaded-components-in-angular-4lnd
- https://dev.to/negue/lazy-loaded-components-2-c7e
- https://dev.to/negue/lazy-loaded-components-3-extending-the-loader-59j5
