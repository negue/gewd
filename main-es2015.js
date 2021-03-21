(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/components/highlight-editor/editor.functions.ts":
/*!****************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/editor.functions.ts ***!
  \****************************************************************************************/
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

/***/ "../../libs/components/highlight-editor/editor.keys.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/editor.keys.ts ***!
  \***********************************************************************************/
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

/***/ "../../libs/components/highlight-editor/highlight-editor.component.scss":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #2e2e2e;\n  display: block;\n  border: 1px solid lightgray;\n  padding: 4px;\n  --editor-min-height: 100px;\n  --editor-max-height: 100px;\n  --editor-font-size: 14px;\n  --editor-line-height: 1.5;\n  overflow-y: auto;\n  min-height: var(--editor-min-height);\n  max-height: var(--editor-max-height);\n}\n:host :host-context(.mat-form-field) {\n  border: 0;\n  padding: 0;\n  background: inherit;\n  width: 100%;\n}\n.editor {\n  position: relative;\n  padding: 0;\n  -moz-tab-size: 2ch;\n    -o-tab-size: 2ch;\n       tab-size: 2ch;\n  text-align: left;\n  box-sizing: border-box;\n  font-family: \"Fira code\", \"Fira Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: var(--editor-font-size);\n  line-height: var(--editor-line-height);\n  height: 100%;\n}\n/** shared styles */\ntextarea, .highlight-area {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  background: none;\n  box-sizing: inherit;\n  display: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant-ligatures: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  -moz-tab-size: inherit;\n    -o-tab-size: inherit;\n       tab-size: inherit;\n  text-indent: inherit;\n  text-rendering: inherit;\n  text-transform: inherit;\n  white-space: pre-wrap;\n  word-break: keep-all;\n  overflow-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  min-height: var(--editor-min-height);\n}\ntextarea {\n  outline: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  resize: none;\n  overflow: hidden;\n  caret-color: white;\n  caret-shape: bar;\n}\ntextarea:focus {\n  outline: none !important;\n}\n.highlight-area {\n  position: relative;\n  pointer-events: none;\n}\n.editor__no-debounce textarea {\n  -webkit-text-fill-color: transparent;\n}\n:not(.editor__no-debounce):not(.visible-highlight) textarea {\n  color: inherit;\n}\n:not(.editor__no-debounce):not(.visible-highlight) .highlight-area {\n  opacity: 0;\n}\n:not(.editor__no-debounce).visible-highlight textarea {\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL2NvbXBvbmVudHMvaGlnaGxpZ2h0LWVkaXRvci9oaWdobGlnaHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwibGlicy9jb21wb25lbnRzL2hpZ2hsaWdodC1lZGl0b3IvaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtFQVVBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBR0EsZ0JBQUE7RUFFQSxvQ0FBQTtFQUNBLG9DQUFBO0FDWkY7QURMRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDT0o7QURVQTtFQUNFLGtCQUFBO0VBRUEsVUFBQTtFQUVBLGtCQUFBO0lBQUEsZ0JBQUE7T0FBQSxhQUFBO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUVGLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNYRjtBRGdCQSxtQkFBQTtBQUVBO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtJQUFBLG9CQUFBO09BQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFHQSxtQ0FBQTtFQUdBLG9DQUFBO0FDckJGO0FEd0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUdBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7QUR5QkU7RUFDRSx3QkFBQTtBQ3ZCSjtBRDJCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUN4QkY7QUQ2QkU7RUFDRSxvQ0FBQTtBQzFCSjtBRGdDSTtFQUNFLGNBQUE7QUM3Qk47QURnQ0k7RUFDRyxVQUFBO0FDOUJQO0FEbUNJO0VBQ0Esb0NBQUE7QUNqQ0oiLCJmaWxlIjoibGlicy9jb21wb25lbnRzL2hpZ2hsaWdodC1lZGl0b3IvaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA0cHg7XG5cbiAgOmhvc3QtY29udGV4dCgubWF0LWZvcm0tZmllbGQpIHtcbiAgICBib3JkZXIgOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgLS1lZGl0b3ItbWluLWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLW1heC1oZWlnaHQ6IDEwMHB4O1xuICAtLWVkaXRvci1mb250LXNpemU6IDE0cHg7XG4gIC0tZWRpdG9yLWxpbmUtaGVpZ2h0OiAxLjU7XG5cblxuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIG1pbi1oZWlnaHQ6IHZhcigtLWVkaXRvci1taW4taGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogdmFyKC0tZWRpdG9yLW1heC1oZWlnaHQpO1xufVxuXG5cbi5lZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgcGFkZGluZzogMDtcblxuICB0YWItc2l6ZTogMmNoO1xuXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBjb2RlJywgJ0ZpcmEgTW9ubycsIENvbnNvbGFzLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IHZhcigtLWVkaXRvci1mb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZWRpdG9yLWxpbmUtaGVpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8vbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG4vKiogc2hhcmVkIHN0eWxlcyAqL1xuXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6MDtcblxuICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgLy8gdHJhbnNpdGlvbjogMjBtcyBjb2xvciwgb3BhY2l0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cblxuICBtaW4taGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWluLWhlaWdodCk7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZ2hsaWdodC1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB7XG4gIHRleHRhcmVhIHtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSkge1xuICAmOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIHtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0LWFyZWEge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJi52aXNpYmxlLWhpZ2hsaWdodCB7XG4gICAgdGV4dGFyZWEge1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNHB4O1xuICAtLWVkaXRvci1taW4taGVpZ2h0OiAxMDBweDtcbiAgLS1lZGl0b3ItbWF4LWhlaWdodDogMTAwcHg7XG4gIC0tZWRpdG9yLWZvbnQtc2l6ZTogMTRweDtcbiAgLS1lZGl0b3ItbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1lZGl0b3ItbWF4LWhlaWdodCk7XG59XG46aG9zdCA6aG9zdC1jb250ZXh0KC5tYXQtZm9ybS1maWVsZCkge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0YWItc2l6ZTogMmNoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJGaXJhIGNvZGVcIiwgXCJGaXJhIE1vbm9cIiwgQ29uc29sYXMsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZWRpdG9yLWZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1lZGl0b3ItbGluZS1oZWlnaHQpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qKiBzaGFyZWQgc3R5bGVzICovXG50ZXh0YXJlYSwgLmhpZ2hsaWdodC1hcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHRhYi1zaXplOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWluLWhlaWdodDogdmFyKC0tZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY2FyZXQtc2hhcGU6IGJhcjtcbn1cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGlnaGxpZ2h0LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZWRpdG9yX19uby1kZWJvdW5jZSB0ZXh0YXJlYSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOm5vdCguZWRpdG9yX19uby1kZWJvdW5jZSk6bm90KC52aXNpYmxlLWhpZ2hsaWdodCkgdGV4dGFyZWEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbjpub3QoLmVkaXRvcl9fbm8tZGVib3VuY2UpOm5vdCgudmlzaWJsZS1oaWdobGlnaHQpIC5oaWdobGlnaHQtYXJlYSB7XG4gIG9wYWNpdHk6IDA7XG59XG46bm90KC5lZGl0b3JfX25vLWRlYm91bmNlKS52aXNpYmxlLWhpZ2hsaWdodCB0ZXh0YXJlYSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "../../libs/components/highlight-editor/highlight-editor.component.ts":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HighlightEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return HighlightEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "../../libs/ng-utils/css-props/index.ts");
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight.service */ "../../libs/components/highlight-editor/highlight.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ "../../libs/ng-utils/morphdom/index.ts");
/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.functions */ "../../libs/components/highlight-editor/editor.functions.ts");
/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.keys */ "../../libs/components/highlight-editor/editor.keys.ts");









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
    ngOnInit() {
        this.updateLinesAmount();
        // once the debounceTime changes
        // recreate the observable
        this.debounce$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(debounceTimeInterval => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()),
            this.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()),
            this.lastKeyTriggered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(debounceTimeInterval))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$)).subscribe(([code, language, lastKeyEvent]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showHighlighedCode$.next(false);
            yield this.highlightToPreTag(code, language, lastKeyEvent);
            this.showHighlighedCode$.next(true);
            // incase multiple enters scroll the textarea one off, scroll back up
            // this.textarea.nativeElement.scrollTo(0,0);
        }));
        this.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(value => {
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
        if (event.key.match(this.allCharsRegex) && !_editor_keys__WEBPACK_IMPORTED_MODULE_8__["IGNORE_KEY_EVENTS"].includes(event.key)) {
            this.showHighlighedCode$.next(false);
        }
        this.value$.next(textarea.value);
        if (event.key === _editor_keys__WEBPACK_IMPORTED_MODULE_8__["KEY_TAB"]) {
            const handledTab = Object(_editor_functions__WEBPACK_IMPORTED_MODULE_7__["handleTab"])(event, textarea.value, textarea.selectionStart, textarea.selectionEnd, this.useTabs, this.spaceWidth);
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"] },
    { type: _highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__["MorphdomService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "language", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "debounceTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "useTabs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "spaceWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "changed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "value$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "allCharsRegex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textarea'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HighlightEditorComponent.prototype, "textarea", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('highlightArea'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HighlightEditorComponent.prototype, "highlightArea", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HighlightEditorComponent.prototype, "focussed$", void 0);
HighlightEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-prism-editor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./highlight-editor.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/highlight-editor/highlight-editor.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        providers: [
            _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./highlight-editor.component.scss */ "../../libs/components/highlight-editor/highlight-editor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_2__["ElementCssService"],
        _highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_6__["MorphdomService"]])
], HighlightEditorComponent);



/***/ }),

/***/ "../../libs/components/highlight-editor/highlight-editor.module.ts":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return HighlightEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight-editor.component */ "../../libs/components/highlight-editor/highlight-editor.component.ts");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "../../libs/ng-utils/css-props/index.ts");
/* harmony import */ var _gewd_ng_utils_morphdom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/ng-utils/morphdom */ "../../libs/ng-utils/morphdom/index.ts");






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

