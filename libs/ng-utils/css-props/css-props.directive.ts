import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CssPropsService } from './css-props.service';

/*
 * Workaround for setting CSS custom properties:
 * https://github.com/angular/angular/issues/9343
 *
 * Cannot work for any style properties.
 */
@Directive({
  selector: '[cssProps]',
})
export class CSSPropsDirective implements OnChanges {

  @Input() cssProps: any;

  constructor(private element: ElementRef<HTMLElement>,
              private cssPropsService: CssPropsService) {
  }

  ngOnChanges({cssProps}: SimpleChanges) {
    this.cssPropsService.updateElementVars(
      this.element.nativeElement,
      cssProps.currentValue
    );
  }
}
