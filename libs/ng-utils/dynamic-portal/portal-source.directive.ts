import {Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import { PortalHubService } from './portal-hub.service';

@Directive({
  selector: '[dynamicPortalSource]'
})
export class PortalSourceDirective implements OnInit, OnDestroy, OnChanges {
  @Input('dynamicPortalSource')
  public key: string;

  constructor (private templateRef: TemplateRef<any>,
               private hub: PortalHubService) {
  }

  ngOnChanges (changes: SimpleChanges): void {
    const keyChange = changes['key'];
    if (keyChange) {
      if (keyChange.previousValue) {
        this.unregisterTemplate(keyChange.previousValue);
      }

      this.registerTemplate(keyChange.currentValue);
    }
  }

  ngOnDestroy (): void {
    this.unregisterTemplate(this.key);
  }

  ngOnInit (): void {
    if (!this.key) {
      return;
    }

    this.registerTemplate(this.key);
  }

  private registerTemplate (key: string) {
    this.hub.registerTemplate(key, this.templateRef);
  }

  private unregisterTemplate (key: string) {
    this.hub.unregisterTemplate(key);
  }
}
