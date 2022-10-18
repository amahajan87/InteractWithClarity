/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ConnectWallet.js":
/*!*************************************!*\
  !*** ./components/ConnectWallet.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSession\": () => (/* binding */ userSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect */ \"@stacks/connect\");\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst appConfig = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.AppConfig([\n    \"store_write\",\n    \"publish_data\"\n]);\nconst userSession = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.UserSession({\n    appConfig\n});\nfunction authenticate() {\n    (0,_stacks_connect__WEBPACK_IMPORTED_MODULE_2__.showConnect)({\n        appDetails: {\n            name: \"Stacks Next.js Starter\",\n            icon: window.location.origin + \"/logo512.png\"\n        },\n        redirectTo: \"/\",\n        onFinish: ()=>{\n            window.location.reload();\n        },\n        userSession\n    });\n}\nfunction disconnect() {\n    userSession.signUserOut(\"/\");\n}\nconst ConnectWallet = ()=>{\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    if (mounted && userSession.isUserSignedIn()) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"Connect\",\n                    onClick: disconnect,\n                    children: \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/components/ConnectWallet.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"mainnet: \",\n                        userSession.loadUserData().profile.stxAddress.mainnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/components/ConnectWallet.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"testnet: \",\n                        userSession.loadUserData().profile.stxAddress.testnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/components/ConnectWallet.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/components/ConnectWallet.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"Connect\",\n        onClick: authenticate,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/components/ConnectWallet.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNtQjtBQUV0RSxNQUFNTSxTQUFTLEdBQUcsSUFBSUgsc0RBQVMsQ0FBQztJQUFDLGFBQWE7SUFBRSxjQUFjO0NBQUMsQ0FBQztBQUV6RCxNQUFNSSxXQUFXLEdBQUcsSUFBSUYsd0RBQVcsQ0FBQztJQUFFQyxTQUFTO0NBQUUsQ0FBQyxDQUFDO0FBRTFELFNBQVNFLFlBQVksR0FBRztJQUN0QkosNERBQVcsQ0FBQztRQUNWSyxVQUFVLEVBQUU7WUFDVkMsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QkMsSUFBSSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLGNBQWM7U0FDOUM7UUFDREMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFLElBQU07WUFDZEosTUFBTSxDQUFDQyxRQUFRLENBQUNJLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0RWLFdBQVc7S0FDWixDQUFDLENBQUM7Q0FDSjtBQUVELFNBQVNXLFVBQVUsR0FBRztJQUNwQlgsV0FBVyxDQUFDWSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUI7QUFFRCxNQUFNQyxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJcEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0NELGdEQUFTLENBQUMsSUFBTXFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0QyxJQUFJRCxPQUFPLElBQUlkLFdBQVcsQ0FBQ2dCLGNBQWMsRUFBRSxFQUFFO1FBQzNDLHFCQUNFLDhEQUFDQyxLQUFHOzs4QkFDRiw4REFBQ0MsUUFBTTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7b0JBQUNDLE9BQU8sRUFBRVQsVUFBVTs4QkFBRSxtQkFFakQ7Ozs7OzZCQUFTOzhCQUNULDhEQUFDVSxHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPOzs7Ozs7NkJBQUs7OEJBQ3ZFLDhEQUFDSixHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDRSxPQUFPOzs7Ozs7NkJBQUs7Ozs7OztxQkFDbkUsQ0FDTjtLQUNIO0lBRUQscUJBQ0UsOERBQUNSLFFBQU07UUFBQ0MsU0FBUyxFQUFDLFNBQVM7UUFBQ0MsT0FBTyxFQUFFbkIsWUFBWTtrQkFBRSxnQkFFbkQ7Ozs7O2lCQUFTLENBQ1Q7Q0FDSDtBQUVELGlFQUFlWSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmFjdHdpdGhjbGFyaXR5Ly4vY29tcG9uZW50cy9Db25uZWN0V2FsbGV0LmpzPzc5MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcENvbmZpZywgc2hvd0Nvbm5lY3QsIFVzZXJTZXNzaW9uIH0gZnJvbSBcIkBzdGFja3MvY29ubmVjdFwiO1xuXG5jb25zdCBhcHBDb25maWcgPSBuZXcgQXBwQ29uZmlnKFtcInN0b3JlX3dyaXRlXCIsIFwicHVibGlzaF9kYXRhXCJdKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTZXNzaW9uID0gbmV3IFVzZXJTZXNzaW9uKHsgYXBwQ29uZmlnIH0pO1xuXG5mdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gIHNob3dDb25uZWN0KHtcbiAgICBhcHBEZXRhaWxzOiB7XG4gICAgICBuYW1lOiBcIlN0YWNrcyBOZXh0LmpzIFN0YXJ0ZXJcIixcbiAgICAgIGljb246IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9sb2dvNTEyLnBuZ1wiLFxuICAgIH0sXG4gICAgcmVkaXJlY3RUbzogXCIvXCIsXG4gICAgb25GaW5pc2g6ICgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuICAgIHVzZXJTZXNzaW9uLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgdXNlclNlc3Npb24uc2lnblVzZXJPdXQoXCIvXCIpO1xufVxuXG5jb25zdCBDb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSk7XG5cbiAgaWYgKG1vdW50ZWQgJiYgdXNlclNlc3Npb24uaXNVc2VyU2lnbmVkSW4oKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbm5lY3RcIiBvbkNsaWNrPXtkaXNjb25uZWN0fT5cbiAgICAgICAgICBEaXNjb25uZWN0IFdhbGxldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHA+bWFpbm5ldDoge3VzZXJTZXNzaW9uLmxvYWRVc2VyRGF0YSgpLnByb2ZpbGUuc3R4QWRkcmVzcy5tYWlubmV0fTwvcD5cbiAgICAgICAgPHA+dGVzdG5ldDoge3VzZXJTZXNzaW9uLmxvYWRVc2VyRGF0YSgpLnByb2ZpbGUuc3R4QWRkcmVzcy50ZXN0bmV0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29ubmVjdFwiIG9uQ2xpY2s9e2F1dGhlbnRpY2F0ZX0+XG4gICAgICBDb25uZWN0IFdhbGxldFxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFdhbGxldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQ29uZmlnIiwic2hvd0Nvbm5lY3QiLCJVc2VyU2Vzc2lvbiIsImFwcENvbmZpZyIsInVzZXJTZXNzaW9uIiwiYXV0aGVudGljYXRlIiwiYXBwRGV0YWlscyIsIm5hbWUiLCJpY29uIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZWRpcmVjdFRvIiwib25GaW5pc2giLCJyZWxvYWQiLCJkaXNjb25uZWN0Iiwic2lnblVzZXJPdXQiLCJDb25uZWN0V2FsbGV0IiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJpc1VzZXJTaWduZWRJbiIsImRpdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwIiwibG9hZFVzZXJEYXRhIiwicHJvZmlsZSIsInN0eEFkZHJlc3MiLCJtYWlubmV0IiwidGVzdG5ldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConnectWallet.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect-react */ \"@stacks/connect-react\");\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    let icon;\n    if (false) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__.Connect, {\n        authOptions: {\n            appDetails: {\n                name: \"Stacks Next.js Template\",\n                icon\n            },\n            redirectTo: \"/\",\n            onFinish: ()=>{\n                window.location.reload();\n            },\n            userSession: _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__.userSession\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/pages/_app.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aakankshamahajan/WORK/InteractWithClarity/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFaUI7QUFFVTtBQUUxRCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxJQUFJQyxJQUFJO0lBQ1IsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0lBRUQscUJBQ0UsOERBQUNMLDBEQUFPO1FBQ05TLFdBQVcsRUFBRTtZQUNYQyxVQUFVLEVBQUU7Z0JBQ1ZDLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CTixJQUFJO2FBQ0w7WUFDRE8sVUFBVSxFQUFFLEdBQUc7WUFDZkMsUUFBUSxFQUFFLElBQU07Z0JBQ2RQLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDTyxNQUFNLEVBQUUsQ0FBQzthQUMxQjtZQUNEYixXQUFXO1NBQ1o7a0JBRUQsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDcEIsQ0FDVjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0d2l0aGNsYXJpdHkvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB7IENvbm5lY3QgfSBmcm9tIFwiQHN0YWNrcy9jb25uZWN0LXJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZXJTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgbGV0IGljb247XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWNvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9uZnQtbG9nby5wbmdcIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbm5lY3RcbiAgICAgIGF1dGhPcHRpb25zPXt7XG4gICAgICAgIGFwcERldGFpbHM6IHtcbiAgICAgICAgICBuYW1lOiBcIlN0YWNrcyBOZXh0LmpzIFRlbXBsYXRlXCIsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUbzogXCIvXCIsXG4gICAgICAgIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9LFxuICAgICAgICB1c2VyU2Vzc2lvbixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29ubmVjdD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ29ubmVjdCIsInVzZXJTZXNzaW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpY29uIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJhdXRoT3B0aW9ucyIsImFwcERldGFpbHMiLCJuYW1lIiwicmVkaXJlY3RUbyIsIm9uRmluaXNoIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@stacks/connect":
/*!**********************************!*\
  !*** external "@stacks/connect" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect");

/***/ }),

/***/ "@stacks/connect-react":
/*!****************************************!*\
  !*** external "@stacks/connect-react" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();