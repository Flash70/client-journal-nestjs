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

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar settings = [\n    'Profile',\n    'Account',\n    'Logout'\n];\nvar Header = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(true), 1), isAuth = ref[0];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(null), 2), anchorElUser = ref1[0], setAnchorElUser = ref1[1];\n    var handleOpenUserMenu = function(event) {\n        setAnchorElUser(event.currentTarget);\n    };\n    var handleCloseUserMenu = function() {\n        setAnchorElUser(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        sx: {\n            flexGrow: 1\n        },\n        __source: {\n            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {\n            position: \"static\",\n            color: \"secondary\",\n            __source: {\n                fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {\n                __source: {\n                    fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                        size: \"large\",\n                        edge: \"start\",\n                        color: \"inherit\",\n                        \"aria-label\": \"menu\",\n                        sx: {\n                            mr: 2\n                        },\n                        __source: {\n                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            __source: {\n                                fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            },\n                            __self: _this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        variant: \"h6\",\n                        component: \"div\",\n                        sx: {\n                            flexGrow: 1\n                        },\n                        __source: {\n                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"News\"\n                    }),\n                    isAuth ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        sx: {\n                            flexGrow: 0\n                        },\n                        __source: {\n                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                                title: \"Open settings\",\n                                __source: {\n                                    fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                    onClick: handleOpenUserMenu,\n                                    sx: {\n                                        p: 0\n                                    },\n                                    __source: {\n                                        fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                        alt: \"Remy Sharp\",\n                                        src: \"/static/images/avatar/2.jpg\",\n                                        __source: {\n                                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                                sx: {\n                                    mt: '45px'\n                                },\n                                id: \"menu-appbar\",\n                                anchorEl: anchorElUser,\n                                anchorOrigin: {\n                                    vertical: 'top',\n                                    horizontal: 'right'\n                                },\n                                keepMounted: true,\n                                transformOrigin: {\n                                    vertical: 'top',\n                                    horizontal: 'right'\n                                },\n                                open: Boolean(anchorElUser),\n                                onClose: handleCloseUserMenu,\n                                __source: {\n                                    fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: settings.map(function(setting) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                        __source: {\n                                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                            textAlign: \"center\",\n                                            __source: {\n                                                fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 41\n                                            },\n                                            __self: _this1,\n                                            children: setting\n                                        })\n                                    }, setting);\n                                })\n                            })\n                        ]\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        color: \"inherit\",\n                        __source: {\n                            fileName: \"D:\\\\Prodject\\\\blog_next\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 27\n                        },\n                        __self: _this,\n                        children: \"Login\"\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s1(Header, \"gSgiM7pMq7qU0bAycKaihR8DgpQ=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sd0RBQUwzQyxtREFBUTs7Ozs7Ozt1SEFDSkcscURBQVU7NENBQUN5QyxTQUFTLEVBQUMsQ0FBUTs7Ozs7OztzREFBRUQsT0FBTzs7dUNBRDVCQSxPQUFPOzs7OzhGQU0vQjlDLGlEQUFNO3dCQUFDc0IsS0FBSyxFQUFDLENBQVM7Ozs7Ozs7a0NBQUMsQ0FBSzs7Ozs7O0FBS3ZELENBQUM7SUE3RFlaLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/ZjJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcEJhciwgQXZhdGFyLCBCb3gsIEJ1dHRvbiwgSWNvbkJ1dHRvbiwgTWVudSwgTWVudUl0ZW0sIFRvb2xiYXIsIFRvb2x0aXAsIFR5cG9ncmFwaHl9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IFsnUHJvZmlsZScsICdBY2NvdW50JywgJ0xvZ291dCddO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0F1dGhdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWxVc2VyLCBzZXRBbmNob3JFbFVzZXJdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPcGVuVXNlck1lbnUgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWxVc2VyKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlVXNlck1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWxVc2VyKG51bGwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBzeD17e2ZsZXhHcm93OiAxfX0+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj0nc2Vjb25kYXJ5Jz5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3ttcjogMn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17e2ZsZXhHcm93OiAxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ld3NcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXV0aCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3tmbGV4R3JvdzogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJPcGVuIHNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlblVzZXJNZW51fSBzeD17e3A6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJSZW15IFNoYXJwXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXZhdGFyLzIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3ttdDogJzQ1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWxVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsVXNlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVc2VyTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ3MubWFwKChzZXR0aW5nKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3NldHRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdGV4dEFsaWduPVwiY2VudGVyXCI+e3NldHRpbmd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQXBwQmFyIiwiQXZhdGFyIiwiQm94IiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIlRvb2xiYXIiLCJUb29sdGlwIiwiVHlwb2dyYXBoeSIsIk1lbnVJY29uIiwiUmVhY3QiLCJzZXR0aW5ncyIsIkhlYWRlciIsInVzZVN0YXRlIiwiaXNBdXRoIiwiYW5jaG9yRWxVc2VyIiwic2V0QW5jaG9yRWxVc2VyIiwiaGFuZGxlT3BlblVzZXJNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VVc2VyTWVudSIsInN4IiwiZmxleEdyb3ciLCJwb3NpdGlvbiIsImNvbG9yIiwic2l6ZSIsImVkZ2UiLCJhcmlhLWxhYmVsIiwibXIiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwidGl0bGUiLCJvbkNsaWNrIiwicCIsImFsdCIsInNyYyIsIm10IiwiaWQiLCJhbmNob3JFbCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImtlZXBNb3VudGVkIiwidHJhbnNmb3JtT3JpZ2luIiwib3BlbiIsIkJvb2xlYW4iLCJvbkNsb3NlIiwibWFwIiwic2V0dGluZyIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

});