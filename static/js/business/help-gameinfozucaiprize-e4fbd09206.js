/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
/******/ })
/************************************************************************/
/******/ ({

/***/ 185:
/***/ (function(module, exports) {

/**
 * 微信C端		投注派奖信息详情页面
 * by	zhaoyf	2017-09-15 10:08:11
 */
(function () {
  var title = '';
  var Model = function Model() {
    var self = this;
    self.id = Gray.$page.getUrlParam('id') || '';
    self.title = '';
    if ($.paijiang) {
      $.paijiang.init({
        dataType: 'news'
      });
      $.paijiang.apis.getNews(self.id).then(function () {
        var _$$paijiang;
        self.title = (_$$paijiang = $.paijiang) === null || _$$paijiang === void 0 || (_$$paijiang = _$$paijiang.info) === null || _$$paijiang === void 0 || (_$$paijiang = _$$paijiang.news) === null || _$$paijiang === void 0 ? void 0 : _$$paijiang.title;
        title = self.title;
        if (self.title == '战绩资讯') {
          itou.baiduHm('战绩资讯页', '页面曝光'); //--百度统计
        }
      });

      self.paijiang = $.paijiang;
    } else {
      self.paijiang = {};
    }
    console.log(self);
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: new Model(),
      directives: {
        'takeover': {
          //--指令所在组件的 VNode 及其子 VNode 全部更新后调用。……
          componentUpdated: function componentUpdated(el, binding, vnode) {
            $('a[href]').on('click', function (e) {
              var link = this.getAttribute('href');
              ;
              if (link) {
                if (backurl) {
                  link += String(link).includes('?') ? '&' : ';?';
                  link += 'back=' + backurl;
                }
                if (title == '战绩资讯') {
                  itou.baiduHm('战绩资讯页', '链接点击'); //--百度统计
                }

                Gray.$page.loadPage(link);
              }
              e.preventDefault();
              return false;
            });
          }
        }
      }
    });
  };
})();

/***/ })

/******/ });