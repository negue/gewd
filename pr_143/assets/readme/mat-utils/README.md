# `@gewd/mat-utils`

Collection of functions around Angular Material Components and some other utils

[![NPM Version][npm-img]][npm-url]
[![Package Size][size-img]][size-url]

[npm-img]: https://img.shields.io/npm/v/@gewd/mat-utils.svg?
[npm-url]: https://www.npmjs.com/package/@gewd/mat-utils
[size-img]: https://img.shields.io/bundlephobia/minzip/@gewd/mat-utils.svg
[size-url]: https://bundlephobia.com/result?p=@gewd/mat-utils

## `@gewd/mat-utils/material-icons`

Shortcut to register the material icons

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    RegisterIconsModule.register({
      pathToIcons: './assets/material_icons',
      iconArray: [
        'add',
        'art_track',
      ]
    }),
    MatIconModule
  ]
})
```
