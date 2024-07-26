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
/******/ 		176: 0
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
/******/ 	deferredModules.push([337,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(22);
/**
 * 微信C端登录页面JS
 * by zhaoyf 2016-08-04
 */

$(function () {
  /* eslint camelcase:["error", {"allow": [
      "nick_name", "station_user_id", "login_token", "login_type", "grant_code",
      "fwv_jvLoginAuth", "fwv_share", "bind_key"
  ]}] */

  /* global merchant */

  /**
   * @class Model
   * @classdesc 页面数据原型
   */
  var Model = function Model() {
    var self = this;
    self.logined = true;
    self.num = 100;
    self.isDownload = !!window.isDownload; //--是否是归属于下载功能的页面
    self.product = itou.product;
    var androidJihuang = (typeof JGJVerificationPlugin === "undefined" ? "undefined" : _typeof(JGJVerificationPlugin)) == 'object' || (typeof YjyzPlugin === "undefined" ? "undefined" : _typeof(YjyzPlugin)) == 'object'; //--安卓拥有一键登录
    var iosJihuang = (typeof fwv_jvLoginAuth === "undefined" ? "undefined" : _typeof(fwv_jvLoginAuth)) == 'object'; //--ios拥有一键登录
    self.auth = {
      wechat: true,
      qq: false,
      jiguang: androidJihuang || iosJihuang
    };
    self.data = {
      nickName: null,
      //--昵称
      userName: null,
      //--手机号
      userPass: null,
      //--登陆密码
      checkCode: null,
      //--手机验证码
      showPass: false,
      //--是否显示密码
      vcodeText: '发送验证码',
      voiceTextShow: false
    };
    self.page = {
      model: 'quick',
      //--当前登录模式；password，密码登录；quick，快速登录
      oneKey: config.isAPP && self.auth.jiguang,
      //--是否展示一键登录
      password: 'hide',
      //--密码展示状态，show，展示；hide，隐藏
      passErr: false //--是否展示密码错误提示
    };

    self.isIwebApp = typeof fwv_share != 'undefined'; //--是否是IOS壳

    self.packagename = '';
    self.province = '';
    itou.channelHm.getBuriedPoints(); //--获取渠道动作埋点信息
  };

  //--限制注册提示信息
  Model.prototype.regLimit = function () {
    vm.layer.alert.show({
      title: '注册失败',
      text: '店铺注册功能已关闭',
      buttons: [{
        text: '知道了'
      }]
    });
  };

  //--数据验证
  Model.prototype.checkData = function () {
    var self = this;
    if (!self.data.userName || self.data.userName.length == 0) {
      vm.showToast('请输入手机号！');
      return false;
    }
    if (!itou.exp.testMobile(self.data.userName)) {
      vm.showToast('手机号格式不正确！');
      return false;
    }
    if (self.page.model == 'password') {
      //--密码登录模式，需要验证密码格式
      if (!self.data.userPass || self.data.userPass.length == 0) {
        vm.showToast('请输入登陆密码！');
        return false;
      }
      if (!itou.exp.testPass(self.data.userPass)) {
        vm.showToast('登陆密码格式不正确！');
        return false;
      }
    } else if (self.page.model == 'quick') {
      //--快速登录模式，需要验证手机验证码格式
      if (!self.data.checkCode || self.data.checkCode.length == 0) {
        vm.showToast('请输入验证码！');
        return false;
      }
      if (!itou.exp.testVal(self.data.checkCode, itou.exp.checkcode)) {
        vm.showToast('验证码格式不正确！');
        return false;
      }
    }
    return true;
  };
  Model.prototype.doLogin = function () {
    var self = this,
      entryInfo = itou.localJson.getJson('__entry_info') || {},
      stationID = entryInfo.station_id || '',
      data = {
        nick_name: self.data.nickName,
        mobile: self.data.userName,
        vcode: self.data.checkCode,
        station_user_id: stationID,
        province: self.province
      };
    // if (merchant && merchant.info && merchant.info.data && merchant.info.data.mid) {
    //     data.mid = merchant.info.data.mid;
    // }
    var _itou$channelHm = itou.channelHm,
      channel_id = _itou$channelHm.id,
      channel_type = _itou$channelHm.type,
      from_action = _itou$channelHm.action;
    data.channel_id = channel_id;
    data.channel_type = channel_type;
    data.from_action = from_action;
    // alert(JSON.stringify(data, ['channel_id', 'channel_type', 'from_action'], 2));

    //--推广人信息
    var mid = itou.localJson.getJson('_shop_entry_cache').mid;
    if (mid && !isNaN(mid) && mid > 0) {
      data.mid = mid;
    }
    return itou.get({
      url: 'user/reglogin',
      data: data,
      specialErr: {
        /**
         * @function
         * @description -192特殊错误处理
         */
        '-192': function _() {
          self.regLimit();
        }
      },
      postMode: 'token&data'
    });
  };
  Model.prototype.doPwLogin = function () {
    var self = this,
      entryInfo = itou.localJson.getJson('__entry_info') || {},
      stationID = entryInfo.station_id || '',
      data = {
        mobile: self.data.userName,
        password: self.data.userPass,
        station_user_id: stationID,
        province: self.province
      };
    // if (merchant && merchant.info && merchant.info.data && merchant.info.data.mid) {
    //     data.mid = merchant.info.data.mid;
    // }
    //--推广人信息
    var mid = itou.localJson.getJson('_shop_entry_cache').mid;
    if (mid && !isNaN(mid) && mid > 0) {
      data.mid = mid;
    }
    return itou.get({
      url: 'user/pwlogin',
      data: data,
      formatResult: false,
      postMode: 'token&data'
    });
  };
  Model.prototype.oneKeyReglogin = function (token) {
    // var myPackage;
    //--ios壳模式下，调用iweb插件
    // if(typeof fwv_share != 'undefined'){
    // 	myPackage = 'com.zhanzhuyun.kdkb';
    // }
    // else{
    // 	myPackage = 'com.itou.yun.cordova.koudai';
    // }
    // alert(JSON.stringify(token));
    var self = this,
      entryInfo = itou.localJson.getJson('__entry_info') || {},
      stationID = entryInfo.station_id || '';
    var data;
    if (typeof token == 'string') {
      data = {
        station_user_id: stationID,
        login_token: token,
        login_type: 'jiguang',
        "package": this.packagename,
        province: self.province
      };
    } else {
      data = {
        station_user_id: stationID,
        "package": this.packagename,
        province: self.province,
        login_token: token.token,
        login_type: token.type,
        op_token: token.opToken,
        operator: token.operator
      };
    }
    var _itou$channelHm2 = itou.channelHm,
      channel_id = _itou$channelHm2.id,
      channel_type = _itou$channelHm2.type,
      from_action = _itou$channelHm2.action;
    data.channel_id = channel_id;
    data.channel_type = channel_type;
    data.from_action = from_action;
    // alert(JSON.stringify(data));

    //--推广人信息
    var mid = itou.localJson.getJson('_shop_entry_cache').mid;
    if (mid && !isNaN(mid) && mid > 0) {
      data.mid = mid;
    }
    return itou.get({
      url: 'user/oneKeyReglogin',
      data: data,
      // formatResult: false
      specialErr: {
        /**
         * @function
         * @description -192特殊错误处理
         */
        '-192': function _() {
          self.regLimit();
        }
      }
    });
  };
  //--调用接口进行绑定
  Model.prototype.doBind = function () {
    // var self = this;
    return itou.get({
      url: 'user/wxbind',
      data: {}
    });
  };
  Model.prototype.getWXinfo = function () {
    //--获取微信用户信息
    var self = this;
    return itou.get({
      url: 'user/wxinfo',
      data: {}
    }).then(function (data) {
      if (data) {
        self.data.nickName = data.nickname;
      }
    });
  };
  Model.prototype.getUserInfo = function () {
    //--获取当前登录用户信息
    var self = this;
    return itou.get({
      url: 'user/info',
      data: {},
      formatResult: false //--不对结果进行预处理
    }).then(function (result) {
      var defer = $.Deferred();
      if (result === null || typeof result == 'undefined') {
        //--接口不正常
        itou.msg.toast = '网络错误，请重试';
        defer.reject();
      }
      console.log(result.errcode);
      if (result.errcode === 0) {
        //--接口正常
        defer.resolve(result.data);
      } else if (result.errcode == -1001) {
        //--返回未登录
        var code = Gray.$page.getUrlParam('code') || Gray.$page.getUrlParam('auth_code');
        if (!code && config.platform == 'wx') {
          //--如果页面没有Code，则重新获取
          defer.reject('getCode');
          self.logined = false; //--否则判定为未登录
          return defer.promise();
        }
        if (!vm.isAPP && merchant && merchant.info && merchant.info.canAuth) {
          //--合作方授权认证
          var merchantInfo = {};
          merchantInfo.type = merchant.info.data.mname;
          merchantInfo.partnerinfo = {
            mid: merchant.info.data.mid,
            grant_code: merchant.info.data.grant_code
          };
          self.partnerauth(merchantInfo).then(function (data) {
            if (data.is_bind == '1') {
              //--合作方登陆认证
              defer.resolve();
            }
          });
        }
        self.logined = false; //--否则判定为未登录
        console.log(self);
      } else {
        //--接口返回错误信息
        itou.msg.toast = result.msg;
        defer.reject();
      }
      return defer.promise();
    }).then(function () {
      var back = Gray.$page.getUrlParam('back') || '';
      back = back.replace('undefined', '');
      if (back) {
        itou.page.back();
        return;
      }
      var returnUrl = itou.localData.getData('__sys_window_return_url');
      returnUrl = returnUrl.url;
      var r = returnUrl || localStorage.getItem('returnUrl');
      r = r.replace('undefined', '');
      console.info(r);
      if (!!r && !r.has('/user/login/')) {
        Gray.$page.loadPage(r);
      } else {
        Gray.$page.loadPage('/');
      }
    }, function (act) {
      if (act == 'getCode' && ['wx', 'ali'].indexOf(config.browser) > -1) {
        itou.gotoLogin();
      }
    });
  };
  Model.prototype.sendVcode = function (vm, str) {
    //--发送短信
    var self = this;
    if (!self.data.userName || self.data.userName.length == 0) {
      var defer = $.Deferred();
      vm.showToast('手机号不能为空！');
      defer.reject();
      return defer.promise();
    } else if (!itou.exp.testMobile(self.data.userName)) {
      var _defer = $.Deferred();
      vm.showToast('手机号格式错误，请修改！');
      _defer.reject();
      return _defer.promise();
    } else {
      var entryInfo = itou.localJson.getJson('__entry_info') || {},
        stationID = entryInfo.station_id || '';
      return itou.get({
        url: 'sms/sendVcode',
        data: {
          mobile: self.data.userName,
          type: 'reglogin',
          chanl: str ? str : '',
          station_user_id: stationID
        },
        postMode: 'token&data'
      });
    }
  };
  Model.prototype.partnerauth = function (data) {
    //--第三方登陆
    // var self = this;
    return itou.get({
      url: 'user/partnerauth',
      data: data
    });
  };
  Model.prototype.apiCheckMobile = function () {
    //--检查手机格式
    var self = this;
    if (!self.data.userName || self.data.userName.length == 0) {
      var defer = $.Deferred();
      vm.showToast('手机号不能为空！');
      defer.reject();
      return defer.promise();
    } else if (!itou.exp.testMobile(self.data.userName)) {
      var _defer2 = $.Deferred();
      vm.showToast('手机号格式错误，请修改！');
      _defer2.reject();
      return _defer2.promise();
    } else {
      var _defer3 = $.Deferred();
      _defer3.resolve();
      return _defer3.promise();
    }
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      /**
       * @function
       * @description vue实例数据源
       */
      data: function data() {
        return new Model();
      },
      /**
       * @function
       * @description vue实例created生命周期
       */
      created: function created() {
        var self = this,
          $data = self.$data;
        $data.getUserInfo();
        // $data.getWXinfo();
        if (config.isAPP) {
          Gray.plugin.require('init.js');
          Gray.plugin.require('getpackagename.js'); //--微信授权
          Gray.$plugin['init.js']().then(function () {
            return Gray.$plugin['getpackagename.js']().then(function (packagename) {
              self.packagename = packagename;
            });
          });
        }
        itou.userLocation.getProvince().then(function (data) {
          console.log(data);
          self.province = data.province;
        });
      },
      beforeDestroy: function beforeDestroy() {
        //--重新埋点
        itou.channelHm.setBuriedPoints(itou.channelHm.action);
      },
      computed: {
        /**
         * @function canSubmit
         * @description 输入的手机、密码或验证码是否符合要求，符合要求允许提交
         * @returns {boolean}
         */
        canSubmit: function canSubmit() {
          var self = this;
          var r;
          if (self.page.model == 'password') {
            //--密码登录
            r = self.checkPassword() && self.checkMobile();
          } else if (self.page.model == 'quick') {
            //--快速登录
            r = self.checkMobileCode() && self.checkMobile();
          }
          return r;
        }
      },
      methods: {
        /**
         * @function clear
         * @description 清除文本框数据
         */
        clear: function clear(key) {
          var self = this,
            $data = self.$data;
          if ($data.data && $data.data[key]) {
            $data.data[key] = null;
          }
        },
        /**
         * @function loginCallback
         * @description 登陆成功后的回调
         */
        loginCallback: function loginCallback() {
          //--登陆成功后的回调
          var back = Gray.$page.getUrlParam('back');
          if (back) {
            itou.page.back();
            return;
          }
          // var isToBindShop = window.isToBindShop;
          // if(isToBindShop){//--是否是绑定店铺
          // 	Gray.$page.loadPage("/user/shop/bind_succ/");
          // }else{
          var returnUrl = itou.localData.getData('__sys_window_return_url');
          // console.log(returnUrl.url.replace(config.base_url, ""));
          if (returnUrl.url) {
            var date = new Date(returnUrl.date);
            var diff = Math.abs(new Date().DateDiff('s', date));
            if (diff >= 1800 * 1000) {
              Gray.$page.loadPage('/');
            } else if (returnUrl.url.replace(config.base_url, '') == 'user/setting/') {
              Gray.$page.loadPage('/');
            } else {
              itou.localData.setData('__sys_window_return_url', {});
              Gray.$page.loadPage(returnUrl.url);
            }
          } else {
            Gray.$page.loadPage('/');
          }
          // }
        },

        /**
         * @function back
         * @description 返回上一页
         */
        back: function back() {
          var returnUrl = itou.localData.getData('__sys_window_return_url');
          if (returnUrl.url) {
            var date = new Date(returnUrl.date);
            var diff = Math.abs(new Date().DateDiff('s', date));
            var url = returnUrl.url.replace(config.base_url, '');
            if (diff >= 1800 * 1000) {
              Gray.$page.loadPage('/');
            } else if (url == 'user/setting/' || url == 'user/' || url.has('user/?')) {
              Gray.$page.loadPage('/');
            } else {
              itou.localData.setData('__sys_window_return_url', {});
              Gray.$page.loadPage(returnUrl.url);
            }
          } else {
            itou.page.back();
          }
        },
        /**
         * @function doLogin
         * @description 开始验证码登录
         */
        doLogin: function doLogin() {
          var self = this,
            $data = self.$data;
          if (!self.canSubmit) {
            return;
          }
          if (self.doLogin.doing) {
            return;
          }
          self.doLogin.doing = true;
          setTimeout(function () {
            self.doLogin.doing = false;
          }, 3000);
          if ($data.checkData()) {
            $data.doLogin().then(function (data) {
              console.log(JSON.stringify(data));
              //--清理缓存中的用户信息
              itou.cache.$del('userInfo');
              self.loginCallback(); //--登陆成功，执行回调
            });
          }
        },

        /**
         * @function doPwLogin
         * @description 密码登录
         */
        doPwLogin: function doPwLogin() {
          var self = this,
            $data = self.$data;
          if (!self.canSubmit) {
            return;
          }
          if ($data.checkData()) {
            $data.doPwLogin().then(function (result) {
              var errcode = result.errcode;
              if (errcode == -10001 || errcode == -10002) {
                //--用户账户或密码错误
                self.page.passErr = true; //--展示账户密码错误提示
              } else if (errcode == -10003) {
                //--密码错误次数较多
                itou.msg.toast = '密码错误次数过多，请在1分钟后重试';
              } else if (errcode == -192) {
                $data.regLimit();
              } else {
                itou.formatResult({
                  formatResult: true
                }, result).then(function () {
                  //--清理缓存中的用户信息
                  itou.cache.$del('userInfo');
                  self.loginCallback(); //--登陆成功，执行回调
                });
              }
            });
          }
        },

        /**
         * @function sendVcode
         * @description 发送验证码
         */
        sendVcode: function sendVcode() {
          //--发送验证码
          var self = this,
            $data = self.$data,
            voiceTime = 85,
            messageTime = 100,
            num = messageTime;
          if ($data.data.vcodeText != '发送验证码') {
            //--计数过程中禁止重新发送
            return;
          }
          var myTimmer;
          self.num -= 1;
          myTimmer = window.setInterval(function () {
            //--倒计时开始
            num -= 1;
            if (num == voiceTime) {
              $data.data.voiceTextShow = true;
            }
            if (num > voiceTime) {
              $data.data.voiceTextShow = false;
            }
            if (num > 0) {
              $data.data.vcodeText = num + '秒后重新获取';
            } else {
              //--倒计时结束
              window.clearInterval(myTimmer);
              $data.data.vcodeText = '发送验证码';
              num = messageTime;
            }
          }, 1000);
          $data.sendVcode(self).then(function (result) {
            //--验证码发送成功
            self.showToast('验证码发送成功！');
            // window.clearTimeout(myTimmer);
            // $data.data.vcodeText = "发送验证码";
            // num = 100;
            console.log(result);
          }, function () {
            //--验证码发送失败
            window.clearTimeout(myTimmer);
            $data.data.vcodeText = '发送验证码';
            num = messageTime;
          });
        },
        /**
         * @function sendVoice
         * @description 发送语音验证码
         */
        sendVoice: function sendVoice() {
          var self = this,
            $data = self.$data;
          $data.sendVcode(self, 'audio').then(function (result) {
            console.log(result);
            $data.data.voiceTextShow = false;
            vm.showToast('将以电话形式告知您验证码，请注意接听！', '', 5000);
          });
        },
        /**
         * @function wechatAuth
         * @description app环境下，微信一键登录
         */
        wechatAuth: function wechatAuth() {
          var self = this;
          if (!self.isAPP) {
            return;
          }
          Gray.plugin.define('self', [], function () {
            return self;
          });
          Gray.plugin.require('init.js');
          Gray.plugin.require('auth/wechat.js'); //--微信授权
          Gray.$plugin['init.js']().then(function () {
            return Gray.$plugin['auth/wechat.js']();
          }).then(function (r) {
            return self.$data.partnerauth({
              type: 'wechat',
              partnerinfo: r
            });
          }).then(function (data) {
            if (data.is_bind == '1') {
              self.back();
            } else {
              // var backurl = window.backpaths[0] || "/";
              // backurl = encodeURIComponent(backurl);
              itou.sessionData.setData('__partnerauth_result', {
                data: {
                  bind_key: data.bind_key,
                  headimgurl: data.headimgurl
                }
              });
              Gray.$page.loadPage('/user/bindtel/?back=' + window.backurl);
            }
          });
        },
        /**
         * @function qqAuth
         * @description qq一键登录
         */
        qqAuth: function qqAuth() {
          var self = this;
          if (!self.isAPP) {
            return;
          }
          Gray.plugin.define('self', [], function () {
            return self;
          });
          Gray.plugin.require('init.js');
          Gray.plugin.require('auth/qq.js'); //--微信授权
          Gray.$plugin['init.js']().then(function () {
            return Gray.$plugin['auth/qq.js']();
          }).then(function (r) {
            return self.$data.partnerauth({
              type: 'qq',
              partnerinfo: r
            });
          }).then(function (data) {
            if (data.is_bind == '1') {
              self.back();
            } else {
              // var backurl = window.backpaths[0] || "/";
              // backurl = encodeURIComponent(backurl);
              itou.sessionData.setData('__partnerauth_result', {
                data: {
                  bind_key: data.bind_key,
                  headimgurl: data.headimgurl
                }
              });
              Gray.$page.loadPage('/user/bindtel/?back=' + window.backurl);
            }
          });
        },
        /**
         * @function checkPassword
         * @description 检查密码是否符合格式
         * @returns {boolean}
         */
        checkPassword: function checkPassword() {
          var self = this;
          return itou.exp.testPass(self.data.userPass);
        },
        /**
         * @function checkMobile
         * @description 检查手机号是否符合格式
         * @returns {boolean}
         */
        checkMobile: function checkMobile() {
          var self = this;
          return itou.exp.testMobile(self.data.userName);
        },
        /**
         * @function checkMobileCode
         * @description 检查手机验证码是否符合格式
         * @returns {boolean}
         */
        checkMobileCode: function checkMobileCode() {
          var self = this;
          return itou.exp.testVal(self.data.checkCode, itou.exp.checkcode);
        },
        /**
         * @function showPass
         * @description 展示货隐藏密码
         */
        showPass: function showPass() {
          var self = this,
            page = self.page;
          switch (page.password) {
            case 'show':
              page.password = 'hide';
              break;
            case 'hide':
              page.password = 'show';
              break;
            default:
              page.password = 'hide';
              break;
          }
        },
        /**
         * @function changeModel
         * @description 切换登录模式
         */
        changeModel: function changeModel(model) {
          var self = this;
          if (self.page.model != model) {
            self.page.model = model;
          }
        },
        /**
         * @function oneKeyLogin
         * @description 极光一键登录
         */
        oneKeyLogin: function oneKeyLogin() {
          var self = this;
          Gray.plugin.require('init.js');
          Gray.plugin.require('auth/jiguang.js'); //--微信授权
          Gray.plugin.require('getpackagename.js'); //--微信授权
          Gray.$plugin['init.js']().then(function () {
            self.$refs.bustling.start({
              timeout: 6000
            });
            return Gray.$plugin['auth/jiguang.js']();
          }).then(function (msg) {
            self.$refs.bustling.end();
            //alert(msg)
            self.$data.oneKeyReglogin(msg).then(function () {
              //--清理缓存中的用户信息
              itou.cache.$del('userInfo');
              self.loginCallback(); //--登陆成功，执行回调
            });
          }, function (err) {
            self.$refs.bustling.end();
            //alert(err.message)
            if (err.message) {
              self.showToast(err.message);
            }
          });
        }
      }
    });
  };

  //pageLoad();
});

/***/ })

/******/ });