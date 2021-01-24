import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormControlComponent } from './custom-form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomFormControlComponent],
  exports: [
    CustomFormControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomFormControlModule { }
