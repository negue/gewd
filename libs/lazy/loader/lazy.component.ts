import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DynamicLoaderRegistry } from '@gewd/lazy/registry';
import { CreateComponentResult, InputMap, OutputMap } from '@gewd/lazy/contracts';

// TODO abstract common logic
// - share template?

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

  private componentInstanceRef: ComponentRef<any> = null;
  private componentChangeDetectorRef: ChangeDetectorRef = null;

  private unsubForOutputs$ = new Subject();
  private currentlyBuildingComponent = null;

  constructor (private resolver: ComponentFactoryResolver,
               private injector: Injector,
               private cd: ChangeDetectorRef) {
  }

  async setComponent () {
    if (!this.component || this.component === this.currentlyBuildingComponent) {
      return;
    }

    this.currentlyBuildingComponent = this.component;
    this.componentLoading.emit(true);
    this.cd.detectChanges();

    const createdComponent = await loadAndCreateComponent(
      this.currentlyBuildingComponent,
      this.resolver,
      this.injector,
      this.targetContainer
    );

    this.componentInstanceRef = createdComponent.compRef;
    this.componentChangeDetectorRef = createdComponent.cd;

    this.currentlyBuildingComponent = null;
    this.componentLoading.emit(false);
    this.componentCreated.emit(this.componentInstanceRef.instance);
    this.setInputs();
    this.setOutputs();
  }

  ngOnChanges (changes: SimpleChanges): void {
    const { component, componentInputs, componentOutputs } = changes;

    if (component && component.previousValue !== component.currentValue) {
      this.setComponent();
    }
    if (componentInputs) {
      this.setInputs();
    }
    if (componentOutputs) {
      this.setOutputs();
    }
  }

  ngOnDestroy () {
    this.unsubOutputs();
  }

  private setInputs () {
    if (!this.componentInstanceRef) {
      return;
    }

    const {instance} = this.componentInstanceRef;

    if (instance && this.componentInputs) {
      const inputs = Object.keys(this.componentInputs);

      for (const inputKey of inputs) {
        instance[inputKey] = this.componentInputs[inputKey];
      }
    }

    this.componentChangeDetectorRef.markForCheck();
  }

  private unsubOutputs () {
    this.unsubForOutputs$.next();
  }

  private setOutputs () {
    this.unsubOutputs();

    if (!this.componentInstanceRef) {
      return;
    }

    const {instance} = this.componentInstanceRef;

    if (instance && this.componentOutputs) {
      const outputs = Object.keys(this.componentOutputs);

      for (const outputKey of outputs) {
        // console.info('subscribe to', outputKey);
        if (instance[outputKey]) {
          const emitter = instance[outputKey] as EventEmitter<any>;
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


export async function loadAndCreateComponent(componentName: string,
                                             resolver: ComponentFactoryResolver,
                                             injector: Injector,
                                             targetContainer: ViewContainerRef = null,
                                             targetElement: Element = null): Promise<CreateComponentResult> {
  const importComponent = DynamicLoaderRegistry.LazyComponents[componentName].getValue();

  const imported = await importComponent;

  const keys = Object.keys(imported);

  // get the first object of the imported js-module
  const theComp = imported[keys[0]];

  const componentFactory = resolver.resolveComponentFactory(theComp);

  // only have one dynamic component render
  const result = {
    compRef: null,
    cd: null,
  } as CreateComponentResult;

  if (targetContainer) {
    targetContainer.clear();

    result.compRef = targetContainer.createComponent(componentFactory, 0, injector);
  }

  if (targetElement) {
    const ref = componentFactory.create(this.injector, [], targetElement);

    result.compRef = ref;
  }

  if (result.compRef) {
    result.cd = result.compRef.injector.get(ChangeDetectorRef);
  }

  return result;
}
