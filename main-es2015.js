(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7VV":
/*!**********************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/public_api.ts ***!
  \**********************************************************/
/*! exports provided: CustomFormControlModule, CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-form-control.module */ "mkVm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"]; });

/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-form-control.component */ "nnzV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__["CustomFormControlComponent"]; });





/***/ }),

/***/ "+DCT":
/*!*****************************************************!*\
  !*** ./libs/ng-utils/css-props/css-props.module.ts ***!
  \*****************************************************/
/*! exports provided: CssPropsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return CssPropsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _css_props_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-props.directive */ "/xyV");




/** @dynamic - allows Document in ngc build */
let CssPropsModule = class CssPropsModule {
};
CssPropsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_css_props_directive__WEBPACK_IMPORTED_MODULE_3__["CSSPropsDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
    })
], CssPropsModule);



/***/ }),

/***/ "+fz5":
/*!***************************************************!*\
  !*** ./apps/demo/src/environments/environment.ts ***!
  \***************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    modules: [
    // NgInspectModule
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


/***/ }),

/***/ "+qdE":
/*!********************************************************************!*\
  !*** ./apps/demo/src/app/example-panel/example-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: ExamplePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePanelComponent", function() { return ExamplePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_example_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./example-panel.component.html */ "4pbO");
/* harmony import */ var _example_panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-panel.component.css */ "cFVl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExamplePanelComponent = class ExamplePanelComponent {
    constructor() {
        this.packageName = '';
        this.packageTitle = '';
        this.moduleName = '';
        this.componentName = '';
    }
    ngOnInit() {
    }
    applyLazyModuleInputs(lazyModuleComponent) {
        lazyModuleComponent.moduleAlias = this.moduleName;
        lazyModuleComponent.component = this.componentName;
        lazyModuleComponent.setComponent();
    }
};
ExamplePanelComponent.ctorParameters = () => [];
ExamplePanelComponent.propDecorators = {
    packageName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    packageTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    moduleName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    componentName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExamplePanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-example-panel',
        template: _raw_loader_example_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_example_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExamplePanelComponent);



/***/ }),

/***/ "+vhj":
/*!**********************************************!*\
  !*** ./apps/demo/src/app/app.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.dynamic-portal-border {\n  background: darkgreen;\n  padding: 5px;\n  margin: 15px 0;\n  border: 2px dashed green;\n  display: block;\n}\n.npm-link {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZW1vdmUgdGVtcGxhdGUgY29kZSBiZWxvd1xuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5keW5hbWljLXBvcnRhbC1ib3JkZXIge1xuICBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ucG0tbGluayB7XG4gIGhlaWdodDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "/EEl":
/*!********************************************!*\
  !*** ./libs/markdown/module/public_api.ts ***!
  \********************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.module */ "r77W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return _markdown_module__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"]; });

/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ "zJp2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__["RenderMarkdownComponent"]; });





/***/ }),

/***/ "/xyV":
/*!********************************************************!*\
  !*** ./libs/ng-utils/css-props/css-props.directive.ts ***!
  \********************************************************/
/*! exports provided: CSSPropsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return CSSPropsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-props.service */ "T9O9");



/*
 * Workaround for setting CSS custom properties:
 * https://github.com/angular/angular/issues/9343
 *
 * Cannot work for any style properties.
 */
let CSSPropsDirective = class CSSPropsDirective {
    constructor(element, cssPropsService) {
        this.element = element;
        this.cssPropsService = cssPropsService;
    }
    ngOnChanges({ cssProps }) {
        this.cssPropsService.updateElementVars(this.element.nativeElement, cssProps.currentValue);
    }
};
CSSPropsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"] }
];
CSSPropsDirective.propDecorators = {
    cssProps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CSSPropsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[cssProps]',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]])
], CSSPropsDirective);



/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./apps/demo/src/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/gewd/gewd/apps/demo/src/main.ts */"Hasg");


/***/ }),

/***/ "0/xO":
/*!****************************************************!*\
  !*** ./libs/markdown/contracts/default-options.ts ***!
  \****************************************************/
/*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function() { return DEFAULT_PRISM_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function() { return DEFAULT_MERMAID_OPTIONS; });
const DEFAULT_PRISM_OPTIONS = {
    assetPath: './assets/prism/',
    languageFileType: 'js',
    languageMap: {
        ts: 'typescript'
    }
};
// https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults
const DEFAULT_MERMAID_OPTIONS = {
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true
    },
    startOnLoad: false,
    theme: 'neutral',
    themeCSS: '.label { font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif !important; font-size: 15px; } .label foreignObject { overflow: visible; }'
};


/***/ }),

/***/ "0LWQ":
/*!********************************************************!*\
  !*** ./libs/components/highlight-editor/public_api.ts ***!
  \********************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.service */ "K9I7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["HighlightService"]; });

/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight-editor.component */ "IAcx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__["HighlightEditorComponent"]; });

/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.functions */ "S0EJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return _editor_functions__WEBPACK_IMPORTED_MODULE_2__["handleTab"]; });

/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.keys */ "Gdju");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_BACKSPACE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_DELETE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ESCAPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_TAB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_UP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ARROW_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_SHIFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ALT", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_ALT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_CTRL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_META", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_META"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["KEY_CAPS_LOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["ALL_CHARS_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function() { return _editor_keys__WEBPACK_IMPORTED_MODULE_3__["IGNORE_KEY_EVENTS"]; });

/* harmony import */ var _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight-editor.module */ "p1Yq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__["HighlightEditorModule"]; });








/***/ }),

/***/ "0QHq":
/*!****************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/public_api.ts ***!
  \****************************************************/
/*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-portal.module */ "iv+R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"]; });

/* harmony import */ var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-portal/dynamic-portal.component */ "slkw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__["DynamicPortalComponent"]; });

/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-hub.service */ "L4a7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalSourceAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]; });

/* harmony import */ var _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal-source.directive */ "FYco");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__["PortalSourceDirective"]; });







/***/ }),

/***/ "1dfk":
/*!****************************************************************!*\
  !*** ./libs/mat-utils/material-icons/register_icons.module.ts ***!
  \****************************************************************/
/*! exports provided: REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return REGISTORY_ICONS_PAIR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return RegisterIconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register_icons */ "esWc");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var RegisterIconsModule_1;






const REGISTORY_ICONS_PAIR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/mat-utils/RegistryIconsPair');
let RegisterIconsModule = RegisterIconsModule_1 = class RegisterIconsModule {
    constructor(iconRegistry, sanitizer, registryIconsPairsArray) {
        for (const iconPair of registryIconsPairsArray) {
            Object(_register_icons__WEBPACK_IMPORTED_MODULE_3__["registerIcons"])(iconRegistry, sanitizer, iconPair);
        }
    }
    static register(useValue) {
        return {
            ngModule: RegisterIconsModule_1,
            providers: [
                { provide: REGISTORY_ICONS_PAIR_TOKEN, useValue, multi: true }
            ]
        };
    }
};
RegisterIconsModule.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [REGISTORY_ICONS_PAIR_TOKEN,] }] }
];
RegisterIconsModule = RegisterIconsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Array])
], RegisterIconsModule);



/***/ }),

/***/ "1qV8":
/*!***********************************************!*\
  !*** ./libs/markdown/contracts/public_api.ts ***!
  \***********************************************/
/*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _worker_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker.interface */ "hR9A");
/* empty/unused harmony star reexport *//* harmony import */ var _default_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-options */ "0/xO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function() { return _default_options__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_PRISM_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function() { return _default_options__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_MERMAID_OPTIONS"]; });





/***/ }),

/***/ "2wmh":
/*!*****************************************!*\
  !*** ./libs/ng-utils/morphdom/index.ts ***!
  \*****************************************/
/*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "aPzk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomService"]; });




/***/ }),

/***/ "3Dq0":
/*!*********************************************************!*\
  !*** ./apps/demo/src/app/markdown-toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: MarkdownToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownToolbarComponent", function() { return MarkdownToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/module */ "PbxA");



let MarkdownToolbarComponent = class MarkdownToolbarComponent {
    constructor(markdown) {
        this.markdown = markdown;
    }
};
MarkdownToolbarComponent.ctorParameters = () => [
    { type: _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__["RenderMarkdownComponent"] }
];
MarkdownToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: ``,
        selector: 'gewd-markdown-toolbar'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__["RenderMarkdownComponent"]])
], MarkdownToolbarComponent);



/***/ }),

/***/ "4jei":
/*!*********************************************!*\
  !*** ./libs/markdown/service/public_api.ts ***!
  \*********************************************/
/*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.service */ "UItG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return _markdown_service__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"]; });

/* harmony import */ var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-cache.service */ "mdMz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"]; });

/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injection-token */ "lgUy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return _injection_token__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"]; });






/***/ }),

/***/ "4pbO":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/demo/src/app/example-panel/example-panel.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel (opened)=\"applyLazyModuleInputs(lazyModuleComponent)\">\n  <mat-expansion-panel-header>\n    <a [href]=\"'https://www.npmjs.com/package/' + packageName\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img [src]=\"'https://img.shields.io/npm/v/' + packageName + '.svg?'\"\n           [alt]=\"packageName + ' NPM Version'\">\n    </a>\n    &nbsp;- {{ packageTitle }}\n  </mat-expansion-panel-header>\n\n  <gewd-lazy-module-component\n    #lazyModuleComponent>\n    <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n");

/***/ }),

/***/ "51S8":
/*!***********************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts ***!
  \***********************************************************************/
/*! exports provided: NgErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return NgErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ng_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ng-error.component.html */ "wfeF");
/* harmony import */ var _ng_error_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-error.component.scss */ "HeaY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handler.service */ "kWME");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "HFY2");








