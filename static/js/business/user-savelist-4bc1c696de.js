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
/******/ 		182: 0
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
/******/ 	deferredModules.push([343,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_list_default_list_default_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/**
 * 微信C端 选号记录——保存记录
 * by zhaoyf    2016-08-13
 */
 //--弹窗组件
$(function () {
  /* eslint camelcase:["error", {"allow": ["start_time", "end_time", "lottery_type", "p_uuid", "station_id", "is_follow", "is_allow", "ad_options"]}] */

  /**
   * @class TheDate
   * @classdesc 检索条，时间数据原型
   */
  var TheDate = function TheDate() {
    //--检索条，时间数据原型
    var self = this;
    self.select = {
      '7d': {},
      '0m': {},
      '1m': {},
      '2m': {}
      // "3m": {},
      // "4m": {}
      // '2020Y3M': {
      //     text: '2020年3月',
      //     start_time: '2020-03-01 00:00:00',
      //     end_time: '2020-03-31 00:00:00'
      // }
    };

    for (var i in self.select) {
      //--计算时间选项起止时间
      if (i.has('m')) {
        var now = new Date().Dateformat('yyyy-MM-01 HH:NN:SS').toDate();
        var m = i.replace('m', '');
        var baseDate = now.DateAdd('m', m * -1);
        self.select[i].text = baseDate.Dateformat('yyyy年MM月');
        self.select[i].start_time = baseDate.FirstDay().Dateformat('yyyy-MM-DD 00:00:00');
        self.select[i].end_time = baseDate.LastDay().Dateformat('yyyy-MM-DD 23:59:59');
      } else if (i.has('d')) {
        var _now = new Date();
        var d = i.replace('d', '');
        self.select[i].text = '最近' + d + '天';
        self.select[i].start_time = _now.DateAdd('d', d * -1).Dateformat('yyyy-MM-DD 00:00:00');
        self.select[i].end_time = _now.Dateformat('yyyy-MM-DD 23:59:59');
      }
    }
  };

  /**
   * @class Item
   * @classdesc 行数据原型
   * @param {object} data - 接口数据list的元素
   */
  var Item = function Item(data) {
    //--行数据原型
    var self = this;
    var date = data.create_time;
    self.month = itou.outil.formatDate(date, 'mm月');
    self.day = itou.outil.formatDate(date, 'dd');
    self.status = data.status_text; //--状态
    self.result = data.end_time_text; //--进度
    self.money = data.total_money;
    self.lottery_type = data.lottery_type;
    self.id = data.project_id;
    self.p_uuid = data.p_uuid || '0';
    self.green = !!(data.submit_status == '1'); //--是否可提交。1为可提交，0为已过期
    self.lotteryText = data.lottery_type_text;
    if (data.plan_no && data.plan_no > 1) {
      self.qishu = data.plan_no;
    } else {
      self.qishu = null;
    }
    self.isfollow = !!data.is_follow;
    self.color = data.status_color;
  };

  /**
   * @class Model
   * @classdesc 页面数据原型
   */
  var Model = function Model() {
    //--页面数据原型
    var self = this;
    var urlType = Gray.$page.getUrlParam('type') || ''; //--地址栏参数，从竞彩投注页面跳转时添加
    self.urlType = urlType;
    self.showBody = false;
    // var prevPage = window.prevPage || '';
    if (!window.prevPage.has('/project/detail/')) {
      itou.localJson.delJson('__SYS_userBetList_searchKey');
    }
    var hSelected = itou.localJson.getJson('__SYS_userBetList_searchKey').key || {};
    self.date = new TheDate();
    self.searchBar = {
      //--检索条彩种以及选中状态数据
      lottery: {
        '': '全部彩种',
        'JingCaiZuQiu': '竞彩足球',
        'JingCaiLanQiu': '竞彩篮球',
        'DanChang': '北京单场',
        'ZuCai': '足球彩票',
        'TiCai': '体彩数字',
        'FuCai': '福彩数字',
        'TcGaoPin': '体彩高频'
      },
      selected: {
        //--选中的选项
        lottery: hSelected.lottery || urlType || '',
        date: hSelected.date || '7d'
      }
    };
    var selected = {
      //--最终选定的项
      lottery: hSelected.lottery || urlType || '',
      date: hSelected.data || '7d'
    };
    self.selected = selected;
    self.search = {
      //--查询条件
      lottery_type: selected.lottery,
      //--彩种
      start_time: self.date.select[selected.date].start_time,
      //--开始时间
      end_time: self.date.select[selected.date].end_time //--结束时间
    };

    self.timeRange = function () {
      //--计算时间范围
      var s = self.search.start_time.left(10).replace(/-/g, '.');
      var e = self.search.end_time.left(10).replace(/-/g, '.');
      return s + '~' + e;
    };
    self.range = self.timeRange();
    self.page = {
      //--页面信息
      page: 1,
      pagesize: 20
      // hasNext: true
    };

    self.list = []; //--列表数据

    self.showSearch = false;
    self.getList = function () {
      //--获取列表数据
      self.showSearch = false; //--隐藏搜索栏
      return itou.get({
        url: 'savelist',
        data: $.extend({}, self.search, self.page),
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        self.showBody = true;
        // self.page.hasnext = (data && data.length == self.page.pagesize);//--是否存在下一页
        if (data && data.length > 0) {
          for (var i = 0, len = data.length; i < len; i++) {
            self.list.push(new Item(data[i])); //--追加页面数据
          }
        }

        return data.length == self.page.pagesize;
      });
    };
    self.refresh = function () {
      //--刷新列表
      self.page.page = 1;
      self.showBody = false;
      self.list = [];
      return self.getList();
    };
    self.loadNextPage = function () {
      //--加载下一页
      // if(!self.page.hasnext){//--下一页不存在
      // 	var defer = $.Deferred();
      // 	defer.reject();
      // 	return defer.promise();
      // }
      self.page.page += 1;
      return self.getList();
    };
    self.searchChange = function () {
      //--检索条点击确认时，重新获取搜索条件
      selected.date = self.searchBar.selected.date;
      selected.lottery = self.searchBar.selected.lottery;
      self.search = {
        //--查询条件
        lottery_type: self.searchBar.selected.lottery,
        //--彩种
        start_time: self.date.select[selected.date].start_time,
        //--开始时间
        end_time: self.date.select[selected.date].end_time //--结束时间
      };

      self.range = self.timeRange();
    };
    self.searchReset = function () {
      //--检索条点击取消时，重置检索条选中状态
      self.searchBar.selected.date = selected.date;
      self.searchBar.selected.lottery = selected.lottery;
    };
    self.getAllowUser = function () {
      return itou.get({
        url: 'sharebuy/allowusesharebuy',
        data: {
          station_id: self.station_id
        }
      });
    };
    self.getHemaiStatus = function () {
      return itou.get({
        url: 'sharebuy/issupport',
        data: {
          station_id: self.station_id
        }
      });
    };
    self.station_id = itou.localJson.getJson('__entry_info').station_id;
    self.hemaiAllow = false;
    self.is_allow = false;
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'list-default': _components_list_default_list_default_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new Model(),
      /**
       * @function beforeDestroy
       * @description 生命周期：beforeDestroy
       */
      beforeDestroy: function beforeDestroy() {
        var self = this;
        if (self.position) {
          if (self.page.page <= 3) {
            self.position.init({
              //--重定位功能初始化
              el: config.isAPP ? 'html' : 'body',
              page: self.page.page,
              pagesize: self.page.pagesize
            });
            self.position.setPosition();
          } else {
            self.position.clear();
          }
        }
      },
      /**
       * @function mounted
       * @description 生命周期：mounted
       */
      mounted: function mounted() {
        var self = this;
        if (self.$refs.gameadv) {
          //--玩蜂游戏推广广告
          var id = itou.localJson.getJson('/user/shop/details/').id || '';
          self.$refs.gameadv.init({
            shopid: id,
            ad_options: 'betlist',
            page: '选号记录-私密'
          }, function (url) {
            // itou.baiduHm('选号记录-私密', '广告标签：玩蜂1');//--百度统计
            return url + '&from=record';
          });
        }
        console.log(vm);
      },
      /**
       * @function created
       * @description 生命周期created，
       */
      created: function created() {
        var _this = this;
        var self = this,
          $data = self.$data;
        if (self.position && prevPage.has('/project/detail/')) {
          var page = self.position.page || 0;
          var pagesize = self.position.pagesize || 0;
          if (page && pagesize) {
            self.page._pageNum = self.page.page;
            self.page._pageSize = self.page.pagesize;
            self.page.page = 1;
            self.page.pagesize = pagesize * page;
          }
        }
        this.getList().then(function (data) {
          if (self.position && self.page.page <= 3 && prevPage.has('/project/detail/')) {
            var _page = self.position.page || 0;
            self.page.page = _page || self.page.page;
            self.page.pagesize = self.page._pageSize || self.page.pagesize;
            self.position.init({
              //--重定位功能初始化
              el: config.isAPP ? 'html' : 'body'
            });
            self.position["do"]();
          }
          _this.$nextTick(function () {
            try {
              _this.$refs.listDefault.noData(data);
            } catch (e) {
              console.log(e);
            }
          });
        });
        if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
          $data.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
        }
        if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
          $data.getHemaiStatus().then(function (result) {
            self.hemaiAllow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemaiAllow = itou.localJson.getJson('share_buy' + self.station_id).status;
        }
      },
      computed: {},
      methods: {
        // back: function(){//--返回
        //     var self = this,
        //         $data = self.$data,
        //         urlType = $data.urlType,
        //         prevPage = window.prevPage || "";
        //     switch(true){
        //         case (urlType && urlType.has && urlType.has("JingCaiZuQiu")):
        //             Gray.$page.loadPage("/jingcai/");
        //             break;
        //         case (urlType && urlType.has && urlType.has("JingCaiLanQiu")):
        //             Gray.$page.loadPage("/jingcailanqiu/");
        //             break;
        //         case prevPage.has("/user/"):
        //             Gray.$page.loadPage("/user/");
        //             break;
        //         default:
        //             Gray.$page.loadPage("/");
        //     }
        // },
        /**
         * @function gotoBetlist
         * @description 跳转到选号记录
         */
        gotoBetlist: function gotoBetlist() {
          var self = this,
            $data = self.$data,
            urlType = $data.urlType;
          var backurl = self.backpaths[0] || '/';
          switch (true) {
            case !!urlType && !!urlType.has:
              Gray.$page.loadPage('/user/betlist/?type=' + urlType + '&back=' + backurl);
              break;
            default:
              Gray.$page.loadPage('/user/betlist/?back=' + backurl);
          }
        },
        /**
         * @function gotoTaps
         * @description 页签相互跳转，不改变返回地址back
         * @param {string} url - 页签地址url
         */
        gotoTaps: function gotoTaps(url) {
          var self = this,
            $data = self.$data,
            urlType = $data.urlType;
          var backurl = self.backpaths[0] || '/';
          backurl = encodeURIComponent(backurl);
          switch (true) {
            case !!urlType && !!urlType.has:
              Gray.$page.loadPage(url + '?type=' + urlType + '&back=' + backurl);
              break;
            default:
              Gray.$page.loadPage(url + '?back=' + backurl);
          }
        },
        /**
         * @function doRefresh
         * @description 下拉刷新
         */
        doRefresh: function doRefresh() {
          //--下拉刷新
          var self = this,
            $data = self.$data;
          return $data.refresh();
        },
        /**
         * @function loadNext
         * @description 上拉加载下一页
         */
        loadNext: function loadNext() {
          //--上拉加载下一页
          var self = this,
            $data = self.$data;
          return $data.loadNextPage();
        },
        /**
         * @function doShowSearch
         * @description 显示、隐藏搜索项
         */
        doShowSearch: function doShowSearch() {
          //--显示、隐藏搜索项
          var self = this;
          self.showSearch = !self.showSearch;
        },
        /**
         * @function searchBarChangeLottery
         * @description 搜索框切换彩种事件
         * @param {string} key - 被选中的彩种
         */
        searchBarChangeLottery: function searchBarChangeLottery(key) {
          //--搜索框切换彩种事件
          var self = this;
          self.searchBar.selected.lottery = key;
        },
        /**
         * @function searchBarChangeTime
         * @description 搜索框切换时间事件
         * @param {string} key - 被选中的时间段
         */
        searchBarChangeTime: function searchBarChangeTime(key) {
          //--搜索框切换时间事件
          var self = this;
          self.searchBar.selected.date = key;
        },
        /**
         * @function doSearch
         * @description 开始搜索
         */
        doSearch: function doSearch() {
          //--开始搜索
          var self = this;
          self.searchChange(); //--更新检索条件
          // var me = window.myDrop;
          // me.lock();
          // me.resetload();
          self.$refs.listDefault.loading = true;
          return self.doRefresh().then(function (data) {
            // me.unlock();me.resetload();
            self.$refs.listDefault.noData(data);
          });
        },
        /**
         * @function cancelSearch
         * @description 取消搜索
         */
        cancelSearch: function cancelSearch() {
          //--取消搜索
          var self = this;
          self.searchReset();
          self.doShowSearch();
        },
        /**
         * @function gotoDetails
         * @description 跳转到方案详情页面
         */
        gotoDetails: function gotoDetails(id, uuid) {
          itou.localJson.setJson('__SYS_userBetList_searchKey', {
            key: this.$data.selected
          });
          itou.localJson.setJson('/project/detail/', {
            id: id,
            uuid: uuid
          });
          Gray.$page.loadPage('/project/detail/?back=' + this.backurl);
        }
      }
    });

    // window.myDrop = $('#dropload_body1').dropload({
    // 	scrollArea : window,
    // 	autoLoad: false,
    // 	domDown : {                                                          // 下方DOM
    // 		domClass   : 'dropload-down',
    // 		domRefresh : '',
    // 		domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
    // 		domNoData  : '<div class="dropload-noData">暂无数据</div>'
    // 	},
    // 	loadDownFn : function(me){
    // 		me.lock();
    // 		vm.loadNext().then(function(){me.unlock();me.resetload();});
    // 		me.resetload();
    // 	},
    // 	loadUpFn: function(me){
    // 		me.lock();
    // 		vm.doRefresh().then(function(){
    // 			me.unlock();
    // 			me.resetload();
    // 		});
    // 		me.resetload();
    // 	}
    // });
  };
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.van-pull-refresh__track {\r\n    height: auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/list-default/list-default.vue?vue&type=template&id=3fb2f0e2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("van-pull-refresh", {
    on: {
      refresh: _vm.onRefresh
    },
    model: {
      value: _vm.refreshing,
      callback: function callback($$v) {
        _vm.refreshing = $$v;
      },
      expression: "refreshing"
    }
  }, [_c("van-list", {
    attrs: {
      finished: _vm.finished
    },
    on: {
      load: _vm.onLoad
    },
    scopedSlots: _vm._u([{
      key: "finished",
      fn: function fn() {
        return [_vm.listNum ? _c("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }]
        }, [_vm._v(_vm._s(_vm.finishedText))]) : _c("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }]
        }, [_c("div", {
          staticClass: "nulllottno"
        }, [!_vm.inGuoqing ? _c("p", {
          staticClass: "nulllottnoimg"
        }, [_c("img", {
          attrs: {
            src: __webpack_require__(74),
            alt: ""
          }
        })]) : _c("p", {
          staticClass: "shiyinodata"
        }, [_c("img", {
          attrs: {
            src: __webpack_require__(99),
            alt: ""
          }
        })]), _vm._v(" "), !_vm.inGuoqing ? _c("p", {
          staticClass: "font14 gray5"
        }, [_vm._v("当前无记录")]) : _vm._e()])])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.loading,
      callback: function callback($$v) {
        _vm.loading = $$v;
      },
      expression: "loading"
    }
  }, [_c("div", {
    ref: "listTop"
  }), _vm._v(" "), _vm._t("default", function () {
    return [_vm._v("列表数据")];
  })], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/list-default/list-default.vue?vue&type=template&id=3fb2f0e2&

// EXTERNAL MODULE: ./node_modules/vant/lib/list/index.js
var list = __webpack_require__(26);
var list_default = /*#__PURE__*/__webpack_require__.n(list);

// EXTERNAL MODULE: ./node_modules/vant/lib/list/style/index.js
var style = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vant/lib/pull-refresh/index.js
var pull_refresh = __webpack_require__(13);
var pull_refresh_default = /*#__PURE__*/__webpack_require__.n(pull_refresh);

// EXTERNAL MODULE: ./node_modules/vant/lib/pull-refresh/style/index.js
var pull_refresh_style = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/list-default/list-default.vue?vue&type=script&lang=js&
/**
 * 公用组件：列表加载和下拉刷新
 * by zhaoyf    2021-04-26 09:27:40
 */


//--从vant中按需引用组件




Vue.use(list_default.a);
Vue.use(pull_refresh_default.a);
/* harmony default export */ var list_defaultvue_type_script_lang_js_ = ({
  name: 'list-default',
  model: {
    prop: 'page'
  },
  props: {
    refresh: {
      type: Function,
      "default": function _default(e) {
        return Promise.resolve('');
      }
    },
    load: {
      type: Function,
      "default": function _default(e) {
        return Promise.resolve(0);
      }
    },
    position: {
      //--定位功能是否开启
      type: Boolean,
      "default": true
    },
    pMaxPage: 20,
    //--最大可自定定位页码
    page: 1,
    pagesize: 20
  },
  data: function data() {
    return {
      loading: true,
      finished: false,
      refreshing: false,
      finishedText: '没有更多了',
      listNum: 0,
      //--列表数据量
      name: 'list-default' //--组件名，用来在插件内获取组件实例
    };
  },
  updated: function updated() {
    try {
      var slotDefault = this.$slots["default"][0];
      var children = slotDefault.children;
      this.listNum = children.length;
    } catch (error) {
      console.warn(error);
      this.listNum = 1;
    }
    // console.log(this);
  },

  methods: {
    onLoad: function onLoad() {
      var _this = this;
      console.log('/*** list-default: 触发加载下一页 ***/');
      setTimeout(function () {
        _this.loading = false;
      }, 1000);
      return this.load().then(function (data) {
        _this.loading = false;
        if (data == 0) {
          _this.finished = true;
        }
      });
    },
    onRefresh: function onRefresh() {
      var _this2 = this;
      console.log('/*** list-default: 触发下拉刷新 ***/');
      //--解锁数据
      this.finished = false;
      console.log(this);
      //--重新加载数据
      //--将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      return this.refresh().then(function (data) {
        if (_this2.refreshing) {
          _this2.refreshing = false;
        }
        if (data == 0) {
          _this2.finished = true;
        }
        _this2.loading = false;
      });
    },
    scrollTop: function scrollTop() {
      this.$refs.listTop.scrollIntoView({
        block: 'center'
      });
    },
    noData: function noData(data) {
      if (data == 0) {
        this.finished = true;
      } else {
        this.finished = false;
      }
      this.loading = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/list-default/list-default.vue?vue&type=script&lang=js&
 /* harmony default export */ var list_default_list_defaultvue_type_script_lang_js_ = (list_defaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/list-default/list-default.vue?vue&type=style&index=0&id=3fb2f0e2&lang=css&
var list_defaultvue_type_style_index_0_id_3fb2f0e2_lang_css_ = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/list-default/list-default.vue?vue&type=style&index=0&id=3fb2f0e2&lang=css&

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(list_defaultvue_type_style_index_0_id_3fb2f0e2_lang_css_["a" /* default */], options);



/* harmony default export */ var list_default_list_defaultvue_type_style_index_0_id_3fb2f0e2_lang_css_ = (list_defaultvue_type_style_index_0_id_3fb2f0e2_lang_css_["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/components/list-default/list-default.vue?vue&type=style&index=0&id=3fb2f0e2&lang=css&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/list-default/list-default.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  list_default_list_defaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/list-default/list-default.vue"
/* harmony default export */ var list_default_list_default = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../../../../../static/images/shiyinodata-47ccca689ee12e08387f6a92244443ec.jpg";

/***/ })

/******/ });