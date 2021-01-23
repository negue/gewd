import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadExampleComponent } from './lazyload-example.component';
import {GewdLazyLoaderModule} from "@gewd/lazy/loader";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LazyModule, LazyModuleComponentInfo} from "@gewd/lazy/contracts";
import {Lazy} from "@gewd/lazy/utils";
import {DynamicLoaderRegistry} from "@gewd/lazy/registry";

@NgModule({
  declarations: [LazyloadExampleComponent],
  imports: [
    CommonModule,
    GewdLazyLoaderModule,
    MatButtonModule,
    MatProgressBarModule
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

DynamicLoaderRegistry.LazyComponents = {
  'test-comp': new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
};

DynamicLoaderRegistry.LazyModuleComponents['test-module'] ={
  load: new Lazy<any>(
    () => import(/* webpackChunkName: "lazy-test-module" */ './lazy-wrapper/test-module-comp')
      .then(({TestModule}) => TestModule)
  )
};

DynamicLoaderRegistry.LazyModuleComponents['portal-module'] = {
  load: new Lazy<any>(
    () => import(/* webpackChunkName: "lazy-portal-module" */ './lazy-wrapper/lazy-portal-source')
      .then(({PortalModule}) => PortalModule)
  )
};
