import { Component, ContentChild, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gewd-auto-scale',
  templateUrl: './auto-scale.component.html',
  styleUrls: ['./auto-scale.component.scss']
})
export class AutoScaleComponent {

  @HostBinding('style.--zoom_out_width.px')
  @Input()
  width = 100;

  @HostBinding('style.--zoom_out_height.px')
  @Input()
  height = 100;

  @ContentChild(ElementRef)
  private _elem: ElementRef;
}
