import { MarkdownCacheService } from '@gewd/markdown/service';
import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import { simpleHash } from '@gewd/markdown/utils';

@Injectable()
export class MdCacheExampleService extends MarkdownCacheService {
  private localForageCache: LocalForage;

  constructor () {
    super();
    this.createInstance();
  }

  async saveCachedPart (type: string, raw: string, rendered: string) {
    await this.localForageCache.ready();
    const hash = simpleHash(raw);

    this.localForageCache.setItem(`${type}/${hash}`, rendered);
  }

  async getCachedPart (type: string, raw: string): Promise<string> {
    await this.localForageCache.ready();
    const hash = simpleHash(raw);

    const result = await this.localForageCache.getItem<string>(`${type}/${hash}`);

    return result;
  }

  async getCached (rawMarkdown: string): Promise<string> {
    await this.localForageCache.ready();
    const hash = simpleHash(rawMarkdown);

    const result = await this.localForageCache.getItem<string>(hash);

    return result;
  }

  async saveCached (rawMarkdown: string, renderedMarkdown: string) {
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
