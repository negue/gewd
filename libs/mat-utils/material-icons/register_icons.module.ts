import {
  Inject,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {registerIcons, RegistryIconsPair} from "./register_icons";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

export const REGISTORY_ICONS_PAIR_TOKEN = new InjectionToken<RegistryIconsPair>('@gewd/mat-utils/BootstrapComponentConfig');

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
        { provide: REGISTORY_ICONS_PAIR_TOKEN, useValue, multi: true }
      ]
    };
  }

  constructor (iconRegistry: MatIconRegistry,
               sanitizer: DomSanitizer,
               @Inject(REGISTORY_ICONS_PAIR_TOKEN) registryIconsPairsArray: RegistryIconsPair[]) {
    for (const iconPair of registryIconsPairsArray) {
      registerIcons(iconRegistry, sanitizer, iconPair);
    }
  }
}
