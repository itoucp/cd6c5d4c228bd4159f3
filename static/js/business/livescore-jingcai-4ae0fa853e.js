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
/******/ 	return __webpack_require__(__webpack_require__.s = 227);
/******/ })
/************************************************************************/
/******/ ({

/***/ 227:
/***/ (function(module, exports) {

/**
 * 微信C端		竞彩足球比分直播
 * by zhaoyf	2017-07-19 10:21:05
 */
(function () {
  // var model = $.livesorce.init(["cache", "search", "liveGoal", "toast", "project", "outil"]);
  var model = $.livesorce.init(['cache', 'search', 'liveGoal', 'websocket', 'toast', 'project', 'outil']);
  console.log($.livesorce);
  var search = model.search,
    // websocket = model.websocket,
    liveGoal = model.liveGoal;
  search.getInfo(); //--获取检索数据信息
  var listOK = liveGoal.doRefresh(); //--获取列表数据信息

  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: model,
      beforeDestroy: function beforeDestroy() {
        try {
          var _this$websocket;
          (_this$websocket = this.websocket) === null || _this$websocket === void 0 || (_this$websocket = _this$websocket.ws) === null || _this$websocket === void 0 || _this$websocket.close('jdd_score');
        } catch (e) {
          console.warn(e);
        }
      },
      mounted: function mounted() {
        var self = this,
          key = self.currPage.key || 'jingcai',
          maps = {
            'danchang': '比分直播-单场',
            'zucai': '比分直播-足彩',
            'jingcai': '比分直播-竞彩'
          };
        var id = itou.localJson.getJson('/user/shop/details/').id || '';
        if (self.$refs.gameadv) {
          //--玩蜂游戏推广广告
          self.$refs.gameadv.init({
            shopid: id,
            ad_options: 'livescore',
            type: 'min',
            page: maps[key]
          }, function (url) {
            // itou.baiduHm(maps[key], '广告标签：玩蜂1');//--百度统计
            return url + '&from=livescore';
          });
        }
        var adv_config = {
          station_uid: id,
          // station_uuid: $data.info.uuid,
          type: 'def',
          //--广告位类型
          api: {
            //--广告位接口请求数据
            // url: 'w500/getimg',
            // data: {
            //     station_user_id: id,
            //     scene: 'live_score'
            // },
            url: 'ycontent/getImg',
            data: {
              station_user_id: id,
              scene: 'live_score'
            },
            rnd: false,
            notoken: true,
            specialErr: {
              '-3': function _() {},
              '-99': function _() {}
            }
          },
          onload: function onload(adv) {
            //--加载完成后回调
            //--世界杯期间暂时调整
            // adv.data = {
            //     is_show: true,
            //     // img: 'https://update-0002.51aitou.com/pic/chdd_1.png?v=202007281728'
            //     img: '/static/images/help/data_tools_index-9d361ef89e.png'
            // }
            //----------------------------
            var data = adv.data;
            adv.img = data.img;
            adv.isShow = !!adv.img; //--是否展示广告
          },

          onshow: function onshow(adv) {
            // itou.baiduHm('即时比分页', '大数据入口曝光');//--百度统计
          },
          // onclick: function (adv) {
          //     itou.baiduHm('即时比分页', '大数据入口点击');//--百度统计
          //     var url = '/monetize/tow500/';//--中转页面
          //     url += '?scene=live_score'; //--场景
          //     url += '&back=' + window.backurl;//--返回路径
          //     url += '&id=' + id;//--店铺ID
          //     Gray.$page.loadPage(url);//--跳转到中转页面
          // },
          onclick: function onclick(adv) {
            var link = adv.data.jump_url;
            if (!link) {
              return;
            }
            link += '&back=' + window.backurl; //--返回路径
            Gray.$page.loadPage(link);
          }
        };
        if (self.$refs.adv_dstd) {
          //--大神推单
          try {
            self.$refs.adv_dstd.$data.init(adv_config);
          } catch (error) {
            // console.error(error)
          }
        }
        listOK.then(function () {
          window.setTimeout(function () {
            var first = self.liveGoal.firstMatch.item;
            if (first && self.$refs['adv_dstd' + first.id]) {
              //--大神推单
              try {
                self.$refs['adv_dstd' + first.id][0].$data.init(adv_config);
              } catch (error) {
                console.error(error);
              }
            }
          }, 200);
        });
      },
      methods: {
        doSearch: function doSearch() {
          var self = this;
          self.search.ok().then(function () {
            $('.livescoremain').scrollTop(0);
            return self.liveGoal.getList();
          }).then(function () {
            self.liveGoal.scrollToLive();
          });
        },
        "goto": function goto(key, canback) {
          if (key == this.currPage.key) {
            return;
          }
          var self = this,
            currPage = self.currPage,
            url = currPage.maps[key] || '/livescore/jingcai/',
            back = self.backpaths[0] || '/';
          if (canback) {
            back = self.backurl;
          } else {
            back = encodeURIComponent(back);
          }
          url += '?back=' + back;
          Gray.$page.loadPage(url);
        },
        toVideo: function toVideo(id) {
          var self = this,
            currPage = self.currPage,
            key = currPage.key;
          switch (key) {
            case 'jingcailq':
              var url = '/livescore/jingcailq/livewords/';
              break;
            default:
              var url = '/livescore/jingcai/livevideo/';
              break;
          }
          var back = self.backurl;
          url += '?matchid=' + id;
          url += '&back=' + back;
          Gray.$page.loadPage(url);
        },
        gotoMatch: function gotoMatch(matchid) {
          var _maps$key;
          //--查看战绩分析
          // Gray.$page.loadPage("/match/history/?doreset=1&matchid=" + matchid + "&lotteryId=" + liveGoal.lotteryId + "&back=" + this.backurl);
          var key = this.currPage.key;
          var maps = {
            'jingcai': 'jczq',
            'zucai': 'zc',
            'danchang': 'dc'
          };
          var lottStyle = (_maps$key = maps[key]) !== null && _maps$key !== void 0 ? _maps$key : 'jczq';
          Gray.$page.loadPage('/match2/?pageName=history&matchid=' + matchid + '&lotteryId=' + liveGoal.lotteryId + '&lottStyle=' + lottStyle + '&back=' + this.backurl);
        },
        gotoProject: function gotoProject(id, uuid) {
          //--查看战绩分析
          Gray.$page.loadPage('/project/detail/?id=' + id + '&p_uuid=' + uuid + '&back=' + this.backurl);
        }
      }
    });
  };
})();

/***/ })

/******/ });