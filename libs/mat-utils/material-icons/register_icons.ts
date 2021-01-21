import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

export interface RegistryIconsPair {
  pathToIcons: string,
  iconArray: string[]
}

export function registerIcons(
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer,
  iconPair: RegistryIconsPair
  ) {
  for (const icon of iconPair.iconArray) {
    iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(
      `${iconPair.pathToIcons}/${icon}.svg`
    ));
  }
}
