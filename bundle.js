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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    --primary-color: rgba(0, 51, 102, 0.4);\r\n    --text-color: rgba(0, 51, 102);\r\n    --cell-size: 35px;\r\n    --gap-size: 1px;\r\n    --border-color: rgba(0, 51, 102, 0.8);\r\n}\r\n.container {\r\n    /* min-height: 100vh; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.playerOne, .playerTwo {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* Новый контейнер для выравнивания доски и заголовков */\r\n.board-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.gameBoard {\r\n    display: inline-block;\r\n    background-color: white;\r\n    padding: 0;\r\n}\r\n\r\n/* Стили для таблицы */\r\n.board-table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border: 2px solid var(--border-color);\r\n}\r\n\r\n/* Стиль для ячеек */\r\n.cell {\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    background-color: white;\r\n    border: var(--gap-size) solid var(--primary-color);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    padding: 0; /* Убираем padding для точного соответствия размеру */\r\n}\r\n\r\n.shadow {\r\n    position: relative;\r\n}\r\n\r\n.shadow::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(0, 0, 0, .05);\r\n    z-index: 1;\r\n}\r\n\r\n#player-one-board .cell.ship {\r\n    background-color: var(--primary-color);\r\n    /* background-color: rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.cell.ship.hit::after {\r\n    font-family: Verdana, sans-serif;\r\n    content: '╳';\r\n    font-size: 22px;\r\n    color: red;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.hit::after {\r\n    content: '•';\r\n    font-size: 26px;\r\n    color: black;\r\n    position: relative;\r\n    z-index: 2;\r\n    display: block;\r\n}\r\n\r\n/* Board headers and row labels */\r\n.board {\r\n    display: flex;\r\n    align-items: flex-start; /* Выравнивание по верхнему краю */\r\n}\r\n\r\n.board-header {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, var(--cell-size));\r\n    margin-left: var(--cell-size); /* Отступ для выравнивания с метками строк */\r\n}\r\n\r\n.header-cell {\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    color: var(--text-color);\r\n}\r\n\r\n.board-row-labels {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, var(--cell-size));\r\n    width: var(--cell-size);\r\n}\r\n\r\n.row-label {\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    color: var(--text-color);\r\n}\r\n\r\n.title {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: var(--text-color);\r\n}\r\n\r\n.display {\r\n    display: flex;\r\n    justify-self: center;\r\n    align-self: center;\r\n    justify-content: center;\r\n    padding: 10px 30px;\r\n    margin: 10px auto 40px auto;\r\n    width: 240px;\r\n    border: 1px solid var(--primary-color);\r\n    border-radius: 5px;\r\n}\r\n\r\n.newRoundBtn {\r\n    display: flex;\r\n    justify-self: center;\r\n    align-self: center;\r\n    justify-content: center;\r\n    padding: 10px 15px;\r\n    margin-top: 20px;\r\n    width: 110px;\r\n    border: 1px solid var(--primary-color);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

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

