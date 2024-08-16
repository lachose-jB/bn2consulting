/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controleJs/contact/contactController.js":
/*!*****************************************************!*\
  !*** ./src/controleJs/contact/contactController.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendEmail: () => (/* binding */ sendEmail),
/* harmony export */   whatsappLink: () => (/* binding */ whatsappLink)
/* harmony export */ });
// contactController.js

var getWhatsAppLink = function getWhatsAppLink(phoneNumber) {
  var formattedNumber = encodeURIComponent(phoneNumber);
  return "https://wa.me/".concat(formattedNumber);
};
var phoneNumber = '1234567890';
var whatsappLink = getWhatsAppLink(phoneNumber);
var sendEmail = function sendEmail(from, to, subject, body) {
  return Email.send({
    SecureToken: "05af781f-2222-4b36-9365-22dccb69932e",
    To: 'jadjahouisso@gmail.com',
    From: from,
    Subject: subject,
    Body: body
  }).then(function (message) {
    return alert(message);
  })["catch"](function (error) {
    console.error('Error sending email:', error);
    throw error;
  });
};


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
/*!******************************************************!*\
  !*** ./public/assets/frontJs/contact/contactMain.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contactController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @contactController */ "./src/controleJs/contact/contactController.js");
 // Ajustez le chemin selon votre structure de projet

document.addEventListener('DOMContentLoaded', function () {
  // Gestionnaire d'événement pour le bouton "Nous contacter"
  var contactButton = document.getElementById('contactNous');
  if (contactButton) {
    contactButton.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = _contactController__WEBPACK_IMPORTED_MODULE_0__.whatsappLink;
    });
  }

  // Gestionnaire d'événement pour le formulaire de contact
  var form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du formulaire

      // Récupérer les données du formulaire
      var formData = new FormData(form);
      var data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Envoyer l'e-mail via Elastic Email
      (0,_contactController__WEBPACK_IMPORTED_MODULE_0__.sendEmail)(data.email,
      // Utilisez l'adresse de l'utilisateur comme expéditeur
      data.subject, // Sujet de l'e-mail
      "Message from ".concat(data.name, ": ").concat(data.message) // Corps de l'e-mail
      ).then(function () {
        // Réinitialiser seulement les champs du formulaire après un envoi réussi
        form.reset(); // Réinitialiser tous les champs du formulaire

        alert('Message sent successfully!');
      })["catch"](function (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
    });
  }
});
/******/ })()
;
//# sourceMappingURL=contact.bundle.js.map