(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-loader.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-loader.js ***!
  \********************************************************************************************/
/*! exports provided: GewdLazyLoaderModule, LazyComponent, LazyModuleComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return GewdLazyLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return LazyModuleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return REGISTORY_LAZY_LOADED_MODULE_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/lazy/registry */ "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-registry.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["targetContainer"];
function LazyComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "!component"]);
} }
function LazyComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1, ["*ngIf", "componentLoading | async"]);
} }
const _c1 = ["*", [["", "isLoading", ""]]];
const _c2 = ["*", "[isLoading]"];
function LazyModuleComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "!component || !moduleAlias"]);
} }
function LazyModuleComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1, ["*ngIf", "componentLoading | async"]);
} }
function LazyModuleComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.error);
} }
let LazyComponent = class LazyComponent {
    constructor(resolver, injector, cd) {
        this.resolver = resolver;
        this.injector = injector;
        this.cd = cd;
        this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentInstance = null;
        this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    setComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.component) {
                return;
            }
            this.componentLoading.emit(true);
            this.cd.detectChanges();
            // cached promise
            const importComponent = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyComponents[this.component].getValue();
            const imported = yield importComponent;
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
        });
    }
    ngOnChanges(changes) {
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
    ngOnDestroy() {
        this.unsubOutputs();
    }
    setInputs() {
        // console.info('setInputs', this.componentInstance, this.componentInputs);
        if (this.componentInstance && this.componentInputs) {
            const inputs = Object.keys(this.componentInputs);
            for (const inputKey of inputs) {
                // console.info('set ', inputKey)
                this.componentInstance[inputKey] = this.componentInputs[inputKey];
            }
        }
    }
    unsubOutputs() {
        this.unsubForOutputs$.next();
    }
    setOutputs() {
        this.unsubOutputs();
        if (this.componentInstance && this.componentOutputs) {
            const outputs = Object.keys(this.componentOutputs);
            for (const outputKey of outputs) {
                // console.info('subscribe to', outputKey);
                if (this.componentInstance[outputKey]) {
                    const emitter = this.componentInstance[outputKey];
                    emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
                }
            }
        }
    }
    ngOnInit() {
        this.setComponent();
    }
};
LazyComponent.ɵfac = function LazyComponent_Factory(t) { return new (t || LazyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
LazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LazyComponent, selectors: [["gewd-lazy-component"]], viewQuery: function LazyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.targetContainer = _t.first);
    } }, inputs: { component: "component", componentInputs: "componentInputs", componentOutputs: "componentOutputs" }, outputs: { componentCreated: "componentCreated", componentLoading: "componentLoading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 5, vars: 4, consts: [["targetContainer", ""], [4, "ngIf"]], template: function LazyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LazyComponent_2_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LazyComponent_3_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.componentLoading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LazyComponent.prototype, "component", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentInputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentOutputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], LazyComponent.prototype, "targetContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentCreated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentLoading", void 0);
LazyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], LazyComponent);

let LazyModuleComponent = class LazyModuleComponent {
    constructor(resolver, angularCompiler, injector, cd) {
        this.resolver = resolver;
        this.angularCompiler = angularCompiler;
        this.injector = injector;
        this.cd = cd;
        this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showError = true;
        this.componentInstance = null;
        this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.alreadySettingComponent = false;
    }
    setComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.moduleAlias || !this.component || this.alreadySettingComponent) {
                return;
            }
            this.error = '';
            this.alreadySettingComponent = true;
            const moduleInDictionary = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyModuleComponents[this.moduleAlias];
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
            const moduleFactory = yield moduleInDictionary.loadedModule;
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
        });
    }
    ngOnChanges(changes) {
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
    ngOnDestroy() {
        this.unsubOutputs();
    }
    changedAndDifferent(changes, name) {
        const change = changes[name];
        if (change && change.currentValue !== change.previousValue) {
            return true;
        }
        return false;
    }
    setInputs() {
        if (this.componentInstance && this.componentInputs) {
            const inputs = Object.keys(this.componentInputs);
            for (const inputKey of inputs) {
                this.componentInstance[inputKey] = this.componentInputs[inputKey];
            }
        }
    }
    unsubOutputs() {
        this.unsubForOutputs$.next();
    }
    setOutputs() {
        this.unsubOutputs();
        if (this.componentInstance && this.componentOutputs) {
            const outputs = Object.keys(this.componentOutputs);
            for (const outputKey of outputs) {
                if (this.componentInstance[outputKey]) {
                    const emitter = this.componentInstance[outputKey];
                    emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
                }
            }
        }
    }
};
LazyModuleComponent.ɵfac = function LazyModuleComponent_Factory(t) { return new (t || LazyModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
LazyModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LazyModuleComponent, selectors: [["gewd-lazy-module-component"]], viewQuery: function LazyModuleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.targetContainer = _t.first);
    } }, inputs: { showError: "showError", moduleAlias: "moduleAlias", component: "component", componentInputs: "componentInputs", componentOutputs: "componentOutputs" }, outputs: { componentCreated: "componentCreated", componentLoading: "componentLoading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 6, vars: 5, consts: [["targetContainer", ""], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function LazyModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LazyModuleComponent_2_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LazyModuleComponent_3_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LazyModuleComponent_span_5_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.component || !ctx.moduleAlias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx.componentLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showError && ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".error[_ngcontent-%COMP%] {\n      color: red;\n    }"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LazyModuleComponent.prototype, "moduleAlias", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LazyModuleComponent.prototype, "component", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentInputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentOutputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], LazyModuleComponent.prototype, "targetContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentCreated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "showError", void 0);
LazyModuleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], LazyModuleComponent);

var GewdLazyLoaderModule_1;
const REGISTORY_LAZY_LOADED_MODULE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/lazy-loader/LazyModuleComponentConfig');
let GewdLazyLoaderModule = GewdLazyLoaderModule_1 = class GewdLazyLoaderModule {
    static withLazy(entries) {
        const providers = entries.map(useValue => {
            return {
                provide: REGISTORY_LAZY_LOADED_MODULE_TOKEN,
                useValue,
                multi: true
            };
        });
        return {
            ngModule: GewdLazyLoaderModule_1,
            providers
        };
    }
    constructor(registerLazyLoads) {
        for (const lazyInfo of registerLazyLoads) {
            _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
        }
    }
};
GewdLazyLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GewdLazyLoaderModule });
GewdLazyLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GewdLazyLoaderModule_Factory(t) { return new (t || GewdLazyLoaderModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](REGISTORY_LAZY_LOADED_MODULE_TOKEN)); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
GewdLazyLoaderModule = GewdLazyLoaderModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REGISTORY_LAZY_LOADED_MODULE_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], GewdLazyLoaderModule);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'gewd-lazy-component',
                template: `
    <ng-container #targetContainer>
    </ng-container>

    <ng-content *ngIf="!component"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { componentCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], componentLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], component: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componentInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componentOutputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], targetContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'gewd-lazy-module-component',
                template: `
    <ng-container #targetContainer></ng-container>
    <ng-content *ngIf="!component || !moduleAlias"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
    <span *ngIf="showError && error" class="error">{{error}}</span>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [`
    .error {
      color: red;
    }
  `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { componentCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], componentLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], showError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], moduleAlias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], component: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componentInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componentOutputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], targetContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GewdLazyLoaderModule, { declarations: function () { return [LazyComponent,
        LazyModuleComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [LazyComponent,
        LazyModuleComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GewdLazyLoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    LazyComponent,
                    LazyModuleComponent
                ],
                exports: [
                    LazyComponent,
                    LazyModuleComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ]
            }]
    }], function () { return [{ type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [REGISTORY_LAZY_LOADED_MODULE_TOKEN]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-lazy-loader.js.map

/***/ }),

/***/ "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-registry.js":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-registry.js ***!
  \**********************************************************************************************/
/*! exports provided: DynamicLoaderRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function() { return DynamicLoaderRegistry; });
class DynamicLoaderRegistry {
    static RegisterLazyComponent(componentName, lazyImport) {
        DynamicLoaderRegistry.LazyComponents[componentName] = lazyImport;
    }
    static RegisterLazyModuleComponent(moduleName, lazyImport) {
        DynamicLoaderRegistry.LazyModuleComponents[moduleName] = lazyImport;
    }
}
// Registry + Cache
DynamicLoaderRegistry.LazyComponents = {};
// Registry
DynamicLoaderRegistry.LazyModuleComponents = {};

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-lazy-registry.js.map

/***/ }),

/***/ "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-utils.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-utils.js ***!
  \*******************************************************************************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
class Lazy {
    constructor(loader) {
        this.loader = loader;
    }
    static create(loader) {
        return new Lazy(loader);
    }
    getValue() {
        if (this.cachedPromise) {
            return this.cachedPromise;
        }
        return this.cachedPromise = this.loader();
    }
    reset() {
        this.cachedPromise = null;
    }
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-lazy-utils.js.map

/***/ }),

/***/ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-contracts.js":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-contracts.js ***!
  \*******************************************************************************************************/
/*! exports provided: DEFAULT_MERMAID_OPTIONS, DEFAULT_PRISM_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function() { return DEFAULT_MERMAID_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function() { return DEFAULT_PRISM_OPTIONS; });
const DEFAULT_PRISM_OPTIONS = {
    assetPath: './assets/prism/',
    languageFileType: 'js',
    languageMap: {
        ts: 'typescript'
    }
};
// https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults
const DEFAULT_MERMAID_OPTIONS = {
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true
    },
    startOnLoad: false,
    theme: 'neutral',
    themeCSS: '.label { font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif !important; font-size: 15px; } .label foreignObject { overflow: visible; }'
};

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-markdown-contracts.js.map

/***/ }),

/***/ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-module.js":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-module.js ***!
  \****************************************************************************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return MarkdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return RenderMarkdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown/service */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");












const _c0 = [[["", "markdown__above", ""]], [["", "markdown__below", ""]]];
const _c1 = ["[markdown__above]", "[markdown__below]"];
let RenderMarkdownComponent = class RenderMarkdownComponent {
    constructor(service, element, sanitizer, cache) {
        this.service = service;
        this.element = element;
        this.sanitizer = sanitizer;
        this.cache = cache;
        this.showRawMd = false;
        this.useCache = false;
        this.allowMermaid = true;
        this.onLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._htmlToShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.parsedHtml$ = this._htmlToShow$;
    }
    get markdown() {
        return this._markdown;
    }
    set markdown(value) {
        if (this._markdown !== value) {
            this._markdown = value;
            if (this.showRawMd) {
                this._htmlToShow$.next(value);
            }
            this.compile();
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.compile();
        });
    }
    onClick(e) {
        let target = e.target;
        let aHref = null;
        while (aHref == null && target != null) {
            if (target.tagName === 'A') {
                aHref = target;
            }
            target = target.parentElement;
        }
        if (aHref) {
            this.onLinkClick.next({
                event: e,
                link: aHref
            });
        }
    }
    compile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.useCache) {
                    const cachedMarkdown = yield this.cache.getCached(this._markdown);
                    if (!!cachedMarkdown) {
                        this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));
                        return;
                    }
                }
                const parsedHtml = yield this.service.compileMarkdown(this._markdown, this.allowMermaid);
                this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));
                if (this.useCache) {
                    this.cache.saveCached(this._markdown, parsedHtml);
                }
            }
            catch (er) {
                console.error(er);
                this._htmlToShow$.next(er);
            }
        });
    }
};
RenderMarkdownComponent.ɵfac = function RenderMarkdownComponent_Factory(t) { return new (t || RenderMarkdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"])); };
RenderMarkdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RenderMarkdownComponent, selectors: [["gewd-markdown"]], hostBindings: function RenderMarkdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RenderMarkdownComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { showRawMd: "showRawMd", useCache: "useCache", allowMermaid: "allowMermaid", markdown: "markdown", mermaidTheme: "mermaidTheme" }, outputs: { onLinkClick: "onLinkClick" }, ngContentSelectors: _c1, decls: 6, vars: 3, consts: [[1, "above"], [3, "innerHTML"], [1, "below"]], template: function RenderMarkdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.parsedHtml$), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     foreignObject{overflow:visible}"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "showRawMd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "useCache", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "allowMermaid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RenderMarkdownComponent.prototype, "mermaidTheme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], RenderMarkdownComponent.prototype, "markdown", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "onLinkClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RenderMarkdownComponent.prototype, "onClick", null);
RenderMarkdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"]])
], RenderMarkdownComponent);

