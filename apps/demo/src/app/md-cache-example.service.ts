import { MarkdownCacheService } from '@gewd/markdown/service';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as localforage from 'localforage';
import { simpleHash } from '@gewd/markdown/utils';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class MdCacheExampleService extends MarkdownCacheService {
  private localForageCache: LocalForage;
  private enabled = true;

  constructor (@Inject(PLATFORM_ID) platformId: Object) {
    super();

    // skip localforage calls during pre-render step
    this.enabled = isPlatformBrowser(platformId);

    if (this.enabled) {
      this.createInstance();
    }
  }

  async saveCachedPart (type: string, raw: string, rendered: string) {
    if (!this.enabled) {
      return;
    }

    await this.localForageCache.ready();
    const hash = simpleHash(raw);

    this.localForageCache.setItem(`${type}/${hash}`, rendered);
  }

  async getCachedPart (type: string, raw: string): Promise<string> {
    if (!this.enabled) {
      return;
    }

    await this.localForageCache.ready();
    const hash = simpleHash(raw);

    const result = await this.localForageCache.getItem<string>(`${type}/${hash}`);

    return result;
  }

  async getCached (rawMarkdown: string): Promise<string> {
    if (!this.enabled) {
      return;
    }

    await this.localForageCache.ready();
    const hash = simpleHash(rawMarkdown);

    const result = await this.localForageCache.getItem<string>(hash);

    return result;
  }

  async saveCached (rawMarkdown: string, renderedMarkdown: string) {
    if (!this.enabled) {
      return;
    }

    await this.localForageCache.ready();
    const hash = simpleHash(rawMarkdown);
    this.localForageCache.setItem(hash, renderedMarkdown)
  }

  private async createInstance() {
    this.localForageCache = localforage.createInstance({
      name: 'markdown-cache',
    });
  }
}
