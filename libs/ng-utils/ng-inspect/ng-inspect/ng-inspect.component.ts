import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { BehaviorSubject, fromEvent, isObservable, merge, NEVER, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  pairwise,
  startWith,
  switchMap,
  takeUntil,
  tap
} from 'rxjs/operators';
import { ContextWithCd, InstanceProp, InstanceWithProps, PinnedPayload, PropInfo } from './ng-inspect.component.types';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


const highlightClass = 'highlight-item';

/** @dynamic - allows Document in ngc build */
@Component({
  selector: 'ng-inspect',
  templateUrl: './ng-inspect.component.html',
  styleUrls: ['./ng-inspect.component.scss']
})
export class NgInspectComponent implements OnInit, OnDestroy {
  private static _addedStyle = false;

  component$ = new BehaviorSubject<InstanceWithProps>(null);
  pinnedItems$ = new BehaviorSubject<InstanceWithProps[]>([]);

  pinnedMap = new WeakMap<ContextWithCd, PinnedPayload>();
  pinnedAr: ContextWithCd[] = [];

  private ng = window && (window as any).ng;
  private IVY_MODE = this.ng && !!this.ng.getComponent;
  private destroy$ = new Subject();

  public trackByEntry: TrackByFunction<any> = (index, item) => item.key;

  constructor (private cd: ChangeDetectorRef,
               private sanitizer: DomSanitizer,
               @Inject(DOCUMENT) private document: Document) {
    if (!NgInspectComponent._addedStyle) {
      NgInspectComponent._addedStyle = true;

      const style = document.createElement('style');

      // WebKit hack :(
      style.appendChild(document.createTextNode(''));

      // Add the <style> element to the page
      document.head.appendChild(style);
      (style.sheet as any).addRule(`.${highlightClass}`,
        'border: 2px dotted lightblue !important;');
    }


    const weakMap = new WeakMap<Element, ContextWithCd>();

    const highlightItem$ = new BehaviorSubject<Element>(null);

    highlightItem$.pipe(
      takeUntil(this.destroy$),
      //filter(item => !!item),
      pairwise()
    ).subscribe(([oldItem, current]) => {
      if (current) {
        current.classList.add(highlightClass);
      }

      if (oldItem) {
        oldItem.classList.remove(highlightClass);
      }
    });

    const keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter(e => e.ctrlKey),
      mapTo(true)
    );


    const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      map(e => e.ctrlKey)
    );

    const isActive$ = merge(
      keyDown$,
      keyUp$
    );

    isActive$.pipe(
      takeUntil(this.destroy$),
      switchMap(value => value
        ? fromEvent<MouseEvent>(document, 'mousemove').pipe(
          startWith(this.getCurrentElement()),
          tap(x => console.info({ x })),
          filter(e => !!e && !this.isChildOfIgnoredElement(e.target as any))
        )
        : NEVER
      ),
      distinctUntilChanged((x, y) => x.target === y.target)
    ).subscribe(event => {
      const { target } = event;

      const elementWithContext = this.findNextContext(target as any);

      if (elementWithContext) {
        const cached = weakMap.has(elementWithContext);

        const context = cached
          ? weakMap.get(elementWithContext)
          : (this.getComponent(elementWithContext));

        if (!cached && context) {
          weakMap.set(elementWithContext, context);
        }

        if (context) {
          highlightItem$.next(elementWithContext);

          const instance = context.instance;

          const entries = Object.entries(instance)
            .map(
              ([key, value]) => ({ key, propInfo: this.getPropInfo(value) }) as InstanceProp
            )
            .filter(e => !!e.propInfo);

          const found = {
            context,
            keys: Object.keys(instance),
            entries,
            name: instance.__proto__.constructor.name
          };

          this.component$.next(found);
        } else {
          highlightItem$.next(null);
          this.component$.next(null);
        }
      } else {
        highlightItem$.next(null);
        this.component$.next(null);
      }
    });
  }

  ngOnInit (): void {
  }

  ngOnDestroy (): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onChangeGeneric (value: any, context: ContextWithCd, key: string): void  {
    context.instance[key] = value;
    context.cd.markForCheck();
    this.cd.markForCheck();
  }

  onPinOp (context: ContextWithCd, prop: string, pin: boolean): void  {
    let pinnedEntry: PinnedPayload = null;

    if (this.pinnedMap.has(context)) {
      pinnedEntry = this.pinnedMap.get(context);
    } else {
      pinnedEntry = { pinned: [] };
      this.pinnedMap.set(context, pinnedEntry);
    }

    if (pin) {
      pinnedEntry.pinned.push(prop);
      if (!this.pinnedAr.includes(context)) {
        this.pinnedAr.push(context);
      }
    } else {
      const indexOf = pinnedEntry.pinned.indexOf(prop);
      pinnedEntry.pinned.splice(indexOf, 1);

      if (pinnedEntry.pinned.length === 0) {
        const indexOfInstance = this.pinnedAr.indexOf(context);
        this.pinnedAr.splice(indexOfInstance, 1);
      }
    }

    this.cd.markForCheck();

    this.fillPinnedArray();
  }

  isPinned (context: ContextWithCd, prop: string): boolean  {
    if (this.pinnedMap.has(context)) {
      return this.pinnedMap.get(context).pinned.includes(prop);
    } else {
      return false;
    }
  }

  getPropInfo (value: any): PropInfo {
    const type = typeof value;
    switch (type) {
      case 'boolean':
      case 'number':
        return {
          canEdit: true,
          type
        };
      case 'string':
        const str = value.toString();
        const isColor = str.includes('#') && str.length === 7;

        return {
          canEdit: true,
          type: isColor ? 'color' : 'string'
        };
      case 'object':
        if (isObservable(value)) {
          return {
            canEdit: false,
            type: 'observable'
          };
        }

        return null;
      default:
        return null;
    }
  }

  toggleEdit (item: InstanceProp): void  {
    item.editMode = !item.editMode;
  }

  public byPassAttr (value: any) {
   return this.sanitizer.bypassSecurityTrustStyle(value);
  }

  private getCurrentElement() {
    const hovering = this.document.querySelectorAll(':hover');
    if (hovering.length > 0) {
      return {
        target: hovering.item(hovering.length - 1)
      }
    }
    return null;
  }

  private isChildOfIgnoredElement(element: Element) {
    while (element) {
      const containsAttr = element.hasAttribute('ignore-inspect');

      if (containsAttr) {
        return true;
      }

      element = element.parentElement;
    }

    return false;
  }

  private getComponent(element: Element): ContextWithCd {
    if (this.IVY_MODE) {
      const component = this.ng.getComponent(element)
        || this.ng.getContext(element);

      return {
        instance: component,
        cd: this.cd
      };
    } else {
      const probe = this.ng.probe(element);

      if (probe) {
        return {
          instance: probe.context,
          cd: probe.injector.get(ChangeDetectorRef)
        };
      }

      return null;
    }
  }

  private fillPinnedArray () {
    const pinnedItems: InstanceWithProps[] = [];
    for (const context of this.pinnedAr) {
      const {instance} = context;
      pinnedItems.push({
        name: instance.__proto__.constructor.name, // move to context?
        context,
        entries: this.pinnedMap.get(context).pinned.map(key => ({
          key,
          propInfo: this.getPropInfo(instance[key])
        }) as InstanceProp)
      });
    }

    this.pinnedItems$.next(pinnedItems);
  }

  private findNextContext (element: Element): Element {
    if (!this.IVY_MODE) {
      return element;
    }

    while (element && !this.getContext(element as any)) {
      element = element.parentElement;
    }

    return element;
  }

  private getContext (element: any) {
    return element.__ngContext__;
  }
}
