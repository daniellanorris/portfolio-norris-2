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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CookiePopup() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\") // Initialize with an empty string\n    ;\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    // Handle form submission\n    function handleSubmit(selectedValue) {\n        if (selectedValue) {\n            setCookie(selectedValue) // Update the context with the selected value\n            ;\n            js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", selectedValue, {\n                expires: 7\n            }) // Set the actual cookie\n            ;\n            console.log(\"Cookie selected: \" + selectedValue);\n            console.log(\"Cookie stored: \" + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\"));\n        } else {\n            console.log(\"No option selected\");\n        }\n    }\n    // Handle the change event for the radio input\n    function handleChange(e) {\n        const selectedValue = e.target.value;\n        setValue(selectedValue) // Update local state\n        ;\n        handleSubmit(selectedValue) // Submit the form when an option is selected\n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing-related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"cookieConsent\",\n                                value: \"yes\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this),\n                            \" Yes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"cookieConsent\",\n                                value: \"no\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this),\n                            \" No\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"r/0iBGtmJtJKVwuKMUJ/0mQiXbg=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1k7QUFDekI7QUFHaEIsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJLGtDQUFrQzs7SUFDekUsTUFBTSxFQUFFTSxTQUFTLEVBQUUsR0FBR1AsaURBQVVBLENBQUNFLGlFQUFhQTtJQUU5Qyx5QkFBeUI7SUFDekIsU0FBU00sYUFBYUMsYUFBYTtRQUMvQixJQUFJQSxlQUFlO1lBQ2ZGLFVBQVVFLGVBQWUsNkNBQTZDOztZQUN0RU4saURBQU9BLENBQUNPLEdBQUcsQ0FBQyxjQUFjRCxlQUFlO2dCQUFFRSxTQUFTO1lBQUUsR0FBRyx3QkFBd0I7O1lBQ2pGQyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCSjtZQUNsQ0csUUFBUUMsR0FBRyxDQUFDLG9CQUFvQlYsaURBQU9BLENBQUNXLEdBQUcsQ0FBQztRQUNoRCxPQUFPO1lBQ0hGLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRUEsOENBQThDO0lBQzlDLFNBQVNFLGFBQWFDLENBQUM7UUFDbkIsTUFBTVAsZ0JBQWdCTyxFQUFFQyxNQUFNLENBQUNaLEtBQUs7UUFDcENDLFNBQVNHLGVBQWUscUJBQXFCOztRQUM3Q0QsYUFBYUMsZUFBZSw2Q0FBNkM7O0lBQzdFO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNTOzs4QkFDRyw4REFBQ0M7OEJBQU07Ozs7Ozs4QkFHUCw4REFBQ0M7OEJBQ0csNEVBQUNEOzswQ0FDRyw4REFBQ0U7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xsQixPQUFNO2dDQUNObUIsVUFBVVQ7Ozs7Ozs0QkFDWjs7Ozs7Ozs7Ozs7OzhCQUdWLDhEQUFDSzs4QkFDRyw0RUFBQ0Q7OzBDQUNHLDhEQUFDRTtnQ0FDR0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTGxCLE9BQU07Z0NBQ05tQixVQUFVVDs7Ozs7OzRCQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0dBckR3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb29raWVQb3B1cC5qc3g/Y2FjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29va2llQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2Nvb2tpZUNvbnRleHRcIlxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvb2tpZVBvcHVwKCkge1xuXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJykgLy8gSW5pdGlhbGl6ZSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuICAgIGNvbnN0IHsgc2V0Q29va2llIH0gPSB1c2VDb250ZXh0KENvb2tpZUNvbnRleHQpXG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIHNldENvb2tpZShzZWxlY3RlZFZhbHVlKSAvLyBVcGRhdGUgdGhlIGNvbnRleHQgd2l0aCB0aGUgc2VsZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCdDb29raWUgYWNrJywgc2VsZWN0ZWRWYWx1ZSwgeyBleHBpcmVzOiA3IH0pIC8vIFNldCB0aGUgYWN0dWFsIGNvb2tpZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb2tpZSBzZWxlY3RlZDogJyArIHNlbGVjdGVkVmFsdWUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29va2llIHN0b3JlZDogJyArIENvb2tpZXMuZ2V0KCdDb29raWUgYWNrJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gb3B0aW9uIHNlbGVjdGVkJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSB0aGUgY2hhbmdlIGV2ZW50IGZvciB0aGUgcmFkaW8gaW5wdXRcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRWYWx1ZSkgLy8gVXBkYXRlIGxvY2FsIHN0YXRlXG4gICAgICAgIGhhbmRsZVN1Ym1pdChzZWxlY3RlZFZhbHVlKSAvLyBTdWJtaXQgdGhlIGZvcm0gd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0gPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgQWxsb3cgdGhpcyBzaXRlIHRvIHN0b3JlIGNvb2tpZXMgYW5kIG90aGVyIGJyb3dzaW5nLXJlbGF0ZWQgZGF0YT9cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvb2tpZUNvbnNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwieWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gWWVzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29va2llQ29uc2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJub1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IE5vXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDb29raWVDb250ZXh0IiwiQ29va2llcyIsIkNvb2tpZVBvcHVwIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldENvb2tpZSIsImhhbmRsZVN1Ym1pdCIsInNlbGVjdGVkVmFsdWUiLCJzZXQiLCJleHBpcmVzIiwiY29uc29sZSIsImxvZyIsImdldCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmb3JtIiwibGFiZWwiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});