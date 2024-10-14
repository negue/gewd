(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 7718:
/*!********************************************!*\
  !*** ./apps/demo/src/app/app.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 8146);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 7557);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);








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
    this.editorLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.editorExample$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.aForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder().group({
      'editor': ''
    });
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
      case 'readme_md':
        {
          this.editorLanguage$.next('markdown');
          this.markDownReadmeMD$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(value => {
            this.editorExample$.next(value);
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
  openedEditorPanel() {
    if (!this.currentPrismExample) {
      this.updateValueChanged('empty');
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'gewd-utils-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient])], AppComponent);

/***/ }),

/***/ 6795:
/*!*****************************************!*\
  !*** ./apps/demo/src/app/app.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 7718);
/* harmony import */ var _gewd_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown */ 602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/contracts */ 7056);
/* harmony import */ var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/lazy/loader */ 2368);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ 462);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/markdown/service */ 8254);
/* harmony import */ var _md_cache_example_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./md-cache-example.service */ 5932);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markdown-toolbar.component */ 558);
/* harmony import */ var _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gewd/ng-utils/ng-error-overlay */ 7088);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 3522);
/* harmony import */ var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gewd/components/highlight-editor */ 7964);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _gewd_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gewd/mat-utils/material-icons */ 8021);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./example-panel/example-panel.component */ 4201);
/* harmony import */ var _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @gewd/mat-utils/custom-form-control */ 3002);
/* harmony import */ var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gewd/lazy/utils */ 4279);





























const marked = () => new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("apps_demo_src_app_markdown_worker_ts"), __webpack_require__.b)), {
  type: undefined
});
const markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_14__.Lazy(() => Promise.all(/*! import() | markdown-example-module */[__webpack_require__.e("default-apps_demo_src_app_example-emoji-list_ts"), __webpack_require__.e("markdown-example-module")]).then(__webpack_require__.bind(__webpack_require__, /*! ./examples/markdown-example/markdown-example.module */ 4382)).then(({
  MarkdownExampleModule
}) => MarkdownExampleModule));
const codeMirrorExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_14__.Lazy(() => Promise.all(/*! import() | codemirror-example-module */[__webpack_require__.e("default-apps_demo_src_app_example-emoji-list_ts"), __webpack_require__.e("codemirror-example-module")]).then(__webpack_require__.bind(__webpack_require__, /*! ./examples/codemirror-example/codemirror-example.module */ 138)).then(({
  CodemirrorExampleModule
}) => CodemirrorExampleModule));
const lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_14__.Lazy(() => __webpack_require__.e(/*! import() | lazyload-example-module */ "lazyload-example-module").then(__webpack_require__.bind(__webpack_require__, /*! ./examples/lazyload-example/lazyload-example.module */ 6024)).then(({
  LazyloadExampleModule
}) => LazyloadExampleModule));
const componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_14__.Lazy(() => __webpack_require__.e(/*! import() | components-example-module */ "components-example-module").then(__webpack_require__.bind(__webpack_require__, /*! ./examples/components-example/components-example.module */ 3912)).then(({
  ComponentsExampleModule
}) => ComponentsExampleModule));
const portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_14__.Lazy(() => __webpack_require__.e(/*! import() | lazy-portal-module */ "lazy-portal-module").then(__webpack_require__.bind(__webpack_require__, /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */ 4476)).then(({
  PortalModule
}) => PortalModule));
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.MarkdownToolbarComponent, _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_12__.ExamplePanelComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot([], {}), _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _gewd_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_3__.GewdLazyLoaderModule.withLazy([{
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
  }]), _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_4__.DynamicPortalModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule, _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_8__.NgErrorOverlayModule, ..._environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.modules, _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_10__.HighlightEditorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_13__.CustomFormControlModule, _gewd_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_11__.RegisterIconsModule.register({
    pathToIcons: './assets/material_icons',
    iconArray: ['add', 'art_track']
  }), _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule],
  providers: [{
    provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__.MarkdownOptionsInjectorToken,
    useValue: {
      getWorker: marked,
      options: {
        prism: {
          ..._gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PRISM_OPTIONS,
          /** if needed **/
          languageFileType: 'min.js',
          languageMap: {
            ts: 'typescript',
            cs: 'csharp' // additional
          },

          highlightMarkdownCode: true,
          additionalPluginPaths: ['assets/prism/prism-css-extras.min.js', 'assets/prism/prism-plugin-inline-color.worker-func.js', 'assets/prism/prism-plugin-bracket-match.worker-func.js']
        }
      },
      mermaidPath: 'mermaid.min.js',
      mermaidOptions: {
        theme: 'neutral'
      }
    }
  }, _md_cache_example_service__WEBPACK_IMPORTED_MODULE_6__.MdCacheExampleService, {
    provide: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_5__.MarkdownCacheService,
    useExisting: _md_cache_example_service__WEBPACK_IMPORTED_MODULE_6__.MdCacheExampleService
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);

/***/ }),

/***/ 4201:
/*!********************************************************************!*\
  !*** ./apps/demo/src/app/example-panel/example-panel.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamplePanelComponent: () => (/* binding */ ExamplePanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _example_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-panel.component.html?ngResource */ 7461);
/* harmony import */ var _example_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-panel.component.css?ngResource */ 1277);
/* harmony import */ var _example_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_example_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




let ExamplePanelComponent = class ExamplePanelComponent {
  constructor() {
    this.packageName = '';
    this.packageTitle = '';
    this.moduleName = '';
    this.componentName = '';
  }
  ngOnInit() {}
  applyLazyModuleInputs(lazyModuleComponent) {
    lazyModuleComponent.moduleAlias = this.moduleName;
    lazyModuleComponent.component = this.componentName;
    lazyModuleComponent.setComponent();
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    packageName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    packageTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    moduleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    componentName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
ExamplePanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'gewd-example-panel',
  template: _example_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_example_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], ExamplePanelComponent);

/***/ }),

/***/ 558:
/*!*********************************************************!*\
  !*** ./apps/demo/src/app/markdown-toolbar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownToolbarComponent: () => (/* binding */ MarkdownToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gewd/markdown/module */ 602);



let MarkdownToolbarComponent = class MarkdownToolbarComponent {
  constructor(markdown) {
    this.markdown = markdown;
  }
  static #_ = this.ctorParameters = () => [{
    type: _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_0__.RenderMarkdownComponent
  }];
};
MarkdownToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  template: ``,
  selector: 'gewd-markdown-toolbar'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_gewd_markdown_module__WEBPACK_IMPORTED_MODULE_0__.RenderMarkdownComponent])], MarkdownToolbarComponent);

/***/ }),

/***/ 5932:
/*!*******************************************************!*\
  !*** ./apps/demo/src/app/md-cache-example.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MdCacheExampleService: () => (/* binding */ MdCacheExampleService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown/service */ 8254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ 3947);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/utils */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);







let MdCacheExampleService = class MdCacheExampleService extends _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__.MarkdownCacheService {
  constructor(platformId) {
    super();
    this.enabled = true;
    // skip localforage calls during pre-render step
    this.enabled = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(platformId);
    if (this.enabled) {
      this.createInstance();
    }
  }
  saveCachedPart(type, raw, rendered) {
    var _this = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.enabled) {
        return;
      }
      yield _this.localForageCache.ready();
      const hash = (0,_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_3__.simpleHash)(raw);
      _this.localForageCache.setItem(`${type}/${hash}`, rendered);
    })();
  }
  getCachedPart(type, raw) {
    var _this2 = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.enabled) {
        return;
      }
      yield _this2.localForageCache.ready();
      const hash = (0,_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_3__.simpleHash)(raw);
      const result = yield _this2.localForageCache.getItem(`${type}/${hash}`);
      return result;
    })();
  }
  getCached(rawMarkdown) {
    var _this3 = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.enabled) {
        return;
      }
      yield _this3.localForageCache.ready();
      const hash = (0,_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_3__.simpleHash)(rawMarkdown);
      const result = yield _this3.localForageCache.getItem(hash);
      return result;
    })();
  }
  saveCached(rawMarkdown, renderedMarkdown) {
    var _this4 = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.enabled) {
        return;
      }
      yield _this4.localForageCache.ready();
      const hash = (0,_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_3__.simpleHash)(rawMarkdown);
      _this4.localForageCache.setItem(hash, renderedMarkdown);
    })();
  }
  createInstance() {
    var _this5 = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.localForageCache = localforage__WEBPACK_IMPORTED_MODULE_2__.createInstance({
        name: 'markdown-cache'
      });
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID]
    }]
  }];
};
MdCacheExampleService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object])], MdCacheExampleService);

/***/ }),

/***/ 3522:
/*!***************************************************!*\
  !*** ./apps/demo/src/environments/environment.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5306:
/*!*******************************!*\
  !*** ./apps/demo/src/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6795);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3522);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(moduleRef => {
    const applicationRef = moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ApplicationRef);
    const componentRef = applicationRef.components[0];
    // allows to run `ng.profiler.timeChangeDetection();`
    (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.enableDebugTools)(componentRef);
  }).catch(err => window['console'].error(err));
});

/***/ }),

/***/ 9369:
/*!**************************************************************!*\
  !*** ./libs/components/highlight-editor/editor.functions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTab: () => (/* binding */ handleTab)
/* harmony export */ });
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
  const valueToWork = useTabs ? '\t' : ''.padEnd(spaceLength, ' ');
  const textValueUntilStart = currentValue.substr(0, startSelection);
  const textValueFromStart = currentValue.substr(endSelection);
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

/***/ }),

/***/ 7175:
/*!*********************************************************!*\
  !*** ./libs/components/highlight-editor/editor.keys.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_CHARS_REGEX: () => (/* binding */ ALL_CHARS_REGEX),
/* harmony export */   IGNORE_KEY_EVENTS: () => (/* binding */ IGNORE_KEY_EVENTS),
/* harmony export */   KEY_ALT: () => (/* binding */ KEY_ALT),
/* harmony export */   KEY_ARROW_DOWN: () => (/* binding */ KEY_ARROW_DOWN),
/* harmony export */   KEY_ARROW_LEFT: () => (/* binding */ KEY_ARROW_LEFT),
/* harmony export */   KEY_ARROW_RIGHT: () => (/* binding */ KEY_ARROW_RIGHT),
/* harmony export */   KEY_ARROW_UP: () => (/* binding */ KEY_ARROW_UP),
/* harmony export */   KEY_BACKSPACE: () => (/* binding */ KEY_BACKSPACE),
/* harmony export */   KEY_CAPS_LOCK: () => (/* binding */ KEY_CAPS_LOCK),
/* harmony export */   KEY_CTRL: () => (/* binding */ KEY_CTRL),
/* harmony export */   KEY_DELETE: () => (/* binding */ KEY_DELETE),
/* harmony export */   KEY_ENTER: () => (/* binding */ KEY_ENTER),
/* harmony export */   KEY_ESCAPE: () => (/* binding */ KEY_ESCAPE),
/* harmony export */   KEY_META: () => (/* binding */ KEY_META),
/* harmony export */   KEY_SHIFT: () => (/* binding */ KEY_SHIFT),
/* harmony export */   KEY_TAB: () => (/* binding */ KEY_TAB)
/* harmony export */ });
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
const IGNORE_KEY_EVENTS = [KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, KEY_ESCAPE];

/***/ }),

