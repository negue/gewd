import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorphdomDirective } from './morphdom.directive';


@NgModule({
  declarations: [MorphdomDirective],
  exports: [
    MorphdomDirective
  ],
  imports: [
    CommonModule
  ]
})
export class MorphdomModule { }