/***/ "../../libs/components/highlight-editor/highlight.service.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return PrismOptionsInjectorToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/service */ "../../libs/markdown/service/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! comlink */ "../../node_modules/comlink/dist/esm/comlink.mjs");





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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(PrismOptionsInjectorToken)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], HighlightService);



/***/ }),

/***/ "../../libs/components/highlight-editor/index.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/index.ts ***!
  \*****************************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/components/highlight-editor/public_api.ts");
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

/***/ "../../libs/components/highlight-editor/public_api.ts":
/*!**********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/components/highlight-editor/public_api.ts ***!
  \**********************************************************************************/
/*! exports provided: PrismOptionsInjectorToken, HighlightService, HighlightEditorComponent, handleTab, KEY_BACKSPACE, KEY_DELETE, KEY_ENTER, KEY_ESCAPE, KEY_TAB, KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT, KEY_SHIFT, KEY_ALT, KEY_CTRL, KEY_META, KEY_CAPS_LOCK, ALL_CHARS_REGEX, IGNORE_KEY_EVENTS, HighlightEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.service */ "../../libs/components/highlight-editor/highlight.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismOptionsInjectorToken", function() { return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["PrismOptionsInjectorToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return _highlight_service__WEBPACK_IMPORTED_MODULE_0__["HighlightService"]; });

/* harmony import */ var _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight-editor.component */ "../../libs/components/highlight-editor/highlight-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorComponent", function() { return _highlight_editor_component__WEBPACK_IMPORTED_MODULE_1__["HighlightEditorComponent"]; });

/* harmony import */ var _editor_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.functions */ "../../libs/components/highlight-editor/editor.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTab", function() { return _editor_functions__WEBPACK_IMPORTED_MODULE_2__["handleTab"]; });

/* harmony import */ var _editor_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.keys */ "../../libs/components/highlight-editor/editor.keys.ts");
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

/* harmony import */ var _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight-editor.module */ "../../libs/components/highlight-editor/highlight-editor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightEditorModule", function() { return _highlight_editor_module__WEBPACK_IMPORTED_MODULE_4__["HighlightEditorModule"]; });








/***/ }),

/***/ "../../libs/lazy/loader/gewd-lazy-loader.module.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/loader/gewd-lazy-loader.module.ts ***!
  \*******************************************************************************/
/*! exports provided: REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return REGISTORY_LAZY_LOADED_MODULE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return GewdLazyLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy.component */ "../../libs/lazy/loader/lazy.component.ts");
/* harmony import */ var _lazy_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-module.component */ "../../libs/lazy/loader/lazy-module.component.ts");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/lazy/registry */ "../../libs/lazy/registry/index.ts");
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REGISTORY_LAZY_LOADED_MODULE_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], GewdLazyLoaderModule);



/***/ }),

/***/ "../../libs/lazy/loader/index.ts":
/*!*************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/loader/index.ts ***!
  \*************************************************************/
/*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/lazy/loader/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_LAZY_LOADED_MODULE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["GewdLazyLoaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LazyModuleComponent"]; });




/***/ }),

/***/ "../../libs/lazy/loader/lazy-module.component.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/loader/lazy-module.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return LazyModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/lazy/registry */ "../../libs/lazy/registry/index.ts");





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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LazyModuleComponent.prototype, "moduleAlias", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LazyModuleComponent.prototype, "component", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentInputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentOutputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], LazyModuleComponent.prototype, "targetContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentCreated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "componentLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyModuleComponent.prototype, "showError", void 0);
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

/***/ "../../libs/lazy/loader/lazy.component.ts":
/*!**********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/loader/lazy.component.ts ***!
  \**********************************************************************/
/*! exports provided: LazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gewd_lazy_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/lazy/registry */ "../../libs/lazy/registry/index.ts");





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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LazyComponent.prototype, "component", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentInputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentOutputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('targetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], LazyComponent.prototype, "targetContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentCreated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LazyComponent.prototype, "componentLoading", void 0);
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

/***/ "../../libs/lazy/loader/public_api.ts":
/*!******************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/loader/public_api.ts ***!
  \******************************************************************/
/*! exports provided: LazyComponent, REGISTORY_LAZY_LOADED_MODULE_TOKEN, GewdLazyLoaderModule, LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy.component */ "../../libs/lazy/loader/lazy.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return _lazy_component__WEBPACK_IMPORTED_MODULE_0__["LazyComponent"]; });

/* harmony import */ var _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gewd-lazy-loader.module */ "../../libs/lazy/loader/gewd-lazy-loader.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_LAZY_LOADED_MODULE_TOKEN", function() { return _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_LAZY_LOADED_MODULE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GewdLazyLoaderModule", function() { return _gewd_lazy_loader_module__WEBPACK_IMPORTED_MODULE_1__["GewdLazyLoaderModule"]; });

/* harmony import */ var _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-module.component */ "../../libs/lazy/loader/lazy-module.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return _lazy_module_component__WEBPACK_IMPORTED_MODULE_2__["LazyModuleComponent"]; });






/***/ }),

/***/ "../../libs/lazy/registry/index.ts":
/*!***************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/registry/index.ts ***!
  \***************************************************************/
/*! exports provided: DynamicLoaderRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/lazy/registry/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"]; });




/***/ }),

/***/ "../../libs/lazy/registry/public_api.ts":
/*!********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/registry/public_api.ts ***!
  \********************************************************************/
/*! exports provided: DynamicLoaderRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ "../../libs/lazy/registry/registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLoaderRegistry", function() { return _registry__WEBPACK_IMPORTED_MODULE_0__["DynamicLoaderRegistry"]; });




/***/ }),

/***/ "../../libs/lazy/registry/registry.ts":
/*!******************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/registry/registry.ts ***!
  \******************************************************************/
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

/***/ "../../libs/lazy/utils/index.ts":
/*!************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/utils/index.ts ***!
  \************************************************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/lazy/utils/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });




/***/ }),

/***/ "../../libs/lazy/utils/lazy.ts":
/*!***********************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/utils/lazy.ts ***!
  \***********************************************************/
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

/***/ "../../libs/lazy/utils/public_api.ts":
/*!*****************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/lazy/utils/public_api.ts ***!
  \*****************************************************************/
/*! exports provided: Lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ "../../libs/lazy/utils/lazy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });




/***/ }),

/***/ "../../libs/markdown/contracts/default-options.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/contracts/default-options.ts ***!
  \******************************************************************************/
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

/***/ "../../libs/markdown/contracts/index.ts":
/*!********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/contracts/index.ts ***!
  \********************************************************************/
/*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/markdown/contracts/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PRISM_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MERMAID_OPTIONS"]; });




/***/ }),

/***/ "../../libs/markdown/contracts/public_api.ts":
/*!*************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/contracts/public_api.ts ***!
  \*************************************************************************/
/*! exports provided: DEFAULT_PRISM_OPTIONS, DEFAULT_MERMAID_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-options */ "../../libs/markdown/contracts/default-options.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRISM_OPTIONS", function() { return _default_options__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_PRISM_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MERMAID_OPTIONS", function() { return _default_options__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MERMAID_OPTIONS"]; });




/***/ }),

/***/ "../../libs/markdown/module/index.ts":
/*!*****************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/index.ts ***!
  \*****************************************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/markdown/module/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RenderMarkdownComponent"]; });




/***/ }),

/***/ "../../libs/markdown/module/markdown.module.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/markdown.module.ts ***!
  \***************************************************************************/
/*! exports provided: MarkdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return MarkdownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ "../../libs/markdown/module/render-markdown/render-markdown.component.ts");




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

/***/ "../../libs/markdown/module/public_api.ts":
/*!**********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/public_api.ts ***!
  \**********************************************************************/
/*! exports provided: MarkdownModule, RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.module */ "../../libs/markdown/module/markdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownModule", function() { return _markdown_module__WEBPACK_IMPORTED_MODULE_0__["MarkdownModule"]; });

/* harmony import */ var _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-markdown/render-markdown.component */ "../../libs/markdown/module/render-markdown/render-markdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return _render_markdown_render_markdown_component__WEBPACK_IMPORTED_MODULE_1__["RenderMarkdownComponent"]; });





/***/ }),

/***/ "../../libs/markdown/module/render-markdown/render-markdown.component.scss":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep foreignObject {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL21hcmtkb3duL21vZHVsZS9yZW5kZXItbWFya2Rvd24vcmVuZGVyLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwibGlicy9tYXJrZG93bi9tb2R1bGUvcmVuZGVyLW1hcmtkb3duL3JlbmRlci1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUFnQixpQkFBQTtBQ0FsQiIsImZpbGUiOiJsaWJzL21hcmtkb3duL21vZHVsZS9yZW5kZXItbWFya2Rvd24vcmVuZGVyLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLy8gZml4IG1lcm1haWQgb3ZlcmZsb3cgOilcbiAgZm9yZWlnbk9iamVjdCB7IG92ZXJmbG93OiB2aXNpYmxlOyB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgZm9yZWlnbk9iamVjdCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */");

/***/ }),

/***/ "../../libs/markdown/module/render-markdown/render-markdown.component.ts":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RenderMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMarkdownComponent", function() { return RenderMarkdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/service */ "../../libs/markdown/service/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let RenderMarkdownComponent = class RenderMarkdownComponent {
    constructor(service, element, sanitizer, cache) {
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
    { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownCacheService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "showRawMd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "useCache", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "allowMermaid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RenderMarkdownComponent.prototype, "mermaidTheme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], RenderMarkdownComponent.prototype, "markdown", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RenderMarkdownComponent.prototype, "onLinkClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RenderMarkdownComponent.prototype, "onClick", null);
RenderMarkdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-markdown',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./render-markdown.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/markdown/module/render-markdown/render-markdown.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./render-markdown.component.scss */ "../../libs/markdown/module/render-markdown/render-markdown.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_3__["MarkdownCacheService"]])
], RenderMarkdownComponent);



/***/ }),

