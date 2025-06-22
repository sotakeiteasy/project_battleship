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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets//fonts/the_bomb_sound-webfont.woff2 */ \"./src/assets/fonts/the_bomb_sound-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets//fonts/the_bomb_sound-webfont.woff */ \"./src/assets/fonts/the_bomb_sound-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"ArcadeFont\";\n  src:\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\"),\n    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n:root {\n  --primary-color: rgba(0, 51, 102, 0.4);\n  --primary-color-opacity: rgba(0, 51, 102, 0.3);\n  --primary-color-high-opacity: rgba(0, 51, 102, 0.01);\n\n  --text-color: rgba(0, 51, 102);\n  --cell-size: 35px;\n  --gap-size: 1px;\n  --border-color: rgba(0, 51, 102, 0.8);\n}\n\n.header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px;\n\n  .title {\n    margin-left: 100px;\n    width: 200px;\n    font-size: 2rem;\n  }\n\n  .display {\n    display: flex;\n    justify-self: center;\n    align-self: center;\n    justify-content: center;\n    padding: 10px 30px;\n    margin: 0px auto 0px auto;\n    transform: translateX(-150px);\n    width: 280px;\n    border: 1px solid var(--primary-color);\n    border-radius: 5px;\n    z-index: 1000;\n    background-color: white;\n  }\n}\n\n.container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 150px;\n  margin-top: 50px;\n}\n\n.playerOne,\n.playerTwo {\n  display: flex;\n  flex-direction: column;\n}\n\n.board-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.gameBoard {\n  display: inline-block;\n  background-color: white;\n  padding: 0;\n}\n\n.board-table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 2px solid var(--border-color);\n}\n\n.cell {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  background-color: var(--primary-color-high-opacity);\n  border: var(--gap-size) solid var(--primary-color);\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n  padding: 0;\n}\n\n.shadow,\n.startShadow {\n  position: relative;\n}\n\n.shadow::after,\n.startShadow::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0, 0.05);\n  z-index: 2;\n}\n\n.startShadow::after {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n#player-one-board .cell.ship {\n  background-color: var(--primary-color-opacity);\n}\n\n#player-two-board .cell.ship.hitAll {\n  background-color: var(--primary-color);\n}\n\n/* #player-two-board .cell.ship {\n  background-color: var(--primary-color);\n} */\n\n@keyframes shake-vertical {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-4px);\n  }\n  75% {\n    transform: translateX(4px);\n  }\n}\n\n@keyframes shake-non-vertical {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  25% {\n    transform: translateY(-4px);\n  }\n  75% {\n    transform: translateY(4px);\n  }\n}\n\n.shake-fail-vertical {\n  background-color: rgba(255, 0, 0, 0.5) !important;\n  animation: shake-vertical 0.4s ease;\n}\n.shake-fail-non-vertical {\n  background-color: rgba(255, 0, 0, 0.5) !important;\n\n  animation: shake-non-vertical 0.4s ease;\n}\n\n.nonClick {\n  pointer-events: none;\n}\n\n.cell.highlight {\n  background: var(--primary-color);\n}\n\n.cell.hidden {\n  opacity: 0;\n}\n\n.cell.ship.hit::after {\n  font-family: Verdana, sans-serif;\n  content: \"╳\";\n  font-size: 22px;\n  color: red;\n  position: relative;\n  z-index: 2;\n}\n\n.hit::after {\n  content: \"•\";\n  font-size: 26px;\n  color: black;\n  position: relative;\n  z-index: 2;\n  display: block;\n}\n\n.board {\n  display: flex;\n  align-items: flex-start;\n}\n\n.board-header {\n  display: grid;\n  grid-template-columns: repeat(10, var(--cell-size));\n  margin-left: var(--cell-size);\n}\n\n.header-cell {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.board-row-labels {\n  display: grid;\n  grid-template-rows: repeat(10, var(--cell-size));\n  width: var(--cell-size);\n}\n\n.row-label {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--text-color);\n}\n\n.title {\n  padding: 20px;\n  text-align: center;\n  color: var(--text-color);\n}\n\n.endGameBlock {\n  z-index: 1000;\n\n  font-family: \"ArcadeFont\";\n\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 1;\n\n  .newGameBtn {\n    font-family: inherit;\n    background-color: white;\n    cursor: pointer;\n    padding: 5px 20px;\n  }\n}\n\n.endGameBlock.endGameSize {\n  transition: transform 0.5s ease;\n  transform: translate(-50%, -50%) scale(4);\n\n  .newGameBtn {\n    transition: transform 0.2s ease;\n\n    transform: translate(0) scale(0.5);\n    font-style: inherit;\n    margin-top: 1px;\n  }\n\n  .newGameBtn:hover {\n    transform: translate(0px, 1px) scale(0.5);\n  }\n}\n\n.newRoundBtn.active,\n.placeShipsBtn.active {\n  display: flex;\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  padding: 10px 15px;\n  margin-top: 20px;\n  width: 110px;\n  border: 1px solid var(--primary-color);\n  background-color: white;\n\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.newRoundBtn.active {\n  z-index: 1000;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-35%, -55%);\n}\n\n.newRoundBtn,\n.placeShipsBtn {\n  display: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI/initialize/initializeDisplay.ts":
/*!************************************************!*\
  !*** ./src/UI/initialize/initializeDisplay.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initializeDisplay = initializeDisplay;\nconst createGameboard_1 = __webpack_require__(/*! ../utils/createGameboard */ \"./src/UI/utils/createGameboard.ts\");\nconst game_1 = __webpack_require__(/*! ../../utils/game */ \"./src/utils/game.ts\");\nfunction initializeDisplay() {\n    (0, createGameboard_1.createGameBoard)(\"player-one-board\");\n    (0, createGameboard_1.createGameBoard)(\"player-two-board\");\n    const newRoundBtn = document.querySelector(\".newRoundBtn\");\n    newRoundBtn.addEventListener(\"click\", game_1.startRound);\n    const newGameBtn = document.querySelector(\".newGameBtn\");\n    newGameBtn.addEventListener(\"click\", game_1.startGame);\n    const randomPlacementBtn = document.querySelector(\".placeShipsBtn\");\n    randomPlacementBtn.addEventListener(\"click\", game_1.randomPlacement);\n    (0, game_1.startGame)();\n}\n\n\n//# sourceURL=webpack:///./src/UI/initialize/initializeDisplay.ts?");

