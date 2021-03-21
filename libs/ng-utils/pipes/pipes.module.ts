import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustHtmlPipe } from './trust-html.pipe';


@NgModule({
  declarations: [TrustHtmlPipe],
  exports: [
    TrustHtmlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