/***/ "../../libs/markdown/service/index.ts":
/*!******************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/service/index.ts ***!
  \******************************************************************/
/*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/markdown/service/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownCacheService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MarkdownOptionsInjectorToken"]; });




/***/ }),

/***/ "../../libs/markdown/service/injection-token.ts":
/*!****************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/service/injection-token.ts ***!
  \****************************************************************************/
/*! exports provided: MarkdownOptionsInjectorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return MarkdownOptionsInjectorToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const MarkdownOptionsInjectorToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MarkdownOptionsInjectorToken');


/***/ }),

/***/ "../../libs/markdown/service/markdown-cache.service.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/service/markdown-cache.service.ts ***!
  \***********************************************************************************/
/*! exports provided: MarkdownCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return MarkdownCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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

/***/ "../../libs/markdown/service/markdown.service.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/service/markdown.service.ts ***!
  \*****************************************************************************/
/*! exports provided: MarkdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return MarkdownService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! comlink */ "../../node_modules/comlink/dist/esm/comlink.mjs");
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gewd/markdown/contracts */ "../../libs/markdown/contracts/index.ts");
/* harmony import */ var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown-cache.service */ "../../libs/markdown/service/markdown-cache.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injection-token */ "../../libs/markdown/service/injection-token.ts");
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gewd/markdown/utils */ "../../libs/markdown/utils/index.ts");








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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_injection_token__WEBPACK_IMPORTED_MODULE_6__["MarkdownOptionsInjectorToken"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _markdown_cache_service__WEBPACK_IMPORTED_MODULE_4__["MarkdownCacheService"],
        Document,
        Object])
], MarkdownService);



/***/ }),

/***/ "../../libs/markdown/service/public_api.ts":
/*!***********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/service/public_api.ts ***!
  \***********************************************************************/
/*! exports provided: MarkdownService, MarkdownCacheService, MarkdownOptionsInjectorToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.service */ "../../libs/markdown/service/markdown.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownService", function() { return _markdown_service__WEBPACK_IMPORTED_MODULE_0__["MarkdownService"]; });

/* harmony import */ var _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-cache.service */ "../../libs/markdown/service/markdown-cache.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownCacheService", function() { return _markdown_cache_service__WEBPACK_IMPORTED_MODULE_1__["MarkdownCacheService"]; });

/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injection-token */ "../../libs/markdown/service/injection-token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptionsInjectorToken", function() { return _injection_token__WEBPACK_IMPORTED_MODULE_2__["MarkdownOptionsInjectorToken"]; });






/***/ }),

/***/ "../../libs/markdown/utils/index.ts":
/*!****************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/utils/index.ts ***!
  \****************************************************************/
/*! exports provided: Lazy, simpleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/markdown/utils/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleHash", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["simpleHash"]; });




/***/ }),

/***/ "../../libs/markdown/utils/lazy.ts":
/*!***************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/utils/lazy.ts ***!
  \***************************************************************/
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

/***/ "../../libs/markdown/utils/public_api.ts":
/*!*********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/utils/public_api.ts ***!
  \*********************************************************************/
/*! exports provided: Lazy, simpleHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy */ "../../libs/markdown/utils/lazy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _lazy__WEBPACK_IMPORTED_MODULE_0__["Lazy"]; });

/* harmony import */ var _simple_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-hash */ "../../libs/markdown/utils/simple-hash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleHash", function() { return _simple_hash__WEBPACK_IMPORTED_MODULE_1__["simpleHash"]; });





/***/ }),

/***/ "../../libs/markdown/utils/simple-hash.ts":
/*!**********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/markdown/utils/simple-hash.ts ***!
  \**********************************************************************/
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

/***/ "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/custom-form-control.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return CustomFormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], CustomFormControlComponent.prototype, "value", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('aria-describedby'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CustomFormControlComponent.prototype, "userAriaDescribedBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CustomFormControlComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CustomFormControlComponent.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CustomFormControlComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CustomFormControlComponent.prototype, "focused", void 0);
CustomFormControlComponent = CustomFormControlComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-custom-form-control',
        template: `<ng-content></ng-content>`,
        providers: [
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], useExisting: CustomFormControlComponent_1 }
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
], CustomFormControlComponent);



/***/ }),

/***/ "../../libs/mat-utils/custom-form-control/custom-form-control.module.ts":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/custom-form-control.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: CustomFormControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return CustomFormControlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-form-control.component */ "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





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

/***/ "../../libs/mat-utils/custom-form-control/index.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/index.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomFormControlModule, CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/mat-utils/custom-form-control/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlComponent"]; });




/***/ }),

/***/ "../../libs/mat-utils/custom-form-control/public_api.ts":
/*!************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/custom-form-control/public_api.ts ***!
  \************************************************************************************/
/*! exports provided: CustomFormControlModule, CustomFormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-form-control.module */ "../../libs/mat-utils/custom-form-control/custom-form-control.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlModule", function() { return _custom_form_control_module__WEBPACK_IMPORTED_MODULE_0__["CustomFormControlModule"]; });

/* harmony import */ var _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-form-control.component */ "../../libs/mat-utils/custom-form-control/custom-form-control.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFormControlComponent", function() { return _custom_form_control_component__WEBPACK_IMPORTED_MODULE_1__["CustomFormControlComponent"]; });





/***/ }),

/***/ "../../libs/mat-utils/material-icons/index.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/index.ts ***!
  \**************************************************************************/
/*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/mat-utils/material-icons/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGISTORY_ICONS_PAIR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RegisterIconsModule"]; });




/***/ }),

/***/ "../../libs/mat-utils/material-icons/public_api.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/public_api.ts ***!
  \*******************************************************************************/
/*! exports provided: registerIcons, REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register_icons */ "../../libs/mat-utils/material-icons/register_icons.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _register_icons__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony import */ var _register_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register_icons.module */ "../../libs/mat-utils/material-icons/register_icons.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["REGISTORY_ICONS_PAIR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return _register_icons_module__WEBPACK_IMPORTED_MODULE_1__["RegisterIconsModule"]; });





/***/ }),

/***/ "../../libs/mat-utils/material-icons/register_icons.module.ts":
/*!******************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/register_icons.module.ts ***!
  \******************************************************************************************/
/*! exports provided: REGISTORY_ICONS_PAIR_TOKEN, RegisterIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTORY_ICONS_PAIR_TOKEN", function() { return REGISTORY_ICONS_PAIR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterIconsModule", function() { return RegisterIconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _register_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register_icons */ "../../libs/mat-utils/material-icons/register_icons.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REGISTORY_ICONS_PAIR_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Array])
], RegisterIconsModule);



/***/ }),

/***/ "../../libs/mat-utils/material-icons/register_icons.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/mat-utils/material-icons/register_icons.ts ***!
  \***********************************************************************************/
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

/***/ "../../libs/ng-utils/bootstrap-component/bootstrap-component.module.ts":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/bootstrap-component/bootstrap-component.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return BOOTSTRAP_COMPONENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return bootstrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return BootstrapComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(BOOTSTRAP_COMPONENT_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Array])
], BootstrapComponentModule);



/***/ }),

/***/ "../../libs/ng-utils/bootstrap-component/index.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/bootstrap-component/index.ts ***!
  \******************************************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/bootstrap-component/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BOOTSTRAP_COMPONENT_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["bootstrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BootstrapComponentModule"]; });




/***/ }),

/***/ "../../libs/ng-utils/bootstrap-component/public_api.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/bootstrap-component/public_api.ts ***!
  \***********************************************************************************/
/*! exports provided: BOOTSTRAP_COMPONENT_TOKEN, bootstrapComponent, BootstrapComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap-component.module */ "../../libs/ng-utils/bootstrap-component/bootstrap-component.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOTSTRAP_COMPONENT_TOKEN", function() { return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["BOOTSTRAP_COMPONENT_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapComponent", function() { return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["bootstrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentModule", function() { return _bootstrap_component_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapComponentModule"]; });




/***/ }),

/***/ "../../libs/ng-utils/components/index.ts":
/*!*********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/index.ts ***!
  \*********************************************************************/
/*! exports provided: SimplePagerModule, SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/components/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SimplePagerComponent"]; });




/***/ }),

/***/ "../../libs/ng-utils/components/public_api.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/public_api.ts ***!
  \**************************************************************************/
/*! exports provided: SimplePagerModule, SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-pager/simple-pager.module */ "../../libs/ng-utils/components/simple-pager/simple-pager.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return _simple_pager_simple_pager_module__WEBPACK_IMPORTED_MODULE_0__["SimplePagerModule"]; });

/* harmony import */ var _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-pager/simple-pager.component */ "../../libs/ng-utils/components/simple-pager/simple-pager.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_1__["SimplePagerComponent"]; });





/***/ }),

