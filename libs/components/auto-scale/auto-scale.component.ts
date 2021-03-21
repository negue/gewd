import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

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

  constructor(private _cd: ChangeDetectorRef) {
  }

  forceUpdate(): void {
    this._cd.markForCheck();
  }
}
