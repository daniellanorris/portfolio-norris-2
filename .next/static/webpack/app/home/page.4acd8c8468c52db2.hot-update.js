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

/***/ "(app-pages-browser)/./cookie-svgrepo-com.svg":
/*!********************************!*\
  !*** ./cookie-svgrepo-com.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/cookie-svgrepo-com.ab0c3fbe.svg\",\"height\":800,\"width\":800,\"blurWidth\":0,\"blurHeight\":0});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2Nvb2tpZS1zdmdyZXBvLWNvbS5zdmciLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsa0hBQWtIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Nvb2tpZS1zdmdyZXBvLWNvbS5zdmc/N2FmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvY29va2llLXN2Z3JlcG8tY29tLmFiMGMzZmJlLnN2Z1wiLFwiaGVpZ2h0XCI6ODAwLFwid2lkdGhcIjo4MDAsXCJibHVyV2lkdGhcIjowLFwiYmx1ckhlaWdodFwiOjB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./cookie-svgrepo-com.svg\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/cookiePopup.jsx":
/*!************************************!*\
  !*** ./components/cookiePopup.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _cookie_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cookie-svgrepo-com.svg */ \"(app-pages-browser)/./cookie-svgrepo-com.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction CookiePopup() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\") // Initialize with an empty string\n    ;\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    // Handle form submission\n    function handleSubmit(selectedValue) {\n        if (selectedValue) {\n            setCookie(selectedValue) // Update the context with the selected value\n            ;\n            js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", selectedValue, {\n                expires: 7\n            }) // Set the actual cookie\n            ;\n            console.log(\"Cookie selected: \" + selectedValue);\n            console.log(\"Cookie stored: \" + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\"));\n        } else {\n            console.log(\"No option selected\");\n        }\n    }\n    // Handle the change event for the radio input\n    function handleChange(e) {\n        const selectedValue = e.target.value;\n        setValue(selectedValue) // Update local state\n        ;\n        handleSubmit(selectedValue) // Submit the form when an option is selected\n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"cookie-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing-related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"cookieConsent\",\n                                value: \"yes\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this),\n                            \" Yes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"cookieConsent\",\n                                value: \"no\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this),\n                            \" No\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cookie_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__.ReactComponent, {}, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"r/0iBGtmJtJKVwuKMUJ/0mQiXbg=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNZO0FBQ3pCO0FBQ3lDO0FBR3pELFNBQVNNOztJQUVwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsSUFBSSxrQ0FBa0M7O0lBQ3pFLE1BQU0sRUFBRVEsU0FBUyxFQUFFLEdBQUdULGlEQUFVQSxDQUFDRSxpRUFBYUE7SUFFOUMseUJBQXlCO0lBQ3pCLFNBQVNRLGFBQWFDLGFBQWE7UUFDL0IsSUFBSUEsZUFBZTtZQUNmRixVQUFVRSxlQUFlLDZDQUE2Qzs7WUFDdEVSLGlEQUFPQSxDQUFDUyxHQUFHLENBQUMsY0FBY0QsZUFBZTtnQkFBRUUsU0FBUztZQUFFLEdBQUcsd0JBQXdCOztZQUNqRkMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQko7WUFDbENHLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JaLGlEQUFPQSxDQUFDYSxHQUFHLENBQUM7UUFDaEQsT0FBTztZQUNIRixRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUVBLDhDQUE4QztJQUM5QyxTQUFTRSxhQUFhQyxDQUFDO1FBQ25CLE1BQU1QLGdCQUFnQk8sRUFBRUMsTUFBTSxDQUFDWixLQUFLO1FBQ3BDQyxTQUFTRyxlQUFlLHFCQUFxQjs7UUFDN0NELGFBQWFDLGVBQWUsNkNBQTZDOztJQUM3RTtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDUztZQUFLQyxXQUFXOzs4QkFDYiw4REFBQ0M7OEJBQU07Ozs7Ozs4QkFHUCw4REFBQ0M7OEJBQ0csNEVBQUNEOzswQ0FDRyw4REFBQ0U7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xuQixPQUFNO2dDQUNOb0IsVUFBVVY7Ozs7Ozs0QkFDWjs7Ozs7Ozs7Ozs7OzhCQUdWLDhEQUFDTTs4QkFDRyw0RUFBQ0Q7OzBDQUNHLDhEQUFDRTtnQ0FDR0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTG5CLE9BQU07Z0NBQ05vQixVQUFVVjs7Ozs7OzRCQUNaOzs7Ozs7Ozs7Ozs7OEJBR1YsOERBQUNaLG1FQUFTQTs7Ozs7Ozs7Ozs7O0FBSTFCO0dBdER3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb29raWVQb3B1cC5qc3g/Y2FjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29va2llQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2Nvb2tpZUNvbnRleHRcIlxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgQ29va2llU1ZHIH0gZnJvbSAnLi4vY29va2llLXN2Z3JlcG8tY29tLnN2Zyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29va2llUG9wdXAoKSB7XG5cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKSAvLyBJbml0aWFsaXplIHdpdGggYW4gZW1wdHkgc3RyaW5nXG4gICAgY29uc3QgeyBzZXRDb29raWUgfSA9IHVzZUNvbnRleHQoQ29va2llQ29udGV4dClcblxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgc2V0Q29va2llKHNlbGVjdGVkVmFsdWUpIC8vIFVwZGF0ZSB0aGUgY29udGV4dCB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZVxuICAgICAgICAgICAgQ29va2llcy5zZXQoJ0Nvb2tpZSBhY2snLCBzZWxlY3RlZFZhbHVlLCB7IGV4cGlyZXM6IDcgfSkgLy8gU2V0IHRoZSBhY3R1YWwgY29va2llXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29va2llIHNlbGVjdGVkOiAnICsgc2VsZWN0ZWRWYWx1ZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29raWUgc3RvcmVkOiAnICsgQ29va2llcy5nZXQoJ0Nvb2tpZSBhY2snKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBvcHRpb24gc2VsZWN0ZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSByYWRpbyBpbnB1dFxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRWYWx1ZShzZWxlY3RlZFZhbHVlKSAvLyBVcGRhdGUgbG9jYWwgc3RhdGVcbiAgICAgICAgaGFuZGxlU3VibWl0KHNlbGVjdGVkVmFsdWUpIC8vIFN1Ym1pdCB0aGUgZm9ybSB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9eydjb29raWUtZm9ybSd9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgQWxsb3cgdGhpcyBzaXRlIHRvIHN0b3JlIGNvb2tpZXMgYW5kIG90aGVyIGJyb3dzaW5nLXJlbGF0ZWQgZGF0YT9cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvb2tpZUNvbnNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwieWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gWWVzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29va2llQ29uc2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJub1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IE5vXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvb2tpZVNWRy8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDb29raWVDb250ZXh0IiwiQ29va2llcyIsIlJlYWN0Q29tcG9uZW50IiwiQ29va2llU1ZHIiwiQ29va2llUG9wdXAiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0Q29va2llIiwiaGFuZGxlU3VibWl0Iiwic2VsZWN0ZWRWYWx1ZSIsInNldCIsImV4cGlyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZvcm0iLCJjbGFzc05hbWUiLCJsYWJlbCIsImRpdiIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});