let NgErrorComponent = class NgErrorComponent {
    constructor(errorService, cd, cssProps, element) {
        this.errorService = errorService;
        this.cd = cd;
        this.cssProps = cssProps;
        this.element = element;
        this.showIndex = 0;
        this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.errors$ = this.errorService.error$.pipe(
        // add all errors to an array
        // only keep the newest 10
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])((a, c) => [c, ...a].slice(0, 10), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => value.filter(v => !!v)));
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        cssProps.updateElementVars(element.nativeElement, {
            '--overlay-zindex': errorService.config.zIndex
        });
    }
    ngOnInit() {
        this.errors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroy$)).subscribe(value => {
            this.visible$.next(value.length > 0);
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    hide() {
        this.visible$.next(false);
    }
};
NgErrorComponent.ctorParameters = () => [
    { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_7__["CssPropsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
NgErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ng-error',
        template: _raw_loader_ng_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ng_error_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_7__["CssPropsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], NgErrorComponent);



/***/ }),

/***/ "5G9P":
/*!*********************************************************!*\
  !*** ./libs/ng-utils/css-props/update-dynamic-style.ts ***!
  \*********************************************************/
/*! exports provided: updateDynamicStyle, getStyleElement, replaceCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function() { return updateDynamicStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleElement", function() { return getStyleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceCss", function() { return replaceCss; });
// Todo use @gewd/utils for that?
function updateDynamicStyle(document, styleId, customCss) {
    const style = getStyleElement(document, styleId);
    replaceCss(document, style, customCss);
}
function getStyleElement(document, styleId) {
    const head = document.getElementsByTagName('head')[0];
    const allStyles = head.getElementsByTagName('style');
    let style = null;
    for (let styleIndex = 0; styleIndex < allStyles.length; styleIndex++) {
        const styleInHeader = allStyles.item(styleIndex);
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
        styleTag.childNodes.forEach(child => {
            styleTag.removeChild(child);
        });
    }
    styleTag.appendChild(document.createTextNode(customCss));
}


/***/ }),

/***/ "5NOK":
/*!************************************************!*\
  !*** ./libs/ng-utils/components/public_api.ts ***!
  \************************************************/
/*! exports provided: SimplePagerModule, SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-pager/simple-pager.module */ "EIVg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"]; });

/* harmony import */ var _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-pager/simple-pager.component */ "dk2Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__["SimplePagerComponent"]; });





/***/ }),

/***/ "5aeG":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/demo/src/app/app.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Open Dev-Tools to see the network calls.</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"CodeMirror\"\n                    moduleName=\"codemirror-example\"\n                    componentName=\"CodeMirrorExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n");

/***/ }),

/***/ "64y6":
/*!******************************************!*\
  !*** ./libs/lazy/registry/public_api.ts ***!
  \******************************************/
/*! exports provided: DynamicLoaderRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ "xqI3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function() { return _registry__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"]; });




/***/ }),

/***/ "6L+t":
/*!***********************************************!*\
  !*** ./libs/ng-utils/css-props/public_api.ts ***!
  \***********************************************/
/*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_props_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-props.module */ "+DCT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return _css_props_module__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"]; });

/* harmony import */ var _css_props_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-props.directive */ "/xyV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return _css_props_directive__WEBPACK_IMPORTED_MODULE_1__["CSSPropsDirective"]; });

/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-props.service */ "T9O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]; });

/* harmony import */ var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-css-props */ "XLiS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCssProps", function() { return _update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"]; });

/* harmony import */ var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-dynamic-style */ "5G9P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function() { return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["updateDynamicStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleElement", function() { return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["getStyleElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceCss", function() { return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["replaceCss"]; });

/* harmony import */ var _element_css_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-css.service */ "KRRg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return _element_css_service__WEBPACK_IMPORTED_MODULE_5__["ElementCssService"]; });









/***/ }),

/***/ "7DNQ":
/*!******************************************!*\
  !*** ./libs/markdown/contracts/index.ts ***!
  \******************************************/
/*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "1qV8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PRISM_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MERMAID_OPTIONS"]; });




/***/ }),

/***/ "B+Hh":
/*!********************************************!*\
  !*** ./libs/markdown/utils/simple-hash.ts ***!
  \********************************************/
/*! exports provided: simpleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleHash", function() { return simpleHash; });
function simpleHash(str) {
    let hash = 0, i, chr;
    if (!str || str.length === 0)
        return '';
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        // tslint:disable-next-line:no-bitwise
        hash = ((hash << 5) - hash) + chr;
        // tslint:disable-next-line:no-bitwise
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}


/***/ }),

/***/ "BBkK":
/*!******************************************************!*\
  !*** ./libs/ng-utils/morphdom/morphdom.directive.ts ***!
  \******************************************************/
/*! exports provided: MorphdomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return MorphdomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morphdom.service */ "BKhR");



let MorphdomDirective = class MorphdomDirective {
    constructor(element, morphService) {
        this.element = element;
        this.morphService = morphService;
        this.tagName = 'div';
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges({ morphDom }) {
        if (morphDom && morphDom.currentValue) {
            this.morphService.morphElement(this.element, `<${this.tagName}>${morphDom.currentValue}</${this.tagName}>`, this.options);
            this.done.emit(this.element);
        }
    }
};
MorphdomDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"] }
];
MorphdomDirective.propDecorators = {
    morphDom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['morphDom',] }],
    tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    done: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
MorphdomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line:directive-selector
        selector: '[morphDom]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]])
], MorphdomDirective);



/***/ }),

/***/ "BKhR":
/*!****************************************************!*\
  !*** ./libs/ng-utils/morphdom/morphdom.service.ts ***!
  \****************************************************/
/*! exports provided: MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return MorphdomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morphdom */ "+tic");



let MorphdomService = class MorphdomService {
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    morphElement(element, newElementContent, options) {
        this.ngZone.runOutsideAngular(() => {
            Object(morphdom__WEBPACK_IMPORTED_MODULE_2__["default"])(element.nativeElement, newElementContent, options);
        });
    }
};
MorphdomService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
MorphdomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MorphdomService);



/***/ }),

/***/ "BLap":
/*!*************************************!*\
  !*** ./libs/lazy/registry/index.ts ***!
  \*************************************/
/*! exports provided: DynamicLoaderRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "64y6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"]; });




/***/ }),

/***/ "DCkP":
/*!*****************************************!*\
  !*** ./apps/demo/src/app/app.module.ts ***!
  \*****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "mcRc");
/* harmony import */ var _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown */ "PbxA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @gewd/markdown/contracts */ "7DNQ");
/* harmony import */ var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gewd/lazy/loader */ "QhBr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "zzJY");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gewd/markdown/service */ "mMUf");
/* harmony import */ var _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./md-cache-example.service */ "sd5n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./markdown-toolbar.component */ "3Dq0");
/* harmony import */ var _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @gewd/ng-utils/ng-error-overlay */ "rZxZ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "+fz5");
/* harmony import */ var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @gewd/components/highlight-editor */ "W81V");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../libs/mat-utils/material-icons */ "mRMK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./example-panel/example-panel.component */ "+qdE");
/* harmony import */ var _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @gewd/mat-utils/custom-form-control */ "gICU");
/* harmony import */ var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @gewd/lazy/utils */ "n65z");





























const marked = () => new Worker(__webpack__worker__0, undefined);
const markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => Promise.all(/*! import() | markdown-example-module */[__webpack_require__.e("default~codemirror-example-module~markdown-example-module"), __webpack_require__.e("markdown-example-module")]).then(__webpack_require__.bind(null, /*! ./examples/markdown-example/markdown-example.module */ "B/di"))
    .then(({ MarkdownExampleModule }) => MarkdownExampleModule));
const codeMirrorExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => Promise.all(/*! import() | codemirror-example-module */[__webpack_require__.e("default~codemirror-example-module~markdown-example-module"), __webpack_require__.e("codemirror-example-module")]).then(__webpack_require__.bind(null, /*! ./examples/codemirror-example/codemirror-example.module */ "u4Pf"))
    .then(({ CodemirrorExampleModule }) => CodemirrorExampleModule));
const lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | lazyload-example-module */ "lazyload-example-module").then(__webpack_require__.bind(null, /*! ./examples/lazyload-example/lazyload-example.module */ "j0+E"))
    .then(({ LazyloadExampleModule }) => LazyloadExampleModule));
const componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | components-example-module */ "components-example-module").then(__webpack_require__.bind(null, /*! ./examples/components-example/components-example.module */ "6RHk"))
    .then(({ ComponentsExampleModule }) => ComponentsExampleModule));
const portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | lazy-portal-module */ "lazy-portal-module").then(__webpack_require__.bind(null, /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */ "uy6E"))
    .then(({ PortalModule }) => PortalModule));
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["MarkdownToolbarComponent"], _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__["ExamplePanelComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([], { relativeLinkResolution: 'legacy' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__["GewdLazyLoaderModule"].withLazy([
                {
                    moduleName: 'markdown-example',
                    moduleConfig: {
                        load: markdownExampleLazy
                    }
                },
                {
                    moduleName: 'codemirror-example',
                    moduleConfig: {
                        load: codeMirrorExampleLazy
                    }
                },
                {
                    moduleName: 'lazyload-example',
                    moduleConfig: {
                        load: lazyLoadExampleLazy
                    }
                },
                {
                    moduleName: 'portal-module',
                    moduleConfig: {
                        load: portalLazy
                    }
                },
                {
                    moduleName: 'components-example',
                    moduleConfig: {
                        load: componentsExampleLazy
                    }
                }
            ]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__["DynamicPortalModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__["NgErrorOverlayModule"],
            ..._environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].modules,
            _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__["HighlightEditorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__["CustomFormControlModule"],
            _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__["RegisterIconsModule"].register({
                pathToIcons: './assets/material_icons',
                iconArray: [
                    'add',
                    'art_track',
                ]
            }),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"]
        ],
        providers: [
            {
                provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__["MarkdownOptionsInjectorToken"],
                useValue: {
                    getWorker: marked,
                    options: {
                        prism: Object.assign(Object.assign({}, _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PRISM_OPTIONS"]), { 
                            /** if needed **/
                            languageFileType: 'min.js', languageMap: {
                                ts: 'typescript',
                                cs: 'csharp' // additional
                            }, highlightMarkdownCode: true, additionalPluginPaths: [
                                'assets/prism/prism-css-extras.min.js',
                                'assets/prism/prism-plugin-inline-color.worker-func.js',
                                'assets/prism/prism-plugin-bracket-match.worker-func.js'
                            ] })
                    },
                    mermaidPath: 'mermaid.min.js',
                    mermaidOptions: {
                        theme: 'neutral',
                    }
                }
            },
            _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__["MdCacheExampleService"],
            {
                provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__["MarkdownCacheService"],
                useExisting: _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__["MdCacheExampleService"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!./markdown.worker.ts */ "dTHw")))

