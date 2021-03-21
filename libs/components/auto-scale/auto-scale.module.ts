import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutoScaleComponent} from "./auto-scale.component";
import {ValueOrDefaultPipe} from './value-or-default.pipe';
import { AutoScaleImgDirective } from './auto-scale-img.directive';


@NgModule({
  declarations: [AutoScaleComponent, ValueOrDefaultPipe, AutoScaleImgDirective],
  exports: [
    AutoScaleComponent,
    AutoScaleImgDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class AutoScaleModule { }
