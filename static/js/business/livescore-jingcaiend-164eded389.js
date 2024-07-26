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
/******/ 	return __webpack_require__(__webpack_require__.s = 228);
/******/ })
/************************************************************************/
/******/ ({

/***/ 228:
/***/ (function(module, exports) {

/**
 * 微信C端		竞彩足球比分直播
 * by zhaoyf	2017-07-19 10:21:05
 */
(function () {
  var model = $.livesorce.init(['cache', 'search', 'tap', 'endGoal']);
  model.loading = true;
  console.log($.livesorce);
  var search = model.search,
    tap = model.tap,
    endGoal = model.endGoal;
  // tap.getInfo()//--获取页签数据信息
  //     .then(function () {
  //         return search.getInfo();//--获取检索数据信息
  //     })
  //     .then(function () {
  //         return endGoal.getList();//--获取列表数据信息
  //     })
  //     .then(() => {
  //         model.loading = false;
  //     });

  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: model,
      computed: {
        ed0_list_sort1: function ed0_list_sort1() {
          return _.orderBy(this.endGoal.days[0].list, 'sort1', 'asc');
        },
        ed0_list_time: function ed0_list_time() {
          return _.orderBy(this.endGoal.days[0].list, 'time', 'asc');
        },
        ed0_list_no: function ed0_list_no() {
          return _.orderBy(this.endGoal.days[0].list, 'no', 'asc');
        }
      },
      created: function created() {
        var self = this,
          selected = self.getUrlParam('selected'),
          time = Gray.$page.getUrlParam('time'),
          scrolly = Gray.$page.getUrlParam('scrolly'),
          page = Gray.$page.getUrlParam('page'),
          list = itou.sessionData.getData('__danchang_end_list_').data || {},
          key = self.getPageKey();
        if (time || selected) {
          search.selected = selected.length > 0 ? selected.split(',') : [];
          tap.getInfo() //--获取页签数据信息
          .then(function () {
            tap.curr = time;
            // 判断 是不是北单完场赛果 并且缓存有没有数据 
            if (key === 'danchang_end' && Object.keys(list).length > 0) {
              endGoal.page = Number(page) || 1;
              vm.$set(self.endGoal, 'days', [{
                list: list
              }]);
            } else {
              return endGoal.getList(); //--获取列表数据信息
            }
          }).then(function () {
            return search.getInfo(); //--获取检索数据信息
          }).then(function () {
            var dom = self.$refs['lives_scroll'];
            // dom.scroll(0, scrolly - 48 - 35);
            dom.scroll(0, scrolly);
            model.loading = false;
          });
        } else {
          tap.getInfo() //--获取页签数据信息
          .then(function () {
            return search.getInfo(); //--获取检索数据信息
          }).then(function () {
            return endGoal.getList(); //--获取列表数据信息
          }).then(function () {
            model.loading = false;
          });
        }
      },
      methods: {
        getUrlParam: function getUrlParam(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
          var r = window.location.search.substr(1).match(reg); //匹配目标参数
          if (r != null) return unescape(decodeURIComponent(r[2]));
          return null; //返回参数值
        },

        doSearch: function doSearch() {
          var self = this;
          self.search.ok().then(function () {
            return self.endGoal.getList();
          }).then(function () {
            self.loading = false;
            self.$refs['lives_scroll'].scroll(0, 0);
          });
        },
        "goto": function goto(key) {
          if (key == this.currPage.key) {
            return;
          }
          var self = this,
            currPage = self.currPage,
            url = currPage.maps[key] || '/livescore/jingcai/',
            back = self.backpaths[0] || '/';
          back = encodeURIComponent(back);
          url += '?back=' + back;
          Gray.$page.loadPage(url);
        },
        tapMove: function tapMove(params) {
          var self = this;
          self.tap.moveTo(params).then(function () {
            return search.getInfo(); //--获取检索数据信息
          }).then(function () {
            return self.endGoal.getList();
          }).then(function () {
            search.selected = [];
            self.$refs['lives_scroll'].scroll(0, 0);
            model.loading = false;
          });
        },
        toVideo: function toVideo(id) {
          var self = this,
            key = self.getPageKey();
          switch (key) {
            case 'jingcailq_end':
              var url = '/livescore/jingcailq/livewords/';
              break;
            default:
              var url = '/livescore/jingcai/livevideo/';
              break;
          }
          // var back = self.backurl;
          url += '?matchid=' + id;
          url += '&back=' + self.getBack();
          if (key === 'danchang_end') {
            // itou.sessionData 浏览器关闭后清空
            itou.sessionData.setData('__danchang_end_list_', {
              data: endGoal.days[0].list
            });
          }
          Gray.$page.loadPage(url);
        },
        getPageKey: function getPageKey() {
          var self = this,
            currPage = self.currPage;
          return currPage.key;
        },
        getBack: function getBack() {
          /**
          * 返回地址中追加查询参数
          */
          var back = Gray.$page.getUrlParam('back'),
            self = this,
            dom = self.$refs['lives_scroll'],
            currUrl = window.location.pathname;
          currUrl += '?selected=' + encodeURI(search.selected || '');
          currUrl += '&time=' + tap.curr;
          currUrl += '&page=' + endGoal.page;
          // currUrl += '&scrolly=' + p_node.offsetTop;
          currUrl += '&scrolly=' + dom.scrollTop;
          currUrl += '&back=' + encodeURIComponent(back);
          return encodeURIComponent(currUrl);
        },
        gotoMatch: function gotoMatch(matchid) {
          //--查看战绩分析
          var self = this,
            key = self.getPageKey();
          if (key === 'danchang_end') {
            // itou.sessionData 浏览器关闭后清空
            itou.sessionData.setData('__danchang_end_list_', {
              data: endGoal.days[0].list
            });
          }
          // Gray.$page.loadPage("/match/history/?doreset=1&matchid=" + matchid + "&back=" + this.backurl);
          Gray.$page.loadPage('/match2/?pageName=history&matchid=' + matchid + '&lotteryId=90&lottStyle=jczq&back=' + self.getBack());
        },
        toMatch: function toMatch(matchid) {
          var self = this;
          // Gray.$page.loadPage('/match/jingcailanqiu/history/?matchid=' + matchid + '&back=' + window.backurl);
          Gray.$page.loadPage('/match/jingcailanqiu/history/?matchid=' + matchid + '&lottStyle=jclq&back=' + self.getBack());
        }
      }
    });
  };
})();

/***/ })

/******/ });