import { ChangeDetectorRef, Directive, ElementRef, HostListener, Self } from '@angular/core';

@Directive({
  selector: '[gewdAutoScaleImg]'
})
export class AutoScaleImgDirective {

  @HostListener('load')
  public onLoad() {
    this._cd.markForCheck();
  }

  constructor(
    @Self() public elemRef: ElementRef,
    private _cd: ChangeDetectorRef
  ) {
    const htmlElem = elemRef.nativeElement as HTMLElement;

    if (htmlElem.tagName.toLocaleLowerCase() !== 'img') {
      throw new Error('Only <img> tags are supported with the AutoScaleImgDirective!');
    }
  }

}
