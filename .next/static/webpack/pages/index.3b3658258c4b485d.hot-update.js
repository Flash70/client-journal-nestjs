"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./layouts/MainLayout.tsx":
/*!********************************!*\
  !*** ./layouts/MainLayout.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainLayout\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LeftMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LeftMenu */ \"./components/LeftMenu/index.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar MainLayout = function(param) {\n    var children = param.children;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_3___default().useState(true), 2), open = ref[0], setOpen = ref[1];\n    var handleDrawer = function() {\n        setOpen(!open);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"wrapper\",\n        __source: {\n            fileName: \"D:\\\\Prodject\\\\blog_next\\\\layouts\\\\MainLayout.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"D:\\\\Prodject\\\\blog_next\\\\layouts\\\\MainLayout.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                    open: open,\n                    handleDrawer: handleDrawer,\n                    __source: {\n                        fileName: \"D:\\\\Prodject\\\\blog_next\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"leftSide\",\n                __source: {\n                    fileName: \"D:\\\\Prodject\\\\blog_next\\\\layouts\\\\MainLayout.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LeftMenu__WEBPACK_IMPORTED_MODULE_1__.LeftMenu, {\n                        __source: {\n                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 26\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                        __source: {\n                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: children\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(MainLayout, \"dVkDIfRb5RN4FjtonjBYYwpg89o=\");\n_c = MainLayout;\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL01haW5MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDUjtBQUNJO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLEdBQUssQ0FBQ0ksVUFBVSxHQUFHLFFBQVEsUUFBUSxDQUFDO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEMsR0FBSyxDQUFtQkYsR0FBb0Isa0JBQXBCQSxxREFBYyxDQUFDLElBQUksT0FBcENJLElBQUksR0FBYUosR0FBb0IsS0FBL0JLLE9BQU8sR0FBSUwsR0FBb0I7SUFDNUMsR0FBSyxDQUFDTSxZQUFZLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDeEJELE9BQU8sRUFBRUQsSUFBSTtJQUNqQixDQUFDO0lBQ0QsTUFBTSx1RUFDREcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7aUZBQ25CRCxDQUFHOzs7Ozs7OytGQUNDUixzREFBTTtvQkFBQ0ssSUFBSSxFQUFFQSxJQUFJO29CQUFFRSxZQUFZLEVBQUVBLFlBQVk7Ozs7Ozs7OztrRkFFakRDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFVOzs7Ozs7OztvQkFDcEJKLElBQUkseUVBQUtQLDBEQUFROzs7Ozs7Ozt5RkFDakJDLG9EQUFTOzs7Ozs7O2tDQUNMSSxRQUFROzs7Ozs7QUFLN0IsQ0FBQztJQWxCWUQsVUFBVTtLQUFWQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvTWFpbkxheW91dC50c3g/Y2I3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xlZnRNZW51fSBmcm9tICcuLi9jb21wb25lbnRzL0xlZnRNZW51JztcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5MYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbighb3Blbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIG9wZW49e29wZW59IGhhbmRsZURyYXdlcj17aGFuZGxlRHJhd2VyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdFNpZGUnPlxyXG4gICAgICAgICAgICAgICAge29wZW4gJiYgPExlZnRNZW51Lz59XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMZWZ0TWVudSIsIkNvbnRhaW5lciIsIkhlYWRlciIsIlJlYWN0IiwiTWFpbkxheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZURyYXdlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/MainLayout.tsx\n");

/***/ })

});