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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CookiePopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_cookieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cookieContext */ \"(app-pages-browser)/./context/cookieContext.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/../../node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CookiePopup() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // Initialize with an empty string\n    const { setCookie } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_cookieContext__WEBPACK_IMPORTED_MODULE_2__.CookieContext);\n    // Handle form submission\n    function handleSubmit(selectedValue) {\n        if (selectedValue) {\n            setCookie(selectedValue); //will be useful when implementing context, need to see if I want to have a db hold geographic data based \n            js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"Cookie ack\", selectedValue, {\n                expires: 7\n            });\n            console.log(\"Cookie selected: \" + selectedValue);\n            console.log(\"Cookie stored: \" + js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"Cookie ack\"));\n        } else {\n            console.log(\"No option selected\");\n        }\n    }\n    // Handle the change event for the radio input\n    function handleChange(e) {\n        const selectedValue = e.target.value;\n        setValue(selectedValue); // Update local state\n        handleSubmit(selectedValue); // Submit the form when an option is selected\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"cookie-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Allow this site to store cookies and other browsing-related data?\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"cookieConsent\",\n                                value: \"yes\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            \"Yes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"cookieConsent\",\n                                value: \"no\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            \"No\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    fill: \"#000000\",\n                    height: \"100px\",\n                    width: \"100px\",\n                    viewBox: \"0 0 512 512\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m497.1,286.7c-3.4-4.6-8.5-7.6-14.1-8.3-73.7-9.1-129.2-71.4-129.2-145.1 0-24.7 6.4-49.2 18.5-70.8 2.8-4.9 3.3-10.8 1.6-16.2-1.7-5.4-5.7-9.8-10.8-12.2-33.1-15.3-68.4-23.1-105-23.1-136.2,0-247,109.9-247,245 5.32907e-15,135.1 110.8,245 247.1,245 118.2,0 220.2-83.5 242.6-198.5 1-5.5-0.3-11.2-3.7-15.8zm-239,173.5c-113.5,0-205.9-91.6-205.9-204.2 0-112.6 92.4-204.2 205.9-204.2 23.5,0 46.4,3.9 68.2,11.5-9,22.2-13.7,46-13.7,70 0,86.5 59.9,160.8 142.7,181.4-25.7,85.4-105.6,145.5-197.2,145.5z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ellipse\", {\n                                        cx: \"194.5\",\n                                        cy: \"150.8\",\n                                        rx: \"20.4\",\n                                        ry: \"20.3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ellipse\", {\n                                        cx: \"264.4\",\n                                        cy: \"230.7\",\n                                        rx: \"20.4\",\n                                        ry: \"20.3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ellipse\", {\n                                        cx: \"293.8\",\n                                        cy: \"340.2\",\n                                        rx: \"20.4\",\n                                        ry: \"20.3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ellipse\", {\n                                        cx: \"146.7\",\n                                        cy: \"304.3\",\n                                        rx: \"20.4\",\n                                        ry: \"20.3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/cookiePopup.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(CookiePopup, \"EGfWisFCctM0CveRIRB731tF6A4=\");\n_c = CookiePopup;\nvar _c;\n$RefreshReg$(_c, \"CookiePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29va2llUG9wdXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ1k7QUFDekI7QUFFakIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLLGtDQUFrQztJQUMxRSxNQUFNLEVBQUVNLFNBQVMsRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0UsaUVBQWFBO0lBRTlDLHlCQUF5QjtJQUN6QixTQUFTTSxhQUFhQyxhQUFhO1FBQ2pDLElBQUlBLGVBQWU7WUFDakJGLFVBQVVFLGdCQUFnQiwwR0FBMEc7WUFDcElOLGlEQUFPQSxDQUFDTyxHQUFHLENBQUMsY0FBY0QsZUFBZTtnQkFBRUUsU0FBUztZQUFFO1lBQ3REQyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCSjtZQUNsQ0csUUFBUUMsR0FBRyxDQUFDLG9CQUFvQlYsaURBQU9BLENBQUNXLEdBQUcsQ0FBQztRQUM5QyxPQUFPO1lBQ0xGLFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSw4Q0FBOEM7SUFDOUMsU0FBU0UsYUFBYUMsQ0FBQztRQUNyQixNQUFNUCxnQkFBZ0JPLEVBQUVDLE1BQU0sQ0FBQ1osS0FBSztRQUNwQ0MsU0FBU0csZ0JBQWdCLHFCQUFxQjtRQUM5Q0QsYUFBYUMsZ0JBQWdCLDZDQUE2QztJQUM1RTtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDUztZQUFLQyxXQUFXOzs4QkFDZiw4REFBQ0M7OEJBQU07Ozs7Ozs4QkFHUCw4REFBQ0M7OEJBQ0MsNEVBQUNEOzswQ0FDQyw4REFBQ0U7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xuQixPQUFNO2dDQUNOb0IsVUFBVVY7Ozs7Ozs0QkFDVDs0QkFBSTs7Ozs7Ozs7Ozs7OzhCQUlYLDhEQUFDTTs4QkFDQyw0RUFBQ0Q7OzBDQUNDLDhEQUFDRTtnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTG5CLE9BQU07Z0NBQ05vQixVQUFVVjs7Ozs7OzRCQUNUOzRCQUFJOzs7Ozs7Ozs7Ozs7OEJBSVgsOERBQUNXO29CQUNDQyxNQUFLO29CQUNMQyxRQUFPO29CQUNQQyxPQUFNO29CQUNOQyxTQUFROzhCQUVSLDRFQUFDQztrQ0FDQyw0RUFBQ0E7c0NBQ0MsNEVBQUNBOztrREFDQyw4REFBQ0M7d0NBQUtDLEdBQUU7Ozs7OztrREFDUiw4REFBQ0M7d0NBQVFDLElBQUc7d0NBQVFDLElBQUc7d0NBQVFDLElBQUc7d0NBQU9DLElBQUc7Ozs7OztrREFDNUMsOERBQUNKO3dDQUFRQyxJQUFHO3dDQUFRQyxJQUFHO3dDQUFRQyxJQUFHO3dDQUFPQyxJQUFHOzs7Ozs7a0RBQzVDLDhEQUFDSjt3Q0FBUUMsSUFBRzt3Q0FBUUMsSUFBRzt3Q0FBUUMsSUFBRzt3Q0FBT0MsSUFBRzs7Ozs7O2tEQUM1Qyw4REFBQ0o7d0NBQVFDLElBQUc7d0NBQVFDLElBQUc7d0NBQVFDLElBQUc7d0NBQU9DLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUQ7R0F4RXdCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb29raWVQb3B1cC5qc3g/Y2FjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvb2tpZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb29raWVDb250ZXh0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvb2tpZVBvcHVwKCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBJbml0aWFsaXplIHdpdGggYW4gZW1wdHkgc3RyaW5nXG4gIGNvbnN0IHsgc2V0Q29va2llIH0gPSB1c2VDb250ZXh0KENvb2tpZUNvbnRleHQpO1xuXG4gIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KHNlbGVjdGVkVmFsdWUpIHtcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgc2V0Q29va2llKHNlbGVjdGVkVmFsdWUpOyAvL3dpbGwgYmUgdXNlZnVsIHdoZW4gaW1wbGVtZW50aW5nIGNvbnRleHQsIG5lZWQgdG8gc2VlIGlmIEkgd2FudCB0byBoYXZlIGEgZGIgaG9sZCBnZW9ncmFwaGljIGRhdGEgYmFzZWQgXG4gICAgICBDb29raWVzLnNldChcIkNvb2tpZSBhY2tcIiwgc2VsZWN0ZWRWYWx1ZSwgeyBleHBpcmVzOiA3IH0pO1xuICAgICAgY29uc29sZS5sb2coXCJDb29raWUgc2VsZWN0ZWQ6IFwiICsgc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvb2tpZSBzdG9yZWQ6IFwiICsgQ29va2llcy5nZXQoXCJDb29raWUgYWNrXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBvcHRpb24gc2VsZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSByYWRpbyBpbnB1dFxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRWYWx1ZShzZWxlY3RlZFZhbHVlKTsgLy8gVXBkYXRlIGxvY2FsIHN0YXRlXG4gICAgaGFuZGxlU3VibWl0KHNlbGVjdGVkVmFsdWUpOyAvLyBTdWJtaXQgdGhlIGZvcm0gd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17XCJjb29raWUtZm9ybVwifT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFsbG93IHRoaXMgc2l0ZSB0byBzdG9yZSBjb29raWVzIGFuZCBvdGhlciBicm93c2luZy1yZWxhdGVkIGRhdGE/XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb29raWVDb25zZW50XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ5ZXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICBZZXNcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvb2tpZUNvbnNlbnRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIm5vXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgTm9cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIm00OTcuMSwyODYuN2MtMy40LTQuNi04LjUtNy42LTE0LjEtOC4zLTczLjctOS4xLTEyOS4yLTcxLjQtMTI5LjItMTQ1LjEgMC0yNC43IDYuNC00OS4yIDE4LjUtNzAuOCAyLjgtNC45IDMuMy0xMC44IDEuNi0xNi4yLTEuNy01LjQtNS43LTkuOC0xMC44LTEyLjItMzMuMS0xNS4zLTY4LjQtMjMuMS0xMDUtMjMuMS0xMzYuMiwwLTI0NywxMDkuOS0yNDcsMjQ1IDUuMzI5MDdlLTE1LDEzNS4xIDExMC44LDI0NSAyNDcuMSwyNDUgMTE4LjIsMCAyMjAuMi04My41IDI0Mi42LTE5OC41IDEtNS41LTAuMy0xMS4yLTMuNy0xNS44em0tMjM5LDE3My41Yy0xMTMuNSwwLTIwNS45LTkxLjYtMjA1LjktMjA0LjIgMC0xMTIuNiA5Mi40LTIwNC4yIDIwNS45LTIwNC4yIDIzLjUsMCA0Ni40LDMuOSA2OC4yLDExLjUtOSwyMi4yLTEzLjcsNDYtMTMuNyw3MCAwLDg2LjUgNTkuOSwxNjAuOCAxNDIuNywxODEuNC0yNS43LDg1LjQtMTA1LjYsMTQ1LjUtMTk3LjIsMTQ1LjV6XCIgLz5cbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjE5NC41XCIgY3k9XCIxNTAuOFwiIHJ4PVwiMjAuNFwiIHJ5PVwiMjAuM1wiIC8+XG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIyNjQuNFwiIGN5PVwiMjMwLjdcIiByeD1cIjIwLjRcIiByeT1cIjIwLjNcIiAvPlxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMjkzLjhcIiBjeT1cIjM0MC4yXCIgcng9XCIyMC40XCIgcnk9XCIyMC4zXCIgLz5cbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjE0Ni43XCIgY3k9XCIzMDQuM1wiIHJ4PVwiMjAuNFwiIHJ5PVwiMjAuM1wiIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvb2tpZUNvbnRleHQiLCJDb29raWVzIiwiQ29va2llUG9wdXAiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0Q29va2llIiwiaGFuZGxlU3VibWl0Iiwic2VsZWN0ZWRWYWx1ZSIsInNldCIsImV4cGlyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZvcm0iLCJjbGFzc05hbWUiLCJsYWJlbCIsImRpdiIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsInN2ZyIsImZpbGwiLCJoZWlnaHQiLCJ3aWR0aCIsInZpZXdCb3giLCJnIiwicGF0aCIsImQiLCJlbGxpcHNlIiwiY3giLCJjeSIsInJ4IiwicnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cookiePopup.jsx\n"));

/***/ })

});