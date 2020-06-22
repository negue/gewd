import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderMarkdownExtendedComponent } from './render-markdown-extended/render-markdown-extended.component';
import { MorphdomModule } from '@gewd/ng-utils/morphdom';

@NgModule({
  imports: [CommonModule, MorphdomModule],
  declarations: [RenderMarkdownExtendedComponent],
  exports: [
    RenderMarkdownExtendedComponent
  ],
  providers: []

})
export class MarkdownExtendedModule {}
