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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CookiePopup() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\") !== null) {\n        const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", cookieValue, {\n            expires: 7\n        });\n    }\n    function handleChange(event) {\n        setValue(event.target.value);\n        console.log(event.target.value);\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        const cookie = setCookie(value);\n        console.log(\"cookie button push\" + cookie);\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", cookie, {\n            expires: 7\n        });\n        console.log(\"get cookie after update\" + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            value: value,\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleChange,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"null\",\n                            type: \"default\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"yes\",\n                            type: \"submit\",\n                            children: \"Yes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"no\",\n                            type: \"submit\",\n                            children: \"No\"\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"ZFiGRytehVr48pQkxKL8CvgpBSI=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTJDO0FBQ1c7QUFDdkI7QUFHaEIsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUNNLFNBQVMsRUFBQyxHQUFFUCxpREFBVUEsQ0FBQ0UsaUVBQWFBO0lBRTNDLElBQUdDLGlEQUFPQSxDQUFDSyxHQUFHLENBQUMsa0JBQWtCLE1BQU07UUFDbkMsTUFBTUMsY0FBY04saURBQU9BLENBQUNLLEdBQUcsQ0FBQztRQUVoQ0wsaURBQU9BLENBQUNPLEdBQUcsQ0FBQyxjQUFjRCxhQUFhO1lBQUNFLFNBQVM7UUFBQztJQUN0RDtJQUVBLFNBQVNDLGFBQWFDLEtBQUs7UUFDdkJQLFNBQVNPLE1BQU1DLE1BQU0sQ0FBQ1QsS0FBSztRQUMzQlUsUUFBUUMsR0FBRyxDQUFDSCxNQUFNQyxNQUFNLENBQUNULEtBQUs7SUFFbEM7SUFFQSxTQUFTWSxhQUFhQyxDQUFDO1FBQ25CQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFNBQVNiLFVBQVVGO1FBQ3pCVSxRQUFRQyxHQUFHLENBQUMsdUJBQXVCSTtRQUNuQ2pCLGlEQUFPQSxDQUFDTyxHQUFHLENBQUMsY0FBY1UsUUFBUTtZQUFFVCxTQUFTO1FBQUU7UUFDL0NJLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJiLGlEQUFPQSxDQUFDSyxHQUFHLENBQUM7SUFHdEQ7SUFFRixxQkFFSTtrQkFDQSw0RUFBQ2E7WUFBS2hCLE9BQU9BO1lBQU9pQixVQUFVTDs7OEJBQzFCLDhEQUFDTTs4QkFBTTs7Ozs7OzhCQUdQLDhEQUFDQztvQkFBT0MsVUFBVWI7O3NDQUNkLDhEQUFDYzs0QkFBT3JCLE9BQU07NEJBQU9zQixNQUFLOzs7Ozs7c0NBRTFCLDhEQUFDRDs0QkFBT3JCLE9BQU07NEJBQU1zQixNQUFLO3NDQUFTOzs7Ozs7c0NBR2xDLDhEQUFDRDs0QkFBT3JCLE9BQU07NEJBQUtzQixNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpEO0dBakR3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4P2NhYzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtDb29raWVDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9jb29raWVDb250ZXh0XCJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb29raWVQb3B1cCgpIHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3Qge3NldENvb2tpZX09IHVzZUNvbnRleHQoQ29va2llQ29udGV4dClcbiAgICBcbiAgICBpZihDb29raWVzLmdldCgnQ29va2llIGFjaycpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gQ29va2llcy5nZXQoJ0Nvb2tpZSBhY2snKVxuICAgIFxuICAgICAgICBDb29raWVzLnNldCgnQ29va2llIGFjaycsIGNvb2tpZVZhbHVlLCB7ZXhwaXJlczogN30pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IHNldENvb2tpZSh2YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvb2tpZSBidXR0b24gcHVzaCcgKyBjb29raWUpXG4gICAgICAgIENvb2tpZXMuc2V0KCdDb29raWUgYWNrJywgY29va2llLCB7IGV4cGlyZXM6IDcgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb29raWUgYWZ0ZXIgdXBkYXRlJyArIENvb2tpZXMuZ2V0KCdDb29raWUgYWNrJykpXG4gICAgICAgIFxuXG4gICAgICB9XG5cbiAgICByZXR1cm4oXG5cbiAgICAgICAgPD5cbiAgICAgICAgPGZvcm0gdmFsdWU9e3ZhbHVlfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEFsbG93IHRoaXMgc2l0ZSB0byBzdG9yZSBjb29raWVzIGFuZCBvdGhlciBicm93c2luZyByZWxhdGVkIGRhdGE/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVsbFwiIHR5cGU9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInllc1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxuXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvb2tpZUNvbnRleHQiLCJDb29raWVzIiwiQ29va2llUG9wdXAiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0Q29va2llIiwiZ2V0IiwiY29va2llVmFsdWUiLCJzZXQiLCJleHBpcmVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29va2llIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});