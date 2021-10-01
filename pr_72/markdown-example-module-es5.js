(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markdown-example-module"], {
    /***/
    "4Wqj": function Wqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrZG93bi1leGFtcGxlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "B/di": function BDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownExampleModule", function () {
        return MarkdownExampleModule;
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


      var _markdown_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./markdown-example.component */
      "bnBa");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @gewd/components/highlight-editor */
      "W81V");
      /* harmony import */


      var _gewd_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @gewd/markdown */
      "PbxA");

      var MarkdownExampleModule = /*#__PURE__*/function () {
        function MarkdownExampleModule() {
          _classCallCheck(this, MarkdownExampleModule);
        }

        _createClass(MarkdownExampleModule, [{
          key: "getComponents",
          value: function getComponents() {
            return [{
              name: 'MarkdownExample',
              componentType: _markdown_example_component__WEBPACK_IMPORTED_MODULE_3__["MarkdownExampleComponent"]
            }];
          }
        }]);

        return MarkdownExampleModule;
      }();

      MarkdownExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_markdown_example_component__WEBPACK_IMPORTED_MODULE_3__["MarkdownExampleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_5__["HighlightEditorModule"], _gewd_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"]]
      })], MarkdownExampleModule);
      /***/
    },

    /***/
    "bnBa": function bnBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkdownExampleComponent", function () {
        return MarkdownExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_markdown_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./markdown-example.component.html */
      "okDt");
      /* harmony import */


      var _markdown_example_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./markdown-example.component.css */
      "4Wqj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _example_emoji_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../example-emoji-list */
      "AqwI");

      var MarkdownExampleComponent = /*#__PURE__*/function () {
        function MarkdownExampleComponent(http) {
          _classCallCheck(this, MarkdownExampleComponent);

          this.http = http;
          this.markdown$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.readmeMD$ = this.http.get('./assets/readme/markdown/README.md', {
            responseType: 'text'
          });
          this.exampleMD$ = this.http.get('./assets/example.md', {
            responseType: 'text'
          });
          this.emojiList = _example_emoji_list__WEBPACK_IMPORTED_MODULE_7__["emojiExampleList"];
        }

        _createClass(MarkdownExampleComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription = this.markdown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(350)).subscribe(function (value) {
              _this.markdown.markdown = value;
            });
          }
        }, {
          key: "changeIt",
          value: function changeIt(newMarkdown, markdown) {
            this.markdown$.next(newMarkdown);
          }
        }, {
          key: "handleLinkClick",
          value: function handleLinkClick($event) {
            $event.event.preventDefault();
            alert('Link Click Handled by Markdown: ' + $event.link.href);
          }
        }]);

        return MarkdownExampleComponent;
      }();

      MarkdownExampleComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      MarkdownExampleComponent.propDecorators = {
        markdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['markdown', {
            "static": true
          }]
        }]
      };
      MarkdownExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gewd-markdown-example',
        template: _raw_loader_markdown_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_markdown_example_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], MarkdownExampleComponent);
      /***/
    },

    /***/
    "okDt": function okDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-tab-group>\n  <mat-tab label=\"README.MD\" #readmeTab>\n    <gewd-markdown *ngIf=\"readmeTab.isActive\"\n                   [markdown]=\"readmeMD$ | async\"></gewd-markdown>\n  </mat-tab>\n  <mat-tab label=\"Try out\">\n\n    <gewd-prism-editor [value]=\"exampleMD$|async\"\n                       #prismEditorComponent\n                       language=\"markdown\"\n                       (changed)=\"changeIt($event, markdown)\">\n    </gewd-prism-editor>\n\n\n    <gewd-markdown #markdown [useCache]=\"true\"\n                   (onLinkClick)=\"handleLinkClick($event)\">\n    </gewd-markdown>\n\n  </mat-tab>\n\n  <mat-tab label=\"Emoji Overview\" #tab>\n    <i>Note: Emojilist is only passed to markdown once this tab is activated :)</i>\n    <gewd-markdown [markdown]=\"tab.isActive ? emojiList : ''\"></gewd-markdown>\n  </mat-tab>\n</mat-tab-group>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=markdown-example-module-es5.js.map