let MarkdownModule = class MarkdownModule {
};
MarkdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MarkdownModule });
MarkdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MarkdownModule_Factory(t) { return new (t || MarkdownModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RenderMarkdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'gewd-markdown',
                template: "<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n",
                styles: [":host ::ng-deep foreignObject{overflow:visible}"]
            }]
    }], function () { return [{ type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"] }]; }, { showRawMd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], useCache: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowMermaid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onLinkClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }], mermaidTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarkdownModule, { declarations: function () { return [RenderMarkdownComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [RenderMarkdownComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [RenderMarkdownComponent],
                exports: [
                    RenderMarkdownComponent
                ],
                providers: []
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-markdown-module.js.map

/***/ }),

/***/ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js ***!
  \*****************************************************************************************************/
/*! exports provided: MarkdownCacheService, MarkdownOptionsInjectorToken, MarkdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return MarkdownCacheService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return MarkdownOptionsInjectorToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return MarkdownService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ "../../node_modules/comlink/dist/esm/comlink.mjs");
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/contracts */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-contracts.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/markdown/utils */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-utils.js");










let MarkdownCacheService = class MarkdownCacheService {
    getCached(rawMarkdown) {
        return Promise.resolve('');
    }
    saveCached(rawMarkdown, renderedMarkdown) {
    }
    getCachedPart(type, raw) {
        return Promise.resolve('');
    }
    saveCachedPart(type, raw, rendered) {
    }
};
MarkdownCacheService.ɵfac = function MarkdownCacheService_Factory(t) { return new (t || MarkdownCacheService)(); };
/** @nocollapse */ MarkdownCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function MarkdownCacheService_Factory() { return new MarkdownCacheService(); }, token: MarkdownCacheService, providedIn: "root" });

const MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MarkdownOptionsInjectorToken');

const compiledRegex = /<div class="mermaid">([\s\S]*?)<\/div>/mg;
let renderId = 0;
/** @dynamic - allows Document in ngc build */
let MarkdownService = class MarkdownService {
    constructor(markdownOptions, cache, document, platformId) {
        this.markdownOptions = markdownOptions;
        this.cache = cache;
        this.document = document;
        this.canTriggerMermaidLoad = false;
        this.mermaidAddedToPage = false;
        this.mermaidCacheKey = '';
        this.mermaidConfig = Object.assign({}, _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MERMAID_OPTIONS"], this.markdownOptions.mermaidOptions);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(platformId)) {
            this.workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_2__["wrap"])(markdownOptions.getWorker());
            if (markdownOptions.options) {
                this.workerProxy.init(markdownOptions.options);
            }
        }
        if (markdownOptions.mermaidPath) {
            this.canTriggerMermaidLoad = true;
            this.mermaidCacheKey = `mermaid_${this.mermaidConfig.theme}_${Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_5__["simpleHash"])(this.mermaidConfig.themeCSS)}`;
        }
    }
    compileMarkdown(str, triggerMermaid = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.workerProxy) {
                return;
            }
            let parsedMarkdown = yield this.workerProxy.compile(str);
            if (triggerMermaid && parsedMarkdown.match(/class="mermaid"/)) {
                yield this.triggerMermaidLoadScript();
                const mermaidInstance = window.mermaid;
                if (mermaidInstance) {
                    const matched = parsedMarkdown.match(compiledRegex);
                    for (const mermaid of matched) {
                        const innerContent = this.cleanUpMermaidRaw(mermaid);
                        let rendered = '';
                        const cached = yield this.cache.getCachedPart(this.mermaidCacheKey, innerContent);
                        if (!!cached) {
                            rendered = cached;
                        }
                        else {
                            let errorStr = "";
                            try {
                                mermaidInstance.parse(innerContent);
                            }
                            catch (e) {
                                errorStr = e.str;
                            }
                            if (!errorStr) {
                                rendered = mermaidInstance.render(`sub${renderId++}`, innerContent, () => {
                                });
                                this.cache.saveCachedPart(this.mermaidCacheKey, innerContent, rendered);
                            }
                            else {
                                rendered = `<pre>${errorStr}\n${innerContent}</pre>`;
                            }
                        }
                        parsedMarkdown = parsedMarkdown.replace(mermaid, `<pre><code class="mermaid">${rendered}</code></pre>`);
                    }
                }
            }
            return parsedMarkdown;
        });
    }
    cleanUpMermaidRaw(mermaidRaw) {
        return mermaidRaw
            .replace(/&gt;/mg, '>')
            .replace(/&lt;/mg, '<')
            .replace('<div class="mermaid">', '')
            .replace('</div>', '');
    }
    triggerMermaidLoadScript() {
        if (!this.canTriggerMermaidLoad) {
            return Promise.resolve();
        }
        if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
            this.mermaidAddedToPage = true;
            const _mermaidNode = this.document.createElement('div');
            _mermaidNode.hidden = true;
            this.document.body.appendChild(_mermaidNode);
            return new Promise((resolve, reject) => {
                const scriptTag = this.document.createElement('script');
                scriptTag.src = this.markdownOptions.mermaidPath;
                // trigger mermaid init
                scriptTag.onload = () => {
                    const mermaid = window.mermaid;
                    mermaid.initialize(this.mermaidConfig);
                    resolve();
                    mermaid.parseError = function (err) {
                        console.error('MarkdownService, Mermaid: ', err);
                    };
                };
                this.document.body.appendChild(scriptTag);
            });
        }
        if (this.canTriggerMermaidLoad && this.mermaidAddedToPage) {
            const mermaidInstance = window.mermaid;
            if (mermaidInstance) {
                return Promise.resolve();
            }
            return Promise.reject();
        }
    }
};
MarkdownService.ɵfac = function MarkdownService_Factory(t) { return new (t || MarkdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownOptionsInjectorToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
/** @nocollapse */ MarkdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function MarkdownService_Factory() { return new MarkdownService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownOptionsInjectorToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); }, token: MarkdownService, providedIn: "root" });
MarkdownService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(MarkdownOptionsInjectorToken)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, MarkdownCacheService,
        Document,
        Object])
], MarkdownService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkdownCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MarkdownOptionsInjectorToken]
            }] }, { type: MarkdownCacheService }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-markdown-service.js.map

/***/ }),

/***/ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-utils.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-utils.js ***!
  \***************************************************************************************************/
/*! exports provided: Lazy, simpleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleHash", function() { return simpleHash; });
class Lazy {
    constructor(loader) {
        this.loader = loader;
    }
    static create(loader) {
        return new Lazy(loader);
    }
    getValue() {
        if (this.cachedPromise) {
            return this.cachedPromise;
        }
        return this.cachedPromise = this.loader();
    }
}

function simpleHash(str) {
    let hash = 0, i, chr;
    if (!str || str.length === 0)
        return '';
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        // tslint:disable-next-line:no-bitwise
        hash = ((hash << 5) - hash) + chr;
        // tslint:disable-next-line:no-bitwise
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-markdown-utils.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-bootstrap-component.js":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-bootstrap-component.js ***!
  \*****************************************************************************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, BootstrapComponentModule, bootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return BOOTSTRAP_COMPONENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return BootstrapComponentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return bootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var BootstrapComponentModule_1;
const BOOTSTRAP_COMPONENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/ng-utils/BootstrapComponentConfig');
function bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig) {
    const domElement = document.createElement(bootstrapConfig.elementName);
    document.body.append(domElement);
    const factory = resolver.resolveComponentFactory(bootstrapConfig.component);
    const ref = factory.create(injector, [], domElement);
    appRef.attachView(ref.hostView);
}
/** @dynamic - allows Document in ngc build */
let BootstrapComponentModule = BootstrapComponentModule_1 = class BootstrapComponentModule {
    static component(useValue) {
        return {
            ngModule: BootstrapComponentModule_1,
            providers: [
                { provide: BOOTSTRAP_COMPONENT_TOKEN, useValue, multi: true }
            ]
        };
    }
    constructor(document, resolver, injector, appRef, bootstrapConfigs) {
        for (const bootstrapConfig of bootstrapConfigs) {
            bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig);
        }
    }
};
BootstrapComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BootstrapComponentModule });
BootstrapComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BootstrapComponentModule_Factory(t) { return new (t || BootstrapComponentModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BOOTSTRAP_COMPONENT_TOKEN)); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
BootstrapComponentModule = BootstrapComponentModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(BOOTSTRAP_COMPONENT_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Array])
], BootstrapComponentModule);
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BootstrapComponentModule, { imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BootstrapComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }, { type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [BOOTSTRAP_COMPONENT_TOKEN]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-bootstrap-component.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-components.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-components.js ***!
  \********************************************************************************************************/
/*! exports provided: SimplePagerComponent, SimplePagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return SimplePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return SimplePagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SimplePagerComponent_ng_template_15_Template(rf, ctx) { }
const _c0 = [[["", "simplePagerTopLeft", ""]], [["", "simplePagerTopRight", ""]]];
const _c1 = function (a0) { return { $implicit: a0 }; };
const _c2 = ["[simplePagerTopLeft]", "[simplePagerTopRight]"];
let SimplePagerComponent = class SimplePagerComponent {
    constructor() {
        this.position = 0;
    }
    ngOnInit() {
    }
    selectPrev() {
        if (this.position === 0) {
            return;
        }
        this.position--;
    }
    selectNext() {
        if (this.position === (this.items.length - 1)) {
            return;
        }
        this.position++;
    }
};
SimplePagerComponent.ɵfac = function SimplePagerComponent_Factory(t) { return new (t || SimplePagerComponent)(); };
SimplePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimplePagerComponent, selectors: [["simple-pager"]], contentQueries: function SimplePagerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { items: "items" }, ngContentSelectors: _c2, decls: 16, vars: 12, consts: [[1, "navigation-row", "flex"], [1, "navigation-row-left"], [1, "navigation-row-panel", "flex"], [1, "left-arrow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], [1, "right-arrow", 3, "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], [1, "position-label"], [1, "navigation-row-right"], [1, "slot"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SimplePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimplePagerComponent_Template_span_click_4_listener() { return ctx.selectPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimplePagerComponent_Template_span_click_7_listener() { return ctx.selectNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](13, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SimplePagerComponent_ng_template_15_Template, 0, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("only-one", (ctx.items == null ? null : ctx.items.length) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.position === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.position === (ctx.items == null ? null : ctx.items.length) - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.position + 1, " of ", ctx.items == null ? null : ctx.items.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.items[ctx.position]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}.left-arrow[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%]{--arrow-color:#fff}.left-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--arrow-color)}.left-arrow[_ngcontent-%COMP%]:hover:not(.disabled), .right-arrow[_ngcontent-%COMP%]:hover:not(.disabled){cursor:pointer}.left-arrow.disabled[_ngcontent-%COMP%], .right-arrow.disabled[_ngcontent-%COMP%]{--arrow-color:grey}.slot[_ngcontent-%COMP%]{position:relative;flex:1;overflow-y:auto}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.position-label[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}.navigation-row-panel[_ngcontent-%COMP%]{flex:1;justify-content:flex-end}"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], SimplePagerComponent.prototype, "templateRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SimplePagerComponent.prototype, "items", void 0);
SimplePagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SimplePagerComponent);

let SimplePagerModule = class SimplePagerModule {
};
SimplePagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SimplePagerModule });
SimplePagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SimplePagerModule_Factory(t) { return new (t || SimplePagerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimplePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'simple-pager',
                template: "<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n",
                styles: [":host{display:flex;flex-direction:column}.left-arrow,.right-arrow{--arrow-color:#fff}.left-arrow svg path,.right-arrow svg path{fill:var(--arrow-color)}.left-arrow:hover:not(.disabled),.right-arrow:hover:not(.disabled){cursor:pointer}.left-arrow.disabled,.right-arrow.disabled{--arrow-color:grey}.slot{position:relative;flex:1;overflow-y:auto}.flex{display:flex;flex-direction:row;align-items:center}.position-label{margin-left:1rem;margin-right:1rem}.navigation-row-panel{flex:1;justify-content:flex-end}"]
            }]
    }], function () { return []; }, { templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SimplePagerModule, { declarations: function () { return [SimplePagerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [SimplePagerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimplePagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [SimplePagerComponent],
                exports: [
                    SimplePagerComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-components.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-css-props.js":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-css-props.js ***!
  \*******************************************************************************************************/
/*! exports provided: CSSPropsDirective, CssPropsModule, CssPropsService, ElementCssService, getStyleElement, replaceCss, updateCssProps, updateDynamicStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return CSSPropsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return CssPropsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return CssPropsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return ElementCssService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleElement", function() { return getStyleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceCss", function() { return replaceCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCssProps", function() { return updateCssProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function() { return updateDynamicStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function updateCssProps(element, cssProps) {
    const { style } = element;
    for (const [k, v] of Object.entries(cssProps)) {
        style.setProperty(k, v.toString(), 'important');
    }
}

// Todo use @gewd/utils for that?
function updateDynamicStyle(document, styleId, customCss) {
    const style = getStyleElement(document, styleId);
    replaceCss(document, style, customCss);
}
function getStyleElement(document, styleId) {
    const head = document.getElementsByTagName('head')[0];
    const allStyles = head.getElementsByTagName('style');
    let style = null;
    for (let styleIndex = 0; styleIndex < allStyles.length; styleIndex++) {
        const styleInHeader = allStyles.item(styleIndex);
        if (styleInHeader.id === styleId) {
            style = styleInHeader;
            break;
        }
    }
    if (style == null) {
        style = document.createElement('style');
        style.id = styleId;
        style.type = 'text/css';
        head.appendChild(style);
    }
    return style;
}
function replaceCss(document, styleTag, customCss) {
    if (styleTag.childNodes.length > 0) {
        styleTag.childNodes.forEach(child => {
            styleTag.removeChild(child);
        });
    }
    styleTag.appendChild(document.createTextNode(customCss));
}

/** @dynamic - allows Document in ngc build */
let CssPropsService = class CssPropsService {
    constructor(document, ngZone) {
        this.document = document;
        this.ngZone = ngZone;
    }
    updateCustomCss(styleId, customCss) {
        this.ngZone.runOutsideAngular(() => {
            updateDynamicStyle(this.document, styleId, customCss);
        });
    }
    updateDocumentVars(cssProps) {
        this.ngZone.runOutsideAngular(() => {
            updateCssProps(this.document.body, cssProps);
        });
    }
    updateElementVars(element, cssProps) {
        this.ngZone.runOutsideAngular(() => {
            updateCssProps(element, cssProps);
        });
    }
};
CssPropsService.ɵfac = function CssPropsService_Factory(t) { return new (t || CssPropsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
/** @nocollapse */ CssPropsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function CssPropsService_Factory() { return new CssPropsService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: CssPropsService, providedIn: "root" });
CssPropsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CssPropsService);

/*
 * Workaround for setting CSS custom properties:
 * https://github.com/angular/angular/issues/9343
 *
 * Cannot work for any style properties.
 */
let CSSPropsDirective = class CSSPropsDirective {
    constructor(element, cssPropsService) {
        this.element = element;
        this.cssPropsService = cssPropsService;
    }
    ngOnChanges({ cssProps }) {
        this.cssPropsService.updateElementVars(this.element.nativeElement, cssProps.currentValue);
    }
};
CSSPropsDirective.ɵfac = function CSSPropsDirective_Factory(t) { return new (t || CSSPropsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CssPropsService)); };
CSSPropsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CSSPropsDirective, selectors: [["", "cssProps", ""]], inputs: { cssProps: "cssProps" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CSSPropsDirective.prototype, "cssProps", void 0);
CSSPropsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        CssPropsService])
], CSSPropsDirective);