/***/ "./src/UI/DOM.ts":
/*!***********************!*\
  !*** ./src/UI/DOM.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Round = Round;\nfunction Round(playerOne, playerTwo, playerOneShips, playerTwoShips) {\n    let isFirstPlayer = true;\n    const boardOne = document.querySelector(`#${'player-one-board'}`);\n    const boardTwo = document.querySelector(`#${'player-two-board'}`);\n    const newRoundBtn = document.querySelector(\".newRoundBtn\");\n    if (boardOne)\n        boardOne.textContent = \"\";\n    if (boardTwo)\n        boardTwo.textContent = \"\";\n    function createGameBoard(id) {\n        const board = document.querySelector(`#${id}`);\n        // Создаем таблицу вместо grid для более предсказуемых границ\n        const table = document.createElement('table');\n        table.className = 'board-table';\n        for (let i = 0; i < 10; i++) {\n            const row = document.createElement('tr');\n            for (let j = 0; j < 10; j++) {\n                const cell = document.createElement('td');\n                cell.className = 'cell';\n                cell.dataset.row = i.toString();\n                cell.dataset.col = j.toString();\n                row.appendChild(cell);\n            }\n            table.appendChild(row);\n        }\n        board.appendChild(table);\n    }\n    function placeShips(player, playerShips) {\n        const shipsArr = [] = Object.values(playerShips);\n        for (let i = 0; i < 5; i++) {\n            let isPlace = false;\n            while (!isPlace) {\n                console.log(playerShips[1]);\n                const randomCol = Math.floor(Math.random() * 10);\n                const randomRow = Math.floor(Math.random() * 10);\n                const vertical = Math.random() < 0.5;\n                const Coord = [randomCol, randomRow];\n                isPlace = player.board.placeShip(shipsArr[i], Coord[0], Coord[1], vertical);\n            }\n        }\n        // playerTwo.board.placeShip(playerTwoShips.carrier, 1, 3)\n        // playerTwo.board.placeShip(playerTwoShips.battleship, 3, 3)\n        // playerTwo.board.placeShip(playerTwoShips.cruiser, 5, 3)\n        // playerTwo.board.placeShip(playerTwoShips.submarine, 7, 3)\n        // playerTwo.board.placeShip(playerTwoShips.destroyer, 9, 3)\n    }\n    placeShips(playerOne, playerOneShips);\n    placeShips(playerTwo, playerTwoShips);\n    function drawShips() {\n        const PlayerOneCoords = playerOne.board.getShipCoord();\n        PlayerOneCoords.forEach(([x, y]) => {\n            const cell = boardOne?.querySelector(`[data-row=\"${x}\"][data-col=\"${y}\"]`);\n            cell?.classList.add('ship');\n        });\n        const PlayerTwoCoords = playerTwo.board.getShipCoord();\n        PlayerTwoCoords.forEach(([x, y]) => {\n            const cell = boardTwo?.querySelector(`[data-row=\"${x}\"][data-col=\"${y}\"]`);\n            cell?.classList.add('ship');\n        });\n    }\n    function computerAttack(Row = null, Col = null) {\n        changeDisplay(\"Computer is attacking...\");\n        setTimeout(() => {\n            if (Row === null || Col === null) {\n                Row = Math.floor(Math.random() * 10);\n                Col = Math.floor(Math.random() * 10);\n            }\n            else {\n                const directions = [\n                    { dx: -1, dy: 0 },\n                    { dx: 1, dy: 0 },\n                    { dx: 0, dy: -1 },\n                    { dx: 0, dy: 1 }\n                ];\n                const randomDirection = directions[Math.floor(Math.random() * directions.length)];\n                Row = Row + randomDirection.dx;\n                Col = Col + randomDirection.dy;\n                if (Row < 0 || Row > 9 || Col < 0 || Col > 9) {\n                    return computerAttack(Row, Col);\n                }\n            }\n            const cell = boardOne?.querySelector(`[data-row=\"${Row}\"][data-col=\"${Col}\"]`);\n            if (cell?.classList.contains(\"hit\")) {\n                computerAttack(Row, Col);\n            }\n            else {\n                cell?.classList.add(\"hit\");\n                const hitShip = playerOne.board.receiveAttack(Row, Col);\n                if (hitShip) {\n                    checkStep();\n                    return computerAttack(Row, Col);\n                }\n                else {\n                    isFirstPlayer = !isFirstPlayer;\n                    checkStep();\n                    changeDisplay(\"Your turn\");\n                }\n            }\n        }, 500);\n    }\n    function changeDisplay(text) {\n        const display = document.querySelector('.display');\n        display.textContent = text;\n    }\n    function checkStep() {\n        if (isFirstPlayer) {\n            const markedCells = playerTwo.board.markSunkenShips();\n            markedCells.forEach(([x, y]) => {\n                const cell = boardTwo?.querySelector(`[data-row=\"${x}\"][data-col=\"${y}\"]`);\n                cell?.classList.add('hit');\n            });\n        }\n        else if (!isFirstPlayer) {\n            const markedCells = playerOne.board.markSunkenShips();\n            markedCells.forEach(([x, y]) => {\n                const cell = boardOne?.querySelector(`[data-row=\"${x}\"][data-col=\"${y}\"]`);\n                cell?.classList.add('hit');\n            });\n        }\n        if (playerOne.board.allShipsSunk()) {\n            boardTwo?.removeEventListener('click', handleTwoClick);\n            changeDisplay(\"Game Over. You lose\");\n            return;\n        }\n        else if (playerTwo.board.allShipsSunk()) {\n            boardTwo?.removeEventListener('click', handleTwoClick);\n            changeDisplay(\"Game Over. You win\");\n            return;\n        }\n        if (isFirstPlayer) {\n            // boardOne?.classList.add('shadow')\n            boardTwo?.classList.remove('shadow');\n        }\n        else if (!isFirstPlayer) {\n            boardTwo?.classList.add('shadow');\n            // boardOne?.classList.remove('shadow')\n            computerAttack();\n        }\n    }\n    createGameBoard('player-one-board');\n    createGameBoard('player-two-board');\n    drawShips();\n    checkStep();\n    // function handleOneClick(e: Event) {\n    //     if (isFirstPlayer) return;\n    //     const cell = e.target as HTMLElement\n    //     const col = Number(cell.dataset.col);\n    //     const row = Number(cell.dataset.row);\n    //     cell.classList.add('hit');\n    //     playerOne.board.receiveAttack(row, col)\n    //     isFirstPlayer = !isFirstPlayer\n    //     checkStep()\n    // }\n    function handleTwoClick(e) {\n        if (newRoundBtn)\n            newRoundBtn.textContent = \"New Round\";\n        if (!isFirstPlayer)\n            return;\n        const cell = e.target;\n        if (cell.dataset.row === undefined || cell.dataset.col == undefined)\n            return;\n        if (cell?.classList.contains(\"hit\")) {\n            return;\n        }\n        const col = Number(cell.dataset.col);\n        const row = Number(cell.dataset.row);\n        cell.classList.add('hit');\n        const hitShip = playerTwo.board.receiveAttack(row, col);\n        if (!hitShip) {\n            isFirstPlayer = !isFirstPlayer;\n            checkStep();\n        }\n        else {\n            checkStep();\n        }\n    }\n    // boardOne?.addEventListener('click', handleOneClick)\n    boardTwo?.addEventListener('click', handleTwoClick);\n}\n\n\n//# sourceURL=webpack:///./src/UI/DOM.ts?");

/***/ }),

