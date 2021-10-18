(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    "+DCT":
    /*!*****************************************************!*\
      !*** ./libs/ng-utils/css-props/css-props.module.ts ***!
      \*****************************************************/

    /*! exports provided: CssPropsModule */

    /***/
    function DCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CssPropsModule", function () {
        return CssPropsModule;
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


      var _css_props_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./css-props.directive */
      "/xyV");
      /** @dynamic - allows Document in ngc build */


      var CssPropsModule = function CssPropsModule() {
        _classCallCheck(this, CssPropsModule);
      };

      CssPropsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_css_props_directive__WEBPACK_IMPORTED_MODULE_3__["CSSPropsDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], CssPropsModule);
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        modules: [// NgInspectModule
        ]
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
    "/xyV":
    /*!********************************************************!*\
      !*** ./libs/ng-utils/css-props/css-props.directive.ts ***!
      \********************************************************/

    /*! exports provided: CSSPropsDirective */

    /***/
    function xyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function () {
        return CSSPropsDirective;
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


      var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./css-props.service */
      "T9O9");
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

      CSSPropsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]
        }];
      };

      CSSPropsDirective.propDecorators = {
        cssProps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CSSPropsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[cssProps]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]])], CSSPropsDirective);
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
    "0/xO":
    /*!****************************************************!*\
      !*** ./libs/markdown/contracts/default-options.ts ***!
      \****************************************************/

    /*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */

    /***/
    function xO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function () {
        return DEFAULT_PRISM_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function () {
        return DEFAULT_MERMAID_OPTIONS;
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
    "0QHq":
    /*!****************************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/public_api.ts ***!
      \****************************************************/

    /*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */

    /***/
    function QHq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dynamic-portal.module */
      "iv+R");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function () {
        return _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"];
      });
      /* harmony import */


      var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dynamic-portal/dynamic-portal.component */
      "slkw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function () {
        return _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__["DynamicPortalComponent"];
      });
      /* harmony import */


      var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./portal-hub.service */
      "L4a7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function () {
        return _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalSourceAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PortalHubService", function () {
        return _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"];
      });
      /* harmony import */


      var _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./portal-source.directive */
      "FYco");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function () {
        return _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__["PortalSourceDirective"];
      });
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
    "1qV8":
    /*!***********************************************!*\
      !*** ./libs/markdown/contracts/public_api.ts ***!
      \***********************************************/

    /*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */

    /***/
    function qV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _worker_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./worker.interface */
      "hR9A");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _default_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./default-options */
      "0/xO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function () {
        return _default_options__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_PRISM_OPTIONS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function () {
        return _default_options__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_MERMAID_OPTIONS"];
      });
      /***/

    },

    /***/
    "2wmh":
    /*!*****************************************!*\
      !*** ./libs/ng-utils/morphdom/index.ts ***!
      \*****************************************/

    /*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */

    /***/
    function wmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "aPzk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MorphdomModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MorphdomService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomService"];
      });
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
      "PbxA");

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
    "4jei":
    /*!*********************************************!*\
      !*** ./libs/markdown/service/public_api.ts ***!
      \*********************************************/

    /*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */

    /***/
    function jei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _markdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./markdown.service */
      "UItG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownService", function () {
        return _markdown_service__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"];
      });
      /* harmony import */


      var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./markdown-cache.service */
      "mdMz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function () {
        return _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"];
      });
      /* harmony import */


      var _injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./injection-token */
      "lgUy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function () {
        return _injection_token__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"];
      });
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
    "51S8":
    /*!***********************************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts ***!
      \***********************************************************************/

    /*! exports provided: NgErrorComponent */

    /***/
    function S8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function () {
        return NgErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ng_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ng-error.component.html */
      "wfeF");
      /* harmony import */


      var _ng_error_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ng-error.component.scss */
      "HeaY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error-handler.service */
      "kWME");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @gewd/ng-utils/css-props */
      "HFY2");

      var NgErrorComponent = /*#__PURE__*/function () {
        function NgErrorComponent(errorService, cd, cssProps, element) {
          _classCallCheck(this, NgErrorComponent);

          this.errorService = errorService;
          this.cd = cd;
          this.cssProps = cssProps;
          this.element = element;
          this.showIndex = 0;
          this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
          this.errors$ = this.errorService.error$.pipe( // add all errors to an array
          // only keep the newest 10
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])(function (a, c) {
            return [c].concat(_toConsumableArray(a)).slice(0, 10);
          }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
            return value.filter(function (v) {
              return !!v;
            });
          }));
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          cssProps.updateElementVars(element.nativeElement, {
            '--overlay-zindex': errorService.config.zIndex
          });
        }

        _createClass(NgErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.errors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroy$)).subscribe(function (value) {
              _this.visible$.next(value.length > 0);

              _this.cd.markForCheck();
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

      NgErrorComponent.ctorParameters = function () {
        return [{
          type: _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_7__["CssPropsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      NgErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ng-error',
        template: _raw_loader_ng_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ng_error_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_7__["CssPropsService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], NgErrorComponent);
      /***/
    },

    /***/
    "5G9P":
    /*!*********************************************************!*\
      !*** ./libs/ng-utils/css-props/update-dynamic-style.ts ***!
      \*********************************************************/

    /*! exports provided: updateDynamicStyle, getStyleElement, replaceCss */

    /***/
    function G9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function () {
        return updateDynamicStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStyleElement", function () {
        return getStyleElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "replaceCss", function () {
        return replaceCss;
      }); // Todo use @gewd/utils for that?


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

        if (style === null) {
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
      /***/

    },

    /***/
    "5NOK":
    /*!************************************************!*\
      !*** ./libs/ng-utils/components/public_api.ts ***!
      \************************************************/

    /*! exports provided: SimplePagerModule, SimplePagerComponent */

    /***/
    function NOK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./simple-pager/simple-pager.module */
      "EIVg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function () {
        return _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"];
      });
      /* harmony import */


      var _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./simple-pager/simple-pager.component */
      "dk2Z");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function () {
        return _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__["SimplePagerComponent"];
      });
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


      __webpack_exports__["default"] = "<h2>Open Dev-Tools to see the network calls.</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"CodeMirror\"\n                    moduleName=\"codemirror-example\"\n                    componentName=\"CodeMirrorExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n";
      /***/
    },

    /***/
    "64y6":
    /*!******************************************!*\
      !*** ./libs/lazy/registry/public_api.ts ***!
      \******************************************/

    /*! exports provided: DynamicLoaderRegistry */

    /***/
    function y6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registry */
      "xqI3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function () {
        return _registry__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"];
      });
      /***/

    },

    /***/
    "6L+t":
    /*!***********************************************!*\
      !*** ./libs/ng-utils/css-props/public_api.ts ***!
      \***********************************************/

    /*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */

    /***/
    function LT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _css_props_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./css-props.module */
      "+DCT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CssPropsModule", function () {
        return _css_props_module__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"];
      });
      /* harmony import */


      var _css_props_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./css-props.directive */
      "/xyV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function () {
        return _css_props_directive__WEBPACK_IMPORTED_MODULE_1__["CSSPropsDirective"];
      });
      /* harmony import */


      var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./css-props.service */
      "T9O9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CssPropsService", function () {
        return _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"];
      });
      /* harmony import */


      var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./update-css-props */
      "XLiS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updateCssProps", function () {
        return _update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"];
      });
      /* harmony import */


      var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./update-dynamic-style */
      "5G9P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function () {
        return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["updateDynamicStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getStyleElement", function () {
        return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["getStyleElement"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "replaceCss", function () {
        return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["replaceCss"];
      });
      /* harmony import */


      var _element_css_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./element-css.service */
      "KRRg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ElementCssService", function () {
        return _element_css_service__WEBPACK_IMPORTED_MODULE_5__["ElementCssService"];
      });
      /***/

    },

    /***/
    "7DNQ":
    /*!******************************************!*\
      !*** ./libs/markdown/contracts/index.ts ***!
      \******************************************/

    /*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */

    /***/
    function DNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "1qV8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PRISM_OPTIONS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MERMAID_OPTIONS"];
      });
      /***/

    },

    /***/
    "B+Hh":
    /*!********************************************!*\
      !*** ./libs/markdown/utils/simple-hash.ts ***!
      \********************************************/

    /*! exports provided: simpleHash */

    /***/
    function BHh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simpleHash", function () {
        return simpleHash;
      });

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
      /***/

    },

    /***/
    "BBkK":
    /*!******************************************************!*\
      !*** ./libs/ng-utils/morphdom/morphdom.directive.ts ***!
      \******************************************************/

    /*! exports provided: MorphdomDirective */

    /***/
    function BBkK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function () {
        return MorphdomDirective;
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


      var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./morphdom.service */
      "BKhR");

      var MorphdomDirective = /*#__PURE__*/function () {
        function MorphdomDirective(element, morphService) {
          _classCallCheck(this, MorphdomDirective);

          this.element = element;
          this.morphService = morphService;
          this.tagName = 'div';
          this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(MorphdomDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(_ref2) {
            var morphDom = _ref2.morphDom;

            if (morphDom && morphDom.currentValue) {
              this.morphService.morphElement(this.element, "<".concat(this.tagName, ">").concat(morphDom.currentValue, "</").concat(this.tagName, ">"), this.options);
              this.done.emit(this.element);
            }
          }
        }]);

        return MorphdomDirective;
      }();

      MorphdomDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]
        }];
      };

      MorphdomDirective.propDecorators = {
        morphDom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['morphDom']
        }],
        tagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      MorphdomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line:directive-selector
        selector: '[morphDom]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]])], MorphdomDirective);
      /***/
    },

    /***/
    "BKhR":
    /*!****************************************************!*\
      !*** ./libs/ng-utils/morphdom/morphdom.service.ts ***!
      \****************************************************/

    /*! exports provided: MorphdomService */

    /***/
    function BKhR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorphdomService", function () {
        return MorphdomService;
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

      MorphdomService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      MorphdomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MorphdomService);
      /***/
    },

    /***/
    "BLap":
    /*!*************************************!*\
      !*** ./libs/lazy/registry/index.ts ***!
      \*************************************/

    /*! exports provided: DynamicLoaderRegistry */

    /***/
    function BLap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "64y6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"];
      });
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
        "7DNQ");
        /* harmony import */


        var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! @gewd/lazy/loader */
        "QhBr");
        /* harmony import */


        var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! @angular/material/button */
        "bTqV");
        /* harmony import */


        var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! @gewd/ng-utils/dynamic-portal */
        "zzJY");
        /* harmony import */


        var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! @angular/material/progress-bar */
        "bv9b");
        /* harmony import */


        var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! @gewd/markdown/service */
        "mMUf");
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
        "rZxZ");
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
        "n65z");

        var marked = function marked() {
          return new Worker(__webpack__worker__0, undefined);
        };

        var markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return Promise.all(
          /*! import() | markdown-example-module */
          [__webpack_require__.e("default~codemirror-example-module~markdown-example-module"), __webpack_require__.e("markdown-example-module")]).then(__webpack_require__.bind(null,
          /*! ./examples/markdown-example/markdown-example.module */
          "B/di")).then(function (_ref3) {
            var MarkdownExampleModule = _ref3.MarkdownExampleModule;
            return MarkdownExampleModule;
          });
        });
        var codeMirrorExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return Promise.all(
          /*! import() | codemirror-example-module */
          [__webpack_require__.e("default~codemirror-example-module~markdown-example-module"), __webpack_require__.e("codemirror-example-module")]).then(__webpack_require__.bind(null,
          /*! ./examples/codemirror-example/codemirror-example.module */
          "u4Pf")).then(function (_ref4) {
            var CodemirrorExampleModule = _ref4.CodemirrorExampleModule;
            return CodemirrorExampleModule;
          });
        });
        var lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | lazyload-example-module */
          "lazyload-example-module").then(__webpack_require__.bind(null,
          /*! ./examples/lazyload-example/lazyload-example.module */
          "j0+E")).then(function (_ref5) {
            var LazyloadExampleModule = _ref5.LazyloadExampleModule;
            return LazyloadExampleModule;
          });
        });
        var componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | components-example-module */
          "components-example-module").then(__webpack_require__.bind(null,
          /*! ./examples/components-example/components-example.module */
          "6RHk")).then(function (_ref6) {
            var ComponentsExampleModule = _ref6.ComponentsExampleModule;
            return ComponentsExampleModule;
          });
        });
        var portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
          return __webpack_require__.e(
          /*! import() | lazy-portal-module */
          "lazy-portal-module").then(__webpack_require__.bind(null,
          /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */
          "uy6E")).then(function (_ref7) {
            var PortalModule = _ref7.PortalModule;
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
            moduleName: 'codemirror-example',
            moduleConfig: {
              load: codeMirrorExampleLazy
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
    "DQPP":
    /*!****************************************!*\
      !*** ./libs/lazy/loader/public_api.ts ***!
      \****************************************/

    /*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */

    /***/
    function DQPP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lazy.component */
      "v0Je");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
        return _lazy_component__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"];
      });
      /* harmony import */


      var _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gewd-lazy-loader.module */
      "bgcH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function () {
        return _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_LAZY_LOADED_MODULE_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function () {
        return _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__["GewdLazyLoaderModule"];
      });
      /* harmony import */


      var _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lazy-module.component */
      "LTcb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function () {
        return _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__["LazyModuleComponent"];
      });
      /***/

    },

    /***/
    "DVXd":
    /*!*******************************************!*\
      !*** ./libs/ng-utils/components/index.ts ***!
      \*******************************************/

    /*! exports provided: SimplePagerModule, SimplePagerComponent */

    /***/
    function DVXd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "5NOK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["SimplePagerComponent"];
      });
      /***/

    },

    /***/
    "E8Ja":
    /*!*************************************!*\
      !*** ./libs/markdown/utils/lazy.ts ***!
      \*************************************/

    /*! exports provided: Lazy */

    /***/
    function E8Ja(module, __webpack_exports__, __webpack_require__) {
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
        }], [{
          key: "create",
          value: function create(loader) {
            return new Lazy(loader);
          }
        }]);

        return Lazy;
      }();
      /***/

    },

    /***/
    "EIVg":
    /*!**********************************************************************!*\
      !*** ./libs/ng-utils/components/simple-pager/simple-pager.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SimplePagerModule */

    /***/
    function EIVg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function () {
        return SimplePagerModule;
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


      var _simple_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./simple-pager.component */
      "dk2Z");

      var SimplePagerModule = function SimplePagerModule() {
        _classCallCheck(this, SimplePagerModule);
      };

      SimplePagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_simple_pager_component__WEBPACK_IMPORTED_MODULE_3__["SimplePagerComponent"]],
        exports: [_simple_pager_component__WEBPACK_IMPORTED_MODULE_3__["SimplePagerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], SimplePagerModule);
      /***/
    },

    /***/
    "FYco":
    /*!*****************************************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/portal-source.directive.ts ***!
      \*****************************************************************/

    /*! exports provided: PortalSourceDirective */

    /***/
    function FYco(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function () {
        return PortalSourceDirective;
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


      var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./portal-hub.service */
      "L4a7");

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

      PortalSourceDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]
        }];
      };

      PortalSourceDirective.propDecorators = {
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['dynamicPortalSource']
        }]
      };
      PortalSourceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[dynamicPortalSource]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]])], PortalSourceDirective);
      /***/
    },

    /***/
    "GRi0":
    /*!******************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/public_api.ts ***!
      \******************************************************/

    /*! exports provided: NgErrorComponent, NgErrorOverlayModule */

    /***/
    function GRi0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ng-error/ng-error.component */
      "51S8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function () {
        return _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"];
      });
      /* harmony import */


      var _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ng-error/ng-error-overlay.module */
      "MBLM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function () {
        return _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__["NgErrorOverlayModule"];
      });
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
    "HFY2":
    /*!******************************************!*\
      !*** ./libs/ng-utils/css-props/index.ts ***!
      \******************************************/

    /*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */

    /***/
    function HFY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "6L+t");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CssPropsModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["CSSPropsDirective"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CssPropsService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["CssPropsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updateCssProps", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateCssProps"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateDynamicStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getStyleElement", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["getStyleElement"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "replaceCss", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["replaceCss"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ElementCssService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["ElementCssService"];
      });
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
    "HeaY":
    /*!*************************************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function HeaY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: #454545DD;\n  overflow: auto;\n  z-index: var(--overlay-zindex);\n}\n.fullscreen simple-pager {\n  height: calc(100% - 2rem);\n  padding: 1rem;\n}\n.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one {\n  opacity: 0;\n}\n.fullscreen ::ng-deep .error-name {\n  display: none;\n}\n.close-button {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n}\n.error-next-to-navigation {\n  color: red;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25nLWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUFGO0FBRUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFBSjtBQUdNO0VBQ0UsVUFBQTtBQURSO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFTQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQU5GO0FBU0E7RUFDRSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTkYiLCJmaWxlIjoibmctZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG5cbiAgYmFja2dyb3VuZDogIzQ1NDU0NUREO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogdmFyKC0tb3ZlcmxheS16aW5kZXgpO1xuXG4gIHNpbXBsZS1wYWdlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5uYXZpZ2F0aW9uLXJvdy1wYW5lbC5vbmx5LW9uZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5lcnJvci1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAycmVtO1xuICByaWdodDogMnJlbTtcbn1cblxuLmVycm9yLW5leHQtdG8tbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbiJdfQ== */";
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
      "HFY2");
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
      "2wmh");
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
            var _this2 = this;

            this.updateLinesAmount(); // once the debounceTime changes
            // recreate the observable

            this.debounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (debounceTimeInterval) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([_this2.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()), _this2.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()), _this2.lastKeyTriggered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(debounceTimeInterval));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed$)).subscribe(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 3),
                  code = _ref9[0],
                  language = _ref9[1],
                  lastKeyEvent = _ref9[2];

              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.showHighlighedCode$.next(false);
                        _context.next = 3;
                        return this.highlightToPreTag(code, language, lastKeyEvent);

                      case 3:
                        this.showHighlighedCode$.next(true); // incase multiple enters scroll the textarea one off, scroll back up
                        // this.textarea.nativeElement.scrollTo(0,0);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (value) {
              _this2.value = value;

              _this2.changed.emit(value);
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
          value: function ngOnChanges(_ref10) {
            var value = _ref10.value,
                language = _ref10.language,
                debounceTime = _ref10.debounceTime;

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
            if (this.allCharsRegex.exec(event.key) && !_editor_keys__WEBPACK_IMPORTED_MODULE_10__["IGNORE_KEY_EVENTS"].includes(event.key)) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var innerHighlighed, addedBeginNewLine, addedEndNewLine;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (codeToHighlight) {
                        _context2.next = 3;
                        break;
                      }

                      this.morphService.morphElement(this.highlightArea, "<pre>\n</pre>", {
                        childrenOnly: true
                      });
                      return _context2.abrupt("return", '');

                    case 3:
                      _context2.next = 5;
                      return this.prism.highlightCode(codeToHighlight, language);

                    case 5:
                      innerHighlighed = _context2.sent;
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

                      return _context2.abrupt("return", innerHighlighed);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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
    "IRXU":
    /*!***********************************************************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function IRXU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLXBvcnRhbC5jb21wb25lbnQuc2NzcyJ9 */";
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
      "mMUf");
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
            var _this3 = this;

            if (!this.workerProxy) {
              return;
            }

            return this.ngZone.runOutsideAngular(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return this.workerProxy.highlight(code, lang);

                      case 2:
                        return _context3.abrupt("return", _context3.sent);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
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
    "KB+A":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n";
      /***/
    },

    /***/
    "KRRg":
    /*!********************************************************!*\
      !*** ./libs/ng-utils/css-props/element-css.service.ts ***!
      \********************************************************/

    /*! exports provided: ElementCssService */

    /***/
    function KRRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElementCssService", function () {
        return ElementCssService;
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


      var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./css-props.service */
      "T9O9");

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

      ElementCssService.ctorParameters = function () {
        return [{
          type: _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      ElementCssService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ElementCssService);
      /***/
    },

    /***/
    "L4a7":
    /*!************************************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/portal-hub.service.ts ***!
      \************************************************************/

    /*! exports provided: PortalSourceAction, PortalHubService */

    /***/
    function L4a7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function () {
        return PortalSourceAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalHubService", function () {
        return PortalHubService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

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
            var _this4 = this;

            return this.templateSourceSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (a) {
              return a.key === key;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) {
              switch (a.type) {
                case 0
                /* Added */
                :
                  {
                    return _this4.templateSourceHub[key];
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

      PortalHubService.ctorParameters = function () {
        return [];
      };

      PortalHubService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PortalHubService);
      /***/
    },

    /***/
    "LTcb":
    /*!***************************************************!*\
      !*** ./libs/lazy/loader/lazy-module.component.ts ***!
      \***************************************************/

    /*! exports provided: LazyModuleComponent */

    /***/
    function LTcb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function () {
        return LazyModuleComponent;
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
      "BLap");

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var moduleInDictionary, moduleFactory, components, componentInfo, componentType, componentFactory, componentRef;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(!this.moduleAlias || !this.component || this.alreadySettingComponent)) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      this.error = '';
                      this.alreadySettingComponent = true;
                      moduleInDictionary = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyModuleComponents[this.moduleAlias];

                      if (moduleInDictionary) {
                        _context4.next = 9;
                        break;
                      }

                      this.error = "Module ".concat(this.moduleAlias, " not registered");
                      this.cd.markForCheck();
                      return _context4.abrupt("return");

                    case 9:
                      this.componentLoading.emit(true);

                      if (!moduleInDictionary.loadedModule) {
                        // load and cache
                        moduleInDictionary.loadedModule = moduleInDictionary.load.getValue().then(function (importedModule) {
                          return _this5.angularCompiler.compileModuleAndAllComponentsAsync(importedModule);
                        }).then(function (factory) {
                          return {
                            ngModule: factory.ngModuleFactory.create(_this5.injector),
                            componentFactories: factory.componentFactories
                          };
                        });
                      }

                      _context4.next = 13;
                      return moduleInDictionary.loadedModule;

                    case 13:
                      moduleFactory = _context4.sent;

                      if (moduleFactory.ngModule.instance.getComponents) {
                        _context4.next = 18;
                        break;
                      }

                      this.error = "Module ".concat(this.moduleAlias, " does not have a getComponents-Method");
                      this.cd.markForCheck();
                      return _context4.abrupt("return");

                    case 18:
                      components = moduleFactory.ngModule.instance.getComponents();
                      componentInfo = components.find(function (cf) {
                        return cf.name === _this5.component;
                      });

                      if (componentInfo) {
                        _context4.next = 24;
                        break;
                      }

                      this.error = "Component '".concat(this.component, "' does not exist in the 'getComponents'-Method");
                      this.cd.markForCheck();
                      return _context4.abrupt("return");

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
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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

              for (var _i2 = 0, _inputs = inputs; _i2 < _inputs.length; _i2++) {
                var inputKey = _inputs[_i2];
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
      LazyModuleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-lazy-module-component',
        template: "\n    <ng-container #targetContainer></ng-container>\n    <ng-content *ngIf=\"!component || !moduleAlias\"></ng-content>\n    <ng-content *ngIf=\"componentLoading | async\"\n                select=\"[isLoading]\"></ng-content>\n    <span *ngIf=\"showError && error\" class=\"error\">{{error}}</span>\n  ",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n    .error {\n      color: red;\n    }\n  "]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], LazyModuleComponent);
      /***/
    },

    /***/
    "MBLM":
    /*!****************************************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts ***!
      \****************************************************************************/

    /*! exports provided: NgErrorOverlayModule */

    /***/
    function MBLM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function () {
        return NgErrorOverlayModule;
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


      var _ng_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ng-error.component */
      "51S8");
      /* harmony import */


      var _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error-overlay/error-overlay.component */
      "WKfP");
      /* harmony import */


      var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error-handler.service */
      "kWME");
      /* harmony import */


      var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @gewd/ng-utils/bootstrap-component */
      "RB7p");
      /* harmony import */


      var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @gewd/ng-utils/components */
      "DVXd");
      /* harmony import */


      var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @gewd/ng-utils/dynamic-portal */
      "zzJY");

      var NgErrorOverlayModule_1;

      var NgErrorOverlayModule = NgErrorOverlayModule_1 = /*#__PURE__*/function () {
        function NgErrorOverlayModule() {
          _classCallCheck(this, NgErrorOverlayModule);
        }

        _createClass(NgErrorOverlayModule, null, [{
          key: "config",
          value: function config(useValue) {
            return {
              ngModule: NgErrorOverlayModule_1,
              providers: [{
                provide: _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["NG_ERROR_CONFIG_TOKEN"],
                useValue: useValue
              }]
            };
          }
        }]);

        return NgErrorOverlayModule;
      }();

      NgErrorOverlayModule = NgErrorOverlayModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ng_error_component__WEBPACK_IMPORTED_MODULE_3__["NgErrorComponent"], _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_4__["ErrorOverlayComponent"]],
        entryComponents: [_ng_error_component__WEBPACK_IMPORTED_MODULE_3__["NgErrorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"].component({
          elementName: 'ng-error',
          component: _ng_error_component__WEBPACK_IMPORTED_MODULE_3__["NgErrorComponent"]
        }), _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__["SimplePagerModule"], _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["DynamicPortalModule"]],
        providers: [_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
          useExisting: _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]
        }]
      })], NgErrorOverlayModule);
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
    "QhBr":
    /*!***********************************!*\
      !*** ./libs/lazy/loader/index.ts ***!
      \***********************************/

    /*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */

    /***/
    function QhBr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "DQPP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_LAZY_LOADED_MODULE_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["GewdLazyLoaderModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["LazyModuleComponent"];
      });
      /***/

    },

    /***/
    "RB7p":
    /*!****************************************************!*\
      !*** ./libs/ng-utils/bootstrap-component/index.ts ***!
      \****************************************************/

    /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */

    /***/
    function RB7p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "RrM0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["BOOTSTRAP_COMPONENT_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["bootstrapComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["BootstrapComponentModule"];
      });
      /***/

    },

    /***/
    "RrM0":
    /*!*********************************************************!*\
      !*** ./libs/ng-utils/bootstrap-component/public_api.ts ***!
      \*********************************************************/

    /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */

    /***/
    function RrM0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bootstrap-component.module */
      "vZJb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function () {
        return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["BOOTSTRAP_COMPONENT_TOKEN"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function () {
        return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["bootstrapComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function () {
        return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapComponentModule"];
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
    "S32t":
    /*!********************************************************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function S32t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  color: #e8e8e8;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n  white-space: pre-wrap;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  color: red;\n}\n\n.stack-block {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.stack-table {\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.row.even {\n  background: #AAAAAA40;\n}\n\n.row.odd {\n  background: #CCCCCC40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Vycm9yLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQXpCUTtFQTBCUixXQUFBO0FBREY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFJRTtFQUFRLHFCQUFBO0FBQVY7O0FBQ0U7RUFBTyxxQkFBQTtBQUVUIiwiZmlsZSI6ImVycm9yLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFkZGluZzogMnJlbTtcblxuOmhvc3Qge1xuICBjb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xuICBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3RhY2stYmxvY2sge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc3RhY2stdGFibGUge1xuICBtYXJnaW4tdG9wOiAkcGFkZGluZztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93IHtcbiAgJi5ldmVuIHtiYWNrZ3JvdW5kOiAjQUFBQUFBNDB9XG4gICYub2RkIHtiYWNrZ3JvdW5kOiAjQ0NDQ0NDNDB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "T9O9":
    /*!******************************************************!*\
      !*** ./libs/ng-utils/css-props/css-props.service.ts ***!
      \******************************************************/

    /*! exports provided: CssPropsService */

    /***/
    function T9O9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CssPropsService", function () {
        return CssPropsService;
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


      var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./update-css-props */
      "XLiS");
      /* harmony import */


      var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./update-dynamic-style */
      "5G9P");
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
            var _this6 = this;

            this.ngZone.runOutsideAngular(function () {
              Object(_update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["updateDynamicStyle"])(_this6.document, styleId, customCss);
            });
          }
        }, {
          key: "updateDocumentVars",
          value: function updateDocumentVars(cssProps) {
            var _this7 = this;

            this.ngZone.runOutsideAngular(function () {
              Object(_update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"])(_this7.document.body, cssProps);
            });
          }
        }, {
          key: "updateElementVars",
          value: function updateElementVars(element, cssProps) {
            this.ngZone.runOutsideAngular(function () {
              Object(_update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"])(element, cssProps);
            });
          }
        }]);

        return CssPropsService;
      }();

      CssPropsService.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CssPropsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CssPropsService);
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
    "UItG":
    /*!***************************************************!*\
      !*** ./libs/markdown/service/markdown.service.ts ***!
      \***************************************************/

    /*! exports provided: MarkdownService */

    /***/
    function UItG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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
      "7DNQ");
      /* harmony import */


      var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./markdown-cache.service */
      "mdMz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _injection_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./injection-token */
      "lgUy");
      /* harmony import */


      var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @gewd/markdown/utils */
      "zOTi");

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

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId)) {
            this.workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_2__["wrap"])(markdownOptions.getWorker());

            if (markdownOptions.options) {
              this.workerProxy.init(markdownOptions.options);
            }
          }

          if (markdownOptions.mermaidPath) {
            this.canTriggerMermaidLoad = true;
            this.mermaidCacheKey = "mermaid_".concat(this.mermaidConfig.theme, "_").concat(Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_7__["simpleHash"])(this.mermaidConfig.themeCSS));
          }
        }

        _createClass(MarkdownService, [{
          key: "compileMarkdown",
          value: function compileMarkdown(str) {
            var triggerMermaid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var parsedMarkdown, mermaidInstance, matched, _iterator2, _step2, mermaid, innerContent, rendered, cached, errorStr;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.workerProxy) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      _context5.next = 4;
                      return this.workerProxy.compile(str);

                    case 4:
                      parsedMarkdown = _context5.sent;

                      if (!(triggerMermaid && parsedMarkdown.match(/class="mermaid"/))) {
                        _context5.next = 33;
                        break;
                      }

                      _context5.next = 8;
                      return this.triggerMermaidLoadScript();

                    case 8:
                      mermaidInstance = window.mermaid;

                      if (!mermaidInstance) {
                        _context5.next = 33;
                        break;
                      }

                      matched = parsedMarkdown.match(compiledRegex);
                      _iterator2 = _createForOfIteratorHelper(matched);
                      _context5.prev = 12;

                      _iterator2.s();

                    case 14:
                      if ((_step2 = _iterator2.n()).done) {
                        _context5.next = 25;
                        break;
                      }

                      mermaid = _step2.value;
                      innerContent = this.cleanUpMermaidRaw(mermaid);
                      rendered = '';
                      _context5.next = 20;
                      return this.cache.getCachedPart(this.mermaidCacheKey, innerContent);

                    case 20:
                      cached = _context5.sent;

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
                      _context5.next = 14;
                      break;

                    case 25:
                      _context5.next = 30;
                      break;

                    case 27:
                      _context5.prev = 27;
                      _context5.t0 = _context5["catch"](12);

                      _iterator2.e(_context5.t0);

                    case 30:
                      _context5.prev = 30;

                      _iterator2.f();

                      return _context5.finish(30);

                    case 33:
                      return _context5.abrupt("return", parsedMarkdown);

                    case 34:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[12, 27, 30, 33]]);
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
            var _this8 = this;

            if (!this.canTriggerMermaidLoad) {
              return Promise.resolve();
            }

            if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
              this.mermaidAddedToPage = true;

              var _mermaidNode = this.document.createElement('div');

              _mermaidNode.hidden = true;
              this.document.body.appendChild(_mermaidNode);
              return new Promise(function (resolve, reject) {
                var scriptTag = _this8.document.createElement('script');

                scriptTag.src = _this8.markdownOptions.mermaidPath; // trigger mermaid init

                scriptTag.onload = function () {
                  var mermaid = window.mermaid;
                  mermaid.initialize(_this8.mermaidConfig);
                  resolve();

                  mermaid.parseError = function (err) {
                    console.error('MarkdownService, Mermaid: ', err);
                  };
                };

                _this8.document.body.appendChild(scriptTag);
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

      MarkdownService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_injection_token__WEBPACK_IMPORTED_MODULE_6__["MarkdownOptionsInjectorToken"]]
          }]
        }, {
          type: _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      };

      MarkdownService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"], Document, Object])], MarkdownService);
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
    "WKfP":
    /*!******************************************************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ErrorOverlayComponent */

    /***/
    function WKfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorOverlayComponent", function () {
        return ErrorOverlayComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_error_overlay_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./error-overlay.component.html */
      "WvKa");
      /* harmony import */


      var _error_overlay_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-overlay.component.scss */
      "S32t");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var error_stack_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! error-stack-parser */
      "MjPQ");
      /* harmony import */


      var error_stack_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_4__);

      var ErrorOverlayComponent = /*#__PURE__*/function () {
        function ErrorOverlayComponent() {
          _classCallCheck(this, ErrorOverlayComponent);
        }

        _createClass(ErrorOverlayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_4___default.a.parse(this.error);
          }
        }]);

        return ErrorOverlayComponent;
      }();

      ErrorOverlayComponent.ctorParameters = function () {
        return [];
      };

      ErrorOverlayComponent.propDecorators = {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ErrorOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'error-overlay',
        template: _raw_loader_error_overlay_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_overlay_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ErrorOverlayComponent);
      /***/
    },

    /***/
    "WvKa":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WvKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n";
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
    "XLiS":
    /*!*****************************************************!*\
      !*** ./libs/ng-utils/css-props/update-css-props.ts ***!
      \*****************************************************/

    /*! exports provided: updateCssProps */

    /***/
    function XLiS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateCssProps", function () {
        return updateCssProps;
      });

      function updateCssProps(element, cssProps) {
        var style = element.style;

        for (var _i4 = 0, _Object$entries = Object.entries(cssProps); _i4 < _Object$entries.length; _i4++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
              k = _Object$entries$_i[0],
              v = _Object$entries$_i[1];

          style.setProperty(k, v.toString(), 'important');
        }
      }
      /***/

    },

    /***/
    "aPzk":
    /*!**********************************************!*\
      !*** ./libs/ng-utils/morphdom/public_api.ts ***!
      \**********************************************/

    /*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */

    /***/
    function aPzk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _morphdom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./morphdom.module */
      "p+SD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MorphdomModule", function () {
        return _morphdom_module__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"];
      });
      /* harmony import */


      var _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./morphdom.directive */
      "BBkK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function () {
        return _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__["MorphdomDirective"];
      });
      /* harmony import */


      var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./morphdom.service */
      "BKhR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MorphdomService", function () {
        return _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"];
      });
      /***/

    },

    /***/
    "bgcH":
    /*!*****************************************************!*\
      !*** ./libs/lazy/loader/gewd-lazy-loader.module.ts ***!
      \*****************************************************/

    /*! exports provided: REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule */

    /***/
    function bgcH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function () {
        return REGISTORY_LAZY_LOADED_MODULE_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function () {
        return GewdLazyLoaderModule;
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


      var _lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lazy.component */
      "v0Je");
      /* harmony import */


      var _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lazy-module.component */
      "LTcb");
      /* harmony import */


      var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @gewd/lazy/registry */
      "BLap");

      var GewdLazyLoaderModule_1;
      var REGISTORY_LAZY_LOADED_MODULE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/lazy-loader/LazyModuleComponentConfig');

      var GewdLazyLoaderModule = GewdLazyLoaderModule_1 = /*#__PURE__*/function () {
        function GewdLazyLoaderModule(registerLazyLoads) {
          _classCallCheck(this, GewdLazyLoaderModule);

          var _iterator3 = _createForOfIteratorHelper(registerLazyLoads),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var lazyInfo = _step3.value;

              _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__["DynamicLoaderRegistry"].RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
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
              ngModule: GewdLazyLoaderModule_1,
              providers: providers
            };
          }
        }]);

        return GewdLazyLoaderModule;
      }();

      GewdLazyLoaderModule.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [REGISTORY_LAZY_LOADED_MODULE_TOKEN]
          }]
        }];
      };

      GewdLazyLoaderModule = GewdLazyLoaderModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"], _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__["LazyModuleComponent"]],
        exports: [_lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"], _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__["LazyModuleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], GewdLazyLoaderModule);
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
    "dk2Z":
    /*!*************************************************************************!*\
      !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SimplePagerComponent */

    /***/
    function dk2Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function () {
        return SimplePagerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_simple_pager_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./simple-pager.component.html */
      "hB53");
      /* harmony import */


      var _simple_pager_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simple-pager.component.scss */
      "ofWX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SimplePagerComponent = /*#__PURE__*/function () {
        function SimplePagerComponent() {
          _classCallCheck(this, SimplePagerComponent);

          this.position = 0;
        }

        _createClass(SimplePagerComponent, [{
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

      SimplePagerComponent.ctorParameters = function () {
        return [];
      };

      SimplePagerComponent.propDecorators = {
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SimplePagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simple-pager',
        template: _raw_loader_simple_pager_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simple_pager_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SimplePagerComponent);
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
    "hB53":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/components/simple-pager/simple-pager.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hB53(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n";
      /***/
    },

    /***/
    "hR9A":
    /*!*****************************************************!*\
      !*** ./libs/markdown/contracts/worker.interface.ts ***!
      \*****************************************************/

    /*! no exports provided */

    /***/
    function hR9A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "iv+R":
    /*!***************************************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/dynamic-portal.module.ts ***!
      \***************************************************************/

    /*! exports provided: DynamicPortalModule */

    /***/
    function ivR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function () {
        return DynamicPortalModule;
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


      var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dynamic-portal/dynamic-portal.component */
      "slkw");
      /* harmony import */


      var _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./portal-source.directive */
      "FYco");

      var DynamicPortalModule = function DynamicPortalModule() {
        _classCallCheck(this, DynamicPortalModule);
      };

      DynamicPortalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPortalComponent"], _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__["PortalSourceDirective"]],
        exports: [_dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPortalComponent"], _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__["PortalSourceDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: []
      })], DynamicPortalModule);
      /***/
    },

    /***/
    "kWME":
    /*!**************************************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts ***!
      \**************************************************************************/

    /*! exports provided: NG_ERROR_CONFIG_TOKEN, ErrorHandlerService */

    /***/
    function kWME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_ERROR_CONFIG_TOKEN", function () {
        return NG_ERROR_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
        return ErrorHandlerService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DEFAULT_CONFIG = {
        zIndex: 10000,
        ignoreErrors: []
      };
      var NG_ERROR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/ng-utils/NgErrorConfig');

      var ErrorHandlerService = /*#__PURE__*/function () {
        function ErrorHandlerService(config) {
          var _this9 = this;

          _classCallCheck(this, ErrorHandlerService);

          this.config = config;
          this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.config = Object.assign({}, DEFAULT_CONFIG, config);
          window.addEventListener('error', function (ev) {
            _this9.handleError(ev.error);
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

      ErrorHandlerService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [NG_ERROR_CONFIG_TOKEN]
          }]
        }];
      };

      ErrorHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ErrorHandlerService);
      /***/
    },

    /***/
    "lgUy":
    /*!**************************************************!*\
      !*** ./libs/markdown/service/injection-token.ts ***!
      \**************************************************/

    /*! exports provided: MarkdownOptionsInjectorToken */

    /***/
    function lgUy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function () {
        return MarkdownOptionsInjectorToken;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MarkdownOptionsInjectorToken');
      /***/
    },

    /***/
    "mMUf":
    /*!****************************************!*\
      !*** ./libs/markdown/service/index.ts ***!
      \****************************************/

    /*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */

    /***/
    function mMUf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "4jei");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownCacheService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownOptionsInjectorToken"];
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
            var _this10 = this;

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
                    _this10.editorExample$.next(value);
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
    "mdMz":
    /*!*********************************************************!*\
      !*** ./libs/markdown/service/markdown-cache.service.ts ***!
      \*********************************************************/

    /*! exports provided: MarkdownCacheService */

    /***/
    function mdMz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function () {
        return MarkdownCacheService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      MarkdownCacheService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MarkdownCacheService);
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
    "n65z":
    /*!**********************************!*\
      !*** ./libs/lazy/utils/index.ts ***!
      \**********************************/

    /*! exports provided: Lazy */

    /***/
    function n65z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "sxoG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Lazy", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
      });
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

          if (this.ngControl !== null) {
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
          value: function ngOnChanges(_ref11) {
            var value = _ref11.value;

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
    "o4qD":
    /*!*******************************************!*\
      !*** ./libs/markdown/utils/public_api.ts ***!
      \*******************************************/

    /*! exports provided: Lazy, simpleHash */

    /***/
    function o4qD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lazy */
      "E8Ja");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Lazy", function () {
        return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
      });
      /* harmony import */


      var _simple_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./simple-hash */
      "B+Hh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "simpleHash", function () {
        return _simple_hash__WEBPACK_IMPORTED_MODULE_1__["simpleHash"];
      });
      /***/

    },

    /***/
    "ofWX":
    /*!***************************************************************************!*\
      !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function ofWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-arrow, .right-arrow {\n  --arrow-color: white;\n}\n\n.left-arrow svg path, .right-arrow svg path {\n  fill: var(--arrow-color);\n}\n\n.left-arrow:hover:not(.disabled), .right-arrow:hover:not(.disabled) {\n  cursor: pointer;\n}\n\n.left-arrow.disabled, .right-arrow.disabled {\n  --arrow-color: gray;\n}\n\n.slot {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.position-label {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.navigation-row-panel {\n  flex: 1;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpbXBsZS1wYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDRTtFQUNFLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxPQUFBO0VBQ0EseUJBQUE7QUFGRiIsImZpbGUiOiJzaW1wbGUtcGFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sZWZ0LWFycm93LCAucmlnaHQtYXJyb3cge1xuICAtLWFycm93LWNvbG9yOiB3aGl0ZTtcblxuICBzdmcgcGF0aCB7XG4gICAgZmlsbDogdmFyKC0tYXJyb3ctY29sb3IpO1xuICB9XG5cbiAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgLS1hcnJvdy1jb2xvcjogZ3JheTtcbiAgfVxufVxuXG4uc2xvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zaXRpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ubmF2aWdhdGlvbi1yb3ctcGFuZWwge1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl19 */";
      /***/
    },

    /***/
    "p+SD":
    /*!***************************************************!*\
      !*** ./libs/ng-utils/morphdom/morphdom.module.ts ***!
      \***************************************************/

    /*! exports provided: MorphdomModule */

    /***/
    function pSD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorphdomModule", function () {
        return MorphdomModule;
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


      var _morphdom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./morphdom.directive */
      "BBkK");

      var MorphdomModule = function MorphdomModule() {
        _classCallCheck(this, MorphdomModule);
      };

      MorphdomModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_morphdom_directive__WEBPACK_IMPORTED_MODULE_3__["MorphdomDirective"]],
        exports: [_morphdom_directive__WEBPACK_IMPORTED_MODULE_3__["MorphdomDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], MorphdomModule);
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
      "HFY2");
      /* harmony import */


      var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @gewd/ng-utils/morphdom */
      "2wmh");

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
    "p22G":
    /*!*********************************!*\
      !*** ./libs/lazy/utils/lazy.ts ***!
      \*********************************/

    /*! exports provided: Lazy */

    /***/
    function p22G(module, __webpack_exports__, __webpack_require__) {
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
    "rZxZ":
    /*!*************************************************!*\
      !*** ./libs/ng-utils/ng-error-overlay/index.ts ***!
      \*************************************************/

    /*! exports provided: NgErrorComponent, NgErrorOverlayModule */

    /***/
    function rZxZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "GRi0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgErrorOverlayModule"];
      });
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
      "mMUf");
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
      "zOTi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MdCacheExampleService = /*#__PURE__*/function (_gewd_markdown_servic) {
        _inherits(MdCacheExampleService, _gewd_markdown_servic);

        var _super = _createSuper(MdCacheExampleService);

        function MdCacheExampleService(platformId) {
          var _this11;

          _classCallCheck(this, MdCacheExampleService);

          _this11 = _super.call(this);
          _this11.enabled = true; // skip localforage calls during pre-render step

          _this11.enabled = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);

          if (_this11.enabled) {
            _this11.createInstance();
          }

          return _this11;
        }

        _createClass(MdCacheExampleService, [{
          key: "saveCachedPart",
          value: function saveCachedPart(type, raw, rendered) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var hash;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (this.enabled) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      _context6.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
                      this.localForageCache.setItem("".concat(type, "/").concat(hash), rendered);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getCachedPart",
          value: function getCachedPart(type, raw) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var hash, result;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (this.enabled) {
                        _context7.next = 2;
                        break;
                      }

                      return _context7.abrupt("return");

                    case 2:
                      _context7.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
                      _context7.next = 7;
                      return this.localForageCache.getItem("".concat(type, "/").concat(hash));

                    case 7:
                      result = _context7.sent;
                      return _context7.abrupt("return", result);

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getCached",
          value: function getCached(rawMarkdown) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var hash, result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (this.enabled) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 2:
                      _context8.next = 4;
                      return this.localForageCache.ready();

                    case 4:
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
                      _context8.next = 7;
                      return this.localForageCache.getItem(hash);

                    case 7:
                      result = _context8.sent;
                      return _context8.abrupt("return", result);

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "saveCached",
          value: function saveCached(rawMarkdown, renderedMarkdown) {
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
                      hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
                      this.localForageCache.setItem(hash, renderedMarkdown);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "createInstance",
          value: function createInstance() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.localForageCache = localforage__WEBPACK_IMPORTED_MODULE_3__["createInstance"]({
                        name: 'markdown-cache'
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
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
    "slkw":
    /*!*********************************************************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: DynamicPortalComponent */

    /***/
    function slkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function () {
        return DynamicPortalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dynamic_portal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dynamic-portal.component.html */
      "KB+A");
      /* harmony import */


      var _dynamic_portal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dynamic-portal.component.scss */
      "IRXU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _portal_hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../portal-hub.service */
      "L4a7");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var DynamicPortalComponent = /*#__PURE__*/function () {
        function DynamicPortalComponent(hub) {
          var _this12 = this;

          _classCallCheck(this, DynamicPortalComponent);

          this.hub = hub;
          this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          this.templateToShow$ = this.key$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (key) {
            return _this12.hub.getTemplate$(key);
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
          key: "checkKeyAndPushTemplate",
          value: function checkKeyAndPushTemplate() {
            this.key$.next(this.key);
          }
        }]);

        return DynamicPortalComponent;
      }();

      DynamicPortalComponent.ctorParameters = function () {
        return [{
          type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_5__["PortalHubService"]
        }];
      };

      DynamicPortalComponent.propDecorators = {
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DynamicPortalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dynamic-portal',
        template: _raw_loader_dynamic_portal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_dynamic_portal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_portal_hub_service__WEBPACK_IMPORTED_MODULE_5__["PortalHubService"]])], DynamicPortalComponent);
      /***/
    },

    /***/
    "sxoG":
    /*!***************************************!*\
      !*** ./libs/lazy/utils/public_api.ts ***!
      \***************************************/

    /*! exports provided: Lazy */

    /***/
    function sxoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lazy */
      "p22G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Lazy", function () {
        return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
      });
      /***/

    },

    /***/
    "v0Je":
    /*!********************************************!*\
      !*** ./libs/lazy/loader/lazy.component.ts ***!
      \********************************************/

    /*! exports provided: LazyComponent */

    /***/
    function v0Je(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
        return LazyComponent;
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
      "BLap");

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var importComponent, imported, keys, theComp, componentFactory, componentRef;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (this.component) {
                        _context11.next = 2;
                        break;
                      }

                      return _context11.abrupt("return");

                    case 2:
                      this.componentLoading.emit(true);
                      this.cd.detectChanges(); // cached promise

                      importComponent = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyComponents[this.component].getValue();
                      _context11.next = 7;
                      return importComponent;

                    case 7:
                      imported = _context11.sent;
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
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
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

              for (var _i5 = 0, _inputs2 = inputs; _i5 < _inputs2.length; _i5++) {
                var inputKey = _inputs2[_i5];
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

              for (var _i6 = 0, _outputs2 = outputs; _i6 < _outputs2.length; _i6++) {
                var outputKey = _outputs2[_i6];

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
      LazyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-lazy-component',
        template: "\n    <ng-container #targetContainer>\n    </ng-container>\n\n    <ng-content *ngIf=\"!component\"></ng-content>\n    <ng-content *ngIf=\"componentLoading | async\"\n                select=\"[isLoading]\"></ng-content>\n  ",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], LazyComponent);
      /***/
    },

    /***/
    "vZJb":
    /*!*************************************************************************!*\
      !*** ./libs/ng-utils/bootstrap-component/bootstrap-component.module.ts ***!
      \*************************************************************************/

    /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */

    /***/
    function vZJb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function () {
        return BOOTSTRAP_COMPONENT_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function () {
        return bootstrapComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function () {
        return BootstrapComponentModule;
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

      var BootstrapComponentModule_1;
      var BOOTSTRAP_COMPONENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/ng-utils/BootstrapComponentConfig');

      function bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig) {
        var domElement = document.createElement(bootstrapConfig.elementName);
        document.body.append(domElement);
        var factory = resolver.resolveComponentFactory(bootstrapConfig.component);
        var ref = factory.create(injector, [], domElement);
        appRef.attachView(ref.hostView);
      }
      /** @dynamic - allows Document in ngc build */


      var BootstrapComponentModule = BootstrapComponentModule_1 = /*#__PURE__*/function () {
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
              ngModule: BootstrapComponentModule_1,
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

      BootstrapComponentModule.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [BOOTSTRAP_COMPONENT_TOKEN]
          }]
        }];
      };

      BootstrapComponentModule = BootstrapComponentModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Array])], BootstrapComponentModule);
      /***/
    },

    /***/
    "wfeF":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wfeF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n";
      /***/
    },

    /***/
    "xqI3":
    /*!****************************************!*\
      !*** ./libs/lazy/registry/registry.ts ***!
      \****************************************/

    /*! exports provided: DynamicLoaderRegistry */

    /***/
    function xqI3(module, __webpack_exports__, __webpack_require__) {
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
      "mMUf");
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.compile();

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "onClick",
          value: function onClick(e) {
            var target = e.target;
            var aHref = null;

            while (aHref === null && target !== null) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var cachedMarkdown, parsedHtml;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;

                      if (!this.useCache) {
                        _context13.next = 8;
                        break;
                      }

                      _context13.next = 4;
                      return this.cache.getCached(this._markdown);

                    case 4:
                      cachedMarkdown = _context13.sent;

                      if (!cachedMarkdown) {
                        _context13.next = 8;
                        break;
                      }

                      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));

                      return _context13.abrupt("return");

                    case 8:
                      _context13.next = 10;
                      return this.service.compileMarkdown(this._markdown, this.allowMermaid);

                    case 10:
                      parsedHtml = _context13.sent;

                      this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));

                      if (this.useCache) {
                        this.cache.saveCached(this._markdown, parsedHtml);
                      }

                      _context13.next = 19;
                      break;

                    case 15:
                      _context13.prev = 15;
                      _context13.t0 = _context13["catch"](0);
                      console.error(_context13.t0);

                      this._htmlToShow$.next(_context13.t0);

                    case 19:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 15]]);
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
    "zOTi":
    /*!**************************************!*\
      !*** ./libs/markdown/utils/index.ts ***!
      \**************************************/

    /*! exports provided: Lazy, simpleHash */

    /***/
    function zOTi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "o4qD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Lazy", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "simpleHash", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["simpleHash"];
      });
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
    },

    /***/
    "zzJY":
    /*!***********************************************!*\
      !*** ./libs/ng-utils/dynamic-portal/index.ts ***!
      \***********************************************/

    /*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */

    /***/
    function zzJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public_api */
      "0QHq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalSourceAction"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PortalHubService", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalHubService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function () {
        return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalSourceDirective"];
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map