import { Component, OnInit } from '@angular/core';
import {LazyComponent, LazyModuleComponent} from "@gewd/lazy/loader";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'gewd-lazyload-example',
  templateUrl: './lazyload-example.component.html',
  styleUrls: ['./lazyload-example.component.css']
})
export class LazyloadExampleComponent implements OnInit {

  public outputLog = [];
  public outputBinding = {
    outputTest: (e) => this.addLogEntry(e)
  };

  lazyLoadReadmeMD$ = this.http.get('./assets/readme/lazy/README.md', {
    responseType: 'text'
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  setLazyComp (lazyComponent: LazyComponent) {
    lazyComponent.component = 'test-comp';
    lazyComponent.setComponent();
    // this.cd.markForCheck();
  }

  setLazyModuleComp (lazyModuleComponent: LazyModuleComponent) {
    lazyModuleComponent.moduleAlias = 'test-module';
    lazyModuleComponent.component = 'MyModuleComp';
    lazyModuleComponent.setComponent();
  }

  addLogEntry (e) {
    this.outputLog.push(e);
  }

}
