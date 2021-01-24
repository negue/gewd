import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadExampleComponent } from './lazyload-example.component';
import {GewdLazyLoaderModule} from "@gewd/lazy/loader";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LazyModule, LazyModuleComponentInfo} from "@gewd/lazy/contracts";
import {Lazy} from "@gewd/lazy/utils";
import {DynamicLoaderRegistry} from "@gewd/lazy/registry";
import {MatTabsModule} from "@angular/material/tabs";
import {MarkdownModule} from "@gewd/markdown/module";

const testModuleLazy = new Lazy<any>(
  () => import(/* webpackChunkName: "lazy-test-module" */ './lazy-wrapper/test-module-comp')
    .then(({TestModule}) => TestModule)
);

@NgModule({
  declarations: [LazyloadExampleComponent],
  imports: [
    CommonModule,
    GewdLazyLoaderModule.withLazy([
      {
        moduleName: 'test-module',
        moduleConfig: {
          load: testModuleLazy
        }
      }
    ]),
    MatButtonModule,
    MatProgressBarModule,
    MatTabsModule,
    MarkdownModule
  ]
})
export class LazyloadExampleModule  implements LazyModule {
  getComponents(): LazyModuleComponentInfo[] {
    return [
      {
        name: 'LazyLoadExample',
        componentType: LazyloadExampleComponent
      }
    ];
  }
}

DynamicLoaderRegistry.RegisterLazyComponent('test-comp',
  new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
);

