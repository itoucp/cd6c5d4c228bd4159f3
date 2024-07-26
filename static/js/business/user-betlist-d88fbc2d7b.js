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
/******/ 		171: 0
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
/******/ 	deferredModules.push([332,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_party_advert_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/**
 * 微信C端 选号记录——投注记录
 * by zhaoyf    2016-08-15
 */

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
    // alert(JSON.stringify(self.select));
  };

  /**
   * @class Item
   * @classdesc 行数据原型
   * @param {object} data - 接口返回的list数据元素
   */
  var Item = function Item(data) {
    //--行数据原型
    var self = this;
    var date = data.create_time;
    self.month = itou.outil.formatDate(date, 'mm月');
    self.day = itou.outil.formatDate(date, 'dd');
    self.status = data.status_text; //--状态
    self.endTimeText = data.end_time_text;
    self.shopName = data.station_name; //--店名
    self.shopId = data.station_user_id; //--店id
    self.money = data.total_money;
    self.activityId = data.activity_id;
    self.lottery_type = data.lottery_type;
    self.plannum = ('' + data.project_id).right(4);
    if (data.plan_no && data.plan_no > 1) {
      self.qishu = data.plan_no;
    } else {
      self.qishu = null;
    }
    self.isfollow = !!data.is_follow;
    self.id = data.project_id;
    self.p_uuid = data.p_uuid || '0';
    self.zhongjiang = data.net_prize > 0;
    self.lotteryText = data.lottery_type_text;
    self.color = data.status_color;
    //--票样状态;需要两个返回值组合用；00：未上传；01：已上传；02：已重传
    self.ticketImgStatus = String(data.ticket_source) + String(data.ticket_uploaded);
    // self.ticketImgStatus = '02';
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
    console.log(window.prevPage, hSelected, !window.prevPage.has('/project/detail/'));
    self.station_id = itou.localJson.getJson('__entry_info').station_id;
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
        date: hSelected.date || '7d',
        is_follow: hSelected.is_follow || ''
      }
    };
    var selected = {
      //--最终选定的项
      lottery: hSelected.lottery || urlType || '',
      date: hSelected.date || '7d',
      is_follow: hSelected.is_follow || ''
    };
    self.selected = selected;
    self.search = {
      //--查询条件
      lottery_type: selected.lottery,
      //--彩种
      start_time: self.date.select[selected.date].start_time,
      //--开始时间
      end_time: self.date.select[selected.date].end_time,
      //--结束时间
      is_follow: selected.is_follow || ''
    };
    self.timeRange = function () {
      //--计算时间范围
      var s = self.search.start_time.left(10).replace(/-/g, '.');
      var e = self.search.end_time.left(10).replace(/-/g, '.');
      return s + '~' + e;
    };
    self.range = self.timeRange();
    self.maxAdv = 0;
    self.page = {
      //--页面信息
      page: 1,
      pagesize: 20,
      hasNext: true
    };
    self.list = []; //--列表数据

    self.showSearch = false;
    self.getList = function () {
      //--获取列表数据
      self.showSearch = false; //--隐藏搜索栏
      console.log(self.search);
      return itou.get({
        url: 'betlist',
        data: $.extend({}, self.search, self.page),
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        self.showBody = true;
        self.page.hasnext = data && data.length == self.page.pagesize; //--是否存在下一页
        if (data && data.length > 0) {
          var newDataList = [];
          for (var i = 0, len = data.length; i < len; i++) {
            newDataList.push(new Item(data[i])); //--追加页面数据
          }

          self.list = self.list.concat(newDataList);
        }
        console.log(self.list);
      });
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
    self.refresh = function () {
      //--刷新列表
      self.page.page = 1;
      self.list = [];
      self.showBody = false;
      return self.getList();
    };
    self.loadNextPage = function () {
      //--加载下一页
      if (!self.page.hasnext) {
        //--下一页不存在
        var defer = $.Deferred();
        defer.reject();
        return defer.promise();
      }
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
        end_time: self.date.select[selected.date].end_time,
        //--结束时间
        is_follow: self.searchBar.selected.is_follow
      };
      self.range = self.timeRange();
    };
    self.searchReset = function () {
      //--检索条点击取消时，重置检索条选中状态
      self.searchBar.selected.date = selected.date;
      self.searchBar.selected.lottery = selected.lottery;
    };
    self.hemaiAllow = false;
    self.is_allow = false;
    self.isShowWxAdv = false;
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      data: new Model(),
      /**
       * @function beforeDestroy
       * @description vue实例beforeDestroy生命周期
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
       * @description vue实例mounted生命周期
       */
      mounted: function mounted() {
        var self = this;
        if (self.$refs.gameadv) {
          //--玩蜂游戏推广广告
          var id = itou.localJson.getJson('/user/shop/details/').id || '';
          self.$refs.gameadv.init({
            shopid: id,
            ad_options: 'betlist',
            page: '选号记录-店内'
          }, function (url) {
            // itou.baiduHm('选号记录-店内', '广告标签：玩蜂1');//--百度统计
            return url + '&from=record';
          });
        }
        // var curKey = '#partyAdvEl_top';
        // advExtendDom('bet_list_top', curKey, this.station_id);

        // setTimeout(() => {
        //     this.getAdv();
        // }, 500);
      },

      /**
       * @function created
       * @description vue实例created生命周期
       */
      created: function created() {
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
        this.getList().then(function () {
          if (self.position && prevPage.has('/project/detail/')) {
            var _page = self.position.page || 0;
            self.page.page = _page || self.page.page;
            self.page.pagesize = self.page._pageSize || self.page.pagesize;
            self.position.init({
              //--重定位功能初始化
              el: config.isAPP ? 'html' : 'body'
            });
            self.position["do"]();
          }
          setTimeout(function () {
            self.getAdv(parseInt(self.list.length / 5));
          }, 500);
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
        self.isShowWxAdv = self.isWeiXin();
      },
      computed: {},
      methods: {
        getAdv: function getAdv() {
          var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var self = this;
          if (!this.isAPP && count) {
            if (count > 3) {
              count = 3;
            }
            // 全局命名空间申明TencentGDT对象
            window.TencentGDT = window.TencentGDT || [];
            // 广告初始化——信息流原生广告
            window.TencentGDT.push({
              app_id: '1201075508',
              // {String} - appid - 必填
              // placement_id: '9084932365673107', // {String} - 广告位id - 必填
              placement_id: '1064238533197343',
              // {String} - 广告位id - 必填
              type: 'native',
              // {String} - 原生广告类型 - 必填
              count: count || 3,
              // {Number} - 拉取广告的数量，默认是3，最高支持10 - 选填
              onComplete: function onComplete(res) {
                // alert(JSON.stringify(res));
                if (res && res.constructor === Array) {
                  self.maxAdv = res.length;
                  if (res[0] && count >= 1) {
                    window.TencentGDT.NATIVE.renderAd(res[0], 'partyAdvEl_5');
                  }
                  if (res[1] && count >= 2) {
                    window.TencentGDT.NATIVE.renderAd(res[1], 'partyAdvEl_10');
                  }
                  if (res[2] && count >= 3) {
                    window.TencentGDT.NATIVE.renderAd(res[2], 'partyAdvEl_15');
                  }
                }
              }
            });

            // H5 SDK接入全局只需运行一次
            (function () {
              var doc = document,
                h = doc.getElementsByTagName('head')[0],
                s = doc.createElement('script');
              s.async = true;
              s.src = 'https://qzs.gdtimg.com/union/res/union_sdk/page/h5_sdk/i.js';
              h && h.insertBefore(s, h.firstChild);
            })();
          }
        },
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
         * @function gotoSavelist
         * @description 跳转到保存记录
         */
        gotoSavelist: function gotoSavelist() {
          var self = this,
            $data = self.$data,
            urlType = $data.urlType;
          var backurl = self.backpaths[0] || '/';
          switch (true) {
            case !!urlType && !!urlType.has:
              Gray.$page.loadPage('/user/savelist/?type=' + urlType + '&back=' + backurl);
              break;
            default:
              Gray.$page.loadPage('/user/savelist/?back=' + backurl);
          }
        },
        /**
         * @function gotoTaps
         * @description 标签地址相互跳转，不改变back地址
         * @param {string} url - 标签页地址url
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
         */
        searchBarChangeLottery: function searchBarChangeLottery(key) {
          //--搜索框切换彩种事件
          var self = this;
          self.searchBar.selected.lottery = key;
        },
        /**
         * @function searchBarChangeType
         * @description 搜索框切换彩种事件
         */
        searchBarChangeType: function searchBarChangeType(key) {
          //--搜索框切换彩种事件
          var self = this;
          self.searchBar.selected.is_follow = key;
        },
        /**
         * @function searchBarChangeTime
         * @description 搜索框切换时间事件
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
          var me = window.myDrop;
          me.lock();
          self.doRefresh().then(function () {
            me.unlock();
            me.resetload();
          });
          me.resetload();
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
         * @param {object} item - 行数据对象
         */
        gotoDetails: function gotoDetails(item) {
          var id, asid, p_uuid;
          id = item.id;
          p_uuid = item.p_uuid || '0';
          asid = item.activityId;
          itou.localJson.setJson('__SYS_userBetList_searchKey', {
            key: this.$data.selected
          });
          itou.localJson.setJson('/project/detail/', {
            id: id,
            uuid: p_uuid
          });
          var url = '/project/detail/?activityId=' + asid + '&back=' + this.backurl;
          //--分区键定位店铺ID
          if (item.shopId) {
            url += '&dk_station_id=' + item.shopId;
          }
          Gray.$page.loadPage(url);
        },
        // 跳转广告页面 chenyj
        /**
         * @function openAdvPage
         * @description 暂未调用
         */
        openAdvPage: function openAdvPage() {
          itou.baiduHm('选号记录', '广告点击');
          var advUrl = 'https://engine.qazxsdc.com/index/activity?appKey=4SVfNoQz8S3UALKVgsLVoAb5MgzQ&adslotId=400131&uk_a1=__IMEI__&uk_a2=__IMEI2__&uk_a3=__MUID__&uk_b1=__IDFA__&uk_b2=__IDFA2__&uk_c1=__OAID__';
          // var url = "/thirdparty/components/?back=" + this.backurl+"&advurl="+encodeURIComponent(advUrl);
          Gray.$page.loadPage(advUrl);
        },
        // 添加是否是微信判断 chenyj 
        /**
         * @function isWeiXin
         * @description 判断是否是微信环境
         */
        isWeiXin: function isWeiXin() {
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
          } else {
            return false;
          }
        },
        /**
         * @function filterAdvPush
         */
        filterAdvPush: function filterAdvPush(newVal, oldVal) {
          var _this = this;
          // 多个广告展示逻辑
          if (newVal.length == oldVal.length) {
            return;
          }
          this.$nextTick(function () {
            var cueIndex = 5;
            if (newVal[cueIndex] && !newVal[cueIndex].isShowAdv) {
              var curKey = "#partyAdvEl_".concat(cueIndex);
              Object(_components_public_party_advert_components_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('bet_list_1', curKey, _this.station_id);
              if (!newVal[cueIndex].isShowAdv) {
                newVal[cueIndex].isShowAdv = true;
              }
            }
            // 多个 单个
            // for (let i = 0; i < newVal.length; i = i + 5) {
            //     var cueIndex = parseInt(i) + 5;
            //     if (newVal[cueIndex] && !newVal[cueIndex].isShowAdv) {
            //         var curKey = `#partyAdvEl_${cueIndex}`;
            //         advExtendDom('bet_list_1', curKey, this.station_id);
            //         if (!newVal[cueIndex].isShowAdv) {
            //             newVal[cueIndex].isShowAdv = true;
            //         }
            //     }
            // }
          });
        }
      }
      // 列表多个广告展示逻辑、暂时不用 chenyj
      // watch: {
      //     'list': {
      //         deep: true,
      //         handler: 'filterAdvPush'
      //     }
      // }
    });

    window.myDrop = $('#dropload_body').dropload({
      scrollArea: window,
      autoLoad: false,
      domDown: {
        // 下方DOM
        domClass: 'dropload-down',
        domRefresh: '',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
      },
      /**
       * @function loadDownFn
       * @description 上拉加载下一页
       */
      loadDownFn: function loadDownFn(me) {
        me.lock();
        vm.loadNext().then(function () {
          me.unlock();
          me.resetload();
        });
        me.resetload();
      },
      /**
       * @function loadUpFn
       * @description 下拉刷新当前列表数据
       */
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

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ advExtendDom; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/party-advert/index.vue?vue&type=template&id=015a7c38&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.advInfo && _vm.advInfo.merchant_name ? _c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.advInfo.merchant_name == "tuia",
      expression: "advInfo.merchant_name == 'tuia'"
    }],
    staticClass: "advInfobox",
    staticStyle: {
      display: "none"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.goOpenPageAdv.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "closebtn",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.bindCloseAdv.apply(null, arguments);
      }
    }
  }, [_vm._v("×")]), _vm._v(" "), _c("img", {
    attrs: {
      src: _vm.merchantInfo.image_url,
      alt: "广告图"
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.advInfo.merchant_name == "doumeng",
      expression: "advInfo.merchant_name == 'doumeng'"
    }],
    staticClass: "advInfobox",
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: _vm.curKeyEl
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.goOpenPageAdv.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "closebtn",
    staticStyle: {
      "z-index": "1"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.bindCloseAdv.apply(null, arguments);
      }
    }
  }, [_vm._v("×")])])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/party-advert/index.vue?vue&type=template&id=015a7c38&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/party-advert/index.vue?vue&type=script&lang=js&
/**
 * 
 * @description 广告组件
 * @author chenyj
 * @time 2021/09/15 13:45:37
 * @copyright 2021 itou
 */


/* harmony default export */ var party_advertvue_type_script_lang_js_ = ({
  name: 'partyadvert',
  /**
   * @param {@type} advInfo 广告信息
   */
  data: function data() {
    return {
      advInfo: {},
      merchantInfo: {}
    };
  },
  watch: {
    'thirdadvinfo': {
      deep: true,
      handler: 'resetInfo'
    }
  },
  props: {
    merchantpagetype: {
      type: String,
      "default": ''
    },
    thirdadvinfo: {
      type: Object,
      "default": function _default() {}
    },
    curKeyEl: {
      type: String,
      "default": ''
    }
  },
  methods: {
    /**
     * @function resetInfo
     * @description 监听广告信息参数
     */
    resetInfo: function resetInfo() {
      this.advInfo = this.thirdadvinfo;
      this.merchantInfo = this.advInfo.info;
    },
    /**
     * @function goOpenPageAdv
     * @description 图片类型广告点击跳转
     */
    goOpenPageAdv: function goOpenPageAdv() {
      itou.baiduHm(this.merchantpagetype, '广告点击');
      if (this.advInfo.merchant_name == 'doumeng') {
        this.duomengClick();
      }
      if (this.advInfo.merchant_name == 'tuia') {
        // --tuia 广告点击统计
        this.tuiaClickReport();
      }
      if (this.client == 'wx' || this.client == 'mobile') {
        if (!this.merchantInfo && !this.merchantInfo.activity_url) {
          return;
        }
        var openLink = this.merchantInfo.activity_url;
        Gray.$page.loadPage(openLink);
        return;
      } else {
        if (!this.merchantInfo && !this.merchantInfo.activity_url) {
          return;
        }
        var _openLink = this.merchantInfo.activity_url;
        _openLink += '&_r=' + Math.random();
        //--ios壳模式下，调用iweb插件
        if (typeof fwv_share != 'undefined') {
          window.location = _openLink;
        } else {
          window.open(_openLink, '_blank');
        }
        // this.back();
        return;
      }
    },
    /**
     * @function tuiaClickReport
     * @description 推啊点击上报
     */
    tuiaClickReport: function tuiaClickReport() {
      return itou.get({
        url: 'thirdadv/tuiaClickReport',
        data: {
          'report_url': window.btoa(this.merchantInfo.report_click_url)
        }
      });
    },
    /**
     * @function bindCloseAdv
     * @description 点击关闭广告存储缓存
     */
    bindCloseAdv: function bindCloseAdv() {
      var slotKey = this.merchantpagetype;
      // 缓存单位为秒
      itou.localJson.setJson(slotKey, this.advInfo, 24 * 60 * 60);
      this.advInfo = {};
      itou.baiduHm(slotKey, '广告点击关闭');
    },
    /**
     * @function resetDuomengadv
     * @description 处理 merchant_name == 'doumeng' js类型广告
     */
    resetDuomengadv: function resetDuomengadv() {
      var _this = this;
      if (this.advInfo.merchant_name == 'doumeng' && this.advInfo.info && this.advInfo.info.script_code) {
        (function () {
          // eslint-disable-next-line no-useless-escape
          var advReg = /<script(?:.*?)src=[\"\'](.+?)[\"\'](?!<)(?:.*)\>(?:[\n\r\s]*?)(?:<\/script>)*/gm;
          var pardomKey = _this.curKeyEl;
          var advSrc = advReg.exec(_this.advInfo.info.script_code)[1];
          var adv = document.createElement('script');
          adv.src = advSrc;
          document.getElementById(pardomKey).appendChild(adv);
        })();
      }
    },
    /**
     * @function duomengClick
     * @description duomeng 类型广告点击跳转
     */
    duomengClick: function duomengClick() {
      var pardomKey = this.curKeyEl;
      var doumengAdvurl = document.getElementById(pardomKey).getElementsByTagName('a')[0].href || '';
      if (!this.merchantInfo.activity_url) {
        // eslint-disable-next-line camelcase
        this.merchantInfo.activity_url = doumengAdvurl;
      }
    }
  },
  /**
   * @function updated
   * @description updated 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用
   */
  updated: function updated() {
    this.$nextTick(function () {
      // --仅在整个视图都被重新渲染之后才会运行的代码
      this.resetDuomengadv();
    });
  }
});
// CONCATENATED MODULE: ./src/components/public/party-advert/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_party_advertvue_type_script_lang_js_ = (party_advertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/party-advert/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_party_advertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/party-advert/index.vue"
/* harmony default export */ var party_advert = (component.exports);
// CONCATENATED MODULE: ./src/components/public/party-advert/components.js
/**
 * 
 * @description 广告列表多个广告渲染挂载方法
 * @author chenyj
 * @time 2021/09/16 10:45:24
 * @copyright 2021 koudai
 */



/**
 * @function advExtendDom
 * @description 广告调用
 * @param {@type} slotKey 广告位标识 stationId 店铺id
 */
function advExtendDom(slotKey, curKeyEl, stationId) {
  var VmExtendIndex = Vue.extend({
    parent: window.vm,
    // :merchanttype="merchantName"
    template: '<party-advert :merchantpagetype="slotKey" :curKeyEl="curKeyEl" :thirdadvinfo="info"></party-advert>',
    /**
     * @param {@type} info 广告信息
     */
    data: function data() {
      return {
        slotKey: '',
        info: {},
        curKeyEl: ''
      };
    },
    components: {
      'party-advert': party_advert
    },
    /**
     * @function getThirdAdvInfo 获取广告相关参数
     */
    created: function created() {
      this.slotKey = slotKey;
      this.curKeyEl = curKeyEl;
      this.getSlotKeyStorage();
    },
    methods: {
      /**
       * @function getThirdAdvInfo
       * @description 调用接口返回广告参数
       * @param {@type} slot_key 广告位标识
       */
      getThirdAdvInfoApi: function getThirdAdvInfoApi() {
        return itou.get({
          url: 'thirdadv/getAdv',
          data: {
            'slot_key': slotKey,
            'station_id': stationId
          },
          noToast: true
        });
      },
      /**
       * @function getThirdAdvInfo
       * @description 调用接口并赋值
       */
      getThirdAdvInfo: function getThirdAdvInfo() {
        var self = this;
        self.getThirdAdvInfoApi().then(function (result) {
          self.info = result || {};
          if (self.info && self.info.merchant_name) {
            itou.baiduHm(self.slotKey, '广告展示');
          }
        });
      },
      /**
       * @function getSlotKeyStorage
       * @description 获取缓存
       */
      getSlotKeyStorage: function getSlotKeyStorage() {
        var self = this;
        var curslotKey = slotKey;
        var cacheAdvInfo = itou.localJson.getJson(curslotKey);
        if (cacheAdvInfo && cacheAdvInfo.merchant_name) {
          self.info = {};
        } else {
          self.getThirdAdvInfo();
        }
      }
    }
  });
  new VmExtendIndex().$mount(curKeyEl);
}

/***/ })

/******/ });