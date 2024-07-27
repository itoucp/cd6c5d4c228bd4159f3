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
/******/ 		64: 0
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
/******/ 	deferredModules.push([231,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_model_chatroom_websocket_chatroom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);

/**
 * 微信C端		比分直播数据原型
 * by	zhaoyf		2017-07-13 14:38:56
 */

;
(function () {
  /**
   * 页面基本设置信息
   * @param {object} Model 页面主题Model对象实例
   * 用来保存数据原型需要的基本设置信息
   */
  var Setting = function Setting(Model) {
    var $setting = {};
    $setting.basket = {}; //--竞彩篮球设置信息
    $setting.basket.status = {
      //--竞彩篮球状态信息设置，status与状态的对应关系
      '0': '开始',
      '13': '第一节',
      '14': '第二节',
      '15': '第三节',
      '16': '第四节',
      '20': '开始',
      '30': '暂停',
      '31': '半场',
      '40': '加时赛',
      '60': '延期',
      '70': '取消',
      '100': '完',
      '110': '加时完'
    };
    $setting.football = {}; //--竞彩足球设置信息
    $setting.football.status = {
      //--竞彩足球状态信息设置，status与状态的对应关系
      '-1': '无直播',
      0: '未知',
      1: '未开始',
      2: '完场(加)',
      3: '暂停',
      4: '加时',
      5: '延期',
      6: '推迟',
      7: '取消',
      8: '弃赛',
      9: '中断',
      10: '待定',
      11: '腰斩',
      12: '进行中',
      13: '上半场',
      14: '下半场',
      15: '中场',
      16: '等待加时赛',
      17: '加时赛中场',
      18: '等待点球后决胜',
      19: '加时',
      20: '加时上半场',
      21: '加时下半场',
      22: '第一节',
      23: '第一节完',
      24: '点球',
      25: '第二节',
      26: '第二节完',
      27: '第三节',
      28: '第三节完',
      29: '第四节',
      30: '第四节完',
      31: '按计划进行',
      32: '已经在计划中但比赛时间未确定',
      33: '完场',
      34: '完场(点球)'
    };
    $setting.football.type = {
      //--竞彩足球类型信息设置，type与类型的对应关系
      '30': '进球',
      '10': '进球',
      '20': '点球',
      '11': '乌龙',
      '45': '两黄变红',
      '50': '红牌',
      '40': '黄牌'
    };
    $setting.order = {
      //--选项排列顺序
      jingcai: ['SportteryNWDL', 'SportteryWDL', 'SportteryScore', 'SportteryTotalGoals', 'SportteryHalfFull'],
      jingcailq: ['SportteryHWL', 'SportteryBS', 'SportteryWL', 'SportteryWS'],
      danchang: ['NWDL', 'WDL', 'Score', 'TotalGoals', 'HalfFull', 'OverUnder']
    };
    $(function () {
      var r = {},
        jingcai_config = itou.setting.getData('jingcai_config_opts'),
        jingcailq_config = itou.setting.getData('jingcailq_config_opts'),
        danchang_config = itou.setting.getData('danchang_config_opts');
      for (var i in jingcai_config) {
        //--竞彩足球玩法映射关系
        var pt = jingcai_config[i].single;
        var obj = {};
        for (var ii in pt) {
          obj[pt[ii]] = ii;
        }
        r[i] = obj;
      }
      $setting.jingcai = r;
      r = {};
      for (var i in jingcailq_config) {
        //--竞彩篮球玩法映射关系
        var pt = jingcailq_config[i].single;
        var obj = {};
        for (var ii in pt) {
          if (ii == '主胜') {
            obj[pt[ii]] = '胜';
          } else if (ii == '客胜') {
            obj[pt[ii]] = '负';
          } else {
            obj[pt[ii]] = ii;
          }
        }
        r[i] = obj;
      }
      $setting.jingcailq = r;
      r = {};
      for (var i in danchang_config) {
        //--竞彩篮球玩法映射关系
        var pt = danchang_config[i].single;
        var obj = {};
        for (var ii in pt) {
          if (ii == '主胜') {
            obj[pt[ii]] = '胜';
          } else if (ii == '客胜') {
            obj[pt[ii]] = '负';
          } else {
            obj[pt[ii]] = ii;
          }
        }
        r[i] = obj;
      }
      $setting.danchang = r;
    });
    return $setting;
  };

  /**
   * 工具对象
   * @param {object} Model 页面主题Model对象实例 
   */
  var Outil = function Outil(Model) {
    var key = Model.currPage.key; //--jingcai || jingcailq || zucai || jingcai_end || jingcailq_end || zucai_end
    var outil = function outil() {};
    /**
     * 比分转换为对应选项code
     * @param {object} params 比分选项，数据形式
     * {
     * 	pt: ,//--玩法
     * 	type: "mixed || single",
     * 	fullgoal: {host:, guest:},//--全场比分
     * 	halfgoal: {host:, guest:},//--半场比分
     * 	pk: -1//--盘口
     * }
     */
    outil.prototype.goalToCode = function (params) {
      var self = this,
        jingcai_config = itou.setting.getData('jingcai_config_opts'),
        jingcailq_config = itou.setting.getData('jingcailq_config_opts'),
        danchang_config = itou.setting.getData('danchang_config_opts'),
        key = params.key || Model.currPage.key,
        pt = params.pt,
        type = params.type,
        full = params.fullgoal,
        half = params.halfgoal,
        pk = params.pk,
        r = [];
      var opts;
      if (key == 'jingcai' || key == 'zucai') {
        opts = jingcai_config[pt][type];
      } else if (key == 'danchang') {
        opts = danchang_config[pt][type];
      } else if (key == 'jingcailq') {
        opts = jingcailq_config[pt][type];
      }
      if (!opts) {
        return r;
      }
      switch (pt) {
        case 'NWDL': //--北京单场胜平负
        case 'WL': //--胜负过关
        case 'SportteryNWDL':
          //--竞彩足球胜平负
          var obj = {};
          if (full.host > full.guest) {
            obj.k = '胜';
          } else if (full.host < full.guest) {
            obj.k = '负';
          } else {
            obj.k = '平';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'WDL': //--北京单场让球胜平负
        case 'SportteryWDL':
          //--竞彩足球让球胜平负
          var obj = {};
          if (full.host * 1 + pk * 1 > full.guest) {
            obj.k = '胜';
          } else if (full.host * 1 + pk * 1 < full.guest) {
            obj.k = '负';
          } else {
            obj.k = '平';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'TotalGoals': //--北京单场总进球
        case 'SportteryTotalGoals':
          //--竞彩足球总进球
          var obj = {},
            sum = full.host * 1 + full.guest * 1;
          if (sum >= 7) {
            obj.k = '7+';
          } else {
            obj.k = sum + '球';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'OverUnder':
          var obj = {},
            sum = full.host * 1 + full.guest * 1;
          if (sum >= 3) {
            obj.k = '上';
          } else {
            obj.k = '下';
          }
          if (sum % 2 == 0) {
            obj.k += '双';
          } else {
            obj.k += '单';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'Score': //--北京单场比分
        case 'SportteryScore':
          //--竞彩足球比分
          var obj = {},
            key = full.host + ':' + full.guest;
          if (opts[key]) {
            obj.k = key;
          } else if (full.host > full.guest) {
            obj.k = '胜其他';
          } else if (full.host < full.guest) {
            obj.k = '负其他';
          } else {
            obj.k = '平其他';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'HalfFull': //--北京单场比分
        case 'SportteryHalfFull':
          //--竞彩足球比分
          var obj = {};
          if (half.host > half.guest) {
            obj.k = '胜';
          } else if (half.host < half.guest) {
            obj.k = '负';
          } else {
            obj.k = '平';
          }
          if (full.host > full.guest) {
            obj.k += '/胜';
          } else if (full.host < full.guest) {
            obj.k += '/负';
          } else {
            obj.k += '/平';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'SportteryWL':
          //--竞彩篮球胜负
          var obj = {};
          if (full.host > full.guest) {
            obj.k = '胜';
          } else {
            obj.k = '负';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'SportteryHWL':
          //--竞彩篮球让胜负
          var obj = {};
          if (full.host * 1 + pk * 1 > full.guest) {
            obj.k = '胜';
          } else {
            obj.k = '负';
          }
          obj.c = opts[obj.k];
          r.push(obj);
          break;
        case 'SportteryBS':
          //--竞彩篮球大小分
          var obj = {};
          if (full.host * 1 + full.guest * 1 > pk * 1) {
            obj.k = '大分';
          } else {
            obj.k = '小分';
          }
          obj.c = opts[obj.k];
          obj.k = obj.k.replace('分', '于');
          r.push(obj);
          break;
        case 'SportteryWS':
          //--竞彩篮球胜分差,*h代表主胜，*g代表客胜
          var obj = {},
            diff = full.host * 1 - full.guest * 1,
            index = Math.floor((Math.abs(diff) - 0.1) / 5),
            arr = ['1-5', '6-10', '11-15', '16-20', '21-25', '26+'];
          obj.k = arr[index];
          obj.k += diff > 0 ? '*h' : '*g';
          obj.c = opts[obj.k];
          obj.k = (diff > 0 ? '主胜' : '客胜') + obj.k;
          obj.k = obj.k.replace('*h', '').replace('*g', '');
          r.push(obj);
          break;
        default:
          break;
      }
      return r;
    };
    return new outil();
  };

  /**
   * 当前页面基础信息
   * @param {object} Model 页面主题Model对象实例 
   */
  var CurrPage = function CurrPage(Model) {
    // var key = Model.currPage.key;
    itou.dataModel.config({
      //--页面基础信息数据对象
      key: 'zhibo_page',
      opts: {
        maps: {
          t: '映射关系',
          k: '',
          d: function d() {
            var r = {};
            r['jingcai_end'] = '/livescore/jingcai/end/';
            r['jingcai'] = '/livescore/jingcai/';
            r['jingcailq_end'] = '/livescore/jingcailq/end/';
            r['jingcailq'] = '/livescore/jingcailq/';
            r['zucai_end'] = '/livescore/zucai/end/';
            r['zucai'] = '/livescore/zucai/';
            r['danchang_end'] = '/livescore/danchang/end/';
            r['danchang'] = '/livescore/danchang/';
            return r;
          }
        },
        key: {
          t: '页面标识',
          k: '',
          d: function d(data, me) {
            var url = Gray.$page.href || window.location.href,
              key = 'jingcai',
              maps = me.maps;
            for (var i in maps) {
              if (url.has(maps[i])) {
                key = i;
                break;
              }
            }
            return key;
          }
        },
        searchApi: {
          t: '检索选项接口映射',
          k: '',
          d: function d(data, me) {
            var r = {
              jingcai_end: 'match/finishleaguelist',
              jingcai: 'match/scoreleaguelist',
              jingcailq_end: 'match/finishleaguelist',
              jingcailq: 'match/scoreleaguelist',
              zucai_end: 'zucai/finishleaguelist',
              zucai: 'zucai/scoreleaguelist',
              danchang_end: 'dc/finishleaguelist',
              danchang: 'dc/scoreleaguelist'
            };
            return r[me.key];
          }
        },
        projectApi: {
          t: '方案信息接口映射',
          k: '',
          d: function d(data, me) {
            var r = {
              jingcai: 'livescore/jclist',
              jingcailq: 'livescore/jclist',
              zucai: 'livescore/zclist',
              danchang: 'livescore/dclist'
            };
            return r[me.key];
          }
        },
        timediff: {
          t: '时间修正值',
          k: '',
          d: function d(data, me) {
            var r = {};
            r.num = 0;
            var defer = $.Deferred();
            defer.resolve();
            r.promise = defer.promise();
            return r;
          }
        }
      }
    });
    var currPage = itou.dataModel.dataFactory.create('zhibo_page'); //--页面基础信息对象构造函数创建
    currPage.prototype.getTimediff = function () {
      var self = this,
        key = self.key,
        r = {};
      r.num = 0;
      if (key == 'jingcai' || key == 'zucai' || key == 'danchang' || key == 'jingcailq') {
        r.promise = itou.get({
          url: 'livescore/currenttime',
          data: {}
        }).then(function (data) {
          var serverDate = new Date(data),
            browserDate = new Date();
          // console.log(browserDate, serverDate);
          r.num = browserDate - serverDate;
        });
      } else {
        var defer = $.Deferred();
        defer.resolve();
        r.promise = defer.promise();
      }
      self.timediff = r;
    };
    return new currPage();
  };

  /**
   * 缓存信息数据原型创建函数
   * @param {object} Model 页面主题Model对象实例
   * 用于保存页面检索项信息
   */
  var Cache = function Cache(Model) {
    var key = Model.currPage.key;
    itou.dataModel.config({
      //--缓存数据对象
      key: 'zhibo_cache',
      opts: {
        selected: {
          t: '被选中的标签',
          k: '',
          d: function d() {
            var s = itou.sessionData.getData('__zhibo_selected_search_' + key).data || {};
            return s;
          }
        }
      }
    });
    var cache = itou.dataModel.dataFactory.create('zhibo_cache'); //--缓存对象构造函数创建
    cache.prototype.doSave = function (k, val) {
      //--保存缓存
      var self = this;
      if (k && val) {
        self.selected[k] = val;
      }
      itou.sessionData.setData('__zhibo_selected_search_' + key, {
        data: self.selected
      });
    };
    cache.prototype.clear = function () {
      //--清除缓存
      var self = this;
      self.selected = {};
      self.doSave();
    };
    return new cache();
  };

  /**
   * 页面检索数据原型创建函数，所有页面公用
   * @param {object} Model 页面主题Model对象实例
   * 依赖cache对象
   */
  var Search = function Search(Model) {
    var key = Model.currPage.key; //--jingcai || jingcailq || zucai || jingcai_end || jingcailq_end || zucai_end
    itou.dataModel.config({
      //--检索对象
      key: 'zhibo_search',
      opts: {
        page: {
          t: '页面展示相关数据',
          k: '',
          d: function d() {
            var r = {};
            r.isShow = false;
            r.isAll = false; //--是否是全选
            return r;
          }
        },
        opts: {
          t: '所有选项',
          k: '',
          d: []
        },
        selected: {
          t: '选中的选项',
          k: '',
          d: function d() {
            var cache = Model.cache || {},
              s = cache.selected.search || [];
            return s;
          }
        },
        temp: {
          t: '临时选中数据',
          k: '',
          d: function d(data, me) {
            return me.selected;
          }
        },
        jddPage: {
          t: '调用奖多多接口的页面',
          k: '',
          d: ['jingcailq', 'jingcai', 'zucai', 'danchang']
        }
      }
    });
    var search = itou.dataModel.dataFactory.create('zhibo_search'); //--检索对象构造函数创建
    search.prototype.getInfo = function (url, data) {
      //--获取检索项数据
      var self = this,
        jddPage = self.jddPage; //--调用奖多多接口的页面
      if (jddPage.indexOf(key) != -1) {
        var defer = $.Deferred();
        defer.resolve();
        return defer.resolve();
      } else {
        return self.__getInfo(url, data);
      }
    };
    search.prototype.__getInfo = function (url, data) {
      //--获取检索项数据
      var self = this,
        tap = Model.tap;
      url = url || Model.currPage.searchApi;
      data = data || {};
      if (key.has('jingcailq')) {
        data.jc_type = 'basket';
      }
      if ((key == 'jingcai_end' || key == 'jingcailq_end') && tap) {
        data.date_list = tap.curr;
      }
      if ((key == 'zucai_end' || key == 'danchang_end') && tap) {
        data.lottery_no = tap.curr;
      }
      return itou.get({
        url: url,
        data: data,
        apiType: 'itApi'
      }).then(function (data) {
        self.opts = data.league_list;
        return self.checkData(); //--检查冗余数据
      });
    };

    search.prototype.checkData = function () {
      //--检查选中数据，移除冗余数据
      var self = this,
        s = self.selected,
        o = self.opts;
      if (self.page.isAll) {
        self.selected = self.opts.slice(0);
      } else {
        for (var i = s.length - 1; i >= 0; i--) {
          if (o.indexOf(s[i]) == -1) {
            s.splice(i, 1); //--移除冗余
          }
        }
      }
    };

    search.prototype.selectAll = function (type) {
      //--全选、反选；type == true，全选；type == false，反选
      var self = this;
      if (type) {
        self.temp = self.opts.slice(0); //--全选
      } else {
        self.temp = Array.minus(self.opts, self.temp); //--反选
      }
    };

    search.prototype.doSelect = function (opt) {
      //--选中/取消选择数据
      var self = this,
        s = self.temp,
        i = s.indexOf(opt);
      if (i == -1) {
        s.push(opt); //--选中选项
      } else {
        s.splice(i, 1); //--取消选中
      }
    };

    search.prototype.show = function (act) {
      //--展示/隐藏检索层
      var self = this;
      if (act == true) {
        //--强制展开
        self.page.isShow = true;
      } else if (act == false) {
        //--强制关闭
        self.page.isShow = false;
      } else {
        self.page.isShow = !self.page.isShow; //--显示隐藏切换
      }

      if (self.page.isShow) {
        self.temp = self.selected.slice(0); //--更新临时选择数据
      }
    };

    search.prototype.ok = function () {
      //--执行查询
      var self = this;
      self.selected = self.temp.slice(0); //--更新选择数据
      var diff = Array.minus(self.opts, self.selected);
      self.page.isAll = diff.length == 0;
      self.show(false);
      var defer = $.Deferred();
      defer.resolve();
      return defer.resolve();
    };
    search.prototype.cancel = function () {
      //--取消查询
      var self = this;
      self.temp = self.selected.slice(0); //--更新临时选择数据
      self.show(false);
    };
    return new search();
  };

  /**
   * 购买信息弹窗数据原型创建函数，比分直播页面公用
   * @param {object} Model 页面主题Model对象实例
   */
  var Project = function Project(Model) {
    var key = Model.currPage.key; //--jingcai || jingcailq || zucai
    itou.dataModel.config({
      //--方案行对象
      key: 'zhibo_project_item_' + key,
      opts: {
        id: {
          t: '方案ID',
          k: 'project_id',
          d: ''
        },
        p_uuid: {
          t: '方案ID',
          k: 'p_uuid',
          d: '0'
        },
        time: {
          t: '创建时间',
          k: '',
          d: function d(data, me) {
            var time = data.info.create_time;
            return time.Dateformat('mm-dd HH:NN');
          }
        },
        intro: {
          t: '采种及彩金',
          k: '',
          d: function d(data, me) {
            var r = [],
              lt = data.lottery_type;
            r.push('购买');
            if (lt == 'ToTo') {
              r.push('任选9 ');
            } else if (lt == 'NineToTo') {
              r.push('足彩14场 ');
            }
            r.push(data.money + '元');
            return r.join('');
          }
        },
        opts: {
          t: '所有选中项',
          k: '',
          d: function d(data, me) {
            var r = {};
            r.hit = 0;
            r.opts = {};
            if (data.net_prize == 0) {
              return r;
            }
            var outil = Model.outil,
              project = Model.project,
              no = project.curr.no,
              info = data.info,
              wagers = info.wagers[0].wager.split(';'),
              odds = info.odds[no],
              match_list = info.match_list[no],
              list = match_list.list,
              wager = [];
            for (var i = 0, len = wagers.length; i < len; i++) {
              var o = wagers[i].split(':');
              if (o[0] == no) {
                wager = o[1].split(',');
                break;
              }
            }
            var d = {};
            d.pt = ''; //--玩法
            d.type = project.type;
            d.fullgoal = project.goal.full; //--全场比分
            d.halfgoal = project.goal.half; //--半场比分
            d.pk = ''; //--盘口
            // console.log(wager);
            for (var i in list) {
              d.pt = i;
              d.pk = list[i].boundary;
              var rlt = outil.goalToCode(d)[0]; //console.log(i, rlt)
              if (wager.indexOf(rlt.c) > -1) {
                rlt.odds = odds[rlt.c];
                rlt.pk = d.pk;
                if (rlt.pk > 0 && i != 'SportteryBS') {
                  rlt.pk = '+' + rlt.pk;
                }
                if (rlt.pk != 0 && key != 'jingcailq') {
                  rlt.k = '(' + rlt.pk + ')' + rlt.k;
                } else if (rlt.pk != 0) {
                  rlt.k += '(' + rlt.pk + ')';
                }
                r.opts[i] = rlt;
                r.hit += 1;
              }
            }
            return r;
          }
        },
        prize: {
          t: '奖金',
          k: '',
          d: function d(data, me) {
            var r = null;
            r = data.net_prize;
            return r;
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('zhibo_project_item_' + key); //--方案行对象构造函数创建
    itou.dataModel.config({
      //--方案行对象
      key: 'zhibo_project_' + key,
      opts: {
        team: {
          t: '队伍信息',
          k: '',
          d: function d(data, me) {
            var r = {
              host: '',
              guest: ''
            };
            return r;
          }
        },
        goal: {
          t: '比分信息',
          k: '',
          d: function d(data, me) {
            var r = {
              half: {
                host: 0,
                guest: 0
              },
              full: {
                host: 0,
                guest: 0
              }
            };
            return r;
          }
        },
        curr: {
          t: '当前数据行item对象',
          k: '',
          d: {}
        },
        type: {
          t: '单一还是混合',
          k: '',
          d: 'single'
        },
        list: {
          t: '所有方案列表',
          k: '',
          d: []
        },
        page: {
          t: '页面信息',
          k: '',
          d: function d(data, me) {
            var r = {};
            r.isShow = false;
            return r;
          }
        }
      }
    });
    var project = itou.dataModel.dataFactory.create('zhibo_project_' + key); //--方案行对象构造函数创建
    project.prototype.getList = function (item) {
      //--通过接口获取方案信息
      var self = this,
        url = Model.currPage.projectApi,
        data = {};
      // console.log(item);
      if (!item.project.isHas) {
        var defer = $.Deferred();
        defer.reject();
        return defer.promise();
      }
      self.curr = item;
      self.team.host = item.team.hostName;
      self.team.guest = item.team.guestName;
      self.goal.half.host = item.goal.half.host;
      self.goal.half.guest = item.goal.half.guest;
      self.goal.full.host = item.goal.full.host;
      self.goal.full.guest = item.goal.full.guest;
      if (key == 'jingcai' || key == 'jingcailq' || key == 'danchang') {
        data.bet_id = item.project.betId;
      } else if (key == 'zucai') {
        data.lottery_no = item.lottery_no;
      }
      return itou.get({
        url: url,
        data: data
      }).then(function (data) {
        self.getHit(data);
      });
    };
    project.prototype.getHit = function (data) {
      //--通过返回信息，获取可能中奖的项
      var self = this,
        list = data.list,
        r = [];
      for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].lottery_type.has('Mix')) {
          self.type = 'mixed';
        } else {
          self.type = 'single';
        }
        var it = new item(list[i]);
        r.push(it);
      }
      self.list = r; //console.log(r);
      self.show(true);
    };
    project.prototype.show = function (act) {
      //--展示/隐藏检索层
      var self = this;
      if (act == true) {
        //--强制展开
        self.page.isShow = true;
      } else if (act == false) {
        //--强制关闭
        self.page.isShow = false;
      } else {
        self.page.isShow = !self.page.isShow; //--显示隐藏切换
      }
    };

    return new project();
  };

  /**
   * 即时比分对象创建函数
   * @param {object} Model 页面主题Model对象实例
   * 用来呈现竞彩、篮彩、足彩即时比分列表
   * 关联对象Websocket实例，对象内数据会被Websocket实例根据推送消息改变
   * 主要列表数据包括 
   * 列表呈现数据：days: {day1: {title: "", list: []}}，用来呈现页面数据
   * 列表映射数据：maps:{matchID1: itemObj, matchID2: itemObj,}，用来便于数据提取
   */
  var LiveGoal = function LiveGoal(Model) {
    var key = Model.currPage.key; //--jingcai || jingcailq || zucai
    var isZucai = key == 'zucai',
      //--足彩页面
      isJingcai = key == 'jingcai'; //--竞彩页面
    var firstMatch = {
      type: '',
      //--live || unStart;进行中 或 未开始
      item: null
    }; //--页面展示的第一个元素（1.第一个正在进行的比赛；2.如果1不符合，就选第一个未开始的比赛）
    itou.dataModel.config({
      //--页面行数据对象
      key: 'zhibo_' + key + '_item',
      opts: {
        id: {
          t: '唯一标识，match_id',
          k: 'match_id',
          d: 0
        },
        //--包括推送信息在内的唯一标志
        no: {
          t: '唯一标识，serial_no',
          k: 'serial_no',
          d: 0
        },
        //--唯一标志
        lottery_no: {
          t: '唯一标识，lottery_no',
          k: 'lottery_no',
          d: 0
        },
        //--唯一标志
        sort1: {
          t: '排序',
          k: '',
          d: function d(data, me) {
            var sort = data.sort || '1';
            // me.no *= 1;
            return ('00' + sort).right(3);
          }
        },
        match_time: {
          t: '比赛时间',
          k: 'match_time',
          d: ''
        },
        time: {
          t: '比赛时间',
          k: '',
          d: function d(data, me) {
            var time = data.match_time + '';
            return time.Dateformat('HH:NN');
          }
        },
        project: {
          t: '是否有投注',
          k: '',
          d: function d(data, me) {
            var r = {};
            r.isHas = data.has_project != '0'; //--是否有投注
            if (isZucai) {
              //--投注ID
              r.betId = data.bet_id;
            } else {
              r.betId = data.bet_id_list;
            }
            return r;
          }
        },
        team: {
          t: '队伍信息',
          k: '',
          d: function d(data, me) {
            var r = {};
            r.hostName = (data.host_name_s + '').left(5);
            r.guestName = (data.guest_name_s + '').left(5);
            r.hostCard = {
              r: 0,
              y: 0
            }; //--主队红黄牌
            r.guestCard = {
              r: 0,
              y: 0
            }; //--客队红黄牌
            return r;
          }
        },
        league: {
          t: '赛事',
          k: '',
          d: function d(data, me) {
            var r = {},
              colors = data.league_color || ['#000;', '#000;'];
            r.name = data.league_name; //--赛事名称
            r.color = colors[0]; //--赛事字体颜色
            return r;
          }
        },
        goal: {
          t: '当前得分',
          k: '',
          d: function d(data, me) {
            var r = {},
              live = data.live || {},
              half = live.Period1 || {},
              //--半场比分
              full = live.Normaltime || {}; //--全场比分
            half.Team1 == 0 ? half.Team1 = '0' : '';
            half.Team2 == 0 ? half.Team2 = '0' : '';
            full.Team1 == 0 ? full.Team1 = '0' : '';
            full.Team2 == 0 ? full.Team2 = '0' : '';
            r.half = {};
            r.full = {};
            r.half.host = half.Team1 || data.half_host_goals || 0; //--半场主队得分
            r.half.guest = half.Team2 || data.half_guest_goals || 0; //--半场客队得分
            r.half.text = '(半' + r.half.host + ':' + r.half.guest + ')';
            r.full.host = full.Team1 || data.host_goals || 0; //--全场主队得分
            r.full.guest = full.Team2 || data.guest_goals || 0; //--全场客队得分
            if (key == 'jingcailq') {
              r.full.text = r.full.guest + ':' + r.full.host;
            } else {
              r.full.text = r.full.host + ':' + r.full.guest;
            }
            r.sum = r.full.host * 1 + r.full.guest * 1; //--全场总得分
            r.diff = Math.abs(r.full.host - r.full.guest); //--全场分差
            return r;
          }
        },
        status: {
          t: '当前状态',
          k: '',
          d: function d(data, me) {
            var r = me.getStatus(data);
            return r;
          }
        },
        event: {
          t: '全场事件',
          k: '',
          d: function d(data, me) {
            if (key == 'jingcailq') {
              return [];
            }
            var r = [],
              eventlist = data.eventlist || [],
              goal = {},
              id = me.id,
              isNew = id.length < 8;
            var maps = {
              // 0: '',
              1: '',
              //--普通进球
              // 2: '',
              3: '20',
              //--点球
              4: '11',
              //--乌龙球
              21: '50',
              //--红牌
              22: '40',
              //--黄牌
              23: '40' //--第二张黄牌
            };

            eventlist.splice(0, 1);
            for (var i = 0, len = eventlist.length; i < len; i++) {
              var event = eventlist[i];
              var obj = {};
              obj.time = event.time;
              obj.team = event.team;
              obj.pliyer1 = event.Player1 ? event.Player1.name || '' : '';
              if (isNew) {
                event.type_id = maps[event.type_id] || event.type_id;
              }
              // if (event.type_id != 60) {//--60为换人
              //     obj.pliyer2 = event.Player1 ? event.Player1.name || '' : '';
              // } else {
              //     obj.pliyer2 = event.Player2 ? event.Player2.name || '' : '';
              // }
              obj.pliyer1 = (obj.pliyer1 + '').left(8);
              // obj.pliyer2 = (obj.pliyer2 + '').left(8);
              if (event.type == 'goal') {
                if (event.type_id == 11) {
                  obj.color = 'red'; //--乌龙球为红色
                } else if (event.type_id == 20) {
                  obj.color = 'green'; //--点球为红色
                } else {
                  obj.color = 'gray'; //--进球为红色
                }

                goal[event.time] = true;
                r.push(obj);
              } else if (event.type == 'card') {
                if (event.team == 1) {
                  if (event.type_id == 40) {
                    me.team.hostCard.y += 1; //--主队黄牌+1
                  } else if (event.type_id == 50) {
                    me.team.hostCard.r += 1; //--主队红牌+1
                  }
                } else if (event.team == 2) {
                  if (event.type_id == 40) {
                    me.team.guestCard.y += 1; //--客队黄牌+1
                  } else if (event.type_id == 50) {
                    me.team.guestCard.r += 1; //--客队红牌+1
                  }
                }
              }
            }
            // console.log(me);
            return {
              isShow: false,
              list: r,
              goal: goal
            };
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('zhibo_' + key + '_item'); //--页面行对象构造函数创建
    item.prototype.getStatus = function (data) {
      //--获取状态信息
      var self = this,
        r = {},
        setting = Model.setting,
        is_prize = data.is_prize,
        // is_prize = 0,
        eventlist = data.eventlist || [],
        status = eventlist[0] || {};
      // status.Status = 7;
      console.log(data);
      r.code = is_prize == 1 ? '33' : status.Status; //--鉴于接口数据可能出现不一致的情况，增加is_prize作为判断条件，当is_prize为1时，强制设置状态为结束
      // r.showLink = r.code >= 0;//--是否显示直播链接
      r.showLink = r.code >= 1 && !key.has('jingcailq'); //--是否显示直播链接
      if (key == 'jingcai' || key == 'zucai' || key == 'danchang') {
        //--足球
        if (r.code == 33) {
          r.color = 'gray';
        } else if (r.code == 13 || r.code == 14) {
          r.color = 'blue';
        } else {
          r.color = 'green';
        }
        if (r.code >= 5 && r.code <= 11) {
          self.goal.half.host = '--'; //--半场主队得分
          self.goal.half.guest = '--'; //--半场客队得分
          self.goal.half.text = '(半 --:--)';
          self.goal.full.host = '--'; //--全场主队得分
          self.goal.full.guest = '--'; //--全场客队得分
          self.goal.full.text = '--:--';
        }
        // r.time = status.time_diff || 0;
        // console.log(JSON.stringify(status))
        if (status.time_diff || status.time_diff === 0) {
          r.time = status.time_diff;
        } else if (self.status && self.status.time) {
          r.time = self.status.time;
          status.time_diff = self.status.time;
        } else {
          r.time || (r.time = 0);
        }
        // console.log('r.time => ', r.time);
        // console.log('item.status => ', JSON.stringify(this.status));
        r.timestamp = new Date().DateAdd('n', r.time * -1); //--时间戳，用来计算时间差（值是客户端时间）
        var specialCode = {
          5: '延期',
          6: '推迟',
          7: '取消',
          8: '弃赛',
          9: '中断',
          10: '待定',
          11: '腰斩'
        };
        if (is_prize == 1) {
          //--鉴于接口数据可能出现不一致的情况，增加is_prize作为判断条件，当is_prize为1时，强制设置状态为结束
          r.text = setting.football.status[r.code] || '';
        } else {
          r.text = specialCode[r.code] || status.time_text || setting.football.status[r.code] || '';
        }
        // console.log(self.id, JSON.stringify(data), r.text);
        r.text = r.text.replace('上半场', '').replace('下半场', '');
        if (status.time_diff && !isNaN(status.time_diff) && !r.text) {
          r.text = status.time_diff + '\'';
        }
        r.code *= 1;
        // if([6, 7, 31, 33, 34, 40, 41, 42, 50].indexOf(r.code) > -1){
        if ([13, 14, 15].indexOf(r.code) > -1) {
          r.isLive = true;
          if ([13, 14, 16, 20, 21].indexOf(r.code) > -1 && status.time_text != '90\'') {
            self.startTimmer(r);
          }
        } else {
          r.isLive = false;
          itou.outil.timmer.clearTimmer('livegoal_item_' + self.id); //--清除计时器
        }
      } else {
        //--篮球
        if (r.code == 33) {
          r.color = 'gray';
        } else {
          r.color = 'green';
        }
        r.text = status.time_text || setting.basket.status[r.code] || '';
        if (r.code >= 22 && r.code <= 30) {
          r.isLive = true;
        } else {
          r.isLive = false;
        }
      }
      if (r.code <= 1) {
        //--是否未开始
        r.unStart = true;
      } else {
        r.unStart = false;
      }
      self.event = self.event || {};
      self.status = self.status || r;
      if (r.unStart && !firstMatch.item) {
        //--如果未找到正在进行的比赛，则记录第一个未开始的比赛；
        firstMatch.type = 'unStart';
        firstMatch.item = self;
      }
      if (r.isLive && firstMatch.type != 'live') {
        //--记录第一个正在进行的比赛
        firstMatch.type = 'live';
        firstMatch.item = self;
      }
      return r;
    };
    item.prototype.startTimmer = function (status) {
      var self = this,
        code = status.code,
        time = status.time,
        timestamp = status.timestamp,
        key = 'livegoal_item_' + self.id,
        clear = false;
      itou.outil.timmer.newTimmer({
        //--开始计时器
        key: key,
        timeout: 1000,
        fun: function fun() {
          var diff = timestamp.DateDiff('n', new Date());
          // console.debug("diff = ", diff);
          if ((code == 13 || code == 20) && diff >= 45) {
            //--上半场
            diff = 45;
            clear = true;
          } else if ((code == 14 || code == 21) && diff >= 90) {
            //--下半场
            diff = 90;
            clear = true;
          } else if (code == 16 && diff >= 120) {
            //--加时赛
            diff = 120;
            clear = true;
          }
          // console.debug("diff = ", diff);
          // if(code == 7){
          // 	diff += 45;
          // }else if(code == 40 || code == 41 || code == 42){
          // 	diff += 90;
          // }
          if (diff && status.time != diff) {
            //--更新当前时间状态
            status.time = diff;
            // status.text = status.text.split(/\d/)[0] + time + "'";
            status.text = diff + '\'';
          }
          if (clear) {
            itou.outil.timmer.clearTimmer(key); //--清除计时器
          }
        }
      });
    };

    item.prototype.showEvent = function () {
      //--展示/隐藏事件列表
      var self = this;
      self.event.isShow = !self.event.isShow;
    };
    var defer = $.Deferred();
    var promise = defer.promise();
    itou.dataModel.config({
      //--页面信息数据对象
      key: 'zhibo_' + key + '_list',
      opts: {
        // id: {t: "唯一标识，match_id", k: "match_id", d: 0},//--包括推送信息在内的唯一标志
        num: {
          t: '总数量',
          k: '',
          d: -1
        },
        lotteryId: {
          t: '',
          k: '',
          d: function d() {
            var lotteryId;
            if (key == 'jingcai') {
              lotteryId = 90;
            } else if (key == 'jingcailq') {
              lotteryId = '';
            } else if (key == 'danchang') {
              lotteryId = 45;
            } else {
              lotteryId = 10;
            }
            return lotteryId;
          }
        },
        loading: {
          t: '是否正在加载',
          k: '',
          d: false
        },
        maps: {
          t: '页面映射数据信息',
          k: '',
          d: function d(data, me) {
            //--页面映射数据信息
            var r = {};
            return r;
          }
        },
        defer: {
          t: '获取接口数据的promise',
          k: '',
          d: defer
        },
        promise: {
          t: '获取接口数据的promise',
          k: '',
          d: promise
        },
        days: {
          t: '页面数据信息',
          k: '',
          d: function d(data, me) {
            //--页面数据信息
            var r = [],
              list = key == 'zucai' ? data.list : data,
              lottery_no = data.lottery_no || {},
              num = 0;
            // console.log(Model.search.jddPage);
            var search = Model.search,
              isJddPage = search.jddPage.indexOf(key) != -1,
              selected = search.selected;
            if (isJddPage) {
              search.opts = [];
            }
            // console.log(search);
            function formatZucai(data) {
              for (var i in list) {
                console.log(i);
                var obj = {},
                  matchs = list[i];
                obj.isShow = true;
                obj.issue = i; //--期程
                obj.no = lottery_no[i];
                obj.title = i + '期';
                obj.list = [];
                for (var ii in matchs) {
                  var match = matchs[ii];
                  if (match && match.eventlist && match.eventlist[0]) {
                    var code = match.eventlist[0].Status;
                    if (code == '60') {
                      //--比赛延期，则不出现在列表中
                      continue;
                    }
                  } else {
                    //--没有赛事当前状态，则直接跳过
                    continue;
                  }
                  var it = new item(match);
                  var leagueName = it.league.name;
                  // console.log(leagueName);
                  if (isJddPage && search.opts.indexOf(leagueName) == -1) {
                    search.opts.push(leagueName);
                  }
                  if (selected.length == 0 || selected.indexOf(leagueName) != -1) {
                    num += 1;
                    obj.list.push(it);
                    var id = it.id;
                    me.maps[id] = it;
                  }
                }
                if (obj.list.length > 0) {
                  r.push(obj);
                }
              }
            }
            function formatJingcai(data) {
              var currTime = new Date();
              for (var i in list) {
                console.log(i);
                var obj = {},
                  matchs = list[i];
                obj.isShow = true;
                obj.issue = i; //--期程
                obj.no = lottery_no[i];
                // obj.issue_no = "";
                obj.title = (i + ' 00:00:00').Dateformat('yyyy-mm-dd 周ww');
                // obj.title = (i + "期");
                // obj.list = [];
                var noList = {};
                for (var ii = 0, len = matchs.length; ii < len; ii++) {
                  var match = matchs[ii];
                  if (match && match.eventlist && match.eventlist[0]) {
                    var code = match.eventlist[0].Status;
                    if (code == '60') {
                      //--比赛延期，则不出现在列表中
                      continue;
                    }
                  } else {
                    //--没有赛事当前状态，则直接跳过
                    continue;
                  }
                  var it = new item(match);
                  if (key != 'danchang') {
                    //--非单场不考虑期号影响
                    matchs[ii].issue_no = matchs[ii].date;
                  }
                  if (!noList[matchs[ii].issue_no]) {
                    noList[matchs[ii].issue_no] = [];
                  }
                  try {
                    // var match_time = (it.match_time + '').toDate();
                    // if(itou.outil.is(match_time, 'Date')){
                    // 	var diff = currTime.DateDiff('s', match_time);
                    // 	console.log(diff);
                    // 	if(diff >= -6*3600 && diff <= 24*3600){//--•取当前时间前6小时、后24小时范围的比赛
                    var leagueName = it.league.name;
                    // console.log(leagueName);
                    if (isJddPage && search.opts.indexOf(leagueName) == -1) {
                      search.opts.push(leagueName);
                    }
                    if (selected.length == 0 || selected.indexOf(leagueName) != -1) {
                      num += 1;
                      noList[matchs[ii].issue_no].push(it);
                      var id = it.id;
                      me.maps[id] = it;
                    }
                    // 	}
                    // }
                  } catch (error) {
                    console.error(error);
                  }
                }
                for (var i in noList) {
                  if (noList[i].length > 0) {
                    var o = $.extend({}, obj);
                    o.issue_no = i;
                    o.list = noList[i];
                    r.push(o);
                  }
                }
              }
            }
            if (key == 'jingcai' || key == 'danchang') {
              formatJingcai(data);
            } else {
              formatZucai(data);
            }
            me.num = num;
            return r;
          }
        },
        firstMatch: {
          t: '第一个正在比赛或未开始的比赛',
          k: '',
          d: firstMatch
        }
      }
    });
    var liveGoal = itou.dataModel.dataFactory.create('zhibo_' + key + '_list'); //--页面信息对象构造函数创建
    liveGoal.prototype.getList = function () {
      //--获取页面列表数据
      var self = this,
        search = Model.search,
        data = {},
        url = '';
      if (key == 'jingcai') {
        url = 'soccer/match/list/6';
        data.lotteryId = 90;
        // url = "match/score";
      } else if (key == 'jingcailq') {
        url = 'match/score';
        data.jc_type = 'basket';
      } else if (key == 'danchang') {
        url = 'soccer/match/list/6';
        data.lotteryId = 45;
        // url = "dc/score";
        // data.jc_type = "basket";
      } else {
        url = 'soccer/match/list/4';
        data.lotteryId = 10;
        // url = "zucai/score";
      }
      // data.league_name = JSON.stringify(search.selected);
      return itou.get({
        url: url,
        data: data,
        jdd: 'itou',
        apiType: 'match' //--使用接口的类型
        // showErr: true//--接口超时是否跳转错误页面
      }).then(function (data) {
        // data = tList;
        self.reload(data);
        console.log(data);
        if (window.vm.ascroll) {
          window.vm.ascroll.resetload();
        }
        self.defer.resolve();
        // console.log(self.defer.resolve);
        // console.log("liveGoal.prototype.getList: OK");
      });
    };

    liveGoal.prototype.showDays = function (index) {
      //--展示、隐藏赛事信息
      return;
      var self = this,
        day = self.days[index];
      if (day) {
        day.isShow = !day.isShow;
      }
    };
    liveGoal.prototype.doRefresh = function () {
      //--刷新页面数据
      var self = this;
      self.loading = true;
      $('.livescoremain').scrollTop(0);
      return self.getList() //--获取列表数据信息
      .then(function () {
        self.loading = false;
        self.scrollToLive();
      });
    };
    liveGoal.prototype.scrollToLive = function () {
      var self = this;
      var timeout = 200,
        num = self.num;
      try {
        timeout += Math.ceil(num / 100) * 100;
        window.setTimeout(function () {
          var lives = $('[data-live]').eq(0);
          if (lives.offset()) {
            var top = lives.offset().top - 100;
            console.log(top);
            $('.livescoremain').scrollTop(top);
          } else {
            var unstart = $('[data-unstart]').eq(0);
            if (unstart.offset()) {
              var top = unstart.offset().top - 100; //console.log(top);
              $('.livescoremain').scrollTop(top);
            }
          }
        }, timeout);
      } catch (error) {
        console.error(error.message);
      }
    };
    return new liveGoal();
  };

  /**
   * 页面推送对象创建函数
   * @param {object} Model 页面主题Model对象实例
   * 依赖/static/js/plugin/websocket-8057144886.js文件
   * 根据推送消息，对LiveGoal的数据进行调整，跟新页面显示
   */
  var Websocket = function Websocket(Model) {
    var key = Model.currPage.key; //--jingcai || jingcailq || zucai
    var isZucai = key == 'zucai',
      //--足彩页面
      isJingcai = !isZucai; //--竞彩页面
    itou.dataModel.config({
      //--推送对象
      key: 'zhibo_websocket_' + key,
      opts: {
        issue: {
          t: '期次',
          k: '',
          d: []
        },
        ws: {
          t: '会话对象',
          k: '',
          d: []
        },
        onbeforeunload: {
          t: 'window的onbeforeunload事件',
          k: '',
          d: function d(data, me) {
            var ws = me.ws;
            window.onbeforeunload = function () {};
          }
        },
        events: {
          t: '事件id是否已存在',
          k: '',
          d: {}
        }
      }
    });
    var websocket = itou.dataModel.dataFactory.create('zhibo_websocket_' + key); //--推送对象构造函数创建
    // websocket.prototype.getWs = function () {
    //     var self = this,
    //         // issue = self.issue;
    //         url = config.api_jdd_ws + 'dec?app=com.jdd.itou&token=';

    //     // url += 'b119666f52e07a520a2f2cf2b8a67dc1';
    //     // var socket = new SockJS(url),
    //     // stompClient = Stomp.over(socket);
    //     // self.ws = stompClient;
    //     return itou.outil.getWsToken()
    //         .then(token => {
    //             url += token;
    //             var socket = new SockJS(url),
    //             stompClient = Stomp.over(socket);
    //             self.ws = stompClient;
    //         });
    // };
    websocket.prototype.init = function () {
      var self = this;
      self.ws = new _js_model_chatroom_websocket_chatroom_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
      self.ws.open({
        name: 'jdd_score',
        group: 'jingcaizuqiu'
      }, {
        onmessage: function onmessage(data) {
          // console.log(data);
          var rlt = (data === null || data === void 0 ? void 0 : data.js) || {};
          if (rlt.data && rlt.data.enableState) {
            var className = rlt.className;
            if (className) {
              var type = className.split('.').pop();
              var map = {
                GameDO: 1,
                GameFoulDO: 2,
                GameSubstituteDO: 3,
                GameGoalDO: 4,
                GamePeriodDO: 5,
                GameEventDO: 6
              };
              if (map[type]) {
                rlt.gamingEventType = map[type];
              }
            }
            self.footballMessage(rlt);
          }
        }
      });
      // function connect() {
      //     self.getWs()
      //         .then(() => {
      //             var stompClient = self.ws;
      //             console.log('+++++++现在开始连接+++++++');
      //             stompClient.connect({}, function(frame) {
      //                 // console.log(stompClient, 'connected');
      //                 stompClient.subscribe('/topic/soccer/event', function (msg) {
      //                     var rlt = msg.body;
      //                     if (rlt) {
      //                         rlt = JSON.parse(rlt);
      //                         //--websocket推送的数据 如果接收到enableState=0的 说明这一条是用来取消id相同的事件
      //                         if(rlt.data && rlt.data.enableState) {
      //                             self.footballMessage(rlt);
      //                         }
      //                     }
      //                 });
      //             }, function() {
      //                 console.warn('连接已断开。开始重新连接');
      //                 stompClient.disconnect();
      //                 connect();
      //             });
      //         });
      // }
      // connect();
    };

    websocket.prototype.footballMessage = function (rlt) {
      var data = rlt.data,
        gamingEventType = rlt.gamingEventType,
        timestamp = rlt.timestamp;
      //--1:比赛状态，比分变更事件
      //--2:犯规事件
      //--3:换人事件
      //--4:进球事件
      //--5:节次事件
      //--6:文字直播事件
      var eventsTypeText = {
        1: '比赛状态，比分变更事件',
        2: '犯规事件',
        3: '换人事件',
        4: '进球事件',
        5: '节次事件',
        6: '文字直播事件'
      };
      console.log('==========', '你有新的消息', '==========');
      console.log('消息类型', gamingEventType, eventsTypeText[gamingEventType]);
      if (gamingEventType == '4' || gamingEventType == '2' || gamingEventType == '1' || gamingEventType == '5') {
        var maps = Model.liveGoal.maps,
          id = data.gameId || data.id,
          item = maps[id];
        // console.log(Object.keys(maps));
        // console.log(id, item);
        if (item) {
          if (item.status.code == 33) {
            //--完场终止处理
            return;
          }
          //--红黄牌犯规
          if (gamingEventType == '2') {
            var teamSide = data.teamSide; //--所属主客, 1:主队 2:客队
            var foulType = data.foulType; //--犯规类型
            console.log('++++++++++犯规事件++++++++++');
            console.log('犯规类型', foulType);
            var team = {
              1: item.team.hostCard,
              2: item.team.guestCard
            };
            var card = {
              21: 'r',
              22: 'y',
              23: 'y'
            };
            if (team[teamSide] && card[foulType]) {
              team[teamSide][card[foulType]]++;
            }
          }
          //--进球
          if (gamingEventType == '4') {
            console.log('++++++++++进球事件++++++++++');
            console.log('比分', data.goalScore);
            var goalScore = data.goalScore.split(':');
            var enableState = data.enableState; //--是否取消上次事件
            var _id = data.id; //--事件ID
            var reiterated = item.event.list.some(function (e) {
              return e.id == _id;
            }); //--是否是重复的
            var _data$goalTime = data.goalTime,
              goalTime = _data$goalTime === void 0 ? 0 : _data$goalTime;
            var eventTime = Math.floor(goalTime / 60);
            var played = item.event.list.some(function (e) {
              return e.goalScore == data.goalScore && e.eventTime == eventTime;
            }); //--是否已播放弹层
            if (enableState == 1) {
              if (!reiterated) {
                var info = {
                    league: item.league.name,
                    // time: Math.floor(data.goalTime / 60) + '\'',
                    time: eventTime + '\'',
                    team: {
                      host: '',
                      guest: ''
                    },
                    goal: {
                      host: goalScore[0],
                      guest: goalScore[1]
                    }
                  },
                  toast = Model.toast;
                info.team.host = item.team.hostName;
                info.team.guest = item.team.guestName;
                if (!played) {
                  toast.appendInfo(info);
                }
                var _teamSide = data.teamSide;
                var goalType = data.goalType; //--直接进球、点球、乌龙
                var color = {
                  1: 'gray',
                  2: 'green',
                  3: 'red'
                };
                var event = {
                  team: _teamSide || '',
                  time: Math.floor(data.goalTime / 60),
                  pliyer1: data.goalPlayerName || '',
                  color: color[goalType] || 'gray',
                  id: _id,
                  goalScore: data.goalScore,
                  eventTime: eventTime
                };
                item.event.list.push(event);
              }
            } else {
              //--进球事件取消
              for (var i = item.event.list.length - 1; i >= 0; i--) {
                var _event = item.event.list[i];
                if (_event.id == _id) {
                  item.event.list.splice(i, 1);
                }
              }
            }
          }
          //--节次
          if (gamingEventType == '5') {
            console.log('++++++++++节次事件++++++++++');
            var periodType = data.periodType; //--节次类型；1上半场，2下半场
            var beginTime = data.beginTime; //--节次开始时间
            if (periodType == 1 || periodType == 2) {
              var diff = Math.floor((timestamp - beginTime) / (60 * 1000));
              if (periodType == 2) {
                diff += 45;
              }
              var r = item.getStatus({
                eventlist: [{
                  Status: item.status.code,
                  time_diff: diff || '',
                  time_text: ''
                }]
              });
              item.status = r;
            }
          }
          //--比赛状态，比分变更事件
          if (gamingEventType == '1') {
            console.log('++++++++++比赛状态，比分变更事件++++++++++');
            var r = item.getStatus({
              eventlist: [{
                Status: data.gameState,
                time_diff: data.eventTime || '',
                time_text: ''
              }]
            });
            // console.log(JSON.stringify(item.status))
            // console.log(JSON.stringify(r))
            item.status = r;
            var goal = item.goal,
              half = goal.half,
              full = goal.full;
            if (data.gameState == 5 || data.gameState == 7) {
              half.host = '--'; //--半场主队得分
              half.guest = '--'; //--半场客队得分
              half.text = '(半 --:--)';
              full.host = '--'; //--全场主队得分
              full.guest = '--'; //--全场客队得分
              full.text = '--:--';
            } else {
              var awayTeamScores = JSON.parse(data.awayTeamScores);
              var homeTeamScores = JSON.parse(data.homeTeamScores);
              half.host = homeTeamScores[0];
              half.guest = awayTeamScores[0];
              half.text = '(半' + half.host + ':' + half.guest + ')';
              full.host = homeTeamScores[1];
              full.guest = awayTeamScores[1];
              full.text = full.host + ':' + full.guest;
            }
          }
        }
      }
    };
    websocket.prototype.footballMessage1 = function (data) {
      var maps = Model.liveGoal.maps,
        len = data.length;
      // console.log(data.length)
      if (len > 0) {
        for (var i = 0; i < len; i++) {
          var d = data[i].matchInfo,
            id = d.matchId,
            item = maps[id];
          // console.log(i, id, item)
          if (item) {
            // console.log(item.getJson());
            console.log(JSON.stringify(item.getJson()));
            console.log(d);
            var _data = {};
            _data.eventlist = [];
            // d.statusCode = 31;
            // d.minutes = "";
            var time_text = '';
            console.log(time_text);
            d.minutes = (d.minutes + '').replace('+', '');
            console.log(d.minutes);
            console.log(d.minutes >= 0, d.minutes.length != 0);
            if (d.minutes >= 0 && d.minutes.length != 0) {
              time_text = d.minutes + '\'';
            }
            console.log(time_text);
            // if(d.statusCode == 7){//--补时
            // 	time_text = "90";
            // }
            _data.eventlist[0] = {
              Status: d.statusCode,
              time_diff: '',
              time_text: time_text
            };
            if (item.status.code == 100) {
              return;
            } //--已完场则终止处理
            var r = item.getStatus(_data);
            item.status = r;
            //--更新比分
            var goal = item.goal,
              half = goal.half,
              full = goal.full;
            var sHalf = d.scoreHalf || '0:0',
              sFull = d.scoreFull || '0:0';
            if (d.statusCode == 60 || d.statusCode == 70) {
              half.host = '--'; //--半场主队得分
              half.guest = '--'; //--半场客队得分
              half.text = '(半 --:--)';
              full.host = '--'; //--全场主队得分
              full.guest = '--'; //--全场客队得分
              full.text = '--:--';
            } else {
              half.text = '(半' + sHalf + ')';
              full.text = sFull;
            }
            sHalf = sHalf.split(':');
            sFull = sFull.split(':');
            var hh = half.host.replace(/\-/g, '') || 0,
              hg = half.guest.replace(/\-/g, '') || 0,
              fh = full.host.replace(/\-/g, '') || 0,
              fg = full.guest.replace(/\-/g, '') || 0;
            console.log(half, full, sHalf, sFull);
            console.log(sHalf[0], hh, sHalf[1], hg, sFull[0], fh, sFull[1], fg);
            if (sHalf[0] != hh || sHalf[1] != hg) {
              half.host = sHalf[0];
              half.guest = sHalf[1];
            }
            if (sFull[0] != fh || sFull[1] != fg) {
              full.host = sFull[0];
              full.guest = sFull[1];
              var info = {
                  league: item.league.name,
                  time: d.minutes + '\'',
                  team: {
                    host: '',
                    guest: ''
                  },
                  goal: {
                    host: sFull[0],
                    guest: sFull[1]
                  }
                },
                toast = Model.toast;
              info.team.host = item.team.hostName;
              info.team.guest = item.team.guestName;
              toast.appendInfo(info);
            }
            item.team.guestCard.r = d.awayRedCount;
            item.team.guestCard.y = d.awayYellowCount;
            item.team.hostCard.r = d.homeRedCount;
            item.team.hostCard.y = d.homeYellowCount;
            var events = d.goals;
            for (var ii = 0, len1 = events.length; ii < len1; ii++) {
              var obj = {},
                event = events[ii];
              if (item.event.goal[event.eventTime]) return;
              obj.time = event.eventTime;
              obj.team = event.team;
              obj.pliyer1 = event.playerName;
              obj.pliyer2 = event.playerName;
              obj.pliyer1 = (obj.pliyer1 + '').left(8);
              obj.pliyer2 = (obj.pliyer2 + '').left(8);
              if (event.goalType == 11) {
                obj.color = 'red'; //--乌龙球为红色
              } else if (event.goalType == 20) {
                obj.color = 'green'; //--点球为红色
              } else {
                obj.color = 'gray'; //--进球为红色
              }

              item.event.goal[event.eventTime] = true;
              item.event.list.push(obj);
            }
          }
        }
      }
    };
    websocket.prototype.basketMessage = function (data) {
      var self = this,
        maps = Model.liveGoal.maps,
        raw = data.raw;
      if (data.data && raw == 'BasketballLive') {
        var d = data.data;
        for (var i = 0, len = d.length; i < len; i++) {
          var evt = d[i],
            _d = evt.data,
            id = _d.match_id2,
            item = maps[id];
          if (item) {
            if (evt.event == 'match_score') {
              //--更新比分
              var _data = {};
              _data.eventlist = [];
              _data.eventlist[0] = {
                Status: _d.status
              };
              var r = item.getStatus(_data);
              item.status = r;
              item.goal.full.host = _d.home || 0; //--全场主队得分
              item.goal.full.guest = _d.away || 0; //--全场客队得分
              item.goal.full.text = item.goal.full.guest + ':' + item.goal.full.host;
              item.goal.sum = item.goal.full.host * 1 + item.goal.full.guest * 1; //--全场总得分
              item.goal.diff = Math.abs(item.goal.full.host - item.goal.full.guest); //--全场分差
            } else if (evt.event == 'match_state') {
              //--更新状态
              var _data = {};
              _data.eventlist = [];
              _data.eventlist[0] = {
                Status: _d.status
              };
              var r = item.getStatus(_data);
              r.text += ' ' + _d.time;
              item.status = r;
            }
          }
        }
      }
    };
    var ws = new websocket();
    // console.log(Model.liveGoal.promise);
    Model.liveGoal.promise.then(function () {
      // console.log("Model.liveGoal.promise");
      ws.init();
    });
    return ws;
  };

  /**
   * 推送的弹出信息对象
   * @param {object} Model 页面主题Model对象实例
   */
  var Toast = function Toast(Model) {
    var key = Model.currPage.key; //--jingcai || jingcailq || zucai
    var isZucai = key == 'zucai',
      //--足彩页面
      isJingcai = !isZucai; //--竞彩页面
    itou.dataModel.config({
      //--弹层行信息
      key: 'zhibo_toast_item_' + key,
      opts: {
        league: {
          t: '赛事',
          k: 'league',
          d: ''
        },
        time: {
          t: '时间',
          k: 'time',
          d: ''
        },
        team: {
          t: '队伍',
          k: 'team',
          d: {
            host: '',
            guest: ''
          }
        },
        goal: {
          t: '比分',
          k: 'goal',
          d: {
            host: 0,
            guest: 0
          }
        },
        isShow: {
          t: '比分',
          k: '',
          d: true
        },
        key: {
          t: '比分',
          k: '',
          d: function d() {
            return ('item' + Math.random()).replace('.', '');
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('zhibo_toast_item_' + key); //--弹层行信息对象构造函数创建
    item.prototype.show = function () {
      var self = this;
      itou.outil.timmer.newTimmer({
        key: self.key,
        timeout: 5000,
        fun: function fun() {
          self.hide();
        }
      });
    };
    item.prototype.hide = function () {
      var self = this;
      itou.outil.timmer.clearTimmer(self.key);
      self.isShow = false;
    };
    itou.dataModel.config({
      //--页签对象
      key: 'zhibo_toast_' + key,
      opts: {
        item: {
          t: 'item数据原型',
          k: '',
          d: function d() {
            return item;
          }
        },
        list: {
          t: '所有信息',
          k: '',
          d: []
        }
      }
    });
    var toast = itou.dataModel.dataFactory.create('zhibo_toast_' + key); //--页签对象构造函数创建
    toast.prototype.init = function () {
      //--初始化对象，开始定期清理
      var self = this;
      itou.outil.timmer.newTimmer({
        key: 'zhibo_toast_' + key + '_timmer',
        timeout: 1000 * 120,
        fun: function fun() {
          self.clear();
        }
      });
    };
    toast.prototype.clear = function () {
      //--清楚已经隐藏的数据
      var self = this,
        list = self.list;
      for (var i = list.length - 1; i >= 0; i--) {
        if (!list[i].isShow) {
          list.splice(i, 1);
        }
      }
    };
    toast.prototype.appendInfo = function (info) {
      //--追加数据
      var self = this,
        item = self.item;
      var it = new item(info);
      it.show();
      self.list.splice(0, 0, it);
      for (var i = 3, len = self.list.length; i < len; i++) {
        if (self.list[i].isShow) {
          self.list[i].hide();
        }
      }
    };
    var t = new toast();
    t.init();
    return t;
  };

  /**
   * 完场比分页面页签对象
   * @param {object} Model 页面主题Model对象实例
   */
  var Tap = function Tap(Model) {
    var key = Model.currPage.key; //--jingcai_end || jingcailq_end || zucai_end
    var isZucai = key == 'zucai_end',
      //--足彩页面
      isJingcai = !isZucai; //--竞彩页面
    itou.dataModel.config({
      //--页签对象
      key: 'zhibo_tap_' + key,
      opts: {
        page: {
          t: '页面展示相关数据',
          k: '',
          d: function d() {
            var r = {};
            r.isShow = false;
            r.currIndex = 0;
            return r;
          }
        },
        list: {
          t: '所有选项',
          k: '',
          d: []
        },
        maps: {
          t: '页签数据映射',
          k: '',
          d: function d(data, me) {
            var r = {};
            if (isJingcai && key != 'danchang_end') {
              for (var i in data) {
                var obj = {};
                obj.v = i;
                obj.n = data[i] || 0;
                obj.t = i;
                obj.w = (i + ' 00:00:00').Dateformat('周ww');
                r[i] = obj;
                me.list.push(obj);
              }
            } else {
              if (itou.outil.is(data.list, 'Array')) {
                data.list = {};
              }
              for (var i in data.list) {
                var obj = {};
                obj.v = i;
                obj.n = data.list[i] || 0;
                obj.t = i + '期';
                obj.w = '';
                r[i] = obj;
                me.list.push(obj);
              }
              me.list.reverse();
            }
            return r;
          }
        },
        curr: {
          t: '当前页签',
          k: '',
          d: function d(data, me) {
            var cache = Model.cache,
              prev = window.prevPage,
              curr = '';
            if (prev.has('/livevideo/') || prev.has('/livewords/')) {
              //--从直播页面返回，读取缓存
              curr = cache.selected.currTap;
              if (!me.maps[curr]) {
                curr = '';
              } //--还存不存在，置空
            }

            if (curr == '' && me.list[0]) {
              curr = me.list[0].v;
              cache.doSave('currTap', curr); //--保存缓存
            }

            me.getIndex();
            return curr;
          }
        }
      }
    });
    var tap = itou.dataModel.dataFactory.create('zhibo_tap_' + key); //--页签对象构造函数创建
    tap.prototype.getInfo = function () {
      //--获取页签数据
      var self = this,
        url = '',
        data = {};
      if (isZucai) {
        // url = 'zucai/finishschedule';//--足彩完场期程接口
        url = 'zucai/finishschedulev2'; //--足彩完场期程接口
      } else if (key == 'danchang_end') {
        url = 'dc/finishschedule'; //--单场完场期程接口
      } else {
        url = 'match/finishdate'; //--竞彩完场竞彩日
      }

      if (key == 'jingcailq_end') {
        data.jc_type = 'basket';
      }
      return itou.get({
        url: url,
        data: data,
        apiType: 'itApi'
      }).then(function (data) {
        self.reload(data);
      });
    };
    tap.prototype.getIndex = function () {
      var self = this,
        curr = self.maps[self.curr];
      var index = self.list.indexOf(curr);
      if (index < 0) {
        index = 0;
      }
      self.page.currIndex = index;
    };
    /**
     * @param {object} params 要移动到的标签参数，{index: @index, step: @step, key: @val}，只有一个会生效，优先级依次递减
     */
    tap.prototype.moveTo = function (params) {
      //--选中标签
      var defer = $.Deferred();
      if (!params) {
        defer.reject();
        return defer.promise();
      }
      Model.endGoal.page = 1;
      var self = this,
        cache = Model.cache,
        index = params.index,
        step = params.step,
        key = params.key;
      if (index >= 0) {
        var len = self.list.length - 1,
          curr = self.curr,
          _tap = self.maps[curr] || {},
          index1 = self.list.indexOf(_tap);
        if (index1 == index) {
          defer.reject();
        }
        index = index > len ? len : index;
        var _tap = self.list[index];
      } else if (step) {
        var len = self.list.length - 1,
          curr = self.curr,
          _tap = self.maps[curr] || {},
          index = self.list.indexOf(_tap);
        index += step;
        if (index < 0 || index > len) {
          defer.reject();
        }
        if (index < 0) {
          index = 0;
        } else if (index > len) {
          index = len;
        }
        _tap = self.list[index];
      } else if (key) {
        if (key == self.curr) {
          defer.reject();
        }
        var _tap = self.maps[key];
      }
      if (_tap) {
        self.curr = _tap.v;
        cache.doSave('currTap', self.curr); //--保存缓存
        defer.resolve();
      }
      self.getIndex();
      return defer.promise();
    };
    tap.prototype.show = function (act) {
      //--展示/隐藏检索层
      var self = this;
      if (act == true) {
        //--强制展开
        self.page.isShow = true;
      } else if (act == false) {
        //--强制关闭
        self.page.isShow = false;
      } else {
        self.page.isShow = !self.page.isShow; //--显示隐藏切换
      }
    };

    return new tap();
  };

  /**
   * 完场比分创建函数
   * @param {object} Model 页面主题Model对象实例
   * 用来呈现竞彩、篮彩、足彩完场比分列表
   */
  var EndGoal = function EndGoal(Model) {
    var key = Model.currPage.key; //--jingcai_end || jingcailq_end || zucai_end
    var isZucai = key == 'zucai_end',
      //--足彩页面
      isJingcai = !isZucai; //--竞彩页面
    itou.dataModel.config({
      //--页面行数据对象
      key: 'zhibo_end_' + key + '_item',
      opts: {
        id: {
          t: '唯一标识，match_id',
          k: 'match_id2',
          d: 0
        },
        //--包括推送信息在内的唯一标志
        no: {
          t: '唯一标识，serial_no',
          k: 'serial_no',
          d: 0
        },
        //--唯一标志
        sort1: {
          t: '排序',
          k: '',
          d: function d(data, me) {
            me.no *= 1;
            var sort = data.sort || '1';
            return ('00' + sort).right(3);
          }
        },
        time: {
          t: '比赛时间',
          k: '',
          d: function d(data, me) {
            var time = data.match_time + '';
            return time.Dateformat('HH:NN');
          }
        },
        team: {
          t: '队伍信息',
          k: '',
          d: function d(data, me) {
            var r = {};
            r.hostName = (data.host_name_s + '').left(5);
            r.guestName = (data.guest_name_s + '').left(5);
            r.hostCard = {
              r: 0,
              y: 0
            }; //--主队红黄牌
            r.guestCard = {
              r: 0,
              y: 0
            }; //--客队红黄牌
            return r;
          }
        },
        league: {
          t: '赛事',
          k: '',
          d: function d(data, me) {
            var r = {},
              colors = data.league_color || ['#000;', '#000;'];
            r.name = data.league_name; //--赛事名称
            r.color = colors[0]; //--赛事字体颜色
            return r;
          }
        },
        goal: {
          t: '当前得分',
          k: '',
          d: function d(data, me) {
            var r = {},
              live = data.live || {},
              half = live.Period1 || {},
              //--半场比分
              full = live.Normaltime || {}; //--全场比分
            half.Team1 == 0 ? half.Team1 = '0' : '';
            half.Team2 == 0 ? half.Team2 = '0' : '';
            full.Team1 == 0 ? full.Team1 = '0' : '';
            full.Team2 == 0 ? full.Team2 = '0' : '';
            r.half = {};
            r.full = {};
            r.zucai = {
              color: 'red'
            };
            if (!data.lottery_result) {
              var matchTIme = data.match_time || '';
              var reg = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
              if (reg.test(matchTIme)) {
                r.zucai.text = matchTIme.substr(5, 11);
              } else {
                r.zucai.text = matchTIme;
              }
              r.zucai.text = r.zucai.text.split(' ').join('<br>');
              r.zucai.color = 'gray';
              // return r;
            } else if (data.lottery_result == 'Delay') {
              r.zucai.text = '延期';
              // return r;
            }

            r.half.host = half.Team1 || data.half_host_goals || 0; //--半场主队得分
            r.half.guest = half.Team2 || data.half_guest_goals || 0; //--半场客队得分
            r.half.text = '(半' + r.half.host + '-' + r.half.guest + ')';
            r.full.host = data.host_goals || 0; //--全场主队得分
            r.full.guest = data.guest_goals || 0; //--全场客队得分
            if (key == 'jingcailq_end') {
              r.full.text = r.full.guest + ':' + r.full.host;
            } else {
              r.full.text = r.full.host + ':' + r.full.guest;
            }
            r.zucai.text = r.zucai.text || r.full.text;
            r.sum = r.full.host * 1 + r.full.guest * 1; //--全场总得分
            // r.diff = Math.abs(r.full.host - r.full.guest);//--全场分差
            r.diff = r.full.host - r.full.guest; //--全场分差
            r.diff = (r.diff > 0 ? '+' : '') + String(r.diff);
            return r;
          }
        },
        status: {
          t: '当前状态',
          k: '',
          d: function d(data, me) {
            var r = {},
              setting = Model.setting,
              live = data.live || {},
              eventlist = data.eventlist || [],
              status = eventlist[0] || {};
            r.code = status.Status;
            // r.showLink = r.code >= 0;//--是否显示直播链接
            // r.showLink = live.has_livescore == 1 && !key.has("jingcailq");//--是否显示直播链接
            // r.showLink = !key.has("jingcailq");//--是否显示直播链接
            r.showLink = true; //--是否显示直播链接
            if (key == 'jingcai_end' || key == 'zucai_end') {
              //--足球
              if (r.code == 100) {
                r.color = 'gray';
              } else if (r.code == 6 || r.code == 7) {
                r.color = 'blue';
              } else {
                r.color = 'green';
              }
              r.text = r.text || setting.football.status[r.code] || '';
            } else {
              //--篮球
              if (r.code == 100) {
                r.color = 'gray';
              } else {
                r.color = 'green';
              }
              r.text = r.text || setting.football.status[r.code] || '';
            }
            return r;
          }
        },
        event: {
          t: '全场事件',
          k: '',
          d: function d(data, me) {
            if (key == 'jingcailq_end') {
              return [];
            }
            var r = [],
              eventlist = data.eventlist || [];
            eventlist.splice(0, 1);
            for (var i = 0, len = eventlist.length; i < len; i++) {
              var event = eventlist[i];
              var obj = {};
              obj.time = event.time;
              // obj.pliyer1 = event.Player1.PlayerName;
              // obj.pliyer2 = event.Player2.PlayerName;
              if (event.type == 'goal') {
                obj.color = event.type_id == 11 ? 'gray' : 'green'; //--乌龙球为灰色
                r.push(obj);
              } else if (event.type == 'card') {
                if (event.team == 1) {
                  if (event.type_id == 40) {
                    me.team.hostCard.y += 1; //--主队黄牌+1
                  } else if (event.type_id == 50) {
                    me.team.hostCard.r += 1; //--主队红牌+1
                  }
                } else if (event.team == 2) {
                  if (event.type_id == 40) {
                    me.team.guestCard.y += 1; //--客队黄牌+1
                  } else if (event.type_id == 50) {
                    me.team.guestCard.r += 1; //--客队红牌+1
                  }
                }
              }
            }

            return {
              isShow: false,
              list: r
            };
          }
        },
        result: {
          t: '开奖结果',
          k: '',
          d: function d(data, me) {
            var r = {},
              rlt = data.list,
              setting = Model.setting;
            r.isShow = false;
            if (key == 'zucai_end') {
              return r;
            } else if (key == 'jingcai_end') {
              var opts = setting.jingcai;
            } else if (key == 'jingcailq_end') {
              var opts = setting.jingcailq;
            } else if (key == 'danchang_end') {
              var opts = setting.danchang;
            }
            for (var i in rlt) {
              var obj = {},
                rpt = rlt[i],
                resultCode = rpt.lottery_result;
              obj.pk = 0;
              obj.odds = (rpt.odds * 1).toFixed(2);
              obj.text = opts[i][resultCode] || '';
              if (key == 'jingcai_end' && i == 'SportteryWDL') {
                //--竞彩足球让球胜平负
                obj.pk = rpt.boundary;
              } else if (key == 'jingcailq_end' && i == 'SportteryHWL') {
                //--竞彩篮球让球胜负
                obj.pk = rpt.boundary;
              } else if (key == 'jingcailq_end' && i == 'SportteryWS') {
                //--竞彩篮球胜分差
                if (obj.text.has('*h')) {
                  obj.text = '主胜' + obj.text.replace('*h', '');
                }
                if (obj.text.has('*g')) {
                  obj.text = '客胜' + obj.text.replace('*g', '');
                }
              } else if (key == 'jingcailq_end' && i == 'SportteryBS') {
                //--竞彩篮球大小球
                obj.text += '(' + rpt.boundary + ')';
              }
              if (obj.pk > 0) {
                obj.pk = '+' + obj.pk;
              }
              if (obj.pk != 0) {
                if (key == 'jingcai_end') {
                  obj.text = '(' + obj.pk + ') ' + obj.text;
                } else if (key == 'jingcailq_end') {
                  obj.text = obj.text + ' (' + obj.pk + ')';
                }
              }
              r[i] = obj;
            }
            return r;
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('zhibo_end_' + key + '_item'); //--页面行对象构造函数创建
    item.prototype.showResult = function () {
      var self = this;
      self.result.isShow = !self.result.isShow;
    };
    itou.dataModel.config({
      //--页面信息数据对象
      key: 'zhiboend_' + key + '_list',
      opts: {
        page: {
          t: '当前页码',
          k: '',
          d: 1
        },
        //--仅单场完场赛果有分页功能
        maps: {
          t: '页面映射数据信息',
          k: '',
          d: function d(data, me) {
            //--页面映射数据信息
            var r = {};
            return r;
          }
        },
        days: {
          t: '页面数据信息',
          k: '',
          d: function d(data, me) {
            //--页面数据信息
            var r = [],
              list = data.list,
              num = 0;
            for (var i in list) {
              var obj = {},
                matchs = list[i];
              obj.isShow = num == 0;
              num += 1;
              if (isJingcai) {
                obj.title = (i + ' 00:00:00').Dateformat('yyyy-mm-dd 周ww');
              } else {
                obj.title = i + '期';
              }
              obj.list = [];
              for (var ii in matchs) {
                var it = new item(matchs[ii]);
                obj.list.push(it);
                var id = it.id;
                me.maps[id] = it;
              }
              r.push(obj);
            }
            return r;
          }
        }
      }
    });
    var endGoal = itou.dataModel.dataFactory.create('zhiboend_' + key + '_list'); //--页面信息对象构造函数创建
    endGoal.prototype.getData = function () {
      //--获取页面列表数据
      var self = this,
        search = Model.search,
        tap = Model.tap,
        data = {},
        url = '';
      if (key == 'jingcai_end') {
        url = 'match/finishresult';
        data.date_list = tap.curr;
      } else if (key == 'jingcailq_end') {
        url = 'match/finishresult';
        data.jc_type = 'basket';
        data.date_list = tap.curr;
      } else if (key == 'danchang_end') {
        url = 'dc/finishresult';
        data.lottery_no = tap.curr;
        data.page = self.page;
        data.pagesize = 50;
      } else {
        // url = 'zucai/finishresult';
        url = 'zucai/finishresultv2';
        data.lottery_no = tap.curr;
      }
      data.league_name = JSON.stringify(search.selected);
      return itou.get({
        url: url,
        data: data,
        apiType: 'itApi'
      });
    };
    endGoal.prototype.getList = function () {
      //--获取页面列表数据
      var self = this;
      self.page = 1;
      return self.getData().then(function (data) {
        self.reload(data);
      });
    };
    endGoal.prototype.doRefresh = function () {
      //--刷新页面
      var self = this;
      return self.getList().then(function () {
        window.vm.ascroll.hasData();
        window.vm.ascroll.resetload();
      });
    };
    endGoal.prototype.getNext = function () {
      //--获取下一页
      var self = this;
      self.page += 1;
      return self.getData().then(function (data) {
        var list = data.list,
          hasNext = false;
        for (var i in list) {
          var obj = {},
            matchs = list[i];
          obj.list = [];
          for (var ii in matchs) {
            var it = new item(matchs[ii]);
            obj.list.push(it);
            var id = it.id;
            self.maps[id] = it;
            hasNext = true;
          }
          self.days[0].list = self.days[0].list.concat(obj.list);
        }
        return hasNext;
      }).then(function (hasNext) {
        if (!hasNext) {
          window.vm.ascroll.noData();
        } else {
          window.vm.ascroll.hasData();
        }
        window.vm.ascroll.resetload();
      });
    };
    return new endGoal();
  };
  var Model = function Model() {
    var _opts;
    //--单场数据原型
    itou.dataModel.config({
      //---单场数据对象
      key: 'zhibo_obj',
      opts: (_opts = {
        maps: {
          t: '映射关系',
          k: '',
          d: {
            //--映射关系，用于执行初始化
            setting: Setting,
            // currPage: CurrPage,
            cache: Cache,
            search: Search,
            liveGoal: LiveGoal,
            websocket: Websocket,
            toast: Toast,
            project: Project,
            endGoal: EndGoal,
            tap: Tap,
            outil: Outil
          }
        },
        cache: {
          t: '缓存数据',
          k: '',
          d: function d(data, me) {
            return Cache(me);
          }
        },
        setting: {
          t: '基础设置',
          k: '',
          d: function d(data, me) {
            return Setting(me);
          }
        },
        currPage: {
          t: '当前页面信息',
          k: '',
          d: null
        },
        outil: {
          t: '工具对象',
          k: '',
          d: null
        }
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "cache", {
        t: '缓存信息',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "search", {
        t: '检索对象',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "liveGoal", {
        t: '比分直播列表数据对象',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "websocket", {
        t: '推送对象',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "toast", {
        t: '弹层信息对象',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "project", {
        t: '购买方案对象',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "tap", {
        t: '完场比分页签数据对象',
        k: '',
        d: null
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_opts, "endGoal", {
        t: '完场比分列表数据对象',
        k: '',
        d: null
      }), _opts)
    });
    var model = itou.dataModel.dataFactory.create('zhibo_obj'); //--单场对象构造函数创建
    model.prototype.init = function (modelList) {
      //--对象初始化；参数可以是要初始化的对象名，也可以是他们的数组
      var self = this,
        maps = self.maps;
      self.currPage = CurrPage(self);
      if (!itou.outil.is(modelList, 'Array')) {
        //--对象初始化
        if (maps[modelList]) {
          self[modelList] = maps[modelList](self);
        }
      } else {
        modelList.forEach(function (element) {
          //--对象初始化
          if (maps[element]) {
            self[element] = maps[element](self);
          }
        }, this);
      }
      return self;
    };
    $.livesorce = new model();
  };
  Model();
})();

/***/ })

/******/ });