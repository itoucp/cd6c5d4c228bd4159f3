/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		140: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([386,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-overlay{position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,.7)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-info{position:absolute;top:0;right:0;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:16px;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.van-info--dot{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-icon{position:relative;display:inline-block;font:normal normal normal 14px/1 vant-icon;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}.van-icon:before{display:inline-block}.van-icon-contact:before{content:'\\e753'}.van-icon-notes:before{content:'\\e63c'}.van-icon-records:before{content:'\\e63d'}.van-icon-cash-back-record:before{content:'\\e63e'}.van-icon-newspaper:before{content:'\\e63f'}.van-icon-discount:before{content:'\\e640'}.van-icon-completed:before{content:'\\e641'}.van-icon-user:before{content:'\\e642'}.van-icon-description:before{content:'\\e643'}.van-icon-list-switch:before{content:'\\e6ad'}.van-icon-list-switching:before{content:'\\e65a'}.van-icon-link-o:before{content:'\\e751'}.van-icon-miniprogram-o:before{content:'\\e752'}.van-icon-qq:before{content:'\\e74e'}.van-icon-wechat-moments:before{content:'\\e74f'}.van-icon-weibo:before{content:'\\e750'}.van-icon-cash-o:before{content:'\\e74d'}.van-icon-guide-o:before{content:'\\e74c'}.van-icon-invitation:before{content:'\\e6d6'}.van-icon-shield-o:before{content:'\\e74b'}.van-icon-exchange:before{content:'\\e6af'}.van-icon-eye:before{content:'\\e6b0'}.van-icon-enlarge:before{content:'\\e6b1'}.van-icon-expand-o:before{content:'\\e6b2'}.van-icon-eye-o:before{content:'\\e6b3'}.van-icon-expand:before{content:'\\e6b4'}.van-icon-filter-o:before{content:'\\e6b5'}.van-icon-fire:before{content:'\\e6b6'}.van-icon-fail:before{content:'\\e6b7'}.van-icon-failure:before{content:'\\e6b8'}.van-icon-fire-o:before{content:'\\e6b9'}.van-icon-flag-o:before{content:'\\e6ba'}.van-icon-font:before{content:'\\e6bb'}.van-icon-font-o:before{content:'\\e6bc'}.van-icon-gem-o:before{content:'\\e6bd'}.van-icon-flower-o:before{content:'\\e6be'}.van-icon-gem:before{content:'\\e6bf'}.van-icon-gift-card:before{content:'\\e6c0'}.van-icon-friends:before{content:'\\e6c1'}.van-icon-friends-o:before{content:'\\e6c2'}.van-icon-gold-coin:before{content:'\\e6c3'}.van-icon-gold-coin-o:before{content:'\\e6c4'}.van-icon-good-job-o:before{content:'\\e6c5'}.van-icon-gift:before{content:'\\e6c6'}.van-icon-gift-o:before{content:'\\e6c7'}.van-icon-gift-card-o:before{content:'\\e6c8'}.van-icon-good-job:before{content:'\\e6c9'}.van-icon-home-o:before{content:'\\e6ca'}.van-icon-goods-collect:before{content:'\\e6cb'}.van-icon-graphic:before{content:'\\e6cc'}.van-icon-goods-collect-o:before{content:'\\e6cd'}.van-icon-hot-o:before{content:'\\e6ce'}.van-icon-info:before{content:'\\e6cf'}.van-icon-hotel-o:before{content:'\\e6d0'}.van-icon-info-o:before{content:'\\e6d1'}.van-icon-hot-sale-o:before{content:'\\e6d2'}.van-icon-hot:before{content:'\\e6d3'}.van-icon-like:before{content:'\\e6d4'}.van-icon-idcard:before{content:'\\e6d5'}.van-icon-like-o:before{content:'\\e6d7'}.van-icon-hot-sale:before{content:'\\e6d8'}.van-icon-location-o:before{content:'\\e6d9'}.van-icon-location:before{content:'\\e6da'}.van-icon-label:before{content:'\\e6db'}.van-icon-lock:before{content:'\\e6dc'}.van-icon-label-o:before{content:'\\e6dd'}.van-icon-map-marked:before{content:'\\e6de'}.van-icon-logistics:before{content:'\\e6df'}.van-icon-manager:before{content:'\\e6e0'}.van-icon-more:before{content:'\\e6e1'}.van-icon-live:before{content:'\\e6e2'}.van-icon-manager-o:before{content:'\\e6e3'}.van-icon-medal:before{content:'\\e6e4'}.van-icon-more-o:before{content:'\\e6e5'}.van-icon-music-o:before{content:'\\e6e6'}.van-icon-music:before{content:'\\e6e7'}.van-icon-new-arrival-o:before{content:'\\e6e8'}.van-icon-medal-o:before{content:'\\e6e9'}.van-icon-new-o:before{content:'\\e6ea'}.van-icon-free-postage:before{content:'\\e6eb'}.van-icon-newspaper-o:before{content:'\\e6ec'}.van-icon-new-arrival:before{content:'\\e6ed'}.van-icon-minus:before{content:'\\e6ee'}.van-icon-orders-o:before{content:'\\e6ef'}.van-icon-new:before{content:'\\e6f0'}.van-icon-paid:before{content:'\\e6f1'}.van-icon-notes-o:before{content:'\\e6f2'}.van-icon-other-pay:before{content:'\\e6f3'}.van-icon-pause-circle:before{content:'\\e6f4'}.van-icon-pause:before{content:'\\e6f5'}.van-icon-pause-circle-o:before{content:'\\e6f6'}.van-icon-peer-pay:before{content:'\\e6f7'}.van-icon-pending-payment:before{content:'\\e6f8'}.van-icon-passed:before{content:'\\e6f9'}.van-icon-plus:before{content:'\\e6fa'}.van-icon-phone-circle-o:before{content:'\\e6fb'}.van-icon-phone-o:before{content:'\\e6fc'}.van-icon-printer:before{content:'\\e6fd'}.van-icon-photo-fail:before{content:'\\e6fe'}.van-icon-phone:before{content:'\\e6ff'}.van-icon-photo-o:before{content:'\\e700'}.van-icon-play-circle:before{content:'\\e701'}.van-icon-play:before{content:'\\e702'}.van-icon-phone-circle:before{content:'\\e703'}.van-icon-point-gift-o:before{content:'\\e704'}.van-icon-point-gift:before{content:'\\e705'}.van-icon-play-circle-o:before{content:'\\e706'}.van-icon-shrink:before{content:'\\e707'}.van-icon-photo:before{content:'\\e708'}.van-icon-qr:before{content:'\\e709'}.van-icon-qr-invalid:before{content:'\\e70a'}.van-icon-question-o:before{content:'\\e70b'}.van-icon-revoke:before{content:'\\e70c'}.van-icon-replay:before{content:'\\e70d'}.van-icon-service:before{content:'\\e70e'}.van-icon-question:before{content:'\\e70f'}.van-icon-search:before{content:'\\e710'}.van-icon-refund-o:before{content:'\\e711'}.van-icon-service-o:before{content:'\\e712'}.van-icon-scan:before{content:'\\e713'}.van-icon-share:before{content:'\\e714'}.van-icon-send-gift-o:before{content:'\\e715'}.van-icon-share-o:before{content:'\\e716'}.van-icon-setting:before{content:'\\e717'}.van-icon-points:before{content:'\\e718'}.van-icon-photograph:before{content:'\\e719'}.van-icon-shop:before{content:'\\e71a'}.van-icon-shop-o:before{content:'\\e71b'}.van-icon-shop-collect-o:before{content:'\\e71c'}.van-icon-shop-collect:before{content:'\\e71d'}.van-icon-smile:before{content:'\\e71e'}.van-icon-shopping-cart-o:before{content:'\\e71f'}.van-icon-sign:before{content:'\\e720'}.van-icon-sort:before{content:'\\e721'}.van-icon-star-o:before{content:'\\e722'}.van-icon-smile-comment-o:before{content:'\\e723'}.van-icon-stop:before{content:'\\e724'}.van-icon-stop-circle-o:before{content:'\\e725'}.van-icon-smile-o:before{content:'\\e726'}.van-icon-star:before{content:'\\e727'}.van-icon-success:before{content:'\\e728'}.van-icon-stop-circle:before{content:'\\e729'}.van-icon-records-o:before{content:'\\e72a'}.van-icon-shopping-cart:before{content:'\\e72b'}.van-icon-tosend:before{content:'\\e72c'}.van-icon-todo-list:before{content:'\\e72d'}.van-icon-thumb-circle-o:before{content:'\\e72e'}.van-icon-thumb-circle:before{content:'\\e72f'}.van-icon-umbrella-circle:before{content:'\\e730'}.van-icon-underway:before{content:'\\e731'}.van-icon-upgrade:before{content:'\\e732'}.van-icon-todo-list-o:before{content:'\\e733'}.van-icon-tv-o:before{content:'\\e734'}.van-icon-underway-o:before{content:'\\e735'}.van-icon-user-o:before{content:'\\e736'}.van-icon-vip-card-o:before{content:'\\e737'}.van-icon-vip-card:before{content:'\\e738'}.van-icon-send-gift:before{content:'\\e739'}.van-icon-wap-home:before{content:'\\e73a'}.van-icon-wap-nav:before{content:'\\e73b'}.van-icon-volume-o:before{content:'\\e73c'}.van-icon-video:before{content:'\\e73d'}.van-icon-wap-home-o:before{content:'\\e73e'}.van-icon-volume:before{content:'\\e73f'}.van-icon-warning:before{content:'\\e740'}.van-icon-weapp-nav:before{content:'\\e741'}.van-icon-wechat-pay:before{content:'\\e742'}.van-icon-warning-o:before{content:'\\e743'}.van-icon-wechat:before{content:'\\e744'}.van-icon-setting-o:before{content:'\\e745'}.van-icon-youzan-shield:before{content:'\\e746'}.van-icon-warn-o:before{content:'\\e747'}.van-icon-smile-comment:before{content:'\\e748'}.van-icon-user-circle-o:before{content:'\\e749'}.van-icon-video-o:before{content:'\\e74a'}.van-icon-add-square:before{content:'\\e65c'}.van-icon-add:before{content:'\\e65d'}.van-icon-arrow-down:before{content:'\\e65e'}.van-icon-arrow-up:before{content:'\\e65f'}.van-icon-arrow:before{content:'\\e660'}.van-icon-after-sale:before{content:'\\e661'}.van-icon-add-o:before{content:'\\e662'}.van-icon-alipay:before{content:'\\e663'}.van-icon-ascending:before{content:'\\e664'}.van-icon-apps-o:before{content:'\\e665'}.van-icon-aim:before{content:'\\e666'}.van-icon-award:before{content:'\\e667'}.van-icon-arrow-left:before{content:'\\e668'}.van-icon-award-o:before{content:'\\e669'}.van-icon-audio:before{content:'\\e66a'}.van-icon-bag-o:before{content:'\\e66b'}.van-icon-balance-list:before{content:'\\e66c'}.van-icon-back-top:before{content:'\\e66d'}.van-icon-bag:before{content:'\\e66e'}.van-icon-balance-pay:before{content:'\\e66f'}.van-icon-balance-o:before{content:'\\e670'}.van-icon-bar-chart-o:before{content:'\\e671'}.van-icon-bars:before{content:'\\e672'}.van-icon-balance-list-o:before{content:'\\e673'}.van-icon-birthday-cake-o:before{content:'\\e674'}.van-icon-bookmark:before{content:'\\e675'}.van-icon-bill:before{content:'\\e676'}.van-icon-bell:before{content:'\\e677'}.van-icon-browsing-history-o:before{content:'\\e678'}.van-icon-browsing-history:before{content:'\\e679'}.van-icon-bookmark-o:before{content:'\\e67a'}.van-icon-bulb-o:before{content:'\\e67b'}.van-icon-bullhorn-o:before{content:'\\e67c'}.van-icon-bill-o:before{content:'\\e67d'}.van-icon-calendar-o:before{content:'\\e67e'}.van-icon-brush-o:before{content:'\\e67f'}.van-icon-card:before{content:'\\e680'}.van-icon-cart-o:before{content:'\\e681'}.van-icon-cart-circle:before{content:'\\e682'}.van-icon-cart-circle-o:before{content:'\\e683'}.van-icon-cart:before{content:'\\e684'}.van-icon-cash-on-deliver:before{content:'\\e685'}.van-icon-cash-back-record-o:before{content:'\\e686'}.van-icon-cashier-o:before{content:'\\e687'}.van-icon-chart-trending-o:before{content:'\\e688'}.van-icon-certificate:before{content:'\\e689'}.van-icon-chat:before{content:'\\e68a'}.van-icon-clear:before{content:'\\e68b'}.van-icon-chat-o:before{content:'\\e68c'}.van-icon-checked:before{content:'\\e68d'}.van-icon-clock:before{content:'\\e68e'}.van-icon-clock-o:before{content:'\\e68f'}.van-icon-close:before{content:'\\e690'}.van-icon-closed-eye:before{content:'\\e691'}.van-icon-circle:before{content:'\\e692'}.van-icon-cluster-o:before{content:'\\e693'}.van-icon-column:before{content:'\\e694'}.van-icon-comment-circle-o:before{content:'\\e695'}.van-icon-cluster:before{content:'\\e696'}.van-icon-comment:before{content:'\\e697'}.van-icon-comment-o:before{content:'\\e698'}.van-icon-comment-circle:before{content:'\\e699'}.van-icon-completed-o:before{content:'\\e69a'}.van-icon-credit-pay:before{content:'\\e69b'}.van-icon-coupon:before{content:'\\e69c'}.van-icon-debit-pay:before{content:'\\e69d'}.van-icon-coupon-o:before{content:'\\e69e'}.van-icon-contact-o:before{content:'\\e69f'}.van-icon-descending:before{content:'\\e6a0'}.van-icon-desktop-o:before{content:'\\e6a1'}.van-icon-diamond-o:before{content:'\\e6a2'}.van-icon-description-o:before{content:'\\e6a3'}.van-icon-delete:before{content:'\\e6a4'}.van-icon-diamond:before{content:'\\e6a5'}.van-icon-delete-o:before{content:'\\e6a6'}.van-icon-cross:before{content:'\\e6a7'}.van-icon-edit:before{content:'\\e6a8'}.van-icon-ellipsis:before{content:'\\e6a9'}.van-icon-down:before{content:'\\e6aa'}.van-icon-discount-o:before{content:'\\e6ab'}.van-icon-ecard-pay:before{content:'\\e6ac'}.van-icon-envelop-o:before{content:'\\e6ae'}@font-face{font-weight:400;font-family:vant-icon;font-style:normal;font-display:auto;src:url('data:font/woff2;charset=utf-8;base64,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') format('woff2'),url(//at.alicdn.com/t/c/font_2553510_kfwma2yq1rs.woff?t=1694918397022) format('woff')}.van-icon__image{display:block;width:1em;height:1em;object-fit:contain}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image--round img{border-radius:inherit}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:14px;background-color:#f7f8fa}.van-image__loading-icon{color:#dcdee0;font-size:32px}.van-image__error-icon{color:#dcdee0;font-size:32px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:16px}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 16px 16px}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:16px 0 0 16px}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:16px 16px 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 16px 16px 0}.van-popup--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-popup-slide-bottom-enter-active,.van-popup-slide-left-enter-active,.van-popup-slide-right-enter-active,.van-popup-slide-top-enter-active{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popup-slide-bottom-leave-active,.van-popup-slide-left-leave-active,.van-popup-slide-right-leave-active,.van-popup-slide-top-leave-active{-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-popup__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-popup__close-icon:active{color:#969799}.van-popup__close-icon--top-left{top:16px;left:16px}.van-popup__close-icon--top-right{top:16px;right:16px}.van-popup__close-icon--bottom-left{bottom:16px;left:16px}.van-popup__close-icon--bottom-right{right:16px;bottom:16px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image{width:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.van-image-preview__image--vertical{width:auto;height:100%}.van-image-preview__image img{-webkit-user-drag:none}.van-image-preview__image .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:16px;left:50%;color:#fff;font-size:14px;line-height:20px;text-shadow:0 1px 1px #323233;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.van-image-preview__overlay{background-color:rgba(0,0,0,.9)}.van-image-preview__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-image-preview__close-icon:active{color:#969799}.van-image-preview__close-icon--top-left{top:16px;left:16px}.van-image-preview__close-icon--top-right{top:16px;right:16px}.van-image-preview__close-icon--bottom-left{bottom:16px;left:16px}.van-image-preview__close-icon--bottom-right{right:16px;bottom:16px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(25));
var _vue = _interopRequireDefault(__webpack_require__(12));
var _ImagePreview = _interopRequireDefault(__webpack_require__(89));
var _utils = __webpack_require__(10);
var instance;
var defaultConfig = {
  loop: true,
  value: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onClose: null,
  onChange: null,
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  asyncClose: false,
  transition: 'van-fade',
  getContainer: 'body',
  overlayStyle: null,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
};
var initInstance = function initInstance() {
  instance = new (_vue["default"].extend(_ImagePreview["default"]))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
  instance.$on('scale', function (data) {
    if (instance.onScale) {
      instance.onScale(data);
    }
  });
};
var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }
  if (!instance) {
    initInstance();
  }
  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  (0, _extends2["default"])(instance, defaultConfig, options);
  instance.$once('input', function (show) {
    instance.value = show;
  });
  instance.$once('closed', function () {
    instance.images = [];
  });
  if (options.onClose) {
    instance.$off('close');
    instance.$once('close', options.onClose);
  }
  return instance;
};
ImagePreview.Component = _ImagePreview["default"];
ImagePreview.install = function () {
  _vue["default"].use(_ImagePreview["default"]);
};
var _default = ImagePreview;
exports["default"] = _default;

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/buness/project/limit-number/index.vue + 4 modules
var limit_number = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/chdd_live/project.vue?vue&type=template&id=5969878c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "prizelivebox",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.gotoLive
    }
  }, [_vm.status == 2 ? _c("div", {
    staticClass: "topcenter livetrailer"
  }, [_vm._m(0), _vm._v(" "), _c("p", {
    staticClass: "livetime boxflex",
    domProps: {
      innerHTML: _vm._s(_vm.text)
    }
  }, [_vm._v("今晚"), _c("b", [_vm._v("21")]), _vm._v("点")])]) : _vm._e(), _vm._v(" "), _vm.status == 3 ? _c("div", {
    staticClass: "flexcenter prizelivewait"
  }, [_c("p", {
    staticClass: "iconlive"
  }), _vm._v(" "), _c("p", {
    staticClass: "text",
    domProps: {
      textContent: _vm._s(_vm.text)
    }
  }, [_vm._v("直播准备中")])]) : _vm._e(), _vm._v(" "), _vm.status == 1 ? _c("div", {
    staticClass: "flexcenter prizelivebg"
  }, [_c("p", {
    staticClass: "iconliveing"
  }), _vm._v(" "), _c("p", {
    staticClass: "text",
    domProps: {
      textContent: _vm._s(_vm.text)
    }
  }, [_vm._v("开奖互动直播中")])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "flexcenter prizelive"
  }, [_c("p", {
    staticClass: "iconlive"
  }), _vm._v(" "), _c("p", {
    staticClass: "text"
  }, [_vm._v("开奖互动直播")])]);
}];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/chdd_live/project.vue?vue&type=template&id=5969878c&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/chdd_live/project.vue?vue&type=script&lang=js&
/**
 * 方案详情页面红火直播直播信息组件
 * @description 方案详情页面红火直播直播信息组件
 * @author zhaoyf
 * @time 2023/05/31 10:18:10
 * @copyright 2023 itou
 */


/* harmony default export */ var projectvue_type_script_lang_js_ = ({
  name: 'chdd-live-project',
  data: function data() {
    return {
      station_user_id: '',
      //--店铺id
      lottery_type: '',
      //--彩种
      lottery_type_text: '',
      //--彩种中文
      pre_prize_second: -7200,
      //--距离开奖时间秒数，过点为负数
      text: '',
      //--显示文本
      status: 0,
      //--0无开奖直播信息，1正在直播，2预计直播，3已过预计直播时间
      isShow: false,
      url_type: 'live_prize' //--开奖直播
    };
  },

  methods: {
    /**
     * @function get
     * @description 获取开奖直播信息
     */
    get: function get(_ref) {
      var _this = this;
      var _ref$station_user_id = _ref.station_user_id,
        station_user_id = _ref$station_user_id === void 0 ? '' : _ref$station_user_id,
        _ref$lottery_type = _ref.lottery_type,
        lottery_type = _ref$lottery_type === void 0 ? '' : _ref$lottery_type,
        _ref$lottery_type_tex = _ref.lottery_type_text,
        lottery_type_text = _ref$lottery_type_tex === void 0 ? '' : _ref$lottery_type_tex,
        _ref$pre_prize_second = _ref.pre_prize_second,
        pre_prize_second = _ref$pre_prize_second === void 0 ? -7200 : _ref$pre_prize_second;
      if (!station_user_id || !lottery_type) {
        return Promise.resolve();
      }
      if (isNaN(pre_prize_second)) {
        return Promise.resolve();
      }
      if (pre_prize_second <= -7200) {
        return Promise.resolve();
      }
      this.station_user_id = station_user_id;
      this.lottery_type = lottery_type;
      this.lottery_type_text = lottery_type_text;
      this.pre_prize_second = pre_prize_second;
      return itou.get({
        url: 'chdd/prizeLiving',
        data: {
          station_user_id: station_user_id,
          lottery_type: lottery_type
        },
        rnd: false,
        notoken: true
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var nearest_live_time = data.nearest_live_time,
          status = data.status,
          is_show = data.is_show;
        _this.isShow = is_show;
        if (!is_show) {
          return;
        }
        _this.status = status;
        if (status > 0) {
          itou.baiduHm('方案详情页', '直播入口曝光'); //--百度统计
        }

        if (status == 1) {
          _this.text = '开奖互动直播中';
        } else if (status == 3) {
          _this.text = '直播准备中';
        } else {
          _this.text = nearest_live_time;
        }
      });
    },
    /**
     * @function gotoLive
     * @description 跳转到直播页面
     */
    gotoLive: function gotoLive() {
      var type = this.url_type,
        id = this.station_user_id,
        lottery_type_text = this.lottery_type_text,
        lottery_type = this.lottery_type;
      // itou.baiduHm(lottery_type_text + '方案', '直播入口访问'); //--百度统计
      itou.baiduHm('方案详情页', '直播入口访问'); //--百度统计
      var url = '/monetize/tochdd_live/'; //--彩虹多多中转页面
      url += '?type=' + type; //--需要跳转彩虹多多直播首页
      url += '&lottery_type=' + lottery_type; //--彩种
      url += '&back=' + window.backurl; //--返回路径
      url += '&id=' + id; //--店铺ID
      Gray.$page.loadPage(url); //--跳转到中转页面
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/chdd_live/project.vue?vue&type=script&lang=js&
 /* harmony default export */ var chdd_live_projectvue_type_script_lang_js_ = (projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/chdd_live/project.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chdd_live_projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/chdd_live/project.vue"
/* harmony default export */ var project = (component.exports);
// EXTERNAL MODULE: ./src/components/public/img/preview.vue + 4 modules
var preview = __webpack_require__(64);

// CONCATENATED MODULE: ./src/static/js/business/project-detail.js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * 微信C端 方案详情
 * by zhaoyf    2016-08-17
 */



$(function () {
  Vue.directive('showpaynotice', {
    //--全局指令，如果付款按钮展示，根据条件弹出提示信息
    bind: function bind(el, binding, vnode) {
      var vm = vnode.context;
      var hide = itou.localData.getData('__project_payInfo_show'); //--缓存信息，是否隐藏弹层
      var shop = vm.info.shop.hasShop && vm.info.shop;
      if (shop) {
        var pay_types = shop.pay_types || [],
          //--店铺支持的支付类型
          shopProvince = shop.province,
          //--当前店铺省份
          location = itou.publicObj.location.get()['wgs84'] || {},
          //--获取缓存的地理位置
          myProvince = location.province || '';
        var isTransProvince = vm.isTransProvince(shopProvince, myProvince); //--是否跨省
        if (!vm.isAPP) {
          //--非APP下
          if (pay_types.indexOf('ali_public') >= 0 && !hide.ali) {
            //--拥有支付宝通道
            //--显示支付宝提示信息
            vm.currPayInfo = vm.payInfo.ali;
          }
        } else {
          //--APP下
          if (!myProvince) {
            //--没有缓存的省份信息
            if (pay_types.indexOf('ali_public') >= 0 && !hide.ali) {
              //--拥有支付宝通道
              //--显示支付宝提示信息
              vm.currPayInfo = vm.payInfo.ali;
            }
          } else if (!isTransProvince) {
            //--不跨省
            if (pay_types.indexOf('ali_public') >= 0 && !hide.ali) {
              //--拥有支付宝通道
              //--显示支付宝提示信息
              vm.currPayInfo = vm.payInfo.ali;
            }
          } else if (isTransProvince) {
            //--跨省
            if ((pay_types.indexOf('quick_pay') >= 0 || pay_types.indexOf('union_pay') >= 0) && !hide.province) {
              //--拥有跨界支付或云闪付通道
              //--显示异地提示信息
              vm.currPayInfo = vm.payInfo.province;
            }
          }
        }
      }
    }
  });

  // Vue.directive('check_profit', {//--全局指令，检查店铺是否开启跟单盈利
  //     bind: function (el, binding, vnode) {
  //         const vm = vnode.context;
  //         const info = vm.info;
  //         const Action = vm.Action;
  //         //--如果当前状态可以发起跟单
  //         if ((!info.schedule.end && !info.schedule.isfollow && info.shop.hasShop) && Action.share) {
  //             //--检查是否可以开启佣金设置
  //             itou.get({
  //                 url: 'recommend/getProfitStatus',
  //                 data: {
  //                     station_user_id: info.shop.id
  //                 },
  //                 notoken: true,
  //                 rnd: false
  //             })
  //                 .then(function (data) {
  //                     vm.shop_profit = data.status == 1;
  //                 });
  //         }
  //     }
  // });

  itou.currLimit.init();
  var baseSetting = itou.baseSetting,
    simplify = itou.simplify;
  //--初始化 分享对象
  var gendan = window.gendan.init(['projectShare']);
  if ($.livesorce) {
    var livesorce = $.livesorce.init(['outil']);
  }
  if ($.payscan) {
    var payscan = $.payscan.init(['project', 'center']);
  }
  var model = function model() {
    var self = this;
    window.Project.model.call(self);
    self.yue = 0; //--账本余额
    self.showDoPay = false; //--展示支付弹层
    self.payOK = false; //--是否支付成功
    self.payscan = null;
    self.pageMode = 'project'; //--当前页面是方案页面

    // self.ticketCode = require('./../custom/ticket_code');
    var ticketImg = __webpack_require__(98);
    //--用require加载对象，执行之后会通过id挂载到一个对象中；再次执行会直接通过id加载；
    //--ticket_img是单例模式，通过require加载，会把实例挂起来；当页面切换并再次加载时，会直接得到已经操作过的对象实例；这就导致本次得到的对象会保留上一次执行的数据，导致对象逻辑问题；
    //--因而，需要先将数据初始化
    ticketImg.doReset(); //--数据初始化
    self.ticketImg = ticketImg;
    self.mode = 'project'; //--页面展示模式；project || ticketImg；展示选号详情||票照片

    self.payInfo = {
      //--支付提示信息
      ali: {
        title: '本店支付宝付款已升级',
        text: '本店支付宝每日付款上限已增加至10次，欢迎您的体验',
        close: function close() {
          self.currPayInfo = null;
          itou.localData.setData('__project_payInfo_show', {
            ali: true
          });
        }
      },
      province: {
        title: '本店付款已升级',
        text: '本店付款现已支持全国各大银行信用卡、储蓄卡，还可使用手机银行APP扫码付款，欢迎您的体验',
        close: function close() {
          self.currPayInfo = null;
          itou.localData.setData('__project_payInfo_show', {
            province: true
          });
        }
      }
    };
    self.currPayInfo = null; //--当前展示的支付提示信息
  };

  model.prototype = window.Project.model.prototype;
  window.Project.methods.switchMode = function () {
    //--切换页面展示模式
    var self = this,
      $data = self.$data;
    if (!$data.info.shop.hasShop) {
      return;
    }
    if (self.ticketImg.loaded) {
      //--已经加载过照片信息
      self.mode = self.mode == 'project' ? 'ticketImg' : 'project';
    } else {
      self.mode = self.mode == 'project' ? 'ticketImg' : 'project';
      if ($data.content_hide) {
        return;
      }
      self.ticketImg.loaded = true;
      try {
        self.$refs.bustling.start(); //--开始加载中
      } catch (e) {}
      var param = {
        station_user_id: self.info.shop.id,
        project_id: self.project_id
      };
      if ($data._pmn) {
        param._pmn = $data._pmn; //--从PC进入本页，会有参数_pmn
      }

      self.ticketImg.getInfo(param).then(function () {
        self.$refs.photoswiper.initData(self.ticketImg.imgs.list); //--图片预览插件初始化数据
        try {
          self.$refs.bustling.end(); //--移除加载中弹层
        } catch (e) {}
      }, function () {
        self.ticketImg.loaded = false;
        try {
          self.$refs.bustling.end(); //--移除加载中弹层
        } catch (e) {}
      });
    }
  };
  window.Project.methods.showPhotoSwiper = function (img, i) {
    var _self$ticketImg;
    var self = this;
    var imgList = self.ticketImg.imgs.listOrigin; //-原图
    if (!imgList.length) {
      imgList = self.ticketImg.imgs.list; //--缩略图
    }

    if (typeof fwv_share != 'undefined') {
      self.ticketImg.imgs.curr = imgList[i] || img;
      return;
    }
    // if (self.ticketImg && self.ticketImg.swiper) {
    //     self.$refs.photoswiper.initData(self.ticketImg.imgs.list);//--图片预览插件初始化数据
    //     self.$refs.photoswiper.open(self.ticketImg.swiper.realIndex);
    //     self.$refs.photoswiper.onChange(function (i) {
    //         self.ticketImg.swiper.slideTo(i);
    //     });
    // }
    if (self !== null && self !== void 0 && (_self$ticketImg = self.ticketImg) !== null && _self$ticketImg !== void 0 && (_self$ticketImg = _self$ticketImg.imgs) !== null && _self$ticketImg !== void 0 && _self$ticketImg.list) {
      self.$refs.photoswiper.initData(imgList); //--图片预览插件初始化数据
      self.$refs.photoswiper.open(i);
    }
  };
  window.Project.methods.payByMethod = function () {
    //--根据pay_method选择付款方式
    var self = this;
    if (self.currPayInfo) {
      self.currPayInfo.close();
    }
    return itou.payScan.checkPay1({
      //--检查是否允许付款
      station_user_id: self.info.shop.id,
      project_id: self.project_id
    }).then(function (rlt) {
      if (self.afterCheckPay(rlt)) {
        //--方案允许付款
        itou.payScan.getMyRemain(self.info.shop.id) //--获取店铺余额
        .then(function (money) {
          self.yue = money;
          var prize = itou.NP.strip(self.info.schedule.money * 1),
            //--方案金额
            yue = itou.NP.strip(self.yue * 1); //--账本余额
          console.log(prize, yue);
          if (yue >= prize) {
            //--余额足够
            self.showDoPay = true; //--弹出扣款层
          } else {
            self.tryToProjectMa(); //--跳转到方案码
          }
        });
      }
    });
  };

  window.Project.methods.tryToProjectMa = function () {
    //--尝试跳转到方案码
    var self = this;
    itou.loading.start(); //--展示“加载中”弹层
    // itou.checkProvince(self.info.shop.id)//--进行异地判断
    // 	.then(
    // 		function(rlt){
    // 			console.log(rlt);
    // 			return itou.payScan.checkPay1({//--检查方案是否可付款、扫码付是否开启
    // 				station_user_id: self.info.shop.id,
    // 				project_id: self.project_id,
    // 				scene: 'scan_fixed_project'
    // 			})
    // 		},
    // 		function(rlt){
    // 			try{
    // 				itou.msg.hide();
    // 			}catch(w){}
    // 			console.log(rlt);
    // 			itou.loading.end();//--关闭“加载中”弹层
    // 			self.showConfirmBox(rlt.msg, '提示', '', '__showContact', '联系店铺', '关闭');
    // 		}
    // 	)
    // 	.then(function(rlt){//--对checkPay返回数据进行处理
    // 		itou.loading.end();//--关闭“加载中”弹层
    // 		if(self.afterCheckPay(rlt)){
    // 			// if(self.trytoDownload()){
    // 				payscan.center.gotoMa({//--跳转到方案码页面
    // 					key: "scan_fixed_project",
    // 					id: self.info.id,
    // 					partner: self.info.status.partner,
    // 					station_user_id: self.info.shop.id
    // 				});
    // 			// }
    // 		}
    // 	});
    itou.payScan.checkPay1({
      //--检查方案是否可付款、扫码付是否开启
      station_user_id: self.info.shop.id,
      project_id: self.project_id,
      scene: 'scan_fixed_project'
    }).then(function (rlt) {
      //--对checkPay返回数据进行处理
      itou.loading.end(); //--关闭“加载中”弹层
      if (self.afterCheckPay(rlt)) {
        // if(self.trytoDownload()){
        payscan.center.gotoMa({
          //--跳转到方案码页面
          key: 'scan_fixed_project',
          project_id: self.info.id,
          partner: self.info.status.partner,
          id: self.info.shop.id
        });
        // }
      }
    });
  };

  window.Project.methods.trytoDownload = function () {
    var self = this,
      UA = navigator.userAgent + '';
    if (self.isAPP) {
      return true;
    } else if (config.platform == 'wx' && /(iPhone|iPad|iPod|iOS)/i.test(UA)) {
      return true;
    } else {
      self.showConfirmBox('暂只支持口袋APP内获取本店付款码，您可下载口袋APP后使用', '提示', '', '__gotoDownload', '去下载', '关闭');
      return false;
    }
  };
  //--执行预存账本付款付款
  window.Project.methods.afterCheckPay = function (rlt) {
    console.log(rlt);
    var self = this;
    if (rlt.err == 'projectErr') {
      //--展示
      var errcode = rlt.errcode;
      switch (errcode + '') {
        case '-7': //--已截止
        case '-12': //--已扣账本
        case '-22': //--已出票
        case '-32': //--无法出票
        case '-42':
          //--已接单
          self.showConfirmBox(rlt.msg, '提示', '', '__showContact', '联系店铺', '关闭');
          break;
        case '-2':
          //--已撤单
          self.showConfirmBox(rlt.msg, '提示', '', '_reSelect', '重新选单', '关闭');
          break;
        case '-41':
          //--超5000
          self.showConfirmBox(rlt.msg, '提示', '__showContact', '__payScan_gotoBalance', '去加账', '联系店铺');
          break;
        default:
          self.showConfirmBox(rlt.msg, '提示', '', '__showContact', '联系店铺', '关闭');
          break;
      }
      return false;
    }
    if (rlt.err == 'noPayScan') {
      //--展示
      self.showConfirmBox(rlt.msg, '', '', '__showContact', '联系店铺', '关闭');
      return false;
    }
    if (rlt.err == 'noMoney') {
      self.showConfirmBox(rlt.msg, '店内账本不足', '', '__payScan_gotoSavedMa', '立即加账', '关闭');
      return false;
    }
    if (rlt.err == 'noErr') {
      //--金额足够，进行余额扣款
      // self.showDoPay = true;
      // self.tryToPay();
      return true;
    }
  };
  window.Project.methods.doYuFuPay = function () {
    console.log('doYuFuPay');
    // try {
    // 	_hmt.push(['_trackEvent', '普通方案', '使用账本付款', config.isAPP? 'APP': '微信']);
    // } catch (error) {
    // 	console.table(error);
    // }
    itou.baiduHm('普通方案', '使用账本付款'); //--百度统计
    var self = this;
    itou.payScan.getMyRemain(self.info.shop.id) //--获取店铺余额
    .then(function (money) {
      self.yue = money;
      var prize = self.info.schedule.money,
        //--方案金额
        yue = self.yue; //--账本余额
      console.log(prize, yue);
      // if(prize > yue){
      var checkPay = itou.payScan.checkPay({
        prize: prize,
        money: yue,
        station_user_id: self.info.shop.id,
        project_id: self.project_id
      }).then(function (rlt) {
        if (self.afterCheckPay(rlt)) {
          self.showDoPay = true;
        }
      });
      // }
      // else{
      // 	self.showDoPay = true;
      // }
    });
  };
  //--尝时使用账本余额付款
  window.Project.methods.tryToPay = function () {
    var self = this;
    itou.payScan.tryToPay({
      station_user_id: self.info.shop.id,
      project_id: self.project_id
    }).then(function (rlt) {
      var errcode = rlt.errcode;
      console.log(errcode, errcode == 0);
      if (errcode == 0) {
        //--支付成功
        self.payOK = true;
      } else {
        //--支付失败，根据errcode处理
        switch (errcode + '') {
          case '-7': //--已截止
          case '-12': //--已扣账本
          case '-22': //--已出票
          case '-32': //--无法出票
          case '-42':
            //--已接单
            self.showConfirmBox(rlt.msg, '提示', '', '__showContact', '联系店铺', '关闭');
            break;
          case '-2':
            //--已撤单
            self.showConfirmBox(rlt.msg, '提示', '', '_reSelect', '重新选单', '关闭');
            break;
          case '-21':
            //--店内账本不足
            // var msg = '当前店内账本不足，您可在店内柜台付款并告知店员处理。<br />还可付款后让店员为您加账到账本，每次出票可省去收款找零时间，极大提高为您成功出票的概率。<br /><br />';
            // self.showConfirmBox(rlt.msg, '店内账本不足', '', '__payScan_gotoSavedMa', '立即加账', '关闭');
            var msg = '当前店内账本不足以为方案付款，请点击刷新后重新尝试付款';
            self.showMsgBox(msg, '店内账本不足', '_reload', '刷新');
            return;
          default:
            self.showConfirmBox(rlt.msg, '提示', '', '__showContact', '联系店铺', '关闭');
            break;
        }
      }
    });
  };
  //--刷新页面
  window.Project.methods.reload = function () {
    Gray.$page.refresh();
  };
  //--跳转到预存码
  window.Project.methods.goToYufuMa = function () {};
  window.Project.methods.gotoMa = function (key_str) {
    //--跳转到二维码付款，已废弃
    var self = this,
      shop = self.info.shop,
      status = self.info.status,
      schedule = self.info.schedule,
      _payscan = itou.setting.getData('payscan'); //--是否允许扫码付
    if (key_str == 'scan_share_buy' && _payscan) {
      var partner = status.partner;
      payscan.center.gotoMa({
        key: 'scan_share_buy',
        id: self.info.id,
        partner: partner,
        station_user_id: shop.id
      });
    }
    if (self.info.pay_method == 'scan_pay' && _payscan) {
      var partner = status.partner;
      payscan.center.gotoMa({
        key: 'scan_fixed_project',
        id: self.info.id,
        partner: partner,
        station_user_id: shop.id
      });
    } else if (self.info.pay_method == 'traditional_pay') {
      var url = '/project/pay/?id=' + shop.id;
      url += '&back=' + window.backurl;
      Gray.$page.loadPage(url);
    }
  };
  window.Project.methods.payScanCallBack = function () {
    //--扫码付款倒计时回调函数
    var self = this,
      $data = self.$data,
      key = payscan.project.key;
    itou.outil.timmer.clearTimmer(key);
    payscan.project.getOrderStatus(self.project_id).then(function (data) {
      self.info.status.orderStatus = data.order_status;
      if (self.info.status.orderStatus == 0 && payscan.project.project_end == 0) {
        //--未接单、未超时
        itou.outil.timmer.newTimmer({
          key: key,
          timeout: 5000,
          fun: function fun() {
            self.payScanCallBack(); //--递归执行
          }
        });
      } else {
        itou.outil.timmer.clearTimmer(key); //--终止计时器
      }
    });
  };

  window.Project.methods.showShareImg = function () {
    //--mobile和iweb下，展示分享图片
    var self = this;
    self.$refs.shareimg.init({
      //--分享图片弹层
      title: '方案二维码',
      // img: '/static/images/help/gendandemo.png',
      url: 'share/getImg',
      data: {
        project_id: self.project_id,
        station_user_id: self.info.shop.id,
        url: encodeURIComponent(self.info.shareMess.link),
        token: localStorage.getItem('__itou_random_token'),
        type: 'project'
      },
      // class: 'projetcode',
      bgColor: '#23249C',
      btnBottom: {
        text: '已分享，返回方案详情'
      }
    });
  };
  window.Project.methods.gotoGAdv = function () {
    this.gAdvAlert();
    // const gaid = this.rcmdDoing.gaid;
    // if (gaid) {
    //     const url = `/precommend/adv/?id=${gaid}&back=${backurl}`;
    //     Gray.$page.loadPage(url);
    // }
  }, window.Project.methods.gAdvAlert = function () {
    this.layer.alert.show({
      title: '创作者付费推荐资格说明',
      text: "\n            <div style=\"text-align: left\">\n            \u5982\u4F55\u6210\u4E3A\u4ED8\u8D39\u521B\u4F5C\u8005\uFF1F<br />\n            \u5F88\u7B80\u5355\uFF0C\u6EE1\u8DB3\u5E97\u5185\u51FA\u7968\u65B9\u6848\u6570\u5927\u4E8E10\u5355\u4E14\u5230\u5E97\u65F6\u95F4\u5927\u4E8E\u4E00\u5468\uFF0C\u7ECF\u8FC7\u5B9E\u540D\u8BA4\u8BC1\u540E\u5373\u53EF\u6210\u4E3A\u521B\u4F5C\u8005\u3002<br />\n            <br />\n            \u521B\u4F5C\u8005\u5982\u4F55\u8BBE\u7F6E\u4ED8\u8D39\u5185\u5BB9\uFF1F<br />\n            \u70B9\u51FB\u65B9\u6848\u8BE6\u60C5\u9875\u53F3\u4E0A\u65B9\u7684<strong>\u3010\u53D1\u63A8\u8350\u3011</strong>\u6309\u94AE\u8FDB\u5165\u5230\u5185\u5BB9\u63A8\u8350\u8BBE\u7F6E\u9875\uFF0C\u9009\u62E9\u5168\u7F51\u6A21\u5F0F\uFF0C\u4ED8\u8D39\u91D1\u989D\u9AD8\u4F4E\u7531\u7CFB\u7EDF\u6839\u636E\u6218\u7EE9\u60C5\u51B5\u8FDB\u884C\u8BA1\u7B97\u540E\u5F97\u51FA\uFF0C\u6218\u7EE9\u8D8A\u597D\u5219\u53EF\u8BBE\u7F6E\u7684\u4ED8\u8D39\u91D1\u989D\u8D8A\u9AD8\u3002\n            </div>\n            ",
      buttons: [{
        text: '知道了'
      }]
    });
  };
  window.Project.computed.gotoPayText = function () {
    var self = this,
      shop = self.info.shop,
      status = self.info.status,
      schedule = self.info.schedule,
      text = '';
    console.log('self.info.pay_method = ' + self.info.pay_method);
    if (self.info.pay_method == 'scan_pay') {
      text = '获取付款码';
    } else if (self.info.pay_method == 'traditional_pay') {
      text = '付款给店铺';
    }
    return text;
  };
  window.Project.computed.showScanPay = function () {
    var self = this,
      info = self.info || {};
    self.canPayScan = info.pay_method == 'scan_store' || info.pay_method == 'scan_fixed_project';
    self.showScanPayNum = self.showScanPayNum || 0; //--计数器，防止百度埋点重复执行
    // return self.browser != 'mobile' && self.canPayScan
    return self.canPayScan;
  };
  window.Project.computed.afterScanPay = function () {
    var self = this,
      data = self.info.data;
    // data.depute_info.order_status == 0 && data.depute_info.cash_type==2
    // 账本付款模块展示
    // data.depute_info.order_status == 0 && data.depute_info.cash_type==3
    // 扫码付结果展示
    var r = data.depute_info.order_status == 0 && (data.depute_info.cash_type == 2 || data.depute_info.cash_type == 3);
    if (r) {
      if (data.depute_info.cash_type == 2) {
        self.info.status.intro = '已扣减账本成功，请等待店铺处理结果';
      }
      if (data.depute_info.cash_type == 3) {
        self.info.status.intro = '已扫码付款成功，请等待店铺处理结果';
      }
    }
    return r;
  };
  window.Project.computed.showActivity = function () {
    //activity_id.toString() != '0' && (!baseSetting.simplify || (baseSetting.simplify && simplify.projectdetail.huodong)
    var self = this,
      activity_id = self.activity_id + '',
      baseSetting = self.baseSetting || {},
      simplify = self.simplify;
    if (activity_id == '0') {
      return false;
    }
    return !baseSetting.simplify || baseSetting.simplify && simplify.projectdetail.huodong;
  };
  window.Project.computed.info_ozList_num_desc = function () {
    return _.orderBy(this.info.optimizeList, 'num', 'desc');
  };
  window.Project.computed.info_wagers_introSort = function () {
    return _.orderBy(this.info.wagers, 'intro.sort', 'asc');
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'limit-number': limit_number["a" /* default */],
        'chdd-live-project': project,
        photoswiper: preview["a" /* default */]
      },
      mounted: function mounted() {
        var self = this,
          $data = self.$data;
        self.openApp({
          vm: self,
          id: itou.localJson.getJson('/user/shop/details/').id || ''
        });
      },
      watch: {
        'info.schedule.showfollow': function infoScheduleShowfollow(val) {
          var self = this;
          if (self.$refs.gameadv && !val) {
            //--玩蜂游戏推广广告
            var id = itou.localJson.getJson('/user/shop/details/').id || '';
            self.$refs.gameadv.init({
              shopid: id,
              type: 'min',
              ad_options: 'project',
              page: '普通方案'
            }, function (url) {
              // itou.baiduHm('普通方案', '广告标签：玩蜂1');//--百度统计
              return url + '&from=select';
            });
          }
        }
      },
      data: new model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        self.loading = true;
        if (self.Action.guanzhu) {
          // $data.getGuanzhu();
        }
        var getGoals_jclq = function getGoals_jclq() {
          return self.getGoals_jclq().then(function (data) {
            if (!data) {
              // self.showToast('当前比分直播异常，请稍后再试');
              return;
            }
            var list = data.list,
              // match_list = self.info.data.match_list,
              r = {};
            for (var i in list) {
              var goal = list[i],
                // hostid = goal.team["1"],
                // guestid = goal.team["2"],
                obj = {};
              console.log(goal);
              obj.host = goal.host_goals || 0;
              obj.guest = goal.guest_goals || 0;
              obj.code = goal.status_code;
              obj.text = goal.status_name;
              // if([1, 3, 5, 7, 10, 18, 20, 22, 24].indexOf(Number(obj.code)) >= 0){
              // 	obj.text += ' ' + goal.time_diff;
              // } 
              r[goal.match_id2] = obj;
              // obj.host = (goal.period1[hostid] + goal.period2[hostid] + goal.period3[hostid] + goal.period4[hostid] + goal.period5[hostid]) || 0;
              // obj.guest = (goal.period1[guestid] + goal.period2[guestid] + goal.period3[guestid] + goal.period4[guestid] + goal.period5[guestid]) || 0;
              // r[i] = obj;
              // var d = {},
              // 	no = goal.serial_no,
              // 	match = match_list[no];
              // d.pt = "";//--玩法
              // d.type = "mixed";
              // d.fullgoal = obj;//--全场比分
              // d.halfgoal = {};//--半场比分
              // d.pk = "";//--盘口
              // for(var ii in match.list){
              // 	d.pt = ii;
              // 	d.pk = match.list[ii].boundary;
              // 	var rlt = livesorce.outil.goalToCode(d)[0];
              // 	// console.log(d,rlt);
              // 	if(goal.match_status > 0){
              // 		match.list[ii].lottery_result = match.list[ii].lottery_result || rlt.c;
              // 		match.list[ii].lottery_result_mix = match.list[ii].lottery_result_mix || rlt.c;
              // 	}
              // }
            }

            console.log(r);
            self.info.liveGoal = r;
            self.info.liveStatus = r;
          });
        };
        self.getGoals_jclq1 = getGoals_jclq;
        function formatLivesorceData(list, match_list) {
          var r = {};
          for (var i in list) {
            var goal = list[i],
              obj = {};
            obj.host = goal.host_goals || 0;
            obj.guest = goal.guest_goals || 0;
            r[goal.match_id2] = obj;
            var d = {},
              no = goal.serial_no,
              match = match_list[no];
            // if(match.reversion == "1"){//--比分反转
            // 	var temp = obj.host;
            // 	obj.host = obj.guest;
            // 	obj.guest = temp;
            // }
            d.pt = ''; //--玩法
            d.type = 'mixed';
            d.fullgoal = obj; //--全场比分
            d.halfgoal = {
              //--半场比分
              host: goal.half_host_goals || 0,
              guest: goal.half_guest_goals || 0
            };
            d.pk = ''; //--盘口
            if (self.info.match_type == 'dc') {
              d.key = 'danchang';
            }
            if (!match || !match.list) {
              continue;
            } //--根据条件跳出循环
            for (var ii in match.list) {
              d.pt = ii;
              d.pk = match.list[ii].boundary;
              var rlt = livesorce.outil.goalToCode(d)[0]; //console.log(rlt)
              // console.log(d,rlt);
              if (goal.match_status > 0) {
                match.list[ii].lottery_result = match.list[ii].lottery_result || rlt.c;
                match.list[ii].lottery_result_mix = match.list[ii].lottery_result_mix || rlt.c;
              }
            }
          }
          self.info.liveGoal = r;
        }
        var getStatus = function getStatus() {
          //--获取竞彩足球状态和比分
          var setting = livesorce.setting;
          var status = setting.football.status;
          //--检查是否是精简模式，是否开启该功能
          if (!baseSetting.simplify || baseSetting.simplify && simplify.projectdetail.bifen) {
            return self.getStatus().then(function (data) {
              if (!data) {
                // self.showToast('当前比分直播异常，请稍后再试');
                return;
              }
              var list = data.list,
                match_list = self.info.data.match_list,
                r = {};
              var codeMaps = {
                //--新旧code映射
                '0': '1',
                '6': '13',
                '7': '14',
                '31': '15',
                '33': '17',
                '34': '18',
                '40': '16',
                '41': '20',
                '42': '21',
                '50': '24',
                '60': '5',
                '61': '6',
                '70': '7',
                '80': '9',
                '90': '8',
                '100': '33',
                '110': '34',
                '120': '34'
              };
              for (var i in list) {
                var evt = list[i],
                  obj = {};
                var match_id2 = evt.match_id2 + '';
                console.log(match_id2);
                var isNew = match_id2.length < 8;
                if (!isNew) {
                  obj.code = (codeMaps[evt.status_code] || evt.status_code) + '';
                } else {
                  obj.code = evt.status_code + '';
                }
                obj.time = evt.time_diff;
                obj.text = evt.status_name;
                obj.color = 'green';
                if (['13', '14'].indexOf(obj.code) > -1) {
                  obj.text = obj.time + '\'';
                  obj.color = 'blue';
                }
                r[evt.match_id2] = obj;
              }
              self.info.liveStatus = r;
              console.log(r);
              try {
                formatLivesorceData(list, match_list);
              } catch (error) {
                console.log(error);
              }
            });
          }
        };
        self.getStatus1 = getStatus;
        var getInfo = function getInfo() {
          var result = null;
          return $.when($data.getInfo('project/detailV2', true).then(function (data) {
            self.showBody = false;
            self.isRcmd = data.is_rcmd == 1;
            if (self.info.shop.hasShop && self.info.shop.id) {
              // self.ticketCode.init({
              // 	project_id: self.project_id,//--方案id
              // 	station_user_id: self.info.shop.id,//--店铺id
              // 	pre_prize_time: data.pre_prize_time,
              // 	depute_info: data.depute_info
              // });
              self.ticketImg.checkOrderStatus(data.depute_info);
              $data.info.shareMess.link += '&p_station_id=' + self.info.shop.id;
            }
            if (data.is_share_buy == 1) {
              if (vm.isAPP) {
                if (Gray.$page.href.indexOf('/project/detail') != -1) Gray.$page.loadPage('/project/hm/?id=' + vm.project_id + '&p_uuid=' + vm.p_uuid);
              } else {
                if (window.location.href.indexOf('/project/detail') != -1) Gray.$page.loadPage('/project/hm/?id=' + vm.project_id + '&p_uuid=' + vm.p_uuid);
              }
            }
            payscan.project.init(data, self.payScanCallBack);
            self.showBottom = true;
            self.payscan = payscan;
            console.log(self.payscan);

            //--彩虹多多直播组件初始化
            var pre_prize_second = data.pre_prize_second,
              lottery_type = data.lottery_type,
              lottery_type_text = data.lottery_type_text;
            var station_user_id = self.info.shop.id;
            self.$nextTick(function () {
              if (self.$refs.chddLiveProject) {
                self.$refs.chddLiveProject.get({
                  station_user_id: station_user_id,
                  lottery_type: lottery_type,
                  lottery_type_text: lottery_type_text,
                  pre_prize_second: pre_prize_second
                });
              }
            });

            //--检查是否是精简模式，是否开启该功能
            // if (!baseSetting.simplify || (baseSetting.simplify && simplify.projectdetail.huodong)) {
            //     return $data.getActivityDoing()
            // }
          })).then(function () {
            self.loading = false;
            if (self.info.liveGoal && self.info.liveStatus && self.info.schedule.end && self.info.jiangjin < 0) {
              //--更新比赛即时状态
              if (self.info.dataType == 'jingcaiZuqiu') {
                var _livesorce$currPage;
                livesorce === null || livesorce === void 0 || (_livesorce$currPage = livesorce.currPage) === null || _livesorce$currPage === void 0 || _livesorce$currPage.getTimediff();
                getStatus();
              } else if (self.info.dataType == 'jingcaiLanqiu') {
                return getGoals_jclq(); //--暂不开发
              }
            }
          }).then(function () {
            $data.info.zhuiMoneyCompute();
            self.showPingce();
          }).then(function () {
            self.showBody = true;
          }).then(function () {
            var station_user_id = itou.localJson.getJson('/user/shop/details/').id || '';
            var station_uuid = itou.localJson.getJson('/user/shop/details/').uuid || '';
            if (station_user_id && station_uuid) {
              if (!baseSetting.simplify || baseSetting.simplify && simplify.projectdetail.gdList) {
                if (self.$refs.gdList) {
                  try {
                    self.$refs.gdList.$data.init({
                      station_user_id: station_user_id,
                      station_uuid: station_uuid
                    });
                  } catch (error) {}
                }
              }
            }
            if ($data.info.schedule.isTuijian) {
              return gendan.projectShare.getInfo('project/detailV2').then(function () {
                $data.info.shareMess = gendan.projectShare.getJson();
              });
            } else {
              var defer = $.Deferred();
              defer.resolve();
              return defer.promise();
            }
          });
        };
        itou.outil.timmer.newTimmer({
          //--3秒后强制显示页面
          key: 'project_bodyShow',
          timeout: 3000,
          fun: function fun() {
            self.showBody = true;
            itou.outil.timmer.clearTimmer('project_bodyShow');
          }
        });
        $.when(getInfo(), $data.wxinit()).then(function () {
          if (vm.Action.share) {
            Gray.$plugin['onmenushareappmessage.js']();
            Gray.$plugin['onmenusharetimeline.js']();
          }
          if (self.info.shop.hasShop && self.info.shop.id) {
            self.$refs.advert && self.$refs.advert.init(self.info.shop.id, function () {
              itou.baiduHm('方案详情', '热点'); //--百度统计
            });
          }
        });
      },

      computed: window.Project.computed,
      methods: _objectSpread(_objectSpread({}, window.Project.methods), {}, {
        showLimit: function showLimit() {
          this.$refs.limitNumber.show();
        },
        checkToBack: function checkToBack() {
          //--检查是否是经过跟单操作后跳转到本页
          var prev = prevPage; //--上一页
          var prev_prev = decodeURIComponent(itou.outil.getUrlParam(prev, 'back')); //--上上一页
          var p_prev_prev = decodeURIComponent(itou.outil.getUrlParam(prev_prev, 'back')); //--上上上一页
          if (prev.has('/confirm/') && prev_prev.has('/project/gendan/') && p_prev_prev.has('/match2/?')) {
            Gray.$page.loadPage(p_prev_prev);
            return false;
          } else if (prev.has('/confirm/') && prev_prev.has('/project/gendan/')) {
            var url = '/precommend/?id=' + this.info.station_uid;
            url += '&back=' + encodeURIComponent("/user/shop/details/?id=".concat(this.info.station_uid, "&station_uuid=").concat(this.info.station_uuid));
            Gray.$page.loadPage(url);
            return false;
          } else {
            return true;
          }
        },
        back: function back() {
          if (this.checkToBack()) {
            itou.page.back();
          }
        },
        tryToDoAgain: function tryToDoAgain() {
          if (this.checkToBack()) {
            this.doAgain();
          }
        }
      })
    });
    vm.$on('msgbox_ok', function (msg) {
      if (msg == '_reSelect') {
        //--重新选单
        vm.gotoBj11x5();
      }
      if (msg == 'beforeChedan_ok') {
        //--弹窗点击确定是执行
        vm.doCancelDepute().then(function () {
          // vm.showMsgBox("已撤回，方案变为无效，您可以重新选单！", "已撤回", "Chedan_ok");
          // Gray.$page.loadPage("/project/detail/");
          Gray.$page.refresh();
        });
      }
      if (msg == 'resubmit_ok') {
        //--更换彩店提交
        var shops = itou.localJson.getJson('__cancelDepute_stationInfo') || {},
          shop = shops[vm.project_id] || {};
        if (shop && shop.id) {
          shop.change = true;
          itou.localJson.setJson('__cancelDepute_stationInfo', shops);
        }
        Gray.$page.loadPage('/confirm/');
      }
      if (msg == '__showContact') {
        //--展示联系方式
        vm.show('dp');
      }
      if (msg == '__gotoDownload') {
        //--去下载APP
        Gray.$page.loadPage('/help/download/?id=' + vm.info.shop.id + '&back=' + window.backurl);
      }
      if (msg == '__payScan_gotoBalance') {
        //--进入预存页面
        Gray.$page.loadPage('/user/shop/balance/?id=' + vm.info.shop.id + '&back=' + window.backurl);
      }
      if (msg == '__payScan_gotoSavedMa') {
        //--进入预存码页面
        // try {
        // 	_hmt.push(['_trackEvent', '普通方案', '立即加账', config.isAPP? 'APP': '微信']);
        // } catch (error) {}
        itou.baiduHm('普通方案', '立即加账'); //--百度统计
        return itou.get({
          url: 'user/info',
          data: {}
        }).then(function (data) {
          vm.user_id = data.uid;
          return itou.userLocation.getProvince().then(function (data) {
            return itou.payScan.checkLimited({
              station_user_id: vm.info.shop.id,
              user_id: vm.user_id,
              province: data.province
            }).then(function (data) {
              if (data.pay_status) {
                //--允许提交
                // payscan.center.gotoMa({key: "scan_store", id: vm.info.shop.id, project_id: vm.project_id});
                var url = '/pay/scan/savedmoney/';
                url += '?id=' + vm.info.shop.id;
                url += '&project_id=' + vm.project_id;
                url += '&back=' + window.backurl;
                Gray.$page.loadPage(url);
              } else {
                vm.showMsgBox(data.msg, data.title, '__doback_url', '知道了');
              }
            });
          });
        });
      }
    });
    vm.$on('msgbox_close', function (msg) {
      if (msg == '_reload') {
        //--刷新页面
        // try {
        // 	_hmt.push(['_trackEvent', '普通方案', '账本不足刷新', config.isAPP? 'APP': '微信']);
        // } catch (error) {
        // 	console.table(error);
        // }
        itou.baiduHm('普通方案', '账本不足刷新'); //--百度统计
        vm.reload();
      }
      if (msg == 'Chedan_ok') {
        Gray.$page.loadPage('/project/detail/');
      }
      if (msg == 'resubmit_cancel') {
        //--继续提交
        var shops = itou.localJson.getJson('__cancelDepute_stationInfo') || {},
          shop = shops[vm.project_id] || {};
        if (shop && shop.id) {
          shop.change = false;
          itou.localJson.setJson('__cancelDepute_stationInfo', shops);
        }
        Gray.$page.loadPage('/confirm/');
      }
      if (msg == '__showContact') {
        //--展示联系方式
        vm.show('dp');
      }
    });
    $('#dropload-body').dropload({
      scrollArea: window,
      autoLoad: false,
      domDown: {
        // 下方DOM
        domClass: 'dropload-down',
        domRefresh: '',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
      },
      // loadDownFn : function(me){
      //     vm.loadNext();
      //     me.resetload();
      // },
      loadUpFn: function loadUpFn(me) {
        vm.loading = true;
        vm.getInfo('project/detailV2').then(function (data) {
          var self = vm;
          payscan.project.init(data, self.payScanCallBack);
          self.payscan = payscan;
          console.log(self.payscan);
          vm.loading = false;
          if (self.ticketImg.loaded) {
            //--如果已经加载了传票数据，那么刷新的时候同时加载传票接口
            var param = {
              station_user_id: self.info.shop.id,
              project_id: self.project_id
            };
            if (self.$data._pmn) {
              param._pmn = self.$data._pmn; //--从PC进入本页，会有参数_pmn
            }

            self.ticketImg.getInfo(param).then(function () {
              self.$refs.photoswiper.initData(self.ticketImg.imgs.list); //--图片预览插件初始化数据
            });
          }
        }).then(function () {
          vm.info.zhuiMoneyCompute();
          vm.showPingce();
        }).then(function () {
          // if(self.info.liveGoal && self.info.liveStatus && self.info.jiangjin < 0){//--更新比赛即时状态
          if (vm.info.liveGoal && vm.info.liveStatus && vm.info.schedule.end && vm.info.jiangjin < 0) {
            //--更新比赛即时状态
            if (vm.info.dataType == 'jingcaiZuqiu') {
              vm.getStatus1();
            } else if (vm.info.dataType == 'jingcaiLanqiu') {
              return vm.getGoals_jclq1(); //--暂不开发
            }
          }
        });
        // .then(function () {
        //     //--检查是否是精简模式，是否开启该功能
        //     if (!baseSetting.simplify || (baseSetting.simplify && simplify.projectdetail.huodong)) {
        //         return vm.getActivityId();
        //     }
        // });
        me.resetload();
      }
    });
  };
});

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bem = exports.createComponent = void 0;
var _utils = __webpack_require__(10);
var _createNamespace = (0, _utils.createNamespace)('image-preview'),
  createComponent = _createNamespace[0],
  bem = _createNamespace[1];
exports.bem = bem;
exports.createComponent = createComponent;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.context = void 0;
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find: function find(vm) {
    return this.stack.filter(function (item) {
      return item.vm === vm;
    })[0];
  },
  remove: function remove(vm) {
    var item = this.find(vm);
    if (!item) return;
    item.vm = null;
    item.overlay = null;
    var index = this.stack.indexOf(item);
    this.stack.splice(index, 1);
  }
};
exports.context = context;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeNode = removeNode;
function removeNode(el) {
  var parent = el.parentNode;
  if (parent) {
    parent.removeChild(el);
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(20));
var _utils = __webpack_require__(10);
var _functional = __webpack_require__(21);
var _info = _interopRequireDefault(__webpack_require__(95));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('icon'),
  createComponent = _createNamespace[0],
  bem = _createNamespace[1];
function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version

var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o',
  'calender-o': 'calendar-o'
};
function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}
function Icon(h, props, slots, ctx) {
  var _props$badge;
  var name = correctName(props.name);
  var imageIcon = isImage(name);
  if (false) {}
  return h(props.tag, (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: (0, _utils.addUnit)(props.size)
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots["default"] && slots["default"](), imageIcon && h("img", {
    "class": bem('image'),
    "attrs": {
      "src": name
    }
  }), h(_info["default"], {
    "attrs": {
      "dot": props.dot,
      "info": (_props$badge = props.badge) != null ? _props$badge : props.info
    }
  })]);
}
Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  color: String,
  tag: {
    type: String,
    "default": 'i'
  },
  classPrefix: {
    type: String,
    "default": bem()
  }
};
var _default = createComponent(Icon);
exports["default"] = _default;

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/project/limit-number/index.vue?vue&type=template&id=7e0115b9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "layerbg",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.close
    }
  }, [_c("div", {
    staticClass: "layerAlert",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "larerTit"
  }, [_vm._v("什么是限号？")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "layerbtn"
  }, [_c("a", {
    on: {
      click: _vm.close
    }
  }, [_vm._v("知道了")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "layerCon"
  }, [_c("div", {
    staticClass: "layerCon_txtbox"
  }, [_c("div", {
    staticClass: "mt10"
  }, [_vm._v("限号的原因")]), _vm._v(" "), _c("p", [_vm._v("\n                    当某个投注结果累计预计赔付金额超过了国家中心系统当前赔付上限，即触发了限号的风控机制，则当前投注结果将无法购买。\n                ")]), _vm._v(" "), _c("div", [_vm._v("为什么有时限有时又不限？")]), _vm._v(" "), _c("p", [_vm._v("\n                    限号机制为动态模式，随着整体销售量的增加系统的赔付上限将逐步提升，因此会出现之前受限的投注结果后续可以再次购买的情况。\n                ")]), _vm._v(" "), _c("div", [_vm._v("限号后的方案处理")]), _vm._v(" "), _c("p", [_vm._v("\n                    系统限号后您投注结果将无法出票，店铺将为您做退款处理，如果您的方案存在部分组合限号，则正常组合将出票，限号部分将退款处理，即方案为部分出票，奖金也以实际部分出票中奖金额为准。\n                ")])])]);
}];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/project/limit-number/index.vue?vue&type=template&id=7e0115b9&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/project/limit-number/index.vue?vue&type=script&lang=js&
/**
 * 限号说明
 * @description 限号说明弹层组件
 * @author zhaoyf
 * @time 2022/12/04 15:30:29
 * @copyright 2022 itou
 */


/* harmony default export */ var limit_numbervue_type_script_lang_js_ = ({
  name: 'limit-number',
  data: function data() {
    return {
      isShow: false
    };
  },
  methods: {
    show: function show() {
      this.isShow = true;
    },
    close: function close() {
      this.isShow = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/project/limit-number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_limit_numbervue_type_script_lang_js_ = (limit_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/buness/project/limit-number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_limit_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/buness/project/limit-number/index.vue"
/* harmony default export */ var limit_number = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/img/preview.vue?vue&type=template&id=7c86f9e6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("van-image-preview", {
    attrs: {
      images: _vm.images,
      closeable: true,
      "start-position": _vm.index
    },
    on: {
      change: _vm.onChange
    },
    scopedSlots: _vm._u([{
      key: "index",
      fn: function fn() {
        return [_vm._v("第" + _vm._s(_vm.index + 1) + "页")];
      },
      proxy: true
    }]),
    model: {
      value: _vm.isShow,
      callback: function callback($$v) {
        _vm.isShow = $$v;
      },
      expression: "isShow"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/img/preview.vue?vue&type=template&id=7c86f9e6&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(6);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__(37);
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/style/index.js
var style = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/img/preview.vue?vue&type=script&lang=js&
/**
 * 图片预览
 * @description 基于vant的图片预览组件
 * @author zhaoyf
 * @time 2022/08/04 14:07:11
 * @copyright 2022 itou
 */


//--从vant中按需引用组件




/* harmony default export */ var previewvue_type_script_lang_js_ = ({
  name: 'image-preview',
  components: defineProperty_default()({}, image_preview_default.a.Component.name, image_preview_default.a.Component),
  data: function data() {
    return {
      isShow: false,
      index: 0,
      images: []
    };
  },
  methods: {
    /**
     * @function onChange
     * @description 切换触发事件
     */
    onChange: function onChange(index) {
      this.index = index;
    },
    /**
     * @function show
     * @description 展示图片预览
     */
    show: function show() {
      var imgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var len = imgs.length;
      if (len) {
        this.isShow = true;
        this.images = toConsumableArray_default()(imgs);
        this.index = i > len - 1 ? len : i;
      }
    },
    /**
     * @function initData
     * @description 初始化图片预览数据
     */
    initData: function initData() {
      var imgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var len = imgs.length;
      if (len) {
        this.images = toConsumableArray_default()(imgs);
      }
    },
    /**
     * @function open
     * @description 显示图片预览
     */
    open: function open() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var len = this.images.length;
      if (len) {
        this.isShow = true;
        this.index = i > len - 1 ? len : i;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/img/preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var img_previewvue_type_script_lang_js_ = (previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/img/preview.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  img_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/img/preview.vue"
/* harmony default export */ var preview = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(68);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(88);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _shared = __webpack_require__(50);
var _popup = __webpack_require__(90);
var _touch = __webpack_require__(24);
var _bindEvent = __webpack_require__(28);
var _icon = _interopRequireDefault(__webpack_require__(53));
var _swipe = _interopRequireDefault(__webpack_require__(16));
var _ImagePreviewItem = _interopRequireDefault(__webpack_require__(96));

// Utils
// Mixins
// Components
var _default2 = (0, _shared.createComponent)({
  mixins: [_touch.TouchMixin, (0, _popup.PopupMixin)({
    skipToggleEvent: true
  }), (0, _bindEvent.BindEventMixin)(function (bind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
  })],
  props: {
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    overlayStyle: Object,
    showIndicators: Boolean,
    images: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      "default": true
    },
    overlay: {
      type: Boolean,
      "default": true
    },
    minZoom: {
      type: [Number, String],
      "default": 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      "default": 3
    },
    transition: {
      type: String,
      "default": 'van-fade'
    },
    showIndex: {
      type: Boolean,
      "default": true
    },
    swipeDuration: {
      type: [Number, String],
      "default": 300
    },
    startPosition: {
      type: [Number, String],
      "default": 0
    },
    overlayClass: {
      type: String,
      "default": (0, _shared.bem)('overlay')
    },
    closeIcon: {
      type: String,
      "default": 'clear'
    },
    closeOnPopstate: {
      type: Boolean,
      "default": true
    },
    closeIconPosition: {
      type: String,
      "default": 'top-right'
    }
  },
  data: function data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null
    };
  },
  mounted: function mounted() {
    this.resize();
  },
  watch: {
    startPosition: 'setActive',
    value: function value(val) {
      var _this = this;
      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(function () {
          _this.resize();
          _this.$refs.swipe.swipeTo(+_this.startPosition, {
            immediate: true
          });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active]
        });
      }
    }
  },
  methods: {
    resize: function resize() {
      if (this.$el && this.$el.getBoundingClientRect) {
        var rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },
    emitClose: function emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },
    emitScale: function emitScale(args) {
      this.$emit('scale', args);
    },
    setActive: function setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    genIndex: function genIndex() {
      var h = this.$createElement;
      if (this.showIndex) {
        return h("div", {
          "class": (0, _shared.bem)('index')
        }, [this.slots('index', {
          index: this.active
        }) || this.active + 1 + " / " + this.images.length]);
      }
    },
    genCover: function genCover() {
      var h = this.$createElement;
      var cover = this.slots('cover');
      if (cover) {
        return h("div", {
          "class": (0, _shared.bem)('cover')
        }, [cover]);
      }
    },
    genImages: function genImages() {
      var _this2 = this;
      var h = this.$createElement;
      return h(_swipe["default"], {
        "ref": "swipe",
        "attrs": {
          "lazyRender": true,
          "loop": this.loop,
          "duration": this.swipeDuration,
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators,
          "indicatorColor": "white"
        },
        "class": (0, _shared.bem)('swipe'),
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image) {
        return h(_ImagePreviewItem["default"], {
          "attrs": {
            "src": image,
            "show": _this2.value,
            "active": _this2.active,
            "maxZoom": _this2.maxZoom,
            "minZoom": _this2.minZoom,
            "rootWidth": _this2.rootWidth,
            "rootHeight": _this2.rootHeight
          },
          "on": {
            "scale": _this2.emitScale,
            "close": _this2.emitClose
          }
        });
      })]);
    },
    genClose: function genClose() {
      var h = this.$createElement;
      if (this.closeable) {
        return h(_icon["default"], {
          "attrs": {
            "role": "button",
            "name": this.closeIcon
          },
          "class": (0, _shared.bem)('close-icon', this.closeIconPosition),
          "on": {
            "click": this.emitClose
          }
        });
      }
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterLeave": this.onClosed
      }
    }, [this.shouldRender ? h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [(0, _shared.bem)(), this.className]
    }, [this.genClose(), this.genImages(), this.genIndex(), this.genCover()]) : null]);
  }
});
exports["default"] = _default2;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PopupMixin = PopupMixin;
exports.popupMixinProps = void 0;
var _context = __webpack_require__(51);
var _overlay = __webpack_require__(91);
var _event = __webpack_require__(14);
var _node = __webpack_require__(52);
var _scroll = __webpack_require__(47);
var _touch = __webpack_require__(24);
var _portal = __webpack_require__(93);
var _closeOnPopstate = __webpack_require__(94);

// Context
// Utils
// Mixins
var popupMixinProps = {
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show popup
  value: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    "default": true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    "default": true
  }
};
exports.popupMixinProps = popupMixinProps;
function PopupMixin(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    mixins: [_touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin, (0, _portal.PortalMixin)({
      afterPortal: function afterPortal() {
        if (this.overlay) {
          (0, _overlay.updateOverlay)();
        }
      }
    })],
    provide: function provide() {
      return {
        vanPopup: this
      };
    },
    props: popupMixinProps,
    data: function data() {
      this.onReopenCallback = [];
      return {
        inited: this.value
      };
    },
    computed: {
      shouldRender: function shouldRender() {
        return this.inited || !this.lazyRender;
      }
    },
    watch: {
      value: function value(val) {
        var type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();
        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },
      overlay: 'renderOverlay'
    },
    mounted: function mounted() {
      if (this.value) {
        this.open();
      }
    },
    /* istanbul ignore next */
    activated: function activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },
    beforeDestroy: function beforeDestroy() {
      (0, _overlay.removeOverlay)(this);
      if (this.opened) {
        this.removeLock();
      }
      if (this.getContainer) {
        (0, _node.removeNode)(this.$el);
      }
    },
    /* istanbul ignore next */
    deactivated: function deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
    },
    methods: {
      open: function open() {
        /* istanbul ignore next */
        if (this.$isServer || this.opened) {
          return;
        } // cover default zIndex

        if (this.zIndex !== undefined) {
          _context.context.zIndex = this.zIndex;
        }
        this.opened = true;
        this.renderOverlay();
        this.addLock();
        this.onReopenCallback.forEach(function (callback) {
          callback();
        });
      },
      addLock: function addLock() {
        if (this.lockScroll) {
          (0, _event.on)(document, 'touchstart', this.touchStart);
          (0, _event.on)(document, 'touchmove', this.onTouchMove);
          if (!_context.context.lockCount) {
            document.body.classList.add('van-overflow-hidden');
          }
          _context.context.lockCount++;
        }
      },
      removeLock: function removeLock() {
        if (this.lockScroll && _context.context.lockCount) {
          _context.context.lockCount--;
          (0, _event.off)(document, 'touchstart', this.touchStart);
          (0, _event.off)(document, 'touchmove', this.onTouchMove);
          if (!_context.context.lockCount) {
            document.body.classList.remove('van-overflow-hidden');
          }
        }
      },
      close: function close() {
        if (!this.opened) {
          return;
        }
        (0, _overlay.closeOverlay)(this);
        this.opened = false;
        this.removeLock();
        this.$emit('input', false);
      },
      onTouchMove: function onTouchMove(event) {
        this.touchMove(event);
        var direction = this.deltaY > 0 ? '10' : '01';
        var el = (0, _scroll.getScroller)(event.target, this.$el);
        var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
        var status = '11';
        /* istanbul ignore next */

        if (scrollTop === 0) {
          status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
          status = '10';
        }
        /* istanbul ignore next */

        if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
          (0, _event.preventDefault)(event, true);
        }
      },
      renderOverlay: function renderOverlay() {
        var _this = this;
        if (this.$isServer || !this.value) {
          return;
        }
        this.$nextTick(function () {
          _this.updateZIndex(_this.overlay ? 1 : 0);
          if (_this.overlay) {
            (0, _overlay.openOverlay)(_this, {
              zIndex: _context.context.zIndex++,
              duration: _this.duration,
              className: _this.overlayClass,
              customStyle: _this.overlayStyle
            });
          } else {
            (0, _overlay.closeOverlay)(_this);
          }
        });
      },
      updateZIndex: function updateZIndex(value) {
        if (value === void 0) {
          value = 0;
        }
        this.$el.style.zIndex = ++_context.context.zIndex + value;
      },
      onReopen: function onReopen(callback) {
        this.onReopenCallback.push(callback);
      }
    }
  };
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports.updateOverlay = updateOverlay;
exports.openOverlay = openOverlay;
exports.closeOverlay = closeOverlay;
exports.removeOverlay = removeOverlay;
var _extends2 = _interopRequireDefault(__webpack_require__(25));
var _overlay = _interopRequireDefault(__webpack_require__(92));
var _context = __webpack_require__(51);
var _functional = __webpack_require__(21);
var _node = __webpack_require__(52);
var defaultConfig = {
  className: '',
  customStyle: {}
};
function mountOverlay(vm) {
  return (0, _functional.mount)(_overlay["default"], {
    on: {
      // close popup when overlay clicked & closeOnClickOverlay is true
      click: function click() {
        vm.$emit('click-overlay');
        if (vm.closeOnClickOverlay) {
          if (vm.onClickOverlay) {
            vm.onClickOverlay();
          } else {
            vm.close();
          }
        }
      }
    }
  });
}
function updateOverlay(vm) {
  var item = _context.context.find(vm);
  if (item) {
    var el = vm.$el;
    var config = item.config,
      overlay = item.overlay;
    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    }
    (0, _extends2["default"])(overlay, defaultConfig, config, {
      show: true
    });
  }
}
function openOverlay(vm, config) {
  var item = _context.context.find(vm);
  if (item) {
    item.config = config;
  } else {
    var overlay = mountOverlay(vm);
    _context.context.stack.push({
      vm: vm,
      config: config,
      overlay: overlay
    });
  }
  updateOverlay(vm);
}
function closeOverlay(vm) {
  var item = _context.context.find(vm);
  if (item) {
    item.overlay.show = false;
  }
}
function removeOverlay(vm) {
  var item = _context.context.find(vm);
  if (item) {
    (0, _node.removeNode)(item.overlay.$el);
    _context.context.remove(vm);
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(20));
var _extends2 = _interopRequireDefault(__webpack_require__(25));
var _utils = __webpack_require__(10);
var _functional = __webpack_require__(21);
var _event = __webpack_require__(14);

// Utils
var _createNamespace = (0, _utils.createNamespace)('overlay'),
  createComponent = _createNamespace[0],
  bem = _createNamespace[1];
function preventTouchMove(event) {
  (0, _event.preventDefault)(event, true);
}
function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2["default"])({
    zIndex: props.zIndex
  }, props.customStyle);
  if ((0, _utils.isDef)(props.duration)) {
    style.animationDuration = props.duration + "s";
  }
  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": props.lockScroll ? preventTouchMove : _utils.noop
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots["default"] == null ? void 0 : slots["default"]()])]);
}
Overlay.props = {
  show: Boolean,
  zIndex: [Number, String],
  duration: [Number, String],
  className: null,
  customStyle: Object,
  lockScroll: {
    type: Boolean,
    "default": true
  }
};
var _default = createComponent(Overlay);
exports["default"] = _default;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PortalMixin = PortalMixin;
function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }
  return selector();
}
function PortalMixin(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    ref = _ref.ref,
    afterPortal = _ref.afterPortal;
  return {
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var el = ref ? this.$refs[ref] : this.$el;
        var container;
        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }
        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }
        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  };
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CloseOnPopstateMixin = void 0;
var _event = __webpack_require__(14);
var _bindEvent = __webpack_require__(28);
var CloseOnPopstateMixin = {
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    onPopstate: function onPopstate() {
      this.close();
      this.shouldReopen = false;
    },
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }
      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _event.on : _event.off;
        action(window, 'popstate', this.onPopstate);
      }
    }
  }
};
exports.CloseOnPopstateMixin = CloseOnPopstateMixin;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(20));
var _utils = __webpack_require__(10);
var _functional = __webpack_require__(21);

