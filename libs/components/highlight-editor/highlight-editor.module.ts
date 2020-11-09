import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightEditorComponent } from './highlight-editor.component';
import { CssPropsModule } from '@gewd/ng-utils/css-props';
import { MorphdomModule } from '@gewd/ng-utils/morphdom';

@NgModule({
  declarations: [HighlightEditorComponent],
  exports: [
    HighlightEditorComponent
  ],
  imports: [
    CommonModule,
    CssPropsModule,
    MorphdomModule
  ]
})
export class HighlightEditorModule { }
