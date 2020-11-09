import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MorphDomOptions, MorphdomService } from './morphdom.service';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[morphDom]'
})
export class MorphdomDirective implements OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('morphDom')
  public morphDom: string;

  @Input()
  public tagName = 'div';

  @Input()
  public options: MorphDomOptions;

  @Output()
  public done = new EventEmitter<ElementRef<Element>>();

  constructor(private element: ElementRef<Element>,
              private morphService: MorphdomService) {
  }

  ngOnChanges ({morphDom}: SimpleChanges): void {
    if (morphDom && morphDom.currentValue) {
      this.morphService.morphElement(this.element,
        `<${this.tagName}>${morphDom.currentValue}</${this.tagName}>`,
        this.options);

      this.done.emit(this.element);
    }
  }

}
