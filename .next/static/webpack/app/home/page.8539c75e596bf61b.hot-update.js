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

/***/ "(app-pages-browser)/./components/cookiePopup.jsx":
/*!************************************!*\
  !*** ./components/cookiePopup.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst { value, setValue } = useState(null);\nfunction CookiePopup() {\n    _s();\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\") !== null) {\n        return value, setValue;\n    }\n    function handleChange(event) {\n        setValue(event.target.value);\n    }\n    function handleSubmit(e, value) {\n        e.preventDefault();\n        const cookie = setCookie(value);\n        console.log(\"cookie button push\" + cookie);\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", value, {\n            expires: 7\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            value: value,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"null\",\n                            type: \"default\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"yes\",\n                            type: \"submit\",\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"no\",\n                            type: \"submit\",\n                            children: \"No\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"a5ZoYNDLaoT1Uy0iY8bIxkXTa50=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWtDO0FBQ29CO0FBQ3ZCO0FBRS9CLE1BQU0sRUFBQ0csS0FBSyxFQUFFQyxRQUFRLEVBQUMsR0FBR0MsU0FBUztBQUVwQixTQUFTQzs7SUFFcEIsTUFBTSxFQUFDQyxTQUFTLEVBQUMsR0FBRVAsaURBQVVBLENBQUNDLGlFQUFhQTtJQUUzQyxJQUFHQyxpREFBT0EsQ0FBQ00sR0FBRyxDQUFDLGtCQUFrQixNQUFNO1FBRXZDLE9BQU9MLE9BQU9DO0lBQ2Q7SUFFQSxTQUFTSyxhQUFhQyxLQUFLO1FBQ3ZCTixTQUFTTSxNQUFNQyxNQUFNLENBQUNSLEtBQUs7SUFFL0I7SUFFQSxTQUFTUyxhQUFhQyxDQUFDLEVBQUVWLEtBQUs7UUFDMUJVLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsU0FBU1IsVUFBVUo7UUFDekJhLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJGO1FBQ25DYixpREFBT0EsQ0FBQ2dCLEdBQUcsQ0FBQyxjQUFjZixPQUFPO1lBQUVnQixTQUFTO1FBQUU7SUFFaEQ7SUFFRixxQkFFSTtrQkFDQSw0RUFBQ0M7WUFBS2pCLE9BQU9BO1lBQU9rQixVQUFVVDs7OEJBQzFCLDhEQUFDVTs4QkFBTTs7Ozs7OzhCQUdQLDhEQUFDQztvQkFBT0MsVUFBVWY7O3NDQUNkLDhEQUFDZ0I7NEJBQU90QixPQUFNOzRCQUFPdUIsTUFBSzs7Ozs7O3NDQUUxQiw4REFBQ0Q7NEJBQU90QixPQUFNOzRCQUFNdUIsTUFBSztzQ0FBUzs7Ozs7O3NDQUdsQyw4REFBQ0Q7NEJBQU90QixPQUFNOzRCQUFLdUIsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRDtHQTdDd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nvb2tpZVBvcHVwLmpzeD9jYWMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7Q29va2llQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvY29va2llQ29udGV4dFwiXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IHt2YWx1ZSwgc2V0VmFsdWV9ID0gdXNlU3RhdGUobnVsbClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29va2llUG9wdXAoKSB7XG5cbiAgICBjb25zdCB7c2V0Q29va2llfT0gdXNlQ29udGV4dChDb29raWVDb250ZXh0KVxuICAgIFxuICAgIGlmKENvb2tpZXMuZ2V0KCdDb29raWUgYWNrJykgIT09IG51bGwpIHtcbiAgICBcbiAgICByZXR1cm4gdmFsdWUsIHNldFZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlLCB2YWx1ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgY29va2llID0gc2V0Q29va2llKHZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZygnY29va2llIGJ1dHRvbiBwdXNoJyArIGNvb2tpZSlcbiAgICAgICAgQ29va2llcy5zZXQoJ0Nvb2tpZSBhY2snLCB2YWx1ZSwgeyBleHBpcmVzOiA3IH0pXG5cbiAgICAgIH1cblxuICAgIHJldHVybihcblxuICAgICAgICA8PlxuICAgICAgICA8Zm9ybSB2YWx1ZT17dmFsdWV9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQWxsb3cgdGhpcyBzaXRlIHRvIHN0b3JlIGNvb2tpZXMgYW5kIG90aGVyIGJyb3dzaW5nIHJlbGF0ZWQgZGF0YT9cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudWxsXCIgdHlwZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVzXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkNvb2tpZUNvbnRleHQiLCJDb29raWVzIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiQ29va2llUG9wdXAiLCJzZXRDb29raWUiLCJnZXQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvb2tpZSIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJleHBpcmVzIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});