/***/ 8435:
/*!************************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightEditorComponent: () => (/* binding */ HighlightEditorComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _highlight_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight-editor.component.html?ngResource */ 5432);
/* harmony import */ var _highlight_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight-editor.component.scss?ngResource */ 3474);
/* harmony import */ var _highlight_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_highlight_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ 1965);
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight.service */ 6719);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ 1451);
/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.functions */ 9369);
/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.keys */ 7175);












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
    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(this.value);
    this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(this.language);
    this.debounce$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(this.debounceTime);
    this.showHighlighedCode$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.allCharsRegex = _editor_keys__WEBPACK_IMPORTED_MODULE_7__.ALL_CHARS_REGEX;
    this.focussed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.lastKeyTriggered$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
  }
  ngOnInit() {
    var _this = this;
    this.updateLinesAmount();
    // once the debounceTime changes
    // recreate the observable
    this.debounce$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(debounceTimeInterval => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.value$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()), this.language$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()), this.lastKeyTriggered$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)())]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(debounceTimeInterval))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed$)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([code, language, lastKeyEvent]) {
        _this.showHighlighedCode$.next(false);
        yield _this.highlightToPreTag(code, language, lastKeyEvent);
        _this.showHighlighedCode$.next(true);
        // incase multiple enters scroll the textarea one off, scroll back up
        // this.textarea.nativeElement.scrollTo(0,0);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.value$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
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
  ngOnChanges({
    value,
    language,
    debounceTime
  }) {
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
    if (this.allCharsRegex.exec(event.key) && !_editor_keys__WEBPACK_IMPORTED_MODULE_7__.IGNORE_KEY_EVENTS.includes(event.key)) {
      this.showHighlighedCode$.next(false);
    }
    this.value$.next(textarea.value);
    if (event.key === _editor_keys__WEBPACK_IMPORTED_MODULE_7__.KEY_TAB) {
      const handledTab = (0,_editor_functions__WEBPACK_IMPORTED_MODULE_6__.handleTab)(event, textarea.value, textarea.selectionStart, textarea.selectionEnd, this.useTabs, this.spaceWidth);
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
    var _this2 = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!codeToHighlight) {
        _this2.morphService.morphElement(_this2.highlightArea, `<pre>\n</pre>`, {
          childrenOnly: true
        });
        return '';
      }
      const innerHighlighed = yield _this2.prism.highlightCode(codeToHighlight, language);
      let addedBeginNewLine = '',
        addedEndNewLine = '';
      // somehow if the new html starts with a newline
      // its not added to the element
      if (innerHighlighed.startsWith('\n')) {
        addedBeginNewLine = '\n';
      }
      if (innerHighlighed.endsWith('\n')) {
        addedEndNewLine = '\n';
      }
      _this2.morphService.morphElement(_this2.highlightArea, `<pre>${addedBeginNewLine}${innerHighlighed}${addedEndNewLine}</pre>`, {
        childrenOnly: true
      });
      if (lastKeyEvent) {
        _this2.textarea.nativeElement.blur();
        _this2.textarea.nativeElement.focus();
      }
      return innerHighlighed;
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__.ElementCssService
  }, {
    type: _highlight_service__WEBPACK_IMPORTED_MODULE_4__.HighlightService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
  }, {
    type: _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__.MorphdomService
  }];
  static #_2 = this.propDecorators = {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    language: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    useTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    spaceWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    changed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
    }],
    value$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
    }],
    allCharsRegex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
    }],
    textarea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['textarea']
    }],
    highlightArea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['highlightArea']
    }],
    focussed$: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
    }]
  };
};
HighlightEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'gewd-prism-editor',
  template: _highlight_editor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  providers: [_gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__.ElementCssService],
  styles: [(_highlight_editor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef, _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__.ElementCssService, _highlight_service__WEBPACK_IMPORTED_MODULE_4__.HighlightService, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone, _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__.MorphdomService])], HighlightEditorComponent);

/***/ }),

/***/ 2356:
/*!*********************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightEditorModule: () => (/* binding */ HighlightEditorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight-editor.component */ 8435);
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ 1965);
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ 1451);






let HighlightEditorModule = class HighlightEditorModule {};
HighlightEditorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_highlight_editor_component__WEBPACK_IMPORTED_MODULE_0__.HighlightEditorComponent],
  exports: [_highlight_editor_component__WEBPACK_IMPORTED_MODULE_0__.HighlightEditorComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_1__.CssPropsModule, _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_2__.MorphdomModule]
})], HighlightEditorModule);

/***/ }),

/***/ 6719:
/*!***************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightService: () => (/* binding */ HighlightService),
/* harmony export */   PrismOptionsInjectorToken: () => (/* binding */ PrismOptionsInjectorToken)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown/service */ 8254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! comlink */ 48);






const PrismOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MarkdownOptionsInjectorToken');
let HighlightService = class HighlightService {
  constructor(markdownOptions, prismOptions, platformId, ngZone) {
    this.markdownOptions = markdownOptions;
    this.prismOptions = prismOptions;
    this.ngZone = ngZone;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(platformId)) {
      if (markdownOptions) {
        const wrappedWorker = (0,comlink__WEBPACK_IMPORTED_MODULE_4__.wrap)(markdownOptions.getWorker());
        wrappedWorker.init(markdownOptions.options);
        this.workerProxy = wrappedWorker;
      }
      if (prismOptions) {
        this.workerProxy = (0,comlink__WEBPACK_IMPORTED_MODULE_4__.wrap)(prismOptions.getWorker());
        this.workerProxy.initPrism(prismOptions.options);
      }
    }
  }
  highlightCode(code, lang) {
    var _this = this;
    if (!this.workerProxy) {
      return;
    }
    return this.ngZone.runOutsideAngular( /*#__PURE__*/(0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // needed?
      return yield _this.workerProxy.highlight(code, lang);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__.MarkdownOptionsInjectorToken]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [PrismOptionsInjectorToken]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
  }];
};
HighlightService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [Object, Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone])], HighlightService);

/***/ }),

/***/ 7964:
/*!***************************************************!*\
  !*** ./libs/components/highlight-editor/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_CHARS_REGEX: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ALL_CHARS_REGEX),
/* harmony export */   HighlightEditorComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.HighlightEditorComponent),
/* harmony export */   HighlightEditorModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.HighlightEditorModule),
/* harmony export */   HighlightService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.HighlightService),
/* harmony export */   IGNORE_KEY_EVENTS: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.IGNORE_KEY_EVENTS),
/* harmony export */   KEY_ALT: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ALT),
/* harmony export */   KEY_ARROW_DOWN: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ARROW_DOWN),
/* harmony export */   KEY_ARROW_LEFT: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ARROW_LEFT),
/* harmony export */   KEY_ARROW_RIGHT: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ARROW_RIGHT),
/* harmony export */   KEY_ARROW_UP: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ARROW_UP),
/* harmony export */   KEY_BACKSPACE: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_BACKSPACE),
/* harmony export */   KEY_CAPS_LOCK: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_CAPS_LOCK),
/* harmony export */   KEY_CTRL: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_CTRL),
/* harmony export */   KEY_DELETE: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_DELETE),
/* harmony export */   KEY_ENTER: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ENTER),
/* harmony export */   KEY_ESCAPE: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_ESCAPE),
/* harmony export */   KEY_META: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_META),
/* harmony export */   KEY_SHIFT: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_SHIFT),
/* harmony export */   KEY_TAB: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.KEY_TAB),
/* harmony export */   PrismOptionsInjectorToken: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.PrismOptionsInjectorToken),
/* harmony export */   handleTab: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.handleTab)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 9409);


/***/ }),

/***/ 9409:
/*!********************************************************!*\
  !*** ./libs/components/highlight-editor/public_api.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_CHARS_REGEX: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.ALL_CHARS_REGEX),
/* harmony export */   HighlightEditorComponent: () => (/* reexport safe */ _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__.HighlightEditorComponent),
/* harmony export */   HighlightEditorModule: () => (/* reexport safe */ _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__.HighlightEditorModule),
/* harmony export */   HighlightService: () => (/* reexport safe */ _highlight_service__WEBPACK_IMPORTED_MODULE_0__.HighlightService),
/* harmony export */   IGNORE_KEY_EVENTS: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.IGNORE_KEY_EVENTS),
/* harmony export */   KEY_ALT: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ALT),
/* harmony export */   KEY_ARROW_DOWN: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ARROW_DOWN),
/* harmony export */   KEY_ARROW_LEFT: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ARROW_LEFT),
/* harmony export */   KEY_ARROW_RIGHT: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ARROW_RIGHT),
/* harmony export */   KEY_ARROW_UP: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ARROW_UP),
/* harmony export */   KEY_BACKSPACE: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_BACKSPACE),
/* harmony export */   KEY_CAPS_LOCK: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_CAPS_LOCK),
/* harmony export */   KEY_CTRL: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_CTRL),
/* harmony export */   KEY_DELETE: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_DELETE),
/* harmony export */   KEY_ENTER: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ENTER),
/* harmony export */   KEY_ESCAPE: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_ESCAPE),
/* harmony export */   KEY_META: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_META),
/* harmony export */   KEY_SHIFT: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_SHIFT),
/* harmony export */   KEY_TAB: () => (/* reexport safe */ _editor_keys__WEBPACK_IMPORTED_MODULE_3__.KEY_TAB),
/* harmony export */   PrismOptionsInjectorToken: () => (/* reexport safe */ _highlight_service__WEBPACK_IMPORTED_MODULE_0__.PrismOptionsInjectorToken),
/* harmony export */   handleTab: () => (/* reexport safe */ _editor_functions__WEBPACK_IMPORTED_MODULE_2__.handleTab)
/* harmony export */ });
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.service */ 6719);
/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight-editor.component */ 8435);
/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.functions */ 9369);
/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.keys */ 7175);
/* harmony import */ var _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight-editor.module */ 2356);






/***/ }),

/***/ 5281:
/*!*****************************************************!*\
  !*** ./libs/lazy/loader/gewd-lazy-loader.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GewdLazyLoaderModule: () => (/* binding */ GewdLazyLoaderModule),
/* harmony export */   REGISTORY_LAZY_LOADED_MODULE_TOKEN: () => (/* binding */ REGISTORY_LAZY_LOADED_MODULE_TOKEN)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy.component */ 7472);
/* harmony import */ var _lazy_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-module.component */ 9958);
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/lazy/registry */ 3706);
var GewdLazyLoaderModule_1;






const REGISTORY_LAZY_LOADED_MODULE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('@gewd/lazy-loader/LazyModuleComponentConfig');
let GewdLazyLoaderModule = class GewdLazyLoaderModule {
  static #_ = GewdLazyLoaderModule_1 = this;
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
  constructor(registerLazyLoads) {
    for (const lazyInfo of registerLazyLoads) {
      _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_2__.DynamicLoaderRegistry.RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
    }
  }
  static #_2 = this.ctorParameters = () => [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [REGISTORY_LAZY_LOADED_MODULE_TOKEN]
    }]
  }];
};
GewdLazyLoaderModule = GewdLazyLoaderModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_lazy_component__WEBPACK_IMPORTED_MODULE_0__.LazyComponent, _lazy_module_component__WEBPACK_IMPORTED_MODULE_1__.LazyModuleComponent],
  exports: [_lazy_component__WEBPACK_IMPORTED_MODULE_0__.LazyComponent, _lazy_module_component__WEBPACK_IMPORTED_MODULE_1__.LazyModuleComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Array])], GewdLazyLoaderModule);

/***/ }),

/***/ 2368:
/*!***********************************!*\
  !*** ./libs/lazy/loader/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GewdLazyLoaderModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.GewdLazyLoaderModule),
/* harmony export */   LazyComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.LazyComponent),
/* harmony export */   LazyModuleComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.LazyModuleComponent),
/* harmony export */   REGISTORY_LAZY_LOADED_MODULE_TOKEN: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.REGISTORY_LAZY_LOADED_MODULE_TOKEN)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 3574);


/***/ }),

