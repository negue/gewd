import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderMarkdownComponent } from './render-markdown/render-markdown.component';
import { TrustHtmlPipe } from './trust-html.pipe';
import { MorphdomModule } from '@gewd/ng-utils/morphdom';

@NgModule({
  imports: [CommonModule, MorphdomModule],
  declarations: [RenderMarkdownComponent, TrustHtmlPipe],
  exports: [
    RenderMarkdownComponent
  ],
  providers: []

})
export class MarkdownModule {}