/***/ "../../libs/ng-utils/components/simple-pager/simple-pager.component.scss":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-arrow, .right-arrow {\n  --arrow-color: white;\n}\n\n.left-arrow svg path, .right-arrow svg path {\n  fill: var(--arrow-color);\n}\n\n.left-arrow:hover:not(.disabled), .right-arrow:hover:not(.disabled) {\n  cursor: pointer;\n}\n\n.left-arrow.disabled, .right-arrow.disabled {\n  --arrow-color: gray;\n}\n\n.slot {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.position-label {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.navigation-row-panel {\n  flex: 1;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL2NvbXBvbmVudHMvc2ltcGxlLXBhZ2VyL3NpbXBsZS1wYWdlci5jb21wb25lbnQuc2NzcyIsImxpYnMvbmctdXRpbHMvY29tcG9uZW50cy9zaW1wbGUtcGFnZXIvc2ltcGxlLXBhZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLE9BQUE7RUFDQSx5QkFBQTtBQ0ZGIiwiZmlsZSI6ImxpYnMvbmctdXRpbHMvY29tcG9uZW50cy9zaW1wbGUtcGFnZXIvc2ltcGxlLXBhZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubGVmdC1hcnJvdywgLnJpZ2h0LWFycm93IHtcbiAgLS1hcnJvdy1jb2xvcjogd2hpdGU7XG5cbiAgc3ZnIHBhdGgge1xuICAgIGZpbGw6IHZhcigtLWFycm93LWNvbG9yKTtcbiAgfVxuXG4gICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYuZGlzYWJsZWQge1xuICAgIC0tYXJyb3ctY29sb3I6IGdyYXk7XG4gIH1cbn1cblxuLnNsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvc2l0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm5hdmlnYXRpb24tcm93LXBhbmVsIHtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxlZnQtYXJyb3csIC5yaWdodC1hcnJvdyB7XG4gIC0tYXJyb3ctY29sb3I6IHdoaXRlO1xufVxuLmxlZnQtYXJyb3cgc3ZnIHBhdGgsIC5yaWdodC1hcnJvdyBzdmcgcGF0aCB7XG4gIGZpbGw6IHZhcigtLWFycm93LWNvbG9yKTtcbn1cbi5sZWZ0LWFycm93OmhvdmVyOm5vdCguZGlzYWJsZWQpLCAucmlnaHQtYXJyb3c6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGVmdC1hcnJvdy5kaXNhYmxlZCwgLnJpZ2h0LWFycm93LmRpc2FibGVkIHtcbiAgLS1hcnJvdy1jb2xvcjogZ3JheTtcbn1cblxuLnNsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvc2l0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm5hdmlnYXRpb24tcm93LXBhbmVsIHtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "../../libs/ng-utils/components/simple-pager/simple-pager.component.ts":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return SimplePagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], SimplePagerComponent.prototype, "templateRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], SimplePagerComponent.prototype, "items", void 0);
SimplePagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'simple-pager',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./simple-pager.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/components/simple-pager/simple-pager.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./simple-pager.component.scss */ "../../libs/ng-utils/components/simple-pager/simple-pager.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SimplePagerComponent);



/***/ }),

/***/ "../../libs/ng-utils/components/simple-pager/simple-pager.module.ts":
/*!************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SimplePagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerModule", function() { return SimplePagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-pager.component */ "../../libs/ng-utils/components/simple-pager/simple-pager.component.ts");




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

/***/ "../../libs/ng-utils/css-props/css-props.directive.ts":
/*!**********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/css-props.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: CSSPropsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return CSSPropsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-props.service */ "../../libs/ng-utils/css-props/css-props.service.ts");



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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CSSPropsDirective.prototype, "cssProps", void 0);
CSSPropsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[cssProps]',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]])
], CSSPropsDirective);



/***/ }),

/***/ "../../libs/ng-utils/css-props/css-props.module.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/css-props.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CssPropsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return CssPropsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _css_props_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-props.directive */ "../../libs/ng-utils/css-props/css-props.directive.ts");




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

/***/ "../../libs/ng-utils/css-props/css-props.service.ts":
/*!********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/css-props.service.ts ***!
  \********************************************************************************/
/*! exports provided: CssPropsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return CssPropsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-css-props */ "../../libs/ng-utils/css-props/update-css-props.ts");
/* harmony import */ var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-dynamic-style */ "../../libs/ng-utils/css-props/update-dynamic-style.ts");





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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CssPropsService);



/***/ }),

/***/ "../../libs/ng-utils/css-props/element-css.service.ts":
/*!**********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/element-css.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ElementCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return ElementCssService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-props.service */ "../../libs/ng-utils/css-props/css-props.service.ts");



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

/***/ "../../libs/ng-utils/css-props/index.ts":
/*!********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/index.ts ***!
  \********************************************************************/
/*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/css-props/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CSSPropsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CssPropsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCssProps", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateCssProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateDynamicStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleElement", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getStyleElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceCss", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["replaceCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ElementCssService"]; });




/***/ }),

/***/ "../../libs/ng-utils/css-props/public_api.ts":
/*!*************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/public_api.ts ***!
  \*************************************************************************/
/*! exports provided: CssPropsModule, CSSPropsDirective, CssPropsService, updateCssProps, updateDynamicStyle, getStyleElement, replaceCss, ElementCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_props_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-props.module */ "../../libs/ng-utils/css-props/css-props.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsModule", function() { return _css_props_module__WEBPACK_IMPORTED_MODULE_0__["CssPropsModule"]; });

/* harmony import */ var _css_props_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-props.directive */ "../../libs/ng-utils/css-props/css-props.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPropsDirective", function() { return _css_props_directive__WEBPACK_IMPORTED_MODULE_1__["CSSPropsDirective"]; });

/* harmony import */ var _css_props_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-props.service */ "../../libs/ng-utils/css-props/css-props.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CssPropsService", function() { return _css_props_service__WEBPACK_IMPORTED_MODULE_2__["CssPropsService"]; });

/* harmony import */ var _update_css_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-css-props */ "../../libs/ng-utils/css-props/update-css-props.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCssProps", function() { return _update_css_props__WEBPACK_IMPORTED_MODULE_3__["updateCssProps"]; });

/* harmony import */ var _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-dynamic-style */ "../../libs/ng-utils/css-props/update-dynamic-style.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateDynamicStyle", function() { return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["updateDynamicStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleElement", function() { return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["getStyleElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceCss", function() { return _update_dynamic_style__WEBPACK_IMPORTED_MODULE_4__["replaceCss"]; });

/* harmony import */ var _element_css_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-css.service */ "../../libs/ng-utils/css-props/element-css.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCssService", function() { return _element_css_service__WEBPACK_IMPORTED_MODULE_5__["ElementCssService"]; });









/***/ }),

/***/ "../../libs/ng-utils/css-props/update-css-props.ts":
/*!*******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/update-css-props.ts ***!
  \*******************************************************************************/
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

/***/ "../../libs/ng-utils/css-props/update-dynamic-style.ts":
/*!***********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/css-props/update-dynamic-style.ts ***!
  \***********************************************************************************/
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

/***/ "../../libs/ng-utils/dynamic-portal/dynamic-portal.module.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DynamicPortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return DynamicPortalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-portal/dynamic-portal.component */ "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts");
/* harmony import */ var _portal_source_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal-source.directive */ "../../libs/ng-utils/dynamic-portal/portal-source.directive.ts");





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

/***/ "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25nLXV0aWxzL2R5bmFtaWMtcG9ydGFsL2R5bmFtaWMtcG9ydGFsL2R5bmFtaWMtcG9ydGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DynamicPortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return DynamicPortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portal-hub.service */ "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let DynamicPortalComponent = class DynamicPortalComponent {
    constructor(hub) {
        this.hub = hub;
        this.key$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.templateToShow$ = this.key$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(key => this.hub.getTemplate$(key)));
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
    { type: _portal_hub_service__WEBPACK_IMPORTED_MODULE_3__["PortalHubService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], DynamicPortalComponent.prototype, "key", void 0);
DynamicPortalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dynamic-portal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dynamic-portal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dynamic-portal.component.scss */ "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_portal_hub_service__WEBPACK_IMPORTED_MODULE_3__["PortalHubService"]])
], DynamicPortalComponent);



/***/ }),

/***/ "../../libs/ng-utils/dynamic-portal/index.ts":
/*!*************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/index.ts ***!
  \*************************************************************************/
/*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/dynamic-portal/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalSourceAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalHubService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalSourceDirective"]; });




/***/ }),

/***/ "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts":
/*!**************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/portal-hub.service.ts ***!
  \**************************************************************************************/
/*! exports provided: PortalSourceAction, PortalHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return PortalSourceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return PortalHubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




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
PortalHubService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PortalHubService);



/***/ }),

/***/ "../../libs/ng-utils/dynamic-portal/portal-source.directive.ts":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/portal-source.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return PortalSourceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-hub.service */ "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts");



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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dynamicPortalSource'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PortalSourceDirective.prototype, "key", void 0);
PortalSourceDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[dynamicPortalSource]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]])
], PortalSourceDirective);



/***/ }),

/***/ "../../libs/ng-utils/dynamic-portal/public_api.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/public_api.ts ***!
  \******************************************************************************/
/*! exports provided: DynamicPortalModule, DynamicPortalComponent, PortalSourceAction, PortalHubService, PortalSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-portal.module */ "../../libs/ng-utils/dynamic-portal/dynamic-portal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalModule", function() { return _dynamic_portal_module__WEBPACK_IMPORTED_MODULE_0__["DynamicPortalModule"]; });

/* harmony import */ var _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-portal/dynamic-portal.component */ "../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicPortalComponent", function() { return _dynamic_portal_dynamic_portal_component__WEBPACK_IMPORTED_MODULE_1__["DynamicPortalComponent"]; });

/* harmony import */ var _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-hub.service */ "../../libs/ng-utils/dynamic-portal/portal-hub.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceAction", function() { return _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalSourceAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalHubService", function() { return _portal_hub_service__WEBPACK_IMPORTED_MODULE_2__["PortalHubService"]; });

/* harmony import */ var _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portal-source.directive */ "../../libs/ng-utils/dynamic-portal/portal-source.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalSourceDirective", function() { return _portal_source_directive__WEBPACK_IMPORTED_MODULE_3__["PortalSourceDirective"]; });







/***/ }),

/***/ "../../libs/ng-utils/morphdom/index.ts":
/*!*******************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/index.ts ***!
  \*******************************************************************/
/*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/morphdom/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MorphdomService"]; });




/***/ }),

/***/ "../../libs/ng-utils/morphdom/morphdom.directive.ts":
/*!********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/morphdom.directive.ts ***!
  \********************************************************************************/
/*! exports provided: MorphdomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return MorphdomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morphdom.service */ "../../libs/ng-utils/morphdom/morphdom.service.ts");



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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('morphDom'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], MorphdomDirective.prototype, "morphDom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MorphdomDirective.prototype, "tagName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MorphdomDirective.prototype, "options", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MorphdomDirective.prototype, "done", void 0);
MorphdomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line:directive-selector
        selector: '[morphDom]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]])
], MorphdomDirective);



