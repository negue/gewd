(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-test-module"],{

/***/ "./src/app/examples/lazyload-example/lazy-wrapper/test-module-comp.ts":
/*!****************************************************************************!*\
  !*** ./src/app/examples/lazyload-example/lazy-wrapper/test-module-comp.ts ***!
  \****************************************************************************/
/*! exports provided: MyModuleComp, TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModuleComp", function() { return MyModuleComp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




let MyModuleComp = class MyModuleComp {
    constructor() {
        this.outputTest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        console.info('onChanges', changes);
    }
    ngOnDestroy() {
        alert('destroy');
    }
    ngOnInit() {
        this.outputTest.next('lazy component ngOnInit');
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MyModuleComp.prototype, "testProp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MyModuleComp.prototype, "outputTest", void 0);
MyModuleComp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'test-module-comp',
        template: `
    My Card Content: {{testProp}}

    <button mat-raised-button (click)="outputTest.emit('Raise Event - Clicked')">Raise Event</button>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MyModuleComp);

let TestModule = class TestModule {
    getComponents() {
        return [
            {
                name: 'MyModuleComp',
                componentType: MyModuleComp
            }
        ];
    }
};
TestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            MyModuleComp
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ]
    })
], TestModule);



/***/ })

}]);
//# sourceMappingURL=lazy-test-module-es2015.js.map