import { Component, Injectable } from '@angular/core';
import { RenderMarkdownComponent } from '@gewd/markdown/module';

@Component({
  template: ``,
  selector: 'gewd-markdown-toolbar'
})
export class MarkdownToolbarComponent {
  constructor (private markdown: RenderMarkdownComponent) {
  }
}
