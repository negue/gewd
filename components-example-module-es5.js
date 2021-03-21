function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-example-module"], {
  /***/
  "../../libs/components/auto-scale/auto-scale-img.directive.ts":
  /*!******************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/auto-scale-img.directive.ts ***!
    \******************************************************************************************/

  /*! exports provided: AutoScaleImgDirective */

  /***/
  function libsComponentsAutoScaleAutoScaleImgDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleImgDirective", function () {
      return AutoScaleImgDirective;
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


    var _auto_scale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auto-scale.component */
    "../../libs/components/auto-scale/auto-scale.component.ts");

    var AutoScaleImgDirective = /*#__PURE__*/function () {
      function AutoScaleImgDirective(elemRef, _autoScale) {
        _classCallCheck(this, AutoScaleImgDirective);

        this.elemRef = elemRef;
        this._autoScale = _autoScale;
        var htmlElem = elemRef.nativeElement;

        if (htmlElem.tagName.toLocaleLowerCase() !== 'img') {
          throw new Error('Only <img> tags are supported with the AutoScaleImgDirective!');
        }
      }

      _createClass(AutoScaleImgDirective, [{
        key: "onLoad",
        value: function onLoad() {
          this._autoScale.forceUpdate();
        }
      }]);

      return AutoScaleImgDirective;
    }();

    AutoScaleImgDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _auto_scale_component__WEBPACK_IMPORTED_MODULE_2__["AutoScaleComponent"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('load'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], AutoScaleImgDirective.prototype, "onLoad", null);
    AutoScaleImgDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[gewdAutoScaleImg]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _auto_scale_component__WEBPACK_IMPORTED_MODULE_2__["AutoScaleComponent"]])], AutoScaleImgDirective);
    /***/
  },

  /***/
  "../../libs/components/auto-scale/auto-scale.component.scss":
  /*!****************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/auto-scale.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsComponentsAutoScaleAutoScaleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  height: var(--zoom_out_height);\n  width: var(--zoom_out_width);\n  --scale-width: 0;\n  --scale-height: 0;\n}\n\n.zoom_out_parent {\n  position: relative;\n  height: var(--zoom_out_height);\n  width: var(--zoom_out_width);\n  overflow: hidden;\n}\n\n.zoom_out {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(min(var(--scale-width), var(--scale-height)));\n  transform-origin: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL2NvbXBvbmVudHMvYXV0by1zY2FsZS9hdXRvLXNjYWxlLmNvbXBvbmVudC5zY3NzIiwibGlicy9jb21wb25lbnRzL2F1dG8tc2NhbGUvYXV0by1zY2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFFQSw4QkFBQTtFQUNBLDRCQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBRUEsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9GQUFBO0VBSUEsK0JBQUE7QUNORiIsImZpbGUiOiJsaWJzL2NvbXBvbmVudHMvYXV0by1zY2FsZS9hdXRvLXNjYWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBoZWlnaHQ6IHZhcigtLXpvb21fb3V0X2hlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS16b29tX291dF93aWR0aCk7XG5cbiAgLS1zY2FsZS13aWR0aDogMDtcbiAgLS1zY2FsZS1oZWlnaHQ6IDA7XG59XG5cblxuLnpvb21fb3V0X3BhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiB2YXIoLS16b29tX291dF9oZWlnaHQpO1xuICB3aWR0aDogdmFyKC0tem9vbV9vdXRfd2lkdGgpO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi56b29tX291dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZShtaW4oXG4gICAgdmFyKC0tc2NhbGUtd2lkdGgpLFxuICAgIHZhcigtLXNjYWxlLWhlaWdodClcbiAgKSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IHZhcigtLXpvb21fb3V0X2hlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS16b29tX291dF93aWR0aCk7XG4gIC0tc2NhbGUtd2lkdGg6IDA7XG4gIC0tc2NhbGUtaGVpZ2h0OiAwO1xufVxuXG4uem9vbV9vdXRfcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IHZhcigtLXpvb21fb3V0X2hlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS16b29tX291dF93aWR0aCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi56b29tX291dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZShtaW4odmFyKC0tc2NhbGUtd2lkdGgpLCB2YXIoLS1zY2FsZS1oZWlnaHQpKSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "../../libs/components/auto-scale/auto-scale.component.ts":
  /*!**************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/auto-scale.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AutoScaleComponent */

  /***/
  function libsComponentsAutoScaleAutoScaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleComponent", function () {
      return AutoScaleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AutoScaleComponent = /*#__PURE__*/function () {
      function AutoScaleComponent(_cd) {
        _classCallCheck(this, AutoScaleComponent);

        this._cd = _cd;
        this.width = 100;
        this.height = 100;
      }

      _createClass(AutoScaleComponent, [{
        key: "forceUpdate",
        value: function forceUpdate() {
          this._cd.markForCheck();
        }
      }]);

      return AutoScaleComponent;
    }();

    AutoScaleComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.--zoom_out_width.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AutoScaleComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.--zoom_out_height.px'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AutoScaleComponent.prototype, "height", void 0);
    AutoScaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-auto-scale',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auto-scale.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/auto-scale/auto-scale.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auto-scale.component.scss */
      "../../libs/components/auto-scale/auto-scale.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AutoScaleComponent);
    /***/
  },

  /***/
  "../../libs/components/auto-scale/auto-scale.module.ts":
  /*!***********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/auto-scale.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: AutoScaleModule */

  /***/
  function libsComponentsAutoScaleAutoScaleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleModule", function () {
      return AutoScaleModule;
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


    var _auto_scale_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auto-scale.component */
    "../../libs/components/auto-scale/auto-scale.component.ts");
    /* harmony import */


    var _value_or_default_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./value-or-default.pipe */
    "../../libs/components/auto-scale/value-or-default.pipe.ts");
    /* harmony import */


    var _auto_scale_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auto-scale-img.directive */
    "../../libs/components/auto-scale/auto-scale-img.directive.ts");

    var AutoScaleModule = function AutoScaleModule() {
      _classCallCheck(this, AutoScaleModule);
    };

    AutoScaleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auto_scale_component__WEBPACK_IMPORTED_MODULE_3__["AutoScaleComponent"], _value_or_default_pipe__WEBPACK_IMPORTED_MODULE_4__["ValueOrDefaultPipe"], _auto_scale_img_directive__WEBPACK_IMPORTED_MODULE_5__["AutoScaleImgDirective"]],
      exports: [_auto_scale_component__WEBPACK_IMPORTED_MODULE_3__["AutoScaleComponent"], _auto_scale_img_directive__WEBPACK_IMPORTED_MODULE_5__["AutoScaleImgDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], AutoScaleModule);
    /***/
  },

  /***/
  "../../libs/components/auto-scale/index.ts":
  /*!***********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/index.ts ***!
    \***********************************************************************/

  /*! exports provided: AutoScaleModule, AutoScaleComponent, ValueOrDefaultPipe, AutoScaleImgDirective */

  /***/
  function libsComponentsAutoScaleIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/components/auto-scale/public_api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleModule", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutoScaleModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleComponent", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutoScaleComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ValueOrDefaultPipe", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["ValueOrDefaultPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleImgDirective", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["AutoScaleImgDirective"];
    });
    /***/

  },

  /***/
  "../../libs/components/auto-scale/public_api.ts":
  /*!****************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/public_api.ts ***!
    \****************************************************************************/

  /*! exports provided: AutoScaleModule, AutoScaleComponent, ValueOrDefaultPipe, AutoScaleImgDirective */

  /***/
  function libsComponentsAutoScalePublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auto_scale_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auto-scale.module */
    "../../libs/components/auto-scale/auto-scale.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleModule", function () {
      return _auto_scale_module__WEBPACK_IMPORTED_MODULE_0__["AutoScaleModule"];
    });
    /* harmony import */


    var _auto_scale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auto-scale.component */
    "../../libs/components/auto-scale/auto-scale.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleComponent", function () {
      return _auto_scale_component__WEBPACK_IMPORTED_MODULE_1__["AutoScaleComponent"];
    });
    /* harmony import */


    var _value_or_default_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./value-or-default.pipe */
    "../../libs/components/auto-scale/value-or-default.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ValueOrDefaultPipe", function () {
      return _value_or_default_pipe__WEBPACK_IMPORTED_MODULE_2__["ValueOrDefaultPipe"];
    });
    /* harmony import */


    var _auto_scale_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auto-scale-img.directive */
    "../../libs/components/auto-scale/auto-scale-img.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoScaleImgDirective", function () {
      return _auto_scale_img_directive__WEBPACK_IMPORTED_MODULE_3__["AutoScaleImgDirective"];
    });
    /***/

  },

  /***/
  "../../libs/components/auto-scale/value-or-default.pipe.ts":
  /*!***************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/auto-scale/value-or-default.pipe.ts ***!
    \***************************************************************************************/

  /*! exports provided: ValueOrDefaultPipe */

  /***/
  function libsComponentsAutoScaleValueOrDefaultPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueOrDefaultPipe", function () {
      return ValueOrDefaultPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValueOrDefaultPipe = /*#__PURE__*/function () {
      function ValueOrDefaultPipe() {
        _classCallCheck(this, ValueOrDefaultPipe);
      }

      _createClass(ValueOrDefaultPipe, [{
        key: "transform",
        value: function transform(value, defaultValue) {
          if (!isFinite(value)) {
            return defaultValue;
          }

          return value;
        }
      }]);

      return ValueOrDefaultPipe;
    }();

    ValueOrDefaultPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'valueOrDefault'
    })], ValueOrDefaultPipe);
    /***/
  },

  /***/
  "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js":
  /*!**************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
    \**************************************************************************************************/

  /*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
      return MAT_SLIDER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
      return MatSlider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
      return MatSliderChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
      return MatSliderModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/slider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["sliderWrapper"];
    var activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
     * the default separation we chose.
     * @type {?}
     */

    var MIN_AUTO_TICK_SEPARATION = 30;
    /**
     * The thumb gap size for a disabled slider.
     * @type {?}
     */

    var DISABLED_THUMB_GAP = 7;
    /**
     * The thumb gap size for a non-active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
    /**
     * The thumb gap size for an active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
    /**
     * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)] and [formControl].
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlider;
      }),
      multi: true
    };
    /**
     * A simple change event emitted by the MatSlider component.
     */

    var MatSliderChange = function MatSliderChange() {
      _classCallCheck(this, MatSliderChange);
    };

    if (false) {} // Boilerplate for applying mixins to MatSlider.

    /**
     * \@docs-private
     */


    var MatSliderBase =
    /**
     * @param {?} _elementRef
     */
    function MatSliderBase(_elementRef) {
      _classCallCheck(this, MatSliderBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
    /**
     * Allows users to select from a range of values by moving the slider thumb. It is similar in
     * behavior to the native `<input type="range">` element.
     */


    var MatSlider = /*#__PURE__*/function (_MatSliderMixinBase2) {
      _inherits(MatSlider, _MatSliderMixinBase2);

      var _super = _createSuper(MatSlider);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} tabIndex
       * @param {?=} _animationMode
       * @param {?=} _ngZone
       * @param {?=} document
       */
      function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode, _ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this;

        _classCallCheck(this, MatSlider);

        _this = _super.call(this, elementRef);
        _this._focusMonitor = _focusMonitor;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this._animationMode = _animationMode;
        _this._ngZone = _ngZone;
        _this._invert = false;
        _this._max = 100;
        _this._min = 0;
        _this._step = 1;
        _this._thumbLabel = false;
        _this._tickInterval = 0;
        _this._value = null;
        _this._vertical = false;
        /**
         * Event emitted when the slider value has changed.
         */

        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the slider thumb moves.
         */

        _this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */

        _this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */

        _this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */

        _this._isActive = false;
        /**
         * The size of a tick interval as a percentage of the size of the track.
         */

        _this._tickIntervalPercent = 0;
        /**
         * The dimensions of the slider.
         */

        _this._sliderDimensions = null;

        _this._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Subscription to the Directionality change EventEmitter.
         */


        _this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /**
         * Called when the user has put their pointer down on the slider.
         */

        _this._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Don't do anything if the slider is disabled or the
          // user is using anything other than the main mouse button.
          if (_this.disabled || _this._isSliding || !isTouchEvent(event) && event.button !== 0) {
            return;
          }

          _this._runInsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var oldValue = _this.value;
            /** @type {?} */

            var pointerPosition = getPointerPositionOnPage(event);
            _this._isSliding = true;
            _this._lastPointerEvent = event;
            event.preventDefault();

            _this._focusHostElement();

            _this._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


            _this._bindGlobalEvents(event);

            _this._focusHostElement();

            _this._updateValueFromPosition(pointerPosition);

            _this._valueOnSlideStart = _this.value;
            _this._pointerPositionOnStart = pointerPosition; // Emit a change and input event if the value changed.

            if (oldValue != _this.value) {
              _this._emitInputEvent();

              _this._emitChangeEvent();
            }
          });
        };
        /**
         * Called when the user has moved their pointer after
         * starting to drag. Bound on the document level.
         */


        _this._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this._isSliding) {
            // Prevent the slide from selecting anything else.
            event.preventDefault();
            /** @type {?} */

            var oldValue = _this.value;
            _this._lastPointerEvent = event;

            _this._updateValueFromPosition(getPointerPositionOnPage(event)); // Native range elements always emit `input` events when the value changed while sliding.


            if (oldValue != _this.value) {
              _this._emitInputEvent();
            }
          }
        };
        /**
         * Called when the user has lifted their pointer. Bound on the document level.
         */


        _this._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this._isSliding) {
            /** @type {?} */
            var pointerPositionOnStart = _this._pointerPositionOnStart;
            /** @type {?} */

            var currentPointerPosition = getPointerPositionOnPage(event);
            event.preventDefault();

            _this._removeGlobalEvents();

            _this._valueOnSlideStart = _this._pointerPositionOnStart = _this._lastPointerEvent = null;
            _this._isSliding = false;

            if (_this._valueOnSlideStart != _this.value && !_this.disabled && pointerPositionOnStart && (pointerPositionOnStart.x !== currentPointerPosition.x || pointerPositionOnStart.y !== currentPointerPosition.y)) {
              _this._emitChangeEvent();
            }
          }
        };
        /**
         * Called when the window has lost focus.
         */


        _this._windowBlur =
        /**
        * @return {?}
        */
        function () {
          // If the window is blurred while dragging we need to stop dragging because the
          // browser won't dispatch the `mouseup` and `touchend` events anymore.
          if (_this._lastPointerEvent) {
            _this._pointerUp(_this._lastPointerEvent);
          }
        };

        _this._document = document;
        _this.tabIndex = parseInt(tabIndex) || 0;

        _this._runOutsizeZone(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var element = elementRef.nativeElement;
          element.addEventListener('mousedown', _this._pointerDown, activeEventOptions);
          element.addEventListener('touchstart', _this._pointerDown, activeEventOptions);
        });

        return _this;
      }
      /**
       * Whether the slider is inverted.
       * @return {?}
       */


      _createClass(MatSlider, [{
        key: "invert",
        get: function get() {
          return this._invert;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

          if (this._value === null) {
            this.value = this._min;
          }

          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */

      }, {
        key: "step",
        get: function get() {
          return this._step;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);

          if (this._step % 1 !== 0) {
            this._roundToDecimal =
            /** @type {?} */
            this._step.toString().split('.').pop().length;
          } // Since this could modify the label, we need to notify the change detection.


          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */

      }, {
        key: "thumbLabel",
        get: function get() {
          return this._thumbLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */

      }, {
        key: "tickInterval",
        get: function get() {
          return this._tickInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value === 'auto') {
            this._tickInterval = 'auto';
          } else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value,
            /** @type {?} */
            this._tickInterval);
          } else {
            this._tickInterval = 0;
          }
        }
        /**
         * Value of the slider.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          // If the value needs to be read and it is still uninitialized, initialize it to the min.
          if (this._value === null) {
            this.value = this._min;
          }

          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (v !== this._value) {
            /** @type {?} */
            var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.

            if (this._roundToDecimal) {
              value = parseFloat(value.toFixed(this._roundToDecimal));
            }

            this._value = value;
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the slider is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The value to be used for display purposes.
         * @return {?}
         */

      }, {
        key: "displayValue",
        get: function get() {
          if (this.displayWith) {
            // Value is never null but since setters and getters cannot have
            // different types, the value getter is also typed to return null.
            return this.displayWith(
            /** @type {?} */
            this.value);
          } // Note that this could be improved further by rounding something like 0.999 to 1 or
          // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
          // every change detection cycle.


          if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
          }

          return this.value || 0;
        }
        /**
         * set focus to the host element
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._focusHostElement(options);
        }
        /**
         * blur the host element
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this._blurHostElement();
        }
        /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */

      }, {
        key: "percent",
        get: function get() {
          return this._clamp(this._percent);
        }
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */

      }, {
        key: "_invertAxis",
        get: function get() {
          // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
          // top. However from a y-axis standpoint this is inverted.
          return this.vertical ? !this.invert : this.invert;
        }
        /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */

      }, {
        key: "_isMinValue",
        get: function get() {
          return this.percent === 0;
        }
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */

      }, {
        key: "_thumbGap",
        get: function get() {
          if (this.disabled) {
            return DISABLED_THUMB_GAP;
          }

          if (this._isMinValue && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
          }

          return 0;
        }
        /**
         * CSS styles for the track background element.
         * @return {?}
         */

      }, {
        key: "_trackBackgroundStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '-' : '';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the track fill element.
         * @return {?}
         */

      }, {
        key: "_trackFillStyles",
        get: function get() {
          /** @type {?} */
          var percent = this.percent;
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '' : '-';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")"),
            // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
            // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
            // the value of the slider is 0, we can easily get into this situation. We force a
            // recalculation by changing the element's `display` when it goes from 0 to any other value.
            display: percent === 0 ? 'none' : ''
          };
        }
        /**
         * CSS styles for the ticks container element.
         * @return {?}
         */

      }, {
        key: "_ticksContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
          /** @type {?} */

          var offset = this._tickIntervalPercent / 2 * 100;
          return {
            'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
          };
        }
        /**
         * CSS styles for the ticks element.
         * @return {?}
         */

      }, {
        key: "_ticksStyles",
        get: function get() {
          /** @type {?} */
          var tickSize = this._tickIntervalPercent * 100;
          /** @type {?} */

          var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
          // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
          // ticks 180 degrees so we're really cutting off the end edge abd not the start.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
          /** @type {?} */

          var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
          /** @type {?} */

          var styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
          };

          if (this._isMinValue && this._thumbGap) {
            /** @type {?} */
            var side;

            if (this.vertical) {
              side = this._invertAxis ? 'Bottom' : 'Top';
            } else {
              side = this._invertAxis ? 'Right' : 'Left';
            }

            styles["padding".concat(side)] = "".concat(this._thumbGap, "px");
          }

          return styles;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_thumbContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
          /** @type {?} */

          var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
          return {
            'transform': "translate".concat(axis, "(-").concat(offset, "%)")
          };
        }
        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         * @return {?}
         */

      }, {
        key: "_shouldInvertMouseCoords",
        value: function _shouldInvertMouseCoords() {
          return this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        }
        /**
         * The language direction for this slider element.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDirection",
        value: function _getDirection() {
          return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            _this2._isActive = !!origin && origin !== 'keyboard';

            _this2._changeDetectorRef.detectChanges();
          });

          if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this2._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
          element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
          this._lastPointerEvent = null;

          this._removeGlobalEvents();

          this._focusMonitor.stopMonitoring(this._elementRef);

          this._dirChangeSubscription.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onMouseenter",
        value: function _onMouseenter() {
          if (this.disabled) {
            return;
          } // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.


          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.
          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
              this._increment(10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
              this._increment(-10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
              this.value = this.max;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
              this.value = this.min;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
              // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
              // inverted slider the thumb moves in that direction. However for a blind user, nothing
              // about the slider indicates that it is inverted. They will expect left to be decrement,
              // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
              // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
              // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
              // sighted users, therefore we do not swap the meaning.
              this._increment(this._getDirection() == 'rtl' ? 1 : -1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
              this._increment(1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
              // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
              this._increment(this._getDirection() == 'rtl' ? -1 : 1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
              this._increment(-1);

              break;

            default:
              // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
              // it.
              return;
          }

          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }

          this._isSliding = true;
          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onKeyup",
        value: function _onKeyup() {
          this._isSliding = false;
        }
        /**
         * Binds our global move and end events. They're bound at the document level and only while
         * dragging so that the user doesn't have to keep their pointer exactly over the slider
         * as they're swiping across the screen.
         * @private
         * @param {?} triggerEvent
         * @return {?}
         */

      }, {
        key: "_bindGlobalEvents",
        value: function _bindGlobalEvents(triggerEvent) {
          if (typeof this._document !== 'undefined' && this._document) {
            /** @type {?} */
            var body = this._document.body;
            /** @type {?} */

            var isTouch = isTouchEvent(triggerEvent);
            /** @type {?} */

            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var endEventName = isTouch ? 'touchend' : 'mouseup';
            body.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            body.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              body.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }
          }

          if (typeof window !== 'undefined' && window) {
            window.addEventListener('blur', this._windowBlur);
          }
        }
        /**
         * Removes any global event listeners that we may have added.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalEvents",
        value: function _removeGlobalEvents() {
          if (typeof this._document !== 'undefined' && this._document) {
            /** @type {?} */
            var body = this._document.body;
            body.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            body.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            body.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            body.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            body.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);
          }

          if (typeof window !== 'undefined' && window) {
            window.removeEventListener('blur', this._windowBlur);
          }
        }
        /**
         * Increments the slider by the given number of steps (negative number decrements).
         * @private
         * @param {?} numSteps
         * @return {?}
         */

      }, {
        key: "_increment",
        value: function _increment(numSteps) {
          this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
        }
        /**
         * Calculate the new value from the new physical location. The value will always be snapped.
         * @private
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_updateValueFromPosition",
        value: function _updateValueFromPosition(pos) {
          if (!this._sliderDimensions) {
            return;
          }
          /** @type {?} */


          var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
          /** @type {?} */

          var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
          /** @type {?} */

          var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

          /** @type {?} */

          var percent = this._clamp((posComponent - offset) / size);

          if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
          } // Since the steps may not divide cleanly into the max value, if the user
          // slid to 0 or 100 percent, we jump to the min/max value. This approach
          // is slightly more intuitive than using `Math.ceil` below, because it
          // follows the user's pointer closer.


          if (percent === 0) {
            this.value = this.min;
          } else if (percent === 1) {
            this.value = this.max;
          } else {
            /** @type {?} */
            var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.

            /** @type {?} */


            var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

            this.value = this._clamp(closestValue, this.min, this.max);
          }
        }
        /**
         * Emits a change event if the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._controlValueAccessorChangeFn(this.value);

          this.valueChange.emit(this.value);
          this.change.emit(this._createChangeEvent());
        }
        /**
         * Emits an input event when the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitInputEvent",
        value: function _emitInputEvent() {
          this.input.emit(this._createChangeEvent());
        }
        /**
         * Updates the amount of space between ticks as a percentage of the width of the slider.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTickIntervalPercent",
        value: function _updateTickIntervalPercent() {
          if (!this.tickInterval || !this._sliderDimensions) {
            return;
          }

          if (this.tickInterval == 'auto') {
            /** @type {?} */
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */

            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            /** @type {?} */

            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */

            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
          } else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
          }
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

          /** @type {?} */
          var event = new MatSliderChange();
          event.source = this;
          event.value = value;
          return event;
        }
        /**
         * Calculates the percentage of the slider that a value is.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_calculatePercentage",
        value: function _calculatePercentage(value) {
          return ((value || 0) - this.min) / (this.max - this.min);
        }
        /**
         * Calculates the value a percentage of the slider corresponds to.
         * @private
         * @param {?} percentage
         * @return {?}
         */

      }, {
        key: "_calculateValue",
        value: function _calculateValue(percentage) {
          return this.min + percentage * (this.max - this.min);
        }
        /**
         * Return a number between two numbers.
         * @private
         * @param {?} value
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */

      }, {
        key: "_clamp",
        value: function _clamp(value) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return Math.max(min, Math.min(value, max));
        }
        /**
         * Get the bounding client rect of the slider track element.
         * The track is used rather than the native element to ignore the extra space that the thumb can
         * take up.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSliderDimensions",
        value: function _getSliderDimensions() {
          return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
        }
        /**
         * Focuses the native element.
         * Currently only used to allow a blur event to fire but will be used with keyboard input later.
         * @private
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusHostElement",
        value: function _focusHostElement(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Blurs the native element.
         * @private
         * @return {?}
         */

      }, {
        key: "_blurHostElement",
        value: function _blurHostElement() {
          this._elementRef.nativeElement.blur();
        }
        /**
         * Runs a callback inside of the NgZone, if possible.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_runInsideZone",
        value: function _runInsideZone(fn) {
          // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
          this._ngZone ? this._ngZone.run(fn) : fn();
        }
        /**
         * Runs a callback outside of the NgZone, if possible.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_runOutsizeZone",
        value: function _runOutsizeZone(fn) {
          // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
          this._ngZone ? this._ngZone.runOutsideAngular(fn) : fn();
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }]);

      return MatSlider;
    }(_MatSliderMixinBase);

    MatSlider.ɵfac = function MatSlider_Factory(t) {
      return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8));
    };

    MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSlider,
      selectors: [["mat-slider"]],
      viewQuery: function MatSlider_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
        }
      },
      hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
      hostVars: 28,
      hostBindings: function MatSlider_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSlider_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("keyup", function MatSlider_keyup_HostBindingHandler() {
            return ctx._onKeyup();
          })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
            return ctx._onMouseenter();
          })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
            return $event.preventDefault();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._invertAxis)("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue)("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue && ctx._thumbGap && ctx._invertAxis)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        color: "color",
        tabIndex: "tabIndex",
        invert: "invert",
        max: "max",
        min: "min",
        value: "value",
        step: "step",
        thumbLabel: "thumbLabel",
        tickInterval: "tickInterval",
        vertical: "vertical",
        displayWith: "displayWith"
      },
      outputs: {
        change: "change",
        input: "input",
        valueChange: "valueChange"
      },
      exportAs: ["matSlider"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 6,
      consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
      template: function MatSlider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackBackgroundStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackFillStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksContainerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._thumbContainerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]],
      styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSlider.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    MatSlider.propDecorators = {
      invert: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      step: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      thumbLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tickInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _sliderWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['sliderWrapper']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slider',
          exportAs: 'matSlider',
          providers: [MAT_SLIDER_VALUE_ACCESSOR],
          host: {
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            // On Safari starting to slide temporarily triggers text selection mode which
            // show the wrong cursor. We prevent it by stopping the `selectstart` event.
            '(selectstart)': '$event.preventDefault()',
            'class': 'mat-slider mat-focus-indicator',
            'role': 'slider',
            '[tabIndex]': 'tabIndex',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            // Class binding which is only used by the test harness as there is no other
            // way for the harness to detect if mouse coordinates need to be inverted.
            '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
          inputs: ['disabled', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sliderWrapper']
        }]
      });
    })();

    if (false) {}
    /**
     * Returns whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the coordinates of a touch or mouse event relative to the viewport.
     * @param {?} event
     * @return {?}
     */


    function getPointerPositionOnPage(event) {
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

      /** @type {?} */
      var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
      return {
        x: point.clientX,
        y: point.clientY
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/slider-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSliderModule = function MatSliderModule() {
      _classCallCheck(this, MatSliderModule);
    };

    MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSliderModule
    });
    MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSliderModule_Factory(t) {
        return new (t || MatSliderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, {
        declarations: function declarations() {
          return [MatSlider];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlider]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slider.js.map

    /***/

  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/auto-scale/auto-scale.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/components/auto-scale/auto-scale.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsComponentsAutoScaleAutoScaleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"zoom_out_parent\">\n  <div class=\"zoom_out\" #zoomOutElement\n   [style.--scale-width]=\"(width / zoomOutElement.scrollWidth)| valueOrDefault: 1\"\n         [style.--scale-height]=\"(height / zoomOutElement.scrollHeight) |valueOrDefault: 1\"\n  >\n    <ng-content></ng-content>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/components-example/components-example.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/examples/components-example/components-example.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamplesComponentsExampleComponentsExampleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<gewd-auto-scale [width]=\"outerSize.value\" [height]=\"outerSize.value\">\n  <div style=\"background: green;\"\n  [style.width.px]=\"innerSize.value\"\n  [style.height.px]=\"innerSize.value\"\n  >\n    200x200 <br/> Inner\n  </div>\n</gewd-auto-scale>\n\n<br/>\n\n  <mat-label>Outer Size: {{outerSize.value}}px</mat-label>\n  <mat-slider min=\"100\" max=\"400\" #outerSize>\n  </mat-slider>\n\n\n<br />\n<mat-label>Inner Size: {{innerSize.value}}px</mat-label>\n<mat-slider min=\"100\" max=\"400\" value=\"200\" #innerSize>\n</mat-slider>\n\n<gewd-auto-scale width='120' height='120'>\n  <img [src]='imgSource' gewdAutoScaleImg alt='test image'/>\n</gewd-auto-scale>\n\n<button (click)='toggleImgSource()'>Toggle IMG source</button>\n";
    /***/
  },

  /***/
  "./src/app/examples/components-example/components-example.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/examples/components-example/components-example.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamplesComponentsExampleComponentsExampleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9jb21wb25lbnRzLWV4YW1wbGUvY29tcG9uZW50cy1leGFtcGxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/examples/components-example/components-example.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/examples/components-example/components-example.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ComponentsExampleComponent */

  /***/
  function srcAppExamplesComponentsExampleComponentsExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsExampleComponent", function () {
      return ComponentsExampleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var img1 = '/assets/example_md.png';
    var img2 = '/assets/example-bg.png';

    var ComponentsExampleComponent = /*#__PURE__*/function () {
      function ComponentsExampleComponent() {
        _classCallCheck(this, ComponentsExampleComponent);

        this.imgSource = img1;
      }

      _createClass(ComponentsExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleImgSource",
        value: function toggleImgSource() {
          this.imgSource = this.imgSource === img1 ? img2 : img1;
        }
      }]);

      return ComponentsExampleComponent;
    }();

    ComponentsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-components-example',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./components-example.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/examples/components-example/components-example.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./components-example.component.css */
      "./src/app/examples/components-example/components-example.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ComponentsExampleComponent);
    /***/
  },

  /***/
  "./src/app/examples/components-example/components-example.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/examples/components-example/components-example.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ComponentsExampleModule */

  /***/
  function srcAppExamplesComponentsExampleComponentsExampleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsExampleModule", function () {
      return ComponentsExampleModule;
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


    var _components_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-example.component */
    "./src/app/examples/components-example/components-example.component.ts");
    /* harmony import */


    var _gewd_components_auto_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gewd/components/auto-scale */
    "../../libs/components/auto-scale/index.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var ComponentsExampleModule = /*#__PURE__*/function () {
      function ComponentsExampleModule() {
        _classCallCheck(this, ComponentsExampleModule);
      }

      _createClass(ComponentsExampleModule, [{
        key: "getComponents",
        value: function getComponents() {
          return [{
            name: 'ComponentsExample',
            componentType: _components_example_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsExampleComponent"]
          }];
        }
      }]);

      return ComponentsExampleModule;
    }();

    ComponentsExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_example_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsExampleComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _gewd_components_auto_scale__WEBPACK_IMPORTED_MODULE_4__["AutoScaleModule"], _gewd_components_auto_scale__WEBPACK_IMPORTED_MODULE_4__["AutoScaleModule"], _gewd_components_auto_scale__WEBPACK_IMPORTED_MODULE_4__["AutoScaleModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
    })], ComponentsExampleModule);
    /***/
  }
}]);
//# sourceMappingURL=components-example-module-es5.js.map