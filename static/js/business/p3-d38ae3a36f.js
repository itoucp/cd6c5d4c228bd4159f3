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
/******/ 		114: 0
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
/******/ 	deferredModules.push([276,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_chdd_live_betting_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/**
 * 微信C端		排3、3D投注页面
 * by zhaoyf	2017-04-19 16:43:39
 */

(function () {
  var Lottery = function Lottery(Model) {
    //--彩种信息，用来在提交确认页获取对应采种
    itou.dataModel.config({
      key: 'p3_Lottery',
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

    var lottery = itou.dataModel.dataFactory.create('p3_Lottery');
    lottery = new lottery();
    lottery = lottery.getJson();
    itou.localData.setData('__sys_lottery_type', {
      key: lottery
    });
  };
  var Prize = function Prize(Model) {
    itou.dataModel.config({
      //--开奖结果行数据原型
      key: 'p3_PrizeItem',
      opts: {
        no: {
          t: '期号',
          k: 'lottery_no',
          d: ''
        },
        shijihao: {
          t: '试机号',
          k: '',
          d: function d(itemData) {
            var result = itemData.sample;
            result = result.replace(/;/g, '   ');
            return result;
          }
        },
        result: {
          t: '奖果',
          k: '',
          d: function d(itemData) {
            var result = itemData.lottery_result;
            if (Model.pageType != 'NP7') {
              result = result.replace(/;/g, '   ');
              return result;
            } else {
              result = result.split(';');
              var blue = result.splice(-1);
              result = [result.join('   '), blue[0]];
              return result;
            }
          }
        },
        type: {
          t: '类型',
          k: 'lottery_result_desc',
          d: ''
        },
        prize: {
          t: '排7奖金',
          k: '',
          d: function d(itemData) {
            var prize_list = itemData.prize_list[1],
              r = '';
            if (!prize_list) {
              r = '暂未开出';
            } else if (prize_list && prize_list.prize && prize_list.prize > 0) {
              r = Math.floor(prize_list.prize / 10000) + '万元';
            } else {
              r = '无人中';
            }
            return r;
          }
        }
      }
    });
    var prizeItem = itou.dataModel.dataFactory.create('p3_PrizeItem');
    itou.dataModel.config({
      key: 'p3_Prize',
      opts: {
        isShow: {
          t: '是否展示',
          k: '',
          d: false
        },
        hasSJ: {
          t: '是否有试机号',
          k: '',
          d: function d(itemData) {
            return Model.pageType == '3D';
          }
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
    var prize = itou.dataModel.dataFactory.create('p3_Prize');
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
  var Model = function Model(vm) {
    var self = this,
      href = Gray.$page.href || window.location.href;
    if (href.toLowerCase().has('/confirm/basket/p33d/')) {
      //--号码篮
      var lottery = itou.localData.getData('__sys_lottery_type').key;
      var pageType = lottery.v;
    } else if (href.toLowerCase().has('/p3/')) {
      var pageType = 'P3'; //--双色球投注页面
    } else if (href.toLowerCase().has('/3d/')) {
      var pageType = '3D'; //--大乐透投注页面
    } else if (href.toLowerCase().has('/p5/')) {
      var pageType = 'P5'; //--排5
    } else if (href.toLowerCase().has('/qixingcai/')) {
      var pageType = 'P7'; //--七星彩
    } else if (href.toLowerCase().has('/np7/')) {
      var pageType = 'NP7'; //--新七星彩
    }

    var p3 = window.P3.create(pageType, vm);
    p3.call(self);
    self.jddChart = jddChart;
    self.pageType = pageType;
    // self.title = pageType == "P3"? "排3": "3D";
    switch (pageType) {
      case 'P3':
        self.title = '排3';
        break;
      case 'P5':
        self.title = '排列五';
        break;
      case 'P7':
        self.title = '七星彩';
        break;
      case 'NP7':
        self.title = '七星彩';
        break;
      case '3D':
        self.title = '3D';
        break;
      default:
        break;
    }
    self.bottomMsg = pageType == 'P3' ? '双击红球可设胆' : '双击号码可设胆';
    self.canSubmit = false;
    if (!lottery) {
      //--投注页面存入猜中缓存信息
      Lottery(self);
    }
    self.prize = Prize(self);
    if (!lottery) {
      //--投注页面获取中奖信息(非号码篮)
      self.prize.get();
    }
    self.show3DMsg = false;
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
    var vm = new Vue({
      el: '#body',
      components: {
        'chdd-live-betting': _components_public_chdd_live_betting_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: function data() {
        return new Model(this);
      },
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
      mounted: function mounted() {
        var self = this;
        self.selecter.init();
        if (self.pageType == '3D' && !itou.sessionData.getData('__3D_has_init').key) {
          self.show3DMsg = true;
          window.setTimeout(function () {
            self.show3DMsg = false;
            itou.sessionData.setData('__3D_has_init', {
              key: true
            });
          }, 3000);
        }
      },
      methods: {
        changeNS: function changeNS(_wt) {
          //--切换普通和和值玩法
          var self = this,
            wt = self.selecter.hand.wt;
          if (wt.has('P')) {
            //--当前是直选
            if (_wt == 'N') {
              //--切换到普通
              _wt = 'P';
            } else if (_wt == 'S') {
              //--切换到和值
              _wt = 'PS';
            }
          } else if (wt.has('C')) {
            //--当前是组选
            if (_wt == 'N') {
              //--切换到普通
              _wt = 'C3C6';
            } else if (_wt == 'S') {
              //--切换到和值
              _wt = 'CS';
            } else if (_wt == 'D') {
              //--切换到和值
              _wt = 'CD3';
            }
          }
          if (wt != _wt) {
            //--执行切换
            self.selecter.changeWT(_wt);
          }
        },
        changeC3C6: function changeC3C6(type) {
          var _this = this;
          //--弹层提示
          var self = this,
            wt = self.selecter.hand.wt;
          if (type == 'C6' && wt.has('C6')) {
            var dan = self.selecter.hand.wager.ball[0];
            if (dan.length > 1) {
              this.$refs.layer.confirm.show({
                text: '组3只能设置一个胆，将为您自动清除一个',
                buttons: [{
                  text: '取消'
                }, {
                  text: '确定',
                  fun: function fun() {
                    _this.change_C3C6(type);
                  }
                }]
              });
              return;
            }
          }
          this.change_C3C6(type);
        },
        change_C3C6: function change_C3C6(type) {
          //--组选普通，组3和组6勾选状态切换
          var self = this,
            base = 'C3C6',
            wt = self.selecter.hand.wt;
          var wagerType = {
            //--投注类型映射关系
            'P': '普通',
            //--直选普通
            'PS': '和值',
            //--直选和值
            'C': '机选',
            //--组选机选
            'C3': '组3',
            //--组3
            'C6': '组6',
            //--组6
            'C3C6': '组3组6',
            //--组3组6
            'CS': '和值' //--组选和值
          };

          if (wt.has(type)) {
            self.selecter.hand.wt = wt.replace(type, '') || base.replace(type, '');
          } else {
            wt += type;
            self.selecter.hand.wt = wt.length == 4 ? base : wt;
          }
          self.selecter.hand.wager.wt = self.selecter.hand.wt;
          self.selecter.hand.wager.text = wagerType[self.selecter.hand.wt];
          if (self.selecter.hand.wt == 'C3') {
            var maxDan = 1;
            self.selecter.hand.maxDan = maxDan;
            var dan = self.selecter.hand.wager.ball[0];
            if (dan.length > maxDan) {
              //--超过可设胆数,随即取消一个胆
              var rnd = Math.floor(Math.random() * 2);
              self.selecter.hand.doSelect({
                type: 'dan',
                num: dan[rnd]
              });
            }
          } else if (self.selecter.hand.wt == 'C6' || self.selecter.hand.wt == 'C3C6') {
            self.selecter.hand.maxDan = 2;
          }
          self.compute.money();
          // self.selecter.changeWT(self.selecter.hand.wt);
        },

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
          itou.outil.saveProject(r, 'hemai');
        },
        gotoAdd: function gotoAdd() {
          var self = this;
          var docopy = Gray.$page.getUrlParam('docopy') || null; //--是否是复制选号
          if (docopy) {
            var maps = {
              P3: '/p3/',
              '3D': '/3d/',
              P5: '/p5/',
              P7: '/qixingcai/',
              NP7: '/np7/'
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
          if (self.pageType != 'P5' && self.pageType != 'P7' && self.pageType != 'NP7') {
            self.gotoAdd();
            return;
          }
          self.gotoEdit(-1);
        },
        gotoEdit: function gotoEdit(index) {
          var self = this,
            $data = self.$data,
            lan = $data.lan,
            list = lan.list,
            len = list.length,
            i = 0;
          if (self.pageType != 'P5' && self.pageType != 'P7' && self.pageType != 'NP7') {
            return;
          }
          while (i < len) {
            list[i].edit = i == index;
            self.formatBall(list[i].ball);
            i++;
          }
          $data.cache.save();
          self.gotoAdd();
        },
        formatBall: function formatBall(ball) {
          var self = this;
          var len = ball.length,
            i = 0;
          while (i < len) {
            if (ball[i].length == 1 && itou.outil.is(ball[i][0], 'Array')) {
              ball[i] = ball[i][0];
            }
            self.arrToNumber(ball[i]);
            i++;
          }
        },
        arrToNumber: function arrToNumber(arr) {
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            arr[i] = Number(arr[i]);
          }
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