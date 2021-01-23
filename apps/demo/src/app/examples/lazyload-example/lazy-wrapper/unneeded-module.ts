import { NgModule } from '@angular/core';
import { MyComp } from './test-comp';


// This module is just for angular to allow me to have a component
// without a module^^
// Lazy Load Component Example

@NgModule({
  declarations:[
    MyComp
  ]
})
export class UnneededModule {

}