/***/ 9958:
/*!***************************************************!*\
  !*** ./libs/lazy/loader/lazy-module.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyModuleComponent: () => (/* binding */ LazyModuleComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZXJyb3IgewogICAgICBjb2xvcjogcmVkOwogICAgfQogIA_3D_3D_home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/lazy/loader/lazy-module.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZXJyb3IgewogICAgICBjb2xvcjogcmVkOwogICAgfQogIA%3D%3D!./libs/lazy/loader/lazy-module.component.ts */ 6562);
/* harmony import */ var _home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZXJyb3IgewogICAgICBjb2xvcjogcmVkOwogICAgfQogIA_3D_3D_home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZXJyb3IgewogICAgICBjb2xvcjogcmVkOwogICAgfQogIA_3D_3D_home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/lazy/registry */ 3706);







let LazyModuleComponent = class LazyModuleComponent {
  constructor(angularCompiler, injector, cd) {
    this.angularCompiler = angularCompiler;
    this.injector = injector;
    this.cd = cd;
    this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.showError = true;
    this.componentInstance = null;
    this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.alreadySettingComponent = false;
  }
  setComponent() {
    var _this = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.moduleAlias || !_this.component || _this.alreadySettingComponent) {
        return;
      }
      _this.error = '';
      _this.alreadySettingComponent = true;
      const moduleInDictionary = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_2__.DynamicLoaderRegistry.LazyModuleComponents[_this.moduleAlias];
      if (!moduleInDictionary) {
        _this.error = `Module ${_this.moduleAlias} not registered`;
        _this.cd.markForCheck();
        return;
      }
      _this.componentLoading.emit(true);
      if (!moduleInDictionary.loadedModule) {
        // load and cache
        moduleInDictionary.loadedModule = moduleInDictionary.load.getValue().then(importedModule => {
          return _this.angularCompiler.compileModuleAndAllComponentsAsync(importedModule);
        }).then(factory => {
          return {
            ngModule: factory.ngModuleFactory.create(_this.injector),
            componentFactories: factory.componentFactories
          };
        });
      }
      const moduleFactory = yield moduleInDictionary.loadedModule;
      if (!moduleFactory.ngModule.instance.getComponents) {
        _this.error = `Module ${_this.moduleAlias} does not have a getComponents-Method`;
        _this.cd.markForCheck();
        return;
      }
      const components = moduleFactory.ngModule.instance.getComponents();
      const componentInfo = components.find(cf => cf.name === _this.component);
      if (!componentInfo) {
        _this.error = `Component '${_this.component}' does not exist in the 'getComponents'-Method`;
        _this.cd.markForCheck();
        return;
      }
      const componentType = componentInfo.componentType;
      const componentFactory = moduleFactory.ngModule.componentFactoryResolver.resolveComponentFactory(componentType);
      // only have one dynamic component render
      _this.targetContainer.clear();
      const componentRef = _this.targetContainer.createComponent(componentFactory, 0, _this.injector);
      componentRef.changeDetectorRef.markForCheck();
      _this.componentLoading.emit(false);
      _this.componentCreated.emit(componentRef.instance);
      _this.componentInstance = componentRef.instance;
      _this.setInputs();
      _this.setOutputs();
      _this.alreadySettingComponent = false;
      _this.cd.detectChanges();
    })();
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
          emitter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
        }
      }
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Compiler
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    moduleAlias: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    component: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    componentInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    componentOutputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    targetContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['targetContainer', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef,
        static: true
      }]
    }],
    componentCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    componentLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    showError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
LazyModuleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'gewd-lazy-module-component',
  template: `
    <ng-container #targetContainer></ng-container>
    <ng-content *ngIf="!component || !moduleAlias"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
    <span *ngIf="showError && error" class="error">{{error}}</span>
  `,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  styles: [(_home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts_css_ngResource_home_runner_work_gewd_gewd_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZXJyb3IgewogICAgICBjb2xvcjogcmVkOwogICAgfQogIA_3D_3D_home_runner_work_gewd_gewd_libs_lazy_loader_lazy_module_component_ts__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__.Compiler, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef])], LazyModuleComponent);

/***/ }),

/***/ 7472:
/*!********************************************!*\
  !*** ./libs/lazy/loader/lazy.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyComponent: () => (/* binding */ LazyComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/lazy/registry */ 3706);






let LazyComponent = class LazyComponent {
  constructor(resolver, injector, cd) {
    this.resolver = resolver;
    this.injector = injector;
    this.cd = cd;
    this.componentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.componentLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.componentInstance = null;
    this.unsubForOutputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  setComponent() {
    var _this = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.component) {
        return;
      }
      _this.componentLoading.emit(true);
      _this.cd.detectChanges();
      // cached promise
      const importComponent = _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_1__.DynamicLoaderRegistry.LazyComponents[_this.component].getValue();
      const imported = yield importComponent;
      const keys = Object.keys(imported);
      // get the first object of the imported js-module
      const theComp = imported[keys[0]];
      const componentFactory = _this.resolver.resolveComponentFactory(theComp);
      // only have one dynamic component render
      _this.targetContainer.clear();
      const componentRef = _this.targetContainer.createComponent(componentFactory, 0, _this.injector);
      componentRef.changeDetectorRef.markForCheck();
      _this.componentLoading.emit(false);
      _this.componentCreated.emit(componentRef.instance);
      _this.componentInstance = componentRef.instance;
      _this.setInputs();
      _this.setOutputs();
    })();
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
          emitter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubForOutputs$)).subscribe(this.componentOutputs[outputKey]);
        }
      }
    }
  }
  ngOnInit() {
    this.setComponent();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
  }];
  static #_2 = this.propDecorators = {
    component: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    componentInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    componentOutputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    targetContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['targetContainer', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
        static: true
      }]
    }],
    componentCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    componentLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
LazyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'gewd-lazy-component',
  template: `
    <ng-container #targetContainer>
    </ng-container>

    <ng-content *ngIf="!component"></ng-content>
    <ng-content *ngIf="componentLoading | async"
                select="[isLoading]"></ng-content>
  `,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef])], LazyComponent);

/***/ }),

/***/ 3574:
/*!****************************************!*\
  !*** ./libs/lazy/loader/public_api.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GewdLazyLoaderModule: () => (/* reexport safe */ _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__.GewdLazyLoaderModule),
/* harmony export */   LazyComponent: () => (/* reexport safe */ _lazy_component__WEBPACK_IMPORTED_MODULE_0__.LazyComponent),
/* harmony export */   LazyModuleComponent: () => (/* reexport safe */ _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__.LazyModuleComponent),
/* harmony export */   REGISTORY_LAZY_LOADED_MODULE_TOKEN: () => (/* reexport safe */ _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__.REGISTORY_LAZY_LOADED_MODULE_TOKEN)
/* harmony export */ });
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy.component */ 7472);
/* harmony import */ var _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gewd-lazy-loader.module */ 5281);
/* harmony import */ var _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-module.component */ 9958);




/***/ }),

/***/ 3706:
/*!*************************************!*\
  !*** ./libs/lazy/registry/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLoaderRegistry: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DynamicLoaderRegistry)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 7072);


/***/ }),

/***/ 7072:
/*!******************************************!*\
  !*** ./libs/lazy/registry/public_api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLoaderRegistry: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_0__.DynamicLoaderRegistry)
/* harmony export */ });
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ 742);


/***/ }),

/***/ 742:
/*!****************************************!*\
  !*** ./libs/lazy/registry/registry.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicLoaderRegistry: () => (/* binding */ DynamicLoaderRegistry)
/* harmony export */ });
class DynamicLoaderRegistry {
  // Registry + Cache
  static #_ = this.LazyComponents = {};
  static RegisterLazyComponent(componentName, lazyImport) {
    DynamicLoaderRegistry.LazyComponents[componentName] = lazyImport;
  }
  // Registry
  static #_2 = this.LazyModuleComponents = {};
  static RegisterLazyModuleComponent(moduleName, lazyImport) {
    DynamicLoaderRegistry.LazyModuleComponents[moduleName] = lazyImport;
  }
}

/***/ }),

/***/ 4279:
/*!**********************************!*\
  !*** ./libs/lazy/utils/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lazy: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Lazy)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 1822);


/***/ }),

/***/ 2950:
/*!*********************************!*\
  !*** ./libs/lazy/utils/lazy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lazy: () => (/* binding */ Lazy)
/* harmony export */ });
class Lazy {
  static create(loader) {
    return new Lazy(loader);
  }
  constructor(loader) {
    this.loader = loader;
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

/***/ 1822:
/*!***************************************!*\
  !*** ./libs/lazy/utils/public_api.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lazy: () => (/* reexport safe */ _lazy__WEBPACK_IMPORTED_MODULE_0__.Lazy)
/* harmony export */ });
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ 2950);


/***/ }),

/***/ 9572:
/*!****************************************************!*\
  !*** ./libs/markdown/contracts/default-options.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MERMAID_OPTIONS: () => (/* binding */ DEFAULT_MERMAID_OPTIONS),
/* harmony export */   DEFAULT_PRISM_OPTIONS: () => (/* binding */ DEFAULT_PRISM_OPTIONS)
/* harmony export */ });
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

/***/ 7056:
/*!******************************************!*\
  !*** ./libs/markdown/contracts/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MERMAID_OPTIONS: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MERMAID_OPTIONS),
/* harmony export */   DEFAULT_PRISM_OPTIONS: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PRISM_OPTIONS)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 7991);


/***/ }),

/***/ 7991:
/*!***********************************************!*\
  !*** ./libs/markdown/contracts/public_api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MERMAID_OPTIONS: () => (/* reexport safe */ _default_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MERMAID_OPTIONS),
/* harmony export */   DEFAULT_PRISM_OPTIONS: () => (/* reexport safe */ _default_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_PRISM_OPTIONS)
/* harmony export */ });
/* harmony import */ var _worker_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker.interface */ 1423);
/* harmony import */ var _default_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-options */ 9572);



/***/ }),

/***/ 1423:
/*!*****************************************************!*\
  !*** ./libs/markdown/contracts/worker.interface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 602:
/*!***************************************!*\
  !*** ./libs/markdown/module/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MarkdownModule),
/* harmony export */   RenderMarkdownComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RenderMarkdownComponent)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 4892);


/***/ }),

/***/ 331:
/*!*************************************************!*\
  !*** ./libs/markdown/module/markdown.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownModule: () => (/* binding */ MarkdownModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ 5140);




let MarkdownModule = class MarkdownModule {};
MarkdownModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  declarations: [_render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_0__.RenderMarkdownComponent],
  exports: [_render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_0__.RenderMarkdownComponent],
  providers: []
})], MarkdownModule);

/***/ }),

/***/ 4892:
/*!********************************************!*\
  !*** ./libs/markdown/module/public_api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownModule: () => (/* reexport safe */ _markdown_module__WEBPACK_IMPORTED_MODULE_0__.MarkdownModule),
/* harmony export */   RenderMarkdownComponent: () => (/* reexport safe */ _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__.RenderMarkdownComponent)
/* harmony export */ });
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.module */ 331);
/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ 5140);



/***/ }),

/***/ 5140:
/*!***************************************************************************!*\
  !*** ./libs/markdown/module/render-markdown/render-markdown.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderMarkdownComponent: () => (/* binding */ RenderMarkdownComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _render_markdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-markdown.component.html?ngResource */ 4440);
/* harmony import */ var _render_markdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-markdown.component.scss?ngResource */ 1564);
/* harmony import */ var _render_markdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_render_markdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/service */ 8254);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);








let RenderMarkdownComponent = class RenderMarkdownComponent {
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
  constructor(service, element, sanitizer, cache) {
    this.service = service;
    this.element = element;
    this.sanitizer = sanitizer;
    this.cache = cache;
    this.showRawMd = false;
    this.useCache = false;
    this.allowMermaid = true;
    this.onLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this._htmlToShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject("");
    this.parsedHtml$ = this._htmlToShow$;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.compile();
    })();
  }
  onClick(e) {
    let target = e.target;
    let aHref = null;
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
  compile() {
    var _this2 = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this2.useCache) {
          const cachedMarkdown = yield _this2.cache.getCached(_this2._markdown);
          if (!!cachedMarkdown) {
            _this2._htmlToShow$.next(_this2.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));
            return;
          }
        }
        const parsedHtml = yield _this2.service.compileMarkdown(_this2._markdown, _this2.allowMermaid);
        _this2._htmlToShow$.next(_this2.sanitizer.bypassSecurityTrustHtml(parsedHtml));
        if (_this2.useCache) {
          _this2.cache.saveCached(_this2._markdown, parsedHtml);
        }
      } catch (er) {
        console.error(er);
        _this2._htmlToShow$.next(er);
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__.MarkdownService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
  }, {
    type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__.MarkdownCacheService
  }];
  static #_2 = this.propDecorators = {
    showRawMd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    useCache: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    allowMermaid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mermaidTheme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    markdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onLinkClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener,
      args: ['click', ['$event']]
    }]
  };
};
RenderMarkdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'gewd-markdown',
  template: _render_markdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_render_markdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__.MarkdownService, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer, _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__.MarkdownCacheService])], RenderMarkdownComponent);

/***/ }),

/***/ 8254:
/*!****************************************!*\
  !*** ./libs/markdown/service/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownCacheService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MarkdownCacheService),
/* harmony export */   MarkdownOptionsInjectorToken: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MarkdownOptionsInjectorToken),
/* harmony export */   MarkdownService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MarkdownService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 4422);


/***/ }),

/***/ 1760:
/*!**************************************************!*\
  !*** ./libs/markdown/service/injection-token.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownOptionsInjectorToken: () => (/* binding */ MarkdownOptionsInjectorToken)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MarkdownOptionsInjectorToken');

/***/ }),

/***/ 5329:
/*!*********************************************************!*\
  !*** ./libs/markdown/service/markdown-cache.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownCacheService: () => (/* binding */ MarkdownCacheService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


let MarkdownCacheService = class MarkdownCacheService {
  getCached(rawMarkdown) {
    return Promise.resolve('');
  }
  saveCached(rawMarkdown, renderedMarkdown) {}
  getCachedPart(type, raw) {
    return Promise.resolve('');
  }
  saveCachedPart(type, raw, rendered) {}
};
MarkdownCacheService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], MarkdownCacheService);

/***/ }),

/***/ 1158:
/*!***************************************************!*\
  !*** ./libs/markdown/service/markdown.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownService: () => (/* binding */ MarkdownService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! comlink */ 48);
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown/contracts */ 7056);
/* harmony import */ var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown-cache.service */ 5329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injection-token */ 1760);
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown/utils */ 1197);









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
    this.mermaidConfig = Object.assign({}, _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MERMAID_OPTIONS, this.markdownOptions.mermaidOptions);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(platformId)) {
      this.workerProxy = (0,comlink__WEBPACK_IMPORTED_MODULE_6__.wrap)(markdownOptions.getWorker());
      if (markdownOptions.options) {
        this.workerProxy.init(markdownOptions.options);
      }
    }
    if (markdownOptions.mermaidPath) {
      this.canTriggerMermaidLoad = true;
      this.mermaidCacheKey = `mermaid_${this.mermaidConfig.theme}_${(0,_gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__.simpleHash)(this.mermaidConfig.themeCSS)}`;
    }
  }
  compileMarkdown(str, triggerMermaid = false) {
    var _this = this;
    return (0,_home_runner_work_gewd_gewd_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.workerProxy) {
        return;
      }
      let parsedMarkdown = yield _this.workerProxy.compile(str);
      if (triggerMermaid && parsedMarkdown.match(/class="mermaid"/)) {
        yield _this.triggerMermaidLoadScript();
        const mermaidInstance = window.mermaid;
        if (mermaidInstance) {
          const matched = parsedMarkdown.match(compiledRegex);
          for (const mermaid of matched) {
            const innerContent = _this.cleanUpMermaidRaw(mermaid);
            let rendered = '';
            const cached = yield _this.cache.getCachedPart(_this.mermaidCacheKey, innerContent);
            if (!!cached) {
              rendered = cached;
            } else {
              let errorStr = "";
              try {
                mermaidInstance.parse(innerContent);
              } catch (e) {
                errorStr = e.str;
              }
              if (!errorStr) {
                rendered = mermaidInstance.render(`sub${renderId++}`, innerContent, () => {});
                _this.cache.saveCachedPart(_this.mermaidCacheKey, innerContent, rendered);
              } else {
                rendered = `<pre>${errorStr}\n${innerContent}</pre>`;
              }
            }
            parsedMarkdown = parsedMarkdown.replace(mermaid, `<pre><code class="mermaid">${rendered}</code></pre>`);
          }
        }
      }
      return parsedMarkdown;
    })();
  }
  cleanUpMermaidRaw(mermaidRaw) {
    return mermaidRaw.replace(/&gt;/mg, '>').replace(/&lt;/mg, '<').replace('<div class="mermaid">', '').replace('</div>', '');
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
  static #_ = this.ctorParameters = () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_injection_token__WEBPACK_IMPORTED_MODULE_3__.MarkdownOptionsInjectorToken]
    }]
  }, {
    type: _markdown_cache_service__WEBPACK_IMPORTED_MODULE_2__.MarkdownCacheService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID]
    }]
  }];
};
MarkdownService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [Object, _markdown_cache_service__WEBPACK_IMPORTED_MODULE_2__.MarkdownCacheService, Document, Object])], MarkdownService);

/***/ }),

/***/ 4422:
/*!*********************************************!*\
  !*** ./libs/markdown/service/public_api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownCacheService: () => (/* reexport safe */ _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__.MarkdownCacheService),
/* harmony export */   MarkdownOptionsInjectorToken: () => (/* reexport safe */ _injection_token__WEBPACK_IMPORTED_MODULE_2__.MarkdownOptionsInjectorToken),
/* harmony export */   MarkdownService: () => (/* reexport safe */ _markdown_service__WEBPACK_IMPORTED_MODULE_0__.MarkdownService)
/* harmony export */ });
/* harmony import */ var _markdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.service */ 1158);
/* harmony import */ var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-cache.service */ 5329);
/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injection-token */ 1760);




/***/ }),

/***/ 1197:
/*!**************************************!*\
  !*** ./libs/markdown/utils/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleHash: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.simpleHash)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 3380);


/***/ }),

/***/ 3380:
/*!*******************************************!*\
  !*** ./libs/markdown/utils/public_api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleHash: () => (/* reexport safe */ _simple_hash__WEBPACK_IMPORTED_MODULE_0__.simpleHash)
/* harmony export */ });
/* harmony import */ var _simple_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-hash */ 1397);


/***/ }),

/***/ 1397:
/*!********************************************!*\
  !*** ./libs/markdown/utils/simple-hash.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleHash: () => (/* binding */ simpleHash)
/* harmony export */ });
function simpleHash(str) {
  let hash = 0,
    i,
    chr;
  if (!str || str.length === 0) return '';
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    // tslint:disable-next-line:no-bitwise
    hash = (hash << 5) - hash + chr;
    // tslint:disable-next-line:no-bitwise
    hash |= 0; // Convert to 32bit integer
  }

  return hash.toString(16);
}

/***/ }),

/***/ 2377:
/*!*****************************************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/custom-form-control.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFormControlComponent: () => (/* binding */ CustomFormControlComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
var CustomFormControlComponent_1;






let CustomFormControlComponent = class CustomFormControlComponent {
  static #_ = CustomFormControlComponent_1 = this;
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
  constructor(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._formField = _formField;
    this.ngControl = ngControl;
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.stateChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.stateChanges = this.stateChangeSubject;
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }
  ngOnInit() {}
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  setDescribedByIds(ids) {
    const controlElement = this._elementRef.nativeElement;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }
  onContainerClick() {}
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
  ngOnChanges({
    value
  }) {
    if (value && this.onChange) {
      this.onChange(value.currentValue);
      this.stateChangeSubject.next();
    }
  }
  static #_2 = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Self
    }]
  }];
  static #_3 = this.propDecorators = {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['aria-describedby']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    focused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
CustomFormControlComponent = CustomFormControlComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'gewd-custom-form-control',
  template: `<ng-content></ng-content>`,
  providers: [{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldControl,
    useExisting: CustomFormControlComponent_1
  }]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl])], CustomFormControlComponent);

/***/ }),

/***/ 4851:
/*!**************************************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/custom-form-control.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFormControlModule: () => (/* binding */ CustomFormControlModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-form-control.component */ 2377);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





let CustomFormControlModule = class CustomFormControlModule {};
CustomFormControlModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_custom_form_control_component__WEBPACK_IMPORTED_MODULE_0__.CustomFormControlComponent],
  exports: [_custom_form_control_component__WEBPACK_IMPORTED_MODULE_0__.CustomFormControlComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
})], CustomFormControlModule);

/***/ }),

/***/ 3002:
/*!*****************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFormControlComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CustomFormControlComponent),
/* harmony export */   CustomFormControlModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CustomFormControlModule)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 7375);


/***/ }),

/***/ 7375:
/*!**********************************************************!*\
  !*** ./libs/mat-utils/custom-form-control/public_api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFormControlComponent: () => (/* reexport safe */ _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__.CustomFormControlComponent),
/* harmony export */   CustomFormControlModule: () => (/* reexport safe */ _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__.CustomFormControlModule)
/* harmony export */ });
/* harmony import */ var _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-form-control.module */ 4851);
/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-form-control.component */ 2377);



/***/ }),

/***/ 8021:
/*!************************************************!*\
  !*** ./libs/mat-utils/material-icons/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REGISTORY_ICONS_PAIR_TOKEN: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.REGISTORY_ICONS_PAIR_TOKEN),
/* harmony export */   REGISTRY_ICONS_PAIR_TOKEN: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.REGISTRY_ICONS_PAIR_TOKEN),
/* harmony export */   RegisterIconsModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RegisterIconsModule),
/* harmony export */   registerIcons: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.registerIcons)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 6454);


/***/ }),

/***/ 6454:
/*!*****************************************************!*\
  !*** ./libs/mat-utils/material-icons/public_api.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REGISTORY_ICONS_PAIR_TOKEN: () => (/* reexport safe */ _register_icons_module__WEBPACK_IMPORTED_MODULE_1__.REGISTORY_ICONS_PAIR_TOKEN),
/* harmony export */   REGISTRY_ICONS_PAIR_TOKEN: () => (/* reexport safe */ _register_icons_module__WEBPACK_IMPORTED_MODULE_1__.REGISTRY_ICONS_PAIR_TOKEN),
/* harmony export */   RegisterIconsModule: () => (/* reexport safe */ _register_icons_module__WEBPACK_IMPORTED_MODULE_1__.RegisterIconsModule),
/* harmony export */   registerIcons: () => (/* reexport safe */ _register_icons__WEBPACK_IMPORTED_MODULE_0__.registerIcons)
/* harmony export */ });
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register_icons */ 1229);
/* harmony import */ var _register_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register_icons.module */ 4455);



/***/ }),

/***/ 4455:
/*!****************************************************************!*\
  !*** ./libs/mat-utils/material-icons/register_icons.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REGISTORY_ICONS_PAIR_TOKEN: () => (/* binding */ REGISTORY_ICONS_PAIR_TOKEN),
/* harmony export */   REGISTRY_ICONS_PAIR_TOKEN: () => (/* binding */ REGISTRY_ICONS_PAIR_TOKEN),
/* harmony export */   RegisterIconsModule: () => (/* binding */ RegisterIconsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register_icons */ 1229);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
var RegisterIconsModule_1;






const REGISTRY_ICONS_PAIR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('@gewd/mat-utils/RegistryIconsPair');
/**
 * @deprecated Import & use REGISTRY_ICONS_PAIR_TOKEN instead
 */
const REGISTORY_ICONS_PAIR_TOKEN = REGISTRY_ICONS_PAIR_TOKEN;
let RegisterIconsModule = class RegisterIconsModule {
  static #_ = RegisterIconsModule_1 = this;
  static register(useValue) {
    return {
      ngModule: RegisterIconsModule_1,
      providers: [{
        provide: REGISTRY_ICONS_PAIR_TOKEN,
        useValue,
        multi: true
      }]
    };
  }
  constructor(iconRegistry, sanitizer, registryIconsPairsArray) {
    for (const iconPair of registryIconsPairsArray) {
      (0,_register_icons__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(iconRegistry, sanitizer, iconPair);
    }
  }
  static #_2 = this.ctorParameters = () => [{
    type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [REGISTRY_ICONS_PAIR_TOKEN]
    }]
  }];
};
RegisterIconsModule = RegisterIconsModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, Array])], RegisterIconsModule);

/***/ }),

/***/ 1229:
/*!*********************************************************!*\
  !*** ./libs/mat-utils/material-icons/register_icons.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerIcons: () => (/* binding */ registerIcons)
/* harmony export */ });
function registerIcons(iconRegistry, sanitizer, iconPair) {
  for (const icon of iconPair.iconArray) {
    iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`${iconPair.pathToIcons}/${icon}.svg`));
  }
}

/***/ }),

/***/ 3113:
/*!*************************************************************************!*\
  !*** ./libs/ng-utils/bootstrap-component/bootstrap-component.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOOTSTRAP_COMPONENT_TOKEN: () => (/* binding */ BOOTSTRAP_COMPONENT_TOKEN),
/* harmony export */   BootstrapComponentModule: () => (/* binding */ BootstrapComponentModule),
/* harmony export */   bootstrapComponent: () => (/* binding */ bootstrapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
var BootstrapComponentModule_1;



const BOOTSTRAP_COMPONENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@gewd/ng-utils/BootstrapComponentConfig');
function bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig) {
  const domElement = document.createElement(bootstrapConfig.elementName);
  document.body.append(domElement);
  const factory = resolver.resolveComponentFactory(bootstrapConfig.component);
  const ref = factory.create(injector, [], domElement);
  appRef.attachView(ref.hostView);
}
/** @dynamic - allows Document in ngc build */
let BootstrapComponentModule = class BootstrapComponentModule {
  static #_ = BootstrapComponentModule_1 = this;
  static component(useValue) {
    return {
      ngModule: BootstrapComponentModule_1,
      providers: [{
        provide: BOOTSTRAP_COMPONENT_TOKEN,
        useValue,
        multi: true
      }]
    };
  }
  constructor(document, resolver, injector, appRef, bootstrapConfigs) {
    for (const bootstrapConfig of bootstrapConfigs) {
      bootstrapComponent(document, resolver, injector, appRef, bootstrapConfig);
    }
  }
  static #_2 = this.ctorParameters = () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
  }, {
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [BOOTSTRAP_COMPONENT_TOKEN]
    }]
  }];
};
BootstrapComponentModule = BootstrapComponentModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef, Array])], BootstrapComponentModule);

/***/ }),

/***/ 4816:
/*!****************************************************!*\
  !*** ./libs/ng-utils/bootstrap-component/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOOTSTRAP_COMPONENT_TOKEN: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.BOOTSTRAP_COMPONENT_TOKEN),
/* harmony export */   BootstrapComponentModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponentModule),
/* harmony export */   bootstrapComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.bootstrapComponent)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 1928);


/***/ }),

/***/ 1928:
/*!*********************************************************!*\
  !*** ./libs/ng-utils/bootstrap-component/public_api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOOTSTRAP_COMPONENT_TOKEN: () => (/* reexport safe */ _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__.BOOTSTRAP_COMPONENT_TOKEN),
/* harmony export */   BootstrapComponentModule: () => (/* reexport safe */ _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponentModule),
/* harmony export */   bootstrapComponent: () => (/* reexport safe */ _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__.bootstrapComponent)
/* harmony export */ });
/* harmony import */ var _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap-component.module */ 3113);


/***/ }),

/***/ 4424:
/*!*******************************************!*\
  !*** ./libs/ng-utils/components/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimplePagerComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SimplePagerComponent),
/* harmony export */   SimplePagerModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SimplePagerModule)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 4239);


/***/ }),

/***/ 4239:
/*!************************************************!*\
  !*** ./libs/ng-utils/components/public_api.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimplePagerComponent: () => (/* reexport safe */ _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__.SimplePagerComponent),
/* harmony export */   SimplePagerModule: () => (/* reexport safe */ _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__.SimplePagerModule)
/* harmony export */ });
/* harmony import */ var _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-pager/simple-pager.module */ 5777);
/* harmony import */ var _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-pager/simple-pager.component */ 8553);



/***/ }),

/***/ 8553:
/*!*************************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimplePagerComponent: () => (/* binding */ SimplePagerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _simple_pager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-pager.component.html?ngResource */ 8658);
/* harmony import */ var _simple_pager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-pager.component.scss?ngResource */ 1739);
/* harmony import */ var _simple_pager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_simple_pager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




let SimplePagerComponent = class SimplePagerComponent {
  constructor() {
    this.position = 0;
  }
  selectPrev() {
    if (this.position === 0) {
      return;
    }
    this.position--;
  }
  selectNext() {
    if (this.position === this.items.length - 1) {
      return;
    }
    this.position++;
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef]
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
SimplePagerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'simple-pager',
  template: _simple_pager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_simple_pager_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], SimplePagerComponent);

/***/ }),

/***/ 5777:
/*!**********************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimplePagerModule: () => (/* binding */ SimplePagerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _simple_pager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-pager.component */ 8553);




let SimplePagerModule = class SimplePagerModule {};
SimplePagerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_simple_pager_component__WEBPACK_IMPORTED_MODULE_0__.SimplePagerComponent],
  exports: [_simple_pager_component__WEBPACK_IMPORTED_MODULE_0__.SimplePagerComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
})], SimplePagerModule);

/***/ }),

/***/ 4730:
/*!*****************************************************!*\
  !*** ./libs/ng-utils/css-props/css-props.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssPropsModule: () => (/* binding */ CssPropsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



/** @dynamic - allows Document in ngc build */
let CssPropsModule = class CssPropsModule {};
CssPropsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
})], CssPropsModule);

/***/ }),

/***/ 3478:
/*!******************************************************!*\
  !*** ./libs/ng-utils/css-props/css-props.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssPropsService: () => (/* binding */ CssPropsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _gewd_utils_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gewd/utils/style */ 8761);




/** @dynamic - allows Document in ngc build */
let CssPropsService = class CssPropsService {
  constructor(document, ngZone) {
    this.document = document;
    this.ngZone = ngZone;
  }
  updateCustomCss(styleId, customCss) {
    this.ngZone.runOutsideAngular(() => {
      (0,_gewd_utils_style__WEBPACK_IMPORTED_MODULE_0__.updateDynamicStyle)(this.document, styleId, customCss);
    });
  }
  updateDocumentVars(cssProps) {
    this.ngZone.runOutsideAngular(() => {
      (0,_gewd_utils_style__WEBPACK_IMPORTED_MODULE_0__.updateCssProps)(this.document.body, cssProps);
    });
  }
  updateElementVars(element, cssProps) {
    this.ngZone.runOutsideAngular(() => {
      (0,_gewd_utils_style__WEBPACK_IMPORTED_MODULE_0__.updateCssProps)(element, cssProps);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }];
};
CssPropsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone])], CssPropsService);

/***/ }),

/***/ 9286:
/*!********************************************************!*\
  !*** ./libs/ng-utils/css-props/element-css.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementCssService: () => (/* binding */ ElementCssService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-props.service */ 3478);



let ElementCssService = class ElementCssService {
  constructor(cssPropsService, elementRef) {
    this.cssPropsService = cssPropsService;
    this.elementRef = elementRef;
  }
  updateElementVars(cssProps) {
    this.cssPropsService.updateElementVars(this.elementRef.nativeElement, cssProps);
  }
  static #_ = this.ctorParameters = () => [{
    type: _css_props_service__WEBPACK_IMPORTED_MODULE_0__.CssPropsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }];
};
ElementCssService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_css_props_service__WEBPACK_IMPORTED_MODULE_0__.CssPropsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], ElementCssService);

/***/ }),

/***/ 1965:
/*!******************************************!*\
  !*** ./libs/ng-utils/css-props/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssPropsModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CssPropsModule),
/* harmony export */   CssPropsService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CssPropsService),
/* harmony export */   ElementCssService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ElementCssService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 2662);


/***/ }),

/***/ 2662:
/*!***********************************************!*\
  !*** ./libs/ng-utils/css-props/public_api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssPropsModule: () => (/* reexport safe */ _css_props_module__WEBPACK_IMPORTED_MODULE_0__.CssPropsModule),
/* harmony export */   CssPropsService: () => (/* reexport safe */ _css_props_service__WEBPACK_IMPORTED_MODULE_1__.CssPropsService),
/* harmony export */   ElementCssService: () => (/* reexport safe */ _element_css_service__WEBPACK_IMPORTED_MODULE_2__.ElementCssService)
/* harmony export */ });
/* harmony import */ var _css_props_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-props.module */ 4730);
/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-props.service */ 3478);
/* harmony import */ var _element_css_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-css.service */ 9286);




/***/ }),

/***/ 8456:
/*!***************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicPortalModule: () => (/* binding */ DynamicPortalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-portal/dynamic-portal.component */ 4884);
/* harmony import */ var _portal_source_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal-source.directive */ 3850);





let DynamicPortalModule = class DynamicPortalModule {};
DynamicPortalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_0__.DynamicPortalComponent, _portal_source_directive__WEBPACK_IMPORTED_MODULE_1__.PortalSourceDirective],
  exports: [_dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_0__.DynamicPortalComponent, _portal_source_directive__WEBPACK_IMPORTED_MODULE_1__.PortalSourceDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  providers: []
})], DynamicPortalModule);

/***/ }),

/***/ 4884:
/*!*********************************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicPortalComponent: () => (/* binding */ DynamicPortalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _dynamic_portal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-portal.component.html?ngResource */ 9041);
/* harmony import */ var _dynamic_portal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-portal.component.scss?ngResource */ 6641);
/* harmony import */ var _dynamic_portal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dynamic_portal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portal-hub.service */ 1859);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1891);







let DynamicPortalComponent = class DynamicPortalComponent {
  constructor(hub) {
    this.hub = hub;
    this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    this.templateToShow$ = this.key$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(key => this.hub.getTemplate$(key)));
  }
  ngOnInit() {
    this.checkKeyAndPushTemplate();
  }
  ngOnChanges(changes) {
    if (changes['key']) {
      this.checkKeyAndPushTemplate();
    }
  }
  checkKeyAndPushTemplate() {
    this.key$.next(this.key);
  }
  static #_ = this.ctorParameters = () => [{
    type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__.PortalHubService
  }];
  static #_2 = this.propDecorators = {
    key: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
DynamicPortalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dynamic-portal',
  template: _dynamic_portal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [(_dynamic_portal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_portal_hub_service__WEBPACK_IMPORTED_MODULE_2__.PortalHubService])], DynamicPortalComponent);

/***/ }),

/***/ 462:
/*!***********************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicPortalComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DynamicPortalComponent),
/* harmony export */   DynamicPortalModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DynamicPortalModule),
/* harmony export */   PortalHubService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.PortalHubService),
/* harmony export */   PortalSourceAction: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.PortalSourceAction),
/* harmony export */   PortalSourceDirective: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.PortalSourceDirective)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 3228);


/***/ }),

/***/ 1859:
/*!************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/portal-hub.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortalHubService: () => (/* binding */ PortalHubService),
/* harmony export */   PortalSourceAction: () => (/* binding */ PortalSourceAction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5043);




class PortalSourceAction {
  constructor(type, key) {
    this.type = type;
    this.key = key;
  }
}
let PortalHubService = class PortalHubService {
  constructor() {
    this.templateSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.templateSourceHub = {};
  }
  getTemplate$(key) {
    return this.templateSourceSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(a => a.key === key), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(a => {
      switch (a.type) {
        case 0 /* PortalSourceActionType.Added */:
          {
            return this.templateSourceHub[key];
          }
        case 1 /* PortalSourceActionType.Removed */:
          {
            return null;
          }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this.templateSourceHub[key]));
  }
  registerTemplate(key, templateRef) {
    if (this.templateSourceHub[key]) {
      return;
    }
    this.templateSourceHub[key] = templateRef;
    this.templateSourceSubject.next(new PortalSourceAction(0 /* PortalSourceActionType.Added */, key));
  }
  unregisterTemplate(key) {
    if (!this.templateSourceHub[key]) {
      return;
    }
    this.templateSourceHub[key] = null;
    this.templateSourceSubject.next(new PortalSourceAction(1 /* PortalSourceActionType.Removed */, key));
  }
  static #_ = this.ctorParameters = () => [];
};
PortalHubService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])], PortalHubService);

/***/ }),

/***/ 3850:
/*!*****************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/portal-source.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortalSourceDirective: () => (/* binding */ PortalSourceDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-hub.service */ 1859);



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
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
  }, {
    type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_0__.PortalHubService
  }];
  static #_2 = this.propDecorators = {
    key: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['dynamicPortalSource']
    }]
  };
};
PortalSourceDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[dynamicPortalSource]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, _portal_hub_service__WEBPACK_IMPORTED_MODULE_0__.PortalHubService])], PortalSourceDirective);

/***/ }),

/***/ 3228:
/*!****************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/public_api.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicPortalComponent: () => (/* reexport safe */ _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__.DynamicPortalComponent),
/* harmony export */   DynamicPortalModule: () => (/* reexport safe */ _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__.DynamicPortalModule),
/* harmony export */   PortalHubService: () => (/* reexport safe */ _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__.PortalHubService),
/* harmony export */   PortalSourceAction: () => (/* reexport safe */ _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__.PortalSourceAction),
/* harmony export */   PortalSourceDirective: () => (/* reexport safe */ _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__.PortalSourceDirective)
/* harmony export */ });
/* harmony import */ var _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-portal.module */ 8456);
/* harmony import */ var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-portal/dynamic-portal.component */ 4884);
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-hub.service */ 1859);
/* harmony import */ var _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal-source.directive */ 3850);





/***/ }),

/***/ 1451:
/*!*****************************************!*\
  !*** ./libs/ng-utils/morphdom/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphdomDirective: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MorphdomDirective),
/* harmony export */   MorphdomModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MorphdomModule),
/* harmony export */   MorphdomService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MorphdomService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 2631);


/***/ }),

/***/ 8120:
/*!******************************************************!*\
  !*** ./libs/ng-utils/morphdom/morphdom.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphdomDirective: () => (/* binding */ MorphdomDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _morphdom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphdom.service */ 2179);



let MorphdomDirective = class MorphdomDirective {
  constructor(element, morphService) {
    this.element = element;
    this.morphService = morphService;
    this.tagName = 'div';
    this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges({
    morphDom
  }) {
    if (morphDom && morphDom.currentValue) {
      this.morphService.morphElement(this.element, `<${this.tagName}>${morphDom.currentValue}</${this.tagName}>`, this.options);
      this.done.emit(this.element);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _morphdom_service__WEBPACK_IMPORTED_MODULE_0__.MorphdomService
  }];
  static #_2 = this.propDecorators = {
    morphDom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['morphDom']
    }],
    tagName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    done: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  };
};
MorphdomDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  // tslint:disable-next-line:directive-selector
  selector: '[morphDom]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef, _morphdom_service__WEBPACK_IMPORTED_MODULE_0__.MorphdomService])], MorphdomDirective);

/***/ }),

/***/ 1174:
/*!***************************************************!*\
  !*** ./libs/ng-utils/morphdom/morphdom.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphdomModule: () => (/* binding */ MorphdomModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _morphdom_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphdom.directive */ 8120);




let MorphdomModule = class MorphdomModule {};
MorphdomModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_morphdom_directive__WEBPACK_IMPORTED_MODULE_0__.MorphdomDirective],
  exports: [_morphdom_directive__WEBPACK_IMPORTED_MODULE_0__.MorphdomDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
})], MorphdomModule);

/***/ }),

/***/ 2179:
/*!****************************************************!*\
  !*** ./libs/ng-utils/morphdom/morphdom.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphdomService: () => (/* binding */ MorphdomService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morphdom */ 9646);



let MorphdomService = class MorphdomService {
  constructor(ngZone) {
    this.ngZone = ngZone;
  }
  morphElement(element, newElementContent, options) {
    this.ngZone.runOutsideAngular(() => {
      (0,morphdom__WEBPACK_IMPORTED_MODULE_0__["default"])(element.nativeElement, newElementContent, options);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }];
};
MorphdomService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone])], MorphdomService);

/***/ }),

/***/ 2631:
/*!**********************************************!*\
  !*** ./libs/ng-utils/morphdom/public_api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphdomDirective: () => (/* reexport safe */ _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__.MorphdomDirective),
/* harmony export */   MorphdomModule: () => (/* reexport safe */ _morphdom_module__WEBPACK_IMPORTED_MODULE_0__.MorphdomModule),
/* harmony export */   MorphdomService: () => (/* reexport safe */ _morphdom_service__WEBPACK_IMPORTED_MODULE_2__.MorphdomService)
/* harmony export */ });
/* harmony import */ var _morphdom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphdom.module */ 1174);
/* harmony import */ var _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphdom.directive */ 8120);
/* harmony import */ var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morphdom.service */ 2179);




/***/ }),

/***/ 7088:
/*!*************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgErrorComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.NgErrorComponent),
/* harmony export */   NgErrorOverlayModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.NgErrorOverlayModule)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 6805);


/***/ }),

/***/ 3527:
/*!**************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandlerService: () => (/* binding */ ErrorHandlerService),
/* harmony export */   NG_ERROR_CONFIG_TOKEN: () => (/* binding */ NG_ERROR_CONFIG_TOKEN)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);



const DEFAULT_CONFIG = {
  zIndex: 10000,
  ignoreErrors: []
};
const NG_ERROR_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('@gewd/ng-utils/NgErrorConfig');
let ErrorHandlerService = class ErrorHandlerService {
  constructor(config) {
    this.config = config;
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
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
  static #_ = this.ctorParameters = () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [NG_ERROR_CONFIG_TOKEN]
    }]
  }];
};
ErrorHandlerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object])], ErrorHandlerService);

/***/ }),

/***/ 4895:
/*!******************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorOverlayComponent: () => (/* binding */ ErrorOverlayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _error_overlay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-overlay.component.html?ngResource */ 277);
/* harmony import */ var _error_overlay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-overlay.component.scss?ngResource */ 8654);
/* harmony import */ var _error_overlay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_overlay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! error-stack-parser */ 9010);
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_2__);





let ErrorOverlayComponent = class ErrorOverlayComponent {
  constructor() {}
  ngOnInit() {
    this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_2___default().parse(this.error);
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
ErrorOverlayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'error-overlay',
  template: _error_overlay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_error_overlay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])], ErrorOverlayComponent);

/***/ }),

/***/ 7646:
/*!****************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgErrorOverlayModule: () => (/* binding */ NgErrorOverlayModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-error.component */ 5065);
/* harmony import */ var _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-overlay/error-overlay.component */ 4895);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.service */ 3527);
/* harmony import */ var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/ng-utils/bootstrap-component */ 4816);
/* harmony import */ var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/components */ 4424);
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ 462);
var NgErrorOverlayModule_1;









let NgErrorOverlayModule = NgErrorOverlayModule_1 = class NgErrorOverlayModule {
  static config(useValue) {
    return {
      ngModule: NgErrorOverlayModule_1,
      providers: [{
        provide: _error_handler_service__WEBPACK_IMPORTED_MODULE_2__.NG_ERROR_CONFIG_TOKEN,
        useValue
      }]
    };
  }
};
NgErrorOverlayModule = NgErrorOverlayModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_ng_error_component__WEBPACK_IMPORTED_MODULE_0__.NgErrorComponent, _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_1__.ErrorOverlayComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__.BootstrapComponentModule.component({
    elementName: 'ng-error',
    component: _ng_error_component__WEBPACK_IMPORTED_MODULE_0__.NgErrorComponent
  }), _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_4__.SimplePagerModule, _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_5__.DynamicPortalModule],
  providers: [_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerService, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ErrorHandler,
    useExisting: _error_handler_service__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerService
  }]
})], NgErrorOverlayModule);

/***/ }),

/***/ 5065:
/*!***********************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgErrorComponent: () => (/* binding */ NgErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ng_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-error.component.html?ngResource */ 6151);
/* harmony import */ var _ng_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-error.component.scss?ngResource */ 5849);
/* harmony import */ var _ng_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.service */ 3527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ 1965);








let NgErrorComponent = class NgErrorComponent {
  constructor(errorService, cd, cssProps, element) {
    this.errorService = errorService;
    this.cd = cd;
    this.cssProps = cssProps;
    this.element = element;
    this.showIndex = 0;
    this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.errors$ = this.errorService.error$.pipe(
    // add all errors to an array
    // only keep the newest 10
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.scan)((a, c) => [c, ...a].slice(0, 10), []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => value.filter(v => !!v)));
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    cssProps.updateElementVars(element.nativeElement, {
      '--overlay-zindex': errorService.config.zIndex
    });
  }
  ngOnInit() {
    this.errors$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroy$)).subscribe(value => {
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
  static #_ = this.ctorParameters = () => [{
    type: _error_handler_service__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }, {
    type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__.CssPropsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
  }];
};
NgErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'ng-error',
  template: _ng_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ng_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerService, _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef, _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_3__.CssPropsService, _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef])], NgErrorComponent);

/***/ }),

/***/ 6805:
/*!******************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/public_api.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgErrorComponent: () => (/* reexport safe */ _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__.NgErrorComponent),
/* harmony export */   NgErrorOverlayModule: () => (/* reexport safe */ _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__.NgErrorOverlayModule)
/* harmony export */ });
/* harmony import */ var _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-error/ng-error.component */ 5065);
/* harmony import */ var _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-error/ng-error-overlay.module */ 7646);



/***/ }),

/***/ 1054:
/*!*******************************************!*\
  !*** ./libs/utils/style/dynamic-style.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleElement: () => (/* binding */ getStyleElement),
/* harmony export */   replaceCss: () => (/* binding */ replaceCss),
/* harmony export */   updateDynamicStyle: () => (/* binding */ updateDynamicStyle)
/* harmony export */ });
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
    styleTag.childNodes.forEach(child => {
      styleTag.removeChild(child);
    });
  }
  styleTag.appendChild(document.createTextNode(customCss));
}

