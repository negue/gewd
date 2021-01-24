import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-scale',
  templateUrl: './auto-scale.component.html',
  styleUrls: ['./auto-scale.component.scss']
})
export class AutoScaleComponent implements OnInit {

  @HostBinding('style.--zoom_out_width.px')
  @Input()
  width: number = 100;

  @HostBinding('style.--zoom_out_height.px')
  @Input()
  height: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
