import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSSPropsDirective } from './css-props.directive';

/** @dynamic - allows Document in ngc build */
@NgModule({
  declarations: [CSSPropsDirective],
  imports: [
    CommonModule
  ],
})
export class CssPropsModule {
}
