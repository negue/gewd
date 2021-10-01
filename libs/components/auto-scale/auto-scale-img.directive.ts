import { Directive, ElementRef, HostListener, Self } from '@angular/core';
import { AutoScaleComponent } from './auto-scale.component';

@Directive({
  selector: '[gewdAutoScaleImg]'
})
export class AutoScaleImgDirective {

  @HostListener('load')
  public onLoad(): void  {
    this._autoScale.forceUpdate();
  }

  constructor(
    @Self() public elemRef: ElementRef<HTMLElement>,
    private _autoScale: AutoScaleComponent
  ) {
    const htmlElem = elemRef.nativeElement;

    if (htmlElem.tagName.toLocaleLowerCase() !== 'img') {
      throw new Error('Only <img> tags are supported with the AutoScaleImgDirective!');
    }
  }

}