/***/ }),

/***/ "./src/UI/initialize/initializeNewGame.ts":
/*!************************************************!*\
  !*** ./src/UI/initialize/initializeNewGame.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initializeNewGame = initializeNewGame;\n// import { updateCoordinats } from \"../../utils/game\";\nconst game_1 = __webpack_require__(/*! ../../utils/game */ \"./src/utils/game.ts\");\nconst drawShips_1 = __webpack_require__(/*! ../utils/drawShips */ \"./src/UI/utils/drawShips.ts\");\nfunction initializeNewGame() {\n    const newRoundBtn = document.querySelector(\".newRoundBtn\");\n    newRoundBtn.classList.add(\"active\");\n    const randomPlacementBtn = document.querySelector(\".placeShipsBtn\");\n    randomPlacementBtn.classList.add(\"active\");\n    const playerOneBoard = document.querySelector(\".playerOne\");\n    playerOneBoard.classList.remove(\"startShadow\");\n    const playerTwoBoard = document.querySelector(\".playerTwo\");\n    playerTwoBoard.classList.add(\"startShadow\");\n    const display = document.querySelector(\".display\");\n    display.textContent = \"Place your ships\";\n    const endMessage = document.querySelector(\".endGameBlock\");\n    endMessage.classList.remove(\"endGameSize\");\n    initializeDrag();\n}\nfunction initializeDrag() {\n    const boardEl = document.querySelector(\".playerOne\");\n    boardEl.addEventListener(\"click\", (e) => {\n        const target = e.target.closest(\".cell.ship\");\n        if (!target)\n            return;\n        const y = parseInt(target.dataset.row);\n        const x = parseInt(target.dataset.col);\n        const ship = game_1.playerOne.board.board[y][x];\n        if (!(ship && typeof ship === \"object\" && \"isVertical\" in ship))\n            return;\n        ship.isVertical = !ship.isVertical;\n        const shipCoordsArr = game_1.playerOne.board\n            .getShipCoord()\n            .find((coords) => coords.some(([cy, cx]) => cy === y && cx === x));\n        if (!shipCoordsArr)\n            return;\n        const [originY, originX] = shipCoordsArr[0];\n        // Удалить корабль с поля\n        game_1.playerOne.board.ships = game_1.playerOne.board.ships.filter((s) => s !== ship);\n        game_1.playerOne.board.shipCoord = game_1.playerOne.board.shipCoord.filter((coord) => coord.length === 0 || game_1.playerOne.board.board[coord[0][0]][coord[0][1]] !== ship);\n        for (const [cy, cx] of shipCoordsArr) {\n            if (game_1.playerOne.board.board[cy][cx] === ship) {\n                game_1.playerOne.board.board[cy][cx] = 0;\n            }\n        }\n        // Поставить с новой ориентацией\n        const success = game_1.playerOne.board.placeShip(ship, originX, originY, ship.isVertical);\n        // Если не получилось — вернуть обратно\n        if (!success) {\n            shipCoordsArr.forEach(([cy, cx]) => {\n                const cell = boardEl.querySelector(`[data-row=\"${cy}\"][data-col=\"${cx}\"]`);\n                if (cell) {\n                    if (!ship.isVertical) {\n                        cell.classList.add(\"shake-fail-vertical\");\n                        setTimeout(() => cell.classList.remove(\"shake-fail-vertical\"), 500);\n                    }\n                    else if (ship.isVertical) {\n                        cell.classList.add(\"shake-fail-non-vertical\");\n                        setTimeout(() => cell.classList.remove(\"shake-fail-non-vertical\"), 500);\n                    }\n                }\n            });\n            ship.isVertical = !ship.isVertical;\n            game_1.playerOne.board.placeShip(ship, originX, originY, ship.isVertical);\n        }\n        // Перерисовать\n        (0, drawShips_1.drawShips)(game_1.playerOne, null);\n    });\n    const playerCells = boardEl.querySelectorAll(\".cell.ship\");\n    playerCells.forEach((cell) => {\n        cell.draggable = true;\n    });\n    let draggedShipCells = [];\n    let originX = 0;\n    let originY = 0;\n    let isVertical;\n    let draggedShip = null;\n    let dragIndex;\n    let shipCoordsArr = [];\n    let dropSuccess = false;\n    const clearSurroundingArea = (oldCoords) => {\n        const directions = [\n            [-1, -1],\n            [-1, 0],\n            [-1, 1],\n            [0, -1],\n            [0, 1],\n            [1, -1],\n            [1, 0],\n            [1, 1],\n        ];\n        for (const coords of oldCoords) {\n            for (const [y, x] of coords) {\n                for (const [dy, dx] of directions) {\n                    const ny = y + dy;\n                    const nx = x + dx;\n                    if (ny >= 0 &&\n                        ny < game_1.playerOne.board.board.length &&\n                        nx >= 0 &&\n                        nx < game_1.playerOne.board.board[0].length &&\n                        typeof game_1.playerOne.board.board[ny][nx] !== \"object\") {\n                        game_1.playerOne.board.board[ny][nx] = 0;\n                    }\n                }\n            }\n        }\n    };\n    boardEl.addEventListener(\"dragstart\", (e) => {\n        dropSuccess = false;\n        const target = e.target;\n        const cell = target.closest(\".cell\");\n        if (!cell || !cell.classList.contains(\"ship\")) {\n            e.preventDefault();\n            return;\n        }\n        console.log(\"maybeShip\");\n        const y = parseInt(cell.dataset.row);\n        const x = parseInt(cell.dataset.col);\n        const maybeShip = game_1.playerOne.board.board[y][x];\n        if (!(maybeShip && typeof maybeShip === \"object\" && \"size\" in maybeShip))\n            return;\n        draggedShip = maybeShip;\n        isVertical = draggedShip.isVertical;\n        shipCoordsArr =\n            game_1.playerOne.board.getShipCoord().find((coords) => coords.some(([cy, cx]) => cy === y && cx === x)) || [];\n        if (shipCoordsArr.length === 0)\n            return;\n        dragIndex = shipCoordsArr.findIndex(([cy, cx]) => cy === y && cx === x);\n        originY = shipCoordsArr[0][0];\n        originX = shipCoordsArr[0][1];\n        draggedShipCells = [];\n        for (let i = 0; i < draggedShip.size; i++) {\n            const cy = isVertical ? originY + i : originY;\n            const cx = isVertical ? originX : originX + i;\n            const cell = boardEl.querySelector(`.cell.ship[data-row='${cy}'][data-col='${cx}']`);\n            if (!cell)\n                break;\n            draggedShipCells.push(cell);\n        }\n        draggedShipCells.forEach((c) => c.classList.add(\"selected\"));\n        shipCoordsArr.forEach(([cy, cx]) => boardEl.querySelector(`[data-row=\"${cy}\"][data-col=\"${cx}\"]`)?.classList.remove(\"ship\"));\n    });\n    boardEl.addEventListener(\"dragend\", () => {\n        if (!dropSuccess && draggedShip && shipCoordsArr.length) {\n            handleFail(shipCoordsArr, draggedShip);\n        }\n        draggedShipCells.forEach((c) => c.classList.remove(\"selected\"));\n        draggedShipCells = [];\n        draggedShip = null;\n        shipCoordsArr = [];\n        document.querySelectorAll(\".cell.highlight\").forEach((cell) => cell.classList.remove(\"highlight\"));\n    });\n    boardEl.addEventListener(\"dragover\", (e) => {\n        e.preventDefault();\n        const target = e.target;\n        if (!target)\n            return;\n        const cell = target.closest(\".cell\");\n        if (!cell)\n            return;\n        if (!draggedShip)\n            return;\n        const y = parseInt(cell.dataset.row);\n        const x = parseInt(cell.dataset.col);\n        const startY = isVertical ? y - dragIndex : y;\n        const startX = isVertical ? x : x - dragIndex;\n        for (let i = 0; i < draggedShip.size; i++) {\n            const cy = isVertical ? startY + i : startY;\n            const cx = isVertical ? startX : startX + i;\n            const cell = boardEl.querySelector(`[data-row=\"${cy}\"][data-col=\"${cx}\"]`);\n            cell?.classList.add(\"highlight\");\n        }\n    });\n    boardEl.addEventListener(\"dragleave\", () => {\n        document.querySelectorAll(\".cell.highlight\").forEach((cell) => cell.classList.remove(\"highlight\"));\n    });\n    boardEl.addEventListener(\"drop\", (e) => {\n        e.preventDefault();\n        const dropCell = e.target.closest(\".cell\");\n        if (!dropCell || !draggedShip || draggedShipCells.length === 0) {\n            handleFail(shipCoordsArr, draggedShip);\n            boardEl.dispatchEvent(new DragEvent(\"dragend\"));\n            return;\n        }\n        const dropY = parseInt(dropCell.dataset.row);\n        const dropX = parseInt(dropCell.dataset.col);\n        if (dropX === originX && dropY === originY)\n            return;\n        const startY = isVertical ? dropY - dragIndex : dropY;\n        const startX = isVertical ? dropX : dropX - dragIndex;\n        draggedShipCells.forEach((cell) => cell.classList.remove(\"ship\"));\n        const allCoords = game_1.playerOne.board.getShipCoord();\n        game_1.playerOne.board.ships = game_1.playerOne.board.ships.filter((s) => s !== draggedShip);\n        game_1.playerOne.board.shipCoord = game_1.playerOne.board.shipCoord.filter((coord) => coord.length === 0 || game_1.playerOne.board.board[coord[0][0]][coord[0][1]] !== draggedShip);\n        // for (const shipCoords of oldCoords) {\n        for (const [y, x] of shipCoordsArr) {\n            if (game_1.playerOne.board.board[y][x] === draggedShip) {\n                game_1.playerOne.board.board[y][x] = 0;\n            }\n        }\n        // }\n        const success = game_1.playerOne.board.placeShip(draggedShip, startX, startY, isVertical);\n        if (success) {\n            handleSuccess(allCoords, draggedShip, startX, startY);\n        }\n        else {\n            handleFail(shipCoordsArr, draggedShip);\n        }\n        draggedShipCells.forEach((c) => c.classList.remove(\"selected\"));\n        draggedShipCells = [];\n        draggedShip = null;\n    });\n    function handleSuccess(oldCoords, draggedShip, startX, startY) {\n        clearSurroundingArea(oldCoords);\n        (0, drawShips_1.drawShips)(game_1.playerOne, null);\n        for (let i = 0; i < draggedShip.size; i++) {\n            const cy = isVertical ? startY + i : startY;\n            const cx = isVertical ? startX : startX + i;\n            boardEl.querySelector(`[data-row=\"${cy}\"][data-col=\"${cx}\"]`)?.classList.add(\"ship\");\n        }\n        dropSuccess = true;\n    }\n    function handleFail(oldCoords, draggedShip) {\n        oldCoords.forEach(([cy, cx]) => {\n            boardEl.querySelector(`[data-row=\"${cy}\"][data-col=\"${cx}\"]`)?.classList.add(\"ship\");\n        });\n        game_1.playerOne.board.placeShip(draggedShip, originX, originY, isVertical);\n        (0, drawShips_1.drawShips)(game_1.playerOne, null);\n        if (isVertical) {\n            draggedShipCells.forEach((cell) => {\n                cell.classList.add(\"ship\");\n                cell.classList.add(\"shake-fail-vertical\");\n                setTimeout(() => cell.classList.remove(\"shake-fail-vertical\"), 500);\n            });\n        }\n        else {\n            draggedShipCells.forEach((cell) => {\n                cell.classList.add(\"ship\");\n                cell.classList.add(\"shake-fail-non-vertical\");\n                setTimeout(() => cell.classList.remove(\"shake-fail-non-vertical\"), 500);\n            });\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/UI/initialize/initializeNewGame.ts?");

