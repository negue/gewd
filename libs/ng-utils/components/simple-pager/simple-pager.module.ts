import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplePagerComponent } from './simple-pager.component';

@NgModule({
  declarations: [SimplePagerComponent],
  exports: [
    SimplePagerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SimplePagerModule { }
