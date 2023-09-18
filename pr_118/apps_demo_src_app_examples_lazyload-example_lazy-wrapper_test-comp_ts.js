"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_examples_lazyload-example_lazy-wrapper_test-comp_ts"],{

/***/ 4726:
/*!*******************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/test-comp.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyComp: () => (/* binding */ MyComp)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


let MyComp = class MyComp {
  constructor() {
    this.outputTest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    testProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outputTest: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  };
};
MyComp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
  selector: 'test-comp',
  template: `
    My Content {{testProp}}
  `,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], MyComp);

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_examples_lazyload-example_lazy-wrapper_test-comp_ts.js.map