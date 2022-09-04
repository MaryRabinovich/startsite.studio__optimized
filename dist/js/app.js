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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubbles_createBubble_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubbles/createBubble.js */ \"./src/js/bubbles/createBubble.js\");\n/* harmony import */ var _bubbles_getPointerStream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubbles/getPointerStream.js */ \"./src/js/bubbles/getPointerStream.js\");\n/* harmony import */ var _bubbles_getTimerStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubbles/getTimerStream.js */ \"./src/js/bubbles/getTimerStream.js\");\n/* harmony import */ var _printing_stream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printing/stream.js */ \"./src/js/printing/stream.js\");\n/* harmony import */ var _bubbles_addLinksContactBehaviour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubbles/addLinksContactBehaviour.js */ \"./src/js/bubbles/addLinksContactBehaviour.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n_printing_stream_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].up()\r\n\r\nconst bubbles = {\r\n    big: (0,_bubbles_createBubble_js__WEBPACK_IMPORTED_MODULE_0__.createBubble)('big'),\r\n    small: (0,_bubbles_createBubble_js__WEBPACK_IMPORTED_MODULE_0__.createBubble)('small'),\r\n    pointerStream: (0,_bubbles_getPointerStream_js__WEBPACK_IMPORTED_MODULE_1__.getPointerStream)(),\r\n    timerStream: (0,_bubbles_getTimerStream_js__WEBPACK_IMPORTED_MODULE_2__.getTimerStream)()\r\n}\r\nbubbles.pointerStream.attach(bubbles.big)\r\nbubbles.pointerStream.attach(bubbles.small)\r\nbubbles.pointerStream.start()\r\naddEventListener('pointermove', function () {\r\n    bubbles.timerStream.attach(bubbles.big)\r\n    bubbles.timerStream.attach(bubbles.small)\r\n    bubbles.timerStream.start()\r\n})\r\n;(0,_bubbles_addLinksContactBehaviour_js__WEBPACK_IMPORTED_MODULE_4__.addLinksContactBehaviour)([\r\n    bubbles.big,\r\n    bubbles.small\r\n])\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/bubbles/addLinksContactBehaviour.js":
/*!****************************************************!*\
  !*** ./src/js/bubbles/addLinksContactBehaviour.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLinksContactBehaviour\": () => (/* binding */ addLinksContactBehaviour)\n/* harmony export */ });\nconst links = document.getElementsByTagName('a')\n\nfunction bubblesAddContactClass(bubbles) {\n    bubbles.forEach(bubble => {\n        bubble.addContactClass()\n    })\n}\n\nfunction bubblesRemoveContactClass(bubbles) {\n    bubbles.forEach(bubble => {\n        bubble.removeContactClass()\n    })\n}\n\nfunction addLinksContactBehaviour(bubbles) {\n    for (let link of links) {\n        link.addEventListener('pointerenter', event => {\n            link.oldColor = link.style.color\n            link.style.color = 'orange'\n            bubblesAddContactClass(bubbles)\n        })\n        link.addEventListener('pointerout', event => {\n            link.style.color = link.oldColor\n            bubblesRemoveContactClass(bubbles)\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/addLinksContactBehaviour.js?");

/***/ }),

/***/ "./src/js/bubbles/createArchive.js":
/*!*****************************************!*\
  !*** ./src/js/bubbles/createArchive.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createArchive\": () => (/* binding */ createArchive)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nconst cnfg = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles\n\nfunction memorizeHelper(arr, value) {\n    arr.unshift(value)\n    arr.pop()\n}\n\nfunction homogenizeHelper(arr) {\n    arr.unshift(arr[0])\n    arr.pop()\n}\n\nfunction getAverageHelper(arr) {\n    return Math.floor(\n        arr.reduce((sum, a) => sum + a) / arr.length\n    )\n}\n\nfunction isHomogeniousHelper(arr) {\n    return arr.every( (a, i, arr) => a === arr[0] )\n}\n\nfunction createArchive(elegance) {\n\n    const x = new Array(elegance).fill(cnfg.startX)\n    \n    const y = new Array(elegance).fill(cnfg.startY)\n\n    function memorize(xValue, yValue) {\n        memorizeHelper(x, xValue)\n        memorizeHelper(y, yValue)\n    }\n\n    function homogenize() {\n        homogenizeHelper(x)\n        homogenizeHelper(y)\n    }\n\n    function getX() {\n        return getAverageHelper(x)\n    }\n\n    function getY() {\n        return getAverageHelper(y)\n    }\n\n    function isHomogenious() {\n        return isHomogeniousHelper(x) && isHomogeniousHelper(y)\n    }\n\n    return {\n        memorize,\n        homogenize,\n        getX,\n        getY,\n        isHomogenious\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/createArchive.js?");

/***/ }),

/***/ "./src/js/bubbles/createBubble.js":
/*!****************************************!*\
  !*** ./src/js/bubbles/createBubble.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBubble\": () => (/* binding */ createBubble)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n/* harmony import */ var _createArchive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createArchive.js */ \"./src/js/bubbles/createArchive.js\");\n\r\n\r\n\r\nconst cnfg = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles\r\n\r\nfunction createBubble(type) {\r\n\r\n    const view = document.createElement('div')\r\n    view.classList.add('bubble')\r\n    view.classList.add(`bubble-${type}`)\r\n    document.querySelector('body').appendChild(view)\r\n\r\n    function addContactClass() {\r\n        view.classList.add(`bubble-${type}-contact`)\r\n    }\r\n\r\n    function removeContactClass() {\r\n        view.classList.remove(`bubble-${type}-contact`)\r\n    }\r\n\r\n    const archive = (0,_createArchive_js__WEBPACK_IMPORTED_MODULE_1__.createArchive)(\r\n        cnfg[type].elegance\r\n    )\r\n\r\n    function adjustPosition() {\r\n        view.style.setProperty('left', archive.getX() + 'px')\r\n        view.style.setProperty('top', archive.getY() + 'px')\r\n    }\r\n\r\n    function updateWithPointerStream(x, y) {\r\n        archive.memorize(x, y)\r\n        adjustPosition()\r\n    }\r\n\r\n    function updateWithTimerStream() {\r\n        archive.homogenize()\r\n        adjustPosition()\r\n    }\r\n\r\n    function readyToDetachFromTimerStream() {\r\n        return archive.isHomogenious()\r\n    }\r\n\r\n    return {\r\n        addContactClass,\r\n        removeContactClass,\r\n        updateWithPointerStream,\r\n        updateWithTimerStream,\r\n        readyToDetachFromTimerStream\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/createBubble.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimerStream\": () => (/* binding */ getTimerStream)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nconst cnfg = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.bubbles.interval\n\nfunction getTimerStream() {\n\n    const observers = []\n\n    var timerID = null\n    \n    function start() {\n        if (timerID) return \n        // console.log('START')\n        timerID = setInterval(function () {\n            notify()\n            // console.log('tick')\n        }, cnfg)\n    }\n\n    function stop() {\n        if (!timerID) return\n        // console.log('STOP')\n        clearInterval(timerID)\n        timerID = null\n    }\n    \n    function notify() {\n        observers.forEach(observer => {\n            if (observer.readyToDetachFromTimerStream()) {\n                detach(observer)\n            }\n            observer.updateWithTimerStream()\n        })\n    }\n    \n    function attach(observer) {\n        if (observers.indexOf(observer) > -1) return\n        observers.push(observer)\n    }\n\n    function detach(observer) {\n        const index = observers.indexOf(observer)\n        if (index > -1) observers.splice(index, 1)\n        if (observers.length === 0) stop()\n    }\n\n    return {\n        attach,\n        start\n    }\n}\n\n//# sourceURL=webpack:///./src/js/bubbles/getTimerStream.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\r\n    bubbles: {\r\n        startX: 200,\r\n        startY: 200,\r\n        interval: 20,\r\n        small: {\r\n            elegance: 20\r\n        },\r\n        big: {\r\n            elegance: 30\r\n        }\r\n    },\r\n    printing: {\r\n        colors: ['orange', 'magenta', 'green', 'white'],\r\n        phrases: [\r\n            'подробнее',\r\n            'код и readme.md',\r\n            'у меня',\r\n            'на гитхабе',\r\n            'MaryRabinovich',\r\n            'проект startsite optimized'\r\n        ],\r\n        intervals: {\r\n            printing: 100,\r\n            onComplete: 3000,\r\n            erasing: 40,\r\n            onEmpty: 1000\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/printing/phrase.js":
/*!***********************************!*\
  !*** ./src/js/printing/phrase.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nconst cnfg = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.printing.phrases\n\nvar phraseIndex = 0\n\nvar letterIndex = 0\n\nfunction getPhrase() {\n    return cnfg[phraseIndex]\n}\n\nfunction changePhrase() {\n    phraseIndex++\n    if (phraseIndex === cnfg.length) {\n        phraseIndex = 0\n    }\n}\n\nfunction getSubstring() {\n    return getPhrase().substring(0, letterIndex)\n}\n\nfunction isComplete() {\n    return letterIndex === getPhrase().length\n}\n\nfunction addLetter() {\n    letterIndex++\n}\n\nfunction isEmpty() {\n    return letterIndex === 0\n}\n\nfunction eraseLetter() {\n    letterIndex--\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    changePhrase,\n    getSubstring,\n    isComplete,\n    addLetter,\n    isEmpty,\n    eraseLetter\n});\n\n//# sourceURL=webpack:///./src/js/printing/phrase.js?");

/***/ }),

/***/ "./src/js/printing/stream.js":
/*!***********************************!*\
  !*** ./src/js/printing/stream.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/js/printing/view.js\");\n/* harmony import */ var _phrase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phrase.js */ \"./src/js/printing/phrase.js\");\n\n\n\n\nconst cnfg = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.printing.intervals\n\nvar interval = null\n\n_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setColor()\n\nfunction waitOnComplete() {\n    // console.log('wait on complete')\n    setTimeout(down, cnfg.onComplete)\n}\n\nfunction waitOnEmpty() {\n    // console.log('wait on empty')\n    _phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changePhrase()\n    _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setColor()\n    setTimeout(up, cnfg.onEmpty)\n}\n\nfunction down() {\n    interval = setInterval(function () {\n        // console.log('erasing')\n        _phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eraseLetter()\n        _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showString(_phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSubstring())\n        if (_phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isEmpty()) {\n            clearInterval(interval)\n            waitOnEmpty()\n        }\n    }, cnfg.erasing)\n}\n\nfunction up() {\n    interval = setInterval(function () {\n        // console.log('printing')\n        _phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addLetter()\n        _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showString(_phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSubstring())\n        if (_phrase_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isComplete()) {\n            clearInterval(interval)\n            waitOnComplete()\n        }\n    }, cnfg.printing)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    up\n});\n\n//# sourceURL=webpack:///./src/js/printing/stream.js?");

/***/ }),

/***/ "./src/js/printing/view.js":
/*!*********************************!*\
  !*** ./src/js/printing/view.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/js/config.js\");\n\n\nconst cnfg = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.printing.colors\n\nconst view = document.getElementById('printing')\n\nfunction setColor() {\n    view.style.color = cnfg[\n        Math.floor(Math.random() * cnfg.length)\n    ]\n}\n\nfunction showString(string) {\n    view.innerText = string\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    setColor,\n    showString\n});\n\n//# sourceURL=webpack:///./src/js/printing/view.js?");

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