import { ElementRef, Injectable, NgZone } from '@angular/core';

import morphdom from 'morphdom';

export interface MorphDomOptions {
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


@Injectable({
  providedIn: 'root'
})
export class MorphdomService {

  constructor(private ngZone: NgZone) {

  }

  public morphElement(element: ElementRef<Element>,
                      newElementContent: string,
                      options: MorphDomOptions) {
     this.ngZone.runOutsideAngular(() => {
        morphdom(element.nativeElement,
          newElementContent,
          options
        );
      });
  }
}
