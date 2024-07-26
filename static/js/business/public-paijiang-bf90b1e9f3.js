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
/******/ 	return __webpack_require__(__webpack_require__.s = 308);
/******/ })
/************************************************************************/
/******/ ({

/***/ 308:
/***/ (function(module, exports) {

/**
 * 微信C端		派奖标识公用对象
 * by zhaoyf	2017-09-14 17:20:35
 */
(function () {
  var paijiang = function paijiang() {
    var self = this;
    self.dataType = 'index'; //--数据类型：index = 首页数据， shop = 店铺首页数据， lottery = 单一采种数据,news = 内容详情
    self.sid = null; //--店铺ID
    self.lottery = ''; //--当前彩种
    self.info = {}; //--派奖标识信息，数据形式{@caizhong: {key: @key, intro: @intro, id: @id}}
    self.hideInfo = itou.localData.getData('__public_paijiang_hideInfo');
  };
  paijiang.prototype.init = function (params) {
    //--对象初始化
    var self = this;
    for (var i in params) {
      self[i] = params[i];
    }
    self.apiInit(); //--接口初始化
  };

  paijiang.prototype.apis = {}; //--接口集合对象
  paijiang.prototype.apiInit = function () {
    //--接口数据初始化
    var self = this;
    var url = {};
    url.index = 'paijiang/supportlottery'; //--首页派奖接口地址
    url.shop = 'paijiang/supportlottery'; //--店铺首页派奖接口地址
    url.lottery = 'paijiang/last'; //--采种页面派奖接口地址
    url.news = 'news/detail'; //--新闻内容接口
    self.apis.getInfo = function (data) {
      //--获取派奖信息
      data = data || {};
      return itou.get({
        url: url[self.dataType],
        data: data,
        rnd: false,
        notoken: true
      }).then(function (data) {
        self.formatData(data);
      });
    };
    self.apis.getNews = function (id) {
      return itou.get({
        url: url['news'],
        data: {
          id: id
        }
      }).then(function (data) {
        var info = $.extend({}, self.info);
        info.news = data;
        self.info = info;
      });
    };
  };
  paijiang.prototype.formatData = function (data) {
    //--处理接口返回数据
    var self = this;
    if (self.dataType == 'index' || self.dataType == 'shop') {
      self.info = data.list;
    } else if (self.dataType == 'lottery') {
      self.info = data;
    }
  };
  paijiang.prototype.hide = function (key) {
    //--隐藏对应派奖信息
    var self = this,
      hideInfo = $.extend({}, self.hideInfo);
    hideInfo[key] = 1;
    self.hideInfo = hideInfo;
    itou.localData.setData('__public_paijiang_hideInfo', self.hideInfo);
  };
  paijiang.prototype.gotoDetail = function (id) {
    //--跳转到派奖详情页面
    var self = this,
      url = '',
      back = window.backurl;
    url += '?id=' + id;
    url += '&back=' + back;
    // self.hide(id);
    Gray.$page.loadPage(url);
  };
  $.paijiang = new paijiang();
})();

/***/ })

/******/ });