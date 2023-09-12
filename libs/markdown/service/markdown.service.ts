import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { Remote, wrap } from 'comlink';
import { DEFAULT_MERMAID_OPTIONS, MarkdownServiceOptions, MarkdownWorker } from '@gewd/markdown/contracts';
import { MarkdownCacheService } from './markdown-cache.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MarkdownOptionsInjectorToken } from './injection-token';
import { simpleHash } from '@gewd/markdown/utils';


const compiledRegex = /<div class="mermaid">([\s\S]*?)<\/div>/mg;

let renderId = 0;

/** @dynamic - allows Document in ngc build */
@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private canTriggerMermaidLoad = false;
  private mermaidAddedToPage = false;
  private workerProxy: Remote<MarkdownWorker>;
  private mermaidCacheKey = '';
  private mermaidConfig = Object.assign({},
    DEFAULT_MERMAID_OPTIONS,
    this.markdownOptions.mermaidOptions);


  constructor (@Inject(MarkdownOptionsInjectorToken)
               readonly markdownOptions: MarkdownServiceOptions,
               private readonly cache: MarkdownCacheService,
               @Inject(DOCUMENT)
               private document: Document,
               @Inject(PLATFORM_ID) platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      this.workerProxy = wrap<MarkdownWorker>(markdownOptions.getWorker());
      if (markdownOptions.options) {
        this.workerProxy.init(markdownOptions.options);
      }
    }
    if (markdownOptions.mermaidPath) {
      this.canTriggerMermaidLoad = true;
      this.mermaidCacheKey = `mermaid_${this.mermaidConfig.theme}_${simpleHash(this.mermaidConfig.themeCSS) }`
    }
  }

  public async compileMarkdown (str: string, triggerMermaid = false): Promise<string> {
    if (!this.workerProxy) {
      return;
    }

    let parsedMarkdown = await this.workerProxy.compile(str);

    if (triggerMermaid && parsedMarkdown.match(/class="mermaid"/)) {
      await this.triggerMermaidLoadScript();

      const mermaidInstance = (window as any).mermaid;
      if (mermaidInstance) {
        const matched = parsedMarkdown.match(compiledRegex);

        for (const mermaid of matched) {
          const innerContent = this.cleanUpMermaidRaw(mermaid);

          let rendered = '';

          const cached = await this.cache.getCachedPart(this.mermaidCacheKey, innerContent);

          if (!!cached) {
            rendered = cached;
          } else {
            let errorStr = "";
            try {
              mermaidInstance.parse(innerContent);
            } catch (e) {
              errorStr = e.str;
            }

            if (!errorStr) {
              rendered = mermaidInstance.render(`sub${renderId++}`, innerContent,
                () => {
                });
              this.cache.saveCachedPart(this.mermaidCacheKey, innerContent, rendered);
            } else {
              rendered = `<pre>${errorStr}\n${innerContent}</pre>`;
            }
          }

          parsedMarkdown = parsedMarkdown.replace(mermaid, `<pre><code class="mermaid">${rendered}</code></pre>`);
        }
      }
    }

    return parsedMarkdown;
  }

  private cleanUpMermaidRaw (mermaidRaw) {
    return mermaidRaw
      .replace(/&gt;/mg, '>')
      .replace(/&lt;/mg, '<')
      .replace('<div class="mermaid">', '')
      .replace('</div>', '');
  }

  private triggerMermaidLoadScript () {
    if (!this.canTriggerMermaidLoad) {
      return Promise.resolve();
    }

    if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
      this.mermaidAddedToPage = true;
      const _mermaidNode = this.document.createElement('div');
      _mermaidNode.hidden = true;

      this.document.body.appendChild(_mermaidNode);

      return new Promise<void>((resolve, reject) => {

        const scriptTag = this.document.createElement('script');
        scriptTag.src = this.markdownOptions.mermaidPath;
        // trigger mermaid init
        scriptTag.onload = () => {

          const mermaid = (window as any).mermaid;
          mermaid.initialize(this.mermaidConfig);

          resolve();

          mermaid.parseError = function(err) {
            console.error('MarkdownService, Mermaid: ', err);
          };
        };

        this.document.body.appendChild(scriptTag);
      });
    }

    if (this.canTriggerMermaidLoad && this.mermaidAddedToPage) {
      const mermaidInstance = (window as any).mermaid;
      if (mermaidInstance) {
        return Promise.resolve();
      }

      return Promise.reject();
    }
  }
}
