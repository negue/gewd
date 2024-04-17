(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["lazyload-example-module"],{

/***/ 5285:
/*!***********************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazyload-example.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyloadExampleComponent: () => (/* binding */ LazyloadExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _lazyload_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload-example.component.html?ngResource */ 3354);
/* harmony import */ var _lazyload_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazyload-example.component.css?ngResource */ 3569);
/* harmony import */ var _lazyload_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lazyload_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);





let LazyloadExampleComponent = class LazyloadExampleComponent {
  constructor(http) {
    this.http = http;
    this.outputLog = [];
    this.outputBinding = {
      outputTest: e => this.addLogEntry(e)
    };
    this.lazyLoadReadmeMD$ = this.http.get('./assets/readme/lazy/README.md', {
      responseType: 'text'
    });
  }
  setLazyComp(lazyComponent) {
    lazyComponent.component = 'test-comp';
    lazyComponent.setComponent();
    // this.cd.markForCheck();
  }

  setLazyModuleComp(lazyModuleComponent) {
    lazyModuleComponent.moduleAlias = 'test-module';
    lazyModuleComponent.component = 'MyModuleComp';
    lazyModuleComponent.setComponent();
  }
  addLogEntry(e) {
    this.outputLog.push(e);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
LazyloadExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'gewd-lazyload-example',
  template: _lazyload_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_lazyload_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])], LazyloadExampleComponent);

/***/ }),

/***/ 6024:
/*!********************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazyload-example.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyloadExampleModule: () => (/* binding */ LazyloadExampleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _lazyload_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload-example.component */ 5285);
/* harmony import */ var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/lazy/loader */ 2368);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/lazy/utils */ 4279);
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/lazy/registry */ 3706);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown/module */ 602);











const testModuleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_2__.Lazy(() => __webpack_require__.e(/*! import() | lazy-test-module */ "lazy-test-module").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy-wrapper/test-module-comp */ 5640)).then(({
  TestModule
}) => TestModule));
let LazyloadExampleModule = class LazyloadExampleModule {
  getComponents() {
    return [{
      name: 'LazyLoadExample',
      componentType: _lazyload_example_component__WEBPACK_IMPORTED_MODULE_0__.LazyloadExampleComponent
    }];
  }
};
LazyloadExampleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_lazyload_example_component__WEBPACK_IMPORTED_MODULE_0__.LazyloadExampleComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_1__.GewdLazyLoaderModule.withLazy([{
    moduleName: 'test-module',
    moduleConfig: {
      load: testModuleLazy
    }
  }]), _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule]
})], LazyloadExampleModule);
_gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_3__.DynamicLoaderRegistry.RegisterLazyComponent('test-comp', new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_2__.Lazy(() => __webpack_require__.e(/*! import() */ "apps_demo_src_app_examples_lazyload-example_lazy-wrapper_test-comp_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy-wrapper/test-comp */ 4726))));

/***/ }),

/***/ 3569:
/*!***********************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazyload-example.component.css?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3354:
/*!************************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazyload-example.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-tab-group>\n  <mat-tab label=\"README.MD\" #readmeTab>\n    <gewd-markdown *ngIf=\"readmeTab.isActive\"\n                   [markdown]=\"lazyLoadReadmeMD$ | async\"></gewd-markdown>\n  </mat-tab>\n  <mat-tab label=\"Try out\">\n\n<h2><code>gewd-lazy-component</code></h2>\n\n<gewd-lazy-component #lazyComponent\n                     [componentInputs]=\"{ testProp: 'Component Binding from outside' }\">\n  <button mat-raised-button color=\"primary\"\n          (click)=\"setLazyComp(lazyComponent)\">\n    Load Lazy Component: Test-Comp <br/> (this button as content will be replaced)\n  </button>\n\n  <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n</gewd-lazy-component>\n\n<br/>\n<br/>\n\n<h2><code>gewd-lazy-module-component</code></h2>\n\n<gewd-lazy-module-component\n  #lazyModuleComponent\n  [componentInputs]=\"{ testProp: 'Module Component Example' }\"\n  [componentOutputs]=\"outputBinding\">\n  <button mat-raised-button color=\"primary\"\n          (click)=\"setLazyModuleComp(lazyModuleComponent)\">\n    Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n  </button>\n\n\n  <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n</gewd-lazy-module-component>\n\n<br/>\n<br/>\n\n<div>\n  This Container outside of the lazy loaded component will list the Output-Events:\n\n  <pre>{{outputLog | json}}</pre>\n</div>\n\n  </mat-tab>\n</mat-tab-group>\n";

/***/ })

}]);
//# sourceMappingURL=lazyload-example-module.js.map