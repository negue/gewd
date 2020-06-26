import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'test-comp',
  template: `
    My Content {{testProp}}


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComp implements OnInit, OnChanges, OnDestroy {
  @Input()
  public testProp: any;

  @HostBinding('style.background')
  @Input()
  public color = '#c911c2';

  @Input()
  public outputTest = new EventEmitter();

  constructor() {
  }

  ngOnChanges (changes: SimpleChanges): void {

    console.info('onChanges', changes);
  }

  ngOnDestroy (): void {
    debugger;
    alert('destroy');
  }

  ngOnInit (): void {
    console.info('ngOnInit');

    this.outputTest.next('next output');
  }
}
