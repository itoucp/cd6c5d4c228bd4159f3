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
/******/ 		200: 0
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
/******/ 	deferredModules.push([360,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_img_img_avatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/**
 * 微信C端 店铺评论
 * b-y zhaoyf  2016-08-16  
 */

$(function () {
  var stat = function stat(data) {
    console.log(data);
    var self = this;
    self.avg = !isNaN(data.avg) ? (data.avg * 1).toFixed(1) : 0 .toFixed(1);
    stat.id = data.station_user_id;
    self.bad_count = data.bad_count;
    self.good_count = data.good_count;
    self.mid_count = data.mid_count;
    self.all_count = self.bad_count + self.good_count + self.mid_count;
    self.score_name = data.score_name;
    self.name = data.station_name;
    self.isCert = !!(data.has_cert_info == '1');
    self.isCertText = self.isCert ? '认证店' : '未认证';
    self.isCertClass = self.isCert ? 'certokbg' : 'certnobg';
    self.level = ['全部(' + self.all_count + ')', '好评(' + self.good_count + ')', '中评(' + self.mid_count + ')', '差评(' + self.bad_count + ')'];
  };
  var item = function item(data) {
    var self = this;
    self.name = data.user_name || '';
    if (self.name && typeof self.name == 'string' && self.name.length > 0) {
      //--用户名折半隐藏
      var len = self.name.length,
        _len = Math.ceil(len / 2),
        arr = [];
      arr.length = len - _len + 1;
      self.name = self.name.left(_len) + arr.join('*');
    }
    self.img = data.user_img;
    self.create_time = data.create_time;
    self.rank = data.rank;
    self.tags = data.tags;
    self.lottery = data.lottery_type;
    self.content = data.content;
    self.status = data.status;
    self.reply = data.reply ? data.reply.content : '';
    var html = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= self.rank) {
        html.push('<span class="userstar_sed"></span>');
      } else {
        html.push('<span class="userstar"></span>');
      }
    }
    self.star = html.join('');
  };
  var model = function model() {
    var self = this;
    self.station_user_id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
    self.stat = {};
    self.list = [];
    self.hasnext = true;
    self.hasInfo = true;
    self.showBody = false;
    self.page = {
      page: 1,
      limit: 20
    };
    self.search = {
      station_user_id: self.station_user_id,
      level: 0,
      content: 1
    };
    self.getTags = function () {
      return itou.get({
        url: 'comment/tags',
        data: {}
      }).then(function (data) {});
    };
    self.getStat = function () {
      //--获取统计
      return itou.get({
        url: 'comment/stationstat',
        data: {
          station_user_id: self.station_user_id
        }
      }).then(function (data) {
        self.stat = new stat(data);
      });
    };
    self.getList = function () {
      //--获取列表信息
      return itou.get({
        url: 'comment/list',
        data: $.extend({}, self.page, self.search)
      }).then(function (data) {
        self.hasnext = data.list && data.list.length == self.limit; //--是否存在下一页
        if (data.list && data.list.length > 0) {
          for (var i = 0, len = data.list.length; i < len; i++) {
            self.list.push(new item(data.list[i])); //--追加页面数据
          }
        }

        self.hasInfo = self.list.length > 0;
        self.showBody = true;
      });
    };
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'img-avatar': _components_public_img_img_avatar_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        $data.getStat().then(function () {
          return $data.getList();
        });
      },
      computed: {},
      methods: {
        // back: function(){//--返回
        //     Gray.$page.loadPage("/user/shop/details/");
        // },
        doRefresh: function doRefresh() {
          var self = this,
            $data = self.$data;
          $data.page.page = 1;
          $data.list = [];
          return $data.getList(); //--
        },

        loadNext: function loadNext() {
          var self = this,
            $data = self.$data;
          if (!self.hasnext) {
            //--下一页不存在
            var defer = $.Deferred();
            defer.reject();
            return defer.promise();
          }
          $data.page.page += 1;
          return $data.getList(); //--
        },

        dosearch: function dosearch(data) {
          //--开始搜索
          var self = this,
            $data = self.$data;
          if (data) {
            console.log(data);
            $.extend($data.search, data);
          } else {
            $data.search.content = $data.search.content == 1 ? 0 : 1;
          }
          return self.doRefresh();
        }
      }
    });
    $('.evaluation').dropload({
      scrollArea: window,
      autoLoad: false,
      domDown: {
        // 下方DOM
        domClass: 'dropload-down',
        domRefresh: '',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
      },
      loadDownFn: function loadDownFn(me) {
        me.lock();
        vm.loadNext().then(function () {
          me.unlock();
          me.resetload();
        });
        me.resetload();
      },
      loadUpFn: function loadUpFn(me) {
        me.lock();
        vm.doRefresh().then(function () {
          me.unlock();
          me.resetload();
        });
        me.resetload();
      }
    });
  };
});

/***/ })

/******/ });