/***/ }),

/***/ "DQPP":
/*!****************************************!*\
  !*** ./libs/lazy/loader/public_api.ts ***!
  \****************************************/
/*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy.component */ "v0Je");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return _lazy_component__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"]; });

/* harmony import */ var _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gewd-lazy-loader.module */ "bgcH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_LAZY_LOADED_MODULE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__["GewdLazyLoaderModule"]; });

/* harmony import */ var _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-module.component */ "LTcb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__["LazyModuleComponent"]; });






/***/ }),

/***/ "DVXd":
/*!*******************************************!*\
  !*** ./libs/ng-utils/components/index.ts ***!
  \*******************************************/
/*! exports provided: SimplePagerModule, SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "5NOK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SimplePagerComponent"]; });




/***/ }),

/***/ "E8Ja":
/*!*************************************!*\
  !*** ./libs/markdown/utils/lazy.ts ***!
  \*************************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
class Lazy {
    constructor(loader) {
        this.loader = loader;
    }
    static create(loader) {
        return new Lazy(loader);
    }
    getValue() {
        if (this.cachedPromise) {
            return this.cachedPromise;
        }
        return this.cachedPromise = this.loader();
    }
}


/***/ }),

/***/ "EIVg":
/*!**********************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.module.ts ***!
  \**********************************************************************/
/*! exports provided: SimplePagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return SimplePagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _simple_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-pager.component */ "dk2Z");




let SimplePagerModule = class SimplePagerModule {
};
SimplePagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_simple_pager_component__WEBPACK_IMPORTED_MODULE_3__["SimplePagerComponent"]],
        exports: [
            _simple_pager_component__WEBPACK_IMPORTED_MODULE_3__["SimplePagerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]
    })
], SimplePagerModule);



/***/ }),

/***/ "FYco":
/*!*****************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/portal-source.directive.ts ***!
  \*****************************************************************/
/*! exports provided: PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return PortalSourceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-hub.service */ "L4a7");



let PortalSourceDirective = class PortalSourceDirective {
    constructor(templateRef, hub) {
        this.templateRef = templateRef;
        this.hub = hub;
    }
    ngOnChanges(changes) {
        const keyChange = changes['key'];
        if (keyChange) {
            if (keyChange.previousValue) {
                this.unregisterTemplate(keyChange.previousValue);
            }
            this.registerTemplate(keyChange.currentValue);
        }
    }
    ngOnDestroy() {
        this.unregisterTemplate(this.key);
    }
    ngOnInit() {
        if (!this.key) {
            return;
        }
        this.registerTemplate(this.key);
    }
    registerTemplate(key) {
        this.hub.registerTemplate(key, this.templateRef);
    }
    unregisterTemplate(key) {
        this.hub.unregisterTemplate(key);
    }
};
PortalSourceDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"] }
];
PortalSourceDirective.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['dynamicPortalSource',] }]
};
PortalSourceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[dynamicPortalSource]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]])
], PortalSourceDirective);



/***/ }),

/***/ "GRi0":
/*!******************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/public_api.ts ***!
  \******************************************************/
/*! exports provided: NgErrorComponent, NgErrorOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-error/ng-error.component */ "51S8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"]; });

/* harmony import */ var _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-error/ng-error-overlay.module */ "MBLM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__["NgErrorOverlayModule"]; });





/***/ }),

/***/ "Gdju":
/*!*********************************************************!*\
  !*** ./libs/components/highlight-editor/editor.keys.ts ***!
  \*********************************************************/
/*! exports provided: KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return KEY_BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return KEY_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return KEY_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return KEY_ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return KEY_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function() { return KEY_ARROW_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function() { return KEY_ARROW_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function() { return KEY_ARROW_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function() { return KEY_ARROW_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function() { return KEY_SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ALT", function() { return KEY_ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function() { return KEY_CTRL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_META", function() { return KEY_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function() { return KEY_CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function() { return ALL_CHARS_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function() { return IGNORE_KEY_EVENTS; });
const KEY_BACKSPACE = "Backspace";
const KEY_DELETE = "Delete";
const KEY_ENTER = "Enter";
const KEY_ESCAPE = "Escape";
const KEY_TAB = "Tab";
const KEY_ARROW_UP = "ArrowUp";
const KEY_ARROW_DOWN = "ArrowDown";
const KEY_ARROW_LEFT = "ArrowLeft";
const KEY_ARROW_RIGHT = "ArrowRight";
const KEY_SHIFT = "Shift";
const KEY_ALT = "Alt";
const KEY_CTRL = "Control";
const KEY_META = "Meta";
const KEY_CAPS_LOCK = "CapsLock";
const ALL_CHARS_REGEX = /^[1234567890a-zA-ZäöüÄÖÜ,;.:\-_#+`´?(){}|\[\]@]+$/;
const IGNORE_KEY_EVENTS = [
    KEY_ARROW_UP, KEY_ARROW_DOWN,
    KEY_ARROW_LEFT, KEY_ARROW_RIGHT,
    KEY_SHIFT, KEY_ALT, KEY_CTRL,
    KEY_META, KEY_CAPS_LOCK, KEY_ESCAPE
];


/***/ }),

/***/ "HFY2":
/*!******************************************!*\
  !*** ./libs/ng-utils/css-props/index.ts ***!
  \******************************************/
/*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "6L+t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CSSPropsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CssPropsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCssProps", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateCssProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateDynamicStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleElement", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getStyleElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceCss", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["replaceCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ElementCssService"]; });




/***/ }),

/***/ "Hasg":
/*!*******************************!*\
  !*** ./apps/demo/src/main.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "DCkP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "+fz5");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .then(moduleRef => {
        const applicationRef = moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        const componentRef = applicationRef.components[0];
        // allows to run `ng.profiler.timeChangeDetection();`
        Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["enableDebugTools"])(componentRef);
    }).catch(err => window['console'].error(err));
});


/***/ }),

/***/ "HeaY":
/*!*************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: #454545DD;\n  overflow: auto;\n  z-index: var(--overlay-zindex);\n}\n.fullscreen simple-pager {\n  height: calc(100% - 2rem);\n  padding: 1rem;\n}\n.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one {\n  opacity: 0;\n}\n.fullscreen ::ng-deep .error-name {\n  display: none;\n}\n.close-button {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n}\n.error-next-to-navigation {\n  color: red;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25nLWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUFGO0FBRUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFBSjtBQUdNO0VBQ0UsVUFBQTtBQURSO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFTQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQU5GO0FBU0E7RUFDRSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTkYiLCJmaWxlIjoibmctZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG5cbiAgYmFja2dyb3VuZDogIzQ1NDU0NUREO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogdmFyKC0tb3ZlcmxheS16aW5kZXgpO1xuXG4gIHNpbXBsZS1wYWdlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5uYXZpZ2F0aW9uLXJvdy1wYW5lbC5vbmx5LW9uZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5lcnJvci1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAycmVtO1xuICByaWdodDogMnJlbTtcbn1cblxuLmVycm9yLW5leHQtdG8tbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "I0mV":
/*!**************************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #2e2e2e;\n  display: block;\n  border: 1px solid lightgray;\n  padding: 4px;\n  --editor-min-height: 100px;\n  --editor-max-height: 100px;\n  --editor-font-size: 14px;\n  --editor-line-height: 1.5;\n  overflow-y: auto;\n  min-height: var(--editor-min-height);\n  max-height: var(--editor-max-height);\n}\n:host :host-context(.mat-form-field) {\n  border: 0;\n  padding: 0;\n  background: inherit;\n  width: 100%;\n}\n.editor {\n  position: relative;\n  padding: 0;\n  -moz-tab-size: 2ch;\n    -o-tab-size: 2ch;\n       tab-size: 2ch;\n  text-align: left;\n  box-sizing: border-box;\n  font-family: \"Fira code\", \"Fira Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: var(--editor-font-size);\n  line-height: var(--editor-line-height);\n  height: 100%;\n}\n/** shared styles */\ntextarea, .highlight-area {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background: none;\n  box-sizing: inherit;\n  display: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-ligatures: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  -moz-tab-size: inherit;\n    -o-tab-size: inherit;\n       tab-size: inherit;\n  text-indent: inherit;\n  text-rendering: inherit;\n  text-transform: inherit;\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  min-height: var(--editor-min-height);\n}\ntextarea {\n  outline: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  resize: none;\n  overflow: hidden;\n  caret-color: white;\n  caret-shape: bar;\n}\ntextarea:focus {\n  outline: none !important;\n}\n.highlight-area {\n  position: relative;\n  pointer-events: none;\n}\n.editor__no-debounce textarea {\n  -webkit-text-fill-color: transparent;\n}\n:not(.editor__no-debounce):not(.visible-highlight) textarea {\n  color: inherit;\n}\n:not(.editor__no-debounce):not(.visible-highlight) .highlight-area {\n  opacity: 0;\n}\n:not(.editor__no-debounce).visible-highlight textarea {\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hpZ2hsaWdodC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFVQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUdBLGdCQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtBQVpGO0FBTEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KO0FBVUE7RUFDRSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxrQkFBQTtJQUFBLGdCQUFBO09BQUEsYUFBQTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFFRiwwRUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FBWEY7QUFnQkEsbUJBQUE7QUFFQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7SUFBQSxvQkFBQTtPQUFBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBR0EsbUNBQUE7RUFHQSxvQ0FBQTtBQXJCRjtBQXdCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtFQUNBLGdCQUFBO0FBdkJGO0FBeUJFO0VBQ0Usd0JBQUE7QUF2Qko7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBeEJGO0FBNkJFO0VBQ0Usb0NBQUE7QUExQko7QUFnQ0k7RUFDRSxjQUFBO0FBN0JOO0FBZ0NJO0VBQ0csVUFBQTtBQTlCUDtBQW1DSTtFQUNBLG9DQUFBO0FBakNKIiwiZmlsZSI6ImhpZ2hsaWdodC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNHB4O1xuXG4gIDpob3N0LWNvbnRleHQoLm1hdC1mb3JtLWZpZWxkKSB7XG4gICAgYm9yZGVyIDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuXG4gIC0tZWRpdG9yLW1pbi1oZWlnaHQ6IDEwMHB4O1xuICAtLWVkaXRvci1tYXgtaGVpZ2h0OiAxMDBweDtcbiAgLS1lZGl0b3ItZm9udC1zaXplOiAxNHB4O1xuICAtLWVkaXRvci1saW5lLWhlaWdodDogMS41O1xuXG5cbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBtaW4taGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWluLWhlaWdodCk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLWVkaXRvci1tYXgtaGVpZ2h0KTtcbn1cblxuXG4uZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHBhZGRpbmc6IDA7XG5cbiAgdGFiLXNpemU6IDJjaDtcblxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBmb250LWZhbWlseTogJ0ZpcmEgY29kZScsICdGaXJhIE1vbm8nLCBDb25zb2xhcywgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiB2YXIoLS1lZGl0b3ItZm9udC1zaXplKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWVkaXRvci1saW5lLWhlaWdodCk7XG4gIGhlaWdodDogMTAwJTtcblxuICAvL21pbi1oZWlnaHQ6IHZhcigtLWVkaXRvci1taW4taGVpZ2h0KTtcbn1cblxuLyoqIHNoYXJlZCBzdHlsZXMgKi9cblxudGV4dGFyZWEsIC5oaWdobGlnaHQtYXJlYSB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOjA7XG5cbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB0YWItc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcblxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gIC8vIHRyYW5zaXRpb246IDIwbXMgY29sb3IsIG9wYWNpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXG5cbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICBjYXJldC1jb2xvcjogd2hpdGU7XG4gIGNhcmV0LXNoYXBlOiBiYXI7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oaWdobGlnaHQtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbn1cblxuLmVkaXRvcl9fbm8tZGVib3VuY2Uge1xuICB0ZXh0YXJlYSB7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbjpub3QoLmVkaXRvcl9fbm8tZGVib3VuY2UpIHtcbiAgJjpub3QoLnZpc2libGUtaGlnaGxpZ2h0KSB7XG4gICAgdGV4dGFyZWEge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodC1hcmVhIHtcbiAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gICYudmlzaWJsZS1oaWdobGlnaHQge1xuICAgIHRleHRhcmVhIHtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "IAcx":
/*!************************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.component.ts ***!
  \************************************************************************/
/*! exports provided: HighlightEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return HighlightEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_highlight_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./highlight-editor.component.html */ "WxOa");
/* harmony import */ var _highlight_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight-editor.component.scss */ "I0mV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "HFY2");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight.service */ "K9I7");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ "2wmh");
/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.functions */ "S0EJ");
/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.keys */ "Gdju");











