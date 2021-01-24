import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LazyModule, LazyModuleComponentInfo } from '@gewd/lazy/contracts';

@Component({
  selector: 'test-module-comp',
  template: `
    My Card Content: {{testProp}}

    <button mat-raised-button (click)="outputTest.emit('Raise Event - Clicked')">Raise Event</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyModuleComp implements OnInit, OnChanges, OnDestroy {
  @Input()
  public testProp: any;

  @Input()
  public outputTest = new EventEmitter();

  constructor() {
  }

  ngOnChanges (changes: SimpleChanges): void {

    console.info('onChanges', changes);
  }

  ngOnDestroy (): void {
    alert('destroy');
  }

  ngOnInit (): void {
    this.outputTest.next('lazy component ngOnInit');
  }
}

@NgModule({
  declarations: [
    MyModuleComp
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class TestModule implements LazyModule {
  getComponents (): LazyModuleComponentInfo[] {
    return [
      {
        name: 'MyModuleComp',
        componentType: MyModuleComp
      }
    ];
  }


}
