import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompHolderComponent } from './test-comp-holder.component';
import { GewdLazyLoaderModule } from '@gewd/lazy/loader';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [TestCompHolderComponent],
  imports: [
    CommonModule,
    GewdLazyLoaderModule,
    MatProgressBarModule
  ],
  exports: [TestCompHolderComponent],
  entryComponents: [TestCompHolderComponent]
})
export class TestCompHolderModule { }
