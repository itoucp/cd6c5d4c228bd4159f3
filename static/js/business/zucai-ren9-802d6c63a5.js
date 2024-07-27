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
/******/ 		212: 0
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
/******/ 	deferredModules.push([373,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_w500_banner_adv_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/**
 * 微信C端		足彩14场
 * by：zhaoyf	2017-03-08 15:07:30
 */
//--500万合作广告

(function () {
  var match_computer = __webpack_require__(40);
  var Lottery = function Lottery() {
    //--彩种信息，用来在提交确认页获取对应采种
    itou.dataModel.config({
      key: 'toto_Lottery',
      opts: {
        t: {
          t: '采种名称',
          k: '',
          d: '足彩任9'
        },
        v: {
          t: '采种标识',
          k: '',
          d: 'NineToTo'
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
    lottery = lottery.getJson();
    itou.localData.setData('__sys_lottery_type', {
      key: lottery
    });
  };
  var Cache = function Cache(Model) {
    //--选项缓存数据
    var cacheData = itou.sessionData.getData('__sys_NineToTo_chche'); //--读取缓存数据
    // console.debug("缓存字符串：", JSON.stringify(cacheData));
    itou.dataModel.config({
      key: 'toto_Cache',
      opts: {
        lottery_no: {
          t: '当前彩期',
          k: 'lottery_no',
          d: '1'
        },
        beishu: {
          t: '倍数',
          k: 'beishu',
          d: '1'
        },
        selected: {
          t: '选择项',
          k: 'selected',
          d: function d() {
            return {};
          }
        },
        dan: {
          t: '选择的胆',
          k: 'dan',
          d: []
        },
        hasToast: {
          t: '是否已经提示',
          k: 'hasToast',
          d: function d() {
            return {};
          }
        }
      }
    });
    var cache = itou.dataModel.dataFactory.create('toto_Cache');
    cache.prototype.checkData = function (arr) {
      //--删除冗余数据；删除列表不存在的缓存数据
      var self = this,
        selected = self.selected;
      for (var i in selected) {
        if (arr.indexOf(i) == -1) {
          delete selected[i];
        }
      }
    };
    cache.prototype.saveCache = function () {
      //--保存缓存
      var self = this;
      // self.dan = Model.compute.dan;
      var data = self.getJson();
      // console.debug("缓存字符串--save：", JSON.stringify(data));
      itou.outil.timmer.newTimmer({
        key: 'NineToToAutoCache',
        fun: function fun() {
          itou.sessionData.setData('__sys_NineToTo_chche', data);
          itou.outil.timmer.clearTimmer('NineToToAutoCache');
        },
        timeout: 100
      });
    };
    cache.prototype.clearCache = function () {
      //--清理缓存
      var self = this;
      self.selected = {};
      self.dan.splice(0);
      self.beishu = '1';
      self.lottery_no = '1';
      self.saveCache();
    };
    cache = new cache(cacheData); //alert(JSON.stringify(cache.getJson()))
    // Model.compute.beishu = cache.beishu;
    if (!window.isReload && ([window.config.base_url, '', '/'].indexOf(window.prevPage) != -1 || window.prevPage.has('/project/detail/') || window.prevPage.has('/user/shop/details/'))) {
      //--清空缓存数据
      cache.clearCache();
    }
    return cache;
  };
  var CaiQi = function CaiQi(Model) {
    //--创建彩期数据原型
    itou.dataModel.config({
      key: 'toto_CaiQi',
      opts: {
        no: {
          t: '期号',
          k: 'lottery_no',
          d: ''
        },
        end_time: {
          t: 'itou截止时间',
          k: 'itou_end_time',
          d: ''
        },
        strart_time: {
          t: 'itou开始时间',
          k: 'device_start_time',
          d: ''
        },
        status: {
          t: '是否可以销售',
          k: 'status',
          d: '0'
        },
        //--是否可以销售，1为可以销售，0为不可以
        pool_prize: {
          t: '滚存奖池',
          k: '',
          d: '0'
        },
        isCurr: {
          t: '是否是当前彩期',
          k: '',
          d: ''
        }
      }
    });
    var caiqi = itou.dataModel.dataFactory.create('toto_CaiQi');
    caiqi.prototype.doSelect = function () {
      //--彩期切换
      var self = this;
      if (Model.caiqi.curr == self) {
        //--与当前彩期相同，不需要执行切换
        return;
      }
      Model.cache.clearCache(); //--清理缓存
      Model.cache.lottery_no = self.no; //--设置缓存数据
      Model.cache.saveCache();
      Model.caiqi.curr.isCurr = false;
      self.isCurr = '1';
      Model.caiqi.curr = self;
      Model.apis.getList(); //--获取当前彩期数据
      Model.caiqi.show(); //--隐藏彩期列表
    };

    return caiqi;
  };
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
        reversion: {
          t: '主客场是否逆转',
          k: '',
          d: function d(itemData) {
            return itemData.reversion == 1;
          }
        },
        peilv3: {
          t: '胜赔率',
          k: '',
          d: function d(itemData) {
            var odds = itemData.odds[3];
            if (!odds || isNaN(odds) || odds * 1 <= 0) {
              odds = '- -';
            }
            return odds;
          }
        },
        peilv1: {
          t: '平赔率',
          k: '',
          d: function d(itemData) {
            var odds = itemData.odds[1];
            if (!odds || isNaN(odds) || odds * 1 <= 0) {
              odds = '- -';
            }
            return odds;
          }
        },
        peilv0: {
          t: '负赔率',
          k: '',
          d: function d(itemData) {
            var odds = itemData.odds[0];
            if (!odds || isNaN(odds) || odds * 1 <= 0) {
              odds = '- -';
            }
            return odds;
          }
        },
        selected: {
          t: '选中项',
          k: '',
          d: function d() {
            return [];
          }
        },
        dan: {
          t: '胆',
          k: '',
          d: false
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('toto_Item');
    item.prototype.doSelected = function (key) {
      //--赛事行——选项选择
      if (Model.caiqi.curr.status == '0') {
        return;
      }
      // console.debug("item.doSelected, no = " + this.no);
      var self = this,
        compute = Model.compute,
        keyIndex = self.selected.indexOf(key);
      self.selected.no = self.no;
      if (keyIndex == -1) {
        //--处理当前赛事选中项
        self.selected.push(key);
      } else {
        self.selected.splice(keyIndex, 1);
      }
      var sIndex = compute.selected.indexOf(self.selected);
      if (self.selected.length > 0 && sIndex == -1) {
        //--处理所有选中项，维护数据准确性
        compute.selected.push(self.selected);
        Model.cache.selected[self.no] = self.selected;
      } else if (self.selected.length == 0 && sIndex != -1) {
        compute.selected.splice(sIndex, 1);
        delete Model.cache.selected[self.no];
      }
      var bIndex = compute.bet_ids.indexOf(self.bet_id);
      if (self.selected.length > 0 && bIndex == -1) {
        //--处理所有选中项，维护数据准确性
        compute.bet_ids.push(self.bet_id);
      } else if (self.selected.length == 0 && bIndex != -1) {
        compute.bet_ids.splice(bIndex, 1);
      }
      if (self.dan && self.selected.length == 0) {
        //--自动取消设胆
        self.dan = false;
        var dIndex = compute.dan.indexOf(self.no);
        if (dIndex != -1) {
          compute.dan.splice(dIndex, 1); //--从胆列表中取消
        }
      }

      compute["do"](); //--进行计算
    };

    item.prototype.danSelect = function (key) {
      //--赛事行——胆选择
      var self = this,
        compute = Model.compute;
      if (Model.caiqi.curr.status == '0') {
        return;
      }
      if (self.selected.length == 0) {
        return;
      }
      // console.debug("item.danSelect, no = " + self.no);
      var dIndex = compute.dan.indexOf(self.no);
      if (!self.dan && dIndex == -1 && compute.dan.length >= 8) {
        window.vm.showToast('最多只能设8个胆。');
        return;
      }
      self.dan = !self.dan;
      if (self.dan && dIndex == -1) {
        compute.dan.push(self.no); //--添加到胆列表
      } else if (!self.dan && dIndex != -1) {
        compute.dan.splice(dIndex, 1); //--从胆列表中取消
      }

      compute["do"](); //--进行计算
    };

    return item;
  };
  var Compute = function Compute(Model) {
    itou.dataModel.config({
      key: 'toto_Compute',
      opts: {
        selected: {
          t: '选择的选项',
          k: '',
          d: function d() {
            return [];
          }
        },
        //--选择的选项数据
        bet_ids: {
          t: '选择的选项',
          k: '',
          d: function d() {
            return [];
          }
        },
        //--bet_id序列
        dan: {
          t: '胆',
          k: '',
          d: function d() {
            return Model.cache.dan;
          }
        },
        //--设胆数据
        beishu: {
          t: '投注倍数',
          k: '',
          d: function d() {
            return Model.cache.beishu || '1';
          }
        },
        //--倍数
        beishuMax: {
          t: '最大投注倍数',
          k: '',
          d: '1000'
        },
        //--最大倍数
        zhushu: {
          t: '注数',
          k: '',
          d: '0'
        },
        //--注数
        zhushuAll: {
          t: '总注数',
          k: '',
          d: '0'
        },
        //--总注数
        zhushuMax: {
          t: '最大注数',
          k: '',
          d: '100000'
        },
        //--最大注数
        money: {
          t: '投注金额',
          k: '',
          d: '0'
        },
        //--金额
        moneyAll: {
          t: '投注金额',
          k: '',
          d: '0'
        },
        //--总金额
        isenough: {
          t: '是否可以提交',
          k: '',
          d: false
        },
        //--是否足够
        desc: {
          t: '描述信息',
          k: '',
          d: ''
        },
        //--描述信息，包括选项不足、未开售等信息
        text: {
          t: '说明文字',
          k: '',
          d: ''
        }
      }
    });
    var compute = itou.dataModel.dataFactory.create('toto_Compute');
    compute.prototype.init = function () {
      var self = this,
        Arr = [];
      Model.list.forEach(function (item) {
        var s = item.selected;
        if (s.length > 0) {
          Arr.push(s);
        }
      }, this);
      self.selected = Arr;
      self.beishu = Model.cache.beishu;
      self["do"]();
    };
    compute.prototype["do"] = function () {
      //--进行计算
      var self = this;
      itou.outil.timmer.newTimmer({
        //--延时700毫秒
        key: 'NineToTo_Compute',
        fun: function fun() {
          self.doCompute();
          itou.outil.timmer.clearTimmer('NineToTo_Compute');
        },
        timeout: 100
      });
    };
    compute.prototype.doCompute = function () {
      //--选项变更后，进行计算
      var self = this,
        len = self.selected.length;
      Model.cache.saveCache();
      if (len >= 9) {
        //--足够14场
        self.isenough = true;
        // var zhushu = self.getZhushu();
        var selected = {};
        self.selected.forEach(function (el) {
          selected[el.no] = [el];
        });
        var params = {
          'guoguan': '9_1',
          'beishu': 1,
          'abs': self.dan.join(','),
          'selected': selected
        };
        match_computer.init(params);
        var zhushu = match_computer.getCount(); //--计算单倍注数
        self.zhushu = zhushu;
      } else {
        self.isenough = false;
      }
    };
    compute.prototype.getZhushu = function () {
      //--计算注数
      var self = this,
        tuo = [],
        maps = {},
        danZhushi = 1;
      self.selected.forEach(function (element) {
        //--处理选择项，得出拖列表、映射关系、胆组合注数
        var no = element.no,
          dIndex = self.dan.indexOf(no);
        if (dIndex == -1) {
          tuo.push(no);
        } else {
          danZhushi *= element.length;
        }
        maps[no] = element;
      }, this);
      var zuhe = tuo.combination(9 - self.dan.length),
        //--拆分拖组合
        zhushu = 0; //--总注数
      zuhe.forEach(function (tuo) {
        //--计算总注数
        var zs = danZhushi; //--计算每种组合的注数
        tuo.forEach(function (no) {
          zs *= maps[no].length;
        }, this);
        zhushu += zs;
      }, this);
      return zhushu;
    };
    compute.prototype.checkData = function () {
      var self = this;
      if (self.beishu * 1 > self.beishuMax * 1) {
        window.vm.showToast('投注倍数不可超过' + self.beishuMax);
        return false;
      }
      if (self.zhushuAll * 1 > self.zhushuMax * 1) {
        window.vm.showToast('方案金额不可超过' + self.zhushuMax * 2 / 10000 + '万元');
        return false;
      }
      return true;
    };
    return new compute();
  };
  var Result = function Result(Model) {
    //--页面处理结果数据原型
    itou.dataModel.config({
      key: 'toto_wager_store',
      opts: {
        wt: {
          t: 'wt',
          k: '',
          d: 'Common'
        },
        pt: {
          t: 'pt',
          k: '',
          d: ''
        },
        c: {
          t: '注数',
          k: 'zhushu',
          d: ''
        },
        m: {
          t: '金额',
          k: 'money',
          d: ''
        },
        multiple: {
          t: '倍数',
          k: 'beishu',
          d: '0'
        },
        wager: {
          t: 'wager',
          k: '',
          d: ''
        },
        abs: {
          t: 'abs',
          k: '',
          d: function d(compute) {
            return compute.dan.join(',');
          }
        }
      }
    });
    var wagerStore = itou.dataModel.dataFactory.create('toto_wager_store');
    wagerStore = new wagerStore();
    itou.dataModel.config({
      key: 'toto_Result',
      opts: {
        lottery_no: {
          t: '彩期',
          k: 'caiqi.curr.no',
          d: ''
        },
        //--彩期
        pass_type: {
          t: '过关方式',
          k: '',
          d: ''
        },
        //--过关方式
        count: {
          t: '总注数',
          k: 'compute.zhushuAll',
          d: ''
        },
        //--总注数
        money: {
          t: '总金额',
          k: 'compute.moneyAll',
          d: ''
        },
        //--总金额
        m_ext: {
          t: '投注方式选项',
          k: '',
          d: ''
        },
        //--投注方式选项
        manner: {
          t: '投注方式',
          k: '',
          d: '0'
        },
        //--投注方式,1为混合投注，0为单一投注
        bet_seq: {
          t: 'bet_id序列',
          k: 'compute.bet_ids',
          d: function d() {
            return [];
          }
        },
        //--bet_id序列
        lottery_type: {
          t: '采种',
          k: '',
          d: 'NineToTo'
        },
        //--采种
        wager_type: {
          t: 'wager_type',
          k: '',
          d: 'Common'
        },
        wager_store: {
          t: 'wager_store',
          k: '',
          d: function d() {
            return [];
          }
        }
      }
    });
    var result = itou.dataModel.dataFactory.create('toto_Result');
    result = new result();
    result.doReload = function () {
      var self = this;
      wagerStore.reload(Model.compute);
      wagerStore.wager = function () {
        var s = Model.compute.selected,
          Arr = [];
        s.forEach(function (element) {
          var r = element.no + ':' + element.join(',');
          Arr.push(r);
        }, this);
        return Arr.join(';');
      }();
      var r = result.reload(Model);
      var WS = {};
      for (var i in wagerStore) {
        if (typeof wagerStore[i] != 'function') {
          WS[i] = wagerStore[i];
        }
      }
      r.wager_store.push(WS);
      return r;
    };
    return result;
  };
  var Msg = function Msg(Model) {
    //--弹窗显示控制对象构造函数
    var self = this;
    self.parent = Model;
    self.curr = null; //--当前显示的弹窗

    self.show = function (key) {
      //--显示或隐藏页面弹窗
      self.curr = key || null;
    };
  };
  var Apis = function Apis(Model) {
    //--接口操作对象
    var self = this;
    self.parent = Model;
    self.getAdvLive = function () {
      return itou.get({
        url: 'adv/getnotice',
        data: {},
        formatResult: false
      });
    };
    self.getAdertisingStatus = function () {
      return itou.get({
        url: 'adv/adinfo',
        data: {
          aid: 1,
          pid: 2,
          station_id: self.parent.station_id
        },
        formatResult: false
      });
    };
    self.getAllowUser = function () {
      return itou.get({
        url: 'sharebuy/allowusesharebuy',
        data: {
          station_id: self.parent.station_id
        },
        apiType: 'itApi'
      });
    };
    self.getHemaiStatus = function () {
      return itou.get({
        url: 'sharebuy/issupport',
        data: {
          station_id: self.parent.station_id
        },
        apiType: 'itApi'
      });
    };
    self.getAdvNum = function () {
      return itou.get({
        url: 'adv/clickstat',
        data: {
          aid: 1,
          pid: 2,
          station_id: self.parent.station_id
        },
        formatResult: false
      });
    };
    self.getFinishCount = function () {
      return itou.get({
        url: 'zucai/finishcount',
        data: {
          lottery_type: 'ToTo'
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        var Arr = [];
        for (var i in data) {
          var obj = {},
            html = i + '&nbsp;&nbsp;&nbsp;&nbsp;已结束' + data[i] + '场';
          obj.no = i;
          obj.num = data[i];
          obj.html = html;
          Arr.push(obj);
        }
        Model.finishCount = Arr;
      });
    };
    self.getCaiqi = function () {
      //--获取彩期数据
      return itou.get({
        url: 'zucai/getschedule',
        data: {
          lottery_type: 'NineToTo',
          station_user_id: itou.localJson.getJson('/user/shop/details/').id,
          station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
        },
        apiType: 'itApi'
      }).then(function (data) {
        var Arr = [];
        data.list.forEach(function (caiqiItem, index) {
          var d = new Model.caiqiModel(caiqiItem);
          if (Model.cache.lottery_no == d.no) {
            //--设置当前彩期
            d.isCurr = '1';
            Model.caiqi.curr = d;
          }
          try {
            //--尝试格式化彩期截止时间
            d.strart_time = d.strart_time.Dateformat('mm-dd HH:NN');
            var today = new Date().Dateformat('yyyy-mm-dd 00:00:00').toDate(),
              //--今天日期
              endDay = d.end_time.Dateformat('yyyy-mm-dd 00:00:00').toDate(),
              //--截止日期
              dayDiff = today.DateDiff('d', endDay); //--日期差
            switch (dayDiff) {
              case 1:
                d.end_time = d.end_time.Dateformat('明天 HH:NN');
                break;
              case -1:
                d.end_time = d.end_time.Dateformat('昨天 HH:NN');
                break;
              case 0:
                d.end_time = d.end_time.Dateformat('今天 HH:NN');
                break;
              default:
                d.end_time = d.end_time.Dateformat('mm-dd HH:NN');
                break;
            }
          } catch (error) {
            console.error('彩期截止/开始时间格式化失败', error.message);
          }
          Arr.push(d);
        }, this);
        if (!Model.caiqi.curr && Arr[0]) {
          Arr[0].isCurr = '1';
          Model.caiqi.curr = Arr[0];
          Model.cache.clearCache();
          Model.cache.lottery_no = Model.caiqi.curr.no;
        }
        Model.cache.lottery_no = Model.caiqi.curr && Model.caiqi.curr.no;
        Model.cache.saveCache();
        Model.caiqi.list = Arr;
      });
    };
    self.getList = function () {
      //--获取赛事列表
      try {
        //--获取当前彩期期号
        var lottery_no = Model.caiqi.curr.no;
      } catch (error) {
        var lottery_no = 0;
      }
      return itou.get({
        url: 'zucai/selectlist',
        data: {
          lottery_type: 'NineToTo',
          lottery_no: lottery_no,
          station_user_id: itou.localJson.getJson('/user/shop/details/').id,
          station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
        },
        apiType: 'itApi',
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        var Arr = [],
          lArr = [],
          match_list = data.match_list || {},
          selected = Model.cache.selected;
        // data.schedule_info.status = 1;
        for (var i in match_list) {
          var itemData = match_list[i];
          var item = new Model.itemModel(itemData);
          try {
            //--尝试格式化比赛时间
            item.date = item.date.Dateformat('mm-dd HH:NN');
          } catch (error) {}
          if (selected[item.no] && selected[item.no].length > 0) {
            //--读取缓存的选择数据
            selected[item.no].forEach(function (num) {
              item.doSelected(num);
            }, this);
            selected[item.no] = item.selected;
          } else {
            delete selected[item.no];
          }
          if (Model.cache.dan.indexOf(item.no) > -1) {
            item.dan = true;
          }
          lArr.push(item.no);
          Arr.push(item);
        }
        Model.list = Arr;
        Model.ready = true;
        Model.cache.checkData(lArr); //--清理冗余缓存数据
        try {
          //--尝试更新当前彩期的开售状态和奖池
          Model.caiqi.curr.status = new String(data.schedule_info.status);
          Model.caiqi.curr.pool_prize = new String(data.prize_info.pool_prize);
          if (Model.caiqi.curr.status == '0') {
            Model.compute.desc = '<p>彩期未开售</p><p>开售时间：' + Model.caiqi.curr.strart_time + '</p>';
            if (!Model.cache.hasToast[lottery_no]) {
              window.vm.showToast('官方彩期暂未开售');
              Model.cache.hasToast[lottery_no] = true;
              Model.cache.saveCache();
            }
          }
        } catch (error) {
          console.debug(error.message);
        }
        Model.compute.init();
      }).then(function () {
        Model.compute["do"]();
      });
    };
  };
  var Model = function Model() {
    var self = this;
    Lottery(); //--采种信息初始化
    self.ready = false; //--是否准备完毕
    self.caiqiModel = CaiQi(self); //--创建彩期数据原型
    self.itemModel = Item(self); //--赛事行数据原型

    // self.jianpan = new Jianpan(self);
    self.cache = Cache(self); //--缓存处理对象
    self.msg = new Msg(self); //--弹窗显示控制对象
    self.compute = Compute(self); //--页面计算数据对象
    self.result = Result(self); //--页面计算结果数据对象，依赖self.compute对象
    self.list = []; //--列表数据数组
    self.caiqi = {
      //--彩期数据信息
      curr: null,
      //--当前彩期，数据为彩期列表内元素
      showList: false,
      //--是否显示财期列表
      list: [],
      //--彩期列表
      show: function show() {
        //--显示/隐藏彩期列表
        self.caiqi.showList = !self.caiqi.showList;
      }
    };
    self.finishCount = [];
    self.apis = new Apis(self); //--接口处理对象

    if ($.paijiang) {
      var sid = Gray.$page.getUrlParam('station_id') || '';
      $.paijiang.init({
        dataType: 'lottery',
        sid: sid
      });
      $.paijiang.apis.getInfo({
        lottery_type: 'NineToTo',
        station_user_id: sid
      });
      self.paijiang = $.paijiang;
    } else {
      self.paijiang = {};
    }
    self.advertising_data = {
      dest_url: '',
      show: false
    };
    self.station_id = itou.localJson.getJson('__entry_info').station_id;
    console.debug(self);
    self.is_allow = false;
    self.hemai_allow = false;
  };
  Model.prototype.getAdvertising = function () {
    var self = this;
    self.apis.getAdertisingStatus().then(function (result) {
      var defer = $.Deferred();
      if (result.data.toString()) {
        self.advertising_data.dest_url = result.data.dest_url;
        var time = localStorage.getItem('advertising_time'); //itou.localJson.getJson('advertising_time');
        var d = new Date();
        var now_time = d.getTime();
        if (!time) {
          self.advertising_data.show = true;
          //itou.localJson.setJson('advertising_time', now_time);
        } else if (now_time - time > 86400000) {
          self.advertising_data.show = true;
        }
        defer.resolve();
      }
      return defer.promise();
    });
  };
  window.pageLoad = function () {
    window.vm = new Vue({
      el: '#body',
      components: {
        'w500-banner-adv': _components_public_w500_banner_adv_index_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new Model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        //$data.getAdvertising();
        $data.apis.getFinishCount();
        $data.apis.getCaiqi() //--获取彩期信息
        .then(function () {
          return $data.apis.getList(); //--获取赛事列表
        }).then(function () {
          if (vm.position && (prevPage.has('/match2/') || prevPage.has('/confirm/') || prevPage.has('/hm/add/') || prevPage.has('/jingcai/prizereview/') || prevPage.has('/project/detail/'))) {
            vm.position.init({
              //--重定位功能初始化
              el: '#scrollBody'
            });
            vm.position["do"]();
          }
        });
        if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
          $data.apis.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
        }
        if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
          $data.apis.getHemaiStatus().then(function (result) {
            self.hemai_allow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_id).status;
        }
      },
      mounted: function mounted() {
        var self = this;
        self.$refs.numkeyboard.init({
          //--设置数字键盘快捷按钮数字
          topKey: [10, 50, 100, 200, 500]
        });
      },
      beforeDestroy: function beforeDestroy() {
        var self = this;
        if (self.position) {
          self.position.init({
            //--重定位功能初始化
            el: '#scrollBody'
          });
          self.position.setPosition();
        }
      },
      computed: {
        moneyAll: function moneyAll() {
          var self = this;
          self.compute.money = 2 * self.compute.zhushu;
          self.compute.moneyAll = 2 * self.compute.zhushu * self.compute.beishu;
          self.compute.zhushuAll = self.compute.zhushu * self.compute.beishu;
          self.cache.beishu = self.compute.beishu;
          self.cache.saveCache(); //--保存缓存
          if (self.compute.moneyAll > 0) {
            //--调用票数计算组件，计算票数量
            try {
              itou.outil.timmer.newTimmer({
                //--延时700毫秒
                key: 'NineToTo_Compute_ticket_num',
                fun: function fun() {
                  itou.outil.timmer.clearTimmer('NineToTo_Compute_ticket_num');
                  var data = self.result.doReload().getJson();
                  vm.$refs.ticket_num.doCompute(data, 900);
                },
                timeout: 100
              });
            } catch (error) {
              console.error(error);
            }
          }
          return self.compute.moneyAll;
        },
        finishCount_no_desc: function finishCount_no_desc() {
          return _.orderBy(this.finishCount, 'no', 'desc');
        }
      },
      methods: {
        close_adv: function close_adv() {
          var self = this;
          self.advertising_data.show = false;
          var d = new Date();
          var now_time = d.getTime();
          localStorage.setItem('advertising_time', now_time);
          //itou.localJson.setJson('advertising_time', now_time);
        },

        look_adv_details: function look_adv_details() {
          var self = this,
            $data = self.$data;
          $data.apis.getAdvNum().then(function (result) {
            Gray.$page.loadPage(self.advertising_data.dest_url);
          });
        },
        gotoMatch: function gotoMatch(item) {
          //--查看战绩分析
          var matchid = item.id;
          if (!matchid) {
            return;
          }
          if (item.reversion) {
            var msg = '<span class=\'fontred\'>您将要打开的数据页面中，主客场位置与当前投注页相反，</span>投注时请确认主客队位置，一旦提交，我们将按照您的所选选项执行。<br />';
            vm.showMsgBox(msg, '重要提醒', 'beforeGotoMatch_close', '确定');
            vm.$on('msgbox_close', function (msg) {
              if (msg == 'beforeGotoMatch_close') {
                // Gray.$page.loadPage("/match/history/?doreset=1&lotteryId=10&matchid=" + matchid + "&back=" + this.backurl);
                Gray.$page.loadPage('/match2/?pageName=history&matchid=' + matchid + '&lotteryId=10&lottStyle=zc&back=' + this.backurl);
              }
            });
          } else {
            // Gray.$page.loadPage("/match/history/?doreset=1&lotteryId=10&matchid=" + matchid + "&back=" + this.backurl);
            Gray.$page.loadPage('/match2/?pageName=history&matchid=' + matchid + '&lotteryId=10&lottStyle=zc&back=' + this.backurl);
          }
        },
        showJianpan: function showJianpan() {
          //--弹出软键盘
          var self = this;
          self.numkeyboard.open('compute.beishu', 'compute.beishuMax', self);
        },
        doSave: function doSave() {
          //--保存方案
          var self = this;
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('project_save');
          if (self.compute.checkData()) {
            var r = self.result.doReload().getJson();
            itou.outil.saveProject(r, 'save');
          }
        },
        doSubmit: function doSubmit() {
          //--提交方案
          var self = this;
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('project_next');
          if (self.compute.checkData()) {
            var r = self.result.doReload().getJson();
            itou.outil.saveProject(r, 'submit');
          }
        },
        doHemai: function doHemai() {
          //--保存方案
          var self = this;
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('project_sharebuy');
          if (self.compute.checkData()) {
            var r = self.result.doReload().getJson();
            itou.sessionData.setData('__hemai_pingce', {
              num: 0
            });
            itou.outil.saveProject(r, 'hemai');
          }
        },
        doRefresh: function doRefresh() {
          var self = this;
          self.cache.clearCache();
          if (self.caiqi && self.caiqi.curr) {
            self.cache.lottery_no = self.caiqi.curr.no;
          }
          self.compute.beishu = 1;
          self.cache.saveCache();
          return self.apis.getList() //--获取赛事列表
          .then(function () {
            self.ascroll.resetload();
          });
        },
        checkSubmit: function checkSubmit() {
          //--检查数据并弹出提交按钮
          var self = this;
          if (!self.compute.checkData()) {
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/w500-banner-adv/index.vue?vue&type=template&id=3c4091ce&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.shopId && _vm.scene ? _c("div", {
    staticClass: "partner_show"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.src && _vm.isShow,
      expression: "src && isShow"
    }],
    staticClass: "advertbox",
    on: {
      click: _vm.gotoW500
    }
  }, [_c("img", {
    attrs: {
      src: _vm.src,
      alt: ""
    }
  })])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/w500-banner-adv/index.vue?vue&type=template&id=3c4091ce&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/w500-banner-adv/index.vue?vue&type=script&lang=js&
/**
 * 500万合作广告
 * @description 500万合作广告
 * @author zhaoyf
 * @time 2023/09/05 15:41:23
 * @copyright 2023 itou
 */


/* harmony default export */ var w500_banner_advvue_type_script_lang_js_ = ({
  name: 'w500-banner-adv',
  props: {
    scene: {
      type: String,
      "default": ''
    },
    shopId: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      src: '',
      isShow: false,
      sceneCn: ''
    };
  },
  mounted: function mounted() {
    var sceneCn = {
      match_toto: '投注页',
      match_nine: '投注页',
      match_index: '赛事分析页',
      live_score: '即时比分页'
    };
    this.sceneCn = sceneCn[this.scene];
    this.getAdvImg();
  },
  methods: {
    /**
     * @function gotoW500
     * @description 跳转到去500万的中转页
     */
    gotoW500: function gotoW500() {
      var sceneCn = this.sceneCn;
      sceneCn && itou.baiduHm(sceneCn, '大数据入口点击'); //--百度统计
      var url = '/monetize/tow500/'; //--500万中转页面
      url += '?scene=' + this.scene; //--场景
      url += '&back=' + window.backurl; //--返回路径
      url += '&id=' + this.shopId; //--店铺ID
      Gray.$page.loadPage(url); //--跳转到中转页面
    },
    /**
     * @function getAdvImg
     * @description 获取广告图片
     */
    getAdvImg: function getAdvImg() {
      var _this = this;
      var shopId = this.shopId,
        scene = this.scene;
      // console.error(shopId, matchId, imgType);
      if (shopId && scene) {
        return itou.get({
          url: 'w500/getImg',
          data: {
            station_user_id: this.shopId,
            scene: scene
          },
          rnd: false,
          notoken: true,
          specialErr: {
            '-3': function _() {}
          }
        }).then(function (data) {
          _this.src = data.img || '';
          _this.isShow = data.is_show;
          if (_this.src && _this.isShow) {
            var sceneCn = _this.sceneCn;
            sceneCn && itou.baiduHm(sceneCn, '大数据入口曝光'); //--百度统计
          }
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/w500-banner-adv/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_w500_banner_advvue_type_script_lang_js_ = (w500_banner_advvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/w500-banner-adv/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_w500_banner_advvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/w500-banner-adv/index.vue"
/* harmony default export */ var w500_banner_adv = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });