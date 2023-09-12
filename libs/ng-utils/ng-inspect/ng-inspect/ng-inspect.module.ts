import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgInspectComponent } from './ng-inspect.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { BootstrapComponentModule } from '@gewd/ng-utils/bootstrap-component';


@NgModule({
    declarations: [NgInspectComponent],
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        BootstrapComponentModule.component({
            elementName: 'ng-inspect',
            component: NgInspectComponent
        })
    ],
    exports: [
        NgInspectComponent
    ]
})
export class NgInspectModule { }