let HighlightEditorComponent = class HighlightEditorComponent {
    constructor(cd, cssProps, prism, ngZone, morphService) {
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
    ngOnInit() {
        this.updateLinesAmount();
        // once the debounceTime changes
        // recreate the observable
        this.debounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(debounceTimeInterval => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()),
            this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()),
            this.lastKeyTriggered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(debounceTimeInterval))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed$)).subscribe(([code, language, lastKeyEvent]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showHighlighedCode$.next(false);
            yield this.highlightToPreTag(code, language, lastKeyEvent);
            this.showHighlighedCode$.next(true);
            // incase multiple enters scroll the textarea one off, scroll back up
            // this.textarea.nativeElement.scrollTo(0,0);
        }));
        this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(value => {
            this.value = value;
            this.changed.emit(value);
        });
        this.highlightToPreTag('\n', null, null);
    }
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
    onChange(value) {
        this.value$.next(value);
        this.cd.markForCheck();
    }
    updateLinesAmount() {
        if (!this.value) {
            return;
        }
        const lines = this.value.split('\n').length;
        this.cssProps.updateElementVars({
            '--lines-amount': lines
        });
    }
    ngOnChanges({ value, language, debounceTime }) {
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
    onKeyDown(event, textarea) {
        if (event.key.match(this.allCharsRegex) && !_editor_keys__WEBPACK_IMPORTED_MODULE_10__["IGNORE_KEY_EVENTS"].includes(event.key)) {
            this.showHighlighedCode$.next(false);
        }
        this.value$.next(textarea.value);
        if (event.key === _editor_keys__WEBPACK_IMPORTED_MODULE_10__["KEY_TAB"]) {
            const handledTab = Object(_editor_functions__WEBPACK_IMPORTED_MODULE_9__["handleTab"])(event, textarea.value, textarea.selectionStart, textarea.selectionEnd, this.useTabs, this.spaceWidth);
            this.applyToTextarea(handledTab);
            if (handledTab.textChanged) {
                this.showHighlighedCode$.next(false);
            }
        }
    }
    onKeyUp(event, value) {
        this.value$.next(value);
        this.lastKeyTriggered$.next(event);
    }
    applyToTextarea(result) {
        if (result.textChanged) {
            this.textarea.nativeElement.value = result.newValue;
            this.textarea.nativeElement.selectionStart = result.newSelectionStart;
            this.textarea.nativeElement.selectionEnd = result.newSelectionEnd;
        }
    }
    highlightToPreTag(codeToHighlight, language, lastKeyEvent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!codeToHighlight) {
                this.morphService.morphElement(this.highlightArea, `<pre>\n</pre>`, {
                    childrenOnly: true
                });
                return '';
            }
            const innerHighlighed = yield this.prism.highlightCode(codeToHighlight, language);
            let addedBeginNewLine = '', addedEndNewLine = '';
            // somehow if the new html starts with a newline
            // its not added to the element
            if (innerHighlighed.startsWith('\n')) {
                addedBeginNewLine = '\n';
            }
            if (innerHighlighed.endsWith('\n')) {
                addedEndNewLine = '\n';
            }
            this.morphService.morphElement(this.highlightArea, `<pre>${addedBeginNewLine}${innerHighlighed}${addedEndNewLine}</pre>`, {
                childrenOnly: true
            });
            if (lastKeyEvent) {
                this.textarea.nativeElement.blur();
                this.textarea.nativeElement.focus();
            }
            return innerHighlighed;
        });
    }
};
HighlightEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["ElementCssService"] },
    { type: _highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_8__["MorphdomService"] }
];
HighlightEditorComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    language: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    useTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    spaceWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    value$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    allCharsRegex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['textarea',] }],
    highlightArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['highlightArea',] }],
    focussed$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
HighlightEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-prism-editor',
        template: _raw_loader_highlight_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        providers: [
            _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["ElementCssService"]
        ],
        styles: [_highlight_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["ElementCssService"],
        _highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_8__["MorphdomService"]])
], HighlightEditorComponent);



/***/ }),

/***/ "IRXU":
/*!***********************************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLXBvcnRhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "K9I7":
/*!***************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight.service.ts ***!
  \***************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return PrismOptionsInjectorToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/service */ "mMUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! comlink */ "PRU4");





const PrismOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MarkdownOptionsInjectorToken');
let HighlightService = class HighlightService {
    constructor(markdownOptions, prismOptions, platformId, ngZone) {
        this.markdownOptions = markdownOptions;
        this.prismOptions = prismOptions;
        this.ngZone = ngZone;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(platformId)) {
            if (markdownOptions) {
                const wrappedWorker = Object(comlink__WEBPACK_IMPORTED_MODULE_4__["wrap"])(markdownOptions.getWorker());
                wrappedWorker.init(markdownOptions.options);
                this.workerProxy = wrappedWorker;
            }
            if (prismOptions) {
                this.workerProxy = Object(comlink__WEBPACK_IMPORTED_MODULE_4__["wrap"])(prismOptions.getWorker());
                this.workerProxy.initPrism(prismOptions.options);
            }
        }
    }
    highlightCode(code, lang) {
        if (!this.workerProxy) {
            return;
        }
        return this.ngZone.runOutsideAngular(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // needed?
            return yield this.workerProxy.highlight(code, lang);
        }));
    }
};
HighlightService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [PrismOptionsInjectorToken,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
HighlightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], HighlightService);



/***/ }),

/***/ "KB+A":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n");

/***/ }),

/***/ "KRRg":
/*!********************************************************!*\
  !*** ./libs/ng-utils/css-props/element-css.service.ts ***!
  \********************************************************/
/*! exports provided: ElementCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return ElementCssService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-props.service */ "T9O9");



let ElementCssService = class ElementCssService {
    constructor(cssPropsService, elementRef) {
        this.cssPropsService = cssPropsService;
        this.elementRef = elementRef;
    }
    updateElementVars(cssProps) {
        this.cssPropsService.updateElementVars(this.elementRef.nativeElement, cssProps);
    }
};
ElementCssService.ctorParameters = () => [
    { type: _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ElementCssService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ElementCssService);



/***/ }),

/***/ "L4a7":
/*!************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/portal-hub.service.ts ***!
  \************************************************************/
/*! exports provided: PortalSourceAction, PortalHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return PortalSourceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return PortalHubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class PortalSourceAction {
    constructor(type, key) {
        this.type = type;
        this.key = key;
    }
}
let PortalHubService = class PortalHubService {
    constructor() {
        this.templateSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.templateSourceHub = {};
    }
    getTemplate$(key) {
        return this.templateSourceSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(a => a.key === key), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => {
            switch (a.type) {
                case 0 /* Added */: {
                    return this.templateSourceHub[key];
                }
                case 1 /* Removed */: {
                    return null;
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.templateSourceHub[key]));
    }
    registerTemplate(key, templateRef) {
        if (this.templateSourceHub[key]) {
            return;
        }
        this.templateSourceHub[key] = templateRef;
        this.templateSourceSubject.next(new PortalSourceAction(0 /* Added */, key));
    }
    unregisterTemplate(key) {
        if (!this.templateSourceHub[key]) {
            return;
        }
        this.templateSourceHub[key] = null;
        this.templateSourceSubject.next(new PortalSourceAction(1 /* Removed */, key));
    }
};
PortalHubService.ctorParameters = () => [];
PortalHubService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PortalHubService);



/***/ }),

/***/ "LTcb":
/*!***************************************************!*\
  !*** ./libs/lazy/loader/lazy-module.component.ts ***!
  \***************************************************/
/*! exports provided: LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return LazyModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/lazy/registry */ "BLap");





let LazyModuleComponent = class LazyModuleComponent {
    constructor(resolver, angularCompiler, injector, cd) {
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
    setComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.moduleAlias || !this.component || this.alreadySettingComponent) {
                return;
            }
            this.error = '';
            this.alreadySettingComponent = true;
            const moduleInDictionary = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyModuleComponents[this.moduleAlias];
            if (!moduleInDictionary) {
                this.error = `Module ${this.moduleAlias} not registered`;
                this.cd.markForCheck();
                return;
            }
            this.componentLoading.emit(true);
            if (!moduleInDictionary.loadedModule) {
                // load and cache
                moduleInDictionary.loadedModule = moduleInDictionary.load
                    .getValue()
                    .then(importedModule => {
                    return this.angularCompiler.compileModuleAndAllComponentsAsync(importedModule);
                })
                    .then(factory => {
                    return {
                        ngModule: factory.ngModuleFactory.create(this.injector),
                        componentFactories: factory.componentFactories
                    };
                });
            }
            const moduleFactory = yield moduleInDictionary.loadedModule;
            if (!moduleFactory.ngModule.instance.getComponents) {
                this.error = `Module ${this.moduleAlias} does not have a getComponents-Method`;
                this.cd.markForCheck();
                return;
            }
            const components = moduleFactory.ngModule.instance.getComponents();
            const componentInfo = components.find(cf => cf.name === this.component);
            if (!componentInfo) {
                this.error = `Component '${this.component}' does not exist in the 'getComponents'-Method`;
                this.cd.markForCheck();
                return;
            }
            const componentType = componentInfo.componentType;
            const componentFactory = moduleFactory.ngModule.componentFactoryResolver.resolveComponentFactory(componentType);
            // only have one dynamic component render
            this.targetContainer.clear();
            const componentRef = this.targetContainer.createComponent(componentFactory, 0, this.injector);
            componentRef.changeDetectorRef.markForCheck();
            this.componentLoading.emit(false);
            this.componentCreated.emit(componentRef.instance);
            this.componentInstance = componentRef.instance;
            this.setInputs();
            this.setOutputs();
            this.alreadySettingComponent = false;
            this.cd.detectChanges();
        });
    }
    ngOnChanges(changes) {
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
    ngOnDestroy() {
        this.unsubOutputs();
    }
    changedAndDifferent(changes, name) {
        const change = changes[name];
        if (change && change.currentValue !== change.previousValue) {
            return true;
        }
        return false;
    }
    setInputs() {
        if (this.componentInstance && this.componentInputs) {
            const inputs = Object.keys(this.componentInputs);
            for (const inputKey of inputs) {
                this.componentInstance[inputKey] = this.componentInputs[inputKey];
            }
        }
    }
    unsubOutputs() {
        this.unsubForOutputs$.next();
    }
    setOutputs() {
        this.unsubOutputs();
        if (this.componentInstance && this.componentOutputs) {
            const outputs = Object.keys(this.componentOutputs);
            for (const outputKey of outputs) {
                if (this.componentInstance[outputKey]) {
                    const emitter = this.componentInstance[outputKey];
                    emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
                }
            }
        }
    }
};
LazyModuleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LazyModuleComponent.propDecorators = {
    moduleAlias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    componentInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    componentOutputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    targetContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true },] }],
    componentCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    componentLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    showError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
LazyModuleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-lazy-module-component',
        template: `
    <ng-container #targetContainer></ng-container>
    <ng-content *ngIf="!component || !moduleAlias"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
    <span *ngIf="showError && error" class="error">{{error}}</span>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n    .error {\n      color: red;\n    }\n  "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], LazyModuleComponent);



/***/ }),

/***/ "MBLM":
/*!****************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts ***!
  \****************************************************************************/
/*! exports provided: NgErrorOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return NgErrorOverlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-error.component */ "51S8");
/* harmony import */ var _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-overlay/error-overlay.component */ "WKfP");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handler.service */ "kWME");
/* harmony import */ var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gewd/ng-utils/bootstrap-component */ "RB7p");
/* harmony import */ var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gewd/ng-utils/components */ "DVXd");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "zzJY");
var NgErrorOverlayModule_1;









let NgErrorOverlayModule = NgErrorOverlayModule_1 = class NgErrorOverlayModule {
    static config(useValue) {
        return {
            ngModule: NgErrorOverlayModule_1,
            providers: [
                { provide: _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["NG_ERROR_CONFIG_TOKEN"], useValue }
            ]
        };
    }
};
NgErrorOverlayModule = NgErrorOverlayModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ng_error_component__WEBPACK_IMPORTED_MODULE_3__["NgErrorComponent"], _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_4__["ErrorOverlayComponent"]],
        entryComponents: [_ng_error_component__WEBPACK_IMPORTED_MODULE_3__["NgErrorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"].component({
                elementName: 'ng-error',
                component: _ng_error_component__WEBPACK_IMPORTED_MODULE_3__["NgErrorComponent"]
            }),
            _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__["SimplePagerModule"],
            _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__["DynamicPortalModule"]
        ],
        providers: [
            _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useExisting: _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"] },
        ]
    })
], NgErrorOverlayModule);



/***/ }),

/***/ "PbxA":
/*!***************************************!*\
  !*** ./libs/markdown/module/index.ts ***!
  \***************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "/EEl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RenderMarkdownComponent"]; });




/***/ }),

/***/ "QhBr":
/*!***********************************!*\
  !*** ./libs/lazy/loader/index.ts ***!
  \***********************************/
/*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "DQPP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_LAZY_LOADED_MODULE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["GewdLazyLoaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LazyModuleComponent"]; });




/***/ }),

/***/ "RB7p":
/*!****************************************************!*\
  !*** ./libs/ng-utils/bootstrap-component/index.ts ***!
  \****************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "RrM0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BOOTSTRAP_COMPONENT_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["bootstrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BootstrapComponentModule"]; });




/***/ }),

/***/ "RrM0":
/*!*********************************************************!*\
  !*** ./libs/ng-utils/bootstrap-component/public_api.ts ***!
  \*********************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap-component.module */ "vZJb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["BOOTSTRAP_COMPONENT_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["bootstrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapComponentModule"]; });




/***/ }),

/***/ "S0EJ":
/*!**************************************************************!*\
  !*** ./libs/components/highlight-editor/editor.functions.ts ***!
  \**************************************************************/
/*! exports provided: handleTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return handleTab; });
function handleTab(event, currentValue, startSelection, endSelection, useTabs = false, spaceLength = 2) {
    const result = {
        textChanged: false,
        newValue: '',
        newSelectionStart: 0,
        newSelectionEnd: 0
    };
    if (event.key !== "Tab") {
        return result;
    }
    const backwards = event.shiftKey;
    const valueToWork = useTabs
        ? '\t'
        : ''.padEnd(spaceLength, ' ');
    const textValueUntilStart = currentValue.substr(0, startSelection);
    const textValueFromStart = currentValue.substr(endSelection);
    if (backwards) {
        if (textValueUntilStart.endsWith(valueToWork)) {
            result.newValue = textValueUntilStart.substr(0, startSelection - valueToWork.length) + textValueFromStart;
            result.newSelectionStart = result.newSelectionEnd = startSelection - valueToWork.length;
            result.textChanged = true;
        }
    }
    else {
        result.newValue = textValueUntilStart + valueToWork + textValueFromStart;
        result.newSelectionStart = result.newSelectionEnd = startSelection + valueToWork.length;
        result.textChanged = true;
    }
    event.preventDefault();
    return result;
}


/***/ }),

/***/ "S32t":
/*!********************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  color: #e8e8e8;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n  white-space: pre-wrap;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  color: red;\n}\n\n.stack-block {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.stack-table {\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.row.even {\n  background: #AAAAAA40;\n}\n\n.row.odd {\n  background: #CCCCCC40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Vycm9yLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQXpCUTtFQTBCUixXQUFBO0FBREY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFJRTtFQUFRLHFCQUFBO0FBQVY7O0FBQ0U7RUFBTyxxQkFBQTtBQUVUIiwiZmlsZSI6ImVycm9yLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFkZGluZzogMnJlbTtcblxuOmhvc3Qge1xuICBjb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xuICBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3RhY2stYmxvY2sge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc3RhY2stdGFibGUge1xuICBtYXJnaW4tdG9wOiAkcGFkZGluZztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93IHtcbiAgJi5ldmVuIHtiYWNrZ3JvdW5kOiAjQUFBQUFBNDB9XG4gICYub2RkIHtiYWNrZ3JvdW5kOiAjQ0NDQ0NDNDB9XG59XG4iXX0= */");

/***/ }),

/***/ "T9O9":
/*!******************************************************!*\
  !*** ./libs/ng-utils/css-props/css-props.service.ts ***!
  \******************************************************/
/*! exports provided: CssPropsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return CssPropsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-css-props */ "XLiS");
/* harmony import */ var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-dynamic-style */ "5G9P");





/** @dynamic - allows Document in ngc build */
let CssPropsService = class CssPropsService {
    constructor(document, ngZone) {
        this.document = document;
        this.ngZone = ngZone;
    }
    updateCustomCss(styleId, customCss) {
        this.ngZone.runOutsideAngular(() => {
            Object(_update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["updateDynamicStyle"])(this.document, styleId, customCss);
        });
    }
    updateDocumentVars(cssProps) {
        this.ngZone.runOutsideAngular(() => {
            Object(_update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"])(this.document.body, cssProps);
        });
    }
    updateElementVars(element, cssProps) {
        this.ngZone.runOutsideAngular(() => {
            Object(_update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"])(element, cssProps);
        });
    }
};
CssPropsService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CssPropsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CssPropsService);



/***/ }),

/***/ "TRDi":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/markdown/module/render-markdown/render-markdown.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n");

/***/ }),

/***/ "UItG":
/*!***************************************************!*\
  !*** ./libs/markdown/service/markdown.service.ts ***!
  \***************************************************/
/*! exports provided: MarkdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return MarkdownService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ "PRU4");
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/contracts */ "7DNQ");
/* harmony import */ var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown-cache.service */ "mdMz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injection-token */ "lgUy");
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gewd/markdown/utils */ "zOTi");








const compiledRegex = /<div class="mermaid">([\s\S]*?)<\/div>/mg;
let renderId = 0;
/** @dynamic - allows Document in ngc build */
let MarkdownService = class MarkdownService {
    constructor(markdownOptions, cache, document, platformId) {
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
            this.mermaidCacheKey = `mermaid_${this.mermaidConfig.theme}_${Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_7__["simpleHash"])(this.mermaidConfig.themeCSS)}`;
        }
    }
    compileMarkdown(str, triggerMermaid = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.workerProxy) {
                return;
            }
            let parsedMarkdown = yield this.workerProxy.compile(str);
            if (triggerMermaid && parsedMarkdown.match(/class="mermaid"/)) {
                yield this.triggerMermaidLoadScript();
                const mermaidInstance = window.mermaid;
                if (mermaidInstance) {
                    const matched = parsedMarkdown.match(compiledRegex);
                    for (const mermaid of matched) {
                        const innerContent = this.cleanUpMermaidRaw(mermaid);
                        let rendered = '';
                        const cached = yield this.cache.getCachedPart(this.mermaidCacheKey, innerContent);
                        if (!!cached) {
                            rendered = cached;
                        }
                        else {
                            let errorStr = "";
                            try {
                                mermaidInstance.parse(innerContent);
                            }
                            catch (e) {
                                errorStr = e.str;
                            }
                            if (!errorStr) {
                                rendered = mermaidInstance.render(`sub${renderId++}`, innerContent, () => {
                                });
                                this.cache.saveCachedPart(this.mermaidCacheKey, innerContent, rendered);
                            }
                            else {
                                rendered = `<pre>${errorStr}\n${innerContent}</pre>`;
                            }
                        }
                        parsedMarkdown = parsedMarkdown.replace(mermaid, `<pre><code class="mermaid">${rendered}</code></pre>`);
                    }
                }
            }
            return parsedMarkdown;
        });
    }
    cleanUpMermaidRaw(mermaidRaw) {
        return mermaidRaw
            .replace(/&gt;/mg, '>')
            .replace(/&lt;/mg, '<')
            .replace('<div class="mermaid">', '')
            .replace('</div>', '');
    }
    triggerMermaidLoadScript() {
        if (!this.canTriggerMermaidLoad) {
            return Promise.resolve();
        }
        if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
            this.mermaidAddedToPage = true;
            const _mermaidNode = this.document.createElement('div');
            _mermaidNode.hidden = true;
            this.document.body.appendChild(_mermaidNode);
            return new Promise((resolve, reject) => {
                const scriptTag = this.document.createElement('script');
                scriptTag.src = this.markdownOptions.mermaidPath;
                // trigger mermaid init
                scriptTag.onload = () => {
                    const mermaid = window.mermaid;
                    mermaid.initialize(this.mermaidConfig);
                    resolve();
                    mermaid.parseError = function (err) {
                        console.error('MarkdownService, Mermaid: ', err);
                    };
                };
                this.document.body.appendChild(scriptTag);
            });
        }
        if (this.canTriggerMermaidLoad && this.mermaidAddedToPage) {
            const mermaidInstance = window.mermaid;
            if (mermaidInstance) {
                return Promise.resolve();
            }
            return Promise.reject();
        }
    }
};
MarkdownService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_injection_token__WEBPACK_IMPORTED_MODULE_6__["MarkdownOptionsInjectorToken"],] }] },
    { type: _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
MarkdownService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"],
        Document,
        Object])
], MarkdownService);



/***/ }),

/***/ "VvhZ":
/*!*****************************************************!*\
  !*** ./libs/mat-utils/material-icons/public_api.ts ***!
  \*****************************************************/
/*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register_icons */ "esWc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _register_icons__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony import */ var _register_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register_icons.module */ "1dfk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_ICONS_PAIR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["RegisterIconsModule"]; });





/***/ }),

/***/ "W81V":
/*!***************************************************!*\
  !*** ./libs/components/highlight-editor/index.ts ***!
  \***************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "0LWQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightEditorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["handleTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_BACKSPACE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_BACKSPACE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_DELETE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_DELETE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ESCAPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_TAB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_UP", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_UP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_DOWN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_LEFT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_LEFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ARROW_RIGHT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ARROW_RIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_SHIFT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_SHIFT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_ALT", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_ALT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CTRL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CTRL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_META", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_META"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CAPS_LOCK", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_CAPS_LOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_CHARS_REGEX", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ALL_CHARS_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IGNORE_KEY_EVENTS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IGNORE_KEY_EVENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HighlightEditorModule"]; });




/***/ }),

/***/ "WKfP":
/*!******************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ErrorOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorOverlayComponent", function() { return ErrorOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_overlay_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-overlay.component.html */ "WvKa");
/* harmony import */ var _error_overlay_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-overlay.component.scss */ "S32t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! error-stack-parser */ "MjPQ");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_4__);





let ErrorOverlayComponent = class ErrorOverlayComponent {
    constructor() { }
    ngOnInit() {
        this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_4___default.a.parse(this.error);
    }
};
ErrorOverlayComponent.ctorParameters = () => [];
ErrorOverlayComponent.propDecorators = {
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ErrorOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'error-overlay',
        template: _raw_loader_error_overlay_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_overlay_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorOverlayComponent);



/***/ }),

/***/ "WvKa":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n");

/***/ }),

/***/ "WxOa":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/components/highlight-editor/highlight-editor.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor\"\n     [class.visible-highlight]=\"showHighlighedCode$ | async\"\n     [class.editor__no-debounce]=\"debounceTime === 0\">\n\n  <textarea #textarea [value]=\"value\"\n            (change)=\"onChange(textarea.value)\"\n            (keydown)=\"onKeyDown($event, textarea)\"\n            (keyup)=\"onKeyUp($event, textarea.value)\"\n            (focus)=\"focussed$.next(true)\"\n            (blur)=\"focussed$.next(false)\"\n            spellcheck=\"false\"\n  ></textarea>\n  <pre class=\"highlight-area\" #highlightArea></pre>\n</div>\n\n");

/***/ }),

/***/ "XLiS":
/*!*****************************************************!*\
  !*** ./libs/ng-utils/css-props/update-css-props.ts ***!
  \*****************************************************/
/*! exports provided: updateCssProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCssProps", function() { return updateCssProps; });
function updateCssProps(element, cssProps) {
    const { style } = element;
    for (const [k, v] of Object.entries(cssProps)) {
        style.setProperty(k, v.toString(), 'important');
    }
}


/***/ }),

/***/ "aPzk":
/*!**********************************************!*\
  !*** ./libs/ng-utils/morphdom/public_api.ts ***!
  \**********************************************/
/*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _morphdom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphdom.module */ "p+SD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return _morphdom_module__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"]; });

/* harmony import */ var _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphdom.directive */ "BBkK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__["MorphdomDirective"]; });

/* harmony import */ var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morphdom.service */ "BKhR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]; });






/***/ }),

/***/ "bgcH":
/*!*****************************************************!*\
  !*** ./libs/lazy/loader/gewd-lazy-loader.module.ts ***!
  \*****************************************************/
/*! exports provided: REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return REGISTORY_LAZY_LOADED_MODULE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return GewdLazyLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy.component */ "v0Je");
/* harmony import */ var _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-module.component */ "LTcb");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/lazy/registry */ "BLap");
var GewdLazyLoaderModule_1;






const REGISTORY_LAZY_LOADED_MODULE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/lazy-loader/LazyModuleComponentConfig');
let GewdLazyLoaderModule = GewdLazyLoaderModule_1 = class GewdLazyLoaderModule {
    constructor(registerLazyLoads) {
        for (const lazyInfo of registerLazyLoads) {
            _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__["DynamicLoaderRegistry"].RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
        }
    }
    static withLazy(entries) {
        const providers = entries.map(useValue => {
            return {
                provide: REGISTORY_LAZY_LOADED_MODULE_TOKEN,
                useValue,
                multi: true
            };
        });
        return {
            ngModule: GewdLazyLoaderModule_1,
            providers
        };
    }
};
GewdLazyLoaderModule.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [REGISTORY_LAZY_LOADED_MODULE_TOKEN,] }] }
];
GewdLazyLoaderModule = GewdLazyLoaderModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"],
            _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__["LazyModuleComponent"]
        ],
        exports: [
            _lazy_component__WEBPACK_IMPORTED_MODULE_3__["LazyComponent"],
            _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__["LazyModuleComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], GewdLazyLoaderModule);



/***/ }),

/***/ "cFVl":
/*!*********************************************************************!*\
  !*** ./apps/demo/src/app/example-panel/example-panel.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "dTHw":
/*!*************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./apps/demo/src/app/markdown.worker.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0-es2015.worker.js"

/***/ }),

/***/ "dk2Z":
/*!*************************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.ts ***!
  \*************************************************************************/
/*! exports provided: SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return SimplePagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simple_pager_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simple-pager.component.html */ "hB53");
/* harmony import */ var _simple_pager_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-pager.component.scss */ "ofWX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SimplePagerComponent = class SimplePagerComponent {
    constructor() {
        this.position = 0;
    }
    ngOnInit() {
    }
    selectPrev() {
        if (this.position === 0) {
            return;
        }
        this.position--;
    }
    selectNext() {
        if (this.position === (this.items.length - 1)) {
            return;
        }
        this.position++;
    }
};
SimplePagerComponent.ctorParameters = () => [];
SimplePagerComponent.propDecorators = {
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"],] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SimplePagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simple-pager',
        template: _raw_loader_simple_pager_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simple_pager_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SimplePagerComponent);



/***/ }),

/***/ "esWc":
/*!*********************************************************!*\
  !*** ./libs/mat-utils/material-icons/register_icons.ts ***!
  \*********************************************************/
/*! exports provided: registerIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return registerIcons; });
function registerIcons(iconRegistry, sanitizer, iconPair) {
    for (const icon of iconPair.iconArray) {
        iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`${iconPair.pathToIcons}/${icon}.svg`));
    }
}


/***/ }),

/***/ "fFIP":
/*!*****************************************************************************!*\
  !*** ./libs/markdown/module/render-markdown/render-markdown.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep foreignObject {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlbmRlci1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUFnQixpQkFBQTtBQUFsQiIsImZpbGUiOiJyZW5kZXItbWFya2Rvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAvLyBmaXggbWVybWFpZCBvdmVyZmxvdyA6KVxuICBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "gICU":
/*!*****************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/index.ts ***!
  \*****************************************************/
/*! exports provided: CustomFormControlModule, CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "+7VV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlComponent"]; });




/***/ }),

/***/ "hB53":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/components/simple-pager/simple-pager.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n");

/***/ }),

/***/ "hR9A":
/*!*****************************************************!*\
  !*** ./libs/markdown/contracts/worker.interface.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "iv+R":
/*!***************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal.module.ts ***!
  \***************************************************************/
/*! exports provided: DynamicPortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return DynamicPortalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-portal/dynamic-portal.component */ "slkw");
/* harmony import */ var _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal-source.directive */ "FYco");





let DynamicPortalModule = class DynamicPortalModule {
};
DynamicPortalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPortalComponent"], _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__["PortalSourceDirective"]],
        exports: [
            _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPortalComponent"],
            _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__["PortalSourceDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: []
    })
], DynamicPortalModule);



/***/ }),

/***/ "kWME":
/*!**************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts ***!
  \**************************************************************************/
/*! exports provided: NG_ERROR_CONFIG_TOKEN, ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ERROR_CONFIG_TOKEN", function() { return NG_ERROR_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



const DEFAULT_CONFIG = {
    zIndex: 10000,
    ignoreErrors: []
};
const NG_ERROR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/ng-utils/NgErrorConfig');
let ErrorHandlerService = class ErrorHandlerService {
    constructor(config) {
        this.config = config;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.config = Object.assign({}, DEFAULT_CONFIG, config);
        window.addEventListener('error', ev => {
            this.handleError(ev.error);
        });
    }
    handleError(error) {
        if (this.config.ignoreErrors.includes(error.name)) {
            return;
        }
        this.error$.next({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
    }
};
ErrorHandlerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ERROR_CONFIG_TOKEN,] }] }
];
ErrorHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], ErrorHandlerService);



/***/ }),

/***/ "lgUy":
/*!**************************************************!*\
  !*** ./libs/markdown/service/injection-token.ts ***!
  \**************************************************/
/*! exports provided: MarkdownOptionsInjectorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return MarkdownOptionsInjectorToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MarkdownOptionsInjectorToken');


/***/ }),

/***/ "mMUf":
/*!****************************************!*\
  !*** ./libs/markdown/service/index.ts ***!
  \****************************************/
/*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "4jei");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownCacheService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownOptionsInjectorToken"]; });




/***/ }),

/***/ "mRMK":
/*!************************************************!*\
  !*** ./libs/mat-utils/material-icons/index.ts ***!
  \************************************************/
/*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "VvhZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_ICONS_PAIR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RegisterIconsModule"]; });




/***/ }),

/***/ "mcRc":
/*!********************************************!*\
  !*** ./apps/demo/src/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "5aeG");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "+vhj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








// TODO Splitup each panel functions/vars into its own component
let AppComponent = class AppComponent {
    constructor(cd, http) {
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
        this.aForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]().group({ 'editor': '' });
    }
    setLazyPortalModuleComp(lazyModuleComponent) {
        lazyModuleComponent.moduleAlias = 'portal-module';
        lazyModuleComponent.component = 'PortalModuleComp';
        lazyModuleComponent.setComponent();
    }
    makeError() {
        let errorSource;
        errorSource.subString();
    }
    updateValueChanged($event) {
        this.currentPrismExample = $event;
        switch ($event) {
            case 'ts_example':
                {
                    this.editorLanguage$.next('ts');
                    this.editorExample$.next(`
