function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-test-module"], {
  /***/
  "./src/app/examples/lazyload-example/lazy-wrapper/test-module-comp.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/examples/lazyload-example/lazy-wrapper/test-module-comp.ts ***!
    \****************************************************************************/

  /*! exports provided: MyModuleComp, TestModule */

  /***/
  function srcAppExamplesLazyloadExampleLazyWrapperTestModuleCompTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyModuleComp", function () {
      return MyModuleComp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestModule", function () {
      return TestModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var MyModuleComp = /*#__PURE__*/function () {
      function MyModuleComp() {
        _classCallCheck(this, MyModuleComp);

        this.outputTest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MyModuleComp, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.info('onChanges', changes);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          alert('destroy');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.outputTest.next('lazy component ngOnInit');
        }
      }]);

      return MyModuleComp;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MyModuleComp.prototype, "testProp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MyModuleComp.prototype, "outputTest", void 0);
    MyModuleComp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'test-module-comp',
      template: "\n    My Card Content: {{testProp}}\n\n    <button mat-raised-button (click)=\"outputTest.emit('Raise Event - Clicked')\">Raise Event</button>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyModuleComp);

    var TestModule = /*#__PURE__*/function () {
      function TestModule() {
        _classCallCheck(this, TestModule);
      }

      _createClass(TestModule, [{
        key: "getComponents",
        value: function getComponents() {
          return [{
            name: 'MyModuleComp',
            componentType: MyModuleComp
          }];
        }
      }]);

      return TestModule;
    }();

    TestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [MyModuleComp],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]]
    })], TestModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-test-module-es5.js.map