/** @dynamic - allows Document in ngc build */
let CssPropsModule = class CssPropsModule {
};
CssPropsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CssPropsModule });
CssPropsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CssPropsModule_Factory(t) { return new (t || CssPropsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });

let ElementCssService = class ElementCssService {
    constructor(cssPropsService, elementRef) {
        this.cssPropsService = cssPropsService;
        this.elementRef = elementRef;
    }
    updateElementVars(cssProps) {
        this.cssPropsService.updateElementVars(this.elementRef.nativeElement, cssProps);
    }
};
ElementCssService.ɵfac = function ElementCssService_Factory(t) { return new (t || ElementCssService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CssPropsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ElementCssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ElementCssService, factory: ElementCssService.ɵfac });
ElementCssService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CssPropsService,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ElementCssService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CssPropsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CSSPropsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cssProps]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: CssPropsService }]; }, { cssProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CssPropsModule, { declarations: function () { return [CSSPropsDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CssPropsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CSSPropsDirective],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ElementCssService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: CssPropsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-css-props.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-dynamic-portal.js":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-dynamic-portal.js ***!
  \************************************************************************************************************/
/*! exports provided: DynamicPortalComponent, DynamicPortalModule, PortalHubService, PortalSourceAction, PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return DynamicPortalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return DynamicPortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return PortalHubService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return PortalSourceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return PortalSourceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");










function DynamicPortalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 2);
} if (rf & 2) {
    const templateRef_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", templateRef_r9);
} }
function DynamicPortalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = ["*"];
class PortalSourceAction {
    constructor(type, key) {
        this.type = type;
        this.key = key;
    }
}
let PortalHubService = class PortalHubService {
    constructor() {
        this.templateSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.templateSourceHub = {};
    }
    getTemplate$(key) {
        return this.templateSourceSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(a => a.key === key), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(a => {
            switch (a.type) {
                case 0 /* Added */: {
                    return this.templateSourceHub[key];
                }
                case 1 /* Removed */: {
                    return null;
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.templateSourceHub[key]));
    }
    registerTemplate(key, templateRef) {
        if (this.templateSourceHub[key]) {
            return;
        }
        this.templateSourceHub[key] = templateRef;
        this.templateSourceSubject.next(new PortalSourceAction(0 /* Added */, key));
    }
    unregisterTemplate(key) {
        if (!this.templateSourceHub[key]) {
            return;
        }
        this.templateSourceHub[key] = null;
        this.templateSourceSubject.next(new PortalSourceAction(1 /* Removed */, key));
    }
};
PortalHubService.ɵfac = function PortalHubService_Factory(t) { return new (t || PortalHubService)(); };
/** @nocollapse */ PortalHubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function PortalHubService_Factory() { return new PortalHubService(); }, token: PortalHubService, providedIn: "root" });
PortalHubService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PortalHubService);

let DynamicPortalComponent = class DynamicPortalComponent {
    constructor(hub) {
        this.hub = hub;
        this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.templateToShow$ = this.key$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(key => this.hub.getTemplate$(key)));
    }
    ngOnInit() {
        this.checkKeyAndPushTemplate();
    }
    ngOnChanges(changes) {
        if (changes['key']) {
            this.checkKeyAndPushTemplate();
        }
    }
    ngOnDestroy() {
    }
    checkKeyAndPushTemplate() {
        this.key$.next(this.key);
    }
};
DynamicPortalComponent.ɵfac = function DynamicPortalComponent_Factory(t) { return new (t || DynamicPortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PortalHubService)); };
DynamicPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DynamicPortalComponent, selectors: [["dynamic-portal"]], inputs: { key: "key" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 4, vars: 6, consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function DynamicPortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DynamicPortalComponent_ng_container_0_Template, 1, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DynamicPortalComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.templateToShow$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.templateToShow$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [""], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], DynamicPortalComponent.prototype, "key", void 0);
DynamicPortalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PortalHubService])
], DynamicPortalComponent);

let PortalSourceDirective = class PortalSourceDirective {
    constructor(templateRef, hub) {
        this.templateRef = templateRef;
        this.hub = hub;
    }
    ngOnChanges(changes) {
        const keyChange = changes['key'];
        if (keyChange) {
            if (keyChange.previousValue) {
                this.unregisterTemplate(keyChange.previousValue);
            }
            this.registerTemplate(keyChange.currentValue);
        }
    }
    ngOnDestroy() {
        this.unregisterTemplate(this.key);
    }
    ngOnInit() {
        if (!this.key) {
            return;
        }
        this.registerTemplate(this.key);
    }
    registerTemplate(key) {
        this.hub.registerTemplate(key, this.templateRef);
    }
    unregisterTemplate(key) {
        this.hub.unregisterTemplate(key);
    }
};
PortalSourceDirective.ɵfac = function PortalSourceDirective_Factory(t) { return new (t || PortalSourceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PortalHubService)); };
PortalSourceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: PortalSourceDirective, selectors: [["", "dynamicPortalSource", ""]], inputs: { key: ["dynamicPortalSource", "key"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dynamicPortalSource'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PortalSourceDirective.prototype, "key", void 0);
PortalSourceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        PortalHubService])
], PortalSourceDirective);

let DynamicPortalModule = class DynamicPortalModule {
};
DynamicPortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DynamicPortalModule });
DynamicPortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DynamicPortalModule_Factory(t) { return new (t || DynamicPortalModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortalHubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dynamic-portal',
                template: "<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [""]
            }]
    }], function () { return [{ type: PortalHubService }]; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortalSourceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[dynamicPortalSource]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: PortalHubService }]; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['dynamicPortalSource']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DynamicPortalModule, { declarations: function () { return [DynamicPortalComponent,
        PortalSourceDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [DynamicPortalComponent,
        PortalSourceDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicPortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [DynamicPortalComponent, PortalSourceDirective],
                exports: [
                    DynamicPortalComponent,
                    PortalSourceDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: []
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-dynamic-portal.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-morphdom.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-morphdom.js ***!
  \******************************************************************************************************/
/*! exports provided: MorphdomDirective, MorphdomModule, MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return MorphdomDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return MorphdomModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return MorphdomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morphdom */ "../../node_modules/morphdom/dist/morphdom-esm.js");







let MorphdomService = class MorphdomService {
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    morphElement(element, newElementContent, options) {
        this.ngZone.runOutsideAngular(() => {
            Object(morphdom__WEBPACK_IMPORTED_MODULE_3__["default"])(element.nativeElement, newElementContent, options);
        });
    }
};
MorphdomService.ɵfac = function MorphdomService_Factory(t) { return new (t || MorphdomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
/** @nocollapse */ MorphdomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function MorphdomService_Factory() { return new MorphdomService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: MorphdomService, providedIn: "root" });
MorphdomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MorphdomService);

let MorphdomDirective = class MorphdomDirective {
    constructor(element, morphService) {
        this.element = element;
        this.morphService = morphService;
        this.tagName = 'div';
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges({ morphDom }) {
        if (morphDom && morphDom.currentValue) {
            this.morphService.morphElement(this.element, `<${this.tagName}>${morphDom.currentValue}</${this.tagName}>`, this.options);
            this.done.emit(this.element);
        }
    }
};
MorphdomDirective.ɵfac = function MorphdomDirective_Factory(t) { return new (t || MorphdomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MorphdomService)); };
MorphdomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MorphdomDirective, selectors: [["", "morphDom", ""]], inputs: { tagName: "tagName", morphDom: "morphDom", options: "options" }, outputs: { done: "done" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('morphDom'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], MorphdomDirective.prototype, "morphDom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MorphdomDirective.prototype, "tagName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MorphdomDirective.prototype, "options", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MorphdomDirective.prototype, "done", void 0);
MorphdomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        MorphdomService])
], MorphdomDirective);

let MorphdomModule = class MorphdomModule {
};
MorphdomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MorphdomModule });
MorphdomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MorphdomModule_Factory(t) { return new (t || MorphdomModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MorphdomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MorphdomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[morphDom]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: MorphdomService }]; }, { tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], done: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], morphDom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['morphDom']
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MorphdomModule, { declarations: function () { return [MorphdomDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [MorphdomDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MorphdomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [MorphdomDirective],
                exports: [
                    MorphdomDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-morphdom.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-error-overlay.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-error-overlay.js ***!
  \**************************************************************************************************************/
/*! exports provided: NgErrorComponent, NgErrorOverlayModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return NgErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return NgErrorOverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NG_ERROR_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ErrorHandlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ErrorOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-css-props.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! error-stack-parser */ "../../node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gewd/ng-utils/bootstrap-component */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-bootstrap-component.js");
/* harmony import */ var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gewd/ng-utils/components */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-components.js");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-dynamic-portal.js");



















function NgErrorComponent_ng_container_0_div_1_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.name);
} }
function NgErrorComponent_ng_container_0_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgErrorComponent_ng_container_0_div_1_ng_template_4_ng_template_0_Template, 2, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "error-overlay", 9);
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dynamicPortalSource", "errorName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("error", item_r15);
} }
function NgErrorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "simple-pager", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dynamic-portal", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgErrorComponent_ng_container_0_div_1_ng_template_4_Template, 2, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgErrorComponent_ng_container_0_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errors_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", errors_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("key", "errorName");
} }
function NgErrorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgErrorComponent_ng_container_0_div_1_Template, 8, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r11.visible$));
} }
function ErrorOverlayComponent_div_7_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const stack_r23 = ctx.$implicit;
    const odd_r24 = ctx.odd;
    const even_r25 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", odd_r24)("even", even_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r23.functionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r23.lineNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stack_r23.columnNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", odd_r24)("even", even_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", stack_r23.fileName, "");
} }
function ErrorOverlayComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\nStack:\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Function Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Line Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Column Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ErrorOverlayComponent_div_7_ng_container_10_Template, 11, 12, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.errorStack);
} }
const DEFAULT_CONFIG = {
    zIndex: 10000,
    ignoreErrors: []
};
const NG_ERROR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/ng-utils/NgErrorConfig');
let ErrorHandlerService = class ErrorHandlerService {
    constructor(config) {
        this.config = config;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.config = Object.assign({}, DEFAULT_CONFIG, config);
        window.addEventListener('error', ev => {
            this.handleError(ev.error);
        });
    }
    handleError(error) {
        if (this.config.ignoreErrors.includes(error.name)) {
            return;
        }
        this.error$.next({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
    }
};
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NG_ERROR_CONFIG_TOKEN, 8)); };
/** @nocollapse */ ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function ErrorHandlerService_Factory() { return new ErrorHandlerService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NG_ERROR_CONFIG_TOKEN, 8)); }, token: ErrorHandlerService, providedIn: "root" });
ErrorHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ERROR_CONFIG_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], ErrorHandlerService);

