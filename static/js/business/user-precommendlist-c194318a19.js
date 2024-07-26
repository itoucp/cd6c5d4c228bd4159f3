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
/******/ 	return __webpack_require__(__webpack_require__.s = 338);
/******/ })
/************************************************************************/
/******/ ({

/***/ 338:
/***/ (function(module, exports) {

/**
 * 微信C端        推荐记录
 * by zhaoyf    2017-05-23 10:07:25
 */
(function () {
  /* eslint camelcase:["error", {"allow": ["station_id", "is_allow", "ad_options"]}] */

  //--初始化标签管理对象 和 推荐添加对象
  var gendan = window.gendan.init(['userInfo', 'tuijianList']);
  gendan.tuijianList.hemaiAllow = false;
  gendan.tuijianList.is_allow = false;
  gendan.tuijianList.station_id = itou.localJson.getJson('__entry_info').station_id;
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: gendan.tuijianList,
      /**
       * @function beforeDestroy
       * @description 重定位功能初始化
       */
      beforeDestroy: function beforeDestroy() {
        var self = this;
        if (self.position) {
          if (self.page <= 3) {
            self.position.init({
              //--重定位功能初始化
              el: '#list',
              page: self.page,
              pagesize: self.pagesize
            });
            self.position.setPosition();
          } else {
            self.position.clear();
          }
        }
      },
      /**
       * @function mounted
       * @description 玩蜂游戏推广广告初始化
       */
      mounted: function mounted() {
        console.log(vm);
        var self = this;
        if (self.$refs.gameadv) {
          //--玩蜂游戏推广广告
          var id = itou.localJson.getJson('/user/shop/details/').id || '';
          self.$refs.gameadv.init({
            shopid: id,
            ad_options: 'betlist',
            page: '选号记录-推荐'
          }, function (url) {
            // itou.baiduHm('选号记录-推荐', '广告标签：玩蜂1');//--百度统计
            return url + '&from=record';
          });
        }
      },
      /**
       * @function created
       * @description 页面数据加载
       */
      created: function created() {
        var self = this;
        if (self.position && prevPage.has('/project/gendan')) {
          var page = self.position.page || 0;
          var pagesize = self.position.pagesize || 0;
          if (page && pagesize) {
            self._pageNum = self.page;
            self._pageSize = self.pagesize;
            self.page = 1;
            self.pagesize = pagesize * page;
          }
        }
        gendan.userInfo.getInfo() //--获取用户基础信息
        .then(function () {
          self.$nextTick(function () {
            self.doRefresh().then(function () {
              if (self.position && self.page <= 3 && prevPage.has('/project/gendan/')) {
                var _page = self.position.page || 0;
                self.page = _page || self.page;
                self.pagesize = self._pageSize || self.pagesize;
                self.position.init({
                  //--重定位功能初始化
                  el: '#list'
                });
                self.position["do"]();
              }
            });
          });
        });
        if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
          self.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
        }
        if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
          self.getHemaiStatus().then(function (result) {
            self.hemaiAllow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemaiAllow = itou.localJson.getJson('share_buy' + self.station_id).status;
        }
      },
      methods: {
        /**
         * @function getAllowUser
         * @description 调用接口，获取获取AllowUser
         */
        getAllowUser: function getAllowUser() {
          var self = this;
          return itou.get({
            url: 'sharebuy/allowusesharebuy',
            data: {
              station_id: self.station_id
            }
          });
        },
        /**
         * @function getHemaiStatus
         * @description 调用接口，获得合买状态
         */
        getHemaiStatus: function getHemaiStatus() {
          var self = this;
          return itou.get({
            url: 'sharebuy/issupport',
            data: {
              station_id: self.station_id
            }
          });
        },
        /**
         * @function gotoTaps
         * @description 页签内地址相互跳转，不改变back地址
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
         * @description 下拉刷新页面
         */
        doRefresh: function doRefresh() {
          var self = this;
          self.showBody = false;
          return gendan.tuijianList.getList().then(function (hasNext) {
            if (hasNext) {
              self.ascroll && self.ascroll.hasData();
            } else {
              self.ascroll && self.ascroll.noData();
            }
            self.ascroll && self.ascroll.resetload();
          });
        },
        /**
         * @function loadNext
         * @description 上拉加载上一页
         */
        loadNext: function loadNext() {
          var self = this;
          gendan.tuijianList.getNext().then(function (hasNext) {
            if (hasNext) {
              self.ascroll && self.ascroll.hasData();
            } else {
              self.ascroll && self.ascroll.noData();
            }
            self.ascroll && self.ascroll.resetload();
          });
        },
        /**
         * @function gotoDetail
         * @description 跳转到跟单详情页面
         */
        gotoDetail: function gotoDetail(item) {
          var id = item.id;
          var url = '/project/gendan/';
          url += '?id=' + id;
          url += '&p_uuid=' + item.p_uuid;
          url += '&back=' + this.backurl;
          //--分区键定位店铺ID
          if (item.station_user_id) {
            url += '&dk_station_id=' + item.station_user_id;
          }
          Gray.$page.loadPage(url);
        }
      }
    });
  };
})();

/***/ })

/******/ });