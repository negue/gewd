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
import {
  DEFAULT_PRISM_OPTIONS,
  GetWorkerPayload,
  LoadMarkdownWorkerInjectorToken,
  LoadMermaidInjectorToken
} from '@gewd/markdown/contracts';

import './lazy.registration';
import { GewdLazyLoaderModule } from '@gewd/lazy/loader';
import { MatButtonModule } from '@angular/material/button';
import { DynamicPortalModule } from '@gewd/ng-utils/dynamic-portal';

const marked = () => new Worker('./markdown.worker.ts', { type: 'module' });

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MarkdownModule, FormsModule,
    MatExpansionModule, MatTabsModule,
    BrowserAnimationsModule,
    GewdLazyLoaderModule, MatButtonModule, DynamicPortalModule
  ],
  providers: [
    {
      provide: LoadMarkdownWorkerInjectorToken,
      useValue: {
        getWorker: marked,
        options: {
          prism: {
            ...DEFAULT_PRISM_OPTIONS,

            /** if needed **/
            languageFileType: 'min.js',  // if you want to use the minified assets
            languageMap: {               // alias to load the real file
              ts: 'typescript',          // default
              cs: 'csharp'               // additional
            }
          }
        }
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
