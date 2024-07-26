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
/******/ 		145: 0
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
/******/ 	deferredModules.push([305,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_buness_project_limit_number_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/**
 * 微信C端 方案状态详情
 * by wangxh    2016-08-17
 */

$(function () {
  var model = function model() {
    var self = this;
    self.items = null;
    self.project_id = Gray.$page.getUrlParam('id') || '';
    self._pmn = Gray.$page.getUrlParam('_pmn') || '';
    var tcParams = Gray.$page.getUrlParam('tcParams') || '';
    self.ticketCode = __webpack_require__(306);
    if (tcParams) {
      try {
        self.ticketCode.init(JSON.parse(tcParams));
      } catch (e) {
        console.error(e);
      }
    }
    self.profitNum = 0; //--跟单盈利比率
    self.user_award = 0; //--//实兑奖金   大于 -1为已兑奖
    self.isFollow = false; //--是否是跟单

    self.getInfo = function () {
      return itou.get({
        url: 'project/statuslist',
        data: {
          //token: 'itouapi_f3cb23f95572b37250bce5547e5fbf5e6c105a60',
          project_id: self.project_id,
          _pmn: self._pmn
        }
      }).then(function (data) {
        self.items = data.change;
        self.profitNum = data.profit_pct || 0; //--跟单盈利比率
        self.user_award = data.user_award || -1; //--//实兑奖金   大于 -1为已兑奖
        self.isFollow = data.is_follow == 1; //--是否是跟单
      });
    };
  };

  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'limit-number': _components_buness_project_limit_number_index_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        $data.getInfo();
      },
      computed: {},
      methods: {
        // back: function(){//--返回
        //     Gray.$page.loadPage("/project/detail/");
        // }
        showLimit: function showLimit() {
          this.$refs.limitNumber.show();
        }
      }
    });
  };
});

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

/**
 * 取票码数据对象
 * by zhaoyf    2020年3月3日15:58:57
 */
function layerAlert(params) {
  //--弹层提示信息
  vm.layer.alert.warning({
    title: params.title,
    text: params.text,
    buttons: [{
      text: '关闭',
      fun: function fun() {
        console.log('按钮的回调');
      } //--回调
    }]
  });
}

var specialErr = {};
specialErr['-11'] = function (rlt) {
  layerAlert({
    title: rlt.title,
    text: rlt.msg
  });
};
specialErr['-13'] = specialErr['-11'];
//--取票码对象
function TicketCode() {
  if (!(this instanceof TicketCode)) {
    //--写法兼容
    return new TicketCode();
  }
  var self = this;
  self.mode = '-1'; //--展示状态；-1，不展示，0，展示取票码按钮；1，展示过期条
  self.code = null;
  self.id4 = ''; //--方案尾号（后四位）
  self.showLayer = false;
  self.project_id = null; //--方案id
  self.station_user_id = null; //--店铺id
}

TicketCode.prototype.init = function (params) {
  // console.log(params);
  var self = this,
    pre_prize_time = params.pre_prize_time,
    //--开奖时间
    depute_info = params.depute_info; //--状态信息
  self.project_id = params.project_id; //--方案id
  self.code = null;
  self.project_id = params.project_id; //--方案id
  self.id4 = String(self.project_id).right(4);
  self.station_user_id = params.station_user_id; //--店铺id
  if (!self.station_user_id) {
    return;
  }
  pre_prize_time = String(pre_prize_time).toDate(); //--文本转时间
  if (pre_prize_time == 'Invalid Date') {
    //--类型转换失败
    console.table(pre_prize_time, '无法转换为时间');
  }
  var endDate = new Date(Date.parse(pre_prize_time) + 7 * 24 * 3600 * 1000),
    //--开奖时间7天
    currTime = new Date(); //--当前时间
  console.log(currTime, endDate, currTime < endDate);
  console.log(depute_info.order_status == '4');
  console.log(depute_info['cash_status']);
  console.log(depute_info['order_status']);
  console.log(depute_info['get_ticket_status']);
  if (
  //--开奖时间7个自然日内 & 方案已接单未结账、已结账出票成功-未取票时
  currTime < endDate && (depute_info.order_status == '4' || 1 == depute_info['cash_status'] && 1 == depute_info['order_status'] && 0 == depute_info['get_ticket_status'])) {
    self.mode = '0';
  } else if (1 == depute_info['cash_status'] && 1 == depute_info['order_status'] && 1 == depute_info['get_ticket_status']) {
    //--方案已结账出票成功-已取票时
    self.mode = '1';
  }
  // self.mode = '0';
  // console.log(self.project_id);
  // console.log(JSON.stringify(self, null, 4))
  // console.log(self)
};
//--参数：project_id: self.project_id,//--方案id
//--station_user_id: self.station_user_id,//--店铺id
TicketCode.prototype.getCode = function () {
  var self = this;
  return itou.get({
    url: 'project/getticketcode',
    data: {
      project_id: self.project_id,
      //--方案id
      station_user_id: self.station_user_id //--店铺id
    },

    specialErr: specialErr
  }).then(function (data) {
    self.code = data.get_ticket_code;
    self.showLayer = true;
  });
};
TicketCode.prototype.codeEvent = function () {
  var self = this;
  if (self.code) {
    self.showLayer = true;
  } else {
    self.getCode();
  }
};
module.exports = new TicketCode();

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/project/limit-number/index.vue?vue&type=template&id=7e0115b9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "layerbg",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.close
    }
  }, [_c("div", {
    staticClass: "layerAlert",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "larerTit"
  }, [_vm._v("什么是限号？")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "layerbtn"
  }, [_c("a", {
    on: {
      click: _vm.close
    }
  }, [_vm._v("知道了")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "layerCon"
  }, [_c("div", {
    staticClass: "layerCon_txtbox"
  }, [_c("div", {
    staticClass: "mt10"
  }, [_vm._v("限号的原因")]), _vm._v(" "), _c("p", [_vm._v("\n                    当某个投注结果累计预计赔付金额超过了国家中心系统当前赔付上限，即触发了限号的风控机制，则当前投注结果将无法购买。\n                ")]), _vm._v(" "), _c("div", [_vm._v("为什么有时限有时又不限？")]), _vm._v(" "), _c("p", [_vm._v("\n                    限号机制为动态模式，随着整体销售量的增加系统的赔付上限将逐步提升，因此会出现之前受限的投注结果后续可以再次购买的情况。\n                ")]), _vm._v(" "), _c("div", [_vm._v("限号后的方案处理")]), _vm._v(" "), _c("p", [_vm._v("\n                    系统限号后您投注结果将无法出票，店铺将为您做退款处理，如果您的方案存在部分组合限号，则正常组合将出票，限号部分将退款处理，即方案为部分出票，奖金也以实际部分出票中奖金额为准。\n                ")])])]);
}];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/project/limit-number/index.vue?vue&type=template&id=7e0115b9&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/project/limit-number/index.vue?vue&type=script&lang=js&
/**
 * 限号说明
 * @description 限号说明弹层组件
 * @author zhaoyf
 * @time 2022/12/04 15:30:29
 * @copyright 2022 itou
 */


/* harmony default export */ var limit_numbervue_type_script_lang_js_ = ({
  name: 'limit-number',
  data: function data() {
    return {
      isShow: false
    };
  },
  methods: {
    show: function show() {
      this.isShow = true;
    },
    close: function close() {
      this.isShow = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/project/limit-number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_limit_numbervue_type_script_lang_js_ = (limit_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/buness/project/limit-number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_limit_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/buness/project/limit-number/index.vue"
/* harmony default export */ var limit_number = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });