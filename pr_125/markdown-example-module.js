(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["markdown-example-module"],{

/***/ 5827:
/*!***********************************************************************************!*\
  !*** ./apps/demo/src/app/examples/markdown-example/markdown-example.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownExampleComponent: () => (/* binding */ MarkdownExampleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _markdown_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown-example.component.html?ngResource */ 1939);
/* harmony import */ var _markdown_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-example.component.css?ngResource */ 1326);
/* harmony import */ var _markdown_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markdown_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var _example_emoji_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../example-emoji-list */ 7378);








let MarkdownExampleComponent = class MarkdownExampleComponent {
  constructor(http) {
    this.http = http;
    this.markdown$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.readmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
      responseType: 'text'
    });
    this.exampleMD$ = this.http.get('./assets/example.md', {
      responseType: 'text'
    });
    this.emojiList = _example_emoji_list__WEBPACK_IMPORTED_MODULE_2__.emojiExampleList;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription = this.markdown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(350)).subscribe(value => {
      this.markdown.markdown = value;
    });
  }
  changeIt(newMarkdown, markdown) {
    this.markdown$.next(newMarkdown);
  }
  handleLinkClick($event) {
    $event.event.preventDefault();
    alert('Link Click Handled by Markdown: ' + $event.link.href);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
  static #_2 = this.propDecorators = {
    markdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['markdown', {
        static: true
      }]
    }]
  };
};
MarkdownExampleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'gewd-markdown-example',
  template: _markdown_example_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_markdown_example_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient])], MarkdownExampleComponent);

/***/ }),

/***/ 4382:
/*!********************************************************************************!*\
  !*** ./apps/demo/src/app/examples/markdown-example/markdown-example.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownExampleModule: () => (/* binding */ MarkdownExampleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _markdown_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown-example.component */ 5827);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/components/highlight-editor */ 7964);
/* harmony import */ var _gewd_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown */ 602);







let MarkdownExampleModule = class MarkdownExampleModule {
  getComponents() {
    return [{
      name: 'MarkdownExample',
      componentType: _markdown_example_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownExampleComponent
    }];
  }
};
MarkdownExampleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_markdown_example_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownExampleComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_1__.HighlightEditorModule, _gewd_markdown__WEBPACK_IMPORTED_MODULE_2__.MarkdownModule]
})], MarkdownExampleModule);

/***/ }),

/***/ 1326:
/*!***********************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/markdown-example/markdown-example.component.css?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrZG93bi1leGFtcGxlLmNvbXBvbmVudC5jc3MifQ== */`, "",{"version":3,"sources":["webpack://./apps/demo/src/app/examples/markdown-example/markdown-example.component.css"],"names":[],"mappings":";AACA,gLAAgL","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1939:
/*!************************************************************************************************!*\
  !*** ./apps/demo/src/app/examples/markdown-example/markdown-example.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-tab-group>\n  <mat-tab label=\"README.MD\" #readmeTab>\n    <gewd-markdown *ngIf=\"readmeTab.isActive\"\n                   [markdown]=\"readmeMD$ | async\"></gewd-markdown>\n  </mat-tab>\n  <mat-tab label=\"Try out\">\n\n    <gewd-prism-editor [value]=\"exampleMD$|async\"\n                       #prismEditorComponent\n                       language=\"markdown\"\n                       (changed)=\"changeIt($event, markdown)\">\n    </gewd-prism-editor>\n\n\n    <gewd-markdown #markdown [useCache]=\"true\"\n                   (onLinkClick)=\"handleLinkClick($event)\">\n    </gewd-markdown>\n\n  </mat-tab>\n\n  <mat-tab label=\"Emoji Overview\" #tab>\n    <i>Note: Emojilist is only passed to markdown once this tab is activated :)</i>\n    <gewd-markdown [markdown]=\"tab.isActive ? emojiList : ''\"></gewd-markdown>\n  </mat-tab>\n</mat-tab-group>\n";

/***/ })

}]);
//# sourceMappingURL=markdown-example-module.js.map