/***/ }),

/***/ "../../libs/ng-utils/morphdom/morphdom.module.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/morphdom.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MorphdomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return MorphdomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _morphdom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./morphdom.directive */ "../../libs/ng-utils/morphdom/morphdom.directive.ts");




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

/***/ "../../libs/ng-utils/morphdom/morphdom.service.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/morphdom.service.ts ***!
  \******************************************************************************/
/*! exports provided: MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return MorphdomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morphdom */ "../../node_modules/morphdom/dist/morphdom-esm.js");



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

/***/ "../../libs/ng-utils/morphdom/public_api.ts":
/*!************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/morphdom/public_api.ts ***!
  \************************************************************************/
/*! exports provided: MorphdomModule, MorphdomDirective, MorphdomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _morphdom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morphdom.module */ "../../libs/ng-utils/morphdom/morphdom.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomModule", function() { return _morphdom_module__WEBPACK_IMPORTED_MODULE_0__["MorphdomModule"]; });

/* harmony import */ var _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./morphdom.directive */ "../../libs/ng-utils/morphdom/morphdom.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomDirective", function() { return _morphdom_directive__WEBPACK_IMPORTED_MODULE_1__["MorphdomDirective"]; });

/* harmony import */ var _morphdom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./morphdom.service */ "../../libs/ng-utils/morphdom/morphdom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorphdomService", function() { return _morphdom_service__WEBPACK_IMPORTED_MODULE_2__["MorphdomService"]; });






/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/index.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/index.ts ***!
  \***************************************************************************/
/*! exports provided: NgErrorComponent, NgErrorOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/ng-error-overlay/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgErrorOverlayModule"]; });




/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: NG_ERROR_CONFIG_TOKEN, ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ERROR_CONFIG_TOKEN", function() { return NG_ERROR_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ERROR_CONFIG_TOKEN)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], ErrorHandlerService);



/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  color: #e8e8e8;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n  white-space: pre-wrap;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.error {\n  color: red;\n}\n\n.stack-block {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.stack-table {\n  margin-top: 2rem;\n  width: 100%;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.row.even {\n  background: #AAAAAA40;\n}\n\n.row.odd {\n  background: #CCCCCC40;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvZXJyb3Itb3ZlcmxheS9lcnJvci1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwibGlicy9uZy11dGlscy9uZy1lcnJvci1vdmVybGF5L25nLWVycm9yL2Vycm9yLW92ZXJsYXkvZXJyb3Itb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBekJRO0VBMEJSLFdBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBRElFO0VBQVEscUJBQUE7QUNBVjs7QURDRTtFQUFPLHFCQUFBO0FDRVQiLCJmaWxlIjoibGlicy9uZy11dGlscy9uZy1lcnJvci1vdmVybGF5L25nLWVycm9yL2Vycm9yLW92ZXJsYXkvZXJyb3Itb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nOiAycmVtO1xuXG46aG9zdCB7XG4gIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdGFjay1ibG9jayB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGFjay10YWJsZSB7XG4gIG1hcmdpbi10b3A6ICRwYWRkaW5nO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yb3cge1xuICAmLmV2ZW4ge2JhY2tncm91bmQ6ICNBQUFBQUE0MH1cbiAgJi5vZGQge2JhY2tncm91bmQ6ICNDQ0NDQ0M0MH1cbn1cbiIsIjpob3N0IHtcbiAgY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdGFjay1ibG9jayB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGFjay10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93LmV2ZW4ge1xuICBiYWNrZ3JvdW5kOiAjQUFBQUFBNDA7XG59XG4ucm93Lm9kZCB7XG4gIGJhY2tncm91bmQ6ICNDQ0NDQ0M0MDtcbn0iXX0= */");

/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ErrorOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorOverlayComponent", function() { return ErrorOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! error-stack-parser */ "../../node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_2__);



let ErrorOverlayComponent = class ErrorOverlayComponent {
    constructor() { }
    ngOnInit() {
        this.errorStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_2___default.a.parse(this.error);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ErrorOverlayComponent.prototype, "error", void 0);
ErrorOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-overlay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-overlay.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-overlay.component.scss */ "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorOverlayComponent);



/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: NgErrorOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return NgErrorOverlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-error.component */ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts");
/* harmony import */ var _error_overlay_error_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-overlay/error-overlay.component */ "../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handler.service */ "../../libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts");
/* harmony import */ var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gewd/ng-utils/bootstrap-component */ "../../libs/ng-utils/bootstrap-component/index.ts");
/* harmony import */ var _gewd_ng_utils_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gewd/ng-utils/components */ "../../libs/ng-utils/components/index.ts");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "../../libs/ng-utils/dynamic-portal/index.ts");
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

/***/ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: #454545DD;\n  overflow: auto;\n  z-index: var(--overlay-zindex);\n}\n.fullscreen simple-pager {\n  height: calc(100% - 2rem);\n  padding: 1rem;\n}\n.fullscreen simple-pager ::ng-deep .navigation-row-panel.only-one {\n  opacity: 0;\n}\n.fullscreen ::ng-deep .error-name {\n  display: none;\n}\n.close-button {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n}\n.error-next-to-navigation {\n  color: red;\n  font-family: Menlo, Consolas, monospace;\n  font-size: large;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvbmctZXJyb3IuY29tcG9uZW50LnNjc3MiLCJsaWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvbmctZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDQUY7QURFRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER007RUFDRSxVQUFBO0FDRFI7QURNRTtFQUNFLGFBQUE7QUNKSjtBRFNBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNORiIsImZpbGUiOiJsaWJzL25nLXV0aWxzL25nLWVycm9yLW92ZXJsYXkvbmctZXJyb3IvbmctZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG5cbiAgYmFja2dyb3VuZDogIzQ1NDU0NUREO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogdmFyKC0tb3ZlcmxheS16aW5kZXgpO1xuXG4gIHNpbXBsZS1wYWdlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5uYXZpZ2F0aW9uLXJvdy1wYW5lbC5vbmx5LW9uZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5lcnJvci1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAycmVtO1xuICByaWdodDogMnJlbTtcbn1cblxuLmVycm9yLW5leHQtdG8tbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbiIsIi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogIzQ1NDU0NUREO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogdmFyKC0tb3ZlcmxheS16aW5kZXgpO1xufVxuLmZ1bGxzY3JlZW4gc2ltcGxlLXBhZ2VyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5mdWxsc2NyZWVuIHNpbXBsZS1wYWdlciA6Om5nLWRlZXAgLm5hdmlnYXRpb24tcm93LXBhbmVsLm9ubHktb25lIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5mdWxsc2NyZWVuIDo6bmctZGVlcCAuZXJyb3ItbmFtZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG59XG5cbi5lcnJvci1uZXh0LXRvLW5hdmlnYXRpb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59Il19 */");

/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NgErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return NgErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.service */ "../../libs/ng-utils/ng-error-overlay/ng-error/error-handler.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gewd/ng-utils/css-props */ "../../libs/ng-utils/css-props/index.ts");






let NgErrorComponent = class NgErrorComponent {
    constructor(errorService, cd, cssProps, element) {
        this.errorService = errorService;
        this.cd = cd;
        this.cssProps = cssProps;
        this.element = element;
        this.showIndex = 0;
        this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.errors$ = this.errorService.error$.pipe(
        // add all errors to an array
        // only keep the newest 10
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])((a, c) => [c, ...a].slice(0, 10), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => value.filter(v => !!v)));
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        cssProps.updateElementVars(element.nativeElement, {
            '--overlay-zindex': errorService.config.zIndex
        });
    }
    ngOnInit() {
        this.errors$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(value => {
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
    { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_5__["CssPropsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NgErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng-error',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ng-error.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ng-error.component.scss */ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _gewd_ng_utils_css_props__WEBPACK_IMPORTED_MODULE_5__["CssPropsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], NgErrorComponent);



/***/ }),

/***/ "../../libs/ng-utils/ng-error-overlay/public_api.ts":
/*!********************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/public_api.ts ***!
  \********************************************************************************/
/*! exports provided: NgErrorComponent, NgErrorOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-error/ng-error.component */ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorComponent", function() { return _ng_error_ng_error_component__WEBPACK_IMPORTED_MODULE_0__["NgErrorComponent"]; });

/* harmony import */ var _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-error/ng-error-overlay.module */ "../../libs/ng-utils/ng-error-overlay/ng-error/ng-error-overlay.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgErrorOverlayModule", function() { return _ng_error_ng_error_overlay_module__WEBPACK_IMPORTED_MODULE_1__["NgErrorOverlayModule"]; });





/***/ }),

/***/ "../../libs/ng-utils/ng-inspect/index.ts":
/*!*********************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/index.ts ***!
  \*********************************************************************/
/*! exports provided: NgInspectModule, NgInspectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../libs/ng-utils/ng-inspect/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgInspectModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgInspectComponent"]; });




/***/ }),