let NgErrorComponent = class NgErrorComponent {
    constructor(errorService, cd, cssProps, element) {
        this.errorService = errorService;
        this.cd = cd;
        this.cssProps = cssProps;
        this.element = element;
        this.showIndex = 0;
        this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.errors$ = this.errorService.error$.pipe(
        // add all errors to an array
        // only keep the newest 10
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((a, c) => [c, ...a].slice(0, 10), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => value.filter(v => !!v)));
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        cssProps.updateElementVars(element.nativeElement, {
            '--overlay-zindex': errorService.config.zIndex
        });
    }
    ngOnInit() {
        this.errors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$)).subscribe(value => {
            this.visible$.next(value.length > 0);
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    hide() {
        this.visible$.next(false);
    }
};
NgErrorComponent.ɵfac = function NgErrorComponent_Factory(t) { return new (t || NgErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ErrorHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["CssPropsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NgErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgErrorComponent, selectors: [["ng-error"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "fullscreen", 4, "ngIf"], [1, "fullscreen"], [3, "items"], ["simplePagerTopLeft", ""], [3, "key"], ["simplePagerTopRight", ""], [1, "mat-focus-indicator", "mat-button", "mat-raised-button", "mat-button-base", 3, "click"], [3, "dynamicPortalSource"], [3, "error"], [1, "error-next-to-navigation"]], template: function NgErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgErrorComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.errors$));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_8__["SimplePagerComponent"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_9__["DynamicPortalComponent"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_9__["PortalSourceDirective"], ErrorOverlayComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]]; }, styles: [".fullscreen[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:100vw;background:rgba(69,69,69,.8666666666666667);overflow:auto;z-index:var(--overlay-zindex)}.fullscreen[_ngcontent-%COMP%]   simple-pager[_ngcontent-%COMP%]{height:calc(100% - 2rem);padding:1rem}.fullscreen[_ngcontent-%COMP%]   simple-pager[_ngcontent-%COMP%]     .navigation-row-panel.only-one{opacity:0}.fullscreen[_ngcontent-%COMP%]     .error-name{display:none}.close-button[_ngcontent-%COMP%]{position:fixed;top:2rem;right:2rem}.error-next-to-navigation[_ngcontent-%COMP%]{color:red;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2}"] });
NgErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ErrorHandlerService,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["CssPropsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], NgErrorComponent);

let ErrorOverlayComponent = class ErrorOverlayComponent {
    constructor() { }
    ngOnInit() {
        this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_6___default.a.parse(this.error);
    }
};
ErrorOverlayComponent.ɵfac = function ErrorOverlayComponent_Factory(t) { return new (t || ErrorOverlayComponent)(); };
ErrorOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorOverlayComponent, selectors: [["error-overlay"]], inputs: { error: "error" }, decls: 8, vars: 3, consts: [[1, "error-info"], [1, "error", "error-name"], [1, "error"], ["class", "stack-block", 4, "ngIf"], [1, "stack-block"], [1, "stack-table"], [1, "align-left"], [1, "align-right"], [4, "ngFor", "ngForOf"], [1, "row"], ["colspan", "3", 1, "row"]], template: function ErrorOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\nError Message: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ErrorOverlayComponent_div_7_Template, 11, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.error.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.error.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error.stack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["[_nghost-%COMP%]{color:#e8e8e8;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2;white-space:pre-wrap;display:flex;flex-direction:column;height:100%}.error[_ngcontent-%COMP%]{color:red}.stack-block[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow-y:auto}.stack-table[_ngcontent-%COMP%]{margin-top:2rem;width:100%}.align-left[_ngcontent-%COMP%]{text-align:left}.align-right[_ngcontent-%COMP%]{text-align:right}.row.even[_ngcontent-%COMP%]{background:hsla(0,0%,66.7%,.25098039215686274)}.row.odd[_ngcontent-%COMP%]{background:hsla(0,0%,80%,.25098039215686274)}"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ErrorOverlayComponent.prototype, "error", void 0);
ErrorOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorOverlayComponent);

var NgErrorOverlayModule_1;
let NgErrorOverlayModule = NgErrorOverlayModule_1 = class NgErrorOverlayModule {
    static config(useValue) {
        return {
            ngModule: NgErrorOverlayModule_1,
            providers: [
                { provide: NG_ERROR_CONFIG_TOKEN, useValue }
            ]
        };
    }
};
NgErrorOverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgErrorOverlayModule });
NgErrorOverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgErrorOverlayModule_Factory(t) { return new (t || NgErrorOverlayModule)(); }, providers: [
        ErrorHandlerService,
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useExisting: ErrorHandlerService },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponentModule"].component({
                elementName: 'ng-error',
                component: NgErrorComponent
            }),
            _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_8__["SimplePagerModule"],
            _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_9__["DynamicPortalModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NG_ERROR_CONFIG_TOKEN]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-error',
                template: "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n",
                styles: [".fullscreen{position:fixed;top:0;left:0;height:100vh;width:100vw;background:rgba(69,69,69,.8666666666666667);overflow:auto;z-index:var(--overlay-zindex)}.fullscreen simple-pager{height:calc(100% - 2rem);padding:1rem}.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one{opacity:0}.fullscreen ::ng-deep .error-name{display:none}.close-button{position:fixed;top:2rem;right:2rem}.error-next-to-navigation{color:red;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2}"]
            }]
    }], function () { return [{ type: ErrorHandlerService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["CssPropsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'error-overlay',
                template: "<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n",
                styles: [":host{color:#e8e8e8;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2;white-space:pre-wrap;display:flex;flex-direction:column;height:100%}.error{color:red}.stack-block{flex:1;display:flex;flex-direction:column;overflow-y:auto}.stack-table{margin-top:2rem;width:100%}.align-left{text-align:left}.align-right{text-align:right}.row.even{background:hsla(0,0%,66.7%,.25098039215686274)}.row.odd{background:hsla(0,0%,80%,.25098039215686274)}"]
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgErrorOverlayModule, { declarations: function () { return [NgErrorComponent,
        ErrorOverlayComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponentModule"], _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_8__["SimplePagerModule"],
        _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_9__["DynamicPortalModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgErrorOverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NgErrorComponent, ErrorOverlayComponent],
                entryComponents: [NgErrorComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponentModule"].component({
                        elementName: 'ng-error',
                        component: NgErrorComponent
                    }),
                    _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_8__["SimplePagerModule"],
                    _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_9__["DynamicPortalModule"]
                ],
                providers: [
                    ErrorHandlerService,
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useExisting: ErrorHandlerService },
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-ng-error-overlay.js.map

/***/ }),

/***/ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-inspect.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-inspect.js ***!
  \********************************************************************************************************/
/*! exports provided: NgInspectComponent, NgInspectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function() { return NgInspectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgInspectModule", function() { return NgInspectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gewd/ng-utils/bootstrap-component */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-bootstrap-component.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");


















function NgInspectComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_1_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const context_r35 = ctx_r42.context; const item_r34 = ctx_r42.item; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.onChangeGeneric($event.checked, context_r35, item_r34.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const context_r35 = ctx_r43.context;
    const item_r34 = ctx_r43.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", context_r35.instance[item_r34.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r34.key, " ");
} }
function NgInspectComponent_ng_template_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_2_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const context_r35 = ctx_r47.context; const item_r34 = ctx_r47.item; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.onChangeGeneric(_r44.value, context_r35, item_r34.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const context_r35 = ctx_r48.context;
    const item_r34 = ctx_r48.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", context_r35.instance[item_r34.key])("placeholder", item_r34.key);
} }
function NgInspectComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_3_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const context_r35 = ctx_r52.context; const item_r34 = ctx_r52.item; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.onChangeGeneric(_r49.value, context_r35, item_r34.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const context_r35 = ctx_r53.context;
    const item_r34 = ctx_r53.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", context_r35.instance[item_r34.key])("placeholder", item_r34.key);
} }
function NgInspectComponent_ng_template_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 13, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_4_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const context_r35 = ctx_r57.context; const item_r34 = ctx_r57.item; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.onChangeGeneric(_r54.value, context_r35, item_r34.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const context_r35 = ctx_r58.context;
    const item_r34 = ctx_r58.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", context_r35.instance[item_r34.key])("placeholder", item_r34.key);
} }
function NgInspectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgInspectComponent_ng_template_0_ng_container_1_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgInspectComponent_ng_template_0_ng_container_2_Template, 4, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgInspectComponent_ng_template_0_ng_container_3_Template, 4, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgInspectComponent_ng_template_0_ng_container_4_Template, 4, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", item_r34.propInfo.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "color");
} }
function NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_ng_template_0_Template(rf, ctx) { }
function NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c0 = function (a0, a1) { return { item: a0, context: a1 }; };
function NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_Template, 1, 0, undefined, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r26)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, item_r62, context_r60));
} }
function NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 28);
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r77.byPassAttr("--bg-color:" + context_r60.instance[item_r62.key]));
} }
function NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_span_4_Template, 1, 2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r62.key, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r62.propInfo.type === "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", context_r60.instance[item_r62.key], "");
} }
function NgInspectComponent_ng_template_2_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_Template, 2, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_Template, 6, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r62.propInfo.canEdit && item_r62.editMode)("ngIfElse", _r71);
} }
function NgInspectComponent_ng_template_2_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r62.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, context_r60.instance[item_r62.key])));
} }
function NgInspectComponent_ng_template_2_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgInspectComponent_ng_template_2_div_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r85.toggleEdit(item_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgInspectComponent_ng_template_2_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgInspectComponent_ng_template_2_div_0_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.onPinOp(context_r60, item_r62.key, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgInspectComponent_ng_template_2_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgInspectComponent_ng_template_2_div_0_ng_template_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.onPinOp(context_r60, item_r62.key, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgInspectComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgInspectComponent_ng_template_2_div_0_ng_container_2_Template, 4, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgInspectComponent_ng_template_2_div_0_ng_container_3_Template, 9, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgInspectComponent_ng_template_2_div_0_div_4_Template, 4, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgInspectComponent_ng_template_2_div_0_div_6_Template, 7, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgInspectComponent_ng_template_2_div_0_ng_template_7_Template, 4, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    const odd_r63 = ctx.odd;
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const context_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().context;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", odd_r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", item_r62.propInfo.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "observable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r62.propInfo.canEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.isPinned(context_r60, item_r62.key))("ngIfElse", _r68);
} }
function NgInspectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgInspectComponent_ng_template_2_div_0_Template, 9, 7, "div", 14);
} if (rf & 2) {
    const items_r59 = ctx.items;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", items_r59)("ngForTrackBy", ctx_r29.trackByEntry);
} }
function NgInspectComponent_ng_container_5_div_1_3_ng_template_0_Template(rf, ctx) { }
function NgInspectComponent_ng_container_5_div_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgInspectComponent_ng_container_5_div_1_3_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c1 = function (a0, a1) { return { items: a0, context: a1 }; };
function NgInspectComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgInspectComponent_ng_container_5_div_1_3_Template, 1, 0, undefined, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pinnedItem_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pinnedItem_r99.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r28)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, pinnedItem_r99.entries, pinnedItem_r99.context));
} }
function NgInspectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgInspectComponent_ng_container_5_div_1_Template, 4, 6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pinnedItems_r97 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", pinnedItems_r97);
} }
function NgInspectComponent_div_7_3_ng_template_0_Template(rf, ctx) { }
function NgInspectComponent_div_7_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgInspectComponent_div_7_3_ng_template_0_Template, 0, 0, "ng-template");
} }
function NgInspectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgInspectComponent_div_7_3_Template, 1, 0, undefined, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r102 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](component_r102.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r28)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, component_r102.entries, component_r102.context));
} }
function NgInspectComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Press/hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ctrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " to select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " your component to inspect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var NgInspectComponent_1;
const highlightClass = 'highlight-item';
/** @dynamic - allows Document in ngc build */
let NgInspectComponent = NgInspectComponent_1 = class NgInspectComponent {
    constructor(cd, sanitizer, document) {
        this.cd = cd;
        this.sanitizer = sanitizer;
        this.document = document;
        this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.pinnedItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.pinnedMap = new WeakMap();
        this.pinnedAr = [];
        this.ng = window && window.ng;
        this.IVY_MODE = this.ng && !!this.ng.getComponent;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.trackByEntry = (index, item) => item.key;
        if (!NgInspectComponent_1._addedStyle) {
            NgInspectComponent_1._addedStyle = true;
            const style = document.createElement('style');
            // WebKit hack :(
            style.appendChild(document.createTextNode(''));
            // Add the <style> element to the page
            document.head.appendChild(style);
            style.sheet.addRule(`.${highlightClass}`, 'border: 2px dotted lightblue !important;');
        }
        const weakMap = new WeakMap();
        const highlightItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        highlightItem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), 
        //filter(item => !!item),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])()).subscribe(([oldItem, current]) => {
            if (current) {
                current.classList.add(highlightClass);
            }
            if (oldItem) {
                oldItem.classList.remove(highlightClass);
            }
        });
        const keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e.ctrlKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true));
        const keyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => e.ctrlKey));
        const isActive$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(keyDown$, keyUp$);
        isActive$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(value => value
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.getCurrentElement()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(x => console.info({ x })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => !!e && !this.isChildOfIgnoredElement(e.target)))
            : rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])((x, y) => x.target === y.target)).subscribe(event => {
            const { target } = event;
            const elementWithContext = this.findNextContext(target);
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
                        .map(([key, value]) => ({ key, propInfo: this.getPropInfo(value) }))
                        .filter(e => !!e.propInfo);
                    const found = {
                        context,
                        keys: Object.keys(instance),
                        entries,
                        name: instance.__proto__.constructor.name
                    };
                    this.component$.next(found);
                }
                else {
                    highlightItem$.next(null);
                    this.component$.next(null);
                }
            }
            else {
                highlightItem$.next(null);
                this.component$.next(null);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onChangeGeneric(value, context, key) {
        context.instance[key] = value;
        context.cd.markForCheck();
        this.cd.markForCheck();
    }
    onPinOp(context, prop, pin) {
        let pinnedEntry = null;
        if (this.pinnedMap.has(context)) {
            pinnedEntry = this.pinnedMap.get(context);
        }
        else {
            pinnedEntry = { pinned: [] };
            this.pinnedMap.set(context, pinnedEntry);
        }
        if (pin) {
            pinnedEntry.pinned.push(prop);
            if (!this.pinnedAr.includes(context)) {
                this.pinnedAr.push(context);
            }
        }
        else {
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
    isPinned(context, prop) {
        if (this.pinnedMap.has(context)) {
            return this.pinnedMap.get(context).pinned.includes(prop);
        }
        else {
            return false;
        }
    }
    getPropInfo(value) {
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
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["isObservable"])(value)) {
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
    toggleEdit(item) {
        item.editMode = !item.editMode;
    }
    byPassAttr(value) {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    }
    getCurrentElement() {
        const hovering = this.document.querySelectorAll(':hover');
        if (hovering.length > 0) {
            return {
                target: hovering.item(hovering.length - 1)
            };
        }
        return null;
    }
    isChildOfIgnoredElement(element) {
        while (element) {
            const containsAttr = element.hasAttribute('ignore-inspect');
            if (containsAttr) {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    }
    getComponent(element) {
        if (this.IVY_MODE) {
            const component = this.ng.getComponent(element)
                || this.ng.getContext(element);
            return {
                instance: component,
                cd: this.cd
            };
        }
        else {
            const probe = this.ng.probe(element);
            if (probe) {
                return {
                    instance: probe.context,
                    cd: probe.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])
                };
            }
            return null;
        }
    }
    fillPinnedArray() {
        const pinnedItems = [];
        for (const context of this.pinnedAr) {
            const { instance } = context;
            pinnedItems.push({
                name: instance.__proto__.constructor.name,
                context,
                entries: this.pinnedMap.get(context).pinned.map(key => ({
                    key,
                    propInfo: this.getPropInfo(instance[key])
                }))
            });
        }
        this.pinnedItems$.next(pinnedItems);
    }
    findNextContext(element) {
        if (!this.IVY_MODE) {
            return element;
        }
        while (element && !this.getContext(element)) {
            element = element.parentElement;
        }
        return element;
    }
    getContext(element) {
        return element.__ngContext__;
    }
};
NgInspectComponent.ɵfac = function NgInspectComponent_Factory(t) { return new (t || NgInspectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
NgInspectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgInspectComponent, selectors: [["ng-inspect"]], decls: 11, vars: 7, consts: [["itemEdit", ""], ["itemsListTemplate", ""], ["ignore-inspect", "", 1, "debug-panel"], [4, "ngIf"], ["class", "panel-background", 4, "ngIf", "ngIfElse"], ["nothing", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "checked", "change"], ["type", "number", "matInput", "", 3, "value", "placeholder", "change"], ["number", ""], ["type", "text", "matInput", "", 3, "value", "placeholder", "change"], ["text", ""], ["type", "color", "matInput", "", 3, "value", "placeholder", "change"], ["class", "item-row", 3, "odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "item-row"], [2, "flex", "1", 3, "ngSwitch"], [4, "ngSwitchDefault"], ["class", "icon", 3, "click", 4, "ngIf"], [1, "icon"], [3, "click", 4, "ngIf", "ngIfElse"], ["unpinned", ""], [4, "ngIf", "ngIfElse"], ["readOnly", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-hint"], [1, "prop-value"], ["class", "color-box", 3, "style", 4, "ngIf"], [1, "color-box"], [1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z", 1, "svg-color"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0,0h24v24H0V0z", "fill", "none"], ["d", "M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z", 1, "svg-color"], ["d", "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z", 1, "svg-color"], ["class", "panel-background", 4, "ngFor", "ngForOf"], [1, "panel-background"], [1, "panel-background", "center-text"]], template: function NgInspectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgInspectComponent_ng_template_0_Template, 5, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgInspectComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgInspectComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgInspectComponent_div_7_Template, 4, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NgInspectComponent_ng_template_9_Template, 7, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, ctx.pinnedItems$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, ctx.component$))("ngIfElse", _r32);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".debug-panel[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;max-height:500px;overflow:auto;z-index:10;color:#fff}.debug-panel[_ngcontent-%COMP%]   .panel-background[_ngcontent-%COMP%]{background:#4f4f4f;border:2px dashed #4f8cc9;border-radius:10px;padding:10px;margin-bottom:10px;min-width:150px;max-width:400px}.debug-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0}.debug-panel[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer;height:20px;width:20px;margin-left:2px;margin-right:2px}.debug-panel[_ngcontent-%COMP%]   .svg-color[_ngcontent-%COMP%]{fill:#fff}.debug-panel[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{font-size:12px;color:#fff}.debug-panel[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%]{text-align:center}.debug-panel[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]{display:flex;align-items:flex-end}.debug-panel[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .prop-value[_ngcontent-%COMP%]{background:#595959}.debug-panel[_ngcontent-%COMP%]   .item-row.odd[_ngcontent-%COMP%]   .prop-value[_ngcontent-%COMP%]{background:#7d7d7d}.debug-panel[_ngcontent-%COMP%]   .prop-value[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;width:250px}.debug-panel[_ngcontent-%COMP%]     mat-form-field{margin-bottom:-1.15em;width:100%}.debug-panel[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%]{--bg-color:grey;width:16px;height:16px;background:var(--bg-color);margin-right:2px;display:inline-block;border:1px solid #fff}.debug-panel[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0,0,0,.2),inset 0 2px 0 0 hsla(0,0%,100%,.7);color:#333;display:inline-block;font-size:.85em;font-weight:700;line-height:1;padding:2px 4px;white-space:nowrap}"] });
NgInspectComponent._addedStyle = false;
NgInspectComponent = NgInspectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        Document])
], NgInspectComponent);

