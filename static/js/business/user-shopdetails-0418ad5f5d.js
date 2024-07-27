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
/******/ 		197: 0
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
/******/ 	deferredModules.push([375,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nimg[data-v-77519317] {\n    margin: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.van-swipe__indicators{\n\t\tbottom:2px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_component_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".download_layer {\n    padding:6rem 15px 8px;\n    background-image:url(\"data:image/png;base64,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\");\n    background-repeat:no-repeat;\n    background-position: center 20px;\n    background-size: 6.066667rem 5.3733rem;\n}\n.download_layer .borderbtn_blue {\n    border-radius: 44px;\n    height: 1.173333rem;/* 88/75 */\n    font-size: 16px;\n}\n.download_layer  .iconclose {\n    position: absolute;top:0;right:0;\n    line-height:20px;\n    padding:15px;\n    font-size:34px;color:#666;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../../../../../static/images/worldcuphotmatch-min-02170b641f1e8ec5fc54d2321b99b2fe.jpg";

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gendan-baoguang/gendan-baoguang.vue?vue&type=template&id=5b377c3e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "partner_show",
    on: {
      click: _vm.gotoGendan
    }
  }, [_c("div", {
    staticClass: "iconbox"
  }, [_vm.isTip1 ? _c("discount-one", {
    attrs: {
      tip: _vm.tip
    }
  }) : _c("bz-tui", {
    attrs: {
      tip: _vm.tip
    }
  }), _vm._v(" "), _vm.result && _vm.result.length ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.result.length,
      expression: "result.length"
    }],
    staticClass: "adv_prembox",
    staticStyle: {
      display: "none"
    }
  }, [_c("div", {
    staticClass: "txtanima",
    "class": _vm.className
  }, _vm._l(_vm.result, function (item, i) {
    return _c("div", {
      key: i
    }, [_c("p", [_c("b", {
      domProps: {
        textContent: _vm._s(item.val + item.unit)
      }
    }, [_vm._v("10中10")])]), _vm._v(" "), _c("p", {
      staticClass: "font10",
      domProps: {
        textContent: _vm._s(item.text)
      }
    }, [_vm._v("命中")])]);
  }), 0)]) : _c("div", [_c("p", {
    staticClass: "tuijianbg"
  })])], 1), _vm._v(" "), _c("p", {
    staticClass: "gray3"
  }, [_vm._v("全网牛单")])]);
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/gendan-baoguang/gendan-baoguang.vue?vue&type=template&id=5b377c3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/discount/discount-one.vue?vue&type=template&id=3e7d9dd2&
var discount_onevue_type_template_id_3e7d9dd2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.tip ? _c("div", {
    staticClass: "discount_onebg",
    domProps: {
      textContent: _vm._s(_vm.tip)
    }
  }, [_vm._v("1折")]) : _vm._e();
};
var discount_onevue_type_template_id_3e7d9dd2_staticRenderFns = [];
discount_onevue_type_template_id_3e7d9dd2_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/discount/discount-one.vue?vue&type=template&id=3e7d9dd2&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/discount/discount-one.vue?vue&type=script&lang=js&
/**
 * 一折折扣
 * @description 一折折扣
 * @author zhaoyf
 * @time 2023/10/24 11:23:51
 * @copyright 2023 itou
 */


