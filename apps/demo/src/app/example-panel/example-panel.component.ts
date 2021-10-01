import {Component, Input, OnInit} from '@angular/core';
import {LazyModuleComponent} from "@gewd/lazy/loader";

@Component({
  selector: 'gewd-example-panel',
  templateUrl: './example-panel.component.html',
  styleUrls: ['./example-panel.component.css']
})
export class ExamplePanelComponent implements OnInit {

  @Input()
  packageName = '';

  @Input()
  packageTitle = '';

  @Input()
  moduleName = '';

  @Input()
  componentName = '';

  constructor() { }

  ngOnInit(): void {
  }

  applyLazyModuleInputs(lazyModuleComponent: LazyModuleComponent): void  {
    lazyModuleComponent.moduleAlias = this.moduleName;
    lazyModuleComponent.component = this.componentName;
    lazyModuleComponent.setComponent();
  }
}