/***/ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.scss":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".debug-panel {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  max-height: 500px;\n  overflow: auto;\n  z-index: 10;\n  color: white;\n}\n.debug-panel .panel-background {\n  background: #4f4f4f;\n  border: 2px dashed #4f8cc9;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 10px;\n  min-width: 150px;\n  max-width: 400px;\n}\n.debug-panel h4 {\n  margin-top: 0;\n}\n.debug-panel .icon {\n  cursor: pointer;\n  height: 20px;\n  width: 20px;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.debug-panel .svg-color {\n  fill: white;\n}\n.debug-panel .mat-hint {\n  font-size: 12px;\n  color: white;\n}\n.debug-panel .center-text {\n  text-align: center;\n}\n.debug-panel .item-row {\n  display: flex;\n  align-items: flex-end;\n}\n.debug-panel .item-row .prop-value {\n  background: #595959;\n}\n.debug-panel .item-row.odd .prop-value {\n  background: #7d7d7d;\n}\n.debug-panel .prop-value {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  width: 250px;\n}\n.debug-panel ::ng-deep mat-form-field {\n  margin-bottom: -1.15em;\n  width: 100%;\n}\n.debug-panel .color-box {\n  --bg-color: grey;\n  width: 16px;\n  height: 16px;\n  background: var(--bg-color);\n  margin-right: 2px;\n  display: inline-block;\n  border: 1px solid white;\n}\n.debug-panel kbd {\n  background-color: #eee;\n  border-radius: 3px;\n  border: 1px solid #b4b4b4;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\n  color: #333;\n  display: inline-block;\n  font-size: 0.85em;\n  font-weight: 700;\n  line-height: 1;\n  padding: 2px 4px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9saWJzL25nLXV0aWxzL25nLWluc3BlY3QvbmctaW5zcGVjdC9uZy1pbnNwZWN0LmNvbXBvbmVudC5zY3NzIiwibGlicy9uZy11dGlscy9uZy1pbnNwZWN0L25nLWluc3BlY3QvbmctaW5zcGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FETUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7QURRRTtFQUNFLFdBQUE7QUNOSjtBRFNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7QUNSSjtBRFVFO0VBQ0UsYUFBQTtFQU1BLHFCQUFBO0FDYko7QURTSTtFQUNFLG1CQUFBO0FDUE47QURhTTtFQUNFLG1CQUFBO0FDWFI7QURnQkU7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNkSjtBRGlCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ2ZKO0FEa0JFO0VBQ0UsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBRUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDbEJKO0FEcUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0ZBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQkoiLCJmaWxlIjoibGlicy9uZy11dGlscy9uZy1pbnNwZWN0L25nLWluc3BlY3QvbmctaW5zcGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRlYnVnLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAucGFuZWwtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogIzRmNGY0ZjtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzRmOGNjOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cblxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG5cbiAgLmljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgfVxuXG5cbiAgLnN2Zy1jb2xvciB7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuY2VudGVyLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaXRlbS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAucHJvcC12YWx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNTk1OTU5O1xuICAgIH1cblxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICYub2RkIHtcbiAgICAgIC5wcm9wLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzdkN2Q3ZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvcC12YWx1ZSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IC0xLjE1ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29sb3ItYm94IHtcbiAgICAtLWJnLWNvbG9yOiBncmV5O1xuXG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcblxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gIGtiZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KSBpbnNldDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAuODVlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIiwiLmRlYnVnLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGVidWctcGFuZWwgLnBhbmVsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzRmOGNjOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5kZWJ1Zy1wYW5lbCBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uZGVidWctcGFuZWwgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmRlYnVnLXBhbmVsIC5zdmctY29sb3Ige1xuICBmaWxsOiB3aGl0ZTtcbn1cbi5kZWJ1Zy1wYW5lbCAubWF0LWhpbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZWJ1Zy1wYW5lbCAuY2VudGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVidWctcGFuZWwgLml0ZW0tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmRlYnVnLXBhbmVsIC5pdGVtLXJvdyAucHJvcC12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM1OTU5NTk7XG59XG4uZGVidWctcGFuZWwgLml0ZW0tcm93Lm9kZCAucHJvcC12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM3ZDdkN2Q7XG59XG4uZGVidWctcGFuZWwgLnByb3AtdmFsdWUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjUwcHg7XG59XG4uZGVidWctcGFuZWwgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMTVlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGVidWctcGFuZWwgLmNvbG9yLWJveCB7XG4gIC0tYmctY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4uZGVidWctcGFuZWwga2JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIGluc2V0O1xuICBjb2xvcjogIzMzMztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NgInspectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function() { return NgInspectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var NgInspectComponent_1;






const highlightClass = 'highlight-item';
/** @dynamic - allows Document in ngc build */
let NgInspectComponent = NgInspectComponent_1 = class NgInspectComponent {
    constructor(cd, sanitizer, document) {
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
        this.trackByEntry = (index, item) => item.key;
        if (!NgInspectComponent_1._addedStyle) {
            NgInspectComponent_1._addedStyle = true;
            const style = document.createElement('style');
            // WebKit hack :(
            style.appendChild(document.createTextNode(''));
            // Add the <style> element to the page
            document.head.appendChild(style);
            style.sheet.addRule(`.${highlightClass}`, 'border: 2px dotted lightblue !important;');
        }
        const weakMap = new WeakMap();
        const highlightItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        highlightItem$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), 
        //filter(item => !!item),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()).subscribe(([oldItem, current]) => {
            if (current) {
                current.classList.add(highlightClass);
            }
            if (oldItem) {
                oldItem.classList.remove(highlightClass);
            }
        });
        const keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e.ctrlKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
        const keyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(e => e.ctrlKey));
        const isActive$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(keyDown$, keyUp$);
        isActive$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(value => value
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.getCurrentElement()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => console.info({ x })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => !!e && !this.isChildOfIgnoredElement(e.target)))
            : rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])((x, y) => x.target === y.target)).subscribe(event => {
            const { target } = event;
            const elementWithContext = this.findNextContext(target);
            if (elementWithContext) {
                const cached = weakMap.has(elementWithContext);
                const context = cached
                    ? weakMap.get(elementWithContext)
                    : (this.getComponent(elementWithContext));
                if (!cached && context) {
                    weakMap.set(elementWithContext, context);
                }
                if (context) {
                    highlightItem$.next(elementWithContext);
                    const instance = context.instance;
                    const entries = Object.entries(instance)
                        .map(([key, value]) => ({ key, propInfo: this.getPropInfo(value) }))
                        .filter(e => !!e.propInfo);
                    const found = {
                        context,
                        keys: Object.keys(instance),
                        entries,
                        name: instance.__proto__.constructor.name
                    };
                    this.component$.next(found);
                }
                else {
                    highlightItem$.next(null);
                    this.component$.next(null);
                }
            }
            else {
                highlightItem$.next(null);
                this.component$.next(null);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onChangeGeneric(value, context, key) {
        context.instance[key] = value;
        context.cd.markForCheck();
        this.cd.markForCheck();
    }
    onPinOp(context, prop, pin) {
        let pinnedEntry = null;
        if (this.pinnedMap.has(context)) {
            pinnedEntry = this.pinnedMap.get(context);
        }
        else {
            pinnedEntry = { pinned: [] };
            this.pinnedMap.set(context, pinnedEntry);
        }
        if (pin) {
            pinnedEntry.pinned.push(prop);
            if (!this.pinnedAr.includes(context)) {
                this.pinnedAr.push(context);
            }
        }
        else {
            const indexOf = pinnedEntry.pinned.indexOf(prop);
            pinnedEntry.pinned.splice(indexOf, 1);
            if (pinnedEntry.pinned.length === 0) {
                const indexOfInstance = this.pinnedAr.indexOf(context);
                this.pinnedAr.splice(indexOfInstance, 1);
            }
        }
        this.cd.markForCheck();
        this.fillPinnedArray();
    }
    isPinned(context, prop) {
        if (this.pinnedMap.has(context)) {
            return this.pinnedMap.get(context).pinned.includes(prop);
        }
        else {
            return false;
        }
    }
    getPropInfo(value) {
        const type = typeof value;
        switch (type) {
            case 'boolean':
            case 'number':
                return {
                    canEdit: true,
                    type
                };
            case 'string':
                const str = value.toString();
                const isColor = str.includes('#') && str.length === 7;
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
    toggleEdit(item) {
        item.editMode = !item.editMode;
    }
    byPassAttr(value) {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    }
    getCurrentElement() {
        const hovering = this.document.querySelectorAll(':hover');
        if (hovering.length > 0) {
            return {
                target: hovering.item(hovering.length - 1)
            };
        }
        return null;
    }
    isChildOfIgnoredElement(element) {
        while (element) {
            const containsAttr = element.hasAttribute('ignore-inspect');
            if (containsAttr) {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    }
    getComponent(element) {
        if (this.IVY_MODE) {
            const component = this.ng.getComponent(element)
                || this.ng.getContext(element);
            return {
                instance: component,
                cd: this.cd
            };
        }
        else {
            const probe = this.ng.probe(element);
            if (probe) {
                return {
                    instance: probe.context,
                    cd: probe.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])
                };
            }
            return null;
        }
    }
    fillPinnedArray() {
        const pinnedItems = [];
        for (const context of this.pinnedAr) {
            const { instance } = context;
            pinnedItems.push({
                name: instance.__proto__.constructor.name,
                context,
                entries: this.pinnedMap.get(context).pinned.map(key => ({
                    key,
                    propInfo: this.getPropInfo(instance[key])
                }))
            });
        }
        this.pinnedItems$.next(pinnedItems);
    }
    findNextContext(element) {
        if (!this.IVY_MODE) {
            return element;
        }
        while (element && !this.getContext(element)) {
            element = element.parentElement;
        }
        return element;
    }
    getContext(element) {
        return element.__ngContext__;
    }
};
NgInspectComponent._addedStyle = false;
NgInspectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
NgInspectComponent = NgInspectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng-inspect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ng-inspect.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ng-inspect.component.scss */ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        Document])
], NgInspectComponent);



/***/ }),

/***/ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.module.ts":
/*!********************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.module.ts ***!
  \********************************************************************************************/
/*! exports provided: NgInspectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgInspectModule", function() { return NgInspectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-inspect.component */ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gewd/ng-utils/bootstrap-component */ "../../libs/ng-utils/bootstrap-component/index.ts");







let NgInspectModule = class NgInspectModule {
};
NgInspectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]],
        entryComponents: [_ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _gewd_ng_utils_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["BootstrapComponentModule"].component({
                elementName: 'ng-inspect',
                component: _ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]
            })
        ],
        exports: [
            _ng_inspect_component__WEBPACK_IMPORTED_MODULE_3__["NgInspectComponent"]
        ]
    })
], NgInspectModule);



/***/ }),

/***/ "../../libs/ng-utils/ng-inspect/public_api.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/public_api.ts ***!
  \**************************************************************************/
/*! exports provided: NgInspectModule, NgInspectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_inspect_ng_inspect_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-inspect/ng-inspect.module */ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgInspectModule", function() { return _ng_inspect_ng_inspect_module__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"]; });

