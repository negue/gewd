# @gewd/markdown

[![NPM Version][client-npm-img]][client-npm-url]
[![Package Size][client-size-img]][client-size-url]

[client-npm-img]: https://img.shields.io/npm/v/@gewd/markdown.svg?
[client-npm-url]: https://www.npmjs.com/package/@gewd/markdown
[client-size-img]: https://img.shields.io/bundlephobia/minzip/@gewd/markdown.svg
[client-size-url]: https://bundlephobia.com/result?p=@gewd/markdown

Angular Markdown render component, which uses a worker-process.
Only loads the worker, prism or additional languages once used inside the markdown.

## Install

1. `npm install @gewd/markdown --save`
2. add `MarkdownModule` to your AppModule (or the one where you want to use it) 
3. In your app folder `ng g webWorker markdown`
4. ```ts
   const markdownWorker = () => new Worker('./markdown.worker.ts', {
     name: 'markdown',
     type: "module"
   });

   /* in your app module */
   
     providers: [
       {
         provide: LoadMarkdownWorkerInjectorToken,
         useValue: {
           getWorker: markdownWorker
         }
       }
     ]
   ```
5. copy the content of one the included workers into your created one

## Usage

```html 
<gewd-markdown [markdown]="'your markdown or var'">
</gewd-markdown>
```

## Included Workers
|Worker|Description|Requirements|
|----|----|-----|
|`markdown-it.worker.ts`| If you prefer markdown-it and its plugins |`npm install markdown-it --save`|
|`marked.prism.worker.ts`|Marked, needs xss-package to sanitize the generated HTML |`npm install marked xss prism --save`|
|`marked.worker.ts`|Marked, needs xss-package to sanitize the generated HTML |`npm install marked xss --save`|

## mermaid.js support (using marked)

`npm install mermaid --save`

in `angular.json` in your app's `assets: [` array 
```json
{
  "glob": "mermaid.min.js",
  "input": "node_modules/mermaid/dist/",
  "output": "./"
}
```

```ts
    /* in your app module */
   
     providers: [
       {
         provide: LoadMermaidInjectorToken,
         useValue: 'mermaid.min.js' // path to where your mermaid.min.js-asset was copied
       }
     ]
```

## prismjs support (using marked)

> Note: If you don't need it use the content of marked.worker.ts

`npm install prismjs --save`

in `angular.json` in your app's `assets: [` array 
```json
{
  "glob": "prism-@(c|csharp).js",
  "input": "./node_modules/prismjs/components",
  "output": "/assets/prism/"
}
```
in your app's `styles: [` (or any other prismjs theme)
```
  "node_modules/prismjs/themes/prism-okaidia.css"
```


add the languages you want by changing `@(c|csharp)`, if you just want to copy all languages use `*`

 
