(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-wrapper-test-comp"],{

/***/ "cZVC":
/*!*******************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/test-comp.ts ***!
  \*******************************************************************************/
/*! exports provided: MyComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComp", function() { return MyComp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MyComp = class MyComp {
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
        console.info('ngOnInit');
        this.outputTest.next('next output');
    }
};
MyComp.ctorParameters = () => [];
MyComp.propDecorators = {
    testProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    outputTest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MyComp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'test-comp',
        template: `
    My Content {{testProp}}
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MyComp);



/***/ })

}]);
//# sourceMappingURL=lazy-wrapper-test-comp-es2015.js.map