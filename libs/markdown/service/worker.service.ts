import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

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
export class WorkerService {

  private canTriggerMermaidLoad = false;
  private mermaidAddedToPage = false;
  private workerProxy: Remote<MarkdownWorker>;
  constructor (@Inject(LoadMarkdownWorkerInjectorToken)
               private readonly workerPayload: GetWorkerPayload,
               @Inject(LoadMermaidInjectorToken) @Optional()
               private readonly loadMermaidUrl: string
  ) {
    this.workerProxy = wrap<MarkdownWorker>( workerPayload.getWorker());

    if (loadMermaidUrl) {
      this.canTriggerMermaidLoad = true;
    }
  }

  public async compileMarkdown (str: string): Promise<string> {
    const parsedMarkdown = await this.workerProxy.compile(str);

    if (parsedMarkdown.match(/class="mermaid"/)) {
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


        mermaid.parseError = function(err,hash){
          console.info(err);
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
