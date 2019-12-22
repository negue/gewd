# `@gewd/markdown`

Angular Markdown render component, which uses a worker-process.
Only loads the worker, prism or additional languages once used inside the markdown.

[![NPM Version][npm-img]][npm-url]
[![Package Size][size-img]][size-url]

[npm-img]: https://img.shields.io/npm/v/@gewd/markdown.svg?
[npm-url]: https://www.npmjs.com/package/@gewd/markdown
[size-img]: https://img.shields.io/bundlephobia/minzip/@gewd/markdown.svg
[size-url]: https://bundlephobia.com/result?p=@gewd/markdown

## Example
[![Visual Example of example.md][example_md_img]][example_md_url]

[example_md_img]: ../../example-images/example_md.png
[example_md_url]: ../../apps/demo/src/assets/example.md


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
   @NgModule({
     declarations: [AppComponent],
     imports: [
       /* ...*/,
       MarkdownModule
     ],
     providers: [
       {
         provide: LoadMarkdownWorkerInjectorToken,
         useValue: {
           getWorker: marked,
           options: {
             prism: {
               ...DEFAULT_PRISM_OPTIONS,
   
               /** if needed **/
               languageFileType: 'min.js',  // if you want to use the minified assets
               languageMap: {               // alias to load the real file
                 ts: 'typescript',          // default
                 cs: 'csharp'               // additional
               }
             }
           }
         } as GetWorkerPayload
       },
     ]
   })
   ```
5. copy the content of one the included workers into your created one

## Usage

.. as component
```html 
<gewd-markdown [markdown]="'your markdown or var'">
</gewd-markdown>
```

.. as Service, add `MarkdownService` to your needed component and call:
```ts 

  constructor (private service: MarkdownService) {

  }

  async someMethod () {
     const result = await this.service.compileMarkdown('some **markdown**');
  }
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

 
