import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicPortalComponent} from './dynamic-portal/dynamic-portal.component';
import {PortalSourceDirective} from './portal-source.directive';

@NgModule({
  declarations: [DynamicPortalComponent, PortalSourceDirective],
  exports: [
    DynamicPortalComponent,
    PortalSourceDirective
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class DynamicPortalModule {
}
