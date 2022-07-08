(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-wrapper-test-comp"], {
    /***/
    "cZVC":
    /*!*******************************************************************************!*\
      !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/test-comp.ts ***!
      \*******************************************************************************/

    /*! exports provided: MyComp */

    /***/
    function cZVC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyComp", function () {
        return MyComp;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyComp = /*#__PURE__*/function () {
        function MyComp() {
          _classCallCheck(this, MyComp);

          this.outputTest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(MyComp, [{
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
            console.info('ngOnInit');
            this.outputTest.next('next output');
          }
        }]);

        return MyComp;
      }();

      MyComp.ctorParameters = function () {
        return [];
      };

      MyComp.propDecorators = {
        testProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        outputTest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      MyComp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'test-comp',
        template: "\n    My Content {{testProp}}\n  ",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyComp);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lazy-wrapper-test-comp-es5.js.map