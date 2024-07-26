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
/******/ 	return __webpack_require__(__webpack_require__.s = 335);
/******/ })
/************************************************************************/
/******/ ({

/***/ 335:
/***/ (function(module, exports) {

(function () {
  /* eslint camelcase:["error", {"allow": ["ad_options", "p_uuid"]}] */

  /**
   * @class Model
   * @classdesc 页面数据原型
   */
  function Model() {
    var self = this;
    self.dataList = [];
    self.page = 0;
    self.pagesize = 20;
    self.userName = '';
    self.tCount = 0;
    self.showBody = false;
  }
  /**
   * @class Item
   * @classdesc 行数据原型
   */
  function Item(data) {
    var self = this;
    var date = data.ct;
    self.month = itou.outil.formatDate(date, 'mm月');
    self.day = itou.outil.formatDate(date, 'dd');
    self.userName = data.user_info.nick_name;
    self.lotteryTypeText = data.lottery_type_text;
    self.projectId = data.project_id;
    self.p_uuid = data.p_uuid || '0';
    self.plannum = (self.projectId + '').slice(-4);
    self.selfS = data.user_info.s_s;
    self.stationName = data.station_name;
    //--票样状态;需要两个返回值组合用；00：未上传；01：已上传；02：已重传
    self.ticketImgStatus = String(data.ticket_source) + String(data.ticket_uploaded);
    // self.ticketImgStatus = '02';
    self.stationId = data.s_id;
    if (data.p_status == 1) {
      self.statusMsg = '合买成功';
    } else if (data.deny_status == 1) {
      //--拒接
      self.statusMsg = '合买失败';
    } else if (data.p_status == 2) {
      //--出票失败
      self.statusMsg = '合买失败';
    } else if (data.share_end != 1 && !data.full_t) {
      self.statusMsg = '进行中';
    } else if (data.p_status == 0 && !!data.full_t) {
      self.statusMsg = '等待店铺确认';
    } else if (data.p_status == 4) {
      self.statusMsg = '合买进行中';
    } else {
      self.statusMsg = '合买失败';
    }
    if (self.statusMsg == '合买失败') {
      if (data.pre_prize < 0) {
        self.statusTitle = '等待开奖';
        self.statusClass = 'doingbg';
      } else if (data.pre_prize === 0) {
        self.statusTitle = '未中奖';
        self.statusClass = 'failbg';
      } else if (data.pre_prize > 0) {
        self.statusTitle = '我的奖金：' + data.user_info.pre_prize;
        self.statusClass = 'successbg';
      }
    } else if (data.share_end != 1 && !data.full_t) {
      self.statusTitle = '可参与';
      self.statusClass = 'doingbg';
    } else if (data.share_end != 1 && data.full_t) {
      self.statusTitle = '已满员';
      self.statusClass = 'doingbg';
    } else if (data.share_end == 1 && data.pre_prize == -1) {
      self.statusTitle = '等待开奖';
      self.statusClass = 'doingbg';
    } else if (data.pre_prize === 0) {
      self.statusTitle = '未中奖';
      self.statusClass = 'failbg';
    } else if (data.pre_prize > 0 && data.p_status == 1) {
      self.statusTitle = '我的奖金：' + data.user_info.pre_prize;
      self.statusClass = 'successbg';
    } else if (data.pre_prize > 0 && data.p_status != 1) {
      self.statusTitle = '我的奖金：' + data.user_info.pre_prize;
      self.statusClass = 'failbg';
    }
    // switch (data.share_status) {
    //     case 0:
    //         self.statusTitle = '可参与';
    //         self.statusMsg = '合买进行中';
    //         self.statusClass = 'doingbg';
    //         break;
    //     case 1:
    //         self.statusTitle = '可参与';
    //         self.statusMsg = '合买进行中';
    //         self.statusClass = 'doingbg';
    //         break;
    //     case 2:
    //         self.statusTitle = '等待开奖';
    //         self.statusMsg = '合买进行中';
    //         self.statusClass = 'doingbg';
    //         break;
    //     case 3:
    //         self.statusTitle = '等待开奖';
    //         self.statusMsg = '合买成功';
    //         self.statusClass = 'doingbg';
    //         break;
    //     case 4:
    //         if(data.act_prize == -1){
    //             self.statusTitle = '等待开奖';
    //             self.statusClass = 'doingbg'
    //         }else if(data.act_prize == 0){
    //             self.stats_title = '未中奖';
    //             self.statusClass = 'failbg'
    //         }else{
    //             self.statusTitle = '我的奖金：'+ data.user_info.act_prize;
    //             self.statusClass = 'successbg';
    //         }
    //         self.statusMsg = '合买失败';
    //         break;
    //     case 5:
    //         self.statusTitle = '我的奖金：' + data.user_info.act_prize;
    //         self.statusMsg = '合买成功';
    //         self.statusClass = 'successbg';
    //         break;
    //     case 6:
    //         self.statusTitle = '我的奖金：' + data.user_info.act_prize;
    //         self.statusMsg = '合买成功';
    //         self.statusClass = 'successbg';
    //         break;
    //     case 7:
    //         self.statusTitle = '未中奖';
    //         self.statusMsg = '合买成功';
    //         self.statusClass = 'failbg';
    //         break;
    // }
  }

  Model.prototype.getList = function () {
    var self = this;
    return itou.get({
      url: 'sharebuy/listcreate',
      data: {
        page: ++self.page,
        pagesize: self.pagesize
      }
    });
  };
  Model.prototype.getUserInfo = function () {
    return itou.get({
      url: 'user/info',
      data: {
        // token:itou.getToken(),
      }
    });
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: new Model(),
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
       * @description 玩蜂游戏推广广告
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
            page: '选号记录-合买'
          }, function (url) {
            // itou.baiduHm('选号记录-合买', '广告标签：玩蜂1');//--百度统计
            return url + '&from=record';
          });
        }
      },
      /**
       * @function created
       * @description 页面数据初始化
       */
      created: function created() {
        var self = this;
        // $data.getUserInfo()
        //     .then(function(result){
        //         self.userName = result.nick_name;
        //     })
        if (self.position && prevPage.has('/project/hm')) {
          var page = self.position.page || 0;
          var pagesize = self.position.pagesize || 0;
          if (page && pagesize) {
            self._pageNum = self.page;
            self._pageSize = self.pagesize;
            self.page = 1;
            self.pagesize = pagesize * page;
          }
        }
        self.doRefresh().then(function () {
          if (self.position && prevPage.has('/project/hm/')) {
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
      },
      methods: {
        /**
         * @function gotoTaps
         * @description 页签点击跳转，不改变原back地址
         */
        gotoTaps: function gotoTaps(url) {
          var self = this,
            $data = self.$data,
            urlType = $data.urlType;
          var backurl = encodeURIComponent(self.backpaths[0] || '/');
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
         * @description 下拉刷新页面数据
         */
        doRefresh: function doRefresh() {
          var self = this,
            $data = self.$data;
          self.dataList = [];
          self.page = 0;
          return $data.getList().then(function (result) {
            self.tCount = result.count;
            for (var i = 0, length = result.list.length; i < length; i++) {
              self.dataList.push(new Item(result.list[i]));
            }
            self.showBody = true;
          }).then(function () {
            if (!self.ascroll) {
              return;
            }
            if (self.tCount > self.dataList.length) {
              self.ascroll.hasData();
            } else {
              self.ascroll.noData();
            }
            self.ascroll.resetload();
          });
        },
        /**
         * @function loadNext
         * @description 上提加载下一页数据
         */
        loadNext: function loadNext() {
          var self = this,
            $data = self.$data;
          $data.getList().then(function (result) {
            for (var i = 0, length = result.list.length; i < length; i++) {
              self.dataList.push(new Item(result.list[i]));
            }
          }).then(function () {
            if (!self.ascroll) {
              return;
            }
            if (self.tCount > self.dataList.length) {
              self.ascroll.hasData();
            } else {
              self.ascroll.noData();
            }
            self.ascroll.resetload();
          });
        },
        /**
         * @function gotoDetail
         * @description 跳转到合买详情页面
         */
        gotoDetail: function gotoDetail(item) {
          var id = item.projectId;
          var url = '/project/hm/';
          url += '?id=' + id;
          url += '&p_uuid=' + item.p_uuid;
          url += '&back=' + this.backurl;
          //--分区键定位店铺ID
          if (item.stationId) {
            url += '&dk_station_id=' + item.stationId;
          }
          Gray.$page.loadPage(url);
        }
      }
    });
  };
})();

/***/ })

/******/ });