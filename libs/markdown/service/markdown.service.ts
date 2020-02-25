import { Inject, Injectable, Optional } from '@angular/core';

import { Remote, wrap } from 'comlink';
import {
  GetWorkerPayload,
  LoadMarkdownWorkerInjectorToken,
  LoadMermaidInjectorToken,
  MarkdownWorker
} from '@gewd/markdown/contracts';
import { MarkdownCacheService } from './markdown-cache.service';


const compiledRegex = /<div class="mermaid">([\s\S]*?)<\/div>/mg;
const _mermaidNode = document.createElement('div');
_mermaidNode.hidden = true;

let renderId = 0;

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private canTriggerMermaidLoad = false;
  private mermaidAddedToPage = false;
  private workerProxy: Remote<MarkdownWorker>;

  constructor (@Inject(LoadMarkdownWorkerInjectorToken)
               private readonly workerPayload: GetWorkerPayload,
               @Inject(LoadMermaidInjectorToken) @Optional()
               private readonly loadMermaidUrl: string,
               private readonly cache: MarkdownCacheService
  ) {
    this.workerProxy = wrap<MarkdownWorker>(workerPayload.getWorker());
    if (workerPayload.options) {
      this.workerProxy.init(workerPayload.options);
    }

    if (loadMermaidUrl) {
      this.canTriggerMermaidLoad = true;
    }
  }

  public async compileMarkdown (str: string, triggerMermaid = false): Promise<string> {
    let parsedMarkdown = await this.workerProxy.compile(str);

    if (triggerMermaid && parsedMarkdown.match(/class="mermaid"/)) {
      await this.triggerMermaidLoadScript();

      const mermaidInstance = (window as any).mermaid;
      if (mermaidInstance) {
        const matched = parsedMarkdown.match(compiledRegex);

        for (const mermaid of matched) {
          const innerContent = mermaid.replace(/&gt;/mg, '>')
            .replace('<div class="mermaid">', '')
            .replace('</div>', '');

          let rendered = '';

          const cached = await this.cache.getCachedPart('mermaid', innerContent);

          if (!!cached) {
            rendered = cached;
          } else {
            rendered = mermaidInstance.render(`sub${renderId++}`, innerContent,
              () => { });
            this.cache.saveCachedPart('mermaid', innerContent, rendered);
          }

          parsedMarkdown = parsedMarkdown.replace(mermaid, `<code class="mermaid">${rendered}</code>`);
        }
      }
    }

    return parsedMarkdown;
  }

  private triggerMermaidLoadScript () {
    if (!this.canTriggerMermaidLoad) {
      return Promise.resolve();
    }

    if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
      this.mermaidAddedToPage = true;
      document.body.appendChild(_mermaidNode);

      return new Promise((resolve, reject) => {

        const scriptTag = document.createElement('script');
        scriptTag.src = this.loadMermaidUrl;
        // trigger mermaid init
        scriptTag.onload = () => {
          const config = {
            // startOnLoad:true,
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true
            }
          };

          const mermaid = (window as any).mermaid;
          mermaid.initialize(config);

          resolve();

          mermaid.parseError = function(err) {
            console.error('MarkdownService, Mermaid: ', err);
          };
        };

        document.body.appendChild(scriptTag);

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