/***/ }),

/***/ "./src/UI/round.ts":
/*!*************************!*\
  !*** ./src/UI/round.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Round = Round;\nconst drawShips_1 = __webpack_require__(/*! ./utils/drawShips */ \"./src/UI/utils/drawShips.ts\");\nfunction Round(playerOne, playerTwo) {\n    let isFirstPlayer = true;\n    const boardOne = document.querySelector(\"#player-one-board\");\n    const boardTwo = document.querySelector(\"#player-two-board\");\n    initializeUI();\n    function initializeUI() {\n        const playerTwoBoard = document.querySelector(\".playerTwo\");\n        playerTwoBoard?.classList.remove(\"startShadow\");\n        const newRoundBtn = document.querySelector(\".newRoundBtn\");\n        newRoundBtn?.classList.remove(\"active\");\n        const randomPlacementBtn = document.querySelector(\".placeShipsBtn\");\n        randomPlacementBtn?.classList.remove(\"active\");\n        (0, drawShips_1.drawShips)(playerOne, playerTwo);\n        boardTwo?.addEventListener(\"click\", handleClick);\n        boardOne?.classList.add(\"nonClick\");\n        changeDisplay(\"Your turn\");\n    }\n    function computerAttack(Row = 0, Col = 0) {\n        changeDisplay(\"Computer is attacking...\");\n        // Ищем клетки кораблей, которые уже поражены\n        const hitShipCells = boardOne?.querySelectorAll(\".ship.hit\");\n        let targetFound = false;\n        if (hitShipCells && hitShipCells.length > 0) {\n            // Проходим по каждой пораженной клетке корабля\n            for (const hitCell of hitShipCells) {\n                const hitRow = parseInt(hitCell.getAttribute(\"data-row\"));\n                const hitCol = parseInt(hitCell.getAttribute(\"data-col\"));\n                const directions = [\n                    [-1, 0],\n                    [1, 0],\n                    [0, -1],\n                    [0, 1],\n                ];\n                for (const [dRow, dCol] of directions) {\n                    const newRow = hitRow + dRow;\n                    const newCol = hitCol + dCol;\n                    if (newRow >= 0 &&\n                        newRow < 10 &&\n                        newCol >= 0 &&\n                        newCol < 10 &&\n                        playerOne.board.hitMap[newRow][newCol] === false && // WHY IT ISN\"T WORK?????\n                        !boardOne?.querySelector(`[data-row=\"${newRow}\"][data-col=\"${newCol}\"]`)?.classList.contains(\"hit\")) {\n                        Row = newRow;\n                        Col = newCol;\n                        targetFound = true;\n                        console.log(playerOne.board.hitMap[newRow][newCol] === false);\n                        console.log({ newRow, newCol });\n                        break;\n                    }\n                }\n                if (targetFound)\n                    break;\n            }\n        }\n        if (!targetFound) {\n            while (playerOne.board.hitMap[Row][Col] !== false) {\n                Row = Math.floor(Math.random() * 10);\n                Col = Math.floor(Math.random() * 10);\n            }\n        }\n        const hitShip = playerOne.board.receiveAttack(Row, Col);\n        console.log(hitShip);\n        const cell = boardOne?.querySelector(`[data-row=\"${Row}\"][data-col=\"${Col}\"]`);\n        cell.classList.add(\"hit\");\n        if (hitShip)\n            checkStep(Row, Col, true);\n        else {\n            isFirstPlayer = !isFirstPlayer;\n            checkStep();\n            changeDisplay(\"Your turn\");\n        }\n    }\n    function changeDisplay(text) {\n        if (text.startsWith(\"Game Over\")) {\n            const endMessage = document.querySelector(\".endGameMessage\");\n            endMessage.textContent = text;\n            const endGameBlock = document.querySelector(\".endGameBlock\");\n            endGameBlock.classList.add(\"endGameSize\");\n            return;\n        }\n        const display = document.querySelector(\".display\");\n        display.textContent = text;\n    }\n    function checkStep(row, col, hit = false) {\n        if (isFirstPlayer) {\n            const markedCells = playerTwo.board.markSunkenShips();\n            markedCells.forEach(([y, x]) => {\n                const cell = boardTwo?.querySelector(`[data-row=\"${y}\"][data-col=\"${x}\"]`);\n                cell?.classList.add(\"hit\");\n            });\n            playerTwo.board.ships.forEach((ship, index) => {\n                if (ship.numberOfHits === ship.size) {\n                    playerTwo.board.shipCoord[index].forEach(([y, x]) => {\n                        const cell = boardTwo?.querySelector(`[data-row=\"${y}\"][data-col=\"${x}\"]`);\n                        cell?.classList.add(\"hitAll\");\n                    });\n                }\n            });\n            if (row != null && col != null) {\n                const markedDiagCells = playerTwo.board.markHitsAroundShip(row, col);\n                markedDiagCells.forEach(([row, col]) => {\n                    const elem = boardTwo?.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`);\n                    elem?.classList.add(\"hit\");\n                });\n            }\n        }\n        else {\n            const markedCells = playerOne.board.markSunkenShips();\n            markedCells.forEach(([y, x]) => {\n                const cell = boardOne?.querySelector(`[data-row=\"${y}\"][data-col=\"${x}\"]`);\n                cell?.classList.add(\"hit\");\n            });\n            if (row != null && col != null) {\n                const markedDiagCells = playerOne.board.markHitsAroundShip(row, col);\n                markedDiagCells.forEach(([row, col]) => {\n                    const elem = boardOne?.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`);\n                    elem?.classList.add(\"hit\");\n                });\n            }\n        }\n        if (playerOne.board.allShipsSunk() || playerTwo.board.allShipsSunk()) {\n            console.log(\"a?\");\n            handleEndGame(isFirstPlayer);\n            return;\n        }\n        if (isFirstPlayer) {\n            boardTwo?.classList.remove(\"shadow\");\n        }\n        else if (!isFirstPlayer) {\n            boardTwo?.classList.add(\"shadow\");\n            setTimeout(() => computerAttack(), hit ? 800 : 200);\n        }\n    }\n    function handleEndGame(isFirstPlayer) {\n        if (isFirstPlayer)\n            changeDisplay(\"Game Over. You win!\");\n        else\n            changeDisplay(\"Game Over. You lose!\");\n        const playerOneBoard = document.querySelector(\".playerOne\");\n        const playerTwoBoard = document.querySelector(\".playerTwo\");\n        const display = document.querySelector(\".display\");\n        boardTwo?.removeEventListener(\"click\", handleClick);\n        playerOneBoard?.classList.add(\"startShadow\");\n        playerTwoBoard?.classList.add(\"startShadow\");\n        display?.classList.add(\"startShadow\");\n    }\n    function handleClick(e) {\n        if (!isFirstPlayer)\n            return;\n        const cell = e.target;\n        if (cell.dataset.row === undefined || cell.dataset.col == undefined)\n            return;\n        if (cell?.classList.contains(\"hit\"))\n            return;\n        const col = Number(cell.dataset.col);\n        const row = Number(cell.dataset.row);\n        cell.classList.add(\"hit\");\n        const hitShip = playerTwo.board.receiveAttack(row, col);\n        if (!hitShip) {\n            isFirstPlayer = !isFirstPlayer;\n            checkStep();\n        }\n        else {\n            const markedCells = playerTwo.board.markHitsAroundShip(row, col);\n            markedCells.forEach(([row, col]) => {\n                const elem = boardTwo?.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`);\n                elem?.classList.add(\"hit\");\n            });\n            checkStep(row, col);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/UI/round.ts?");

/***/ }),

/***/ "./src/UI/utils/createGameboard.ts":
/*!*****************************************!*\
  !*** ./src/UI/utils/createGameboard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createGameBoard = createGameBoard;\nfunction createGameBoard(id) {\n    const board = document.querySelector(`#${id}`);\n    const table = document.createElement(\"table\");\n    table.className = \"board-table\";\n    for (let i = 0; i < 10; i++) {\n        const row = document.createElement(\"tr\");\n        for (let j = 0; j < 10; j++) {\n            const cell = document.createElement(\"td\");\n            cell.className = \"cell\";\n            cell.dataset.row = i.toString();\n            cell.dataset.col = j.toString();\n            row.appendChild(cell);\n        }\n        table.appendChild(row);\n    }\n    board.appendChild(table);\n}\n\n\n//# sourceURL=webpack:///./src/UI/utils/createGameboard.ts?");

/***/ }),

/***/ "./src/UI/utils/drawShips.ts":
/*!***********************************!*\
  !*** ./src/UI/utils/drawShips.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.drawShips = drawShips;\nfunction drawShips(playerOne, playerTwo) {\n    const boardOne = document.querySelector(`#${\"player-one-board\"}`);\n    const boardTwo = document.querySelector(`#${\"player-two-board\"}`);\n    document.querySelectorAll(\".cell\").forEach((cell) => cell.classList.remove(\"ship\", \"hit\", \"hitAll\"));\n    if (playerOne) {\n        const PlayerOneCoords = playerOne.board.getShipCoord();\n        PlayerOneCoords.forEach((shipCoords) => {\n            shipCoords.forEach(([y, x]) => {\n                const cell = boardOne?.querySelector(`[data-row=\"${y}\"][data-col=\"${x}\"]`);\n                cell?.classList.add(\"ship\");\n            });\n        });\n    }\n    if (playerTwo) {\n        const PlayerTwoCoords = playerTwo.board.getShipCoord();\n        PlayerTwoCoords.forEach((shipCoords) => {\n            shipCoords.forEach(([y, x]) => {\n                const cell = boardTwo?.querySelector(`[data-row=\"${y}\"][data-col=\"${x}\"]`);\n                cell?.classList.add(\"ship\");\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/UI/utils/drawShips.ts?");

/***/ }),

/***/ "./src/assets/fonts/the_bomb_sound-webfont.woff":
/*!******************************************************!*\
  !*** ./src/assets/fonts/the_bomb_sound-webfont.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab620ba1845319ba532d.woff\";\n\n//# sourceURL=webpack:///./src/assets/fonts/the_bomb_sound-webfont.woff?");

/***/ }),

/***/ "./src/assets/fonts/the_bomb_sound-webfont.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/the_bomb_sound-webfont.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a957d0922dda6cacc1d7.woff2\";\n\n//# sourceURL=webpack:///./src/assets/fonts/the_bomb_sound-webfont.woff2?");

/***/ }),

/***/ "./src/classes/gameboard.ts":
/*!**********************************!*\
  !*** ./src/classes/gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Gameboard = void 0;\nclass Gameboard {\n    board;\n    hitMap;\n    ships;\n    shipCoord;\n    constructor() {\n        this.board = Array(10)\n            .fill(0)\n            .map(() => Array(10).fill(0));\n        this.hitMap = Array(10)\n            .fill(false)\n            .map(() => Array(10).fill(false));\n        this.ships = [];\n        this.shipCoord = [];\n    }\n    placeShip(ship, coordinateX, coordinateY, isVertical) {\n        ship.isVertical = isVertical;\n        if (coordinateX < 0 || coordinateY < 0) {\n            return false;\n        }\n        if (isVertical && coordinateY + ship.size - 1 > 9) {\n            return false;\n        }\n        else if (!isVertical && coordinateX + ship.size - 1 > 9) {\n            return false;\n        }\n        for (let i = 0; i < ship.size; i++) {\n            const x = isVertical ? coordinateX : coordinateX + i; // col\n            const y = isVertical ? coordinateY + i : coordinateY; // row\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    const nx = x + dx;\n                    const ny = y + dy;\n                    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {\n                        if (typeof this.board[ny][nx] === \"object\") {\n                            // [row][col]\n                            return false;\n                        }\n                    }\n                }\n            }\n        }\n        const coords = [];\n        for (let i = 0; i < ship.size; i++) {\n            const x = isVertical ? coordinateX : coordinateX + i; // col\n            const y = isVertical ? coordinateY + i : coordinateY; // row\n            this.board[y][x] = ship; // [row][col]\n            coords.push([y, x]);\n        }\n        for (let i = 0; i < ship.size; i++) {\n            const x = isVertical ? coordinateX : coordinateX + i; // col\n            const y = isVertical ? coordinateY + i : coordinateY; // row\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    const nx = x + dx;\n                    const ny = y + dy;\n                    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {\n                        if (this.board[ny][nx] === 0) {\n                            // [row][col]\n                            this.board[ny][nx] = 1;\n                        }\n                    }\n                }\n            }\n        }\n        this.ships.push(ship);\n        this.shipCoord.push(coords);\n        return true;\n    }\n    placeShips(player, playerShips) {\n        const shipsArr = Object.values(playerShips);\n        for (let i = 0; i < shipsArr.length; i++) {\n            let isPlace = false;\n            while (!isPlace) {\n                const randomCol = Math.floor(Math.random() * 10);\n                const randomRow = Math.floor(Math.random() * 10);\n                const vertical = Math.random() < 0.5;\n                const Coord = [randomCol, randomRow];\n                isPlace = player.board.placeShip(shipsArr[i], Coord[0], Coord[1], vertical);\n            }\n        }\n    }\n    receiveAttack(coordinateX, coordinateY) {\n        const boardCell = this.board[coordinateX][coordinateY];\n        if (this.hitMap[coordinateX][coordinateY] === true) {\n            return false;\n        }\n        else if (boardCell === 0) {\n            this.hitMap[coordinateX][coordinateY] = true;\n            return false;\n        }\n        else if (typeof boardCell === \"object\") {\n            this.hitMap[coordinateX][coordinateY] = true;\n            boardCell.hit();\n            return true;\n        }\n    }\n    allShipsSunk() {\n        for (let i = 0; i < this.board.length; i++) {\n            for (let j = 0; j < this.board.length; j++) {\n                if (typeof this.board[i][j] === \"object\" && this.hitMap[i][j] === false) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    getShipCoord() {\n        return this.shipCoord;\n    }\n    markHitsAroundShip(row, col) {\n        const newlyMarkedCells = [];\n        const deltas = [\n            [1, 1],\n            [1, -1],\n            [-1, -1],\n            [-1, 1],\n        ];\n        for (const [dr, dc] of deltas) {\n            const r = row + dr;\n            const c = col + dc;\n            if (r >= 0 && r < this.board.length && c >= 0 && c < this.board[0].length) {\n                this.hitMap[r][c] = true;\n                newlyMarkedCells.push([r, c]);\n            }\n        }\n        return newlyMarkedCells;\n    }\n    markSunkenShips() {\n        const newlyMarkedCells = [];\n        for (let i = 0; i < this.ships.length; i++) {\n            const ship = this.ships[i];\n            if (ship.numberOfHits === ship.size) {\n                const coords = this.shipCoord[i];\n                for (const [y, x] of coords) {\n                    for (let dx = -1; dx <= 1; dx++) {\n                        for (let dy = -1; dy <= 1; dy++) {\n                            const nx = x + dx;\n                            const ny = y + dy;\n                            if (nx >= 0 &&\n                                nx < 10 &&\n                                ny >= 0 &&\n                                ny < 10 &&\n                                typeof this.board[ny][nx] !== \"object\" &&\n                                !this.hitMap[ny][nx]) {\n                                this.hitMap[ny][nx] = true;\n                                newlyMarkedCells.push([ny, nx]);\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        return newlyMarkedCells;\n    }\n    isSunkAt(row, col) {\n        const cell = this.board[row][col];\n        if (typeof cell === \"object\") {\n            const ship = cell;\n            return ship.numberOfHits === ship.size;\n        }\n        return false;\n    }\n    cleanBoard() {\n        this.board = Array(10)\n            .fill(0)\n            .map(() => Array(10).fill(0));\n        this.hitMap = Array(10)\n            .fill(false)\n            .map(() => Array(10).fill(false));\n        this.ships = [];\n        this.shipCoord = [];\n    }\n}\nexports.Gameboard = Gameboard;\n\n\n//# sourceURL=webpack:///./src/classes/gameboard.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst gameboard_1 = __webpack_require__(/*! ./gameboard */ \"./src/classes/gameboard.ts\");\nconst ship_1 = __importDefault(__webpack_require__(/*! ./ship */ \"./src/classes/ship.ts\"));\nclass Player {\n    type;\n    board;\n    constructor(type) {\n        this.type = type;\n        this.board = new gameboard_1.Gameboard();\n    }\n    createShips() {\n        return {\n            battleship: new ship_1.default(4),\n            cruiser_1: new ship_1.default(3),\n            cruiser_2: new ship_1.default(3),\n            submarine_1: new ship_1.default(2),\n            submarine_2: new ship_1.default(2),\n            submarine_3: new ship_1.default(2),\n            destroyer_1: new ship_1.default(1),\n            destroyer_2: new ship_1.default(1),\n            destroyer_3: new ship_1.default(1),\n            destroyer_4: new ship_1.default(1),\n        };\n    }\n}\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack:///./src/classes/player.ts?");

/***/ }),

/***/ "./src/classes/ship.ts":
/*!*****************************!*\
  !*** ./src/classes/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Ship {\n    size;\n    numberOfHits;\n    isVertical;\n    constructor(size, numberOfHits = 0) {\n        this.size = size;\n        this.numberOfHits = numberOfHits;\n        this.isVertical = false;\n    }\n    hit() {\n        return ++this.numberOfHits;\n    }\n    checkIsSunk() {\n        return this.numberOfHits >= this.size;\n    }\n}\nexports[\"default\"] = Ship;\n\n\n//# sourceURL=webpack:///./src/classes/ship.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nconst initializeDisplay_1 = __webpack_require__(/*! ./UI/initialize/initializeDisplay */ \"./src/UI/initialize/initializeDisplay.ts\");\n(0, initializeDisplay_1.initializeDisplay)();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/utils/game.ts":
/*!***************************!*\
  !*** ./src/utils/game.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.playerTwo = exports.playerOne = void 0;\nexports.startGame = startGame;\nexports.startRound = startRound;\nexports.randomPlacement = randomPlacement;\nconst player_1 = __importDefault(__webpack_require__(/*! ../classes/player */ \"./src/classes/player.ts\"));\nconst drawShips_1 = __webpack_require__(/*! ../UI/utils/drawShips */ \"./src/UI/utils/drawShips.ts\");\nconst round_1 = __webpack_require__(/*! ../UI/round */ \"./src/UI/round.ts\");\nconst initializeNewGame_1 = __webpack_require__(/*! ../UI/initialize/initializeNewGame */ \"./src/UI/initialize/initializeNewGame.ts\");\n// import Ship from \"../classes/ship\";\nexports.playerOne = new player_1.default(\"real\");\nexports.playerTwo = new player_1.default(\"computer\");\nfunction startGame() {\n    exports.playerOne.board.cleanBoard();\n    exports.playerTwo.board.cleanBoard();\n    exports.playerOne.board.placeShips(exports.playerOne, exports.playerOne.createShips());\n    exports.playerTwo.board.placeShips(exports.playerTwo, exports.playerOne.createShips());\n    (0, drawShips_1.drawShips)(exports.playerOne, exports.playerTwo);\n    (0, initializeNewGame_1.initializeNewGame)();\n}\nfunction startRound() {\n    (0, round_1.Round)(exports.playerOne, exports.playerTwo);\n}\nfunction randomPlacement() {\n    const playerOneShips = exports.playerOne.createShips();\n    exports.playerOne.board.cleanBoard();\n    exports.playerOne.board.placeShips(exports.playerOne, playerOneShips);\n    (0, drawShips_1.drawShips)(exports.playerOne, exports.playerTwo);\n}\n// export function updateCoordinats(oldX: number, oldY: number, newX: number, newY: number) {\n//   const ship = playerOne.board.board[oldX][oldY];\n//   if (typeof ship === \"object\") {\n//     playerOne.board.placeShip(ship, newX, newY, true);\n//   }\n//   drawShips(playerOne, playerTwo);\n// }\n\n\n//# sourceURL=webpack:///./src/utils/game.ts?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;