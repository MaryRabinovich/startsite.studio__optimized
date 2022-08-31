/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n/* harmony import */ var _bubbles_createBubble_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubbles/createBubble.js */ \"./src/js/bubbles/createBubble.js\");\n/* harmony import */ var _bubbles_getPointerStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubbles/getPointerStream.js */ \"./src/js/bubbles/getPointerStream.js\");\n/* harmony import */ var _bubbles_getTimerStream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubbles/getTimerStream.js */ \"./src/js/bubbles/getTimerStream.js\");\n\n\n\n\n\nconst bubbles = {\n    big: (0,_bubbles_createBubble_js__WEBPACK_IMPORTED_MODULE_1__.createBubble)('big'),\n    small: (0,_bubbles_createBubble_js__WEBPACK_IMPORTED_MODULE_1__.createBubble)('small'),\n    pointerStream: (0,_bubbles_getPointerStream_js__WEBPACK_IMPORTED_MODULE_2__.getPointerStream)(),\n    timerStream: (0,_bubbles_getTimerStream_js__WEBPACK_IMPORTED_MODULE_3__.getTimerStream)()\n}\nbubbles.pointerStream.attach(bubbles.big)\nbubbles.pointerStream.attach(bubbles.small)\nbubbles.pointerStream.start()\naddEventListener('pointermove', function () {\n    bubbles.timerStream.attach(bubbles.big)\n    bubbles.timerStream.attach(bubbles.small)\n    bubbles.timerStream.start()\n})\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/bubbles/createArchive.js":
/*!*****************************************!*\
  !*** ./src/js/bubbles/createArchive.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createArchive\": () => (/* binding */ createArchive)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nfunction memorizeHelper(arr, value) {\n    arr.unshift(value)\n    arr.pop()\n}\n\nfunction homogenizeHelper(arr) {\n    arr.unshift(arr[0])\n    arr.pop()\n}\n\nfunction getAverageHelper(arr) {\n    return Math.floor(\n        arr.reduce((sum, a) => sum + a) / arr.length\n    )\n}\n\nfunction isHomogeniousHelper(arr) {\n    return arr.every( (a, i, arr) => a === arr[0] )\n}\n\nfunction createArchive(elegance) {\n\n    const x = new Array(elegance).fill(_config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles.startX)\n    \n    const y = new Array(elegance).fill(_config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles.startY)\n\n    function memorize(xValue, yValue) {\n        memorizeHelper(x, xValue)\n        memorizeHelper(y, yValue)\n    }\n\n    function homogenize() {\n        homogenizeHelper(x)\n        homogenizeHelper(y)\n    }\n\n    function getX() {\n        return getAverageHelper(x)\n    }\n\n    function getY() {\n        return getAverageHelper(y)\n    }\n\n    function isHomogenious() {\n        return isHomogeniousHelper(x) && isHomogeniousHelper(y)\n    }\n\n    return {\n        memorize,\n        homogenize,\n        getX,\n        getY,\n        isHomogenious\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/createArchive.js?");

/***/ }),

/***/ "./src/js/bubbles/createBubble.js":
/*!****************************************!*\
  !*** ./src/js/bubbles/createBubble.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBubble\": () => (/* binding */ createBubble)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n/* harmony import */ var _createArchive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createArchive.js */ \"./src/js/bubbles/createArchive.js\");\n\n\n\nfunction createBubble(type) {\n\n    const view = document.createElement('div')\n    view.classList.add('bubble')\n    view.classList.add(`bubble-${type}`)\n    document.querySelector('body').appendChild(view)\n\n    const archive = (0,_createArchive_js__WEBPACK_IMPORTED_MODULE_1__.createArchive)(\n        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles[type].elegance\n    )\n\n    function adjustPosition() {\n        view.style.setProperty('left', archive.getX() + 'px')\n        view.style.setProperty('top', archive.getY() + 'px')\n    }\n\n    function updateWithPointerStream(x, y) {\n        archive.memorize(x, y)\n        adjustPosition()\n    }\n\n    function updateWithTimerStream() {\n        archive.homogenize()\n        adjustPosition()\n    }\n\n    function readyToDetachFromTimerStream() {\n        return archive.isHomogenious()\n    }\n\n    return {\n        updateWithPointerStream,\n        updateWithTimerStream,\n        readyToDetachFromTimerStream\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/createBubble.js?");

/***/ }),

/***/ "./src/js/bubbles/getPointerStream.js":
/*!********************************************!*\
  !*** ./src/js/bubbles/getPointerStream.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPointerStream\": () => (/* binding */ getPointerStream)\n/* harmony export */ });\nfunction getPointerStream() {\n\n    const observers = []\n\n    function attach(observer) {\n        if (observers.indexOf(observer) > -1) return\n        observers.push(observer)\n    }\n\n    function notify(x, y) {\n        observers.forEach(\n            observer => observer.updateWithPointerStream(x, y)\n        )\n    }\n\n    function start() {\n        addEventListener('pointermove', function (event) {\n            notify(event.clientX, event.clientY)\n        })\n    }\n\n    return {\n        attach,\n        start\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/getPointerStream.js?");

/***/ }),

/***/ "./src/js/bubbles/getTimerStream.js":
/*!******************************************!*\
  !*** ./src/js/bubbles/getTimerStream.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimerStream\": () => (/* binding */ getTimerStream)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nfunction getTimerStream() {\n\n    const observers = []\n\n    var timerID = null\n    \n    function start() {\n        if (timerID) return \n        // console.log('START')\n        timerID = setInterval(function () {\n            notify()\n            // console.log('tick')\n        }, _config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles.interval)\n    }\n\n    function stop() {\n        if (!timerID) return\n        // console.log('STOP')\n        clearInterval(timerID)\n        timerID = null\n    }\n    \n    function notify() {\n        observers.forEach(observer => {\n            if (observer.readyToDetachFromTimerStream()) {\n                detach(observer)\n            }\n            observer.updateWithTimerStream()\n        })\n    }\n    \n    function attach(observer) {\n        if (observers.indexOf(observer) > -1) return\n        observers.push(observer)\n    }\n\n    function detach(observer) {\n        const index = observers.indexOf(observer)\n        if (index > -1) observers.splice(index, 1)\n        if (observers.length === 0) stop()\n    }\n\n    return {\n        attach,\n        start\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/getTimerStream.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\n    bubbles: {\n        startX: 200,\n        startY: 200,\n        interval: 20,\n        small: {\n            elegance: 30\n        },\n        big: {\n            elegance: 50\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;