let NgInspectModule = class NgInspectModule {
};
NgInspectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgInspectModule });
NgInspectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgInspectModule_Factory(t) { return new (t || NgInspectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_8__["BootstrapComponentModule"].component({
                elementName: 'ng-inspect',
                component: NgInspectComponent
            })
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgInspectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-inspect',
                template: "<ng-template  #itemEdit let-item=\"item\" let-context=\"context\">\n  <div [ngSwitch]=\"item.propInfo.type\">\n    <ng-container *ngSwitchCase=\"'boolean'\">\n      <mat-checkbox [checked]=\"context.instance[item.key]\"\n                    (change)=\"onChangeGeneric($event.checked, context, item.key)\">\n        {{ item.key }}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'number'\">\n      <mat-form-field>\n        <input type=\"number\" [value]=\"context.instance[item.key]\" #number\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(number.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'string'\">\n      <mat-form-field>\n        <input type=\"text\" [value]=\"context.instance[item.key]\" #text\n                matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'color'\">\n      <mat-form-field>\n        <input type=\"color\"\n               [value]=\"context.instance[item.key]\" #text\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #itemsListTemplate let-items=\"items\" let-context=\"context\">\n  <div *ngFor=\"let item of items; let odd = odd; trackBy: trackByEntry\"\n       class=\"item-row\"\n       [class.odd]=\"odd\"\n  >\n    <div [ngSwitch]=\"item.propInfo.type\" style=\"flex: 1\">\n      <ng-container *ngSwitchDefault>\n        <div *ngIf=\"item.propInfo.canEdit && item.editMode; else readOnly\">\n\n          <ng-template *ngTemplateOutlet=\"itemEdit; context: {\n          item: item,\n          context: context\n        }\">\n          </ng-template>\n        </div>\n\n        <ng-template #readOnly>\n          <span class=\"mat-hint\">{{item.key}}:</span>\n          <br />\n          <span class=\"prop-value\">\n            <span *ngIf=\"item.propInfo.type === 'color'\"\n                 [style]=\"byPassAttr('--bg-color:'+context.instance[item.key])\"\n                  class=\"color-box\">\n\n            </span>\n            {{context.instance[item.key]}}</span>\n        </ng-template>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'observable'\">\n        <span class=\"mat-hint\">{{item.key}}</span>:\n        <br />\n        <span class=\"prop-value\">{{context.instance[item.key] | async | json}}</span>\n      </ng-container>\n    </div>\n    <div class=\"icon\" *ngIf=\"item.propInfo.canEdit\"\n         (click)=\"toggleEdit(item)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z\"/></svg>\n    </div>\n    <div class=\"icon\">\n      <div *ngIf=\"isPinned(context, item.key), else unpinned\"\n           (click)=\"onPinOp(context, item.key, false)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\n             enable-background=\"new 0 0 24 24\"\n             height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <g><path d=\"M0,0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M0,0h24v24H0V0z\" fill=\"none\"/></g>\n          <g><path  class=\"svg-color\" d=\"M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z\"/></g></svg>\n      </div>\n      <ng-template #unpinned>\n        <div (click)=\"onPinOp(context, item.key, true)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\"\n               height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/></svg>\n        </div>\n      </ng-template>\n    </div>\n\n  </div>\n</ng-template>\n\n<div class=\"debug-panel\" ignore-inspect>\n  <ng-container *ngIf=\"pinnedItems$ | async as pinnedItems\">\n    <div class=\"panel-background\" *ngFor=\"let pinnedItem of pinnedItems\">\n      <h4>{{pinnedItem.name}}</h4>\n\n      <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: pinnedItem.entries,\n          context: pinnedItem.context\n        }\">\n      </ng-template>\n    </div>\n  </ng-container>\n\n  <div class=\"panel-background\" *ngIf=\"component$ | async as component; else nothing\">\n    <h4>{{component.name}}</h4>\n\n    <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: component.entries,\n          context: component.context\n        }\">\n    </ng-template>\n  </div>\n  <ng-template #nothing>\n    <div class=\"panel-background center-text\">\n      Press/hold <kbd>ctrl</kbd> to select <br/>\n      your component to inspect\n    </div>\n  </ng-template>\n</div>\n",
                styles: [".debug-panel{position:fixed;bottom:10px;right:10px;max-height:500px;overflow:auto;z-index:10;color:#fff}.debug-panel .panel-background{background:#4f4f4f;border:2px dashed #4f8cc9;border-radius:10px;padding:10px;margin-bottom:10px;min-width:150px;max-width:400px}.debug-panel h4{margin-top:0}.debug-panel .icon{cursor:pointer;height:20px;width:20px;margin-left:2px;margin-right:2px}.debug-panel .svg-color{fill:#fff}.debug-panel .mat-hint{font-size:12px;color:#fff}.debug-panel .center-text{text-align:center}.debug-panel .item-row{display:flex;align-items:flex-end}.debug-panel .item-row .prop-value{background:#595959}.debug-panel .item-row.odd .prop-value{background:#7d7d7d}.debug-panel .prop-value{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;width:250px}.debug-panel ::ng-deep mat-form-field{margin-bottom:-1.15em;width:100%}.debug-panel .color-box{--bg-color:grey;width:16px;height:16px;background:var(--bg-color);margin-right:2px;display:inline-block;border:1px solid #fff}.debug-panel kbd{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0,0,0,.2),inset 0 2px 0 0 hsla(0,0%,100%,.7);color:#333;display:inline-block;font-size:.85em;font-weight:700;line-height:1;padding:2px 4px;white-space:nowrap}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgInspectModule, { declarations: function () { return [NgInspectComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_8__["BootstrapComponentModule"]]; }, exports: function () { return [NgInspectComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgInspectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NgInspectComponent],
                entryComponents: [NgInspectComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_8__["BootstrapComponentModule"].component({
                        elementName: 'ng-inspect',
                        component: NgInspectComponent
                    })
                ],
                exports: [
                    NgInspectComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=gewd-ng-utils-ng-inspect.js.map

/***/ }),

/***/ "../../libs/components/highlight-editor/editor.functions.ts":
/*!****************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/editor.functions.ts ***!
  \****************************************************************************************/
/*! exports provided: handleTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return handleTab; });
function handleTab(event, currentValue, startSelection, endSelection, useTabs = false, spaceLength = 2) {
    const result = {
        textChanged: false,
        newValue: '',
        newSelectionStart: 0,
        newSelectionEnd: 0
    };
    if (event.key !== "Tab") {
        return result;
    }
    const backwards = event.shiftKey;
    const valueToWork = useTabs
        ? '\t'
        : ''.padEnd(spaceLength, ' ');
    const textValueUntilStart = currentValue.substr(0, startSelection);
    const textValueFromStart = currentValue.substr(endSelection);
    if (backwards) {
        if (textValueUntilStart.endsWith(valueToWork)) {
            result.newValue = textValueUntilStart.substr(0, startSelection - valueToWork.length) + textValueFromStart;
            result.newSelectionStart = result.newSelectionEnd = startSelection - valueToWork.length;
            result.textChanged = true;
        }
    }
    else {
        result.newValue = textValueUntilStart + valueToWork + textValueFromStart;
        result.newSelectionStart = result.newSelectionEnd = startSelection + valueToWork.length;
        result.textChanged = true;
    }
    event.preventDefault();
    return result;
}


/***/ }),

