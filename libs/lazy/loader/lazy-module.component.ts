import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector, Input, OnChanges,
  SimpleChanges, EventEmitter, OnDestroy,
  Compiler, Output, ChangeDetectorRef
} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import { DynamicLoaderRegistry } from '@gewd/lazy/registry';
import { InputMap, OutputMap } from '@gewd/lazy/contracts';

@Component({
  selector: 'gewd-lazy-module-component',
  template: `
    <ng-container #targetContainer></ng-container>
    <ng-content *ngIf="!component || !moduleAlias"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
    <span *ngIf="showError && error" class="error">{{error}}</span>
  `,
  styles: [`
    .error {
      color: red;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyModuleComponent implements OnChanges, OnDestroy {

  @Input()
  public moduleAlias: string;

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

  @Input()
  public showError = true;

  public error: string;
  private componentInstance = null;

  private unsubForOutputs$ = new Subject();
  private alreadySettingComponent = false;

  constructor (private resolver: ComponentFactoryResolver,
               private angularCompiler: Compiler,
               private injector: Injector,
               private cd: ChangeDetectorRef) {


  }

  async setComponent () {
    if (!this.moduleAlias || !this.component || this.alreadySettingComponent) {
      return;
    }

    this.error = '';

    this.alreadySettingComponent = true;

    const moduleInDictionary = DynamicLoaderRegistry.LazyModuleComponents[this.moduleAlias];

    if (!moduleInDictionary) {
      this.error = `Module ${this.moduleAlias} not registered`;
      this.cd.markForCheck();
      return;
    }


    this.componentLoading.emit(true);

    if (!moduleInDictionary.loadedModule) {
      // load and cache
      moduleInDictionary.loadedModule = moduleInDictionary.load
        .getValue()
        .then(importedModule => {
          return this.angularCompiler.compileModuleAndAllComponentsAsync(importedModule);
        })
        .then(factory => {
          return {
            ngModule: factory.ngModuleFactory.create(this.injector),
            componentFactories: factory.componentFactories
          };
        });
    }

    const moduleFactory = await moduleInDictionary.loadedModule;

    if (!moduleFactory.ngModule.instance.getComponents) {
      this.error = `Module ${this.moduleAlias} does not have a getComponents-Method`;
      this.cd.markForCheck();
      return;
    }

    const components = moduleFactory.ngModule.instance.getComponents();

    const componentInfo = components.find(cf => cf.name === this.component);

    if (!componentInfo) {
      this.error = `Component '${this.component}' does not exist in the 'getComponents'-Method`;
      this.cd.markForCheck();
      return;
    }

    const componentType = componentInfo.componentType;

    const componentFactory = moduleFactory.ngModule.componentFactoryResolver.resolveComponentFactory(componentType);

    // only have one dynamic component render
    this.targetContainer.clear();

    const componentRef = this.targetContainer.createComponent(componentFactory, 0, this.injector);
    componentRef.changeDetectorRef.markForCheck();

    this.componentLoading.emit(false);
    this.componentCreated.emit(componentRef.instance);
    this.componentInstance = componentRef.instance;
    this.setInputs();
    this.setOutputs();

    this.alreadySettingComponent = false;
    this.cd.detectChanges();
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (this.changedAndDifferent(changes, 'component')) {
      // console.info('setting component because of component');
      this.setComponent();
    }
    if (this.changedAndDifferent(changes, 'moduleAlias')) {
      // console.info('setting component because of moduleAlias');
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

  private changedAndDifferent(changes: SimpleChanges, name: string) {
    const change = changes[name];

    if (change && change.currentValue !== change.previousValue) {
      return true;
    }

    return false;
  }

  private setInputs () {
    if (this.componentInstance && this.componentInputs) {
      const inputs = Object.keys(this.componentInputs);

      for (const inputKey of inputs) {
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
        if (this.componentInstance[outputKey]) {
          const emitter = this.componentInstance[outputKey] as EventEmitter<any>;
          emitter.pipe(
            takeUntil(this.unsubForOutputs$),
          ).subscribe(this.componentOutputs[outputKey]);
        }
      }
    }
  }
}
