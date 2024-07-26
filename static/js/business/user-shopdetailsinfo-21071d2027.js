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
/******/ 		198: 0
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
/******/ 	deferredModules.push([358,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_public_img_img_shop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/**
 * 微信C端 店铺简介
 * BY zhaoyf    2016-08-16
 */

$(function () {
  var info = function info(data) {
    //--店铺详情数据构造函数
    var self = this;
    self.name = data.station_name; //--店名
    self.isCert = !!(data.has_cert_info == '1'); //--认证状态
    self.isCertDiff = data.open_diff_day || 0; //--认证状态文本
    self.isCertText = self.isCert ? '已认证' : '未认证'; //--认证状态文本
    self.isCertClass = self.isCert ? 'certokbg' : 'certnobg'; //--认证状态样式
    self.cert_time = self.isCert && new Date(data.cert_time) != 'Invalid Date' ? new Date(data.cert_time).Dateformat('店铺已于yyyy-MM-DD通过实名认证') : '';
    self.pic = data.station_img; //--店铺照片
    self.pingfen = data.mark_avg; //--店铺评分
    self.pinglun = data.mark_count; //--店铺评论
    self.address = data.address; //--店铺地址
    self.deal_users = data.deal_users; //--近30天出票人数
    self.services_txt = data.services_txt; //--领奖方式
    self.minMoney = data.money_limit; //--最小接单金额
    self.lottery = data.allowed_lottery_style; //--可出彩票彩种
    self.remain_score = data.remain_score; //--店内余额
    self.qq = data.station_qq; //--付款方式QQ
    self.weixin = data.station_weixin; //--付款方式微信
    self.plipay = data.station_alipay; //--付款方式支付宝
    self.longitude = data.longitude; //--坐标经度
    self.latitude = data.latitude; //--坐标纬度
    self.id = data.station_user_id;
    self.desc = data.station_desc;
    self.mobile = data.station_mobile;
    if (data.services) {
      if (data.services.checkout_prize && data.services.checkout_prize.checkout_min_prize) {
        //--是否支持待兑和待兑金额
        self.canDaidui = true;
        self.daiduiNum = data.services.checkout_prize.checkout_min_prize;
      }
      if (data.services.hold_ticket) {
        //--是否支持待存票
        self.canCunpiao = true;
      }
      if (data.services.pre_save) {
        //--是否支持预存票款
        self.canCunkuan = true;
      }
    }
    self.isDefault = data.is_default; //--是否默认店铺

    self.bind = {
      //--绑定的店铺信息
      id: null,
      name: null,
      text: '绑定本店后，后续选号提交可直接到店，让您出票更快。',
      show: false
    };
    var f = self.pingfen;
    var p = itou.outil.pingjia(f); //--获得评价
    self.pingjia = p;
    var desc = [];
    desc.push(self.name + '是实体彩票店，微信内可选号直接到店。');
    if (self.deal_users >= 5) {
      desc.push('近30天已有' + self.deal_users + '人在本店成功出票');
    }
    if (self.pingfen >= 3.5 && data.mark_count >= 5) {
      desc.push('，' + data.mark_count + '人评价本店' + self.pingjia);
    }
    desc.push('。');
    var id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
    self.shareMess = {
      title: self.name + ' - 口袋里的彩店',
      imgUrl: self.pic,
      desc: desc.join(''),
      link: config.base_url + 'user/shop/details/sharelink.html?id=' + id + '&scene=share'
    }; //console.log(self.shareMess);

    self.showContact = false;
  };
  var model = function model() {
    var self = this;
    self.len = 0;
    self.currAlert = null;
    self.wx = wx;
    self.dataReady = false;
    self.isHasDefault = false;
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
    self.data = {};
    self.info = {};
    self.station_user_id = itou.localJson.getJson('/user/shop/details/').id || Gray.$page.getUrlParam('id');
    self.getInfo = function () {
      //--获取店铺详情
      return itou.get({
        url: 'shop',
        data: {
          station_user_id: self.station_user_id
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        self.data = new info(data);
        self.getIsDefault();
        self.info = self.data;
      });
    };
    self.getIsDefault = function () {
      //--获取店铺是否是默认店
      return itou.get({
        url: 'shop/isdefault',
        data: {
          station_user_id: self.station_user_id
        }
      }).then(function (data) {
        self.info.isDefault = data.is_default;
      });
    };
    self.setDefault = function () {
      //--设置默认店铺
      return itou.get({
        url: 'shop/setmystation',
        data: {
          station_user_id: self.station_user_id
        }
      }).then(function (data) {
        self.data.isDefault = '1';
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
    self.hasDefault = function () {
      return itou.get({
        url: 'user/GetDefaultStation',
        data: {},
        formatResult: false,
        autocache: true
      });
    };
    self.cancelDefault = function () {
      //--设置默认店铺
      return itou.get({
        url: 'shop/canceldefaultstation',
        data: {
          station_user_id: self.station_user_id
        }
      }).then(function (data) {
        self.data.isDefault = '0';
      });
    };
    self.wxinit = function () {
      //--微信接口初始化
      return Gray.$plugin['init.js']();
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
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'img-shop': _components_public_img_img_shop_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
      },
      data: new model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        $data.getInfo().then(function () {
          self.dataReady = true;
        });
      },
      methods: {
        // back: function(){//--返回
        //     Gray.$page.loadPage("/user/shop/details/");
        // },
        doshowContact: function doshowContact() {
          var self = this;
          self.showcontact({
            vm: self,
            station_user_id: self.station_user_id
          });
        },
        dosetDefault: function dosetDefault() {
          var self = this,
            $data = self.$data;
          if ($data.data.isDefault == '1') {
            // $data.cancelDefault();
            self.showAlert('unbind');
          } else {
            // $data.setDefault();
            self.showAlert('bind');
          }
          console.debug($data.currAlert);
        },
        doBind: function doBind() {
          var self = this,
            $data = self.$data;
          self.showAlert();
          if ($data.data.isDefault == '1') {
            $data.cancelDefault().then(function () {
              var key = itou.outil.autocache.getKey('user/GetDefaultStation'); //--获取接口缓存键值
              itou.sessionData.delData('__apis_sessionData', key); //--清除接口缓存数据
              self.showMsgBox('您已成功将［' + $data.data.name + '］解除绑定，如您需再次建立关系，请重新选择店铺。', '解绑成功');
            });
          } else {
            $data.setDefault().then(function () {
              if (config.browser == 'wx') {
                return $data.getGuanzhu().then(function (result) {
                  self.showMsgBox('感谢您关注［' + $data.data.name + '］，享受更多优质服务请联系我们或到店咨询。', '绑店成功');
                  // var key = itou.outil.autocache.getKey("user/GetDefaultStation");//--获取接口缓存键值
                  // itou.sessionData.delData("__apis_sessionData", key);//--清除接口缓存数据
                  // var arr = [];
                  // arr.push("<div class='pad305 bgfff mb10 gray5 textl botder_b'>");
                  // arr.push("<p class='mb6 line24'>关注微信服务号，随时找本店出票，中奖通知免费发送。</p>");
                  // arr.push("</div>");
                  // arr.push("<div class='pad505 bgfff textc border_t'>");
                  // arr.push("<div class='font12 gray8b line18'>长按下面二维码<br/>选择“识别图中二维码”<br/>即可关注<br/><br/></div>");
                  // arr.push("<div class='layer_koudaiimg'><img src='"+ self.codeimg + "' alt='口袋好店'></div>");
                  // arr.push("</div>");
                  // arr = arr.join("");
                  // try {
                  //     if(result.data && result.data.is_subscribe == "1"){
                  //         self.showMsgBox("感谢您将［" + $data.data.name + "］设为默认出票彩店，后续提交将可直达本店。", "绑店成功");
                  //     }else{
                  //         self.showMsgBox(arr, "绑店成功", "", "暂不关注");
                  //     }
                  // } catch (error) {
                  //     self.showMsgBox(arr, "绑店成功", "", "暂不关注");
                  // }
                });
              }
            });
          }
        },

        openMap: function openMap() {
          var self = this,
            $data = self.$data;
          if (config.browser != 'wx') {
            return;
          }
          $data.openlocation();
        },
        showAlert: function showAlert(key) {
          //--顯示彈窗
          var self = this,
            $data = self.$data;
          $data.currAlert = $data.currAlert == key ? null : key;
        }
      }
    });
  };
});

/***/ })

/******/ });