import { Inject, Injectable, InjectionToken, NgZone, Optional, PLATFORM_ID } from '@angular/core';
import { MarkdownServiceOptions, MarkdownWorker, PrismServiceOptions, PrismWorker } from '@gewd/markdown/contracts';
import { MarkdownOptionsInjectorToken } from '@gewd/markdown/service';
import { isPlatformBrowser } from '@angular/common';
import { Remote, wrap } from 'comlink';

export const PrismOptionsInjectorToken = new InjectionToken<PrismServiceOptions>('MarkdownOptionsInjectorToken');

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  private workerProxy: Remote<PrismWorker>;

  constructor(@Optional() @Inject(MarkdownOptionsInjectorToken)
              readonly markdownOptions: MarkdownServiceOptions,
              @Optional() @Inject(PrismOptionsInjectorToken)
              readonly prismOptions: PrismServiceOptions,

               @Inject(PLATFORM_ID) platformId: Object,
              private ngZone: NgZone
              ) {
     if (isPlatformBrowser(platformId)) {
       if (markdownOptions) {
         const wrappedWorker = wrap<MarkdownWorker>(markdownOptions.getWorker());
         wrappedWorker.init(markdownOptions.options);

         this.workerProxy = wrappedWorker;
       }

       if (prismOptions) {
         this.workerProxy  = wrap<PrismWorker>(prismOptions.getWorker());
         this.workerProxy.initPrism(prismOptions.options);
       }
    }
  }

  public highlightCode (code: string, lang: string): Promise<string> {
    if (!this.workerProxy) {
      return;
    }

   return this.ngZone.runOutsideAngular(async () => {
      // needed?
      return await this.workerProxy.highlight(code, lang)
    });
  }
}