/***/ "../../libs/components/highlight-editor/editor.keys.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/editor.keys.ts ***!
  \***********************************************************************************/
/*! exports provided: KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return KEY_BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return KEY_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return KEY_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return KEY_ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return KEY_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function() { return KEY_ARROW_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function() { return KEY_ARROW_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function() { return KEY_ARROW_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function() { return KEY_ARROW_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function() { return KEY_SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ALT", function() { return KEY_ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function() { return KEY_CTRL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_META", function() { return KEY_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function() { return KEY_CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function() { return ALL_CHARS_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function() { return IGNORE_KEY_EVENTS; });
const KEY_BACKSPACE = "Backspace";
const KEY_DELETE = "Delete";
const KEY_ENTER = "Enter";
const KEY_ESCAPE = "Escape";
const KEY_TAB = "Tab";
const KEY_ARROW_UP = "ArrowUp";
const KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_LEFT = "ArrowLeft";
const KEY_ARROW_RIGHT = "ArrowRight";
const KEY_SHIFT = "Shift";
const KEY_ALT = "Alt";
const KEY_CTRL = "Control";
const KEY_META = "Meta";
const KEY_CAPS_LOCK = "CapsLock";
const ALL_CHARS_REGEX = /^[1234567890a-zA-ZäöüÄÖÜ,;.:\-_#+`´?(){}|\[\]@]+$/;
const IGNORE_KEY_EVENTS = [
    KEY_ARROW_UP, KEY_ARROW_DOWN,
    KEY_ARROW_LEFT, KEY_ARROW_RIGHT,
    KEY_SHIFT, KEY_ALT, KEY_CTRL,
    KEY_META, KEY_CAPS_LOCK, KEY_ESCAPE
];


/***/ }),

/***/ "../../libs/components/highlight-editor/highlight-editor.component.scss":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #2e2e2e;\n  display: block;\n  border: 1px solid lightgray;\n  padding: 4px;\n  --editor-min-height: 100px;\n  --editor-max-height: 100px;\n  --editor-font-size: 14px;\n  --editor-line-height: 1.5;\n  overflow-y: auto;\n  min-height: var(--editor-min-height);\n  max-height: var(--editor-max-height);\n}\n:host :host-context(.mat-form-field) {\n  border: 0;\n  padding: 0;\n  background: inherit;\n  width: 100%;\n}\n.editor {\n  position: relative;\n  padding: 0;\n  -moz-tab-size: 2ch;\n    -o-tab-size: 2ch;\n       tab-size: 2ch;\n  text-align: left;\n  box-sizing: border-box;\n  font-family: \"Fira code\", \"Fira Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: var(--editor-font-size);\n  line-height: var(--editor-line-height);\n  height: 100%;\n}\n/** shared styles */\ntextarea, .highlight-area {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background: none;\n  box-sizing: inherit;\n  display: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-ligatures: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  -moz-tab-size: inherit;\n    -o-tab-size: inherit;\n       tab-size: inherit;\n  text-indent: inherit;\n  text-rendering: inherit;\n  text-transform: inherit;\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  min-height: var(--editor-min-height);\n}\ntextarea {\n  outline: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  resize: none;\n  overflow: hidden;\n  caret-color: white;\n  caret-shape: bar;\n}\ntextarea:focus {\n  outline: none !important;\n}\n.highlight-area {\n  position: relative;\n  pointer-events: none;\n}\n.editor__no-debounce textarea {\n  -webkit-text-fill-color: transparent;\n}\n:not(.editor__no-debounce):not(.visible-highlight) textarea {\n  color: inherit;\n}\n:not(.editor__no-debounce):not(.visible-highlight) .highlight-area {\n  opacity: 0;\n}\n:not(.editor__no-debounce).visible-highlight textarea {\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL2NvbXBvbmVudHMvaGlnaGxpZ2h0LWVkaXRvci9oaWdobGlnaHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwibGlicy9jb21wb25lbnRzL2hpZ2hsaWdodC1lZGl0b3IvaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQVVBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBR0EsZ0JBQUE7RUFFQSxvQ0FBQTtFQUNBLG9DQUFBO0FDWkY7QURMRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDT0o7QURVQTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUVBLGtCQUFBO0lBQUEsZ0JBQUE7T0FBQSxhQUFBO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUVGLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNYRjtBRGdCQSxtQkFBQTtBQUVBO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtJQUFBLG9CQUFBO09BQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFHQSxtQ0FBQTtFQUdBLG9DQUFBO0FDckJGO0FEd0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7QUR5QkU7RUFDRSx3QkFBQTtBQ3ZCSjtBRDJCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUN4QkY7QUQ2QkU7RUFDRSxvQ0FBQTtBQzFCSjtBRGdDSTtFQUNFLGNBQUE7QUM3Qk47QURnQ0k7RUFDRyxVQUFBO0FDOUJQO0FEbUNJO0VBQ0Esb0NBQUE7QUNqQ0oiLCJmaWxlIjoibGlicy9jb21wb25lbnRzL2hpZ2hsaWdodC1lZGl0b3IvaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA0cHg7XG5cbiAgOmhvc3QtY29udGV4dCgubWF0LWZvcm0tZmllbGQpIHtcbiAgICBib3JkZXIgOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgLS1lZGl0b3ItbWluLWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLW1heC1oZWlnaHQ6IDEwMHB4O1xuICAtLWVkaXRvci1mb250LXNpemU6IDE0cHg7XG4gIC0tZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjU7XG5cblxuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIG1pbi1oZWlnaHQ6IHZhcigtLWVkaXRvci1taW4taGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogdmFyKC0tZWRpdG9yLW1heC1oZWlnaHQpO1xufVxuXG5cbi5lZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgcGFkZGluZzogMDtcblxuICB0YWItc2l6ZTogMmNoO1xuXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBjb2RlJywgJ0ZpcmEgTW9ubycsIENvbnNvbGFzLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IHZhcigtLWVkaXRvci1mb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZWRpdG9yLWxpbmUtaGVpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8vbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG4vKiogc2hhcmVkIHN0eWxlcyAqL1xuXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6MDtcblxuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgLy8gdHJhbnNpdGlvbjogMjBtcyBjb2xvciwgb3BhY2l0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cblxuICBtaW4taGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWluLWhlaWdodCk7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZ2hsaWdodC1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB7XG4gIHRleHRhcmVhIHtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSkge1xuICAmOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIHtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0LWFyZWEge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJi52aXNpYmxlLWhpZ2hsaWdodCB7XG4gICAgdGV4dGFyZWEge1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNHB4O1xuICAtLWVkaXRvci1taW4taGVpZ2h0OiAxMDBweDtcbiAgLS1lZGl0b3ItbWF4LWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1lZGl0b3ItbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWF4LWhlaWdodCk7XG59XG46aG9zdCA6aG9zdC1jb250ZXh0KC5tYXQtZm9ybS1maWVsZCkge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0YWItc2l6ZTogMmNoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJGaXJhIGNvZGVcIiwgXCJGaXJhIE1vbm9cIiwgQ29uc29sYXMsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZWRpdG9yLWZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1lZGl0b3ItbGluZS1oZWlnaHQpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qKiBzaGFyZWQgc3R5bGVzICovXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcbn1cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGlnaGxpZ2h0LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB0ZXh0YXJlYSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSk6bm90KC52aXNpYmxlLWhpZ2hsaWdodCkgdGV4dGFyZWEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbjpub3QoLmVkaXRvcl9fbm8tZGVib3VuY2UpOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIC5oaWdobGlnaHQtYXJlYSB7XG4gIG9wYWNpdHk6IDA7XG59XG46bm90KC5lZGl0b3JfX25vLWRlYm91bmNlKS52aXNpYmxlLWhpZ2hsaWdodCB0ZXh0YXJlYSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "../../libs/components/highlight-editor/highlight-editor.component.ts":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HighlightEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return HighlightEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-css-props.js");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight.service */ "../../libs/components/highlight-editor/highlight.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-morphdom.js");
/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.functions */ "../../libs/components/highlight-editor/editor.functions.ts");
/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.keys */ "../../libs/components/highlight-editor/editor.keys.ts");









let HighlightEditorComponent = class HighlightEditorComponent {
    constructor(cd, cssProps, prism, ngZone, morphService) {
        this.cd = cd;
        this.cssProps = cssProps;
        this.prism = prism;
        this.ngZone = ngZone;
        this.morphService = morphService;
        this.value = '';
        this.language = '';
        this.debounceTime = 600;
        this.useTabs = false;
        this.spaceWidth = 2;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.value);
        this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.language);
        this.debounce$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.debounceTime);
        this.showHighlighedCode$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.allCharsRegex = _editor_keys__WEBPACK_IMPORTED_MODULE_8__["ALL_CHARS_REGEX"];
        this.focussed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lastKeyTriggered$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.updateLinesAmount();
        // once the debounceTime changes
        // recreate the observable
        this.debounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(debounceTimeInterval => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()),
            this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()),
            this.lastKeyTriggered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(debounceTimeInterval))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$)).subscribe(([code, language, lastKeyEvent]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showHighlighedCode$.next(false);
            yield this.highlightToPreTag(code, language, lastKeyEvent);
            this.showHighlighedCode$.next(true);
            // incase multiple enters scroll the textarea one off, scroll back up
            // this.textarea.nativeElement.scrollTo(0,0);
        }));
        this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(value => {
            this.value = value;
            this.changed.emit(value);
        });
        this.highlightToPreTag('\n', null, null);
    }
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
    onChange(value) {
        this.value$.next(value);
        this.cd.markForCheck();
    }
    updateLinesAmount() {
        if (!this.value) {
            return;
        }
        const lines = this.value.split('\n').length;
        this.cssProps.updateElementVars({
            '--lines-amount': lines
        });
    }
    ngOnChanges({ value, language, debounceTime }) {
        if (value) {
            this.value$.next(value.currentValue);
        }
        if (language) {
            this.language$.next(language.currentValue);
        }
        if (debounceTime) {
            this.debounce$.next(debounceTime.currentValue);
        }
    }
    onKeyDown(event, textarea) {
        if (event.key.match(this.allCharsRegex) && !_editor_keys__WEBPACK_IMPORTED_MODULE_8__["IGNORE_KEY_EVENTS"].includes(event.key)) {
            this.showHighlighedCode$.next(false);
        }
        this.value$.next(textarea.value);
        if (event.key === _editor_keys__WEBPACK_IMPORTED_MODULE_8__["KEY_TAB"]) {
            const handledTab = Object(_editor_functions__WEBPACK_IMPORTED_MODULE_7__["handleTab"])(event, textarea.value, textarea.selectionStart, textarea.selectionEnd, this.useTabs, this.spaceWidth);
            this.applyToTextarea(handledTab);
            if (handledTab.textChanged) {
                this.showHighlighedCode$.next(false);
            }
        }
    }
    onKeyUp(event, value) {
        this.value$.next(value);
        this.lastKeyTriggered$.next(event);
    }
    applyToTextarea(result) {
        if (result.textChanged) {
            this.textarea.nativeElement.value = result.newValue;
            this.textarea.nativeElement.selectionStart = result.newSelectionStart;
            this.textarea.nativeElement.selectionEnd = result.newSelectionEnd;
        }
    }
    highlightToPreTag(codeToHighlight, language, lastKeyEvent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!codeToHighlight) {
                this.morphService.morphElement(this.highlightArea, `<pre>\n</pre>`, {
                    childrenOnly: true
                });
                return '';
            }
            const innerHighlighed = yield this.prism.highlightCode(codeToHighlight, language);
            let addedBeginNewLine = '', addedEndNewLine = '';
            // somehow if the new html starts with a newline
            // its not added to the element
            if (innerHighlighed.startsWith('\n')) {
                addedBeginNewLine = '\n';
            }
            if (innerHighlighed.endsWith('\n')) {
                addedEndNewLine = '\n';
            }
            this.morphService.morphElement(this.highlightArea, `<pre>${addedBeginNewLine}${innerHighlighed}${addedEndNewLine}</pre>`, {
                childrenOnly: true
            });
            if (lastKeyEvent) {
                this.textarea.nativeElement.blur();
                this.textarea.nativeElement.focus();
            }
            return innerHighlighed;
        });
    }
};
HighlightEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"] },
    { type: _highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__["MorphdomService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "language", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "debounceTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "useTabs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "spaceWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "changed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "value$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "allCharsRegex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textarea'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HighlightEditorComponent.prototype, "textarea", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('highlightArea'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HighlightEditorComponent.prototype, "highlightArea", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "focussed$", void 0);
HighlightEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-prism-editor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./highlight-editor.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/highlight-editor/highlight-editor.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        providers: [
            _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./highlight-editor.component.scss */ "../../libs/components/highlight-editor/highlight-editor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"],
        _highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__["MorphdomService"]])
], HighlightEditorComponent);



