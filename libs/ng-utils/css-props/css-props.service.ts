import { Inject, Injectable, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { updateCssProps } from './update-css-props';
import { updateDynamicStyle } from './update-dynamic-style';

/** @dynamic - allows Document in ngc build */
@Injectable({
  providedIn: 'root'
})
export class CssPropsService {
  constructor (
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone
  ) { }

  public updateCustomCss(styleId: string, customCss: string): void  {
    this.ngZone.runOutsideAngular(() => {
      updateDynamicStyle(this.document, styleId, customCss);
    });
  }

  public updateDocumentVars(cssProps: any): void  {
    this.ngZone.runOutsideAngular(() => {
      updateCssProps(this.document.body, cssProps);
    });
  }

  public updateElementVars(element: HTMLElement, cssProps: any): void  {
    this.ngZone.runOutsideAngular(() => {
      updateCssProps(element, cssProps);
    });
  }
}
