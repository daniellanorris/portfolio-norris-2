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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetIP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var radar_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radar-sdk-js */ \"(app-pages-browser)/./node_modules/radar-sdk-js/dist/radar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst RADAR_KEY = \"prj_live_pk_5fffbef2636a504ecaed99f3e5a9e6d6b8488652\";\nradar_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(RADAR_KEY);\nfunction GetIP() {\n    async function fetchLocation() {\n        radar_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ipGeocode((err, result)=>{\n            if (err) {\n                console.error(\"Radar SDK error:\", err);\n                return;\n            }\n            if (result && result.address) {\n                console.log(\"Your location is \".concat(result.address.countryFlag, \" \").concat(result.address.countryCode));\n            }\n        });\n        const url = \"https://api.radar.io/v1/geocode/ip\";\n        try {\n            const response = await fetch(url, {\n                method: \"GET\",\n                headers: {\n                    Authorization: \"\".concat(RADAR_KEY)\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Response status: \".concat(response.status));\n            }\n            const json = await response.json();\n            console.log(\"IP Data:\", json);\n        } catch (error) {\n            console.error(\"API Fetch error:\", error.message);\n        }\n    }\n    fetchLocation();\n    ; // Empty dependency array to run this effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Check the console for your location details.\"\n    }, void 0, false, {\n        fileName: \"/Users/daniellanorris/portfolio-norris-2/portfolio-norris-2/components/radarSDK.jsx\",\n        lineNumber: 46,\n        columnNumber: 10\n    }, this);\n}\n_c = GetIP;\nvar _c;\n$RefreshReg$(_c, \"GetIP\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcmFkYXJTREsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVrQztBQUNEO0FBRWpDLE1BQU1FLFlBQVlDLHNEQUFpQztBQUNuREYsb0RBQUtBLENBQUNLLFVBQVUsQ0FBQ0o7QUFFRixTQUFTSztJQUVwQixlQUFlQztRQUNiUCxvREFBS0EsQ0FBQ1EsU0FBUyxDQUFDLENBQUNDLEtBQUtDO1lBQ3BCLElBQUlELEtBQUs7Z0JBQ1BFLFFBQVFDLEtBQUssQ0FBQyxvQkFBb0JIO2dCQUNsQztZQUNGO1lBQ0EsSUFBSUMsVUFBVUEsT0FBT0csT0FBTyxFQUFFO2dCQUM1QkYsUUFBUUcsR0FBRyxDQUNULG9CQUFrREosT0FBOUJBLE9BQU9HLE9BQU8sQ0FBQ0UsV0FBVyxFQUFDLEtBQThCLE9BQTNCTCxPQUFPRyxPQUFPLENBQUNHLFdBQVc7WUFFaEY7UUFDRjtRQUVBLE1BQU1DLE1BQU07UUFDWixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNRixLQUFLO2dCQUNoQ0csUUFBUTtnQkFDUkMsU0FBUztvQkFDUEMsZUFBZSxHQUFhLE9BQVZyQjtnQkFDcEI7WUFDRjtZQUNELElBQUksQ0FBQ2lCLFNBQVNLLEVBQUUsRUFBRTtnQkFDZixNQUFNLElBQUlDLE1BQU0sb0JBQW9DLE9BQWhCTixTQUFTTyxNQUFNO1lBQ3JEO1lBRUEsTUFBTUMsT0FBTyxNQUFNUixTQUFTUSxJQUFJO1lBQ2hDZixRQUFRRyxHQUFHLENBQUMsWUFBWVk7UUFDMUIsRUFBRSxPQUFPZCxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyxvQkFBb0JBLE1BQU1lLE9BQU87UUFDakQ7SUFDRjtJQUVBcEI7TUFDRixzREFBc0Q7SUFFdEQscUJBQU8sOERBQUNxQjtrQkFBSTs7Ozs7O0FBQ2Q7S0F0Q3dCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYWRhclNESy5qc3g/MDQ5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWRhciBmcm9tIFwicmFkYXItc2RrLWpzXCI7XG5cbmNvbnN0IFJBREFSX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JBREFSX0tFWVxuUmFkYXIuaW5pdGlhbGl6ZShSQURBUl9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRJUCgpIHtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTG9jYXRpb24oKSB7XG4gICAgICBSYWRhci5pcEdlb2NvZGUoKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmFkYXIgU0RLIGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5hZGRyZXNzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgWW91ciBsb2NhdGlvbiBpcyAke3Jlc3VsdC5hZGRyZXNzLmNvdW50cnlGbGFnfSAke3Jlc3VsdC5hZGRyZXNzLmNvdW50cnlDb2RlfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS5yYWRhci5pby92MS9nZW9jb2RlL2lwXCI7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIiwgLy8gVGhpcyBpcyB0aGUgZGVmYXVsdCBmb3IgZmV0Y2gsIGJ1dCBpdCdzIGV4cGxpY2l0IGhlcmVcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHtSQURBUl9LRVl9YCwgLy8gSW5jbHVkZSB5b3VyIFJhZGFyIEFQSSBrZXkgaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSVAgRGF0YTpcIiwganNvbik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQVBJIEZldGNoIGVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaExvY2F0aW9uKCk7XG47IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgdG8gcnVuIHRoaXMgZWZmZWN0IG9ubHkgb25jZVxuXG4gIHJldHVybiA8ZGl2PkNoZWNrIHRoZSBjb25zb2xlIGZvciB5b3VyIGxvY2F0aW9uIGRldGFpbHMuPC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJhZGFyIiwiUkFEQVJfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JBREFSX0tFWSIsImluaXRpYWxpemUiLCJHZXRJUCIsImZldGNoTG9jYXRpb24iLCJpcEdlb2NvZGUiLCJlcnIiLCJyZXN1bHQiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRyZXNzIiwibG9nIiwiY291bnRyeUZsYWciLCJjb3VudHJ5Q29kZSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/radarSDK.jsx\n"));

/***/ })

});