/***/ }),

/***/ "../../libs/components/highlight-editor/highlight-editor.module.ts":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return HighlightEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight-editor.component */ "../../libs/components/highlight-editor/highlight-editor.component.ts");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-css-props.js");
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-morphdom.js");






let HighlightEditorModule = class HighlightEditorModule {
};
HighlightEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__["HighlightEditorComponent"]],
        exports: [
            _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__["HighlightEditorComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["CssPropsModule"],
            _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__["MorphdomModule"]
        ]
    })
], HighlightEditorModule);



/***/ }),

/***/ "../../libs/components/highlight-editor/highlight.service.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return PrismOptionsInjectorToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/service */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! comlink */ "../../node_modules/comlink/dist/esm/comlink.mjs");





const PrismOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MarkdownOptionsInjectorToken');
let HighlightService = class HighlightService {
    constructor(markdownOptions, prismOptions, platformId, ngZone) {
        this.markdownOptions = markdownOptions;
        this.prismOptions = prismOptions;
        this.ngZone = ngZone;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(platformId)) {
            if (markdownOptions) {
                const wrappedWorker = Object(comlink__WEBPACK_IMPORTED_MODULE_4__["wrap"])(markdownOptions.getWorker());
                wrappedWorker.init(markdownOptions.options);
                this.workerProxy = wrappedWorker;
            }
            if (prismOptions) {
                this.workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_4__["wrap"])(prismOptions.getWorker());
                this.workerProxy.initPrism(prismOptions.options);
            }
        }
    }
    highlightCode(code, lang) {
        if (!this.workerProxy) {
            return;
        }
        return this.ngZone.runOutsideAngular(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // needed?
            return yield this.workerProxy.highlight(code, lang);
        }));
    }
};
HighlightService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [PrismOptionsInjectorToken,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
HighlightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(PrismOptionsInjectorToken)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], HighlightService);



/***/ }),

/***/ "../../libs/components/highlight-editor/index.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/index.ts ***!
  \*****************************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/components/highlight-editor/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightEditorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["handleTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_BACKSPACE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_DELETE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ESCAPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_TAB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_UP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_SHIFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ALT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ALT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CTRL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_META", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_META"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CAPS_LOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ALL_CHARS_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IGNORE_KEY_EVENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightEditorModule"]; });




/***/ }),

/***/ "../../libs/components/highlight-editor/public_api.ts":
/*!**********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/public_api.ts ***!
  \**********************************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.service */ "../../libs/components/highlight-editor/highlight.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["HighlightService"]; });

/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight-editor.component */ "../../libs/components/highlight-editor/highlight-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__["HighlightEditorComponent"]; });

/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.functions */ "../../libs/components/highlight-editor/editor.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return _editor_functions__WEBPACK_IMPORTED_MODULE_2__["handleTab"]; });

/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.keys */ "../../libs/components/highlight-editor/editor.keys.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_BACKSPACE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_DELETE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ESCAPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_TAB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_UP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_SHIFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ALT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ALT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_CTRL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_META", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_META"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_CAPS_LOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["ALL_CHARS_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["IGNORE_KEY_EVENTS"]; });

/* harmony import */ var _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight-editor.module */ "../../libs/components/highlight-editor/highlight-editor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__["HighlightEditorModule"]; });








/***/ }),

/***/ "../../libs/markdown/module/index.ts":
/*!*****************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/index.ts ***!
  \*****************************************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/markdown/module/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RenderMarkdownComponent"]; });




/***/ }),

/***/ "../../libs/markdown/module/markdown.module.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/markdown.module.ts ***!
  \***************************************************************************/
/*! exports provided: MarkdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return MarkdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ "../../libs/markdown/module/render-markdown/render-markdown.component.ts");




let MarkdownModule = class MarkdownModule {
};
MarkdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__["RenderMarkdownComponent"]],
        exports: [
            _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__["RenderMarkdownComponent"]
        ],
        providers: []
    })
], MarkdownModule);



/***/ }),

/***/ "../../libs/markdown/module/public_api.ts":
/*!**********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/public_api.ts ***!
  \**********************************************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.module */ "../../libs/markdown/module/markdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return _markdown_module__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"]; });

/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ "../../libs/markdown/module/render-markdown/render-markdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__["RenderMarkdownComponent"]; });





/***/ }),

/***/ "../../libs/markdown/module/render-markdown/render-markdown.component.scss":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep foreignObject {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL21hcmtkb3duL21vZHVsZS9yZW5kZXItbWFya2Rvd24vcmVuZGVyLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwibGlicy9tYXJrZG93bi9tb2R1bGUvcmVuZGVyLW1hcmtkb3duL3JlbmRlci1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUFnQixpQkFBQTtBQ0FsQiIsImZpbGUiOiJsaWJzL21hcmtkb3duL21vZHVsZS9yZW5kZXItbWFya2Rvd24vcmVuZGVyLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLy8gZml4IG1lcm1haWQgb3ZlcmZsb3cgOilcbiAgZm9yZWlnbk9iamVjdCB7IG92ZXJmbG93OiB2aXNpYmxlOyB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgZm9yZWlnbk9iamVjdCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */");

/***/ }),

/***/ "../../libs/markdown/module/render-markdown/render-markdown.component.ts":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return RenderMarkdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/service */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let RenderMarkdownComponent = class RenderMarkdownComponent {
    constructor(service, element, sanitizer, cache) {
        this.service = service;
        this.element = element;
        this.sanitizer = sanitizer;
        this.cache = cache;
        this.showRawMd = false;
        this.useCache = false;
        this.allowMermaid = true;
        this.onLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._htmlToShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.parsedHtml$ = this._htmlToShow$;
    }
    get markdown() {
        return this._markdown;
    }
    set markdown(value) {
        if (this._markdown !== value) {
            this._markdown = value;
            if (this.showRawMd) {
                this._htmlToShow$.next(value);
            }
            this.compile();
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.compile();
        });
    }
    onClick(e) {
        let target = e.target;
        let aHref = null;
        while (aHref == null && target != null) {
            if (target.tagName === 'A') {
                aHref = target;
            }
            target = target.parentElement;
        }
        if (aHref) {
            this.onLinkClick.next({
                event: e,
                link: aHref
            });
        }
    }
    compile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.useCache) {
                    const cachedMarkdown = yield this.cache.getCached(this._markdown);
                    if (!!cachedMarkdown) {
                        this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));
                        return;
                    }
                }
                const parsedHtml = yield this.service.compileMarkdown(this._markdown, this.allowMermaid);
                this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));
                if (this.useCache) {
                    this.cache.saveCached(this._markdown, parsedHtml);
                }
            }
            catch (er) {
                console.error(er);
                this._htmlToShow$.next(er);
            }
        });
    }
};
RenderMarkdownComponent.ctorParameters = () => [
    { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownCacheService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "showRawMd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "useCache", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "allowMermaid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RenderMarkdownComponent.prototype, "mermaidTheme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], RenderMarkdownComponent.prototype, "markdown", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "onLinkClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RenderMarkdownComponent.prototype, "onClick", null);
RenderMarkdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-markdown',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./render-markdown.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/markdown/module/render-markdown/render-markdown.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./render-markdown.component.scss */ "../../libs/markdown/module/render-markdown/render-markdown.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownCacheService"]])
], RenderMarkdownComponent);



/***/ }),

/***/ "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/custom-form-control.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return CustomFormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
var CustomFormControlComponent_1;






let CustomFormControlComponent = CustomFormControlComponent_1 = class CustomFormControlComponent {
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
        this.stateChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stateChanges = this.stateChangeSubject;
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.stateChangeSubject.next();
        if (this.onChange) {
            this.onChange(value);
        }
    }
    get errorState() {
        return false;
    }
    get empty() {
        return typeof this.value === 'number' ? false : !this.value;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement;
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick() {
    }
    writeValue(val) {
        this._value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnChanges({ value }) {
        if (value && this.onChange) {
            this.onChange(value.currentValue);
            this.stateChangeSubject.next();
        }
    }
};
CustomFormControlComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], CustomFormControlComponent.prototype, "value", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('aria-describedby'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CustomFormControlComponent.prototype, "userAriaDescribedBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CustomFormControlComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CustomFormControlComponent.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CustomFormControlComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CustomFormControlComponent.prototype, "focused", void 0);
CustomFormControlComponent = CustomFormControlComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-custom-form-control',
        template: `<ng-content></ng-content>`,
        providers: [
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], useExisting: CustomFormControlComponent_1 }
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
], CustomFormControlComponent);



/***/ }),

/***/ "../../libs/mat-utils/custom-form-control/custom-form-control.module.ts":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/custom-form-control.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: CustomFormControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return CustomFormControlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-form-control.component */ "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let CustomFormControlModule = class CustomFormControlModule {
};
CustomFormControlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__["CustomFormControlComponent"]],
        exports: [
            _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__["CustomFormControlComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], CustomFormControlModule);



/***/ }),

/***/ "../../libs/mat-utils/custom-form-control/index.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/index.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomFormControlModule, CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/mat-utils/custom-form-control/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlComponent"]; });




/***/ }),

/***/ "../../libs/mat-utils/custom-form-control/public_api.ts":
/*!************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/public_api.ts ***!
  \************************************************************************************/
/*! exports provided: CustomFormControlModule, CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-form-control.module */ "../../libs/mat-utils/custom-form-control/custom-form-control.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"]; });

/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-form-control.component */ "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__["CustomFormControlComponent"]; });





/***/ }),

/***/ "../../libs/mat-utils/material-icons/index.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/index.ts ***!
  \**************************************************************************/
/*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/mat-utils/material-icons/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_ICONS_PAIR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RegisterIconsModule"]; });




/***/ }),

/***/ "../../libs/mat-utils/material-icons/public_api.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/public_api.ts ***!
  \*******************************************************************************/
/*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register_icons */ "../../libs/mat-utils/material-icons/register_icons.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _register_icons__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony import */ var _register_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register_icons.module */ "../../libs/mat-utils/material-icons/register_icons.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_ICONS_PAIR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["RegisterIconsModule"]; });





/***/ }),

/***/ "../../libs/mat-utils/material-icons/register_icons.module.ts":
/*!******************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/register_icons.module.ts ***!
  \******************************************************************************************/
/*! exports provided: REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return REGISTORY_ICONS_PAIR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return RegisterIconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register_icons */ "../../libs/mat-utils/material-icons/register_icons.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var RegisterIconsModule_1;






