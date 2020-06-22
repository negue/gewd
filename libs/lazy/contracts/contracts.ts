import { ComponentType } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ComponentRef } from '@angular/core';

export interface LazyModuleComponentInfo {
  name: string,
  componentType: ComponentType<any>
}

export interface LazyModule {
  getComponents(): LazyModuleComponentInfo[];
}

export interface InputMap {
  [key: string]: any;
}

export interface OutputMap {
  [key: string]: (value: any) => void;
}

export interface CreateComponentResult {
  compRef: ComponentRef<any>;
  cd: ChangeDetectorRef;
}
