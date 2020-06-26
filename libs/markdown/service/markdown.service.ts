import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { Remote, wrap } from 'comlink';
import { MarkdownOptions, MarkdownWorker } from '@gewd/markdown/contracts';
import { MarkdownCacheService } from './markdown-cache.service';
import { isPlatformBrowser } from '@angular/common';
import { MarkdownOptionsInjectorToken } from './injection-token';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private workerProxy: Remote<MarkdownWorker>;

  constructor (@Inject(MarkdownOptionsInjectorToken)
               readonly markdownOptions: MarkdownOptions,
               private readonly cache: MarkdownCacheService,
               @Inject(PLATFORM_ID) platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      this.workerProxy = wrap<MarkdownWorker>(markdownOptions.getWorker());
      if (markdownOptions.options) {
        this.workerProxy.init(markdownOptions.options);
      }
    }
  }

  public async compileMarkdown (str: string, xssSettings = {}): Promise<string> {
    if (!this.workerProxy) {
      return;
    }

    const parsedMarkdown = await this.workerProxy.compile(str, JSON.stringify(xssSettings));

    return parsedMarkdown;
  }
}
