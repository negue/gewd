function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyload-example-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/lazyload-example/lazyload-example.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/examples/lazyload-example/lazyload-example.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamplesLazyloadExampleLazyloadExampleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group>\n  <mat-tab label=\"README.MD\" #readmeTab>\n    <gewd-markdown *ngIf=\"readmeTab.isActive\"\n                   [markdown]=\"lazyLoadReadmeMD$ | async\"></gewd-markdown>\n  </mat-tab>\n  <mat-tab label=\"Try out\">\n\n<h2><code>gewd-lazy-component</code></h2>\n\n<gewd-lazy-component #lazyComponent\n                     [componentInputs]=\"{ testProp: 'Component Binding from outside' }\">\n  <button mat-raised-button color=\"primary\"\n          (click)=\"setLazyComp(lazyComponent)\">\n    Load Lazy Component: Test-Comp <br/> (this button as content will be replaced)\n  </button>\n\n  <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n</gewd-lazy-component>\n\n<br/>\n<br/>\n\n<h2><code>gewd-lazy-module-component</code></h2>\n\n<gewd-lazy-module-component\n  #lazyModuleComponent\n  [componentInputs]=\"{ testProp: 'Module Component Example' }\"\n  [componentOutputs]=\"outputBinding\">\n  <button mat-raised-button color=\"primary\"\n          (click)=\"setLazyModuleComp(lazyModuleComponent)\">\n    Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n  </button>\n\n\n  <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n</gewd-lazy-module-component>\n\n<br/>\n<br/>\n\n<div>\n  This Container outside of the lazy loaded component will list the Output-Events:\n\n  <pre>{{outputLog | json}}</pre>\n</div>\n\n  </mat-tab>\n</mat-tab-group>\n";
    /***/
  },

  /***/
  "./src/app/examples/lazyload-example/lazyload-example.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/examples/lazyload-example/lazyload-example.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamplesLazyloadExampleLazyloadExampleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9sYXp5bG9hZC1leGFtcGxlL2xhenlsb2FkLWV4YW1wbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/examples/lazyload-example/lazyload-example.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/examples/lazyload-example/lazyload-example.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LazyloadExampleComponent */

  /***/
  function srcAppExamplesLazyloadExampleLazyloadExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyloadExampleComponent", function () {
      return LazyloadExampleComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LazyloadExampleComponent = /*#__PURE__*/function () {
      function LazyloadExampleComponent(http) {
        var _this = this;

        _classCallCheck(this, LazyloadExampleComponent);

        this.http = http;
        this.outputLog = [];
        this.outputBinding = {
          outputTest: function outputTest(e) {
            return _this.addLogEntry(e);
          }
        };
        this.lazyLoadReadmeMD$ = this.http.get('./assets/readme/lazy/README.md', {
          responseType: 'text'
        });
      }

      _createClass(LazyloadExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setLazyComp",
        value: function setLazyComp(lazyComponent) {
          lazyComponent.component = 'test-comp';
          lazyComponent.setComponent(); // this.cd.markForCheck();
        }
      }, {
        key: "setLazyModuleComp",
        value: function setLazyModuleComp(lazyModuleComponent) {
          lazyModuleComponent.moduleAlias = 'test-module';
          lazyModuleComponent.component = 'MyModuleComp';
          lazyModuleComponent.setComponent();
        }
      }, {
        key: "addLogEntry",
        value: function addLogEntry(e) {
          this.outputLog.push(e);
        }
      }]);

      return LazyloadExampleComponent;
    }();

    LazyloadExampleComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LazyloadExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-lazyload-example',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lazyload-example.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/lazyload-example/lazyload-example.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./lazyload-example.component.css */
      "./src/app/examples/lazyload-example/lazyload-example.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LazyloadExampleComponent);
    /***/
  },

  /***/
  "./src/app/examples/lazyload-example/lazyload-example.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/examples/lazyload-example/lazyload-example.module.ts ***!
    \**********************************************************************/

  /*! exports provided: LazyloadExampleModule */

  /***/
  function srcAppExamplesLazyloadExampleLazyloadExampleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyloadExampleModule", function () {
      return LazyloadExampleModule;
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


    var _lazyload_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lazyload-example.component */
    "./src/app/examples/lazyload-example/lazyload-example.component.ts");
    /* harmony import */


    var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gewd/lazy/loader */
    "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-loader.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @gewd/lazy/utils */
    "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-utils.js");
    /* harmony import */


    var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @gewd/lazy/registry */
    "../../dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-registry.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @gewd/markdown/module */
    "../../dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-module.js");

    var testModuleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_7__["Lazy"](function () {
      return __webpack_require__.e(
      /*! import() | lazy-test-module */
      "lazy-test-module").then(__webpack_require__.bind(null,
      /*! ./lazy-wrapper/test-module-comp */
      "./src/app/examples/lazyload-example/lazy-wrapper/test-module-comp.ts")).then(function (_ref) {
        var TestModule = _ref.TestModule;
        return TestModule;
      });
    });

    var LazyloadExampleModule = /*#__PURE__*/function () {
      function LazyloadExampleModule() {
        _classCallCheck(this, LazyloadExampleModule);
      }

      _createClass(LazyloadExampleModule, [{
        key: "getComponents",
        value: function getComponents() {
          return [{
            name: 'LazyLoadExample',
            componentType: _lazyload_example_component__WEBPACK_IMPORTED_MODULE_3__["LazyloadExampleComponent"]
          }];
        }
      }]);

      return LazyloadExampleModule;
    }();

    LazyloadExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_lazyload_example_component__WEBPACK_IMPORTED_MODULE_3__["LazyloadExampleComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["GewdLazyLoaderModule"].withLazy([{
        moduleName: 'test-module',
        moduleConfig: {
          load: testModuleLazy
        }
      }]), _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_10__["MarkdownModule"]]
    })], LazyloadExampleModule);

    _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_8__["DynamicLoaderRegistry"].RegisterLazyComponent('test-comp', new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_7__["Lazy"](function () {
      return __webpack_require__.e(
      /*! import() | lazy-wrapper-test-comp */
      "lazy-wrapper-test-comp").then(__webpack_require__.bind(null,
      /*! ./lazy-wrapper/test-comp */
      "./src/app/examples/lazyload-example/lazy-wrapper/test-comp.ts"));
    }));
    /***/

  }
}]);
//# sourceMappingURL=lazyload-example-module-es5.js.map