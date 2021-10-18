import { Component, OnInit } from '@angular/core';
import {LazyComponent, LazyModuleComponent} from "@gewd/lazy/loader";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'gewd-lazyload-example',
  templateUrl: './lazyload-example.component.html',
  styleUrls: ['./lazyload-example.component.css']
})
export class LazyloadExampleComponent {

  public outputLog = [];
  public outputBinding = {
    outputTest: (e): void  => this.addLogEntry(e)
  };

  lazyLoadReadmeMD$ = this.http.get('./assets/readme/lazy/README.md', {
    responseType: 'text'
  });

  constructor(private http: HttpClient) { }

  setLazyComp (lazyComponent: LazyComponent): void  {
    lazyComponent.component = 'test-comp';
    lazyComponent.setComponent();
    // this.cd.markForCheck();
  }

  setLazyModuleComp (lazyModuleComponent: LazyModuleComponent): void  {
    lazyModuleComponent.moduleAlias = 'test-module';
    lazyModuleComponent.component = 'MyModuleComp';
    lazyModuleComponent.setComponent();
  }

  addLogEntry (e): void  {
    this.outputLog.push(e);
  }

}
