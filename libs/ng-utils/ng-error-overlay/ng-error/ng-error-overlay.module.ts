import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgErrorComponent } from './ng-error.component';
import { ErrorOverlayComponent } from './error-overlay/error-overlay.component';
import { ErrorHandlerService, NG_ERROR_CONFIG_TOKEN } from './error-handler.service';
import { BootstrapComponentConfig, BootstrapComponentModule } from '@gewd/ng-utils/bootstrap-component';
import { SimplePagerModule } from '@gewd/ng-utils/components';
import { DynamicPortalModule } from '@gewd/ng-utils/dynamic-portal';

@NgModule({
    declarations: [NgErrorComponent, ErrorOverlayComponent],
    imports: [
        CommonModule,
        BootstrapComponentModule.component({
            elementName: 'ng-error',
            component: NgErrorComponent
        }),
        SimplePagerModule,
        DynamicPortalModule
    ],
    providers: [
        ErrorHandlerService,
        { provide: ErrorHandler, useExisting: ErrorHandlerService },
    ]
})
export class NgErrorOverlayModule {
  static config (useValue: BootstrapComponentConfig): ModuleWithProviders<BootstrapComponentModule> {
    return {
      ngModule: NgErrorOverlayModule,
      providers: [
        { provide: NG_ERROR_CONFIG_TOKEN, useValue }
      ]
    };
  }
}
