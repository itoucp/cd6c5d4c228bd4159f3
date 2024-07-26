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
/******/ 		39: 0
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
/******/ 	deferredModules.push([179,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(7);
var _asyncToGenerator = __webpack_require__(11);
var _defineProperty = __webpack_require__(1);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * 微信C端  推荐跟单功能
 * Created by zhaoyf on 2017/5/17.
 */
(function () {
  var $default = {
    imgs: {
      //--所有标签可选的图标,图片class与背景class映射关系，空代表无背景
      'gengdan_labeljc': '',
      //--竞彩足球
      'gengdan_labellq': '',
      //--竞彩篮球
      'gengdan_labelzc': 'labelbgzc',
      //--足彩（任选九 和 14场）
      'gengdan_labeldlt': 'labelbgdlt',
      //--大乐透
      'gengdan_labelp7': 'labelbgp7',
      //--七星彩
      'gengdan_labelp3': 'labelbgp3p5',
      //--排列三
      'gengdan_labelp5': 'labelbgp3p5',
      //--排列五
      'gengdan_labeldanc': '',
      //--单场
      'gengdan_labelssq': 'labelbgssq',
      //--双色球
      'gengdan_label3d': 'labelbg3d',
      //--3D
      'gengdan_label11x5': 'labelbg11x5',
      //--11选5
      'gengdan_labeldef': '' //--默认
    },

    maps: {
      //--采种与图标样式映射关系
      'SportteryWDL': 'gengdan_labeljc',
      //--竞彩足球——让球胜平负
      'SportteryNWDL': 'gengdan_labeljc',
      //--竞彩足球——胜平负
      'SportteryScore': 'gengdan_labeljc',
      //--竞彩足球——比分
      'SportteryTotalGoals': 'gengdan_labeljc',
      //--竞彩足球——总进球
      'SportteryHalfFull': 'gengdan_labeljc',
      //--竞彩足球——半全场
      'SportterySoccerMix': 'gengdan_labeljc',
      //--竞彩足球——混合过关
      'SportteryWS': 'gengdan_labellq',
      //--竞彩篮球——胜分差
      'SportteryWL': 'gengdan_labellq',
      //--竞彩篮球——胜负
      'SportteryHWL': 'gengdan_labellq',
      //--竞彩篮球——让胜负
      'SportteryBS': 'gengdan_labellq',
      //--竞彩篮球——大小分
      'SportteryBasketMix': 'gengdan_labellq',
      //--竞彩篮球
      'NineToTo': 'gengdan_labelzc',
      //--足彩（任选九 和 14场）
      'ToTo': 'gengdan_labelzc',
      //--足彩（任选九 和 14场）
      'SuperLotto': 'gengdan_labeldlt',
      //--大乐透
      'P7': 'gengdan_labelp7',
      //--七星彩
      'P3': 'gengdan_labelp3',
      //--排列三
      'P5': 'gengdan_labelp5',
      //--排列五
      '': 'gengdan_labeldanc',
      //--单场
      'SSQ': 'gengdan_labelssq',
      //--双色球
      '3D': 'gengdan_label3d',
      //--3D
      'SYY': 'gengdan_label11x5' //--11选5
    },

    lottery: {
      football: ['SportteryWDL', 'SportteryNWDL', 'SportteryScore', 'SportteryTotalGoals', 'SportteryHalfFull', 'SportterySoccerMix'],
      //--竞彩足球
      basketball: ['SportteryWS', 'SportteryWL', 'SportteryHWL', 'SportteryBS', 'SportteryBasketMix'] //--竞彩篮球
    },

    max: {
      //--最大倍数和最大彩金（单位：万元，0为不限制）
      'SportteryWDL': {
        b: 50000,
        m: 200
      },
      //--竞彩足球——让球胜平负
      'SportteryNWDL': {
        b: 50000,
        m: 200
      },
      //--竞彩足球——胜平负
      'SportteryScore': {
        b: 50000,
        m: 200
      },
      //--竞彩足球——比分
      'SportteryTotalGoals': {
        b: 50000,
        m: 200
      },
      //--竞彩足球——总进球
      'SportteryHalfFull': {
        b: 50000,
        m: 200
      },
      //--竞彩足球——半全场
      'SportterySoccerMix': {
        b: 50000,
        m: 200
      },
      //--竞彩足球——混合过关
      'SportteryWS': {
        b: 50000,
        m: 200
      },
      //--竞彩篮球——胜分差
      'SportteryWL': {
        b: 50000,
        m: 200
      },
      //--竞彩篮球——胜负
      'SportteryHWL': {
        b: 50000,
        m: 200
      },
      //--竞彩篮球——让胜负
      'SportteryBS': {
        b: 50000,
        m: 200
      },
      //--竞彩篮球——大小分
      'SportteryBasketMix': {
        b: 50000,
        m: 200
      },
      //--竞彩篮球
      'NineToTo': {
        b: 1000,
        m: 20
      },
      //--足彩（任选九 和 14场）
      'ToTo': {
        b: 99,
        m: 100
      },
      //--足彩（任选九 和 14场）
      'SuperLotto': {
        b: 10000,
        m: 100
      },
      //--大乐透
      'P7': {
        b: 10000,
        m: 100
      },
      //--七星彩
      'P3': {
        b: 10000,
        m: 100
      },
      //--排列三
      'P5': {
        b: 10000,
        m: 100
      },
      //--排列五
      '': {
        b: 10000,
        m: 100
      },
      //--单场
      'SSQ': {
        b: 10000,
        m: 100
      },
      //--双色球
      '3D': {
        b: 10000,
        m: 100
      },
      //--3D
      'SYY': {
        b: 1000,
        m: 0
      } //--11选5
    }
  };

  var createCache = function createCache(Model) {
    itou.dataModel.config({
      //--缓存数据对象
      key: 'gendan_cache',
      opts: {
        selectedTag: {
          t: '被选中的标签',
          k: '',
          d: function d() {
            var tag = itou.sessionData.getData('__gendan_selected_tag').tag || {};
            // return tag;
            return {};
          }
        }
      }
    });
    var cache = itou.dataModel.dataFactory.create('gendan_cache'); //--缓存对象构造函数创建
    cache.prototype.doSave = function () {
      //--保存缓存
      var self = this;
      itou.sessionData.setData('__gendan_selected_tag', {
        tag: self.selectedTag
      });
      if (Model.tuijianAdd) {
        Model.tuijianAdd.tag = self.selectedTag;
      }
    };
    cache.prototype.clear = function () {
      //--清除缓存
      var self = this;
      self.selectedTag = {};
      self.doSave();
    };
    return new cache();
  };
  var createTagManage = function createTagManage(Model) {
    //--创建标签管理对象
    var imgArr = []; //--图片数组
    for (var i in $default.imgs) {
      imgArr.push(i);
    }
    itou.dataModel.config({
      //--标签列表行数据对象
      key: 'gendan_tag_item',
      opts: {
        id: {
          t: '标签编号',
          k: 'tag_id',
          d: ''
        },
        title: {
          t: '标签名称',
          k: 'tag',
          d: ''
        },
        img: {
          t: '标签图标',
          k: '',
          d: function d(data, me) {
            var pic = data.pic;
            if (imgArr.indexOf(pic) > -1) {
              return pic;
            } else {
              return 'gengdan_labeldef';
            }
          }
        },
        bg: {
          t: '标签图标背景',
          k: '',
          d: function d(data, me) {
            return $default.imgs[me.img];
          }
        },
        tuiNum: {
          t: '推荐数量',
          k: 'r_num',
          d: ''
        },
        hitNum: {
          t: '中奖数量',
          k: 'p_num',
          d: ''
        },
        desc: {
          t: '描述',
          k: '',
          d: function d(data, me) {
            return '推荐' + me.tuiNum + '单，中奖' + me.hitNum + '单';
          }
        }
      }
    });
    var tagItem = itou.dataModel.dataFactory.create('gendan_tag_item'); //--标签列表行数据对象构造函数创建
    tagItem.prototype.doSelect = function (callback) {
      //--执行选中标签
      var self = this,
        cache = Model.cache;
      cache.selectedTag = self.getJson();
      console.log(self);
      cache.doSave();
      if (itou.outil.is(callback, 'Function')) {
        //--执行回掉
        callback();
      }
      return true;
    };
    itou.dataModel.config({
      //--标签列表数据对象
      key: 'gendan_tag_list',
      opts: {
        imgs: {
          t: '图标列表',
          k: '',
          d: function d() {
            return $default.imgs;
          }
        },
        list: {
          t: '列表数据',
          k: '',
          d: function d(data, me) {
            var r = me.list || [];
            if (itou.outil.is(data, 'Array')) {
              data.forEach(function (element) {
                var item = new tagItem(element);
                r.push(item);
              }, this);
            }
            return r;
          }
        }
      }
    });
    var tagList = itou.dataModel.dataFactory.create('gendan_tag_list'); //--标签列表数据对象构造函数创建
    tagList.prototype.getList = function () {
      //--获取标签列表信息
      var self = this;
      return itou.get({
        url: 'recommend/taglist',
        data: {}
      }).then(function (data) {
        self.reload(data);
      });
    };
    itou.dataModel.config({
      //--标签添加数据对象
      key: 'gendan_tag_add',
      opts: {
        imgs: {
          t: '图标列表',
          k: '',
          d: function d() {
            return $default.imgs;
          }
        },
        selected: {
          t: '选中的标签图标',
          k: '',
          d: 'gengdan_labeldef'
        },
        title: {
          t: '标签名称',
          k: '',
          d: ''
        },
        max: {
          t: '标签名称最大长度',
          k: '',
          d: '20'
        }
      }
    });
    var tagAdd = itou.dataModel.dataFactory.create('gendan_tag_add'); //--标签列表数据对象构造函数创建
    tagAdd.prototype.selecteImg = function (key) {
      //--选择图片
      var self = this;
      self.selected = key;
    };
    tagAdd.prototype.doAdd = function (callback) {
      var self = this,
        title = self.title,
        img = self.selected;
      if (!title) {
        window.vm.showToast('请填写标签名称');
        return;
      }
      if (title.length2() > self.max) {
        window.vm.showToast('标签名称最长10汉字');
        return;
      }
      itou.get({
        url: 'recommend/addtag',
        data: {
          tag: title,
          pic: img
        }
      }).then(function (data) {
        //--向列表追加数据
        var item = new tagItem(data);
        Model.tagManage.list.splice(0, 0, item);
        self.title = ''; //--清空添加数据
        self.selected = 'gengdan_labeldef';
        if (itou.outil.is(callback, 'Function')) {
          //--执行回掉
          callback(item);
        }
      });
    };
    itou.dataModel.config({
      //--标签管理对象
      key: 'gendan_tag_manage',
      opts: {
        addManage: {
          t: '标签添加管理对象',
          k: '',
          d: function d() {
            return new tagAdd();
          }
        },
        listManage: {
          t: '列表管理对象',
          k: '',
          d: function d() {
            return new tagList();
          }
        },
        list: {
          t: '列表数据',
          k: '',
          d: function d(data, me) {
            return me.listManage.list;
          }
        },
        default_tag: {
          t: '默认标签对象',
          k: '',
          d: function d() {
            return tagItem;
          }
        }
      }
    });
    var tagManage = itou.dataModel.dataFactory.create('gendan_tag_manage'); //--标签管理对象构造函数创建
    return new tagManage();
  };
  var createTuijianAdd = function createTuijianAdd(Model) {
    var _opts;
    //--创建推荐添加对象
    var cache = Model.cache,
      tag = cache.selectedTag;
    itou.dataModel.config({
      //--推荐添加对象
      key: 'gendan_Tuijian_Add',
      opts: (_opts = {
        tag: {
          t: '标签',
          k: '',
          d: function d() {
            return tag;
          }
        },
        shopid: {
          t: '店铺id',
          k: '',
          d: function d() {
            return itou.localJson.getJson('/user/shop/details/').id;
          }
        },
        projectid: {
          t: '方案id',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id;
          }
        },
        p_uuid: {
          t: '方案id',
          k: '',
          d: function d() {
            var p_uuid;
            if (Gray.$page.getUrlParam('id')) {
              p_uuid = Gray.$page.getUrlParam('p_uuid') || '0';
            } else {
              p_uuid = itou.localJson.getJson('/project/detail/').uuid || '0';
            }
            return p_uuid;
          }
        },
        isOpen: {
          t: '是否允许店内展示',
          k: '',
          d: '1'
        },
        content_hide: {
          t: '是否保密',
          k: '',
          d: '1'
        },
        content_show: {
          t: '是否显示',
          k: '',
          d: '0'
        },
        profit: {
          t: '跟单盈利设置',
          k: '',
          d: {
            key: '__precommend_profit_set',
            //--缓存键值
            isClicked: false,
            //--是否点击过开启按钮
            isShow: false,
            //--是否开启
            num: 5,
            //--佣金比率
            isAgree: false,
            //--是否同意协议
            // opts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],//--可选佣金比率
            opts: [0, 1, 2, 3, 4, 5] //--可选佣金比率
          }
        },

        fxDesc: {
          t: '推荐分析',
          k: '',
          d: ''
        },
        desc: {
          t: '推荐宣言',
          k: '',
          d: '跟单轻松中，动动手指即可实现。'
        },
        callback: {
          t: '回掉',
          k: '',
          d: null
        },
        descMax: {
          t: '推荐宣言最大长度',
          k: '',
          d: '300'
        },
        prize: {
          t: '理论奖金',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('prize') || 0;
          }
        },
        money: {
          t: '方案金额',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('money') || 0;
          }
        },
        pageShow: {
          t: '是否展示页面',
          k: '',
          d: false
        },
        inited: {
          t: '是否初始化完成',
          k: '',
          d: false
        },
        doing: {
          t: '是否加载接口',
          k: '',
          d: false
        },
        canWeb: {
          t: '是否符合全网要求',
          k: '',
          d: 0
        },
        cantWeb: {
          t: '不符合全网要求的理由',
          k: '',
          d: []
        },
        cantWebList: {
          t: '全网要求的列表',
          k: '',
          d: []
        },
        canFx: {
          t: '是否允许分析',
          k: '',
          d: false
        },
        onlyFx: {
          t: '是否仅允许分析',
          k: '',
          d: false
        },
        fxTimeout: {
          t: '分析倒计时',
          k: '',
          d: 0
        },
        price: {
          t: '价格',
          k: '',
          d: ''
        },
        isFree: {
          t: '是否设为免费',
          k: '',
          d: false
        }
      }, _defineProperty(_opts, "isFree", {
        t: '是否设为免费',
        k: '',
        d: false
      }), _defineProperty(_opts, "canPrice", {
        t: '是否符合付费要求，0不允许，1允许，2有问题不能设置，-1需要认证',
        k: '',
        d: 0
      }), _defineProperty(_opts, "cantPrice", {
        t: '不符合付费要求的理由',
        k: '',
        d: []
      }), _defineProperty(_opts, "cantPriceList", {
        t: '付费要求的列表',
        k: '',
        d: []
      }), _defineProperty(_opts, "showCantPrice", {
        t: '展示无法付费的原因',
        k: '',
        d: false
      }), _defineProperty(_opts, "rcmd_type", {
        t: '1:全网推荐,0:店内推荐',
        k: '',
        d: 0
      }), _defineProperty(_opts, "black_free", {
        t: '是否设置不中免,1:设置,0:不设置',
        k: '',
        d: 0
      }), _defineProperty(_opts, "brEnable", {
        t: '是否允许设置首单不中退',
        k: '',
        d: false
      }), _defineProperty(_opts, "isBr", {
        t: '是否设定首单不中退',
        k: '',
        d: true
      }), _defineProperty(_opts, "ticketEnable", {
        t: '是否支持设置大实单标识true:支持,false:不支持',
        k: '',
        d: false
      }), _defineProperty(_opts, "isNeedTicket", {
        t: '是否设为大单实票',
        k: '',
        d: true
      }), _defineProperty(_opts, "showTicketTip", {
        t: '是否显示大单实票提示tip',
        k: '',
        d: false
      }), _defineProperty(_opts, "activity", {
        t: '活动内容详情',
        k: '',
        d: function d() {
          return {
            gaid: 0,
            status: 0,
            img: ''
          }; //--//0:未开始,1进行中,2:已截止,100:奖励已完成
        }
      }), _defineProperty(_opts, "contentList", {
        t: '全网推荐,推荐宣言内容列表',
        k: '',
        d: function d() {
          return [];
        }
      }), _defineProperty(_opts, "articles", {
        t: '创作学院文章列表',
        k: '',
        d: function d() {
          return [];
        }
      }), _opts)
    });
    var tuijian = itou.dataModel.dataFactory.create('gendan_Tuijian_Add'); //--推荐添加对象构造函数创建
    tuijian.prototype.toggleRcmd = function (type) {
      //--切换推荐类型
      //--不符合全网要求，或者符合全网推荐，并且活动正在进行中
      // if (this.canWeb == 0 || (this.canWeb == 1 && this.activity.status == 1)){
      // this.rcmd_type ^= 1;
      this.rcmd_type = type;
      // }
    };
    //--检查是否符合全网推荐要求
    tuijian.prototype.getCanWeb = function () {
      var _this = this;
      return itou.get({
        url: 'recommend/grcmdcheck',
        data: {
          project_id: this.projectid,
          gaid: this.activity.gaid,
          station_user_id: this.shopid
        },
        specialErr: {
          //--指定的特殊错误处理
          '-11': function _(result) {
            var _result$data, _result$data2;
            //--返回标准化格式错误信息
            result.data || (result.data = {});
            (_result$data = result.data).limits || (_result$data.limits = []);
            (_result$data2 = result.data).limits_content || (_result$data2.limits_content = []);
            _this.cantWeb = result.data.limits || [];
            _this.cantWebList = result.data.limits_content || [];
            _this.canWeb = 0;
            _this.rcmd_type = 0;
            _this.pageShow = true;
            _this.inited = true;
          }
        }
      }).then(function () {
        _this.rcmd_type = 1;
        _this.canWeb = 1;
        _this.pageShow = true;
      });
    };
    //--检查是否符合全网推荐要求
    tuijian.prototype.getCanPrice = function () {
      var _this2 = this;
      return itou.get({
        url: 'ycontent/contentCheck',
        data: {
          project_id: this.projectid,
          station_user_id: this.shopid
        },
        specialErr: {
          //--指定的特殊错误处理
          '-101': function _() {
            //--需要认证
            _this2.canPrice = '-1';
            // this.rcmd_type = 0;
            _this2.pageShow = true;
            _this2.inited = true;
          },
          '-11': function _(result) {
            //--不能设置付费，查看原因
            _this2.canPrice = '2';
            _this2.cantPrice = result.data.limits || [];
            _this2.cantPriceList = result.data.limits_content || [];
            // this.rcmd_type = 0;
            _this2.pageShow = true;
            _this2.inited = true;
          },
          '-3': function _(result) {
            //--用户未开通付费内容权限
            _this2.canPrice = '0';
            // this.rcmd_type = 0;
            _this2.pageShow = true;
            _this2.inited = true;
          }
        }
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this2.canPrice = 1;
        _this2.price = data.price || '0';
        // this.price = '55';
        _this2.pageShow = true;
        _this2.inited = true;
        _this2.canFx = !!data.content_edit_enable;
        _this2.onlyFx = !!data.content_edit_force;
        _this2.fxTimeout = data.content_edit_expire || 0;
        _this2.articles = data.guide_articles || [];
        _this2.brEnable = data.black_refund_enable || false; //--首单不中退
        _this2.ticketEnable = data.ticket_apply_enable || false; //--大单实票
      });
    };

    tuijian.prototype.getActivit = function () {
      var _this3 = this;
      //--获取活动内容详情
      return itou.get({
        url: 'activity/grcmdcurrent',
        rnd: false,
        notoken: true
      }).then(function (data) {
        data || (data = {});
        _this3.activity.gaid = data.gaid;
        _this3.activity.status = data.status;
        _this3.activity.img = data.rcmd_img || '';
        if (data.status == 1) {
          //--活动正在进行，默认为全网推荐
          _this3.rcmd_type = 1;
        } else {
          _this3.activity.gaid = 0;
          _this3.rcmd_type = 0;
        }
      });
    };
    tuijian.prototype.getContentList = function () {
      var _this4 = this;
      //--获取全网跟单的推荐宣言内容列表
      return itou.get({
        url: 'recommend/contentList',
        data: {
          money: this.money,
          pre_prize: this.prize,
          project_id: this.projectid
        }
      }).then(function (data) {
        data.list || (data.list = []);
        data.list.forEach(function (item, i) {
          item.checked = i == data.list.length - 1;
          _this4.contentList.push(item);
        });
      });
    };
    tuijian.prototype.toggleOpen = function (str, val) {
      //--切换店铺展示
      var self = this;
      self[str] = val;
    };
    tuijian.prototype.doAdd = function (callback, content_hide) {
      var specialErr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var contentType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'SYS';
      var self = this;
      content_hide = content_hide || self.content_hide;
      var price = self.price || 0;
      if (self.isFree) {
        price = 0;
      }
      var data = {
        price: parseFloat(price),
        rcmd_type: this.rcmd_type,
        black_free: this.black_free,
        black_refund: this.isBr && this.brEnable ? 1 : 0,
        ticket_apply_status: this.ticketEnable && this.isNeedTicket ? 1 : 0,
        project_id: self.projectid,
        p_uuid: self.p_uuid,
        pre_prize: self.prize,
        content_hide: content_hide,
        p_mode: content_hide ^ 1 //--当self.content_hide == 1时p_mode = 0；当self.content_hide == 0时p_mode = 1
      };
      // console.log(data);return;
      if (this.rcmd_type == 0) {
        if (!self.tag || !self.tag.id) {
          window.vm.showToast('请选择归类标签');
          return false;
        }
        if (!self.desc) {
          window.vm.showToast('请填写推荐宣言');
          return false;
        }
        if (self.desc.length > self.descMax) {
          window.vm.showToast('推荐宣言最多' + self.descMax + '字');
          return false;
        }
        data.tag_id = self.tag.id;
        data.is_public = self.isOpen;
        data.content = self.desc;
      } else if (this.rcmd_type == 1 && contentType == 'SYS') {
        var content_no_list = [];
        this.contentList.forEach(function (item) {
          if (item.checked) {
            content_no_list.push(item.no);
          }
        });
        if (content_no_list.length == 0) {
          window.vm.showToast('请组合推荐宣言');
          return false;
        }
        data.content_no_list = content_no_list;
      } else if (this.rcmd_type == 1 && contentType == 'FX') {
        data.content = self.fxDesc;
      }
      self.callback = callback;
      // var data = {
      // 	project_id: self.projectid,
      // 	tag_id: self.tag.id,
      // 	is_public: self.isOpen,
      // 	content: self.desc,
      // 	pre_prize: self.prize,
      // 	content_hide: self.content_hide,
      // 	//content_show: !self.content_hide,
      // 	p_mode: self.content_hide ^ 1//--当self.content_hide == 1时p_mode = 0；当self.content_hide == 0时p_mode = 1
      // }
      if (self.profit.num > 0 && self.profit.isShow) {
        data.profit_pct = self.profit.num / 100;
      }
      if (self.doing) {
        return;
      }
      self.doing = true;
      setTimeout(function () {
        self.doing = false;
      }, 1500);
      return itou.get({
        url: 'recommend/add',
        data: data,
        type: 'post',
        specialErr: _objectSpread({
          //--指定的特殊错误处理
          '-12': function _(rlt) {
            self.doing = false;
            //--弹出错误提示信息
            vm.$refs.layer.alert.error({
              title: rlt.title,
              text: rlt.msg,
              buttons: [{
                text: '知道了'
              }]
            });
          },
          '-201': function _(rlt) {
            //--用户昵称不符合要求
            self.doing = false;
            rlt.data || (rlt.data = {});
            vm.$refs.userNickName.nickName(rlt.data.nick_name || '');
            vm.$refs.userNickName.isShow = true;
          }
        }, specialErr)
      }).then(function (data) {
        self.doing = false;
        callback = self.callback;
        self.callback = null;
        if (itou.outil.is(callback, 'Function')) {
          //--执行回掉
          callback(data);
        }
      });
    };
    //--打开或关闭佣金设置层
    tuijian.prototype.switchProfit = function () {
      var self = this,
        profit = self.profit,
        key = profit.key;
      profit.isClicked = true;
      // itou.localData.setData(key, {
      // 	isClicked: profit.isClicked//--是否点击过开启按钮
      // })
      if (profit.isShow) {
        //--关闭
        profit.isShow = false;
      } else {
        //--检查是否可以开启佣金设置
        itou.get({
          url: 'recommend/checkProfitLimit',
          data: {
            // station_user_id: ,
            project_id: self.projectid
          },
          // autocache: true,
          specialErr: {
            //--指定的特殊错误处理
            '-12': function _(rlt) {
              //--弹出错误提示信息
              vm.$refs.layer.alert.error({
                title: rlt.title,
                text: rlt.msg,
                buttons: [{
                  text: '知道了'
                }]
              });
            }
          }
        }).then(function () {
          profit.isShow = true;
          // self.content_hide = 1;//--强制设置隐藏跟单内容
        });
      }
    };
    //--检查本方案的是否可以设置佣金
    tuijian.prototype.checkProfit = function (profitAble) {
      var self = this,
        profit = self.profit;
      if (profitAble && self.profit.num > 0 && !profit.isAgree) {
        //--未勾选同意协议
        vm.$refs.layer.alert.warning({
          text: '请先勾选同意协议',
          buttons: [{
            text: '知道了',
            fun: function fun() {
              //--尝试加个同意协议按钮滚动到可视区域
              try {
                vm.$refs['precommmend_agreement'].scrollIntoView({
                  block: 'center',
                  behavior: 'smooth'
                });
              } catch (e) {}
            }
          }]
        });
        return new Promise(function (rev, rej) {});
      } else {
        //--调用接口，检查方案是否可以设置佣金
        //--检查是否可以开启佣金设置
        //--开启接口的页面缓存autocache: true
        return new Promise(function (rev, rej) {
          rev({
            isOk: true
          });
        });
      }
    };
    //--保存佣金设置
    tuijian.prototype.saveProfit = function () {
      var self = this,
        profit = self.profit,
        key = profit.key;
      itou.localData.setData(key, {
        num: profit.num,
        isShow: profit.isShow,
        isAgree: profit.isAgree,
        isOpen: self.isOpen,
        content_hide: self.content_hide
      });
    };
    tuijian.prototype.init = function () {
      var _this5 = this;
      //--对象初始化，用于设置对话框事件监听
      var self = this;
      var profit = self.profit,
        key = profit.key,
        local = itou.localData.getData(key); //--读取缓存数据
      profit.num = isNaN(local.num) ? 5 : local.num; //--获得佣金比率
      profit.isClicked = local.isClicked || false; //--获得是否点击过按钮
      // profit.isShow = local.isShow || false;//--获得是否展示
      // if(profit.isShow){
      // 	self.content_hide = 1;//--强制设置隐藏跟单内容
      // }
      profit.isAgree = local.isAgree || false; //--获得是否同意协议
      if (profit.opts.indexOf(profit.num) == -1) {
        //--检查比率是否在选项内
        profit.num = 5;
      }
      self.content_hide = local.content_hide || '1';
      //--暂时取消开奖后公开，如果缓存原来保存的是开奖后公开，则强制更换为截止后公开
      if (self.content_hide > 1) {
        self.content_hide = 1;
      }
      self.isOpen = local.isOpen || '1';
      return this.getActivit().then(function () {
        // if (this.activity.gaid){
        return _this5.getCanWeb();
        // }
      }).then(function () {
        _this5.pageShow = true;
        // if (this.rcmd_type == 1 && this.canWeb == 1) {
        if (_this5.canWeb == 1) {
          _this5.getContentList().then(function () {
            _this5.rcmd_type || (_this5.rcmd_type = 1);
          });
          return _this5.getCanPrice();
        } else {
          _this5.inited = true;
        }
      });
    };
    return new tuijian();
  };
  var createTuijianList = function createTuijianList(Model) {
    itou.dataModel.config({
      //--推荐记录行对象
      key: 'gendan_list_item',
      opts: {
        tag: {
          t: '标签',
          k: 'tag',
          d: ''
        },
        status: {
          t: '状态',
          k: 'status_text',
          d: ''
        },
        color: {
          t: '状态颜色',
          k: 'status_color',
          d: ''
        },
        type: {
          t: '玩法',
          k: 'lottery_type_text',
          d: ''
        },
        money: {
          t: '彩金',
          k: 'm',
          d: '0'
        },
        num: {
          t: '跟单人数',
          k: 'f_num',
          d: '0'
        },
        id: {
          t: '方案id',
          k: 'project_id',
          d: ''
        },
        p_uuid: {
          t: '方案id',
          k: 'p_uuid',
          d: '0'
        },
        text_type: {
          t: '内容类型',
          k: 'text_type',
          d: '0'
        },
        is_public: {
          t: '上下架状态',
          k: '',
          d: function d(data, me) {
            if (me.text_type != 'analyzation') {
              return '';
            }
            return data.is_public;
          }
        },
        cStatus: {
          t: '方案id后四位',
          k: '',
          d: function d(data, me) {
            var _data$content_apply;
            //--已下架不展示内容审核状态
            if (me.text_type != 'analyzation' || data.is_public == '0') {
              return null;
            }
            var status = data === null || data === void 0 || (_data$content_apply = data.content_apply) === null || _data$content_apply === void 0 ? void 0 : _data$content_apply.status;
            var texts = {
              '0': '内容审核中',
              '-1': '内容待调整',
              '-2': '内容审核失败',
              '100': '内容审核通过'
            };
            if (texts[status]) {
              return {
                status: status,
                text: texts[status] || ''
              };
            } else {
              return null;
            }
          }
        },
        plannum: {
          t: '方案id后四位',
          k: '',
          d: function d(data, me) {
            return (me.id + '').slice(-4);
          }
        },
        station_user_id: {
          t: '店id',
          k: 'station_user_id',
          d: ''
        },
        prize: {
          t: '预计奖金',
          k: 'pre_p',
          d: ''
        },
        month: {
          t: '月份',
          k: '',
          d: function d(data) {
            return itou.outil.formatDate(data.ctime, 'mm月');
          }
        },
        day: {
          t: '日期',
          k: '',
          d: function d(data) {
            return itou.outil.formatDate(data.ctime, 'dd');
          }
        },
        isWeb: {
          t: '是否是全网跟单',
          k: '',
          d: function d(data) {
            return data.rcmd_type == 1;
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('gendan_list_item'); //--推荐记录行对象构造函数创建
    itou.dataModel.config({
      //--推荐记录对象
      key: 'gendan_tuijian_list',
      opts: {
        pagesize: {
          t: '分页大小',
          k: '',
          d: '20'
        },
        page: {
          t: '当前页码',
          k: '',
          d: '1'
        },
        showBody: {
          t: '是否展示',
          k: '',
          d: false
        },
        list: {
          t: '方案id',
          k: '',
          d: function d(data, me) {
            var r = me.list || [];
            r.splice(0);
            if (data && data.list) {
              var list = data.list;
              list.forEach(function (element) {
                //--对象初始化
                var it = new item(element);
                r.push(it);
              }, this);
            }
            return r;
          }
        }
      }
    });
    var list = itou.dataModel.dataFactory.create('gendan_tuijian_list'); //--推荐记录对象构造函数创建
    list.prototype.getList = function () {
      var self = this,
        user = Model.userInfo;
      return itou.get({
        url: 'recommend/list',
        data: {
          user_id: user.id,
          pagesize: self.pagesize,
          page: self.page
        },
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        self.showBody = true;
        self.reload(data);
        if (data && data.list && data.list.length == 10) {
          return true;
        } else {
          return false;
        }
      });
    };
    list.prototype.getNext = function () {
      //--获取下页数据
      var self = this,
        user = Model.userInfo;
      self.page = self.page * 1 + 1;
      return itou.get({
        url: 'recommend/list',
        data: {
          user_id: user.id,
          pagesize: self.pagesize,
          page: self.page
        },
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        if (data && data.list) {
          var list = data.list;
          list.forEach(function (element) {
            //--对象初始化
            var it = new item(element);
            self.list.push(it);
          }, this);
        }
        if (data && data.list && data.list.length == 10) {
          return true;
        } else {
          return false;
        }
      });
    };
    return new list();
  };
  var createUserInfo = function createUserInfo(model) {
    itou.dataModel.config({
      //--用户信息对象
      key: 'gendan_user_info',
      opts: {
        pic: {
          t: '头像',
          k: 'avatar',
          d: ''
        },
        avatar: {
          t: '头像',
          k: '',
          d: function d(data, me) {
            var avatar1 = me.pic;
            return avatar1;
          }
        },
        mobile: {
          t: '手机',
          k: 'bind_mobile',
          d: ''
        },
        name: {
          t: '昵称',
          k: 'nick_name',
          d: ''
        },
        id: {
          t: 'id',
          k: 'uid',
          d: ''
        }
      }
    });
    var userInfo = itou.dataModel.dataFactory.create('gendan_user_info'); //--用户信息对象构造函数创建
    userInfo.prototype.getInfo = function () {
      //--获取用户信息
      var self = this;
      return itou.get({
        url: 'user/info',
        data: {}
      }).then(function (data) {
        self.reload(data);
      });
    };
    return new userInfo();
  };
  var createGendanList = function createGendanList(Model) {
    itou.dataModel.config({
      //--历史跟单记录行对象
      key: 'gendan_gendan_item',
      opts: {
        canLink: {
          t: '能否跳转到详情页',
          k: 'allow_see',
          d: ''
        },
        money: {
          t: '自购金额',
          k: 'm',
          d: ''
        },
        t_money: {
          t: '跟单总额',
          k: 'mt_total',
          d: ''
        },
        m_single: {
          t: '单倍金额',
          k: 'm_single',
          d: ''
        },
        num: {
          t: '跟单人数',
          k: 'f_num',
          d: ''
        },
        id: {
          t: '方案id',
          k: 'project_id',
          d: ''
        },
        p_uuid: {
          t: '方案id',
          k: 'p_uuid',
          d: '0'
        },
        prize: {
          t: '总奖金',
          k: 'sum_p',
          d: ''
        },
        ret_desc: {
          t: '回报率',
          k: '',
          d: function d(data) {
            return ((data.p_ret || 0) * 100).toFixed(0);
          }
        },
        p_ret_desc: {
          t: '预计回报率',
          k: '',
          d: function d(data) {
            return ((data.pre_p_ret || 0) * 100).toFixed(0);
          }
        },
        type: {
          t: '彩种',
          k: 'lottery_type_text',
          d: ''
        },
        date_diff: {
          t: '时间差',
          k: '',
          d: function d(data) {
            var current_time = data.current_time || '',
              //--当前时间
              ctime = data.ctime || ''; //--截止时间
            current_time = current_time.toDate();
            ctime = ctime.toDate();
            var diff = ctime.DateDiff('s', current_time); //--时间差（秒）
            // console.log(diff);
            if (diff < 60) {
              return '1分钟前';
            } else if (diff < 3600) {
              //--1小时内
              return Math.floor(diff / 60) + '分钟前';
            } else if (diff < 24 * 3600) {
              //--1天内
              return Math.floor(diff / 3600) + '小时前';
            } else if (diff < 7 * 24 * 3600) {
              //--1周内
              return Math.floor(diff / (24 * 3600)) + '天前';
            } else {
              return ctime.Dateformat('MM月DD日');
            }
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('gendan_gendan_item'); //--历史跟单记录行对象构造函数创建
    itou.dataModel.config({
      //--进行中跟单记录行对象
      key: 'gendan_gendan_item1',
      opts: {
        canLink: {
          t: '能否跳转到详情页',
          k: 'allow_see',
          d: ''
        },
        money: {
          t: '自购金额',
          k: 'm',
          d: ''
        },
        t_money: {
          t: '跟单总金额',
          k: 'mt_total',
          d: ''
        },
        m_single: {
          t: '单倍总金额',
          k: 'm_single',
          d: ''
        },
        num: {
          t: '跟单人数',
          k: 'f_num',
          d: ''
        },
        content: {
          t: '跟单宣言',
          k: 'content',
          d: ''
        },
        id: {
          t: '方案id',
          k: 'project_id',
          d: ''
        },
        p_uuid: {
          t: '方案id',
          k: 'p_uuid',
          d: '0'
        },
        black_free: {
          t: '不中免单',
          k: 'black_free',
          d: false
        },
        discounts: {
          t: '所有折扣活动信息,用数组类型，便于追加',
          k: '',
          d: function d() {
            return [];
          }
        },
        discountAkeys: {
          t: '所有折扣活动标识',
          k: '',
          d: function d() {
            return [];
          }
        },
        black_refund: {
          t: '首购不中退',
          k: 'black_refund',
          d: false
        },
        actualPrice: {
          t: '真实价格，打折后',
          k: '',
          d: 0
        },
        price: {
          t: '价格',
          k: 'price',
          d: 0
        },
        type: {
          t: '彩种',
          k: 'lottery_type_text',
          d: ''
        },
        percent: {
          t: '回报率',
          k: 'percent',
          d: ''
        },
        like_num: {
          t: '点赞数',
          k: 'like_num',
          d: '0'
        },
        share_num: {
          t: '分享数',
          k: 'share_num',
          d: '0'
        },
        date_diff: {
          t: '时间差',
          k: '',
          d: function d(data) {
            var current_time = data.current_time || '',
              //--当前时间
              etime = data.etime || ''; //--截止时间
            current_time = current_time.toDate();
            etime = etime.toDate();
            var diff = current_time.DateDiff('s', etime); //--时间差（秒）
            if (diff < 60) {
              return diff + '秒';
            } else if (diff < 3600) {
              return itou.outil.numToTime(diff, 'nn分');
            } else if (diff < 3600 * 24) {
              return itou.outil.numToTime(diff, 'hh小时nn分');
            } else {
              return itou.outil.numToTime(diff, 'dd天hh小时nn分');
            }
          }
        }
      }
    });
    var item1 = itou.dataModel.dataFactory.create('gendan_gendan_item1'); //--进行中跟单记录行对象构造函数创建
    itou.dataModel.config({
      //--跟单记录对象
      key: 'gendan_gendan_list',
      opts: {
        userName: {
          t: '用户信息',
          k: 'user_info.nick_name',
          d: ''
        },
        userPic: {
          t: '用户信息',
          k: '',
          d: function d(data, me) {
            var pic = data.user_info.avatar;
            return pic;
          }
        },
        userId: {
          t: '用户信息',
          k: 'user_info.uid',
          d: ''
        },
        userFans: {
          t: '用户粉丝数',
          k: 'user_info.fans_num',
          d: ''
        },
        projectid: {
          t: '方案id',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id;
          }
        },
        p_uuid: {
          t: '方案id',
          k: '',
          d: function d() {
            var p_uuid;
            if (Gray.$page.getUrlParam('id')) {
              p_uuid = Gray.$page.getUrlParam('p_uuid') || '0';
            } else {
              p_uuid = itou.localJson.getJson('/project/detail/').uuid || '0';
            }
            return p_uuid;
          }
        },
        uid: {
          t: '用户id',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('uid') || '';
          }
        },
        tag: {
          t: '标签',
          k: 'tag_info.tag',
          d: ''
        },
        // percent: {t: "回报率", k: "percent", d: ""},
        count: {
          t: '单数',
          k: 'count',
          d: ''
        },
        // money: {t: "彩金", k: "m_total", d: ""},
        // prize: {t: "奖金", k: "p_total", d: ""},
        user_desc: {
          t: '用户中奖信息描述',
          k: 'rcmd_stat',
          d: {}
        },
        desc_type: {
          t: '用户中奖信息范围',
          k: '',
          d: 10
        },
        br_akey: {
          t: '首单不中退标识',
          k: 'br_akey',
          d: ''
        },
        page: {
          t: '页码',
          k: '',
          d: '1'
        },
        pagesize: {
          t: '分页大小',
          k: '',
          d: '10'
        },
        list: {
          t: '历史跟单列表',
          k: '',
          d: function d(data) {
            var r = [];
            if (data && data.list) {
              var list = data.list;
              list.forEach(function (element) {
                //--对象初始化
                element.current_time = data.current_time; //--当前时间
                var it = new item(element);
                r.push(it);
              }, this);
            }
            return r;
          }
        },
        list1: {
          t: '进行中跟单列表',
          k: '',
          d: function d(data, me) {
            var r = [];
            if (data && data.on_list) {
              var list = data.on_list;
              list.forEach(function (element) {
                //--对象初始化
                element.current_time = data.current_time; //--当前时间
                var it = new item1(element);
                r.push(it);
              }, this);
              me.apiDiscount(r);
            }
            return r;
          }
        }
      }
    });
    var list = itou.dataModel.dataFactory.create('gendan_gendan_list'); //--跟单记录对象构造函数创建
    list.prototype.getList = function () {
      var self = this;
      var url,
        data = {};
      var station_user_id = itou.localJson.getJson('/user/shop/details/').id || '';
      if (self.uid) {
        url = 'recommend/recentGlobalListByUid';
        data = {
          uid: self.uid,
          station_user_id: station_user_id
        };
      } else {
        url = 'recommend/recentListByProjectId';
        data = {
          project_id: self.projectid,
          p_uuid: self.p_uuid,
          station_user_id: station_user_id
        };
      }
      return itou.get({
        url: url,
        data: data
      }).then(function (data) {
        self.reload(data);
      });
    };
    list.prototype.getNext = function () {
      //--获取下页数据
      var self = this;
      self.page = self.page * 1 + 1;
      return itou.get({
        url: 'recommend/byuser',
        data: {
          project_id: self.projectid,
          pagesize: self.pagesize,
          page: self.page
        }
      }).then(function (data) {
        if (data && data.list) {
          var list = data.list;
          list.forEach(function (element) {
            //--对象初始化
            var it = new item(element);
            self.list.push(it);
          }, this);
        }
      });
    };
    //--获取折扣活动信息
    list.prototype.apiDiscount = function () {
      var _this6 = this;
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      console.log(items);
      if (!items.length) {
        return Promise.resolve();
      }
      //--行数据id映射，活动查询ids
      var maps = {},
        p_u_ids = [];
      items.forEach(function (item) {
        var id = item.id,
          black_free = item.black_free,
          price = item.price;
        var p_u_id = '';
        if (id && _this6.userId) {
          p_u_id = "".concat(id, "_").concat(_this6.userId);
        }
        if (price > 0 && !black_free && p_u_id) {
          maps[id] = item;
          p_u_ids.push(p_u_id);
        }
      });
      if (!p_u_ids.length) {
        return Promise.resolve();
      }
      //--调用接口获取数据
      return itou.get({
        url: 'ycontent/getActivityRcmds',
        data: {
          p_u_ids: p_u_ids
        },
        type: 'post'
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        data.items || (data.items = {});
        for (var id in data.items) {
          var _data$items$id = data.items[id],
            discount_per = _data$items$id.discount_per,
            discount_akey = _data$items$id.discount_akey;
          //--活动数据处理，实际价格计算
          if (maps[id]) {
            maps[id].discounts.push(data[id]);
            maps[id].discountAkeys.push(discount_akey);
            // console.log(maps[id].price, id, maps[id]);
            maps[id].actualPrice = parseFloat(maps[id].price * discount_per).toFixed(2) || '0.00';
          }
        }
        _this6.br_akey = data.br_akey || ''; //--首单不中退标识
      });
    };

    return new list();
  };
  var createShopGendan = function createShopGendan(Model) {
    var imgArr = [],
      //--图片数组
      mapsArr = []; //--映射数组
    for (var i in $default.imgs) {
      imgArr.push(i);
    }
    for (var i in $default.maps) {
      mapsArr.push(i);
    }
    var danchang = [
    //--北京单场类型
    'WDL',
    //--胜平负
    'Score',
    //--比分
    'TotalGoals',
    //--总进球
    'OverUnder',
    //--上下单双
    'HalfFull',
    //--竞彩半全场
    'WL' //--胜负过关
    ];

    var type = Gray.$page.getUrlParam('type');
    type == 'end' ? '1' : '0'; //--是否可跟单
    itou.dataModel.config({
      //--店铺跟单记录行对象
      key: 'gendan_shop_item',
      opts: {
        rcmd_type: {
          t: '推荐类型,0为全网,1为普通',
          k: 'rcmd_type',
          d: ''
        },
        playType: {
          t: '子玩法',
          k: 'play_type_text',
          d: ''
        },
        lottery: {
          t: '彩种',
          k: 'lottery_type_text',
          d: ''
        },
        lotteryType: {
          t: '彩种',
          k: 'lottery_type',
          d: ''
        },
        isDc: {
          t: '是否是单场',
          k: '',
          d: function d(data, me) {
            var lType = me.lotteryType || '';
            var isDc = danchang.indexOf(lType) >= 0;
            return isDc;
          }
        },
        type: {
          t: '类型',
          k: '',
          d: function d() {
            //--0=可跟单，1=已结束
            var type = Gray.$page.getUrlParam('type');
            return type == 'end' ? '1' : '0'; //--是否可跟单
          }
        },

        user_info: {
          t: '用户信息',
          k: 'user_info',
          d: ''
        },
        station_uid: {
          t: '店铺id',
          k: 'station_uid',
          d: ''
        },
        content: {
          t: '宣言',
          k: 'content',
          d: ''
        },
        manner: {
          t: '投注方式',
          k: '',
          d: function d(data, me) {
            var manner = (data.manner || [])[0];
            return manner;
          }
        },
        money: {
          t: '彩金',
          k: 'm',
          d: '0'
        },
        num: {
          t: '跟单人数',
          k: 'f_num',
          d: '0'
        },
        t_money: {
          t: '跟单总额',
          k: 'mt_total',
          d: '0'
        },
        m_single: {
          t: '单倍投注金额',
          k: 'm_single',
          d: ''
        },
        percent: {
          t: '回报率',
          k: 'percent',
          d: ''
        },
        id: {
          t: '方案id',
          k: 'project_id',
          d: ''
        },
        p_uuid: {
          t: '方案id',
          k: 'p_uuid',
          d: '0'
        },
        p_u_id: {
          t: '方案id_作者id,用来获取折扣信息',
          k: '',
          d: function d(data, me) {
            var _data$project_id = data.project_id,
              project_id = _data$project_id === void 0 ? '' : _data$project_id,
              _data$uid = data.uid,
              uid = _data$uid === void 0 ? '' : _data$uid;
            if (project_id && uid) {
              return "".concat(project_id, "_").concat(uid);
            }
            return '';
          }
        },
        discounts: {
          t: '所有折扣活动信息,用数组类型，便于追加',
          k: '',
          d: function d() {
            return [];
          }
        },
        discountAkeys: {
          t: '所有折扣活动标识',
          k: '',
          d: function d() {
            return [];
          }
        },
        actualPrice: {
          t: '真实价格，打折后',
          k: '',
          d: 0
        },
        prize: {
          t: '预计奖金',
          k: 'pre_p',
          d: '0'
        },
        price: {
          t: '价格',
          k: 'price',
          d: 0
        },
        black_free: {
          t: '是否设置不中免',
          k: 'black_free',
          d: false
        },
        black_refund: {
          t: '首单不中退标识',
          k: 'black_refund',
          d: 0
        },
        ticket_apply_status: {
          t: '大实票标识',
          k: 'ticket_apply_status',
          d: 0
        },
        //--当值不等于100时不展示大实票标识,当值等于100时展示大实票标识
        p: {
          t: '奖金',
          k: 'p',
          d: ''
        },
        ptime: {
          t: '开奖时间',
          k: '',
          d: function d(data, me) {
            var r = '';
            if (data.ptime) {
              r = data.ptime.Dateformat('MM月DD日 HH:NN开奖');
            } else if (data.pre_prize_time) {
              r = data.pre_prize_time.Dateformat('预计MM月DD日 HH:NN开奖');
            }
            return r;
          }
        },
        user_desc: {
          t: '用户7天描述',
          k: '',
          d: function d(data, me) {
            var _data$rcmd_stat$retur, _data$rcmd_stat;
            var desc = [];
            // if(data.user_info.follow_num || data.user_info.total_prize){
            // 	desc = '近7天';
            // 	if(data.user_info.total_prize) desc += '中'+data.user_info.total_prize+'元 ';
            // 	if(data.user_info.follow_num) desc += '带红'+data.user_info.follow_num+'人';
            // }
            var _7p_ret = data.rcmd_stat['10p_ret'];
            if (_7p_ret && _7p_ret >= 0.80) {
              desc[0] = Math.floor(_7p_ret * 100) + '%'; //--盈利排序，近7天回报
            }

            var stat_desc = data.rcmd_stat['stat_desc'] || '';
            desc[1] = stat_desc.split('中'); //--命中排序，M中N
            desc[1][2] = (desc[1][1] || 0) / (desc[1][0] || 1) > 0;
            desc[2] = [data.rcmd_stat['recent_c_hits'], data.rcmd_stat['max_c_hits']]; //--连红排序，X连红|最高Y连红
            desc[3] = [data.rcmd_stat['recent_c_not_hits'], data.rcmd_stat['max_c_not_hits']]; //--有望反弹排序，X连黑|最高Y连黑
            desc[4] = (_data$rcmd_stat$retur = data === null || data === void 0 || (_data$rcmd_stat = data.rcmd_stat) === null || _data$rcmd_stat === void 0 ? void 0 : _data$rcmd_stat.return_desc) !== null && _data$rcmd_stat$retur !== void 0 ? _data$rcmd_stat$retur : '';
            return desc;
          }
        },
        desc2: {
          t: '描述',
          k: '',
          d: function d(data, me) {
            var desc = data.status_text;
            var str;
            if (desc) {
              var desc_arr = desc.split('，');
              var num_reg = new RegExp(/([\d\.]+)/);
              if (desc_arr[1]) {
                str = desc_arr[1].replace(num_reg, function (p1, string) {
                  if (p1) return '<cite class="fontred">' + p1 + '</cite>';else return string;
                });
              } else {
                str = desc;
              }
            }
            return str;
          }
        },
        desc1: {
          t: '描述',
          k: '',
          d: function d(data, me) {
            var desc = data.status_text;
            if (desc) {
              var arr = desc.split(/[\d\.]+/); //<span class='fontred'>16</span>
              for (var i = 0, len = arr.length; i < len; i++) {
                var str = arr[i];
                if (i == 0) {
                  desc = desc.replace(str, str + '<span class=\'fontred\'>');
                } else if (i == len - 1) {
                  desc = desc.replace(str, '</span>' + str);
                } else {
                  desc = desc.replace(str, '</span>' + str + '<span class=\'fontred\'>');
                }
              }
            }
            return desc;
          }
        },
        desc: {
          t: '描述',
          k: '',
          d: function d(data, me) {
            var r = [];
            r.push('投<span class=\'fontred\'>');
            r.push(me.money || 0);
            r.push('</span>元');
            if (me.type == '0') {
              if (me.prize > 0) {
                r.push('，最高奖金<span class=\'fontred\'>');
                r.push(me.prize || 0);
                r.push('</span>元');
              }
            }
            if (me.type == '1') {
              // if(me.prize > 0){
              // 	r.push("，奖金<span class='fontred'>");
              // 	r.push(me.prize);
              // 	r.push("</span>元");
              // }
              ///--todo:根据状态获取中奖信息，需要接口支持
            }
            return r.join('');
          }
        },
        img: {
          t: '标签图标',
          k: '',
          d: function d(data, me) {
            try {
              var type = me.lotteryType;
              if (mapsArr.indexOf(type) > -1) {
                return $default.maps[type] || 'gengdan_labeldef';
              } else {
                return 'gengdan_labeldef';
              }
            } catch (error) {
              return 'gengdan_labeldef';
            }
          }
        },
        bg: {
          t: '标签图标背景',
          k: '',
          d: function d(data, me) {
            return $default.imgs[me.img];
          }
        },
        tag: {
          t: '标签',
          k: '',
          d: function d(data, me) {
            try {
              return data.tag_info.tag;
            } catch (error) {
              return '';
            }
          }
        },
        etime: {
          t: '截止时间',
          k: '',
          d: function d(data, me) {
            // if(me.type == "1"){
            // 	return "";
            // }
            var etime = data.etime + '',
              r = '';
            try {
              //r = etime.substr(5);
              r = etime.Dateformat('mm月dd日 hh:NN截止');
            } catch (error) {
              console.error(error);
            }
            return r;
          }
        },
        diffDate: {
          t: '距截止时间的时间差',
          k: '',
          d: function d(data, me) {
            var s = data.expire_seconds + '',
              r = '';
            if (s > 0) {
              var seconds = {
                d: {
                  v: 24 * 3600,
                  t: '天'
                },
                h: {
                  v: 3600,
                  t: '小时'
                },
                n: {
                  v: 60,
                  t: '分'
                },
                s: {
                  v: 1,
                  t: '秒'
                }
              };
              for (var _i in seconds) {
                var _item = seconds[_i];
                var n = Math.floor(s / _item.v);
                if (n) {
                  r += n + _item.t;
                }
                s %= _item.v;
              }
            }
            return r;
          }
        },
        lastPrize: {
          t: '上单中奖金额',
          k: '',
          d: function d(data, me) {
            var p = (data.rcmd_stat || {}).last_sum_p || 0;
            var r;
            if (p >= 10000) {
              p = (p / 10000).toFixed(2) * 1;
              r = "\u4E0A\u5355\u4E2D".concat(p, "\u4E07");
            } else if (p > 0) {
              r = "\u4E0A\u5355\u4E2D".concat(p, "\u5143");
            }
            return r;
          }
        },
        gendanFx: {
          t: '跟单分析数据',
          k: '',
          d: function d(data, me) {
            var summary = data.summary,
              text_type = data.text_type,
              content_length = data.content_length,
              _data$content_apply2 = data.content_apply,
              content_apply = _data$content_apply2 === void 0 ? {} : _data$content_apply2;
            var status = content_apply.status;
            if (text_type == 'analyzation' && status == 100) {
              return {
                len: content_length,
                summary: summary
              };
            }
            return null;
          }
        },
        likeNum: {
          t: '点赞次数',
          k: 'like_num',
          d: 0
        },
        shareNum: {
          t: '分享次数',
          k: 'share_num',
          d: 0
        },
        tagId: {
          t: 'tag_id',
          k: 'tag_id',
          d: ''
        },
        daihong: {
          t: '30单带红人数',
          k: '',
          d: function d(data) {
            return data['30p_f_num'] || 0;
          }
        },
        renqi: {
          t: '人气',
          k: '',
          d: function d(data) {
            var renqi = data.f_num || 0;
            if (renqi >= 100) {
              return '100+';
            }
            if (renqi >= 10) {
              return Math.floor(renqi / 10) * 10 + '+';
            }
            return renqi;
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('gendan_shop_item'); //--店铺跟单记录行对象构造函数创建
    itou.dataModel.config({
      //--跟单记录对象
      key: 'gendan_gendan_list',
      opts: {
        shopid: {
          t: '店铺id',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
          }
        },
        shopUuid: {
          t: '店铺uuid',
          k: 'station_uuid',
          d: ''
        },
        shopName: {
          t: '店铺名称',
          k: '',
          d: function d(data, me) {
            if (data.station_info && data.station_info.station_name) {
              return data.station_info.station_name;
            } else {
              return me.shopName || '';
            }
          }
        },
        followNum: {
          t: '关注人数',
          k: 'follow_user_num',
          d: ''
        },
        type: {
          t: '类型',
          k: '',
          d: function d() {
            //--0=可跟单，1=已结束
            var type = Gray.$page.getUrlParam('type');
            return type == 'end' ? '1' : '0'; //--是否可跟单
          }
        },

        money: {
          t: '7天内奖金',
          k: '',
          d: '0'
        },
        page: {
          t: '页码',
          k: '',
          d: '1'
        },
        pagesize: {
          t: '分页大小',
          k: '',
          d: '25'
        },
        count: {
          t: '总数量',
          k: 'count',
          d: ''
        },
        list: {
          t: '列表',
          k: '',
          d: function d(data, me) {
            var r = me.list || [];
            r.splice(0);
            if (data && data.list) {
              var list = data.list;
              list.forEach(function (element) {
                //--对象初始化
                var it = new item(element);
                r.push(it);
              }, this);
              me.apiDiscount(r); //--折扣活动获取和计算
            }

            return r;
          }
        },
        list2: {
          t: '免费大厅的2个收费方案',
          k: '',
          d: function d(data, me) {
            var r = me.list2 || [];
            r.splice(0);
            if (data && data.list2) {
              var list = data.list2;
              list.forEach(function (element) {
                //--对象初始化
                var it = new item(element);
                r.push(it);
              }, this);
            }
            return r;
          }
        },
        //--筛选条件
        rcmd_type: {
          t: '跟单类型',
          k: 'rcmd_type',
          d: ''
        },
        //--0:店内跟单,1为全网跟单,null为所有
        lottery_style: {
          t: '自定义彩种分类',
          k: 'lottery_style',
          d: ''
        },
        //--'JC'=>'竞彩'
        content_hide: {
          t: '是否公开',
          k: 'content_hide',
          d: ''
        },
        //--0:公开,1截止后,null为所有
        filter_type: {
          t: '筛选类型',
          k: 'filter_type',
          d: 0
        },
        //--0:精选,1:命中排序,2:连红排序,3:有望反弹排序,4:我的关注
        fee_type: {
          t: '筛选类型',
          k: 'fee_type',
          d: ''
        },
        //--付费类型:0:免费,1:付费,null为所有
        has_analyzation: {
          t: '内容类型',
          k: 'has_analyzation',
          d: ''
        },
        //--内容类型 空为全部,1:带分析,0:不带分析
        black_free: {
          t: '设置不中免',
          k: 'black_free',
          d: ''
        },
        //--设置不中免 空为全部,0:不设置,1:设置
        sort_type: {
          t: '',
          k: 'sort_type',
          d: '0'
        },
        br_akey: {
          t: '首单不中退标识',
          k: '',
          d: ''
        }
      }
    });
    var list = itou.dataModel.dataFactory.create('gendan_gendan_list'); //--跟单记录对象构造函数创建
    list.prototype.getBack = function () {
      var self = this;
      /**
       * 返回地址中追加查询参数
       */
      // var back = Gray.$page.getUrlParam('back');
      // var currUrl = '/precommend/';
      var back = Gray.$page.getUrlParam('back');
      var href = Gray.$page.href || location.href,
        currUrl;
      if (href.has('/precommend/paid/')) {
        currUrl = '/precommend/paid/';
      } else {
        currUrl = '/precommend/';
      }
      currUrl += '?id=' + self.shopid;
      currUrl += '&rcmd_type=' + self.rcmd_type;
      currUrl += '&lottery_style=' + self.lottery_style;
      currUrl += '&fee_type=' + self.fee_type;
      currUrl += '&content_hide=' + self.content_hide;
      currUrl += '&filter_type=' + self.filter_type;
      currUrl += '&has_analyzation=' + self.has_analyzation;
      currUrl += '&black_free=' + self.black_free;
      currUrl += '&sort_type=' + self.sort_type;
      currUrl += '&back=' + encodeURIComponent(back);
      return currUrl;
    };
    list.prototype.apiList = function () {
      var self = this,
        user = Model.userInfo;
      var canCache = self.filter_type != 1;
      return itou.get({
        url: 'recommend/byShopV3',
        data: {
          station_user_id: self.shopid,
          pagesize: self.pagesize,
          page: self.page,
          rcmd_type: self.rcmd_type,
          //--0:店内跟单,1为全网跟单,null为所有
          lottery_style: self.lottery_style,
          //--'JC'=>'竞彩'
          // fee_type: self.filter_type != 5? self.fee_type: '', //--'JC'=>'竞彩'
          fee_type: self.fee_type,
          //--'JC'=>'竞彩'
          content_hide: self.content_hide,
          //--0:公开,1截止后,null为所有
          filter_type: self.filter_type,
          //--0:精选,1:命中排序,2:连红排序,3:有望反弹排序,4:我的关注
          has_analyzation: self.has_analyzation,
          black_free: self.black_free,
          sort_type: self.sort_type
        },
        rnd: !canCache,
        notoken: canCache,
        specialErr: {
          '-1001': function _() {
            itou.gotoLogin(self.getBack());
          }
        }
      });
    };
    list.prototype.apiList2 = function () {
      //--获取2个收费方案
      var self = this,
        user = Model.userInfo;
      return itou.get({
        url: 'recommend/byShopV3',
        data: {
          station_user_id: self.shopid,
          pagesize: 2,
          page: 1,
          rcmd_type: self.rcmd_type,
          //--0:店内跟单,1为全网跟单,null为所有
          lottery_style: self.lottery_style,
          //--'JC'=>'竞彩'
          fee_type: 1,
          //--'JC'=>'竞彩'
          content_hide: self.content_hide,
          //--0:公开,1截止后,null为所有
          has_analyzation: self.has_analyzation,
          black_free: self.black_free,
          // filter_type: self.filter_type,//--0:精选,1:命中排序,2:连红排序,3:有望反弹排序,4:我的关注
          filter_type: 0 //--0:精选,1:命中排序,2:连红排序,3:有望反弹排序,4:我的关注
        },

        rnd: false,
        notoken: true,
        specialErr: {
          '-1001': function _() {
            itou.gotoLogin(self.getBack());
          }
        }
      });
    };
    list.prototype.getList = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var self, user, href, list2;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            self = this, user = Model.userInfo;
            href = Gray.$page.href || location.href, list2 = []; // if (href.has('/precommend/paid/') || self.filter_type == 5) {
            //     list2 = [];
            // } else {
            //     list2 = await self.apiList2().then(function (data) {
            //         return data.list;
            //     });
            // }
            return _context.abrupt("return", self.apiList().then(function (data) {
              //--接收排序和筛选规则，避免被覆盖
              data.rcmd_type = self.rcmd_type;
              data.lottery_style = self.lottery_style;
              data.fee_type = self.fee_type;
              data.content_hide = self.content_hide;
              data.filter_type = self.filter_type;
              data.has_analyzation = self.has_analyzation;
              data.black_free = self.black_free;
              data.sort_type = self.sort_type;
              data.list2 = list2;
              self.reload(data);
              if (data && data.list && data.list.length >= self.pagesize) {
                return true;
              } else {
                return false;
              }
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    //--获取折扣活动信息
    list.prototype.apiDiscount = function () {
      var _this7 = this;
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!items.length) {
        return Promise.resolve();
      }
      //--行数据id映射，活动查询ids
      var maps = {},
        p_u_ids = [];
      items.forEach(function (item) {
        var id = item.id,
          p_u_id = item.p_u_id,
          black_free = item.black_free,
          price = item.price;
        if (price > 0 && !black_free && p_u_id) {
          maps[id] = item;
          p_u_ids.push(p_u_id);
        }
      });
      if (!p_u_ids.length) {
        return Promise.resolve();
      }
      //--调用接口获取数据
      return itou.get({
        url: 'ycontent/getActivityRcmds',
        data: {
          p_u_ids: p_u_ids
        },
        type: 'post'
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        data.items || (data.items = {});
        for (var id in data.items) {
          var _data$items$id2 = data.items[id],
            discount_per = _data$items$id2.discount_per,
            discount_akey = _data$items$id2.discount_akey;
          //--活动数据处理，实际价格计算
          if (maps[id]) {
            maps[id].discounts.push(data[id]);
            maps[id].discountAkeys.push(discount_akey);
            // console.log(maps[id].price, id, maps[id]);
            maps[id].actualPrice = parseFloat(maps[id].price * discount_per).toFixed(2) || '0.00';
          }
        }
        _this7.br_akey = data.br_akey || ''; //--首单不中退标识
      });
    };

    list.prototype.doSearch = function () {
      var self = this;
      return self.getList();
    };
    list.prototype.getNext = function () {
      //--获取下页数据
      var self = this,
        user = Model.userInfo;
      self.page = self.page * 1 + 1;
      return self.apiList().then(function (data) {
        if (data && data.list) {
          var list = data.list;
          var r = [];
          list.forEach(function (element) {
            //--对象初始化
            var it = new item(element);
            self.list.push(it);
            r.push(it);
          }, this);
          self.apiDiscount(r); //--活动折扣获取和计算
          if (data && data.list && data.list.length == self.pagesize) {
            return true;
          } else {
            return false;
          }
        }
      });
    };
    var href = Gray.$page.href || location.href;
    var shopGendan = new list();
    //--从地址栏获取筛选条件
    var rcmd_type = Gray.$page.getUrlParam('rcmd_type');
    var lottery_style = Gray.$page.getUrlParam('lottery_style');
    var fee_type = Gray.$page.getUrlParam('fee_type');
    var content_hide = Gray.$page.getUrlParam('content_hide');
    var filter_type = Gray.$page.getUrlParam('filter_type');
    var has_analyzation = Gray.$page.getUrlParam('has_analyzation');
    var black_free = Gray.$page.getUrlParam('black_free');
    var sort_type = Gray.$page.getUrlParam('sort_type');
    shopGendan.rcmd_type = rcmd_type === null ? '' : rcmd_type;
    shopGendan.lottery_style = lottery_style === null ? '' : lottery_style;
    // if (href.has('/precommend/paid/')) {//--收费跟单大厅
    //     shopGendan.fee_type = '1';//--收费
    //     // shopGendan.fee_type = '0';//--免费（测试用）
    // } else if (href.has('/precommend/')) {//--免费跟单大厅
    //     shopGendan.fee_type = '0';//--免费
    // } else {
    shopGendan.fee_type = fee_type === null ? '' : fee_type;
    // }
    shopGendan.content_hide = content_hide === null ? '' : content_hide;
    shopGendan.has_analyzation = has_analyzation === null ? '' : has_analyzation;
    shopGendan.black_free = black_free === null ? '' : black_free;
    shopGendan.sort_type = sort_type === null ? '' : sort_type;
    if (href.has('/precommend/paid/')) {
      //--收费跟单大厅
      shopGendan.filter_type = '0'; //--默认精选
      // shopGendan.filter_type = '1';//--默认命中（测试用）
    } else {
      shopGendan.filter_type = filter_type === null ? '' : filter_type;
    }
    return shopGendan;
  };
  var createProjectShare = function createProjectShare(Model) {
    var id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id;
    // var uuid = (Gray.$page.getUrlParam('p_uuid') || itou.localJson.getJson('/project/detail/').uuid);
    var uuid;
    if (Gray.$page.getUrlParam('id')) {
      uuid = Gray.$page.getUrlParam('p_uuid') || '0';
    } else {
      uuid = itou.localJson.getJson('/project/detail/').uuid || '0';
    }
    //--分区键定位店铺ID
    var dk_station_id = Gray.$page.getUrlParam('dk_station_id'),
      link = config.base_url + 'project/gendan/?scene=share&id=' + id + '&p_uuid=' + uuid;
    if (dk_station_id) {
      link += '&dk_station_id=' + dk_station_id;
    }
    itou.dataModel.config({
      //--跟单方案分享信息
      key: 'gendan_shop_shareMess',
      opts: {
        title: {
          t: '分享标题',
          k: '',
          d: ''
        },
        imgUrl: {
          t: '猜中',
          k: '',
          d: config.base_url + 'static/images/projectshare-c75dfe485f.jpg'
        },
        id: {
          t: '方案id',
          k: '',
          d: id
        },
        station_id: {
          t: '店铺id',
          k: '',
          d: ''
        },
        desc: {
          t: '分享描述',
          k: '',
          d: ''
        },
        link: {
          t: '链接',
          k: '',
          d: link
        }
      }
    });
    var share = itou.dataModel.dataFactory.create('gendan_shop_shareMess'); //--店铺跟单记录行对象构造函数创建
    share.prototype.getInfo = function (url) {
      //--获取方案基础信息
      url = url || 'project/detailV2';
      var self = this;
      return itou.get({
        url: url,
        data: {
          project_id: id,
          p_uuid: uuid
        },
        autocache: true
      }).then(function (data) {
        return self.formatInfo(data);
      });
    };
    share.prototype.formatInfo = function (data) {
      //--格式化数据，获取分享信息
      var self = this;
      var defer = $.Deferred();
      try {
        var end = data.schedule_info.end == 1; //--是否截止
      } catch (error) {
        var end = false;
      }
      var p_station_id;
      if (data.station_info && data.station_info.station_user_id) {
        //--获取分享店铺station_user_id
        // self.link += "&p_station_id=" + data.station_info.station_user_id;//--p_station_id参数会被app分享监听，并在分享链接中追加back路径，返回对应店铺，下同
        p_station_id = data.station_info.station_user_id; //--p_station_id参数会被app分享监听，并在分享链接中追加back路径，返回对应店铺，下同
        self.station_id = data.station_info.station_user_id;
      } else if (data.recommend_info && data.recommend_info.station_uid) {
        // self.link += "&p_station_id=" + data.recommend_info.station_uid;
        p_station_id = data.recommend_info.station_uid;
        self.station_id = data.recommend_info.station_uid;
      }
      try {
        var rcmd_type = data.recommend_info.rcmd_type;
      } catch (error) {
        var rcmd_type = 0;
      }
      if (rcmd_type == 1) {
        var entry_info = itou.entry.get(),
          stationID = entry_info.station_id;
        self.link += '&station_id=' + stationID;
        self.link += '&p_station_id=' + stationID;
      } else {
        self.link += '&p_station_id=' + p_station_id;
      }
      var prize = data.net_prize;
      if (!end) {
        //--未截止
        self.title = '我的精选推荐  跟着我买更靠谱！';
        self.desc = '我的口号：有钱一起赚，有肉大家吃。';
      } else if (end && prize < 0) {
        //--未开奖
        self.title = '看我选的方案，十有八九能中！';
        self.desc = '据说围观的人越多越容易中奖。';
      } else if (end && prize == 0) {
        //--未中奖
        self.title = '哎......就差一点点，期待下次好运。';
        self.desc = '人生不如意十之八九，一点也不假。';
      } else if (end && prize > 0) {
        //--中奖
        self.title = '你看～你看～又中了！';
        self.desc = '跟买中奖的发礼包啦，没跟买的记住下次别再错过哦。';
      }
      try {
        if (data.is_recommend == 1 && data.recommend_info.content) {
          //--是否跟单产生
          self.desc = data.recommend_info.content;
        }
      } catch (error) {
        console.error(error.message);
      }
      defer.resolve();
      return defer.promise();
    };
    return new share();
  };
  var createGendanDetail = function createGendanDetail(Model) {
    //--跟单详情
    var imgArr = []; //--图片数组
    for (var i in $default.imgs) {
      imgArr.push(i);
    }
    itou.dataModel.config({
      //--跟单详情行对象
      key: 'gendan_detail_item',
      opts: {
        name: {
          t: '彩金',
          k: 'user_name',
          d: ''
        },
        pic: {
          t: '头像',
          k: 'avatar',
          d: ''
        },
        avatar: {
          t: '头像',
          k: '',
          d: function d(data, me) {
            var avatar1 = me.pic;
            return avatar1;
          }
        },
        money: {
          t: '金额',
          k: 'm',
          d: ''
        },
        prize: {
          t: '奖金',
          k: 'p',
          d: ''
        },
        prize1: {
          t: '预计奖金',
          k: 'pre_p',
          d: ''
        },
        ctime: {
          t: '跟单时间',
          k: '',
          d: function d(data, me) {
            var ctime = String(data.ctime);
            return ctime.Dateformat('MM-DD HH:NN');
          }
        },
        is_self: {
          t: '是否是自己的跟单',
          k: '',
          d: function d(data, me) {
            return data.is_self == 1;
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('gendan_detail_item'); //--跟单详情行对象构造函数创建
    function formatLastTime(l) {
      var r = '';
      l = l || 0;
      if (Math.floor(l / 3600) > 0) {
        r += Math.floor(l / 3600) + '小时';
        l = l % 3600;
      }
      if (Math.floor(l / 60) > 0) {
        r += Math.floor(l / 60) + '分';
        l = l % 60;
      }
      r += l + '秒';
      return r;
    }
    itou.dataModel.config({
      //--跟单详情对象
      key: 'gendan_detail_info',
      opts: {
        rcmd_type: {
          t: '0为普通,1为全网',
          k: 'rcmd_type',
          d: ''
        },
        rcmd_stat: {
          t: '',
          k: '',
          d: function d(data) {
            var rcmd_stat = data.rcmd_stat || {};
            rcmd_stat['7p_ret_1'] = rcmd_stat['7p_ret'] ? (rcmd_stat['7p_ret'] * 100).toFixed(0) : '--';
            rcmd_stat['10p_ret_1'] = rcmd_stat['10p_ret'] ? (rcmd_stat['10p_ret'] * 100).toFixed(0) : '--';
            rcmd_stat['15p_ret_1'] = rcmd_stat['15p_ret'] ? (rcmd_stat['15p_ret'] * 100).toFixed(0) : '--';
            rcmd_stat['20p_ret_1'] = rcmd_stat['20p_ret'] ? (rcmd_stat['20p_ret'] * 100).toFixed(0) : '--';
            rcmd_stat['30p_ret_1'] = rcmd_stat['30p_ret'] ? (rcmd_stat['30p_ret'] * 100).toFixed(0) : '--';
            return rcmd_stat || {};
          }
        },
        username: {
          t: '用户信息',
          k: 'nick_name',
          d: ''
        },
        avatar: {
          t: '头像',
          k: '',
          d: function d(data) {
            var avatar1 = data.avatar;
            return avatar1;
          }
        },
        projectid: {
          t: '方案id',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('id') || itou.localJson.getJson('/project/detail/').id;
          }
        },
        p_uuid: {
          t: '方案id',
          k: '',
          d: function d() {
            var p_uuid;
            if (Gray.$page.getUrlParam('id')) {
              p_uuid = Gray.$page.getUrlParam('p_uuid') || '0';
            } else {
              p_uuid = itou.localJson.getJson('/project/detail/').uuid || '0';
            }
            return p_uuid;
          }
        },
        tag: {
          t: '标签',
          k: '',
          d: function d(data) {
            var tag_info = data.tag_info || {};
            return tag_info.tag;
          }
        },
        desc: {
          t: '说明',
          k: 'content',
          d: ''
        },
        funs: {
          t: '粉丝人数',
          k: 'fans_num',
          d: ''
        },
        max: {
          t: '最大倍数及奖金',
          k: '',
          d: function d(data) {
            var lottery_type = data.lottery_type;
            return $default.max[lottery_type] || {
              b: 10000,
              m: 100
            };
          }
        },
        page: {
          t: '页码',
          k: '',
          d: '1'
        },
        pagesize: {
          t: '分页大小',
          k: '',
          d: '10'
        },
        count: {
          t: '总数量',
          k: 'f_num',
          d: '0'
        },
        money: {
          t: '总金额',
          k: 'mt_total',
          d: '0'
        },
        prize: {
          t: '总奖金',
          k: 'pt_total',
          d: '0'
        },
        lastTime: {
          t: '跟单截止剩余秒数',
          k: 'expire_seconds',
          d: '0'
        },
        reserveTime: {
          t: '内容售卖提前截止剩余秒数',
          k: 'sale_reserve_seconds',
          d: '0'
        },
        lastTime1: {
          t: '剩余截止时间',
          k: '',
          d: function d(data, me) {
            var l = me.lastTime || 0,
              r = '';
            r = formatLastTime(l);
            return r;
          }
        },
        list: {
          t: '列表',
          k: '',
          d: function d(data, me) {
            return me.reloadList(data.follow_list);
          }
        }
        // list: {t:"列表", k: "", d:[]},
        // list: {t: "列表", k: "", d: function(data, me){
        // 	var r = me.list || [];
        // 	r.splice(0);
        // 	if(data && data.follow_list){
        // 		var list = data.follow_list;
        // 		list.forEach(function (element) {//--对象初始化
        // 			var it = new item(element);
        // 			r.push(it);
        // 		}, this);
        // 	}
        // 	return r;
        // }}
      }
    });

    var list = itou.dataModel.dataFactory.create('gendan_detail_info'); //--跟单详情对象构造函数创建
    list.prototype.reloadList = function (data) {
      var self = this;
      data = data || [];
      self.list = self.list || [];
      self.list.splice(0);
      data.forEach(function (element) {
        //--对象初始化
        if (self.list.length == 23) {
          self.list.push('more');
          return;
        } else if (self.list.length > 23) {
          return;
        }
        var it = new item(element);
        self.list.push(it);
      }, this);
      console.log(self.list);
      return self.list;
    };
    list.prototype.formatLastTime = function () {
      var self = this,
        l = self.lastTime || 0,
        r = '';
      r = formatLastTime(l);
      self.lastTime1 = r;
      return r;
    };
    list.prototype.getList = function () {
      var self = this,
        user = Model.userInfo;
      return itou.get({
        url: 'project/recommenddetail',
        data: {
          project_id: self.projectid,
          p_uuid: self.p_uuid,
          pagesize: self.pagesize,
          page: self.page
        },
        autocache: true
      }).then(function (data) {
        var data1 = data.recommend_info;
        data1.lottery_type = data.lottery_type;
        self.reload(data1);
      });
    };
    list.prototype.getNext = function () {
      //--获取下页数据
      var self = this,
        user = Model.userInfo;
      self.page = self.page * 1 + 1;
      return itou.get({
        url: 'project/followlist',
        data: {
          project_id: self.projectid,
          pagesize: self.pagesize,
          page: self.page
        }
      }).then(function (data) {
        // data.list.forEach(function (element) {//--对象初始化
        // 	var it = new item(element);
        // 	self.list.push(it);
        // }, this);
        data = data.recommend_info;
        if (data && data.follow_list) {
          var list = data.follow_list;
          list.forEach(function (element) {
            //--对象初始化
            var it = new item(element);
            self.list.push(it);
          }, this);
        }
      });
    };
    return new list();
  };
  var createPingce = function createPingce() {
    //--竞彩篮球和竞彩足球的奖金评测
    itou.dataModel.config({
      //--奖金评测提交数据对象
      key: 'gendan_pingce_apidata',
      opts: {
        passTypes: {
          t: '过关方式',
          k: '',
          d: ''
        },
        multiple: {
          t: '倍数',
          k: '',
          d: '1'
        },
        minRequiredSetCount: {
          t: '最小胆，用于模糊定胆',
          k: '',
          d: '0'
        },
        maxRequiredSetCount: {
          t: '最大胆，用于模糊定胆',
          k: '',
          d: '0'
        },
        requiredIndex: {
          t: '胆列表',
          k: '',
          d: ''
        },
        optionalIndex: {
          t: '拖列表',
          k: '',
          d: ''
        },
        lotteryType: {
          t: '采种',
          k: '',
          d: ''
        },
        matches: {
          t: '赛事信息',
          k: '',
          d: function d() {
            return [];
          }
        }
      }
    });
    var apidata = itou.dataModel.dataFactory.create('gendan_pingce_apidata'); //--奖金评测提交数据对象构造函数创建
    apidata.prototype.formatData = function (data) {
      //--将方案详情接口数据处理成评测接口接受的数据
      var self = this,
        matchs = data.match_list,
        wager = data.wagers[0],
        w = wager.wager + '';
      dan = wager.abs.split(','), seq = data.match_seq.sort();
      self.lotteryType = data.lottery_type;
      self.passTypes = data.pass_type;
      self.minRequiredSetCount = dan[0] ? dan.length : 0;
      self.maxRequiredSetCount = dan[0] ? dan.length : 0;
      self.requiredIndex = [];
      self.optionalIndex = [];
      var str = 'A';
      if ($default.lottery.football.indexOf(self.lotteryType) >= 0) {
        str = 'A';
      } else if ($default.lottery.basketball.indexOf(self.lotteryType) >= 0) {
        str = 'Y';
      }
      var isMixed = self.lotteryType.has('Mix'); //--是否是混合投注
      seq.forEach(function (num, index) {
        if (dan.indexOf(num + '') >= 0 || dan.indexOf(num) >= 0) {
          self.requiredIndex.push(index);
        } else {
          self.optionalIndex.push(index);
        }
      }, this);
      self.requiredIndex = self.requiredIndex.join(',');
      self.optionalIndex = self.optionalIndex.join(',');
      for (var i in matchs) {
        var o = {
            'sn': i,
            'prized': false,
            'hitSet': '',
            'spArray': ' ',
            'rqArray': ''
          },
          exp = new RegExp(i + ':[\\d,]+'),
          selected = w.match(exp)[0] + '';
        item = matchs[i], arr = [];
        selected = selected.replace(i + ':', '').split(',');
        for (ii in item.list) {
          var opt = item.list[ii];
          if (opt.boundary > 0) {
            o.rqArray = str + ':+' + opt.boundary;
          } else if (opt.boundary < 0) {
            o.rqArray = str + ':' + opt.boundary;
          }
          var odds = isMixed ? opt.odds_mix : opt.odds;
          selected.forEach(function (n) {
            if (odds[n]) {
              arr.push(n + ':' + odds[n]);
            }
          }, this);
        }
        o.spArray = arr.join(';');
        self.matches.push(o);
      }
      return self.getJson();
    };
    var apiData = new apidata();
    itou.dataModel.config({
      //--奖金评测行数据对象
      key: 'gendan_pingce_item',
      opts: {
        dan: {
          t: '胆中数量',
          k: '',
          d: '0'
        },
        tuo: {
          t: '托中数量',
          k: '',
          d: '0'
        },
        max: {
          t: '最大金额',
          k: 'max',
          d: '0'
        },
        min: {
          t: '最小金额',
          k: 'min',
          d: '0'
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('gendan_pingce_item'); //--奖金评测行数据对象构造函数创建
    itou.dataModel.config({
      //--奖金评测数据对象
      key: 'gendan_pingce_obj',
      opts: {
        isShow: {
          t: '是否展示',
          k: '',
          d: false
        },
        details: {
          t: '方案详情数据',
          k: '',
          d: null
        },
        hasDan: {
          t: '是否设单',
          k: '',
          d: false
        },
        list: {
          t: '托中数量',
          k: '',
          d: function d() {
            return [];
          }
        },
        max: {
          t: '最大金额',
          k: '',
          d: '0'
        },
        min: {
          t: '最小金额',
          k: '',
          d: '0'
        }
      }
    });
    var pingce = itou.dataModel.dataFactory.create('gendan_pingce_obj'); //--奖金评测数据对象构造函数创建
    pingce.prototype.formatApiData = function () {
      var self = this,
        data = self.details;
      if (!(data && data.match_list && data.wagers && data.wagers.length > 0)) {
        return false;
      }
      return apiData.formatData(data);
    };
    pingce.prototype.getPingce = function (data) {
      //--获取奖金，这个异步加载要在点击选择赛事后，延时调用
      var self = this,
        token = itou.getToken(),
        t = Math.floor(Math.random() * 1000);
      return itou.get({
        url: 'evaluate',
        data: JSON.stringify(data),
        type: 'POST',
        processData: false,
        formatResult: false,
        autocache: true
      }).then(function (data) {
        if (data.code != '200') {
          return;
        }
        var hrm = data.data.hrm,
          o = self;
        o.max = 0;
        o.min = 0;
        o.hasDan = true;
        o.list = [];
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
      });
    };
    pingce.prototype.show = function (beishu) {
      var self = this;
      if (beishu) {
        var r = self.formatApiData();
        r.multiple = beishu;
        if (!r) {
          return;
        }
        self.getPingce(r).then(function () {
          self.isShow = !!beishu;
        });
      } else {
        self.isShow = !!beishu;
      }
    };
    return new pingce();
  };
  var createGendan = function createGendan() {
    //--创建跟单对象
    itou.dataModel.config({
      //--跟单对象
      key: 'gendan_Manage',
      opts: {
        maps: {
          t: '映射关系',
          k: '',
          d: {
            //--映射关系，用于执行初始化
            tagManage: createTagManage,
            tuijianAdd: createTuijianAdd,
            tuijianList: createTuijianList,
            userInfo: createUserInfo,
            gendanList: createGendanList,
            shopGendan: createShopGendan,
            projectShare: createProjectShare,
            gendanDetail: createGendanDetail,
            pingce: createPingce
          }
        },
        cache: {
          t: '缓存数据',
          k: '',
          d: function d(data, me) {
            return createCache(me);
          }
        },
        tagManage: {
          t: '标签管理对象',
          k: '',
          d: null
        },
        tuijianAdd: {
          t: '推荐添加对象',
          k: '',
          d: null
        },
        tuijianList: {
          t: '推荐列表对象',
          k: '',
          d: null
        },
        userInfo: {
          t: '用户信息',
          k: '',
          d: null
        },
        gendanList: {
          t: '跟单列表信息',
          k: '',
          d: null
        },
        shopGendan: {
          t: '彩电跟单列表信息',
          k: '',
          d: null
        },
        projectShare: {
          t: '方案分享信息对象',
          k: '',
          d: null
        },
        pingce: {
          t: '奖金评测对象',
          k: '',
          d: null
        }
      }
    });
    var gendan = itou.dataModel.dataFactory.create('gendan_Manage'); //--标签列表数据对象构造函数创建
    gendan.prototype.init = function (modelList) {
      //--对象初始化；参数可以是要初始化的对象名，也可以是他们的数组
      var self = this,
        maps = self.maps;
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
    window.gendan = new gendan(); //--跟单对象挂载
  };

  createGendan();
})();

/***/ })

/******/ });