import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyModuleComponent } from './lazy-module.component';

@NgModule({
  declarations: [
    LazyComponent,
    LazyModuleComponent
  ],
  exports: [
    LazyComponent,
    LazyModuleComponent
  ],
  imports: [
    CommonModule
  ]

})
export class GewdLazyLoaderModule {

}