import { DynamicLoaderRegistry } from '@gewd/lazy/registry';
import { Lazy } from '@gewd/lazy/utils';

DynamicLoaderRegistry.LazyComponents = {
  'test-comp': new Lazy<any>(() => import('./lazy-wrapper/test-comp'))
};

DynamicLoaderRegistry.LazyModuleComponents = {

  'test-module': {
    load: new Lazy<any>(
      () => import(/* webpackChunkName: "lazy-test-module" */ './lazy-wrapper/test-module-comp')
      .then(({TestModule}) => TestModule)
    )
  },
  'portal-module': {
    load: new Lazy<any>(
      () => import(/* webpackChunkName: "lazy-portal-module" */ './lazy-wrapper/lazy-portal-source')
        .then(({PortalModule}) => PortalModule)
    )
  },
};
        `.trim());
                    break;
                }
            case 'readme_md': {
                this.editorLanguage$.next('markdown');
                this.markDownReadmeMD$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(value => {
                    this.editorExample$.next(value);
                });
                break;
            }
            default: {
                this.editorExample$.next('');
                break;
            }
        }
    }
    openedEditorPanel() {
        if (!this.currentPrismExample) {
            this.updateValueChanged('empty');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-utils-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "mdMz":
/*!*********************************************************!*\
  !*** ./libs/markdown/service/markdown-cache.service.ts ***!
  \*********************************************************/
/*! exports provided: MarkdownCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return MarkdownCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MarkdownCacheService = class MarkdownCacheService {
    getCached(rawMarkdown) {
        return Promise.resolve('');
    }
    saveCached(rawMarkdown, renderedMarkdown) {
    }
    getCachedPart(type, raw) {
        return Promise.resolve('');
    }
    saveCachedPart(type, raw, rendered) {
    }
};
MarkdownCacheService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MarkdownCacheService);



/***/ }),

/***/ "mkVm":
/*!**************************************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/custom-form-control.module.ts ***!
  \**************************************************************************/
/*! exports provided: CustomFormControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return CustomFormControlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-form-control.component */ "nnzV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let CustomFormControlModule = class CustomFormControlModule {
};
CustomFormControlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__["CustomFormControlComponent"]],
        exports: [
            _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__["CustomFormControlComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], CustomFormControlModule);



/***/ }),

/***/ "n65z":
/*!**********************************!*\
  !*** ./libs/lazy/utils/index.ts ***!
  \**********************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "sxoG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });




/***/ }),

/***/ "nnzV":
/*!*****************************************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/custom-form-control.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return CustomFormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
var CustomFormControlComponent_1;






let CustomFormControlComponent = CustomFormControlComponent_1 = class CustomFormControlComponent {
    constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
        this.stateChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stateChanges = this.stateChangeSubject;
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.stateChangeSubject.next();
        if (this.onChange) {
            this.onChange(value);
        }
    }
    get errorState() {
        return false;
    }
    get empty() {
        return typeof this.value === 'number' ? false : !this.value;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement;
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick() {
    }
    writeValue(val) {
        this._value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnChanges({ value }) {
        if (value && this.onChange) {
            this.onChange(value.currentValue);
            this.stateChangeSubject.next();
        }
    }
};
CustomFormControlComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
];
CustomFormControlComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userAriaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-describedby',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CustomFormControlComponent = CustomFormControlComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-custom-form-control',
        template: `<ng-content></ng-content>`,
        providers: [
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], useExisting: CustomFormControlComponent_1 }
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
], CustomFormControlComponent);



/***/ }),

/***/ "o4qD":
/*!*******************************************!*\
  !*** ./libs/markdown/utils/public_api.ts ***!
  \*******************************************/
/*! exports provided: Lazy, simpleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ "E8Ja");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });

/* harmony import */ var _simple_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-hash */ "B+Hh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleHash", function() { return _simple_hash__WEBPACK_IMPORTED_MODULE_1__["simpleHash"]; });





/***/ }),

/***/ "ofWX":
/*!***************************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-arrow, .right-arrow {\n  --arrow-color: white;\n}\n\n.left-arrow svg path, .right-arrow svg path {\n  fill: var(--arrow-color);\n}\n\n.left-arrow:hover:not(.disabled), .right-arrow:hover:not(.disabled) {\n  cursor: pointer;\n}\n\n.left-arrow.disabled, .right-arrow.disabled {\n  --arrow-color: gray;\n}\n\n.slot {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.position-label {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.navigation-row-panel {\n  flex: 1;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpbXBsZS1wYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDRTtFQUNFLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxPQUFBO0VBQ0EseUJBQUE7QUFGRiIsImZpbGUiOiJzaW1wbGUtcGFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sZWZ0LWFycm93LCAucmlnaHQtYXJyb3cge1xuICAtLWFycm93LWNvbG9yOiB3aGl0ZTtcblxuICBzdmcgcGF0aCB7XG4gICAgZmlsbDogdmFyKC0tYXJyb3ctY29sb3IpO1xuICB9XG5cbiAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgLS1hcnJvdy1jb2xvcjogZ3JheTtcbiAgfVxufVxuXG4uc2xvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zaXRpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ubmF2aWdhdGlvbi1yb3ctcGFuZWwge1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl19 */");

/***/ }),

/***/ "p+SD":
/*!***************************************************!*\
  !*** ./libs/ng-utils/morphdom/morphdom.module.ts ***!
  \***************************************************/
/*! exports provided: MorphdomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return MorphdomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _morphdom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./morphdom.directive */ "BBkK");




let MorphdomModule = class MorphdomModule {
};
MorphdomModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_morphdom_directive__WEBPACK_IMPORTED_MODULE_3__["MorphdomDirective"]],
        exports: [
            _morphdom_directive__WEBPACK_IMPORTED_MODULE_3__["MorphdomDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], MorphdomModule);



/***/ }),

/***/ "p1Yq":
/*!*********************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.module.ts ***!
  \*********************************************************************/
/*! exports provided: HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return HighlightEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight-editor.component */ "IAcx");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "HFY2");
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ "2wmh");






let HighlightEditorModule = class HighlightEditorModule {
};
HighlightEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__["HighlightEditorComponent"]],
        exports: [
            _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__["HighlightEditorComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__["CssPropsModule"],
            _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__["MorphdomModule"]
        ]
    })
], HighlightEditorModule);



/***/ }),

/***/ "p22G":
/*!*********************************!*\
  !*** ./libs/lazy/utils/lazy.ts ***!
  \*********************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
class Lazy {
    constructor(loader) {
        this.loader = loader;
    }
    static create(loader) {
        return new Lazy(loader);
    }
    getValue() {
        if (this.cachedPromise) {
            return this.cachedPromise;
        }
        return this.cachedPromise = this.loader();
    }
    reset() {
        this.cachedPromise = null;
    }
}


/***/ }),

/***/ "r77W":
/*!*************************************************!*\
  !*** ./libs/markdown/module/markdown.module.ts ***!
  \*************************************************/
/*! exports provided: MarkdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return MarkdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ "zJp2");




let MarkdownModule = class MarkdownModule {
};
MarkdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__["RenderMarkdownComponent"]],
        exports: [
            _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__["RenderMarkdownComponent"]
        ],
        providers: []
    })
], MarkdownModule);



/***/ }),

/***/ "rZxZ":
/*!*************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/index.ts ***!
  \*************************************************/
/*! exports provided: NgErrorComponent, NgErrorOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "GRi0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgErrorOverlayModule"]; });




/***/ }),

/***/ "sd5n":
/*!*******************************************************!*\
  !*** ./apps/demo/src/app/md-cache-example.service.ts ***!
  \*******************************************************/
/*! exports provided: MdCacheExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCacheExampleService", function() { return MdCacheExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown/service */ "mMUf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown/utils */ "zOTi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let MdCacheExampleService = class MdCacheExampleService extends _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"] {
    constructor(platformId) {
        super();
        this.enabled = true;
        // skip localforage calls during pre-render step
        this.enabled = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
        if (this.enabled) {
            this.createInstance();
        }
    }
    saveCachedPart(type, raw, rendered) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
            this.localForageCache.setItem(`${type}/${hash}`, rendered);
        });
    }
    getCachedPart(type, raw) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(raw);
            const result = yield this.localForageCache.getItem(`${type}/${hash}`);
            return result;
        });
    }
    getCached(rawMarkdown) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
            const result = yield this.localForageCache.getItem(hash);
            return result;
        });
    }
    saveCached(rawMarkdown, renderedMarkdown) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            yield this.localForageCache.ready();
            const hash = Object(_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__["simpleHash"])(rawMarkdown);
            this.localForageCache.setItem(hash, renderedMarkdown);
        });
    }
    createInstance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localForageCache = localforage__WEBPACK_IMPORTED_MODULE_3__["createInstance"]({
                name: 'markdown-cache',
            });
        });
    }
};
MdCacheExampleService.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
MdCacheExampleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MdCacheExampleService);



/***/ }),

/***/ "slkw":
/*!*********************************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DynamicPortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return DynamicPortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dynamic_portal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dynamic-portal.component.html */ "KB+A");
/* harmony import */ var _dynamic_portal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-portal.component.scss */ "IRXU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../portal-hub.service */ "L4a7");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let DynamicPortalComponent = class DynamicPortalComponent {
    constructor(hub) {
        this.hub = hub;
        this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.templateToShow$ = this.key$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(key => this.hub.getTemplate$(key)));
    }
    ngOnInit() {
        this.checkKeyAndPushTemplate();
    }
    ngOnChanges(changes) {
        if (changes['key']) {
            this.checkKeyAndPushTemplate();
        }
    }
    ngOnDestroy() {
    }
    checkKeyAndPushTemplate() {
        this.key$.next(this.key);
    }
};
DynamicPortalComponent.ctorParameters = () => [
    { type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_5__["PortalHubService"] }
];
DynamicPortalComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DynamicPortalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dynamic-portal',
        template: _raw_loader_dynamic_portal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_dynamic_portal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_portal_hub_service__WEBPACK_IMPORTED_MODULE_5__["PortalHubService"]])
], DynamicPortalComponent);



/***/ }),

/***/ "sxoG":
/*!***************************************!*\
  !*** ./libs/lazy/utils/public_api.ts ***!
  \***************************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ "p22G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });




/***/ }),

/***/ "v0Je":
/*!********************************************!*\
  !*** ./libs/lazy/loader/lazy.component.ts ***!
  \********************************************/
/*! exports provided: LazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/lazy/registry */ "BLap");





let LazyComponent = class LazyComponent {
    constructor(resolver, injector, cd) {
        this.resolver = resolver;
        this.injector = injector;
        this.cd = cd;
        this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentInstance = null;
        this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    setComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.component) {
                return;
            }
            this.componentLoading.emit(true);
            this.cd.detectChanges();
            // cached promise
            const importComponent = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__["DynamicLoaderRegistry"].LazyComponents[this.component].getValue();
            const imported = yield importComponent;
            const keys = Object.keys(imported);
            // get the first object of the imported js-module
            const theComp = imported[keys[0]];
            const componentFactory = this.resolver.resolveComponentFactory(theComp);
            // only have one dynamic component render
            this.targetContainer.clear();
            const componentRef = this.targetContainer.createComponent(componentFactory, 0, this.injector);
            componentRef.changeDetectorRef.markForCheck();
            this.componentLoading.emit(false);
            this.componentCreated.emit(componentRef.instance);
            this.componentInstance = componentRef.instance;
            this.setInputs();
            this.setOutputs();
        });
    }
    ngOnChanges(changes) {
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
    ngOnDestroy() {
        this.unsubOutputs();
    }
    setInputs() {
        // console.info('setInputs', this.componentInstance, this.componentInputs);
        if (this.componentInstance && this.componentInputs) {
            const inputs = Object.keys(this.componentInputs);
            for (const inputKey of inputs) {
                // console.info('set ', inputKey)
                this.componentInstance[inputKey] = this.componentInputs[inputKey];
            }
        }
    }
    unsubOutputs() {
        this.unsubForOutputs$.next();
    }
    setOutputs() {
        this.unsubOutputs();
        if (this.componentInstance && this.componentOutputs) {
            const outputs = Object.keys(this.componentOutputs);
            for (const outputKey of outputs) {
                // console.info('subscribe to', outputKey);
                if (this.componentInstance[outputKey]) {
                    const emitter = this.componentInstance[outputKey];
                    emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
                }
            }
        }
    }
    ngOnInit() {
        this.setComponent();
    }
};
LazyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LazyComponent.propDecorators = {
    component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    componentInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    componentOutputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    targetContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true },] }],
    componentCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    componentLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
LazyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-lazy-component',
        template: `
    <ng-container #targetContainer>
    </ng-container>

    <ng-content *ngIf="!component"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], LazyComponent);



