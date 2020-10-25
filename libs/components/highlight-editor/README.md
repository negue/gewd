# `@gewd/components`

Angular Components

[![NPM Version][npm-img]][npm-url]

[npm-img]: https://img.shields.io/npm/v/@gewd/components.svg?
[npm-url]: https://www.npmjs.com/package/@gewd/components


## Features:

## Install

1. `npm install @gewd/markdown @gewd/components @gewd/ng-utils comlink prismjs --save`
2. add `HighlightEditorModule` to your AppModule (or the one where you want to use it) 
3. In your app folder `ng g webWorker prism`
4. > Note: if you already have a markdown worker / module added, you don't need to use another worker, then you can skip this step

```ts
   const prismWorker = () => new Worker('./prism.worker.ts', {
     name: 'markdown',
     type: "module"
   });

   /* in your app module */
   @NgModule({
     declarations: [AppComponent],
     imports: [
       /* ...*/,
       HighlightEditorModule
     ],
     providers: [
       {
         provide: PrismOptionsInjectorToken,
         useValue: {
        getWorker: prismWorker,
        options: {
          ...DEFAULT_PRISM_OPTIONS,

          /** if needed **/
          languageFileType: 'min.js',  // if you want to use the minified assets
          languageMap: {               // alias to load the real file
            ts: 'typescript',          // default
            cs: 'csharp'               // additional
          },
          highlightMarkdownCode: true,
          additionalPluginPaths: [
            // optional
            'assets/prism/prism-css-extras.min.js',  // needed for the inline color
            'assets/prism/prism-plugin-inline-color.worker-func.js',
            'assets/prism/prism-plugin-bracket-match.worker-func.js'
          ]
        }
      } as PrismServiceOptions
       },
     ]
   })
   ```
5. copy the content of one the included workers into your created one

6. add prism-js files to the output folder, add these in your `angular.json` to your app assets array:

```json
{
                "glob": "prism-@(c|csharp|css-extras|json|typescript|markdown).min.js",
                "input": "./node_modules/prismjs/components",
                "output": "/assets/prism/"
              },
              {
                "glob": "prism-plugin-(inline-color|bracket-match).worker-func.js",
                "input": "./node_modules/@gewd/components/highlight-editor",
                "output": "/assets/prism/"
              },
```

7. add styles to your app styles array in the `angular.json`

```json
"styles": [
              "node_modules/prismjs/themes/prism-okaidia.css",
              "node_modules/prismjs/plugins/inline-color/prism-inline-color.css",
              "node_modules/@gewd/components/highlight-editor/bracket-match.css"
            ],
```

## Example Code

