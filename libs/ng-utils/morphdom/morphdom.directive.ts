import { Directive, ElementRef, EventEmitter, Input, NgZone, OnChanges, Output, SimpleChanges } from '@angular/core';
import morphdom from 'morphdom';

interface MorphDomOptions {
  getNodeKey?: (node: Node) => any;
  onBeforeNodeAdded?: (node: Node) => Node;
  onNodeAdded?: (node: Node) => Node;
  onBeforeElUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
  onElUpdated?: (el: HTMLElement) => void;
  onBeforeNodeDiscarded?: (node: Node) => boolean;
  onNodeDiscarded?: (node: Node) => void;
  onBeforeElChildrenUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
  childrenOnly?: boolean;
}


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
              private ngZone: NgZone) {

  }

  ngOnChanges ({morphDom}: SimpleChanges): void {
    if (morphDom && morphDom.currentValue) {
      this.ngZone.runOutsideAngular(() => {
        morphdom(this.element.nativeElement,
          `<${this.tagName}>${morphDom.currentValue}</${this.tagName}>`,
          this.options
        );
      });

      this.done.emit(this.element);
    }
  }

}