/* harmony default export */ var discount_onevue_type_script_lang_js_ = ({
  name: 'discount-one',
  props: {
    tip: {
      type: String,
      "default": '1折'
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/discount/discount-one.vue?vue&type=script&lang=js&
 /* harmony default export */ var discount_discount_onevue_type_script_lang_js_ = (discount_onevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/discount/discount-one.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  discount_discount_onevue_type_script_lang_js_,
  discount_onevue_type_template_id_3e7d9dd2_render,
  discount_onevue_type_template_id_3e7d9dd2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/discount/discount-one.vue"
/* harmony default export */ var discount_one = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/discount/bz-tui.vue?vue&type=template&id=00812eea&
var bz_tuivue_type_template_id_00812eea_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.tip ? _c("div", {
    staticClass: "bztuitip flexcenter"
  }, [_c("span", {
    staticClass: "font10",
    domProps: {
      textContent: _vm._s(_vm.tip)
    }
  })]) : _vm._e();
};
var bz_tuivue_type_template_id_00812eea_staticRenderFns = [];
bz_tuivue_type_template_id_00812eea_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/discount/bz-tui.vue?vue&type=template&id=00812eea&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/discount/bz-tui.vue?vue&type=script&lang=js&
/**
 * 不中退
 * @description 不中退
 * @author zhaoyf
 * @time 2023/12/5 12:22:47
 * @copyright 2023 itou
 */


/* harmony default export */ var bz_tuivue_type_script_lang_js_ = ({
  name: 'bz-tui',
  props: {
    tip: {
      type: String,
      "default": '不中退'
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/discount/bz-tui.vue?vue&type=script&lang=js&
 /* harmony default export */ var discount_bz_tuivue_type_script_lang_js_ = (bz_tuivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/public/discount/bz-tui.vue





/* normalize component */

var bz_tui_component = Object(componentNormalizer["a" /* default */])(
  discount_bz_tuivue_type_script_lang_js_,
  bz_tuivue_type_template_id_00812eea_render,
  bz_tuivue_type_template_id_00812eea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var bz_tui_api; }
bz_tui_component.options.__file = "src/components/public/discount/bz-tui.vue"
/* harmony default export */ var bz_tui = (bz_tui_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gendan-baoguang/gendan-baoguang.vue?vue&type=script&lang=js&
/**
 * 跟单曝光按钮组件
 * @description 店铺首页跟单曝光按钮组件
 * @author zhaoyf
 * @time 2022/06/02 10:24:27
 * @copyright 2022 itou
 */




/* harmony default export */ var gendan_baoguangvue_type_script_lang_js_ = ({
  components: {
    'discount-one': discount_one,
    'bz-tui': bz_tui
  },
  props: {
    gotoGendan: {
      type: Function,
      "default": function _default() {
        return function () {
          alert('未定义gotoGendan事件');
        };
      }
    }
  },
  data: function data() {
    return {
      len: 0,
      className: '',
      list: {
        11: {
          val: '',
          text: '命中',
          unit: ''
        },
        12: {
          val: '',
          text: '最高',
          unit: '连红'
        },
        2: {
          val: '',
          text: '参考中奖',
          unit: '万'
        },
        1: {
          val: '',
          text: '回报',
          unit: '倍'
        },
        3: {
          val: '',
          text: '带红',
          unit: '人'
        }
      },
      order: [11, 12, 2, 1, 3],
      //--顺序
      result: [],
      tip: ''
    };
  },
  computed: {
    isTip1: function isTip1() {
      return /^\d折$/.test(this.tip);
    }
  },
  methods: {
    init: function init(info) {
      var _this = this;
      var tip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      //--tip为活动信息
      // 世界杯期间--世界杯+2
      // const len = info.length + 1;
      if (tip) {
        this.tip = tip;
      }
      var len = info.length;
      if (len) {
        this.len = len;
        if (len > 1) {
          this.className = 'txtanima' + len;
        }
        info.forEach(function (el) {
          var _el$filter_type, _this$list$type;
          var type = (_el$filter_type = el === null || el === void 0 ? void 0 : el.filter_type) !== null && _el$filter_type !== void 0 ? _el$filter_type : '';
          var item = (_this$list$type = _this.list[type]) !== null && _this$list$type !== void 0 ? _this$list$type : null;
          if (item) {
            if (type == 1) {
              item.val = Math.round(el.desc);
            } else if (type == 2) {
              item.val = Math.round(el.desc / 10000);
            } else {
              item.val = el.desc;
            }
          }
        });
        for (var i in this.order) {
          var _this$list$type2;
          var type = this.order[i];
          if ((_this$list$type2 = this.list[type]) !== null && _this$list$type2 !== void 0 && _this$list$type2.val) {
            this.result.push(this.list[type]);
          }
        }
        // 世界杯期间注释
        if (this.result.length) {
          //--首尾衔接
          this.result.push(this.result[0]);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/gendan-baoguang/gendan-baoguang.vue?vue&type=script&lang=js&
 /* harmony default export */ var gendan_baoguang_gendan_baoguangvue_type_script_lang_js_ = (gendan_baoguangvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/gendan-baoguang/gendan-baoguang.vue





/* normalize component */

var gendan_baoguang_component = Object(componentNormalizer["a" /* default */])(
  gendan_baoguang_gendan_baoguangvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var gendan_baoguang_api; }
gendan_baoguang_component.options.__file = "src/components/gendan-baoguang/gendan-baoguang.vue"
/* harmony default export */ var gendan_baoguang = (gendan_baoguang_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shareimg-shop/shareimgshop.vue?vue&type=template&id=8b1ec40c&
var shareimgshopvue_type_template_id_8b1ec40c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c("div", {
    staticClass: "layerbox layer_sharecode"
  }, [_c("div", {
    staticClass: "close",
    on: {
      click: function click($event) {
        return _vm.close();
      }
    }
  }), _vm._v(" "), _c("van-swipe", {
    attrs: {
      autoplay: _vm.delay,
      showIndicators: true,
      "indicator-color": "#F34D38"
    },
    on: {
      change: _vm.onChange
    }
  }, _vm._l(_vm.imgs, function (item, i) {
    return _c("van-swipe-item", {
      key: i
    }, [_c("div", {
      staticClass: "layer_sharemain"
    }, [_c("div", {
      staticClass: "imgbox"
    }, [_c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.showImg,
        expression: "!showImg"
      }],
      staticClass: "flexcenter load",
      staticStyle: {
        display: "none"
      }
    }, [_vm._v("分享图生成中...")]), _vm._v(" "), _c("img-delay", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showImg,
        expression: "showImg"
      }],
      ref: "img",
      refInFor: true,
      attrs: {
        delay: i != 0,
        id: "__componments_sharaImg" + i,
        src: item.imgsrc,
        alt: "",
        "on-img-load": _vm.onImgLoad
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "btmbox flexcenter column iosmb"
    }, [_vm.isAPP && (_vm.browser == "" || _vm.packagename == "com.itou.yun.cordova.koudai") ? _c("div", [_c("div", {
      staticClass: "flexcenter tip save",
      on: {
        click: function click($event) {
          return _vm.loadPic("__componments_sharaImg".concat(i));
        }
      }
    }, [_vm._v("保存到相册")]), _vm._v(" "), _c("div", {
      staticClass: "flexcenter tip tipapp"
    }, [_vm._v("手机截屏或点击"), _c("a", {
      staticClass: "btn btn_blue",
      on: {
        click: function click($event) {
          return _vm.appShare();
        }
      }
    }, [_vm._v("分享")]), _vm._v("给微信好友\n                            "), _c("em", {
      staticClass: "topcenter icon"
    }, [_c("svg", {
      staticClass: "icon_handtop"
    }, [_c("use", {
      attrs: {
        "xlink:href": "/static/images/svg/icon-e60e8f766b.svg#icon_handtop"
      }
    })])])])]) : _vm._e(), _vm._v(" "), !_vm.isAPP ? _c("div", {
      staticClass: "flexcenter tip"
    }, [_vm._v("手机截屏或长按图片后分享给微信好友"), _c("svg", {
      staticClass: "icon_handtop"
    }, [_c("use", {
      attrs: {
        "xlink:href": "/static/images/svg/icon-e60e8f766b.svg#icon_handtop"
      }
    })])]) : _vm._e(), _vm._v(" "), _vm.isAPP && !(_vm.browser == "" || _vm.packagename == "com.itou.yun.cordova.koudai") ? _c("div", [_c("div", {
      staticClass: "newapptxt"
    }, [_vm._v("\n                            手机截屏后分享给微信好友")]), _vm._v(" "), _c("div", {
      staticClass: "flexcenter tip newAPPsave",
      on: {
        click: function click($event) {
          return _vm.loadPic("__componments_sharaImg".concat(i));
        }
      }
    }, [_vm._v("保存到相册 "), _c("svg", {
      staticClass: "iconsavemin"
    }, [_c("use", {
      attrs: {
        "xlink:href": "/static/images/svg/icon-e60e8f766b.svg#iconsavemin"
      }
    })])])]) : _vm._e(), _vm._v(" "), _c("a", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.btnBottom.show,
        expression: "btnBottom.show"
      }],
      staticClass: "btn btn_red iosxbtm",
      domProps: {
        textContent: _vm._s(_vm.btnBottom.text)
      },
      on: {
        click: function click($event) {
          return _vm.btnBottom.fun();
        }
      }
    }, [_vm._v("查看跟单详情")])])])]);
  }), 1)], 1) : _vm._e();
};
var shareimgshopvue_type_template_id_8b1ec40c_staticRenderFns = [];
shareimgshopvue_type_template_id_8b1ec40c_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/shareimg-shop/shareimgshop.vue?vue&type=template&id=8b1ec40c&

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe/index.js
var swipe = __webpack_require__(16);
var swipe_default = /*#__PURE__*/__webpack_require__.n(swipe);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-item/index.js
var swipe_item = __webpack_require__(17);
var swipe_item_default = /*#__PURE__*/__webpack_require__.n(swipe_item);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe/style/index.js
var style = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-item/style/index.js
var swipe_item_style = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/img/img-delay.vue?vue&type=template&id=77519317&scoped=true&
var img_delayvue_type_template_id_77519317_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "delay",
      rawName: "v-delay:[delay]",
      value: _vm.mySrc,
      expression: "mySrc",
      arg: _vm.delay
    }],
    staticClass: "flexcenter loadingbanner"
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "!loading"
    }],
    ref: "img",
    attrs: {
      id: _vm.id
    },
    on: {
      "~error": function error($event) {
        return _vm.onError.apply(null, arguments);
      },
      load: _vm.onLoad
    }
  }), _vm._v(" "), _vm.delay && _vm.loading ? _c("p", {
    staticClass: "iconload"
  }) : _vm._e()]);
};
var img_delayvue_type_template_id_77519317_scoped_true_staticRenderFns = [];
img_delayvue_type_template_id_77519317_scoped_true_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/img/img-delay.vue?vue&type=template&id=77519317&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/img/img-delay.vue?vue&type=script&lang=js&
/**
 * 图片懒加载组件
 * @description 图片懒加载组件，如果图片加载失败，则展示默认缩略图
 * @author zhaoyf
 * @time 2022/01/17 10:29:49
 * @copyright 2022 itou
 */


/* harmony default export */ var img_delayvue_type_script_lang_js_ = ({
  name: 'img-delay',
  props: {
    src: {
      type: String,
      "default": ''
    },
    delay: {
      type: Boolean,
      "default": false
    },
    errSrc: {
      type: String,
      "default": ''
    },
    onImgLoad: {
      type: Function,
      "default": function _default() {}
    },
    id: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      defSrc: '/static/images/imagedef-7469df14b8.png',
      mySrc: '',
      loading: true
    };
  },
  created: function created() {
    this.mySrc = this.src;
    if (!this.mySrc) {
      this.mySrc = this.defSrc;
    }
  },
  watch: {
    src: function src(val) {
      this.mySrc = this.src;
      if (!this.mySrc) {
        this.mySrc = this.defSrc;
      }
    }
  },
  methods: {
    /**
     * @function onError
     * @description 当图片加载失败时，图片地址换为默认图片
     */
    onError: function onError(e) {
      var img = e.srcElement || e.target;
      img.src = this.errSrc || this.defSrc;
      // this.$refs.img.src = this.errSrc || this.defSrc;
      this.loading = false;
    },
    onLoad: function onLoad() {
      this.loading = false;
      if (typeof this.onImgLoad == 'function') {
        this.onImgLoad();
      }
    },
    play: function play() {
      if (!this.$refs.img.src) {
        this.$refs.img.src = this.mySrc;
      }
    }
  },
  directives: {
    delay: {
      inserted: function inserted(el, _ref) {
        var value = _ref.value,
          arg = _ref.arg;
        var img = el.firstChild;
        if (!img) {
          return;
        }
        var imgSrc = value;
        // 如果指令传过来得值是 false 就不做延迟加载处理
        if (!arg) {
          img.src = imgSrc;
          return;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/img/img-delay.vue?vue&type=script&lang=js&
 /* harmony default export */ var img_img_delayvue_type_script_lang_js_ = (img_delayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/img/img-delay.vue?vue&type=style&index=0&id=77519317&scoped=true&lang=css&
var img_delayvue_type_style_index_0_id_77519317_scoped_true_lang_css_ = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/img/img-delay.vue?vue&type=style&index=0&id=77519317&scoped=true&lang=css&

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(img_delayvue_type_style_index_0_id_77519317_scoped_true_lang_css_["a" /* default */], options);



/* harmony default export */ var img_img_delayvue_type_style_index_0_id_77519317_scoped_true_lang_css_ = (img_delayvue_type_style_index_0_id_77519317_scoped_true_lang_css_["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/components/public/img/img-delay.vue?vue&type=style&index=0&id=77519317&scoped=true&lang=css&

// CONCATENATED MODULE: ./src/components/public/img/img-delay.vue






/* normalize component */

var img_delay_component = Object(componentNormalizer["a" /* default */])(
  img_img_delayvue_type_script_lang_js_,
  img_delayvue_type_template_id_77519317_scoped_true_render,
  img_delayvue_type_template_id_77519317_scoped_true_staticRenderFns,
  false,
  null,
  "77519317",
  null
  
)

/* hot reload */
if (false) { var img_delay_api; }
img_delay_component.options.__file = "src/components/public/img/img-delay.vue"
/* harmony default export */ var img_delay = (img_delay_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shareimg-shop/shareimgshop.vue?vue&type=script&lang=js&
// import VueClipboard from 'vue-clipboard2'
// VueClipboard.config.autoSetContainer = true 
// Vue.use(VueClipboard);
// add this line


//--从vant中按需引用组件





/* harmony default export */ var shareimgshopvue_type_script_lang_js_ = ({
  name: 'shareimage-shop',
  components: {
    'van-swipe': swipe_default.a,
    'van-swipe-item': swipe_item_default.a,
    // 'van-notice-bar': NoticeBar,
    'img-delay': img_delay
  },
  props: {
    images: {
      type: Array,
      "default": [{
        imgsrc: '4',
        bgColor: 'blue'
      }, {
        imgsrc: '1',
        bgColor: '#000'
      }, {
        imgsrc: '2',
        bgColor: 'red'
      }, {
        imgsrc: '3',
        bgColor: 'blue'
      }]
    },
    delay: {
      type: Number,
      "default": 7000
    }
  },
  data: function data() {
    return new function () {
      var self = this,
        Model = {};
      self.current = 0;
      self.show = false;
      // self.loop = false;

      self.title = '分享店铺';
      self.imgs = [];
      self.showImg = false;
      self.isShow = false;
      // self.bgClass = 'gendancode';
      self.bgColor = '';
      self.isAPP = config.isAPP;
      self.close = function () {
        self.isShow = false;
        self.showImg = false;
      };
      self.btnBack = {
        fun: function fun() {
          self.isShow = false;
          self.showImg = false;
        }
      };
      self.btnBottom = {
        show: false,
        text: '关闭',
        fun: function fun() {
          self.isShow = false;
          self.showImg = false;
        }
      };
      self.data = {
        shareMess: {
          type: "image",
          image: ''
        }
      };
      self.packagename = '';
      if (self.isAPP) {
        Gray.plugin.define("self", [], function () {
          return self;
        });
        Gray.plugin.require("init.js");
        Gray.plugin.require("getpackagename.js"); //--微信授权
        Gray.$plugin["init.js"]().then(function () {
          return Gray.$plugin["getpackagename.js"]();
        }).then(function (packagename) {
          self.packagename = packagename;
        });
      }
      self.hasDownload = {};
      self.make = function (params) {
        var num = 0,
          r = [];
        var link = decodeURIComponent(params.data.url) || "";
        var back = itou.outil.getUrlParam(link, "back");
        if (back) {
          link = link.replace("back=" + back, "").replace("back=" + encodeURIComponent(back), "");
          link = link.replace("?&", "?").replace("&&", "&").replace(/&$/, "");
        }
        var p_station_id = itou.outil.getUrlParam(link, "p_station_id");
        if (p_station_id) {
          link = link.replace(new RegExp("p_station_id=" + p_station_id, 'g'), "");
          link = link.replace("?&", "?").replace("&&", "&").replace(/&$/, "");
          link += (link.has("?") ? "&" : "?") + "back=" + encodeURIComponent("/user/shop/details/?id=" + p_station_id);
          try {
            //--尝试获取对应的uuid
            var uuid = itou.publicObj.uuid_storage.get(p_station_id);
            if (uuid) {
              link += encodeURIComponent('&station_uuid=' + uuid);
            }
          } catch (error) {
            console.warn(error);
          }
        }
        //--根据station_id，在分享连接中追加station_uuid数据
        var station_id = itou.outil.getUrlParam(link, "station_id");
        var station_uuid = itou.outil.getUrlParam(link, "station_uuid");
        if (station_id && !station_uuid) {
          try {
            station_uuid = itou.publicObj.uuid_storage.get(station_id);
            link += "&station_uuid=" + station_uuid;
          } catch (error) {
            station_uuid = '';
            console.warn(error);
          }
        }
        params.data.url = encodeURIComponent(link);
        if (params.data.station_user_id && !params.data.station_uuid) {
          params.data.station_uuid = itou.localJson.getJson("/user/shop/details/").uuid || '';
        }
        params = itou.formatParams(params);
        r.push(params.url);
        console.log(params);
        for (var i in params.data) {
          var str = "";
          if (num == 0) {
            str = "?";
          } else {
            str = "&";
          }
          r.push(str + i + "=" + params.data[i]);
          num += 1;
        }
        var token = localStorage.getItem("__itou_random_token");
        if (token) {
          r.push("&token=" + token);
        }
        // self.data = {};
        console.log(r);
        return r.join("");
      };
      self.init = function (params) {
        if (self.imgs.length) {
          self.isShow = true;
          self.current = 0;
          return;
        }
        params = params || {};
        self.title = params.title || self.title; //--标题
        var _params$data$theme = params.data.theme,
          theme = _params$data$theme === void 0 ? [] : _params$data$theme;
        delete params.data.theme;
        // self.bgClass = params.class || self.class;//--标题
        // self.bgColor = params.bgColor || self.bgColor;//--背景颜色
        var img = params.img || self.make(params); //--图片

        if (!theme.length) {
          self.imgs.push({
            imgsrc: img,
            bgColor: params.bgColor
          });
        } else {
          theme.forEach(function (t) {
            var imgsrc = img + '&theme=' + t.val;
            self.imgs.push({
              imgsrc: imgsrc,
              bgColor: t.bgColor
            });
          });
        }
        // window.location.href = self.img;
        self.data.shareMess.image = self.img;
        self.btnBack.fun = params.btnBack && params.btnBack.fun || self.btnBack.fun; //--返回按钮事件
        self.btnBottom.text = params.btnBottom && params.btnBottom.text || self.btnBottom.text; //--底部按钮文本
        self.btnBottom.fun = params.btnBottom && params.btnBottom.fun || self.btnBottom.fun; //--底部按钮事件
        self.btnBottom.show = !!(params.btnBottom && params.btnBottom.fun); //--底部按钮事件
        self.isShow = true;
        self.current = 0;
        self.showImg = false;
        self.hasDownload = {};
        // console.log(self + '++++++!');
      };

      self.appShare = function () {
        //--app的图片分享
        if (config.isAPP) {
          Gray.plugin.define("self", [], function () {
            return self;
          });
          Gray.plugin.require("init.js");
          Gray.plugin.require("onmenushareappmessage.js"); //--微信分享给好友
          Gray.$plugin["init.js"]().then(function () {
            Gray.$plugin["onmenushareappmessage.js"]();
          });
          window.setTimeout(function () {
            vm.isShowShareImg = true;
          }, 150);
        }
      };
    }();
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      //--尝试重绘，避免运行时出现一些JS错误
      try {
        _this.$refs.swiper.resize();
      } catch (error) {
        console.warn(error);
      }
    }, 500);
  },
  computed: {},
  methods: {
    loadPic: function loadPic(id) {
      itou.baiduHm('店铺首页', "\u5E97\u94FA\u4E8C\u7EF4\u7801\u56FE\u7247\u4E0B\u8F7D".concat(id)); //--百度统计
      var self = this;
      if (self.hasDownload[id]) {
        self.$root.showToast("图片已下载");
        return;
      }
      Gray.plugin.require("init.js");
      Gray.plugin.require("camera/downloadImage.js");
      Gray.plugin.define("self", [], function () {
        return self;
      });
      self.downloadImgElt = document.getElementById(id);
      Gray.$plugin["init.js"]().then(function () {
        try {
          Gray.$plugin["camera/downloadImage.js"]().then(function (rlt) {
            if (!rlt.errcode) {
              self.hasDownload[id] = true; //--下载成功
              self.$root.showToast("下载成功");
            } else {
              self.$root.showToast("下载失败");
            }
          });
        } catch (error) {
          console.error(error.message, error);
        }
      });
    },
    onChange: function onChange(index) {
      var self = this;
      self.current = index;
      this.$refs.img[index].play();
    },
    onImgLoad: function onImgLoad() {
      this.showImg = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/shareimg-shop/shareimgshop.vue?vue&type=script&lang=js&
 /* harmony default export */ var shareimg_shop_shareimgshopvue_type_script_lang_js_ = (shareimgshopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shareimg-shop/shareimgshop.vue?vue&type=style&index=0&id=8b1ec40c&lang=css&
var shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_ = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/shareimg-shop/shareimgshop.vue?vue&type=style&index=0&id=8b1ec40c&lang=css&

            

var shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_options = {};

shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_options.insert = "head";
shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_options.singleton = false;

var shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_update = injectStylesIntoStyleTag_default()(shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_["a" /* default */], shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_options);



/* harmony default export */ var shareimg_shop_shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_ = (shareimgshopvue_type_style_index_0_id_8b1ec40c_lang_css_["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/components/shareimg-shop/shareimgshop.vue?vue&type=style&index=0&id=8b1ec40c&lang=css&

// CONCATENATED MODULE: ./src/components/shareimg-shop/shareimgshop.vue






/* normalize component */

var shareimgshop_component = Object(componentNormalizer["a" /* default */])(
  shareimg_shop_shareimgshopvue_type_script_lang_js_,
  shareimgshopvue_type_template_id_8b1ec40c_render,
  shareimgshopvue_type_template_id_8b1ec40c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var shareimgshop_api; }
shareimgshop_component.options.__file = "src/components/shareimg-shop/shareimgshop.vue"
/* harmony default export */ var shareimgshop = (shareimgshop_component.exports);
// EXTERNAL MODULE: ./src/components/public/download-bar/index.vue + 6 modules
var download_bar = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-layer/index.vue?vue&type=template&id=c65d5f56&
var download_layervue_type_template_id_c65d5f56_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShowLayer,
      expression: "isShowLayer"
    }],
    staticClass: "layerbg",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.close
    }
  }, [_c("div", {
    staticClass: "layerAlert download_layer",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("p", {
    staticClass: "iconclose",
    on: {
      click: _vm.close
    }
  }, [_vm._v("×")]), _vm._v(" "), _c("p", {
    staticClass: "flexcenter borderbtn_blue",
    on: {
      click: _vm.gotoDownload
    }
  }, [_vm._v("\n            请下载APP参与更多店铺活动\n        ")])])]);
};
var download_layervue_type_template_id_c65d5f56_staticRenderFns = [];
download_layervue_type_template_id_c65d5f56_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/download-layer/index.vue?vue&type=template&id=c65d5f56&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-layer/index.vue?vue&type=script&lang=js&
/**
 * app下载提示弹层
 * @description app下载提示弹层组件
 * @author zhaoyf
 * @time 2022/11/23 18:49:19
 * @copyright 2022 itou
 */





var download_layervue_type_script_lang_js_Page = /*#__PURE__*/function () {
  function Page() {
    classCallCheck_default()(this, Page);
    defineProperty_default()(this, "id", '');
    defineProperty_default()(this, "uuid", '');
    defineProperty_default()(this, "link", '');
    defineProperty_default()(this, "isShow", false);
  }
  createClass_default()(Page, [{
    key: "init",
    value: function init() {
      if (this.link) {
        return;
      }
      this.id = itou.entry.get().station_id;
      if (this.id) {
        this.uuid = itou.shopUuid.storage.get(this.id);
        var download = itou.randomJerry["do"]('/download/').replace('/', '');
        this.link = "".concat(config.download_url + download + this.id, "/?comefrom=shop");
        if (this.uuid) {
          this.link += "&station_uuid=".concat(this.uuid);
        }
      }
    }
  }]);
  return Page;
}();
var _data = new download_layervue_type_script_lang_js_Page();
/* harmony default export */ var download_layervue_type_script_lang_js_ = ({
  name: 'download-layer',
  data: function data() {
    return _data;
  },
  mounted: function mounted() {
    _data.init();
  },
  computed: {
    isShowLayer: function isShowLayer() {
      return this.isShow && !config.isAPP && this.link;
    }
  },
  methods: {
    show: function show() {
      _data.init();
      this.isShow = true;
    },
    close: function close() {
      _data.init();
      this.isShow = false;
    },
    gotoDownload: function gotoDownload() {
      _data.init();
      if (!this.link) {
        return;
      }
      top.location.href = this.link;
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/download-layer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_download_layervue_type_script_lang_js_ = (download_layervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-layer/index.vue?vue&type=style&index=0&id=c65d5f56&lang=css&
var download_layervue_type_style_index_0_id_c65d5f56_lang_css_ = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-layer/index.vue?vue&type=style&index=0&id=c65d5f56&lang=css&

            

var download_layervue_type_style_index_0_id_c65d5f56_lang_css_options = {};

download_layervue_type_style_index_0_id_c65d5f56_lang_css_options.insert = "head";
download_layervue_type_style_index_0_id_c65d5f56_lang_css_options.singleton = false;

var download_layervue_type_style_index_0_id_c65d5f56_lang_css_update = injectStylesIntoStyleTag_default()(download_layervue_type_style_index_0_id_c65d5f56_lang_css_["a" /* default */], download_layervue_type_style_index_0_id_c65d5f56_lang_css_options);



/* harmony default export */ var public_download_layervue_type_style_index_0_id_c65d5f56_lang_css_ = (download_layervue_type_style_index_0_id_c65d5f56_lang_css_["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/components/public/download-layer/index.vue?vue&type=style&index=0&id=c65d5f56&lang=css&

// CONCATENATED MODULE: ./src/components/public/download-layer/index.vue






/* normalize component */

var download_layer_component = Object(componentNormalizer["a" /* default */])(
  public_download_layervue_type_script_lang_js_,
  download_layervue_type_template_id_c65d5f56_render,
  download_layervue_type_template_id_c65d5f56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var download_layer_api; }
download_layer_component.options.__file = "src/components/public/download-layer/index.vue"
/* harmony default export */ var download_layer = (download_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/hot-match-layer/index.vue?vue&type=template&id=4b422c15&
var hot_match_layervue_type_template_id_4b422c15_render = function render() {
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
    staticClass: "layerAlert layer_hotmatch",
    on: {
      click: function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "layerimg_topclose",
    on: {
      click: _vm.close
    }
  }), _vm._v(" "), _vm.isShow ? _c("div", {
    staticClass: "hotmatchimgbox"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(357)
    },
    on: {
      click: _vm.gotoIntro
    }
  })]) : _vm._e()])]);
};
var hot_match_layervue_type_template_id_4b422c15_staticRenderFns = [];
hot_match_layervue_type_template_id_4b422c15_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/hot-match-layer/index.vue?vue&type=template&id=4b422c15&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/hot-match-layer/index.vue?vue&type=script&lang=js&
/**
 * 热门比赛分享弹层
 * @description 热门比赛分享弹层
 * @author zhaoyf
 * @time 2022/12/03 19:15:07
 * @copyright 2022 itou
 */


/* harmony default export */ var hot_match_layervue_type_script_lang_js_ = ({
  name: 'hot-match-layer',
  props: {
    lott: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      key: '_hot_match_layer',
      timeout: 12 * 3600,
      //--显示间隔，单位秒
      // timeout: 5, //--显示间隔，单位秒
      isShow: false,
      src: ''
    };
  },
  watch: {
    lott: {
      handler: function handler(lott) {
        var _lott$jczq, _lott$dc;
        // console.error(lott, lott?.jczq?.check, lott?.dc?.check);
        if (lott !== null && lott !== void 0 && (_lott$jczq = lott.jczq) !== null && _lott$jczq !== void 0 && _lott$jczq.check || lott !== null && lott !== void 0 && (_lott$dc = lott.dc) !== null && _lott$dc !== void 0 && _lott$dc.check) {
          this.show();
        }
      },
      deep: true
    }
  },
  methods: {
    close: function close() {
      var key = this.key,
        timeout = this.timeout;
      itou.localJson.setJson(key, {
        val: 1
      }, timeout);
      this.isShow = false;
    },
    show: function show() {
      var key = this.key;
      var closed = itou.localJson.getJson(key).val == 1;
      if (closed) {
        return;
      }
      this.isShow = true;
    },
    gotoIntro: function gotoIntro() {
      var url = '/help/gameinfo/zucaiprize/?id=602&adv_id=600';
      url += '&back=' + window.backurl;
      Gray.$page.loadPage(url);
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/hot-match-layer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_hot_match_layervue_type_script_lang_js_ = (hot_match_layervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/hot-match-layer/index.vue





/* normalize component */

var hot_match_layer_component = Object(componentNormalizer["a" /* default */])(
  details_hot_match_layervue_type_script_lang_js_,
  hot_match_layervue_type_template_id_4b422c15_render,
  hot_match_layervue_type_template_id_4b422c15_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var hot_match_layer_api; }
hot_match_layer_component.options.__file = "src/components/buness/user/shop/details/hot-match-layer/index.vue"
/* harmony default export */ var hot_match_layer = (hot_match_layer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/chdd_live/shop.vue?vue&type=template&id=31f097b6&
var shopvue_type_template_id_31f097b6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "partner_show chddlive_show",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.goLiveIndex
    }
  }, [_c("div", {
    staticClass: "iconbox"
  }, [_c("discount-one", {
    attrs: {
      tip: _vm.tip
    }
  }), _vm._v(" "), _vm.list && _vm.list.length ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.list.length,
      expression: "list.length"
    }],
    staticClass: "chddlivebox",
    staticStyle: {
      display: "none"
    }
  }, [_c("div", {
    staticClass: "txtanima",
    "class": _vm.className
  }, _vm._l(_vm.list, function (item, i) {
    return _c("div", {
      key: i
    }, [_c("p", [_c("span", {
      domProps: {
        textContent: _vm._s(item[0])
      }
    }, [_vm._v("30万人")])]), _vm._v(" "), _c("div", {
      staticClass: "flexcenter"
    }, [_vm.showliveicon ? _c("em", {
      staticClass: "liveicon"
    }) : _vm._e(), _vm._v(" "), _c("p", {
      staticClass: "font8",
      domProps: {
        textContent: _vm._s(item[1])
      }
    }, [_vm._v("在线分析")])])]);
  }), 0)]) : _c("div", [_c("p", {
    staticClass: "chddlivebg"
  })])], 1), _vm._v(" "), _c("p", {
    staticClass: "gray3"
  }, [_vm._v("火红直播")])]) : _vm._e();
};
var shopvue_type_template_id_31f097b6_staticRenderFns = [];
shopvue_type_template_id_31f097b6_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/chdd_live/shop.vue?vue&type=template&id=31f097b6&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/chdd_live/shop.vue?vue&type=script&lang=js&
/**
 * 店铺详情页直播入口
 * @description 店铺详情页直播入口组件
 * @author zhaoyf
 * @time 2023/06/01 11:51:34
 * @copyright 2023 itou
 */



/* harmony default export */ var shopvue_type_script_lang_js_ = ({
  name: 'chdd-live-shop',
  components: {
    'discount-one': discount_one
  },
  data: function data() {
    return {
      station_user_id: '',
      //--店铺id
      className: '',
      list: [],
      showliveicon: false,
      isShow: false,
      tip: ''
    };
  },
  methods: {
    /**
     * @function get
     * @description 获取直播信息
     */
    get: function get() {
      var _this = this;
      var station_user_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (!station_user_id) {
        return;
      }
      this.station_user_id = station_user_id;
      return itou.get({
        url: 'chdd/liveAdv',
        data: {
          station_user_id: station_user_id
        },
        rnd: false,
        notoken: true
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (Array.isArray(data)) {
          return;
        }
        var is_show = data.is_show,
          _data$adv_list = data.adv_list,
          adv_list = _data$adv_list === void 0 ? [] : _data$adv_list,
          _data$tip = data.tip,
          tip = _data$tip === void 0 ? '' : _data$tip;
        _this.isShow = is_show;
        _this.tip = tip;

        // this.list = [...adv_list];
        adv_list.forEach(function (item) {
          // console.log(item);
          if (item.includes('在线分析')) {
            _this.showliveicon = true;
            _this.list.push([item.replace('在线分析', ''), '在线分析']);
          } else if (item.includes('互动中')) {
            _this.showliveicon = true;
            _this.list.push([item.replace('互动中', ''), '互动中']);
          } else if (item.includes('开始直播')) {
            _this.showliveicon = false;
            _this.list.push([item.replace('开始直播', ''), '开始直播']);
          }
        });
        if (adv_list.length > 1) {
          _this.className = 'txtanima' + adv_list.length;
          _this.list.push(_this.list[0]);
        }
        if (_this.isShow) {
          itou.baiduHm('店铺主页', '直播入口曝光'); //--百度统计
        }

        return data;
      });
    },
    /**
     * @function goLiveIndex
     * @description 跳转到直播首页
     */
    goLiveIndex: function goLiveIndex() {
      // const { station_user_id: id } = this;
      // itou.baiduHm('店铺主页', '直播入口访问'); //--百度统计
      // const type = 'live_homepage';
      // let url = '/monetize/tochdd_live/'; //--彩虹多多中转页面
      // url += '?type=' + type; //--需要跳转彩虹多多直播首页
      // url += '&back=' + window.backurl; //--返回路径
      // url += '&id=' + id; //--店铺ID
      // Gray.$page.loadPage(url); //--跳转到中转页面

      // 2023-03-11  临时修改为 提示层 之后恢复 以上代码
      this.$root.$refs.layer.alert.show({
        text: '该功能维护中...',
        buttons: [{
          text: '知道了'
        }]
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/chdd_live/shop.vue?vue&type=script&lang=js&
 /* harmony default export */ var chdd_live_shopvue_type_script_lang_js_ = (shopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/public/chdd_live/shop.vue





/* normalize component */

var shop_component = Object(componentNormalizer["a" /* default */])(
  chdd_live_shopvue_type_script_lang_js_,
  shopvue_type_template_id_31f097b6_render,
  shopvue_type_template_id_31f097b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var shop_api; }
shop_component.options.__file = "src/components/public/chdd_live/shop.vue"
/* harmony default export */ var shop = (shop_component.exports);
// EXTERNAL MODULE: ./src/components/public/img/img-avatar.vue + 4 modules
var img_avatar = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/g-activity/index.vue?vue&type=template&id=91c3ed02&
var g_activityvue_type_template_id_91c3ed02_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.id ? _c("div", {
    staticClass: "advtuibox",
    on: {
      click: _vm.gotoGAdv
    }
  }, [_vm.html ? _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.html)
    }
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "flexcenter column"
  }, [_vm.list.length ? _c("div", {
    staticClass: "advfollow"
  }, [_c("div", {
    staticClass: "advfollow_con"
  }, [_c("notice-swipe", {
    attrs: {
      delay: 4000,
      notices: _vm.list
    }
  })], 1)]) : _c("em", {
    staticClass: "advtuibg"
  }), _vm._v(" "), _c("p", {
    staticClass: "txt",
    domProps: {
      textContent: _vm._s(_vm.name)
    }
  }, [_vm._v("发推荐做红人")]), _vm._v(" "), _c("p", {
    staticClass: "txtbg",
    domProps: {
      innerHTML: _vm._s(_vm.title)
    }
  }, [_vm._v("瓜分"), _c("b", [_vm._v("11.88万")]), _vm._v("大奖")])]), _vm._v(" "), _c("p", {
    staticClass: "advtuibg01"
  })]) : _vm._e();
};
var g_activityvue_type_template_id_91c3ed02_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "advfollow_end"
  }, [_c("p", {
    staticClass: "txt1"
  }, [_vm._v("全网推荐三期活动落幕")]), _vm._v(" "), _c("p", {
    staticClass: "txt2"
  }, [_c("b", [_vm._v("61")]), _vm._v(" 位牛人瓜分"), _c("b", [_vm._v("11.88")]), _vm._v(" 万")]), _vm._v(" "), _c("div", {
    staticClass: "qitxtbg"
  }, [_c("p", {
    staticClass: "font10"
  }, [_vm._v("下期活动即将开启，敬请期待！")])])]);
}];
g_activityvue_type_template_id_91c3ed02_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/g-activity/index.vue?vue&type=template&id=91c3ed02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/swipe-notice/index.vue?vue&type=template&id=0ba08214&
var swipe_noticevue_type_template_id_0ba08214_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("van-swipe", {
    ref: "swiper",
    staticClass: "notice-swipe",
    attrs: {
      vertical: "",
      autoplay: _vm.delay,
      "show-indicators": false
    }
  }, _vm._l(_vm.notices, function (notice, i) {
    return _c("van-swipe-item", {
      key: i
    }, [_c("div", [_c("p", {
      staticClass: "font10",
      domProps: {
        textContent: _vm._s(notice.name)
      }
    }, [_vm._v("用户名")]), _vm._v(" "), _c("p", [_c("span", {
      staticClass: "font10"
    }, [_vm._v("带领")]), _c("b", {
      domProps: {
        textContent: _vm._s(notice.num)
      }
    }, [_vm._v("3000")]), _c("span", {
      staticClass: "font10"
    }, [_vm._v("人中奖")])])])]);
  }), 1);
};
var swipe_noticevue_type_template_id_0ba08214_staticRenderFns = [];
swipe_noticevue_type_template_id_0ba08214_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/swipe-notice/index.vue?vue&type=template&id=0ba08214&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/swipe-notice/index.vue?vue&type=script&lang=js&
/**
 * 公用组件：纵向文字轮播
 * by zhaoyf    2021-08-05 09:56:55
 */


//--从vant中按需引用轮播组件




/* harmony default export */ var swipe_noticevue_type_script_lang_js_ = ({
  name: 'notice-swipe',
  components: {
    'van-swipe': swipe_default.a,
    'van-swipe-item': swipe_item_default.a
    // 'van-notice-bar': NoticeBar,
  },

  props: {
    notices: {
      type: Array,
      "default": [{
        name: '小目标三亿',
        num: '10000'
      }, {
        name: '小目标',
        num: '100'
      }]
    },
    delay: {
      type: Number,
      "default": 3000
    }
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      //--尝试重绘，避免运行时出现一些JS错误
      try {
        _this.$refs.swiper.resize();
      } catch (error) {
        console.warn(error);
      }
    }, 500);
  }
});
// CONCATENATED MODULE: ./src/components/public/swipe-notice/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_swipe_noticevue_type_script_lang_js_ = (swipe_noticevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/public/swipe-notice/index.vue





/* normalize component */

var swipe_notice_component = Object(componentNormalizer["a" /* default */])(
  public_swipe_noticevue_type_script_lang_js_,
  swipe_noticevue_type_template_id_0ba08214_render,
  swipe_noticevue_type_template_id_0ba08214_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var swipe_notice_api; }
swipe_notice_component.options.__file = "src/components/public/swipe-notice/index.vue"
/* harmony default export */ var swipe_notice = (swipe_notice_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/g-activity/index.vue?vue&type=script&lang=js&
/**
 * 全网跟单活动组件
 * @description 全网跟单活动组件
 * @author zhaoyf
 * @time 2023/07/27 14:35:44
 * @copyright 2023 itou
 */




//--数字转汉字
function num2cn() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var numCn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var numCn1 = ['', '十', '百', '千'];
  if (num >= 10000) {
    return num;
  }
  var arr = (num + '').split('');
  var r = [];
  while (arr.length) {
    var n = arr.pop();
    if (n > 0) {
      r.push(numCn[n] + numCn1.shift());
    } else {
      r.push(numCn[n]);
      numCn1.shift();
    }
  }
  while (r[0] == '零') {
    r.shift();
  }
  r.reverse();
  if (r[0] == '一十') {
    r[0] = '十';
  }
  var str = r.join('');
  return str.replace(/零+/g, '零');
}
/* harmony default export */ var g_activityvue_type_script_lang_js_ = ({
  name: 'g-activity',
  components: {
    'notice-swipe': swipe_notice
  },
  props: {
    gactivity: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      id: null,
      title: '',
      list: [],
      html: '',
      name: ''
    };
  },
  mounted: function mounted() {
    var adv = this.gactivity;
    this.id = adv.gaid;
    this.name = '全网推荐活动' + num2cn(adv.serial_no) + '期来袭';
    this.title = adv.title;
    this.html = adv.pre_show_html || '';
    var rank_list = adv.rank_list || [];
    var list = [];
    rank_list.forEach(function (item) {
      var user_info = item.user_info || {};
      var name = user_info.nick_name;
      var num = item.f_num || 0;
      list.push({
        name: name,
        num: num
      });
    });
    this.list = list;
    // console.log(this);
  },

  methods: {
    gotoGAdv: function gotoGAdv() {
      if (!config.isAPP) {
        this.$parent.$refs.downloadLayer.show();
        return;
      }
      var id = this.id;
      if (id) {
        var url = "/precommend/adv/?id=".concat(id, "&back=").concat(backurl);
        Gray.$page.loadPage(url);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/g-activity/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_g_activityvue_type_script_lang_js_ = (g_activityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/g-activity/index.vue





/* normalize component */

var g_activity_component = Object(componentNormalizer["a" /* default */])(
  details_g_activityvue_type_script_lang_js_,
  g_activityvue_type_template_id_91c3ed02_render,
  g_activityvue_type_template_id_91c3ed02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var g_activity_api; }
g_activity_component.options.__file = "src/components/buness/user/shop/details/g-activity/index.vue"
/* harmony default export */ var g_activity = (g_activity_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/live-adv/index.vue?vue&type=template&id=0f7130c8&
var live_advvue_type_template_id_0f7130c8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.liveRooms.length ? _c("div", {
    staticClass: "defadvlivebox"
  }, [_c("discount-one", {
    attrs: {
      tip: _vm.tip
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "deflivecon"
  }, [_c("div", {
    staticClass: "deflivelist flexcenter"
  }, _vm._l(_vm.liveRooms, function (room) {
    return _c("div", {
      key: room.room_id,
      staticClass: "defliveitem",
      on: {
        click: function click($event) {
          return _vm.goLiveRoom(room.room_id);
        }
      }
    }, [_c("div", {
      staticClass: "defliveanim"
    }, [_c("div", {
      staticClass: "defliveimg"
    }, [_c("img", {
      attrs: {
        src: room.avatar
      }
    })])]), _vm._v(" "), _c("p", {
      staticClass: "livename",
      domProps: {
        textContent: _vm._s(room.nick_name)
      }
    }, [_vm._v("直播名称")]), _vm._v(" "), _c("div", {
      staticClass: "livelotname",
      "class": {
        textmarquee: (room.lottery_type_list_text + "").length > 4
      }
    }, [_c("p", [_c("span", {
      staticClass: "font10",
      domProps: {
        textContent: _vm._s(room.lottery_type_list_text)
      }
    }, [_vm._v("竞彩足球/竞彩篮球")])])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "deflivebtn",
    on: {
      click: _vm.goLiveIndex
    }
  }, [_c("p", {
    staticClass: "nextarrow_icon"
  })])])], 1) : _vm._e();
};
var live_advvue_type_template_id_0f7130c8_staticRenderFns = [];
live_advvue_type_template_id_0f7130c8_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/live-adv/index.vue?vue&type=template&id=0f7130c8&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/live-adv/index.vue?vue&type=script&lang=js&
/**
 * 直播列表广告组件
 * @description 直播列表广告组件
 * @author zhaoyf
 * @time 2023/07/27 14:35:49
 * @copyright 2023 itou
 */



/* harmony default export */ var live_advvue_type_script_lang_js_ = ({
  name: 'live-adv',
  components: {
    'discount-one': discount_one
  },
  props: {
    liveRooms: {
      type: Array,
      "default": []
    },
    id: '',
    tip: {
      type: String,
      "default": ''
    }
  },
  mounted: function mounted() {
    // console.log(this.liveRooms, this.id)
    if (this.liveRooms.length) {
      itou.baiduHm('店铺主页', '直播推荐曝光'); //--百度统计
    }
  },

  methods: {
    /**
     * @function goLiveIndex
     * @description 跳转到直播首页
     */
    goLiveIndex: function goLiveIndex() {
      var id = this.id;
      itou.baiduHm('店铺主页', '直播推荐点击'); //--百度统计
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
      var id = this.id;
      itou.baiduHm('店铺主页', '直播推荐点击'); //--百度统计
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
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/live-adv/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_live_advvue_type_script_lang_js_ = (live_advvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/live-adv/index.vue





/* normalize component */

var live_adv_component = Object(componentNormalizer["a" /* default */])(
  details_live_advvue_type_script_lang_js_,
  live_advvue_type_template_id_0f7130c8_render,
  live_advvue_type_template_id_0f7130c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var live_adv_api; }
live_adv_component.options.__file = "src/components/buness/user/shop/details/live-adv/index.vue"
/* harmony default export */ var live_adv = (live_adv_component.exports);
// EXTERNAL MODULE: ./src/components/public/img/img-shop.vue + 6 modules
var img_shop = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/data-tools-icon/index.vue?vue&type=template&id=5f71af3a&
var data_tools_iconvue_type_template_id_5f71af3a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c("div", {
    staticClass: "shop_details_acitem",
    on: {
      click: _vm.gotoDataTools
    }
  }, [_vm._m(0), _vm._v(" "), _c("p", {
    staticClass: "gray3"
  }, [_vm._v("数据工场")])]) : _vm._e();
};
var data_tools_iconvue_type_template_id_5f71af3a_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "iconbox"
  }, [_c("p", {
    staticClass: "icon_shopdetail icon_youliaotools"
  })]);
}];
data_tools_iconvue_type_template_id_5f71af3a_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/data-tools-icon/index.vue?vue&type=template&id=5f71af3a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/data-tools-icon/index.vue?vue&type=script&lang=js&
/**
 * 数据工场按钮组件
 * @description 数据工场按钮组件
 * @author zhaoyf
 * @time 2023/07/21 16:51:22
 * @copyright 2023 itou
 */




/* harmony default export */ var data_tools_iconvue_type_script_lang_js_ = ({
  name: 'data-tools-icon',
  props: {
    id: ''
  },
  data: function data() {
    return {
      dtUrl: '',
      // loaded: false,
      isShow: false
    };
  },
  mounted: function mounted() {
    this.getStatus();
  },
  methods: {
    /**
     * @function getStatus
     * @description 获取状态是否显示
     */
    getStatus: function getStatus() {
      var _this = this;
      return itou.get({
        url: 'datatools/show',
        data: {
          station_user_id: this.id
        },
        rnd: false,
        notoken: true
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this.isShow = data.is_show;
      });
    },
    /**
     * @function getDtUrl
     * @description 获取追光者数据工厂连接
     */
    getDtUrl: function getDtUrl() {
      var _this2 = this;
      var callbackUrl = '';
      if (!this.isAPP) {
        callbackUrl = window.location.href;
      }
      return itou.get({
        url: 'datatools/getjumpurl',
        data: {
          station_user_id: this.id,
          callback_url: callbackUrl
        },
        specialErr: {
          '-3': function _() {}
        }
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var dtUrl = data.jump_url || '';
        // this.loaded = true;
        _this2.dtUrl = dtUrl;
      });
    },
    /**
     * @function gotoDataTools
     * @description 跳转到数据工场
     */
    gotoDataTools: function gotoDataTools() {
      var _this3 = this;
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var dtUrl;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.getDtUrl();
            case 2:
              dtUrl = _this3.dtUrl;
              if (dtUrl) {
                _context.next = 6;
                break;
              }
              _this3.layer.tip.show('没找到跳转地址！');
              return _context.abrupt("return");
            case 6:
              if (_this3.isAPP) {
                itou.gotoPartner(dtUrl + '&fromapp=1');
              } else {
                itou.gotoPartner(dtUrl);
              }
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/data-tools-icon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_data_tools_iconvue_type_script_lang_js_ = (data_tools_iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/data-tools-icon/index.vue





/* normalize component */

var data_tools_icon_component = Object(componentNormalizer["a" /* default */])(
  details_data_tools_iconvue_type_script_lang_js_,
  data_tools_iconvue_type_template_id_5f71af3a_render,
  data_tools_iconvue_type_template_id_5f71af3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var data_tools_icon_api; }
data_tools_icon_component.options.__file = "src/components/buness/user/shop/details/data-tools-icon/index.vue"
/* harmony default export */ var data_tools_icon = (data_tools_icon_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/w500-icon/index.vue?vue&type=template&id=45f9a814&
var w500_iconvue_type_template_id_45f9a814_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c("div", {
    staticClass: "shop_details_acitem",
    on: {
      click: _vm.gotoW500
    }
  }, [_vm.isDiscount ? _c("div", {
    staticClass: "iconbox iconbox_500wsale"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]) : _c("div", {
    staticClass: "iconbox"
  }, [_c("p", {
    staticClass: "icon_500wdata"
  })]), _vm._v(" "), _c("p", {
    staticClass: "gray3"
  }, [_vm._v("智能大数据")])]) : _vm._e();
};
var w500_iconvue_type_template_id_45f9a814_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "text1"
  }, [_c("b", {}, [_vm._v("买就送")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "text2"
  }, [_c("span", {
    staticClass: "font10"
  }, [_vm._v("最高送半年")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "txttip_ac flexcenter"
  }, [_c("span", {
    staticClass: "font10"
  }, [_vm._v("AI")])]);
}];
w500_iconvue_type_template_id_45f9a814_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/w500-icon/index.vue?vue&type=template&id=45f9a814&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/w500-icon/index.vue?vue&type=script&lang=js&
/**
 * 500万按钮
 * @description 500万按钮菜单组件
 * @author zhaoyf
 * @time 2023/09/05 16:30:40
 * @copyright 2023 itou
 */


/* harmony default export */ var w500_iconvue_type_script_lang_js_ = ({
  name: 'w500-icon',
  props: {
    id: ''
  },
  data: function data() {
    return {
      isShow: false,
      isDiscount: false //--打折角标
    };
  },
  mounted: function mounted() {
    this.getStatus();
  },
  methods: {
    /**
     * @function apiCache
     * @description 接口调用缓存，防止短时间内并发调用
     */
    apiCache: function apiCache() {
      var _itou$publicObj;
      (_itou$publicObj = itou.publicObj).apiCache || (_itou$publicObj.apiCache = {});
      var p = itou.publicObj.apiCache.w500_show;
      if (p) {
        return p;
      }
      itou.publicObj.apiCache.w500_show = itou.get({
        url: 'w500/show',
        data: {
          station_user_id: this.id
        },
        rnd: false,
        notoken: true
      });
      setTimeout(function () {
        delete itou.publicObj.apiCache.w500_show;
      }, 500);
      return itou.publicObj.apiCache.w500_show;
    },
    /**
     * @function getStatus
     * @description 获取状态是否显示
     */
    getStatus: function getStatus() {
      var _this = this;
      return this.apiCache().then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this.isShow = data.is_show;
        _this.isDiscount = data.is_discount;
        if (_this.isShow) {
          itou.baiduHm('店铺主页', '大数据入口曝光'); //--百度统计
        }
      });
    },
    /**
     * @function gotoW500
     * @description 跳转到去500万的中转页
     */
    gotoW500: function gotoW500() {
      itou.baiduHm('店铺主页', '大数据入口点击'); //--百度统计
      var url = '/monetize/tow500/'; //--500万中转页面
      url += '?scene=index'; //--场景
      url += '&back=' + window.backurl; //--返回路径
      url += '&id=' + this.id; //--店铺ID
      Gray.$page.loadPage(url); //--跳转到中转页面
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/w500-icon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_w500_iconvue_type_script_lang_js_ = (w500_iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/w500-icon/index.vue





/* normalize component */

var w500_icon_component = Object(componentNormalizer["a" /* default */])(
  details_w500_iconvue_type_script_lang_js_,
  w500_iconvue_type_template_id_45f9a814_render,
  w500_iconvue_type_template_id_45f9a814_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var w500_icon_api; }
w500_icon_component.options.__file = "src/components/buness/user/shop/details/w500-icon/index.vue"
/* harmony default export */ var w500_icon = (w500_icon_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/w500-icon2/index.vue?vue&type=template&id=9149a218&
var w500_icon2vue_type_template_id_9149a218_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c("div", {
    staticClass: "shop_details_acitem",
    on: {
      click: _vm.gotoW500
    }
  }, [_c("div", {
    staticClass: "iconbox"
  }, [_vm.list.length ? _c("div", {
    staticClass: "yxhdswipebox"
  }, [_c("van-swipe", {
    ref: "swiper",
    attrs: {
      vertical: "",
      autoplay: _vm.delay,
      "show-indicators": false
    }
  }, _vm._l(_vm.list, function (notice, i) {
    return _c("van-swipe-item", {
      key: i
    }, [_c("p", {
      staticClass: "num"
    }, [_c("span", {
      domProps: {
        textContent: _vm._s(notice[0])
      }
    }, [_vm._v("888")]), notice[2] ? _c("span", {
      staticClass: "font10",
      domProps: {
        textContent: _vm._s(notice[2])
      }
    }, [_vm._v("%")]) : _vm._e()]), _vm._v(" "), _c("p", {
      staticClass: "name",
      domProps: {
        textContent: _vm._s(notice[1])
      }
    }, [_vm._v("回报率")])]);
  }), 1)], 1) : _c("p", {
    staticClass: "icon_500wyxhd"
  })]), _vm._v(" "), _c("p", {
    staticClass: "gray3"
  }, [_vm._v("严选红单")])]) : _vm._e();
};
var w500_icon2vue_type_template_id_9149a218_staticRenderFns = [];
w500_icon2vue_type_template_id_9149a218_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/w500-icon2/index.vue?vue&type=template&id=9149a218&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(29);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/w500-icon2/index.vue?vue&type=script&lang=js&
/**
 * 严选红单
 * @description 严选红单按钮菜单组件
 * @author zhaoyf
 * @time 2023年10月31日16:11:33
 * @copyright 2023 itou
 */


//--从vant中按需引用轮播组件





/* harmony default export */ var w500_icon2vue_type_script_lang_js_ = ({
  name: 'w500-icon2',
  components: {
    'van-swipe': swipe_default.a,
    'van-swipe-item': swipe_item_default.a
    // 'van-notice-bar': NoticeBar,
  },

  props: {
    id: ''
  },
  data: function data() {
    return {
      isShow: false,
      isDiscount: false,
      //--打折角标
      list: [],
      delay: 3000
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.getStatus();
    setTimeout(function () {
      //--尝试重绘，避免运行时出现一些JS错误
      try {
        _this.$refs.swiper && _this.$refs.swiper.resize();
      } catch (error) {
        console.warn(error);
      }
    }, 500);
  },
  methods: {
    /**
     * @function apiCache
     * @description 接口调用缓存，防止短时间内并发调用
     */
    apiCache: function apiCache() {
      var _itou$publicObj;
      (_itou$publicObj = itou.publicObj).apiCache || (_itou$publicObj.apiCache = {});
      var p = itou.publicObj.apiCache.w500_show;
      if (p) {
        return p;
      }
      itou.publicObj.apiCache.w500_show = itou.get({
        url: 'w500/show',
        data: {
          station_user_id: this.id
        },
        rnd: false,
        notoken: true
      });
      setTimeout(function () {
        delete itou.publicObj.apiCache.w500_show;
      }, 500);
      return itou.publicObj.apiCache.w500_show;
    },
    /**
     * @function getStatus
     * @description 获取状态是否显示
     */
    getStatus: function getStatus() {
      var _this2 = this;
      return this.apiCache().then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this2.isShow = data.yxhd_is_show;
        var honor = data.yxhd_honor || [];
        _this2.list = _this2.dealHonor(honor);
        // this.isDiscount = data.is_discount;
        if (_this2.isShow) {
          itou.baiduHm('店铺主页', '严选红单曝光'); //--百度统计
        }
      });
    },
    /**
     * @function dealHonor
     * @description 处理轮播数据
     */
    dealHonor: function dealHonor() {
      var honor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // honor = [
      //     '8 连红',
      //     '10 中10',
      //     '2190%回报率',
      //     '足彩一等奖',
      //     '命中任九',
      // ];
      var list = honor.map(function (str) {
        if (typeof str != 'string') {
          return [str];
        }
        str = str.replace(/\s/g, '');
        if (str.includes('回报率') || str.includes('命中率')) {
          return [str.slice(0, -4), str.slice(-3), '%'];
        } else if (/\d+中\d+/.test(str)) {
          var _str$split = str.split('中'),
            _str$split2 = slicedToArray_default()(_str$split, 2),
            a = _str$split2[0],
            _str$split2$ = _str$split2[1],
            b = _str$split2$ === void 0 ? 1 : _str$split2$;
          var rate = Math.floor(a / b * 100);
          return [rate, '命中率', '%'];
        } else if (str.includes('连红')) {
          return [str.slice(0, -2), str.slice(-2)];
        } else if (str.includes('足彩')) {
          return [str.slice(-3), str.slice(0, -3)];
        } else if (str.includes('任九')) {
          return [str.slice(0, -2), str.slice(-2)];
        } else {
          return [str];
        }
      });
      return list;
    },
    /**
     * @function gotoW500
     * @description 跳转到去500万的中转页
     */
    gotoW500: function gotoW500() {
      itou.baiduHm('店铺主页', '严选红单访问'); //--百度统计
      var url = '/monetize/tow500/'; //--500万中转页面
      url += '?scene=yxhd_index'; //--场景
      url += '&back=' + window.backurl; //--返回路径
      url += '&id=' + this.id; //--店铺ID
      Gray.$page.loadPage(url); //--跳转到中转页面
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/w500-icon2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_w500_icon2vue_type_script_lang_js_ = (w500_icon2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/w500-icon2/index.vue





/* normalize component */

var w500_icon2_component = Object(componentNormalizer["a" /* default */])(
  details_w500_icon2vue_type_script_lang_js_,
  w500_icon2vue_type_template_id_9149a218_render,
  w500_icon2vue_type_template_id_9149a218_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var w500_icon2_api; }
w500_icon2_component.options.__file = "src/components/buness/user/shop/details/w500-icon2/index.vue"
/* harmony default export */ var w500_icon2 = (w500_icon2_component.exports);
// CONCATENATED MODULE: ./src/static/js/model/ajax-listener/index-75ca0a93d4.js
/**
 * 页面Ajax请求监听对象
 * @description 监听页面的Ajax请求，当页面所有的Ajax请求完成后（延迟超过200ms执行的除外），执行回调函数
 * @author zhaoyf
 * @time 2023/07/19 11:18:38
 * @copyright 2023 itou
 */





function counterCreator(callback) {
  var count = 0;

  /**
   * @function ajaxBeforeSend
   * @description ajax监听的ajaxBeforeSend函数，ajax请求开始时触发
   */
  function ajaxBeforeSend() {
    count++;
    // console.log('ajaxBeforeSend', count);
  }

  /**
   * @function ajaxComplete
   * @description ajax监听的ajaxComplete函数，Ajax请求完成时触发
   */
  function ajaxComplete() {
    count--;
    // console.log('ajaxComplete', count);
    try {
      callback(count);
    } catch (e) {
      console.warn(e);
    }
  }
  return {
    ajaxBeforeSend: ajaxBeforeSend,
    ajaxComplete: ajaxComplete
  };
}
var ajax_listener_AjaxListener = /*#__PURE__*/function () {
  function AjaxListener() {
    var _this = this;
    classCallCheck_default()(this, AjaxListener);
    defineProperty_default()(this, "timer", 0);
    //--计时器id
    defineProperty_default()(this, "timeout", 200);
    //--计时器延时
    defineProperty_default()(this, "events", {});
    //--创建监听函数
    var counter = counterCreator(function (activeCount) {
      _this.delayDoFinal(activeCount);
    });

    //--开启监听
    this.setOn(counter);
  }

  /**
   * @function setOn
   * @description ajax请求监听开启，同时创建监听关闭函数
   */
  createClass_default()(AjaxListener, [{
    key: "setOn",
    value: function setOn(_ref) {
      var ajaxBeforeSend = _ref.ajaxBeforeSend,
        ajaxComplete = _ref.ajaxComplete;
      //--开始监听
      document.addEventListener('ajaxBeforeSend', ajaxBeforeSend);
      document.addEventListener('ajaxComplete', ajaxComplete);

      /**
       * @function setOff
       * @description ajax请求监听移除
       */
      this.setOff = function () {
        //--移除监听
        document.removeEventListener('ajaxBeforeSend', ajaxBeforeSend);
        document.removeEventListener('ajaxComplete', ajaxComplete);
      };
    }

    /**
     * @function delayDoFinal
     * @description 延迟执行，如果200ms后激活的请求数量为0，则认为ajax请求全部完成，执行finally传入的回调函数
     */
  }, {
    key: "delayDoFinal",
    value: function delayDoFinal(activeCount) {
      var _this2 = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        if (activeCount <= 0) {
          _this2.setOff();
          if (typeof _this2.events["finally"] == 'function') {
            try {
              _this2.events["finally"]();
            } catch (error) {
              console.error(error);
            }
          }
        }
      }, this.timeout);
    }

    /**
     * @function finally
     * @description 绑定一个请求全部完成的回调函数
     * @param {function} callback - 请求全部完成时执行的回调函数
     */
  }, {
    key: "finally",
    value: function _finally(callback) {
      this.events["finally"] = callback;
      return this;
    }
  }]);
  return AjaxListener;
}();
/* harmony default export */ var ajax_listener = (ajax_listener_AjaxListener);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/shop-live-icon/index.vue?vue&type=template&id=2667916d&
var shop_live_iconvue_type_template_id_2667916d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "topcenter shopliveiconbg",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.gotoLive
    }
  }, [_c("em", {
    staticClass: "liveicon"
  })]);
};
var shop_live_iconvue_type_template_id_2667916d_staticRenderFns = [];
shop_live_iconvue_type_template_id_2667916d_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/shop-live-icon/index.vue?vue&type=template&id=2667916d&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/shop-live-icon/index.vue?vue&type=script&lang=js&
/**
 * 店内直播
 * @description 店内直播组件
 * @author zhaoyf
 * @time 2023年12月19日17:04:13
 * @copyright 2023 itou
 */
/* harmony default export */ var shop_live_iconvue_type_script_lang_js_ = ({
  name: 'shop-live-icon',
  props: {
    id: ''
  },
  data: function data() {
    return {
      isShow: false,
      link: ''
    };
  },
  mounted: function mounted() {
    this.getInfo();
  },
  methods: {
    /**
     * @function getInfo
     * @description 获取店内直播信息
     */
    getInfo: function getInfo() {
      var _this = this;
      var id = this.id;
      return itou.get({
        url: 'stationlive/get',
        data: {
          station_user_id: id
        },
        rnd: false,
        notoken: true
      }).then(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$live_status = _ref.live_status,
          live_status = _ref$live_status === void 0 ? '' : _ref$live_status,
          _ref$live_room = _ref.live_room,
          live_room = _ref$live_room === void 0 ? '' : _ref$live_room;
        _this.isShow = live_status == 1;
        if (_this.isShow) {
          itou.baiduHm('店铺主页', '店内直播曝光'); //--百度统计
        }

        _this.link = live_room;
      });
    },
    /**
     * @function gotoLive
     * @description 跳转到直播间地址
     */
    gotoLive: function gotoLive() {
      var link = this.link;
      if (!link) {
        return;
      }
      itou.baiduHm('店铺主页', '店内直播访问'); //--百度统计
      //--鉴于B站短地址不能加任何东西，这里就禁止加随机数
      itou.gotoPartner(link, false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/shop-live-icon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_shop_live_iconvue_type_script_lang_js_ = (shop_live_iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/shop-live-icon/index.vue





/* normalize component */

var shop_live_icon_component = Object(componentNormalizer["a" /* default */])(
  details_shop_live_iconvue_type_script_lang_js_,
  shop_live_iconvue_type_template_id_2667916d_render,
  shop_live_iconvue_type_template_id_2667916d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var shop_live_icon_api; }
shop_live_icon_component.options.__file = "src/components/buness/user/shop/details/shop-live-icon/index.vue"
/* harmony default export */ var shop_live_icon = (shop_live_icon_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/logged-off/index.vue?vue&type=template&id=42d510a4&
var logged_offvue_type_template_id_42d510a4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "topcenter column shoplogofflayer",
    staticStyle: {
      display: "none"
    }
  }, [_c("div", {
    staticClass: "boxflex flexcenter column shoplogofflayer_con"
  }, [_c("p", {
    staticClass: "logoffbg"
  }), _vm._v(" "), _c("h4", [_vm._v("店铺已注销")]), _vm._v(" "), _c("p", {
    staticClass: "tiptext"
  }, [_vm._v("该店铺已注销，店内所有服务均已停用！")]), _vm._v(" "), _c("p", {
    staticClass: "flexcenter btn btn_red",
    on: {
      click: _vm.back
    }
  }, [_vm._v("返回")])]), _vm._v(" "), _c("a", {
    attrs: {
      href: "/user/shop/complain/",
      backurl: _vm.backurl
    }
  }, [_vm._v("投诉店铺")])]);
};
var logged_offvue_type_template_id_42d510a4_staticRenderFns = [];
logged_offvue_type_template_id_42d510a4_render._withStripped = true;

// CONCATENATED MODULE: ./src/components/buness/user/shop/details/logged-off/index.vue?vue&type=template&id=42d510a4&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/user/shop/details/logged-off/index.vue?vue&type=script&lang=js&
/**
 * 店铺已注销
 * @description 店铺已注销全屏弹层组件
 * @author zhaoyf
 * @time 2023/12/20 11:50:19
 * @copyright 2023 itou
 */


/* harmony default export */ var logged_offvue_type_script_lang_js_ = ({
  name: 'shop-logged-off',
  data: function data() {
    return {
      isShow: false //--是否显示弹层
    };
  },

  methods: {
    /**
     * @function show
     * @description 显示弹层
     */
    show: function show() {
      if (!this.$el.parentNode) {
        document.body.appendChild(this.$el);
      }
      this.isShow = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/logged-off/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_logged_offvue_type_script_lang_js_ = (logged_offvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/buness/user/shop/details/logged-off/index.vue





/* normalize component */

var logged_off_component = Object(componentNormalizer["a" /* default */])(
  details_logged_offvue_type_script_lang_js_,
  logged_offvue_type_template_id_42d510a4_render,
  logged_offvue_type_template_id_42d510a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var logged_off_api; }
logged_off_component.options.__file = "src/components/buness/user/shop/details/logged-off/index.vue"
/* harmony default export */ var logged_off = (logged_off_component.exports);
// CONCATENATED MODULE: ./src/static/js/model/plugin/shop-logged-off-e6939d2edc.js
/**
 * 
 * @description <some description>
 * @author zhaoyf
 * @time 2023/12/20 14:20:28
 * @copyright 2023 itou
 */



/* harmony default export */ var shop_logged_off = ({
  /**
   * @function install
   * @description Vue插件入口
   */
  install: function install(Vue) {
    if (Vue.prototype.$shopLoggedOff && !Vue.prototype.$shopLoggedOff._isDestroyed) {
      return;
    }
    //--创建kfmessage插件的vue实例
    var plugin = Vue.extend(logged_off); //--创建子类
    var $plugin = new plugin({
      //--子类实例化
      parent: window.vm,
      el: document.createElement('div')
    });
    Vue.prototype.$shopLoggedOff = $plugin;
  }
});
// CONCATENATED MODULE: ./src/static/js/business/user-shopdetails.js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * 微信C端 彩店详情
 * by zhaoyf    2016-08-15
 */
// window.onerror = function (msg, url, line){ //临时捕捉苹果无法打开的异常
// 	var msg_txt = 'error:'+msg+"\nline:"+line+"\n请截图向店主报告";
// 	alert(msg_txt);
// };

 //--店铺图片分享弹窗组件








// import appDownloadLayer from '@/components/buness/user/shop/details/app-download-layer/index.vue';





// //--全网牛单弹层
// import layerQwnd from '@/components/buness/user/shop/details/layer-qwnd/index.vue';
// //--大神推单弹层
// import layerDstd from '@/components/buness/user/shop/details/layer-dstd/index.vue';
// //--首单不中退广告弹层
// import layerFirst from '@/components/buness/user/shop/details/layer_first/index.vue'
//--店内直播

//--灵活用工弹层说明
// import layerLhyg from '@/components/buness/user/shop/details/layer-lhyg/index.vue';

//--店铺已注销

Vue.use(shop_logged_off);
$(function () {
  // //--弹窗显示管理对象
  // class LayerManage {
  //     //--弹层显示的开始和截止时间
  //     time = {
  //         start: '2023-11-07 00:00:00',
  //         end: '2023-11-12 00:00:00',
  //     };
  //     layers = [];//--要管理的弹层
  //     cacheKey = '__shop_layer_date';//--缓存键值
  //     notice = null;//--店铺首页公告对象

  //     constructor(layers = [], notice) {
  //         this.layers = [...layers];
  //         this.notice = notice;
  //     }

  //     /**
  //      * @function checkShow
  //      * @description 检查是否弹出窗口
  //      */
  //     checkShow() {
  //         const { notice = {} } = this;
  //         //--正在展示公告，则不显示弹层
  //         if (notice.isShow) {
  //             return;
  //         }
  //         let {
  //             time: { start, end },
  //             cacheKey,
  //             layers
  //         } = this;
  //         start = start.split(/[: -]/);
  //         start[1] -= 1;
  //         end = end.split(/[: -]/);
  //         end[1] -= 1;
  //         const sTime = new Date(...start), //--开始时间
  //             eTime = new Date(...end), //--结束时间
  //             now = new Date(), //--当前时间
  //             nowDate = now.getDate(), //--当前日期
  //             nowHour = now.getHours();//--当前小时
  //         const cacheDate = itou.localJson.getJson(cacheKey).date; //--缓存日期
  //         // console.log(layers);
  //         //--当日已展示过，则不再展示
  //         if (nowDate == cacheDate) {
  //             return;
  //         }
  //         const len = layers.length;//--弹层数量
  //         if (!len) {
  //             return;
  //         }
  //         const layer = layers[nowDate % len];//--计算本日展示的弹层
  //         //--时间符合，展示弹层
  //         if (now >= sTime && now <= eTime && nowHour >= 13 && nowHour < 22) {
  //             layer.show(() => {
  //                 itou.localJson.setJson(cacheKey, { date: nowDate }, 3600 * 24); //--记录缓存
  //             });//--展示弹层
  //         }
  //     }
  // }

  itou.currLimit.init();
  var baseSetting = itou.baseSetting,
    simplify = itou.simplify;
  function checkSubscribe() {
    //--检查是否认证
    return itou.get({
      url: 'user/isFollow',
      data: {
        appid: itou.setting.getData('appid')
      }
    }).then(function (data) {
      var r = data.is_subscribe,
        defer = $.Deferred();
      if (r != -1) {
        var cache = itou.localJson.getJson('itou_is_subscribe');
        cache.key = r;
        cache.timestamp = new Date().Dateformat('yyyy-MM-DD HH:NN:SS');
        itou.localJson.setJson('itou_is_subscribe', cache);
        defer.resolve();
        try {
          var defer1 = $.Deferred();
          window.codePromise = defer1.promise();
          defer1.resolve();
        } catch (error) {
          console.error(error.message);
        }
      } else {
        defer.reject();
      }
      return defer.promise();
    }).then(function () {}, function () {
      var code = Gray.$page.getUrlParam('code') || '',
        defer = $.Deferred();
      if (!code) {
        var href = Gray.$page.href || window.location.href,
          cache = itou.localJson.getJson('itou_is_subscribe');
        var timestamp = cache.timestamp; //--获取认证请求时间戳
        if (!timestamp) {
          itou.auth.getCode('snsapi_userinfo', href);
        } else if (timestamp.toDate().DateDiff('s', new Date()) > 10) {
          itou.auth.getCode('snsapi_userinfo', href);
        }
        defer.reject();
      } else {
        defer.resolve();
      }
      return defer.promise();
    });
  }
  var info = function info(data) {
    //--店铺详情数据构造函数
    var self = this;
    self.name = data.station_name; //--店名
    self.loggedOff = false; //--店铺数否已注销
    self.isCert = !!(data.has_cert_info == '1'); //--认证状态
    self.isCertText = self.isCert ? '已认证' : '未认证'; //--认证状态文本
    self.isCertDiff = data.open_diff_day || 0; //--认证状态文本
    self.isCertClass = self.isCert ? 'certokbg' : 'certnobg'; //--认证状态样式
    self.pic = data.station_img; //--店铺照片
    self.pingfen = data.mark_avg; //--店铺评分
    self.pinglun = data.mark_count; //--店铺评论
    self.address = data.address; //--店铺地址
    self.deal_users = data.deal_mobiles || 0; //--近30天出票人数
    self.services_txt = data.services_txt; //--领奖方式
    self.minMoney = data.money_limit; //--最小接单金额
    self.lottery = data.allowed_lottery_style; //--可出彩票彩种
    self.lott = null; //--可出彩票彩种
    self.qq = data.station_qq; //--付款方式QQ
    self.weixin = data.station_weixin; //--付款方式微信
    self.alipay = data.station_alipay; //--付款方式支付宝
    self.longitude = data.longitude; //--坐标经度
    self.latitude = data.latitude; //--坐标纬度
    self.id = data.station_user_id;
    self.uuid = data.station_uuid;
    self.mobile = data.station_mobile;
    self.city = data.province + ' ' + data.city;
    var province = {};
    province[self.id] = data.province;
    itou.localData.setData('__shop_province', province); //--缓存店铺所在省份

    if (self.id) {
      //--保存场景数据
      var entry_info = itou.entry.get() || {},
        scene = Gray.$page.getUrlParam('scene') || 'visit_shop';
      entry_info.scene = scene;
      entry_info.station_id = self.id;
      // entry_info.share_id = "";
      itou.entry.set(entry_info);
    }
    // self.isDefault = data.is_default;//--是否默认店铺
    //--检查是否是精简模式，是否开启该功能
    // if(baseSetting.simplify && !simplify.shopdetail.isbind){
    // 	self.isDefault = "0";
    // }
    self.bind = {
      //--绑定的店铺信息
      id: null,
      name: null,
      text: '绑定本店后，后续选号提交可直接到店，让您出票更快。',
      show: false
    };
    var lottery_order = itou.setting.getData('lottery_order');
    self.lottery_order = lottery_order.format(self.lottery);
    self.lottery = self.lottery_order.lottery;
    // self.lott = self.lottery;
    self.lott = self.lottery_order.lottery;
    // try {
    //     self.lott.SYY.num = $.lottery.select11_5.$config[self.lott.SYY.name].lottery_type.num;
    // } catch (e) { }
    // try {
    //     self.syyService = $.lottery.select11_5.$config[self.lottery.SYY.name].lottery_type.service;
    // } catch (error) {
    //     self.syyService = '08:50-23:00';
    // }

    var f = self.pingfen;
    var p = itou.outil.pingjia(f); //--获得评价
    self.pingjia = p;
    self.payment = {
      //--支付方式
      qq: data.services && data.services.payment_qq && data.services.payment_qq.qq_account ? data.services.payment_qq.qq_account : '',
      weixin: data.services && data.services.payment_weixin && data.services.payment_weixin.weixin_account ? data.services.payment_weixin.weixin_account : '',
      alipay: data.services && data.services.payment_alipay && data.services.payment_alipay.alipay_account ? data.services.payment_alipay.alipay_account : ''
    };
    var desc = [];
    // desc.push(self.name);
    // desc.push("位于");
    // desc.push(data.province + data.city + "，");
    // if(self.isCert){
    //     if(data.services && data.services.hold_ticket && data.services.hold_ticket.hold_max_days){
    //         desc.push("可为您免费代管彩票，");
    //     }
    //     if(data.services && data.services.checkout_prize && data.services.checkout_prize.checkout_min_prize){
    //         desc.push("代兑" + data.services.checkout_prize.checkout_min_prize + "元以下奖金，");
    //     }
    //     desc.push("支持到店预存");
    //     if(data.services && data.services.payment_weixin && data.services.payment_weixin.weixin_account){
    //         desc.push("、微信");
    //     }
    //     if(data.services && data.services.payment_alipay && data.services.payment_alipay.alipay_account){
    //         desc.push("、支付宝");
    //     }
    //     if(data.services && data.services.payment_qq && data.services.payment_qq.qq_account){
    //         desc.push("、QQ钱包");
    //     }
    //     desc.push("等付款方式。");
    // }else{
    //     desc.push("期待您的光临。");
    // }
    desc.push(self.name + '是您身边的实体店，提供全面的数据、推荐、选单服务');
    // if(self.deal_users >= 5){
    // 	desc.push("近30天已有" + self.deal_users + "人在本店成功出票");
    // }
    if (self.pingfen >= 3.5 && data.mark_count >= 5) {
      desc.push('，' + data.mark_count + '人评价本店' + self.pingjia);
    }
    desc.push('，欢迎到店体验。');
    var id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
    self.shareMess = {
      //title: self.name + " - 口袋里的彩店",
      // title: self.name,
      title: '店铺欢迎您',
      imgUrl: self.pic,
      // desc: desc.join(""),
      desc: '您身边的实体店：提供全面的数据、分析、选单服务，欢迎到店体验。',
      // link: config.base_url + "user/shop/details/index.html?id=" + id + "&scene=share"
      link: config.base_url + 'user/shop/detail/?id=' + id + '&name=' + escape(encodeURIComponent(self.name)) + '&scene=share'
    }; //console.log(self.shareMess);

    self.showContact = false;
    // self.showNewgdrule = false;
  };

  var model = function model() {
    var self = this;
    //itou.localJson.setJson("/user/shop/details/", {'id': 21249540});
    //--本页需要调用微信接口，因而地址不可以变化，不能使用地址栏参数传递数据，只能使用本地json
    self.station_user_id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
    //--过渡：为将来用uuid完全替换数字id做准备
    self.station_uuid = Gray.$page.getUrlParam('station_uuid');
    //--过渡：为将来用uuid完全替换数字id做准备
    itou.localJson.setJson('/user/shop/details/', {
      id: self.station_user_id,
      uuid: self.station_uuid
    });
    // history.replaceState({}, "", "/user/shop/details/?id=" + self.station_user_id);
    // if(!Gray.$page.getUrlParam("id")){
    //     Gray.$page.loadPage("/user/shop/details/?id=" + self.station_user_id);
    // }

    itou.channelHm.sniff(self.station_user_id); //--渠道嗅探
    var noHttps = Gray.$page.getUrlParam('nohttps');
    // var httpsShop = ["21357788", "14037", "21842665", "19456140", "5960336", "21960255", "50007273"];//--使用https的店铺
    // if(itou.proto.protocol == "http:" && httpsShop.indexOf(self.station_user_id) != -1 && noHttps != "1"){
    // 	var url = window.location.href;//--强制制定店铺使用https
    // 	url = "https:" + url.replace(/^(http:)/, "");
    // 	window.location.href = url;
    // 	return;
    // }
    self.data = {};
    self.info = {};
    self.currAlert = null;
    self.shop_gendan_text = '店内跟单';
    self.isLimited = true; //--是否受限制不允许提交
    self.showPrizeHall = itou.baseSetting.thirdParty.prizeHall;
    self.gactivity = null; //--全网推荐跟单数据信息
    self.liveRooms = []; //---正在直播的房间信息
    self.liveTip = ''; //--直播折扣信息
    self.currAdv = '';
    self.privacy = {
      //--隐私协议
      key: '_sys_privacy_version',
      version: null,
      isShow: null,
      init: function init() {
        this.version = itou.localData.getData(this.key).version;
        this.isShow = config.isAPP && config.privacy != this.version;
      },
      ok: function ok(num) {
        //--0，不同意；1，同意
        console.log(config.privacy, this.version, itou.localData.getData(this.key).version, this.key);
        itou.localData.setData(this.key, {
          version: config.privacy,
          num: num
        });
        this.isShow = false;
      }
    };
    self.privacy.init();

    // itou.outil.checkLogin(true)
    //     .then(function (is_login) {
    //         if (is_login) {
    //             self.user_location();
    //         }
    //     });

    if ($.paijiang && !(baseSetting.simplify && !simplify.shopdetail.paijiang)) {
      self.paijiang = $.paijiang;
      $.paijiang.init({
        dataType: 'shop',
        sid: self.station_user_id
      });
      $.paijiang.apis.getInfo({
        station_user_id: self.station_user_id
      });
    } else {
      self.paijiang = {
        info: {}
      };
    }
    console.log(self);
    self.len = 0;
    self.isShowShareInfo = false;
    self.showBody = false;
    self.isHasLogin = false; //--是否登录
    self.isHasDefault = false; //--是否有默认店铺
    // self.WeixinJSBridge = WeixinJSBridge;
    self.wx = wx;
    self.is_allow = false;
    self.hemai_allow = false;
    self.collect = {
      showBtn: config.browser == 'wx',
      //--是否展示收藏按钮
      showHelp: false,
      //--是否展示收藏帮助层
      showNew: false,
      //--是否展示收藏警示条
      check: function check() {
        //--检查处理收藏层展示状态
        var hasShow = itou.localData.getData('collect_downloadApp_hasShow');
        hasShow.collect = hasShow.collect || 0;
        if (!self.collect.showBtn) {
          //--不展示按钮的情况下，跳过收藏按钮展示，直接累加1；hasShow.collect == 2的时候展示下载警示
          hasShow.collect += 1;
        }
        hasShow.collect += 1;
        self.collect.showNew = hasShow.collect == 1;
        itou.localData.setData('collect_downloadApp_hasShow', hasShow);
      }
    };
    self.collect.check();
    self.stat = {
      //--统计数字
      gendan: {
        avail: 0,
        //--可跟单数量
        all: 0,
        //--7天内总计数量
        hit: 0,
        //--7天内中奖数量
        prize: 0,
        //--7天内中奖金额
        desc: ''
      },
      hemai: {
        avail: 0 //--可合买数量
      }
    };

    self.stat2 = {
      gendan: [],
      tip: ''
    };
    self.jingcai = {
      football: -1,
      //--竞彩足球赛事数量
      basketball: -1,
      //--竞彩篮球赛事数量
      danchang: -1,
      //--北京单场
      guoguan: -1 //--胜负过关
    };

    self.SSQ = {
      ssqPrize: '奖池0.0亿',
      //--双色球奖池
      dltPrize: '奖池0.0亿',
      //--大乐透奖池
      p7Prize: '奖池0.0亿',
      //--七星彩奖池
      np7Prize: '奖池0.0亿' //--七星彩奖池
    };

    self.endTime = {
      //--彩票截止时间
      '3D': '',
      'P3': '',
      'P5': '',
      'ToTo': '',
      'NineToTo': ''
    };
    self.huodong = {
      text: '送好礼',
      has_rcmd: false,
      num: 0,
      desc: ''
    };
    self.advertising_data = {
      show: false,
      adv_name: '',
      adv_desc: '',
      img_url: '',
      dest_url: '',
      dynamic_text: '',
      live_status: 0,
      live_title: '',
      live_class: ''
    };
    self.notice = {
      //--店铺公告
      content: '',
      img: '',
      time: '',
      isShow: false,
      key: '__shop_notice_',
      autoShow: function autoShow() {
        //--第一次自动打开公告层
        var key = self.notice.key,
          time = itou.localData.getData(key).time;
        if (self.notice.time && self.notice.time != time) {
          self.notice.isShow = true;
          itou.localData.setData(key, {
            time: self.notice.time
          });
        }
      }
    };
    self.getNotice = function () {
      //--店铺公告
      return itou.get({
        url: 'shop/getNotice',
        data: {
          station_user_id: self.info.id,
          station_uuid: self.info.uuid
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        if (data.content) {
          self.notice.content = data.content;
          if (data.img_path) {
            self.notice.img = data.img_path;
          }
          self.notice.time = data.update_time;
          self.notice.autoShow(); //--第一次自动弹出公告层
        }
      });
    };

    //--彩虹多多的广告入口
    self.chddList = {
      europe_index: {},
      radar_index: {},
      margin_index: {},
      diff_analysis_index: {},
      data_tools: {}
    };
    self.getChddList = function () {
      //--获取跟单数量统计
      return itou.get({
        url: 'chdd/dataToolsList',
        data: {
          station_user_id: self.info.id,
          station_uuid: self.info.uuid
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        data.forEach(function (el) {
          if (el.rate && String(el.rate).includes('中')) {
            el.rate = el.rate.split('中');
          }
          self.chddList[el.url_type] = el;
        });
      });
    };

    //--彩虹多多推荐列表
    self.rcmdList = [];
    self.getRcmdList = function () {
      //--获取推荐列表
      return itou.get({
        url: 'chdd/hotRcmdList',
        data: {
          station_user_id: self.info.id,
          station_uuid: self.info.uuid
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        data.forEach(function (item) {
          var r = {};
          r.user = {};
          item.user_info || (item.user_info = {});
          r.user.name = item.user_info.nick_name || '';
          r.user.avatar = item.user_info.avatar || '';
          r.lottType = item.l_t_text || '';
          r.article_id = item.article_id || 0;
          item.article_data || (item.article_data = {});
          r.url_type = item.article_data.url_type || '';
          r.price = item.article_data.price || 0; //--价格
          r.black_free = item.article_data.black_free; //--是否不中免单
          r.rate = item.article_data['3d_win_rate']; //--盈利率
          r.statList = item.article_data.rcmd_stat_list || []; //--战绩
          r.matchs = item.article_data.match_list || []; //--战绩
          self.rcmdList.push(r);
        });
      });
    };
    self.getHemai = function () {
      //获取合买信息
      return itou.get({
        url: 'sharebuy/num',
        data: {
          station_id: self.station_user_id
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        self.stat.hemai.avail = data.num;
      });
    };
    self.getAllowUser = function () {
      return itou.get({
        url: 'sharebuy/allowusesharebuy',
        data: {
          station_id: self.station_user_id
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      });
    };
    self.getHemaiStatus = function () {
      return itou.get({
        url: 'sharebuy/issupport',
        data: {
          station_id: self.station_user_id
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      });
    };
    self.getGendan = function () {
      //--获取跟单数量统计
      return itou.get({
        url: 'recommend/shopstat',
        data: {
          station_user_id: self.station_user_id
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        self.stat.gendan.avail = data.avail_count;
        self.stat.gendan.all = data.recommend_count;
        self.stat.gendan.hit = data.prize_count;
        self.stat.gendan.prize = data.prize_total;
        if (self.stat.gendan.prize > 0) {
          var prize = self.stat.gendan.prize * 1;
          prize = prize.toFixed(0);
          if (prize >= 10000) {
            prize = (prize / 10000).toFixed(0) + '万';
          }
          self.stat.gendan.desc = '近7天';
          self.stat.gendan.desc += '中奖' + prize + '元';
        }
      });
    };
    self.getGendan2 = function () {
      //--获取跟单数量统计
      return itou.get({
        url: 'recommend/indexStat2',
        data: {
          station_uid: self.station_user_id
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        var _data$list, _data$tip;
        self.stat2.gendan = (_data$list = data === null || data === void 0 ? void 0 : data.list) !== null && _data$list !== void 0 ? _data$list : [];
        self.stat2.tip = (_data$tip = data === null || data === void 0 ? void 0 : data.tip) !== null && _data$tip !== void 0 ? _data$tip : '';
      });
    };
    self.activity = function () {
      //--店铺活动
      return itou.get({
        url: 'activity/doing',
        data: {
          station_user_id: self.station_user_id
        },
        rnd: false,
        notoken: true
      });
    };
    // self.getInfo = function(){//--获取店铺详情
    //     return itou.get({
    //         url: "shop",
    //         data: {
    // 			station_user_id: self.station_user_id,
    // 			get_remain: 0
    //         },
    // 		rnd: false,
    // 		notoken: true,
    // 		showErr: true//--接口超时是否跳转错误页面
    //         // data: {
    //         //     token: 'itouapi_f3cb23f95572b37250bce5547e5fbf5e6c105a60',
    //         //     station_user_id: 21249540
    //         // }
    //     })
    //     .then(function(data){
    //         self.data = new info(data);console.log(self.data);
    //         self.info = self.data;
    //         self.showBody = true;
    //     });
    // };

    Gray.plugin.define('self', [], function () {
      return self;
    });
    Gray.plugin.define('flag', [], function () {
      return 'latlng';
    });
    Gray.plugin.require('init.js');
    Gray.plugin.require('getlocation.js'); //--获取坐标
    Gray.plugin.require('openlocation.js'); //--打开微信地图
    Gray.plugin.require('onmenushareappmessage.js'); //--微信分享给好友
    Gray.plugin.require('onmenusharetimeline.js'); //--微信分享给好友

    self.getInfo = function () {
      var specialErr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      //--获取店铺详情
      return itou.get({
        url: 'shop',
        data: {
          station_user_id: self.station_user_id,
          get_remain: 0
          // referrer: 'user_shop_details',
          // from: window.prevPage || document.referrer
        },

        rnd: false,
        notoken: true,
        showErr: true,
        //--接口超时是否跳转错误页面
        specialErr: _objectSpread({
          //--特殊错误逻辑处理
          '-301': function _(rlt) {
            //--店铺被禁止访问时，强制跳转到下载页面
            // debugger
            Gray.$page.loadPage(config.download_url + 'download/' + self.station_user_id + '/?station_uuid=' + self.station_uuid);
          }
        }, specialErr)
        // data: {
        //     token: 'itouapi_f3cb23f95572b37250bce5547e5fbf5e6c105a60',
        //     station_user_id: 21249540
        // }
      }).then(function (data) {
        self.data = new info(data);
        console.log(self.data);
        self.info = self.data;
        self.notice.key += data.station_uuid;
        if (data.gactivity) {
          self.gactivity = data.gactivity;
        }
        self.showBody = true;
        self.simStatus = data && data.sim_status ? data.sim_status : 0; //开通权限
        localStorage.setItem('sim_status', self.simStatus); //存储店铺开通权限
        self.timer = setTimeout(function () {
          self.getSimCount();
        }, 5000);
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
    self.getLocation = function () {
      //--获取坐标
      return Gray.$plugin['getlocation.js']().then(function (data) {
        self.location = data;
        return self.location;
        //console.log(self);
      });
    };

    self.openlocation = function () {
      //--打开微信地图
      if (self.data.latitude && self.data.longitude) {
        Gray.$plugin['openlocation.js']();
      }
    };

    // self.setDefault = function(){//--设置默认店铺
    // 	// Gray.$page.loadPage("/user/shop/bind_succ/");
    // 	 return itou.get({
    // 		url: "shop/setmystation",
    // 		data: {
    // 			station_user_id: self.station_user_id
    // 		}
    // 	})
    // 	.then(function(data){
    // 		self.data.isDefault = "1";
    // 	});
    // };

    // self.cancelDefault = function(){//--设置默认店铺
    // 	return itou.get({
    // 		url: "shop/canceldefaultstation",
    // 		data: {
    // 			station_user_id: self.station_user_id
    // 		}
    // 	})
    // 	.then(function(data){
    // 		self.data.isDefault = "0";
    // 	});
    // };

    self.hasDefault = function () {
      return itou.get({
        url: 'user/GetDefaultStation',
        data: {},
        formatResult: false,
        autocache: true
      });
    };
    self.getJingcaiNum = function () {
      //--获取竞彩足球和竞彩篮球的赛事数量
      return itou.get({
        url: 'match/selectcount',
        autocache: true,
        data: {
          // station_user_id: itou.localJson.getJson("/user/shop/details/").id,
          // station_uuid: itou.localJson.getJson("/user/shop/details/").uuid
        },
        rnd: false,
        notoken: true,
        apiType: 'itApi'
      }).then(function (data) {
        self.jingcai.football = data.soccer_count > 0 ? data.soccer_count + '场比赛' : '暂无比赛';
        self.jingcai.basketball = data.basket_count > 0 ? data.basket_count + '场比赛' : '暂无比赛';
        self.jingcai.danchang = data.dc_count > 0 ? data.dc_count + '场比赛' : '暂无比赛';
        self.jingcai.guoguan = data.wl_count > 0 ? data.wl_count + '场比赛' : '暂无比赛';
        if (data.pool_prize) {
          self.SSQ.ssqPrize = data.pool_prize.SSQ > 0 ? '奖池' + itou.outil.moneyFormat(data.pool_prize.SSQ, 1) : '奖池0.0亿';
          self.SSQ.dltPrize = data.pool_prize.SuperLotto > 0 ? '奖池' + itou.outil.moneyFormat(data.pool_prize.SuperLotto, 1) : '奖池0.0亿';
          self.SSQ.p7Prize = data.pool_prize.P7 > 0 ? '奖池' + itou.outil.moneyFormat(data.pool_prize.P7, 1) : '奖池0.0万';
          self.SSQ.np7Prize = data.pool_prize.NP7 > 0 ? '奖池' + itou.outil.moneyFormat(data.pool_prize.NP7, 1) : '奖池0.0万';
        }
        if (data.end_time) {
          for (var i in data.end_time) {
            if (data.end_time[i]) {
              if (i == 'NineToTo' || i == 'ToTo') {
                self.endTime[i] = itou.outil.toShortDate(data.end_time[i]);
                if (self.endTime[i].indexOf('今日') == -1 && self.endTime[i].indexOf('明日') == -1) {
                  self.endTime[i] = self.endTime[i].split(' ')[0];
                }
              } else {
                self.endTime[i] = itou.outil.toShortDate(data.end_time[i]).split(' ')[0];
              }
            }
          }
        }
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
      });
    };
    self.hasZuijin = false; //--列表中是否包含最近访问的彩店
    self.listNum = 0;
    self.getList = function () {
      //--获取列表数据
      self.hasZuijin = false; //--列表中是否包含最近访问的彩店
      return itou.get({
        url: 'shop/list',
        data: {}
      }).then(function (data) {
        var entry_info = itou.localJson.getJson('__entry_info') || {},
          stationID = entry_info.station_id;
        if (data && data["default"] && data["default"].length > 0) {
          for (var i = 0, len = data["default"].length; i < len; i++) {
            var d = data["default"][i];
            if (stationID == d.station_user_id) {
              self.hasZuijin = true;
            }
            self.listNum += 1;
          }
        }
        if (data && data.not_default && data.not_default.length > 0) {
          for (var i = 0, len = data.not_default.length; i < len; i++) {
            var d = data.not_default[i];
            if (stationID == d.station_user_id) {
              self.hasZuijin = true;
            }
            self.listNum += 1;
          }
        }
      }).then(function () {
        var entry_info = itou.localJson.getJson('__entry_info') || {},
          stationID = entry_info.station_id;
        if (stationID && !self.hasZuijin) {
          self.listNum += 1;
        }
      });
    };
    self.getAdertising = function () {
      self.getAdertisingStatus().then(function (result) {
        var defer = $.Deferred();
        if (result.data.toString()) {
          self.advertising_data.adv_name = result.data.adv_name;
          self.advertising_data.adv_desc = result.data.adv_desc;
          self.advertising_data.img_url = result.data.img_url;
          self.advertising_data.dest_url = result.data.dest_url;
          self.advertising_data.dynamic_text = result.data.dynamic_text;
          defer.resolve();
        }
        return defer.promise();
      }).then(function (result) {
        return self.getAdvLive();
      }).then(function (result) {
        if (result.data) {
          self.advertising_data.live_status = result.data.notice;
          if (result.data.notice) {
            self.advertising_data.live_title = '关闭直播提醒';
            self.advertising_data.live_class = 'borderbtn_gray';
          } else {
            self.advertising_data.live_title = '开启直播提醒';
            self.advertising_data.live_class = '';
          }
          self.advertising_data.show = true;
        }
      });
    };
    self.setAdvLive = function () {
      var status = self.advertising_data.live_status ? 0 : 1;
      //console.log(self.advertising_data.live_status,status);
      return itou.get({
        url: 'adv/setnotice',
        data: {
          notice: status
        },
        formatResult: false
      });
    };
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
          pid: 1,
          station_id: self.station_user_id
        },
        formatResult: false
      });
    };
    self.getAdvNum = function () {
      return itou.get({
        url: 'adv/clickstat',
        data: {
          aid: 1,
          pid: 1,
          station_id: self.station_user_id
        },
        formatResult: false
      });
    };
    self.getSimUnreadCount = function () {
      return new Promise((resolve,reject)=>{return{"unread_count":0}});
      return itou.get({
        url: 'sim/unreadCount',
        data: {
          station_user_id: self.station_user_id
        },
        specialErr: {
          '-1001': function _() {}
        }
      });
    };
    self.simUnreadCount = 0; //客服未读条数
    self.simStatus = 0; //开通权限
    self.isShowConcatIcon = false; //是否展示在线咨询icon
    self.getSimCount = function () {
      var self = this;
      // itou.outil.checkLogin(true)
      // .then(function (is_login) {
      //     if (is_login && self.simStatus == 1) {
      if (self.simStatus == 1) {
        self.getSimUnreadCount().then(function (result) {
          self.simUnreadCount = result.unread_count;
          var curIsClickSim = localStorage.getItem('is_sim_click') || 0;
          if (curIsClickSim == 0 && self.simUnreadCount <= 0) {
            // 展示在线咨询
            self.isShowConcatIcon = true;
          } else {
            self.isShowConcatIcon = false;
          }
          if (self.simUnreadCount > 0) {
            var count = self.simUnreadCount;
            Vue.prototype.$kfmessage.push(self.station_user_id, {
              msg: '您有' + count + '条店铺重要消息未读',
              mty: 0
            });
          }
        });
      }
      //     }
      // });
    };
  };

  model.prototype.get_userinfo = function () {
    return itou.get({
      url: 'user/info',
      data: {
        token: itou.getToken()
      },
      noToast: true,
      formatResult: false
    });
  };
  model.prototype.user_location = function () {
    var self = this;
    var location = itou.localJson.getJson('itou_user_location');
    if (!location.lat && !location["long"]) {
      return self.wxinit().then(function () {
        return self.getLocation();
      }).then(function (location) {
        // console.log(location);
        location = location || {};
        location = location['wgs84'] || {};
        if (location.lat && location["long"]) {
          return itou.get({
            url: 'user/location',
            data: {
              lat: location.lat,
              lng: location["long"],
              station_id: self.station_user_id
            }
          }).then(function () {
            itou.localJson.setJson('itou_user_location', location);
          });
        }
      });
    }
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        // 'app-download-layer': appDownloadLayer,
        'img-shop': img_shop["a" /* default */],
        'gendan-baoguang': gendan_baoguang,
        'shareimg-shop': shareimgshop,
        'download-bar': download_bar["a" /* default */],
        'download-layer': download_layer,
        'hot-match-layer': hot_match_layer,
        'chdd-live-shop': shop,
        'img-avatar': img_avatar["a" /* default */],
        'data-tools-icon': data_tools_icon,
        'w500-icon': w500_icon,
        'w500-icon2': w500_icon2,
        'g-activity': g_activity,
        'live-adv': live_adv,
        // 'layer-qwnd': layerQwnd,
        // 'layer-dstd': layerDstd,
        // 'layer-first': layerFirst,
        'shop-live-icon': shop_live_icon
        // 'layer-lhyg': layerLhyg,
      },

      data: function data() {
        return new model();
      },
      mounted: function mounted() {
        itou.baiduHm('店铺首页', '用户访问'); //--百度统计
        var scene = Gray.$page.getUrlParam('scene'),
          //--入口场景
          station_id = Gray.$page.getUrlParam('station_id'); //--店铺id
        if (scene == 'scan' && !(station_id > 0)) {
          this.showIdErr();
          return;
        }
        var self = this,
          $data = self.$data;
        // self.openApp({
        // 	vm: self,
        // 	id: $data.station_user_id,
        // 	hideClose: true
        // });
        self.downloadapp({
          vm: self,
          id: $data.station_user_id,
          station_uuid: $data.station_uuid
        });
        // if (!self.isAPP) {
        //     var clipboard = new Clipboard('#weixin1').on('success', function (e) {
        //         var e = e || window.event;
        //         console.log(e);
        //         vm.showMsgBox('请打开微信，在搜索栏长按粘贴已复制账户，添加微信好友后与彩店联系。', '微信账户复制成功');
        //     }).on('error', function (e) {
        //         console.log(e);
        //     });
        // }
        var uuid_storage = itou.publicObj.uuid_storage;
        var station_uuid;
        if (uuid_storage && self.station_user_id) {
          station_uuid = uuid_storage.get(self.station_user_id);
        }
        if (!station_uuid) {
          //--检查是否有UUID，无果没有，则提示警告信息；点击知道了后缓存时间12小时，12小时后会重新触发提示；
          var key = '__user_shop_details_no_uuid';
          var ok = itou.localJson.getJson(key).ok;
          if (ok == 1) {
            return;
          }
          self.$refs.layer.alert.warning({
            text: '该进店码即将失效，请保存或者下载最新进店码二维码。',
            buttons: [{
              text: '知道了',
              fun: function fun() {
                itou.localJson.setJson(key, {
                  ok: 1
                }, 3600 * 12);
                if (self.isAPP || self.browser == 'mobile' || self.browser == 'iweb') {
                  self.gotoCode();
                }
              }
            }]
          });
        }

        //--在客服推送消息对象中注入回调函数，更新未读数量
        // if (window.simSocket) {
        //     window.simSocket.onMessage((data = {}) => {
        //         // console.warn(data);
        //         if (data.act == 'brq') {//--即时消息
        //             this.simUnreadCount = data.umc;
        //             this.isShowConcatIcon = data.umc <= 0;
        //         } else if (data.act == 'mcsp') {//--未读条数
        //             this.simUnreadCount = data.data;
        //             this.isShowConcatIcon = data.data <= 0;
        //         }
        //         try {
        //             this.$refs.showcontact.simUnreadCount = this.simUnreadCount;
        //         } catch (e) { }
        //     });
        //     window.simSocket.onOpen(() => {
        //         window.simSocket.getUmc();
        //     });
        // }
      },
      beforeCreate: function beforeCreate() {
        var _this = this;
        //--接口监听，所有接口执行完成后处理对应区域的高度
        var ajaxListener = new ajax_listener();
        ajaxListener["finally"](function () {
          // window.vm = this;
          console.log('接口全部执行完成');

          // const layers = [],
          //     notice = this.notice;
          // if (this.$refs?.adv_dstd?.isShow && this.$refs.layerDstd) {
          //     layers.unshift(this.$refs.layerDstd)
          // }
          // if (this.$refs.layerQwnd) {
          //     layers.push(this.$refs.layerQwnd)
          // }
          // const layerManage = new LayerManage(layers, notice);
          // layerManage.checkShow();

          // //--首单不中退广告弹层
          // if (!notice.isShow) {
          //     this.$refs.layerFirst && this.$refs.layerFirst.init();
          // }

          _this.$nextTick(function () {
            if (!_this.$refs.bannerMenu) {
              return;
            }
            var _this$$refs$bannerMen = _this.$refs.bannerMenu,
              _this$$refs$bannerMen2 = _this$$refs$bannerMen.className,
              className = _this$$refs$bannerMen2 === void 0 ? '' : _this$$refs$bannerMen2,
              _this$$refs$bannerMen3 = _this$$refs$bannerMen.children,
              children = _this$$refs$bannerMen3 === void 0 ? [] : _this$$refs$bannerMen3;
            //--如果子元素数量少于等于5，则高度class换为1行
            if (children.length <= 5) {
              className = className.split(' ');
              var myCLass = className.filter(function (n) {
                return n != 'hastwo';
              });
              myCLass.push('hasone');
              _this.$refs.bannerMenu.className = myCLass.join(' ');
            }
          });
        });
      },
      created: function created() {
        var self = this,
          $data = self.$data;
        if (self.Action.guanzhu) {
          //--关注公众号功能是否开启
          checkSubscribe().then(function () {
            try {
              window.codePromise.then(function () {
                if (itou.localJson.getJson('itou_is_subscribe').key != 1) {
                  self.showAlert('unBind');
                }
                // if(itou.localJson.getJson("itou_is_subscribe").islogin == 1){
                // 	$data.getList();
                // }
              });
            } catch (error) {
              console.error(error.message);
            }
          });
        }
        //$data.getAdertising();

        //--检查是否是精简模式，是否开启该功能
        if (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.selectcount) {
          $data.getJingcaiNum();
        }
        var specialErr = {
          '-1054': function _(rlt) {
            //--店铺已被注销
            // debugger
            self.info = {
              loggedOff: true
            };
            self.$nextTick(function () {
              self.$shopLoggedOff.show();
            });
          }
        };
        $data.getInfo(specialErr).then(function () {
          // if(self.$refs.hmBanner){
          // 	try {
          // 		self.$refs.hmBanner.$data.init({
          // 			station_user_id: $data.info.id,
          // 			station_uuid: $data.info.uuid
          // 		})
          // 	} catch (error) {

          // 	}
          // }
          //--检查是否是精简模式，是否开启该功能
          if (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.gdBanner) {
            if (self.$refs.gdBanner) {
              try {
                self.$refs.gdBanner.$data.init({
                  station_user_id: $data.info.id,
                  station_uuid: $data.info.uuid
                });
              } catch (error) {}
            }
          }
          if (self.$refs.adv_dstd) {
            //--大神推单
            try {
              self.$refs.adv_dstd.$data.init({
                station_uid: $data.info.id,
                station_uuid: $data.info.uuid,
                type: 'html',
                //--广告位类型
                api: {
                  //--广告位接口请求数据
                  url: 'chdd/getimg',
                  data: {
                    station_user_id: $data.info.id,
                    img_type: 'index'
                  },
                  rnd: false,
                  notoken: true
                },
                onload: function onload(adv) {
                  //--加载完成后回调
                  var data = adv.data;
                  var html = chddAdv(data);
                  adv.html = html;
                  // adv.isShow = !!adv.img;//--是否展示广告
                  adv.isShow = !!data.img; //--是否展示广告
                },

                onshow: function onshow(adv) {
                  itou.baiduHm('店铺首页', '神单推广加载'); //--百度统计
                },

                onclick: function onclick(adv) {
                  itou.baiduHm('店铺首页', '神单推广点击'); //--百度统计
                  //--渠道动作埋点
                  itou.channelHm.setBuriedPoints('dstd');
                  var url = '/monetize/tochdd/'; //--大神推单中转页面
                  url += '?type=index'; //--需要跳转到合作方首页
                  url += '&back=' + window.backurl; //--返回路径
                  url += '&id=' + $data.info.id; //--店铺ID
                  //--追加用户行为路径
                  try {
                    url = itou.bsrc.append(url, {
                      bsrc1: 'shop_index',
                      bsrc2: 'dstd_dstd'
                    });
                  } catch (error) {}
                  Gray.$page.loadPage(url); //--跳转到中转页面
                }
              });
            } catch (error) {}
          }
          self.$nextTick(function () {
            if (self.$refs.advert) {
              self.$refs.advert.init($data.station_user_id, function () {
                itou.baiduHm('店铺首页', '热点'); //--百度统计
              });
            }

            if (self.$refs.chddLiveShop) {
              self.$refs.chddLiveShop.get($data.station_user_id).then(function () {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                self.liveRooms = data.room_list || [];
                self.liveTip = data.tip || '';
                if (self.liveRooms.length) {
                  self.currAdv = 'live-adv';
                } else {
                  self.currAdv = 'g-activity';
                }
              });
            }
            // //--灵活用工弹层说明
            // if (self.$refs.layerLhyg) {
            //     self.$refs.layerLhyg.show();
            // }
          });
          //--hotRcmdList
          self.getChddList(); //--彩虹多多的广告入口
          self.getRcmdList(); //--彩虹多多推荐列表
          return self.getNotice();
        });
        $data.wxinit().then(function () {
          if (self.Action.share) {
            Gray.$plugin['onmenushareappmessage.js']();
            Gray.$plugin['onmenusharetimeline.js']();
          }
        });
        function chddAdv(data) {
          //--彩虹多多大神推单广告轮播内容
          var html = [];
          html.push('<div class="iconbox">');
          html.push('<div id="_discount_one"></div>');
          var honor = data.honor || [],
            len = honor.length,
            val;
          if (len == 0) {
            //--没有展示数据，直接展示原广告图
            html.push('<div class="datananbg"></div>');
            html.push('</div>');
            html.push('<p class="gray3">大神推单</p>');
            return html.join('');
          }
          var list = [];
          for (var i = 0; i < len; i++) {
            var str = honor[i];
            if (str.has('回报')) {
              //--替换回报率
              val = str.replace('回报', '').replace('%', '');
              list.push('<div><p><b>' + val + '</b><span class="font10">%</span></p><p class="font10">回报率</p></div>');
            }
            if (str.has('连红')) {
              //--替换连红数
              val = str.replace('连红', '');
              list.push('<div><p><b>' + val + '</b></p><p class="font10">连红</p></div>');
            }
            if (str.has('中')) {
              //--替换命中率
              val = str.split('中');
              try {
                val = Math.floor(val[1] / val[0] * 100);
                list.push('<div><p><b>' + val + '</b><span class="font10">%</span></p><p class="font10">命中率</p></div>');
              } catch (e) {
                console.error(e);
              }
            }
          }
          var l = list.length;
          if (l == 0) {
            //--处理后没有得到信息，直接展示原广告图
            html.push('<div class="datananbg"></div>');
            html.push('</div>');
            html.push('<p class="gray3">大神推单</p>');
            return html.join('');
          } else if (l == 1) {
            html.push('<div class="adv_dstdtipbox"><div class="txtanima">');
          } else if (l == 2) {
            html.push('<div class="adv_dstdtipbox"><div class="txtanima txtanima2">');
            list = list.concat(list[0]);
          } else if (l == 3) {
            html.push('<div class="adv_dstdtipbox"><div class="txtanima txtanima3">');
            list = list.concat(list[0]);
          }
          html.push(list.join(''));
          html.push('</div></div>');
          html.push('</div>');
          html.push('<p class="gray3">大神推单</p>');
          html = html.join('');
          return html;
        }
        //--检查是否是精简模式，是否开启该功能
        if (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.gendan) {
          // $data.getGendan();
          $data.getGendan2().then(function () {
            self.$nextTick(function () {
              var _self$$refs;
              (_self$$refs = self.$refs) === null || _self$$refs === void 0 || (_self$$refs = _self$$refs.gdBaoguan) === null || _self$$refs === void 0 || _self$$refs.init(self.stat2.gendan, self.stat2.tip);
            });
          });
        }
        if (!itou.localJson.getJson('is_allow' + self.station_user_id).status && (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.hemai)) {
          $data.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_user_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_user_id).status;
        }
        if (!itou.localJson.getJson('share_buy' + self.station_user_id).status && (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.hemai)) {
          $data.getHemaiStatus().then(function (result) {
            self.hemai_allow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_user_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_user_id).status;
        }
        //--检查是否是精简模式，是否开启该功能
        if (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.hemai) {
          $data.getHemai();
        }
        //--检查是否是精简模式，是否开启该功能
        if (!baseSetting.simplify || baseSetting.simplify && simplify.shopdetail.huodong) {
          $data.activity().then(function (result) {
            if (result.list && result.list.length > 0) {
              self.huodong.num = result.list.length;
              result.list.forEach(function (item) {
                if (item.aid == 5) self.huodong.has_rcmd = true;
              });
            }
            // 	if(result.list && result.list.length > 0){
            // 		self.huodong.num = result.list.length;
            // 		var r = [];
            // 		var obj = {};
            // 		result.list.forEach(function(item) {
            // 			if(item.itou_activity.title && r.length < 2){
            // 				if(!obj[item.aid]){
            // 					r.push(item.itou_activity.title);
            // 					obj[item.aid] = '1';
            // 				}
            // 			}
            // 		}, this);
            // 	if(r.length > 0){
            // 		self.huodong.desc = r.join("、") + "...";
            // 	}
            // }
          });
        }
      },
      beforeDestroy: function beforeDestroy() {
        var self = this;
        clearTimeout(self.timer);
      },
      computed: {
        lottNum: function lottNum() {
          var r = [0, 0, 0, 0],
            info = this.info;
          if (info.lottery.jczq && info.lottery.jczq.check) {
            r[0] += 1;
          }
          if (info.lottery.jclq && info.lottery.jclq.check) {
            r[0] += 1;
          }
          if (info.lottery.ToTo && info.lottery.ToTo.check) {
            r[0] += 1;
          }
          if (info.lottery.NineToTo && info.lottery.NineToTo.check) {
            r[0] += 1;
          }
          if (info.lottery.SuperLotto && info.lottery.SuperLotto.check) {
            r[2] += 1;
          }
          // if(info.lottery.P7 && info.lottery.P7.check){r[2] += 1;}
          if (info.lottery.NP7 && info.lottery.NP7.check) {
            r[2] += 1;
          }
          if (info.lottery.P3 && info.lottery.P3.check) {
            r[2] += 1;
          }
          if (info.lottery.P5 && info.lottery.P5.check) {
            r[2] += 1;
          }
          return r;
        }
      },
      methods: {
        // back: function(){//--返回
        //     var prevPage = window.prevPage || "";
        //     switch(true){
        //         case prevPage.has("/user/shop/list/"):
        //             Gray.$page.loadPage("/user/shop/list/");
        //             break;
        //         case prevPage.has("/project/detail/"):
        //             Gray.$page.loadPage("/project/detail/");
        //             break;
        //         case prevPage.has("/user/shop/search/"):
        //             Gray.$page.loadPage("/user/shop/search/");
        //             break;
        //         default:
        //             Gray.$page.loadPage("/");
        //     }
        // },
        gotoChdd: function gotoChdd(type) {
          if (type == 'index') {
            itou.baiduHm('首页精选推单', '查看更多'); //--百度统计
            //--渠道动作埋点
            itou.channelHm.setBuriedPoints('match_article');
          } else {
            //--渠道动作埋点
            itou.channelHm.setBuriedPoints('europe');
          }
          var url = '/monetize/tochdd/'; //--大神推单中转页面
          url += '?type=' + type; //--需要跳转到合作方首页
          url += '&back=' + window.backurl; //--返回路径
          url += '&id=' + this.info.id; //--店铺ID
          //--追加用户行为路径
          try {
            url = itou.bsrc.append(url, {
              bsrc1: 'shop_index',
              bsrc2: 'dstd_jxtd'
            });
          } catch (error) {}
          Gray.$page.loadPage(url); //--跳转到中转页面
        },

        gotoChdd1: function gotoChdd1(item) {
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('match_article');
          itou.baiduHm('首页精选推单', '内容点击'); //--百度统计
          var url = '/monetize/tochdd/'; //--大神推单中转页面
          url += '?type=' + item.url_type;
          url += '&back=' + window.backurl; //--返回路径
          url += '&id=' + this.info.id; //--店铺ID
          url += '&article_id=' + item.article_id;

          //--追加用户行为路径
          try {
            url = itou.bsrc.append(url, {
              bsrc1: 'shop_index',
              bsrc2: 'dstd_jxtd'
            });
          } catch (error) {}
          Gray.$page.loadPage(url); //--跳转到中转页面
        },

        change_adv_live: function change_adv_live() {
          var self = this,
            $data = self.$data;
          $data.setAdvLive().then(function (result) {
            if (result.data) {
              self.advertising_data.live_status = result.data.notice;
              if (result.data.notice) {
                self.advertising_data.live_title = '关闭直播提醒';
                self.advertising_data.live_class = 'borderbtn_gray';
                self.showMsgBox('已为您开通直播提醒，直播开始时将通过微信消息通知您，您可以随时关闭直播提醒。');
              } else {
                self.advertising_data.live_title = '开启直播提醒';
                self.advertising_data.live_class = '';
                self.showMsgBox('已关闭直播提醒，后续您将不会再收到直播消息。');
              }
            }
          });
        },
        look_adv_details: function look_adv_details() {
          var self = this,
            $data = self.$data;
          $data.getAdvNum().then(function (result) {
            Gray.$page.loadPage(self.advertising_data.dest_url);
          });
        },
        gotoHemai: function gotoHemai() {
          // 2023-03-22  临时拦截处理
          var self = this;
          self.$refs.layer.alert.show({
            text: '该功能维护中...',
            buttons: [{
              text: '知道了'
            }]
          });
          return;
          var self = this,
            url = '/hm/list/';
          // if(self.stat.gendan.avail == 0){return;}
          url += '?id=' + self.data.id;
          url += '&back=' + self.backurl;
          Gray.$page.loadPage(url);
        },
        gotoGendan: function gotoGendan() {
          // 2023-03-22  临时拦截处理
          var self = this;
          self.$refs.layer.alert.show({
            text: '该功能维护中...',
            buttons: [{
              text: '知道了'
            }]
          });
          return;
          itou.baiduHm('店铺首页', '跟单大厅点击'); //--百度统计
          var self = this,
            url = '/precommend/';
          // if(self.stat.gendan.avail == 0){return;}
          url += '?id=' + self.data.id;
          url += '&back=' + self.backurl;
          var key = '__precommend_search_options';
          itou.localData.setData(key, {
            //--关闭筛选展示层
            isShowSearch: true,
            content_hide: '',
            lottery_style: '',
            rcmd_type: '',
            is_fan: ''
          });

          //--追加用户行为路径
          try {
            url = itou.bsrc.append(url, {
              bsrc1: 'shop_index',
              bsrc2: 'rcmd_dstd'
            });
          } catch (error) {}
          Gray.$page.loadPage(url);
        },
        gotoHuodong: function gotoHuodong() {
          // 2023-03-22  临时拦截处理
          var self = this;
          self.$refs.layer.alert.show({
            text: '该功能维护中...',
            buttons: [{
              text: '知道了'
            }]
          });
          return;
          if (!config.isAPP) {
            this.$refs.downloadLayer.show();
            return;
          }
          var self = this,
            url = '/activity/';
          // if(self.stat.gendan.avail == 0){return;}
          url += '?id=' + self.data.id;
          url += '&name=';
          url += '&back=' + self.backurl;
          Gray.$page.loadPage(url);
        },
        openMap: function openMap() {
          var self = this,
            $data = self.$data;
          $data.openlocation();
        },
        doshowContact: function doshowContact() {
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('contact_station');
          var self = this;
          localStorage.setItem('is_sim_click', 1); //存储店铺开通权限
          self.isShowConcatIcon = false;
          self.showcontact({
            vm: self,
            station_user_id: self.station_user_id,
            sim_status: self.simStatus,
            //是否开通店内客服权限
            unread_count: self.simUnreadCount //客服未读条数
          });
        },

        // showBind: function(){
        // 	var self = this,
        // 		$data = self.$data;
        // 	if($data.info.bind.name){
        // 		$data.info.bind.text = "您当前已经绑定彩店［" + $data.info.bind.name + "］，确认绑定将自动替换绑定对象，是否确认绑定？";
        // 	}else{
        // 		$data.info.bind.text = "绑定后方便本店为您提供更多优质服务。";
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
        // 				var key = itou.outil.autocache.getKey("user/GetDefaultStation");//--获取接口缓存键值
        //                 itou.sessionData.delData("__apis_sessionData", key);//--清除接口缓存数据
        // 				self.showMsgBox("取消默认店铺成功！");
        // 			});
        // 	}else{
        // 		$data.setDefault()
        // 			.then(function(){
        // 				if(config.browser == "wx"){
        // 					self.showMsgBox("感谢您关注［" + $data.info.name + "］，享受更多优质服务请联系我们或到店咨询。", "绑店成功");
        // 					// $data.info.shareMess.link += "&station_id=" + $data.info.id;console.log($data.info.shareMess.link)
        // 					/**
        // 					return $data.getGuanzhu()
        // 						.then(function(result){
        // 							var key = itou.outil.autocache.getKey("user/GetDefaultStation");//--获取接口缓存键值
        // 							itou.sessionData.delData("__apis_sessionData", key);//--清除接口缓存数据
        // 							var arr = [];
        // 							arr.push("<div class='pad305 bgfff mb10 gray5 textl botder_b'>");
        // 							arr.push("<p class='mb6 line24'>关注微信服务号，随时找本店出票，中奖通知免费发送。</p>");
        // 							arr.push("</div>");
        // 							arr.push("<div class='pad505 bgfff textc border_t'>");
        // 							arr.push("<div class='font12 gray8b line18'>长按下面二维码<br/>选择“识别图中二维码”<br/>即可关注<br/><br/></div>");
        // 							arr.push("<div class='layer_koudaiimg'><img src='"+ self.codeimg + "' alt='口袋好店'></div>");
        // 							arr.push("</div>");
        // 							arr = arr.join("");
        // 							try {
        // 								if(result.data && result.data.is_subscribe == "1"){
        // 									self.showMsgBox("感谢您将［" + $data.info.name + "］设为默认出票彩店，后续提交将可直达本店。", "绑店成功");
        // 								}else{
        // 									self.showMsgBox(arr, "绑店成功", "", "暂不关注");
        // 								}
        // 							} catch (error) {
        // 								self.showMsgBox(arr, "绑店成功", "", "暂不关注");
        // 							}
        // 					});
        // 					*/
        // 				}
        // 			});
        // 	}
        // 	$data.info.bind.show = false;
        // },
        showShare: function showShare() {//--分享
          //console.log(Gray.$plugin["onmenushareappmessage.js"]);
          // Gray.$plugin["onmenushareappmessage.js"]();
        },
        tousu: function tousu() {
          var self = this,
            $data = self.$data,
            id = $data.data.id || 0;
          itou.localJson.delJson('/project/detail/');
          //--过渡：为将来用uuid完全替换数字id做准备
          itou.localJson.setJson('/user/shop/details/', {
            'id': id,
            uuid: self.info.uuid
          });
          Gray.$page.loadPage('/user/shop/complain/?back=' + this.backurl);
        },
        showAlert: function showAlert(key) {
          //--顯示彈窗
          var self = this,
            $data = self.$data;
          $data.currAlert = $data.currAlert == key ? null : key;
        },
        showShareInfo: function showShareInfo() {
          var self = this,
            $data = self.$data;
          $data.isShowShareInfo = !$data.isShowShareInfo;
        },
        gotoPlay: function gotoPlay(item, url) {
          if (item.check) {
            // var entry_info = {
            //     scene: "station_lottery",
            //     station_id: this.$data.info.id
            // };
            // itou.localJson.setJson("__entry_info", entry_info, -1);
            var link = '';
            switch (item.name) {
              case 'SYY':
                link = '/sd11x5/';
                break;
              case 'jczq':
                link = '/jingcai/';
                break;
              case 'jclq':
                link = '/jingcailanqiu/';
                break;
              case 'ToTo':
                link = '/zucai/';
                break;
              case 'NineToTo':
                link = '/zucai/ren9/';
                break;
              case 'SSQ':
                link = '/ssq/';
                break;
              case 'SuperLotto':
                link = '/dlt/';
                break;
              case 'KL8':
                link = '/kl8/';
                break;
              case 'P3':
                link = '/p3/';
                break;
              case '3D':
                link = '/3d/';
                break;
              case 'P5':
                link = '/p5/';
                break;
              case 'P7':
                link = '/qixingcai/';
                break;
              case 'NP7':
                link = '/np7/';
                break;
              case 'dc':
                link = url || '/danchang/';
                break;
              case 'WL':
                link = url || '/danchang/guoguan/';
                break;
              default:
                var path = item.name.replace('SYY', '').toLowerCase();
                link = '/' + path + '11x5/';
                break;
            }
            link += '?back=' + this.backurl;
            link += '&scene=station_lottery&station_id=' + this.$data.info.id;

            //--追加用户行为
            if (['jczq', 'jclq', 'dc', 'WL'].includes(item.name)) {
              link = itou.bsrc.append(link, {
                bsrc1: 'select_list',
                bsrc2: item.name.toLowerCase()
              });
            }
            Gray.$page.loadPage(link);
          } else {
            this.showMsgBox('该彩种店内可售，口袋好店尚未开通选号功能');
          }
        },
        gotoDingyue: function gotoDingyue() {
          //--跳转到消息订阅
          var self = this,
            $data = self.$data;
          if (!$data.isHasLogin) {
            self.showAlert('guanzhu');
          } else {
            $data.getGuanzhu().then(function (result) {
              try {
                if (result.data && result.data.is_subscribe == '1') {
                  Gray.$page.loadPage('/user/subscribe/weixin/?back=' + self.backurl);
                } else {
                  self.showAlert('guanzhu');
                }
              } catch (error) {
                self.showAlert('guanzhu');
              }
            });
          }
        },
        showIdErr: function showIdErr() {
          var err = '不能识别的二维码，请和店主核实二维码正确性后再扫码';
          // this.showConfirmBox(err, "", "", "__scan_id_err", "返回", "再扫一次");
        },

        gotoCode: function gotoCode() {
          var self = this,
            data = self.data;
          Gray.$page.loadPage('/user/shop/shopcode/?id=' + data.id + '&name=' + escape(encodeURIComponent(data.name)) + '&back=' + window.backurl);
        },
        emptyFun: function emptyFun() {
          var self = this,
            showcontact = self.$refs.showcontact;
          self.showcontact({
            vm: self,
            noOpen: true,
            station_user_id: self.station_user_id
          });
          if (self.isAPP && showcontact) {
            showcontact.showconcat_copy_weixin();
          }
        },
        //--展示收藏层
        showCollect: function showCollect() {
          var self = this;
          // url = window.location.href;
          if (config.browser == 'wx') {
            self.collect.showHelp = true;
          }
          self.collect.showNew = false;
        },
        //--关闭收藏和下载的警示弹窗
        closeNew: function closeNew() {
          var self = this;
          self.collect.showNew = false;
          self.$refs.downloadapp && (self.$refs.downloadapp.showNew = false);
        },
        showShareImgShop: function showShareImgShop() {
          //--mobile和iweb下，展示分享图片
          itou.baiduHm('店铺首页', '店铺分享点击'); //--百度统计
          var self = this;
          var uuid = self.station_uuid || itou.localJson.getJson('/user/shop/details/').uuid || ''; //--从映射获取uuid
          // self.$refs.shareimgshop.resize();
          self.$refs.shareimgshop.init({
            //--分享图片弹层
            title: '店铺二维码',
            // current: 0,
            url: 'share/getImg',
            data: {
              station_user_id: self.info.id,
              station_uuid: uuid,
              url: encodeURIComponent(self.info.shareMess.link + '&station_uuid=' + uuid),
              type: 'station_index',
              theme: [{
                val: 4,
                bgColor: '#1C1D66'
              }, {
                val: 1,
                bgColor: '#E4534B'
              }, {
                val: 2,
                bgColor: '#D53E10'
              }, {
                val: 3,
                bgColor: '#1C1D66'
              }]
            }

            // class: 'projetcode'
            // bgColor: '#D53E10'
          });
        },

        gotoPrizeHall: function gotoPrizeHall() {
          Gray.$page.loadPage('/prizehall/?back=' + window.backurl);

          // // 2023-03-11  临时修改为弹层提示， 之后恢复 以上跳转链接
          // var self = this;
          // self.$refs.layer.alert.show({
          //     text: '该功能维护中...',
          //     buttons: [
          //         {
          //             text: '知道了',
          //         }
          //     ]
          // });
          // self.$refs.layer.tip.show('该功能维护中...');
        },

        showNoticeSwiper: function showNoticeSwiper() {
          //--点击查看公告图片大图
          var self = this;
          if (self.notice.img && self.$refs.photoswiper) {
            self.$refs.photoswiper.initData([self.notice.img]); //--图片预览插件初始化数据
            self.$refs.photoswiper.open(0);
          }
        },
        /**
         * @function goHemaiList
         * @description 点击进入合买大厅
         */
        goHemaiList: function goHemaiList(lotteryStyle) {
          var self = this,
            url = '/hm/list/';
          // if(self.stat.gendan.avail == 0){return;}
          url += '?id=' + self.data.id;
          // eslint-disable-next-line camelcase
          url += '&lottery_style=' + lotteryStyle;
          url += '&back=' + self.backurl;
          Gray.$page.loadPage(url);
        },
        /**
         * @function goHemaiList
         * @description 点击进入合买大厅
         */
        goJikaiList: function goJikaiList(type) {
          // 2023-03-22  临时拦截处理
          var self = this;
          self.$refs.layer.alert.show({
            text: '该功能维护中...',
            buttons: [{
              text: '知道了'
            }]
          });
          return;
          var self = this,
            url = '/jikai/list/';
          url += '?id=' + self.data.id;
          url += '&type=' + type;
          url += '&back=' + self.backurl;
          Gray.$page.loadPage(url);
        },
        /**
         * @function gotoBalance
         * @description 跳转到店内账本页
         */
        gotoBalance: function gotoBalance() {
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('shop_balance');
          var url = "/user/shop/balance/?id=".concat(this.info.id, "&back=").concat(this.backurl);
          Gray.$page.loadPage(url);
        },
        /**
         * @function gotoBetList
         * @description 跳转到店内记录页面
         */
        gotoBetList: function gotoBetList() {
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('betlist');
          var url = "/user/betlist/?back=".concat(this.backurl);
          Gray.$page.loadPage(url);
        },
        /**
         * @function gotoUser
         * @description 跳转到“我的”页面
         */
        gotoUser: function gotoUser() {
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('user_info');
          var url = "/user/?back=".concat(this.backurl);
          Gray.$page.loadPage(url);
        },
        /**
         * @function gotoShopInfo
         * @description 跳转到店铺介绍页
         */
        gotoShopInfo: function gotoShopInfo() {
          //--渠道动作埋点
          itou.channelHm.setBuriedPoints('station_info');
          var url = "/user/shop/details/info/?back=".concat(this.backurl);
          Gray.$page.loadPage(url);
        },
        /**
         * @function triggerCurrAdv
         * @description 切换页面中间的直播广告和全网推荐活动的显示
         */
        triggerCurrAdv: function triggerCurrAdv() {
          if (this.currAdv == 'live-adv') {
            this.currAdv = 'g-activity';
          } else {
            this.currAdv = 'live-adv';
          }
        }
      }
    });
    vm.$on('msgbox_close', function (msg) {
      if (msg == '__scan_id_err') {
        Gray.$page.loadPage('/');
      }
    });
    vm.$on('msgbox_ok', function (msg) {
      if (msg == 'details_gotoBind') {
        //--点击去绑定
        var $data = vm.$data,
          isHasLogin = $data.isHasLogin,
          isHasDefault = $data.isHasDefault;
        if (!isHasLogin) {
          //--未登录
          itou.localData.setData('login_shop_bind', {
            id: $data.station_user_id
          });
          itou.auth.getCode('snsapi_userinfo');
        } else {//--已经登陆
        }
      }
    });
  };
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_component_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(71);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(72);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".download_bar {\n    position:fixed;\n    top: calc(48px + 2rem);\n    right: 0;\n    padding: 0 3px 0 10px;\n    height: 24px;\n    line-height: 24px;\n    background-color: #A70434;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 30px 0 0 30px;\n    z-index:10;\n}\n.download_bar .leftarrow:after {\n    top:4px;\n    border-color: #fff;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-bar/index.vue?vue&type=template&id=059c22d7&
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
    staticClass: "flexcenter download_bar",
    staticStyle: {
      display: "none"
    },
    on: {
      click: _vm.gotoDownload
    }
  }, [_c("p", {
    staticClass: "txt"
  }, [_vm._t("default")], 2), _vm._v(" "), _c("em", {
    staticClass: "leftarrow"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;

// CONCATENATED MODULE: ./src/components/public/download-bar/index.vue?vue&type=template&id=059c22d7&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-bar/index.vue?vue&type=script&lang=js&
/**
 * app下载提示条组件
 * @description app下载提示条组件
 * @author zhaoyf
 * @time 2022/11/23 18:49:19
 * @copyright 2022 itou
 */





var download_barvue_type_script_lang_js_Page = /*#__PURE__*/createClass_default()(function Page() {
  classCallCheck_default()(this, Page);
  defineProperty_default()(this, "id", '');
  defineProperty_default()(this, "uuid", '');
  defineProperty_default()(this, "link", '');
  this.id = itou.entry.get().station_id;
  if (this.id) {
    this.uuid = itou.shopUuid.storage.get(this.id);
    var download = itou.randomJerry["do"]('/download/').replace('/', '');
    this.link = "".concat(config.download_url + download + this.id, "/?comefrom=shop");
    if (this.uuid) {
      this.link += "&station_uuid=".concat(this.uuid);
    }
  }
});
var _data = new download_barvue_type_script_lang_js_Page();
/* harmony default export */ var download_barvue_type_script_lang_js_ = ({
  name: 'download-bar',
  data: function data() {
    return _data;
  },
  computed: {
    isShow: function isShow() {
      return !config.isAPP && this.link;
    }
  },
  methods: {
    gotoDownload: function gotoDownload() {
      if (!this.link) {
        return;
      }
      top.location.href = this.link;
    }
  }
});
// CONCATENATED MODULE: ./src/components/public/download-bar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_download_barvue_type_script_lang_js_ = (download_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-bar/index.vue?vue&type=style&index=0&id=059c22d7&lang=css&
var download_barvue_type_style_index_0_id_059c22d7_lang_css_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/download-bar/index.vue?vue&type=style&index=0&id=059c22d7&lang=css&

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(download_barvue_type_style_index_0_id_059c22d7_lang_css_["a" /* default */], options);



/* harmony default export */ var public_download_barvue_type_style_index_0_id_059c22d7_lang_css_ = (download_barvue_type_style_index_0_id_059c22d7_lang_css_["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/components/public/download-bar/index.vue?vue&type=style&index=0&id=059c22d7&lang=css&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/public/download-bar/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_download_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/public/download-bar/index.vue"
/* harmony default export */ var download_bar = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });