import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  LoadMermaidInjectorToken,
  MarkdownModule,
  LoadMarkdownWorkerInjectorToken,
  GetWorkerPayload
} from '@gewd/markdown';
import { FormsModule } from '@angular/forms';

const marked =  () =>  new Worker('./markdown.worker.ts', { type: 'module' });

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownModule, FormsModule],
  providers: [
    {
      provide: LoadMarkdownWorkerInjectorToken,
      useValue: {
        getWorker: marked
      } as GetWorkerPayload
    },
    {
      provide: LoadMermaidInjectorToken,
      useValue: 'mermaid.min.js'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
