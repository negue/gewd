# Changelog

## [1.0.0] - 2023.09.16

Upgraded Package to use newer Angular Version (^16.2.5)


## [0.4.2] - 2020-12-15

#### Feature
- `<gewd-markdown>` now has the event-emitter `onLinkClick` to prevent links (or react on them)
- Extracted `linkRendererTargetBlank` & `linkRendererWithFavIcon` from `marked.prism.worker.ts` to `@gewd/markdown/worker-function`
  > See `marked.prism.worker.ts` for the newest version
  
  `linkRendererWithFavIcon` allows you to use Googles Fav-Icon Service and prepend that before a link 

## [0.4.1] - 2020-09-07

#### Feature
- `PrismOptions` now has the option `highlightMarkdownCode`
  > This highlights codes inside your markdown highlight, i.e. 
  > ```markdown
  > ```js
  > const code = true;
  > \```
  > ```
  
  This feature-flag will be probably only used for the `Highlight-Editor`

#### Internal

- Added interfaces for a prism-specific workers
- Extracted `highlightCode` from `marked.prism.worker.ts` to `@gewd/markdown/worker-function` / `prism.functions.ts`
  > See `marked.prism.worker.ts` for the newest version



## [0.4.0] - 2020-03-18

#### Markdown SCSS
- Added a mixin to get a default markdown styling, add to your app's `styles.scss`
  ```scss 
  gewd-markdown {
    @import "~@gewd/markdown/markdown.mixin";
  
    @include markdownCss();
    @include markdownDefaultDarkColor();
  }
  ```
- colors can be changed via css `var(--)`

#### Prerender: 
- multiple fixes to run `@nguniversal/` prerender steps
  <br>*note: parsing markdowns or using the `WebWorker` can't be executed during pre-render, this still happens during runtime*

#### :boom: Breaking changes:
- merged InjectionTokens as `MarkdownOptionsInjectorToken` and moved to a different path `@gewd/markdown/service`
- mermaid options under `MarkdownOptionsInjectorToken` now are:
  ```ts
  'mermaid.min.js',
  mermaidOptions: {
    'neutral',
    // and others see  https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults
  }
  ```

## [0.3.0] - 2020-02-25

#### Optimized
- `mermaid.js` calls

### [`<gewd-markdown>`]

#### Added
- `[useCache]="true"` this will use methods `getCached` and `saveCached` of `MarkdownCacheService` 
  
  You can provide your own implementation of `MarkdownCacheService`:
    - to either cache the whole markdown
    - or the markdown parts (currently only mermaidjs)
- `[showRawMd]="false"` shows the raw markdown first before showing the rendered text
- `[allowMermaid]="false"`

### [`@gewd/markdown/utils`]

#### Added
- `simpleHash(text)`

## [0.2.0] - 2019-12-23

- :sparkles: Emoji Support inside Markdown-Worker
  Can be also used alone: 
  - `@gewd/markdown/emoji-map` 
     - `EMOJI_MAP`
     - `colonToUnicode(colonName)`
- :zap: more entry points to optimize builds
  - `@gewd/markdown/utils`
  - `@gewd/markdown/service`
  - `@gewd/markdown/worker-functions`
  
### :boom: Breaking changes:
- renamed `WorkerService` to `MarkdownService`
- `MarkdownService.compileMarkdown` added `triggerMermaid = false` argument


## [0.1.0] - 2019-12-16

Start of Changelog
