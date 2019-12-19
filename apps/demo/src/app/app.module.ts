import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MarkdownModule,
} from '@gewd/markdown';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetWorkerPayload, LoadMarkdownWorkerInjectorToken, LoadMermaidInjectorToken } from '@gewd/markdown/contracts';

const marked = () => new Worker('./markdown.worker.ts', { type: 'module' });

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MarkdownModule, FormsModule,
    MatExpansionModule, MatTabsModule,
    BrowserAnimationsModule
  ],
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
export class AppModule {
}
