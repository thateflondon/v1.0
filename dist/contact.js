/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sections/contact/contact.html":
/*!*******************************************!*\
  !*** ./src/sections/contact/contact.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/logo.png */ "./assets/images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./contact.css */ "./src/sections/contact/contact.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/icons/home.png */ "./assets/images/icons/home.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../scripts/date.js */ "./scripts/date.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../scripts/kursor.js */ "./scripts/kursor.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Contact Me</title>\n    <meta name=\"description\" content=\"Contact form.\" />\n    <meta\n      name=\"keywords\"\n      content=\"Jerry, Frederic, portfolio, contact, form, design, web, development\"\n    />\n    <!-- <link rel=\"author\" href=\"https://plus.google.com/{{googlePlusId}}\" /> -->\n    <link rel=\"canonical\" href=\"./contact.html\" />\n\n    <meta property=\"og:url\" content=\"./contact.html\" />\n    <meta property=\"og:image\" content=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n    <meta property=\"og:description\" content=\"Contact form\" />\n    <meta property=\"og:title\" content=\"Contact Me\" />\n    <meta property=\"og:site_name\" content=\"Jerry Frederic\" />\n    <meta property=\"og:see_also\" content=\"../../../index.html\" />\n\n    <meta name=\"twitter:card\" content=\"summary\" />\n    <meta name=\"twitter:url\" content=\"./contact.html\" />\n    <meta name=\"twitter:title\" content=\"Contact Me\" />\n    <meta name=\"twitter:description\" content=\"Contact form\" />\n    <meta name=\"twitter:image\" content=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" />\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/kursor/dist/kursor.css\" />\n  </head>\n  <body>\n    <!-- home button  -->\n    <div id=\"home-button\">\n      <a href=\"./index.html\">\n        <img\n          style=\"width: 30px; height: 30px\"\n          src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n          alt=\"Home\"\n        />\n      </a>\n    </div>\n    <!-- home button end -->\n\n    <!-- contact form  -->\n    <div id=\"app\">\n      <!-- form container  -->\n      <div class=\"form-container\" style=\"height: 100vh\">\n        <div class=\"form-title\"></div>\n        <form\n          id=\"fs-frm\"\n          name=\"simple-contact-form\"\n          accept-charset=\"utf-8\"\n          action=\"https://formspree.io/f/xrgrklgd\"\n          method=\"POST\"\n        >\n          <fieldset id=\"fs-frm-inputs\">\n            <label for=\"first-name\">First name</label>\n            <input\n              type=\"text\"\n              name=\"name\"\n              id=\"first-name\"\n              placeholder=\"\"\n              required=\"required\"\n            />\n            <label for=\"full-name\">Last name</label>\n            <input\n              type=\"text\"\n              name=\"name\"\n              id=\"last-name\"\n              placeholder=\"\"\n              required=\"required\"\n            />\n            <label for=\"email-address\">Email</label>\n            <input\n              type=\"email\"\n              name=\"_replyto\"\n              id=\"email-address\"\n              placeholder=\"\"\n              required=\"required\"\n            />\n            <label for=\"message\">Message</label>\n            <textarea\n              rows=\"5\"\n              name=\"message\"\n              id=\"message\"\n              placeholder=\"\"\n              required=\"required\"\n            ></textarea>\n            <input\n              type=\"hidden\"\n              name=\"_subject\"\n              id=\"email-subject\"\n              value=\"Contact Form Submission\"\n            />\n          </fieldset>\n\n          <!-- submit button  -->\n          <input\n            id=\"send\"\n            type=\"submit\"\n            value=\"OK\"\n            style=\"\n              border: 1px solid #444444;\n              border-radius: 50%;\n              height: 50px;\n              color: #444444;\n              font-family: monospace;\n              cursor: none;\n            \"\n          />\n          <!-- submit button end -->\n        </form>\n      </div>\n      <!-- form container end  -->\n    </div>\n    <!-- contact form end -->\n\n    <!-- footer  -->\n    <footer>\n      <div class=\"copyright\">\n        <p>\n          Copyright&nbsp;©&nbsp;\n          <span id=\"year\"></span>\n        </p>\n      </div>\n    </footer>\n    <!-- footer end -->\n\n    <!-- scripts -->\n    <!-- <script src=\"../../contact.js\"></script> -->\n    <script src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/kursor@0.0.14/dist/kursor.js\"></script>\n    <script src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></script>\n    <!-- scripts end -->\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/sections/contact/contact.scss":
/*!*******************************************!*\
  !*** ./src/sections/contact/contact.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/date.js":
/*!*************************!*\
  !*** ./scripts/date.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c6d9086774651e23159f.js";

/***/ }),

/***/ "./scripts/kursor.js":
/*!***************************!*\
  !*** ./scripts/kursor.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f8cda1d570037eb434fb.js";

/***/ }),

/***/ "./src/sections/contact/contact.css":
/*!******************************************!*\
  !*** ./src/sections/contact/contact.css ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b88d04fba731603756b1.css";

/***/ }),

/***/ "./assets/images/icons/home.png":
/*!**************************************!*\
  !*** ./assets/images/icons/home.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d61ca2083faf1b0cc9fe.png";

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 			"contact": 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_contact_contact_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/contact/contact.html */ "./src/sections/contact/contact.html");
/* harmony import */ var _sections_contact_contact_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/contact/contact.scss */ "./src/sections/contact/contact.scss");


})();

/******/ })()
;
//# sourceMappingURL=contact.js.map