/***/ }),

/***/ 8761:
/*!***********************************!*\
  !*** ./libs/utils/style/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleElement: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.getStyleElement),
/* harmony export */   parseTransformValues: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.parseTransformValues),
/* harmony export */   replaceCss: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.replaceCss),
/* harmony export */   updateCssProps: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.updateCssProps),
/* harmony export */   updateDynamicStyle: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.updateDynamicStyle)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ 7872);


/***/ }),

/***/ 7225:
/*!**************************************************!*\
  !*** ./libs/utils/style/parseTransformValues.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseTransformValues: () => (/* binding */ parseTransformValues)
/* harmony export */ });
const cssTransformRegex = /\s?([a-zA-Z3]{1,12})\s?\(([0-9a-z\-.,\s]+)\)\s?/gm;
function parseTransformValues(transformString) {
  const names = [];
  const values = [];
  for (const foundArray of transformString.matchAll(cssTransformRegex)) {
    names.push(foundArray[1]);
    values.push(foundArray[2]);
  }
  return {
    names,
    values
  };
}

/***/ }),

/***/ 7872:
/*!****************************************!*\
  !*** ./libs/utils/style/public_api.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleElement: () => (/* reexport safe */ _dynamic_style__WEBPACK_IMPORTED_MODULE_1__.getStyleElement),
/* harmony export */   parseTransformValues: () => (/* reexport safe */ _parseTransformValues__WEBPACK_IMPORTED_MODULE_2__.parseTransformValues),
/* harmony export */   replaceCss: () => (/* reexport safe */ _dynamic_style__WEBPACK_IMPORTED_MODULE_1__.replaceCss),
/* harmony export */   updateCssProps: () => (/* reexport safe */ _update_css_props__WEBPACK_IMPORTED_MODULE_0__.updateCssProps),
/* harmony export */   updateDynamicStyle: () => (/* reexport safe */ _dynamic_style__WEBPACK_IMPORTED_MODULE_1__.updateDynamicStyle)
/* harmony export */ });
/* harmony import */ var _update_css_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-css-props */ 6701);
/* harmony import */ var _dynamic_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-style */ 1054);
/* harmony import */ var _parseTransformValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseTransformValues */ 7225);




/***/ }),

/***/ 6701:
/*!**********************************************!*\
  !*** ./libs/utils/style/update-css-props.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateCssProps: () => (/* binding */ updateCssProps)
/* harmony export */ });
function updateCssProps(element, cssProps) {
  const {
    style
  } = element;
  for (const [k, v] of Object.entries(cssProps)) {
    style.setProperty(k, v.toString(), 'important');
  }
}

/***/ }),

