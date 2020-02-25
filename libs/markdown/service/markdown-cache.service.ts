import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownCacheService {
  public getCached(rawMarkdown: string): Promise<string> {
    return Promise.resolve('');
  }

  public saveCached(rawMarkdown: string, renderedMarkdown: string) {

  }

  public getCachedPart(type: string, raw: string): Promise<string> {
    return Promise.resolve('');
  }

  public saveCachedPart(type: string, raw: string, rendered: string) {

  }
}
