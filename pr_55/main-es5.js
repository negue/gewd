(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+7VV":
    /*!**********************************************************!*\
      !*** ./libs/mat-utils/custom-form-control/public_api.ts ***!
      \**********************************************************/

    /*! exports provided: CustomFormControlModule, CustomFormControlComponent */

    /***/
    function VV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./custom-form-control.module */
      "mkVm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function () {
        return _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"];
      });
      /* harmony import */


      var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./custom-form-control.component */
      "nnzV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function () {
        return _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__["CustomFormControlComponent"];
      });
      /***/

    },

    /***/
    "+8bp":
    /*!*****************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-css-props.js ***!
      \*****************************************************************************/

    /*! exports provided: CSSPropsDirective, CssPropsModule, CssPropsService, ElementCssService, getStyleElement, replaceCss, updateCssProps, updateDynamicStyle */

    /***/
    function bp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function () {
        return CSSPropsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CssPropsModule", function () {
        return CssPropsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CssPropsService", function () {
        return CssPropsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElementCssService", function () {
        return ElementCssService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStyleElement", function () {
        return getStyleElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "replaceCss", function () {
        return replaceCss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateCssProps", function () {
        return updateCssProps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function () {
        return updateDynamicStyle;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function updateCssProps(element, cssProps) {
        var style = element.style;

        for (var _i = 0, _Object$entries = Object.entries(cssProps); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              k = _Object$entries$_i[0],
              v = _Object$entries$_i[1];

          style.setProperty(k, v.toString(), 'important');
        }
      } // Todo use @gewd/utils for that?


      function updateDynamicStyle(document, styleId, customCss) {
        var style = getStyleElement(document, styleId);
        replaceCss(document, style, customCss);
      }

      function getStyleElement(document, styleId) {
        var head = document.getElementsByTagName('head')[0];
        var allStyles = head.getElementsByTagName('style');
        var style = null;

        for (var styleIndex = 0; styleIndex < allStyles.length; styleIndex++) {
          var styleInHeader = allStyles.item(styleIndex);

          if (styleInHeader.id === styleId) {
            style = styleInHeader;
            break;
          }
        }

        if (style == null) {
          style = document.createElement('style');
          style.id = styleId;
          style.type = 'text/css';
          head.appendChild(style);
        }

        return style;
      }

      function replaceCss(document, styleTag, customCss) {
        if (styleTag.childNodes.length > 0) {
          styleTag.childNodes.forEach(function (child) {
            styleTag.removeChild(child);
          });
        }

        styleTag.appendChild(document.createTextNode(customCss));
      }
      /** @dynamic - allows Document in ngc build */


      var CssPropsService = /*#__PURE__*/function () {
        function CssPropsService(document, ngZone) {
          _classCallCheck(this, CssPropsService);

          this.document = document;
          this.ngZone = ngZone;
        }

        _createClass(CssPropsService, [{
          key: "updateCustomCss",
          value: function updateCustomCss(styleId, customCss) {
            var _this = this;

            this.ngZone.runOutsideAngular(function () {
              updateDynamicStyle(_this.document, styleId, customCss);
            });
          }
        }, {
          key: "updateDocumentVars",
          value: function updateDocumentVars(cssProps) {
            var _this2 = this;

            this.ngZone.runOutsideAngular(function () {
              updateCssProps(_this2.document.body, cssProps);
            });
          }
        }, {
          key: "updateElementVars",
          value: function updateElementVars(element, cssProps) {
            this.ngZone.runOutsideAngular(function () {
              updateCssProps(element, cssProps);
            });
          }
        }]);

        return CssPropsService;
      }();

      CssPropsService.ɵfac = function CssPropsService_Factory(t) {
        return new (t || CssPropsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };
      /** @nocollapse */


      CssPropsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function CssPropsService_Factory() {
          return new CssPropsService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: CssPropsService,
        providedIn: "root"
      });
      /** @nocollapse */

      CssPropsService.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CssPropsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /*
       * Workaround for setting CSS custom properties:
       * https://github.com/angular/angular/issues/9343
       *
       * Cannot work for any style properties.
       */


      var CSSPropsDirective = /*#__PURE__*/function () {
        function CSSPropsDirective(element, cssPropsService) {
          _classCallCheck(this, CSSPropsDirective);

          this.element = element;
          this.cssPropsService = cssPropsService;
        }

        _createClass(CSSPropsDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(_ref) {
            var cssProps = _ref.cssProps;
            this.cssPropsService.updateElementVars(this.element.nativeElement, cssProps.currentValue);
          }
        }]);

        return CSSPropsDirective;
      }();

      CSSPropsDirective.ɵfac = function CSSPropsDirective_Factory(t) {
        return new (t || CSSPropsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CssPropsService));
      };

      CSSPropsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CSSPropsDirective,
        selectors: [["", "cssProps", ""]],
        inputs: {
          cssProps: "cssProps"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      CSSPropsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: CssPropsService
        }];
      };

      CSSPropsDirective.propDecorators = {
        cssProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CSSPropsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cssProps]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: CssPropsService
          }];
        }, {
          cssProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /** @dynamic - allows Document in ngc build */


      var CssPropsModule = function CssPropsModule() {
        _classCallCheck(this, CssPropsModule);
      };

      CssPropsModule.ɵfac = function CssPropsModule_Factory(t) {
        return new (t || CssPropsModule)();
      };

      CssPropsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CssPropsModule
      });
      CssPropsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CssPropsModule, {
          declarations: function declarations() {
            return [CSSPropsDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CssPropsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CSSPropsDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();

      var ElementCssService = /*#__PURE__*/function () {
        function ElementCssService(cssPropsService, elementRef) {
          _classCallCheck(this, ElementCssService);

          this.cssPropsService = cssPropsService;
          this.elementRef = elementRef;
        }

        _createClass(ElementCssService, [{
          key: "updateElementVars",
          value: function updateElementVars(cssProps) {
            this.cssPropsService.updateElementVars(this.elementRef.nativeElement, cssProps);
          }
        }]);

        return ElementCssService;
      }();

      ElementCssService.ɵfac = function ElementCssService_Factory(t) {
        return new (t || ElementCssService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CssPropsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ElementCssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ElementCssService,
        factory: ElementCssService.ɵfac
      });
      /** @nocollapse */

      ElementCssService.ctorParameters = function () {
        return [{
          type: CssPropsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementCssService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: CssPropsService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "+fz5":
    /*!***************************************************!*\
      !*** ./apps/demo/src/environments/environment.ts ***!
      \***************************************************/

    /*! exports provided: environment */

    /***/
    function fz5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var _gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @gewd/ng-utils/ng-inspect */
      "HciW"); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        modules: [_gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"]]
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "+qdE":
    /*!********************************************************************!*\
      !*** ./apps/demo/src/app/example-panel/example-panel.component.ts ***!
      \********************************************************************/

    /*! exports provided: ExamplePanelComponent */

    /***/
    function qdE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamplePanelComponent", function () {
        return ExamplePanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_example_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./example-panel.component.html */
      "4pbO");
      /* harmony import */


      var _example_panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./example-panel.component.css */
      "cFVl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExamplePanelComponent = /*#__PURE__*/function () {
        function ExamplePanelComponent() {
          _classCallCheck(this, ExamplePanelComponent);

          this.packageName = '';
          this.packageTitle = '';
          this.moduleName = '';
          this.componentName = '';
        }

        _createClass(ExamplePanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "applyLazyModuleInputs",
          value: function applyLazyModuleInputs(lazyModuleComponent) {
            lazyModuleComponent.moduleAlias = this.moduleName;
            lazyModuleComponent.component = this.componentName;
            lazyModuleComponent.setComponent();
          }
        }]);

        return ExamplePanelComponent;
      }();

      ExamplePanelComponent.ctorParameters = function () {
        return [];
      };

      ExamplePanelComponent.propDecorators = {
        packageName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        packageTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        moduleName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        componentName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ExamplePanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-example-panel',
        template: _raw_loader_example_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_example_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ExamplePanelComponent);
      /***/
    },

    /***/
    "+vhj":
    /*!**********************************************!*\
      !*** ./apps/demo/src/app/app.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function vhj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.dynamic-portal-border {\n  background: darkgreen;\n  padding: 5px;\n  margin: 15px 0;\n  border: 2px dashed green;\n  display: block;\n}\n.npm-link {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZW1vdmUgdGVtcGxhdGUgY29kZSBiZWxvd1xuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5keW5hbWljLXBvcnRhbC1ib3JkZXIge1xuICBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ucG0tbGluayB7XG4gIGhlaWdodDogMjBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "/EEl":
    /*!********************************************!*\
      !*** ./libs/markdown/module/public_api.ts ***!
      \********************************************/

    /*! exports provided: MarkdownModule, RenderMarkdownComponent */

    /***/
    function EEl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./markdown.module */
      "r77W");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
        return _markdown_module__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"];
      });
      /* harmony import */


      var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./render-markdown/render-markdown.component */
      "zJp2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function () {
        return _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__["RenderMarkdownComponent"];
      });
      /***/

    },

    /***/
    0:
    /*!*************************************!*\
      !*** multi ./apps/demo/src/main.ts ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/gewd/gewd/apps/demo/src/main.ts */
      "Hasg");
      /***/
    },

    /***/
    "0LWQ":
    /*!********************************************************!*\
      !*** ./libs/components/highlight-editor/public_api.ts ***!
      \********************************************************/

    /*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */

    /***/
    function LWQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./highlight.service */
      "K9I7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function () {
        return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
        return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["HighlightService"];
      });
      /* harmony import */


      var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./highlight-editor.component */
      "IAcx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function () {
        return _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__["HighlightEditorComponent"];
      });
      /* harmony import */


      var _editor_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editor.functions */
      "S0EJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "handleTab", function () {
        return _editor_functions__WEBPACK_IMPORTED_MODULE_2__["handleTab"];
      });
      /* harmony import */


      var _editor_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor.keys */
      "Gdju");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_BACKSPACE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_DELETE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ENTER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ESCAPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_TAB", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_TAB"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_UP"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_DOWN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_LEFT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_RIGHT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_SHIFT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ALT", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ALT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_CTRL"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_META", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_META"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_CAPS_LOCK"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["ALL_CHARS_REGEX"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function () {
        return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["IGNORE_KEY_EVENTS"];
      });
      /* harmony import */


      var _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./highlight-editor.module */
      "p1Yq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function () {
        return _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__["HighlightEditorModule"];
      });
      /***/

    },

    /***/
    "0lBu":
    /*!******************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-components.js ***!
      \******************************************************************************/

    /*! exports provided: SimplePagerComponent, SimplePagerModule */

    /***/
    function lBu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function () {
        return SimplePagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function () {
        return SimplePagerModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SimplePagerComponent_ng_template_15_Template(rf, ctx) {}

      var _c0 = [[["", "simplePagerTopLeft", ""]], [["", "simplePagerTopRight", ""]]];

      var _c1 = function _c1(a0) {
        return {
          $implicit: a0
        };
      };

      var _c2 = ["[simplePagerTopLeft]", "[simplePagerTopRight]"];

      var SimplePagerComponent = /*#__PURE__*/function () {
        function SimplePagerComponent() {
          _classCallCheck(this, SimplePagerComponent);

          this.position = 0;
        }

        _createClass(SimplePagerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectPrev",
          value: function selectPrev() {
            if (this.position === 0) {
              return;
            }

            this.position--;
          }
        }, {
          key: "selectNext",
          value: function selectNext() {
            if (this.position === this.items.length - 1) {
              return;
            }

            this.position++;
          }
        }]);

        return SimplePagerComponent;
      }();

      SimplePagerComponent.ɵfac = function SimplePagerComponent_Factory(t) {
        return new (t || SimplePagerComponent)();
      };

      SimplePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SimplePagerComponent,
        selectors: [["simple-pager"]],
        contentQueries: function SimplePagerComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        inputs: {
          items: "items"
        },
        ngContentSelectors: _c2,
        decls: 16,
        vars: 12,
        consts: [[1, "navigation-row", "flex"], [1, "navigation-row-left"], [1, "navigation-row-panel", "flex"], [1, "left-arrow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], [1, "right-arrow", 3, "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], [1, "position-label"], [1, "navigation-row-right"], [1, "slot"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function SimplePagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimplePagerComponent_Template_span_click_4_listener() {
              return ctx.selectPrev();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimplePagerComponent_Template_span_click_7_listener() {
              return ctx.selectNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SimplePagerComponent_ng_template_15_Template, 0, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("only-one", (ctx.items == null ? null : ctx.items.length) === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.position === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.position === (ctx.items == null ? null : ctx.items.length) - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.position + 1, " of ", ctx.items == null ? null : ctx.items.length, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.items[ctx.position]));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}.left-arrow[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%]{--arrow-color:#fff}.left-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .right-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--arrow-color)}.left-arrow[_ngcontent-%COMP%]:hover:not(.disabled), .right-arrow[_ngcontent-%COMP%]:hover:not(.disabled){cursor:pointer}.left-arrow.disabled[_ngcontent-%COMP%], .right-arrow.disabled[_ngcontent-%COMP%]{--arrow-color:grey}.slot[_ngcontent-%COMP%]{position:relative;flex:1;overflow-y:auto}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.position-label[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}.navigation-row-panel[_ngcontent-%COMP%]{flex:1;justify-content:flex-end}"]
      });
      /** @nocollapse */

      SimplePagerComponent.ctorParameters = function () {
        return [];
      };

      SimplePagerComponent.propDecorators = {
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'simple-pager',
            template: "<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n",
            styles: [":host{display:flex;flex-direction:column}.left-arrow,.right-arrow{--arrow-color:#fff}.left-arrow svg path,.right-arrow svg path{fill:var(--arrow-color)}.left-arrow:hover:not(.disabled),.right-arrow:hover:not(.disabled){cursor:pointer}.left-arrow.disabled,.right-arrow.disabled{--arrow-color:grey}.slot{position:relative;flex:1;overflow-y:auto}.flex{display:flex;flex-direction:row;align-items:center}.position-label{margin-left:1rem;margin-right:1rem}.navigation-row-panel{flex:1;justify-content:flex-end}"]
          }]
        }], function () {
          return [];
        }, {
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var SimplePagerModule = function SimplePagerModule() {
        _classCallCheck(this, SimplePagerModule);
      };

      SimplePagerModule.ɵfac = function SimplePagerModule_Factory(t) {
        return new (t || SimplePagerModule)();
      };

      SimplePagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SimplePagerModule
      });
      SimplePagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePagerModule, {
          declarations: function declarations() {
            return [SimplePagerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [SimplePagerComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePagerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [SimplePagerComponent],
            exports: [SimplePagerComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "1dfk":
    /*!****************************************************************!*\
      !*** ./libs/mat-utils/material-icons/register_icons.module.ts ***!
      \****************************************************************/

    /*! exports provided: REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */

    /***/
    function dfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function () {
        return REGISTORY_ICONS_PAIR_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function () {
        return RegisterIconsModule;
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


      var _register_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register_icons */
      "esWc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var RegisterIconsModule_1;
      var REGISTORY_ICONS_PAIR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/mat-utils/RegistryIconsPair');

      var RegisterIconsModule = RegisterIconsModule_1 = /*#__PURE__*/function () {
        function RegisterIconsModule(iconRegistry, sanitizer, registryIconsPairsArray) {
          _classCallCheck(this, RegisterIconsModule);

          var _iterator = _createForOfIteratorHelper(registryIconsPairsArray),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var iconPair = _step.value;
              Object(_register_icons__WEBPACK_IMPORTED_MODULE_3__["registerIcons"])(iconRegistry, sanitizer, iconPair);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        _createClass(RegisterIconsModule, null, [{
          key: "register",
          value: function register(useValue) {
            return {
              ngModule: RegisterIconsModule_1,
              providers: [{
                provide: REGISTORY_ICONS_PAIR_TOKEN,
                useValue: useValue,
                multi: true
              }]
            };
          }
        }]);

        return RegisterIconsModule;
      }();

      RegisterIconsModule.ctorParameters = function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [REGISTORY_ICONS_PAIR_TOKEN]
          }]
        }];
      };

      RegisterIconsModule = RegisterIconsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Array])], RegisterIconsModule);
      /***/
    },

    /***/
    "3DnX":
    /*!*****************************************************************************!*\
      !*** ./dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-contracts.js ***!
      \*****************************************************************************/

    /*! exports provided: DEFAULT_MERMAID_OPTIONS, DEFAULT_PRISM_OPTIONS */

    /***/
    function DnX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function () {
        return DEFAULT_MERMAID_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function () {
        return DEFAULT_PRISM_OPTIONS;
      });

      var DEFAULT_PRISM_OPTIONS = {
        assetPath: './assets/prism/',
        languageFileType: 'js',
        languageMap: {
          ts: 'typescript'
        }
      }; // https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults

      var DEFAULT_MERMAID_OPTIONS = {
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true
        },
        startOnLoad: false,
        theme: 'neutral',
        themeCSS: '.label { font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif !important; font-size: 15px; } .label foreignObject { overflow: visible; }'
      };
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    },

    /***/
    "3Dq0":
    /*!*********************************************************!*\
      !*** ./apps/demo/src/app/markdown-toolbar.component.ts ***!
      \*********************************************************/

    /*! exports provided: MarkdownToolbarComponent */

    /***/
    function Dq0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownToolbarComponent", function () {
        return MarkdownToolbarComponent;
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


      var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @gewd/markdown/module */
      "FzPY");

      var MarkdownToolbarComponent = function MarkdownToolbarComponent(markdown) {
        _classCallCheck(this, MarkdownToolbarComponent);

        this.markdown = markdown;
      };

      MarkdownToolbarComponent.ctorParameters = function () {
        return [{
          type: _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__["RenderMarkdownComponent"]
        }];
      };

      MarkdownToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "",
        selector: 'gewd-markdown-toolbar'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__["RenderMarkdownComponent"]])], MarkdownToolbarComponent);
      /***/
    },

    /***/
    "4pbO":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./apps/demo/src/app/example-panel/example-panel.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pbO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-expansion-panel (opened)=\"applyLazyModuleInputs(lazyModuleComponent)\">\n  <mat-expansion-panel-header>\n    <a [href]=\"'https://www.npmjs.com/package/' + packageName\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img [src]=\"'https://img.shields.io/npm/v/' + packageName + '.svg?'\"\n           [alt]=\"packageName + ' NPM Version'\">\n    </a>\n    &nbsp;- {{ packageTitle }}\n  </mat-expansion-panel-header>\n\n  <gewd-lazy-module-component\n    #lazyModuleComponent>\n    <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n";
      /***/
    },

    /***/
    "5aeG":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./apps/demo/src/app/app.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function aeG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Open Dev-Tools to see the network calls.</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n";
      /***/
    },

    /***/
    "7WD9":
    /*!*****************************************************************!*\
      !*** ./dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-utils.js ***!
      \*****************************************************************/

    /*! exports provided: Lazy */

    /***/
    function WD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lazy", function () {
        return Lazy;
      });

      var Lazy = /*#__PURE__*/function () {
        function Lazy(loader) {
          _classCallCheck(this, Lazy);

          this.loader = loader;
        }

        _createClass(Lazy, [{
          key: "getValue",
          value: function getValue() {
            if (this.cachedPromise) {
              return this.cachedPromise;
            }

            return this.cachedPromise = this.loader();
          }
        }, {
          key: "reset",
          value: function reset() {
            this.cachedPromise = null;
          }
        }], [{
          key: "create",
          value: function create(loader) {
            return new Lazy(loader);
          }
        }]);

        return Lazy;
      }();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "DCkP":
    /*!*****************************************!*\
      !*** ./apps/demo/src/app/app.module.ts ***!
      \*****************************************/

    /*! exports provided: AppModule */

    /***/
    function DCkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (__webpack__worker__0) {
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
          return AppModule;
        });
        /* harmony import */


        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! tslib */
        "mrSG");
        /* harmony import */


        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @angular/platform-browser */
        "jhN1");
        /* harmony import */


        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @angular/core */
        "fXoL");
        /* harmony import */


        var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./app.component */
        "mcRc");
        /* harmony import */


        var _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @gewd/markdown */
        "PbxA");
        /* harmony import */


        var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @angular/forms */
        "3Pt+");
        /* harmony import */


        var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @angular/material/expansion */
        "7EHt");
        /* harmony import */


        var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @angular/material/tabs */
        "wZkO");
        /* harmony import */


        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! @angular/platform-browser/animations */
        "R1ws");
        /* harmony import */


        var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! @gewd/markdown/contracts */
        "3DnX");
        /* harmony import */


        var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! @gewd/lazy/loader */
        "J/Rg");
        /* harmony import */


        var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! @angular/material/button */
        "bTqV");
        /* harmony import */


        var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! @gewd/ng-utils/dynamic-portal */
        "zGXa");
        /* harmony import */


        var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! @angular/material/progress-bar */
        "bv9b");
        /* harmony import */


        var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! @gewd/markdown/service */
        "ryMm");
        /* harmony import */


        var _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        /*! ./md-cache-example.service */
        "sd5n");
        /* harmony import */


        var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        /*! @angular/router */
        "tyNb");
        /* harmony import */


        var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        /*! @angular/common/http */
        "tk/3");
        /* harmony import */


        var _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        /*! ./markdown-toolbar.component */
        "3Dq0");
        /* harmony import */


        var _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        /*! @gewd/ng-utils/ng-error-overlay */
        "v3gb");
        /* harmony import */


        var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
        /*! ../environments/environment */
        "+fz5");
        /* harmony import */


        var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
        /*! @gewd/components/highlight-editor */
        "W81V");
        /* harmony import */


        var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
        /*! @angular/material/select */
        "d3UM");
        /* harmony import */


        var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
        /*! @angular/material/input */
        "qFsG");
        /* harmony import */


        var _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
        /*! ../../../../libs/mat-utils/material-icons */
        "mRMK");
        /* harmony import */


        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
        /*! @angular/material/icon */
        "NFeN");
        /* harmony import */


        var _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
        /*! ./example-panel/example-panel.component */
        "+qdE");
        /* harmony import */


        var _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
        /*! @gewd/mat-utils/custom-form-control */
        "gICU");
        /* harmony import */


        var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
        /*! @gewd/lazy/utils */
        "7WD9");

        var marked = function marked() {
          return new Worker(__webpack__worker__0, undefined);
        };

        var markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | markdown-example-module */
          "markdown-example-module").then(__webpack_require__.bind(null,
          /*! ./examples/markdown-example/markdown-example.module */
          "B/di")).then(function (_ref2) {
            var MarkdownExampleModule = _ref2.MarkdownExampleModule;
            return MarkdownExampleModule;
          });
        });
        var lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | lazyload-example-module */
          "lazyload-example-module").then(__webpack_require__.bind(null,
          /*! ./examples/lazyload-example/lazyload-example.module */
          "j0+E")).then(function (_ref3) {
            var LazyloadExampleModule = _ref3.LazyloadExampleModule;
            return LazyloadExampleModule;
          });
        });
        var componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | components-example-module */
          "components-example-module").then(__webpack_require__.bind(null,
          /*! ./examples/components-example/components-example.module */
          "6RHk")).then(function (_ref4) {
            var ComponentsExampleModule = _ref4.ComponentsExampleModule;
            return ComponentsExampleModule;
          });
        });
        var portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | lazy-portal-module */
          "lazy-portal-module").then(__webpack_require__.bind(null,
          /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */
          "uy6E")).then(function (_ref5) {
            var PortalModule = _ref5.PortalModule;
            return PortalModule;
          });
        });

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["MarkdownToolbarComponent"], _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__["ExamplePanelComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([], {
            relativeLinkResolution: 'legacy'
          }), _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__["GewdLazyLoaderModule"].withLazy([{
            moduleName: 'markdown-example',
            moduleConfig: {
              load: markdownExampleLazy
            }
          }, {
            moduleName: 'lazyload-example',
            moduleConfig: {
              load: lazyLoadExampleLazy
            }
          }, {
            moduleName: 'portal-module',
            moduleConfig: {
              load: portalLazy
            }
          }, {
            moduleName: 'components-example',
            moduleConfig: {
              load: componentsExampleLazy
            }
          }]), _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__["DynamicPortalModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__["NgErrorOverlayModule"]].concat(_toConsumableArray(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].modules), [_gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__["HighlightEditorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__["CustomFormControlModule"], _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__["RegisterIconsModule"].register({
            pathToIcons: './assets/material_icons',
            iconArray: ['add', 'art_track']
          }), _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"]]),
          providers: [{
            provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__["MarkdownOptionsInjectorToken"],
            useValue: {
              getWorker: marked,
              options: {
                prism: Object.assign(Object.assign({}, _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PRISM_OPTIONS"]), {
                  /** if needed **/
                  languageFileType: 'min.js',
                  languageMap: {
                    ts: 'typescript',
                    cs: 'csharp' // additional

                  },
                  highlightMarkdownCode: true,
                  additionalPluginPaths: ['assets/prism/prism-css-extras.min.js', 'assets/prism/prism-plugin-inline-color.worker-func.js', 'assets/prism/prism-plugin-bracket-match.worker-func.js']
                })
              },
              mermaidPath: 'mermaid.min.js',
              mermaidOptions: {
                theme: 'neutral'
              }
            }
          }, _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__["MdCacheExampleService"], {
            provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__["MarkdownCacheService"],
            useExisting: _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__["MdCacheExampleService"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })], AppModule);
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./node_modules/worker-plugin/dist/loader.js?name=0!./markdown.worker.ts */
      "dTHw"));
      /***/
    },

    /***/
    "FzPY":
    /*!**************************************************************************!*\
      !*** ./dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-module.js ***!
      \**************************************************************************/

    /*! exports provided: MarkdownModule, RenderMarkdownComponent */

    /***/
    function FzPY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
        return MarkdownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function () {
        return RenderMarkdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/markdown/service */
      "ryMm");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var _c0 = [[["", "markdown__above", ""]], [["", "markdown__below", ""]]];
      var _c1 = ["[markdown__above]", "[markdown__below]"];

      var RenderMarkdownComponent = /*#__PURE__*/function () {
        function RenderMarkdownComponent(service, element, sanitizer, cache) {
          _classCallCheck(this, RenderMarkdownComponent);

          this.service = service;
          this.element = element;
          this.sanitizer = sanitizer;
          this.cache = cache;
          this.showRawMd = false;
          this.useCache = false;
          this.allowMermaid = true;
          this.onLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._htmlToShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
          this.parsedHtml$ = this._htmlToShow$;
        }

        _createClass(RenderMarkdownComponent, [{
          key: "markdown",
          get: function get() {
            return this._markdown;
          },
          set: function set(value) {
            if (this._markdown !== value) {
              this._markdown = value;

              if (this.showRawMd) {
                this._htmlToShow$.next(value);
              }

              this.compile();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.compile();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onClick",
          value: function onClick(e) {
            var target = e.target;
            var aHref = null;

            while (aHref == null && target != null) {
              if (target.tagName === 'A') {
                aHref = target;
              }

              target = target.parentElement;
            }

            if (aHref) {
              this.onLinkClick.next({
                event: e,
                link: aHref
              });
            }
          }
        }, {
          key: "compile",
          value: function compile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var cachedMarkdown, parsedHtml;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;

                      if (!this.useCache) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 4;
                      return this.cache.getCached(this._markdown);

                    case 4:
                      cachedMarkdown = _context2.sent;

                      if (!cachedMarkdown) {
                        _context2.next = 8;
                        break;
                      }

                      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));

                      return _context2.abrupt("return");

                    case 8:
                      _context2.next = 10;
                      return this.service.compileMarkdown(this._markdown, this.allowMermaid);

                    case 10:
                      parsedHtml = _context2.sent;

                      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));

                      if (this.useCache) {
                        this.cache.saveCached(this._markdown, parsedHtml);
                      }

                      _context2.next = 19;
                      break;

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](0);
                      console.error(_context2.t0);

                      this._htmlToShow$.next(_context2.t0);

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 15]]);
            }));
          }
        }]);

        return RenderMarkdownComponent;
      }();

      RenderMarkdownComponent.ɵfac = function RenderMarkdownComponent_Factory(t) {
        return new (t || RenderMarkdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"]));
      };

      RenderMarkdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RenderMarkdownComponent,
        selectors: [["gewd-markdown"]],
        hostBindings: function RenderMarkdownComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RenderMarkdownComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          showRawMd: "showRawMd",
          useCache: "useCache",
          allowMermaid: "allowMermaid",
          markdown: "markdown",
          mermaidTheme: "mermaidTheme"
        },
        outputs: {
          onLinkClick: "onLinkClick"
        },
        ngContentSelectors: _c1,
        decls: 6,
        vars: 3,
        consts: [[1, "above"], [3, "innerHTML"], [1, "below"]],
        template: function RenderMarkdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.parsedHtml$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%]     foreignObject{overflow:visible}"]
      });
      /** @nocollapse */

      RenderMarkdownComponent.ctorParameters = function () {
        return [{
          type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"]
        }];
      };

      RenderMarkdownComponent.propDecorators = {
        showRawMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useCache: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allowMermaid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mermaidTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        markdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onLinkClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderMarkdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gewd-markdown',
            template: "<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n",
            styles: [":host ::ng-deep foreignObject{overflow:visible}"]
          }]
        }], function () {
          return [{
            type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"]
          }];
        }, {
          showRawMd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          useCache: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          allowMermaid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onLinkClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          markdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }],
          mermaidTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MarkdownModule = function MarkdownModule() {
        _classCallCheck(this, MarkdownModule);
      };

      MarkdownModule.ɵfac = function MarkdownModule_Factory(t) {
        return new (t || MarkdownModule)();
      };

      MarkdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MarkdownModule
      });
      MarkdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarkdownModule, {
          declarations: function declarations() {
            return [RenderMarkdownComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [RenderMarkdownComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [RenderMarkdownComponent],
            exports: [RenderMarkdownComponent],
            providers: []
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "Gdju":
    /*!*********************************************************!*\
      !*** ./libs/components/highlight-editor/editor.keys.ts ***!
      \*********************************************************/

    /*! exports provided: KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS */

    /***/
    function Gdju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function () {
        return KEY_BACKSPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function () {
        return KEY_DELETE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function () {
        return KEY_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function () {
        return KEY_ESCAPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_TAB", function () {
        return KEY_TAB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function () {
        return KEY_ARROW_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function () {
        return KEY_ARROW_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function () {
        return KEY_ARROW_LEFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function () {
        return KEY_ARROW_RIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function () {
        return KEY_SHIFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_ALT", function () {
        return KEY_ALT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function () {
        return KEY_CTRL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_META", function () {
        return KEY_META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function () {
        return KEY_CAPS_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function () {
        return ALL_CHARS_REGEX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function () {
        return IGNORE_KEY_EVENTS;
      });

      var KEY_BACKSPACE = "Backspace";
      var KEY_DELETE = "Delete";
      var KEY_ENTER = "Enter";
      var KEY_ESCAPE = "Escape";
      var KEY_TAB = "Tab";
      var KEY_ARROW_UP = "ArrowUp";
      var KEY_ARROW_DOWN = "ArrowDown";
      var KEY_ARROW_LEFT = "ArrowLeft";
      var KEY_ARROW_RIGHT = "ArrowRight";
      var KEY_SHIFT = "Shift";
      var KEY_ALT = "Alt";
      var KEY_CTRL = "Control";
      var KEY_META = "Meta";
      var KEY_CAPS_LOCK = "CapsLock";
      var ALL_CHARS_REGEX = /^[1234567890a-zA-ZäöüÄÖÜ,;.:\-_#+`´?(){}|\[\]@]+$/;
      var IGNORE_KEY_EVENTS = [KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, KEY_ESCAPE];
      /***/
    },

    /***/
    "Hasg":
    /*!*******************************!*\
      !*** ./apps/demo/src/main.ts ***!
      \*******************************/

    /*! no exports provided */

    /***/
    function Hasg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "DCkP");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "+fz5");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (moduleRef) {
          var applicationRef = moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
          var componentRef = applicationRef.components[0]; // allows to run `ng.profiler.timeChangeDetection();`

          Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["enableDebugTools"])(componentRef);
        })["catch"](function (err) {
          return window['console'].error(err);
        });
      });
      /***/
    },

    /***/
    "HciW":
    /*!******************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-inspect.js ***!
      \******************************************************************************/

    /*! exports provided: NgInspectComponent, NgInspectModule */

    /***/
    function HciW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function () {
        return NgInspectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgInspectModule", function () {
        return NgInspectModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @gewd/ng-utils/bootstrap-component */
      "fCuG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");

      function NgInspectComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_1_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var context_r9 = ctx_r15.context;
            var item_r8 = ctx_r15.item;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.onChangeGeneric($event.checked, context_r9, item_r8.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var context_r9 = ctx_r17.context;
          var item_r8 = ctx_r17.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", context_r9.instance[item_r8.key]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.key, " ");
        }
      }

      function NgInspectComponent_ng_template_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_2_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var context_r9 = ctx_r21.context;
            var item_r8 = ctx_r21.item;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onChangeGeneric(_r18.value, context_r9, item_r8.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var context_r9 = ctx_r22.context;
          var item_r8 = ctx_r22.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", context_r9.instance[item_r8.key])("placeholder", item_r8.key);
        }
      }

      function NgInspectComponent_ng_template_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_3_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var context_r9 = ctx_r26.context;
            var item_r8 = ctx_r26.item;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onChangeGeneric(_r23.value, context_r9, item_r8.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var context_r9 = ctx_r27.context;
          var item_r8 = ctx_r27.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", context_r9.instance[item_r8.key])("placeholder", item_r8.key);
        }
      }

      function NgInspectComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgInspectComponent_ng_template_0_ng_container_4_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var context_r9 = ctx_r31.context;
            var item_r8 = ctx_r31.item;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onChangeGeneric(_r28.value, context_r9, item_r8.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var context_r9 = ctx_r32.context;
          var item_r8 = ctx_r32.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", context_r9.instance[item_r8.key])("placeholder", item_r8.key);
        }
      }

      function NgInspectComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgInspectComponent_ng_template_0_ng_container_1_Template, 3, 2, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgInspectComponent_ng_template_0_ng_container_2_Template, 4, 2, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgInspectComponent_ng_template_0_ng_container_3_Template, 4, 2, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgInspectComponent_ng_template_0_ng_container_4_Template, 4, 2, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r8.propInfo.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "color");
        }
      }

      function NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_ng_template_0_Template(rf, ctx) {}

      function NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          item: a0,
          context: a1
        };
      };

      function NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_1_Template, 1, 0, undefined, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, item_r36, context_r34));
        }
      }

      function NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 28);
        }

        if (rf & 2) {
          var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r51.byPassAttr("--bg-color:" + context_r34.instance[item_r36.key]));
        }
      }

      function NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_span_4_Template, 1, 2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r36.key, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.propInfo.type === "color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", context_r34.instance[item_r36.key], "");
        }
      }

      function NgInspectComponent_ng_template_2_div_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgInspectComponent_ng_template_2_div_0_ng_container_2_div_1_Template, 2, 5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgInspectComponent_ng_template_2_div_0_ng_container_2_ng_template_2_Template, 6, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.propInfo.canEdit && item_r36.editMode)("ngIfElse", _r45);
        }
      }

      function NgInspectComponent_ng_template_2_div_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, context_r34.instance[item_r36.key])));
        }
      }

      function NgInspectComponent_ng_template_2_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgInspectComponent_ng_template_2_div_0_div_4_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r59.toggleEdit(item_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgInspectComponent_ng_template_2_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgInspectComponent_ng_template_2_div_0_div_6_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.onPinOp(context_r34, item_r36.key, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgInspectComponent_ng_template_2_div_0_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgInspectComponent_ng_template_2_div_0_ng_template_7_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r66.onPinOp(context_r34, item_r36.key, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgInspectComponent_ng_template_2_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgInspectComponent_ng_template_2_div_0_ng_container_2_Template, 4, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgInspectComponent_ng_template_2_div_0_ng_container_3_Template, 9, 6, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgInspectComponent_ng_template_2_div_0_div_4_Template, 4, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgInspectComponent_ng_template_2_div_0_div_6_Template, 7, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgInspectComponent_ng_template_2_div_0_ng_template_7_Template, 4, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;
          var odd_r37 = ctx.odd;

          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var context_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().context;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("odd", odd_r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r36.propInfo.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "observable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.propInfo.canEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.isPinned(context_r34, item_r36.key))("ngIfElse", _r42);
        }
      }

      function NgInspectComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgInspectComponent_ng_template_2_div_0_Template, 9, 7, "div", 14);
        }

        if (rf & 2) {
          var items_r33 = ctx.items;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r33)("ngForTrackBy", ctx_r3.trackByEntry);
        }
      }

      function NgInspectComponent_ng_container_5_div_1_3_ng_template_0_Template(rf, ctx) {}

      function NgInspectComponent_ng_container_5_div_1_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgInspectComponent_ng_container_5_div_1_3_ng_template_0_Template, 0, 0, "ng-template");
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          items: a0,
          context: a1
        };
      };

      function NgInspectComponent_ng_container_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgInspectComponent_ng_container_5_div_1_3_Template, 1, 0, undefined, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pinnedItem_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pinnedItem_r73.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, pinnedItem_r73.entries, pinnedItem_r73.context));
        }
      }

      function NgInspectComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgInspectComponent_ng_container_5_div_1_Template, 4, 6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var pinnedItems_r71 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pinnedItems_r71);
        }
      }

      function NgInspectComponent_div_7_3_ng_template_0_Template(rf, ctx) {}

      function NgInspectComponent_div_7_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgInspectComponent_div_7_3_ng_template_0_Template, 0, 0, "ng-template");
        }
      }

      function NgInspectComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgInspectComponent_div_7_3_Template, 1, 0, undefined, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var component_r76 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](component_r76.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, component_r76.entries, component_r76.context));
        }
      }

      function NgInspectComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Press/hold ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "kbd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ctrl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " to select ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " your component to inspect ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var highlightClass = 'highlight-item';
      /** @dynamic - allows Document in ngc build */

      var NgInspectComponent = /*#__PURE__*/function () {
        function NgInspectComponent(cd, sanitizer, document) {
          var _this3 = this;

          _classCallCheck(this, NgInspectComponent);

          this.cd = cd;
          this.sanitizer = sanitizer;
          this.document = document;
          this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.pinnedItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.pinnedMap = new WeakMap();
          this.pinnedAr = [];
          this.ng = window && window.ng;
          this.IVY_MODE = this.ng && !!this.ng.getComponent;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          this.trackByEntry = function (index, item) {
            return item.key;
          };

          if (!NgInspectComponent._addedStyle) {
            NgInspectComponent._addedStyle = true;
            var style = document.createElement('style'); // WebKit hack :(

            style.appendChild(document.createTextNode('')); // Add the <style> element to the page

            document.head.appendChild(style);
            style.sheet.addRule(".".concat(highlightClass), 'border: 2px dotted lightblue !important;');
          }

          var weakMap = new WeakMap();
          var highlightItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          highlightItem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), //filter(item => !!item),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()).subscribe(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                oldItem = _ref7[0],
                current = _ref7[1];

            if (current) {
              current.classList.add(highlightClass);
            }

            if (oldItem) {
              oldItem.classList.remove(highlightClass);
            }
          });
          var keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
            return e.ctrlKey;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
          var keyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            return e.ctrlKey;
          }));
          var isActive$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(keyDown$, keyUp$);
          isActive$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (value) {
            return value ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this3.getCurrentElement()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
              return console.info({
                x: x
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
              return !!e && !_this3.isChildOfIgnoredElement(e.target);
            })) : rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.target === y.target;
          })).subscribe(function (event) {
            var target = event.target;

            var elementWithContext = _this3.findNextContext(target);

            if (elementWithContext) {
              var cached = weakMap.has(elementWithContext);
              var context = cached ? weakMap.get(elementWithContext) : _this3.getComponent(elementWithContext);

              if (!cached && context) {
                weakMap.set(elementWithContext, context);
              }

              if (context) {
                highlightItem$.next(elementWithContext);
                var instance = context.instance;
                var entries = Object.entries(instance).map(function (_ref8) {
                  var _ref9 = _slicedToArray(_ref8, 2),
                      key = _ref9[0],
                      value = _ref9[1];

                  return {
                    key: key,
                    propInfo: _this3.getPropInfo(value)
                  };
                }).filter(function (e) {
                  return !!e.propInfo;
                });
                var found = {
                  context: context,
                  keys: Object.keys(instance),
                  entries: entries,
                  name: instance.__proto__.constructor.name
                };

                _this3.component$.next(found);
              } else {
                highlightItem$.next(null);

                _this3.component$.next(null);
              }
            } else {
              highlightItem$.next(null);

              _this3.component$.next(null);
            }
          });
        }

        _createClass(NgInspectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }, {
          key: "onChangeGeneric",
          value: function onChangeGeneric(value, context, key) {
            context.instance[key] = value;
            context.cd.markForCheck();
            this.cd.markForCheck();
          }
        }, {
          key: "onPinOp",
          value: function onPinOp(context, prop, pin) {
            var pinnedEntry = null;

            if (this.pinnedMap.has(context)) {
              pinnedEntry = this.pinnedMap.get(context);
            } else {
              pinnedEntry = {
                pinned: []
              };
              this.pinnedMap.set(context, pinnedEntry);
            }

            if (pin) {
              pinnedEntry.pinned.push(prop);

              if (!this.pinnedAr.includes(context)) {
                this.pinnedAr.push(context);
              }
            } else {
              var indexOf = pinnedEntry.pinned.indexOf(prop);
              pinnedEntry.pinned.splice(indexOf, 1);

              if (pinnedEntry.pinned.length === 0) {
                var indexOfInstance = this.pinnedAr.indexOf(context);
                this.pinnedAr.splice(indexOfInstance, 1);
              }
            }

            this.cd.markForCheck();
            this.fillPinnedArray();
          }
        }, {
          key: "isPinned",
          value: function isPinned(context, prop) {
            if (this.pinnedMap.has(context)) {
              return this.pinnedMap.get(context).pinned.includes(prop);
            } else {
              return false;
            }
          }
        }, {
          key: "getPropInfo",
          value: function getPropInfo(value) {
            var type = typeof value;

            switch (type) {
              case 'boolean':
              case 'number':
                return {
                  canEdit: true,
                  type: type
                };

              case 'string':
                var str = value.toString();
                var isColor = str.includes('#') && str.length === 7;
                return {
                  canEdit: true,
                  type: isColor ? 'color' : 'string'
                };

              case 'object':
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value)) {
                  return {
                    canEdit: false,
                    type: 'observable'
                  };
                }

                return null;

              default:
                return null;
            }
          }
        }, {
          key: "toggleEdit",
          value: function toggleEdit(item) {
            item.editMode = !item.editMode;
          }
        }, {
          key: "byPassAttr",
          value: function byPassAttr(value) {
            return this.sanitizer.bypassSecurityTrustStyle(value);
          }
        }, {
          key: "getCurrentElement",
          value: function getCurrentElement() {
            var hovering = this.document.querySelectorAll(':hover');

            if (hovering.length > 0) {
              return {
                target: hovering.item(hovering.length - 1)
              };
            }

            return null;
          }
        }, {
          key: "isChildOfIgnoredElement",
          value: function isChildOfIgnoredElement(element) {
            while (element) {
              var containsAttr = element.hasAttribute('ignore-inspect');

              if (containsAttr) {
                return true;
              }

              element = element.parentElement;
            }

            return false;
          }
        }, {
          key: "getComponent",
          value: function getComponent(element) {
            if (this.IVY_MODE) {
              var component = this.ng.getComponent(element) || this.ng.getContext(element);
              return {
                instance: component,
                cd: this.cd
              };
            } else {
              var probe = this.ng.probe(element);

              if (probe) {
                return {
                  instance: probe.context,
                  cd: probe.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])
                };
              }

              return null;
            }
          }
        }, {
          key: "fillPinnedArray",
          value: function fillPinnedArray() {
            var _this4 = this;

            var pinnedItems = [];

            var _iterator2 = _createForOfIteratorHelper(this.pinnedAr),
                _step2;

            try {
              var _loop = function _loop() {
                var context = _step2.value;
                var instance = context.instance;
                pinnedItems.push({
                  name: instance.__proto__.constructor.name,
                  context: context,
                  entries: _this4.pinnedMap.get(context).pinned.map(function (key) {
                    return {
                      key: key,
                      propInfo: _this4.getPropInfo(instance[key])
                    };
                  })
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.pinnedItems$.next(pinnedItems);
          }
        }, {
          key: "findNextContext",
          value: function findNextContext(element) {
            if (!this.IVY_MODE) {
              return element;
            }

            while (element && !this.getContext(element)) {
              element = element.parentElement;
            }

            return element;
          }
        }, {
          key: "getContext",
          value: function getContext(element) {
            return element.__ngContext__;
          }
        }]);

        return NgInspectComponent;
      }();

      NgInspectComponent.ɵfac = function NgInspectComponent_Factory(t) {
        return new (t || NgInspectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      NgInspectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgInspectComponent,
        selectors: [["ng-inspect"]],
        decls: 11,
        vars: 7,
        consts: [["itemEdit", ""], ["itemsListTemplate", ""], ["ignore-inspect", "", 1, "debug-panel"], [4, "ngIf"], ["class", "panel-background", 4, "ngIf", "ngIfElse"], ["nothing", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "checked", "change"], ["type", "number", "matInput", "", 3, "value", "placeholder", "change"], ["number", ""], ["type", "text", "matInput", "", 3, "value", "placeholder", "change"], ["text", ""], ["type", "color", "matInput", "", 3, "value", "placeholder", "change"], ["class", "item-row", 3, "odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "item-row"], [2, "flex", "1", 3, "ngSwitch"], [4, "ngSwitchDefault"], ["class", "icon", 3, "click", 4, "ngIf"], [1, "icon"], [3, "click", 4, "ngIf", "ngIfElse"], ["unpinned", ""], [4, "ngIf", "ngIfElse"], ["readOnly", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-hint"], [1, "prop-value"], ["class", "color-box", 3, "style", 4, "ngIf"], [1, "color-box"], [1, "icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z", 1, "svg-color"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0,0h24v24H0V0z", "fill", "none"], ["d", "M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z", 1, "svg-color"], ["d", "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z", 1, "svg-color"], ["class", "panel-background", 4, "ngFor", "ngForOf"], [1, "panel-background"], [1, "panel-background", "center-text"]],
        template: function NgInspectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgInspectComponent_ng_template_0_Template, 5, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgInspectComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgInspectComponent_ng_container_5_Template, 2, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgInspectComponent_div_7_Template, 4, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgInspectComponent_ng_template_9_Template, 7, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.pinnedItems$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.component$))("ngIfElse", _r6);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]],
        styles: [".debug-panel[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;max-height:500px;overflow:auto;z-index:10;color:#fff}.debug-panel[_ngcontent-%COMP%]   .panel-background[_ngcontent-%COMP%]{background:#4f4f4f;border:2px dashed #4f8cc9;border-radius:10px;padding:10px;margin-bottom:10px;min-width:150px;max-width:400px}.debug-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0}.debug-panel[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer;height:20px;width:20px;margin-left:2px;margin-right:2px}.debug-panel[_ngcontent-%COMP%]   .svg-color[_ngcontent-%COMP%]{fill:#fff}.debug-panel[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{font-size:12px;color:#fff}.debug-panel[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%]{text-align:center}.debug-panel[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]{display:flex;align-items:flex-end}.debug-panel[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%]   .prop-value[_ngcontent-%COMP%]{background:#595959}.debug-panel[_ngcontent-%COMP%]   .item-row.odd[_ngcontent-%COMP%]   .prop-value[_ngcontent-%COMP%]{background:#7d7d7d}.debug-panel[_ngcontent-%COMP%]   .prop-value[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;width:250px}.debug-panel[_ngcontent-%COMP%]     mat-form-field{margin-bottom:-1.15em;width:100%}.debug-panel[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%]{--bg-color:grey;width:16px;height:16px;background:var(--bg-color);margin-right:2px;display:inline-block;border:1px solid #fff}.debug-panel[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0,0,0,.2),inset 0 2px 0 0 hsla(0,0%,100%,.7);color:#333;display:inline-block;font-size:.85em;font-weight:700;line-height:1;padding:2px 4px;white-space:nowrap}"]
      });
      NgInspectComponent._addedStyle = false;
      /** @nocollapse */

      NgInspectComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgInspectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-inspect',
            template: "<ng-template  #itemEdit let-item=\"item\" let-context=\"context\">\n  <div [ngSwitch]=\"item.propInfo.type\">\n    <ng-container *ngSwitchCase=\"'boolean'\">\n      <mat-checkbox [checked]=\"context.instance[item.key]\"\n                    (change)=\"onChangeGeneric($event.checked, context, item.key)\">\n        {{ item.key }}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'number'\">\n      <mat-form-field>\n        <input type=\"number\" [value]=\"context.instance[item.key]\" #number\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(number.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'string'\">\n      <mat-form-field>\n        <input type=\"text\" [value]=\"context.instance[item.key]\" #text\n                matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'color'\">\n      <mat-form-field>\n        <input type=\"color\"\n               [value]=\"context.instance[item.key]\" #text\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #itemsListTemplate let-items=\"items\" let-context=\"context\">\n  <div *ngFor=\"let item of items; let odd = odd; trackBy: trackByEntry\"\n       class=\"item-row\"\n       [class.odd]=\"odd\"\n  >\n    <div [ngSwitch]=\"item.propInfo.type\" style=\"flex: 1\">\n      <ng-container *ngSwitchDefault>\n        <div *ngIf=\"item.propInfo.canEdit && item.editMode; else readOnly\">\n\n          <ng-template *ngTemplateOutlet=\"itemEdit; context: {\n          item: item,\n          context: context\n        }\">\n          </ng-template>\n        </div>\n\n        <ng-template #readOnly>\n          <span class=\"mat-hint\">{{item.key}}:</span>\n          <br />\n          <span class=\"prop-value\">\n            <span *ngIf=\"item.propInfo.type === 'color'\"\n                 [style]=\"byPassAttr('--bg-color:'+context.instance[item.key])\"\n                  class=\"color-box\">\n\n            </span>\n            {{context.instance[item.key]}}</span>\n        </ng-template>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'observable'\">\n        <span class=\"mat-hint\">{{item.key}}</span>:\n        <br />\n        <span class=\"prop-value\">{{context.instance[item.key] | async | json}}</span>\n      </ng-container>\n    </div>\n    <div class=\"icon\" *ngIf=\"item.propInfo.canEdit\"\n         (click)=\"toggleEdit(item)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z\"/></svg>\n    </div>\n    <div class=\"icon\">\n      <div *ngIf=\"isPinned(context, item.key), else unpinned\"\n           (click)=\"onPinOp(context, item.key, false)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\n             enable-background=\"new 0 0 24 24\"\n             height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <g><path d=\"M0,0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M0,0h24v24H0V0z\" fill=\"none\"/></g>\n          <g><path  class=\"svg-color\" d=\"M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z\"/></g></svg>\n      </div>\n      <ng-template #unpinned>\n        <div (click)=\"onPinOp(context, item.key, true)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\"\n               height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/></svg>\n        </div>\n      </ng-template>\n    </div>\n\n  </div>\n</ng-template>\n\n<div class=\"debug-panel\" ignore-inspect>\n  <ng-container *ngIf=\"pinnedItems$ | async as pinnedItems\">\n    <div class=\"panel-background\" *ngFor=\"let pinnedItem of pinnedItems\">\n      <h4>{{pinnedItem.name}}</h4>\n\n      <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: pinnedItem.entries,\n          context: pinnedItem.context\n        }\">\n      </ng-template>\n    </div>\n  </ng-container>\n\n  <div class=\"panel-background\" *ngIf=\"component$ | async as component; else nothing\">\n    <h4>{{component.name}}</h4>\n\n    <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: component.entries,\n          context: component.context\n        }\">\n    </ng-template>\n  </div>\n  <ng-template #nothing>\n    <div class=\"panel-background center-text\">\n      Press/hold <kbd>ctrl</kbd> to select <br/>\n      your component to inspect\n    </div>\n  </ng-template>\n</div>\n",
            styles: [".debug-panel{position:fixed;bottom:10px;right:10px;max-height:500px;overflow:auto;z-index:10;color:#fff}.debug-panel .panel-background{background:#4f4f4f;border:2px dashed #4f8cc9;border-radius:10px;padding:10px;margin-bottom:10px;min-width:150px;max-width:400px}.debug-panel h4{margin-top:0}.debug-panel .icon{cursor:pointer;height:20px;width:20px;margin-left:2px;margin-right:2px}.debug-panel .svg-color{fill:#fff}.debug-panel .mat-hint{font-size:12px;color:#fff}.debug-panel .center-text{text-align:center}.debug-panel .item-row{display:flex;align-items:flex-end}.debug-panel .item-row .prop-value{background:#595959}.debug-panel .item-row.odd .prop-value{background:#7d7d7d}.debug-panel .prop-value{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;width:250px}.debug-panel ::ng-deep mat-form-field{margin-bottom:-1.15em;width:100%}.debug-panel .color-box{--bg-color:grey;width:16px;height:16px;background:var(--bg-color);margin-right:2px;display:inline-block;border:1px solid #fff}.debug-panel kbd{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0,0,0,.2),inset 0 2px 0 0 hsla(0,0%,100%,.7);color:#333;display:inline-block;font-size:.85em;font-weight:700;line-height:1;padding:2px 4px;white-space:nowrap}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      var NgInspectModule = function NgInspectModule() {
        _classCallCheck(this, NgInspectModule);
      };

      NgInspectModule.ɵfac = function NgInspectModule_Factory(t) {
        return new (t || NgInspectModule)();
      };

      NgInspectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgInspectModule
      });
      NgInspectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponentModule"].component({
          elementName: 'ng-inspect',
          component: NgInspectComponent
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgInspectModule, {
          declarations: function declarations() {
            return [NgInspectComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponentModule"]];
          },
          exports: function exports() {
            return [NgInspectComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgInspectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgInspectComponent],
            entryComponents: [NgInspectComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_7__["BootstrapComponentModule"].component({
              elementName: 'ng-inspect',
              component: NgInspectComponent
            })],
            exports: [NgInspectComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "I0mV":
    /*!**************************************************************************!*\
      !*** ./libs/components/highlight-editor/highlight-editor.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function I0mV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  background: #2e2e2e;\n  display: block;\n  border: 1px solid lightgray;\n  padding: 4px;\n  --editor-min-height: 100px;\n  --editor-max-height: 100px;\n  --editor-font-size: 14px;\n  --editor-line-height: 1.5;\n  overflow-y: auto;\n  min-height: var(--editor-min-height);\n  max-height: var(--editor-max-height);\n}\n:host :host-context(.mat-form-field) {\n  border: 0;\n  padding: 0;\n  background: inherit;\n  width: 100%;\n}\n.editor {\n  position: relative;\n  padding: 0;\n  -moz-tab-size: 2ch;\n    -o-tab-size: 2ch;\n       tab-size: 2ch;\n  text-align: left;\n  box-sizing: border-box;\n  font-family: \"Fira code\", \"Fira Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: var(--editor-font-size);\n  line-height: var(--editor-line-height);\n  height: 100%;\n}\n/** shared styles */\ntextarea, .highlight-area {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background: none;\n  box-sizing: inherit;\n  display: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-ligatures: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  -moz-tab-size: inherit;\n    -o-tab-size: inherit;\n       tab-size: inherit;\n  text-indent: inherit;\n  text-rendering: inherit;\n  text-transform: inherit;\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  min-height: var(--editor-min-height);\n}\ntextarea {\n  outline: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  resize: none;\n  overflow: hidden;\n  caret-color: white;\n  caret-shape: bar;\n}\ntextarea:focus {\n  outline: none !important;\n}\n.highlight-area {\n  position: relative;\n  pointer-events: none;\n}\n.editor__no-debounce textarea {\n  -webkit-text-fill-color: transparent;\n}\n:not(.editor__no-debounce):not(.visible-highlight) textarea {\n  color: inherit;\n}\n:not(.editor__no-debounce):not(.visible-highlight) .highlight-area {\n  opacity: 0;\n}\n:not(.editor__no-debounce).visible-highlight textarea {\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hpZ2hsaWdodC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFVQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUdBLGdCQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtBQVpGO0FBTEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KO0FBVUE7RUFDRSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxrQkFBQTtJQUFBLGdCQUFBO09BQUEsYUFBQTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFFRiwwRUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FBWEY7QUFnQkEsbUJBQUE7QUFFQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7SUFBQSxvQkFBQTtPQUFBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBR0EsbUNBQUE7RUFHQSxvQ0FBQTtBQXJCRjtBQXdCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0FBdkJGO0FBeUJFO0VBQ0Usd0JBQUE7QUF2Qko7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBeEJGO0FBNkJFO0VBQ0Usb0NBQUE7QUExQko7QUFnQ0k7RUFDRSxjQUFBO0FBN0JOO0FBZ0NJO0VBQ0csVUFBQTtBQTlCUDtBQW1DSTtFQUNBLG9DQUFBO0FBakNKIiwiZmlsZSI6ImhpZ2hsaWdodC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNHB4O1xuXG4gIDpob3N0LWNvbnRleHQoLm1hdC1mb3JtLWZpZWxkKSB7XG4gICAgYm9yZGVyIDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuXG4gIC0tZWRpdG9yLW1pbi1oZWlnaHQ6IDEwMHB4O1xuICAtLWVkaXRvci1tYXgtaGVpZ2h0OiAxMDBweDtcbiAgLS1lZGl0b3ItZm9udC1zaXplOiAxNHB4O1xuICAtLWVkaXRvci1saW5lLWhlaWdodDogMS41O1xuXG5cbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBtaW4taGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWluLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLWVkaXRvci1tYXgtaGVpZ2h0KTtcbn1cblxuXG4uZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHBhZGRpbmc6IDA7XG5cbiAgdGFiLXNpemU6IDJjaDtcblxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBmb250LWZhbWlseTogJ0ZpcmEgY29kZScsICdGaXJhIE1vbm8nLCBDb25zb2xhcywgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiB2YXIoLS1lZGl0b3ItZm9udC1zaXplKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWVkaXRvci1saW5lLWhlaWdodCk7XG4gIGhlaWdodDogMTAwJTtcblxuICAvL21pbi1oZWlnaHQ6IHZhcigtLWVkaXRvci1taW4taGVpZ2h0KTtcbn1cblxuLyoqIHNoYXJlZCBzdHlsZXMgKi9cblxudGV4dGFyZWEsIC5oaWdobGlnaHQtYXJlYSB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOjA7XG5cbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB0YWItc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcblxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gIC8vIHRyYW5zaXRpb246IDIwbXMgY29sb3IsIG9wYWNpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXG5cbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICBjYXJldC1jb2xvcjogd2hpdGU7XG4gIGNhcmV0LXNoYXBlOiBiYXI7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oaWdobGlnaHQtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbn1cblxuLmVkaXRvcl9fbm8tZGVib3VuY2Uge1xuICB0ZXh0YXJlYSB7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbjpub3QoLmVkaXRvcl9fbm8tZGVib3VuY2UpIHtcbiAgJjpub3QoLnZpc2libGUtaGlnaGxpZ2h0KSB7XG4gICAgdGV4dGFyZWEge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodC1hcmVhIHtcbiAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gICYudmlzaWJsZS1oaWdobGlnaHQge1xuICAgIHRleHRhcmVhIHtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "IAcx":
    /*!************************************************************************!*\
      !*** ./libs/components/highlight-editor/highlight-editor.component.ts ***!
      \************************************************************************/

    /*! exports provided: HighlightEditorComponent */

    /***/
    function IAcx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function () {
        return HighlightEditorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_highlight_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./highlight-editor.component.html */
      "WxOa");
      /* harmony import */


      var _highlight_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./highlight-editor.component.scss */
      "I0mV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/ng-utils/css-props */
      "+8bp");
      /* harmony import */


      var _highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./highlight.service */
      "K9I7");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @gewd/ng-utils/morphdom */
      "X0rr");
      /* harmony import */


      var _editor_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./editor.functions */
      "S0EJ");
      /* harmony import */


      var _editor_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./editor.keys */
      "Gdju");

      var HighlightEditorComponent = /*#__PURE__*/function () {
        function HighlightEditorComponent(cd, cssProps, prism, ngZone, morphService) {
          _classCallCheck(this, HighlightEditorComponent);

          this.cd = cd;
          this.cssProps = cssProps;
          this.prism = prism;
          this.ngZone = ngZone;
          this.morphService = morphService;
          this.value = '';
          this.language = '';
          this.debounceTime = 600;
          this.useTabs = false;
          this.spaceWidth = 2;
          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.value);
          this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.language);
          this.debounce$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.debounceTime);
          this.showHighlighedCode$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
          this.allCharsRegex = _editor_keys__WEBPACK_IMPORTED_MODULE_10__["ALL_CHARS_REGEX"];
          this.focussed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.lastKeyTriggered$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
          this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }

        _createClass(HighlightEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.updateLinesAmount(); // once the debounceTime changes
            // recreate the observable

            this.debounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (debounceTimeInterval) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([_this5.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()), _this5.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()), _this5.lastKeyTriggered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(debounceTimeInterval));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed$)).subscribe(function (_ref10) {
              var _ref11 = _slicedToArray(_ref10, 3),
                  code = _ref11[0],
                  language = _ref11[1],
                  lastKeyEvent = _ref11[2];

              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.showHighlighedCode$.next(false);
                        _context3.next = 3;
                        return this.highlightToPreTag(code, language, lastKeyEvent);

                      case 3:
                        this.showHighlighedCode$.next(true); // incase multiple enters scroll the textarea one off, scroll back up
                        // this.textarea.nativeElement.scrollTo(0,0);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
            this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (value) {
              _this5.value = value;

              _this5.changed.emit(value);
            });
            this.highlightToPreTag('\n', null, null);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed$.next();

            this._destroyed$.complete();
          }
        }, {
          key: "onChange",
          value: function onChange(value) {
            this.value$.next(value);
            this.cd.markForCheck();
          }
        }, {
          key: "updateLinesAmount",
          value: function updateLinesAmount() {
            if (!this.value) {
              return;
            }

            var lines = this.value.split('\n').length;
            this.cssProps.updateElementVars({
              '--lines-amount': lines
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref12) {
            var value = _ref12.value,
                language = _ref12.language,
                debounceTime = _ref12.debounceTime;

            if (value) {
              this.value$.next(value.currentValue);
            }

            if (language) {
              this.language$.next(language.currentValue);
            }

            if (debounceTime) {
              this.debounce$.next(debounceTime.currentValue);
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event, textarea) {
            if (event.key.match(this.allCharsRegex) && !_editor_keys__WEBPACK_IMPORTED_MODULE_10__["IGNORE_KEY_EVENTS"].includes(event.key)) {
              this.showHighlighedCode$.next(false);
            }

            this.value$.next(textarea.value);

            if (event.key === _editor_keys__WEBPACK_IMPORTED_MODULE_10__["KEY_TAB"]) {
              var handledTab = Object(_editor_functions__WEBPACK_IMPORTED_MODULE_9__["handleTab"])(event, textarea.value, textarea.selectionStart, textarea.selectionEnd, this.useTabs, this.spaceWidth);
              this.applyToTextarea(handledTab);

              if (handledTab.textChanged) {
                this.showHighlighedCode$.next(false);
              }
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(event, value) {
            this.value$.next(value);
            this.lastKeyTriggered$.next(event);
          }
        }, {
          key: "applyToTextarea",
          value: function applyToTextarea(result) {
            if (result.textChanged) {
              this.textarea.nativeElement.value = result.newValue;
              this.textarea.nativeElement.selectionStart = result.newSelectionStart;
              this.textarea.nativeElement.selectionEnd = result.newSelectionEnd;
            }
          }
        }, {
          key: "highlightToPreTag",
          value: function highlightToPreTag(codeToHighlight, language, lastKeyEvent) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var innerHighlighed, addedBeginNewLine, addedEndNewLine;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (codeToHighlight) {
                        _context4.next = 3;
                        break;
                      }

                      this.morphService.morphElement(this.highlightArea, "<pre>\n</pre>", {
                        childrenOnly: true
                      });
                      return _context4.abrupt("return", '');

                    case 3:
                      _context4.next = 5;
                      return this.prism.highlightCode(codeToHighlight, language);

                    case 5:
                      innerHighlighed = _context4.sent;
                      addedBeginNewLine = '', addedEndNewLine = ''; // somehow if the new html starts with a newline
                      // its not added to the element

                      if (innerHighlighed.startsWith('\n')) {
                        addedBeginNewLine = '\n';
                      }

                      if (innerHighlighed.endsWith('\n')) {
                        addedEndNewLine = '\n';
                      }

                      this.morphService.morphElement(this.highlightArea, "<pre>".concat(addedBeginNewLine).concat(innerHighlighed).concat(addedEndNewLine, "</pre>"), {
                        childrenOnly: true
                      });

                      if (lastKeyEvent) {
                        this.textarea.nativeElement.blur();
                        this.textarea.nativeElement.focus();
                      }

                      return _context4.abrupt("return", innerHighlighed);

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return HighlightEditorComponent;
      }();

      HighlightEditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["ElementCssService"]
        }, {
          type: _highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_8__["MorphdomService"]
        }];
      };

      HighlightEditorComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        debounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        useTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        spaceWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        value$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        allCharsRegex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        textarea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['textarea']
        }],
        highlightArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['highlightArea']
        }],
        focussed$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      HighlightEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-prism-editor',
        template: _raw_loader_highlight_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [_gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["ElementCssService"]],
        styles: [_highlight_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["ElementCssService"], _highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_8__["MorphdomService"]])], HighlightEditorComponent);
      /***/
    },

    /***/
    "J/Rg":
    /*!******************************************************************!*\
      !*** ./dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-loader.js ***!
      \******************************************************************/

    /*! exports provided: GewdLazyLoaderModule, LazyComponent, LazyModuleComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN */

    /***/
    function JRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function () {
        return GewdLazyLoaderModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
        return LazyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function () {
        return LazyModuleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function () {
        return REGISTORY_LAZY_LOADED_MODULE_TOKEN;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/lazy/registry */
      "SccV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["targetContainer"];

      function LazyComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "!component"]);
        }
      }

      function LazyComponent_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1, ["*ngIf", "componentLoading | async"]);
        }
      }

      var _c1 = ["*", [["", "isLoading", ""]]];
      var _c2 = ["*", "[isLoading]"];

      function LazyModuleComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "!component || !moduleAlias"]);
        }
      }

      function LazyModuleComponent_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1, ["*ngIf", "componentLoading | async"]);
        }
      }

      function LazyModuleComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.error);
        }
      }

      var LazyComponent = /*#__PURE__*/function () {
        function LazyComponent(resolver, injector, cd) {
          _classCallCheck(this, LazyComponent);

          this.resolver = resolver;
          this.injector = injector;
          this.cd = cd;
          this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.componentInstance = null;
          this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(LazyComponent, [{
          key: "setComponent",
          value: function setComponent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var importComponent, imported, keys, theComp, componentFactory, componentRef;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.component) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      this.componentLoading.emit(true);
                      this.cd.detectChanges(); // cached promise

                      importComponent = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyComponents[this.component].getValue();
                      _context5.next = 7;
                      return importComponent;

                    case 7:
                      imported = _context5.sent;
                      keys = Object.keys(imported); // get the first object of the imported js-module

                      theComp = imported[keys[0]];
                      componentFactory = this.resolver.resolveComponentFactory(theComp); // only have one dynamic component render

                      this.targetContainer.clear();
                      componentRef = this.targetContainer.createComponent(componentFactory, 0, this.injector);
                      componentRef.changeDetectorRef.markForCheck();
                      this.componentLoading.emit(false);
                      this.componentCreated.emit(componentRef.instance);
                      this.componentInstance = componentRef.instance;
                      this.setInputs();
                      this.setOutputs();

                    case 19:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['component']) {
              this.setComponent();
            }

            if (changes['componentInputs']) {
              this.setInputs();
            }

            if (changes['componentOutputs']) {
              this.setOutputs();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubOutputs();
          }
        }, {
          key: "setInputs",
          value: function setInputs() {
            // console.info('setInputs', this.componentInstance, this.componentInputs);
            if (this.componentInstance && this.componentInputs) {
              var inputs = Object.keys(this.componentInputs);

              for (var _i2 = 0, _inputs = inputs; _i2 < _inputs.length; _i2++) {
                var inputKey = _inputs[_i2];
                // console.info('set ', inputKey)
                this.componentInstance[inputKey] = this.componentInputs[inputKey];
              }
            }
          }
        }, {
          key: "unsubOutputs",
          value: function unsubOutputs() {
            this.unsubForOutputs$.next();
          }
        }, {
          key: "setOutputs",
          value: function setOutputs() {
            this.unsubOutputs();

            if (this.componentInstance && this.componentOutputs) {
              var outputs = Object.keys(this.componentOutputs);

              for (var _i3 = 0, _outputs = outputs; _i3 < _outputs.length; _i3++) {
                var outputKey = _outputs[_i3];

                // console.info('subscribe to', outputKey);
                if (this.componentInstance[outputKey]) {
                  var emitter = this.componentInstance[outputKey];
                  emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
                }
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setComponent();
          }
        }]);

        return LazyComponent;
      }();

      LazyComponent.ɵfac = function LazyComponent_Factory(t) {
        return new (t || LazyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      LazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LazyComponent,
        selectors: [["gewd-lazy-component"]],
        viewQuery: function LazyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.targetContainer = _t.first);
          }
        },
        inputs: {
          component: "component",
          componentInputs: "componentInputs",
          componentOutputs: "componentOutputs"
        },
        outputs: {
          componentCreated: "componentCreated",
          componentLoading: "componentLoading"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 5,
        vars: 4,
        consts: [["targetContainer", ""], [4, "ngIf"]],
        template: function LazyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LazyComponent_ng_content_2_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LazyComponent_ng_content_3_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.component);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.componentLoading));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      LazyComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      LazyComponent.propDecorators = {
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        componentInputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        componentOutputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        targetContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['targetContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            "static": true
          }]
        }],
        componentCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        componentLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'gewd-lazy-component',
            template: "\n    <ng-container #targetContainer>\n    </ng-container>\n\n    <ng-content *ngIf=\"!component\"></ng-content>\n    <ng-content *ngIf=\"componentLoading | async\"\n                select=\"[isLoading]\"></ng-content>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          componentCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          componentLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          component: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          componentInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          componentOutputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          targetContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['targetContainer', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
              "static": true
            }]
          }]
        });
      })();

      var LazyModuleComponent = /*#__PURE__*/function () {
        function LazyModuleComponent(resolver, angularCompiler, injector, cd) {
          _classCallCheck(this, LazyModuleComponent);

          this.resolver = resolver;
          this.angularCompiler = angularCompiler;
          this.injector = injector;
          this.cd = cd;
          this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.showError = true;
          this.componentInstance = null;
          this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.alreadySettingComponent = false;
        }

        _createClass(LazyModuleComponent, [{
          key: "setComponent",
          value: function setComponent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var moduleInDictionary, moduleFactory, components, componentInfo, componentType, componentFactory, componentRef;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(!this.moduleAlias || !this.component || this.alreadySettingComponent)) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      this.error = '';
                      this.alreadySettingComponent = true;
                      moduleInDictionary = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyModuleComponents[this.moduleAlias];

                      if (moduleInDictionary) {
                        _context6.next = 9;
                        break;
                      }

                      this.error = "Module ".concat(this.moduleAlias, " not registered");
                      this.cd.markForCheck();
                      return _context6.abrupt("return");

                    case 9:
                      this.componentLoading.emit(true);

                      if (!moduleInDictionary.loadedModule) {
                        // load and cache
                        moduleInDictionary.loadedModule = moduleInDictionary.load.getValue().then(function (importedModule) {
                          return _this6.angularCompiler.compileModuleAndAllComponentsAsync(importedModule);
                        }).then(function (factory) {
                          return {
                            ngModule: factory.ngModuleFactory.create(_this6.injector),
                            componentFactories: factory.componentFactories
                          };
                        });
                      }

                      _context6.next = 13;
                      return moduleInDictionary.loadedModule;

                    case 13:
                      moduleFactory = _context6.sent;

                      if (moduleFactory.ngModule.instance.getComponents) {
                        _context6.next = 18;
                        break;
                      }

                      this.error = "Module ".concat(this.moduleAlias, " does not have a getComponents-Method");
                      this.cd.markForCheck();
                      return _context6.abrupt("return");

                    case 18:
                      components = moduleFactory.ngModule.instance.getComponents();
                      componentInfo = components.find(function (cf) {
                        return cf.name === _this6.component;
                      });

                      if (componentInfo) {
                        _context6.next = 24;
                        break;
                      }

                      this.error = "Component '".concat(this.component, "' does not exist in the 'getComponents'-Method");
                      this.cd.markForCheck();
                      return _context6.abrupt("return");

                    case 24:
                      componentType = componentInfo.componentType;
                      componentFactory = moduleFactory.ngModule.componentFactoryResolver.resolveComponentFactory(componentType); // only have one dynamic component render

                      this.targetContainer.clear();
                      componentRef = this.targetContainer.createComponent(componentFactory, 0, this.injector);
                      componentRef.changeDetectorRef.markForCheck();
                      this.componentLoading.emit(false);
                      this.componentCreated.emit(componentRef.instance);
                      this.componentInstance = componentRef.instance;
                      this.setInputs();
                      this.setOutputs();
                      this.alreadySettingComponent = false;
                      this.cd.detectChanges();

                    case 36:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.changedAndDifferent(changes, 'component')) {
              // console.info('setting component because of component');
              this.setComponent();
            }

            if (this.changedAndDifferent(changes, 'moduleAlias')) {
              // console.info('setting component because of moduleAlias');
              this.setComponent();
            }

            if (changes['componentInputs']) {
              this.setInputs();
            }

            if (changes['componentOutputs']) {
              this.setOutputs();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubOutputs();
          }
        }, {
          key: "changedAndDifferent",
          value: function changedAndDifferent(changes, name) {
            var change = changes[name];

            if (change && change.currentValue !== change.previousValue) {
              return true;
            }

            return false;
          }
        }, {
          key: "setInputs",
          value: function setInputs() {
            if (this.componentInstance && this.componentInputs) {
              var inputs = Object.keys(this.componentInputs);

              for (var _i4 = 0, _inputs2 = inputs; _i4 < _inputs2.length; _i4++) {
                var inputKey = _inputs2[_i4];
                this.componentInstance[inputKey] = this.componentInputs[inputKey];
              }
            }
          }
        }, {
          key: "unsubOutputs",
          value: function unsubOutputs() {
            this.unsubForOutputs$.next();
          }
        }, {
          key: "setOutputs",
          value: function setOutputs() {
            this.unsubOutputs();

            if (this.componentInstance && this.componentOutputs) {
              var outputs = Object.keys(this.componentOutputs);

              for (var _i5 = 0, _outputs2 = outputs; _i5 < _outputs2.length; _i5++) {
                var outputKey = _outputs2[_i5];

                if (this.componentInstance[outputKey]) {
                  var emitter = this.componentInstance[outputKey];
                  emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
                }
              }
            }
          }
        }]);

        return LazyModuleComponent;
      }();

      LazyModuleComponent.ɵfac = function LazyModuleComponent_Factory(t) {
        return new (t || LazyModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      LazyModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LazyModuleComponent,
        selectors: [["gewd-lazy-module-component"]],
        viewQuery: function LazyModuleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.targetContainer = _t.first);
          }
        },
        inputs: {
          showError: "showError",
          moduleAlias: "moduleAlias",
          component: "component",
          componentInputs: "componentInputs",
          componentOutputs: "componentOutputs"
        },
        outputs: {
          componentCreated: "componentCreated",
          componentLoading: "componentLoading"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 6,
        vars: 5,
        consts: [["targetContainer", ""], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"]],
        template: function LazyModuleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LazyModuleComponent_ng_content_2_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LazyModuleComponent_ng_content_3_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LazyModuleComponent_span_5_Template, 2, 1, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.component || !ctx.moduleAlias);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx.componentLoading));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showError && ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".error[_ngcontent-%COMP%] {\n      color: red;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      LazyModuleComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      LazyModuleComponent.propDecorators = {
        moduleAlias: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        componentInputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        componentOutputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        targetContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['targetContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            "static": true
          }]
        }],
        componentCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        componentLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        showError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyModuleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'gewd-lazy-module-component',
            template: "\n    <ng-container #targetContainer></ng-container>\n    <ng-content *ngIf=\"!component || !moduleAlias\"></ng-content>\n    <ng-content *ngIf=\"componentLoading | async\"\n                select=\"[isLoading]\"></ng-content>\n    <span *ngIf=\"showError && error\" class=\"error\">{{error}}</span>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    .error {\n      color: red;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          componentCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          componentLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          showError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          moduleAlias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          component: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          componentInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          componentOutputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          targetContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['targetContainer', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
              "static": true
            }]
          }]
        });
      })();

      var REGISTORY_LAZY_LOADED_MODULE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/lazy-loader/LazyModuleComponentConfig');

      var GewdLazyLoaderModule = /*#__PURE__*/function () {
        function GewdLazyLoaderModule(registerLazyLoads) {
          _classCallCheck(this, GewdLazyLoaderModule);

          var _iterator3 = _createForOfIteratorHelper(registerLazyLoads),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var lazyInfo = _step3.value;

              _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        _createClass(GewdLazyLoaderModule, null, [{
          key: "withLazy",
          value: function withLazy(entries) {
            var providers = entries.map(function (useValue) {
              return {
                provide: REGISTORY_LAZY_LOADED_MODULE_TOKEN,
                useValue: useValue,
                multi: true
              };
            });
            return {
              ngModule: GewdLazyLoaderModule,
              providers: providers
            };
          }
        }]);

        return GewdLazyLoaderModule;
      }();

      GewdLazyLoaderModule.ɵfac = function GewdLazyLoaderModule_Factory(t) {
        return new (t || GewdLazyLoaderModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](REGISTORY_LAZY_LOADED_MODULE_TOKEN));
      };

      GewdLazyLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: GewdLazyLoaderModule
      });
      GewdLazyLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]]
      });
      /** @nocollapse */

      GewdLazyLoaderModule.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [REGISTORY_LAZY_LOADED_MODULE_TOKEN]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GewdLazyLoaderModule, {
          declarations: function declarations() {
            return [LazyComponent, LazyModuleComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [LazyComponent, LazyModuleComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GewdLazyLoaderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [LazyComponent, LazyModuleComponent],
            exports: [LazyComponent, LazyModuleComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [REGISTORY_LAZY_LOADED_MODULE_TOKEN]
            }]
          }];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "K9I7":
    /*!***************************************************************!*\
      !*** ./libs/components/highlight-editor/highlight.service.ts ***!
      \***************************************************************/

    /*! exports provided: PrismOptionsInjectorToken, HighlightService */

    /***/
    function K9I7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function () {
        return PrismOptionsInjectorToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
        return HighlightService;
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


      var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @gewd/markdown/service */
      "ryMm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! comlink */
      "PRU4");

      var PrismOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MarkdownOptionsInjectorToken');

      var HighlightService = /*#__PURE__*/function () {
        function HighlightService(markdownOptions, prismOptions, platformId, ngZone) {
          _classCallCheck(this, HighlightService);

          this.markdownOptions = markdownOptions;
          this.prismOptions = prismOptions;
          this.ngZone = ngZone;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(platformId)) {
            if (markdownOptions) {
              var wrappedWorker = Object(comlink__WEBPACK_IMPORTED_MODULE_4__["wrap"])(markdownOptions.getWorker());
              wrappedWorker.init(markdownOptions.options);
              this.workerProxy = wrappedWorker;
            }

            if (prismOptions) {
              this.workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_4__["wrap"])(prismOptions.getWorker());
              this.workerProxy.initPrism(prismOptions.options);
            }
          }
        }

        _createClass(HighlightService, [{
          key: "highlightCode",
          value: function highlightCode(code, lang) {
            var _this7 = this;

            if (!this.workerProxy) {
              return;
            }

            return this.ngZone.runOutsideAngular(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.workerProxy.highlight(code, lang);

                      case 2:
                        return _context7.abrupt("return", _context7.sent);

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          }
        }]);

        return HighlightService;
      }();

      HighlightService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [PrismOptionsInjectorToken]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      HighlightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], HighlightService);
      /***/
    },

    /***/
    "PbxA":
    /*!***************************************!*\
      !*** ./libs/markdown/module/index.ts ***!
      \***************************************/

    /*! exports provided: MarkdownModule, RenderMarkdownComponent */

    /***/
    function PbxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "/EEl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["RenderMarkdownComponent"];
      });
      /***/

    },

    /***/
    "S0EJ":
    /*!**************************************************************!*\
      !*** ./libs/components/highlight-editor/editor.functions.ts ***!
      \**************************************************************/

    /*! exports provided: handleTab */

    /***/
    function S0EJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "handleTab", function () {
        return handleTab;
      });

      function handleTab(event, currentValue, startSelection, endSelection) {
        var useTabs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var spaceLength = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
        var result = {
          textChanged: false,
          newValue: '',
          newSelectionStart: 0,
          newSelectionEnd: 0
        };

        if (event.key !== "Tab") {
          return result;
        }

        var backwards = event.shiftKey;
        var valueToWork = useTabs ? '\t' : ''.padEnd(spaceLength, ' ');
        var textValueUntilStart = currentValue.substr(0, startSelection);
        var textValueFromStart = currentValue.substr(endSelection);

        if (backwards) {
          if (textValueUntilStart.endsWith(valueToWork)) {
            result.newValue = textValueUntilStart.substr(0, startSelection - valueToWork.length) + textValueFromStart;
            result.newSelectionStart = result.newSelectionEnd = startSelection - valueToWork.length;
            result.textChanged = true;
          }
        } else {
          result.newValue = textValueUntilStart + valueToWork + textValueFromStart;
          result.newSelectionStart = result.newSelectionEnd = startSelection + valueToWork.length;
          result.textChanged = true;
        }

        event.preventDefault();
        return result;
      }
      /***/

    },

    /***/
    "SccV":
    /*!********************************************************************!*\
      !*** ./dist/libs/lazy/__ivy_ngcc__/fesm2015/gewd-lazy-registry.js ***!
      \********************************************************************/

    /*! exports provided: DynamicLoaderRegistry */

    /***/
    function SccV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function () {
        return DynamicLoaderRegistry;
      });

      var DynamicLoaderRegistry = /*#__PURE__*/function () {
        function DynamicLoaderRegistry() {
          _classCallCheck(this, DynamicLoaderRegistry);
        }

        _createClass(DynamicLoaderRegistry, null, [{
          key: "RegisterLazyComponent",
          value: function RegisterLazyComponent(componentName, lazyImport) {
            DynamicLoaderRegistry.LazyComponents[componentName] = lazyImport;
          }
        }, {
          key: "RegisterLazyModuleComponent",
          value: function RegisterLazyModuleComponent(moduleName, lazyImport) {
            DynamicLoaderRegistry.LazyModuleComponents[moduleName] = lazyImport;
          }
        }]);

        return DynamicLoaderRegistry;
      }(); // Registry + Cache


      DynamicLoaderRegistry.LazyComponents = {}; // Registry

      DynamicLoaderRegistry.LazyModuleComponents = {};
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    },

    /***/
    "TRDi":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./libs/markdown/module/render-markdown/render-markdown.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TRDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n";
      /***/
    },

    /***/
    "VvhZ":
    /*!*****************************************************!*\
      !*** ./libs/mat-utils/material-icons/public_api.ts ***!
      \*****************************************************/

    /*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */

    /***/
    function VvhZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register_icons */
      "esWc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "registerIcons", function () {
        return _register_icons__WEBPACK_IMPORTED_MODULE_0__["registerIcons"];
      });
      /* harmony import */


      var _register_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register_icons.module */
      "1dfk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function () {
        return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_ICONS_PAIR_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function () {
        return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["RegisterIconsModule"];
      });
      /***/

    },

    /***/
    "W81V":
    /*!***************************************************!*\
      !*** ./libs/components/highlight-editor/index.ts ***!
      \***************************************************/

    /*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */

    /***/
    function W81V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "0LWQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightEditorComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "handleTab", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["handleTab"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_BACKSPACE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_DELETE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ENTER"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ESCAPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_TAB", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_TAB"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_UP"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_DOWN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_LEFT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_RIGHT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_SHIFT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_ALT", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ALT"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CTRL"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_META", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_META"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CAPS_LOCK"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["ALL_CHARS_REGEX"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["IGNORE_KEY_EVENTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightEditorModule"];
      });
      /***/

    },

    /***/
    "WxOa":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./libs/components/highlight-editor/highlight-editor.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WxOa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"editor\"\n     [class.visible-highlight]=\"showHighlighedCode$ | async\"\n     [class.editor__no-debounce]=\"debounceTime === 0\">\n\n  <textarea #textarea [value]=\"value\"\n            (change)=\"onChange(textarea.value)\"\n            (keydown)=\"onKeyDown($event, textarea)\"\n            (keyup)=\"onKeyUp($event, textarea.value)\"\n            (focus)=\"focussed$.next(true)\"\n            (blur)=\"focussed$.next(false)\"\n            spellcheck=\"false\"\n  ></textarea>\n  <pre class=\"highlight-area\" #highlightArea></pre>\n</div>\n\n";
      /***/
    },

    /***/
    "X0rr":
    /*!****************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-morphdom.js ***!
      \****************************************************************************/

    /*! exports provided: MorphdomDirective, MorphdomModule, MorphdomService */

    /***/
    function X0rr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function () {
        return MorphdomDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorphdomModule", function () {
        return MorphdomModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorphdomService", function () {
        return MorphdomService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var morphdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! morphdom */
      "+tic");

      var MorphdomService = /*#__PURE__*/function () {
        function MorphdomService(ngZone) {
          _classCallCheck(this, MorphdomService);

          this.ngZone = ngZone;
        }

        _createClass(MorphdomService, [{
          key: "morphElement",
          value: function morphElement(element, newElementContent, options) {
            this.ngZone.runOutsideAngular(function () {
              Object(morphdom__WEBPACK_IMPORTED_MODULE_2__["default"])(element.nativeElement, newElementContent, options);
            });
          }
        }]);

        return MorphdomService;
      }();

      MorphdomService.ɵfac = function MorphdomService_Factory(t) {
        return new (t || MorphdomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };
      /** @nocollapse */


      MorphdomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MorphdomService_Factory() {
          return new MorphdomService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: MorphdomService,
        providedIn: "root"
      });
      /** @nocollapse */

      MorphdomService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorphdomService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();

      var MorphdomDirective = /*#__PURE__*/function () {
        function MorphdomDirective(element, morphService) {
          _classCallCheck(this, MorphdomDirective);

          this.element = element;
          this.morphService = morphService;
          this.tagName = 'div';
          this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MorphdomDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(_ref13) {
            var morphDom = _ref13.morphDom;

            if (morphDom && morphDom.currentValue) {
              this.morphService.morphElement(this.element, "<".concat(this.tagName, ">").concat(morphDom.currentValue, "</").concat(this.tagName, ">"), this.options);
              this.done.emit(this.element);
            }
          }
        }]);

        return MorphdomDirective;
      }();

      MorphdomDirective.ɵfac = function MorphdomDirective_Factory(t) {
        return new (t || MorphdomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MorphdomService));
      };

      MorphdomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MorphdomDirective,
        selectors: [["", "morphDom", ""]],
        inputs: {
          tagName: "tagName",
          morphDom: "morphDom",
          options: "options"
        },
        outputs: {
          done: "done"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      MorphdomDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MorphdomService
        }];
      };

      MorphdomDirective.propDecorators = {
        morphDom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['morphDom']
        }],
        tagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorphdomDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            // tslint:disable-next-line:directive-selector
            selector: '[morphDom]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: MorphdomService
          }];
        }, {
          tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          done: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          morphDom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['morphDom']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MorphdomModule = function MorphdomModule() {
        _classCallCheck(this, MorphdomModule);
      };

      MorphdomModule.ɵfac = function MorphdomModule_Factory(t) {
        return new (t || MorphdomModule)();
      };

      MorphdomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MorphdomModule
      });
      MorphdomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MorphdomModule, {
          declarations: function declarations() {
            return [MorphdomDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [MorphdomDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorphdomModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [MorphdomDirective],
            exports: [MorphdomDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "cFVl":
    /*!*********************************************************************!*\
      !*** ./apps/demo/src/app/example-panel/example-panel.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function cFVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "dTHw":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./apps/demo/src/app/markdown.worker.ts ***!
      \*************************************************************************************************/

    /*! no static exports found */

    /***/
    function dTHw(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + "0-es5.worker.js";
      /***/
    },

    /***/
    "esWc":
    /*!*********************************************************!*\
      !*** ./libs/mat-utils/material-icons/register_icons.ts ***!
      \*********************************************************/

    /*! exports provided: registerIcons */

    /***/
    function esWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerIcons", function () {
        return registerIcons;
      });

      function registerIcons(iconRegistry, sanitizer, iconPair) {
        var _iterator4 = _createForOfIteratorHelper(iconPair.iconArray),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var icon = _step4.value;
            iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl("".concat(iconPair.pathToIcons, "/").concat(icon, ".svg")));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      /***/

    },

    /***/
    "fCuG":
    /*!***************************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-bootstrap-component.js ***!
      \***************************************************************************************/

    /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, BootstrapComponentModule, bootstrapComponent */

    /***/
    function fCuG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function () {
        return BOOTSTRAP_COMPONENT_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function () {
        return BootstrapComponentModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function () {
        return bootstrapComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var BOOTSTRAP_COMPONENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@gewd/ng-utils/BootstrapComponentConfig');

      function bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig) {
        var domElement = document.createElement(bootstrapConfig.elementName);
        document.body.append(domElement);
        var factory = resolver.resolveComponentFactory(bootstrapConfig.component);
        var ref = factory.create(injector, [], domElement);
        appRef.attachView(ref.hostView);
      }
      /** @dynamic - allows Document in ngc build */


      var BootstrapComponentModule = /*#__PURE__*/function () {
        function BootstrapComponentModule(document, resolver, injector, appRef, bootstrapConfigs) {
          _classCallCheck(this, BootstrapComponentModule);

          var _iterator5 = _createForOfIteratorHelper(bootstrapConfigs),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var bootstrapConfig = _step5.value;
              bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        _createClass(BootstrapComponentModule, null, [{
          key: "component",
          value: function component(useValue) {
            return {
              ngModule: BootstrapComponentModule,
              providers: [{
                provide: BOOTSTRAP_COMPONENT_TOKEN,
                useValue: useValue,
                multi: true
              }]
            };
          }
        }]);

        return BootstrapComponentModule;
      }();

      BootstrapComponentModule.ɵfac = function BootstrapComponentModule_Factory(t) {
        return new (t || BootstrapComponentModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BOOTSTRAP_COMPONENT_TOKEN));
      };

      BootstrapComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BootstrapComponentModule
      });
      BootstrapComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });
      /** @nocollapse */

      BootstrapComponentModule.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [BOOTSTRAP_COMPONENT_TOKEN]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapComponentModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapComponentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [BOOTSTRAP_COMPONENT_TOKEN]
            }]
          }];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "fFIP":
    /*!*****************************************************************************!*\
      !*** ./libs/markdown/module/render-markdown/render-markdown.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function fFIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep foreignObject {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlbmRlci1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUFnQixpQkFBQTtBQUFsQiIsImZpbGUiOiJyZW5kZXItbWFya2Rvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAvLyBmaXggbWVybWFpZCBvdmVyZmxvdyA6KVxuICBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "gICU":
    /*!*****************************************************!*\
      !*** ./libs/mat-utils/custom-form-control/index.ts ***!
      \*****************************************************/

    /*! exports provided: CustomFormControlModule, CustomFormControlComponent */

    /***/
    function gICU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "+7VV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlComponent"];
      });
      /***/

    },

    /***/
    "mRMK":
    /*!************************************************!*\
      !*** ./libs/mat-utils/material-icons/index.ts ***!
      \************************************************/

    /*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */

    /***/
    function mRMK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "VvhZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "registerIcons", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerIcons"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_ICONS_PAIR_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["RegisterIconsModule"];
      });
      /***/

    },

    /***/
    "mcRc":
    /*!********************************************!*\
      !*** ./apps/demo/src/app/app.component.ts ***!
      \********************************************/

    /*! exports provided: AppComponent */

    /***/
    function mcRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "5aeG");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "+vhj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+"); // TODO Splitup each panel functions/vars into its own component


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(cd, http) {
          _classCallCheck(this, AppComponent);

          this.cd = cd;
          this.http = http;
          this.markDownReadmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
            responseType: 'text'
          });
          this.ngErrorOverlay$ = this.http.get('./assets/ng-error-overlay.md', {
            responseType: 'text'
          });
          this.matUtilsReadmeMD$ = this.http.get('./assets/readme/mat-utils/README.md', {
            responseType: 'text'
          });
          this.editorLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          this.editorExample$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          this.aForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]().group({
            'editor': ''
          });
        }

        _createClass(AppComponent, [{
          key: "setLazyPortalModuleComp",
          value: function setLazyPortalModuleComp(lazyModuleComponent) {
            lazyModuleComponent.moduleAlias = 'portal-module';
            lazyModuleComponent.component = 'PortalModuleComp';
            lazyModuleComponent.setComponent();
          }
        }, {
          key: "makeError",
          value: function makeError() {
            var errorSource;
            errorSource.subString();
          }
        }, {
          key: "updateValueChanged",
          value: function updateValueChanged($event) {
            var _this8 = this;

            this.currentPrismExample = $event;

            switch ($event) {
              case 'ts_example':
                {
                  this.editorLanguage$.next('ts');
                  this.editorExample$.next("\nimport { DynamicLoaderRegistry } from '@gewd/lazy/registry';\nimport { Lazy } from '@gewd/lazy/utils';\n\nDynamicLoaderRegistry.LazyComponents = {\n  'test-comp': new Lazy<any>(() => import('./lazy-wrapper/test-comp'))\n};\n\nDynamicLoaderRegistry.LazyModuleComponents = {\n\n  'test-module': {\n    load: new Lazy<any>(\n      () => import(/* webpackChunkName: \"lazy-test-module\" */ './lazy-wrapper/test-module-comp')\n      .then(({TestModule}) => TestModule)\n    )\n  },\n  'portal-module': {\n    load: new Lazy<any>(\n      () => import(/* webpackChunkName: \"lazy-portal-module\" */ './lazy-wrapper/lazy-portal-source')\n        .then(({PortalModule}) => PortalModule)\n    )\n  },\n};\n        ".trim());
                  break;
                }

              case 'readme_md':
                {
                  this.editorLanguage$.next('markdown');
                  this.markDownReadmeMD$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (value) {
                    _this8.editorExample$.next(value);
                  });
                  break;
                }

              default:
                {
                  this.editorExample$.next('');
                  break;
                }
            }
          }
        }, {
          key: "openedEditorPanel",
          value: function openedEditorPanel() {
            if (!this.currentPrismExample) {
              this.updateValueChanged('empty');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-utils-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])], AppComponent);
      /***/
    },

    /***/
    "mkVm":
    /*!**************************************************************************!*\
      !*** ./libs/mat-utils/custom-form-control/custom-form-control.module.ts ***!
      \**************************************************************************/

    /*! exports provided: CustomFormControlModule */

    /***/
    function mkVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function () {
        return CustomFormControlModule;
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


      var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./custom-form-control.component */
      "nnzV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CustomFormControlModule = function CustomFormControlModule() {
        _classCallCheck(this, CustomFormControlModule);
      };

      CustomFormControlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__["CustomFormControlComponent"]],
        exports: [_custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__["CustomFormControlComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      })], CustomFormControlModule);
      /***/
    },

    /***/
    "nnzV":
    /*!*****************************************************************************!*\
      !*** ./libs/mat-utils/custom-form-control/custom-form-control.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CustomFormControlComponent */

    /***/
    function nnzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function () {
        return CustomFormControlComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");

      var CustomFormControlComponent_1;

      var CustomFormControlComponent = CustomFormControlComponent_1 = /*#__PURE__*/function () {
        function CustomFormControlComponent(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
          _classCallCheck(this, CustomFormControlComponent);

          this._focusMonitor = _focusMonitor;
          this._elementRef = _elementRef;
          this._formField = _formField;
          this.ngControl = ngControl;

          this.onChange = function (_) {};

          this.onTouched = function () {};

          this.stateChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.stateChanges = this.stateChangeSubject;

          if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
          }
        }

        _createClass(CustomFormControlComponent, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this._value = value;
            this.stateChangeSubject.next();

            if (this.onChange) {
              this.onChange(value);
            }
          }
        }, {
          key: "errorState",
          get: function get() {
            return false;
          }
        }, {
          key: "empty",
          get: function get() {
            return typeof this.value === 'number' ? false : !this.value;
          }
        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            var controlElement = this._elementRef.nativeElement;
            controlElement.setAttribute('aria-describedby', ids.join(' '));
          }
        }, {
          key: "onContainerClick",
          value: function onContainerClick() {}
        }, {
          key: "writeValue",
          value: function writeValue(val) {
            this._value = val;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref14) {
            var value = _ref14.value;

            if (value && this.onChange) {
              this.onChange(value.currentValue);
              this.stateChangeSubject.next();
            }
          }
        }]);

        return CustomFormControlComponent;
      }();

      CustomFormControlComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      CustomFormControlComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        userAriaDescribedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-describedby']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        focused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CustomFormControlComponent = CustomFormControlComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-custom-form-control',
        template: "<ng-content></ng-content>",
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"],
          useExisting: CustomFormControlComponent_1
        }]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])], CustomFormControlComponent);
      /***/
    },

    /***/
    "p1Yq":
    /*!*********************************************************************!*\
      !*** ./libs/components/highlight-editor/highlight-editor.module.ts ***!
      \*********************************************************************/

    /*! exports provided: HighlightEditorModule */

    /***/
    function p1Yq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function () {
        return HighlightEditorModule;
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


      var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./highlight-editor.component */
      "IAcx");
      /* harmony import */


      var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/ng-utils/css-props */
      "+8bp");
      /* harmony import */


      var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @gewd/ng-utils/morphdom */
      "X0rr");

      var HighlightEditorModule = function HighlightEditorModule() {
        _classCallCheck(this, HighlightEditorModule);
      };

      HighlightEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__["HighlightEditorComponent"]],
        exports: [_highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__["HighlightEditorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["CssPropsModule"], _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__["MorphdomModule"]]
      })], HighlightEditorModule);
      /***/
    },

    /***/
    "r77W":
    /*!*************************************************!*\
      !*** ./libs/markdown/module/markdown.module.ts ***!
      \*************************************************/

    /*! exports provided: MarkdownModule */

    /***/
    function r77W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
        return MarkdownModule;
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


      var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./render-markdown/render-markdown.component */
      "zJp2");

      var MarkdownModule = function MarkdownModule() {
        _classCallCheck(this, MarkdownModule);
      };

      MarkdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__["RenderMarkdownComponent"]],
        exports: [_render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__["RenderMarkdownComponent"]],
        providers: []
      })], MarkdownModule);
      /***/
    },

    /***/
    "rUhY":
    /*!*************************************************************************!*\
      !*** ./dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-utils.js ***!
      \*************************************************************************/

    /*! exports provided: Lazy, simpleHash */

    /***/
    function rUhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lazy", function () {
        return Lazy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simpleHash", function () {
        return simpleHash;
      });

      var Lazy = /*#__PURE__*/function () {
        function Lazy(loader) {
          _classCallCheck(this, Lazy);

          this.loader = loader;
        }

        _createClass(Lazy, [{
          key: "getValue",
          value: function getValue() {
            if (this.cachedPromise) {
              return this.cachedPromise;
            }

            return this.cachedPromise = this.loader();
          }
        }], [{
          key: "create",
          value: function create(loader) {
            return new Lazy(loader);
          }
        }]);

        return Lazy;
      }();

      function simpleHash(str) {
        var hash = 0,
            i,
            chr;
        if (!str || str.length === 0) return '';

        for (i = 0; i < str.length; i++) {
          chr = str.charCodeAt(i); // tslint:disable-next-line:no-bitwise

          hash = (hash << 5) - hash + chr; // tslint:disable-next-line:no-bitwise

          hash |= 0; // Convert to 32bit integer
        }

        return hash.toString(16);
      }
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "ryMm":
    /*!***************************************************************************!*\
      !*** ./dist/libs/markdown/__ivy_ngcc__/fesm2015/gewd-markdown-service.js ***!
      \***************************************************************************/

    /*! exports provided: MarkdownCacheService, MarkdownOptionsInjectorToken, MarkdownService */

    /***/
    function ryMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function () {
        return MarkdownCacheService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function () {
        return MarkdownOptionsInjectorToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownService", function () {
        return MarkdownService;
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


      var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! comlink */
      "PRU4");
      /* harmony import */


      var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @gewd/markdown/contracts */
      "3DnX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @gewd/markdown/utils */
      "rUhY");

      var MarkdownCacheService = /*#__PURE__*/function () {
        function MarkdownCacheService() {
          _classCallCheck(this, MarkdownCacheService);
        }

        _createClass(MarkdownCacheService, [{
          key: "getCached",
          value: function getCached(rawMarkdown) {
            return Promise.resolve('');
          }
        }, {
          key: "saveCached",
          value: function saveCached(rawMarkdown, renderedMarkdown) {}
        }, {
          key: "getCachedPart",
          value: function getCachedPart(type, raw) {
            return Promise.resolve('');
          }
        }, {
          key: "saveCachedPart",
          value: function saveCachedPart(type, raw, rendered) {}
        }]);

        return MarkdownCacheService;
      }();

      MarkdownCacheService.ɵfac = function MarkdownCacheService_Factory(t) {
        return new (t || MarkdownCacheService)();
      };
      /** @nocollapse */


      MarkdownCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        factory: function MarkdownCacheService_Factory() {
          return new MarkdownCacheService();
        },
        token: MarkdownCacheService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkdownCacheService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      var MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MarkdownOptionsInjectorToken');
      var compiledRegex = /<div class="mermaid">([\s\S]*?)<\/div>/mg;
      var renderId = 0;
      /** @dynamic - allows Document in ngc build */

      var MarkdownService = /*#__PURE__*/function () {
        function MarkdownService(markdownOptions, cache, document, platformId) {
          _classCallCheck(this, MarkdownService);

          this.markdownOptions = markdownOptions;
          this.cache = cache;
          this.document = document;
          this.canTriggerMermaidLoad = false;
          this.mermaidAddedToPage = false;
          this.mermaidCacheKey = '';
          this.mermaidConfig = Object.assign({}, _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MERMAID_OPTIONS"], this.markdownOptions.mermaidOptions);

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(platformId)) {
            this.workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_2__["wrap"])(markdownOptions.getWorker());

            if (markdownOptions.options) {
              this.workerProxy.init(markdownOptions.options);
            }
          }

          if (markdownOptions.mermaidPath) {
            this.canTriggerMermaidLoad = true;
            this.mermaidCacheKey = "mermaid_".concat(this.mermaidConfig.theme, "_").concat(Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_5__["simpleHash"])(this.mermaidConfig.themeCSS));
          }
        }

        _createClass(MarkdownService, [{
          key: "compileMarkdown",
          value: function compileMarkdown(str) {
            var triggerMermaid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var parsedMarkdown, mermaidInstance, matched, _iterator6, _step6, mermaid, innerContent, rendered, cached, errorStr;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (this.workerProxy) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 2:
                      _context8.next = 4;
                      return this.workerProxy.compile(str);

                    case 4:
                      parsedMarkdown = _context8.sent;

                      if (!(triggerMermaid && parsedMarkdown.match(/class="mermaid"/))) {
                        _context8.next = 33;
                        break;
                      }

                      _context8.next = 8;
                      return this.triggerMermaidLoadScript();

                    case 8:
                      mermaidInstance = window.mermaid;

                      if (!mermaidInstance) {
                        _context8.next = 33;
                        break;
                      }

                      matched = parsedMarkdown.match(compiledRegex);
                      _iterator6 = _createForOfIteratorHelper(matched);
                      _context8.prev = 12;

                      _iterator6.s();

                    case 14:
                      if ((_step6 = _iterator6.n()).done) {
                        _context8.next = 25;
                        break;
                      }

                      mermaid = _step6.value;
                      innerContent = this.cleanUpMermaidRaw(mermaid);
                      rendered = '';
                      _context8.next = 20;
                      return this.cache.getCachedPart(this.mermaidCacheKey, innerContent);

                    case 20:
                      cached = _context8.sent;

                      if (!!cached) {
                        rendered = cached;
                      } else {
                        errorStr = "";

                        try {
                          mermaidInstance.parse(innerContent);
                        } catch (e) {
                          errorStr = e.str;
                        }

                        if (!errorStr) {
                          rendered = mermaidInstance.render("sub".concat(renderId++), innerContent, function () {});
                          this.cache.saveCachedPart(this.mermaidCacheKey, innerContent, rendered);
                        } else {
                          rendered = "<pre>".concat(errorStr, "\n").concat(innerContent, "</pre>");
                        }
                      }

                      parsedMarkdown = parsedMarkdown.replace(mermaid, "<pre><code class=\"mermaid\">".concat(rendered, "</code></pre>"));

                    case 23:
                      _context8.next = 14;
                      break;

                    case 25:
                      _context8.next = 30;
                      break;

                    case 27:
                      _context8.prev = 27;
                      _context8.t0 = _context8["catch"](12);

                      _iterator6.e(_context8.t0);

                    case 30:
                      _context8.prev = 30;

                      _iterator6.f();

                      return _context8.finish(30);

                    case 33:
                      return _context8.abrupt("return", parsedMarkdown);

                    case 34:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[12, 27, 30, 33]]);
            }));
          }
        }, {
          key: "cleanUpMermaidRaw",
          value: function cleanUpMermaidRaw(mermaidRaw) {
            return mermaidRaw.replace(/&gt;/mg, '>').replace(/&lt;/mg, '<').replace('<div class="mermaid">', '').replace('</div>', '');
          }
        }, {
          key: "triggerMermaidLoadScript",
          value: function triggerMermaidLoadScript() {
            var _this9 = this;

            if (!this.canTriggerMermaidLoad) {
              return Promise.resolve();
            }

            if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
              this.mermaidAddedToPage = true;

              var _mermaidNode = this.document.createElement('div');

              _mermaidNode.hidden = true;
              this.document.body.appendChild(_mermaidNode);
              return new Promise(function (resolve, reject) {
                var scriptTag = _this9.document.createElement('script');

                scriptTag.src = _this9.markdownOptions.mermaidPath; // trigger mermaid init

                scriptTag.onload = function () {
                  var mermaid = window.mermaid;
                  mermaid.initialize(_this9.mermaidConfig);
                  resolve();

                  mermaid.parseError = function (err) {
                    console.error('MarkdownService, Mermaid: ', err);
                  };
                };

                _this9.document.body.appendChild(scriptTag);
              });
            }

            if (this.canTriggerMermaidLoad && this.mermaidAddedToPage) {
              var mermaidInstance = window.mermaid;

              if (mermaidInstance) {
                return Promise.resolve();
              }

              return Promise.reject();
            }
          }
        }]);

        return MarkdownService;
      }();

      MarkdownService.ɵfac = function MarkdownService_Factory(t) {
        return new (t || MarkdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownOptionsInjectorToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
      };
      /** @nocollapse */


      MarkdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        factory: function MarkdownService_Factory() {
          return new MarkdownService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownOptionsInjectorToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkdownCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
        },
        token: MarkdownService,
        providedIn: "root"
      });
      /** @nocollapse */

      MarkdownService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MarkdownOptionsInjectorToken]
          }]
        }, {
          type: MarkdownCacheService
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkdownService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MarkdownOptionsInjectorToken]
            }]
          }, {
            type: MarkdownCacheService
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "sd5n":
    /*!*******************************************************!*\
      !*** ./apps/demo/src/app/md-cache-example.service.ts ***!
      \*******************************************************/

    /*! exports provided: MdCacheExampleService */

    /***/
    function sd5n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MdCacheExampleService", function () {
        return MdCacheExampleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @gewd/markdown/service */
      "ryMm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! localforage */
      "oAJy");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/markdown/utils */
      "rUhY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MdCacheExampleService = /*#__PURE__*/function (_gewd_markdown_servic) {
        _inherits(MdCacheExampleService, _gewd_markdown_servic);

        var _super = _createSuper(MdCacheExampleService);

        function MdCacheExampleService(platformId) {
          var _this10;

          _classCallCheck(this, MdCacheExampleService);

          _this10 = _super.call(this);
          _this10.enabled = true; // skip localforage calls during pre-render step

          _this10.enabled = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);

          if (_this10.enabled) {
            _this10.createInstance();
          }

          return _this10;
        }

        _createClass(MdCacheExampleService, [{
          key: "saveCachedPart",
          value: function saveCachedPart(type, raw, rendered) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var hash;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (this.enabled) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      _context9.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
                      this.localForageCache.setItem("".concat(type, "/").concat(hash), rendered);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getCachedPart",
          value: function getCachedPart(type, raw) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var hash, result;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (this.enabled) {
                        _context10.next = 2;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 2:
                      _context10.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
                      _context10.next = 7;
                      return this.localForageCache.getItem("".concat(type, "/").concat(hash));

                    case 7:
                      result = _context10.sent;
                      return _context10.abrupt("return", result);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getCached",
          value: function getCached(rawMarkdown) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var hash, result;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (this.enabled) {
                        _context11.next = 2;
                        break;
                      }

                      return _context11.abrupt("return");

                    case 2:
                      _context11.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
                      _context11.next = 7;
                      return this.localForageCache.getItem(hash);

                    case 7:
                      result = _context11.sent;
                      return _context11.abrupt("return", result);

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "saveCached",
          value: function saveCached(rawMarkdown, renderedMarkdown) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var hash;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (this.enabled) {
                        _context12.next = 2;
                        break;
                      }

                      return _context12.abrupt("return");

                    case 2:
                      _context12.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
                      this.localForageCache.setItem(hash, renderedMarkdown);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "createInstance",
          value: function createInstance() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.localForageCache = localforage__WEBPACK_IMPORTED_MODULE_3__["createInstance"]({
                        name: 'markdown-cache'
                      });

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return MdCacheExampleService;
      }(_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"]);

      MdCacheExampleService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }];
      };

      MdCacheExampleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], MdCacheExampleService);
      /***/
    },

    /***/
    "v3gb":
    /*!************************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-ng-error-overlay.js ***!
      \************************************************************************************/

    /*! exports provided: NgErrorComponent, NgErrorOverlayModule, ɵa, ɵb, ɵc */

    /***/
    function v3gb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function () {
        return NgErrorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function () {
        return NgErrorOverlayModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return NG_ERROR_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return ErrorHandlerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return ErrorOverlayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @gewd/ng-utils/css-props */
      "+8bp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var error_stack_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! error-stack-parser */
      "MjPQ");
      /* harmony import */


      var error_stack_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @gewd/ng-utils/bootstrap-component */
      "fCuG");
      /* harmony import */


      var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @gewd/ng-utils/components */
      "0lBu");
      /* harmony import */


      var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @gewd/ng-utils/dynamic-portal */
      "zGXa");

      function NgErrorComponent_ng_container_0_div_1_ng_template_4_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
        }
      }

      function NgErrorComponent_ng_container_0_div_1_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgErrorComponent_ng_container_0_div_1_ng_template_4_ng_template_0_Template, 2, 1, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "error-overlay", 9);
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dynamicPortalSource", "errorName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", item_r4);
        }
      }

      function NgErrorComponent_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "simple-pager", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dynamic-portal", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgErrorComponent_ng_container_0_div_1_ng_template_4_Template, 2, 2, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgErrorComponent_ng_container_0_div_1_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var errors_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", errors_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", "errorName");
        }
      }

      function NgErrorComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgErrorComponent_ng_container_0_div_1_Template, 8, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.visible$));
        }
      }

      function ErrorOverlayComponent_div_7_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var stack_r2 = ctx.$implicit;
          var odd_r3 = ctx.odd;
          var even_r4 = ctx.even;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("odd", odd_r3)("even", even_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r2.functionName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r2.lineNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r2.columnNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("odd", odd_r3)("even", even_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stack_r2.fileName, "");
        }
      }

      function ErrorOverlayComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nStack:\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Function Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Line Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Column Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ErrorOverlayComponent_div_7_ng_container_10_Template, 11, 12, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errorStack);
        }
      }

      var DEFAULT_CONFIG = {
        zIndex: 10000,
        ignoreErrors: []
      };
      var NG_ERROR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@gewd/ng-utils/NgErrorConfig');

      var ErrorHandlerService = /*#__PURE__*/function () {
        function ErrorHandlerService(config) {
          var _this11 = this;

          _classCallCheck(this, ErrorHandlerService);

          this.config = config;
          this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.config = Object.assign({}, DEFAULT_CONFIG, config);
          window.addEventListener('error', function (ev) {
            _this11.handleError(ev.error);
          });
        }

        _createClass(ErrorHandlerService, [{
          key: "handleError",
          value: function handleError(error) {
            if (this.config.ignoreErrors.includes(error.name)) {
              return;
            }

            this.error$.next({
              name: error.name,
              message: error.message,
              stack: error.stack
            });
          }
        }]);

        return ErrorHandlerService;
      }();

      ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
        return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NG_ERROR_CONFIG_TOKEN, 8));
      };
      /** @nocollapse */


      ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ErrorHandlerService_Factory() {
          return new ErrorHandlerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NG_ERROR_CONFIG_TOKEN, 8));
        },
        token: ErrorHandlerService,
        providedIn: "root"
      });
      /** @nocollapse */

      ErrorHandlerService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ERROR_CONFIG_TOKEN]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ERROR_CONFIG_TOKEN]
            }]
          }];
        }, null);
      })();

      var NgErrorComponent = /*#__PURE__*/function () {
        function NgErrorComponent(errorService, cd, cssProps, element) {
          _classCallCheck(this, NgErrorComponent);

          this.errorService = errorService;
          this.cd = cd;
          this.cssProps = cssProps;
          this.element = element;
          this.showIndex = 0;
          this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.errors$ = this.errorService.error$.pipe( // add all errors to an array
          // only keep the newest 10
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (a, c) {
            return [c].concat(_toConsumableArray(a)).slice(0, 10);
          }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return value.filter(function (v) {
              return !!v;
            });
          }));
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          cssProps.updateElementVars(element.nativeElement, {
            '--overlay-zindex': errorService.config.zIndex
          });
        }

        _createClass(NgErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.errors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(function (value) {
              _this12.visible$.next(value.length > 0);

              _this12.cd.markForCheck();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();
          }
        }, {
          key: "hide",
          value: function hide() {
            this.visible$.next(false);
          }
        }]);

        return NgErrorComponent;
      }();

      NgErrorComponent.ɵfac = function NgErrorComponent_Factory(t) {
        return new (t || NgErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ErrorHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__["CssPropsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NgErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgErrorComponent,
        selectors: [["ng-error"]],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "fullscreen", 4, "ngIf"], [1, "fullscreen"], [3, "items"], ["simplePagerTopLeft", ""], [3, "key"], ["simplePagerTopRight", ""], [1, "mat-focus-indicator", "mat-button", "mat-raised-button", "mat-button-base", 3, "click"], [3, "dynamicPortalSource"], [3, "error"], [1, "error-next-to-navigation"]],
        template: function NgErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgErrorComponent_ng_container_0_Template, 3, 3, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.errors$));
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__["SimplePagerComponent"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["DynamicPortalComponent"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["PortalSourceDirective"], ErrorOverlayComponent];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]];
        },
        styles: [".fullscreen[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#454545DD;overflow:auto;z-index:var(--overlay-zindex)}.fullscreen[_ngcontent-%COMP%]   simple-pager[_ngcontent-%COMP%]{height:calc(100% - 2rem);padding:1rem}.fullscreen[_ngcontent-%COMP%]   simple-pager[_ngcontent-%COMP%]     .navigation-row-panel.only-one{opacity:0}.fullscreen[_ngcontent-%COMP%]     .error-name{display:none}.close-button[_ngcontent-%COMP%]{position:fixed;top:2rem;right:2rem}.error-next-to-navigation[_ngcontent-%COMP%]{color:red;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2}"]
      });
      /** @nocollapse */

      NgErrorComponent.ctorParameters = function () {
        return [{
          type: ErrorHandlerService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__["CssPropsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ng-error',
            template: "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n",
            styles: [".fullscreen{position:fixed;top:0;left:0;height:100vh;width:100vw;background:#454545DD;overflow:auto;z-index:var(--overlay-zindex)}.fullscreen simple-pager{height:calc(100% - 2rem);padding:1rem}.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one{opacity:0}.fullscreen ::ng-deep .error-name{display:none}.close-button{position:fixed;top:2rem;right:2rem}.error-next-to-navigation{color:red;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2}"]
          }]
        }], function () {
          return [{
            type: ErrorHandlerService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__["CssPropsService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();

      var ErrorOverlayComponent = /*#__PURE__*/function () {
        function ErrorOverlayComponent() {
          _classCallCheck(this, ErrorOverlayComponent);
        }

        _createClass(ErrorOverlayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_5___default.a.parse(this.error);
          }
        }]);

        return ErrorOverlayComponent;
      }();

      ErrorOverlayComponent.ɵfac = function ErrorOverlayComponent_Factory(t) {
        return new (t || ErrorOverlayComponent)();
      };

      ErrorOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorOverlayComponent,
        selectors: [["error-overlay"]],
        inputs: {
          error: "error"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "error-info"], [1, "error", "error-name"], [1, "error"], ["class", "stack-block", 4, "ngIf"], [1, "stack-block"], [1, "stack-table"], [1, "align-left"], [1, "align-right"], [4, "ngFor", "ngForOf"], [1, "row"], ["colspan", "3", 1, "row"]],
        template: function ErrorOverlayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nError Message: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ErrorOverlayComponent_div_7_Template, 11, 1, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.error.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.stack);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["[_nghost-%COMP%]{color:#e8e8e8;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2;white-space:pre-wrap;display:flex;flex-direction:column;height:100%}.error[_ngcontent-%COMP%]{color:red}.stack-block[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;overflow-y:auto}.stack-table[_ngcontent-%COMP%]{margin-top:2rem;width:100%}.align-left[_ngcontent-%COMP%]{text-align:left}.align-right[_ngcontent-%COMP%]{text-align:right}.row.even[_ngcontent-%COMP%]{background:#AAAAAA40}.row.odd[_ngcontent-%COMP%]{background:#CCCCCC40}"]
      });
      /** @nocollapse */

      ErrorOverlayComponent.ctorParameters = function () {
        return [];
      };

      ErrorOverlayComponent.propDecorators = {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorOverlayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'error-overlay',
            template: "<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n",
            styles: [":host{color:#e8e8e8;font-family:Menlo,Consolas,monospace;font-size:large;line-height:1.2;white-space:pre-wrap;display:flex;flex-direction:column;height:100%}.error{color:red}.stack-block{flex:1;display:flex;flex-direction:column;overflow-y:auto}.stack-table{margin-top:2rem;width:100%}.align-left{text-align:left}.align-right{text-align:right}.row.even{background:#AAAAAA40}.row.odd{background:#CCCCCC40}"]
          }]
        }], function () {
          return [];
        }, {
          error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var NgErrorOverlayModule = /*#__PURE__*/function () {
        function NgErrorOverlayModule() {
          _classCallCheck(this, NgErrorOverlayModule);
        }

        _createClass(NgErrorOverlayModule, null, [{
          key: "config",
          value: function config(useValue) {
            return {
              ngModule: NgErrorOverlayModule,
              providers: [{
                provide: NG_ERROR_CONFIG_TOKEN,
                useValue: useValue
              }]
            };
          }
        }]);

        return NgErrorOverlayModule;
      }();

      NgErrorOverlayModule.ɵfac = function NgErrorOverlayModule_Factory(t) {
        return new (t || NgErrorOverlayModule)();
      };

      NgErrorOverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgErrorOverlayModule
      });
      NgErrorOverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [ErrorHandlerService, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          useExisting: ErrorHandlerService
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"].component({
          elementName: 'ng-error',
          component: NgErrorComponent
        }), _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__["SimplePagerModule"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["DynamicPortalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgErrorOverlayModule, {
          declarations: function declarations() {
            return [NgErrorComponent, ErrorOverlayComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"], _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__["SimplePagerModule"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["DynamicPortalModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgErrorOverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgErrorComponent, ErrorOverlayComponent],
            entryComponents: [NgErrorComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"].component({
              elementName: 'ng-error',
              component: NgErrorComponent
            }), _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__["SimplePagerModule"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["DynamicPortalModule"]],
            providers: [ErrorHandlerService, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
              useExisting: ErrorHandlerService
            }]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "zGXa":
    /*!**********************************************************************************!*\
      !*** ./dist/libs/ng-utils/__ivy_ngcc__/fesm2015/gewd-ng-utils-dynamic-portal.js ***!
      \**********************************************************************************/

    /*! exports provided: DynamicPortalComponent, DynamicPortalModule, PortalHubService, PortalSourceAction, PortalSourceDirective */

    /***/
    function zGXa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function () {
        return DynamicPortalComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function () {
        return DynamicPortalModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalHubService", function () {
        return PortalHubService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function () {
        return PortalSourceAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function () {
        return PortalSourceDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function DynamicPortalComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 2);
        }

        if (rf & 2) {
          var templateRef_r2 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", templateRef_r2);
        }
      }

      function DynamicPortalComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = ["*"];

      var PortalSourceAction = function PortalSourceAction(type, key) {
        _classCallCheck(this, PortalSourceAction);

        this.type = type;
        this.key = key;
      };

      var PortalHubService = /*#__PURE__*/function () {
        function PortalHubService() {
          _classCallCheck(this, PortalHubService);

          this.templateSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.templateSourceHub = {};
        }

        _createClass(PortalHubService, [{
          key: "getTemplate$",
          value: function getTemplate$(key) {
            var _this13 = this;

            return this.templateSourceSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (a) {
              return a.key === key;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) {
              switch (a.type) {
                case 0
                /* Added */
                :
                  {
                    return _this13.templateSourceHub[key];
                  }

                case 1
                /* Removed */
                :
                  {
                    return null;
                  }
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.templateSourceHub[key]));
          }
        }, {
          key: "registerTemplate",
          value: function registerTemplate(key, templateRef) {
            if (this.templateSourceHub[key]) {
              return;
            }

            this.templateSourceHub[key] = templateRef;
            this.templateSourceSubject.next(new PortalSourceAction(0
            /* Added */
            , key));
          }
        }, {
          key: "unregisterTemplate",
          value: function unregisterTemplate(key) {
            if (!this.templateSourceHub[key]) {
              return;
            }

            this.templateSourceHub[key] = null;
            this.templateSourceSubject.next(new PortalSourceAction(1
            /* Removed */
            , key));
          }
        }]);

        return PortalHubService;
      }();

      PortalHubService.ɵfac = function PortalHubService_Factory(t) {
        return new (t || PortalHubService)();
      };
      /** @nocollapse */


      PortalHubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function PortalHubService_Factory() {
          return new PortalHubService();
        },
        token: PortalHubService,
        providedIn: "root"
      });
      /** @nocollapse */

      PortalHubService.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHubService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var DynamicPortalComponent = /*#__PURE__*/function () {
        function DynamicPortalComponent(hub) {
          var _this14 = this;

          _classCallCheck(this, DynamicPortalComponent);

          this.hub = hub;
          this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
          this.templateToShow$ = this.key$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (key) {
            return _this14.hub.getTemplate$(key);
          }));
        }

        _createClass(DynamicPortalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkKeyAndPushTemplate();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['key']) {
              this.checkKeyAndPushTemplate();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "checkKeyAndPushTemplate",
          value: function checkKeyAndPushTemplate() {
            this.key$.next(this.key);
          }
        }]);

        return DynamicPortalComponent;
      }();

      DynamicPortalComponent.ɵfac = function DynamicPortalComponent_Factory(t) {
        return new (t || DynamicPortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PortalHubService));
      };

      DynamicPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicPortalComponent,
        selectors: [["dynamic-portal"]],
        inputs: {
          key: "key"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 4,
        vars: 6,
        consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"]],
        template: function DynamicPortalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicPortalComponent_ng_container_0_Template, 1, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicPortalComponent_ng_container_2_Template, 2, 0, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.templateToShow$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.templateToShow$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
        styles: [""],
        changeDetection: 0
      });
      /** @nocollapse */

      DynamicPortalComponent.ctorParameters = function () {
        return [{
          type: PortalHubService
        }];
      };

      DynamicPortalComponent.propDecorators = {
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicPortalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dynamic-portal',
            template: "<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [""]
          }]
        }], function () {
          return [{
            type: PortalHubService
          }];
        }, {
          key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var PortalSourceDirective = /*#__PURE__*/function () {
        function PortalSourceDirective(templateRef, hub) {
          _classCallCheck(this, PortalSourceDirective);

          this.templateRef = templateRef;
          this.hub = hub;
        }

        _createClass(PortalSourceDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var keyChange = changes['key'];

            if (keyChange) {
              if (keyChange.previousValue) {
                this.unregisterTemplate(keyChange.previousValue);
              }

              this.registerTemplate(keyChange.currentValue);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unregisterTemplate(this.key);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.key) {
              return;
            }

            this.registerTemplate(this.key);
          }
        }, {
          key: "registerTemplate",
          value: function registerTemplate(key) {
            this.hub.registerTemplate(key, this.templateRef);
          }
        }, {
          key: "unregisterTemplate",
          value: function unregisterTemplate(key) {
            this.hub.unregisterTemplate(key);
          }
        }]);

        return PortalSourceDirective;
      }();

      PortalSourceDirective.ɵfac = function PortalSourceDirective_Factory(t) {
        return new (t || PortalSourceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PortalHubService));
      };

      PortalSourceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PortalSourceDirective,
        selectors: [["", "dynamicPortalSource", ""]],
        inputs: {
          key: ["dynamicPortalSource", "key"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      PortalSourceDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: PortalHubService
        }];
      };

      PortalSourceDirective.propDecorators = {
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['dynamicPortalSource']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalSourceDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[dynamicPortalSource]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: PortalHubService
          }];
        }, {
          key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['dynamicPortalSource']
          }]
        });
      })();

      var DynamicPortalModule = function DynamicPortalModule() {
        _classCallCheck(this, DynamicPortalModule);
      };

      DynamicPortalModule.ɵfac = function DynamicPortalModule_Factory(t) {
        return new (t || DynamicPortalModule)();
      };

      DynamicPortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DynamicPortalModule
      });
      DynamicPortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DynamicPortalModule, {
          declarations: function declarations() {
            return [DynamicPortalComponent, PortalSourceDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [DynamicPortalComponent, PortalSourceDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicPortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [DynamicPortalComponent, PortalSourceDirective],
            exports: [DynamicPortalComponent, PortalSourceDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: []
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "zJp2":
    /*!***************************************************************************!*\
      !*** ./libs/markdown/module/render-markdown/render-markdown.component.ts ***!
      \***************************************************************************/

    /*! exports provided: RenderMarkdownComponent */

    /***/
    function zJp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function () {
        return RenderMarkdownComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_render_markdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./render-markdown.component.html */
      "TRDi");
      /* harmony import */


      var _render_markdown_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./render-markdown.component.scss */
      "fFIP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @gewd/markdown/service */
      "ryMm");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var RenderMarkdownComponent = /*#__PURE__*/function () {
        function RenderMarkdownComponent(service, element, sanitizer, cache) {
          _classCallCheck(this, RenderMarkdownComponent);

          this.service = service;
          this.element = element;
          this.sanitizer = sanitizer;
          this.cache = cache;
          this.showRawMd = false;
          this.useCache = false;
          this.allowMermaid = true;
          this.onLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this._htmlToShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
          this.parsedHtml$ = this._htmlToShow$;
        }

        _createClass(RenderMarkdownComponent, [{
          key: "markdown",
          get: function get() {
            return this._markdown;
          },
          set: function set(value) {
            if (this._markdown !== value) {
              this._markdown = value;

              if (this.showRawMd) {
                this._htmlToShow$.next(value);
              }

              this.compile();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.compile();

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "onClick",
          value: function onClick(e) {
            var target = e.target;
            var aHref = null;

            while (aHref == null && target != null) {
              if (target.tagName === 'A') {
                aHref = target;
              }

              target = target.parentElement;
            }

            if (aHref) {
              this.onLinkClick.next({
                event: e,
                link: aHref
              });
            }
          }
        }, {
          key: "compile",
          value: function compile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var cachedMarkdown, parsedHtml;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;

                      if (!this.useCache) {
                        _context15.next = 8;
                        break;
                      }

                      _context15.next = 4;
                      return this.cache.getCached(this._markdown);

                    case 4:
                      cachedMarkdown = _context15.sent;

                      if (!cachedMarkdown) {
                        _context15.next = 8;
                        break;
                      }

                      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));

                      return _context15.abrupt("return");

                    case 8:
                      _context15.next = 10;
                      return this.service.compileMarkdown(this._markdown, this.allowMermaid);

                    case 10:
                      parsedHtml = _context15.sent;

                      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));

                      if (this.useCache) {
                        this.cache.saveCached(this._markdown, parsedHtml);
                      }

                      _context15.next = 19;
                      break;

                    case 15:
                      _context15.prev = 15;
                      _context15.t0 = _context15["catch"](0);
                      console.error(_context15.t0);

                      this._htmlToShow$.next(_context15.t0);

                    case 19:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this, [[0, 15]]);
            }));
          }
        }]);

        return RenderMarkdownComponent;
      }();

      RenderMarkdownComponent.ctorParameters = function () {
        return [{
          type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownCacheService"]
        }];
      };

      RenderMarkdownComponent.propDecorators = {
        showRawMd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        useCache: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        allowMermaid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mermaidTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        markdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onLinkClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }]
      };
      RenderMarkdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-markdown',
        template: _raw_loader_render_markdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_render_markdown_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownCacheService"]])], RenderMarkdownComponent);
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map