import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

export const enum PortalSourceActionType {
  Added,
  Removed
}

export class PortalSourceAction {
  constructor (public type: PortalSourceActionType,
               public key: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class PortalHubService {
  private templateSourceSubject = new Subject<PortalSourceAction>();
  private templateSourceHub: { [key: string]: TemplateRef<any> } = {};

  constructor () { }

  public getTemplate$(key: string) {
    return this.templateSourceSubject.pipe(
      filter(a => a.key === key),
      map(a => {
        switch (a.type) {
          case PortalSourceActionType.Added: {
            return this.templateSourceHub[key];
          }
          case PortalSourceActionType.Removed: {
            return null;
          }
        }
      }),
      startWith(this.templateSourceHub[key])
    );
  }

  public registerTemplate (key: string, templateRef: TemplateRef<any>) {
    if (this.templateSourceHub[key]) {
      return;
    }

    this.templateSourceHub[key] = templateRef;
    this.templateSourceSubject.next(new PortalSourceAction(PortalSourceActionType.Added, key));
  }


  public unregisterTemplate (key: string) {
    if (!this.templateSourceHub[key]) {
      return;
    }

    this.templateSourceHub[key] = null;
    this.templateSourceSubject.next(new PortalSourceAction(PortalSourceActionType.Removed, key));
  }
}
