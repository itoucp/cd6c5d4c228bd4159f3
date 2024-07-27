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
/******/ 		149: 0
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
/******/ 	deferredModules.push([313,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_chdd_live_betting_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/**
 * 微信C端		双色球投注页面
 * by zhaoyf	2017-03-28 09:05:56
 */

(function () {
  var Lottery = function Lottery(Model) {
    //--彩种信息，用来在提交确认页获取对应采种
    itou.dataModel.config({
      key: 'ssq_Lottery',
      opts: {
        t: {
          t: '采种名称',
          k: '',
          d: function d() {
            return Model.title;
          }
        },
        v: {
          t: '采种标识',
          k: '',
          d: function d() {
            return Model.pageType;
          }
        },
        num: {
          t: '彩期数',
          k: '',
          d: ''
        },
        //--只有11选5生效
        service: {
          t: '开售时间',
          k: '',
          d: ''
        },
        //--只有11选5生效
        map: {
          t: '映射地址',
          k: '',
          d: ''
        } //--只有11选5生效
      }
    });

    var lottery = itou.dataModel.dataFactory.create('ssq_Lottery');
    lottery = new lottery();
    lottery = lottery.getJson();
    itou.localData.setData('__sys_lottery_type', {
      key: lottery
    });
  };
  var Prize = function Prize(Model) {
    itou.dataModel.config({
      //--开奖结果行数据原型
      key: 'ssq_PrizeItem',
      opts: {
        no: {
          t: '期号',
          k: 'lottery_no',
          d: ''
        },
        result: {
          t: '奖果',
          k: '',
          d: function d(itemData) {
            var r = {},
              result = itemData.lottery_result || '';
            result = result.split('|');
            r.blue = (result[1] || '').split(',');
            r.red = (result[0] || '').split(',');
            return r;
          }
        },
        money: {
          t: '奖金',
          k: '',
          d: function d(itemData) {
            try {
              var m;
              if (itemData.lottery_type == 'KL8') {
                m = itemData.prize_list[110].prize;
              } else {
                m = itemData.prize_list[1].prize;
              }
              if (m == 0) {
                return '无人中';
              } else {
                return (m / 10000).toFixed(0) + '万元';
              }
            } catch (error) {
              return '未开';
            }
          }
        }
      }
    });
    var prizeItem = itou.dataModel.dataFactory.create('ssq_PrizeItem');
    itou.dataModel.config({
      key: 'ssq_Prize',
      opts: {
        isShow: {
          t: '是否展示',
          k: '',
          d: false
        },
        list: {
          t: '开奖列表',
          k: '',
          d: function d(prizeData) {
            var r = [];
            prizeData.list.forEach(function (element) {
              var item = new prizeItem(element);
              r.push(item);
            }, this);
            return r;
          }
        }
      }
    });
    var prize = itou.dataModel.dataFactory.create('ssq_Prize');
    prize.prototype.get = function () {
      //--获取决口数据
      var self = this;
      return itou.get({
        url: 'shuzi/indexprizelist',
        data: {
          lottery_type: Model.pageType
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        self.reload(data);
      });
    };
    prize.prototype.show = function () {
      //--展示/隐藏开奖列表
      var self = this;
      self.isShow = !self.isShow;
    };
    return new prize();
  };
  var jddChart = __webpack_require__(67); //--数字彩走势图对象
  var Model = function Model() {
    var self = this,
      href = Gray.$page.href || window.location.href;
    if (href.toLowerCase().has('/confirm/basket/dlt/')) {
      //--号码篮
      var lottery = itou.localData.getData('__sys_lottery_type').key;
      var pageType = lottery.v;
    } else if (href.toLowerCase().has('/ssq/')) {
      var pageType = 'SSQ'; //--双色球投注页面
    } else if (href.toLowerCase().has('/dlt/')) {
      var pageType = 'SuperLotto'; //--大乐透投注页面
    } else if (href.toLowerCase().has('/kl8/')) {
      var pageType = 'KL8'; //--快乐8投注页面
    }

    var ssq = window.SSQ.create(pageType);
    ssq.call(self);
    self.jddChart = jddChart;
    self.pageType = pageType;
    var title = {
      'SSQ': '双色球',
      'SuperLotto': '大乐透',
      'KL8': '快乐8'
    };
    // self.title = pageType == 'SSQ' ? '双色球' : '大乐透';
    self.title = title[pageType] || '大乐透';
    // self.bottomMsg = pageType == "SSQ"? "双击红球可设胆": "双击号码可设胆";
    self.bottomMsg = '勾选号码下方框设胆';
    self.canSubmit = false;
    if (pageType == 'KL8') {
      var wt = itou.localData.getData('kl8-wt').wt;
      if (wt && !isNaN(wt)) {
        self.selecter.hand.changeSelectNum('red', wt);
      } else {
        itou.localData.setData('kl8-wt', {
          wt: 5
        });
      }
    }
    self.showWt = false; //--展示子玩法列表

    if (!lottery) {
      //--投注页面存入猜中缓存信息
      Lottery(self);
    }
    self.prize = Prize(self);
    if (!lottery) {
      //--投注页面获取中奖信息
      self.prize.get();
    }
    self.menu = {
      isShow: false,
      show: function show() {
        self.menu.isShow = !self.menu.isShow;
        try {
          window.vm.numkeyboard.close();
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    self.is_allow = false;
    self.hemai_allow = false;
    self.station_id = Gray.$page.getUrlParam('station_id') || itou.localJson.getJson('__entry_info').station_id;
    if ($.paijiang) {
      var sid = Gray.$page.getUrlParam('station_id') || '';
      $.paijiang.init({
        dataType: 'lottery',
        sid: sid
      });
      $.paijiang.apis.getInfo({
        lottery_type: self.pageType,
        station_user_id: sid
      });
      self.paijiang = $.paijiang;
    } else {
      self.paijiang = {};
    }
  };
  Model.prototype.getAllowUser = function () {
    var self = this;
    return itou.get({
      url: 'sharebuy/allowusesharebuy',
      data: {
        station_id: self.station_id
      },
      apiType: 'itApi'
    });
  };
  Model.prototype.getHemaiStatus = function () {
    var self = this;
    return itou.get({
      url: 'sharebuy/issupport',
      data: {
        station_id: self.station_id
      },
      apiType: 'itApi'
    });
  };
  window.pageLoad = function () {
    /** 在ios壳环境中，由于环境问题，无法连续触发touchstart，导致doubletap判断失效，因而增加本代码终止冒泡，保证doubletap事件正常触发 **/
    $('ul.flexbox').on('touchend', function (e) {
      e.preventDefault();
    });
    /** 结束 **/
    var vm = new Vue({
      el: '#body',
      components: {
        'chdd-live-betting': _components_public_chdd_live_betting_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new Model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        console.debug(self.$data);
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
            self.hemai_allow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_id).status;
        }
        window.setTimeout(function () {
          self.canSubmit = true;
        }, 300);
        //--彩虹多多直播
        self.$nextTick(function () {
          if (self.$refs.chddLiveBetting) {
            self.$refs.chddLiveBetting.get({
              station_user_id: self.station_id,
              lottery_type: self.pageType
            });
          }
        });
      },
      computed: {
        selecterTip: function selecterTip() {
          //--选球数的提示文字
          var selecter = this.selecter;
          var redNum = selecter.ball.num.red; //--规定的红球数
          var blueNum = selecter.ball.num.blue; //--规定的蓝球数
          var redText = blueNum ? '红球' : '个号码';
          var isEnough = selecter.hand.result.isEnough;
          var r = [];
          if (selecter.currShow == 'hand' && !isEnough) {
            r.push("\u81F3\u5C11\u9009".concat(redNum + redText));
            if (blueNum) {
              r.push("".concat(blueNum, "\u84DD\u7403"));
            }
          } else if (selecter.currShow == 'hand' && isEnough) {
            if (blueNum) {
              r.push("".concat(selecter.hand.result.redNum + redText));
              r.push("".concat(selecter.hand.result.blueNum, "\u84DD\u7403"));
            } else {
              try {
                var danNum = selecter.hand.dan.red.length;
                var tuoNum = selecter.hand.tuo.red.length;
                if (danNum) {
                  r.push("".concat(danNum, "\u4E2A\u80C6\u7801\uFF0C").concat(tuoNum, "\u4E2A\u62D6\u7801"));
                } else {
                  r.push("".concat(selecter.hand.result.redNum + redText));
                }
              } catch (error) {
                r.push("".concat(selecter.hand.result.redNum + redText));
              }
            }
          }
          return r.join('');
        },
        currWtNum: function currWtNum() {
          var _this$selecter;
          //--当前选球的数量
          return (this === null || this === void 0 || (_this$selecter = this.selecter) === null || _this$selecter === void 0 || (_this$selecter = _this$selecter.ball) === null || _this$selecter === void 0 || (_this$selecter = _this$selecter.num) === null || _this$selecter === void 0 ? void 0 : _this$selecter.red) || 10;
        },
        currWt: function currWt() {
          var _this$config;
          //--当前子玩法
          if (this.pageType != 'KL8') {
            return {};
          }
          var currWt = this.currWtNum;
          var wt = this === null || this === void 0 || (_this$config = this.config) === null || _this$config === void 0 ? void 0 : _this$config.wt[currWt];
          this.$data.wt = wt;
          return wt;
        },
        helpGameInfo: function helpGameInfo() {
          //--玩法帮助地址
          var maps = {
            SSQ: '/help/gameinfo/ssq/',
            SuperLotto: '/help/gameinfo/dlt/',
            KL8: '/help/gameinfo/kl8/'
          };
          return maps[this.pageType];
        }
      },
      methods: {
        showJianpan: function showJianpan() {
          //--智能机选弹出软键盘
          var self = this;
          self.numkeyboard.init({
            //--设置数字键盘快捷按钮数字单位
            text: '注'
          });
          self.numkeyboard.open('selecter.random.zhushu', 'selecter.random.max', self, 'bottom: 98px');
        },
        showJianpan1: function showJianpan1() {
          //--号码篮弹出软键盘
          var self = this;
          self.numkeyboard.init({
            //--设置数字键盘快捷按钮数字单位
            text: '倍'
          });
          self.numkeyboard.open({
            key: 'lan.beishu',
            maxKey: 'lan.maxBeishu',
            VueData: self,
            style: self.pageType == 'SSQ' ? 'bottom: 80px' : 'bottom: 100px',
            callBack: function callBack(num) {
              self.compute.money('lan');
              self.cache.save();
            }
          });
        },
        doSave: function doSave() {
          //--保存方案
          var self = this;
          if (self.lan.money > self.lan.maxMoney) {
            self.showToast('方案金额不能超过' + self.lan.maxMoney / 10000 + '万元');
            return;
          }
          var r = self.result.reload(self.lan.getJson()).getJson();
          // self.lan.clear();
          // console.debug(r);
          if (r.hasEmpty) {
            self.showToast('您的选号内容存在格式问题（空行），请截图并联系店铺<br><br>');
            return;
          } else {
            delete r.hasEmpty;
          }
          if (!r.count) {
            self.showToast('请至少选择一注号码');
            return;
          }
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('project_save');
          itou.outil.saveProject(r, 'save').then(function () {
            self.lan.clear();
          }, function () {
            self.lan.clear();
          });
        },
        doSubmit: function doSubmit() {
          //--提交方案
          var self = this;
          if (self.qicheng.lockNum > 0) {
            return;
          }
          if (!self.canSubmit) {
            return;
          }
          if (self.lan.money > self.lan.maxMoney) {
            self.showToast('方案金额不能超过' + self.lan.maxMoney / 10000 + '万元');
            return;
          }
          var r = self.result.reload(self.lan.getJson()).getJson();
          console.debug(r);
          if (r.hasEmpty) {
            self.showToast('您的选号内容存在格式问题（空行），请截图并联系店铺<br><br>');
            return;
          } else {
            delete r.hasEmpty;
          }
          if (!r.count) {
            self.showToast('请至少选择一注号码');
            return;
          }
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('project_next');
          itou.outil.saveProject(r, 'submit');
        },
        doHemai: function doHemai() {
          var self = this;
          if (self.lan.money > self.lan.maxMoney) {
            self.showToast('方案金额不能超过' + self.lan.maxMoney / 10000 + '万元');
            return;
          }
          var r = self.result.reload(self.lan.getJson()).getJson();
          //self.lan.clear();
          console.debug(r);
          if (r.hasEmpty) {
            self.showToast('您的选号内容存在格式问题（空行），请截图并联系店铺<br><br>');
            return;
          } else {
            delete r.hasEmpty;
          }
          if (!r.count) {
            self.showToast('请至少选择一注号码');
            return;
          }
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('project_sharebuy');
          itou.get({
            url: 'user/info',
            data: {
              token: itou.getToken()
            },
            noToast: true
          }).then(function (result) {
            //self.submitAction = "hemai";
            itou.sessionData.setData('__hemai_pingce', {
              num: (self.lan.bonus * self.lan.beishu).toFixed(2)
            });
            itou.outil.saveProject(r, 'hemai');
          });
        },
        gotoAdd: function gotoAdd() {
          var self = this;
          var docopy = Gray.$page.getUrlParam('docopy') || null; //--是否是复制选号
          if (docopy) {
            var maps = {
              SSQ: '/ssq/',
              SuperLotto: '/dlt/',
              KL8: '/kl8/'
            };
            var url = maps[self.pageType];
            url += '?back=' + encodeURIComponent(window.backpaths[0]);
            Gray.$page.loadPage(url);
          } else {
            itou.page.back();
          }
        },
        gotoHand: function gotoHand() {
          var self = this;
          self.gotoEdit(-1);
        },
        gotoEdit: function gotoEdit(index) {
          var self = this,
            $data = self.$data,
            lan = $data.lan,
            list = lan.list,
            len = list.length,
            i = 0;
          while (i < len) {
            list[i].edit = i == index;
            i++;
          }
          $data.cache.save();
          self.gotoAdd();
        },
        checkSubmit: function checkSubmit() {
          //--检查数据并弹出提交按钮
          var self = this;
          if (self.lan.money > self.lan.maxMoney) {
            self.showToast('方案金额不能超过' + self.lan.maxMoney / 10000 + '万元');
            return;
          }
          itou.outil.checkLogin().then(function (is_login) {
            if (is_login) {
              self.$refs.submitlayer.init({
                //--唤起提交按钮弹层
                vm: self,
                is_allow: self.is_allow,
                hemai_allow: self.hemai_allow,
                doSave: self.doSave,
                doSubmit: self.doSubmit,
                doHemai: self.doHemai
              });
            }
          });
        },
        /**
         * @function changeWt
         * @description 切换子玩法
         */
        changeWt: function changeWt(n) {
          var _this = this;
          if (this.currWtNum == n) {
            return;
          }
          this.showWt = false;
          var dan = this.selecter.hand.dan;
          //--已设胆 或 号码篮有数据
          if (dan.red.length || dan.blue.length || this.lan.list.length) {
            this.layer.confirm.show({
              title: '清空选号提醒',
              text: '切换玩法将清空号码篮的选号和已设置的胆，是否切换？',
              buttons: [{
                text: '否'
              }, {
                text: '是',
                fun: function fun() {
                  _this.selecter.hand.clearDan();
                  _this.selecter.hand.changeSelectNum('red', n);
                  itou.localData.setData('kl8-wt', {
                    wt: n
                  });
                  _this.lan.clear();
                }
              }]
            });
            return;
          }
          this.selecter.hand.changeSelectNum('red', n);
          itou.localData.setData('kl8-wt', {
            wt: n
          });
        },
        /**
         * @function tuoAll
         * @description 一键全拖
         */
        tuoAll: function tuoAll() {
          if (!this.selecter.hand.dan.red.length) {
            this.showToast('请先设置胆码');
            return;
          }
          this.selecter.hand.tuoAll();
        }
      }
    });
  };
})();

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/chdd_live/betting.vue?vue&type=template&id=20d7ad20&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "liveshow topcenter",
    staticStyle: {
      display: "none"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.list.length,
      expression: "list.length"
    }],
    staticClass: "flexcenter liveshowbtn",
    "class": {
      open: _vm.animation
    },
    on: {
      click: _vm.trigger
    }
  }, [_c("em", {
    staticClass: "iconnext"
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.list.length,
      expression: "list.length"
    }],
    staticClass: "livelist topcenter",
    staticStyle: {
      display: "none"
    }
  }, _vm._l(_vm.list, function (room) {
    return _c("div", {
      key: room.room_id,
      staticClass: "topcenter",
      on: {
        click: function click($event) {
          return _vm.goLiveRoom(room.room_id);
        }
      }
    }, [_c("div", {
      staticClass: "imgbd"
    }, [_c("img", {
      attrs: {
        src: room.avatar
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "liename"
    }, [_c("p", {
      staticClass: "text",
      domProps: {
        textContent: _vm._s(room.nick)
      }
    }, [_vm._v("直播间1")])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "livebtn",
    on: {
      click: _vm.goLiveIndex
    }
  }, [_c("p", {
    staticClass: "livebtnimg"
  })])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/chdd_live/betting.vue?vue&type=template&id=20d7ad20&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(6);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/chdd_live/betting.vue?vue&type=script&lang=js&
/**
 * 投注页直播入口组件
 * @description 投注页直播入口组件
 * @author zhaoyf
 * @time 2023/05/31 16:38:56
 * @copyright 2023 itou
 */




var maps = {
  //--彩种映射关系
  ToTo: '足球14场',
  NineToTo: '任选9',
  WL: '北单胜负彩',
  dc: '北单',
  jczq: '竞彩足球',
  jclq: '竞彩篮球',
  SuperLotto: '超级大乐透',
  NP7: '七星彩',
  P3: '排列3',
  P5: '排列5',
  SSQ: '双色球',
  KL8: '快乐8',
  '3D': '福彩3D'
};
/* harmony default export */ var bettingvue_type_script_lang_js_ = ({
  name: 'chdd-live-betting',
  data: function data() {
    return {
      station_user_id: '',
      //--店铺id
      lottery_type: '',
      //--彩种
      list: [
        //--直播中的房间
        // { nick: '', avatar: '', room_id: '' },
      ],
      animation: false,
      //--开始播放动画
      isShow: false,
      timer: '_betting_live',
      //--计时器key
      cacheKey: '_betting_live_animat' //--动画播放缓存键值
    };
  },

  methods: {
    /**
     * @function get
     * @description 获取直播信息
     */
    get: function get(_ref) {
      var _this = this;
      var _ref$station_user_id = _ref.station_user_id,
        station_user_id = _ref$station_user_id === void 0 ? '' : _ref$station_user_id,
        _ref$lottery_type = _ref.lottery_type,
        lottery_type = _ref$lottery_type === void 0 ? '' : _ref$lottery_type;
      if (!station_user_id || !lottery_type) {
        return Promise.resolve();
      }
      this.station_user_id = station_user_id;
      this.lottery_type = lottery_type;
      //不用获取fd
      return {"errcode":0,"msg":"success","data":{"room_list":[],"is_show":false}};
  
      return itou.get({
        url: 'chdd/livingRoom',
        data: {
          station_user_id: station_user_id,
          lottery_type: lottery_type
        },
        rnd: false,
        notoken: true
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _data$room_list = data.room_list,
          list = _data$room_list === void 0 ? [] : _data$room_list,
          is_show = data.is_show;
        if (!is_show) {
          return;
        } else {
          // this.isShow = true;
          // 2023-03-11  临时修改为 false 之后恢复 true
          _this.isShow = false;
        }
        if (list.length) {
          _this.list = toConsumableArray_default()(list);
          setTimeout(function () {
            _this.show5S(); //--自动展示5秒
          }, 500);
          if (maps[lottery_type]) {
            itou.baiduHm('选号投注页', '直播入口曝光'); //--百度统计
          } else {
            console.warn('未设置彩种：' + lottery_type + '，埋点失败！');
          }
        }
      });
    },
    /**
     * @function show5S
     * @description 展示5秒后自动关闭
     */
    show5S: function show5S() {
      var _this2 = this;
      var timer = this.timer,
        lottery_type = this.lottery_type,
        cacheKey = this.cacheKey;
      var now = new Date(); //--当前时间
      var date = now.toLocaleDateString(); //--当前日期文本
      //--该彩种缓存日期文本
      var cacheDate = itou.localData.getData(cacheKey)[lottery_type];
      //--当天不再展示播放动画
      if (cacheDate == date) {
        return;
      }
      itou.localData.setData(cacheKey, defineProperty_default()({}, lottery_type, date));
      this.animation = true;
      itou.outil.timmer.clearTimmer(timer);
      itou.outil.timmer.newTimmer({
        //--展示5秒，5秒后关闭
        key: timer,
        timeout: 5000,
        fun: function fun() {
          _this2.animation = false;
          itou.outil.timmer.clearTimmer(timer);
        }
      });
    },
    /**
     * @function trigger
     * @description 切换打开或关闭状态
     */
    trigger: function trigger() {
      var timer = this.timer;
      itou.outil.timmer.clearTimmer(timer);
      this.animation = !this.animation;
    },
    /**
     * @function goLiveIndex
     * @description 跳转到直播首页
     */
    goLiveIndex: function goLiveIndex() {
      var id = this.station_user_id,
        lottery_type = this.lottery_type;
      if (maps[lottery_type]) {
        // itou.baiduHm(maps[lottery_type] + '投注', '直播入口访问'); //--百度统计
        itou.baiduHm('选号投注页', '直播入口访问'); //--百度统计
      } else {
        console.warn('未设置彩种：' + lottery_type + '，埋点失败！');
      }
      var type = 'live_homepage';
      var url = '/monetize/tochdd_live/'; //--彩虹多多中转页面
      url += '?type=' + type; //--需要跳转彩虹多多直播首页
      url += '&back=' + window.backurl; //--返回路径
      url += '&id=' + id; //--店铺ID
      Gray.$page.loadPage(url); //--跳转到中转页面
    },
    /**
     * @function goLiveRoom
     * @description 跳转到直播房间
     */
    goLiveRoom: function goLiveRoom() {
      var room_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var id = this.station_user_id,
        lottery_type = this.lottery_type;
      if (maps[lottery_type]) {
        // itou.baiduHm(maps[lottery_type] + '投注', '直播入口访问'); //--百度统计
        itou.baiduHm('选号投注页', '直播入口访问'); //--百度统计
      } else {
        console.warn('未设置彩种：' + lottery_type + '，埋点失败！');
      }
      var type = 'live_room';
      var url = '/monetize/tochdd_live/'; //--彩虹多多中转页面
      url += '?type=' + type; //--需要跳转彩虹多多直播首页
      url += '&back=' + window.backurl; //--返回路径
      url += '&id=' + id; //--店铺ID
      url += '&room_id=' + room_id; //--直播间id
      Gray.$page.loadPage(url); //--跳转到中转页面
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/chdd_live/betting.vue?vue&type=script&lang=js&
 /* harmony default export */ var chdd_live_bettingvue_type_script_lang_js_ = (bettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/chdd_live/betting.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chdd_live_bettingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/chdd_live/betting.vue"
/* harmony default export */ var betting = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });