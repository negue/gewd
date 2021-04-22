import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownModule } from '@gewd/markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_PRISM_OPTIONS, MarkdownServiceOptions } from '@gewd/markdown/contracts';

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
import {RegisterIconsModule} from "../../../../libs/mat-utils/material-icons";
import {MatIconModule} from "@angular/material/icon";
import { ExamplePanelComponent } from './example-panel/example-panel.component';
import {CustomFormControlModule} from "@gewd/mat-utils/custom-form-control";
import {Lazy} from "@gewd/lazy/utils";

const marked = () => new Worker('./markdown.worker.ts', { type: 'module' });

const markdownExampleLazy =new Lazy(() => import(/* webpackChunkName: "markdown-example-module" */ './examples/markdown-example/markdown-example.module')
  .then(({MarkdownExampleModule}) => MarkdownExampleModule));

const lazyLoadExampleLazy =new Lazy(
  () => import(/* webpackChunkName: "lazyload-example-module" */ './examples/lazyload-example/lazyload-example.module')
    .then(({LazyloadExampleModule}) => LazyloadExampleModule)
);

const componentsExampleLazy =new Lazy(
  () => import(/* webpackChunkName: "components-example-module" */ './examples/components-example/components-example.module')
    .then(({ComponentsExampleModule}) => ComponentsExampleModule)
);

const portalLazy = new Lazy(
  () => import(/* webpackChunkName: "lazy-portal-module" */ './examples/lazyload-example/lazy-wrapper/lazy-portal-source')
    .then(({PortalModule}) => PortalModule)
);

@NgModule({
  declarations: [AppComponent, MarkdownToolbarComponent, ExamplePanelComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    MarkdownModule, FormsModule,
    ReactiveFormsModule,
    MatExpansionModule, MatTabsModule,
    BrowserAnimationsModule,
    GewdLazyLoaderModule.withLazy([
      {
        moduleName: 'markdown-example',
        moduleConfig: {
          load: markdownExampleLazy
        }
      },
      {
        moduleName: 'lazyload-example',
        moduleConfig: {
          load: lazyLoadExampleLazy
        }
      },
      {
        moduleName: 'portal-module',
        moduleConfig: {
          load: portalLazy
        }
      },
      {
        moduleName: 'components-example',
        moduleConfig: {
          load: componentsExampleLazy
        }
      }
    ]),
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
