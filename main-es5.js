function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../libs/components/highlight-editor/editor.functions.ts":
  /*!****************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/editor.functions.ts ***!
    \****************************************************************************************/

  /*! exports provided: handleTab */

  /***/
  function libsComponentsHighlightEditorEditorFunctionsTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/components/highlight-editor/editor.keys.ts":
  /*!***********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/editor.keys.ts ***!
    \***********************************************************************************/

  /*! exports provided: KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS */

  /***/
  function libsComponentsHighlightEditorEditorKeysTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/components/highlight-editor/highlight-editor.component.scss":
  /*!****************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsComponentsHighlightEditorHighlightEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: #2e2e2e;\n  display: block;\n  border: 1px solid lightgray;\n  padding: 4px;\n  --editor-min-height: 100px;\n  --editor-max-height: 100px;\n  --editor-font-size: 14px;\n  --editor-line-height: 1.5;\n  overflow-y: auto;\n  min-height: var(--editor-min-height);\n  max-height: var(--editor-max-height);\n}\n:host :host-context(.mat-form-field) {\n  border: 0;\n  padding: 0;\n  background: inherit;\n  width: 100%;\n}\n.editor {\n  position: relative;\n  padding: 0;\n  -moz-tab-size: 2ch;\n    -o-tab-size: 2ch;\n       tab-size: 2ch;\n  text-align: left;\n  box-sizing: border-box;\n  font-family: \"Fira code\", \"Fira Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: var(--editor-font-size);\n  line-height: var(--editor-line-height);\n  height: 100%;\n}\n/** shared styles */\ntextarea, .highlight-area {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background: none;\n  box-sizing: inherit;\n  display: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-ligatures: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  -moz-tab-size: inherit;\n    -o-tab-size: inherit;\n       tab-size: inherit;\n  text-indent: inherit;\n  text-rendering: inherit;\n  text-transform: inherit;\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  min-height: var(--editor-min-height);\n}\ntextarea {\n  outline: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  resize: none;\n  overflow: hidden;\n  caret-color: white;\n  caret-shape: bar;\n}\ntextarea:focus {\n  outline: none !important;\n}\n.highlight-area {\n  position: relative;\n  pointer-events: none;\n}\n.editor__no-debounce textarea {\n  -webkit-text-fill-color: transparent;\n}\n:not(.editor__no-debounce):not(.visible-highlight) textarea {\n  color: inherit;\n}\n:not(.editor__no-debounce):not(.visible-highlight) .highlight-area {\n  opacity: 0;\n}\n:not(.editor__no-debounce).visible-highlight textarea {\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL2NvbXBvbmVudHMvaGlnaGxpZ2h0LWVkaXRvci9oaWdobGlnaHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwibGlicy9jb21wb25lbnRzL2hpZ2hsaWdodC1lZGl0b3IvaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQVVBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBR0EsZ0JBQUE7RUFFQSxvQ0FBQTtFQUNBLG9DQUFBO0FDWkY7QURMRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDT0o7QURVQTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUVBLGtCQUFBO0lBQUEsZ0JBQUE7T0FBQSxhQUFBO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUVGLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNYRjtBRGdCQSxtQkFBQTtBQUVBO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtJQUFBLG9CQUFBO09BQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFHQSxtQ0FBQTtFQUdBLG9DQUFBO0FDckJGO0FEd0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7QUR5QkU7RUFDRSx3QkFBQTtBQ3ZCSjtBRDJCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUN4QkY7QUQ2QkU7RUFDRSxvQ0FBQTtBQzFCSjtBRGdDSTtFQUNFLGNBQUE7QUM3Qk47QURnQ0k7RUFDRyxVQUFBO0FDOUJQO0FEbUNJO0VBQ0Esb0NBQUE7QUNqQ0oiLCJmaWxlIjoibGlicy9jb21wb25lbnRzL2hpZ2hsaWdodC1lZGl0b3IvaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA0cHg7XG5cbiAgOmhvc3QtY29udGV4dCgubWF0LWZvcm0tZmllbGQpIHtcbiAgICBib3JkZXIgOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgLS1lZGl0b3ItbWluLWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLW1heC1oZWlnaHQ6IDEwMHB4O1xuICAtLWVkaXRvci1mb250LXNpemU6IDE0cHg7XG4gIC0tZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjU7XG5cblxuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIG1pbi1oZWlnaHQ6IHZhcigtLWVkaXRvci1taW4taGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogdmFyKC0tZWRpdG9yLW1heC1oZWlnaHQpO1xufVxuXG5cbi5lZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgcGFkZGluZzogMDtcblxuICB0YWItc2l6ZTogMmNoO1xuXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBjb2RlJywgJ0ZpcmEgTW9ubycsIENvbnNvbGFzLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IHZhcigtLWVkaXRvci1mb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZWRpdG9yLWxpbmUtaGVpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8vbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG4vKiogc2hhcmVkIHN0eWxlcyAqL1xuXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6MDtcblxuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgLy8gdHJhbnNpdGlvbjogMjBtcyBjb2xvciwgb3BhY2l0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cblxuICBtaW4taGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWluLWhlaWdodCk7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZ2hsaWdodC1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB7XG4gIHRleHRhcmVhIHtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSkge1xuICAmOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIHtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0LWFyZWEge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJi52aXNpYmxlLWhpZ2hsaWdodCB7XG4gICAgdGV4dGFyZWEge1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNHB4O1xuICAtLWVkaXRvci1taW4taGVpZ2h0OiAxMDBweDtcbiAgLS1lZGl0b3ItbWF4LWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1lZGl0b3ItbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWF4LWhlaWdodCk7XG59XG46aG9zdCA6aG9zdC1jb250ZXh0KC5tYXQtZm9ybS1maWVsZCkge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0YWItc2l6ZTogMmNoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJGaXJhIGNvZGVcIiwgXCJGaXJhIE1vbm9cIiwgQ29uc29sYXMsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZWRpdG9yLWZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1lZGl0b3ItbGluZS1oZWlnaHQpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qKiBzaGFyZWQgc3R5bGVzICovXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcbn1cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGlnaGxpZ2h0LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB0ZXh0YXJlYSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSk6bm90KC52aXNpYmxlLWhpZ2hsaWdodCkgdGV4dGFyZWEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbjpub3QoLmVkaXRvcl9fbm8tZGVib3VuY2UpOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIC5oaWdobGlnaHQtYXJlYSB7XG4gIG9wYWNpdHk6IDA7XG59XG46bm90KC5lZGl0b3JfX25vLWRlYm91bmNlKS52aXNpYmxlLWhpZ2hsaWdodCB0ZXh0YXJlYSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "../../libs/components/highlight-editor/highlight-editor.component.ts":
  /*!**************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: HighlightEditorComponent */

  /***/
  function libsComponentsHighlightEditorHighlightEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function () {
      return HighlightEditorComponent;
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


    var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @gewd/ng-utils/css-props */
    "../../libs/ng-utils/css-props/index.ts");
    /* harmony import */


    var _highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./highlight.service */
    "../../libs/components/highlight-editor/highlight.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @gewd/ng-utils/morphdom */
    "../../libs/ng-utils/morphdom/index.ts");
    /* harmony import */


    var _editor_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./editor.functions */
    "../../libs/components/highlight-editor/editor.functions.ts");
    /* harmony import */


    var _editor_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./editor.keys */
    "../../libs/components/highlight-editor/editor.keys.ts");

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
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.value);
        this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.language);
        this.debounce$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.debounceTime);
        this.showHighlighedCode$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.allCharsRegex = _editor_keys__WEBPACK_IMPORTED_MODULE_8__["ALL_CHARS_REGEX"];
        this.focussed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lastKeyTriggered$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(HighlightEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.updateLinesAmount(); // once the debounceTime changes
          // recreate the observable

          this.debounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (debounceTimeInterval) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([_this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()), _this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()), _this.lastKeyTriggered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(debounceTimeInterval));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                code = _ref2[0],
                language = _ref2[1],
                lastKeyEvent = _ref2[2];

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.value = value;

            _this.changed.emit(value);
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
        value: function ngOnChanges(_ref3) {
          var value = _ref3.value,
              language = _ref3.language,
              debounceTime = _ref3.debounceTime;

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
          if (event.key.match(this.allCharsRegex) && !_editor_keys__WEBPACK_IMPORTED_MODULE_8__["IGNORE_KEY_EVENTS"].includes(event.key)) {
            this.showHighlighedCode$.next(false);
          }

          this.value$.next(textarea.value);

          if (event.key === _editor_keys__WEBPACK_IMPORTED_MODULE_8__["KEY_TAB"]) {
            var handledTab = Object(_editor_functions__WEBPACK_IMPORTED_MODULE_7__["handleTab"])(event, textarea.value, textarea.selectionStart, textarea.selectionEnd, this.useTabs, this.spaceWidth);
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
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"]
      }, {
        type: _highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__["MorphdomService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "language", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "debounceTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "useTabs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "spaceWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "changed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "value$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "allCharsRegex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textarea'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HighlightEditorComponent.prototype, "textarea", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('highlightArea'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HighlightEditorComponent.prototype, "highlightArea", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], HighlightEditorComponent.prototype, "focussed$", void 0);
    HighlightEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-prism-editor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./highlight-editor.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/highlight-editor/highlight-editor.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [_gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"]],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./highlight-editor.component.scss */
      "../../libs/components/highlight-editor/highlight-editor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"], _highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__["MorphdomService"]])], HighlightEditorComponent);
    /***/
  },

  /***/
  "../../libs/components/highlight-editor/highlight-editor.module.ts":
  /*!***********************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: HighlightEditorModule */

  /***/
  function libsComponentsHighlightEditorHighlightEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function () {
      return HighlightEditorModule;
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


    var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./highlight-editor.component */
    "../../libs/components/highlight-editor/highlight-editor.component.ts");
    /* harmony import */


    var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gewd/ng-utils/css-props */
    "../../libs/ng-utils/css-props/index.ts");
    /* harmony import */


    var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @gewd/ng-utils/morphdom */
    "../../libs/ng-utils/morphdom/index.ts");

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
  "../../libs/components/highlight-editor/highlight.service.ts":
  /*!*****************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight.service.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PrismOptionsInjectorToken, HighlightService */

  /***/
  function libsComponentsHighlightEditorHighlightServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @gewd/markdown/service */
    "../../libs/markdown/service/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! comlink */
    "../../node_modules/comlink/dist/esm/comlink.mjs");

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
          var _this2 = this;

          if (!this.workerProxy) {
            return;
          }

          return this.ngZone.runOutsideAngular(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(PrismOptionsInjectorToken)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], HighlightService);
    /***/
  },

  /***/
  "../../libs/components/highlight-editor/index.ts":
  /*!*****************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/index.ts ***!
    \*****************************************************************************/

  /*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */

  /***/
  function libsComponentsHighlightEditorIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/components/highlight-editor/public_api.ts");
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
  "../../libs/components/highlight-editor/public_api.ts":
  /*!**********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/public_api.ts ***!
    \**********************************************************************************/

  /*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */

  /***/
  function libsComponentsHighlightEditorPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./highlight.service */
    "../../libs/components/highlight-editor/highlight.service.ts");
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
    "../../libs/components/highlight-editor/highlight-editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function () {
      return _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__["HighlightEditorComponent"];
    });
    /* harmony import */


    var _editor_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./editor.functions */
    "../../libs/components/highlight-editor/editor.functions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "handleTab", function () {
      return _editor_functions__WEBPACK_IMPORTED_MODULE_2__["handleTab"];
    });
    /* harmony import */


    var _editor_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editor.keys */
    "../../libs/components/highlight-editor/editor.keys.ts");
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
    "../../libs/components/highlight-editor/highlight-editor.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function () {
      return _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__["HighlightEditorModule"];
    });
    /***/

  },

  /***/
  "../../libs/lazy/loader/gewd-lazy-loader.module.ts":
  /*!*******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/loader/gewd-lazy-loader.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule */

  /***/
  function libsLazyLoaderGewdLazyLoaderModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lazy.component */
    "../../libs/lazy/loader/lazy.component.ts");
    /* harmony import */


    var _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lazy-module.component */
    "../../libs/lazy/loader/lazy-module.component.ts");
    /* harmony import */


    var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @gewd/lazy/registry */
    "../../libs/lazy/registry/index.ts");

    var GewdLazyLoaderModule_1;
    var REGISTORY_LAZY_LOADED_MODULE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/lazy-loader/LazyModuleComponentConfig');

    var GewdLazyLoaderModule = GewdLazyLoaderModule_1 = /*#__PURE__*/function () {
      function GewdLazyLoaderModule(registerLazyLoads) {
        _classCallCheck(this, GewdLazyLoaderModule);

        var _iterator = _createForOfIteratorHelper(registerLazyLoads),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var lazyInfo = _step.value;

            _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__["DynamicLoaderRegistry"].RegisterLazyModuleComponent(lazyInfo.moduleName, lazyInfo.moduleConfig);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REGISTORY_LAZY_LOADED_MODULE_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], GewdLazyLoaderModule);
    /***/
  },

  /***/
  "../../libs/lazy/loader/index.ts":
  /*!*************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/loader/index.ts ***!
    \*************************************************************/

  /*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */

  /***/
  function libsLazyLoaderIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/lazy/loader/public_api.ts");
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
  "../../libs/lazy/loader/lazy-module.component.ts":
  /*!*****************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/loader/lazy-module.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: LazyModuleComponent */

  /***/
  function libsLazyLoaderLazyModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function () {
      return LazyModuleComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gewd/lazy/registry */
    "../../libs/lazy/registry/index.ts");

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
            var _this3 = this;

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
                        return _this3.angularCompiler.compileModuleAndAllComponentsAsync(importedModule);
                      }).then(function (factory) {
                        return {
                          ngModule: factory.ngModuleFactory.create(_this3.injector),
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
                      return cf.name === _this3.component;
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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], LazyModuleComponent.prototype, "moduleAlias", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], LazyModuleComponent.prototype, "component", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyModuleComponent.prototype, "componentInputs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyModuleComponent.prototype, "componentOutputs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('targetContainer', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])], LazyModuleComponent.prototype, "targetContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyModuleComponent.prototype, "componentCreated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyModuleComponent.prototype, "componentLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyModuleComponent.prototype, "showError", void 0);
    LazyModuleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-lazy-module-component',
      template: "\n    <ng-container #targetContainer></ng-container>\n    <ng-content *ngIf=\"!component || !moduleAlias\"></ng-content>\n    <ng-content *ngIf=\"componentLoading | async\"\n                select=\"[isLoading]\"></ng-content>\n    <span *ngIf=\"showError && error\" class=\"error\">{{error}}</span>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: ["\n    .error {\n      color: red;\n    }\n  "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], LazyModuleComponent);
    /***/
  },

  /***/
  "../../libs/lazy/loader/lazy.component.ts":
  /*!**********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/loader/lazy.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LazyComponent */

  /***/
  function libsLazyLoaderLazyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
      return LazyComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gewd/lazy/registry */
    "../../libs/lazy/registry/index.ts");

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

            for (var _i4 = 0, _inputs2 = inputs; _i4 < _inputs2.length; _i4++) {
              var inputKey = _inputs2[_i4];
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

            for (var _i5 = 0, _outputs2 = outputs; _i5 < _outputs2.length; _i5++) {
              var outputKey = _outputs2[_i5];

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], LazyComponent.prototype, "component", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyComponent.prototype, "componentInputs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyComponent.prototype, "componentOutputs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('targetContainer', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])], LazyComponent.prototype, "targetContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyComponent.prototype, "componentCreated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyComponent.prototype, "componentLoading", void 0);
    LazyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-lazy-component',
      template: "\n    <ng-container #targetContainer>\n    </ng-container>\n\n    <ng-content *ngIf=\"!component\"></ng-content>\n    <ng-content *ngIf=\"componentLoading | async\"\n                select=\"[isLoading]\"></ng-content>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], LazyComponent);
    /***/
  },

  /***/
  "../../libs/lazy/loader/public_api.ts":
  /*!******************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/loader/public_api.ts ***!
    \******************************************************************/

  /*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */

  /***/
  function libsLazyLoaderPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lazy.component */
    "../../libs/lazy/loader/lazy.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LazyComponent", function () {
      return _lazy_component__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"];
    });
    /* harmony import */


    var _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gewd-lazy-loader.module */
    "../../libs/lazy/loader/gewd-lazy-loader.module.ts");
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
    "../../libs/lazy/loader/lazy-module.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function () {
      return _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__["LazyModuleComponent"];
    });
    /***/

  },

  /***/
  "../../libs/lazy/registry/index.ts":
  /*!***************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/registry/index.ts ***!
    \***************************************************************/

  /*! exports provided: DynamicLoaderRegistry */

  /***/
  function libsLazyRegistryIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/lazy/registry/public_api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"];
    });
    /***/

  },

  /***/
  "../../libs/lazy/registry/public_api.ts":
  /*!********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/registry/public_api.ts ***!
    \********************************************************************/

  /*! exports provided: DynamicLoaderRegistry */

  /***/
  function libsLazyRegistryPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./registry */
    "../../libs/lazy/registry/registry.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function () {
      return _registry__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"];
    });
    /***/

  },

  /***/
  "../../libs/lazy/registry/registry.ts":
  /*!******************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/registry/registry.ts ***!
    \******************************************************************/

  /*! exports provided: DynamicLoaderRegistry */

  /***/
  function libsLazyRegistryRegistryTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/lazy/utils/index.ts":
  /*!************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/utils/index.ts ***!
    \************************************************************/

  /*! exports provided: Lazy */

  /***/
  function libsLazyUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/lazy/utils/public_api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Lazy", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
    });
    /***/

  },

  /***/
  "../../libs/lazy/utils/lazy.ts":
  /*!***********************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/utils/lazy.ts ***!
    \***********************************************************/

  /*! exports provided: Lazy */

  /***/
  function libsLazyUtilsLazyTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/lazy/utils/public_api.ts":
  /*!*****************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/lazy/utils/public_api.ts ***!
    \*****************************************************************/

  /*! exports provided: Lazy */

  /***/
  function libsLazyUtilsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lazy */
    "../../libs/lazy/utils/lazy.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Lazy", function () {
      return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
    });
    /***/

  },

  /***/
  "../../libs/markdown/contracts/default-options.ts":
  /*!******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/contracts/default-options.ts ***!
    \******************************************************************************/

  /*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */

  /***/
  function libsMarkdownContractsDefaultOptionsTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/markdown/contracts/index.ts":
  /*!********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/contracts/index.ts ***!
    \********************************************************************/

  /*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */

  /***/
  function libsMarkdownContractsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/markdown/contracts/public_api.ts");
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
  "../../libs/markdown/contracts/public_api.ts":
  /*!*************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/contracts/public_api.ts ***!
    \*************************************************************************/

  /*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */

  /***/
  function libsMarkdownContractsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _default_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./default-options */
    "../../libs/markdown/contracts/default-options.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function () {
      return _default_options__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PRISM_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function () {
      return _default_options__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MERMAID_OPTIONS"];
    });
    /***/

  },

  /***/
  "../../libs/markdown/module/index.ts":
  /*!*****************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/module/index.ts ***!
    \*****************************************************************/

  /*! exports provided: MarkdownModule, RenderMarkdownComponent */

  /***/
  function libsMarkdownModuleIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/markdown/module/public_api.ts");
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
  "../../libs/markdown/module/markdown.module.ts":
  /*!***************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/module/markdown.module.ts ***!
    \***************************************************************************/

  /*! exports provided: MarkdownModule */

  /***/
  function libsMarkdownModuleMarkdownModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
      return MarkdownModule;
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


    var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./render-markdown/render-markdown.component */
    "../../libs/markdown/module/render-markdown/render-markdown.component.ts");

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
  "../../libs/markdown/module/public_api.ts":
  /*!**********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/module/public_api.ts ***!
    \**********************************************************************/

  /*! exports provided: MarkdownModule, RenderMarkdownComponent */

  /***/
  function libsMarkdownModulePublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./markdown.module */
    "../../libs/markdown/module/markdown.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MarkdownModule", function () {
      return _markdown_module__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"];
    });
    /* harmony import */


    var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./render-markdown/render-markdown.component */
    "../../libs/markdown/module/render-markdown/render-markdown.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function () {
      return _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__["RenderMarkdownComponent"];
    });
    /***/

  },

  /***/
  "../../libs/markdown/module/render-markdown/render-markdown.component.scss":
  /*!*******************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsMarkdownModuleRenderMarkdownRenderMarkdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep foreignObject {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL21hcmtkb3duL21vZHVsZS9yZW5kZXItbWFya2Rvd24vcmVuZGVyLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwibGlicy9tYXJrZG93bi9tb2R1bGUvcmVuZGVyLW1hcmtkb3duL3JlbmRlci1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUFnQixpQkFBQTtBQ0FsQiIsImZpbGUiOiJsaWJzL21hcmtkb3duL21vZHVsZS9yZW5kZXItbWFya2Rvd24vcmVuZGVyLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLy8gZml4IG1lcm1haWQgb3ZlcmZsb3cgOilcbiAgZm9yZWlnbk9iamVjdCB7IG92ZXJmbG93OiB2aXNpYmxlOyB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgZm9yZWlnbk9iamVjdCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "../../libs/markdown/module/render-markdown/render-markdown.component.ts":
  /*!*****************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: RenderMarkdownComponent */

  /***/
  function libsMarkdownModuleRenderMarkdownRenderMarkdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function () {
      return RenderMarkdownComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @gewd/markdown/service */
    "../../libs/markdown/service/index.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

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
        this.onLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._htmlToShow$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.compile();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var cachedMarkdown, parsedHtml;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;

                    if (!this.useCache) {
                      _context7.next = 8;
                      break;
                    }

                    _context7.next = 4;
                    return this.cache.getCached(this._markdown);

                  case 4:
                    cachedMarkdown = _context7.sent;

                    if (!cachedMarkdown) {
                      _context7.next = 8;
                      break;
                    }

                    this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(cachedMarkdown));

                    return _context7.abrupt("return");

                  case 8:
                    _context7.next = 10;
                    return this.service.compileMarkdown(this._markdown, this.allowMermaid);

                  case 10:
                    parsedHtml = _context7.sent;

                    this._htmlToShow$.next(this.sanitizer.bypassSecurityTrustHtml(parsedHtml));

                    if (this.useCache) {
                      this.cache.saveCached(this._markdown, parsedHtml);
                    }

                    _context7.next = 19;
                    break;

                  case 15:
                    _context7.prev = 15;
                    _context7.t0 = _context7["catch"](0);
                    console.error(_context7.t0);

                    this._htmlToShow$.next(_context7.t0);

                  case 19:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 15]]);
          }));
        }
      }]);

      return RenderMarkdownComponent;
    }();

    RenderMarkdownComponent.ctorParameters = function () {
      return [{
        type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownCacheService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RenderMarkdownComponent.prototype, "showRawMd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RenderMarkdownComponent.prototype, "useCache", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RenderMarkdownComponent.prototype, "allowMermaid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RenderMarkdownComponent.prototype, "mermaidTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], RenderMarkdownComponent.prototype, "markdown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RenderMarkdownComponent.prototype, "onLinkClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RenderMarkdownComponent.prototype, "onClick", null);
    RenderMarkdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-markdown',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./render-markdown.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/markdown/module/render-markdown/render-markdown.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./render-markdown.component.scss */
      "../../libs/markdown/module/render-markdown/render-markdown.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownCacheService"]])], RenderMarkdownComponent);
    /***/
  },

  /***/
  "../../libs/markdown/service/index.ts":
  /*!******************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/service/index.ts ***!
    \******************************************************************/

  /*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */

  /***/
  function libsMarkdownServiceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/markdown/service/public_api.ts");
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
  "../../libs/markdown/service/injection-token.ts":
  /*!****************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/service/injection-token.ts ***!
    \****************************************************************************/

  /*! exports provided: MarkdownOptionsInjectorToken */

  /***/
  function libsMarkdownServiceInjectionTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function () {
      return MarkdownOptionsInjectorToken;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MarkdownOptionsInjectorToken');
    /***/
  },

  /***/
  "../../libs/markdown/service/markdown-cache.service.ts":
  /*!***********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/service/markdown-cache.service.ts ***!
    \***********************************************************************************/

  /*! exports provided: MarkdownCacheService */

  /***/
  function libsMarkdownServiceMarkdownCacheServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function () {
      return MarkdownCacheService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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
  "../../libs/markdown/service/markdown.service.ts":
  /*!*****************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/service/markdown.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: MarkdownService */

  /***/
  function libsMarkdownServiceMarkdownServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownService", function () {
      return MarkdownService;
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


    var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! comlink */
    "../../node_modules/comlink/dist/esm/comlink.mjs");
    /* harmony import */


    var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @gewd/markdown/contracts */
    "../../libs/markdown/contracts/index.ts");
    /* harmony import */


    var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./markdown-cache.service */
    "../../libs/markdown/service/markdown-cache.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _injection_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./injection-token */
    "../../libs/markdown/service/injection-token.ts");
    /* harmony import */


    var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @gewd/markdown/utils */
    "../../libs/markdown/utils/index.ts");

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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var parsedMarkdown, mermaidInstance, matched, _iterator2, _step2, mermaid, innerContent, rendered, cached, errorStr;

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
                    _iterator2 = _createForOfIteratorHelper(matched);
                    _context8.prev = 12;

                    _iterator2.s();

                  case 14:
                    if ((_step2 = _iterator2.n()).done) {
                      _context8.next = 25;
                      break;
                    }

                    mermaid = _step2.value;
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

                    _iterator2.e(_context8.t0);

                  case 30:
                    _context8.prev = 30;

                    _iterator2.f();

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
          var _this4 = this;

          if (!this.canTriggerMermaidLoad) {
            return Promise.resolve();
          }

          if (this.canTriggerMermaidLoad && !this.mermaidAddedToPage) {
            this.mermaidAddedToPage = true;

            var _mermaidNode = this.document.createElement('div');

            _mermaidNode.hidden = true;
            this.document.body.appendChild(_mermaidNode);
            return new Promise(function (resolve, reject) {
              var scriptTag = _this4.document.createElement('script');

              scriptTag.src = _this4.markdownOptions.mermaidPath; // trigger mermaid init

              scriptTag.onload = function () {
                var mermaid = window.mermaid;
                mermaid.initialize(_this4.mermaidConfig);
                resolve();

                mermaid.parseError = function (err) {
                  console.error('MarkdownService, Mermaid: ', err);
                };
              };

              _this4.document.body.appendChild(scriptTag);
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_injection_token__WEBPACK_IMPORTED_MODULE_6__["MarkdownOptionsInjectorToken"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"], Document, Object])], MarkdownService);
    /***/
  },

  /***/
  "../../libs/markdown/service/public_api.ts":
  /*!***********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/service/public_api.ts ***!
    \***********************************************************************/

  /*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */

  /***/
  function libsMarkdownServicePublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _markdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./markdown.service */
    "../../libs/markdown/service/markdown.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MarkdownService", function () {
      return _markdown_service__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"];
    });
    /* harmony import */


    var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./markdown-cache.service */
    "../../libs/markdown/service/markdown-cache.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function () {
      return _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"];
    });
    /* harmony import */


    var _injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./injection-token */
    "../../libs/markdown/service/injection-token.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function () {
      return _injection_token__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"];
    });
    /***/

  },

  /***/
  "../../libs/markdown/utils/index.ts":
  /*!****************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/utils/index.ts ***!
    \****************************************************************/

  /*! exports provided: Lazy, simpleHash */

  /***/
  function libsMarkdownUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/markdown/utils/public_api.ts");
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
  "../../libs/markdown/utils/lazy.ts":
  /*!***************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/utils/lazy.ts ***!
    \***************************************************************/

  /*! exports provided: Lazy */

  /***/
  function libsMarkdownUtilsLazyTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/markdown/utils/public_api.ts":
  /*!*********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/utils/public_api.ts ***!
    \*********************************************************************/

  /*! exports provided: Lazy, simpleHash */

  /***/
  function libsMarkdownUtilsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lazy */
    "../../libs/markdown/utils/lazy.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Lazy", function () {
      return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"];
    });
    /* harmony import */


    var _simple_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./simple-hash */
    "../../libs/markdown/utils/simple-hash.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "simpleHash", function () {
      return _simple_hash__WEBPACK_IMPORTED_MODULE_1__["simpleHash"];
    });
    /***/

  },

  /***/
  "../../libs/markdown/utils/simple-hash.ts":
  /*!**********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/markdown/utils/simple-hash.ts ***!
    \**********************************************************************/

  /*! exports provided: simpleHash */

  /***/
  function libsMarkdownUtilsSimpleHashTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts":
  /*!*******************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/custom-form-control.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: CustomFormControlComponent */

  /***/
  function libsMatUtilsCustomFormControlCustomFormControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function () {
      return CustomFormControlComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");

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
        value: function ngOnChanges(_ref4) {
          var value = _ref4.value;

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], CustomFormControlComponent.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('aria-describedby'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CustomFormControlComponent.prototype, "userAriaDescribedBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CustomFormControlComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CustomFormControlComponent.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CustomFormControlComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CustomFormControlComponent.prototype, "focused", void 0);
    CustomFormControlComponent = CustomFormControlComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-custom-form-control',
      template: "<ng-content></ng-content>",
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"],
        useExisting: CustomFormControlComponent_1
      }]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])], CustomFormControlComponent);
    /***/
  },

  /***/
  "../../libs/mat-utils/custom-form-control/custom-form-control.module.ts":
  /*!****************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/custom-form-control.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: CustomFormControlModule */

  /***/
  function libsMatUtilsCustomFormControlCustomFormControlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function () {
      return CustomFormControlModule;
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


    var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./custom-form-control.component */
    "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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
  "../../libs/mat-utils/custom-form-control/index.ts":
  /*!*******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/index.ts ***!
    \*******************************************************************************/

  /*! exports provided: CustomFormControlModule, CustomFormControlComponent */

  /***/
  function libsMatUtilsCustomFormControlIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/mat-utils/custom-form-control/public_api.ts");
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
  "../../libs/mat-utils/custom-form-control/public_api.ts":
  /*!************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/public_api.ts ***!
    \************************************************************************************/

  /*! exports provided: CustomFormControlModule, CustomFormControlComponent */

  /***/
  function libsMatUtilsCustomFormControlPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./custom-form-control.module */
    "../../libs/mat-utils/custom-form-control/custom-form-control.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function () {
      return _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"];
    });
    /* harmony import */


    var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./custom-form-control.component */
    "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function () {
      return _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__["CustomFormControlComponent"];
    });
    /***/

  },

  /***/
  "../../libs/mat-utils/material-icons/index.ts":
  /*!**************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/index.ts ***!
    \**************************************************************************/

  /*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */

  /***/
  function libsMatUtilsMaterialIconsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/mat-utils/material-icons/public_api.ts");
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
  "../../libs/mat-utils/material-icons/public_api.ts":
  /*!*******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/public_api.ts ***!
    \*******************************************************************************/

  /*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */

  /***/
  function libsMatUtilsMaterialIconsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./register_icons */
    "../../libs/mat-utils/material-icons/register_icons.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "registerIcons", function () {
      return _register_icons__WEBPACK_IMPORTED_MODULE_0__["registerIcons"];
    });
    /* harmony import */


    var _register_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./register_icons.module */
    "../../libs/mat-utils/material-icons/register_icons.module.ts");
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
  "../../libs/mat-utils/material-icons/register_icons.module.ts":
  /*!******************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/register_icons.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */

  /***/
  function libsMatUtilsMaterialIconsRegister_iconsModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _register_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register_icons */
    "../../libs/mat-utils/material-icons/register_icons.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var RegisterIconsModule_1;
    var REGISTORY_ICONS_PAIR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@gewd/mat-utils/BootstrapComponentConfig');

    var RegisterIconsModule = RegisterIconsModule_1 = /*#__PURE__*/function () {
      function RegisterIconsModule(iconRegistry, sanitizer, registryIconsPairsArray) {
        _classCallCheck(this, RegisterIconsModule);

        var _iterator3 = _createForOfIteratorHelper(registryIconsPairsArray),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var iconPair = _step3.value;
            Object(_register_icons__WEBPACK_IMPORTED_MODULE_3__["registerIcons"])(iconRegistry, sanitizer, iconPair);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REGISTORY_ICONS_PAIR_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Array])], RegisterIconsModule);
    /***/
  },

  /***/
  "../../libs/mat-utils/material-icons/register_icons.ts":
  /*!***********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/register_icons.ts ***!
    \***********************************************************************************/

  /*! exports provided: registerIcons */

  /***/
  function libsMatUtilsMaterialIconsRegister_iconsTs(module, __webpack_exports__, __webpack_require__) {
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
  "../../libs/ng-utils/bootstrap-component/bootstrap-component.module.ts":
  /*!***************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/bootstrap-component/bootstrap-component.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */

  /***/
  function libsNgUtilsBootstrapComponentBootstrapComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(BOOTSTRAP_COMPONENT_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Array])], BootstrapComponentModule);
    /***/
  },

  /***/
  "../../libs/ng-utils/bootstrap-component/index.ts":
  /*!******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/bootstrap-component/index.ts ***!
    \******************************************************************************/

  /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */

  /***/
  function libsNgUtilsBootstrapComponentIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/bootstrap-component/public_api.ts");
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
  "../../libs/ng-utils/bootstrap-component/public_api.ts":
  /*!***********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/bootstrap-component/public_api.ts ***!
    \***********************************************************************************/

  /*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */

  /***/
  function libsNgUtilsBootstrapComponentPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bootstrap-component.module */
    "../../libs/ng-utils/bootstrap-component/bootstrap-component.module.ts");
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
  "../../libs/ng-utils/components/index.ts":
  /*!*********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/index.ts ***!
    \*********************************************************************/

  /*! exports provided: SimplePagerModule, SimplePagerComponent */

  /***/
  function libsNgUtilsComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/components/public_api.ts");
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
  "../../libs/ng-utils/components/public_api.ts":
  /*!**************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/public_api.ts ***!
    \**************************************************************************/

  /*! exports provided: SimplePagerModule, SimplePagerComponent */

  /***/
  function libsNgUtilsComponentsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./simple-pager/simple-pager.module */
    "../../libs/ng-utils/components/simple-pager/simple-pager.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function () {
      return _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"];
    });
    /* harmony import */


    var _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./simple-pager/simple-pager.component */
    "../../libs/ng-utils/components/simple-pager/simple-pager.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function () {
      return _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__["SimplePagerComponent"];
    });
    /***/

  },

  /***/
  "../../libs/ng-utils/components/simple-pager/simple-pager.component.scss":
  /*!*****************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsNgUtilsComponentsSimplePagerSimplePagerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-arrow, .right-arrow {\n  --arrow-color: white;\n}\n\n.left-arrow svg path, .right-arrow svg path {\n  fill: var(--arrow-color);\n}\n\n.left-arrow:hover:not(.disabled), .right-arrow:hover:not(.disabled) {\n  cursor: pointer;\n}\n\n.left-arrow.disabled, .right-arrow.disabled {\n  --arrow-color: gray;\n}\n\n.slot {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.position-label {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.navigation-row-panel {\n  flex: 1;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL2NvbXBvbmVudHMvc2ltcGxlLXBhZ2VyL3NpbXBsZS1wYWdlci5jb21wb25lbnQuc2NzcyIsImxpYnMvbmctdXRpbHMvY29tcG9uZW50cy9zaW1wbGUtcGFnZXIvc2ltcGxlLXBhZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLE9BQUE7RUFDQSx5QkFBQTtBQ0ZGIiwiZmlsZSI6ImxpYnMvbmctdXRpbHMvY29tcG9uZW50cy9zaW1wbGUtcGFnZXIvc2ltcGxlLXBhZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubGVmdC1hcnJvdywgLnJpZ2h0LWFycm93IHtcbiAgLS1hcnJvdy1jb2xvcjogd2hpdGU7XG5cbiAgc3ZnIHBhdGgge1xuICAgIGZpbGw6IHZhcigtLWFycm93LWNvbG9yKTtcbiAgfVxuXG4gICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYuZGlzYWJsZWQge1xuICAgIC0tYXJyb3ctY29sb3I6IGdyYXk7XG4gIH1cbn1cblxuLnNsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvc2l0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm5hdmlnYXRpb24tcm93LXBhbmVsIHtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxlZnQtYXJyb3csIC5yaWdodC1hcnJvdyB7XG4gIC0tYXJyb3ctY29sb3I6IHdoaXRlO1xufVxuLmxlZnQtYXJyb3cgc3ZnIHBhdGgsIC5yaWdodC1hcnJvdyBzdmcgcGF0aCB7XG4gIGZpbGw6IHZhcigtLWFycm93LWNvbG9yKTtcbn1cbi5sZWZ0LWFycm93OmhvdmVyOm5vdCguZGlzYWJsZWQpLCAucmlnaHQtYXJyb3c6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGVmdC1hcnJvdy5kaXNhYmxlZCwgLnJpZ2h0LWFycm93LmRpc2FibGVkIHtcbiAgLS1hcnJvdy1jb2xvcjogZ3JheTtcbn1cblxuLnNsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvc2l0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm5hdmlnYXRpb24tcm93LXBhbmVsIHtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "../../libs/ng-utils/components/simple-pager/simple-pager.component.ts":
  /*!***************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: SimplePagerComponent */

  /***/
  function libsNgUtilsComponentsSimplePagerSimplePagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function () {
      return SimplePagerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], SimplePagerComponent.prototype, "templateRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SimplePagerComponent.prototype, "items", void 0);
    SimplePagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-pager',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./simple-pager.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/components/simple-pager/simple-pager.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./simple-pager.component.scss */
      "../../libs/ng-utils/components/simple-pager/simple-pager.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SimplePagerComponent);
    /***/
  },

  /***/
  "../../libs/ng-utils/components/simple-pager/simple-pager.module.ts":
  /*!************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: SimplePagerModule */

  /***/
  function libsNgUtilsComponentsSimplePagerSimplePagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function () {
      return SimplePagerModule;
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


    var _simple_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./simple-pager.component */
    "../../libs/ng-utils/components/simple-pager/simple-pager.component.ts");

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
  "../../libs/ng-utils/css-props/css-props.directive.ts":
  /*!**********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/css-props.directive.ts ***!
    \**********************************************************************************/

  /*! exports provided: CSSPropsDirective */

  /***/
  function libsNgUtilsCssPropsCssPropsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function () {
      return CSSPropsDirective;
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


    var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./css-props.service */
    "../../libs/ng-utils/css-props/css-props.service.ts");
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
        value: function ngOnChanges(_ref5) {
          var cssProps = _ref5.cssProps;
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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CSSPropsDirective.prototype, "cssProps", void 0);
    CSSPropsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[cssProps]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]])], CSSPropsDirective);
    /***/
  },

  /***/
  "../../libs/ng-utils/css-props/css-props.module.ts":
  /*!*******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/css-props.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: CssPropsModule */

  /***/
  function libsNgUtilsCssPropsCssPropsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CssPropsModule", function () {
      return CssPropsModule;
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


    var _css_props_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./css-props.directive */
    "../../libs/ng-utils/css-props/css-props.directive.ts");
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
  "../../libs/ng-utils/css-props/css-props.service.ts":
  /*!********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/css-props.service.ts ***!
    \********************************************************************************/

  /*! exports provided: CssPropsService */

  /***/
  function libsNgUtilsCssPropsCssPropsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CssPropsService", function () {
      return CssPropsService;
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


    var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-css-props */
    "../../libs/ng-utils/css-props/update-css-props.ts");
    /* harmony import */


    var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./update-dynamic-style */
    "../../libs/ng-utils/css-props/update-dynamic-style.ts");
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
          var _this5 = this;

          this.ngZone.runOutsideAngular(function () {
            Object(_update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["updateDynamicStyle"])(_this5.document, styleId, customCss);
          });
        }
      }, {
        key: "updateDocumentVars",
        value: function updateDocumentVars(cssProps) {
          var _this6 = this;

          this.ngZone.runOutsideAngular(function () {
            Object(_update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"])(_this6.document.body, cssProps);
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CssPropsService);
    /***/
  },

  /***/
  "../../libs/ng-utils/css-props/element-css.service.ts":
  /*!**********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/element-css.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: ElementCssService */

  /***/
  function libsNgUtilsCssPropsElementCssServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementCssService", function () {
      return ElementCssService;
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


    var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./css-props.service */
    "../../libs/ng-utils/css-props/css-props.service.ts");

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
  "../../libs/ng-utils/css-props/index.ts":
  /*!********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/index.ts ***!
    \********************************************************************/

  /*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */

  /***/
  function libsNgUtilsCssPropsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/css-props/public_api.ts");
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
  "../../libs/ng-utils/css-props/public_api.ts":
  /*!*************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/public_api.ts ***!
    \*************************************************************************/

  /*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */

  /***/
  function libsNgUtilsCssPropsPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _css_props_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./css-props.module */
    "../../libs/ng-utils/css-props/css-props.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CssPropsModule", function () {
      return _css_props_module__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"];
    });
    /* harmony import */


    var _css_props_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./css-props.directive */
    "../../libs/ng-utils/css-props/css-props.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function () {
      return _css_props_directive__WEBPACK_IMPORTED_MODULE_1__["CSSPropsDirective"];
    });
    /* harmony import */


    var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./css-props.service */
    "../../libs/ng-utils/css-props/css-props.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CssPropsService", function () {
      return _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"];
    });
    /* harmony import */


    var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-css-props */
    "../../libs/ng-utils/css-props/update-css-props.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "updateCssProps", function () {
      return _update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"];
    });
    /* harmony import */


    var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./update-dynamic-style */
    "../../libs/ng-utils/css-props/update-dynamic-style.ts");
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
    "../../libs/ng-utils/css-props/element-css.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ElementCssService", function () {
      return _element_css_service__WEBPACK_IMPORTED_MODULE_5__["ElementCssService"];
    });
    /***/

  },

  /***/
  "../../libs/ng-utils/css-props/update-css-props.ts":
  /*!*******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/update-css-props.ts ***!
    \*******************************************************************************/

  /*! exports provided: updateCssProps */

  /***/
  function libsNgUtilsCssPropsUpdateCssPropsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateCssProps", function () {
      return updateCssProps;
    });

    function updateCssProps(element, cssProps) {
      var style = element.style;

      for (var _i6 = 0, _Object$entries = Object.entries(cssProps); _i6 < _Object$entries.length; _i6++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i6], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        style.setProperty(k, v.toString(), 'important');
      }
    }
    /***/

  },

  /***/
  "../../libs/ng-utils/css-props/update-dynamic-style.ts":
  /*!***********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/update-dynamic-style.ts ***!
    \***********************************************************************************/

  /*! exports provided: updateDynamicStyle, getStyleElement, replaceCss */

  /***/
  function libsNgUtilsCssPropsUpdateDynamicStyleTs(module, __webpack_exports__, __webpack_require__) {
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
    /***/

  },

  /***/
  "../../libs/ng-utils/dynamic-portal/dynamic-portal.module.ts":
  /*!*****************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DynamicPortalModule */

  /***/
  function libsNgUtilsDynamicPortalDynamicPortalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function () {
      return DynamicPortalModule;
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


    var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dynamic-portal/dynamic-portal.component */
    "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts");
    /* harmony import */


    var _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./portal-source.directive */
    "../../libs/ng-utils/dynamic-portal/portal-source.directive.ts");

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
  "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss":
  /*!*************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsNgUtilsDynamicPortalDynamicPortalDynamicPortalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25nLXV0aWxzL2R5bmFtaWMtcG9ydGFsL2R5bmFtaWMtcG9ydGFsL2R5bmFtaWMtcG9ydGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts":
  /*!***********************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: DynamicPortalComponent */

  /***/
  function libsNgUtilsDynamicPortalDynamicPortalDynamicPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function () {
      return DynamicPortalComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _portal_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../portal-hub.service */
    "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var DynamicPortalComponent = /*#__PURE__*/function () {
      function DynamicPortalComponent(hub) {
        var _this7 = this;

        _classCallCheck(this, DynamicPortalComponent);

        this.hub = hub;
        this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.templateToShow$ = this.key$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (key) {
          return _this7.hub.getTemplate$(key);
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

    DynamicPortalComponent.ctorParameters = function () {
      return [{
        type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_3__["PortalHubService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DynamicPortalComponent.prototype, "key", void 0);
    DynamicPortalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dynamic-portal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dynamic-portal.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dynamic-portal.component.scss */
      "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_portal_hub_service__WEBPACK_IMPORTED_MODULE_3__["PortalHubService"]])], DynamicPortalComponent);
    /***/
  },

  /***/
  "../../libs/ng-utils/dynamic-portal/index.ts":
  /*!*************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/index.ts ***!
    \*************************************************************************/

  /*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */

  /***/
  function libsNgUtilsDynamicPortalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/dynamic-portal/public_api.ts");
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

  },

  /***/
  "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts":
  /*!**************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/portal-hub.service.ts ***!
    \**************************************************************************************/

  /*! exports provided: PortalSourceAction, PortalHubService */

  /***/
  function libsNgUtilsDynamicPortalPortalHubServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

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
          var _this8 = this;

          return this.templateSourceSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (a) {
            return a.key === key;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) {
            switch (a.type) {
              case 0
              /* Added */
              :
                {
                  return _this8.templateSourceHub[key];
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

    PortalHubService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PortalHubService);
    /***/
  },

  /***/
  "../../libs/ng-utils/dynamic-portal/portal-source.directive.ts":
  /*!*******************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/portal-source.directive.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PortalSourceDirective */

  /***/
  function libsNgUtilsDynamicPortalPortalSourceDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function () {
      return PortalSourceDirective;
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


    var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./portal-hub.service */
    "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts");

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dynamicPortalSource'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PortalSourceDirective.prototype, "key", void 0);
    PortalSourceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[dynamicPortalSource]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]])], PortalSourceDirective);
    /***/
  },

  /***/
  "../../libs/ng-utils/dynamic-portal/public_api.ts":
  /*!******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/public_api.ts ***!
    \******************************************************************************/

  /*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */

  /***/
  function libsNgUtilsDynamicPortalPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dynamic-portal.module */
    "../../libs/ng-utils/dynamic-portal/dynamic-portal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function () {
      return _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"];
    });
    /* harmony import */


    var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dynamic-portal/dynamic-portal.component */
    "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function () {
      return _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__["DynamicPortalComponent"];
    });
    /* harmony import */


    var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./portal-hub.service */
    "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts");
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
    "../../libs/ng-utils/dynamic-portal/portal-source.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function () {
      return _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__["PortalSourceDirective"];
    });
    /***/

  },

  /***/
  "../../libs/ng-utils/morphdom/index.ts":
  /*!*******************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/index.ts ***!
    \*******************************************************************/

  /*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */

  /***/
  function libsNgUtilsMorphdomIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/morphdom/public_api.ts");
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
  "../../libs/ng-utils/morphdom/morphdom.directive.ts":
  /*!********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/morphdom.directive.ts ***!
    \********************************************************************************/

  /*! exports provided: MorphdomDirective */

  /***/
  function libsNgUtilsMorphdomMorphdomDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function () {
      return MorphdomDirective;
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


    var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./morphdom.service */
    "../../libs/ng-utils/morphdom/morphdom.service.ts");

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
        value: function ngOnChanges(_ref6) {
          var morphDom = _ref6.morphDom;

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('morphDom'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MorphdomDirective.prototype, "morphDom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MorphdomDirective.prototype, "tagName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MorphdomDirective.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MorphdomDirective.prototype, "done", void 0);
    MorphdomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line:directive-selector
      selector: '[morphDom]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]])], MorphdomDirective);
    /***/
  },

  /***/
  "../../libs/ng-utils/morphdom/morphdom.module.ts":
  /*!*****************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/morphdom.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: MorphdomModule */

  /***/
  function libsNgUtilsMorphdomMorphdomModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorphdomModule", function () {
      return MorphdomModule;
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


    var _morphdom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./morphdom.directive */
    "../../libs/ng-utils/morphdom/morphdom.directive.ts");

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
  "../../libs/ng-utils/morphdom/morphdom.service.ts":
  /*!******************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/morphdom.service.ts ***!
    \******************************************************************************/

  /*! exports provided: MorphdomService */

  /***/
  function libsNgUtilsMorphdomMorphdomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MorphdomService", function () {
      return MorphdomService;
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


    var morphdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! morphdom */
    "../../node_modules/morphdom/dist/morphdom-esm.js");

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
  "../../libs/ng-utils/morphdom/public_api.ts":
  /*!************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/public_api.ts ***!
    \************************************************************************/

  /*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */

  /***/
  function libsNgUtilsMorphdomPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _morphdom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./morphdom.module */
    "../../libs/ng-utils/morphdom/morphdom.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MorphdomModule", function () {
      return _morphdom_module__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"];
    });
    /* harmony import */


    var _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./morphdom.directive */
    "../../libs/ng-utils/morphdom/morphdom.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function () {
      return _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__["MorphdomDirective"];
    });
    /* harmony import */


    var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./morphdom.service */
    "../../libs/ng-utils/morphdom/morphdom.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MorphdomService", function () {
      return _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"];
    });
    /***/

  },

  /***/
  "../../libs/ng-utils/ng-error-overlay/index.ts":
  /*!***************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/index.ts ***!
    \***************************************************************************/

  /*! exports provided: NgErrorComponent, NgErrorOverlayModule */

  /***/
  function libsNgUtilsNgErrorOverlayIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/ng-error-overlay/public_api.ts");
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
  "../../libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts":
  /*!****************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts ***!
    \****************************************************************************************************/

  /*! exports provided: NG_ERROR_CONFIG_TOKEN, ErrorHandlerService */

  /***/
  function libsNgUtilsNgErrorOverlayNgErrorErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ERROR_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ErrorHandlerService);
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsNgUtilsNgErrorOverlayNgErrorErrorOverlayErrorOverlayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  color: #e8e8e8;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n  white-space: pre-wrap;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  color: red;\n}\n\n.stack-block {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.stack-table {\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.row.even {\n  background: #AAAAAA40;\n}\n\n.row.odd {\n  background: #CCCCCC40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvZXJyb3Itb3ZlcmxheS9lcnJvci1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwibGlicy9uZy11dGlscy9uZy1lcnJvci1vdmVybGF5L25nLWVycm9yL2Vycm9yLW92ZXJsYXkvZXJyb3Itb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBekJRO0VBMEJSLFdBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBRElFO0VBQVEscUJBQUE7QUNBVjs7QURDRTtFQUFPLHFCQUFBO0FDRVQiLCJmaWxlIjoibGlicy9uZy11dGlscy9uZy1lcnJvci1vdmVybGF5L25nLWVycm9yL2Vycm9yLW92ZXJsYXkvZXJyb3Itb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nOiAycmVtO1xuXG46aG9zdCB7XG4gIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdGFjay1ibG9jayB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGFjay10YWJsZSB7XG4gIG1hcmdpbi10b3A6ICRwYWRkaW5nO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yb3cge1xuICAmLmV2ZW4ge2JhY2tncm91bmQ6ICNBQUFBQUE0MH1cbiAgJi5vZGQge2JhY2tncm91bmQ6ICNDQ0NDQ0M0MH1cbn1cbiIsIjpob3N0IHtcbiAgY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdGFjay1ibG9jayB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGFjay10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93LmV2ZW4ge1xuICBiYWNrZ3JvdW5kOiAjQUFBQUFBNDA7XG59XG4ucm93Lm9kZCB7XG4gIGJhY2tncm91bmQ6ICNDQ0NDQ0M0MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts":
  /*!********************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: ErrorOverlayComponent */

  /***/
  function libsNgUtilsNgErrorOverlayNgErrorErrorOverlayErrorOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorOverlayComponent", function () {
      return ErrorOverlayComponent;
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


    var error_stack_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! error-stack-parser */
    "../../node_modules/error-stack-parser/error-stack-parser.js");
    /* harmony import */


    var error_stack_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_2__);

    var ErrorOverlayComponent = /*#__PURE__*/function () {
      function ErrorOverlayComponent() {
        _classCallCheck(this, ErrorOverlayComponent);
      }

      _createClass(ErrorOverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_2___default.a.parse(this.error);
        }
      }]);

      return ErrorOverlayComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ErrorOverlayComponent.prototype, "error", void 0);
    ErrorOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'error-overlay',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./error-overlay.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./error-overlay.component.scss */
      "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ErrorOverlayComponent);
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts":
  /*!******************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: NgErrorOverlayModule */

  /***/
  function libsNgUtilsNgErrorOverlayNgErrorNgErrorOverlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function () {
      return NgErrorOverlayModule;
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


    var _ng_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ng-error.component */
    "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts");
    /* harmony import */


    var _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./error-overlay/error-overlay.component */
    "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts");
    /* harmony import */


    var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error-handler.service */
    "../../libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts");
    /* harmony import */


    var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @gewd/ng-utils/bootstrap-component */
    "../../libs/ng-utils/bootstrap-component/index.ts");
    /* harmony import */


    var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @gewd/ng-utils/components */
    "../../libs/ng-utils/components/index.ts");
    /* harmony import */


    var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @gewd/ng-utils/dynamic-portal */
    "../../libs/ng-utils/dynamic-portal/index.ts");

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
  "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss":
  /*!***************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsNgUtilsNgErrorOverlayNgErrorNgErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: #454545DD;\n  overflow: auto;\n  z-index: var(--overlay-zindex);\n}\n.fullscreen simple-pager {\n  height: calc(100% - 2rem);\n  padding: 1rem;\n}\n.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one {\n  opacity: 0;\n}\n.fullscreen ::ng-deep .error-name {\n  display: none;\n}\n.close-button {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n}\n.error-next-to-navigation {\n  color: red;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvbmctZXJyb3IuY29tcG9uZW50LnNjc3MiLCJsaWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvbmctZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDQUY7QURFRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER007RUFDRSxVQUFBO0FDRFI7QURNRTtFQUNFLGFBQUE7QUNKSjtBRFNBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNORiIsImZpbGUiOiJsaWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvbmctZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG5cbiAgYmFja2dyb3VuZDogIzQ1NDU0NUREO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogdmFyKC0tb3ZlcmxheS16aW5kZXgpO1xuXG4gIHNpbXBsZS1wYWdlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5uYXZpZ2F0aW9uLXJvdy1wYW5lbC5vbmx5LW9uZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5lcnJvci1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAycmVtO1xuICByaWdodDogMnJlbTtcbn1cblxuLmVycm9yLW5leHQtdG8tbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbiIsIi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogIzQ1NDU0NUREO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogdmFyKC0tb3ZlcmxheS16aW5kZXgpO1xufVxuLmZ1bGxzY3JlZW4gc2ltcGxlLXBhZ2VyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5mdWxsc2NyZWVuIHNpbXBsZS1wYWdlciA6Om5nLWRlZXAgLm5hdmlnYXRpb24tcm93LXBhbmVsLm9ubHktb25lIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5mdWxsc2NyZWVuIDo6bmctZGVlcCAuZXJyb3ItbmFtZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG59XG5cbi5lcnJvci1uZXh0LXRvLW5hdmlnYXRpb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59Il19 */";
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts":
  /*!*************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: NgErrorComponent */

  /***/
  function libsNgUtilsNgErrorOverlayNgErrorNgErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function () {
      return NgErrorComponent;
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


    var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error-handler.service */
    "../../libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @gewd/ng-utils/css-props */
    "../../libs/ng-utils/css-props/index.ts");

    var NgErrorComponent = /*#__PURE__*/function () {
      function NgErrorComponent(errorService, cd, cssProps, element) {
        _classCallCheck(this, NgErrorComponent);

        this.errorService = errorService;
        this.cd = cd;
        this.cssProps = cssProps;
        this.element = element;
        this.showIndex = 0;
        this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.errors$ = this.errorService.error$.pipe( // add all errors to an array
        // only keep the newest 10
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (a, c) {
          return [c].concat(_toConsumableArray(a)).slice(0, 10);
        }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
          return value.filter(function (v) {
            return !!v;
          });
        }));
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        cssProps.updateElementVars(element.nativeElement, {
          '--overlay-zindex': errorService.config.zIndex
        });
      }

      _createClass(NgErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.errors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(function (value) {
            _this10.visible$.next(value.length > 0);

            _this10.cd.markForCheck();
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
        type: _error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_5__["CssPropsService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    NgErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ng-error.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ng-error.component.scss */
      "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_5__["CssPropsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], NgErrorComponent);
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-error-overlay/public_api.ts":
  /*!********************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/public_api.ts ***!
    \********************************************************************************/

  /*! exports provided: NgErrorComponent, NgErrorOverlayModule */

  /***/
  function libsNgUtilsNgErrorOverlayPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ng-error/ng-error.component */
    "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function () {
      return _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"];
    });
    /* harmony import */


    var _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-error/ng-error-overlay.module */
    "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function () {
      return _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__["NgErrorOverlayModule"];
    });
    /***/

  },

  /***/
  "../../libs/ng-utils/ng-inspect/index.ts":
  /*!*********************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/index.ts ***!
    \*********************************************************************/

  /*! exports provided: NgInspectModule, NgInspectComponent */

  /***/
  function libsNgUtilsNgInspectIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./public_api */
    "../../libs/ng-utils/ng-inspect/public_api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgInspectModule", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function () {
      return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgInspectComponent"];
    });
    /***/

  },

  /***/
  "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.scss":
  /*!*************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsNgUtilsNgInspectNgInspectNgInspectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".debug-panel {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  max-height: 500px;\n  overflow: auto;\n  z-index: 10;\n  color: white;\n}\n.debug-panel .panel-background {\n  background: #4f4f4f;\n  border: 2px dashed #4f8cc9;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 10px;\n  min-width: 150px;\n  max-width: 400px;\n}\n.debug-panel h4 {\n  margin-top: 0;\n}\n.debug-panel .icon {\n  cursor: pointer;\n  height: 20px;\n  width: 20px;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.debug-panel .svg-color {\n  fill: white;\n}\n.debug-panel .mat-hint {\n  font-size: 12px;\n  color: white;\n}\n.debug-panel .center-text {\n  text-align: center;\n}\n.debug-panel .item-row {\n  display: flex;\n  align-items: flex-end;\n}\n.debug-panel .item-row .prop-value {\n  background: #595959;\n}\n.debug-panel .item-row.odd .prop-value {\n  background: #7d7d7d;\n}\n.debug-panel .prop-value {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  width: 250px;\n}\n.debug-panel ::ng-deep mat-form-field {\n  margin-bottom: -1.15em;\n  width: 100%;\n}\n.debug-panel .color-box {\n  --bg-color: grey;\n  width: 16px;\n  height: 16px;\n  background: var(--bg-color);\n  margin-right: 2px;\n  display: inline-block;\n  border: 1px solid white;\n}\n.debug-panel kbd {\n  background-color: #eee;\n  border-radius: 3px;\n  border: 1px solid #b4b4b4;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\n  color: #333;\n  display: inline-block;\n  font-size: 0.85em;\n  font-weight: 700;\n  line-height: 1;\n  padding: 2px 4px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL25nLWluc3BlY3QvbmctaW5zcGVjdC9uZy1pbnNwZWN0LmNvbXBvbmVudC5zY3NzIiwibGlicy9uZy11dGlscy9uZy1pbnNwZWN0L25nLWluc3BlY3QvbmctaW5zcGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FETUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7QURRRTtFQUNFLFdBQUE7QUNOSjtBRFNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7QUNSSjtBRFVFO0VBQ0UsYUFBQTtFQU1BLHFCQUFBO0FDYko7QURTSTtFQUNFLG1CQUFBO0FDUE47QURhTTtFQUNFLG1CQUFBO0FDWFI7QURnQkU7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNkSjtBRGlCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ2ZKO0FEa0JFO0VBQ0UsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDbEJKO0FEcUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0ZBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQkoiLCJmaWxlIjoibGlicy9uZy11dGlscy9uZy1pbnNwZWN0L25nLWluc3BlY3QvbmctaW5zcGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRlYnVnLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAucGFuZWwtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogIzRmNGY0ZjtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzRmOGNjOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cblxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG5cbiAgLmljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgfVxuXG5cbiAgLnN2Zy1jb2xvciB7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuY2VudGVyLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaXRlbS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAucHJvcC12YWx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNTk1OTU5O1xuICAgIH1cblxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICYub2RkIHtcbiAgICAgIC5wcm9wLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzdkN2Q3ZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvcC12YWx1ZSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IC0xLjE1ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29sb3ItYm94IHtcbiAgICAtLWJnLWNvbG9yOiBncmV5O1xuXG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcblxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gIGtiZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSBpbnNldDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAuODVlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIiwiLmRlYnVnLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGVidWctcGFuZWwgLnBhbmVsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzRmOGNjOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5kZWJ1Zy1wYW5lbCBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uZGVidWctcGFuZWwgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmRlYnVnLXBhbmVsIC5zdmctY29sb3Ige1xuICBmaWxsOiB3aGl0ZTtcbn1cbi5kZWJ1Zy1wYW5lbCAubWF0LWhpbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZWJ1Zy1wYW5lbCAuY2VudGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVidWctcGFuZWwgLml0ZW0tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmRlYnVnLXBhbmVsIC5pdGVtLXJvdyAucHJvcC12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM1OTU5NTk7XG59XG4uZGVidWctcGFuZWwgLml0ZW0tcm93Lm9kZCAucHJvcC12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM3ZDdkN2Q7XG59XG4uZGVidWctcGFuZWwgLnByb3AtdmFsdWUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjUwcHg7XG59XG4uZGVidWctcGFuZWwgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMTVlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGVidWctcGFuZWwgLmNvbG9yLWJveCB7XG4gIC0tYmctY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4uZGVidWctcGFuZWwga2JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIGluc2V0O1xuICBjb2xvcjogIzMzMztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts":
  /*!***********************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: NgInspectComponent */

  /***/
  function libsNgUtilsNgInspectNgInspectNgInspectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function () {
      return NgInspectComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var NgInspectComponent_1;
    var highlightClass = 'highlight-item';
    /** @dynamic - allows Document in ngc build */

    var NgInspectComponent = NgInspectComponent_1 = /*#__PURE__*/function () {
      function NgInspectComponent(cd, sanitizer, document) {
        var _this11 = this;

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

        if (!NgInspectComponent_1._addedStyle) {
          NgInspectComponent_1._addedStyle = true;
          var style = document.createElement('style'); // WebKit hack :(

          style.appendChild(document.createTextNode('')); // Add the <style> element to the page

          document.head.appendChild(style);
          style.sheet.addRule(".".concat(highlightClass), 'border: 2px dotted lightblue !important;');
        }

        var weakMap = new WeakMap();
        var highlightItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        highlightItem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), //filter(item => !!item),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()).subscribe(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
              oldItem = _ref8[0],
              current = _ref8[1];

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
          return value ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this11.getCurrentElement()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            return console.info({
              x: x
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
            return !!e && !_this11.isChildOfIgnoredElement(e.target);
          })) : rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
          return x.target === y.target;
        })).subscribe(function (event) {
          var target = event.target;

          var elementWithContext = _this11.findNextContext(target);

          if (elementWithContext) {
            var cached = weakMap.has(elementWithContext);
            var context = cached ? weakMap.get(elementWithContext) : _this11.getComponent(elementWithContext);

            if (!cached && context) {
              weakMap.set(elementWithContext, context);
            }

            if (context) {
              highlightItem$.next(elementWithContext);
              var instance = context.instance;
              var entries = Object.entries(instance).map(function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 2),
                    key = _ref10[0],
                    value = _ref10[1];

                return {
                  key: key,
                  propInfo: _this11.getPropInfo(value)
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

              _this11.component$.next(found);
            } else {
              highlightItem$.next(null);

              _this11.component$.next(null);
            }
          } else {
            highlightItem$.next(null);

            _this11.component$.next(null);
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
                cd: probe.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])
              };
            }

            return null;
          }
        }
      }, {
        key: "fillPinnedArray",
        value: function fillPinnedArray() {
          var _this12 = this;

          var pinnedItems = [];

          var _iterator6 = _createForOfIteratorHelper(this.pinnedAr),
              _step6;

          try {
            var _loop = function _loop() {
              var context = _step6.value;
              var instance = context.instance;
              pinnedItems.push({
                name: instance.__proto__.constructor.name,
                context: context,
                entries: _this12.pinnedMap.get(context).pinned.map(function (key) {
                  return {
                    key: key,
                    propInfo: _this12.getPropInfo(instance[key])
                  };
                })
              });
            };

            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
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

    NgInspectComponent._addedStyle = false;

    NgInspectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    NgInspectComponent = NgInspectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng-inspect',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ng-inspect.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ng-inspect.component.scss */
      "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Document])], NgInspectComponent);
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.module.ts":
  /*!********************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: NgInspectModule */

  /***/
  function libsNgUtilsNgInspectNgInspectNgInspectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgInspectModule", function () {
      return NgInspectModule;
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


    var _ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ng-inspect.component */
    "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @gewd/ng-utils/bootstrap-component */
    "../../libs/ng-utils/bootstrap-component/index.ts");

    var NgInspectModule = function NgInspectModule() {
      _classCallCheck(this, NgInspectModule);
    };

    NgInspectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]],
      entryComponents: [_ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"].component({
        elementName: 'ng-inspect',
        component: _ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]
      })],
      exports: [_ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]]
    })], NgInspectModule);
    /***/
  },

  /***/
  "../../libs/ng-utils/ng-inspect/public_api.ts":
  /*!**************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/public_api.ts ***!
    \**************************************************************************/

  /*! exports provided: NgInspectModule, NgInspectComponent */

  /***/
  function libsNgUtilsNgInspectPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ng_inspect_ng_inspect_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ng-inspect/ng-inspect.module */
    "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgInspectModule", function () {
      return _ng_inspect_ng_inspect_module__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"];
    });
    /* harmony import */


    var _ng_inspect_ng_inspect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-inspect/ng-inspect.component */
    "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function () {
      return _ng_inspect_ng_inspect_component__WEBPACK_IMPORTED_MODULE_1__["NgInspectComponent"];
    });
    /***/

  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/highlight-editor/highlight-editor.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsComponentsHighlightEditorHighlightEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"editor\"\n     [class.visible-highlight]=\"showHighlighedCode$ | async\"\n     [class.editor__no-debounce]=\"debounceTime === 0\">\n\n  <textarea #textarea [value]=\"value\"\n            (change)=\"onChange(textarea.value)\"\n            (keydown)=\"onKeyDown($event, textarea)\"\n            (keyup)=\"onKeyUp($event, textarea.value)\"\n            (focus)=\"focussed$.next(true)\"\n            (blur)=\"focussed$.next(false)\"\n            spellcheck=\"false\"\n  ></textarea>\n  <pre class=\"highlight-area\" #highlightArea></pre>\n</div>\n\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/markdown/module/render-markdown/render-markdown.component.html":
  /*!***********************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.html ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsMarkdownModuleRenderMarkdownRenderMarkdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/components/simple-pager/simple-pager.component.html":
  /*!*********************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.component.html ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsNgUtilsComponentsSimplePagerSimplePagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html":
  /*!*****************************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html ***!
    \*****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsNgUtilsDynamicPortalDynamicPortalDynamicPortalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html":
  /*!**************************************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html ***!
    \**************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsNgUtilsNgErrorOverlayNgErrorErrorOverlayErrorOverlayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsNgUtilsNgErrorOverlayNgErrorNgErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.html":
  /*!*****************************************************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.html ***!
    \*****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsNgUtilsNgInspectNgInspectNgInspectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template  #itemEdit let-item=\"item\" let-context=\"context\">\n  <div [ngSwitch]=\"item.propInfo.type\">\n    <ng-container *ngSwitchCase=\"'boolean'\">\n      <mat-checkbox [checked]=\"context.instance[item.key]\"\n                    (change)=\"onChangeGeneric($event.checked, context, item.key)\">\n        {{ item.key }}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'number'\">\n      <mat-form-field>\n        <input type=\"number\" [value]=\"context.instance[item.key]\" #number\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(number.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'string'\">\n      <mat-form-field>\n        <input type=\"text\" [value]=\"context.instance[item.key]\" #text\n                matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'color'\">\n      <mat-form-field>\n        <input type=\"color\"\n               [value]=\"context.instance[item.key]\" #text\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #itemsListTemplate let-items=\"items\" let-context=\"context\">\n  <div *ngFor=\"let item of items; let odd = odd; trackBy: trackByEntry\"\n       class=\"item-row\"\n       [class.odd]=\"odd\"\n  >\n    <div [ngSwitch]=\"item.propInfo.type\" style=\"flex: 1\">\n      <ng-container *ngSwitchDefault>\n        <div *ngIf=\"item.propInfo.canEdit && item.editMode; else readOnly\">\n\n          <ng-template *ngTemplateOutlet=\"itemEdit; context: {\n          item: item,\n          context: context\n        }\">\n          </ng-template>\n        </div>\n\n        <ng-template #readOnly>\n          <span class=\"mat-hint\">{{item.key}}:</span>\n          <br />\n          <span class=\"prop-value\">\n            <span *ngIf=\"item.propInfo.type === 'color'\"\n                 [style]=\"byPassAttr('--bg-color:'+context.instance[item.key])\"\n                  class=\"color-box\">\n\n            </span>\n            {{context.instance[item.key]}}</span>\n        </ng-template>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'observable'\">\n        <span class=\"mat-hint\">{{item.key}}</span>:\n        <br />\n        <span class=\"prop-value\">{{context.instance[item.key] | async | json}}</span>\n      </ng-container>\n    </div>\n    <div class=\"icon\" *ngIf=\"item.propInfo.canEdit\"\n         (click)=\"toggleEdit(item)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z\"/></svg>\n    </div>\n    <div class=\"icon\">\n      <div *ngIf=\"isPinned(context, item.key), else unpinned\"\n           (click)=\"onPinOp(context, item.key, false)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\n             enable-background=\"new 0 0 24 24\"\n             height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <g><path d=\"M0,0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M0,0h24v24H0V0z\" fill=\"none\"/></g>\n          <g><path  class=\"svg-color\" d=\"M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z\"/></g></svg>\n      </div>\n      <ng-template #unpinned>\n        <div (click)=\"onPinOp(context, item.key, true)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\"\n               height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/></svg>\n        </div>\n      </ng-template>\n    </div>\n\n  </div>\n</ng-template>\n\n<div class=\"debug-panel\" ignore-inspect>\n  <ng-container *ngIf=\"pinnedItems$ | async as pinnedItems\">\n    <div class=\"panel-background\" *ngFor=\"let pinnedItem of pinnedItems\">\n      <h4>{{pinnedItem.name}}</h4>\n\n      <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: pinnedItem.entries,\n          context: pinnedItem.context\n        }\">\n      </ng-template>\n    </div>\n  </ng-container>\n\n  <div class=\"panel-background\" *ngIf=\"component$ | async as component; else nothing\">\n    <h4>{{component.name}}</h4>\n\n    <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: component.entries,\n          context: component.context\n        }\">\n    </ng-template>\n  </div>\n  <ng-template #nothing>\n    <div class=\"panel-background center-text\">\n      Press/hold <kbd>ctrl</kbd> to select <br/>\n      your component to inspect\n    </div>\n  </ng-template>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!****************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Open Dev-Tools to see the network calls.</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamplePanelExamplePanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-expansion-panel (opened)=\"applyLazyModuleInputs(lazyModuleComponent)\">\n  <mat-expansion-panel-header>\n    <a [href]=\"'https://www.npmjs.com/package/' + packageName\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img [src]=\"'https://img.shields.io/npm/v/' + packageName + '.svg?'\"\n           [alt]=\"packageName + ' NPM Version'\">\n    </a>\n    &nbsp;- {{ packageTitle }}\n  </mat-expansion-panel-header>\n\n  <gewd-lazy-module-component\n    #lazyModuleComponent>\n    <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n";
    /***/
  },

  /***/
  "../../node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts":
  /*!*****************************************************************************************************************!*\
    !*** /home/runner/work/gewd/gewd/node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts ***!
    \*****************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWorkerPluginDistLoaderJsName0SrcAppMarkdownWorkerTs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__.p + "0-es5.worker.js";
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.dynamic-portal-border {\n  background: darkgreen;\n  padding: 5px;\n  margin: 15px 0;\n  border: 2px dashed green;\n  display: block;\n}\n.npm-link {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9hcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJhcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZHluYW1pYy1wb3J0YWwtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnBtLWxpbmsge1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iLCIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZHluYW1pYy1wb3J0YWwtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnBtLWxpbmsge1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // TODO Splitup each panel functions/vars into its own component


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
        this.editorLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.editorExample$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.aForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]().group({
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
          var _this13 = this;

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
                this.markDownReadmeMD$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (value) {
                  _this13.editorExample$.next(value);
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
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-utils-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @gewd/markdown */
      "../../libs/markdown/module/index.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/expansion */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @gewd/markdown/contracts */
      "../../libs/markdown/contracts/index.ts");
      /* harmony import */


      var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @gewd/lazy/loader */
      "../../libs/lazy/loader/index.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @gewd/ng-utils/dynamic-portal */
      "../../libs/ng-utils/dynamic-portal/index.ts");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @gewd/markdown/service */
      "../../libs/markdown/service/index.ts");
      /* harmony import */


      var _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./md-cache-example.service */
      "./src/app/md-cache-example.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./markdown-toolbar.component */
      "./src/app/markdown-toolbar.component.ts");
      /* harmony import */


      var _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @gewd/ng-utils/ng-error-overlay */
      "../../libs/ng-utils/ng-error-overlay/index.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @gewd/components/highlight-editor */
      "../../libs/components/highlight-editor/index.ts");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/input */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../../libs/mat-utils/material-icons */
      "../../libs/mat-utils/material-icons/index.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./example-panel/example-panel.component */
      "./src/app/example-panel/example-panel.component.ts");
      /* harmony import */


      var _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @gewd/mat-utils/custom-form-control */
      "../../libs/mat-utils/custom-form-control/index.ts");
      /* harmony import */


      var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @gewd/lazy/utils */
      "../../libs/lazy/utils/index.ts");

      var marked = function marked() {
        return new Worker(__webpack__worker__0, undefined);
      };

      var markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
        return __webpack_require__.e(
        /*! import() | markdown-example-module */
        "markdown-example-module").then(__webpack_require__.bind(null,
        /*! ./examples/markdown-example/markdown-example.module */
        "./src/app/examples/markdown-example/markdown-example.module.ts")).then(function (_ref11) {
          var MarkdownExampleModule = _ref11.MarkdownExampleModule;
          return MarkdownExampleModule;
        });
      });
      var lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
        return __webpack_require__.e(
        /*! import() | lazyload-example-module */
        "lazyload-example-module").then(__webpack_require__.bind(null,
        /*! ./examples/lazyload-example/lazyload-example.module */
        "./src/app/examples/lazyload-example/lazyload-example.module.ts")).then(function (_ref12) {
          var LazyloadExampleModule = _ref12.LazyloadExampleModule;
          return LazyloadExampleModule;
        });
      });
      var componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
        return __webpack_require__.e(
        /*! import() | components-example-module */
        "components-example-module").then(__webpack_require__.bind(null,
        /*! ./examples/components-example/components-example.module */
        "./src/app/examples/components-example/components-example.module.ts")).then(function (_ref13) {
          var ComponentsExampleModule = _ref13.ComponentsExampleModule;
          return ComponentsExampleModule;
        });
      });
      var portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](function () {
        return __webpack_require__.e(
        /*! import() | lazy-portal-module */
        "lazy-portal-module").then(__webpack_require__.bind(null,
        /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */
        "./src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts")).then(function (_ref14) {
          var PortalModule = _ref14.PortalModule;
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
        }), _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([]), _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__["GewdLazyLoaderModule"].withLazy([{
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
    /*! /home/runner/work/gewd/gewd/node_modules/worker-plugin/dist/loader.js?name=0!./markdown.worker.ts */
    "../../node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts"));
    /***/
  },

  /***/
  "./src/app/example-panel/example-panel.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/example-panel/example-panel.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamplePanelExamplePanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9leGFtcGxlLXBhbmVsL2V4YW1wbGUtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/example-panel/example-panel.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/example-panel/example-panel.component.ts ***!
    \**********************************************************/

  /*! exports provided: ExamplePanelComponent */

  /***/
  function srcAppExamplePanelExamplePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplePanelComponent", function () {
      return ExamplePanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ExamplePanelComponent.prototype, "packageName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ExamplePanelComponent.prototype, "packageTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ExamplePanelComponent.prototype, "moduleName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ExamplePanelComponent.prototype, "componentName", void 0);
    ExamplePanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gewd-example-panel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./example-panel.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./example-panel.component.css */
      "./src/app/example-panel/example-panel.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ExamplePanelComponent);
    /***/
  },

  /***/
  "./src/app/markdown-toolbar.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/markdown-toolbar.component.ts ***!
    \***********************************************/

  /*! exports provided: MarkdownToolbarComponent */

  /***/
  function srcAppMarkdownToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownToolbarComponent", function () {
      return MarkdownToolbarComponent;
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


    var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @gewd/markdown/module */
    "../../libs/markdown/module/index.ts");

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
  "./src/app/md-cache-example.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/md-cache-example.service.ts ***!
    \*********************************************/

  /*! exports provided: MdCacheExampleService */

  /***/
  function srcAppMdCacheExampleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MdCacheExampleService", function () {
      return MdCacheExampleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @gewd/markdown/service */
    "../../libs/markdown/service/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var localforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! localforage */
    "../../node_modules/localforage/dist/localforage.js");
    /* harmony import */


    var localforage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @gewd/markdown/utils */
    "../../libs/markdown/utils/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MdCacheExampleService = /*#__PURE__*/function (_gewd_markdown_servic) {
      _inherits(MdCacheExampleService, _gewd_markdown_servic);

      var _super = _createSuper(MdCacheExampleService);

      function MdCacheExampleService(platformId) {
        var _this14;

        _classCallCheck(this, MdCacheExampleService);

        _this14 = _super.call(this);
        _this14.enabled = true; // skip localforage calls during pre-render step

        _this14.enabled = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);

        if (_this14.enabled) {
          _this14.createInstance();
        }

        return _this14;
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

    MdCacheExampleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], MdCacheExampleService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var _gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @gewd/ng-utils/ng-inspect */
    "../../libs/ng-utils/ng-inspect/index.ts"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

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
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/gewd/gewd/apps/demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map