/***/ 1277:
/*!********************************************************************************!*\
  !*** ./apps/demo/src/app/example-panel/example-panel.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */`, "",{"version":3,"sources":["webpack://./apps/demo/src/app/example-panel/example-panel.component.css"],"names":[],"mappings":";AACA,4KAA4K","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6562:
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./libs/lazy/loader/lazy-module.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZXJyb3IgewogICAgICBjb2xvcjogcmVkOwogICAgfQogIA%3D%3D!./libs/lazy/loader/lazy-module.component.ts ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
    .error {
      color: red;
    }
  
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktbW9kdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxVQUFVO0lBQ1oiLCJmaWxlIjoibGF6eS1tb2R1bGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICAiXX0= */`, "",{"version":3,"sources":["webpack://./libs/lazy/loader/lazy-module.component.ts"],"names":[],"mappings":";IACI;MACE,UAAU;IACZ;;AAEJ,4TAA4T","sourcesContent":["\n    .error {\n      color: red;\n    }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7557:
/*!*********************************************************!*\
  !*** ./apps/demo/src/app/app.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Remove template code below
 */
:host {
  display: block;
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
}

.dynamic-portal-border {
  background: darkgreen;
  padding: 5px;
  margin: 15px 0;
  border: 2px dashed green;
  display: block;
}

.npm-link {
  height: 20px;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFJlbW92ZSB0ZW1wbGF0ZSBjb2RlIGJlbG93XG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLmR5bmFtaWMtcG9ydGFsLWJvcmRlciB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmVlbjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGdyZWVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5wbS1saW5rIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuIl19 */`, "",{"version":3,"sources":["webpack://./apps/demo/src/app/app.component.scss"],"names":[],"mappings":"AAAA;;EAAA;AAGA;EACE,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;EACA,cAAA;EACA,wBAAA;EACA,cAAA;AACF;;AAEA;EACE,YAAA;AACF;AACA,42BAA42B","sourcesContent":["/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.dynamic-portal-border {\n  background: darkgreen;\n  padding: 5px;\n  margin: 15px 0;\n  border: 2px dashed green;\n  display: block;\n}\n\n.npm-link {\n  height: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3474:
/*!*************************************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  background: #2e2e2e;
  display: block;
  border: 1px solid lightgray;
  padding: 4px;
  --editor-min-height: 100px;
  --editor-max-height: 100px;
  --editor-font-size: 14px;
  --editor-line-height: 1.5;
  overflow-y: auto;
  min-height: var(--editor-min-height);
  max-height: var(--editor-max-height);
}
:host :host-context(.mat-form-field) {
  border: 0;
  padding: 0;
  background: inherit;
  width: 100%;
}

.editor {
  position: relative;
  padding: 0;
  -moz-tab-size: 2ch;
       tab-size: 2ch;
  text-align: left;
  box-sizing: border-box;
  font-family: "Fira code", "Fira Mono", Consolas, Menlo, Courier, monospace;
  font-size: var(--editor-font-size);
  line-height: var(--editor-line-height);
  height: 100%;
}

/** shared styles */
textarea, .highlight-area {
  margin: 0;
  border: 0;
  padding: 0;
  background: none;
  box-sizing: inherit;
  display: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  -moz-tab-size: inherit;
       tab-size: inherit;
  text-indent: inherit;
  text-rendering: inherit;
  text-transform: inherit;
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  min-height: var(--editor-min-height);
}

textarea {
  outline: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  resize: none;
  overflow: hidden;
  caret-color: white;
  caret-shape: bar;
}
textarea:focus {
  outline: none !important;
}

.highlight-area {
  position: relative;
  pointer-events: none;
}

.editor__no-debounce textarea {
  -webkit-text-fill-color: transparent;
}

:not(.editor__no-debounce):not(.visible-highlight) textarea {
  color: inherit;
}
:not(.editor__no-debounce):not(.visible-highlight) .highlight-area {
  opacity: 0;
}
:not(.editor__no-debounce).visible-highlight textarea {
  -webkit-text-fill-color: transparent;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFVQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUdBLGdCQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtBQVpGO0FBTEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KOztBQVVBO0VBQ0Usa0JBQUE7RUFFQSxVQUFBO0VBRUEsa0JBQUE7T0FBQSxhQUFBO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUVGLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUFYRjs7QUFnQkEsbUJBQUE7QUFFQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUdBLG1DQUFBO0VBR0Esb0NBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF2QkY7QUF5QkU7RUFDRSx3QkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBeEJGOztBQTZCRTtFQUNFLG9DQUFBO0FBMUJKOztBQWdDSTtFQUNFLGNBQUE7QUE3Qk47QUFnQ0k7RUFDRyxVQUFBO0FBOUJQO0FBbUNJO0VBQ0Esb0NBQUE7QUFqQ0oiLCJmaWxlIjoiaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA0cHg7XG5cbiAgOmhvc3QtY29udGV4dCgubWF0LWZvcm0tZmllbGQpIHtcbiAgICBib3JkZXIgOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgLS1lZGl0b3ItbWluLWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLW1heC1oZWlnaHQ6IDEwMHB4O1xuICAtLWVkaXRvci1mb250LXNpemU6IDE0cHg7XG4gIC0tZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjU7XG5cblxuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIG1pbi1oZWlnaHQ6IHZhcigtLWVkaXRvci1taW4taGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogdmFyKC0tZWRpdG9yLW1heC1oZWlnaHQpO1xufVxuXG5cbi5lZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgcGFkZGluZzogMDtcblxuICB0YWItc2l6ZTogMmNoO1xuXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBjb2RlJywgJ0ZpcmEgTW9ubycsIENvbnNvbGFzLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IHZhcigtLWVkaXRvci1mb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZWRpdG9yLWxpbmUtaGVpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8vbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG4vKiogc2hhcmVkIHN0eWxlcyAqL1xuXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6MDtcblxuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgLy8gdHJhbnNpdGlvbjogMjBtcyBjb2xvciwgb3BhY2l0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cblxuICBtaW4taGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWluLWhlaWdodCk7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZ2hsaWdodC1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB7XG4gIHRleHRhcmVhIHtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSkge1xuICAmOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIHtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0LWFyZWEge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJi52aXNpYmxlLWhpZ2hsaWdodCB7XG4gICAgdGV4dGFyZWEge1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`, "",{"version":3,"sources":["webpack://./libs/components/highlight-editor/highlight-editor.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,cAAA;EAEA,2BAAA;EACA,YAAA;EAUA,0BAAA;EACA,0BAAA;EACA,wBAAA;EACA,yBAAA;EAGA,gBAAA;EAEA,oCAAA;EACA,oCAAA;AAZF;AALE;EACE,SAAA;EACA,UAAA;EACA,mBAAA;EACA,WAAA;AAOJ;;AAUA;EACE,kBAAA;EAEA,UAAA;EAEA,kBAAA;OAAA,aAAA;EAEE,gBAAA;EACA,sBAAA;EAEF,0EAAA;EACA,kCAAA;EACA,sCAAA;EACA,YAAA;AAXF;;AAgBA,mBAAA;AAEA;EACE,SAAA;EACA,SAAA;EACA,UAAA;EAEA,gBAAA;EAEA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,+BAAA;EACA,oBAAA;EACA,uBAAA;EACA,oBAAA;EACA,sBAAA;OAAA,iBAAA;EACA,oBAAA;EACA,uBAAA;EACA,uBAAA;EAEA,qBAAA;EACA,oBAAA;EACA,yBAAA;EAGA,mCAAA;EAGA,oCAAA;AArBF;;AAwBA;EACE,UAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EAGA,kBAAA;EACA,gBAAA;AAvBF;AAyBE;EACE,wBAAA;AAvBJ;;AA2BA;EACE,kBAAA;EACA,oBAAA;AAxBF;;AA6BE;EACE,oCAAA;AA1BJ;;AAgCI;EACE,cAAA;AA7BN;AAgCI;EACG,UAAA;AA9BP;AAmCI;EACA,oCAAA;AAjCJ;AAGA,gqIAAgqI","sourcesContent":[":host {\n  background: #2e2e2e;\n  display: block;\n\n  border: 1px solid lightgray;\n  padding: 4px;\n\n  :host-context(.mat-form-field) {\n    border : 0;\n    padding: 0;\n    background: inherit;\n    width: 100%;\n  }\n\n\n  --editor-min-height: 100px;\n  --editor-max-height: 100px;\n  --editor-font-size: 14px;\n  --editor-line-height: 1.5;\n\n\n  overflow-y: auto;\n\n  min-height: var(--editor-min-height);\n  max-height: var(--editor-max-height);\n}\n\n\n.editor {\n  position: relative;\n\n  padding: 0;\n\n  tab-size: 2ch;\n\n    text-align: left;\n    box-sizing: border-box;\n\n  font-family: 'Fira code', 'Fira Mono', Consolas, Menlo, Courier, monospace;\n  font-size: var(--editor-font-size);\n  line-height: var(--editor-line-height);\n  height: 100%;\n\n  //min-height: var(--editor-min-height);\n}\n\n/** shared styles */\n\ntextarea, .highlight-area {\n  margin: 0;\n  border: 0;\n  padding:0;\n\n  background: none;\n\n  box-sizing: inherit;\n  display: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-ligatures: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  tab-size: inherit;\n  text-indent: inherit;\n  text-rendering: inherit;\n  text-transform: inherit;\n\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n\n  // transition: 20ms color, opacity;\n  -webkit-font-smoothing: antialiased;\n\n\n  min-height: var(--editor-min-height);\n}\n\ntextarea {\n  outline: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  resize: none;\n  overflow: hidden;\n\n\n  caret-color: white;\n  caret-shape: bar;\n\n  &:focus {\n    outline: none !important;\n  }\n}\n\n.highlight-area {\n  position: relative;\n  pointer-events: none;\n\n}\n\n.editor__no-debounce {\n  textarea {\n    -webkit-text-fill-color: transparent;\n  }\n}\n\n:not(.editor__no-debounce) {\n  &:not(.visible-highlight) {\n    textarea {\n      color: inherit;\n    }\n\n    .highlight-area {\n       opacity: 0;\n    }\n  }\n\n  &.visible-highlight {\n    textarea {\n    -webkit-text-fill-color: transparent;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1564:
/*!****************************************************************************************!*\
  !*** ./libs/markdown/module/render-markdown/render-markdown.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host ::ng-deep foreignObject {
  overflow: visible;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUFnQixpQkFBQTtBQUFsQiIsImZpbGUiOiJyZW5kZXItbWFya2Rvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAvLyBmaXggbWVybWFpZCBvdmVyZmxvdyA6KVxuICBmb3JlaWduT2JqZWN0IHsgb3ZlcmZsb3c6IHZpc2libGU7IH1cbn1cbiJdfQ== */`, "",{"version":3,"sources":["webpack://./libs/markdown/module/render-markdown/render-markdown.component.scss"],"names":[],"mappings":"AAEE;EAAgB,iBAAA;AAAlB;AACA,gZAAgZ","sourcesContent":[":host ::ng-deep {\n  // fix mermaid overflow :)\n  foreignObject { overflow: visible; }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1739:
/*!**************************************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: flex;
  flex-direction: column;
}

.left-arrow, .right-arrow {
  --arrow-color: white;
}
.left-arrow svg path, .right-arrow svg path {
  fill: var(--arrow-color);
}
.left-arrow:hover:not(.disabled), .right-arrow:hover:not(.disabled) {
  cursor: pointer;
}
.left-arrow.disabled, .right-arrow.disabled {
  --arrow-color: gray;
}

.slot {
  position: relative;
  flex: 1;
  overflow-y: auto;
}

.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.position-label {
  margin-left: 1rem;
  margin-right: 1rem;
}

.navigation-row-panel {
  flex: 1;
  justify-content: flex-end;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1wYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjtBQUNFO0VBQ0Usd0JBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxPQUFBO0VBQ0EseUJBQUE7QUFGRiIsImZpbGUiOiJzaW1wbGUtcGFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sZWZ0LWFycm93LCAucmlnaHQtYXJyb3cge1xuICAtLWFycm93LWNvbG9yOiB3aGl0ZTtcblxuICBzdmcgcGF0aCB7XG4gICAgZmlsbDogdmFyKC0tYXJyb3ctY29sb3IpO1xuICB9XG5cbiAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgLS1hcnJvdy1jb2xvcjogZ3JheTtcbiAgfVxufVxuXG4uc2xvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zaXRpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ubmF2aWdhdGlvbi1yb3ctcGFuZWwge1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl19 */`, "",{"version":3,"sources":["webpack://./libs/ng-utils/components/simple-pager/simple-pager.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,oBAAA;AACF;AACE;EACE,wBAAA;AACJ;AAEE;EACE,eAAA;AAAJ;AAGE;EACE,mBAAA;AADJ;;AAKA;EACE,kBAAA;EACA,OAAA;EACA,gBAAA;AAFF;;AAKA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,iBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,OAAA;EACA,yBAAA;AAFF;AACA,g0CAAg0C","sourcesContent":[":host {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-arrow, .right-arrow {\n  --arrow-color: white;\n\n  svg path {\n    fill: var(--arrow-color);\n  }\n\n  &:hover:not(.disabled) {\n    cursor: pointer;\n  }\n\n  &.disabled {\n    --arrow-color: gray;\n  }\n}\n\n.slot {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.position-label {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.navigation-row-panel {\n  flex: 1;\n  justify-content: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6641:
/*!**********************************************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLXBvcnRhbC5jb21wb25lbnQuc2NzcyJ9 */`, "",{"version":3,"sources":["webpack://./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss"],"names":[],"mappings":";AACA,4KAA4K","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8654:
/*!*******************************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  color: rgb(232, 232, 232);
  font-family: Menlo, Consolas, monospace;
  font-size: large;
  line-height: 1.2;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.error {
  color: red;
}

.stack-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.stack-table {
  margin-top: 2rem;
  width: 100%;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.row.even {
  background: rgba(170, 170, 170, 0.2509803922);
}
.row.odd {
  background: rgba(204, 204, 204, 0.2509803922);
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkF6QlE7RUEwQlIsV0FBQTtBQURGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBSUU7RUFBUSw2Q0FBQTtBQUFWO0FBQ0U7RUFBTyw2Q0FBQTtBQUVUIiwiZmlsZSI6ImVycm9yLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcGFkZGluZzogMnJlbTtcblxuOmhvc3Qge1xuICBjb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xuICBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3RhY2stYmxvY2sge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc3RhY2stdGFibGUge1xuICBtYXJnaW4tdG9wOiAkcGFkZGluZztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93IHtcbiAgJi5ldmVuIHtiYWNrZ3JvdW5kOiAjQUFBQUFBNDB9XG4gICYub2RkIHtiYWNrZ3JvdW5kOiAjQ0NDQ0NDNDB9XG59XG4iXX0= */`, "",{"version":3,"sources":["webpack://./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss"],"names":[],"mappings":"AAEA;EACE,yBAAA;EACA,uCAAA;EACA,gBAAA;EACA,gBAAA;EACA,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,OAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AADF;;AAIA;EACE,gBAzBQ;EA0BR,WAAA;AADF;;AAGA;EACE,gBAAA;AAAF;;AAGA;EACE,iBAAA;AAAF;;AAIE;EAAQ,6CAAA;AAAV;AACE;EAAO,6CAAA;AAET;AACA,o4CAAo4C","sourcesContent":["$padding: 2rem;\n\n:host {\n  color: rgb(232, 232, 232);\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n  white-space: pre-wrap;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  color: red;\n}\n\n.stack-block {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.stack-table {\n  margin-top: $padding;\n  width: 100%;\n}\n.align-left {\n  text-align: left;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.row {\n  &.even {background: #AAAAAA40}\n  &.odd {background: #CCCCCC40}\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5849:
/*!************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(69, 69, 69, 0.8666666667);
  overflow: auto;
  z-index: var(--overlay-zindex);
}
.fullscreen simple-pager {
  height: calc(100% - 2rem);
  padding: 1rem;
}
.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one {
  opacity: 0;
}
.fullscreen ::ng-deep .error-name {
  display: none;
}

.close-button {
  position: fixed;
  top: 2rem;
  right: 2rem;
}

.error-next-to-navigation {
  color: red;
  font-family: Menlo, Consolas, monospace;
  font-size: large;
  line-height: 1.2;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUFGO0FBRUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFBSjtBQUdNO0VBQ0UsVUFBQTtBQURSO0FBTUU7RUFDRSxhQUFBO0FBSko7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFORjs7QUFTQTtFQUNFLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFORiIsImZpbGUiOiJuZy1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICBiYWNrZ3JvdW5kOiAjNDU0NTQ1REQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB6LWluZGV4OiB2YXIoLS1vdmVybGF5LXppbmRleCk7XG5cbiAgc2ltcGxlLXBhZ2VyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLm5hdmlnYXRpb24tcm93LXBhbmVsLm9ubHktb25lIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAgLmVycm9yLW5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDJyZW07XG4gIHJpZ2h0OiAycmVtO1xufVxuXG4uZXJyb3ItbmV4dC10by1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuIl19 */`, "",{"version":3,"sources":["webpack://./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,YAAA;EAEA,0CAAA;EACA,cAAA;EACA,8BAAA;AAAF;AAEE;EACE,yBAAA;EACA,aAAA;AAAJ;AAGM;EACE,UAAA;AADR;AAME;EACE,aAAA;AAJJ;;AASA;EACE,eAAA;EACA,SAAA;EACA,WAAA;AANF;;AASA;EACE,UAAA;EACA,uCAAA;EACA,gBAAA;EACA,gBAAA;AANF;AACA,42CAA42C","sourcesContent":[".fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n\n  background: #454545DD;\n  overflow: auto;\n  z-index: var(--overlay-zindex);\n\n  simple-pager {\n    height: calc(100% - 2rem);\n    padding: 1rem;\n\n    ::ng-deep {\n      .navigation-row-panel.only-one {\n        opacity: 0;\n      }\n    }\n  }\n\n  ::ng-deep .error-name {\n    display: none;\n  }\n}\n\n\n.close-button {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n}\n\n.error-next-to-navigation {\n  color: red;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8146:
/*!*********************************************************!*\
  !*** ./apps/demo/src/app/app.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h2>Demo Site might not be updated, check Repo & Source^^</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"CodeMirror\"\n                    moduleName=\"codemirror-example\"\n                    componentName=\"CodeMirrorExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n";

/***/ }),

/***/ 7461:
/*!*********************************************************************************!*\
  !*** ./apps/demo/src/app/example-panel/example-panel.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-expansion-panel (opened)=\"applyLazyModuleInputs(lazyModuleComponent)\">\n  <mat-expansion-panel-header>\n    <a [href]=\"'https://www.npmjs.com/package/' + packageName\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img [src]=\"'https://img.shields.io/npm/v/' + packageName + '.svg?'\"\n           [alt]=\"packageName + ' NPM Version'\">\n    </a>\n    &nbsp;- {{ packageTitle }}\n  </mat-expansion-panel-header>\n\n  <gewd-lazy-module-component\n    #lazyModuleComponent>\n    <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n";

/***/ }),

/***/ 5432:
/*!*************************************************************************************!*\
  !*** ./libs/components/highlight-editor/highlight-editor.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"editor\"\n     [class.visible-highlight]=\"showHighlighedCode$ | async\"\n     [class.editor__no-debounce]=\"debounceTime === 0\">\n\n  <textarea #textarea [value]=\"value\"\n            (change)=\"onChange(textarea.value)\"\n            (keydown)=\"onKeyDown($event, textarea)\"\n            (keyup)=\"onKeyUp($event, textarea.value)\"\n            (focus)=\"focussed$.next(true)\"\n            (blur)=\"focussed$.next(false)\"\n            spellcheck=\"false\"\n  ></textarea>\n  <pre class=\"highlight-area\" #highlightArea></pre>\n</div>\n\n";

/***/ }),

/***/ 4440:
/*!****************************************************************************************!*\
  !*** ./libs/markdown/module/render-markdown/render-markdown.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n";

/***/ }),

/***/ 8658:
/*!**************************************************************************************!*\
  !*** ./libs/ng-utils/components/simple-pager/simple-pager.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n";

/***/ }),

/***/ 9041:
/*!**********************************************************************************************!*\
  !*** ./libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n";

/***/ }),

/***/ 277:
/*!*******************************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n";

/***/ }),

/***/ 6151:
/*!************************************************************************************!*\
  !*** ./libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5306)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map