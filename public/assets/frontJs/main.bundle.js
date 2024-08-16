/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controleJs/data.js":
/*!********************************!*\
  !*** ./src/controleJs/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var datas = {
  clients: 12345,
  partenaires: 6789,
  prixGagner: 101112,
  done: 'Données chargées avec succès'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (datas);

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
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./public/assets/frontJs/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data */ "./src/controleJs/data.js");


// Fonction pour faire défiler le compteur
function startCounter(element) {
  var target = parseInt(element.textContent, 10);
  var count = 0;
  var duration = 2000; // Durée en millisecondes
  var delay = 10; // Délai entre les incréments en millisecondes
  var increment = target / (duration / delay);
  function updateCounter() {
    if (count < target) {
      count = Math.min(count + increment, target);
      element.textContent = Math.floor(count);
      setTimeout(updateCounter, delay);
    } else {
      element.textContent = target;
    }
  }
  updateCounter();
}
document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript is working!');
  // Afficher les autres données dans les éléments respectifs
  document.getElementById('clients').textContent = _data__WEBPACK_IMPORTED_MODULE_0__["default"].clients;
  document.getElementById('partenaires').textContent = _data__WEBPACK_IMPORTED_MODULE_0__["default"].partenaires;
  document.getElementById('PrixGagner').textContent = _data__WEBPACK_IMPORTED_MODULE_0__["default"].prixGagner;

  // Lancer le compteur pour les éléments avec data-toggle="counter-up"
  document.querySelectorAll('[data-toggle="counter-up"]').forEach(function (counter) {
    startCounter(counter);
  });
});
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map