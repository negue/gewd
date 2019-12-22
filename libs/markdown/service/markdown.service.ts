import { Inject, Injectable, Optional } from '@angular/core';

import { Remote, wrap } from 'comlink';
import {
  GetWorkerPayload,
  LoadMarkdownWorkerInjectorToken,
  LoadMermaidInjectorToken,
  MarkdownWorker
} from '@gewd/markdown/contracts';

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
               private readonly loadMermaidUrl: string
  ) {
    this.workerProxy = wrap<MarkdownWorker>( workerPayload.getWorker());
    if (workerPayload.options) {
      this.workerProxy.init(workerPayload.options);
    }

    if (loadMermaidUrl) {
      this.canTriggerMermaidLoad = true;
    }
  }

  public async compileMarkdown (str: string, triggerMermaid = false): Promise<string> {
    const parsedMarkdown = await this.workerProxy.compile(str);

    if (triggerMermaid && parsedMarkdown.match(/class="mermaid"/)) {
      this.triggerMermaidLoadScript();
    }

    return parsedMarkdown;
  }

  private triggerMermaidLoadScript () {
    if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
      this.mermaidAddedToPage = true;

      const scriptTag = document.createElement('script');
      scriptTag.src = this.loadMermaidUrl;
      // trigger mermaid init
      scriptTag.onload = () =>{
        const config = {
          startOnLoad:true,
          flowchart:{
            useMaxWidth:false,
            htmlLabels:true
          }
        };

        const mermaid = (window as any).mermaid;
        mermaid.initialize(config);
        mermaid.init();


        mermaid.parseError = function(err){
          console.error("MarkdownService, Mermaid: ", err);
        };
      };

      document.body.appendChild(scriptTag);
    }

    if (this.canTriggerMermaidLoad && this.mermaidAddedToPage) {
      setTimeout(() => {
        const mermaidInstance = (window as any).mermaid;
        if (mermaidInstance) {
          mermaidInstance.init();
        }
      }, 600);
    }
  }
}
