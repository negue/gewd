import {
  ApplicationRef,
  ComponentFactoryResolver,
  Inject,
  InjectionToken,
  Injector,
  ModuleWithProviders,
  NgModule,
  Type
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

export interface BootstrapComponentConfig {
  elementName: string;
  component: Type<any>;
}

export const BOOTSTRAP_COMPONENT_TOKEN = new InjectionToken<BootstrapComponentConfig>('@gewd/ng-utils/BootstrapComponentConfig');

export function bootstrapComponent(
  document: Document,
  resolver: ComponentFactoryResolver,
  injector: Injector,
  appRef: ApplicationRef,
  bootstrapConfig: BootstrapComponentConfig
) {
    const domElement = document.createElement(bootstrapConfig.elementName);

    document.body.append(domElement);

    const factory = resolver.resolveComponentFactory(bootstrapConfig.component);
    const ref = factory.create(injector, [], domElement);

    appRef.attachView(ref.hostView);
}

/** @dynamic - allows Document in ngc build */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BootstrapComponentModule {
  static component (useValue: BootstrapComponentConfig): ModuleWithProviders<BootstrapComponentModule> {
    return {
      ngModule: BootstrapComponentModule,
      providers: [
        { provide: BOOTSTRAP_COMPONENT_TOKEN, useValue, multi: true }
      ]
    };
  }

  constructor (@Inject(DOCUMENT) document: Document,
               resolver: ComponentFactoryResolver,
               injector: Injector,
               appRef: ApplicationRef,
               @Inject(BOOTSTRAP_COMPONENT_TOKEN) bootstrapConfigs: BootstrapComponentConfig[]) {
    for (const bootstrapConfig of bootstrapConfigs) {
      bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig);
    }
  }
}
