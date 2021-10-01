import { ComponentFactory, NgModuleRef, Type } from '@angular/core';
import { Lazy } from '@gewd/lazy/utils';
import { LazyModule } from '@gewd/lazy/contracts';

interface LoadedModule {
  ngModule: NgModuleRef<any>;
  componentFactories: ComponentFactory<any>[];
}

export interface LazyModuleComponentConfig {
  load: Lazy<Type<LazyModule>>; // the external import call to get the module
  loadedModule?: Promise<LoadedModule>; // cached
}

export class DynamicLoaderRegistry {
  // Registry + Cache
  public static readonly LazyComponents: { [key: string]: Lazy<any> } = {};

  public static RegisterLazyComponent(componentName: string, lazyImport: Lazy<any>): void  {
    DynamicLoaderRegistry.LazyComponents[componentName] = lazyImport;
  }

  // Registry
  public static readonly LazyModuleComponents: { [key: string]: LazyModuleComponentConfig } = {};

  public static RegisterLazyModuleComponent(moduleName: string, lazyImport: LazyModuleComponentConfig): void  {
    DynamicLoaderRegistry.LazyModuleComponents[moduleName] = lazyImport;
  }

}
