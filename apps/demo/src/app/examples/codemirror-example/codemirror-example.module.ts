import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodemirrorExampleComponent } from './codemirror-example.component';
import { LazyModule, LazyModuleComponentInfo } from '@gewd/lazy/contracts';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightEditorModule } from '@gewd/components/highlight-editor';
import { MarkdownModule } from '@gewd/markdown';
import { CodemirrorModule } from '@gewd/components/codemirror';


@NgModule({
  declarations: [CodemirrorExampleComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightEditorModule,
    MarkdownModule,
    CodemirrorModule
  ]
})
export class CodemirrorExampleModule implements LazyModule {
  getComponents (): LazyModuleComponentInfo[] {
    return [
      {
        name: 'CodeMirrorExample',
        componentType: CodemirrorExampleComponent
      }
    ];
  }
}
