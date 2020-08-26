import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'simple-pager',
  templateUrl: './simple-pager.component.html',
  styleUrls: ['./simple-pager.component.scss']
})
export class SimplePagerComponent implements OnInit {

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<any>;

  @Input()
  items: any[];

  public position = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectPrev () {
    if (this.position === 0) {
      return;
    }

    this.position--;
  }

  selectNext () {
    if (this.position === (this.items.length - 1)) {
      return;
    }

    this.position++;
  }
}
