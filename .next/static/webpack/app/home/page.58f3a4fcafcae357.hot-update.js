"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./app/home/page.jsx":
/*!***************************!*\
  !*** ./app/home/page.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_cookiePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cookiePopup */ \"(app-pages-browser)/./components/cookiePopup.jsx\");\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [cookie, setCookie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_4__.CookieContext) // State to store the cookie value\n    ;\n    // Fetch cookie value when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"Cookie ack\");\n        console.log(\"cookieValue:\", cookie);\n        setCookieValue(cookie);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cookieValue == null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cookiePopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/app/home/page.jsx\",\n            lineNumber: 21,\n            columnNumber: 30\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-body\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \" Welcome to home \"\n            }, void 0, false, {\n                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/app/home/page.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/app/home/page.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"uknFGePJ9iBjKaKR4oihT6BtoKQ=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUyQztBQUNaO0FBQ3dCO0FBQ0s7QUFFN0MsU0FBU0s7O0lBRXRCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQ0csaUVBQWFBLEVBQUUsa0NBQWtDOztJQUV0RiwrQ0FBK0M7SUFDL0NKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sU0FBU0osaURBQU9BLENBQUNNLEdBQUcsQ0FBQztRQUMzQkMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQko7UUFDNUJLLGVBQWVMO0lBQ2pCLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHTSxlQUFlLHFCQUFPLDhEQUFDVCwrREFBV0E7Ozs7aUNBQ25DLDhEQUFDVTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDswQkFBSTs7Ozs7Ozs7Ozs7O0FBS2I7R0FwQndCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaG9tZS9wYWdlLmpzeD9hNTliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgQ29va2llUG9wdXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb29raWVQb3B1cCc7XG5pbXBvcnQgeyBDb29raWVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb29raWVDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuICBjb25zdCBbY29va2llLCBzZXRDb29raWVdID0gdXNlU3RhdGUoQ29va2llQ29udGV4dCkgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIGNvb2tpZSB2YWx1ZVxuXG4gIC8vIEZldGNoIGNvb2tpZSB2YWx1ZSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29va2llID0gQ29va2llcy5nZXQoJ0Nvb2tpZSBhY2snKVxuICAgIGNvbnNvbGUubG9nKCdjb29raWVWYWx1ZTonLCBjb29raWUpXG4gICAgc2V0Q29va2llVmFsdWUoY29va2llKSBcbiAgfSwgW10pIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb29raWVWYWx1ZSA9PSBudWxsID8gPENvb2tpZVBvcHVwIC8+IDogXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1ib2R5XCI+XG4gICAgICAgIDxkaXY+IFdlbGNvbWUgdG8gaG9tZSA8L2Rpdj5cbiAgICAgIDwvZGl2PlxufVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsIkNvb2tpZVBvcHVwIiwiQ29va2llQ29udGV4dCIsIlBhZ2UiLCJjb29raWUiLCJzZXRDb29raWUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0Q29va2llVmFsdWUiLCJjb29raWVWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/page.jsx\n"));

/***/ })

});