/***/ "./src/classes/gameboard.ts":
/*!**********************************!*\
  !*** ./src/classes/gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Gameboard {\n    board;\n    hitMap;\n    ships;\n    shipCoord;\n    constructor() {\n        this.board = Array(10).fill(0).map(() => Array(10).fill(0));\n        this.hitMap = Array(10).fill(false).map(() => Array(10).fill(false));\n        this.ships = [];\n        this.shipCoord = [];\n    }\n    placeShip(ship, coordinateX, coordinateY, isVertical = true) {\n        if (coordinateX < 0 || coordinateY < 0) {\n            return false;\n        }\n        if (isVertical === true && coordinateY + ship.size > 9) {\n            return false;\n        }\n        else if (isVertical === false && coordinateX + ship.size > 9) {\n            return false;\n        }\n        for (let i = 0; i < ship.size; i++) {\n            const x = isVertical ? coordinateX : coordinateX + i;\n            const y = isVertical ? coordinateY + i : coordinateY;\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    const nx = x + dx;\n                    const ny = y + dy;\n                    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {\n                        if (typeof this.board[nx][ny] === 'object') {\n                            return false;\n                        }\n                    }\n                }\n            }\n        }\n        let coords = [];\n        for (let i = 0; i < ship.size; i++) {\n            const x = isVertical ? coordinateX : coordinateX + i;\n            const y = isVertical ? coordinateY + i : coordinateY;\n            this.board[x][y] = ship;\n            coords.push([x, y]);\n        }\n        for (let i = 0; i < ship.size; i++) {\n            const x = isVertical ? coordinateX : coordinateX + i;\n            const y = isVertical ? coordinateY + i : coordinateY;\n            for (let dx = -1; dx <= 1; dx++) {\n                for (let dy = -1; dy <= 1; dy++) {\n                    const nx = x + dx;\n                    const ny = y + dy;\n                    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {\n                        if (this.board[nx][ny] === 0) {\n                            this.board[nx][ny] = 1;\n                        }\n                    }\n                }\n            }\n        }\n        this.ships.push(ship);\n        this.shipCoord.push(coords);\n        return this.board[coordinateX][coordinateY] = ship;\n    }\n    receiveAttack(coordinateX, coordinateY) {\n        const boardCell = this.board[coordinateX][coordinateY];\n        if (this.hitMap[coordinateX][coordinateY] === true) {\n            return false;\n        }\n        else if (boardCell === 0) {\n            this.hitMap[coordinateX][coordinateY] = true;\n            return false;\n        }\n        else if (typeof (boardCell) === \"object\") {\n            this.hitMap[coordinateX][coordinateY] = true;\n            boardCell.hit();\n            return true;\n        }\n    }\n    allShipsSunk() {\n        for (let i = 0; i < this.board.length; i++) {\n            for (let j = 0; j < this.board.length; j++) {\n                if (typeof (this.board[i][j]) === 'object' && this.hitMap[i][j] === false) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    getShipCoord() {\n        return this.shipCoord.flat();\n    }\n    markSunkenShips() {\n        const newlyMarkedCells = [];\n        for (let i = 0; i < this.ships.length; i++) {\n            const ship = this.ships[i];\n            if (ship.numberOfHits === ship.size) {\n                const coords = this.shipCoord[i];\n                for (const [x, y] of coords) {\n                    for (let dx = -1; dx <= 1; dx++) {\n                        for (let dy = -1; dy <= 1; dy++) {\n                            const nx = x + dx;\n                            const ny = y + dy;\n                            if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10\n                                && typeof this.board[nx][ny] !== \"object\"\n                                && !this.hitMap[nx][ny]) {\n                                this.hitMap[nx][ny] = true;\n                                newlyMarkedCells.push([nx, ny]);\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        return newlyMarkedCells;\n    }\n    isSunkAt(row, col) {\n        // Находим корабль по координатам\n        const cell = this.board[row][col];\n        // Проверяем, есть ли корабль в этой клетке\n        if (typeof cell === 'object') {\n            const ship = cell;\n            // Проверяем потоплен ли корабль (количество попаданий равно размеру)\n            return ship.numberOfHits === ship.size;\n        }\n        return false;\n    }\n}\nexports[\"default\"] = Gameboard;\n\n\n//# sourceURL=webpack:///./src/classes/gameboard.ts?");

/***/ }),

