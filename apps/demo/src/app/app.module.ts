import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownModule } from '@gewd/markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_PRISM_OPTIONS, MarkdownServiceOptions } from '@gewd/markdown/contracts';

import './lazy.registration';
import { GewdLazyLoaderModule } from '@gewd/lazy/loader';
import { MatButtonModule } from '@angular/material/button';
import { DynamicPortalModule } from '@gewd/ng-utils/dynamic-portal';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownCacheService, MarkdownOptionsInjectorToken } from '@gewd/markdown/service';
import { MdCacheExampleService } from './md-cache-example.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownToolbarComponent } from './markdown-toolbar.component';
import { NgErrorOverlayModule } from '@gewd/ng-utils/ng-error-overlay';
import { environment } from '../environments/environment';
import { HighlightEditorModule } from '@gewd/components/highlight-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CustomFormControlModule } from '@gewd/components/custom-form-control';
import {RegisterIconsModule} from "../../../../libs/mat-utils/material-icons";
import {MatIconModule} from "@angular/material/icon";

const marked = () => new Worker('./markdown.worker.ts', { type: 'module' });

@NgModule({
  declarations: [AppComponent, MarkdownToolbarComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    RouterModule.forRoot([]),
    HttpClientModule,
    MarkdownModule, FormsModule,
    ReactiveFormsModule,
    MatExpansionModule, MatTabsModule,
    BrowserAnimationsModule,
    GewdLazyLoaderModule,
    MatButtonModule,
    DynamicPortalModule,
    MatProgressBarModule,
    NgErrorOverlayModule,
    ...environment.modules,
    HighlightEditorModule,
    MatSelectModule,
    MatInputModule,
    CustomFormControlModule,
    RegisterIconsModule.register({
      pathToIcons: './assets/material_icons',
      iconArray: [
        'add',
        'art_track',
      ]
    }),
    MatIconModule
  ],
  providers: [
    {
      provide: MarkdownOptionsInjectorToken,
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
            },
            highlightMarkdownCode: true,
            additionalPluginPaths: [
              'assets/prism/prism-css-extras.min.js',  // needed for the inline color
              'assets/prism/prism-plugin-inline-color.worker-func.js',
              'assets/prism/prism-plugin-bracket-match.worker-func.js'
            ]
          }
        },
        mermaidPath: 'mermaid.min.js',
        mermaidOptions: {
          theme: 'neutral',
        }
      } as MarkdownServiceOptions
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
