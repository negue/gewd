# Changelog

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