/* harmony import */ var _ng_inspect_ng_inspect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-inspect/ng-inspect.component */ "../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgInspectComponent", function() { return _ng_inspect_ng_inspect_component__WEBPACK_IMPORTED_MODULE_1__["NgInspectComponent"]; });





/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/components/highlight-editor/highlight-editor.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/components/highlight-editor/highlight-editor.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor\"\n     [class.visible-highlight]=\"showHighlighedCode$ | async\"\n     [class.editor__no-debounce]=\"debounceTime === 0\">\n\n  <textarea #textarea [value]=\"value\"\n            (change)=\"onChange(textarea.value)\"\n            (keydown)=\"onKeyDown($event, textarea)\"\n            (keyup)=\"onKeyUp($event, textarea.value)\"\n            (focus)=\"focussed$.next(true)\"\n            (blur)=\"focussed$.next(false)\"\n            spellcheck=\"false\"\n  ></textarea>\n  <pre class=\"highlight-area\" #highlightArea></pre>\n</div>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/markdown/module/render-markdown/render-markdown.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/markdown/module/render-markdown/render-markdown.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"above\">\n  <ng-content select=\"[markdown__above]\"></ng-content>\n</div>\n<div [innerHTML]=\"parsedHtml$ | async\"></div>\n<div class=\"below\">\n  <ng-content select=\"[markdown__below]\"></ng-content>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/components/simple-pager/simple-pager.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/components/simple-pager/simple-pager.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navigation-row flex\">\n  <div class=\"navigation-row-left\">\n    <ng-content select=\"[simplePagerTopLeft]\"></ng-content>\n  </div>\n\n  <div class=\"navigation-row-panel flex\"\n       [class.only-one]=\"items?.length === 1\">\n    <span class=\"left-arrow\"\n          [class.disabled]=\"position === 0\"\n          (click)=\"selectPrev()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n      </svg>\n    </span>\n    <span class=\"right-arrow\"\n          [class.disabled]=\"position === items?.length - 1\"\n          (click)=\"selectNext()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </span>\n\n    <span class=\"position-label\">{{position + 1}} of {{items?.length}}</span>\n\n  </div>\n  <div class=\"navigation-row-right\">\n    <ng-content select=\"[simplePagerTopRight]\"></ng-content>\n  </div>\n</div>\n\n<div class=\"slot\">\n   <ng-template [ngTemplateOutlet]=\"templateRef\" [ngTemplateOutletContext]=\"{$implicit: items[position]}\"></ng-template>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/dynamic-portal/dynamic-portal/dynamic-portal.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateToShow$ | async as templateRef\"\n              [ngTemplateOutlet]=\"templateRef\">\n</ng-container>\n<ng-container *ngIf=\"!(templateToShow$ | async)\">\n  <ng-content></ng-content>\n</ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/error-overlay/error-overlay.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"error-info\">\n<span class=\"error error-name\">{{error.name}} <br/></span>\nError Message: <span class=\"error\">{{error.message}}</span>\n</span>\n\n\n<div class=\"stack-block\" *ngIf=\"error.stack\">\nStack:\n<table class=\"stack-table\">\n  <tr>\n    <th class=\"align-left\">Function Name</th>\n    <th class=\"align-right\">Line Number</th>\n    <th class=\"align-right\">Column Number</th>\n  </tr>\n  <ng-container *ngFor=\"let stack of errorStack; let odd = odd; let even = even;\">\n    <tr class=\"row\"\n        [class.odd]=\"odd\"\n        [class.even]=\"even\"\n    >\n      <td>{{stack.functionName}}</td>\n      <td class=\"align-right\">{{stack.lineNumber}}</td>\n      <td class=\"align-right\">{{stack.columnNumber}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"3\"\n          class=\"row\"\n          [class.odd]=\"odd\"\n          [class.even]=\"even\"\n      >\n        {{stack.fileName}}</td>\n    </tr>\n  </ng-container>\n</table>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/ng-error-overlay/ng-error/ng-error.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"errors$ | async as errors\">\n  <div class=\"fullscreen\"\n       *ngIf=\"visible$ | async\"\n  >\n    <simple-pager [items]=\"errors\">\n      <div simplePagerTopLeft>\n        <dynamic-portal [key]=\"'errorName'\"></dynamic-portal>\n      </div>\n      <ng-template let-item>\n         <ng-template [dynamicPortalSource]=\"'errorName'\">\n           <span class=\"error-next-to-navigation\">{{item.name}}</span>\n         </ng-template>\n         <error-overlay [error]=\"item\"></error-overlay>\n      </ng-template>\n      <div simplePagerTopRight>\n        <button class=\"mat-focus-indicator mat-button mat-raised-button mat-button-base\"\n            (click)=\"hide()\">\n      close\n    </button>\n      </div>\n    </simple-pager>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!/home/runner/work/gewd/gewd/libs/ng-utils/ng-inspect/ng-inspect/ng-inspect.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template  #itemEdit let-item=\"item\" let-context=\"context\">\n  <div [ngSwitch]=\"item.propInfo.type\">\n    <ng-container *ngSwitchCase=\"'boolean'\">\n      <mat-checkbox [checked]=\"context.instance[item.key]\"\n                    (change)=\"onChangeGeneric($event.checked, context, item.key)\">\n        {{ item.key }}\n      </mat-checkbox>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'number'\">\n      <mat-form-field>\n        <input type=\"number\" [value]=\"context.instance[item.key]\" #number\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(number.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'string'\">\n      <mat-form-field>\n        <input type=\"text\" [value]=\"context.instance[item.key]\" #text\n                matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'color'\">\n      <mat-form-field>\n        <input type=\"color\"\n               [value]=\"context.instance[item.key]\" #text\n               matInput [placeholder]=\"item.key\"\n               (change)=\"onChangeGeneric(text.value, context, item.key)\">\n      </mat-form-field>\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #itemsListTemplate let-items=\"items\" let-context=\"context\">\n  <div *ngFor=\"let item of items; let odd = odd; trackBy: trackByEntry\"\n       class=\"item-row\"\n       [class.odd]=\"odd\"\n  >\n    <div [ngSwitch]=\"item.propInfo.type\" style=\"flex: 1\">\n      <ng-container *ngSwitchDefault>\n        <div *ngIf=\"item.propInfo.canEdit && item.editMode; else readOnly\">\n\n          <ng-template *ngTemplateOutlet=\"itemEdit; context: {\n          item: item,\n          context: context\n        }\">\n          </ng-template>\n        </div>\n\n        <ng-template #readOnly>\n          <span class=\"mat-hint\">{{item.key}}:</span>\n          <br />\n          <span class=\"prop-value\">\n            <span *ngIf=\"item.propInfo.type === 'color'\"\n                 [style]=\"byPassAttr('--bg-color:'+context.instance[item.key])\"\n                  class=\"color-box\">\n\n            </span>\n            {{context.instance[item.key]}}</span>\n        </ng-template>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'observable'\">\n        <span class=\"mat-hint\">{{item.key}}</span>:\n        <br />\n        <span class=\"prop-value\">{{context.instance[item.key] | async | json}}</span>\n      </ng-container>\n    </div>\n    <div class=\"icon\" *ngIf=\"item.propInfo.canEdit\"\n         (click)=\"toggleEdit(item)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z\"/></svg>\n    </div>\n    <div class=\"icon\">\n      <div *ngIf=\"isPinned(context, item.key), else unpinned\"\n           (click)=\"onPinOp(context, item.key, false)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\n             enable-background=\"new 0 0 24 24\"\n             height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n          <g><path d=\"M0,0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M0,0h24v24H0V0z\" fill=\"none\"/></g>\n          <g><path  class=\"svg-color\" d=\"M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z\"/></g></svg>\n      </div>\n      <ng-template #unpinned>\n        <div (click)=\"onPinOp(context, item.key, true)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\"\n               height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path class=\"svg-color\" d=\"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z\"/></svg>\n        </div>\n      </ng-template>\n    </div>\n\n  </div>\n</ng-template>\n\n<div class=\"debug-panel\" ignore-inspect>\n  <ng-container *ngIf=\"pinnedItems$ | async as pinnedItems\">\n    <div class=\"panel-background\" *ngFor=\"let pinnedItem of pinnedItems\">\n      <h4>{{pinnedItem.name}}</h4>\n\n      <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: pinnedItem.entries,\n          context: pinnedItem.context\n        }\">\n      </ng-template>\n    </div>\n  </ng-container>\n\n  <div class=\"panel-background\" *ngIf=\"component$ | async as component; else nothing\">\n    <h4>{{component.name}}</h4>\n\n    <ng-template *ngTemplateOutlet=\"itemsListTemplate; context: {\n          items: component.entries,\n          context: component.context\n        }\">\n    </ng-template>\n  </div>\n  <ng-template #nothing>\n    <div class=\"panel-background center-text\">\n      Press/hold <kbd>ctrl</kbd> to select <br/>\n      your component to inspect\n    </div>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Open Dev-Tools to see the network calls.</h2>\n\n<gewd-example-panel packageName=\"@gewd/markdown\"\n                    packageTitle=\"Markdown\"\n                    moduleName=\"markdown-example\"\n                    componentName=\"MarkdownExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/lazy\"\n                    packageTitle=\"Lazy Components\"\n                    moduleName=\"lazyload-example\"\n                    componentName=\"LazyLoadExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n\n<gewd-example-panel packageName=\"@gewd/components\"\n                    packageTitle=\"Components\"\n                    moduleName=\"components-example\"\n                    componentName=\"ComponentsExample\">\n\n</gewd-example-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- Dynamic Portal Component\n  </mat-expansion-panel-header>\n\n  <dynamic-portal key=\"portalKey\" class=\"dynamic-portal-border\">\n    Dynamic Portal Placeholder\n  </dynamic-portal>\n\n  <br/>\n\n  <gewd-lazy-module-component\n    #lazyPortalModuleComponent\n    [componentInputs]=\"{ testProp: 'Binding value', portalKey: 'portalKey' }\"\n  >\n    <button mat-raised-button color=\"primary\"\n            (click)=\"setLazyPortalModuleComp(lazyPortalModuleComponent)\">\n      Load Lazy Module-Component: Test Module-Comp <br/> (this button as content will be replaced)\n    </button>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/ng-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/ng-utils.svg?\"\n           alt=\"Gewd NG-Utils NPM Version\">\n    </a>\n    &nbsp;- NgErrorOverlay\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"ngErrorOverlay$ | async\">\n\n  </gewd-markdown>\n\n  <button (click)=\"makeError()\">Trigger an error</button>\n</mat-expansion-panel>\n\n<br/>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/mat-utils\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/mat-utils.svg?\"\n           alt=\"Gewd Mat-Utils NPM Version\">\n    </a>\n    &nbsp;- Material Utils\n  </mat-expansion-panel-header>\n\n  <gewd-markdown [markdown]=\"matUtilsReadmeMD$ | async\">\n\n  </gewd-markdown>\n\n  <mat-icon svgIcon=\"add\"></mat-icon>\n</mat-expansion-panel>\n\n\n<br/>\n\n<mat-expansion-panel (opened)=\"openedEditorPanel()\">\n  <mat-expansion-panel-header>\n    <a href=\"https://www.npmjs.com/package/@gewd/components\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img src=\"https://img.shields.io/npm/v/@gewd/components.svg?\"\n           alt=\"Gewd Components NPM Version\">\n    </a>\n    &nbsp;- PrismEditor\n  </mat-expansion-panel-header>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Examples\" [value]=\"currentPrismExample\"\n                (valueChange)=\"updateValueChanged($event)\">\n      <mat-option value=\"empty\">Empty</mat-option>\n      <mat-option value=\"readme_md\">Markdown Readme</mat-option>\n      <mat-option value=\"ts_example\">TypeScript</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Render debounce-time\"\n           value=\"200\" type=\"number\"\n           #renderDebounce>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput placeholder=\"Editor Height (px)\"\n           value=\"100\" type=\"number\"\n           #editorHeight>\n  </mat-form-field>\n\n  <gewd-prism-editor [value]=\"editorExample$ | async\"\n                     [language]=\"editorLanguage$ | async\"\n                     [debounceTime]=\"+renderDebounce.value\"\n                     [style.--editor-min-height.px]=\"editorHeight.value\"\n                     #prismEditor>\n  </gewd-prism-editor>\n\n  <br/>\n\n  <h4>Mat-Form-Field Example</h4>\n\n  <form [formGroup]=\"aForm\">\n\n    <mat-form-field style=\"width: 100%\">\n\n      <gewd-custom-form-control placeholder=\"test\"\n                                formControlName=\"editor\"\n                                #customFormControl\n      >\n        <gewd-prism-editor [value]=\"editorExample$ | async\"\n                           [language]=\"editorLanguage$ | async\"\n                           [debounceTime]=\"+renderDebounce.value\"\n                           [style.--editor-min-height.px]=\"editorHeight.value\"\n                           (value$)=\"customFormControl.value = $event\"\n                           (focussed$)=\"customFormControl.focused = $event\" #editoe>\n        </gewd-prism-editor>\n      </gewd-custom-form-control>\n    </mat-form-field>\n  </form>\n\n\n  Form Field Data:\n  <hr>\n  {{ aForm.value | json }}\n</mat-expansion-panel>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-expansion-panel (opened)=\"applyLazyModuleInputs(lazyModuleComponent)\">\n  <mat-expansion-panel-header>\n    <a [href]=\"'https://www.npmjs.com/package/' + packageName\" rel=\"nofollow\"\n       class=\"npm-link\">\n      <img [src]=\"'https://img.shields.io/npm/v/' + packageName + '.svg?'\"\n           [alt]=\"packageName + ' NPM Version'\">\n    </a>\n    &nbsp;- {{ packageTitle }}\n  </mat-expansion-panel-header>\n\n  <gewd-lazy-module-component\n    #lazyModuleComponent>\n    <mat-progress-bar isLoading mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n  </gewd-lazy-module-component>\n</mat-expansion-panel>\n");

