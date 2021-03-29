(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-portal-module"],{

/***/ "./src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts":
/*!******************************************************************************!*\
  !*** ./src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts ***!
  \******************************************************************************/
/*! exports provided: PortalModuleComp, PortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModuleComp", function() { return PortalModuleComp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "../../dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-dynamic-portal.js");





let PortalModuleComp = class PortalModuleComp {
    constructor() {
    }
    ngOnChanges(changes) {
        console.info('onChanges', changes);
    }
    ngOnDestroy() {
        alert('destroy');
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PortalModuleComp.prototype, "testProp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PortalModuleComp.prototype, "portalKey", void 0);
PortalModuleComp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'test-module-comp',
        template: `
    <ng-template [dynamicPortalSource]="portalKey">
      <div class="portal-source">
      Lazy Portal Content with outer Binding: {{testProp}}
      </div>
    </ng-template>

    This is the content of the lazy loaded component.
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n      .portal-source {\n        background: darkblue;\n        border: 2px dashed blue;\n        padding: 5px;\n      }\n    "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PortalModuleComp);

let PortalModule = class PortalModule {
    getComponents() {
        return [
            {
                name: 'PortalModuleComp',
                componentType: PortalModuleComp
            }
        ];
    }
};
PortalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            PortalModuleComp
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_4__["DynamicPortalModule"]
        ],
        entryComponents: [
            PortalModuleComp
        ]
    })
], PortalModule);



/***/ })

}]);
//# sourceMappingURL=lazy-portal-module-es2015.js.map