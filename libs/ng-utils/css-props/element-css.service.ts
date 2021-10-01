import { ElementRef, Injectable } from '@angular/core';
import { CssPropsService } from './css-props.service';

@Injectable()
export class ElementCssService {
  constructor (
    private cssPropsService: CssPropsService,
    private elementRef: ElementRef<HTMLElement>
  ) { }

  public updateElementVars(cssProps: any): void  {
    this.cssPropsService.updateElementVars(this.elementRef.nativeElement, cssProps);
  }
}
