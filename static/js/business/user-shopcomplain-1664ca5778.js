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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
/******/ })
/************************************************************************/
/******/ ({

/***/ 355:
/***/ (function(module, exports) {

/**
 * 微信C端 投诉店铺页面
 * by zhaoyf    2016-08-19
 */
$(function () {
  var model = function model() {
    var self = this;
    // self.tousuType = {};
    // self.tousuType[0] = "其他投诉";
    // self.tousuType[1] = "接单投诉";
    // self.tousuType[2] = "出票投诉";
    // self.tousuType[3] = "兑奖投诉";
    self.currItem = '';
    self.currObj = '';
    self.showIntro = false;
    self.station_id = Gray.$page.getUrlParam('stationid') || (itou.localJson.getJson('/user/shop/details/') ? itou.localJson.getJson('/user/shop/details/').id : null);
    self.page = [];
    self.page.push({
      tit: '出票投诉',
      type: 2,
      list: [{
        msg: '付款后店铺不接单 或 接单出票慢',
        act: 'gotoDetail'
      }, {
        msg: '已付款未出票的方案店铺未退款',
        act: 'gotoAdd'
      }, {
        msg: '店铺不提供出票凭证',
        act: 'gotoAdd'
      }, {
        msg: '店铺出错票',
        act: 'gotoAdd'
      }]
    });
    self.page.push({
      tit: '兑奖投诉',
      type: 3,
      list: [{
        msg: '店铺兑付奖金慢',
        act: 'gotoDetail'
      }, {
        msg: '店铺拒绝兑付奖金',
        act: 'gotoAdd'
      }, {
        msg: '店铺兑付奖金有差异',
        act: 'gotoAdd'
      }]
    });
    self.page.push({
      tit: '其他投诉',
      type: 0,
      list: [{
        msg: '店铺有欺诈/造假/诚信等问题',
        act: 'gotoAdd'
      }]
    });
    self.doShowIntro = function () {
      self.showIntro = !self.showIntro;
    };
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      data: new model(),
      methods: {
        // back: function(){
        //     var prevPage = window.prevPage || "";
        //     switch(true){
        //         case prevPage.has("/user/shop/details/"):
        //             Gray.$page.loadPage("/user/shop/details/");
        //             break;
        //         case prevPage.has("/project/details/"):
        //             Gray.$page.loadPage("/project/details/");
        //             break;
        //         default:
        //             Gray.$page.loadPage("/");
        //     }
        // },
        gotoDetail: function gotoDetail() {
          var self = this;
          Gray.$page.loadPage('/user/shop/details/?id=' + self.station_id);
        },
        selectItem: function selectItem(item, obj) {
          var self = this,
            $data = self.$data;
          $data.currItem = item;
          $data.currObj = obj;
        },
        gotoTousu: function gotoTousu() {
          var self = this,
            $data = self.$data,
            item = $data.currItem,
            obj = $data.currObj;
          if (!item || !obj) {
            return;
          }
          var key = obj.type,
            tit = obj.tit,
            act = item.act;
          if (act == 'gotoAdd') {
            //--添加投诉
            itou.localJson.setJson('/user/shop/complain/add/', {
              type: {
                key: key,
                text: tit
              }
            });
            Gray.$page.loadPage('/user/shop/complain/add/?back=' + self.backurl);
          } else if (act == 'gotoDetail') {
            //--弹出提示
            $data.doShowIntro();
          }
        }
      }
    });
  };
});

/***/ })

/******/ });