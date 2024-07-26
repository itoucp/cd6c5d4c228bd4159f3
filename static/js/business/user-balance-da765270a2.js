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
/******/ 		169: 0
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
/******/ 	deferredModules.push([330,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_download_bar_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var vant_lib_pull_refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var vant_lib_pull_refresh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vant_lib_pull_refresh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant_lib_pull_refresh_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var vant_lib_pull_refresh_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vant_lib_pull_refresh_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_public_risk_statement_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 微信C端 余额管理
 * by zhaoyf    2016-08-17
 */



//--风险说明

Vue.use(vant_lib_pull_refresh__WEBPACK_IMPORTED_MODULE_1___default.a);
$(function () {
  Vue.directive('baiduhm', {
    //--全局指令，当元素插入到页面时，执行百度hm埋点
    inserted: function inserted(el, binding, vnode) {
      var value = binding.value,
        page = value.page,
        act = value.act;
      act.map(function (val) {
        //--对动作执行百度埋点
        try {
          itou.baiduHm(page, val); //--百度统计	
        } catch (e) {
          console.error(e);
        }
      });
    }
  });
  var payscan = $.payscan.init(['center']);
  var plugin = {
    init: 'init.js',
    chooseImage: 'camera/chooseimage.js'
  };
  Gray.plugin.require(plugin.init);
  Gray.plugin.require(plugin.chooseImage);
  // var swiper = new Swiper('#swiper-container-odds');

  // console.log(itou.userLocation);
  var Editor = function Editor(model) {
    //--微信、支付宝账号编辑
    var self = this;
    self.parent = model;
    self.type = ''; //--weixin || alipay || bank
    self.typeText = {
      'weixin': '微信',
      'alipay': '支付宝',
      'bank': '银行'
    };
    self.payment = ''; //--账号
    self.paymentName = ''; //--真实姓名
    self.paymentCode2 = ''; //--二维码
    self.paymentFullCode2 = ''; //--二维码(完整地址)
    self.img = '#code2';
    self.tempImg = null; //--临时图片，$(self.img).get(0),为空时的默认值;
    self.width = 110; //--图片实际长宽和等比缩放后的长宽，默认110
    self.height = 110;
    self.banks = [
    //--可以选择的银行
    {
      name: '工商银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankICBC',
      svgClass: 'bankICBC',
      value: 'ICBC'
    }, {
      name: '建设银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankCCB',
      svgClass: 'bankCCB',
      value: 'CCB'
    }, {
      name: '农业银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankABC',
      svgClass: 'bankABC',
      value: 'ABC'
    }, {
      name: '中国银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankBC',
      svgClass: 'bankBC',
      value: 'BOC'
    }, {
      name: '交通银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankBCs',
      svgClass: 'bankBCs',
      value: 'BCM'
    }, {
      name: '招商银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankCMB',
      svgClass: 'bankCMB',
      value: 'CMB'
    }, {
      name: '邮政储蓄银行',
      icon: '/static/images/svg/iconpay-426c7fa005.svg#bankPSBC',
      svgClass: 'bankPSBC',
      value: 'PSBC'
    }];
    self.showBanks = false;
    self.showOther = false;
    self.showBankCheck = false;
    self.bankType = ''; //--开户行
    self.bankNo = ''; //--银行卡号
    self.bankOther = ''; //--其他开户行

    self.doing = false;
    self.isShowHelp = false;
    self.swiper = null;
  };
  Editor.prototype.selectBank = function (bank) {
    this.bankType = bank.name;
    this.bankOther = '';
    this.showOther = false;
    this.showBanks = false;
  };
  Editor.prototype.selectOtherBank = function () {
    this.bankType = '';
    this.showBanks = false;
  };
  Editor.prototype.isOtherBank = function (name) {
    //--检查是否是自定义的银行
    var r = true;
    var _iterator = _createForOfIteratorHelper(this.banks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var bank = _step.value;
        if (bank.name == name) {
          r = false;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return r;
  };
  Editor.prototype.createTempImg = function (src) {
    //--创建实际尺寸的图片对象
    var self = this,
      image = new Image();
    image.onload = function () {
      var width = image.width,
        height = image.height;
      if (height > 500) {
        //--最大高度1000，超过之后等比缩放
        self.height = 500;
        self.width = 500 / height * width;
      } else {
        self.height = height;
        self.width = width;
      }
      self.tempImg = image;
      console.log(width, height, self.width, self.height);
    };
    image.src = src;
    // document.body.appendChild(image);
  };

  Editor.prototype.close = function () {
    //--关闭编辑层
    var self = this;
    self.type = ''; //--weixin || alipay
    self.payment = ''; //--账号
    self.paymentName = ''; //--账号
    self.paymentCode2 = ''; //--二维码
    self.paymentFullCode2 = ''; //--二维码
    self.bankType = ''; //--开户行
    self.bankNo = ''; //--银行卡号
    self.bankOther = ''; //--其他开户行
    self.showBanks = false;
    self.showOther = false;
    self.showBankCheck = false;
    try {
      self.swiper.slideTo(0);
      self.swiper.destroy();
    } catch (error) {}
    self.swiper = null;
  };
  Editor.prototype.open = function (type) {
    //--打开编辑层
    var self = this,
      model = self.parent;
    self.type = type;
    if (type == 'bank') {
      var _model$paymentType$ty, _model$paymentName$ty, _model$payment$type;
      var bankName = (_model$paymentType$ty = model.paymentType[type]) !== null && _model$paymentType$ty !== void 0 ? _model$paymentType$ty : '';
      if (self.isOtherBank(bankName)) {
        self.bankOther = bankName;
        self.showOther = !!bankName;
      } else {
        self.bankType = bankName;
      }
      self.paymentName = (_model$paymentName$ty = model.paymentName[type]) !== null && _model$paymentName$ty !== void 0 ? _model$paymentName$ty : '';
      self.bankNo = (_model$payment$type = model.payment[type]) !== null && _model$payment$type !== void 0 ? _model$payment$type : '';
    } else {
      self.payment = model.payment[type];
      self.paymentName = model.paymentName[type];
      self.paymentCode2 = model.paymentCode2[type] || '';
      self.paymentFullCode2 = model.paymentFullCode2[type] || '';
    }
  };
  Editor.prototype.chooseImage = function () {
    //--微信接口选择图片
    var self = this;
    self.imgSrcType = 'path';
    Gray.plugin.define("self", [], function () {
      return self;
    });
    return Gray.$plugin[plugin.chooseImage]();
  };
  Editor.prototype.getDataURL = function () {
    var self = this,
      img = self.tempImg,
      w = self.width,
      h = self.height,
      imageData;
    function getDataURL(size) {
      var canvas = document.createElement('canvas');
      canvas.width = size / h * w;
      canvas.height = size / h * h;
      // document.body.appendChild(canvas);
      var context = canvas.getContext('2d');
      console.log(w, h);
      context.drawImage(img, 0, 0, w, h);
      //context.drawImage(img, 0, 0, 1000, 1000, 0, 0, 1000, 1000);
      imageData = canvas.toDataURL('image/jpg'); //alert(imageData.length)
      return imageData;
    }
    var size = h;
    //while(getDataURL(size).length > 800000){
    //	size -= 100;
    //}
    getDataURL(size);
    return imageData;
  };
  Editor.prototype.uploadImage = function (file) {
    var self = this;
    return itou.get({
      url: 'shop/DrawUploadPayCode',
      data: {
        'payment_code': file
      },
      type: 'post',
      upload: true
    });
  };
  Editor.prototype.updataPayment = function (path) {
    var self = this;
    var account = self.type == 'bank' ? self.bankNo.replace(/ /g, '') : self.payment;
    return itou.get({
      url: '/shop/AddPayMethod',
      data: {
        'pay_method': self.type,
        'account': account,
        'real_name': self.paymentName,
        'payment_code': path,
        'bank_name': self.bankOther || self.bankType
      },
      // type: 'post',
      postMode: 'token&data'
    });
  };
  Editor.prototype.checkBank = function (showBankCheck) {
    var _this$paymentName;
    //-[\u4e00-\u9fa5]
    var realName = (_this$paymentName = this.paymentName) !== null && _this$paymentName !== void 0 ? _this$paymentName : '';
    var account = this.bankNo.replace(/ /g, '');
    var bankName = this.bankOther || this.bankType || '';
    if (!bankName) {
      vm.layer.alert.show({
        text: '未选择银行，编辑选择后可更快为您处理清账。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    } else if (!/^[\u4e00-\u9fa5]{1,10}$/.test(bankName)) {
      vm.layer.alert.show({
        text: '开户银行格式有误，请核对后提交。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    if (!realName) {
      vm.layer.alert.show({
        text: '未填银行卡姓名，编辑选择后可更快为您处理清账。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    } else if (/[^\u4e00-\u9fa5·•]/.test(realName)) {
      vm.layer.alert.show({
        text: '姓名格式有误，请核对后提交。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    if (!account) {
      vm.layer.alert.show({
        text: '未填卡号，编辑选择后可更快为您处理清账。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    this.showBankCheck = !!showBankCheck;
    return true;
  };
  Editor.prototype.checkData = function () {
    //--数据检查
    if (this.type == 'bank') {
      return this.checkBank();
    }
    var self = this,
      payment = self.payment || '',
      paymentName = self.paymentName || '',
      paymentCode2 = self.paymentCode2,
      typeText = self.typeText[self.type];
    if (!payment) {
      // vm.showMsgBox('未填' + typeText + '账号，编辑填写后可更快为您处理清账。', '', '', '知道了');
      vm.layer.alert.show({
        text: '未填' + typeText + '账号，编辑填写后可更快为您处理清账。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    if (payment.replace(/ /g, '') != payment) {
      // vm.showMsgBox(typeText + '账号不可输入空格，请重新输入。', '', '', '知道了');
      vm.layer.alert.show({
        text: typeText + '账号不可输入空格，请重新输入。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    if (!paymentName) {
      vm.layer.alert.show({
        text: '未填收款名最后一个字，为避免店铺为您处理清账时转错账，请编辑填写',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    if (!paymentCode2) {
      // vm.showMsgBox('未传' + typeText + '个人收款码，编辑上传后可更快为您处理清账。', '', '', '知道了');
      vm.layer.alert.show({
        text: '未传' + typeText + '个人收款码，编辑上传后可更快为您处理清账。',
        buttons: [{
          text: '知道了'
        }]
      });
      return false;
    }
    return true;
  };
  Editor.prototype.save = function () {
    //--保存数据
    var self = this,
      model = self.parent,
      type = self.type,
      path,
      fullPath;
    function uploadImage() {
      //--检查图片是否更改，如果更改则进行上传，否则直接修改账号信息
      if (self.type == 'bank') {
        return self.updataPayment('');
      } else if (self.paymentCode2 == model.paymentCode2[type]) {
        //--图片未修改，直接修改账号信息
        path = model.paymentCode2[type];
        fullPath = model.paymentFullCode2[type];
        return self.updataPayment(path);
      } else {
        var file = self.getDataURL();
        return self.uploadImage(file).then(function (data) {
          path = data.path;
          fullPath = data.full_path;
          return self.updataPayment(path);
        });
      }
    }
    if (!self.doing && self.checkData()) {
      self.doing = true;
      setTimeout(function () {
        self.doing = false;
      }, 1000);
      uploadImage().then(function (data) {
        self.doing = false;
        if (self.type == 'bank') {
          model.paymentType[self.type] = self.bankOther || self.bankType;
          model.payment[self.type] = self.bankNo.replace(/ /g, '');
          model.paymentName[self.type] = self.paymentName;
        } else {
          model.payment[self.type] = self.payment;
          model.paymentName[self.type] = self.paymentName;
          model.paymentCode2[self.type] = path;
          model.paymentFullCode2[self.type] = fullPath;
        }
        vm.layer.alert.succes({
          text: '保存成功',
          buttons: [{
            text: '知道了',
            fun: function fun() {
              self.close();
            }
          }]
        });
      });
    }
  };
  Editor.prototype.showHelp = function () {
    var self = this;
    self.isShowHelp = true;
    if (!self.swiper) {
      itou.outil.timmer.newTimmer({
        key: 'swiper-container-balance-help',
        timeout: 50,
        fun: function fun() {
          self.swiper = new Swiper('#swiper-container-balance-help', {
            pagination: '.swiper-pagination',
            paginationClickable: true
          });
          itou.outil.timmer.clearTimmer('swiper-container-balance-help');
        }
      });
    }
  };
  var info = function info(data) {
    var self = this;
    self.name = data.station_name; //--店名
    self.id = data.station_user_id;
    self.station_uuid = data.station_uuid;
    self.isCert = !!(data.has_cert_info == '1'); //--认证状态
    self.money = ''; //--余额
    self.bouns = ''; //--礼金
    self.bonusQuota = 0;
    self.mobile = data.station_mobile;
    self.weixin = data.station_weixin;
    self.qq = data.station_qq;
    self.alipay = data.station_alipay;
    self.province = data.province;
    self.isDefault = !!(data.is_default == '1'); //--是否是默认店
    self.moneyLoading = true;
  };
  var model = function model() {
    var self = this;
    self.alipay_activity_status = '';
    self.loading = true;
    self.editor = new Editor(self);
    self.money = '';
    self.canpay = false; //--是否开通扫码支付
    self.info = {};
    self.hasQZ = false; //--是否有正在处理的清账
    self.hasGetPayment = false;
    self.payment = {
      qq: '',
      alipay: '',
      weixin: '',
      bank: ''
    };
    self.paymentName = {
      qq: '',
      alipay: '',
      weixin: '',
      bank: ''
    };
    self.paymentType = {
      qq: '',
      alipay: '',
      weixin: '',
      bank: ''
    };
    self.paymentCode2 = {
      qq: '',
      alipay: '',
      weixin: '',
      bank: ''
    };
    self.paymentFullCode2 = {
      qq: '',
      alipay: '',
      weixin: '',
      bank: ''
    }; //--完整路径
    self.edit = {
      qq: '',
      alipay: '',
      weixin: '',
      bank: ''
    };
    self.pay_method = ''; //--选中的支付方式，默认''
    self.showQZ = false; //--展示清账界面
    self.showEdit = ''; //--展示修改清账方式账号
    self.showContact = false;
    self.showBody = false;
    self.listTime = 0;
    self.station_user_id = Gray.$page.getUrlParam('id');
    if (isNaN(self.station_user_id)) {
      self.station_user_id = itou.localJson.getJson('/user/shop/details/').id;
    }
    //--过渡：为将来用uuid完全替换数字id做准备
    self.station_uuid = Gray.$page.getUrlParam('station_uuid');
    self.project_id = Gray.$page.getUrlParam('project_id') || '';
    //--过渡：为将来用uuid完全替换数字id做准备
    itou.localJson.setJson('/user/shop/details/', {
      id: self.station_user_id,
      uuid: self.station_uuid
    });
    self.user_id = '';
    self.province = '';
    self.specialConfig = {}; //--店铺附加信息，比如是否允许异地付款
    self.list = [];
    self.listCount = 0;
    self.isLoading = false;
    self.showHelp = false;
    self.currItem = null;
    self.showNoMoney = false;
    self.project_maps = {};
    self.drawMethod = {}; //--店铺支持的清账方式

    if (!self.project_id) {
      self.canShowPay = true; //--是否允许自动弹出方案付款层 
    } else {
      var canShowPay = !itou.localData.getData('__balance_canShowPay')[self.project_id];
      self.canShowPay = canShowPay; //--是否允许自动弹出方案付款层
    }

    self.isLogin = function () {
      //--用户是否登录
      return itou.get({
        url: 'user/info',
        data: {}
      });
    };
    self.getDrawMethodStatus = function () {
      //--获取店铺清账方式开关信息接口
      return itou.get({
        url: 'shop/getDrawMethodStatus',
        data: {
          station_user_id: self.station_user_id,
          station_uuid: self.info.station_uuid
        }
      }).then(function (data) {
        self.drawMethod = data;
        // self.drawMethod.weixin = 0;
        // self.drawMethod.alipay = 0;
        // self.drawMethod.cash = 0;
      });
    };

    self.getPayment = function () {
      //--获取支付方式
      if (!self.hasGetPayment) {
        return itou.get({
          url: 'shop/balanceadd',
          data: {}
        }).then(function (data) {
          //console.log(data);
          self.hasGetPayment = true;
          // self.payment = {};
          self.payment.qq = data.qq;
          self.payment.alipay = data.alipay;
          self.payment.weixin = data.weixin;
          self.payment.bank = data.bank;
          self.paymentName.qq = data.qq_real_name;
          self.paymentName.alipay = data.alipay_real_name;
          self.paymentName.weixin = data.weixin_real_name;
          self.paymentName.bank = data.bank_real_name;
          self.paymentCode2.qq = data.qq_pic;
          self.paymentCode2.alipay = data.alipay_pic;
          self.paymentCode2.weixin = data.weixin_pic;
          self.paymentFullCode2.qq = data.full_qq_pic;
          self.paymentFullCode2.alipay = data.full_alipay_pic;
          self.paymentFullCode2.weixin = data.full_weixin_pic;
          self.paymentType.bank = data.bank_name;
        });
      } else {
        var defer = $.Deferred();
        defer.resolve();
        return defer.promise();
      }
    };
    self.setPayment = function (pay_method, account) {
      //--修改支付方式
      return itou.get({
        url: 'shop/addpaymethod',
        data: {
          pay_method: pay_method,
          account: account
        },
        postMode: 'token&data'
      });
    };
    self.getHasQZ = function () {
      //--获取是否有正在处理的清账
      return itou.get({
        url: 'user/existdraw',
        data: {
          station_user_id: self.station_user_id
        }
      }).then(function (data) {
        self.hasQZ = data.exist == '1';
      });
    };
    self.getYue = function () {
      //--获取余额
      self.info.moneyLoading = true;
      return itou.get({
        url: 'user/getMyRemain',
        data: {
          station_user_id: self.station_user_id
        }
      }).then(function (data) {
        self.info.moneyLoading = false;
        self.info.money = data.remain || 0 .toFixed(2);
        self.info.bouns = data.bonus_remain || 0 .toFixed(2);
      });
    };
    self.getInfo = function () {
      //--执行搜索
      return itou.get({
        url: 'shop',
        data: {
          station_user_id: self.station_user_id,
          get_remain: 0
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        self.info = new info(data);
        self.showBody = true;
      });
    };
    self.hasRemainRecord = function () {
      return itou.get({
        url: 'station/hasRemainRecord',
        data: {
          station_user_id: self.station_user_id
        }
      });
    };
    self.setDefault = function () {
      //--设置默认店铺
      return itou.get({
        url: 'shop/setmystation',
        data: {
          station_user_id: self.station_user_id
        }
      });
    };

    // self.checkData = function(){
    //     var method = self.pay_method;
    //     var Exp = /^\d+(\.\d{1,2})?$/
    //     if(!method){
    //         vm.showMsgBox("请选择清账方式！");
    //         return false;
    //     }else if(method != 'cash' &&!self.payment[method]){
    //         vm.showMsgBox("请先设置清账方式！");
    //         return false;
    //     }
    //     return true;
    // };

    self.doBalancedraw = function () {
      //--获取支付方式
      return itou.get({
        url: 'shop/balancedraw',
        data: {
          station_user_id: self.station_user_id,
          pay_method: self.pay_method,
          account: self.payment[self.pay_method],
          amount: self.money,
          source: itou.platform
        },
        postMode: 'token&data',
        specialErr: {
          '-200': function _() {
            var rlt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _rlt$data$bonus_quota = rlt.data.bonus_quota,
              bonus_quota = _rlt$data$bonus_quota === void 0 ? 0 : _rlt$data$bonus_quota;
            self.info.bonusQuota = bonus_quota;
            var _self$info = self.info,
              money = _self$info.money,
              bouns = _self$info.bouns;
            var remain = money - bouns; //--账本余额（不含礼金）
            var $bouns = self.money - remain; //--本次提交的理解你
            vm.showMsgBox("\n                            <p class=\"gray0 font18\">\u4E16\u754C\u676F\u671F\u95F4\uFF0C\u672C\u5E97\u793C\u91D1\u6E05\u8D26\u9650200/\u5929</p>\n                            <div class=\"mt15 mb15\">\u672C\u6B21\u793C\u91D1\u6E05\u8D26\u7533\u8BF7\u8D85\u989D<span class=\"fontred\">".concat($bouns - bonus_quota, "</span></div>\n                            <p style=\"text-align:left\" class=\"gray8e\">1\u3001\u793C\u91D1\u53EF\u7528\u4E8E\u672C\u5E97\u6D88\u8D39\uFF0C\u5728\u672C\u5E97\u6D88\u8D39\u4F18\u5148\u6263\u9664\u793C\u91D1<br />\n                            2\u3001\u4E2D\u5956\u5956\u91D1\u6E05\u8D26\u4E0D\u53D7\u9650\u5236\uFF0C\u53EF\u968F\u65F6\u63D0\u53D6<br />\n                            3\u3001\u672C\u5E97\u8BDA\u4FE1\u7ECF\u8425\uFF0C\u5982\u6709\u7591\u95EE\u53EF\u8054\u7CFB\u5E97\u5C0F\u4E8C\u5904\u7406</p>\n                        "), '', 'balance-max-over', '知道了');
          }
        }
      });
    };
    self.checkShopPayLimited = function (data) {
      //--获取店铺附加信息
      data.station_user_id = data.station_user_id || self.station_user_id;
      data.user_id = data.user_id || self.user_id;
      return itou.get({
        url: 'pay/checkShopPayLimited',
        data: data
      });
    };
    var prevPage = window.prevPage || '';
    if (prevPage.has('/user/shop/list/') || prevPage.has('/user/shop/details/')) {
      itou.localJson.setJson('user/shop/balance_prev', {
        prev: prevPage
      });
    }
    self.prev = itou.localJson.getJson('user/shop/balance_prev').prev;
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'download-bar': _components_public_download_bar_index_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
        'risk-statement': _components_public_risk_statement_index_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
      },
      data: new model(),
      mounted: function mounted() {
        var self = this;
        if (self.$refs.gameadv) {
          //--玩蜂游戏推广广告
          self.$refs.gameadv.init({
            shopid: self.station_user_id || '',
            ad_options: 'balance',
            type: 'min',
            page: '我的店内账本'
          }, function (url) {
            // itou.baiduHm('我的店内账本', '广告标签：玩蜂1');//--百度统计
            return url + '&from=balance';
          });
        }
      },
      created: function created() {
        var self = this,
          $data = self.$data;
        var flag = $.payscan.alipay_activity_time();
        self.alipay_activity_status = flag;
        self.isLogin().then(function (data) {
          // if(data.is_login){
          self.loading = false;
          self.user_id = data.uid;
          // $data.getSpecialConfig();
          $data.getHasQZ();
          $data.getInfo().then(function () {
            //--世界杯期间暂时移除
            // $data.getDrawMethodStatus();
            return $data.getYue();
          }).then(function () {
            return itou.get({
              url: 'shop/isDefault',
              data: {
                station_user_id: self.station_user_id
              }
            });
          }).then(function (data) {
            self.info.isDefault = data.is_default == '1';
          });

          // }else{
          //     Gray.$page.loadPage("/user/login/?back=" + self.backurl);
          // }
        });

        if (!isNaN(self.station_user_id)) {
          itou.payScan.getList({
            station_user_id: self.station_user_id
          }).then(function (data) {
            $data.list = data.list;
            $data.listCount = data.count;
            if (data.count > 0) {
              for (var i = 0; i < data.count; i++) {
                var item = data.list[i];
                $data.project_maps[item.project_id] = item;
              }
            }
          });
        }
        payscan.center.canPay({
          //--检查店铺是否开通扫码支付
          station_user_id: self.station_user_id,
          // type: "fixed_pay_status"
          scene: 'scan_store'
        }).then(function (rlt) {
          if (rlt.errcode == 0 || rlt.errcode == -86) {
            self.canpay = true;
          }
        });
        itou.userLocation.getProvince().then(function (data) {
          console.log(data);
          self.province = data.province;
        });
      },
      computed: {
        showPay: function showPay() {
          //--展示提示支付的弹层信息
          var self = this,
            $data = self.$data,
            project_id = $data.project_id,
            maps = $data.project_maps,
            item = maps[project_id] || {},
            money = $data.info.money;
          // console.log('computed_showPay:', $data.canShowPay, project_id, item, item.amount, money);
          var show = $data.canShowPay && !!project_id && !!item && item.amount <= money;
          if (show) {
            $data.currItem = item;
          }
          return {
            show: show,
            item: item
          };
        },
        page: function page() {
          var self = this,
            data = self.payment; //console.log(self);
          var editBtn = {
            //--编辑按钮文本显示
            qq: data.qq ? '修改' : '设置',
            alipay: data.alipay ? '修改' : '设置',
            weixin: data.weixin ? '修改' : '设置'
          };
          var payment = {
            //--支付方式显示
            qq: data.qq || '未设置',
            alipay: data.alipay || '未设置',
            weixin: data.weixin || '未设置'
          };
          return {
            editBtn: editBtn,
            payment: payment
          };
        },
        showYufu: function showYufu() {
          //--是否展示预付码按钮
          var self = this,
            _payscan = itou.setting.getData('payscan'); //--是否允许扫码付
          if (self.station_user_id == '52767553') {
            return true;
          } //--春光一点特殊处理
          // return true;
          console.log('computed_showYufu:', self.canpay, self.browser != 'mobile', _payscan);
          // return self.canpay && self.browser != 'mobile' && _payscan;
          return self.canpay && _payscan;
        },
        chooseModel: function chooseModel() {
          //--图片选择模式
          // return !this.isAPP || (this.isAPP && this.browser == 'ios') ? 'fileInput' : 'appChooser';
          return !this.isAPP ? 'fileInput' : 'appChooser';
        },
        //--总计可清账余额
        myMoney: function myMoney() {
          var _this$info = this.info,
            money = _this$info.money,
            bouns = _this$info.bouns;
          return (money - bouns).toFixed(2);
        }
      },
      watch: {
        drawMethod: {
          deep: true,
          handler: function handler(val) {
            if (val.weixin != 1 && val.alipay != 1 && val.bank != 1) {
              this.pay_method = 'cash';
            } else {
              this.pay_method = '';
            }
          }
        },
        /**
         * @function
         * @description 监听editor.bankNo的值，每4位数字追加一个空格
         */
        'editor.bankNo': function editorBankNo(val, oVal) {
          if (val === '') {
            return;
          }
          if (val === oVal) {
            return;
          }
          var regExp = /[^\d\s]/;
          if (regExp.test(val)) {
            this.editor.bankNo = oVal;
            return;
          }
          if (val.replace(/ /g, '').length > 24) {
            this.editor.bankNo = this.autoSpace4(val.replace(/ /g, '').slice(0, 24));
            return;
          }
          if (val.length - oVal.length == 1) {
            //--手动输入
            var lastLength = val.split(' ').pop().length; //--空格分割的最后一节字符长度
            if (lastLength == 4) {
              //--长度为4则追加空格
              this.editor.bankNo = this.editor.bankNo + ' ';
            } else {
              this.editor.bankNo = this.autoSpace4(this.editor.bankNo);
            }
          } else if (val.length - oVal.length == -1) {
            //--手动删除
            if (val.slice(-1) == ' ') {
              //--自后一位是空格的话则自动移除
              this.editor.bankNo = this.editor.bankNo.slice(0, -1);
            }
          } else {
            //--其它输入操作
            this.editor.bankNo = this.autoSpace4(this.editor.bankNo);
          }
        }
      },
      methods: {
        /**
         * @function autoSpace4
         * @description 每4个字符自动追加空格
         * @param {String} cardNo - 要处理的银行号码
         * @returns {String} 处理之后的银行号码
         */
        autoSpace4: function autoSpace4(cardNo) {
          return cardNo.replace(/ /g, '').replace(/(\d{4}?)/g, '$1 ');
        },
        // back: function(){//--返回
        //    var prevPage = this.$data.prev;
        //     switch(true){
        //         case !!prevPage:
        //             Gray.$page.loadPage(prevPage);
        //             break;
        //         default:
        //             Gray.$page.loadPage("/");
        //     }
        // },
        hidePay: function hidePay() {
          //--关闭自动付款提示弹层
          var self = this,
            $data = self.$data,
            project_id = $data.project_id,
            rlt = {};
          $data.canShowPay = false;
          rlt[project_id] = 1;
          itou.localData.setData('__balance_canShowPay', rlt);
        },
        toProject: function toProject() {
          var self = this,
            item = self.$data.currItem,
            object_type = item.object_type,
            maps = {
              'project': '/project/detail/',
              'launch_sharebuy': '/hm/add/',
              'join_sharebuy': '/project/hm/'
            },
            back = Gray.href || window.location.href;
          if (maps[object_type]) {
            try {
              self.hidePay();
            } catch (error) {}
            Gray.$page.loadPage(maps[object_type] + '?from=balance&id=' + item.project_id + '&p_uuid=' + (item.p_uuid || '0') + '&back=' + encodeURIComponent(back));
          }
        },
        gotoProject: function gotoProject(item) {
          var self = this;
          self.$data.currItem = item;
          if (self.info.money < item.amount) {
            // var msg = '当前店内账本不足，您可在店内柜台付款并告知店员处理。<br />还可付款后让店员为您加账到账本，每次出票可省去收款找零时间，极大提高为您成功出票的概率。<br /><br />';
            // self.showConfirmBox(msg, '店内账本不足', '__toProject', '__payScan_gotoSavedMa', '付款加账', '进入方案');
            self.$data.showNoMoney = true;
            return;
          }
          self.toProject();
        },
        formatMoney: function formatMoney() {
          var self = this,
            $data = self.$data;
          console.info($data.money);
          var money = ($data.money + '').replace(/[^\d\.]/g, '').split('.');
          if (money.length >= 2) {
            if (money[1].length > 0) {
              $data.money = money[0] + ('.' + money[1]).left(3);
            } else {
              $data.money = money[0] + '.';
            }
          }
          console.log($data.money);
        },
        selectMethod: function selectMethod(method) {
          //--选择清账方式
          var self = this;
          if (self.drawMethod[method] != 1) {
            return;
          } //--不支持的清账方式
          if (method == 'bank' && self.myMoney < 50) {
            this.layer.tip.show('银行卡最低清账数额为50，请选择其他清账方式');
            return;
          }
          self.$data.pay_method = method;
          self.checkData();
        },
        checkData: function checkData() {
          var self = this,
            method = self.pay_method,
            maps = {
              'weixin': '微信',
              'alipay': '支付宝',
              'bank': '银行'
            };
          var Exp = /^\d+(\.\d{1,2})?$/;
          function gotoEdit(msg) {
            vm.layer.confirm.show({
              text: msg,
              buttons: [, {
                text: '去编辑',
                fun: function fun() {
                  self.$data.editor.open(method);
                }
              }]
            });
          }
          if (!method) {
            // self.showMsgBox('请选择清账方式！');
            vm.layer.alert.show({
              text: '请选择清账方式！',
              buttons: [{
                text: '知道了'
              }]
            });
            return false;
          } else if (method != 'cash' && !self.payment[method]) {
            // self.showMsgBox('未填' + maps[method] + '账号，编辑填写后可更快为您处理清账');
            gotoEdit('未填' + maps[method] + '账号，编辑填写后可更快为您处理清账');
            return false;
          } else if (method != 'cash' && !self.paymentName[method]) {
            gotoEdit('未填收款名最后一个字，为避免店铺为您处理清账时转错账，请编辑填写');
            return false;
          } else if (method != 'cash' && method != 'bank' && !self.paymentCode2[method]) {
            // self.showMsgBox('未传' + maps[method] + '个人收款码，编辑上传后可更快为您处理清账');
            gotoEdit('未传' + maps[method] + '个人收款码，编辑上传后可更快为您处理清账');
            return false;
          }
          return true;
        },
        alipay_details: function alipay_details() {
          var url = '/activity/alipay/';
          url += '?back=' + window.backurl;
          Gray.$page.loadPage(url);
        },
        doshowContact: function doshowContact() {
          var self = this;
          self.showcontact({
            vm: self,
            station_user_id: self.info.id
          });
        },
        doGotoYufu: function doGotoYufu() {
          //--预付按钮跳转功能
          var self = this,
            _payscan = itou.setting.getData('payscan'); //--是否允许扫码付
          var url = '/pay/scan/savedmoney/';
          url += '?id=' + self.info.id;
          url += '&back=' + window.backurl;
          Gray.$page.loadPage(url);
          // if(self.info.canpay && self.browser != 'mobile' && _payscan){
          //payscan.center.gotoMa({key: "scan_store", id: self.info.id});
          // }else{
          //     var url = "/user/shop/balance/add/?id=" + self.info.id;
          //     url += "&back=" + window.backurl;
          //     Gray.$page.loadPage(url);
          // }
        },

        gotoYufu: function gotoYufu() {
          //--预付按钮跳转功能
          var self = this;
          // self.hasRemainRecord()
          //     .then(function(data){
          //         if(data.has_remain_record){
          //             self.doGotoYufu();
          //         }else{
          //             self.showMsgBox("将本店设为默认彩店，即可预存票款享受快捷出票服务。", "默认本店出票", "_user_balance_before_doGotoYufu", "设为默认出票彩店");
          //         }
          //     });
          /**
           * specialConfig.sch_1:是否允许开启异地付款;值为true时,允许;值为false时不允许
           */
          // if(!self.province && self.info.province && self.province != self.info.province){
          //     self.showMsgBox("您的位置与店铺不再同一地区，不支持异地付款。", "不支持异地付款", "__doback_url", "知道了");
          //     return;
          // }
          if (self.station_user_id == '52767553') {
            //--春光特殊处理
            var url = '/ybpay/';
            url += '?back=' + window.backurl;
            Gray.$page.loadPage(url);
            return;
          }
          itou.baiduHm('我的店内账本', '立即加账点击'); //--百度统计

          //--风险说明检查
          var riskStatement = this.$refs.riskStatement;
          //--如果未勾选风险说明，则中止
          if (riskStatement && !riskStatement.checkAgree()) {
            return;
          }
          payscan.center.canPay({
            //--检查店铺是否开通扫码支付
            station_user_id: self.station_user_id,
            // type: "fixed_pay_status"
            scene: 'scan_store'
          }, true)
          // .then(function(rlt){
          //     var defer = $.Deferred();
          //     if(rlt.errcode == 0){
          //         defer.resolve();
          //     }
          //     return defer.promise();
          // })
          .then(function () {
            return self.$data.checkShopPayLimited({}); //--检测店铺支付限制
          }).then(function (data) {
            if (data.pay_status) {
              //--允许提交
              if (self.info.isDefault) {
                self.doGotoYufu();
              } else {
                self.showConfirmBox('将本店设为默认彩店，即可预存票款享受快捷出票服务。', '默认本店出票', '', '_user_balance_before_doGotoYufu', '确定', '');
              }
            } else {
              self.showMsgBox(data.msg, data.title, '__doback_url', '知道了');
            }
          });
        },
        checkMoney: function checkMoney() {
          //--检查金额
          var self = this,
            method = self.pay_method,
            $data = self.$data;
          // if($data.hasQZ){
          //     return false;
          // }
          if ($data.info.money <= 0) {
            self.showMsgBox('你的店内账本为0，不能再清账啦~');
            return false;
          }
          if (!$data.money || $data.money == 0) {
            self.showMsgBox('请输入清账金额。');
            return false;
          }
          if ($data.money <= 0) {
            self.showMsgBox('清账金额必须大于0。');
            return false;
          }
          if ($data.money > $data.info.money) {
            self.showMsgBox('账本余额不足。');
            return false;
          }
          if ($data.money <= $data.info.money && $data.money > ($data.info.money - $data.info.bouns).toFixed(2) * 1) {
            self.showMsgBox("<div style=\"text-align:left\">\n                        <p>1\u3001\u793C\u91D1\u53EF\u7528\u4E8E\u672C\u5E97\u6D88\u8D39\uFF0C\u5728\u672C\u5E97\u6D88\u8D39\u4F18\u5148\u6263\u9664\u793C\u91D1</p>\n                        <p>2\u3001\u4E3A\u4E86\u9632\u6B62\u5957\u73B0\u884C\u4E3A\uFF0C\u793C\u91D1\u6682\u4E0D\u652F\u6301\u6E05\u8D26</p>\n                        <p>3\u3001\u4E2D\u5956\u5956\u91D1\u6E05\u8D26\u4E0D\u53D7\u9650\u5236\uFF0C\u53EF\u968F\u65F6\u63D0\u53D6</p>\n                        <p>4\u3001\u672C\u5E97\u8BDA\u4FE1\u7ECF\u8425\uFF0C\u5982\u6709\u7591\u95EE\u53EF\u8054\u7CFB\u5E97\u5C0F\u4E8C\u5904\u7406</p>\n                        </div>", '礼金暂不支持清账哦~', '', '知道了');
            return false;
          }
          if (method == 'bank' && $data.money < 50) {
            self.showMsgBox('银行卡最低清账数额为50，请修改清账数额或选择其他清账方式。');
            return false;
          }
          // if ($data.info.money > 0 && diff < itou.NP.strip($data.money)) {
          //     // self.showMsgBox('你的店内账本为：' + $data.info.money + '（含礼金：' + $data.info.bouns + '），最大清账金额为：' + diff + '<br />注：礼金是本店赠送的礼品，不可找零清账。');
          //     self.showMsgBox('你的店内账本为：' + $data.info.money + '（含礼金：' + $data.info.bouns + '），不能再清账啦~');
          //     return false;
          // }
          return true;
        },
        shenqingQZ: function shenqingQZ() {
          var self = this,
            $data = self.$data;
          // if(!self.checkMoney()){
          //     return;
          // }
          if (self.hasQZ) {
            return;
          }

          //--风险说明检查
          var riskStatement = this.$refs.riskStatement;
          //--如果未勾选风险说明，则中止
          if (riskStatement && !riskStatement.checkAgree()) {
            return;
          }

          //--世界杯期间暂时调整
          if (!$data.getDrawMethodStatus.loaded) {
            $data.getDrawMethodStatus().then(function () {
              $data.getDrawMethodStatus.loaded = true;
            });
          }
          //---------------------
          $data.getPayment().then(function () {
            self.showQZ = true;
            /**
             * ios软键盘导致页面无法操作的问题
             * 尝试修复
             */
            if (!self.inputBind) {
              $('input').on('blur', function () {
                window.scroll(0, 0); //让页面归位
              });

              self.inputBind = true;
            }
          });
        },
        doShowEdit: function doShowEdit(key) {
          var self = this,
            $data = self.$data;
          $data.showEdit = key;
          $data.edit[key] = $data.payment[key];
          /**
           * ios软键盘导致页面无法操作的问题
           * 尝试修复
           */
          if (!self.inputBind) {
            $('input').on('blur', function () {
              window.scroll(0, 0); //让页面归位
            });

            self.inputBind = true;
          }
        },
        doEdit: function doEdit() {
          //--提交
          var self = this;
          var key = self.showEdit;
          var val = self.edit[key];
          if (!val) {
            self.showMsgBox('您还没有输入账号无法保存。');
            return;
          }
          self.setPayment(key, val).then(function () {
            self.payment[key] = val;
            self.showEdit = null;
            var title = {
              qq: 'QQ账号',
              weixin: '微信号',
              alipay: '支付宝账号'
            };
            self.showMsgBox('<p class="mt10 font15">' + title[key] + '保存成功！</p><p class="mb10 font12 gray6">您的' + title[key] + '已保存为：' + val + '</p>');
          });
        },
        doSubmit: function doSubmit() {
          var self = this,
            $data = self.$data;
          if ($data.listTime != 0) {
            this.layer.tip.show('请求过于频繁，请5s后再试');
            return;
          }
          if (self.checkData() && self.checkMoney() && $data.listTime == 0) {
            $data.listTime = 5;
            var timmer = window.setInterval(function () {
              $data.listTime -= 1;
              if ($data.listTime == 0) {
                window.clearInterval(timmer);
              }
            }, 1000);
            $data.doBalancedraw().then(function () {
              $data.hasQZ = false;
              self.showQZ = false;
              // self.showMsgBox('您的清账申请已提交成功并通知店员，请到柜台前找店员处理。服务高峰期可能需要排队等待。', "提交成功", "_user_balance_dorefresh");
              vm.layer.alert.succes({
                title: '提交成功',
                text: '您的清账申请已通知店员，本店将尽快为您处理',
                buttons: [{
                  text: '知道了',
                  fun: function fun() {
                    Gray.$page.refresh();
                  }
                }]
              });
            });
          }
        },
        doRefresh: function doRefresh() {
          this.isLoading = true;
          Gray.$page.refresh();
        },
        balanceAll: function balanceAll() {
          //--全部清账
          this.money = (this.info.money - this.info.bouns).toFixed(2);
          // this.money = (this.info.money).toFixed(2);
        },

        clearBalance: function clearBalance(e) {
          //--清除清账金额
          this.money = '';
          try {
            $('#balance_money').focus();
          } catch (e) {}
        },
        clearPayment: function clearPayment(e) {
          //--清除账号
          this.editor.payment = '';
          try {
            $('#balance_editor_payment').focus();
          } catch (e) {}
        },
        clearPaymentName: function clearPaymentName(e) {
          //--清除姓名
          this.editor.paymentName = '';
          try {
            $('#balance_editor_paymentName').focus();
          } catch (e) {}
        },
        changeFile: function changeFile(e) {
          //--选择图片，非APP模式生效
          var self = this,
            $data = self.$data,
            el = e.srcElement;
          var reader = new FileReader();
          reader.onload = function (e) {
            $data.editor.paymentCode2 = e.target.result;
            $data.editor.paymentFullCode2 = e.target.result;
            $data.editor.createTempImg(e.target.result);
          };
          reader.readAsDataURL(el.files[0]);
          try {
            el.files.length = 0;
          } catch (error) {
            console.log(error);
          }
        },
        chooseFile: function chooseFile() {
          //--选择图片，APP模式生效
          var self = this,
            $data = self.$data;
          if (self.chooseModel == 'fileInput') {
            return;
          }
          $data.editor.chooseImage() //--选择图片
          .then(function (localIds) {
            $data.editor.paymentCode2 = localIds;
            $data.editor.paymentFullCode2 = localIds;
            $data.editor.createTempImg(localIds);
          });
        }
      }
    });
    vm.$on('msgbox_ok', function (msg) {
      if (msg == '__payScan_gotoSavedMa') {
        //--进入预存码页面
        vm.gotoYufu();
      }
      if (msg == '_user_balance_before_doGotoYufu') {
        vm.setDefault().then(function () {
          vm.doGotoYufu();
        });
      }
    });
    vm.$on('msgbox_close', function (msg) {
      if (msg == '_user_balance_dorefresh') {
        Gray.$page.refresh();
      }
      if (msg == '__toProject') {
        vm.toProject();
      }
      if (msg == 'balance-max-over') {
        var _vm$info = vm.info,
          money = _vm$info.money,
          bouns = _vm$info.bouns,
          bonusQuota = _vm$info.bonusQuota;
        var $bouns = bouns < bonusQuota ? bouns : bonusQuota;
        vm.money = (money * 1 - bouns * 1 + $bouns * 1).toFixed(2);
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