/***/ "./src/classes/player.ts":
/*!*******************************!*\
  !*** ./src/classes/player.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst gameboard_1 = __importDefault(__webpack_require__(/*! ./gameboard */ \"./src/classes/gameboard.ts\"));\nconst ship_1 = __importDefault(__webpack_require__(/*! ./ship */ \"./src/classes/ship.ts\"));\nclass Player {\n    type;\n    board;\n    constructor(type) {\n        this.type = type;\n        this.board = new gameboard_1.default();\n    }\n    createShips() {\n        return {\n            carrier: new ship_1.default(5),\n            battleship: new ship_1.default(4),\n            cruiser: new ship_1.default(3),\n            submarine: new ship_1.default(2),\n            destroyer: new ship_1.default(1)\n        };\n    }\n}\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack:///./src/classes/player.ts?");

/***/ }),

/***/ "./src/classes/ship.ts":
/*!*****************************!*\
  !*** ./src/classes/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Ship {\n    size;\n    numberOfHits;\n    constructor(size, numberOfHits = 0) {\n        this.size = size;\n        this.numberOfHits = numberOfHits;\n    }\n    hit() {\n        return ++this.numberOfHits;\n    }\n    checkIsSunk() {\n        return this.numberOfHits >= this.size;\n    }\n}\nexports[\"default\"] = Ship;\n\n\n//# sourceURL=webpack:///./src/classes/ship.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst player_1 = __importDefault(__webpack_require__(/*! ./classes/player */ \"./src/classes/player.ts\"));\nconst DOM_1 = __webpack_require__(/*! ./UI/DOM */ \"./src/UI/DOM.ts\");\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nconst playerOne = new player_1.default(\"real\");\nconst playerTwo = new player_1.default(\"real\");\nconst playerOneShips = playerOne.createShips();\nconst playerTwoShips = playerTwo.createShips();\nconsole.log(playerOneShips['carrier']);\n(0, DOM_1.Round)(playerOne, playerTwo, playerOneShips, playerTwoShips);\nconst newRoundBtn = document.querySelector(\".newRoundBtn\");\nif (newRoundBtn)\n    newRoundBtn.textContent = \"Random Placement\";\nnewRoundBtn?.addEventListener('click', () => {\n    const playerOne = new player_1.default(\"real\");\n    const playerTwo = new player_1.default(\"real\");\n    const playerOneShips = playerOne.createShips();\n    const playerTwoShips = playerTwo.createShips();\n    (0, DOM_1.Round)(playerOne, playerTwo, playerOneShips, playerTwoShips);\n    console.log(\"click\");\n    if (newRoundBtn)\n        newRoundBtn.textContent = \"Random Placement\";\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;