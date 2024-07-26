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
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
/******/ })
/************************************************************************/
/******/ ({

/***/ 176:
/***/ (function(module, exports) {

/**
 * 微信C端		北京单场页面逻辑
 * by	zhaoyf	2017-06-23 10:03:34
 */
(function () {
  var keyType,
    href = Gray.$page.href || window.location.href;
  if (href.toLowerCase().has('/guoguan/')) {
    keyType = 'WL'; // 胜负过关页面
  } else {
    keyType = 'dc'; // 北京单场页面
  }

  var dachang = $.lottery.danchang.init(['bet']),
    prevPage = window.prevPage + '';
  dachang.bet.init(); //--初始化基础信息
  dachang.pageShow = false;
  dachang.grcmdNum = {};

  //--获取彩种匹配赛事匹配的推荐数量
  dachang.getBetMatchGrcmdNum = function () {
    var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息
    var self = this;
    return itou.get({
      url: 'recommend/getBetMatchGrcmdNum',
      data: {
        lottery_style: 'dc',
        station_uid: shop.id
      },
      rnd: false,
      notoken: true,
      noToast: true
    }).then(function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      self.grcmdNum = data;
      if (Object.keys(data).length > 0) {
        itou.baiduHm('投注页', '推单入口展示'); //--百度统计
      }
    });
  };

  if ($.paijiang) {
    var sid = Gray.$page.getUrlParam('station_id') || '';
    $.paijiang.init({
      dataType: 'lottery',
      sid: sid
    });
    $.paijiang.apis.getInfo({
      lottery_type: keyType,
      station_user_id: sid
    });
    dachang.paijiang = $.paijiang;
  } else {
    dachang.paijiang = {};
  }
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: function data() {
        return dachang;
      },
      created: function created() {
        var self = this;
        dachang.getBetMatchGrcmdNum();
        dachang.bet.getList() //--获取列表信息
        .then(function () {
          self.pageShow = true;
          if (vm.position && (prevPage.has('/match2/') || prevPage.has('/confirm/') || prevPage.has('/hm/add/') || prevPage.has('/jingcai/prizereview/') || prevPage.has('/project/detail/'))) {
            vm.position.init({
              //--重定位功能初始化
              daysData: dachang.bet.days,
              //--日期数据对象
              openkey: 'isShow',
              //--是否展示的键值名
              type: 'danchang',
              //--类型
              el: '#scrollBody'
            });
            vm.position["do"]();
          }
        });
        dachang.bet.getAllowUser();
        dachang.bet.getHemaiStatus();
      },
      beforeDestroy: function beforeDestroy() {
        var self = this;
        if (self.position) {
          self.position.init({
            //--重定位功能初始化
            daysData: dachang.bet.days,
            //--日期数据对象
            openkey: 'isShow',
            //--是否展示的键值名
            type: 'danchang',
            //--类型
            el: '#scrollBody'
          });
          self.position.setPosition();
        }
      },
      computed: {
        pingceStatus: function pingceStatus() {
          //--奖金评测接口调用状态
          var self = this,
            pingceLoading = self.pingceLoading,
            key = 'pingce_status_key',
            r = {};
          r.status = pingceLoading;
          console.log(pingceLoading);
          itou.outil.timmer.clearTimmer(key);
          if (pingceLoading == 'doing') {
            itou.outil.timmer.newTimmer({
              key: key,
              timeout: 5000,
              fun: function fun() {
                console.log(pingceLoading == 'doing');
                itou.outil.timmer.clearTimmer(key);
                if (pingceLoading == 'doing') {
                  self.pingceLoading = 'error';
                  r.status = pingceLoading;
                }
              }
            });
          }
          return r;
        },
        showMixedGuoguan: function showMixedGuoguan() {
          //--是否显示混合过关
          var self = this,
            mixed = self.$data.bet.guoguan.mixed,
            showNum = 0;
          for (var i in mixed) {
            var item = mixed[i];
            if (item.show) {
              showNum += 1;
            }
          }
          return !!showNum;
        },
        day_list_sort: function day_list_sort() {
          var r = {};
          for (var i in this.bet.days) {
            r[i] = _.orderBy(this.bet.days[i].list, 'sort', 'asc');
          }
          return r;
        },
        bet_prize_no_desc: function bet_prize_no_desc() {
          return _.orderBy(this.bet.prize, 'no', 'desc');
        },
        bet_pingce_eList_max_desc: function bet_pingce_eList_max_desc() {
          return _.orderBy(this.bet.pingce.evaluate.list, 'max', 'desc');
        }
      },
      methods: {
        showJianpan: function showJianpan() {
          //--弹出软键盘
          var self = this;
          self.numkeyboard.init({
            //--设置数字键盘快捷按钮数字单位
            text: '倍',
            topKey: [10, 50, 100, 1000, 10000]
          });
          self.numkeyboard.open('bet.computer.beishu', 'bet.limit.beishu', self, 'bottom: 90px', function () {
            self.bet.computer["do"]();
          });
        },
        showGuoguan: function showGuoguan() {
          var self = this;
          self.bet.showGuoguan();
          self.numkeyboard.close();
        },
        gotoMatch: function gotoMatch(matchid, sport) {
          var pageName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'history';
          //--查看战绩分析
          // console.log(matchid, sport);
          if (!matchid || matchid == '0') {
            return;
          }
          if (pageName == 'recommend') {
            itou.baiduHm('投注页', '推单入口点击'); //--百度统计
          } else {
            itou.baiduHm('投注页', '赛事分析点击'); //--百度统计
          }

          if (sport == '足球' && matchid > 0) {
            //--竞彩足球跳转
            // Gray.$page.loadPage("/match/history/?doreset=1&lotteryId=45&matchid=" + matchid + "&back=" + this.backurl);
            var url = '/match2/?pageName=' + pageName + '&matchid=' + matchid + '&lotteryId=45&lottStyle=dc&back=' + this.backurl;
            //--用户行为继承
            url = itou.bsrc.inherit(url);
            Gray.$page.loadPage(url);
            return;
          }
          if (sport == '篮球') {
            //--竞彩篮球跳转
            var self = this,
              msg = '您将要打开的数据页面中，主客场位置与现在投注页相反，投注时请确认主客队位置，一旦提交，我们将按照您的所选选项执行。';
            self.matchid = matchid;
            self.showMsgBox(msg, '重要提示', '__danchang_gotoMatch_basketball', '确定');
            return;
          }
        },
        doRefresh: function doRefresh() {
          var self = this,
            cache = dachang.cache;
          self.bet.clear();
          self.bet.search.selected = {};
          self.bet.search.selected1 = {};
          self.bet.search.checkSelected();
          dachang.getBetMatchGrcmdNum();
          return self.bet.getList() //--获取赛事列表
          .then(function () {
            self.ascroll && self.ascroll.resetload();
          });
        },
        doSave: function doSave() {
          var self = this;
          self.bet.doSave();
        },
        doSubmit: function doSubmit() {
          var self = this;
          self.bet.doSubmit();
        },
        doHemai: function doHemai() {
          var self = this;
          self.bet.doHemai();
        },
        checkSubmit: function checkSubmit() {
          //--检查数据并弹出提交按钮
          var self = this;
          itou.outil.checkLogin().then(function (is_login) {
            if (is_login) {
              self.$refs.submitlayer.init({
                //--唤起提交按钮弹层
                vm: self,
                is_allow: self.bet.is_allow,
                hemai_allow: self.bet.hemai_allow,
                doSave: self.doSave,
                doSubmit: self.doSubmit,
                doHemai: self.doHemai
              });
            }
          });
        },
        closeTopHelp: function closeTopHelp() {
          if (this.bet.currLayer == 'tophelp') {
            this.bet.currLayer = '';
          }
        },
        /**
         * @function doClearSelected
         * @description 弹窗提示，清空选项
         */
        doClearSelected: function doClearSelected() {
          var _this = this;
          var noWarning = itou.localData.getData('__tz_del_warn').noWarning || 0;
          if (noWarning != 1) {
            this.$refs.layer.alert.warning({
              text: "\u662F\u5426\u6E05\u7A7A\u5DF2\u6295\u6CE8\u9009\u9879\uFF1F",
              checkbox: {
                checked: noWarning == 1,
                fun: function fun() {
                  noWarning ^= 1;
                },
                text: '不再提示，直接清空。'
              },
              buttons: [{
                text: '否'
              }, {
                text: '是',
                fun: function fun() {
                  _this.unSelectAll();
                  itou.localData.setData('__tz_del_warn', {
                    noWarning: noWarning
                  });
                }
              }]
            });
          } else {
            this.unSelectAll();
          }
        },
        /**
         * @function unSelectAll
         * @description 清空选中的选项
         */
        unSelectAll: function unSelectAll() {
          this.bet.clear();
          this.bet.search.selected = {};
          this.bet.search.selected1 = {};
          this.bet.search.checkSelected();
          this.bet.currLayer = '';
          this.numkeyboard.close();
          this.$refs.layer.tip.succesTop({
            text: '投注选项已清空'
          });
        }
      }
    });
    vm.$on('msgbox_close', function (msg) {
      if (msg == '__danchang_gotoMatch_basketball') {
        var url = '/match/jingcailanqiu/history/?lotteryId=45&lottStyle=jclq&matchid=' + vm.matchid + '&back=' + window.backurl;
        //--用户行为继承
        url = itou.bsrc.inherit(url);
        Gray.$page.loadPage(url);
      }
    });
  };
})();

/***/ })

/******/ });