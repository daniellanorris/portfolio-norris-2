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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CookiePopup() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\") !== null) {\n        const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", cookieValue, {\n            expires: 7\n        });\n    }\n    // Handle form submission\n    function handleSubmit(selectedValue) {\n        if (selectedValue !== \"null\") {\n            setCookie(selectedValue) // Update the context with the selected value\n            ;\n            js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", selectedValue, {\n                expires: 7\n            }) // Set the actual cookie\n            ;\n            console.log(\"cookie button push: \" + selectedValue);\n            console.log(\"get cookie after update: \" + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\"));\n        } else {\n            console.log(\"No option selected\");\n        }\n    }\n    // Handle the change event for the select input\n    function handleChange(e) {\n        const selectedValue = e.target.value;\n        setValue(selectedValue);\n        console.log(\"event target value: \" + event.target.value);\n        handleSubmit(selectedValue);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing-related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    type: \"radio\",\n                    value: \"null\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    type: \"radio\",\n                    value: \"yes\",\n                    onChange: handleChange,\n                    children: \"Yes\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    type: \"radio\",\n                    value: \"no\",\n                    onChange: handleChange,\n                    children: \"No\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"mW13vABwMFlXZMF06PMG2v31f4E=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1k7QUFDekI7QUFHaEIsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0UsaUVBQWFBO0lBRTlDLElBQUlDLGlEQUFPQSxDQUFDSyxHQUFHLENBQUMsa0JBQWtCLE1BQU07UUFDcEMsTUFBTUMsY0FBY04saURBQU9BLENBQUNLLEdBQUcsQ0FBQztRQUNoQ0wsaURBQU9BLENBQUNPLEdBQUcsQ0FBQyxjQUFjRCxhQUFhO1lBQUVFLFNBQVM7UUFBRTtJQUN4RDtJQUNBLHlCQUF5QjtJQUN6QixTQUFTQyxhQUFhQyxhQUFhO1FBRS9CLElBQUlBLGtCQUFrQixRQUFRO1lBQzFCTixVQUFVTSxlQUFlLDZDQUE2Qzs7WUFDdEVWLGlEQUFPQSxDQUFDTyxHQUFHLENBQUMsY0FBY0csZUFBZTtnQkFBRUYsU0FBUztZQUFFLEdBQUcsd0JBQXdCOztZQUNqRkcsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkY7WUFDckNDLFFBQVFDLEdBQUcsQ0FBQyw4QkFBOEJaLGlEQUFPQSxDQUFDSyxHQUFHLENBQUM7UUFDMUQsT0FBTztZQUNITSxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUVBLCtDQUErQztJQUMvQyxTQUFTQyxhQUFhQyxDQUFDO1FBQ25CLE1BQU1KLGdCQUFnQkksRUFBRUMsTUFBTSxDQUFDYixLQUFLO1FBQ3BDQyxTQUFTTztRQUNUQyxRQUFRQyxHQUFHLENBQUMseUJBQXlCSSxNQUFNRCxNQUFNLENBQUNiLEtBQUs7UUFFdkRPLGFBQWFDO0lBQ2pCO0lBR0EscUJBQ0k7a0JBQ0ksNEVBQUNPOzs4QkFDRyw4REFBQ0M7OEJBQU07Ozs7Ozs4QkFHSCw4REFBQ0M7b0JBQU9DLE1BQUs7b0JBQVFsQixPQUFNO29CQUFPbUIsVUFBVVI7Ozs7Ozs4QkFDNUMsOERBQUNNO29CQUFPQyxNQUFLO29CQUFRbEIsT0FBTTtvQkFBTW1CLFVBQVVSOzhCQUFjOzs7Ozs7OEJBQ3pELDhEQUFDTTtvQkFBT0MsTUFBSztvQkFBUWxCLE9BQU07b0JBQUttQixVQUFVUjs4QkFBYzs7Ozs7Ozs7Ozs7OztBQUk1RTtHQTVDd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4P2NhYzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENvb2tpZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb29raWVDb250ZXh0XCJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb29raWVQb3B1cCgpIHtcblxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCB7IHNldENvb2tpZSB9ID0gdXNlQ29udGV4dChDb29raWVDb250ZXh0KVxuXG4gICAgaWYgKENvb2tpZXMuZ2V0KCdDb29raWUgYWNrJykgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBDb29raWVzLmdldCgnQ29va2llIGFjaycpXG4gICAgICAgIENvb2tpZXMuc2V0KCdDb29raWUgYWNrJywgY29va2llVmFsdWUsIHsgZXhwaXJlczogNyB9KVxuICAgIH1cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHNlbGVjdGVkVmFsdWUpIHtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gJ251bGwnKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoc2VsZWN0ZWRWYWx1ZSkgLy8gVXBkYXRlIHRoZSBjb250ZXh0IHdpdGggdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAgICAgICAgICBDb29raWVzLnNldCgnQ29va2llIGFjaycsIHNlbGVjdGVkVmFsdWUsIHsgZXhwaXJlczogNyB9KSAvLyBTZXQgdGhlIGFjdHVhbCBjb29raWVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb29raWUgYnV0dG9uIHB1c2g6ICcgKyBzZWxlY3RlZFZhbHVlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb29raWUgYWZ0ZXIgdXBkYXRlOiAnICsgQ29va2llcy5nZXQoJ0Nvb2tpZSBhY2snKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBvcHRpb24gc2VsZWN0ZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSBzZWxlY3QgaW5wdXRcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRWYWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50IHRhcmdldCB2YWx1ZTogJyArIGV2ZW50LnRhcmdldC52YWx1ZSlcblxuICAgICAgICBoYW5kbGVTdWJtaXQoc2VsZWN0ZWRWYWx1ZSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBBbGxvdyB0aGlzIHNpdGUgdG8gc3RvcmUgY29va2llcyBhbmQgb3RoZXIgYnJvd3NpbmctcmVsYXRlZCBkYXRhP1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJudWxsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJ5ZXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5ZZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIm5vXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+Tm88L29wdGlvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvb2tpZUNvbnRleHQiLCJDb29raWVzIiwiQ29va2llUG9wdXAiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0Q29va2llIiwiZ2V0IiwiY29va2llVmFsdWUiLCJzZXQiLCJleHBpcmVzIiwiaGFuZGxlU3VibWl0Iiwic2VsZWN0ZWRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZXZlbnQiLCJmb3JtIiwibGFiZWwiLCJvcHRpb24iLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});