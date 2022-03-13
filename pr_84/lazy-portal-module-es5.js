(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-portal-module"], {
    /***/
    "uy6E":
    /*!****************************************************************************************!*\
      !*** ./apps/demo/src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts ***!
      \****************************************************************************************/

    /*! exports provided: PortalModuleComp, PortalModule */

    /***/
    function uy6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalModuleComp", function () {
        return PortalModuleComp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
        return PortalModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/ng-utils/dynamic-portal */
      "zzJY");

      var PortalModuleComp = /*#__PURE__*/function () {
        function PortalModuleComp() {
          _classCallCheck(this, PortalModuleComp);
        }

        _createClass(PortalModuleComp, [{
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
          value: function ngOnInit() {}
        }]);

        return PortalModuleComp;
      }();

      PortalModuleComp.ctorParameters = function () {
        return [];
      };

      PortalModuleComp.propDecorators = {
        testProp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        portalKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PortalModuleComp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'test-module-comp',
        template: "\n    <ng-template [dynamicPortalSource]=\"portalKey\">\n      <div class=\"portal-source\">\n      Lazy Portal Content with outer Binding: {{testProp}}\n      </div>\n    </ng-template>\n\n    This is the content of the lazy loaded component.\n  ",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n      .portal-source {\n        background: darkblue;\n        border: 2px dashed blue;\n        padding: 5px;\n      }\n    "]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PortalModuleComp);

      var PortalModule = /*#__PURE__*/function () {
        function PortalModule() {
          _classCallCheck(this, PortalModule);
        }

        _createClass(PortalModule, [{
          key: "getComponents",
          value: function getComponents() {
            return [{
              name: 'PortalModuleComp',
              componentType: PortalModuleComp
            }];
          }
        }]);

        return PortalModule;
      }();

      PortalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [PortalModuleComp],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_4__["DynamicPortalModule"]],
        entryComponents: [PortalModuleComp]
      })], PortalModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lazy-portal-module-es5.js.map