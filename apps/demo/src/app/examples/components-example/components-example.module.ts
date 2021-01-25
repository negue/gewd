import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsExampleComponent } from './components-example.component';
import {AutoScaleModule} from "@gewd/components/auto-scale";
import {LazyModule, LazyModuleComponentInfo} from "@gewd/lazy/contracts";
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [ComponentsExampleComponent],
  imports: [
    CommonModule,
    AutoScaleModule,
    AutoScaleModule,
    AutoScaleModule,
    MatSliderModule,
    MatFormFieldModule
  ]
})
export class ComponentsExampleModule implements LazyModule {
  getComponents (): LazyModuleComponentInfo[] {
    return [
      {
        name: 'ComponentsExample',
        componentType: ComponentsExampleComponent
      }
    ];
  }


}

