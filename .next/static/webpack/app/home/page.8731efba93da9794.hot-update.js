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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CookiePopup() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    // Check if the cookie is already set, then update the expiration\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\") !== null) {\n        const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", cookieValue, {\n            expires: 7\n        });\n    }\n    // Handle form submission\n    function handleSubmit(selectedValue) {\n        e.preventDefault() // Prevent form submission default behavior\n        ;\n        if (selectedValue !== \"null\") {\n            setCookie(value) // Update the context with the selected value\n            ;\n            js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", value, {\n                expires: 7\n            }) // Set the actual cookie\n            ;\n            console.log(\"cookie button push: \" + value);\n            console.log(\"get cookie after update: \" + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\"));\n        } else {\n            console.log(\"No option selected\");\n        }\n    }\n    // Handle the change event for the select input\n    function handleChange(event) {\n        const selectedValue = e.target.value;\n        setValue(event.target.value);\n        console.log(\"event target value: \" + event.target.value);\n        handleSubmit(selectedValue);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleChange,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing-related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: value,\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"null\",\n                            children: \"Select an option\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"yes\",\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"no\",\n                            children: \"No\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"mW13vABwMFlXZMF06PMG2v31f4E=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1k7QUFDekI7QUFHaEIsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0UsaUVBQWFBO0lBRTlDLGlFQUFpRTtJQUNqRSxJQUFJQyxpREFBT0EsQ0FBQ0ssR0FBRyxDQUFDLGtCQUFrQixNQUFNO1FBQ3BDLE1BQU1DLGNBQWNOLGlEQUFPQSxDQUFDSyxHQUFHLENBQUM7UUFDaENMLGlEQUFPQSxDQUFDTyxHQUFHLENBQUMsY0FBY0QsYUFBYTtZQUFFRSxTQUFTO1FBQUU7SUFDeEQ7SUFDQSx5QkFBeUI7SUFDekIsU0FBU0MsYUFBYUMsYUFBYTtRQUMvQkMsRUFBRUMsY0FBYyxHQUFHLDJDQUEyQzs7UUFFOUQsSUFBSUYsa0JBQWtCLFFBQVE7WUFDMUJOLFVBQVVGLE9BQU8sNkNBQTZDOztZQUM5REYsaURBQU9BLENBQUNPLEdBQUcsQ0FBQyxjQUFjTCxPQUFPO2dCQUFFTSxTQUFTO1lBQUUsR0FBRyx3QkFBd0I7O1lBQ3pFSyxRQUFRQyxHQUFHLENBQUMseUJBQXlCWjtZQUNyQ1csUUFBUUMsR0FBRyxDQUFDLDhCQUE4QmQsaURBQU9BLENBQUNLLEdBQUcsQ0FBQztRQUMxRCxPQUFPO1lBQ0hRLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRUEsK0NBQStDO0lBQy9DLFNBQVNDLGFBQWFDLEtBQUs7UUFDdkIsTUFBTU4sZ0JBQWdCQyxFQUFFTSxNQUFNLENBQUNmLEtBQUs7UUFDcENDLFNBQVNhLE1BQU1DLE1BQU0sQ0FBQ2YsS0FBSztRQUMzQlcsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkUsTUFBTUMsTUFBTSxDQUFDZixLQUFLO1FBRXZETyxhQUFhQztJQUNqQjtJQUdBLHFCQUNJO2tCQUNJLDRFQUFDUTtZQUFLQyxVQUFVSjs7OEJBQ1osOERBQUNLOzhCQUFNOzs7Ozs7OEJBR1AsOERBQUNDO29CQUFPbkIsT0FBT0E7b0JBQU9vQixVQUFVUDs7c0NBQzVCLDhEQUFDUTs0QkFBT3JCLE9BQU07c0NBQU87Ozs7OztzQ0FDckIsOERBQUNxQjs0QkFBT3JCLE9BQU07c0NBQU07Ozs7OztzQ0FDcEIsOERBQUNxQjs0QkFBT3JCLE9BQU07c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7R0FoRHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nvb2tpZVBvcHVwLmpzeD9jYWMzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDb29raWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29va2llQ29udGV4dFwiXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29va2llUG9wdXAoKSB7XG5cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgeyBzZXRDb29raWUgfSA9IHVzZUNvbnRleHQoQ29va2llQ29udGV4dClcblxuICAgIC8vIENoZWNrIGlmIHRoZSBjb29raWUgaXMgYWxyZWFkeSBzZXQsIHRoZW4gdXBkYXRlIHRoZSBleHBpcmF0aW9uXG4gICAgaWYgKENvb2tpZXMuZ2V0KCdDb29raWUgYWNrJykgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBDb29raWVzLmdldCgnQ29va2llIGFjaycpXG4gICAgICAgIENvb2tpZXMuc2V0KCdDb29raWUgYWNrJywgY29va2llVmFsdWUsIHsgZXhwaXJlczogNyB9KVxuICAgIH1cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uIGRlZmF1bHQgYmVoYXZpb3JcblxuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gJ251bGwnKSB7XG4gICAgICAgICAgICBzZXRDb29raWUodmFsdWUpIC8vIFVwZGF0ZSB0aGUgY29udGV4dCB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZVxuICAgICAgICAgICAgQ29va2llcy5zZXQoJ0Nvb2tpZSBhY2snLCB2YWx1ZSwgeyBleHBpcmVzOiA3IH0pIC8vIFNldCB0aGUgYWN0dWFsIGNvb2tpZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvb2tpZSBidXR0b24gcHVzaDogJyArIHZhbHVlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb29raWUgYWZ0ZXIgdXBkYXRlOiAnICsgQ29va2llcy5nZXQoJ0Nvb2tpZSBhY2snKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBvcHRpb24gc2VsZWN0ZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSBzZWxlY3QgaW5wdXRcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50IHRhcmdldCB2YWx1ZTogJyArIGV2ZW50LnRhcmdldC52YWx1ZSlcblxuICAgICAgICBoYW5kbGVTdWJtaXQoc2VsZWN0ZWRWYWx1ZSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEFsbG93IHRoaXMgc2l0ZSB0byBzdG9yZSBjb29raWVzIGFuZCBvdGhlciBicm93c2luZy1yZWxhdGVkIGRhdGE/XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudWxsXCI+U2VsZWN0IGFuIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVzXCI+WWVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub1wiPk5vPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDb29raWVDb250ZXh0IiwiQ29va2llcyIsIkNvb2tpZVBvcHVwIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldENvb2tpZSIsImdldCIsImNvb2tpZVZhbHVlIiwic2V0IiwiZXhwaXJlcyIsImhhbmRsZVN1Ym1pdCIsInNlbGVjdGVkVmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});