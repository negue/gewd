import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodemirrorComponent } from './codemirror.component';

@NgModule({
  declarations: [CodemirrorComponent],
  exports: [
    CodemirrorComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [

  ]
})
export class CodemirrorModule { }
