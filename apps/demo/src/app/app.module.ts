import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownModule } from '@gewd/markdown';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_PRISM_OPTIONS, MarkdownOptions } from '@gewd/markdown/contracts';

import './lazy.registration';
import { GewdLazyLoaderModule } from '@gewd/lazy/loader';
import { MatButtonModule } from '@angular/material/button';
import { DynamicPortalModule } from '@gewd/ng-utils/dynamic-portal';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownCacheService } from '@gewd/markdown/service/markdown-cache.service';
import { MdCacheExampleService } from './md-cache-example.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownOptionsInjectorToken } from '@gewd/markdown/service';
import { MarkdownToolbarComponent } from './markdown-toolbar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownExtendedModule } from '@gewd/markdown/extended';
import { TestCompHolderModule } from './test-comp-holder/test-comp-holder.module';
import { XkcdModule } from './xkcd/xkcd.module';
import { ChuckNorrisModule } from './chuck-norris/chuck-norris.module';
import { MatInputModule } from '@angular/material/input';
import { MyComp } from './lazy-wrapper/test-comp';


@NgModule({
  declarations: [AppComponent, MarkdownToolbarComponent, MyComp],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([]),
    HttpClientModule,
    MarkdownModule, FormsModule,
    MatExpansionModule, MatTabsModule,
    BrowserAnimationsModule,
    GewdLazyLoaderModule,
    MatButtonModule,
    DynamicPortalModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MarkdownExtendedModule,
    TestCompHolderModule,
    XkcdModule,
    ChuckNorrisModule,
  ],
  providers: [
    {
      provide: MarkdownOptionsInjectorToken,
      useValue: {
        getWorker: () => new Worker('./markdown.worker.ts', { type: 'module' }),
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
        },
        mermaidPath: 'mermaid.min.js',
        mermaidOptions: {
          theme: 'neutral',
        }
      } as MarkdownOptions
    },
    MdCacheExampleService,
    {
      provide: MarkdownCacheService,
      useExisting: MdCacheExampleService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
