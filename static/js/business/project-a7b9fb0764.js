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
/******/ 		139: 0
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
/******/ 	deferredModules.push([307,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 微信C端		方案详情公用方法
 * by	zhaoyf		2017-05-25 10:09:54
 */
(function () {
  var jingcaiComputer = __webpack_require__(40);
  var number_computer = __webpack_require__(46);
  // console.log(jcComputer);

  var baseSetting = itou.baseSetting,
    simplify = itou.simplify;
  var jingcaiTypes = [
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

  var jingcaiLanqiuTypes = [
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

  var danchang = [
  //--北京单场类型
  'WDL',
  //--胜平负
  'Score',
  //--比分
  'TotalGoals',
  //--总进球
  'HalfFull',
  //--竞彩半全场
  'OverUnder',
  //--上下单双
  'WL' //--胜负过关
  ];

  var opts = {
    //--北京单场配置信息
    WDL: {
      //--胜平负
      single: {
        '胜': '3',
        '平': '1',
        '负': '0'
      } //--单一投注对应编码
    },

    WL: {
      //--胜平负
      single: {
        '胜': '3',
        '负': '0'
      } //--单一投注对应编码
    },

    Score: {
      //--比分玩法对应编码
      single: {
        //--单一投注对应编码
        '1:0': '10',
        '2:0': '20',
        '2:1': '21',
        '3:0': '30',
        '3:1': '31',
        '3:2': '32',
        '4:0': '40',
        '4:1': '41',
        '4:2': '42',
        '胜其他': '43',
        '0:0': '00',
        '1:1': '11',
        '2:2': '22',
        '3:3': '33',
        '平其他': '44',
        '0:1': '01',
        '0:2': '02',
        '1:2': '12',
        '0:3': '03',
        '1:3': '13',
        '2:3': '23',
        '0:4': '04',
        '1:4': '14',
        '2:4': '24',
        '负其他': '34'
      }
    },
    TotalGoals: {
      //--总进球玩法对应编码
      single: {
        //--单一投注对应编码
        '0球': '0',
        '1球': '1',
        '2球': '2',
        '3球': '3',
        '4球': '4',
        '5球': '5',
        '6球': '6',
        '7+': '7'
      }
    },
    OverUnder: {
      single: {
        //--北京单场上下盘单双
        '上单': '3',
        '上双': '2',
        '下单': '1',
        '下双': '0'
      }
    },
    HalfFull: {
      //--半全场玩法对应编码
      single: {
        //--单一投注对应编码
        '胜/胜': '33',
        '胜/平': '31',
        '胜/负': '30',
        '平/胜': '13',
        '平/平': '11',
        '平/负': '10',
        '负/胜': '03',
        '负/平': '01',
        '负/负': '00'
      }
    }
  };
  opts.WDL.mixed = opts.WDL.single;
  opts.Score.mixed = opts.Score.single;
  opts.TotalGoals.mixed = opts.TotalGoals.single;
  opts.OverUnder.mixed = opts.OverUnder.single;
  opts.HalfFull.mixed = opts.HalfFull.single;
  var href = Gray.$page.href || window.location.href; //console.log(href);return;
  if (href && href.has('/project/detail/')) {
    itou.localJson.setJson('__confirm_prev_page', {
      key: '/project/detail/'
    });
  }

  //--清空号码栏
  var lan = itou.localData.getData('__bj11x5_nums');
  itou.localData.delData('__bj11x5_nums');
  if (lan.currGame) {
    itou.localData.setData('__bj11x5_nums', {
      currGame: lan.currGame
    });
  }
  var shopInfo = function shopInfo(data) {
    //--店铺信息
    var self = this;
    if (data.project_type == 'depute' && data.station_info.station_user_id) {
      //--是否已提交店铺
      self.hasShop = true; //--是否拥有店铺信息
      var station_info = data.station_info;
      self.name = station_info.station_name; //--店名
      self.id = station_info.station_user_id;
      self.isCert = !!(station_info.has_cert_info == '1'); //--是否认证
      self.isCertText = self.isCert ? '已认证' : '未认证'; //--认证状态文本
      self.isCertClass = self.isCert ? 'certokbg' : 'certnobg'; //--认证状态样式
      self.mobile = station_info.station_mobile; //--手机
      self.weixin = station_info.station_weixin; //--微信
      self.alipay = station_info.station_alipay; //--支付宝
      self.qq = station_info.station_qq; //--qq
      self.province = station_info.province; //--所在省
      self.city = station_info.city; //--所在省
      // self.isDefault = station_info.is_default;//--是否默认店铺
      self.deal_users = station_info.deal_users || 0; //--近30天出票人数
      self.pingfen = station_info.mark_avg || 0; //--店铺评分
      self.yingye = !!(station_info.on_service == '1'); //--是否正常营业

      self.province = station_info.province;
      var province = {};
      province[self.id] = station_info.province;
      itou.localData.setData('__shop_province', province); //--缓存店铺所在省份
      self.pay_types = data.pay_types; //--店铺支持的支付方式

      var f = self.pingfen;
      var p = itou.outil.pingjia(f); //--获得评价
      self.pingjia = p;
    } else {
      self.hasShop = false;
    }
  };
  var statusInfo = function statusInfo(data) {
    //--方案当前状态
    var self = this;
    if (data.status_info) {
      self.text = data.status_info.name;
      self.intro = data.status_info.desc;
    }
    self.showPay = !!(data.show_pay == '1'); //--是否显示付款界面
    self.chedan = {
      //--撤单状况
      can: data.can_cancel || false,
      //--是否可撤单
      done: data.is_cancel || false //--是否撤单、或者被拒接
    };
    /**
    * data.depute_info.order_status，状态值
    * 0，未接单
    * 1，成功出票
    * 2，出票失败
    * 3，过点撤销
    * 4，接单成功
    */
    self.orderStatus = data.depute_info.order_status;
    self.partner = data.depute_info.partner;
    self.className = '';
    // console.log(Array.isArray(data.depute_info));
    if (data.is_cancel) {
      //--是否撤单、或者被拒接
      self.className = 'projecstatmark_invalid';
    } else if (Array.isArray(data.depute_info)) {
      //--保存方案
      self.className = 'projecstatmark_save';
    } else if (self.orderStatus == '2') {
      //--出票失败
      self.className = 'projecstatmark_failed';
    } else if (self.orderStatus == '3') {
      //--过点撤销
      self.className = 'projecstatmark_overdue';
    }
  };
  var scheduleInfo = function scheduleInfo(data) {
    //--期程信息
    var self = this;
    self.lottery = data.lottery_type_text; //--彩种
    self.game = data.play_type_text; //--玩法
    self.no = data.lottery_no_array && data.lottery_no_array[0] ? data.lottery_no_array[0] : data.lottery_no; //--期号
    self.multiple = data.multiple || 1; //--倍数
    self.money = data.total_money; //--总金额
    self.date = data.pre_prize_time || ''; //--开奖时间
    self.dateTime = data.pre_prize_time || ''; //--开奖时间
    self.result = data.plan_no == 1 && data.schedule_info && data.schedule_info.lottery_result ? data.schedule_info.lottery_result.split(',') : [];
    self.end = data.schedule_info.end > 0; //--是否已截止
    self.print_end_time = (data.print_end_time || '').substr(5, 11); //截止时间
    self.isTuijian = data.is_recommend == 1; //--是否已推荐
    self.isfollow = !!data.is_follow; //--是否由跟单生成
    if (baseSetting.simplify && !simplify.projectdetail.isfollow) {
      self.showfollow = false;
    } else {
      self.showfollow = self.isfollow;
    }
    if (self.isfollow && data.follow_info && data.follow_info.f_project_id) {
      self.fid = data.follow_info.f_project_id; //--跟单发起的方案ID
    }

    if (self.isfollow && data.follow_info && data.follow_info.f_p_uuid) {
      self.fUuid = data.follow_info.f_p_uuid; //--跟单发起的方案ID
    }

    self.resultShow = self.result; //--self.result用于前二前三前一计算，self.resultShow用于展示开奖号码
    if (data.play_type && !data.play_type.has('R') && !data.play_type.has('LX')) {
      //--非任选玩法，处理开奖结果
      var n = data.play_type.replace(/\D/g, ''); //console.log(n);
      if (n && !isNaN(n)) {
        self.result.splice(n);
      }
    }
    if (self.date && new Date(self.date) != 'Invalid Date') {
      //--如果日期格式正确，则对日期进行处理
      var date = new Date(self.date);
      self.date = date.Dateformat('MM-DD HH:NN');
    }
    // 新增彩种类型 DGG GGL 增加字段
    self.lottery_type = data.lottery_type; //--彩种类型
    // 判断彩种类型为DGG、GGL
    if (data.lottery_type == 'DGG' || data.lottery_type == 'GGL') {
      self.isShowJikai = true;
    } else {
      self.isShowJikai = false;
    }
    // 新增字段彩种类型 DGG、 GGL
    self.jkBookinfo = data.jk_book_info; // --即开对应信息
    self.isShowKl8 = data.lottery_type == 'KL8';
    if ((data.lottery_type == 'DGG' || data.lottery_type == 'GGL') && self.jkBookinfo && self.jkBookinfo.amount > data.total_money) {
      self.jkBzMoney = Number(self.jkBookinfo.amount) - Number(data.total_money);
      self.isShowJkamount = true;
    } else {
      self.jkBzMoney = 0;
      self.isShowJkamount = false;
    }
  };
  var zhuiInfo = function zhuiInfo(data) {
    //--快彩11选5多期购买
    var self = this;
    self.zhui = data.plan_no || 1; //--多期购买期数
    self.zhuiList = data.lottery_no_array || []; //--多期购买期号数组
    self.zhuiResult = {}; //--多期购买开奖结果
    self.zhuiResultShow = !itou.outil.is(data.lottery_result_list, 'Array') ? data.lottery_result_list : {}; //--多期购买开奖结果
    self.zhuiMoney = {}; //--多期购买中奖奖金
    if (data.play_type && !data.play_type.has('R') && !data.play_type.has('LX')) {
      //--非任选玩法，处理开奖结果
      var max = data.play_type.replace(/\D/g, '');
      for (var i in self.zhuiResultShow) {
        self.zhuiResult[i] = self.zhuiResultShow[i].split(',').splice(0, max).join(',');
        if (i == data.lottery_no && self.zhui > 1) {
          // self.schedule.result = self.zhuiResult[i].split(",");
        }
      }
    } else {
      self.zhuiResult = self.zhuiResultShow;
    }
  };
  var jingcaiInfo = function jingcaiInfo(data) {
    //--竞彩数据信息
    var self = this;
    console.log(self);
    self.isDanchang = danchang.indexOf(data.lottery_type) != -1;
    self.peifulv = 1;
    self.manner = (data.manner || [])[0];
    if (self.isDanchang) {
      self.peifulv = 0.65;
      var localData = {
        t: '北京单场',
        v: self.lottery_type,
        service: '',
        num: 0,
        map: 'danchang'
      };
    } else {
      var localData = {
        t: '竞彩足球',
        v: self.lottery_type,
        service: '',
        num: 0,
        map: 'jingcai'
      };
    }
    itou.localData.setData('__sys_lottery_type', {
      key: localData
    });
    var pass_type = data.pass_type;
    // if(pass_type){
    // 	pass_type = pass_type.split(",").sort().join(",");
    // }
    pass_type = ',' + pass_type;
    self.guoguan = pass_type == '1_1' ? '单关' : pass_type.replace(',1_1', ',单关').replace(',', '').replace(/_/g, '串');
    self.hasYouhua = data.manner.contains(3) || data.manner.contains(7);
    self.youhuaNum = data.wager_store_optimize.length;

    //--单关配wagers数据补全；并标注隐藏的赛事no
    if (self.manner == 7 && data.wagers[0]) {
      var wgs1 = data.wagers[0]; //--单关配数据
      var wgo = data.wager_store_optimize; //--优化数据
      var wg1 = wgs1.wager;
      wg1 = wg1.replace(/ /g, '').replace(':', ':(').replace(/,/g, '|');
      wg1 += ')';
      wg1 = new RegExp(wg1);
      var no,
        code = [];
      //--获取匹配的数据
      wgo.forEach(function (wg) {
        var $wg = wg.wager;
        // console.log(wg, $wg)
        $wg = $wg.replace(wg1, '').replace(';', '').split(':');
        no = $wg[0];
        if (code.indexOf($wg[1]) == -1) {
          code.push($wg[1]);
        }
      });
      var wg = "".concat(no, ":").concat(code.join(','));
      wgs1.wager += ';' + wg;
      self.hideNo = no;
    }
    if (data.wagers && data.wagers.length > 0) {
      self.wagers = $.lottery.jingcai.football.outil.formatDetailData({
        lottery_type: data.lottery_type,
        match_list: data.match_list,
        wagers: data.wagers,
        type: data.lottery_type == 'SportterySoccerMix' ? 'mixed' : 'single'
      });
    }
    self.optimizeList = []; //--獎金優化列表
    self.pingceJiangjin = null;
    if (self.hasYouhua) {
      self.formatForOptimize(data.match_list, data.wager_store_optimize);
    }
    self.changshu = data.match_seq.length;
    self.isJingcai = true; //--是否是竞彩，竞彩投注无“复制选号”按钮
  };

  var jingcaiLanqiuInfo = function jingcaiLanqiuInfo(data) {
    var self = this;
    var localData = {
      t: '竞彩篮球',
      v: self.lottery_type,
      service: '',
      num: 0,
      map: 'jingcailanqiu'
    };
    itou.localData.setData('__sys_lottery_type', {
      key: localData
    });
    var pass_type = data.pass_type;
    // if(pass_type){
    // 	pass_type = pass_type.split(",").sort().join(",");
    // }
    pass_type = ',' + pass_type;
    self.guoguan = pass_type == '1_1' ? '单关' : pass_type.replace(',1_1', ',单关').replace(',', '').replace(/_/g, '串');
    self.hasYouhua = data.manner.contains(3);
    self.youhuaNum = data.wager_store_optimize.length;
    if (data.wagers && data.wagers.length > 0) {
      self.wagers = $.lottery.jingcai.basketball.formatDetailData({
        match_list: data.match_list,
        wagers: data.wagers,
        type: data.lottery_type == 'SportteryBasketMix' ? 'mixed' : 'single'
      });
    }
    self.optimizeList = []; //--獎金優化列表
    self.pingceJiangjin = null;
    if (self.hasYouhua) {
      self.formatForOptimize_jingcailanqiu(data.match_list, data.wager_store_optimize);
    }
    self.changshu = data.match_seq.length;
    self.isJingcai = true; //--是否是竞彩，竞彩投注无“复制选号”按钮
  };

  var Zucai = function Zucai(data) {
    //--足彩数据信息
    var self = this;
    var selected = function () {
      //--选择数据处理
      var opts = {},
        dan = [];
      try {
        var wager = data.wagers[0].wager,
          abs = data.wagers[0].abs;
        dan = abs.split(',');
        wager = wager.split(';');
        wager.forEach(function (element) {
          var v = element.split(':');
          opts[v[0]] = v[1].split(',');
        }, this);
      } catch (error) {
        console.error(error.message);
      }
      return {
        opts: opts,
        dan: dan
      };
    }();
    var Lottery = function Lottery() {
      //--彩种信息，用来在提交确认页获取对应采种
      itou.dataModel.config({
        key: 'toto_Lottery',
        opts: {
          t: {
            t: '采种名称',
            k: '',
            d: function d() {
              var r = null;
              switch (self.lottery_type) {
                case 'ToTo':
                  r = '足彩14场';
                  break;
                case 'NineToTo':
                  r = '足彩任选9';
                  break;
                default:
                  r = '足彩14场';
                  break;
              }
              return r;
            }
          },
          v: {
            t: '采种标识',
            k: '',
            d: function d() {
              return self.lottery_type;
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

      var lottery = itou.dataModel.dataFactory.create('toto_Lottery');
      lottery = new lottery();
      lotteryJson = lottery.getJson();
      itou.localData.setData('__sys_lottery_type', {
        key: lotteryJson
      });
      return lottery;
    };
    var lottery = Lottery();
    var Item = function Item(Model) {
      //--创建赛事行数据原型
      itou.dataModel.config({
        key: 'toto_Item',
        opts: {
          no: {
            t: '编号',
            k: 'serial_no',
            d: ''
          },
          saishi: {
            t: '赛事',
            k: 'league_name',
            d: ''
          },
          bgcolor: {
            t: '赛事背景色',
            k: 'league_color[0]',
            d: ''
          },
          fontcolor: {
            t: '赛事字体颜色',
            k: 'league_color[1]',
            d: '#000'
          },
          date: {
            t: '比赛时间',
            k: 'match_time',
            d: ''
          },
          id: {
            t: '标识',
            k: 'match_id2',
            d: ''
          },
          itou_id: {
            t: '标识',
            k: 'match_id',
            d: ''
          },
          bet_id: {
            t: '标识',
            k: 'bet_id',
            d: ''
          },
          hostName: {
            t: '主队名称',
            k: 'host_name_s',
            d: ''
          },
          guestName: {
            t: '客队名称',
            k: 'guest_name_s',
            d: ''
          },
          peilv3: {
            t: '胜赔率',
            k: 'list[\'' + lottery.v + '\'].odds[3]',
            d: '--'
          },
          peilv1: {
            t: '平赔率',
            k: 'list[\'' + lottery.v + '\'].odds[1]',
            d: '--'
          },
          peilv0: {
            t: '负赔率',
            k: 'list[\'' + lottery.v + '\'].odds[0]',
            d: '--'
          },
          hited: {
            t: '中奖项',
            k: '',
            d: function d(itemData) {
              return [itemData.list[lottery.v].lottery_result + ''];
            }
          },
          selected: {
            t: '选择项',
            k: '',
            d: function d(itemData, me) {
              return selected.opts[me.no];
            }
          },
          reversion: {
            t: '主客反',
            k: '',
            d: function d(itemData, me) {
              return itemData.reversion == '1';
            }
          },
          hits: {
            t: '选项是否中奖',
            k: '',
            d: function d(itemData, me) {
              var selected = me.selected,
                hited = me.hited,
                r = {
                  '0': null,
                  '1': null,
                  '3': null
                };
              for (var i in r) {
                i = i + '';
                if ((hited.indexOf(i) > -1 || isNaN(hited[0]) || !hited[0]) && selected.indexOf(i) > -1) {
                  r[i] = 'red';
                } else if (!isNaN(hited[0]) && hited[0] != '' && selected.indexOf(i) > -1 && hited.indexOf(i) == -1) {
                  r[i] = 'gray';
                } else if (!isNaN(hited[0]) && hited[0] != '' && selected.indexOf(i) == -1 && hited.indexOf(i) > -1) {
                  r[i] = 'fontred';
                } else {
                  r[i] = null;
                }
              }
              return r;
            }
          },
          dan: {
            t: '胆',
            k: '',
            d: function d(itemData, me) {
              return selected.dan.indexOf(me.no) > -1;
            }
          },
          bifen: {
            t: '比分',
            k: '',
            d: function d(itemData, me) {
              var g = itemData.guest_goals,
                //--客队得分
                h = itemData.host_goals,
                //--主队得分
                r = null;
              if (me.hited == 'Delay') {
                r = '延';
              } else if (me.hited == '') {
                r = '无';
              } else {
                r = h + '-' + g;
              }
              return r;
            }
          }
        }
      });
      var item = itou.dataModel.dataFactory.create('toto_Item');
      return item;
    };
    var itemModel = Item();
    var Detail = function Detail() {
      itou.dataModel.config({
        key: 'toto_Detail',
        opts: {
          wanfa: {
            t: '玩法',
            k: '',
            d: function d() {
              return lottery.t;
            }
          },
          wagers: {
            t: '选项列表',
            k: '',
            d: function d(data) {
              var Arr = [],
                list = data.match_list;
              for (var i in list) {
                var itemData = list[i];
                var item = new itemModel(itemData);
                if (selected.opts[item.no]) {
                  Arr.push(item);
                  try {
                    item.date = item.date.Dateformat('mm-dd HH:NN');
                  } catch (error) {
                    console.error(error.message);
                  }
                }
              }
              return Arr;
            }
          },
          zhuanfa: {
            t: '任9转法',
            k: '',
            d: function d(data, me) {
              if (lottery.v == 'NineToTo' && me.wagers.length > 9) {
                return me.wagers.length + '转9';
              } else {
                return '';
              }
            }
          }
        }
      });
      var detail = itou.dataModel.dataFactory.create('toto_Detail');
      // detail = new detail();
      return detail;
    };
    var detail = Detail();
    detail.call(self, data);
    console.debug(self);
  };
  var dltInfo = function dltInfo(data) {
    var self = this;
    var Item = function Item(Detail) {
      //--创建赛事行数据原型
      itou.dataModel.config({
        key: 'dlt_Item',
        opts: {
          balls: {
            t: '选号情况',
            k: '',
            d: function d(wager, me) {
              var r = {
                tuo: {
                  blue: [],
                  red: []
                },
                dan: {
                  blue: [],
                  red: []
                }
              };
              var w = wager.split('|'),
                red = (w[0] || '').split('$'),
                blue = (w[1] || '').split('$');
              if (red[1]) {
                r.tuo.red = red[1].split(',');
                r.dan.red = red[0].split(',');
              } else {
                r.tuo.red = red[0].split(',');
              }
              if (blue[1]) {
                r.tuo.blue = blue[1].split(',');
                r.dan.blue = blue[0].split(',');
              } else if (blue[0]) {
                r.tuo.blue = blue[0].split(',');
              }
              return r;
            }
          },
          selected: {
            t: '选号是否中奖',
            k: '',
            d: function d(wager, me) {
              var r = {
                  blue: {},
                  red: {}
                },
                result = Detail.result,
                brLen = result.red.length,
                bbLen = result.blue.length,
                balls = me.balls,
                red = balls.dan.red.concat(balls.tuo.red),
                blue = balls.dan.blue.concat(balls.tuo.blue);
              red.forEach(function (element) {
                if (brLen == 0) {
                  r.red[element] = 's'; //--选中
                } else if (result.red.indexOf(element) > -1) {
                  r.red[element] = 'h'; //--中奖
                }
              }, this);
              blue.forEach(function (element) {
                if (bbLen == 0) {
                  r.blue[element] = 's'; //--选中
                } else if (result.blue.indexOf(element) > -1) {
                  r.blue[element] = 'h'; //--中奖
                }
              }, this);
              return r;
            }
          }
        }
      });
      var item = itou.dataModel.dataFactory.create('dlt_Item');
      return item;
    };
    var Detail = function Detail() {
      itou.dataModel.config({
        key: 'dlt_Detail',
        opts: {
          no: {
            t: '旗号',
            k: 'lottery_no',
            d: ''
          },
          isPA: {
            t: '是否是追加投注',
            k: '',
            d: function d(data, me) {
              return data.wager_type == 'PA' ? '追加投注' : '';
            }
          },
          result: {
            t: '旗号',
            k: '',
            d: function d(data, me) {
              var r = {
                red: [],
                blue: []
              };
              try {
                var rlt = data.lottery_result_list[me.no];
                if (rlt) {
                  rlt = rlt.split('|');
                  r.red = rlt[0].split(',');
                  if (rlt[1]) {
                    r.blue = rlt[1].split(',');
                  }
                }
              } catch (error) {
                console.error(error.message);
              }
              return r;
            }
          },
          itemModel: {
            t: '行数据原型',
            k: '',
            d: function d(data, me) {
              var itemModel = Item(me);
              return itemModel;
            }
          },
          wagers: {
            t: '选项列表',
            k: '',
            d: function d(data, me) {
              var Arr = [],
                wagers = data.wagers,
                itemModel = me.itemModel;
              wagers.forEach(function (element) {
                var item = new itemModel(element.wager);
                Arr.push(item);
              }, this);
              return Arr;
            }
          },
          prizeDetail: {
            t: '开奖明细',
            k: '',
            d: function d(data, me) {
              return [];
            }
          }
        }
      });
      var detail = itou.dataModel.dataFactory.create('dlt_Detail');
      // detail = new detail();
      return detail;
    };
    var detail = Detail();
    detail.call(self, data);
    console.debug(self);
    var Lottery = function Lottery(Model) {
      //--彩种信息，用来在提交确认页获取对应采种
      itou.dataModel.config({
        key: 'ssq_Lottery',
        opts: {
          t: {
            t: '采种名称',
            k: '',
            d: function d() {
              var maps = {
                SSQ: '双色球',
                SuperLotto: '大乐透',
                KL8: '快乐8'
              };
              return maps[self.lottery_type];
            }
          },
          v: {
            t: '采种标识',
            k: '',
            d: function d() {
              return self.lottery_type;
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
    Lottery();
    self.doCopy = function () {
      //--同号续投
      var cache = {
          list: [],
          beishu: self.schedule.multiple || 1,
          zhui: !!self.isPA
        },
        wagers = self.wagers;
      wagers.forEach(function (element) {
        cache.list.push(element.balls);
      }, this);
      itou.sessionData.setData('__dlt_nums_copy', cache);
      if (self.lottery_type == 'KL8') {
        var wt = data.wager_type || 'X5';
        itou.localData.setData('kl8-wt', {
          wt: wt.replace(/\D/g, '') || 5
        });
      }
      Gray.$page.loadPage('/confirm/basket/dlt/?docopy=1&back=' + window.vm.backurl);
    };
    self.SSQPrizeDetail = function () {
      //--获取双色球、大乐透奖金明细
      var kl8Config = {
        name: {
          X1: '选一',
          X2: '选二',
          X3: '选三',
          X4: '选四',
          X5: '选五',
          X6: '选六',
          X7: '选七',
          X8: '选八',
          X9: '选九',
          X10: '选十'
        },
        opts: {
          X1: [11],
          X2: [22],
          X3: [33, 32],
          X4: [44, 43, 42],
          X5: [55, 54, 53],
          X6: [66, 65, 64, 63],
          X7: [77, 76, 75, 74, 70],
          X8: [88, 87, 86, 85, 84, 80],
          X9: [99, 98, 97, 96, 95, 94, 90],
          X10: [110, 109, 108, 107, 106, 105, 100]
        }
      };
      if (self.prizeDetail.length == 0) {
        itou.get({
          url: '/shuzi/prizedetail',
          data: {
            project_id: window.vm.project_id
          }
        }).then(function (data) {
          var list = data.list,
            r = [];
          if (self.lottery_type == 'KL8') {
            var _opts = kl8Config.opts[data.play_type] || [];
            var _iterator = _createForOfIteratorHelper(_opts),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                var item = list[i];
                if (item) {
                  item.cond_name = kl8Config.name[data.play_type] || '';
                  if (i == 110) {
                    item.hitText = '中10';
                  } else {
                    item.hitText = '中' + (i + '').slice(-1);
                  }
                  r.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            self.prizeDetail = r;
            window.vm.show('KL8PrizeDetail');
            return;
          }
          for (var i in list) {
            var item = list[i];
            item.cond_name = item.cond_name.replace(/\n/g, '<br />');
            r.push(item);
          }
          self.prizeDetail = r;
          window.vm.show('SSQPrizeDetail');
        });
      } else {
        if (self.lottery_type == 'KL8') {
          window.vm.show('KL8PrizeDetail');
          return;
        }
        window.vm.show('SSQPrizeDetail');
      }
    };
    self.pingceJiangjin = null;
    try {
      var wagers = data.wagers;
      var bonus = 0;
      var _iterator2 = _createForOfIteratorHelper(wagers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var wager = _step2.value;
          var params = {
            multiple: 1,
            selected: {},
            sNum: {
              kl8: {
                r: wager.wt.replace(/\D/g, ''),
                b: 0
              }
            }
          };
          if (wager.abs) {
            params.selected.abs = [wager.abs.split(','), []];
            params.selected.nums = [wager.wager.split('$')[1].split(','), []];
          } else {
            params.selected.abs = [[], []];
            params.selected.nums = [wager.wager.split(','), []];
          }
          var _r = number_computer.kl8(params);
          bonus += _r.bonus;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      self.pingceJiangjin = bonus;
    } catch (error) {
      console.warn(error);
    }
  };
  var p3Info = function p3Info(data) {
    Array.prototype.sum = function () {
      var self = this;
      var str = self.length > 0 ? self.join('*1+') + '*1' : 'null';
      var fun = new Function('return ' + str);
      return fun();
    };
    Object.defineProperty(Array.prototype, 'sum', {
      enumerable: false //--禁止遍历
    });

    var self = this;
    var Item = function Item(Detail) {
      //--创建赛事行数据原型
      itou.dataModel.config({
        key: 'p3_Item',
        opts: {
          balls: {
            t: '选号情况',
            k: '',
            d: function d(wager, me) {
              var wt = wager.wt,
                wagerType = Detail.wagerType,
                moneyMap = Detail.moneyMap,
                r = {
                  wt: wt,
                  ball: null,
                  nums: null,
                  text: wagerType[wt],
                  money: 0
                },
                result = Detail.result,
                sum = result.sum();
              if (wt == 'P') {
                var hit = 0;
                r.ball = wager.wager.split('|');
                r.nums = wager.wager.split('|');
                r.selected = [];
                r.ball.forEach(function (element, index) {
                  var opt = element.split(',');
                  r.ball.splice(index, 1, opt.slice(0));
                  r.nums.splice(index, 1, opt);
                  if (opt.indexOf(result[index]) > -1) {
                    hit += 1;
                  }
                  opt.forEach(function (num, i) {
                    var obj = {};
                    obj.num = num;
                    obj.s = result.length == 0 || result[index] == num;
                    opt[i] = obj;
                  }, this);
                }, this);
                if (hit == 3) {
                  r.money = moneyMap['P'];
                }
              } else if (wt == 'PS') {
                r.ball = wager.wager.split(',');
                r.nums = wager.wager.split(',');
                // if(r.ball.indexOf(sum) > -1){r.money = moneyMap["P"]}
                r.nums.forEach(function (num, i) {
                  var obj = {};
                  obj.num = num;
                  obj.s = result.length == 0 || sum == num;
                  if (result.length > 0 && sum == num) {
                    r.money = moneyMap['P'];
                  }
                  r.nums[i] = obj;
                }, this);
              } else if (wt == 'C' || wt == 'CD3') {
                r.ball = wager.wager.split(',');
                r.nums = wager.wager.split(',');
                var str1 = r.ball.sort(function (a, b) {
                    return a - b;
                  }).join(','),
                  str2 = result.sort(function (a, b) {
                    return a - b;
                  }).join(',');
                if (str1 == str2) {
                  r.money = moneyMap['C'];
                }
                r.nums.forEach(function (num, i) {
                  var obj = {};
                  obj.num = num;
                  obj.s = result.length == 0 || result.indexOf(num) > -1;
                  r.nums[i] = obj;
                }, this);
              } else if (wt == 'CS') {
                r.ball = wager.wager.split(',');
                r.nums = wager.wager.split(',');
                // if(r.ball.indexOf(sum) > -1){r.money = moneyMap["C"]}
                r.nums.forEach(function (num, i) {
                  var obj = {};
                  obj.num = num;
                  obj.s = result.length == 0 || sum == num;
                  if (result.length > 0 && sum == num) {
                    r.money = moneyMap['C'];
                  }
                  r.nums[i] = obj;
                }, this);
              } else if (wt.has('C3') || wt.has('C6')) {
                var wg = wager.wager;
                r.ball = wg.split('$');
                r.nums = wg.split('$');
                if (!wager.abs) {
                  r.ball.splice(0, 0, null);
                  r.nums.splice(0, 0, null);
                }
                r.nums.forEach(function (element, index) {
                  if (!element) {
                    r.ball.splice(index, 1, []);
                    r.nums.splice(index, 1, []);
                  } else {
                    var opt = element.split(',');
                    r.ball.splice(index, 1, opt.slice(0));
                    r.nums.splice(index, 1, opt);
                    opt.forEach(function (num, i) {
                      var obj = {};
                      obj.num = num;
                      obj.s = result.length == 0 || result.indexOf(num) > -1;
                      opt[i] = obj;
                    }, this);
                  }
                }, this);
                var dan = r.ball[0],
                  tuo = r.ball[1],
                  rlt = result.uniquelize(),
                  diff1 = Array.minus(dan, rlt),
                  //--胆与采果的差集
                  diff2 = Array.minus(rlt, dan),
                  //--采果与胆的差集
                  diff3 = Array.minus(diff2, tuo); //--剩余与拖的差集
                if (diff1.length == 0 && diff3.length == 0 && (wt == 'C3' && rlt.length == 2 || wt == 'C6' && rlt.length == 3 || wt.has('C3') && wt.has('C6'))) {
                  r.money = moneyMap['C'];
                }
              }
              if (result.length > 0 && !r.money) {
                r.money = '未中';
              } else if (!r.money) {
                r.money = '';
              }
              return r;
            }
          }
        }
      });
      var item = itou.dataModel.dataFactory.create('p3_Item');
      return item;
    };
    var Detail = function Detail() {
      itou.dataModel.config({
        key: 'p3_Detail',
        opts: {
          no: {
            t: '旗号',
            k: 'lottery_no',
            d: ''
          },
          wagerType: {
            t: '投注类型映射',
            k: '',
            d: function d(data, me) {
              return {
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
                'CS': '和值',
                //--组选和值
                'CD3': '组3单式' //--组3单式
              };
            }
          },

          moneyMap: {
            t: '中奖金额映射',
            k: '',
            d: function d(data, me) {
              return {
                'P': 1040,
                //--直选投注奖金
                'C3': 346,
                //--组3奖金
                'C6': 173 //--组6奖金
              };
            }
          },

          rltMsg: {
            t: '浆果描述',
            k: '',
            d: function d(data, me) {
              return {};
            }
          },
          result: {
            t: '浆果',
            k: '',
            d: function d(data, me) {
              var r = [];
              try {
                var rlt = data.lottery_result_list[me.no];
                r = rlt.split(';');
              } catch (error) {
                console.error(error.message);
              }
              var rlt = r.uniquelize(),
                len = rlt.length;
              if (len == 3) {
                //--处理中奖信息和组选奖金
                me.moneyMap.C = me.moneyMap.C6;
                me.rltMsg.type = '组6';
                me.rltMsg.wt = 'C6';
              } else if (len == 2) {
                me.moneyMap.C = me.moneyMap.C3;
                me.rltMsg.type = '组3';
                me.rltMsg.wt = 'C3';
              } else {
                me.moneyMap.C = 0;
                me.rltMsg.type = '豹子';
                me.rltMsg.wt = 'P';
              }
              me.rltMsg.sum = '和值' + r.sum();
              me.rltMsg.balls = {};
              r.forEach(function (num, index) {
                me.rltMsg.balls[index] = num;
              }, this);
              return r;
            }
          },
          itemModel: {
            t: '行数据原型',
            k: '',
            d: function d(data, me) {
              var itemModel = Item(me);
              return itemModel;
            }
          },
          wagerText: {
            t: '行数据原型',
            k: '',
            d: null
          },
          wagers: {
            t: '选项列表',
            k: '',
            d: function d(data, me) {
              var Arr = [],
                wagers = data.wagers,
                itemModel = me.itemModel;
              wagers.forEach(function (element) {
                var item = new itemModel(element);
                try {
                  //--app下，可能会出现列表丢失的情况，暂时做容错处理
                  if (!me.wagerText) {
                    me.wagerText = item.balls.wt.has('P') ? '直选' : '组选';
                  }
                } catch (e) {}
                Arr.push(item);
              }, this);
              return Arr;
            }
          },
          prizeDetail: {
            t: '开奖明细',
            k: '',
            d: function d(data, me) {
              return [];
            }
          }
        }
      });
      var detail = itou.dataModel.dataFactory.create('p3_Detail');
      // detail = new detail();
      return detail;
    };
    var detail = Detail();
    detail.call(self, data);
    console.debug(self);
    var Lottery = function Lottery(Model) {
      //--彩种信息，用来在提交确认页获取对应采种
      itou.dataModel.config({
        key: 'p3_Lottery',
        opts: {
          t: {
            t: '采种名称',
            k: '',
            d: function d() {
              var r = '';
              switch (self.lottery_type) {
                case '3D':
                  r = '3D';
                  break;
                case 'P3':
                  r = '排3';
                  break;
                case 'P5':
                  r = '排5';
                  break;
                case 'P7':
                  r = '七星彩';
                  break;
                case 'NP7':
                  r = '七星彩';
                  break;
                default:
                  r = '';
                  break;
              }
              return r;
            }
          },
          v: {
            t: '采种标识',
            k: '',
            d: function d() {
              return self.lottery_type;
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
    Lottery();
    self.doCopy = function () {
      //--同号续投
      var cache = {
          list: [],
          beishu: self.schedule.multiple || 1
        },
        wagers = self.wagers || [];
      wagers.forEach(function (element) {
        cache.list.push(element.balls);
      }, this);
      itou.sessionData.setData('__p3_nums_copy', cache);
      Gray.$page.loadPage('/confirm/basket/p33d/?docopy=1&back=' + window.vm.backurl);
    };
    self.P7PrizeDetail = function () {
      //--获取七星彩奖金明细
      if (self.lottery_type != 'P7' && self.lottery_type != 'NP7') {
        return;
      }
      if (self.prizeDetail.length == 0) {
        itou.get({
          url: '/shuzi/prizedetail',
          data: {
            project_id: window.vm.project_id
          }
        }).then(function (data) {
          var list = data.list,
            r = [];
          for (var i in list) {
            var item = list[i];
            // item.cond_name = item.cond_name.replace(/\n/g, "<br />");
            item.cond_name = item.cond_name;
            r.push(item);
          }
          self.prizeDetail = r;
          window.vm.show('P7PrizeDetail');
        });
      } else {
        window.vm.show('P7PrizeDetail');
      }
    };
  };
  var kuaicaiInfo = function kuaicaiInfo(data) {
    //--快彩数据信息'
    var self = this;
    if (!self.lottery_type) {
      return;
    }
    var opts = $.lottery.select11_5.$config[self.lottery_type];
    var $lottery_type = opts.lottery_type;
    self.play_type = data.play_type;
    itou.localData.setData('__sys_lottery_type', {
      key: $lottery_type
    });
    for (var i = 0; i < data.wagers.length; i++) {
      var wager = data.wagers[i].wager;
      if (self.play_type.has('FP') || self.play_type == 'LX2' || self.play_type == 'LX3') {
        var max = self.play_type.replace(/\D/g, '');
        var arr = wager.split('|');
        arr = arr.each(function (x) {
          x = x.split(',').each(function (y) {
            return ('00' + y).right(2);
          });
          x.sort();
          return x;
        });
        //console.log(arr);
      } else {
        var arr = wager.split('$');
        arr = arr.each(function (x) {
          x = x.split(',');
          x = x.each(function (y) {
            return ('00' + y).right(2);
          });
          x.sort();
          return x;
        });
      }
      //console.log(arr[0]);
      self.wagers.push(arr);
    }
    self.isJingcai = false; //--是否是竞彩，竞彩投注无“复制选号”按钮
  };

  var Info = function Info(data) {
    var _data$depute_info$tic, _data$depute_info;
    var self = this;
    self.data = data;
    self.id = data.project_id;
    self.p_uuid = data.p_uuid || '0';
    self.station_uuid = data.station_uuid;
    self.deny_count = data.deny_count || 0; //--被撤单或者拒接次数
    self.lottery_type = data.lottery_type;
    self.no = data.lottery_no;
    self.config = $.lottery.select11_5.$config[self.lottery_type] ? $.lottery.select11_5.$config[self.lottery_type].config : {};
    self.shop = new shopInfo(data); //--店铺信息对象
    self.status = new statusInfo(data); //--方案当前状态
    self.schedule = new scheduleInfo(data); //--期程
    self.href = href;
    self.pay_method = data.pay_method;
    self.is_xh = (data.manner || []).contains('6') ? 1 : 0; //--是否包含数据选号的数据
    self.station_uid = data.station_uid || ''; //--保存店铺的店铺ID
    self.pcode_t = data.pcode_t || 0; //--保存方案的方案码有效时间，单位秒
    self.pcode_countDowm = {}; //--倒计时对象
    self.project_type = data.project_type || '';
    self.isJingcai = true;

    // self.bind = {//--绑定的店铺信息
    // 	id: null,
    // 	name: null,
    // 	text: "绑定本店后，后续选号提交可直接到店，让您出票更快。",
    // 	show: false
    // };

    /**
    * 快彩11选5多期购买
    * ————start————
    */
    zhuiInfo.call(self, data);
    /**
    * 快彩11选5多期购买
    * ————end————
    */
    data.lottery_type = data.lottery_type || '';
    self.wagers = []; //--选号
    if (jingcaiTypes.contains(data.lottery_type) || danchang.contains(data.lottery_type)) {
      //--竞彩足球
      self.match_type = 'jc';
      if (danchang.contains(data.lottery_type)) {
        try {
          $.lottery.danchangConfig(); //--北单配置初始化
        } catch (e) {}
        self.match_type = 'dc';
      }
      jingcaiInfo.call(self, data);
      self.liveStatus = {}; //--当前比赛状态
      self.liveGoal = {}; //--当前比赛比分
      self.dataType = 'jingcaiZuqiu';
    } else if (jingcaiLanqiuTypes.contains(data.lottery_type)) {
      //--竞彩篮球
      self.match_type = 'jclq';
      jingcaiLanqiuInfo.call(self, data);
      self.liveStatus = {}; //--当前比赛状态
      self.liveGoal = {}; //--当前比赛比分
      self.dataType = 'jingcaiLanqiu';
    } else if (data.lottery_type.has('ToTo')) {
      Zucai.call(self, data); //--足彩
      self.dataType = 'zucai';
    } else if (data.lottery_type == 'SSQ' || data.lottery_type == 'SuperLotto' || data.lottery_type == 'KL8') {
      dltInfo.call(self, data); //--大乐透、双色球
      self.dataType = 'SuperLotto||SSQ';
    } else if (data.lottery_type == 'P3' || data.lottery_type == '3D' || data.lottery_type == 'P5' || data.lottery_type == 'P7' || data.lottery_type == 'NP7') {
      p3Info.call(self, data); //--大乐透、双色球
      self.dataType = 'P33D';
    } else {
      //--非竞彩足球
      // 非即开 
      if (!(data.lottery_type == 'DGG' || data.lottery_type == 'GGL')) {
        kuaicaiInfo.call(self, data);
        self.dataType = 'kc11x5';
      }
    }
    console.log('self.dataType = ', self.dataType);
    self.isEnd = !!(data.project_end > 0); //--是否截止project_end:0 为未截止,1 已截止，未到开奖,2 开奖后
    //--预计奖金
    self.jiangjin = data.net_prize; //--小于0为为开奖，等于0为未中奖，大于0为中奖奖金
    //--实票奖金
    self.duijiang = data.depute_info.awarding_status == 0 ? -1 : data.depute_info.award_money * 1; //--小于0为未兑奖，等于大于0为兑奖奖金
    //--实兑奖金
    self.award = data.depute_info.awarding_status == 0 ? -1 : data.depute_info.user_award * 1; //--小于0为未兑奖，等于大于0为兑奖奖金
    self.profitNum = data.depute_info.profit_pct; //--跟单盈利比率
    self.tousu = {
      //--投诉相关
      pass_7day: !!data.pass_7day,
      //--是否已超过［方案开奖时间］7天
      hasTousu: !!data.has_complain_not_process //--当前方案是否已有［未处理］的投诉工单
    };

    self.submit_status = data.submit_status; //--是否提交店铺
    self.money = data.money;
    var ticket_uploaded = (_data$depute_info$tic = data === null || data === void 0 || (_data$depute_info = data.depute_info) === null || _data$depute_info === void 0 ? void 0 : _data$depute_info.ticket_uploaded) !== null && _data$depute_info$tic !== void 0 ? _data$depute_info$tic : 0;
    self.ticket_uploaded = ticket_uploaded > 0;
    if (self.jiangjin * 1 > 0) {
      var title = '看，我选的单又中啦！';
    } else {
      var title = '看我选的方案';
    }
    self.shareMess = {
      title: title,
      imgUrl: config.base_url + 'static/images/projectshare-c75dfe485f.jpg',
      desc: '有了它，生活总有希望，总有一天收获惊喜。',
      link: config.base_url + 'project/share/?scene=share&id=' + (Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id)
    };
    if (self.p_uuid) {
      self.shareMess.link += '&p_uuid=' + self.p_uuid;
    }
    //--分区键定位店铺ID
    var dk_station_id = Gray.$page.getUrlParam('dk_station_id');
    if (dk_station_id) {
      self.dk_station_id = dk_station_id;
      self.shareMess.link += '&dk_station_id=' + dk_station_id;
    }
    self.maps = {
      'F1': 'r1',
      'R2': 'r2',
      'R3': 'r3',
      'R4': 'r4',
      'R5': 'r5',
      'R6': 'r6',
      'R7': 'r7',
      'R8': 'r8',
      'FC2': 'q2',
      'FP2': 'qz2',
      'FC3': 'q3',
      'FP3': 'qz3',
      'LX2': 'lx2',
      'LX3': 'lx3',
      'LX4': 'lx4',
      'LX5': 'lx5'
    };
  };
  Info.prototype.copyBalls = function () {
    //--复制购买
    var self = this,
      is_xh = self.is_xh == '1' ? 1 : 0,
      //--是否是数据选号
      maps = self.maps,
      data = self.data,
      play_type = data.play_type,
      curr = maps[play_type],
      wagers = self.data.wagers,
      r = {
        currGame: curr,
        currNo: null,
        beishu: data.multiple || 1,
        qishu: data.plan_no || 1,
        balls: []
      };
    if (curr.has('qz') || curr == 'lx2' || curr == 'lx3') {
      var max = curr.replace(/\D/g, '');
      wagers.each(function (val) {
        var wager = val.wager.split('|'),
          selected = {};
        wager.each(function (val, i) {
          var balls = val.split(',');
          if (i < max) {
            var s = {};
            for (var m = 1; m <= 11; m++) {
              s[m] = 0;
              if (balls.contains(('00' + m).right(2)) || balls.contains(m)) {
                s[m] = 1;
              }
            }
            selected[i] = s;
          }
        });
        r.balls.push({
          selected: selected,
          is_xh: is_xh
        });
      });
    } else {
      wagers.each(function (val) {
        var wager = val.wager;
        if (!wager.has('$')) {
          wager = '$' + wager;
        }
        wager = wager.split('$');
        var selected = {},
          dan = wager[0].split(','),
          tuo = wager[1].split(',');
        for (var i = 1; i <= 11; i++) {
          selected[i] = 0;
          if (dan.contains(('00' + i).right(2)) || dan.contains(i)) {
            selected[i] = -1;
          }
          if (tuo.contains(('00' + i).right(2)) || tuo.contains(i)) {
            selected[i] = 1;
          }
        }
        r.balls.push({
          selected: selected,
          is_xh: is_xh
        });
      });
    }
    itou.localData.setData('__bj11x5_nums_copy', r);
    return r;
  };
  Info.prototype.zhuiMoneyCompute = function () {
    //--多期购买前段中奖金额计算
    var self = this,
      result = self.zhuiResult,
      money = {},
      wagers = self.data.wagers,
      maps = ['ToTo', 'NineToTo', 'SSQ', 'SuperLotto', 'KL8', 'P3', '3D', 'P5', 'P7', 'NP7', 'DGG', 'GGL'],
      type = self.data.lottery_type;
    if (jingcaiTypes.contains(type) || danchang.contains(type) || jingcaiLanqiuTypes.contains(type) || maps.contains(type)) {
      //--竞彩足球/篮球
      return;
    }
    if (itou.outil.is(result, 'Array')) {
      result = {};
    }
    var maps = self.maps;
    wagers = wagers.each(function (val) {
      var wager = val.wager;
      var bonus = self.config[maps[val.wt]].bonus || 0; //--单注奖金
      var o = {
        type: val.wt,
        max: val.c,
        beishu: val.multiple,
        bonus: bonus
      };
      if (val.wt.has('FP') || val.wt == 'LX2' || val.wt == 'LX3') {
        var balls = [],
          max = val.wt.replace(/\D/g, '');
        balls = wager.split('|').each(function (val, i) {
          var x = val.split(',');
          if (i < max) {
            return x;
          }
        });
        o.balls = balls;
      } else {
        if (wager.has('$')) {
          wager = wager.split('$');
          var dan = wager[0].split(','),
            tuo = wager[1].split(',');
        } else {
          var dan = [],
            tuo = wager.split(',');
        }
        o.dan = dan;
        o.tuo = tuo;
      }
      return o;
    });
    console.log(wagers);
    for (var i in result) {
      var rlt = result[i].split(',');
      var m = 0;
      wagers.each(function (val) {
        //console.log(val);
        if (!val.type.has('LX')) {
          if (val.type.has('FP')) {
            var zhushu = jisuan_FP(val.type, val.balls, rlt);
          } else {
            var zhushu = jisuan(val.type, val.dan, val.tuo, rlt);
          }
          // console.log(m, zhushu, val.bonus);
          m += zhushu * val.bonus * val.beishu;
          // m += zhushu * val.bonus;
        } else {
          if (val.type == 'LX2') {
            var hitNum = {
              FP2: 0,
              FC2: 0,
              R2: 0
            };
            hitNum.FP2 = jisuan_FP('FP2', val.balls, rlt);
            var fcRlt = rlt.slice(0, 2); //--前二组选浆果
            var zh = val.balls.getZuhes();
            zh.forEach(function (element) {
              if (Array.intersect(rlt, element).length == 2) {
                hitNum.R2 += 1;
              }
              if (Array.intersect(fcRlt, element).length == 2) {
                hitNum.FC2 += 1;
              }
            }, this);
            // console.error(zh, hitNum, rlt, fcRlt);
            for (var i in hitNum) {
              m += hitNum[i] * self.config[maps[i]].bonus * val.beishu;
            }
          } else if (val.type == 'LX3') {
            var hitNum = {
              FP3: 0,
              FC3: 0,
              R3: 0
            };
            hitNum.FP3 = jisuan_FP('FP3', val.balls, rlt);
            var fcRlt = rlt.slice(0, 3); //--前二组选浆果
            var zh = val.balls.getZuhes();
            zh.forEach(function (element) {
              // element = element[0].concat(element[1])
              if (Array.intersect(rlt, element).length == 3) {
                hitNum.R3 += 1;
              }
              if (Array.intersect(fcRlt, element).length == 3) {
                hitNum.FC3 += 1;
              }
            }, this);
            // console.error(zh, hitNum, rlt, fcRlt);
            for (var i in hitNum) {
              m += hitNum[i] * self.config[maps[i]].bonus * val.beishu;
            }
          } else if (val.type == 'LX4') {
            var p1 = 154,
              //--一等奖奖金
              p2 = 19; //--二等奖奖金
            var danzhu = val.tuo.combination(4);
            danzhu.forEach(function (element) {
              var hn = Array.intersect(element, rlt);
              if (hn.length == 4) {
                m += p1 * val.beishu;
              } else if (hn.length == 3) {
                m += p2 * val.beishu;
              }
            }, this);
          } else if (val.type == 'LX5') {
            var p1 = 1080,
              //--一等奖奖金
              p2 = 90; //--二等奖奖金
            var danzhu = val.tuo.combination(5);
            danzhu.forEach(function (element) {
              var hn = Array.intersect(element, rlt);
              if (hn.length == 5) {
                m += p1 * val.beishu;
              } else if (hn.length == 4) {
                m += p2 * val.beishu;
              }
            }, this);
          }
        }
      });
      money[i] = m;
    }
    self.zhuiMoney = money;
    console.log(self.wagers);
    function jisuan_FP(type, balls, rlt) {
      //--计算中奖注数，直选投注
      var r = 0,
        num = 0,
        max = type.replace(/\D/g, '');
      balls.each(function (val, i) {
        if (val.contains(rlt[i])) {
          num += 1;
        }
      });
      if (num == max) {
        r = 1;
      }
      return r;
    }
    function jisuan(type, dan, tuo, rlt) {
      //--计算中奖注数.非直选玩法
      // console.log(type, dan, tuo, rlt);
      var r = 0,
        danLen = dan.length,
        //--胆的数量
        tuoLen = tuo.length,
        //--胆的数量
        danNum = 0,
        //--胆命中数
        tuoNum = 0; //--拖命中数
      if (type.has('F')) {
        //--前1、前2、前3需要处理中奖结果
        var l = type.replace(/\D/g, '');
        rlt = rlt.slice(0).splice(0, l);
      }
      danNum = Array.intersect(dan, rlt).length;
      tuoNum = Array.intersect(tuo, rlt).length;
      // console.log(danNum, tuoNum, danLen);
      if (['R6', 'R7', 'R8'].contains(type)) {
        //--任6、任7、任8中将注数计算
        var max = type.replace(/\D/g, '');
        if (danNum + tuoNum == 5 && danLen + tuoNum <= max) {
          //--胆拖命中数之和必须为5，并且胆数量与托命中之和必须小于等于单注球数
          // console.log(tuoLen - tuoNum, max - (danLen + tuoNum));
          if (max == danLen + tuoNum) {
            r = 1;
          } else {
            r = $.lottery.C(tuoLen - tuoNum, max - (danLen + tuoNum));
          }
        }
      } else {
        var l = type.replace(/\D/g, '');
        if (danLen == danNum && danNum + tuoNum >= l) {
          //--胆必须全中才可能中奖
          if (type.has('R')) {
            //--任2、任3、任4、任5
            r = $.lottery.C(tuoNum, l - danNum);
          } else if (type.has('FC')) {
            //--前2组选、前3组选
            r = $.lottery.C(tuoNum, l - danNum);
          } else if (type.has('FP') || type == 'LX2' || type == 'LX3') {//--前2直选、前3直选
          } else if (type == 'F1') {
            //--前1
            r = $.lottery.C(tuoNum, l - danNum);
          }
        }
        // console.log(r);
      }

      return r;
    }
  };
  Info.prototype.formatForOptimize = function (match_list, wager_store_optimize) {
    //--为奖金优化格式化数据
    var self = this,
      ms = $.lottery.jingcai.football.$maps,
      sm = $.lottery.jingcai.football.outil.mapsReversal(ms),
      config = $.lottery.jingcai.football.$config,
      type = self.lottery_type == 'SportterySoccerMix' ? 'mixed' : 'single';
    maps = {}, pSm = null, r = self.optimizeList, match_list = self.data.match_list, games = [], win = {}; //--中奖选项集合
    for (var i in match_list) {
      var list = match_list[i].list;
      if (!win[i]) {
        win[i] = [];
      }
      for (var y in list) {
        if (!games.contains(y)) {
          games.push(y);
        }
        if (self.data.net_prize > 0) {
          var winVal = type == 'single' ? list[y].lottery_result : list[y].lottery_result_mix;
          win[i].push(winVal); //--拼接中将选项编号
        }
      }
    }

    for (var i in config) {
      var Sm = $.lottery.jingcai.football.outil.mapsReversal(config[i][type]);
      if (i == 'SportteryWDL' || i == 'WDL') {
        pSm = Sm;
      }
      if (games.contains(i)) {
        maps = $.extend({}, maps, Sm);
      }
    }
    // console.log(type, maps);
    var match = {};
    for (var i in match_list) {
      var o = {},
        item = match_list[i];
      o.n = item.host_name_s;
      o.odds = {};
      o.no = item.serial_no;
      for (var z in item.list) {
        var odds1 = type == 'mixed' ? item.list[z].odds_mix : item.list[z].odds;
        o.odds = $.extend({}, o.odds, odds1);
        if (z == 'SportteryWDL' || z == 'WDL') {
          o.pk = item.list[z].boundary;
        }
      }
      match[i] = o;
    }
    var list = wager_store_optimize;
    var max = 0;
    var weekdayCn = ['', '一', '二', '三', '四', '五', '六', '日'];
    for (var i = 0, len = list.length; i < len; i++) {
      var o = {},
        item = list[i],
        wager = item.wager.split(';');
      o.guoguan = item.pt == '1_1' ? '单关' : (item.pt + '').replace('_', '串');
      o.num = item.multiple * item.c * self.schedule.multiple;
      o.money = 2;
      o.opts = [];
      o.win = true;
      for (var x = 0, y = wager.length; x < y; x++) {
        var arr = wager[x].split(':'),
          intro = match[arr[0]],
          odds = intro.odds,
          ob = {};
        var no = intro.no + '';
        if (no) {
          var weekdayNum = no.slice(0, 1);
          var cnNum = weekdayCn[weekdayNum];
          if (cnNum) {
            ob.no = '周' + cnNum + no.slice(1);
          } else {
            ob.no = no;
          }
        }
        ob.n = intro.n;
        ob.v = maps[arr[1]]; //console.log(arr[1]);
        ob.o = odds[arr[1]];
        if (pSm[arr[1]]) {
          ob.p = intro.pk;
        }
        o.opts.push(ob);
        o.money *= ob.o;
        if (o.win) {
          o.win = win[arr[0]].contains(arr[1]); //--判断是否中奖
        }
      }

      if (o.money > 0) {
        //--四舍六入五成双
        // console.log(o.money)
        var money = (o.money + '').split('.');
        // console.log(Number(`${money[0]}.${money[1].slice(0, 2)}`))
        if (money[1] && money[1].length > 2) {
          //--小数存在，并且超过2位
          var n = money[1].slice(2, 3) || 0; //--取小数点后第三位
          var nn = money[1].slice(1, 2) || 0; //--取小数点后第二位
          // console.log(money[1], n, nn);
          // console.log(n <= 4 || (n == 5 && nn % 2 == 0))
          if (n <= 4 || n == 5 && nn % 2 == 0) {
            //四舍 或者 成双前提下五舍
            o.money = Number("".concat(money[0], ".").concat(money[1].slice(0, 2)));
          } else {
            //--六入 或者 成双前提下五入
            o.money = Number("".concat(money[0], ".").concat(money[1].slice(0, 2))) + 0.01;
          }
        }
      }
      // console.log(o.money);
      o.money *= o.num;
      max = o.money > max ? o.money : max;
      r.push(o);
    }
    // console.log(max);
    if (danchang.contains(self.lottery_type)) {
      var fanjianglv = 0.65;
    } else {
      var fanjianglv = 1;
    }
    self.pingceJiangjin = (max * fanjianglv).toFixed(2);
    // console.log(r);
    // return r;
  };

  Info.prototype.formatForOptimize_jingcailanqiu = function (match_list, wager_store_optimize) {
    //--为奖金优化格式化数据
    var self = this,
      config = $.lottery.jingcai.basketball.$config,
      $maps = $.lottery.jingcai.basketball.maps.codeToGame,
      type = self.lottery_type == 'SportteryBasketMix' ? 'mixed' : 'single';
    maps = {}, pSm = null, r = self.optimizeList, match_list = self.data.match_list, games = [], win = {}; //--中奖选项集合
    // console.log("奖金优化格式化：", "match_list = ", match_list, "wager_store_optimize = ", wager_store_optimize);
    // console.log($maps);
    for (var i in match_list) {
      var list = match_list[i].list;
      if (!win[i]) {
        win[i] = [];
      }
      for (var y in list) {
        if (!games.contains(y)) {
          games.push(y);
        }
        if (self.data.net_prize > 0) {
          var winVal = type == 'single' ? list[y].lottery_result : list[y].lottery_result_mix;
          win[i].push(winVal); //--拼接中将选项编号
        }
      }
    }

    var match = {};
    for (var i in match_list) {
      var o = {},
        item = match_list[i];
      o.n = item.host_name_s;
      o.odds = {};
      o.pankou = {};
      for (var z in item.list) {
        var odds1 = type == 'mixed' ? item.list[z].odds_mix : item.list[z].odds;
        o.odds = $.extend({}, o.odds, odds1);
        if (z == 'SportteryHWL' || z == 'SportteryBS') {
          o.pk = item.list[z].boundary;
          o.pankou[z] = item.list[z].boundary;
        }
        if (type == 'single') {
          o.game = z;
        }
      }
      match[i] = o;
    }
    var list = wager_store_optimize;
    var max = 0;
    for (var i = 0, len = list.length; i < len; i++) {
      var o = {},
        item = list[i],
        wager = item.wager.split(';');
      o.guoguan = item.pt == '1_1' ? '单关' : (item.pt + '').replace('_', '串');
      o.num = item.multiple * item.c;
      o.money = o.num * 2;
      o.opts = [];
      o.win = true;
      for (var x = 0, y = wager.length; x < y; x++) {
        var arr = wager[x].split(':'),
          intro = match[arr[0]],
          odds = intro.odds,
          ob = {};
        if (type == 'single') {
          var g = intro.game;
        } else {
          var g = $maps[arr[1]];
        }
        ob.n = intro.n;
        ob.v = config[g][type][arr[1]]; //console.log(arr[1]);
        if (ob.v.has('*h')) {
          ob.v = '主胜 ' + ob.v.replace('*h', '');
        } else if (ob.v.has('*g')) {
          ob.v = '客胜 ' + ob.v.replace('*g', '');
        }
        // if(pSm[arr[1]]){
        ob.p = intro.pankou[g];
        // }
        o.opts.push(ob);
        o.money *= odds[arr[1]];
        if (o.win) {
          o.win = win[arr[0]].contains(arr[1]); //--判断是否中奖
        }
      }

      max = o.money > max ? o.money : max;
      r.push(o);
    }
    // console.log("max=",max);
    self.pingceJiangjin = (max * 1).toFixed(2);
    if (self.pingceJiangjin > 5000000) {
      self.pingceJiangjin = 5000000 .toFixed(2);
    }
    // console.log(r);
    // return r;
  };

  var Zhui = function Zhui(model) {
    var self = this;
    self.parent = model;
    self.currView = 'balls'; //--balls || list

    self.showAlert = false;
    self.no = null;
    self.resultShow = [];
    self.result = [];
  };
  Zhui.prototype.changeTab = function (key) {
    var self = this;
    self.currView = key;
  };
  Zhui.prototype.show = function (no) {
    var self = this;
    self.no = no;
    self.resultShow = self.parent.info.zhuiResultShow[no].split(','); //console.log(self.resultShow, self.parent.info.zhuiResultShow, no);
    self.result = self.parent.info.zhuiResult[no];
    if (self.result) {
      self.result = self.result.split(',');
    } else {
      self.result = [];
    }
    self.showAlert = true;
  };
  Zhui.prototype.close = function () {
    var self = this;
    self.showAlert = false;
  };
  var model = function model() {
    var self = this;
    self.loading = false;
    self.pingce = null;
    //--页面第一次加载显示扫码付款提示弹窗
    // var showPayScanAlert = itou.localData.getData("project_detail_showPayScanAlert_new").key;
    // self.showPayScanAlert = showPayScanAlert == false? false: true;
    // var payscan = itou.setting.getData("payscan");//--是否允许扫码付
    // if(!payscan){
    // 	self.showPayScanAlert = false;
    // }

    self.pageMode = 'project'; //--当前页面是方案页面
    self.showKfLayer = false; //--显示联系客服弹层。
    self.showFxLayer = false; //--《追光者内容管理规范》
    self.isRcmd = false; //--是否已发布跟单

    self.showGuessLayer = false;
    self._pmn = Gray.$page.getUrlParam('_pmn') || ''; //--从pc链接进入本页，会带一个参数_pmn
    self.showPayScanAlert = false;
    self.canPayScan = true;
    self.info = null;
    self.shop_profit = false; //--店铺是否开启盈利跟单
    self.data = null;
    self.currShow = null;
    self.currKl8 = 'X10'; //--快乐8默认展示的奖级
    self.showBody = false;
    self.showBottom = true;
    self.showYouhua = false;
    self.isShowShareInfo = false;
    self.activity_model = [];
    self.has_rcmd = undefined;
    self.rcmd_id = '';
    self.rcmdDoing = {
      gaid: 0,
      status: 0,
      img: ''
    };
    self.project_id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id;
    if (href && href.has('/project/detail/')) {
      itou.localJson.setJson('/project/detail/', {
        id: self.project_id
      });
    }
    // self.p_uuid = Gray.$page.getUrlParam('p_uuid') || itou.localJson.getJson('/project/detail/').uuid || '0';
    if (Gray.$page.getUrlParam('id')) {
      self.p_uuid = Gray.$page.getUrlParam('p_uuid') || '0';
    } else {
      self.p_uuid = itou.localJson.getJson('/project/detail/').uuid || '0';
    }
    if (self.p_uuid && href && href.has('/project/detail/')) {
      itou.localJson.setJson('/project/detail/', {
        uuid: self.p_uuid
      });
    }
    self.activity_id = Gray.$page.getUrlParam('activityId');
    self.activity_url = '';
    self.content_hide = false;
    self.content_show = false;
    self.p_mode = null;
    self.isShowJiangjin = false;
    self.jiangjinList = [];
    self.guanzhu = true; //--是否关注公众号
    self.hasGetJiangjin = null; //--调用过奖金评测接口状态

    self.zhui = new Zhui(self);
    self.jingcaiTypes = jingcaiTypes;
    self.jingcaiLanqiuTypes = jingcaiLanqiuTypes;
    self.price = 0; //--公开售价

    self.wx = wx;
    Gray.plugin.define('self', [], function () {
      return self;
    });
    Gray.plugin.require('init.js');
    Gray.plugin.require('onmenushareappmessage.js'); //--微信分享给好友
    Gray.plugin.require('onmenusharetimeline.js'); //--微信分享给好友

    // self.getActivityId = function () {
    //     return itou.get({
    //         url: 'activity/GetProjectAvailableBonus',
    //         data:{
    //             project_id: self.project_id,
    //         },
    //         formatResult:false,
    //     });
    // };
    self.recommenddetail = function () {
      return itou.get({
        url: 'project/recommenddetail',
        data: {
          project_id: self.info.schedule.fid,
          p_uuid: self.info.schedule.fUuid
        },
        formatResult: false
      });
    };
    // self.getActivity = function () {
    //     return itou.get({
    //         url: 'activity/get',
    //         data: {
    //             //token: 'itouapi_f3cb23f95572b37250bce5547e5fbf5e6c105a60',
    //             id: self.activity_id,
    //         }
    //     });
    // };
    //活动item构造函数
    var activity_item = function activity_item(data) {
      try {
        this.name = data.itou_activity.title;
        this.aid = data.aid;
      } catch (e) {}
    };
    // self.getActivityDoing = function () {//--店铺活动
    //     return itou.get({
    //         url:'activity/doing',
    //         data: {
    //             station_user_id: self.info.shop.id
    //         },
    //         rnd:false,
    //         notoken:true
    //     })
    //         .then(function (result) {
    //     	if (result.list) {
    //     		var obj = {};
    //     		for (var i = 0, length = result.list.length; i < length; i++) {
    //     			if (result.list[i].aid == 5) {
    //                         self.has_rcmd = true;
    //                         self.rcmd_id = result.list[i].id;
    //                     } else {
    //                         self.has_rcmd = false;
    //                     }
    //     		}
    //     	}
    //         });
    // };
    self.getRcmdDoing = function () {
      //--店铺活动
      return itou.get({
        url: 'activity/grcmdcurrent',
        rnd: false,
        notoken: true
      }).then(function (data) {
        data || (data = {});
        self.rcmdDoing.gaid = data.gaid;
        self.rcmdDoing.status = data.status;
        self.rcmdDoing.img = data.project_img || '';
      });
    };
    self.getInfo = function (url, autocache, params) {
      //--执行搜索
      url = url || 'project/detailV2';
      var showErr = url == 'project/detailV2';
      autocache = autocache || false;
      var data = {
        project_id: self.project_id
      };
      data.p_uuid = self.p_uuid || '0';
      data = $.extend({}, data, params);
      data.check_pay = 1;
      if (self._pmn) {
        data._pmn = self._pmn; //--从PC进入本页，会有参数_pmn
      }
      //--分区键定位店铺ID
      var dk_station_id = Gray.$page.getUrlParam('dk_station_id');
      if (dk_station_id) {
        data.dk_station_id = dk_station_id;
      }
      return itou.get({
        url: url,
        data: data,
        autocache: autocache,
        showErr: showErr //--接口超时是否跳转错误页面
      }).then(function (data) {
        if (!data.lottery_type) {
          var defer = $.Deferred();
          defer.reject();
          return defer.promise();
        }
        self.info = new Info(data); //console.log(self);
        self.data = self.info;
        // if(data.p_mode == 0 || data.p_mode == 1){
        // 	data.content_hide = data.p_mode ^ 1;
        // }
        if (self.info.schedule.isfollow) {
          // if(data.content_hide && !self.info.schedule.end){
          if (!data.wagers || data.wagers.length == 0) {
            self.content_hide = true;
            self.content_show = false;
          } else {
            self.content_hide = false;
            self.content_show = true;
          }
          self.showBody = true;
        } else if (data.recommend_info) {
          return data;
        } else if (data.is_share_buy == 1) {
          return data;
        } else {
          self.showBody = true;
          self.content_show = true;
          self.content_hide = false;
        }
        self.p_mode = data.p_mode;
        //self.showBody = true;
        try {
          vm.doCountDowm();
        } catch (e) {
          console.error(e);
        } //--方案码倒计时
        return data;
      });
    };

    // self.getStatus = function(){//--获取竞彩足球即时状态
    // 	var wagers = self.info.wagers,
    // 		match_id = [];
    // 	for(var i = 0, len = wagers.length; i < len; i++){
    // 		match_id.push(wagers[i].id);
    // 	}
    // 	return itou.get({
    // 		url: "livescore/eventlist",
    // 		data: {match_id: match_id.join(",")}
    // 	});
    // };

    self.getStatus = function () {
      //--获取竞彩足球及时比分\即时状态
      var wagers = self.info.wagers,
        match_id = [],
        lt = self.info.lottery_type;
      for (var i = 0, len = wagers.length; i < len; i++) {
        //--胜负过关只处理足球赛事
        if (lt != 'WL' || lt == 'WL' && wagers[i].intro.no && wagers[i].intro.no.has('足球')) {
          // match_id.push(wagers[i].itou_id);
          match_id.push(wagers[i].id);
        }
      }
      if (match_id.length == 0) {
        return Promise.reject();
      }
      var maps = {
        jc: 'jczq',
        dc: 'dc'
      };
      return itou.get({
        url: 'livescore/matchlist',
        data: {
          match_id: match_id.join(','),
          match_type: lt == 'WL' ? 'wl' : maps[self.info.match_type] || 'jczq'
        },
        noToast: true
      });
    };
    self.getGoals_jclq = function () {
      var wagers = self.info.wagers,
        match_id = [],
        lt = self.info.lottery_type;
      for (var i = 0, len = wagers.length; i < len; i++) {
        //--胜负过关只处理足球赛事
        if (lt != 'WL' || lt == 'WL' && wagers[i].intro.no && wagers[i].intro.no.has('足球')) {
          // match_id.push(wagers[i].itou_id);
          if (wagers[i].id > 0) {
            match_id.push(wagers[i].id);
          }
        }
      }
      if (match_id.length == 0) {
        return Promise.reject();
      }
      return itou.get({
        // url: "livescore/basketmatchlist",
        url: 'livescore/matchlist',
        data: {
          // lottery_no: lottery_no.join(","),
          match_id: match_id.join(','),
          match_type: 'jclq'
        }
      });
    };
    self.getDefaultStation = function (money) {
      //--获取默认店铺
      return itou.get({
        url: 'shop/getMyRecommStation',
        data: {
          lottery_type: self.info.lottery_type,
          money: money
        }
      });
    };
    self.checkPingjia = function (project_id) {
      //--检查是否已经评价店铺
      return itou.get({
        url: 'comment/CheckAdd',
        data: {
          project_id: project_id
        }
      });
    };
    self.jiajiang = null;
    self.getJiajiang = function () {
      return itou.get({
        url: 'project/getjiajiang',
        data: {
          lottery_type: self.info.lottery_type
        }
      }).then(function (data) {
        self.jiajiang = data.data;
      });
    };
    self.getJiangjinList = function () {
      //--获取中奖的详细列表
      return itou.get({
        url: 'project/prizedetail',
        data: {
          project_id: self.project_id
        }
      }).then(function (data) {
        if (data && data.prize_info && self.jiangjinList.length == 0) {
          var info = data.prize_info,
            pt = info.play_type || '';
          if (!pt.has('LX')) {
            var r = {
              game: info.play_type_text,
              zhushu: info.right_count,
              money: info.raw_prize
            };
            self.jiangjinList.push(r);
          } else {
            var maps = self.info.maps,
              hit = info.hit_detail;
            for (var i in hit) {
              var r = {
                game: self.info.config[maps[i]].name,
                zhushu: hit[i]
              };
              if (!self.jiajiang) {
                //--没有加奖信息
                r['money'] = self.info.config[maps[i]].bonus * hit[i];
              } else {
                var jiangjin = self.jiajiang[pt],
                  prize = jiangjin[i].prize * 1 + jiangjin[i].add * 1; //--加奖
                r['money'] = prize * hit[i];
              }
              self.jiangjinList.push(r);
            }
          }
        }
        self.isShowJiangjin = true;
      });
    };
    self.wxinit = function () {
      //--微信接口初始化
      if (vm.Action.share) {
        return Gray.$plugin['init.js']();
      } else {
        var defer = $.Deferred();
        defer.resolve();
        return defer.promise();
      }
    };
    self.getJiangjin = function (data) {
      //--获取奖金，这个异步加载要在点击选择赛事后，延时调用
      var token = itou.getToken(),
        t = Math.floor(Math.random() * 1000);
      self.hasGetJiangjin = 'start';
      data.project_id = self.project_id;
      return itou.get({
        url: 'evaluate',
        data: JSON.stringify(data),
        type: 'POST',
        processData: false,
        formatResult: false
      });
    };
    self.hasDefault = function () {
      return itou.get({
        url: 'user/GetDefaultStation',
        data: {},
        formatResult: false,
        autocache: true,
        sessionCache: true
      });
    };
    self.getGuanzhu = function () {
      //--获取是否关注公众号
      return itou.get({
        url: 'user/IsSubscribe',
        data: {
          project_id: self.project_id
        },
        formatResult: false
      }).then(function (result) {
        try {
          self.guanzhu = result.data.is_subscribe == 1;
        } catch (error) {}
      });
    };
    self.doCancelDepute = function () {
      //--执行撤单
      return itou.get({
        url: 'project/cancelDepute',
        data: {
          project_id: self.project_id
        }
      }).then(function () {
        var shops = itou.localJson.getJson('__cancelDepute_stationInfo') || {};
        shops[self.project_id] = {
          //--
          name: self.info.shop.name,
          id: self.info.shop.id
        };
        itou.localJson.setJson('__cancelDepute_stationInfo', shops, 24 * 3600); //--缓存撤单店铺信息
      });
    };

    self.setDefault = function () {
      //--设置默认店铺
      return itou.get({
        url: 'shop/setmystation',
        data: {
          station_user_id: self.info.shop.id
        }
      }).then(function (data) {
        self.isHasDefault = true;
      });
    };

    // 保本数据弹层
    self.isShowbonusModal = false;
  };
  //--将数据格式化，使之可以在评测接口使用
  model.prototype.formatForPingce = function () {
    var self = this,
      info = self.info,
      data = info.data,
      match_list = data.match_list || {},
      match_seq = data.match_seq || [],
      wagers = data.wagers || [],
      wager = wagers[0].wager || [],
      abs = wagers[0].abs || '',
      o = {},
      wg = {},
      num = 0,
      type = data.lottery_type.has('Mix') ? 'mixed' : 'single',
      isBasket = jingcaiLanqiuTypes.contains(data.lottery_type); //--是否是竞彩篮球
    abs = abs ? abs.split(',') : [];
    wager = wager.split(';');
    wager.each(function (v) {
      var val = v.split(':');
      wg[val[0]] = val[1].split(',');
      return v;
    });
    o.lotteryType = data.lottery_type;
    o.passTypes = data.pass_type;
    o.requiredIndex = [];
    o.optionalIndex = [];
    o.minRequiredSetCount = abs.length;
    o.maxRequiredSetCount = abs.length;
    o.multiple = data.wagers[0].multiple;
    o.matches = [];
    if (!itou.outil.is(match_list, 'Array')) {
      for (var i in match_list) {
        var ob = {},
          item = match_list[i],
          list = item.list,
          odds = {},
          odds1 = {},
          game = null; //--单一投注时的玩法
        if (abs.contains(i)) {
          o.requiredIndex.push(num);
        } else {
          o.optionalIndex.push(num);
        }
        num += 1;
        ob.sn = i;
        ob.prized = item.is_prize == '1';
        ob.hitSet = [];
        ob.spArray = [];
        ob.rqArray = '';
        for (var x in list) {
          var opt = list[x],
            oodds = type == 'single' ? opt.odds : opt.odds_mix;
          if (type == 'single') {
            //--单一模式的时候，获取唯一的玩法名称
            game = x;
          }
          if (opt.lottery_result == 'Delay') {
            if (type == 'single') {
              ob.hitSet = ob.hitSet.concat(wg[i].each(function (val) {
                if (!isBasket) {
                  return $.lottery.jingcai.football.outil.singleToMixed(game, val);
                } else {
                  return $.lottery.jingcai.basketball.singleToMixed(game, val);
                }
              }));
            } else {
              ob.hitSet = ob.hitSet.concat(wg[i]);
            }
          } else if (opt.lottery_result) {
            ob.hitSet.push(opt.lottery_result_mix);
          }
          odds = $.extend({}, odds, oodds);
          if (!isBasket && (x == 'SportteryWDL' || x == 'WDL')) {
            // odds1 = oodds;
            ob.rqArray = 'A:' + (opt.boundary > 0 ? '+' + opt.boundary : opt.boundary);
          }
          if (isBasket && x == 'SportteryHWL') {
            // odds1 = oodds;
            ob.rqArray = 'Y:' + (opt.boundary > 0 ? '+' + opt.boundary : opt.boundary);
          }
        }
        ob.hitSet = ob.hitSet.uniquelize(); //--唯一化
        for (var x = 0, y = wg[i].length; x < y; x++) {
          var z = wg[i][x];
          if (type == 'single') {
            if (!isBasket) {
              var z_mixed = $.lottery.jingcai.football.outil.singleToMixed(game, z);
            } else {
              var z_mixed = $.lottery.jingcai.basketball.singleToMixed(game, z);
            }
          } else {
            var z_mixed = z;
          }
          if (odds[z]) {
            ob.spArray.push(z_mixed + ':' + odds[z]);
          }
          // if(odds1[z]){
          // 	ob.rqArray.push(z_mixed + ":" + odds[z]);
          // }
        }

        ob.hitSet = ob.hitSet.join(',');
        ob.spArray = ob.spArray.join(';');
        // ob.rqArray = ob.rqArray.join(";");
        o.matches.push(ob);
      }
    }
    o.requiredIndex = o.requiredIndex.join(',');
    o.optionalIndex = o.optionalIndex.join(',');
    return o;
  };
  model.prototype.doShowYouhua = function () {
    var self = this;
    self.showYouhua = !self.showYouhua;
  };
  model.prototype.formatEvaluateFromApi = function (data) {
    //--处理奖金测评数据
    var self = this,
      hrm = data.data.hrm,
      o = {};
    o.max = 0;
    o.min = 0;
    o.hasDan = true;
    o.list = [];
    if (data.code != '200') {
      return o;
    }
    for (var i in hrm) {
      o.hasDan = !(i == '0'); //--是否是胆拖投注
      var a = hrm[i];
      for (var ii in a) {
        var b = a[ii],
          obj = {};
        o.max = o.max > b.max ? o.max : b.max; //--获取最大奖金
        o.min = o.min == 0 ? b.min : o.min < b.min ? o.min : b.min; //--获取最小金额
        obj.dan = i;
        obj.tuo = ii;
        obj.max = b.max;
        obj.min = b.min;
        o.list.push(obj);
      }
    }
    //console.log(o);
    return o;
  };
  var computed = {
    //--vm计算
    qiInfo: function qiInfo() {
      var self = this,
        $data = self.$data,
        info = $data.info,
        r = info.schedule.no + '期';
      if (info.zhui > 1) {
        r += ' 追<span class=\'fontred\'>' + info.zhui + '</span>期';
      }
      // console.log(info.zhui > 1 && info.jiangjin < 0);
      if (info.zhui > 1 && info.jiangjin < 0) {//--多期购买奖金前端计算
        // info.zhuiMoneyCompute();
      }
      return r;
    },
    pJiangjin: function pJiangjin() {
      //--预计奖金、中奖金额、实票奖金展示信息
      var self = this,
        $data = self.$data,
        info = $data.info,
        isfollow = info.schedule.isfollow,
        //--是否是跟单方案
        r = {};
      // r.show = info.jiangjin > 0 || (info.jiangjin < 0 && info.pingceJiangjin);
      // console.log("self.hasGetJiangjin = ", self.hasGetJiangjin);
      // console.log("info.pingceJiangjin = ", info.pingceJiangjin);
      // console.log("typeof info.pingceJiangjin = ", typeof info.pingceJiangjin);
      // console.log("info.duijiang = ", info.duijiang);
      // console.log("info.jiangjin = ", info.jiangjin);
      info.pingceJiangjin = (info.pingceJiangjin + '').replace(/[a-zA-Z\s]/g, '');
      // console.log("info.pingceJiangjin = ", info.pingceJiangjin);
      r.show = false;
      r.text = '';
      r.money = '';
      if (info.duijiang >= 0) {
        //--已兑奖
        r.show = true;
        if (isfollow && info.profitNum > 0) {
          //--盈利跟单
          if (info.award - info.money > 0.1) {
            //--盈利
            r.text = '实兑奖金：';
            r.money = (info.award * 1).toFixed(2);
          } else {
            //--未盈利
            r.text = '实票奖金：';
            r.money = (info.duijiang * 1).toFixed(2);
          }
        } else {
          //--非盈利跟单
          r.text = '实票奖金：';
          r.money = (info.duijiang * 1).toFixed(2);
        }
      } else if (info.jiangjin > 0) {
        r.show = true;
        r.text = '预计奖金：';
        r.money = (info.jiangjin * 1).toFixed(2);
      } else if (info.jiangjin < 0 && !!info.pingceJiangjin) {
        r.show = true;
        r.text = '理论最高奖金：';
        r.money = (info.pingceJiangjin * 1).toFixed(2);
      } else if (self.hasGetJiangjin == 'start' && info.jiangjin < 0 && !info.pingceJiangjin) {
        r.text = '正在加载';
        var key = 'project_details_evaluate_key';
        itou.outil.timmer.clearTimmer(key);
        itou.outil.timmer.newTimmer({
          key: key,
          timeout: 5000,
          fun: function fun() {
            itou.outil.timmer.clearTimmer(key);
            self.hasGetJiangjin = 'end';
          }
        });
      } else if (self.hasGetJiangjin == 'end' && info.jiangjin < 0 && !info.pingceJiangjin) {
        r.text = '加载失败';
      } else if (info.jiangjin == 0) {
        r.text = '未中奖';
      }
      return r;
    },
    guessOneInfo: function guessOneInfo() {
      var wagers = this.info.wagers || [];
      var schedule = this.info.schedule || {};
      var manner = this.info.manner;
      var hideNo = this.info.hideNo;
      var r = {};
      if (manner == 7) {
        var main, guess; //--主赛事,匹配赛事
        wagers.forEach(function (item) {
          if (item.no == hideNo) {
            guess = item;
          } else {
            main = item;
          }
        });
        if (!guess || !main) {
          return r;
        }
        r.teamName = guess.intro.hostName; //--匹配赛事主队名
        r.pankou = guess.list.SportteryWDL.pankou;
        if (r.pankou == -1) {
          r.info1 = "\u5982[".concat(r.teamName, "]\u80DC\uFF0C\u5219\u9009\u9879\u201C\u80DC\u201D\u547D\u4E2D");
          r.info2 = "\u5982[".concat(r.teamName, "]\u5E73\u6216\u8D1F\uFF0C\u5219\u9009\u9879\u201C(<cite class=\"fontred\">-1</cite>)\u8D1F\u201D\u547D\u4E2D");
        } else {
          r.info1 = "\u5982[".concat(r.teamName, "]\u8D1F\uFF0C\u5219\u9009\u9879\u201C\u8D1F\u201D\u547D\u4E2D");
          r.info2 = "\u5982[".concat(r.teamName, "]\u80DC\u6216\u5E73\uFF0C\u5219\u9009\u9879\u201C(<cite class=\"fontgreen\">+1</cite>)\u80DC\u201D\u547D\u4E2D");
        }
        if (main.intro.bifen != 'VS') {
          //--主赛事已经有结果
          var _win = false;
          for (var key in main.list) {
            //--检查主赛事是否命中
            main.list[key].opts.forEach(function (opt) {
              if (opt.w == 'win') {
                _win = true;
              }
            });
          }
          console.log(_win);
          if (guess.intro.bifen == 'VS' && _win) {
            var dateTime = new Date((schedule.dateTime || '').replace(/-/g, '/'));
            var now = new Date();
            var diff = (dateTime - now) / 1000;
            if (diff > 0) {
              var h = Math.floor(diff / 3600);
              var n = Math.floor(diff % 3600 / 60);
              if (h > 0 || n > 0) {
                r.last = '等待匹配场次开奖，预计还剩';
                h > 0 ? r.last += h + '时' : '';
                n > 0 ? r.last += n + '分' : '';
              }
            } else {
              r.last = '等待匹配场次开奖';
            }
          }
        }
      }
      return r;
    }
  };
  var methods = {
    //--vm方法
    showYingli: function showYingli() {
      this.$refs.layer.alert.show({
        title: '盈利佣金是什么？',
        text: '推荐内容是发起人的重要研究成果，发起人可以设置是否收取盈利佣金。盈利佣金是跟单人的方案中奖后，在［税后奖金－本金］后的盈利部分中提取一定比例给到发起人，跟单人实兑奖金为［税后奖金－盈利佣金］后的金额，跟单中奖盈利需大于等于1元才能收取佣金。',
        buttons: [{
          text: '知道了'
        }]
      });
    },
    gotoGendan: function gotoGendan() {
      if (!this.isRcmd) {
        return;
      }
      var id = this.project_id,
        p_uuid = this.p_uuid;
      Gray.$page.loadPage("/project/gendan/?id=".concat(id, "&p_uuid=").concat(p_uuid, "&back=").concat(window.backurl));
    },
    toRcmd: function toRcmd() {
      var self = this,
        $data = self.$data;
      itou.baiduHm('全网推荐活动', '方案内访问'); //--百度统计
      Gray.$page.loadPage('/activity/rcmd/?id=' + $data.info.shop.id + '&activity=' + this.rcmd_id + '&back=' + self.backurl);
    },
    actuvity_go: function actuvity_go() {
      Gray.$page.loadPage(this.$data.activity_url);
    },
    gotoPay: function gotoPay() {
      var self = this,
        $data = self.$data,
        url = '/project/pay/?id=' + $data.info.shop.id;
      url += '&back=' + window.backurl;
      Gray.$page.loadPage(url);
    },
    tijiaocaidian: function tijiaocaidian() {
      var self = this,
        $data = self.$data;
      // if($data.info.status.chedan.done){
      // 	self.doAgain();
      // 	return;
      // }
      if ($data.info.deny_count >= 3) {
        //--被撤单或者拒接次数超过3次
        self.showMsgBox('请勿反复操作方案，如需要请重新选单！');
        return false;
      }
      var shops = itou.localJson.getJson('__cancelDepute_stationInfo') || {},
        shop = shops[$data.project_id] || {};
      // if(shop && shop.id && shop.name){//--是否经过撤单
      // 	self.showConfirmBox("本方案您已从［" + shop.name + "］撤单，您希望继续提交到此彩店吗？", "提交彩店", "resubmit_cancel", "resubmit_ok", "更换彩店提交", "继续提交");
      // }else{
      var localData = itou.localData.getData('__sys_lottery_type').key;
      localData.v = info.lottery_type;
      localData.money = info.money;
      itou.localData.setData('__sys_lottery_type', {
        key: localData
      });
      Gray.$page.loadPage('/confirm/?id=' + $data.project_id + '&p_uuid=' + $data.p_uuid + '&back=' + window.backurl);
      // }
    },

    closePayScanAlert: function closePayScanAlert() {
      //--关闭扫码付款提示信息
      var self = this;
      self.showPayScanAlert = false;
      itou.localData.setData('project_detail_showPayScanAlert_new', {
        key: false
      });
    },
    show: function show(key) {
      var self = this,
        $data = self.$data;
      if (key != 'dp') {
        $data.currShow = key || null;
      } else {
        self.showcontact({
          vm: self,
          station_user_id: self.info.shop.id
        });
      }
    },
    gotoPingjia: function gotoPingjia() {
      var self = this,
        $data = self.$data;
      if ($data.info.tousu.pass_7day) {
        self.showMsgBox('方案已结束超过7天，投诉入口已关闭。');
        return false;
      } else if ($data.info.tousu.hasTousu) {
        self.showMsgBox('您之前提交投诉尚未处理完毕，请等待我们的答复。');
        return false;
      }
      self.tousu();
    },
    gotoShop: function gotoShop() {
      var self = this,
        $data = self.$data,
        id = $data.info.shop ? $data.info.shop.id : 0;
      var uuid = $data.info.station_uuid || '';
      //--因为店铺详情页需要调用微信接口，因此不可以使用地址栏参数，需要使用本地JSON存储
      //--过渡：为将来用uuid完全替换数字id做准备
      itou.localJson.setJson('/user/shop/details/', {
        'id': id,
        uuid: uuid
      });
      Gray.$page.loadPage('/user/shop/details/');
    },
    tousu: function tousu() {
      var self = this,
        $data = self.$data,
        id = $data.info.shop ? $data.info.id : 0;
      // itou.localJson.delJson('/user/shop/details/');
      // itou.localJson.setJson('/project/detail/', {'id': id});
      //--过渡：为将来用uuid完全替换数字id做准备
      var uuid = $data.info.station_uuid || '';
      itou.localJson.setJson('/user/shop/details/', {
        'id': $data.info.shop.id,
        uuid: uuid
      });
      Gray.$page.loadPage('/user/shop/complain/?back=' + self.backurl);
    },
    pingjia: function pingjia() {
      var self = this,
        $data = self.$data,
        id = $data.project_id;
      $data.checkPingjia(id).then(function () {
        Gray.$page.loadPage('/user/shop/evaluation/add/?project_id=' + id + '&station_user_id=' + $data.info.shop.id + '&back=' + self.backurl);
      });
    },
    showStatus: function showStatus() {
      var self = this,
        $data = self.$data,
        id = $data.project_id,
        apiData = $data.info.data,
        depute_info = apiData.depute_info,
        pre_prize_time = apiData.pre_prize_time,
        station_user_id = $data.info.shop.id,
        ticket_code_params = {}; //--取票码所需参数通过地址栏参数传递
      ticket_code_params.project_id = id;
      ticket_code_params.station_user_id = station_user_id;
      ticket_code_params.pre_prize_time = pre_prize_time;
      ticket_code_params.depute_info = {
        order_status: depute_info.order_status || '0',
        cash_status: depute_info.cash_status || '0',
        get_ticket_status: depute_info.get_ticket_status || '0'
      };
      // console.log(JSON.stringify(ticket_code_params));return;
      var tcParams = escape(JSON.stringify(ticket_code_params));
      var url = '/project/status/?id=' + id + '&tcParams=' + tcParams + '&back=' + self.backurl;
      if ($data._pmn) {
        url += '&_pmn=' + $data._pmn;
      }
      Gray.$page.loadPage(url);
    },
    //--检查是否符合跟单推荐的要求
    checkTuijian: function checkTuijian() {
      var self = this;
      //--弹出错误信息
      function showError(errmsg) {
        var text = [];
        text.push('<div style="text-align: left">');
        if (errmsg) {
          text.push('具体原因为：<br />');
          errmsg.forEach(function (val) {
            text.push('<cite style="color:red">• ' + val + '</cite><br />');
          });
        } else {
          text.push('您当前方案不符合要求，不能发起推荐！<br />');
        }
        text.push('</div>');
        self.$refs.layer.alert.error({
          title: '抱歉，发起推荐失败！',
          text: text.join(''),
          buttons: [{
            text: '知道了'
          }]
        });
      }
      //--调用接口检查本方案是否可以发起跟单
      return itou.get({
        url: 'recommend/checkLimit',
        data: {
          station_user_id: self.info.shop.id,
          project_id: self.info.id
        },
        specialErr: {
          '-11': function _(rlt) {
            var msg;
            if (rlt.data && rlt.data.limits) {
              msg = rlt.data.limits;
            }
            showError(msg);
          },
          '-12': function _(rlt) {
            //--重复发起跟单
            var dk_station_id = Gray.$page.getUrlParam('dk_station_id'),
              link = '/project/gendan/?id=' + self.project_id;
            link += '&p_uuid=' + self.p_uuid;
            link += '&back=' + window.backurl;
            if (dk_station_id) {
              link += '&dk_station_id=' + dk_station_id;
            }
            self.$refs.layer.confirm.error({
              text: rlt.msg,
              buttons: [{
                text: '关闭'
              }, {
                text: '查看跟单详情',
                fun: function fun() {
                  Gray.$page.loadPage(link);
                }
              }]
            });
          }
        }
      });
    },
    gotoTuijian: function gotoTuijian() {
      //--添加推荐
      var self = this,
        schedule = self.info.schedule,
        hasTuijian = schedule.isTuijian; //--是否已推荐
      if (!hasTuijian) {
        self.checkTuijian() //--检查是否可以发起跟单
        .then(function (data) {
          return self.doGotoTuijian();
        });
      } else {
        self.doGotoTuijian();
      }
    },
    doGotoTuijian: function doGotoTuijian() {
      var self = this,
        schedule = self.info.schedule,
        hasTuijian = schedule.isTuijian,
        //--是否已推荐
        pingceJiangjin = self.info.pingceJiangjin,
        money = self.info.schedule.money,
        id = self.info.id,
        p_uuid = self.info.p_uuid;
      if (!hasTuijian) {
        //--为进行推荐
        var url = '/precommend/share/';
      } else {
        var url = '/precommend/confirmshare/';
      }
      url += '?id=' + id;
      url += '&p_uuid=' + p_uuid;
      url += pingceJiangjin ? '&prize=' + pingceJiangjin : '';
      url += money ? '&money=' + money : '';
      url += '&back=' + self.backurl;
      //--分区键定位店铺ID
      var dk_station_id = Gray.$page.getUrlParam('dk_station_id');
      if (dk_station_id) {
        url += '&dk_station_id=' + dk_station_id;
      }
      Gray.$page.loadPage(url);
    },
    gotoBj11x5: function gotoBj11x5() {
      var self = this,
        $data = self.$data,
        lottery_type = $data.info.lottery_type;
      // if($data.info.shop.hasShop){
      // 	var backurl = "/user/shop/details/?id=" + $data.info.shop.id;
      // }else{
      // 	var backurl = "/";
      // }
      var cache = itou.localJson.getJson('/user/shop/details/') || {};
      var backurl;
      if (cache.id) {
        backurl = '/user/shop/details/?id=' + cache.id;
        if (cache.uuid) {
          backurl += '&station_uuid=' + cache.uuid;
        }
      } else {
        backurl = '/';
      }
      backurl = encodeURIComponent(backurl);
      var maps = {
        'ToTo': '/zucai/',
        //--足彩14场
        'NineToTo': '/zucai/ren9/',
        //--足彩任9
        'SuperLotto': '/dlt/',
        //--大乐透
        'KL8': '/kl8/',
        //--快乐8
        'SSQ': '/ssq/',
        //--双色球
        'P3': '/p3/',
        //--排列三
        '3D': '/3d/',
        //--3d
        'P5': '/p5/',
        //--排列五
        'P7': '/qixingcai/',
        //--七星彩
        'NP7': '/np7/',
        //--新七星彩
        'WDL': '/danchang/',
        //--北单胜平负
        'Score': '/danchang/bifen/',
        //--北单比分
        'HalfFull': '/danchang/banquan/',
        //--北单半全场
        'TotalGoals': '/danchang/jinqiu/',
        //--北单总进球
        'WL': '/danchang/guoguan/',
        //--胜负过关
        'OverUnder': '/danchang/danshuang/' //--上下单双
      };

      if (maps[lottery_type]) {
        Gray.$page.loadPage(maps[lottery_type] + '?back=' + backurl);
        return;
      }
      if ($data.jingcaiTypes.contains(lottery_type)) {
        //--竞彩足球跳转
        if (self.info.manner == 7) {
          Gray.$page.loadPage('/jingcai/guessone/?back=' + backurl);
          return;
        }
        Gray.$page.loadPage('/jingcai/?back=' + backurl);
        return;
      }
      if ($data.jingcaiLanqiuTypes.contains(lottery_type)) {
        //--竞彩篮球跳转
        Gray.$page.loadPage('/jingcailanqiu/?back=' + backurl);
        return;
      }
      var opts = $.lottery.select11_5.$config[lottery_type];
      var lottery_type = opts.lottery_type;
      var $lottery_type = lottery_type.v;
      if (!$lottery_type) {
        Gray.$page.loadPage('/');
        return;
      }
      var map = lottery_type.map;
      if (map) {
        Gray.$page.loadPage('/' + map + '/?back=' + backurl);
      } else {
        Gray.$page.loadPage('/');
      }
    },
    showJiangjin: function showJiangjin() {
      var self = this,
        $data = self.$data,
        id = $data.project_id;
      if ($data.isShowJiangjin == true) {
        $data.isShowJiangjin = false;
        return;
      }
      if ($data.jiangjinList.length > 0) {
        $data.isShowJiangjin = true;
      } else {
        $data.getJiajiang().then(function () {
          $data.getJiangjinList();
        });
      }
    },
    showShareInfo: function showShareInfo() {
      var self = this,
        $data = self.$data;
      $data.isShowShareInfo = !$data.isShowShareInfo;
      // self.showShareImg();
    },

    doAgain: function doAgain() {
      //--再来一单
      var self = this,
        $data = self.$data,
        lottery_type = $data.info.lottery_type;
      // if($data.info.shop.hasShop){
      // 	var backurl = "/user/shop/details/?id=" + $data.info.shop.id;
      // }else{
      // 	var backurl = "/";
      // }
      var cache = itou.localJson.getJson('/user/shop/details/') || {};
      var backurl;
      if (cache.id) {
        backurl = '/user/shop/details/?id=' + cache.id;
        if (cache.uuid) {
          backurl += '&station_uuid=' + cache.uuid;
        }
      } else {
        backurl = '/';
      }
      backurl = encodeURIComponent(backurl);
      if ($data.jingcaiTypes.contains(lottery_type)) {
        //--竞彩足球跳转
        if (self.info.manner == 7) {
          Gray.$page.loadPage('/jingcai/guessone/?back=' + backurl);
          return;
        }
        Gray.$page.loadPage('/jingcai/?back=' + backurl);
        return;
      }
      if ($data.jingcaiLanqiuTypes.contains(lottery_type)) {
        Gray.$page.loadPage('/jingcailanqiu/?back=' + backurl);
        return;
      }
      var maps = {
        'ToTo': '/zucai/',
        //--足彩14场
        'NineToTo': '/zucai/ren9/',
        //--足彩任9
        'SuperLotto': '/dlt/',
        //--大乐透
        'SSQ': '/ssq/',
        //--双色球
        'KL8': '/kl8/',
        //--快乐8
        'P3': '/p3/',
        //--排列三
        '3D': '/3d/',
        //--3d
        'P5': '/p5/',
        //--排列五
        'P7': '/qixingcai/',
        //--七星彩
        'NP7': '/np7/',
        //--新七星彩
        'WDL': '/danchang/',
        //--北单胜平负
        'Score': '/danchang/bifen/',
        //--北单比分
        'HalfFull': '/danchang/banquan/',
        //--北单半全场
        'TotalGoals': '/danchang/jinqiu/',
        //--北单总进球
        'WL': '/danchang/guoguan/',
        //--胜负过关
        'OverUnder': '/danchang/danshuang/' //--上下单双
      };
      // console.log(lottery_type, maps[lottery_type])
      if (maps[lottery_type]) {
        //--大乐透
        Gray.$page.loadPage(maps[lottery_type] + '?back=' + backurl);
        return;
      }
      var config = $.lottery.select11_5.$config[lottery_type];
      // console.log(config);return;
      if (config && config.lottery_type.map) {
        Gray.$page.loadPage('/' + config.lottery_type.map + '/?back=' + backurl);
      } else {
        Gray.$page.loadPage('/');
      }
    },
    showPingce: function showPingce() {
      //--显示奖金评测
      var self = this,
        $data = self.$data;
      info = $data.info; //console.log("奖金评测");
      if (info.jiangjin >= 0 || info.hasYouhua) {
        return;
      }
      if (!$data.jingcaiTypes.contains($data.info.lottery_type) && !danchang.contains($data.info.lottery_type) && !$data.jingcaiLanqiuTypes.contains($data.info.lottery_type)) {
        return;
      }
      var data = info.data;
      if (!data.wagers || !data.wagers.length) {
        //--选号内容保密
        if (data.recommend_info) {
          //--跟单方案
          $data.info.pingceJiangjin = data.recommend_info.pre_p;
        } else if (data.share_buy_info) {
          //--合买方案
          $data.info.pingceJiangjin = data.share_buy_info.t_prize;
        } else if (data.follow_info) {
          //--跟单后的保密方案
          $data.info.pingceJiangjin = data.follow_info.pre_p;
        }
        self.hasGetJiangjin = 'end';
        return;
      }
      // if(!info.isDanchang && info.dataType != 'jingcaiLanqiu'){//--竞彩足球奖金计算
      if (info.dataType != 'jingcaiLanqiu') {
        //--竞彩足球奖金计算
        if (data.wagers && data.wagers.length > 0) {
          $data.info.pingceJiangjin = jingcaiComputer.getMaxMoneyProjectDetail({
            match_list: data.match_list,
            wagers: data.wagers,
            abs: data.wagers && data.wagers[0] && data.wagers[0].abs || '',
            dc: info.isDanchang
          });
        }
        // console.log($data.info.pingceJiangjin);
        self.hasGetJiangjin = 'end';
        return;
      } else if (info.dataType == 'jingcaiLanqiu') {
        //--竞彩篮球奖金计算
        if (data.wagers && data.wagers.length > 0) {
          $data.info.pingceJiangjin = jingcaiComputer.getMaxMoneyProjectDetail({
            match_list: data.match_list,
            wagers: data.wagers,
            jclq: true
          });
        }
        // console.log($data.info.pingceJiangjin);
        self.hasGetJiangjin = 'end';
        return;
      }
      var r = $data.formatForPingce();
      console.log('奖金评测', r);
      $data.getJiangjin(r).then(function (data) {
        var o = $data.formatEvaluateFromApi(data);
        if (danchang.contains($data.info.lottery_type)) {
          var fanjianglv = 1;
        } else {
          var fanjianglv = 1;
        }
        $data.info.pingceJiangjin = (o.max * fanjianglv).toFixed(2);
        self.hasGetJiangjin = 'end';
        // if($data.info.pingceJiangjin > 5000000){
        // 	$data.info.pingceJiangjin = (5000000).toFixed(2);
        // }
      });
    },

    doShowYouhua: function doShowYouhua() {
      var self = this,
        $data = self.$data;
      $data.doShowYouhua();
    },
    showHistory: function showHistory() {
      itou.baiduHm('跟单方案', '历史战绩点击'); //--百度统计
      var self = this,
        id = self.info.id,
        url = '/precommend/detail/';
      url += '?id=' + id;
      url += '&p_uuid=' + self.info.p_uuid;
      url += '&back=' + self.backurl;
      Gray.$page.loadPage(url);
    },
    showGendan: function showGendan() {
      var self = this,
        id = self.info.schedule.fid,
        url = '/project/gendan/';
      // url = "/precommend/detail/";
      url += '?id=' + id;
      url += '&p_uuid=' + self.info.schedule.fUuid;
      url += '&back=' + self.backurl;
      Gray.$page.loadPage(url);
    },
    gotoMatch: function gotoMatch(item, sport) {
      //--查看战绩分析
      var self = this,
        $data = self.$data,
        lottery_type = $data.info.lottery_type,
        matchid = item.id;
      if (!matchid) {
        return;
      }
      if (item.reversion) {
        var msg = '<span class=\'fontred\'>您将要打开的数据页面中，主客场位置与当前投注页相反，</span>投注时请确认主客队位置，一旦提交，我们将按照您的所选选项执行。<br />';
        vm.showMsgBox(msg, '重要提醒', 'beforeGotoMatch_close', '确定');
        vm.$on('msgbox_close', function (msg) {
          if (msg == 'beforeGotoMatch_close') {
            goto_match();
          }
        });
      } else {
        goto_match();
      }
      function goto_match() {
        if ($data.jingcaiTypes.contains(lottery_type) || lottery_type.has('ToTo') || sport == '足球') {
          //--竞彩足球跳转
          var lotteryId = 90;
          var lottStyle = 'jczq';
          if ($data.jingcaiTypes.contains(lottery_type)) {
            lotteryId = 90;
            lottStyle = 'jczq';
          } else if (lottery_type.has('ToTo')) {
            lotteryId = 10;
            lottStyle = 'zc';
          } else if (danchang.contains(lottery_type)) {
            lotteryId = 45;
            lottStyle = 'dc';
          }
          // Gray.$page.loadPage("/match/history/?doreset=1&lotteryId="+lotteryId+"&matchid=" + matchid + "&back=" + this.backurl);
          Gray.$page.loadPage('/match2/?pageName=history&matchid=' + matchid + '&lotteryId=' + lotteryId + '&lottStyle=' + lottStyle + '&back=' + this.backurl);
          return;
        }
        if ($data.jingcaiLanqiuTypes.contains(lottery_type) || sport == '篮球') {
          //--竞彩篮球跳转
          Gray.$page.loadPage('/match/jingcailanqiu/history/?matchid=' + matchid + '&lottStyle=jclq&back=' + window.backurl);
          return;
        }
      }
    },
    doCopyBalls: function doCopyBalls() {
      var self = this,
        $data = self.$data,
        info = $data.info;
      info.copyBalls();
      Gray.$page.loadPage('/confirm/basket/fast/?docopy=1&back=' + self.backurl);
    },
    doChedan: function doChedan() {
      //--实行撤单操作
      var self = this,
        $data = self.$data,
        msg = '撤回后将变为无效方案，店主将无法查看内容以及提供店内服务，是否确认撤回？';
      self.showConfirmBox(msg, '撤回方案？', '', 'beforeChedan_ok', '确认', '取消');
    },
    // showBind: function(){
    // 	var self = this,
    // 		$data = self.$data;
    // 	if($data.info.bind.name){
    // 		$data.info.bind.text = "您当前已经绑定彩店［" + $data.info.bind.name + "］，确认绑定将自动替换绑定对象，是否确认绑定？";
    // 	}else{
    // 		$data.info.bind.text = "绑定本店后，后续选号提交可直接到店，让您出票更快。";
    // 	}
    // 	$data.info.bind.show = true;
    // },
    // closeBind: function(){
    // 	var self = this,
    // 		$data = self.$data;
    // 	$data.info.bind.show = false;
    // },
    // dosetDefault: function(){
    // 	var self = this,
    // 		$data = self.$data;
    // 	if($data.data.isDefault == "1"){
    // 		$data.cancelDefault()
    // 			.then(function(){
    // 				$data.info.shop.isDefault = false;
    // 				self.showMsgBox("取消默认店铺成功！");
    // 			});
    // 	}else{
    // 		$data.setDefault()
    // 			.then(function(){
    // 				if(!self.Action.guanzhu){
    // 					var defer = $.Deferred();
    // 					defer.resolve();
    // 					return defer.promise();
    // 				}
    // 				return $data.getGuanzhu()
    // 					.then(function(){
    // 						var arr = [];
    // 						arr.push("<div class='pad305 bgfff mb10 gray5 textl botder_b'>");
    // 						arr.push("<p class='mb6 line24'>关注微信服务号，随时找本店出票，中奖通知免费发送。</p>");
    // 						arr.push("</div>");
    // 						arr.push("<div class='pad505 bgfff textc border_t'>");
    // 						arr.push("<div class='font12 gray8b line18'>长按下面二维码<br/>选择“识别图中二维码”<br/>即可关注<br/><br/></div>");
    // 						arr.push("<div class='layer_koudaiimg'><img src='"+ self.codeimg + "' alt='口袋好店'></div>");
    // 						arr.push("</div>");
    // 						arr = arr.join("");
    // 						try {
    // 							if($data.guanzhu){
    // 								self.showMsgBox("感谢您将［" + $data.info.shop.name + "］设为默认出票彩店，后续提交将可直达本店。", "绑店成功");
    // 							}else{
    // 								self.showMsgBox(arr, "绑店成功", "", "暂不关注");
    // 							}
    // 						} catch (error) {
    // 							self.showMsgBox(arr, "绑店成功", "", "暂不关注");
    // 						}
    // 					});
    // 			});
    // 	}
    // 	$data.info.bind.show = false;
    // },
    showJCJJintro: function showJCJJintro() {
      var self = this;
      // var title = "奖金说明",
      // 	intro = [];
      // intro.push("<div style='text-align:left'>");
      // intro.push("<p><strong>什么是理论最高奖金？</strong></p>");
      // intro.push("<p>开奖前方案理论最大可中奖的奖金，理论最高奖金包含兼中兼得的情况。</p>");
      // intro.push("<p><strong>什么是预计奖金？</strong></p>");
      // intro.push("<p>开奖后根据出票时的口袋好店奖金指数计算得出，另外预计奖金为税后奖金。</p>");
      // intro.push("<p><strong>什么是实票奖金？</strong></p>");
      // intro.push("<p>您持票到店兑奖后，店主为方案标识的实际兑付奖金为实票奖金。</p>");
      // intro.push("<p><strong>实票奖金与预计奖金为什么有差异？</strong></p>");
      // intro.push("<p>产生差异的原因有两个，一是口袋好店奖金指数较彩票机有一定的延时，二是店主在打票期间奖金指数发生变化，因此方案奖金以实票为准，口袋好店预计奖金仅供参考。</p>");
      // intro.push("</div>");
      // self.showMsgBox(intro.join(""), title, "", "知道了");
      self.show('JCJJintro');
    },
    doCountDowm: function doCountDowm() {
      //--保存的方案，方案码有效期倒计时
      var self = this,
        info = self.info,
        num = info.pcode_t,
        key = '_pcode_countDowm_key',
        r = {},
        str = '<cite class=\'fontred\'>hh</cite>小时<cite class=\'fontred\'>nn</cite>分<cite class=\'fontred\'>ee</cite>秒';
      r.gray = false;
      if (info.project_type == 'save' && !!info.station_uid) {
        if (num > 0) {
          r.text = '请到店展示方案码，距失效还剩' + itou.outil.numToTime(num, str);
          itou.outil.timmer.newTimmer({
            key: key,
            timeout: 1000,
            fun: function fun() {
              num -= 1;
              if (num > 0) {
                r.text = '请到店展示方案码，距失效还剩' + itou.outil.numToTime(num, str);
              } else {
                itou.outil.timmer.clearTimmer(key);
                r.text = '方案码已失效，请重新生成保存方案';
                r.gray = true;
              }
            }
          });
        } else {
          r.text = '方案码已失效，请重新生成保存方案';
          r.gray = true;
        }
      }
      info.pcode_countDowm = r;
    },
    emptyFun: function emptyFun() {}
  };
  window.Project = {
    model: model,
    computed: computed,
    methods: methods
  };
})();

/***/ })

/******/ });