/***/ }),

/***/ "../../node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/gewd/gewd/node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0-es2015.worker.js"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Remove template code below\n */\n:host {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.dynamic-portal-border {\n  background: darkgreen;\n  padding: 5px;\n  margin: 15px 0;\n  border: 2px dashed green;\n  display: block;\n}\n.npm-link {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2dld2QvZ2V3ZC9hcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJhcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZHluYW1pYy1wb3J0YWwtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnBtLWxpbmsge1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iLCIvKlxuICogUmVtb3ZlIHRlbXBsYXRlIGNvZGUgYmVsb3dcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZHluYW1pYy1wb3J0YWwtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogZGFya2dyZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JlZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnBtLWxpbmsge1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






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
        this.editorLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.editorExample$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.aForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]().group({ 'editor': '' });
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
                this.markDownReadmeMD$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(value => {
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-utils-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gewd_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown */ "../../libs/markdown/module/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _gewd_markdown_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @gewd/markdown/contracts */ "../../libs/markdown/contracts/index.ts");
/* harmony import */ var _gewd_lazy_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gewd/lazy/loader */ "../../libs/lazy/loader/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _gewd_ng_utils_dynamic_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @gewd/ng-utils/dynamic-portal */ "../../libs/ng-utils/dynamic-portal/index.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gewd/markdown/service */ "../../libs/markdown/service/index.ts");
/* harmony import */ var _md_cache_example_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./md-cache-example.service */ "./src/app/md-cache-example.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./markdown-toolbar.component */ "./src/app/markdown-toolbar.component.ts");
/* harmony import */ var _gewd_ng_utils_ng_error_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @gewd/ng-utils/ng-error-overlay */ "../../libs/ng-utils/ng-error-overlay/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _gewd_components_highlight_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @gewd/components/highlight-editor */ "../../libs/components/highlight-editor/index.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _libs_mat_utils_material_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../libs/mat-utils/material-icons */ "../../libs/mat-utils/material-icons/index.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./example-panel/example-panel.component */ "./src/app/example-panel/example-panel.component.ts");
/* harmony import */ var _gewd_mat_utils_custom_form_control__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @gewd/mat-utils/custom-form-control */ "../../libs/mat-utils/custom-form-control/index.ts");
/* harmony import */ var _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @gewd/lazy/utils */ "../../libs/lazy/utils/index.ts");





























const marked = () => new Worker(__webpack__worker__0, undefined);
const markdownExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | markdown-example-module */ "markdown-example-module").then(__webpack_require__.bind(null, /*! ./examples/markdown-example/markdown-example.module */ "./src/app/examples/markdown-example/markdown-example.module.ts"))
    .then(({ MarkdownExampleModule }) => MarkdownExampleModule));
const lazyLoadExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | lazyload-example-module */ "lazyload-example-module").then(__webpack_require__.bind(null, /*! ./examples/lazyload-example/lazyload-example.module */ "./src/app/examples/lazyload-example/lazyload-example.module.ts"))
    .then(({ LazyloadExampleModule }) => LazyloadExampleModule));
const componentsExampleLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | components-example-module */ "components-example-module").then(__webpack_require__.bind(null, /*! ./examples/components-example/components-example.module */ "./src/app/examples/components-example/components-example.module.ts"))
    .then(({ ComponentsExampleModule }) => ComponentsExampleModule));
const portalLazy = new _gewd_lazy_utils__WEBPACK_IMPORTED_MODULE_28__["Lazy"](() => __webpack_require__.e(/*! import() | lazy-portal-module */ "lazy-portal-module").then(__webpack_require__.bind(null, /*! ./examples/lazyload-example/lazy-wrapper/lazy-portal-source */ "./src/app/examples/lazyload-example/lazy-wrapper/lazy-portal-source.ts"))
    .then(({ PortalModule }) => PortalModule));
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _markdown_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["MarkdownToolbarComponent"], _example_panel_example_panel_component__WEBPACK_IMPORTED_MODULE_26__["ExamplePanelComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([]),
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! /home/runner/work/gewd/gewd/node_modules/worker-plugin/dist/loader.js?name=0!./markdown.worker.ts */ "../../node_modules/worker-plugin/dist/loader.js?name=0!./src/app/markdown.worker.ts")))

/***/ }),

/***/ "./src/app/example-panel/example-panel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/example-panel/example-panel.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9leGFtcGxlLXBhbmVsL2V4YW1wbGUtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/example-panel/example-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/example-panel/example-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: ExamplePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePanelComponent", function() { return ExamplePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "packageName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "packageTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "moduleName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ExamplePanelComponent.prototype, "componentName", void 0);
ExamplePanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gewd-example-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./example-panel.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/example-panel/example-panel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./example-panel.component.css */ "./src/app/example-panel/example-panel.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExamplePanelComponent);



/***/ }),

/***/ "./src/app/markdown-toolbar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/markdown-toolbar.component.ts ***!
  \***********************************************/
/*! exports provided: MarkdownToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownToolbarComponent", function() { return MarkdownToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gewd_markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/markdown/module */ "../../libs/markdown/module/index.ts");



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

/***/ "./src/app/md-cache-example.service.ts":
/*!*********************************************!*\
  !*** ./src/app/md-cache-example.service.ts ***!
  \*********************************************/
/*! exports provided: MdCacheExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdCacheExampleService", function() { return MdCacheExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gewd_markdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gewd/markdown/service */ "../../libs/markdown/service/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! localforage */ "../../node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gewd_markdown_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/markdown/utils */ "../../libs/markdown/utils/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MdCacheExampleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gewd/ng-utils/ng-inspect */ "../../libs/ng-utils/ng-inspect/index.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    modules: [
        _gewd_ng_utils_ng_inspect__WEBPACK_IMPORTED_MODULE_0__["NgInspectModule"]
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/gewd/gewd/apps/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map