// Utils
var _createNamespace = (0, _utils.createNamespace)('info'),
  createComponent = _createNamespace[0],
  bem = _createNamespace[1];
function Info(h, props, slots, ctx) {
  var dot = props.dot,
    info = props.info;
  var showInfo = (0, _utils.isDef)(info) && info !== '';
  if (!dot && !showInfo) {
    return;
  }
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      dot: dot
    })
  }, (0, _functional.inherit)(ctx, true)]), [dot ? '' : props.info]);
}
Info.props = {
  dot: Boolean,
  info: [Number, String]
};
var _default = createComponent(Info);
exports["default"] = _default;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _shared = __webpack_require__(50);
var _number = __webpack_require__(80);
var _event = __webpack_require__(14);
var _touch = __webpack_require__(24);
var _image = _interopRequireDefault(__webpack_require__(97));
var _loading = _interopRequireDefault(__webpack_require__(69));
var _swipeItem = _interopRequireDefault(__webpack_require__(17));

// Utils
// Mixins
// Component
function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}
var _default = {
  mixins: [_touch.TouchMixin],
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    };
  },
  computed: {
    vertical: function vertical() {
      var rootWidth = this.rootWidth,
        rootHeight = this.rootHeight;
      var rootRatio = rootHeight / rootWidth;
      return this.imageRatio > rootRatio;
    },
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };
      if (scale !== 1) {
        var offsetX = this.moveX / scale;
        var offsetY = this.moveY / scale;
        style.transform = "scale(" + scale + ", " + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
      }
      return style;
    },
    maxMoveX: function maxMoveX() {
      if (this.imageRatio) {
        var displayWidth = this.vertical ? this.rootHeight / this.imageRatio : this.rootWidth;
        return Math.max(0, (this.scale * displayWidth - this.rootWidth) / 2);
      }
      return 0;
    },
    maxMoveY: function maxMoveY() {
      if (this.imageRatio) {
        var displayHeight = this.vertical ? this.rootHeight : this.rootWidth * this.imageRatio;
        return Math.max(0, (this.scale * displayHeight - this.rootHeight) / 2);
      }
      return 0;
    }
  },
  watch: {
    active: 'resetScale',
    show: function show(val) {
      if (!val) {
        this.resetScale();
      }
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    resetScale: function resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },
    setScale: function setScale(scale) {
      scale = (0, _number.range)(scale, +this.minZoom, +this.maxZoom);
      if (scale !== this.scale) {
        this.scale = scale;
        this.$emit('scale', {
          scale: this.scale,
          index: this.active
        });
      }
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.setScale(scale);
      this.moveX = 0;
      this.moveY = 0;
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;
      var _this$offsetX = this.offsetX,
        offsetX = _this$offsetX === void 0 ? 0 : _this$offsetX;
      this.touchStart(event);
      this.touchStartTime = new Date();
      this.fingerNum = touches.length;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.moving = this.fingerNum === 1 && this.scale !== 1;
      this.zooming = this.fingerNum === 2 && !offsetX;
      if (this.zooming) {
        this.startScale = this.scale;
        this.startDistance = getDistance(event.touches);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;
      this.touchMove(event);
      if (this.moving || this.zooming) {
        (0, _event.preventDefault)(event, true);
      }
      if (this.moving) {
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _number.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _number.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }
      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.setScale(scale);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      var stopPropagation = false;
      /* istanbul ignore else */

      if (this.moving || this.zooming) {
        stopPropagation = true;
        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }
        if (!event.touches.length) {
          if (this.zooming) {
            this.moveX = (0, _number.range)(this.moveX, -this.maxMoveX, this.maxMoveX);
            this.moveY = (0, _number.range)(this.moveY, -this.maxMoveY, this.maxMoveY);
            this.zooming = false;
          }
          this.moving = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;
          if (this.scale < 1) {
            this.resetScale();
          }
        }
      } // eliminate tap delay on safari

      (0, _event.preventDefault)(event, stopPropagation);
      this.checkTap();
      this.resetTouchStatus();
    },
    checkTap: function checkTap() {
      var _this = this;
      if (this.fingerNum > 1) {
        return;
      }
      var _this$offsetX2 = this.offsetX,
        offsetX = _this$offsetX2 === void 0 ? 0 : _this$offsetX2,
        _this$offsetY = this.offsetY,
        offsetY = _this$offsetY === void 0 ? 0 : _this$offsetY;
      var deltaTime = new Date() - this.touchStartTime;
      var TAP_TIME = 250;
      var TAP_OFFSET = 5;
      if (offsetX < TAP_OFFSET && offsetY < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (this.doubleTapTimer) {
          clearTimeout(this.doubleTapTimer);
          this.doubleTapTimer = null;
          this.toggleScale();
        } else {
          this.doubleTapTimer = setTimeout(function () {
            _this.$emit('close');
            _this.doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    },
    onLoad: function onLoad(event) {
      var _event$target = event.target,
        naturalWidth = _event$target.naturalWidth,
        naturalHeight = _event$target.naturalHeight;
      this.imageRatio = naturalHeight / naturalWidth;
    }
  },
  render: function render() {
    var h = arguments[0];
    var imageSlots = {
      loading: function loading() {
        return h(_loading["default"], {
          "attrs": {
            "type": "spinner"
          }
        });
      }
    };
    return h(_swipeItem["default"], {
      "class": (0, _shared.bem)('swipe-item')
    }, [h(_image["default"], {
      "attrs": {
        "src": this.src,
        "fit": "contain"
      },
      "class": (0, _shared.bem)('image', {
        vertical: this.vertical
      }),
      "style": this.imageStyle,
      "scopedSlots": imageSlots,
      "on": {
        "load": this.onLoad
      }
    })]);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);
exports.__esModule = true;
exports["default"] = void 0;
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(20));
var _utils = __webpack_require__(10);
var _icon = _interopRequireDefault(__webpack_require__(53));
var _createNamespace = (0, _utils.createNamespace)('image'),
  createComponent = _createNamespace[0],
  bem = _createNamespace[1];
var _default = createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconPrefix: String,
    showError: {
      type: Boolean,
      "default": true
    },
    showLoading: {
      type: Boolean,
      "default": true
    },
    errorIcon: {
      type: String,
      "default": 'photo-fail'
    },
    loadingIcon: {
      type: String,
      "default": 'photo'
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};
      if ((0, _utils.isDef)(this.width)) {
        style.width = (0, _utils.addUnit)(this.width);
      }
      if ((0, _utils.isDef)(this.height)) {
        style.height = (0, _utils.addUnit)(this.height);
      }
      if ((0, _utils.isDef)(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(this.radius);
      }
      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;
    if ($Lazyload && _utils.inBrowser) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;
    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;
      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;
      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    genPlaceholder: function genPlaceholder() {
      var h = this.$createElement;
      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(_icon["default"], {
          "attrs": {
            "name": this.loadingIcon,
            "classPrefix": this.iconPrefix
          },
          "class": bem('loading-icon')
        })]);
      }
      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(_icon["default"], {
          "attrs": {
            "name": this.errorIcon,
            "classPrefix": this.iconPrefix
          },
          "class": bem('error-icon')
        })]);
      }
    },
    genImage: function genImage() {
      var h = this.$createElement;
      var imgData = {
        "class": bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };
      if (this.error) {
        return;
      }
      if (this.lazyLoad) {
        return h("img", (0, _babelHelperVueJsxMergeProps["default"])([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }
      return h("img", (0, _babelHelperVueJsxMergeProps["default"])([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.genImage(), this.genPlaceholder(), this.slots()]);
  }
});
exports["default"] = _default;

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

/**
 * 传票数据对象
 * by zhaoyf    2020年2月28日14:06:35
 */
function layerConfirm(params) {
  //--弹层提示
  vm.layer.confirm.warning({
    title: params.title || '',
    text: params.text || '',
    buttons: [{
      text: '关闭弹窗'
    }, {
      text: '联系店铺',
      fun: function fun() {
        vm.showcontact({
          vm: vm,
          station_user_id: params.station_user_id
        });
      } //--回调
    }]
  });
}

function layerAlert(params) {
  //--弹层提示信息
  vm.layer.alert.warning({
    title: params.title || '',
    text: params.text || '',
    buttons: [{
      text: '知道了',
      fun: function fun() {
        console.log('按钮的回调');
      } //--回调
    }]
  });
}

function layerConfirm_tousu(params) {
  //--弹层提示
  vm.layer.confirm.warning({
    title: params.title || '',
    text: params.text || '',
    buttons: [{
      text: '关闭弹窗'
    }, {
      text: '查看处理详情',
      fun: function fun() {
        Gray.$page.loadPage('/user/shop/feedback/complain/?id=' + params.id + '&back=' + window.backurl);
      } //--回调
    }]
  });
}

function numToTime(num) {
  //--数字转时间
  if (num <= 0) {
    return '0秒';
  }
  var base = [3600, 60],
    //--基数
    len = base.length,
    times = [];
  for (var i = 0; i < len; i++) {
    times[i] = Math.floor(num / base[i]);
    num %= base[i];
  }
  var r = '';
  times[0] ? r += times[0] + '时' : '';
  times[1] ? r += times[1] + '分' : '';
  num ? r += num + '秒' : '';
  return r;
}
function dataReset() {
  var self = this;
  self.apiData = null; //--接收接口返回数据，为null时，表示未接单
  self.times = {
    //--各时间节点
    order_ticket_time: null,
    //--接单时间
    urge_start_time: null,
    //--可催票的起始时间
    urge_end_time: null,
    //--可催票的结束时间
    urge_time: null,
    //--客户催票的时间
    upload_time: null,
    //--上传时间
    reload_start_time: null,
    //--可要求重传的起始时间
    reload_end_time: null,
    //--可要求重传的结束时间
    reload_time: null,
    //--重传时间
    get_ticket_time: null,
    //--取票时间
    pre_prize_time: null,
    //--开奖时间
    server_time: null //--服务器当前时间
  };

  self.status = {
    //--各种状态
    source: null,
    //-- 来源 是否勾选: 0:客户要求上传,已勾选1.店铺主动上传
    upload_status: null,
    //--上传状态0:未上传,1.已上传
    urge_status: null,
    //--催票状态 0:未进行催票,-2:已进行催票
    reload_status: null,
    //--重新上传状态 0:不要求重传,-1,要求重传,2:已重传
    status: null,
    //-- 当前票样状态 0:未上传,1:已上传,-1 :要求重传,-2:客户催票,2.已重传
    get_ticket_status: null,
    //-- 是否取票 0:未取票,10:已取票
    has_complaint: null //-- 是否有投诉记录 0:没有,1:存在
  };

  self.info = {
    //--未传票时展示信息
    jiedan: true,
    //--是否已接单，默认true；errcode为-70的时候，设置为false
    order_status: null,
    //--方案状态0，未接单 1，成功出票 2，出票失败 3，过点撤销 4，接单成功
    code: 0,
    //--当前提示信息code，也就是接口返回的errcode
    icon: null,
    //--图标
    msg: null //--描述信息
  };

  self.imgs = {
    //--票样图片信息
    list: [],
    //--图片列表(缩略图)
    listOrigin: [],
    //--图片列表(原图)
    curr: null //--当前大图,实际url地址
  };

  self.mode = ''; //--当前展示模式；由status.source + status.upload_status拼接而成；共4个值：00,01,10,11
  self.uid = '';
  self.canOperation = true; //--是否可以操作按钮，默认可以；但是如果是合买，需要判断是否是发起者，是发起者才可以操作
  self.urgeCount = {
    //--催传倒计时
    last: 0,
    //--倒计时秒数
    text: '' //--倒计时文本
  };

  self.project_id = null; //--方案id
  self.station_user_id = null; //--店铺id
  self.showLayer = null;
  self.layerContent = {
    complaintLayer: '',
    //--投诉的详细内容
    reloadLayer: '' //--重传的详细内容
  };

  self.complaintLayer = null; //--投诉弹层管理对象
  self.reloadLayer = null; //--重传弹层管理对象
  self.loaded = false;
  self.depute_info = null;
  self.swiper = null;
}
function TicketImg() {
  if (!(this instanceof TicketImg)) {
    //--写法兼容
    return new TicketImg();
  }
  var self = this;
  dataReset.call(self);
}
TicketImg.prototype.doReset = function () {
  //--数据初始化
  var self = this;
  dataReset.call(self);
};
//--检查方案的状态
TicketImg.prototype.checkOrderStatus = function (depute_info) {
  var self = this;
  self.depute_info = depute_info;
  self.info.order_status = depute_info.order_status; //--方案状态
  var source = depute_info.ticket_source; //--是否要求上传票样
  source = source == 0 ? 0 : 1;
  self.status.source = String(source);
  var upload_status = depute_info.ticket_uploaded; //--票样上传状态
  upload_status = upload_status == 0 ? 0 : 1;
  self.status.upload_status = String(upload_status);
  self.mode = String(self.status.source) + String(self.status.upload_status); //--拼接模式信息
  // if(self.info.order_status == '2' || self.info.order_status == '3'){//--出票失败，过点撤销
  //     // self.loaded = self.loaded || !depute_info.hm;
  //     self.info.code = '-9527';
  // }
};

TicketImg.prototype.complaintExist = function () {
  var self = this;
  return itou.get({
    //--投诉检测
    url: 'complaint/exist',
    data: {
      project_id: self.project_id,
      //--方案id
      station_user_id: self.station_user_id //--店铺id
    }
  }).then(function (data) {
    self.status.has_complaint = !!data.is_exist;
  });
};
//--获取票样详情，参数是：{project_id: 方案id, station_user_id: 店铺id}
TicketImg.prototype.getInfo = function (data) {
  var self = this;
  self.project_id = data.project_id; //--方案id
  self.station_user_id = data.station_user_id; //--店铺id
  self.complaintExist();
  return itou.get({
    url: 'ticketimg/get',
    data: data,
    specialErr: self.specialErr() //--特殊错误处理
  }).then(function (data) {
    self.handleApiData(data);
  });
};
TicketImg.prototype.specialErr = function () {
  //--特殊错误号处理
  var self = this;
  specialErr = {};
  function errInfo(icon, msg) {
    return function (rlt) {
      //--页面展示信息
      self.info.code = rlt.errcode;
      self.info.msg = msg || rlt.msg || rlt.message;
      self.info.icon = icon || '';
    };
  }
  specialErr['-70'] = function (rlt) {
    //--未接单
    self.info.jiedan = false;
    if (self.status.source == '1') {
      self.info.code = rlt.errcode;
      self.info.msg = '方案未设置要求店铺上传票照片，<br/>如您需要此方案的票照片，请联系店铺沟通';
      self.info.icon = 'gettick_unup';
    }
  };
  specialErr['-71'] = function (rlt) {
    //--出票失败，过点撤销
    self.info.code = rlt.errcode;
    self.info.msg = '方案未成功出票，无法上传票照片';
    self.info.icon = 'gettick_unsed';
  };
  specialErr['-72'] = errInfo('gettick_unsed', '方案未设置要求店铺上传票照片，<br/>如您需要此方案的票照片，请联系店铺沟通'); //--未设置要上传
  specialErr['-73'] = errInfo('gettick_time', '因超过店铺代保管票和传票操作有效期，<br/>店铺已无法再传票，如有需要请联系店铺沟通'); //--超时
  specialErr['-74'] = errInfo('gettick_unsed'); //--已取票
  specialErr['-11'] = errInfo(); //--合买非参与人
  specialErr['-12'] = errInfo(); //--方案非本人
  return specialErr;
};
//--处理接口数据
TicketImg.prototype.handleApiData = function (apiData) {
  var self = this;
  if (JSON.stringify(apiData) == '{}') {
    //--apiData数据为空json的时候，表示未接单
    return;
  } else {
    self.apiData = apiData;
  }
  self.info.code = 0;
  for (var i in self.times) {
    //--处理借口时间，以方便计算
    if (apiData[i]) {
      console.log(i);
      var time = String(apiData[i]).toDate(); //--文本转时间
      if (time == 'Invalid Date') {
        //--类型转换失败
        console.table(apiData[i], '无法转换为时间');
      } else {
        //--时间转换成功
        self.times[i] = time;
      }
    }
  }
  //--修改服务端传回的时间，用来测试计时器
  // self.times.server_time = new Date(self.times.server_time.getTime() + (3600 * 2 - 700) * 1000);
  for (var i in self.status) {
    //--处理接口状态信息
    if (apiData[i] || apiData[i] == 0) {
      self.status[i] = String(apiData[i]);
    }
  }
  self.imgs.list = apiData.img || [];
  self.imgs.listOrigin = apiData.original_img || [];
  self.mode = String(self.status.source) + String(self.status.upload_status); //--拼接模式信息
  self.uid = apiData.user_id; //--发起人id；如果depute_info.uid存在，则代表是合买当前登录人；
  if (self.depute_info.uid) {
    self.canOperation = self.uid == self.depute_info.uid;
  }
  if (!self.times.server_time) {
    self.times.server_time = new Date();
  }
  if (self.mode == '00') {
    //--计算催传倒计时秒数
    if (self.times.urge_start_time > self.times.server_time) {
      self.urgeCount.last = Math.floor((self.times.urge_start_time - self.times.server_time) / 1000);
      self.urgeCount.text = numToTime(self.urgeCount.last); //--秒数转时间
    }
  }

  if (self.mode == '00' || self.mode == '01') {
    self.serverTimeCount(); //--服务器时间计时
  }

  if (self.mode == '01') {
    self.createComplaintLayer(); //--创建投诉弹层管理对象
    self.createComplaintLayer('reloadLayer'); //--创建重传弹层管理对象
  }

  if (self.mode == '11' || self.mode == '01') {
    window.setTimeout(function () {
      if (!self.swiper) {
        self.swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true
          // loop : true,
        });
      }
    }, 300);
  }
};
//--服务器时间计时
TicketImg.prototype.serverTimeCount = function () {
  var self = this,
    urgeCount = self.urgeCount,
    key = '__TicketImg_serverTimeCount_key';
  var server_time = self.times.server_time,
    //--服务器时间
    pre_prize_time = self.times.pre_prize_time; //--开奖时间
  var endTime = new Date(Date.parse(pre_prize_time) + 7 * 24 * 3600 * 1000); //--开奖7个自然日
  if (server_time <= endTime) {
    //--超过开奖7个自然日不需要计时
    itou.outil.timmer.clearTimmer(key);
    itou.outil.timmer.newTimmer({
      //--开始倒计时
      key: key,
      timeout: 1000,
      fun: function fun() {
        // console.log(endTime, self.times.server_time);
        self.times.server_time = new Date(Date.parse(self.times.server_time) + 1000);
        if (self.mode == '00') {
          //--计算催传倒计时秒数
          if (self.times.urge_start_time >= self.times.server_time) {
            urgeCount.last = Math.floor((self.times.urge_start_time - self.times.server_time) / 1000);
            urgeCount.text = numToTime(urgeCount.last); //--秒数转时间
            if (urgeCount.last <= 0) {
              urgeCount.last = 0;
              urgeCount.text = '';
            }
          }
        }
      }
    });
  }
};
//--催传点击事件
TicketImg.prototype.urgeEvent = function () {
  var self = this;
  if (self.urgeCount.last > 0) {
    //--倒计时进行中禁止催传
    return;
  }
  if (self.status.urge_status == '-2') {
    //--已经进行过催传禁止催传
    return;
  }
  if (self.status.get_ticket_status == '10') {
    //--已取票
    layerConfirm({
      station_user_id: self.station_user_id,
      title: '您已取票无法催传',
      text: '店铺标记该方案您已取走票，已无法拍照上传。建议您电话联系店铺确认'
    });
    return;
  }
  var server_time = self.times.server_time,
    //--服务器时间
    order_ticket_time = self.times.order_ticket_time,
    //--接单时间
    pre_prize_time = self.times.pre_prize_time; //--开奖时间
  var startTime = new Date(Date.parse(order_ticket_time) + 2 * 3600 * 1000),
    //--接单两小时
    endTime = new Date(Date.parse(pre_prize_time) + 5 * 24 * 3600 * 1000); //--开奖5个自然日
  if (server_time > startTime && server_time < endTime) {
    //--在接单2小时后 & 开奖时间之后的5个自然日内
    itou.get({
      //--执行催传
      url: 'ticketImg/urge',
      data: {
        project_id: self.project_id,
        //--方案id
        station_user_id: self.station_user_id //--店铺id
      },

      specialErr: {
        '0': function _(rlt) {
          self.status.urge_status = '-2';
          self.times.urge_time = self.times.server_time;
          layerAlert({
            station_user_id: self.station_user_id,
            title: rlt.title,
            text: rlt.msg
          });
        }
      }
    }).then(function (data) {
      //--成功后更改催传状态和催传时间
      self.status.urge_status = '-2';
      self.times.urge_time = self.times.server_time;
    });
  } else if (server_time >= endTime) {
    //--超过开奖时间的5个自然日
    layerConfirm({
      station_user_id: self.station_user_id,
      title: '已无法催传票',
      text: '方案已超过可发起催传请求的有效期，建议您电话联系店铺沟通'
    });
  }
};
//--创建投诉弹层管理对象
TicketImg.prototype.createComplaintLayer = function (type) {
  var self = this;
  type = type || 'complaintLayer';
  var Layer = function Layer(self) {
    var me = this;
    me.parent = self;
    // me.defer = $.Deferred();
    me.show = function (data) {
      me.defer = $.Deferred();
      self.showLayer = type;
      return me.defer.promise();
    };
    me.cancel = function () {
      me.defer = null;
      self.layerContent[type] = '';
      self.showLayer = null;
    };
    me.checData = function () {
      if (self.layerContent[type].length < 10) {
        vm.layer.tip.error('请至少输入10个字');
        return false;
      }
      return true;
    };
    me.ok = function () {
      if (me.checData()) {
        me.defer.resolve({
          content: self.layerContent[type]
        });
        me.cancel();
      }
    };
  };
  self[type] = new Layer(self);
};
//--尝试投诉
//--参数：type: 20:店铺未上传票 21:店铺未重传票 22:店铺重传票不满意
//--参数：content: 投诉的具体内容
//--参数：fun，成功投诉后的回调
//--参数：beforeAdd[function],返回值[promise]，验证可投诉之后，创建投诉之前，执行的代码，例如弹层提交信息等
TicketImg.prototype.tryToAddComplaint = function (params) {
  var self = this;
  return itou.get({
    //--投诉检测
    url: 'complaint/check',
    data: {
      project_id: self.project_id,
      //--方案id
      station_user_id: self.station_user_id,
      //--店铺id
      type: params.type //--20:店铺未上传票 21:店铺未重传票 22:店铺重传票不满意
    },

    specialErr: {
      '-212': function _(rlt) {
        layerConfirm({
          station_user_id: self.station_user_id,
          title: rlt.title,
          text: rlt.msg
        });
      },
      '-4004': function _(rlt) {
        self.status.has_complaint = true;
        layerConfirm_tousu({
          station_user_id: self.station_user_id,
          text: rlt.msg,
          id: rlt.data.id
        });
      },
      '-4005': function _(rlt) {
        self.status.has_complaint = true;
        layerConfirm_tousu({
          text: rlt.msg,
          id: rlt.data.id
        });
      }
    }
  }).then(function (data) {
    if (params.beforeAdd) {
      //--如果有beforeAdd参数，则返回beforeAdd
      return params.beforeAdd(data);
    } else {
      return data;
    }
  }).then(function (data) {
    return itou.get({
      //--发起投诉，类型20:店铺未上传票
      url: 'complaint/add',
      data: {
        project_id: self.project_id,
        //--方案id
        station_user_id: self.station_user_id,
        //--店铺id
        type: params.type,
        //--20:店铺未上传票 21:店铺未重传票 22:店铺重传票不满意
        content: params.content || data.content || ''
      }
    });
  }).then(function (data) {
    self.status.has_complaint = true;
    params.fun(data); //--执行回调
  });
};
//--投诉按钮点击事件
TicketImg.prototype.complaintEvent = function () {
  var self = this;
  if (self.mode == '00') {
    //--已勾选未上传
    var server_time = self.times.server_time,
      //--服务器时间
      order_ticket_time = self.times.order_ticket_time,
      //--接单时间
      pre_prize_time = self.times.pre_prize_time; //--开奖时间
    var startTime = new Date(Date.parse(order_ticket_time) + 12 * 3600 * 1000),
      //--接单12小时
      endTime = new Date(Date.parse(pre_prize_time) + 7 * 24 * 3600 * 1000); //--开奖7个自然日
    if (server_time <= startTime) {
      //--在接单12小时之内
      layerAlert({
        title: '暂不能投诉',
        text: '店铺接单12个小时后未传票，才能投诉哦（' + numToTime((startTime - server_time) / 1000) + '后可投诉）。店铺繁忙时，上传有可能延迟，请您耐心等待'
      });
    } else if (server_time >= endTime) {
      //--在开奖时间之后的7个自然日后
      layerAlert({
        title: '已无法投诉',
        text: '方案超过投诉有效期，已无法投诉。建议您电话联系店铺沟通'
      });
    } else {
      //--在接单12小时后 & 开奖时间之后的7个自然日内
      self.tryToAddComplaint({
        type: 20,
        content: '店铺未传票',
        fun: function fun(data) {
          layerAlert({
            title: '已投诉店铺',
            text: '平台将联系店铺24小时内拍照上传票照片，若店铺未上传将给予严肃处理，请耐心等待'
          });
        }
      });
    }
  } else if (self.mode == '01') {
    //--已勾选已上传
    var reload_status = self.status.reload_status; //--重传状态
    if (reload_status == '0') {
      //--客户未发起重拍
      layerAlert({
        title: '暂不能投诉',
        text: '如店铺上传的票照片有问题，请先点击【重传】，让店铺重新上传票照片。若对店铺重传不满意，重传操作12小时后可投诉'
      });
      return;
    }
    var server_time = self.times.server_time,
      //--服务器时间
      reload_time = self.times.reload_time,
      //--发起重传时间
      pre_prize_time = self.times.pre_prize_time; //--开奖时间
    var startTime = new Date(Date.parse(reload_time) + 12 * 3600 * 1000),
      //--发起重传12小时
      endTime = new Date(Date.parse(pre_prize_time) + 7 * 24 * 3600 * 1000); //--开奖7个自然日
    if (reload_status == '-1') {
      //--客户已发起重拍
      if (server_time < startTime) {
        //--发起重传请求12小时内
        layerConfirm({
          station_user_id: self.station_user_id,
          title: '暂不能投诉',
          text: '重传操作12小时后，店铺未重传或对店铺重传照片不满意可投诉（' + numToTime((startTime - server_time) / 1000) + '后可投诉）。建议您先联系店铺沟通'
        });
      } else if (server_time > startTime && server_time > endTime) {
        //--发起重拍请求12小时后店铺未再次拍票上传 & 开奖时间之后的7个自然日后
        layerAlert({
          title: '该方案已无法投诉',
          text: '方案超过投诉有效期，已无法投诉。建议您电话联系店铺沟通'
        });
      } else {
        self.tryToAddComplaint({
          type: 21,
          content: '店铺未重传',
          fun: function fun(data) {
            layerAlert({
              title: '已投诉店铺',
              text: '平台将联系店铺24小时内重新拍照上传票照片，若店铺未上传将给予严肃处理，请耐心等待'
            });
          }
        });
      }
      return;
    } else if (reload_status == '2') {
      //--店铺已重传
      if (server_time > endTime) {
        //--店铺已重拍 & 开奖时间之后的7个自然日后
        layerAlert({
          title: '该方案已无法投诉',
          text: '方案超过投诉有效期，已无法投诉。建议您电话联系店铺沟通'
        });
      } else {
        //--店铺已重拍 & 开奖时间之后的7个自然日内
        self.tryToAddComplaint({
          type: 22,
          fun: function fun(data) {
            layerAlert({
              title: '已投诉店铺',
              text: '客服将根据您提交的投诉与店铺沟通，当有结果时会更新处理进度，请您耐心等待'
            });
          },
          beforeAdd: self.complaintLayer.show
        });
      }
    }
  }
};
//--重传按钮点击事件
TicketImg.prototype.reloadEvent = function () {
  var self = this;
  var upload_status = self.status.upload_status,
    //--是否已上传
    get_ticket_status = self.status.get_ticket_status,
    //--是否已取票
    reload_status = self.status.reload_status; //--是否已要求重传
  var server_time = self.times.server_time,
    //--服务器时间
    pre_prize_time = self.times.pre_prize_time,
    //--开奖时间
    endTime = new Date(Date.parse(pre_prize_time) + 5 * 24 * 3600 * 1000); //--开奖5个自然日
  if (reload_status != '0') {
    return;
  }
  if (upload_status == '1') {
    //--已上传照片
    if (get_ticket_status == '10') {
      //--已取票
      layerConfirm({
        station_user_id: self.station_user_id,
        title: '您已取票无法重传',
        text: '店铺标记该方案您已取走票，已无法重新拍照上传。建议您电话联系店铺确认'
      });
    } else if (reload_status == '-1') {
      //--已要求重传
      layerConfirm({
        station_user_id: self.station_user_id,
        title: '您已发起过重传啦',
        text: '店铺繁忙时，上传有可能延迟，请您耐心等待'
      });
    } else if (server_time > endTime) {
      //--在店铺上传票照片后 & 开奖时间之后的5个自然日后
      layerConfirm({
        station_user_id: self.station_user_id,
        title: '已无法重传',
        text: '方案已超过可发起重传请求的有效期，建议您电话联系店铺沟通'
      });
    } else {
      //--在店铺上传票照片后 & 开奖时间之后的5个自然日内
      self.reloadLayer.show().then(function (data) {
        return itou.get({
          url: 'ticketimg/reload',
          data: {
            project_id: self.project_id,
            //--方案id
            station_user_id: self.station_user_id,
            //--店铺id
            content: data.content
          },
          specialErr: {
            '-44': function _(rlt) {
              self.reloadLayer.cancel();
              self.status.reload_status = '-1';
              layerConfirm({
                station_user_id: self.station_user_id,
                title: '您已发起过重传啦',
                text: '店铺繁忙时，上传有可能延迟，请您耐心等待'
              });
            }
          }
        });
      }).then(function () {
        self.status.reload_status = '-1';
        self.times.reload_time = new Date();
        layerAlert({
          title: '重传请求已通知店铺',
          text: '店铺繁忙时，上传有可能延迟，请您耐心等待'
        });
      });
    }
  }
};
module.exports = new TicketImg();

/***/ })

/******/ });