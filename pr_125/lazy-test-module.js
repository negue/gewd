"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["lazy-test-module"],{

/***/ 5640:
/*!**************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/test-module-comp.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyModuleComp: () => (/* binding */ MyModuleComp),
/* harmony export */   TestModule: () => (/* binding */ TestModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);




let MyModuleComp = class MyModuleComp {
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
    this.outputTest.next('lazy component ngOnInit');
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
MyModuleComp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
  selector: 'test-module-comp',
  template: `
    My Card Content: {{testProp}}

    <button mat-raised-button (click)="outputTest.emit('Raise Event - Clicked')">Raise Event</button>
  `,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], MyModuleComp);
let TestModule = class TestModule {
  getComponents() {
    return [{
      name: 'MyModuleComp',
      componentType: MyModuleComp
    }];
  }
};
TestModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
  declarations: [MyModuleComp],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule]
})], TestModule);

/***/ })

}]);
//# sourceMappingURL=lazy-test-module.js.map