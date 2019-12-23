import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from '@gewd/lazy/loader/lazy.component';
import { LazyModuleComponent } from '@gewd/lazy/loader/lazy-module.component';

const LOADERS = [
  LazyComponent,
  LazyModuleComponent
];

@NgModule({
  declarations: [...LOADERS],
  exports: [
    ...LOADERS
  ],
  imports: [
    CommonModule
  ]

})
export class GewdLazyLoaderModule {

}
