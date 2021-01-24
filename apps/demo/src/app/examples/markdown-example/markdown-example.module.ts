import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownExampleComponent } from './markdown-example.component';
import {LazyModule, LazyModuleComponentInfo} from "@gewd/lazy/contracts";
import {MatTabsModule} from "@angular/material/tabs";
import {HighlightEditorModule} from "@gewd/components/highlight-editor";
import {MarkdownModule} from "@gewd/markdown";



@NgModule({
  declarations: [MarkdownExampleComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightEditorModule,
    MarkdownModule,
  ]
})
export class MarkdownExampleModule  implements LazyModule {
  getComponents (): LazyModuleComponentInfo[] {
    return [
      {
        name: 'MarkdownExample',
        componentType: MarkdownExampleComponent
      }
    ];
  }
}
