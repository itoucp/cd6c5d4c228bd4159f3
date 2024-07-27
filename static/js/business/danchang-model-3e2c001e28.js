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
/******/ 		35: 0
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
/******/ 	deferredModules.push([172,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

/**
 * 微信C端		北京单场数据原型
 * by	zhaoyf	2017-06-20 10:17:59
 * 依赖：public/lottery.js文件
 */
(function () {
  var match_computer = __webpack_require__(40); //--最大奖金计算
  var lottery = $.lottery; //--引用原lottery对象
  var setting = itou.lotterySetting.danchang; //--北单投注设置
  var $setting = {
    //--基础设置
    ScoreGroup: {
      //--比分选项分组
      '主胜比分': ['10', '20', '21', '30', '31', '32', '40', '41', '42', '43'],
      '平局': ['00', '11', '22', '33', '44'],
      '主负比分': ['01', '02', '12', '03', '13', '23', '04', '14', '24', '34']
    },
    HalfFullOrder: ['33', '13', '03', '31', '11', '01', '30', '10', '00'],
    //--半全场排列顺序
    maps: {
      //--映射关系
      ptName: {
        //--玩法中文与英文名称映射关系
        WL: '胜负过关',
        WDL: '单场胜平负',
        Score: '单场比分',
        HalfFull: '单场半全场',
        TotalGoals: '单场总进球',
        OverUnder: '单场上下单双'
      },
      ptGroup: {
        //--单场分组映射关系
        WL: ['WL'],
        WDL: ['WDL', 'TotalGoals', 'HalfFull', 'Score', 'OverUnder']
      },
      optCode: {
        //--玩法选项与编码映射关系
        WDL: {
          '3': '胜',
          '1': '平',
          '0': '负'
        },
        Score: {
          '10': '1:0',
          '20': '2:0',
          '21': '2:1',
          '30': '3:0',
          '31': '3:1',
          '32': '3:2',
          '40': '4:0',
          '41': '4:1',
          '42': '4:2',
          '50': '5:0',
          '51': '5:1',
          '52': '5:2',
          '43': '胜其他',
          '00': '0:0',
          '11': '1:1',
          '22': '2:2',
          '33': '3:3',
          '44': '平其他',
          '01': '0:1',
          '02': '0:2',
          '12': '1:2',
          '03': '0:3',
          '13': '1:3',
          '23': '2:3',
          '04': '0:4',
          '14': '1:4',
          '24': '2:4',
          '05': '0:5',
          '15': '1:5',
          '25': '2:5',
          '34': '负其他'
        },
        HalfFull: {
          '33': '胜/胜',
          '13': '平/胜',
          '03': '负/胜',
          '31': '胜/平',
          '11': '平/平',
          '01': '负/平',
          '30': '胜/负',
          '10': '平/负',
          '00': '负/负'
        },
        TotalGoals: {
          '0': '0球',
          '1': '1球',
          '2': '2球',
          '3': '3球',
          '4': '4球',
          '5': '5球',
          '6': '6球',
          '7': '7+'
        },
        WL: {
          '3': '胜',
          '0': '负'
        },
        OverUnder: {
          //--北京单场上下盘单双
          '0': '下双',
          '1': '下单',
          '2': '上双',
          '3': '上单'
        }
      },
      ptUrl: {
        //--玩法与链接映射关系
        WL: '/guoguan/',
        Score: '/bifen/',
        HalfFull: '/banquan/',
        TotalGoals: '/jinqiu/',
        OverUnder: '/danshuang/',
        WDL: ''
      }
    },
    guoguan: {
      //--混合过关映射关系
      /**
      * 复合过关与普通过关映射关系
      * 数组第一位代表单关数量，第二位代表二串一数量，第三位代表三串一数量，以此类推
      */
      '2_3': [2, 1],
      '3_4': [0, 3, 1],
      '3_7': [3, 3, 1],
      '4_5': [0, 0, 4, 1],
      '4_11': [0, 6, 4, 1],
      '4_15': [4, 6, 4, 1],
      '5_6': [0, 0, 0, 5, 1],
      '5_16': [0, 0, 10, 5, 1],
      '5_26': [0, 10, 10, 5, 1],
      '5_31': [5, 10, 10, 5, 1],
      '6_7': [0, 0, 0, 0, 6, 1],
      '6_22': [0, 0, 0, 15, 6, 1],
      '6_42': [0, 0, 20, 15, 6, 1],
      '6_57': [0, 15, 20, 15, 6, 1],
      '6_63': [6, 15, 20, 15, 6, 1]
    },
    limit: {
      //--不同玩法的限制
      WDL: {
        guoguan: [1, 15, 1, 6],
        //--过关限制，分别是单一最小值、单一最大值、混和最小值、混合最大值
        maxGuoguan: 8,
        //--最多过关方式，最多可以选择的过关数量
        select: setting.guoguan.max || 20,
        //--场次最大数量限制
        zhushu: 5 * Math.pow(10, 4),
        //--单倍注数限制
        beishu: 5 * Math.pow(10, 4),
        //--倍数最大限制
        money: 200 * Math.pow(10, 4),
        //--彩金最大限制
        prize: 500 * Math.pow(10, 4) //--评测奖金最大限制
      },

      Score: {
        guoguan: [1, 3, 1, 3],
        //--过关限制，分别是单一最小值、单一最大值、混和最小值、混合最大值
        maxGuoguan: 8,
        //--最多过关方式，最多可以选择的过关数量
        select: setting.guoguan.max || 20,
        //--场次最大数量限制
        zhushu: 5 * Math.pow(10, 4),
        //--单倍注数限制
        beishu: 5 * Math.pow(10, 4),
        //--倍数最大限制
        money: 200 * Math.pow(10, 4),
        //--彩金最大限制
        prize: 500 * Math.pow(10, 4),
        //--评测奖金最大限制
        intro: 6 //--选中项最大显示个数，超出的显示...
      },

      HalfFull: {
        guoguan: [1, 6, 1, 6],
        //--过关限制，分别是单一最小值、单一最大值、混和最小值、混合最大值
        maxGuoguan: 8,
        //--最多过关方式，最多可以选择的过关数量
        select: setting.guoguan.max || 20,
        //--场次最大数量限制
        zhushu: 5 * Math.pow(10, 4),
        //--单倍注数限制
        beishu: 5 * Math.pow(10, 4),
        //--倍数最大限制
        money: 200 * Math.pow(10, 4),
        //--彩金最大限制
        prize: 500 * Math.pow(10, 4),
        //--评测奖金最大限制
        intro: 6 //--选中项最大显示个数，超出的显示...
      },

      TotalGoals: {
        guoguan: [1, 6, 1, 6],
        //--过关限制，分别是单一最小值、单一最大值、混和最小值、混合最大值
        maxGuoguan: 8,
        //--最多过关方式，最多可以选择的过关数量
        select: setting.guoguan.max || 20,
        //--场次最大数量限制
        zhushu: 5 * Math.pow(10, 4),
        //--单倍注数限制
        beishu: 5 * Math.pow(10, 4),
        //--倍数最大限制
        money: 200 * Math.pow(10, 4),
        //--彩金最大限制
        prize: 500 * Math.pow(10, 4) //--评测奖金最大限制
      },

      OverUnder: {
        guoguan: [1, 6, 1, 6],
        //--过关限制，分别是单一最小值、单一最大值、混和最小值、混合最大值
        maxGuoguan: 8,
        //--最多过关方式，最多可以选择的过关数量
        select: setting.guoguan.max || 20,
        //--场次最大数量限制
        zhushu: 5 * Math.pow(10, 4),
        //--单倍注数限制
        beishu: 5 * Math.pow(10, 4),
        //--倍数最大限制
        money: 200 * Math.pow(10, 4),
        //--彩金最大限制
        prize: 500 * Math.pow(10, 4) //--评测奖金最大限制
      },

      WL: {
        /**
        * 注意：胜负过关的复合过关，需要筛选不包含单关和二串一的复合过关项
        */
        guoguan: [3, 15, 3, 6],
        //--过关限制，分别是单一最小值、单一最大值、混和最小值、混合最大值
        maxGuoguan: 8,
        //--最多过关方式，最多可以选择的过关数量
        select: setting.guoguan.max || 20,
        //--场次最大数量限制
        zhushu: 5 * Math.pow(10, 4),
        //--单倍注数限制
        beishu: 5 * Math.pow(10, 4),
        //--倍数最大限制
        money: 200 * Math.pow(10, 4),
        //--彩金最大限制
        prize: 500 * Math.pow(10, 4) //--评测奖金最大限制
      }
    },

    sport: {
      //--运动类型编码与名称、计数单位的映射
      '201': ['足球', '球'],
      //--运动名称、让分计数单位
      '202': ['篮球', '分'],
      '203': ['排球', '局'],
      '204': ['沙滩排球', '局'],
      '205': ['冰球', '球'],
      '206': ['网球', '盘'],
      '207': ['羽毛球', '局'],
      '208': ['水球', '球'],
      '209': ['曲棍球', '球'],
      '210': ['乒乓球', '局'],
      '211': ['手球', '球'],
      '212': ['橄榄球', '分']
    }
  };
  var Cache = function Cache(DanChang) {
    //--缓存数据对象
    /**
    * 缓存需包含以下数据及要求
    * currpt: 当前玩法，切换玩法时，需要同步修改
    * selected: 赛事选择数据，数据格式{@串号1: [@code1, @code2, …………], @串号2: [@code1, @code2, …………]}
    * dan: 设为胆的赛事数组[@串号1, @串号2, …………]
    * num: 选择的赛事数量
    * guoguan: 选择的过关方式，数组 [n_1, m_1, o_1, n_m, ……]
    * search: 搜索项选择情况
    * save方法: 直接获取选择的数据，并保存到缓存
    */
    var id = Gray.$page.getUrlParam('id') || '';
    var url = Gray.$page.href || window.location.href;
    if (url.has('/guoguan/prize/')) {
      var key = 'WL_prize' + id; //--胜负过关开奖结果
    } else if (url.has('/guoguan/')) {
      var key = 'WL'; //--胜负过关
    } else if (url.has('/prize/')) {
      var key = 'WDL_prize' + id; //--非胜负过关开奖结果
    } else {
      var ptUrl = $setting.maps.ptUrl,
        r = '';
      for (var i in ptUrl) {
        if (url.has(ptUrl[i])) {
          r = i;
          break;
        }
      }
      var key = r || 'WDL';
    }
    itou.dataModel.config({
      //---查询对象
      key: 'danchang_cache',
      opts: {
        currpt: {
          t: '当前玩法',
          k: 'currpt',
          d: function d() {
            return key.replace('_prize' + id, '');
          }
        },
        key: {
          t: '赛事选择数据',
          k: '',
          d: function d() {
            return key;
          }
        },
        selected: {
          t: '赛事选择数据',
          k: 'selected',
          d: {}
        },
        dan: {
          t: '设为胆的赛事数组',
          k: 'dan',
          d: []
        },
        num: {
          t: '选择的赛事数量',
          k: 'num',
          d: 0
        },
        beishu: {
          t: '倍数',
          k: 'beishu',
          d: 0
        },
        page: {
          t: '页码',
          k: 'page',
          d: 1
        },
        pagesize: {
          t: '每页条数',
          k: 'pagesize',
          d: 50
        },
        top: {
          t: '滚动的长度',
          k: 'top',
          d: 0
        },
        guoguan: {
          t: '选择的过关方式',
          k: 'guoguan',
          d: []
        },
        search: {
          t: '搜索项选择情况',
          k: 'search',
          d: {}
        }
      }
    });
    var cache = itou.dataModel.dataFactory.create('danchang_cache'); //--查询对象构造函数创建
    cache.prototype.save = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$prize = _ref.prize,
        prize = _ref$prize === void 0 ? false : _ref$prize;
      //--保存缓存数据
      var self = this,
        bet = DanChang.bet,
        data = bet.getSelected && bet.getSelected() || '';
      self.currpt = data.currpt;
      self.selected = data.selected;
      self.dan = data.dan;
      self.num = data.num;
      self.beishu = data.beishu;
      self.guoguan = data.guoguan;
      self.search = bet.search.selected;
      self.page = bet.page || 1;
      self.pagesize = bet.pagesize || 50;
      self.top = $('section').scrollTop() || 0;
      itou.sessionData.setData('__danchang_cache_' + key, self.getJson());
      if (!prize) {
        itou.sessionData.setData('__danchang_search_cache_', {
          search: self.search
        });
      }
    };
    return new cache();
  };
  var Search = function Search(Bet) {
    //--投注和开奖结果公用查询对象
    itou.dataModel.config({
      //---查询对象
      key: 'danchang_search',
      opts: {
        parent: {
          t: 'Bet/Prize对象',
          k: '',
          d: function d() {
            return Bet;
          }
        },
        isShow: {
          t: '是否展示',
          k: '',
          d: false
        },
        group: {
          t: '选项分组',
          k: '',
          d: {}
        },
        groupNum: {
          t: '选项分组数量',
          k: '',
          d: 0
        },
        selected: {
          t: '选中项，用来提交数据',
          k: '',
          d: function d() {
            // console.log(Bet.parent);
            var DanChang = Bet.parent,
              cache = DanChang.cache,
              r = cache.search;
            // console.log('reload',cache);
            !r ? r = {} : '';
            return r;
          }
        },
        selected1: {
          t: '选中项，用来呈现数据',
          k: '',
          d: function d(data, me) {
            var r = $.extend({}, me.selected);
            return r;
          }
        },
        hasSelected: {
          t: '是否选择了选项',
          k: '',
          d: false
        }
      }
    });
    var search = itou.dataModel.dataFactory.create('danchang_search'); //--查询对象构造函数创建
    search.prototype.getInfo = function (url) {
      //--获取选项数据信息
      var self = this,
        bet = self.parent,
        currpt = bet.currpt;
      url = url || 'dc/leaguelist';
      return itou.get({
        url: url,
        data: {
          lottery_type: currpt,
          lottery_no: bet.no || ''
          // station_user_id: itou.localJson.getJson("/user/shop/details/").id,
          // station_uuid: itou.localJson.getJson("/user/shop/details/").uuid
        },

        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        var list = data.league_list,
          sport = $setting.sport,
          r = {};
        if (!itou.outil.is(list, 'Array')) {
          for (var i in list) {
            self.groupNum += 1;
            var obj = {};
            obj.title = sport[i][0];
            obj.opts = list[i];
            r[i] = obj;
          }
        }
        self.group = r;
        self.checkSelected();
        self.selected1 = $.extend({}, self.selected);
      });
    };
    search.prototype.select = function (no, key) {
      //--选择筛选项
      var self = this,
        selected = $.extend({}, self.selected1);
      if (!selected[no]) {
        selected[no] = [];
      }
      var index = selected[no].indexOf(key);
      if (index == -1) {
        selected[no].push(key);
      } else {
        selected[no].splice(index, 1);
      }
      if (selected[no].length == 0) {
        delete selected[no];
      }
      self.selected1 = selected;
    };
    search.prototype.selectAll = function () {
      //--全选
      var self = this,
        group = self.group,
        selected = self.selected1,
        r = {};
      for (var i in group) {
        var opts = group[i].opts;
        r[i] = [];
        opts.forEach(function (opt) {
          r[i].push(opt);
        }, this);
      }
      self.selected1 = r;
    };
    search.prototype.selectInvert = function () {
      //--反选
      var self = this,
        group = self.group,
        selected = self.selected1,
        r = {};
      for (var i in group) {
        var opts = group[i].opts,
          s = selected[i] || [];
        r[i] = [];
        opts.forEach(function (opt) {
          if (s.indexOf(opt) == -1) {
            r[i].push(opt);
          }
        }, this);
        if (r[i].length == 0) {
          delete r[i];
        }
      }
      self.selected1 = r;
    };
    search.prototype.checkSelected = function () {
      //--检查被选中的数据
      var self = this,
        selected = self.selected1,
        group = self.group,
        num = 0;
      for (var i in selected) {
        if (!group[i]) {
          delete selected[i];
        } else {
          selected[i] = Array.intersect(selected[i], group[i].opts);
          num += selected[i].length;
        }
      }
      self.hasSelected = num > 0;
    };
    search.prototype["do"] = function () {
      //--执行检索
      var self = this;
      self.selected = self.selected1;
      self.checkSelected();
    };
    search.prototype.undo = function () {
      //--取消检索
      var self = this;
      self.selected1 = self.selected;
    };
    return new search();
  };
  var Bet = function Bet(DanChang) {
    //--投注数据原型
    self.localData = {
      t: '北京单场',
      v: '',
      service: '',
      num: 0,
      map: 'danchang'
    };
    itou.localData.setData('__sys_lottery_type', {
      key: self.localData
    });
    itou.dataModel.config({
      //---赛事选项据数据对象
      key: 'danchang_bet_opts',
      opts: {
        WL: {
          t: '胜负过关',
          k: '',
          d: {}
        },
        WDL: {
          t: '单场胜平负',
          k: '',
          d: {}
        },
        Score: {
          t: '单场比分',
          k: '',
          d: {}
        },
        HalfFull: {
          t: '单场半全场',
          k: '',
          d: {}
        },
        TotalGoals: {
          t: '单场总进球',
          k: '',
          d: {}
        },
        OverUnder: {
          t: '单场上下单双',
          k: '',
          d: {}
        }
      }
    });
    var opts = itou.dataModel.dataFactory.create('danchang_bet_opts'); //--赛事选项据对象构造函数创建
    opts.prototype.formatData = function (data, no) {
      //--格式化数据，获取想要的数据格式
      var self = this,
        list = data.list,
        cache = DanChang.cache,
        selected = cache.selected[no] || [];
      // var data = cache.getJson();
      // console.log(no, selected,JSON.stringify(data));
      for (var pt in self) {
        var info = list[pt];
        if (info) {
          var odds = info.odds,
            optCode = $setting.maps.optCode[pt],
            r = {};
          r.pankou = info.boundary; //--盘口
          if (r.pankou > 0) {
            r.pankou = '+' + r.pankou;
          }
          r.id = info.bet_id; //--id
          r.opts = {};
          for (var i in odds) {
            if (optCode[i]) {
              var obj = {};
              obj.name = optCode[i]; //--选项名称
              obj.odds = odds[i]; //--赔率
              obj.s = selected.indexOf(i) != -1;
              r.opts[i] = obj;
            }
          }
          self[pt] = r;
        }
      }
      return self;
    };
    opts = new opts();
    itou.dataModel.config({
      //--赛事行数据对象
      key: 'danchang_bet_item',
      opts: {
        parent: {
          t: 'Bet对象',
          k: 'betObj',
          d: ''
        },
        team: {
          t: '队伍信息',
          k: '',
          d: function d(data, me) {
            var r = {
                host: {},
                guest: {}
              },
              rank = data.rank;
            rank['1'] = rank['1'] || {};
            rank['2'] = rank['2'] || {};
            r.host.name = (data.host_name_s + '').left(5);
            r.guest.name = (data.guest_name_s + '').left(5);
            r.host.rank = rank['1'].rank || '- -';
            r.guest.rank = rank['2'].rank || '- -';
            r.host.league = rank['1'].rank_league || '';
            r.guest.league = rank['2'].rank_league || '';
            r.host.id = rank['1'].team_id || 0;
            r.guest.id = rank['2'].team_id || 0;
            return r;
          }
        },
        league: {
          t: '赛事信息',
          k: '',
          d: function d(data, me) {
            var r = {},
              color = data.league_color;
            r.name = data.league_name;
            r.bgcolor = color[0] || '#666';
            //r.color = color[1] || "#000";
            r.color = '#fff';
            return r;
          }
        },
        sport: {
          t: '运动类型',
          k: '',
          d: function d(data, me) {
            var sport = $setting.sport,
              curr = data.sport_type,
              r = {};
            r.name = sport[curr][0];
            r.unit = sport[curr][1];
            r.id = curr;
            return r;
          }
        },
        sort: {
          t: '排序',
          k: '',
          d: function d(data, me) {
            return ('00' + data.sort).right(3);
          }
        },
        time: {
          t: '比赛时间',
          k: '',
          d: function d(data, me) {
            var time = data.bet_time;
            return time.Dateformat('HH:NN');
          }
        },
        no: {
          t: '唯一标识',
          k: 'serial_no',
          d: ''
        },
        list: {
          t: '所有投注项',
          k: '',
          d: function d(data, me) {
            return opts.formatData(data, me.no).getJson();
          }
        },
        id: {
          t: '赛事ID',
          k: 'match_id2',
          d: ''
        },
        dan: {
          t: '是否设胆',
          k: '',
          d: function d(data, me) {
            var cache = DanChang.cache,
              dan = cache.dan || [];
            return dan.indexOf(me.no) != -1;
          }
        },
        selected: {
          t: '选择数据对象',
          k: '',
          d: {
            codes: [],
            intro: []
          }
        } //--用于半全场和比分弹层选择信息的处理
      }
    });

    var item = itou.dataModel.dataFactory.create('danchang_bet_item'); //--赛事行数据对象构造函数创建
    item.prototype.showMore = function () {
      //--展示半全场和比分选择弹层
      var self = this,
        no = self.no,
        cache = DanChang.cache,
        bet = DanChang.bet,
        computer = bet.computer,
        limit = bet.limit,
        //--限制条件
        currpt = bet.currpt;
      try {
        var data = bet.getSelected() || {},
          selected = data.selected,
          num = data.num || 0,
          opts = self.list[currpt].opts;
        if (num >= limit.select && !selected[no] && !opts[code].s) {
          //--超过最大赛事选择数量
          window.vm.showToast('最多可以选择' + limit.select + '个赛事');
          return;
        }
        bet.currItem = self;
        self.getSelected(); //console.log(self);
      } catch (error) {
        console.error(error.message);
        return;
      }
    };
    item.prototype.getSelected = function () {
      //--获取选中的信息
      var self = this,
        bet = DanChang.bet,
        limit = bet.limit,
        //--限制条件
        max = limit.intro || 6,
        currpt = bet.currpt,
        opts = self.list[currpt].opts,
        group = $setting.ScoreGroup,
        //--比分分组信息
        r = {};
      r.codes = [];
      r.intro = [];
      r.introScore = {};
      r.optName = [];
      for (var i in opts) {
        var opt = opts[i];
        if (opt.s) {
          r.codes.push(i);
          r.optName.push(opt.name);
          if (currpt == 'Score') {
            for (var ii in group) {
              if (!r.introScore[ii]) {
                r.introScore[ii] = [];
              }
              if (group[ii].indexOf(i) != -1) {
                r.introScore[ii].push(opt.name);
              }
            }
          } else {
            if (r.intro.length < max) {
              r.intro.push(opt.name);
            }
          }
        }
      }
      for (var i in r.introScore) {
        r.intro = r.intro.concat(r.introScore[i]);
        r.intro = r.intro.splice(0, max);
      }
      if (r.codes.length > r.intro.length) {
        r.intro.push('...');
      }
      self.selected = r;
    };
    item.prototype.checkOpt = function (code) {
      //--弹层选中选项
      var self = this,
        codes = self.selected.codes,
        index = codes.indexOf(code);
      if (index == -1) {
        codes.push(code);
      } else {
        codes.splice(index, 1);
      }
    };
    item.prototype.ok = function () {
      //--确认选择
      var self = this,
        bet = DanChang.bet,
        computer = bet.computer,
        currpt = bet.currpt,
        opts = self.list[currpt].opts,
        selected = self.selected,
        hasSelected = false;
      for (var i in opts) {
        var opt = opts[i];
        opt.s = selected.codes.indexOf(i) != -1;
        if (opt.s) {
          hasSelected = true;
        }
      }
      if (!hasSelected) {
        //--取消设胆
        self.dan = false;
        delete bet.selectedItems[self.no];
      } else {
        bet.selectedItems[self.no] = self.no;
      }
      self.getSelected();
      computer["do"](); //--进行计算
      bet.currItem = null;
    };
    item.prototype.cancel = function () {
      //--取消选择
      var self = this,
        bet = DanChang.bet;
      self.getSelected();
      bet.currItem = null;
    };
    item.prototype.select = function (code) {
      //--选中选项，并触发计算和缓存
      var self = this,
        no = self.no,
        cache = DanChang.cache,
        bet = DanChang.bet,
        computer = bet.computer,
        limit = bet.limit,
        //--限制条件
        currpt = bet.currpt;
      try {
        var data = bet.getSelected() || {},
          selected = data.selected,
          num = data.num || 0,
          opts = self.list[currpt].opts;
        if (num >= limit.select && !selected[no] && !opts[code].s) {
          //--超过最大赛事选择数量
          window.vm.showToast('最多可以选择' + limit.select + '个赛事');
          return;
        }
        opts[code].s = !opts[code].s;
        bet.selectedItems[self.no] = self.no;
        if (!opts[code].s) {
          //--取消勾选时，如果所有选项都取消勾选，则取消设胆
          var hasSelected = false;
          for (var i in opts) {
            if (opts[i].s) {
              hasSelected = true;
            }
          }
          if (!hasSelected) {
            //--取消设胆
            self.dan = false;
            delete bet.selectedItems[self.no];
          } else {
            bet.selectedItems[self.no] = self.no;
          }
        }
      } catch (error) {
        console.error(error.message);
        return;
      }
      computer["do"](); //--进行计算
    };

    item.prototype.clear = function () {
      //--清除选中项
      var self = this,
        cache = DanChang.cache,
        bet = DanChang.bet,
        computer = bet.computer,
        currpt = bet.currpt,
        curr = self.list[currpt].opts;
      for (var i in curr) {
        curr[i].s = false;
      }
      self.dan = false;
      self.getSelected();
    };
    item.prototype.setDan = function () {
      //--设胆
      var self = this,
        bet = DanChang.bet,
        computer = bet.computer,
        data = bet.getSelected(),
        guoguan = data.guoguan,
        dan = data.dan;
      if (self.dan) {
        self.dan = false;
      } else {
        if (guoguan.length > 0) {
          var arr = [];
          guoguan.forEach(function (gg) {
            arr.push(gg.split('_')[0]);
          }, this);
          arr.length == 0 ? arr[0] = 0 : '';
          var min = Math.min.apply(null, arr);
          if (dan.length >= min) {
            window.vm.showToast('设胆个数不能超过最小过关场数');
            return;
          }
        }
        self.dan = true;
      }
      computer["do"](); //--进行计算
    };

    itou.dataModel.config({
      //---计算据数据对象
      key: 'danchang_bet_computer',
      opts: {
        parent: {
          t: 'Bet对象',
          k: '',
          d: function d(data) {
            return data;
          }
        },
        enough: {
          t: '是否足够',
          k: '',
          d: false
        },
        canYouhua: {
          t: '是否可以优化',
          k: '',
          d: false
        },
        guoguanHtml: {
          t: '过关文本',
          k: '',
          d: ''
        },
        beishu: {
          t: '倍数',
          k: '',
          d: function d() {
            var cache = DanChang.cache;
            return cache.beishu || 1;
          }
        },
        msg: {
          t: '选项不足时描述信息',
          k: '',
          d: ''
        },
        money: {
          t: '彩金',
          k: '',
          d: 0
        },
        prize: {
          t: '预计奖金',
          k: '',
          d: 0
        },
        selected: {
          t: '选择数据',
          k: '',
          d: {}
        },
        dan: {
          t: '胆',
          k: '',
          d: []
        },
        //--胆列表，会被formatData函数更新
        tuo: {
          t: '拖',
          k: '',
          d: []
        },
        //--拖列表，会被formatData函数更新
        single: {
          t: '单一过关',
          k: '',
          d: []
        },
        //--选中的单一过关方式，会被formatData函数更新
        mixed: {
          t: '混合过关',
          k: '',
          d: []
        },
        //--选中的混合过关方式，会被formatData函数更新
        odds: {
          t: '赔率',
          k: '',
          d: {}
        },
        //--赔率映射数据，数据结构与bet.selected.selected一致，将对应选项换为当时的赔率
        maxOdds: {
          t: '最大赔率',
          k: '',
          d: {}
        } //--赔率映射数据，保存每个赛事选中选项的最大赔率
      }
    });

    var computer = itou.dataModel.dataFactory.create('danchang_bet_computer'); //--计算数据对象构造函数创建
    computer.prototype["do"] = function () {
      //--进行计算
      var self = this,
        bet = self.parent,
        limit = bet.limit,
        currpt = bet.currpt,
        cache = DanChang.cache,
        data = bet.getSelected(true);
      cache.save();
      self.selected = data; //--用于其他函数的计算
      self.formatData(); //--格式化数据
      if (!self.enough) {
        return;
      }
      var params = {
          //--拼接奖金计算组件所需参数
          pass_type: self.selected.guoguan.join(','),
          //--串关
          multiple: self.beishu //--倍数
        },
        maxOdds = self.maxOdds,
        tuo = self.tuo,
        dan = self.dan,
        list = bet.list,
        odds = {},
        selected = {};
      tuo.concat(dan).forEach(function (match_no) {
        console.info(match_no);
        odds[match_no] = {};
        var s = list[match_no].selected.optName;
        selected[match_no] = [s]; //--个比赛选中项
        s.forEach(function (codeCn) {
          odds[match_no][codeCn] = maxOdds[match_no]; //--选项的赔率
        });
      });

      params.odds = odds;
      params.selected = selected;
      params.dc = true;
      params.abs = dan.join(',');
      match_computer.init(params); //--数据初始化
      self.prize = match_computer.getMaxMoney(); //--预计奖金计算
      self.money = match_computer.getCount() * 2; //--注数计算
      // console.log(prize, money);
      // self.doSingle();//--单一过关计算
      // self.doMixed();//--混合过关计算
      // console.log(self.prize, self.money);
      // if(self.prize >= limit.prize){//--超出最大值则取最大值
      // 	self.prize = limit.prize;
      // }
      if (data.guoguan.length == 0) {
        bet.guoguan.auto = true;
      }
      self.prize = Number(self.prize).toFixed(2);
      /**
      * 奖金优化条件：不包含混关、不设胆、非胜负过关、总投注金额小于10万、单倍注数小于500（单倍金额小于1000）
      */
      self.canYouhua = self.enough && self.mixed.length == 0 && self.dan.length == 0 && currpt != 'WL' && self.money <= 100000 && self.money / self.beishu <= 1000 && self.money / self.beishu > 2;

      //--调用票数计算组件，计算票数量
      try {
        var data = bet.result.reload(bet.computer).getJson();
        vm.$refs.ticket_num.doCompute(data, 1000);
      } catch (error) {
        console.warn(error);
      }
    };
    computer.prototype.formatData = function () {
      //--格式化数据
      var self = this,
        bet = self.parent,
        limit = bet.limit,
        currpt = bet.currpt,
        maps = bet.list,
        data = self.selected,
        selected = data.selected,
        guoguan = data.guoguan,
        dan = data.dan,
        tuo = [],
        single = [],
        mixed = [],
        odds = {},
        maxOdds = {};
      for (var i in selected) {
        if (dan.indexOf(i) == -1) {
          tuo.push(i);
        }
        var s = selected[i];
        odds[i] = [];
        s.forEach(function (code) {
          //--赔率数据处理
          odds[i].push(maps[i].list[currpt].opts[code].odds);
        }, this);
        maxOdds[i] = Math.max.apply(null, odds[i]);
      }
      self.odds = odds;
      self.maxOdds = maxOdds;
      self.dan = dan;
      self.tuo = tuo;
      self.money = 0;
      self.prize = 0;
      var min = Math.min.apply(null, limit.guoguan),
        index = limit.guoguan.indexOf(min),
        chineseArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
      self.msg = '至少选择' + (chineseArr[min] || '一') + '场比赛（竞猜全场90分钟的比赛结果）';
      self.enough = dan.length + tuo.length >= min;
      // if(guoguan.length == 0){
      // 	guoguan.push(min + "_1");
      // }
      guoguan.forEach(function (gg) {
        gg = gg.split('_');
        if (gg[1] == '1') {
          single.push(gg[0]);
        } else {
          mixed.push(gg);
        }
      }, this);
      self.single = single;
      self.mixed = mixed;
      var guoguanHtml = guoguan[0];
      if (guoguanHtml) {
        if (guoguanHtml == '1_1') {
          guoguanHtml = '单关';
        }
        if (guoguan.length > 1) {
          guoguanHtml += '..';
        }
        guoguanHtml = guoguanHtml.replace('_', '串');
        if (dan.length > 0) {
          guoguanHtml += '(<span class=\'fontred font12\'>胆</span>)';
        }
      } else {
        guoguanHtml = '选择过关';
      }
      self.guoguanHtml = guoguanHtml;
      // self.canYouhua = (mixed.length == 0 && dan.length == 0 && currpt != "WL");
    };

    computer.prototype.doPrize = function (zh) {
      //--计算注数和最大奖金
      /**
      * @zh: 为赛事no组合
      */
      var self = this,
        beishu = self.beishu,
        //--倍数
        odds = self.odds,
        //--赔率映射数据
        maxOdds = self.maxOdds,
        //--赔率映射数据
        zhushu = 1,
        //--注数
        prize = 1; //--奖金
      var _zh = [],
        max = [];
      zh.forEach(function (no) {
        //--赛事选项组和
        var _odds = odds[no],
          _max = maxOdds[no];
        prize *= _max;
        zhushu *= _odds.length;
      }, this);
      prize = prize * 0.65 * 2;
      if (prize < 2) {
        prize = 2;
      }
      return {
        prize: prize * beishu,
        zhushu: zhushu * beishu
      };
    };
    computer.prototype.doSingle = function () {
      //--计算单一过关
      var self = this,
        bet = self.parent,
        limit = bet.limit,
        beishu = self.beishu,
        //--倍数
        max = limit.prize * beishu,
        //--最大奖金
        odds = self.odds,
        //--赔率映射数据
        dan = self.dan,
        tuo = self.tuo,
        guoguan = self.single,
        //--单一过关方式
        zhushu = 0,
        //--注数
        prize = 0; //--奖金
      guoguan.forEach(function (gg) {
        var zuhe = tuo.combination(gg - dan.length); //--获取赛事组合
        if (zuhe.length > 0) {
          zuhe.forEach(function (zh) {
            zh = zh.concat(dan); //--与胆合并，得到当前赛事组合情况
            var r = self.doPrize(zh);
            if (r.prize > max) {
              r.prize = max;
            }
            prize += r.prize;
            zhushu += r.zhushu;
          }, this);
        } else {
          var r = self.doPrize(dan);
          if (r.prize > max) {
            r.prize = max;
          }
          prize += r.prize;
          zhushu += r.zhushu;
        }
      }, this);
      self.prize += prize;
      self.money += zhushu * 2;
    };
    computer.prototype.doMixed = function () {
      //--计算混合过关
      var self = this,
        bet = self.parent,
        limit = bet.limit,
        beishu = self.beishu,
        //--倍数
        max = limit.prize * beishu,
        //--最大奖金
        odds = self.odds,
        //--赔率映射数据
        dan = self.dan,
        tuo = self.tuo,
        guoguan = self.mixed,
        //--单混合关方式
        $guoguan = $setting.guoguan,
        zhushu = 0,
        //--注数
        prize = 0; //--奖金
      guoguan.forEach(function (gg) {
        var zuhe = tuo.combination(gg[0] - dan.length); //--获取赛事组合
        // console.log("zuhe", zuhe);
        var _gg = gg.join('_'),
          _guoguan = $guoguan[_gg] || []; //--获取复合过关的设置信息
        // console.log("_guoguan", _guoguan);
        if (zuhe.length > 0) {
          zuhe.forEach(function ($zh) {
            $zh = $zh.concat(dan); //--与胆合并，得到当前赛事组合情况
            _guoguan.forEach(function (num, index) {
              if (num > 0) {
                var zh = $zh.combination(index + 1); //console.log(zh);
                zh.forEach(function (_zh) {
                  //--赛事选项组和
                  var r = self.doPrize(_zh);
                  if (r.prize > max) {
                    r.prize = max;
                  }
                  prize += r.prize;
                  zhushu += r.zhushu;
                }, this);
              }
            }, this);
          }, this);
        } else {
          var $zh = dan;
          _guoguan.forEach(function (num, index) {
            if (num > 0) {
              var zh = $zh.combination(index + 1); //console.log(zh);
              zh.forEach(function (_zh) {
                //--赛事选项组和
                var r = self.doPrize(_zh);
                if (r.prize > max) {
                  r.prize = max;
                }
                prize += r.prize;
                zhushu += r.zhushu;
              }, this);
            }
          }, this);
        }
      }, this);
      self.prize += prize;
      self.money += zhushu * 2;
    };
    itou.dataModel.config({
      //---提交数据对象，用来对选择的数据进行处理，获得可供提交给做单接口的数据
      key: 'danchang_bet_result',
      opts: {
        pass_type: {
          t: '过关方式',
          k: 'selected.guoguan.join(\',\')',
          d: ''
        },
        money: {
          t: '金额',
          k: 'money',
          d: 0
        },
        count: {
          t: '数量',
          k: '',
          d: function d(data, me) {
            return me.money / 2;
          }
        },
        m_ext: {
          t: '博冷博热',
          k: '',
          d: ''
        },
        manner: {
          t: '投注方式',
          k: '',
          d: function d(data, me) {
            return data.dan.length == 0 ? 0 : 1;
          }
        },
        bet_seq: {
          t: 'bet_id序列',
          k: '',
          d: function d(data, me) {
            var bet = data.parent,
              currpt = bet.currpt,
              list = bet.list,
              dan = data.dan || [],
              tuo = data.tuo || [],
              arr = dan.slice(0).concat(tuo),
              r = [];
            arr.forEach(function (no) {
              var item = list[no],
                opt = item.list[currpt],
                id = opt.id;
              r.push(id);
            }, this);
            return r;
          }
        },
        lottery_type: {
          t: '彩种',
          k: 'selected.currpt',
          d: ''
        },
        lottery_no: {
          t: '彩期',
          k: '',
          d: function d() {
            return DanChang.bet.no;
          }
        },
        wager_type: {
          t: '玩法',
          k: '',
          d: 'P'
        },
        wager_store: {
          t: '投注单内容',
          k: '',
          d: function d(data, me) {
            var obj = {},
              dan = data.dan || [],
              arr = [],
              r = [];
            obj.wt = me.wager_type;
            obj.pt = me.pass_type;
            obj.c = me.count / data.beishu;
            obj.m = me.money / data.beishu;
            obj.multiple = data.beishu;
            obj.abs = dan.join(',');
            var selected = data.selected.selected;
            for (var i in selected) {
              arr.push(i + ':' + selected[i].join(','));
            }
            obj.wager = arr.join(';');
            r[0] = obj;
            return r;
          }
        }
      }
    });
    var result = itou.dataModel.dataFactory.create('danchang_bet_result'); //--提交数据对象构造函数创建
    itou.dataModel.config({
      //---奖金优化对象，用来对选择的数据进行处理，获得可供提交给优化页面的数据
      key: 'danchang_bet_youhua',
      opts: {
        changshu: {
          t: '总场数',
          k: '',
          d: function d(computer, me) {
            return computer.dan.length + computer.tuo.length;
          }
        },
        money: {
          t: '金额',
          k: 'money',
          d: 0
        },
        canHot: {
          t: '是否可以博冷博热',
          k: '',
          d: function d(computer, me) {
            var guoguang = computer.selected.guoguan;
            return guoguan.length == 1 && guoguan[0].has('_1');
          }
        },
        guoguan: {
          t: '过关方式',
          k: 'selected.guoguan',
          d: ''
        },
        type: {
          t: '投注方式',
          k: '',
          d: 'single'
        },
        lottery: {
          t: '采种',
          k: '',
          d: 'danchang'
        },
        zuhe: {
          t: 'bet_id序列',
          k: '',
          d: function d(computer, me) {
            // 单行数据： ["英国U21", "+1", 3.03, "胜", 3.03, "shengfu", "2001"]
            var r = [],
              bet = DanChang.bet,
              currpt = bet.currpt,
              list = bet.list,
              data = computer.selected,
              selected = data.selected,
              guoguan = computer.single,
              $zuhe = [];
            for (var i in selected) {
              //--将选择项处理成单行数据形式
              var item = list[i],
                s = selected[i],
                arr = [];
              obj = [];
              arr[0] = item.team.host.name;
              arr[1] = item.list[currpt].pankou;
              arr[5] = currpt;
              arr[6] = i;
              if (currpt == 'WDL') {
                var bei = -1;
              } else {
                var bei = 1;
              }
              s.forEach(function (code) {
                var opt = item.list[currpt].opts[code],
                  _arr = arr.slice(0);
                _arr[2] = opt.odds * bei;
                _arr[3] = opt.name;
                _arr[4] = opt.odds * bei;
                obj.push(_arr);
              }, this);
              $zuhe.push(obj);
            }
            guoguan.forEach(function (gg) {
              //--循环处理过关数据
              var zuhe = $zuhe.combination(gg);
              zuhe.forEach(function (zh) {
                r = r.concat(zh.getZuhes());
              }, this);
            }, this);
            return r;
          }
        }
      }
    });
    var youhua = itou.dataModel.dataFactory.create('danchang_bet_youhua'); //--奖金优化对象构造函数创建
    youhua.prototype["do"] = function () {
      //--开始执行奖金优化
      var self = this,
        bet = DanChang.bet,
        computer = bet.computer;
      if (!computer.canYouhua) {
        return;
      }
      var baseSetting = itou.baseSetting,
        simplify = itou.simplify;
      if (baseSetting.simplify && !simplify.youhua) {
        vm.showMsgBox('很抱歉，欧洲杯期间奖金优化功能暂时关闭！');
        return;
      }
      var result = bet.result,
        data = self.reload(computer).getJson(),
        r = result.reload(computer).getJson();
      itou.localJson.setJson('__Jingcai_Optimize', {
        data: data,
        api: r
      }); //--保存缓存数据
      Gray.$page.loadPage('/jingcai/prizereview/?back=' + window.backurl);
    };
    itou.dataModel.config({
      //---奖金评测对象，用来对选择的数据进行处理，获得可供提交给做单接口的数据
      key: 'danchang_bet_pingce',
      opts: {
        evaluate: {
          t: '评测接口返回的列表数据',
          k: '',
          d: {}
        },
        passTypes: {
          t: '过关方式',
          k: 'selected.guoguan.join(\',\')',
          d: ''
        },
        lottery_type: {
          t: '彩种',
          k: 'selected.currpt',
          d: ''
        },
        multiple: {
          t: '倍数',
          k: 'beishu',
          d: ''
        },
        minRequiredSetCount: {
          t: '',
          k: 'dan.length',
          d: ''
        },
        maxRequiredSetCount: {
          t: '',
          k: 'dan.length',
          d: ''
        },
        requiredIndex: {
          t: '胆Index',
          k: '',
          d: ''
        },
        optionalIndex: {
          t: '拖Index',
          k: '',
          d: ''
        },
        matches: {
          t: '赛事信息',
          k: '',
          d: function d(data, me) {
            var currpt = me.lottery_type,
              bet = data.parent,
              list = bet.list,
              dan = data.dan || [],
              tuo = data.tuo || [],
              danIndex = [],
              tuoIndex = [],
              r = [],
              index = 0;
            var selected = data.selected.selected;
            //console.log(JSON.stringify(selected))
            for (var i in selected) {
              var s = selected[i],
                item = list[i],
                opt = item.list[currpt],
                obj = {};
              obj.sn = i; //console.log(opt);
              obj.prized = false;
              obj.hitSet = '';
              obj.spArray = [];
              s.forEach(function (code) {
                obj.spArray.push(code + ':' + opt.opts[code].odds);
              }, this);
              obj.spArray = obj.spArray.join(';');
              obj.rqArray = '';
              if (opt.pankou) {
                obj.rqArray = 'A: ' + opt.pankou;
              }
              if (dan.indexOf(i) != -1) {
                danIndex.push(index);
              }
              if (tuo.indexOf(i) != -1) {
                tuoIndex.push(index);
              }
              index += 1;
              r.push(obj);
            }
            me.requiredIndex = danIndex.join(',');
            me.optionalIndex = tuoIndex.join(',');
            return r;
          }
        }
      }
    });
    var pingce = itou.dataModel.dataFactory.create('danchang_bet_pingce'); //--奖金评测数据对象构造函数创建
    pingce.prototype.getInfo = function (computer) {
      var self = this,
        data = self.reload(computer).getJson(),
        token = itou.getToken();
      DanChang.pingceLoading = 'doing';
      return itou.get({
        url: 'evaluate',
        data: JSON.stringify(data),
        type: 'POST',
        processData: false,
        formatResult: false,
        // rlt: {},//--测试用，强制使接口返回rlt的值
        autocache: true
      }).then(function (data) {
        DanChang.pingceLoading = 'done';
        self.formatData(data);
      });
    };
    pingce.prototype.formatData = function (data) {
      //--处理评测接口返回的数据
      var self = this,
        hrm = data.data.hrm,
        o = {};
      o.list = [];
      if (data.code != '200') {
        if (data.data.msg) {
          itou.msg.toast = data.data.msg;
        }
        return;
      }
      o.max = 0;
      o.min = 0;
      o.hasDan = true;
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
      self.evaluate = o;
    };
    itou.dataModel.config({
      //--投注页面数据对象
      key: 'danchang_bet_obj',
      opts: {
        parent: {
          t: '单场数据对象',
          k: '',
          d: function d() {
            return DanChang;
          }
        },
        group: {
          t: '当前玩法分组',
          k: '',
          d: function d() {
            var url = Gray.$page.href || window.location.href;
            if (url.has('/guoguan/')) {
              return 'WL'; //--胜负过关
            } else {
              return 'WDL'; //--非胜负过关
            }
          }
        },

        title: {
          t: '页面标题列表',
          k: '',
          d: function d(data, me) {
            var currGroup = me.group,
              ptName = $setting.maps.ptName,
              ptGroup = $setting.maps.ptGroup,
              group = ptGroup[currGroup],
              r = {};
            group.forEach(function (pt) {
              r[pt] = ptName[pt];
            }, this);
            return r;
          }
        },
        currpt: {
          t: '当前玩法',
          k: '',
          d: function d(data, me) {
            var currGroup = me.group,
              ptGroup = $setting.maps.ptGroup,
              group = ptGroup[currGroup],
              cache = DanChang.cache;
            return cache.currpt || group[0];
          }
        },
        no: {
          t: '彩期',
          k: '',
          d: ''
        },
        limit: {
          t: '限制条件',
          k: '',
          d: function d(data, me) {
            var currpt = me.currpt,
              limit = $setting.limit[currpt];
            return limit;
          }
        },
        guoguan: {
          t: '过关方式',
          k: '',
          d: function d(data, me) {
            var cache = DanChang.cache,
              guoguan = cache.guoguan || [],
              limit = me.limit.guoguan,
              group = me.group,
              mixed = $setting.guoguan,
              r = {
                single: {},
                mixed: {},
                auto: true
              }; //--auto: 是否自动完成过关，执行selectGuoguan后设置为false，如果过关被清空，则重新设为true
            for (var i = limit[0]; i <= limit[1]; i++) {
              var gg = i + '_1',
                obj = {};
              obj.key = gg, obj.s = guoguan.indexOf(obj.key) != -1;
              obj.show = false;
              obj.name = gg == '1_1' ? '单关' : gg.replace('_', '串');
              r.single[gg] = obj;
            }
            var min = limit[2],
              max = limit[3];
            for (var i in mixed) {
              var gg = mixed[i];
              if (i.left(1) >= min && i.left(1) <= max //--介于最大过关和最小过关之间
              && (group == 'WDL' //--非胜负过关
              || group == 'WL' && gg[0] == 0 && gg[1] == 0 //--胜负过关并且不包含单关和二串一
              )) {
                var gg = i,
                  obj = {};
                obj.key = gg;
                obj.s = guoguan.indexOf(obj.key) != -1; //--是否选中
                obj.show = false; //--是否对外展示
                obj.name = gg.replace('_', '串');
                r.mixed[gg] = obj;
              }
            }
            return r;
          }
        },
        /**
        * 时间戳，会被getSelected函数更新，用来避免多次调用
        */
        timestamp: {
          t: '时间戳',
          k: '',
          d: function d(data, me) {
            return new Date();
          }
        },
        selected: {
          t: '选择的数据',
          k: '',
          d: function d() {
            //--选择的数据
            var cache = DanChang.cache;
            return cache.getJson();
          }
        },
        selectedItems: {
          t: '被选择的赛事no对象',
          k: '',
          d: function d(data, me) {
            var s = me.selected,
              r = {}; //console.log(JSON.stringify(s));
            for (var i in s.selected) {
              r[i] = i;
            }
            return r;
          }
        },
        computer: {
          t: '计算对象',
          k: '',
          d: function d(data, me) {
            //--负责页面数据计算
            return new computer(me);
          }
        },
        search: {
          t: '筛选对象',
          k: '',
          d: function d(data, me) {
            //--负责页面筛选层数据呈现
            return Search(me);
          }
        },
        result: {
          t: '计算对象',
          k: '',
          d: function d(data, me) {
            //--负责页面数据处理，得出可提交的数据
            return new result(me.computer);
          }
        },
        pingce: {
          t: '奖金评测对象',
          k: '',
          d: function d(data, me) {
            //--负责页面数据处理，得出可提交的数据
            return new pingce(me.computer);
          }
        },
        youhua: {
          t: '奖金优化对象',
          k: '',
          d: function d(data, me) {
            //--负责奖金优化处理，得出可提交的数据
            return new youhua(me.computer);
          }
        },
        days: {
          t: '每日赛程数据',
          k: '',
          d: {}
        },
        //--负责页面数据呈现
        list: {
          t: '所有赛程',
          k: '',
          d: {}
        },
        //--映射对象，便于数据遍历
        hasMatch: {
          t: '是否有赛事',
          k: '',
          d: null
        },
        prize: {
          t: '开奖的彩期和结束场数',
          k: '',
          d: {}
        },
        currLayer: {
          t: '当前展示的层',
          k: '',
          d: ''
        },
        showBody: {
          t: '是否展示页面',
          k: '',
          d: false
        },
        showOpenMsg: {
          t: '初次加载展示提示信息',
          k: '',
          d: false
        },
        submitAction: {
          t: '当前提交动作',
          k: '',
          d: ''
        },
        currItem: {
          t: '当前展示赛事',
          k: '',
          d: null
        },
        //--有两个作用：展示盘口、展示选项
        ScoreGroup: {
          t: '比分玩法选项分组',
          k: '',
          d: function d() {
            return $setting.ScoreGroup;
          }
        },
        HalfFullOrder: {
          t: '半全场玩法选项顺序',
          k: '',
          d: function d() {
            return $setting.HalfFullOrder;
          }
        },
        is_allow: {
          t: '白名单',
          k: '',
          d: false
        },
        hemai_allow: {
          t: '合买状态',
          k: '',
          d: false
        },
        station_id: {
          t: '店铺id',
          k: '',
          d: function d() {
            return itou.localJson.getJson('__entry_info').station_id;
          }
        }
      }
    });
    var bet = itou.dataModel.dataFactory.create('danchang_bet_obj'); //--投注页面对象构造函数创建
    bet.prototype.clear = function () {
      //--清理所有选中项
      var self = this,
        cache = DanChang.cache,
        guoguan = self.guoguan,
        computer = self.computer,
        list = self.list;
      for (var i in list) {
        var item = list[i];
        item.clear();
      }
      computer.beishu = 1;
      for (var i in guoguan) {
        var gg = guoguan[i];
        for (var ii in gg) {
          gg[ii].s = false;
        }
      }
      computer["do"](); //--进行计算
    };

    bet.prototype.getSelected = function (reget) {
      //--获取选择的数据
      /**
      * @reget: 是否强制重新获取
      */
      var self = this,
        list = self.list,
        items = self.selectedItems,
        currpt = self.currpt,
        guoguan = self.guoguan,
        r = {};
      var time = new Date();
      if (time - self.timestamp <= 0 && !reget) {
        //--100毫秒之内不会重复计算，直接返回结果
        return self.selected;
      }
      self.timestamp = new Date(); //--时间戳
      r.currpt = currpt; //--当前玩法
      r.selected = {}; //--选项选中数据对象
      r.dan = []; //--设胆赛事
      r.num = 0; //--选中的赛事数
      r.guoguan = []; //console.log(items)
      for (var i in items) {
        //--选中项和胆数据处理
        var item = list[i];
        if (!item) {
          delete items[i];
          continue;
        }
        var arr = [],
          opts = item.list[currpt].opts,
          no = item.no;
        for (var i in opts) {
          if (opts[i].s) {
            arr.push(i);
          }
        }
        if (arr.length > 0) {
          r.selected[no] = arr;
          r.num += 1;
        }
        if (item.dan && arr.length) {
          r.dan.push(no);
        }
        item.getSelected();
      }
      var max_gg_single = 1; //--单一过关最大过关数
      for (var i in guoguan) {
        //--选中的过关数据处理
        var gg = guoguan[i];
        // console.log(i);
        if (i == 'auto') {
          break;
        }
        for (var ii in gg) {
          var obj = gg[ii],
            num = ii.split('_')[0] * 1;
          // if(num <= r.num){
          if (i == 'single' && num <= r.num || i == 'mixed' && num == r.num) {
            obj.show = true;
            // console.log(num , max_gg_single,num > max_gg_single);
            if (i == 'single' && num > max_gg_single) {
              max_gg_single = num;
            } //--获取可选的最大过关数
          } else {
            obj.show = false;
            obj.s = false;
          }
          if (obj.s && obj.show) {
            r.guoguan.push(obj.key);
          }
        }
      }
      // console.log(guoguan.auto, r.guoguan, max_gg_single, r.num);
      if (guoguan.auto && (r.guoguan.length == 0 || r.guoguan.length == 1 && (r.guoguan[0] + '').has('_1'))) {
        //--自动选择最大可选过关
        if (r.guoguan.length == 1) {
          var obj = guoguan.single[r.guoguan];
          if (obj) {
            obj.s = false;
          }
        }
        var obj = guoguan.single[max_gg_single + '_1'];
        if (obj) {
          obj.s = true;
          r.guoguan[0] = obj.key;
        }
      }
      // if(!guoguan.auto && r.guoguan.length == 0){//--重新开启自动完成选关
      // 	guoguan.auto = true;
      // }
      r.beishu = self.computer.beishu;
      self.selected = r;
      return r;
    };
    bet.prototype.clearDan = function () {
      var self = this,
        list = self.list;
      for (var i in list) {
        var item = list[i];
        item.dan = false;
      }
    };
    bet.prototype.selectGuoguan = function (key) {
      var self = this,
        data = self.selected,
        dan = data.dan,
        guoguan = data.guoguan,
        key1 = key.split('_');
      if (key1[1] == 1) {
        var obj = self.guoguan.single[key];
      } else {
        var obj = self.guoguan.mixed[key];
      }
      if (!obj) {
        return;
      }
      self.guoguan.auto = false;
      var index = guoguan.indexOf(key); //console.log(index);
      if (index == -1) {
        //--选中过关方式
        if (guoguan.length >= 7) {
          window.vm.showToast('过关方式不能超过7个');
          return;
        }
        obj.s = true;
        if (key1[0] < dan.length) {
          self.clearDan(); //--清除胆
        }
      } else {
        var arr = [],
          gg = guoguan.slice(0); //console.log(gg);
        obj.s = false;
        gg.splice(index, 1);
        gg.forEach(function (_gg) {
          arr.push(_gg.split('_')[0]);
        }, this);
        // arr.length == 0? arr[0] = 0: "";
        if (arr.length > 0) {
          var min = Math.min.apply(null, arr);
          if (min < dan.length) {
            self.clearDan(); //--清除胆
          }
        }
      }

      self.computer["do"]();
    };
    bet.prototype.getList = function () {
      //--获取列表信息
      var self = this,
        search = self.search,
        d = {
          lottery_type: self.currpt,
          league_name: JSON.stringify(search.selected),
          station_user_id: itou.localJson.getJson('/user/shop/details/').id,
          station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
        };
      if (d.league_name == 'null') {
        delete d.league_name;
      }
      return itou.get({
        url: 'dc/selectlist',
        data: d,
        rnd: false,
        notoken: true,
        apiType: 'itApi',
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        var r = {},
          maps = {},
          allNum = 0,
          x = 0;
        for (var i in data) {
          var obj = {},
            day = data[i];
          obj.title = (i + ' 00:00:00').Dateformat('mm月dd日 周ww');
          obj.num = 0;
          obj.isShow = allNum <= 6;
          obj.list = [];
          var rs = [];
          for (var ii in day) {
            x += 1;
            var itemObj = new item(day[ii]);
            if (allNum == 0) {
              self.no = day[ii].lottery_no;
            }
            rs.push(itemObj);
            obj.num += 1;
            if (x % 5 == 0) {
              itou.outil.doSetTimeout(obj.list, rs, x * 5);
              rs = [];
            }
            maps[itemObj.no] = itemObj;
          }
          if (rs.length > 0) {
            itou.outil.doSetTimeout(obj.list, rs, x * 5);
            rs = [];
          }
          r[i] = obj;
          allNum += obj.num;
        }
        self.days = r;
        self.list = maps;
        self.hasMatch = allNum > 0;
        self.showBody = true;
        self.computer["do"]();
      });
    };
    bet.prototype.getPrize = function () {
      //--获取最近几期已结束比赛场数
      var self = this;
      return itou.get({
        url: 'dc/finishcount',
        data: {
          lottery_type: self.currpt
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        var r = {};
        if (!itou.outil.is(data, 'Array')) {
          for (var i in data) {
            var obj = {};
            obj.no = i;
            obj.num = data[i];
            r[i] = obj;
          }
        }
        self.prize = r;
      });
    };
    bet.prototype.init = function () {
      //--初始化页面查询信息和开奖启程信息
      var self = this,
        search = self.search;
      var hasOpened = itou.sessionData.getData('__jingcai_hasOpened_WDL');
      if (!hasOpened.key) {
        self.showOpenMsg = true; //--显示页面第一次打开时的提示信息，3秒后隐藏
        window.setTimeout(function () {
          self.showOpenMsg = false;
        }, 3000);
        itou.sessionData.setData('__jingcai_hasOpened_WDL', {
          key: true
        });
      }
      self.getPrize();
      return search.getInfo();
    };
    bet.prototype.showLayer = function (layer) {
      var self = this;
      if (self.currLayer == layer) {
        self.currLayer = '';
      } else {
        self.currLayer = layer;
      }
    };
    bet.prototype.changePt = function (key) {
      //--切换玩法
      var self = this,
        search = self.search;
      self.showLayer();
      if (self.currpt == key) {
        return;
      }
      var ptUrl = $setting.maps.ptUrl,
        url = '/danchang/' + ptUrl[key],
        back = encodeURIComponent(window.backpaths[0]);
      url = url.replace(/\/\//g, '/');
      url += '?back=' + back;
      Gray.$page.loadPage(url);
    };
    bet.prototype.showDay = function (day) {
      //--展示、折叠某天赛事列表
      var self = this;
      self.days[day].isShow = !self.days[day].isShow;
    };
    bet.prototype.showPankou = function (no) {
      //--展示盘口信息
      var self = this,
        item = self.list[no],
        pankou = item.list['WDL'].pankou;
      if (pankou == 0) {
        return;
      }
      self.currItem = item;
      self.showLayer('pankou');
    };
    bet.prototype.showGuoguan = function () {
      //--显示隐藏过关层
      var self = this,
        currLayer = self.currLayer;
      if (currLayer == 'guoguan' || currLayer == 'dan') {
        self.currLayer = '';
      } else {
        self.currLayer = 'guoguan';
      }
    };
    bet.prototype.doSearch = function () {
      //--执行检索
      var self = this,
        search = self.search;
      search["do"]();
      self.getList();
      self.showLayer();
    };
    bet.prototype.cancelSearch = function () {
      //--取消检索
      var self = this,
        search = self.search;
      search.undo();
      self.showLayer();
    };
    bet.prototype.showPingce = function () {
      //--展示评测信息
      var self = this,
        computer = self.computer,
        pingce = self.pingce;
      if (vm && vm.numkeyboard && vm.numkeyboard.close) {
        vm.numkeyboard.close();
      }
      if (self.currLayer == 'evaluate') {
        self.showLayer();
        return;
      }
      self.showLayer('evaluate');
      pingce.getInfo(computer);
      // .then(function(){
      // 	self.showLayer("evaluate");
      // });
    };

    bet.prototype.regetPingce = function () {
      //--重新获取评测信息
      var self = this,
        computer = self.computer,
        pingce = self.pingce;
      if (vm && vm.numkeyboard && vm.numkeyboard.close) {
        vm.numkeyboard.close();
      }
      var key = itou.outil.autocache.getKey('evaluate');
      delete Gray.$cache[key];
      self.showLayer('evaluate');
      pingce.getInfo(computer);
      // .then(function(){
      // 	self.showLayer("evaluate");
      // });
    };

    bet.prototype.doSubmit = function () {
      //--提交店铺
      var self = this;
      //--渠道动作埋点
      itou.channelHm.setBuriedPoints('project_next');
      self.submitAction = 'submit';
      self.doSaveFangan();
    };
    bet.prototype.doSave = function () {
      //--保存方案并执行跳转
      var self = this;
      //--渠道动作埋点
      itou.channelHm.setBuriedPoints('project_save');
      self.submitAction = 'save';
      self.doSaveFangan();
    };
    bet.prototype.doHemai = function () {
      var self = this;
      //--渠道动作埋点
      itou.channelHm.setBuriedPoints('project_sharebuy');
      itou.get({
        url: 'user/info',
        data: {
          token: itou.getToken()
        },
        noToast: true
      }).then(function (result) {
        self.submitAction = 'hemai';
        if (self.parent.bet.computer.prize) {
          itou.sessionData.setData('__hemai_pingce', {
            num: (self.parent.bet.computer.prize * 1).toFixed(2)
          });
        }
        // itou.sessionData.setData("__hemai_pingce",'');
        self.doSaveFangan();
      });
    };
    bet.prototype.getAllowUser = function () {
      var self = this;
      if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
        itou.get({
          url: 'sharebuy/allowusesharebuy',
          data: {
            station_id: self.station_id
          },
          apiType: 'itApi'
        }).then(function (result) {
          self.is_allow = result.is_allow ? 'open' : 'close';
          itou.localJson.setJson('is_allow' + self.station_id, {
            status: result.is_allow ? 'open' : 'close'
          }, 600);
        });
      } else {
        self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
      }
    };
    bet.prototype.getHemaiStatus = function () {
      var self = this;
      if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
        itou.get({
          url: 'sharebuy/issupport',
          data: {
            station_id: self.station_id
          },
          apiType: 'itApi'
        }).then(function (result) {
          self.hemai_allow = result.share_buy ? 'open' : 'close';
          itou.localJson.setJson('share_buy' + self.station_id, {
            status: result.share_buy ? 'open' : 'close'
          }, 600);
        });
      } else {
        self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_id).status;
      }
    };
    bet.prototype.doSaveFangan = function () {
      //--保存方案
      var self = this,
        limit = self.limit,
        computer = self.computer,
        selected = computer.selected,
        submitAction = self.submitAction;
      if (selected.guoguan.length == 0) {
        window.vm.showToast('请选择过关方式');
        return;
      }
      if (computer.money / computer.beishu > limit.zhushu * 2) {
        window.vm.showToast('单倍方案金额不能超过10万元');
        return;
      }
      if (computer.money > limit.money) {
        window.vm.showToast('方案金额不能超过200万');
        return;
      }
      var r = self.result.reload(computer).getJson();
      // console.log(r);return;
      itou.outil.saveProject(r, submitAction);
    };
    return new bet();
  };
  var Prize = function Prize(DanChang) {
    //--开奖数据原型
    itou.dataModel.config({
      //---开奖选项据数据对象
      key: 'danchang_bet_opts',
      opts: {
        WL: {
          t: '胜负过关',
          k: '',
          d: {}
        },
        WDL: {
          t: '单场胜平负',
          k: '',
          d: {}
        },
        Score: {
          t: '单场比分',
          k: '',
          d: {}
        },
        HalfFull: {
          t: '单场半全场',
          k: '',
          d: {}
        },
        TotalGoals: {
          t: '单场总进球',
          k: '',
          d: {}
        },
        OverUnder: {
          t: '北京单场上下盘单双',
          k: '',
          d: {}
        }
      }
    });
    var opts = itou.dataModel.dataFactory.create('danchang_bet_opts'); //--开奖选项据对象构造函数创建
    opts.prototype.formatData = function (data) {
      //--格式化数据，获取想要的数据格式
      var self = this,
        list = data.list;
      for (var pt in self) {
        var info = list[pt];
        if (info) {
          var odds = info.odds,
            optCode = $setting.maps.optCode[pt],
            r = {};
          r.pankou = info.boundary; //--盘口
          r.pankou = r.pankou > 0 ? '+' + r.pankou : r.pankou;
          r.id = info.bet_id; //--id
          r.name = optCode[info.lottery_result]; //--选项名称
          r.odds = odds; //--赔率
          r.code = info.lottery_result;
          r.rlt = info.lottery_result;
          self[pt] = r;
        }
      }
      return self;
    };
    opts = new opts();
    itou.dataModel.config({
      //---开奖行数据对象
      key: 'danchang_prize_item',
      opts: {
        parent: {
          t: 'Prize对象',
          k: '',
          d: function d() {
            return DanChang.prize;
          }
        },
        team: {
          t: '队伍信息',
          k: '',
          d: function d(data, me) {
            var r = {
              host: {},
              guest: {}
            };
            r.host.name = data.host_name_s;
            r.host.goals = data.host_goals;
            r.guest.name = data.guest_name_s;
            r.guest.goals = data.guest_goals;
            return r;
          }
        },
        league: {
          t: '赛事信息',
          k: '',
          d: function d(data, me) {
            var r = {},
              color = data.league_color;
            r.name = data.league_name;
            r.bgcolor = color[0] || '#666';
            //r.color = color[1] || "#000";
            r.color = '#fff';
            return r;
          }
        },
        sport: {
          t: '运动类型',
          k: '',
          d: function d(data, me) {
            var sport = $setting.sport,
              curr = data.sport_type,
              r = {};
            r.name = sport[curr][0];
            r.unit = sport[curr][1];
            r.id = curr;
            return r;
          }
        },
        sort: {
          t: '排序',
          k: '',
          d: function d(data, me) {
            return ('0000' + data.sort).right(3);
          }
        },
        time: {
          t: '比赛时间',
          k: '',
          d: function d(data, me) {
            var time = data.bet_time;
            return time.Dateformat('周ww');
          }
        },
        list: {
          t: '所有投注项',
          k: '',
          d: function d(data, me) {
            var r = opts.formatData(data).getJson();
            return r;
          }
        },
        bifen: {
          t: '所有投注项',
          k: '',
          d: function d(data, me) {
            var r = me.team.host.goals + '-' + me.team.guest.goals;
            if (me.team.host.goals == '-1' && me.team.guest.goals == '-1' || me.team.host.goals == '0' && me.team.guest.goals == '0') {
              var x = 'Delay';
              for (var i in me.list) {
                var el = me.list[i];
                if (x != el.rlt) {
                  x = el.rlt;
                }
              }
              if (x == 'Delay') {
                r = '延期';
              } else if (r == '-1--1') {
                r = '- -';
              }
            }
            return r;
          }
        },
        no: {
          t: '唯一标识',
          k: 'serial_no',
          d: ''
        },
        id: {
          t: '赛事ID',
          k: 'match_id2',
          d: ''
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('danchang_prize_item'); //--开奖行数据对象构造函数创建
    itou.dataModel.config({
      //---开奖数据对象
      key: 'danchang_prize',
      opts: {
        parent: {
          t: '单场数据对象',
          k: '',
          d: function d() {
            return DanChang;
          }
        },
        currpt: {
          t: '当前玩法',
          k: '',
          d: function d(data, me) {
            var cache = DanChang.cache;
            return cache.currpt;
          }
        },
        no: {
          t: '当前彩期no',
          k: '',
          d: function d() {
            var no = Gray.$page.getUrlParam('id') || null;
            return no;
          }
        },
        noList: {
          t: '彩期列表',
          k: '',
          d: []
        },
        search: {
          t: '筛选对象',
          k: '',
          d: function d(data, me) {
            //--负责页面筛选层数据呈现
            return Search(me);
          }
        },
        list: {
          t: '列表数据',
          k: '',
          d: []
        },
        currLayer: {
          t: '当前展示的层',
          k: '',
          d: ''
        },
        showBody: {
          t: '是否展示页面',
          k: '',
          d: false
        },
        hasMatch: {
          t: '是否有赛事',
          k: '',
          d: null
        },
        count: {
          t: '页面总条数',
          k: '',
          d: 0
        },
        page: {
          t: '当前页码',
          k: '',
          d: 1
        },
        pagesize: {
          t: '分页大小',
          k: '',
          d: 50
        }
      }
    });
    var prize = itou.dataModel.dataFactory.create('danchang_prize'); //--开奖数据对象构造函数创建
    prize.prototype.getInfo = function () {
      //--获取开奖启程信息
      var self = this,
        search = self.search;
      return itou.get({
        url: 'dc/getprizeschedule',
        data: {
          lottery_type: self.currpt
        }
      }).then(function (data) {
        self.noList = data;
        if (!self.no) {
          self.no = data[0];
        }
        if (!self.no) {
          //--没有数据则终止循环i行事件链
          var defer = $.Deferred();
          defer.reject();
          return defer.promise();
        }
      });
    };
    prize.prototype.getList = function () {
      //--获取列表信息
      var self = this,
        search = self.search;
      var lottery_type = self.currpt == 'WL' ? 'WL' : '';
      return itou.get({
        url: 'dc/prizelist',
        data: {
          lottery_type: lottery_type,
          //--self.currpt,
          lottery_no: self.no,
          league_name: JSON.stringify(search.selected),
          page: self.page,
          pagesize: self.pagesize
        },
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        var r = self.list || [],
          list = data[self.no];
        self.count = data.total || self.count;
        for (var i in list) {
          var itemObj = new item(list[i]);
          r.push(itemObj);
        }
        self.hasMatch = r.length > 0;
        self.list = r;
      }).then(function () {
        if (self.count == self.list.length) {
          window.vm.ascroll.noData();
        } else {
          window.vm.ascroll.hasData();
        }
        window.vm.ascroll.resetload();
      });
    };
    prize.prototype.init = function () {
      //--初始化页面查询信息和开奖启程信息
      var self = this,
        search = self.search;
      // console.log(search);
      return self.getInfo().then(function () {
        return search.getInfo('dc/prizeleaguelist');
      }).then(function () {
        return self.getList();
      });
    };
    prize.prototype.changeNo = function (no) {
      //--切换彩期
      var self = this;
      // self.no = no;
      // self.getList();
      if (self.currpt == 'WL') {
        var url = '/danchang/guoguan/prize/';
      } else {
        var url = '/danchang/prize/';
      }
      self.page = 1;
      self.list = [];
      var backurl = window.backpaths[0] || '/';
      backurl = encodeURIComponent(backurl);
      Gray.$page.loadPage(url + '?id=' + no + '&back=' + backurl);
    };
    prize.prototype.showLayer = function (layer) {
      var self = this;
      self.currLayer = layer;
    };
    prize.prototype.cancelSearch = function () {
      //--取消检索
      var self = this,
        search = self.search;
      search.undo();
      self.showLayer();
    };
    prize.prototype.doSearch = function () {
      //--执行检索
      var self = this,
        search = self.search;
      self.page = 1;
      self.list = [];
      search["do"]();
      self.getList();
      self.showLayer();
    };
    prize.prototype.getNext = function () {
      //--执行加载下一页
      var self = this;
      self.page += 1;
      return self.getList();
    };
    return new prize();
  };
  var Project = function Project(DanChang) {//--方案数据原型
  };
  var DanChang = function DanChang() {
    //--单场数据原型
    itou.dataModel.config({
      //---单场数据对象
      key: 'danchang_obj',
      opts: {
        maps: {
          t: '映射关系',
          k: '',
          d: {
            //--映射关系，用于执行初始化
            bet: Bet,
            prize: Prize,
            project: Project
          }
        },
        cache: {
          t: '缓存数据',
          k: '',
          d: function d(data, me) {
            return Cache(me);
          }
        },
        bet: {
          t: '投注对象',
          k: '',
          d: null
        },
        prize: {
          t: '开奖结果对象',
          k: '',
          d: null
        },
        project: {
          t: '方案详情对象',
          k: '',
          d: null
        },
        pingceLoading: {
          t: '奖金评测接口调用状态',
          k: '',
          d: 'done'
        }
      }
    });
    var danchang = itou.dataModel.dataFactory.create('danchang_obj'); //--单场对象构造函数创建
    danchang.prototype.init = function (modelList) {
      //--对象初始化；参数可以是要初始化的对象名，也可以是他们的数组
      var self = this,
        maps = self.maps,
        key = self.cache.key;
      var prev = window.prevPage;
      // console.log(prev, prev.has('/project/detail/') || prev.has('/user/shop/details/'));
      if (!prev || prev.has('/project/detail/') || prev.has('/user/shop/details/') || prev == window.config.base_url) {
        //--清空缓存数据
        itou.sessionData.delData('__danchang_cache_' + key);
        itou.sessionData.delData('__danchang_search_cache_');
      } else if (!prev || key.has('_prize') && !prev.has('/match2/')) {
        //--清空缓存数据
        itou.sessionData.delData('__danchang_cache_' + key);
      }
      var data = itou.sessionData.getData('__danchang_cache_' + key);
      var searchSelected = itou.sessionData.getData('__danchang_search_cache_');
      // if (data.search && !data.search.selected) {
      //     data.search =  searchSelected.search;
      // }
      // console.log(data);
      if (!key.has('_prize')) {
        data.search = searchSelected.search;
      }
      self.cache.reload(data);
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
    lottery.danchang = new danchang();
  };
  DanChang();
})();

/***/ })

/******/ });