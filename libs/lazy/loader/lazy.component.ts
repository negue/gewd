import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector, Input, OnChanges,
  SimpleChanges, EventEmitter, OnDestroy, Output, ChangeDetectorRef, OnInit
} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import { DynamicLoaderRegistry } from '@gewd/lazy/registry';

interface InputMap {
  [key: string]: any;
}

interface OutputMap {
  [key: string]: (value: any) => void;
}

@Component({
  selector: 'gewd-lazy-component',
  template: `
    <ng-container #targetContainer>
    </ng-container>

    <ng-content *ngIf="!component"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public component: string;

  @Input()
  public componentInputs: InputMap;

  @Input()
  public componentOutputs: OutputMap;

  @ViewChild('targetContainer', {read: ViewContainerRef, static: true})
  public targetContainer: ViewContainerRef;

  @Output()
  public componentCreated = new EventEmitter();
  @Output()
  public componentLoading = new EventEmitter();

  private componentInstance = null;

  private unsubForOutputs$ = new Subject();

  constructor (private resolver: ComponentFactoryResolver,
               private injector: Injector,
               private cd: ChangeDetectorRef) {
  }

  async setComponent () {
    if (!this.component) {
      return;
    }

    this.componentLoading.emit(true);
    this.cd.detectChanges();
console.info('load' , this.component);
    // cached promise
    const importComponent = DynamicLoaderRegistry.LazyComponents[this.component].getValue();

    const imported = await importComponent;

    const keys = Object.keys(imported);

    // get the first object of the imported js-module
    const theComp = imported[keys[0]];

    const componentFactory = this.resolver.resolveComponentFactory(theComp);

    // only have one dynamic component render
    this.targetContainer.clear();

    const componentRef = this.targetContainer.createComponent(componentFactory, 0, this.injector);
    componentRef.changeDetectorRef.markForCheck();

    this.componentLoading.emit(false);
    this.componentCreated.emit(componentRef.instance);
    this.componentInstance = componentRef.instance;
    this.setInputs();
    this.setOutputs();
  }

  ngOnChanges (changes: SimpleChanges): void {
    console.info(changes);
    if (changes['component']) {
      this.setComponent();
    }
    if (changes['componentInputs']) {
      this.setInputs();
    }
    if (changes['componentOutputs']) {
      this.setOutputs();
    }
  }

  ngOnDestroy () {
    this.unsubOutputs();
  }

  private setInputs () {
    // console.info('setInputs', this.componentInstance, this.componentInputs);
    if (this.componentInstance && this.componentInputs) {
      const inputs = Object.keys(this.componentInputs);

      for (const inputKey of inputs) {
        // console.info('set ', inputKey)
        this.componentInstance[inputKey] = this.componentInputs[inputKey];
      }
    }
  }

  private unsubOutputs () {
    this.unsubForOutputs$.next();
  }

  private setOutputs () {
    this.unsubOutputs();

    if (this.componentInstance && this.componentOutputs) {
      const outputs = Object.keys(this.componentOutputs);

      for (const outputKey of outputs) {
        // console.info('subscribe to', outputKey);
        if (this.componentInstance[outputKey]) {
          const emitter = this.componentInstance[outputKey] as EventEmitter<any>;
          emitter.pipe(
            takeUntil(this.unsubForOutputs$),
          ).subscribe(this.componentOutputs[outputKey]);
        }
      }
    }
  }

  ngOnInit (): void {
    this.setComponent();
  }
}
