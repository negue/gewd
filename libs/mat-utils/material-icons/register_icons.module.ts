import { Inject, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerIcons, RegistryIconsPair } from './register_icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const REGISTRY_ICONS_PAIR_TOKEN = new InjectionToken<RegistryIconsPair>('@gewd/mat-utils/RegistryIconsPair');

/**
 * @deprecated Import & use REGISTRY_ICONS_PAIR_TOKEN instead
 */
export const REGISTORY_ICONS_PAIR_TOKEN = REGISTRY_ICONS_PAIR_TOKEN;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegisterIconsModule {
  static register (useValue: RegistryIconsPair): ModuleWithProviders<RegisterIconsModule> {
    return {
      ngModule: RegisterIconsModule,
      providers: [
        { provide: REGISTRY_ICONS_PAIR_TOKEN, useValue, multi: true }
      ]
    };
  }

  constructor (iconRegistry: MatIconRegistry,
               sanitizer: DomSanitizer,
               @Inject(REGISTRY_ICONS_PAIR_TOKEN) registryIconsPairsArray: RegistryIconsPair[]) {
    for (const iconPair of registryIconsPairsArray) {
      registerIcons(iconRegistry, sanitizer, iconPair);
    }
  }
}
