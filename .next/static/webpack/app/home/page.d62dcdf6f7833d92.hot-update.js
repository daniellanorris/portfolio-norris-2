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

/***/ "(app-pages-browser)/./components/radarSDK.jsx":
/*!*********************************!*\
  !*** ./components/radarSDK.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetIP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var radar_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radar-sdk-js */ \"(app-pages-browser)/./node_modules/radar-sdk-js/dist/radar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RADAR_KEY = \"prj_live_pk_5fffbef2636a504ecaed99f3e5a9e6d6b8488652\";\nradar_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(RADAR_KEY);\nfunction GetIP() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchLocation() {\n            radar_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ipGeocode((err, result)=>{\n                if (err) {\n                    console.error(\"Radar SDK error:\", err);\n                    return;\n                }\n                if (result && result.address) {\n                    console.log(\"Your location is \".concat(result.address.countryFlag, \" \").concat(result.address.countryCode));\n                }\n            });\n            // Your API call (replace with your actual API URL)\n            const url = \"https://api.radar.io/v1/geocode/ip\";\n            try {\n                const response = await fetch(url, {\n                    method: \"GET\",\n                    headers: {\n                        Authorization: \"\".concat(RADAR_KEY)\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"Response status: \".concat(response.status));\n                }\n                const json = await response.json();\n                console.log(\"IP Data:\", json);\n            } catch (error) {\n                console.error(\"API Fetch error:\", error.message);\n            }\n        }\n        fetchLocation();\n    }, []); // Empty dependency array to run this effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Check the console for your location details.\"\n    }, void 0, false, {\n        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/radarSDK.jsx\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, this);\n}\n_s(GetIP, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GetIP;\nvar _c;\n$RefreshReg$(_c, \"GetIP\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcmFkYXJTREsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFa0M7QUFDRDtBQUVqQyxNQUFNRSxZQUFZQyxzREFBaUM7QUFDbkRGLG9EQUFLQSxDQUFDSyxVQUFVLENBQUNKO0FBRUYsU0FBU0s7O0lBR3RCUCxnREFBU0EsQ0FBQztRQUdSLGVBQWVRO1lBQ2JQLG9EQUFLQSxDQUFDUSxTQUFTLENBQUMsQ0FBQ0MsS0FBS0M7Z0JBQ3BCLElBQUlELEtBQUs7b0JBQ1BFLFFBQVFDLEtBQUssQ0FBQyxvQkFBb0JIO29CQUNsQztnQkFDRjtnQkFDQSxJQUFJQyxVQUFVQSxPQUFPRyxPQUFPLEVBQUU7b0JBQzVCRixRQUFRRyxHQUFHLENBQ1Qsb0JBQWtESixPQUE5QkEsT0FBT0csT0FBTyxDQUFDRSxXQUFXLEVBQUMsS0FBOEIsT0FBM0JMLE9BQU9HLE9BQU8sQ0FBQ0csV0FBVztnQkFFaEY7WUFDRjtZQUdBLG1EQUFtRDtZQUNuRCxNQUFNQyxNQUFNO1lBQ1osSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7b0JBQ2hDRyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQQyxlQUFlLEdBQWEsT0FBVnJCO29CQUNwQjtnQkFDRjtnQkFDRCxJQUFJLENBQUNpQixTQUFTSyxFQUFFLEVBQUU7b0JBQ2YsTUFBTSxJQUFJQyxNQUFNLG9CQUFvQyxPQUFoQk4sU0FBU08sTUFBTTtnQkFDckQ7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNUixTQUFTUSxJQUFJO2dCQUNoQ2YsUUFBUUcsR0FBRyxDQUFDLFlBQVlZO1lBQzFCLEVBQUUsT0FBT2QsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLG9CQUFvQkEsTUFBTWUsT0FBTztZQUNqRDtRQUNGO1FBRUFwQjtJQUNGLEdBQUcsRUFBRSxHQUFHLHNEQUFzRDtJQUU5RCxxQkFBTyw4REFBQ3FCO2tCQUFJOzs7Ozs7QUFDZDtHQTVDd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JhZGFyU0RLLmpzeD8wNDk2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhZGFyIGZyb20gXCJyYWRhci1zZGstanNcIjtcblxuY29uc3QgUkFEQVJfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFEQVJfS0VZXG5SYWRhci5pbml0aWFsaXplKFJBREFSX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldElQKCkge1xuXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaExvY2F0aW9uKCkge1xuICAgICAgUmFkYXIuaXBHZW9jb2RlKChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJhZGFyIFNESyBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuYWRkcmVzcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFlvdXIgbG9jYXRpb24gaXMgJHtyZXN1bHQuYWRkcmVzcy5jb3VudHJ5RmxhZ30gJHtyZXN1bHQuYWRkcmVzcy5jb3VudHJ5Q29kZX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgLy8gWW91ciBBUEkgY2FsbCAocmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIEFQSSBVUkwpXG4gICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLnJhZGFyLmlvL3YxL2dlb2NvZGUvaXBcIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLCAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0IGZvciBmZXRjaCwgYnV0IGl0J3MgZXhwbGljaXQgaGVyZVxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke1JBREFSX0tFWX1gLCAvLyBJbmNsdWRlIHlvdXIgUmFkYXIgQVBJIGtleSBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJUCBEYXRhOlwiLCBqc29uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgRmV0Y2ggZXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoTG9jYXRpb24oKTtcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biB0aGlzIGVmZmVjdCBvbmx5IG9uY2VcblxuICByZXR1cm4gPGRpdj5DaGVjayB0aGUgY29uc29sZSBmb3IgeW91ciBsb2NhdGlvbiBkZXRhaWxzLjwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJSYWRhciIsIlJBREFSX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19SQURBUl9LRVkiLCJpbml0aWFsaXplIiwiR2V0SVAiLCJmZXRjaExvY2F0aW9uIiwiaXBHZW9jb2RlIiwiZXJyIiwicmVzdWx0IiwiY29uc29sZSIsImVycm9yIiwiYWRkcmVzcyIsImxvZyIsImNvdW50cnlGbGFnIiwiY291bnRyeUNvZGUiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/radarSDK.jsx\n"));

/***/ })

});