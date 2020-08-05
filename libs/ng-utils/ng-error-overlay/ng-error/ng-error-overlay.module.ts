import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgErrorComponent } from './ng-error.component';
import { ErrorOverlayComponent } from './error-overlay/error-overlay.component';
import { ErrorHandlerService } from './error-handler.service';
import { BootstrapComponentModule } from '@gewd/ng-utils/bootstrap-component';

@NgModule({
  declarations: [NgErrorComponent, ErrorOverlayComponent],
  imports: [
    CommonModule,
    BootstrapComponentModule.component({
      elementName: 'ng-error',
      component: NgErrorComponent
    })
  ],
  providers: [
    ErrorHandlerService,
    {provide: ErrorHandler, useExisting: ErrorHandlerService},
  ]
})
export class NgErrorOverlayModule {
}