const REGISTORY_ICONS_PAIR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/mat-utils/RegistryIconsPair');
let RegisterIconsModule = RegisterIconsModule_1 = class RegisterIconsModule {
    constructor(iconRegistry, sanitizer, registryIconsPairsArray) {
        for (const iconPair of registryIconsPairsArray) {
            Object(_register_icons__WEBPACK_IMPORTED_MODULE_3__["registerIcons"])(iconRegistry, sanitizer, iconPair);
        }
    }
    static register(useValue) {
        return {
            ngModule: RegisterIconsModule_1,
            providers: [
                { provide: REGISTORY_ICONS_PAIR_TOKEN, useValue, multi: true }
            ]
        };
    }
};
RegisterIconsModule.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [REGISTORY_ICONS_PAIR_TOKEN,] }] }
];
RegisterIconsModule = RegisterIconsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REGISTORY_ICONS_PAIR_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Array])
], RegisterIconsModule);



/***/ }),

/***/ "../../libs/mat-utils/material-icons/register_icons.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/register_icons.ts ***!
  \***********************************************************************************/
/*! exports provided: registerIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return registerIcons; });
function registerIcons(iconRegistry, sanitizer, iconPair) {
    for (const icon of iconPair.iconArray) {
        iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`${iconPair.pathToIcons}/${icon}.svg`));
    }
}


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/highlight-editor/highlight-editor.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor\"\n     [class.visible-highlight]=\"showHighlighedCode$ | async\"\n     [class.editor__no-debounce]=\"debounceTime === 0\">\n\n  <textarea #textarea [value]=\"value\"\n            (change)=\"onChange(textarea.value)\"\n            (keydown)=\"onKeyDown($event, textarea)\"\n            (keyup)=\"onKeyUp($event, textarea.value)\"\n            (focus)=\"focussed$.next(true)\"\n            (blur)=\"focussed$.next(false)\"\n            spellcheck=\"false\"\n  ></textarea>\n  <pre class=\"highlight-area\" #highlightArea></pre>\n</div>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/markdown/module/render-markdown/render-markdown.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Open Dev-Tools to see the network calls.</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel (opened)=\"applyLazyModuleInputs(lazyModuleComponent)\">\n  <mat-expansion-panel-header>\n    <a [href]=\"'https://www.npmjs.com/package/' + packageName\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img [src]=\"'https://img.shields.io/npm/v/' + packageName + '.svg?'\"\n           [alt]=\"packageName + ' NPM Version'\">\n    </a>\n    &nbsp;- {{ packageTitle }}\n  </mat-expansion-panel-header>\n\n  <gewd-lazy-module-component\n    #lazyModuleComponent>\n    <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n");

/***/ }),

/***/ "../../node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0-es2015.worker.js"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.dynamic-portal-border {\n  background: darkgreen;\n  padding: 5px;\n  margin: 15px 0;\n  border: 2px dashed green;\n  display: block;\n}\n.npm-link {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9hcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJhcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZHluYW1pYy1wb3J0YWwtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnBtLWxpbmsge1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iLCIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZHluYW1pYy1wb3J0YWwtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnBtLWxpbmsge1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






// TODO Splitup each panel functions/vars into its own component
let AppComponent = class AppComponent {
    constructor(cd, http) {
        this.cd = cd;
        this.http = http;
        this.markDownReadmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
            responseType: 'text'
        });
        this.ngErrorOverlay$ = this.http.get('./assets/ng-error-overlay.md', {
            responseType: 'text'
        });
        this.matUtilsReadmeMD$ = this.http.get('./assets/readme/mat-utils/README.md', {
            responseType: 'text'
        });
        this.editorLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.editorExample$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.aForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]().group({ 'editor': '' });
    }
    setLazyPortalModuleComp(lazyModuleComponent) {
        lazyModuleComponent.moduleAlias = 'portal-module';
        lazyModuleComponent.component = 'PortalModuleComp';
        lazyModuleComponent.setComponent();
    }
    makeError() {
        let errorSource;
        errorSource.subString();
    }
    updateValueChanged($event) {
        this.currentPrismExample = $event;
        switch ($event) {
            case 'ts_example':
                {
                    this.editorLanguage$.next('ts');
                    this.editorExample$.next(`
import { DynamicLoaderRegistry } from '@gewd/lazy/registry';
import { Lazy } from '@gewd/lazy/utils';

DynamicLoaderRegistry.LazyComponents = {
  'test-comp': new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
};

DynamicLoaderRegistry.LazyModuleComponents = {

  'test-module': {
    load: new Lazy<any>(
      () => import(/* webpackChunkName: "lazy-test-module" */ './lazy-wrapper/test-module-comp')
      .then(({TestModule}) => TestModule)
    )
  },
  'portal-module': {
    load: new Lazy<any>(
      () => import(/* webpackChunkName: "lazy-portal-module" */ './lazy-wrapper/lazy-portal-source')
        .then(({PortalModule}) => PortalModule)
    )
  },
};
        `.trim());
                    break;
                }
            case 'readme_md': {
                this.editorLanguage$.next('markdown');
                this.markDownReadmeMD$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(value => {
                    this.editorExample$.next(value);
                });
                break;
            }
            default: {
                this.editorExample$.next('');
                break;
            }
        }
    }
    openedEditorPanel() {
        if (!this.currentPrismExample) {
            this.updateValueChanged('empty');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-utils-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown */ "../../libs/markdown/module/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @gewd/markdown/contracts */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-contracts.js");
/* harmony import */ var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gewd/lazy/loader */ "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-loader.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-dynamic-portal.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gewd/markdown/service */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js");
/* harmony import */ var _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./md-cache-example.service */ "./src/app/md-cache-example.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./markdown-toolbar.component */ "./src/app/markdown-toolbar.component.ts");
/* harmony import */ var _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @gewd/ng-utils/ng-error-overlay */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-error-overlay.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @gewd/components/highlight-editor */ "../../libs/components/highlight-editor/index.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../libs/mat-utils/material-icons */ "../../libs/mat-utils/material-icons/index.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./example-panel/example-panel.component */ "./src/app/example-panel/example-panel.component.ts");
/* harmony import */ var _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @gewd/mat-utils/custom-form-control */ "../../libs/mat-utils/custom-form-control/index.ts");
/* harmony import */ var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @gewd/lazy/utils */ "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-utils.js");





























const marked = () => new Worker(__webpack__worker__0, undefined);
const markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | markdown-example-module */ "markdown-example-module").then(__webpack_require__.bind(null, /*! ./examples/markdown-example/markdown-example.module */ "./src/app/examples/markdown-example/markdown-example.module.ts"))
    .then(({ MarkdownExampleModule }) => MarkdownExampleModule));
const lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | lazyload-example-module */ "lazyload-example-module").then(__webpack_require__.bind(null, /*! ./examples/lazyload-example/lazyload-example.module */ "./src/app/examples/lazyload-example/lazyload-example.module.ts"))
    .then(({ LazyloadExampleModule }) => LazyloadExampleModule));
const componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | components-example-module */ "components-example-module").then(__webpack_require__.bind(null, /*! ./examples/components-example/components-example.module */ "./src/app/examples/components-example/components-example.module.ts"))
    .then(({ ComponentsExampleModule }) => ComponentsExampleModule));
const portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | lazy-portal-module */ "lazy-portal-module").then(__webpack_require__.bind(null, /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */ "./src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts"))
    .then(({ PortalModule }) => PortalModule));
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["MarkdownToolbarComponent"], _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__["ExamplePanelComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__["GewdLazyLoaderModule"].withLazy([
                {
                    moduleName: 'markdown-example',
                    moduleConfig: {
                        load: markdownExampleLazy
                    }
                },
                {
                    moduleName: 'lazyload-example',
                    moduleConfig: {
                        load: lazyLoadExampleLazy
                    }
                },
                {
                    moduleName: 'portal-module',
                    moduleConfig: {
                        load: portalLazy
                    }
                },
                {
                    moduleName: 'components-example',
                    moduleConfig: {
                        load: componentsExampleLazy
                    }
                }
            ]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__["DynamicPortalModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__["NgErrorOverlayModule"],
            ..._environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].modules,
            _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__["HighlightEditorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__["CustomFormControlModule"],
            _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__["RegisterIconsModule"].register({
                pathToIcons: './assets/material_icons',
                iconArray: [
                    'add',
                    'art_track',
                ]
            }),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"]
        ],
        providers: [
            {
                provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__["MarkdownOptionsInjectorToken"],
                useValue: {
                    getWorker: marked,
                    options: {
                        prism: Object.assign(Object.assign({}, _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PRISM_OPTIONS"]), { 
                            /** if needed **/
                            languageFileType: 'min.js', languageMap: {
                                ts: 'typescript',
                                cs: 'csharp' // additional
                            }, highlightMarkdownCode: true, additionalPluginPaths: [
                                'assets/prism/prism-css-extras.min.js',
                                'assets/prism/prism-plugin-inline-color.worker-func.js',
                                'assets/prism/prism-plugin-bracket-match.worker-func.js'
                            ] })
                    },
                    mermaidPath: 'mermaid.min.js',
                    mermaidOptions: {
                        theme: 'neutral',
                    }
                }
            },
            _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__["MdCacheExampleService"],
            {
                provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__["MarkdownCacheService"],
                useExisting: _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__["MdCacheExampleService"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! /home/runner/work/gewd/gewd/node_modules/worker-plugin/dist/loader.js?name=0!./markdown.worker.ts */ "../../node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts")))

/***/ }),

/***/ "./src/app/example-panel/example-panel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/example-panel/example-panel.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9leGFtcGxlLXBhbmVsL2V4YW1wbGUtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/example-panel/example-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/example-panel/example-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: ExamplePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePanelComponent", function() { return ExamplePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExamplePanelComponent = class ExamplePanelComponent {
    constructor() {
        this.packageName = '';
        this.packageTitle = '';
        this.moduleName = '';
        this.componentName = '';
    }
    ngOnInit() {
    }
    applyLazyModuleInputs(lazyModuleComponent) {
        lazyModuleComponent.moduleAlias = this.moduleName;
        lazyModuleComponent.component = this.componentName;
        lazyModuleComponent.setComponent();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "packageName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "packageTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "moduleName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "componentName", void 0);
ExamplePanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-example-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./example-panel.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./example-panel.component.css */ "./src/app/example-panel/example-panel.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExamplePanelComponent);



/***/ }),

/***/ "./src/app/markdown-toolbar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/markdown-toolbar.component.ts ***!
  \***********************************************/
/*! exports provided: MarkdownToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownToolbarComponent", function() { return MarkdownToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/module */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-module.js");



let MarkdownToolbarComponent = class MarkdownToolbarComponent {
    constructor(markdown) {
        this.markdown = markdown;
    }
};
MarkdownToolbarComponent.ctorParameters = () => [
    { type: _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__["RenderMarkdownComponent"] }
];
MarkdownToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: ``,
        selector: 'gewd-markdown-toolbar'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__["RenderMarkdownComponent"]])
], MarkdownToolbarComponent);



/***/ }),

/***/ "./src/app/md-cache-example.service.ts":
/*!*********************************************!*\
  !*** ./src/app/md-cache-example.service.ts ***!
  \*********************************************/
/*! exports provided: MdCacheExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCacheExampleService", function() { return MdCacheExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown/service */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! localforage */ "../../node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown/utils */ "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let MdCacheExampleService = class MdCacheExampleService extends _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"] {
    constructor(platformId) {
        super();
        this.enabled = true;
        // skip localforage calls during pre-render step
        this.enabled = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
        if (this.enabled) {
            this.createInstance();
        }
    }
    saveCachedPart(type, raw, rendered) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
            this.localForageCache.setItem(`${type}/${hash}`, rendered);
        });
    }
    getCachedPart(type, raw) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
            const result = yield this.localForageCache.getItem(`${type}/${hash}`);
            return result;
        });
    }
    getCached(rawMarkdown) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
            const result = yield this.localForageCache.getItem(hash);
            return result;
        });
    }
    saveCached(rawMarkdown, renderedMarkdown) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
            this.localForageCache.setItem(hash, renderedMarkdown);
        });
    }
    createInstance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localForageCache = localforage__WEBPACK_IMPORTED_MODULE_3__["createInstance"]({
                name: 'markdown-cache',
            });
        });
    }
};
MdCacheExampleService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
MdCacheExampleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MdCacheExampleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gewd/ng-utils/ng-inspect */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-inspect.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    modules: [
        _gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"]
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .then(moduleRef => {
        const applicationRef = moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        const componentRef = applicationRef.components[0];
        // allows to run `ng.profiler.timeChangeDetection();`
        Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["enableDebugTools"])(componentRef);
    }).catch(err => window['console'].error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/gewd/gewd/apps/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map