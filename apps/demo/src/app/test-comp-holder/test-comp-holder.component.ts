import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gewd-test-comp-holder',
  templateUrl: './test-comp-holder.component.html',
  styleUrls: ['./test-comp-holder.component.css']
})
export class TestCompHolderComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  public testprop: any;

  constructor() { }

  ngOnInit(): void {
    console.warn('TestCompHolder Init');
  }

  ngOnDestroy (): void {

    console.warn('TestCompHolder Destroy');
  }

  ngOnChanges (changes: SimpleChanges): void {
    console.warn({changes});
  }


}
