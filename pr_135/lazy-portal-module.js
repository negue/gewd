(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["lazy-portal-module"],{

/***/ 4476:
/*!****************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortalModule: () => (/* binding */ PortalModule),
/* harmony export */   PortalModuleComp: () => (/* binding */ PortalModuleComp)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5wb3J0YWwtc291cmNlIHsKICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTsKICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTsKICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgIH0KICAgIA_3D_3D_home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5wb3J0YWwtc291cmNlIHsKICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTsKICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTsKICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgIH0KICAgIA%3D%3D!./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts */ 3550);
/* harmony import */ var _home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5wb3J0YWwtc291cmNlIHsKICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTsKICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTsKICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgIH0KICAgIA_3D_3D_home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5wb3J0YWwtc291cmNlIHsKICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTsKICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTsKICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgIH0KICAgIA_3D_3D_home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ 462);






let PortalModuleComp = class PortalModuleComp {
  constructor() {}
  ngOnChanges(changes) {
    console.info('onChanges', changes);
  }
  ngOnDestroy() {
    alert('destroy');
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    testProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    portalKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
PortalModuleComp = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'test-module-comp',
  template: `
    <ng-template [dynamicPortalSource]="portalKey">
      <div class="portal-source">
      Lazy Portal Content with outer Binding: {{testProp}}
      </div>
    </ng-template>

    This is the content of the lazy loaded component.
  `,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  styles: [(_home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIC5wb3J0YWwtc291cmNlIHsKICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTsKICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTsKICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgIH0KICAgIA_3D_3D_home_runner_work_gewd_gewd_apps_demo_src_app_examples_lazyload_example_lazy_wrapper_lazy_portal_source_ts__WEBPACK_IMPORTED_MODULE_0___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], PortalModuleComp);
let PortalModule = class PortalModule {
  getComponents() {
    return [{
      name: 'PortalModuleComp',
      componentType: PortalModuleComp
    }];
  }
};
PortalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [PortalModuleComp],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_1__.DynamicPortalModule]
})], PortalModule);

/***/ }),

/***/ 3550:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5wb3J0YWwtc291cmNlIHsKICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTsKICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTsKICAgICAgICBwYWRkaW5nOiA1cHg7CiAgICAgIH0KICAgIA%3D%3D!./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
      .portal-source {
        background: darkblue;
        border: 2px dashed blue;
        padding: 5px;
      }
    `, "",{"version":3,"sources":["webpack://./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts"],"names":[],"mappings":";MACM;QACE,oBAAoB;QACpB,uBAAuB;QACvB,YAAY;MACd","sourcesContent":["\n      .portal-source {\n        background: darkblue;\n        border: 2px dashed blue;\n        padding: 5px;\n      }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=lazy-portal-module.js.map