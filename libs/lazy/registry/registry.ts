import { ComponentFactory, NgModuleRef, Type } from '@angular/core';
import { Lazy } from '@gewd/lazy/utils';
import { ComponentType } from '@angular/cdk/overlay';

export interface LazyModuleComponent {
  name: string,
  componentType: ComponentType<any>
}

export interface LazyModule {
  getComponents(): LazyModuleComponent[];
}

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
  public static LazyComponents: { [key: string]: Lazy<any> } = {};

  // Registry
  public static LazyModuleComponents: { [key: string]: LazyModuleComponentConfig } = {};
}
