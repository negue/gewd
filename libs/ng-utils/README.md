# `@gewd/ng-utils`

Utils for your Angular App :)

[![NPM Version][npm-img]][npm-url]
[![Package Size][size-img]][size-url]

[npm-img]: https://img.shields.io/npm/v/@gewd/ng-utils.svg?
[npm-url]: https://www.npmjs.com/package/@gewd/ng-utils
[size-img]: https://img.shields.io/bundlephobia/minzip/@gewd/ng-utils.svg
[size-url]: https://bundlephobia.com/result?p=@gewd/ng-utils

## `@gewd/ng-utils/dynamic-portal`

Create a dynamic portal, e.g. in your header, and fill it with a template content from lazy-loaded a route-component.

```html
<!-- define your portal source, in any active component -->
<ng-template dynamicPortalSource="yourPortalKey">
  Any content you want to show in your targeted dynamic portal
</ng-template>

<!-- some where else in your app, different component  -->
<dynamic-portal key="yourPortalKey" class="your-style">
  Dynamic Portal Placeholder, until the template for `yourPortalKey` not been set
</dynamic-portal>
```

![dynamic portal example](https://user-images.githubusercontent.com/842273/71450280-25562380-275f-11ea-9c33-62bc8d282270.gif)


## `@gewd/ng-utils/ng-inspect`

Lets you inspect the properties of a component.
You can also edit string/number/bool properties.

Add this to your `app.component.html`:
```html
<ng-inspect></ng-inspect>
```

Hold ctrl so select a component.
