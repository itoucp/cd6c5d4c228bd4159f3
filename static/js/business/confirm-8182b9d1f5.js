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
/******/ 		24: 0
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
/******/ 	deferredModules.push([170,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_risk_statement_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/**
 * 微信C端 提交彩店
 * by zhaoyf    2016-08-22
 */

//--风险说明

$(function () {
  function LotteryType() {
    //--彩种所属大类判断
    var self = this;
    var jc = [
    //--竞彩足球类型
    'SportteryWDL',
    //--竞彩让球胜平负
    'SportteryNWDL',
    //--竞彩胜平负
    'SportteryScore',
    //--竞彩比分
    'SportteryTotalGoals',
    //--竞彩总进球
    'SportteryHalfFull',
    //--竞彩半全场
    'SportterySoccerMix' //--竞彩足球混合过关
    ];

    var jclq = [
    //--竞彩篮球类型
    'SportteryWL',
    //--胜负
    'SportteryHWL',
    //--让胜负
    'SportteryBS',
    //--大小分
    'SportteryWS',
    //--胜分差
    'SportteryBasketMix' //--竞彩篮球混合过关
    ];

    var dc = [
    //--北京单场类型
    'WDL',
    //--胜平负
    'Score',
    //--比分
    'TotalGoals',
    //--总进球
    "OverUnder",
    //--上下单双
    'HalfFull',
    //--竞彩半全场
    'WL' //--胜负过关
    ];

    var zc = [
    //--足彩类型
    'ToTo',
    //--足彩14场
    'NineToTo' //--足彩任选9
    ];

    var dlt = ['SuperLotto']; //--超级大乐透
    var ssq = ['SSQ']; //--双色球
    var p3 = ['P3']; //--排3
    var p5 = ['P5']; //--排5
    var p7 = ['P7']; //--排7
    var np7 = ['NP7']; //--新排7
    var d3 = ['3D']; //--3D
    var syy = {
      indexOf: function indexOf(lt) {
        //--判断是否是11选5
        lt = lt || '';
        if (lt.has('SYY')) {
          return 0;
        } else {
          return -1;
        }
      }
    };
    self.maps = {
      //--彩种映射关系
      jc: jc,
      jclq: jclq,
      dc: dc,
      zc: zc,
      dlt: dlt,
      ssq: ssq,
      p3: p3,
      p5: p5,
      p7: p7,
      np7: np7,
      d3: d3,
      syy: syy
    };
    self.maps1 = {
      //--大彩种映射关系
      jc: ['jc', 'jclq'],
      //--竞彩
      zc: ['zc'],
      //--足彩
      dc: ['dc'],
      //--单场
      szc: ['dlt', 'ssq', 'p3', 'p5', 'p7', 'np7'],
      //--数字彩
      syy: ['syy'] //--高频
    };
  }

  LotteryType.prototype.getType = function (lt) {
    var self = this,
      maps = self.maps,
      maps1 = self.maps1;
    for (var i in maps) {
      //--判定所属小类
      if (maps[i].indexOf(lt) != -1) {
        break;
      }
    }
    for (var j in maps1) {
      //--判定所属打雷
      if (maps1[j].indexOf(i) != -1) {
        break;
      }
    }
    return j; //--返回所属大类
  };

  var theLt = new LotteryType();
  var moneyHelp = {
    //--金额不足，个大彩种提示信息
    jc: {},
    //--竞彩
    zc: {},
    //--足彩
    dc: {},
    //--单场
    szc: {},
    //--数字彩
    syy: {} //--高频
  };
  //--竞彩
  moneyHelp.jc.title = '竞彩方案影响票均金额的因素';
  moneyHelp.jc.text = [];
  moneyHelp.jc.text.push('<p>1、<b>设置更高的倍数</b>可以提升票均金额；</p>');
  moneyHelp.jc.text.push('<p>2、<b>减少投注玩法数量</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.jc.text.push('<p>3、<b>减少过关方式</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.jc.text.push('<p>4、<b>取消奖金优化</b>可能会减少票数，提升票均金额。</p>');
  moneyHelp.jc.text = moneyHelp.jc.text.join('');
  //--足彩
  moneyHelp.zc.title = '足彩方案影响票均金额的因素';
  moneyHelp.zc.text = [];
  moneyHelp.zc.text.push('<p>1、<b>设置更高的倍数</b>可以提升票均金额；</p>');
  moneyHelp.zc.text.push('<p>2、<b>不使用转9（任选9选择场次超过9场）的方式</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.zc.text.push('<p>3、<b>使用复式投注的方式</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.zc.text = moneyHelp.zc.text.join('');
  //--单场
  moneyHelp.dc.title = '北单方案影响票均金额的因素';
  moneyHelp.dc.text = [];
  moneyHelp.dc.text.push('<p>1、<b>设置更高的倍数</b>可以提升票均金额；</p>');
  moneyHelp.dc.text.push('<p>2、<b>不使用设胆功能</b>会减少票数，提升票均金额；</p>');
  moneyHelp.dc.text.push('<p>3、<b>减少过关方式</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.dc.text.push('<p>4、<b>取消奖金优化</b>可能会减少票数，提升票均金额；</p>');
  moneyHelp.dc.text = moneyHelp.dc.text.join('');
  //--数字彩
  moneyHelp.szc.title = '数字彩方案影响票均金额的因素';
  moneyHelp.szc.text = [];
  moneyHelp.szc.text.push('<p>1、<b>设置更高的倍数</b>可以提升票均金额；</p>');
  moneyHelp.szc.text.push('<p>2、<b>不使用胆拖投注方式</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.szc.text.push('<p>3、<b>使用复式投注的方式</b>可以减少票数，提升票均金额；</p>');
  moneyHelp.szc.text = moneyHelp.szc.text.join('');
  //--高频
  moneyHelp.syy.title = '高频方案影响票均金额的因素';
  moneyHelp.syy.text = moneyHelp.szc.text;
  var baseSetting = itou.baseSetting,
    simplify = itou.simplify;
  var lottery_type = itou.localData.getData('__sys_lottery_type').key;
  var $lottery_type = lottery_type.v;
  var $t = lottery_type.t;
  if (!$lottery_type) {
    Gray.$page.loadPage('/');
    return;
  }
  var Entry = function Entry(model) {
    //--入口场景以及入口店铺信息
    var self = this,
      entry_info = itou.localJson.getJson('__entry_info') || {};
    self.parent = model;
    self.stationID = entry_info.station_id;
    self.scene = entry_info.scene;
  };
  var project = function project(obj) {
    //--方案信息
    var self = this;
    self.parent = obj;
    self.id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id; //--方案ID
    // self.p_uuid = Gray.$page.getUrlParam('p_uuid') || itou.localJson.getJson('/project/detail/').uuid || '0';//--方案uuID
    if (Gray.$page.getUrlParam('id')) {
      self.p_uuid = Gray.$page.getUrlParam('p_uuid') || '0';
    } else {
      self.p_uuid = itou.localJson.getJson('/project/detail/').uuid || '0';
    }
    self.maps = {
      'F1': '前一',
      'FP2': '前二直选',
      'FP3': '前三直选',
      'R2': '任选二',
      'R3': '任选三',
      'R4': '任选四',
      'R5': '任选五',
      'R6': '任选六',
      'R7': '任选七',
      'R8': '任选八',
      'FC2': '前二组选',
      'FC3': '前三组选',
      'LX2': '乐选二',
      'LX3': '乐选三',
      'LX4': '乐选四',
      'LX5': '乐选五',
      'X1': '选一',
      'X2': '选二',
      'X3': '选三',
      'X4': '选四',
      'X5': '选五',
      'X6': '选六',
      'X7': '选七',
      'X8': '选八',
      'X9': '选九',
      'X10': '选十',
      'SportteryWDL': '让球胜平负',
      'SportteryNWDL': '胜平负',
      'SportteryScore': '比分',
      'SportteryTotalGoals': '总进球',
      'SportteryHalfFull': '半全场',
      'SportterySoccerMix': '混合过关',
      'ToTo': '足彩14场',
      'PA': '追加投注',
      'P': '普通投注'
    };
    // self.maps[$lottery_type] = self.maps[$lottery_type] || $t;

    self.info = '';
    self.lottery_type = lottery_type.v || '';
    self.money = lottery_type.money || 0;
    self.lottery_no = null; //---方案期号
    self.endTime = '';
    self.helpInfo = {
      //--金额不符合的帮助信息
      title: '',
      text: ''
    };
    self.profitNum = 0; //--佣金比例
    self.isFollow = 0;
    self.manner = 0;
    self.bType = ''; //--彩种大类

    self.getInfo = function () {
      //--获取方案信息
      //--检查是否是精简模式，是否开启该功能
      if (!baseSetting.simplify || baseSetting.simplify && simplify.confirm.project) {
        return itou.get({
          url: 'project/detailsimple',
          data: {
            project_id: self.id,
            p_uuid: self.p_uuid || '0'
          }
        }).then(function (data) {
          var bType = theLt.getType(data.lottery_type) || 'syy'; //--获取彩种所属大类
          self.helpInfo = moneyHelp[bType]; //--帮助弹层信息
          self.bType = bType;
          self.manner = (data.manner || [])[0];
          var info = [];
          info.push($t);
          info.push('第' + data.lottery_no + '期</br>');
          if (!data.lottery_type.has('ToTo')) {
            var type_text = self.maps[data.play_type] || self.maps[data.lottery_type] || data.lottery_type_text;
            var type = data.lottery_type;
            var types = [['P3', '3D', 'P5', 'P7', 'NP7'], ['WDL', 'Score', 'HalfFull', 'TotalGoals', 'WL', 'OverUnder']];
            if (types[0].indexOf(type) != -1) {
              type_text = data.play_type_text;
            } else if (types[1].indexOf(type) != -1) {
              type_text = data.lottery_type_text;
            }
            info.push(type_text);
          }
          info.push('<p>方案金额 <span class=\'fontred\'>' + data.total_money + '</span> 元</p>');
          self.info = info.join('');
          self.lottery_type = data.lottery_type;
          self.lottery_no = data.lottery_no;
          self.profitNum = data.profit_pct; //--跟单盈利提成
          self.isFollow = data.is_follow == 1; //--是否是跟单
          // if (self.profitNum > 0 && self.isFollow) {
          //     self.parent.ticket_source = '0';
          // }

          //--概率设置要求传票
          self.ticket_upload_rate = data.ticket_upload_rate || 0;
          var rnd = Math.floor(Math.random() * 10000);
          var rate = Math.floor(self.ticket_upload_rate * 10000);
          if (rnd <= rate) {
            self.parent.ticket_source = '0';
          }

          // console.log("project.lottery_no = ", self.lottery_no);
          self.money = data.total_money;
          // self.endTime = (data.print_end_time + '').Dateformat("mm-dd HH:NN");
          self.endTime = (data.end_time + '').Dateformat('mm-dd HH:NN');
          self.station_uid = data.station_uid;
          var projectInfo = {};
          projectInfo.type = data.lottery_type;
          projectInfo.money = data.total_money;
          itou.localData.setData('__confirm_projectInfo_nearList', projectInfo);
          var defer = $.Deferred();
          defer.resolve();
          return defer.promise();
        });
      } else {
        var defer = $.Deferred();
        defer.resolve();
        return defer.promise();
      }
    };
  };
  var station = function station(obj) {
    //--彩店信息
    var self = this;
    var prev = window.prevPage;
    if (!(prev + '').has('/confirm/shop/') && !(prev + '').has('/confirm/merchantshop/')) {
      itou.localData.delData('__confirm_station');
    }
    self.parent = obj;
    self.name = '';
    self.money = 0;
    self.id = '';
    self.limit = ''; //--彩店接单金额限制
    self.submitType = {
      //--提交方式列表
      shopPublic: {
        key: 'shopPublic',
        title: '店主可见',
        intro: '您的方案将公开给店铺，方便店主查阅选单并提供服务',
        jiedanErr: 0,
        //--是否符合接单条件，0为符合，-5 投注站目前暂停营业，-6 该投注站不接受该彩种委托，-7 方案金额小于站点的最低接单金额，-9投注站目前被处罚中
        errAct: '',
        //--不符合接单条件时的按钮触发事件
        errInfo: '',
        //--店主可见——提示信息
        errData: {
          //--店主可见——数据信息；-7的时候出现，展示方案金额和票均金额数据
          project: {
            limit: 0,
            //--方案金额限制
            money: 0,
            //--当前方案金额
            num: 0,
            //--票数量
            isOk: false //--是否被限
          },

          ticket: {
            limit: 0,
            //--票均金额限制
            money: 0,
            //--票均金额
            isOk: false //--是否被限
          }
        },

        disabled: false //--禁止选中
      }
    };

    self.submitCurrType = 'shopPublic'; //--当前默认提交方式
    // self.submitCurrType = '';//--当前默认提交方式
    // self.jiedanErr = 0;//--是否符合接单条件，0为符合，-5 投注站目前暂停营业，-6 该投注站不接受该彩种委托，-7 方案金额小于站点的最低接单金额
    // self.errAct = '';//--不符合接单条件时的按钮触发事件
    // self.errInfo = '';//--店主可见——提示信息
    self.shopNum = 0; //--符合接单条件的店铺数
    self.confirmAct = 'save'; //--confirm弹窗确认按钮事件,save = "保存方案"，reSelect = 重新选单， changeShop = 更换彩电
    self.contact = {
      //--店铺联系方式
      mobile: '',
      weixin: '',
      alipay: '',
      qq: '',
      show: false //--是否展示弹窗
    };

    self.history = itou.localData.getData('__confirm_station') || {}; //--店铺选择页缓存数据
    self.usePaidan = self.history.usePaidan || false; //--是否使用派单池
    self.province = self.history.province;
    self.lat = 0;
    self.lng = 0;
    self.warn = '';
    self.moneyLoading = true;
    self.isOpenTime = true; //--是否正在营业时间内
    self.isKuatian = false; //--是否跨天营业
    self.sTime = ''; //--开始营业时间
    self.eTime = ''; //--结束营业时间
    self.ifShowSunmitModal = false; // 是否展示账本余额不足弹框

    self.checkOpenTime = function (data) {
      //--检查是否正在营业时间
      var s = data.open_start_time || '00:00',
        e = data.open_end_time || '00:00',
        c = new Date();
      s = c.Dateformat('yyyy-MM-DD ' + s + ':00');
      e = c.Dateformat('yyyy-MM-DD ' + e + ':00');
      s = s.toDate();
      e = e.toDate();
      if (s >= e) {
        //--跨天经营
        self.isKuatian = true;
        // e = e.DateAdd("d", 1);//--结束时间延迟到后一天
        self.isOpenTime = c - s >= 0 || e - c >= 0;
      } else {
        //--不跨天
        self.isOpenTime = c - s >= 0 && e - c >= 0;
      }
    };
    self.getYue = function () {
      //--获取余额
      self.moneyLoading = true;
      return itou.get({
        url: 'user/getMyRemain',
        data: {
          station_user_id: self.id
        }
      }).then(function (data) {
        self.moneyLoading = false;
        self.money = data.remain_score || 0 .toFixed(2);
      });
    };
    self.getShopInfo = function (id) {
      //--获取对应店铺信息
      return itou.get({
        url: 'shop',
        //--查询店铺信息
        // data: data
        data: {
          station_user_id: id
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        self.name = data.station_name;
        self.money = data.remain_score;
        self.id = data.station_user_id;
        self.limit = data.money_limit;
        self.contact.mobile = data.station_mobile;
        self.contact.weixin = data.station_weixin;
        self.contact.alipay = data.station_alipay;
        self.contact.qq = data.station_qq;
        self.sTime = data.open_start_time;
        self.eTime = data.open_end_time;
        self.checkOpenTime(data);
        self.getRecentshop(); //--获取最后一次提交的店铺，并对比是否与本次提交一样
      });
    };

    self.isvalid = function (data) {
      //--是否符合接单要求
      return itou.get({
        url: 'shop/isvalid',
        data: data,
        formatResult: false
        // rlt: {"msg":"方案金额小于站点的最低接单金额","data":{"money_limit":{"status":false,"limit":"10"},"ticket_money_limit":{"status":true,"limit":"0"},"project_money":6,"ticket_num":1,"ticket_money":6},"errcode":-7}
      }).then(function (result) {
        self.submitType.shopPublic.jiedanErr = result.errcode; //--是否符合接单要求
        if (result.errcode == '-7') {
          //--方案金额或票据金额受限的数据信息
          self.isvalidData = result.data || {};
        }
        if (result.errcode == '-8') {
          // 店内账本余额不足！
          self.ifShowSunmitModal = true;
        }
        var data = result.data;
        if (data && data.balance_depute) {
          obj.balanceDepute = data.balance_depute;
        }
      });
    };
    self.getMyRecommStation = function (data) {
      return itou.get({
        //--获取默认站点信息
        url: 'shop/getMyRecommStation',
        data: data
      }).then(function (data) {
        self.parent.showBody = true;
        if (data.station_user_id) {
          //--有默认站点信息
          self.name = data.station_name;
          self.money = data.remain_score;
          self.id = data.station_user_id;
          self.limit = data.money_limit;
          self.contact.mobile = data.station_mobile;
          self.contact.weixin = data.station_weixin;
          self.contact.alipay = data.station_alipay;
          self.contact.qq = data.station_qq;
        } else {
          //--流程终止
          self.name = '';
        }
      });
    };
    self.getRecentshop = function () {
      //--获取最近店铺信息并进行对比
      return itou.get({
        url: 'recommend/recentshop',
        data: {},
        autocache: true
      }).then(function (data) {
        var msg = '<br />您的方案将公开给店铺【' + self.name + '】，店主可查阅选单并为您提供店内服务。<br /><br />',
          title = '方案店主可见';
        if (!!data && !!self.name && !!data.station_user_id && data.station_user_id != self.id) {
          window.vm.showMsgBox(msg, title, '', '知道了');
        }
      });
    };
    self.getInfo = function () {
      var data = {
        lottery_type: self.parent.project.lottery_type,
        money: self.parent.project.money,
        station_user_id: self.parent.entry.stationID
      };
      if (!self.parent.entry.stationID) {
        //--没有入口店铺信息（扫码、分享等）
        return self.getMyRecommStation(data); //--获取设置的默认店铺信息
        // .then(function(){
        //     return self.parent.deputeLimit()
        // });
      } else {
        data.project_money = data.money;
        data.project_id = self.parent.project.id;
        //--检查是否符合接单要求，同时获取对应店铺信息
        return $.when(self.isvalid(data), self.getShopInfo(data.station_user_id))
        // .then(function(){
        //     return self.parent.deputeLimit()
        // })
        .then(function () {
          self.parent.showBody = true;
          var msg = '';
          var jiedanErr = self.submitType.shopPublic.jiedanErr;
          if (jiedanErr == '0' || jiedanErr == -1) {
            self.submitType.shopPublic.errAct = '';
            self.submitType.shopPublic.disabled = false;
            self.submitType.shopPublic.errInfo = msg;
            if (!self.isOpenTime) {
              self.submitType.shopPublic.errInfo = '<span class="mr10">当前非营业时间店铺服务响应可能不及时(' + self.sTime + '-' + (self.isKuatian ? '次日' : '') + self.eTime + '营业)</span>';
            }
            //self.getRecentshop();//--获取最后一次提交的店铺，并对比是否与本次提交一样
          } else {
            var errMsg = {},
              btnText = '';
            errMsg['-4'] = '<span class="mr10">店铺暂停营业，无法为您提供店内服务</span><a class="brn_redsm">联系店铺</a>';
            errMsg['-5'] = '<span class="mr10">店铺暂未营业</span><a class="brn_redsm">联系店铺</a>';
            errMsg['-6'] = '<span class="mr10">店铺不支持' + $t + '，请重新选单>></span>';
            errMsg['-7'] = '<span class="mr10">店铺设置店内方案金额大于等于' + self.limit + '元，请返回重选>></span>';
            errMsg['-9'] = '<span class="mr10">店铺暂未营业</span><a class="brn_redsm">联系店铺</a>';
            if ([-4, -5, -6, -7, -9].indexOf(jiedanErr * 1) != -1) {
              msg = errMsg[jiedanErr];
            } else {
              msg = '<span class="mr10">无法为您提供店内服务</span><a class="brn_redsm">联系店铺</a>';
            }
            if (jiedanErr == '-7') {
              //--方案金额受限或者票均金额受限
              var data = self.isvalidData;
              self.submitType.shopPublic.errData = {
                //--店主可见——数据信息；-7的时候出现，展示方案金额和票均金额数据
                project: {
                  limit: data.money_limit && data.money_limit.limit || 0,
                  //--方案金额限制
                  money: data.project_money || 0,
                  //--当前方案金额
                  num: data.ticket_num || 0,
                  //--票数量
                  isOk: data.money_limit && data.money_limit.status //--是否被限
                },

                ticket: {
                  limit: data.ticket_money_limit && data.ticket_money_limit.limit || 0,
                  //--票均金额限制
                  money: data.ticket_money || 0,
                  //--票均金额
                  isOk: data.ticket_money_limit && data.ticket_money_limit.status //--是否被限
                }
              };
            }

            msg.indexOf('联系店铺') != -1 ? self.submitType.shopPublic.errAct = 'contact' : '';
            msg.indexOf('返回重选') != -1 ? self.submitType.shopPublic.errAct = 'reSelect' : '';
            msg.indexOf('重新选单') != -1 ? self.submitType.shopPublic.errAct = 'reSelect' : '';
            self.submitType.shopPublic.disabled = true; //--设置禁选
            self.submitType.shopPublic.errInfo = msg;
            self.submitCurrType == 'shopPublic' ? self.submitCurrType = '' : ''; //--清空当前选项
            console.log(msg);
            // window.vm.showConfirmBox(msg.join(""), title, "__configm_stationdiff_close@noClose", "__configm_stationdiff_ok@noClose", btnText, "联系店主");
          }
        });
      }
    };
  };

  var qicheng = function qicheng(model) {
    var self = this;
    self.parent = model;
    self.yushouNum = 0; //--预售剩余时间
    self.lottery_no = null; //--当前期号

    self.getQicheng = function () {
      return itou.get({
        url: 'schedule/infocurrent',
        data: {
          lottery_type: model.project.lottery_type,
          station_user_id: itou.localJson.getJson('/user/shop/details/').id,
          station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
        }
      }).then(function (data) {
        self.yushouNum = data.device_remain_second;
        self.lottery_no = data.lottery_no;
      });
    };
  };
  var model = function model() {
    var self = this;
    self.ltCn = $t;
    self.balanceDepute = {
      //--账本提交限制
      limit: 0,
      //--0无限制，1限制
      s_hour: '',
      s_min: '',
      e_hour: '',
      e_min: ''
    };
    self.entry = new Entry(self);
    self.project = new project(self);
    self.station = new station(self);
    self.qicheng = new qicheng(self);
    self.useYue = false;
    self.showBody = true;
    self.currInfoShow = null;
    self.vm = null;
    self.isBustling = false; //--是否正在繁忙，是否正在进行提交操作
    self.isLimited = false; //--是否被限制提交；

    self.jingcaiLanqiuTypes = [
    //--竞彩篮球类型
    'SportteryWL',
    //--胜负
    'SportteryHWL',
    //--让胜负
    'SportteryBS',
    //--大小分
    'SportteryWS',
    //--胜分差
    'SportteryBasketMix' //--竞彩篮球混合过关
    ];

    self.wx = wx;

    //--要求拍照上传票照片,默认'';客户添加增加值为0；由switchTicketSource方法管理
    // self.ticket_source = itou.localData.getData('confirm_ticket_source').key || '';
    self.ticket_source = ''; //--暂时取消记忆功能，减少店主负担
    self.ticket_upload_rate = 0; //--自动设定成要求拍照上传票照片的几率，由接口提供

    self.doSubmit = function () {
      var bustling = vm.$refs.bustling;
      bustling && bustling.start({
        fun: function fun() {
          self.isBustling = false;
        }
      });
      if (self.project.profitNum > 0 && self.project.isFollow) {
        //--跟单、有佣金比例
        self.ticket_source = '0'; //--强制要求传票
      }

      var need_services = {};
      var url = 'shop/depute',
        data = {
          project_id: self.project.id,
          p_uuid: self.project.p_uuid || '0',
          station_user_id: self.station.id,
          cash_type: self.useYue ? 2 : 1,
          user_remark: '',
          need_services: need_services,
          ticket_source: self.ticket_source //--标识票样来源:要求拍照上传票照片
        };

      if (!self.station.id) {
        var msg = [];
        msg.push('<div style=\'text-align:left;margin-top:15px\'>');
        msg.push('很抱歉，没有添加任何店铺，您可以：<br />');
        msg.push('1、向附近彩店店主索要【口袋好店】店铺二维码，扫码进店。<br />');
        msg.push('2、让店主微信分享【口袋好店】店铺给您，点击链接进店。<br />');
        msg.push('</div>');
        self.vm.showMsgBox(msg.join(''));
        return;
      }
      //alert(JSON.stringify(data));
      // console.log(data);return;
      if (merchant && merchant.info && merchant.info.data && merchant.info.data.mid) {
        data.mid = merchant.info.data.mid;
      }
      return itou.get({
        url: url,
        data: data,
        specialErr: {
          '-8': function _(rlt) {
            self.station.ifShowSunmitModal = true;
            var data = rlt.data;
            if (data && data.balance_depute) {
              self.balanceDepute = data.balance_depute;
            }
          },
          '-1040': function _() {
            var title = '提交方案失败';
            var text = "<p style=\"text-align: left\">\n                        \u5E97\u94FA\u6570\u636E\u5B58\u50A8\u4F59\u989D\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u5728\u5E97\u5185\u5B58\u50A8\u60A8\u7684\u6570\u636E\u3002<br />\n                        \u5DF2\u4E3A\u60A8\u4FDD\u5B58\u5185\u5BB9\u5728\u4E34\u65F6\u6587\u4EF6\u5939\u5185\uFF0C\u60A8\u53EF\u4EE5\u5728\n                        <span class=\"fontblue\">\u3010\u9009\u53F7\u8BB0\u5F55\u3011-\u3010\u4FDD\u5B58\u3011</span>\n                        \u4E2D\u67E5\u770B\u3002</p>";
            vm.layer.confirm.warning({
              title: title,
              text: text,
              buttons: [{
                text: '关闭'
              }, {
                text: '联系店铺',
                fun: function fun() {
                  vm.showcontact({
                    vm: vm,
                    station_user_id: vm.station.id
                  });
                }
              }]
            });
          }
        }
      }).then(function (result) {
        self.isBustling = false;
        bustling && bustling.end();
        self.gotoProjectDetail();
      });
    };
    // console.log(self);
    self.gotoProjectDetail = function () {
      itou.localJson.delJson('__cancelDepute_stationInfo', '' + self.project.id); //--清空当前订单缓存
      itou.localData.setData('__confirm_station', {});
      itou.localData.delData('__confirm_history', 'remark');
      itou.sessionData.delData('_' + self.project.lottery_type + '_lan_cache');
      itou.sessionData.delData('__danchang_cache_' + self.project.lottery_type);
      itou.localJson.setJson('/project/detail/', {
        id: self.project.id,
        uuid: self.project.p_uuid
      });
      if (self.station.usePaidan) {
        var backurl = '/';
      } else {
        var backurl = '/user/shop/details/?id=' + self.station.id;
      }
      backurl = encodeURIComponent(backurl);
      var url = '/project/detail/?__nolimit=1&back=' + backurl;
      //--分区键定位店铺ID
      if (self.station.id) {
        url += '&dk_station_id=' + self.station.id;
      }
      Gray.$page.loadPage(url);
    };
    self.deputeLimit = function () {
      //--检查是否被限制
      return itou.get({
        url: 'shop/deputeLimit',
        data: {
          station_user_id: self.station.id
        }
      }).then(function (data) {
        self.isLimited = data.isLimited == 1;
      }).then(function () {
        self.showBody = true;
        var defer = $.Deferred();
        if (!self.isLimited) {
          //--如果被限制，则终止加载弹出提示
          defer.resolve();
        } else {
          vm.showLimited();
        }
        return defer.promise();
      });
    };
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'risk-statement': _components_public_risk_statement_index_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new model(),
      created: function created() {
        var _this = this;
        var self = this,
          $data = self.$data;
        $data.vm = self;
        var fun = function fun() {
          return $data.project.getInfo().then(function () {
            return $data.station.getInfo().then(function () {
              return $data.station.getYue();
            }).then(function () {
              if (self.station.money > self.project.money) {
                self.useYue = true;
              }
              itou.localData.setData('__confirm_Money', {
                key: $data.station.money
              });
            });
          });
        };
        fun().then(function () {
          if (_this.project.isFollow) {
            _this.$nextTick(function () {
              setTimeout(function () {
                _this.showFollowLayer();
              }, 300);
            });
          }
        });
      },
      computed: {
        limitTime: function limitTime() {
          var _this$balanceDepute = this.balanceDepute,
            balanceDepute = _this$balanceDepute === void 0 ? {} : _this$balanceDepute;
          if (balanceDepute.limit) {
            var r = [];
            var s_hour = balanceDepute.s_hour,
              s_min = balanceDepute.s_min,
              e_hour = balanceDepute.e_hour,
              e_min = balanceDepute.e_min;
            if (s_hour == 0 && s_min == 0 && e_hour == 23 && e_min == 59 || s_hour == 23 && s_min == 59 && e_hour == 0 && e_min == 0) {
              r.push('全天');
            } else {
              var kuaTian = ''; //--跨天
              if (s_hour > e_hour || s_hour == e_hour && s_min > e_min) {
                kuaTian = '次日';
              }
              r.push(s_hour + '点');
              if (s_min > 0) {
                r.push(s_min + '分');
              }
              r.push('至' + kuaTian);
              r.push(e_hour + '点');
              if (e_min > 0) {
                r.push(e_min + '分');
              }
            }
            return r.join('');
          } else {
            return '';
          }
        }
      },
      methods: {
        /**
         * @function showFollowLayer
         * @description 展示跟单的提示弹层
         */
        showFollowLayer: function showFollowLayer() {
          var _this2 = this;
          this.layer.confirm.show({
            title: '确认生成方案',
            text: '您将授权【追光者】将推荐内容共享给店铺，<b>接下来您可以将内容提交给店铺，到店付款后可要求店铺参照内容出票。</b>',
            buttons: [{
              text: '返回',
              fun: function fun() {
                _this2.back();
              }
            }, {
              text: '确认'
            }]
          });
        },
        //--展示被限制的提示信息
        showLimited: function showLimited() {
          var self = this;
          self.showMsgBox('<p>选号内容无法提交！</p>', '', '_show_confiem_limited_info', '知道了');
        },
        selectSubmitType: function selectSubmitType(key) {
          //--选择当前体教类型
          var self = this,
            $data = self.$data,
            station = $data.station,
            submitType = station.submitType;
          if (!submitType[key].disabled) {
            station.submitCurrType = key;
          }
        },
        selectSubmitErrAct: function selectSubmitErrAct(key) {
          var self = this,
            $data = self.$data,
            station = $data.station,
            submitType = station.submitType;
          if (key == 'shopPublic') {
            var shopPublic = submitType[key],
              act = shopPublic.errAct;
            if (act == 'reSelect') {
              if (shopPublic.jiedanErr == -6) {
                Gray.$page.loadPage('/user/shop/details/?id=' + $data.entry.stationID);
              } else if (shopPublic.jiedanErr == -7) {
                self.back();
              } else {
                self.back();
              }
            } else if (act == 'contact') {
              self.showcontact({
                vm: self,
                station_user_id: self.station.id
              });
            }
          }
        },
        showHelpInfo: function showHelpInfo() {
          var self = this,
            helpInfo = self.project.helpInfo;
          self.showMsgBox('<div style="text-align: left">' + helpInfo.text + '</div>', helpInfo.title, '', '知道了');
        },
        Submit: function Submit() {
          var self = this,
            $data = self.$data,
            station = $data.station,
            submitCurrType = station.submitCurrType;
          if (submitCurrType == 'shopPublic') {
            self.shopPublicSubmit();
          }
        },
        shopPublicSubmit: function shopPublicSubmit() {
          var self = this,
            $data = self.$data,
            qicheng = $data.qicheng,
            project = $data.project,
            bustling = self.$refs.bustling;
          bustling && bustling.start({
            fun: function fun() {
              self.isBustling = false;
            }
          });
          if (self.project.bType == 'jc') {
            return $data.doSubmit();
          }
          qicheng.getQicheng().then(function () {
            bustling && bustling.start({
              fun: function fun() {
                self.isBustling = false;
              }
            });
            var defer = $.Deferred();
            // console.log("qicheng.lottery_no = ", qicheng.lottery_no);
            // console.log("project.lottery_no = ", project.lottery_no);
            // console.log("qicheng.yushouNum = ", qicheng.yushouNum);
            if (qicheng.yushouNum > 0 && qicheng.lottery_no == project.lottery_no) {
              var yushouNum = qicheng.yushouNum;
              if (yushouNum < 60) {
                yushouNum += '秒';
              } else {
                var mod = yushouNum % 60,
                  NN = Math.floor(yushouNum / 60);
                yushouNum = NN + '分' + mod + '秒';
              }
              var msg = '距第' + project.lottery_no + '期官方开售还有' + yushouNum + '，彩店将在开售后为您出票，是否继续提交？';
              self.showConfirmBox(msg, '', '', 'submit_ok', '同意', '放弃');
              defer.reject();
            } else {
              defer.resolve();
            }
            return defer.promise();
          }).then(function () {
            return $data.doSubmit();
          });
        },
        beforeSubmit: function beforeSubmit() {
          var self = this,
            $data = self.$data,
            jingcaiLanqiuTypes = $data.jingcaiLanqiuTypes,
            lottery_type = $data.project.lottery_type,
            bustling = self.$refs.bustling,
            station = $data.station;

          //--风险说明检查
          var riskStatement = this.$refs.riskStatement;
          //--如果未勾选风险说明，则中止
          if (riskStatement && !riskStatement.checkAgree()) {
            return;
          }
          if (!station.submitCurrType) {
            //--未选择提交类型
            return;
          }
          if (self.isLimited) {
            return;
          }
          if (self.isBustling) {
            return;
          }
          self.isBustling = true;
          if (jingcaiLanqiuTypes.contains(lottery_type)) {
            var msg = '<br />篮彩<span class=\'fontred\'>让分以及大小球值在彩店出票时可能发生变化，并可能导致中奖状态的改变，</span><br />您是否同意仍旧出票！<br /><br />';
            self.showConfirmBox(msg, '', '', 'beforeSubmit_ok', '同意', '放弃');
            self.isBustling = false;
          } else if (self.project.bType == 'dc') {
            //--单场
            self.isBustling = false;
            var title = '请注意';
            var text = '<p style="text-align: left">由于北单为奖池赔率，当前SP值仅供参考，最终奖金以开奖SP值计算为准。</p>';
            self.layer.confirm.show({
              title: title,
              text: text,
              buttons: [{
                text: '取消'
              }, {
                text: '确认',
                fun: function fun() {
                  self.Submit();
                }
              }]
            });
          } else {
            self.Submit();
          }
        },
        gotoDetail: function gotoDetail() {
          //--跳转到简化的方案详情页
          var self = this,
            $data = self.$data,
            project = $data.project,
            lottery_type = project.lottery_type;
          itou.outil.gotoDetail(lottery_type);
        },
        switchTicketSource: function switchTicketSource() {
          //--切换标识票样来源状态
          var self = this;
          if (self.project.profitNum > 0) {
            //--有佣金比例的时候禁止取消传票
            self.ticket_source = '0';
            return;
          }
          self.ticket_source = self.ticket_source == '0' ? '' : '0';
          itou.localData.setData('confirm_ticket_source', {
            key: self.ticket_source
          });
        }
      }
    });
    vm.$on('msgbox_ok', function (msg) {
      console.log('msgbox_ok', 'msg = ', msg);
      if (msg == 'submit_ok') {
        //--弹窗点击确定是执行
        vm.doSubmit();
      }
      if (msg == 'beforeSubmit_ok') {
        //--弹窗点击确定是执行
        vm.Submit();
      }
    });
    vm.$on('msgbox_close', function (msg) {
      console.log('msgbox_close', 'msg = ', msg);
      //--展示被限制的提示信息
      if (msg == '_show_confiem_limited_info') {
        // vm.gotoProjectDetail();
        vm.back();
      }
    });
  };
});

/***/ })

/******/ });