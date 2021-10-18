import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'simple-pager',
  templateUrl: './simple-pager.component.html',
  styleUrls: ['./simple-pager.component.scss']
})
export class SimplePagerComponent {

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<any>;

  @Input()
  items: any[];

  public position = 0;

  constructor() { }

  selectPrev (): void  {
    if (this.position === 0) {
      return;
    }

    this.position--;
  }

  selectNext (): void  {
    if (this.position === (this.items.length - 1)) {
      return;
    }

    this.position++;
  }
}
