import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderMarkdownComponent } from './render-markdown/render-markdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RenderMarkdownComponent],
  exports: [
    RenderMarkdownComponent
  ],
  providers: []

})
export class MarkdownModule {}