/***/ }),

/***/ "vZJb":
/*!*************************************************************************!*\
  !*** ./libs/ng-utils/bootstrap-component/bootstrap-component.module.ts ***!
  \*************************************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return BOOTSTRAP_COMPONENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return bootstrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return BootstrapComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
var BootstrapComponentModule_1;



const BOOTSTRAP_COMPONENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/ng-utils/BootstrapComponentConfig');
function bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig) {
    const domElement = document.createElement(bootstrapConfig.elementName);
    document.body.append(domElement);
    const factory = resolver.resolveComponentFactory(bootstrapConfig.component);
    const ref = factory.create(injector, [], domElement);
    appRef.attachView(ref.hostView);
}
/** @dynamic - allows Document in ngc build */
let BootstrapComponentModule = BootstrapComponentModule_1 = class BootstrapComponentModule {
    constructor(document, resolver, injector, appRef, bootstrapConfigs) {
        for (const bootstrapConfig of bootstrapConfigs) {
            bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig);
        }
    }
    static component(useValue) {
        return {
            ngModule: BootstrapComponentModule_1,
            providers: [
                { provide: BOOTSTRAP_COMPONENT_TOKEN, useValue, multi: true }
            ]
        };
    }
};
BootstrapComponentModule.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [BOOTSTRAP_COMPONENT_TOKEN,] }] }
];
BootstrapComponentModule = BootstrapComponentModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Array])
], BootstrapComponentModule);



/***/ }),

/***/ "wfeF":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "xqI3":
/*!****************************************!*\
  !*** ./libs/lazy/registry/registry.ts ***!
  \****************************************/
/*! exports provided: DynamicLoaderRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function() { return DynamicLoaderRegistry; });
class DynamicLoaderRegistry {
    static RegisterLazyComponent(componentName, lazyImport) {
        DynamicLoaderRegistry.LazyComponents[componentName] = lazyImport;
    }
    static RegisterLazyModuleComponent(moduleName, lazyImport) {
        DynamicLoaderRegistry.LazyModuleComponents[moduleName] = lazyImport;
    }
}
// Registry + Cache
DynamicLoaderRegistry.LazyComponents = {};
// Registry
DynamicLoaderRegistry.LazyModuleComponents = {};


/***/ }),

/***/ "zJp2":
/*!***************************************************************************!*\
  !*** ./libs/markdown/module/render-markdown/render-markdown.component.ts ***!
  \***************************************************************************/
/*! exports provided: RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return RenderMarkdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_render_markdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./render-markdown.component.html */ "TRDi");
/* harmony import */ var _render_markdown_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-markdown.component.scss */ "fFIP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/markdown/service */ "mMUf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







let RenderMarkdownComponent = class RenderMarkdownComponent {
    constructor(service, element, sanitizer, cache) {
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
    get markdown() {
        return this._markdown;
    }
    set markdown(value) {
        if (this._markdown !== value) {
            this._markdown = value;
            if (this.showRawMd) {
                this._htmlToShow$.next(value);
            }
            this.compile();
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.compile();
        });
    }
    onClick(e) {
        let target = e.target;
        let aHref = null;
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
    compile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.useCache) {
                    const cachedMarkdown = yield this.cache.getCached(this._markdown);
                    if (!!cachedMarkdown) {
                        this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));
                        return;
                    }
                }
                const parsedHtml = yield this.service.compileMarkdown(this._markdown, this.allowMermaid);
                this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));
                if (this.useCache) {
                    this.cache.saveCached(this._markdown, parsedHtml);
                }
            }
            catch (er) {
                console.error(er);
                this._htmlToShow$.next(er);
            }
        });
    }
};
RenderMarkdownComponent.ctorParameters = () => [
    { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownCacheService"] }
];
RenderMarkdownComponent.propDecorators = {
    showRawMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    useCache: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    allowMermaid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    mermaidTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    markdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onLinkClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event'],] }]
};
RenderMarkdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-markdown',
        template: _raw_loader_render_markdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_render_markdown_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
        _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__["MarkdownCacheService"]])
], RenderMarkdownComponent);



/***/ }),

/***/ "zOTi":
/*!**************************************!*\
  !*** ./libs/markdown/utils/index.ts ***!
  \**************************************/
/*! exports provided: Lazy, simpleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "o4qD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleHash", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["simpleHash"]; });




/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzJY":
/*!***********************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/index.ts ***!
  \***********************************************/
/*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "0QHq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalSourceAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalHubService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalSourceDirective"]; });




/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map