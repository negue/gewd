import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutoScaleComponent} from "./auto-scale.component";
import {ValueOrDefaultPipe} from './value-or-default.pipe';


@NgModule({
  declarations: [AutoScaleComponent, ValueOrDefaultPipe],
  exports: [
    AutoScaleComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AutoScaleModule { }
