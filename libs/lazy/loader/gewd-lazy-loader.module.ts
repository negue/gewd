import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyModuleComponent } from './lazy-module.component';
import {DynamicLoaderRegistry, LazyModuleComponentConfig} from "@gewd/lazy/registry";

export interface RegisterLazyLoaderModuleEntry {
  moduleName: string,
  moduleConfig: LazyModuleComponentConfig
}

export const REGISTORY_LAZY_LOADED_MODULE_TOKEN = new InjectionToken<RegisterLazyLoaderModuleEntry>(
  '@gewd/lazy-loader/LazyModuleComponentConfig'
);


@NgModule({
  declarations: [
    LazyComponent,
    LazyModuleComponent
  ],
  exports: [
    LazyComponent,
    LazyModuleComponent
  ],
  imports: [
    CommonModule
  ]

})
export class GewdLazyLoaderModule {
  static withLazy (entries: RegisterLazyLoaderModuleEntry[]): ModuleWithProviders<GewdLazyLoaderModule> {
    const providers = entries.map(useValue => {
      return {
        provide: REGISTORY_LAZY_LOADED_MODULE_TOKEN,
        useValue,
        multi: true
      }
    });

    return {
      ngModule: GewdLazyLoaderModule,
      providers
    };
  }

  constructor (@Inject(REGISTORY_LAZY_LOADED_MODULE_TOKEN)
               registerLazyLoads: RegisterLazyLoaderModuleEntry[]) {
    for (const lazyInfo of registerLazyLoads) {
      DynamicLoaderRegistry.RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
    }
  }
}
