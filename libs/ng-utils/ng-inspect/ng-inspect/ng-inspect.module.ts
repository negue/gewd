import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgInspectComponent } from './ng-inspect.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [NgInspectComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    NgInspectComponent
  ]
})
export class NgInspectModule { }
