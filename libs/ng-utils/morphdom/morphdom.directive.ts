import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
  public options: MorphDomOptions;

  @Output()
  public done = new EventEmitter<ElementRef<Element>>();

  constructor(private element: ElementRef<Element>) {

  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['morphDom'] && changes['morphDom'].currentValue) {
      console.info({changes});

      morphdom(this.element.nativeElement,
        `<div>${changes['morphDom'].currentValue}</div>`,
        this.options
      );
      this.done.emit(this.element);
    }
  }

}
