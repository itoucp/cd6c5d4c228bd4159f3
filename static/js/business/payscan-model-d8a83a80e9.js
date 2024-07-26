/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 289);
/******/ })
/************************************************************************/
/******/ ({

/***/ 289:
/***/ (function(module, exports) {

/**
 * 微信C端		扫码付款数据原型
 * by	zhaoyf	2017-08-14 14:24:47
 */
(function () {
  /**
  * 功能设计：
  * 1.entrance功能：入口功能，获取pay_token参数，根据"pay/scan"接口返回类型，进行跳转操作
  * 2.code2功能：二维码生成功能，用来生成二维码图片，二维码url为接口与参数的拼接str
  * 3.auth功能：授权功能，需要能实现静默授权，并且要解决与原有授权功能的冲突
  * 4.project功能：方案详情按钮处理，接收页面方案信息和店铺信息，对按钮形态进行处理，并根据店铺状态决定跳转链接
  * 5.doOrder功能：预付定单功能，根据当前页面模式，生成预付订单，并执行跳转
  * 6.appoint功能：指定出票功能，包含未接单列表、选择操作、提交操作，并调用doOrder功能生成预付订单
  * 7.advance功能：预存票款功能
  * 8.fast功能：快速付款功能
  * 9.outil功能：工具箱功能，提供额外的方法
  * 10.payRlt功能：支付结果功能，呈现支付结果
  * 11.center功能：控制中心，负责跳转处理
  */

  var Entrance = function Entrance(Model) {
    //--扫码入口功能
    itou.dataModel.config({
      key: 'scan_pay_entrance_project_item',
      opts: {
        id: {
          t: '方案ID',
          k: 'lottery_id',
          d: ''
        },
        partner: {
          t: '来源',
          k: 'partner',
          d: 'itou'
        },
        endTime: {
          t: '结束时间',
          k: '',
          d: function d(data, me) {
            var t = data.EndTime;
            return t.Dateformat('MM-DD HH:NN');
          }
        },
        money: {
          t: '金额',
          k: 'LaunchMoney',
          d: 0
        },
        type: {
          t: '玩法',
          k: 'LotteryType_cn',
          d: ''
        },
        type1: {
          t: '玩法_英文',
          k: 'LotteryType',
          d: ''
        },
        userName: {
          t: '发起人用户名',
          k: 'user_name',
          d: ''
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('scan_pay_entrance_project_item');
    itou.dataModel.config({
      key: 'scan_pay_entrance',
      opts: {
        share_buy_m: {
          t: '合买金额',
          k: '',
          d: 0
        },
        pay_token: {
          t: '付款token',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('pay_token') || '';
          }
        },
        code: {
          t: '授权code',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('code') || Gray.$page.getUrlParam('auth_code') || '';
          }
        },
        islogin: {
          t: '是否登录',
          k: '',
          d: false
        },
        isauth: {
          t: '是否授权',
          k: '',
          d: false
        },
        scene: {
          t: '扫码场景',
          k: '',
          d: ''
        },
        errcode: {
          t: '错误码',
          k: '',
          d: null
        },
        errMsg: {
          t: '错误信息',
          k: '',
          d: null
        },
        info: {
          t: '接口返回结果',
          k: '',
          d: {}
        },
        station: {
          t: '店铺信息',
          k: '',
          d: {}
        },
        //--快速付款和入口公用1个页面，根据页面模式不同而展示
        pageModel: {
          t: '页面模式',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('type') || '';
          }
        },
        //entrance || fast
        isReady: {
          t: '是否加载完成',
          k: '',
          d: false
        },
        project: {
          t: '方案码所代表的方案信息',
          k: '',
          d: null
        },
        orderInfo: {
          t: '生成与订单所需信息',
          k: '',
          d: null
        },
        loader: {
          t: '页面加载中元素对象',
          k: '',
          d: null
        },
        unique_name: {
          t: '用户隐藏名',
          k: '',
          d: null
        }
      }
    });
    var entrance = itou.dataModel.dataFactory.create('scan_pay_entrance');
    entrance.prototype.checkCode = function () {
      //--验证授权信息
      var self = this,
        code = self.code;
      var defer = $.Deferred();
      if (!code) {
        defer.resolve();
      } else {
        itou.get({
          url: 'user/auth',
          data: {
            code: code
          },
          formatResult: false
        }).then(function (rlt) {
          if (rlt.errcode == 0) {
            defer.resolve();
          } else {
            var msg = rlt.msg;
            itou.msg.toast = msg;
            itou.outil.timmer.newTimmer({
              key: 'pay_scan_err_' + rlt.errcode,
              timeout: 3000,
              fun: function fun() {
                window.vm.back();
              }
            });
          }
        });
      }
      return defer.promise();
    };
    entrance.prototype.init = function () {
      //--入口数据初始化
      var self = this;
      if (!self.loader) {
        self.loader = $('#loaderbox').clone();
        self.loader.attr('id', 'loaderbox1');
        $('#body').append(self.loader);
      }
      self.loader.show();
      return self.checkCode().then(function () {
        return itou.get({
          url: 'pay/scan',
          data: {
            pay_token: self.pay_token
          },
          formatResult: false
        });
      }).then(function (rlt) {
        var errcode = rlt.errcode,
          msg = rlt.msg,
          data = rlt.data;
        if (errcode != 0) {
          //--错误处理
          $('#loaderbox1').hide();
          self.error(rlt);
          return;
        }
        self.scene = data.scene;
        self.islogin = data.is_login;
        self.isauth = data.is_auth;
        self.info = data;
        if (data.scene == 'scan_fixed_project') {
          //--方案码付款
          // self.pageModel = "project";
          self.isReady = true;
          var code = self.code;
          if (!self.isauth && !code) {
            //--未授权
            var url = Gray.$page.href || window.location.href;
            itou.auth.getCode('snsapi_userinfo', url);
          } else {
            var d = {},
              doOrder = Model.doOrder;
            self.project = new item(data.project_info);
            d.project_id = [data.project_id];
            d.partner = data.partner;
            d.station_user_id = data.station_user_id;
            d.scene = 'scan_fixed_project';
            self.orderInfo = d;
            var station = data.station_info || {},
              r = {};
            r.name = station.station_name || '';
            r.tel = station.station_mobile || '';
            r.count = data.count || 0;
            r.id = station.station_user_id; //--店铺ID
            r.img = station.station_img;
            self.station = r;
            doOrder["do"](d) //--生成预订订单
            .then(function () {
              // self.pageModel = "project";
              $('#loaderbox1').hide();
            });
          }
        } else if (data.scene == 'scan_share_buy') {
          self.isReady = true;
          var code = self.code;
          //self.pageModel = 'share_buy';
          self.share_buy_m = data.uuid_info.t_m;
          if (!self.isauth && !code) {
            //--未授权
            var url = Gray.$page.href || window.location.href;
            itou.auth.getCode('snsapi_userinfo', url);
          } else {
            self.unique_name = data.user_info.unique_name;
            var d = {},
              doOrder = Model.doOrder;
            self.project = new item(data.project_info);
            d.project_id = [data.project_id];
            d.partner = data.partner;
            d.station_user_id = data.station_user_id;
            d.share_uuid = data.share_uuid;
            d.scene = 'scan_share_buy';
            self.orderInfo = d;
            var station = data.station_info || {},
              r = {};
            r.name = station.station_name || '';
            r.tel = station.station_mobile || '';
            r.count = data.count || 0;
            r.id = station.station_user_id; //--店铺ID
            r.img = station.station_img;
            self.station = r;
            doOrder["do"](d) //--生成预订订单
            .then(function () {
              // self.pageModel = "project";
              $('#loaderbox1').hide();
            });
          }
        } else if (data.scene == 'scan_store' || data.scene == 'scan_fixed' && self.pageModel == 'store') {
          //--预存
          $('#loaderbox1').hide();
          self.isReady = true;
          self.gotoStore();
        } else if (data.scene == 'scan_fixed') {
          //--固定码
          $('#loaderbox1').hide();
          self.pageModel = self.pageModel || 'fast';
          self.isReady = true;
          var station = data.station_info || {},
            r = {};
          r.name = station.station_name || '';
          r.tel = station.station_mobile || '';
          r.count = data.count || 0;
          r.id = station.station_user_id; //--店铺ID
          r.img = station.station_img;
          self.station = r;
          if (!self.islogin) {
            self.pageModel = 'fast';
            return;
          }
        }
      });
    };
    entrance.prototype.error = function (rlt) {
      //--错误处理
      var self = this,
        errcode = rlt.errcode,
        msg = rlt.msg;
      /**
      * array('code'=>-11,'msg'=>'扫码支付已关闭！');
      * array('code'=>-12,'msg'=>'商家未开通支付！');
      * return array('code'=>-13,'msg'=>'店铺未认证！');
      * return array('code'=>-14,'msg'=>'店铺认证已过期！');
      * return array('code'=>-15,'msg'=>'店铺为暂停营业状态！');
      * return array('code'=>-116,'msg'=>'店铺为系统关闭状态！');
      * -21: 已付款
      * -24: 已接单
      */
      // var err = [-13, -14, -15, -116, -21, -24];
      // if(err.indexOf(errcode * 1) > -1){
      // 	if(errcode == -24){
      // 		var o = {};
      // 		o.id = rlt.data.station_user_id
      // 		self.station = o;
      // 	}
      // 	if(errcode == -21){
      // 		var o = {};
      // 		o.id = rlt.data.project_id
      // 		self.project = o;
      // 	}
      // 	self.isReady = true;
      // 	self.errcode = errcode;
      // }else if(errcode != 0){
      // 	itou.msg.toast = msg;
      // 	itou.outil.timmer.newTimmer({
      // 		key: "pay_scan_err_" + errcode,
      // 		timeout: 3000,
      // 		fun: function(){
      // 			///todo:将注释取消
      // 			itou.page.back();
      // 		}
      // 	});
      // }
      self.isReady = true;
      self.errcode = errcode;
      self.errMsg = msg;
    };
    entrance.prototype.reDo = function () {
      var self = this,
        doOrder = Model.doOrder,
        d = self.orderInfo;
      doOrder["do"](d); //--生成预订订单
    };

    entrance.prototype.gotoStore = function () {
      var self = this;
      if (!self.info.is_login && self.scene == 'scan_fixed' && self.pageModel == 'store') {
        //--判断是否已登录
        var url = Gray.$page.href || window.location.href,
          type = itou.outil.getUrlParam(url, 'type'),
          code = itou.outil.getUrlParam(url, 'code');
        url = url.replace('code=' + code, '1=1');
        url = url.replace('type=' + type, '1=1');
        url = url.replace('?1=1&', '?');
        url = url.replace(/&1=1/g, '').replace(/\?1=1/g, '');
        url += (url.has('?') ? '&' : '?') + 'type=store';
        url = '/user/login/?back=' + encodeURIComponent(url);
        itou.auth.getCode('snsapi_userinfo', url);
        // itou.auth.getCode("snsapi_userinfo");
      } else {
        Model.outil.createNumKey(); //--创建数字键盘
        Model.outil.numKey.set({
          max: 50000
        }); //---设置软键盘最大金额
        Model.outil.numKey.focus();
        self.pageModel = 'store';
        Model.advance.init(); //--预存页面数据初始化
      }
    };

    return new entrance();
  };
  var Code2 = function Code2(Model) {
    //--生成二维码功能
    itou.dataModel.config({
      key: 'scan_pay_code2',
      opts: {
        data: {
          t: '参数',
          k: '',
          d: {}
        },
        url: {
          t: '参数',
          k: '',
          d: 'pay/GetPayCode'
        },
        timeout: {
          t: '倒计时',
          k: '',
          d: -1
        },
        src: {
          t: '二维码地址',
          k: '',
          d: ''
        },
        srcTemp: {
          t: '二维码地址',
          k: '',
          d: ''
        },
        loading: {
          t: '正在加载',
          k: '',
          d: true
        },
        mode: {
          t: '加载模式',
          k: '',
          d: 'no_loading'
        },
        //--wait_loading,等待倒计时记载二维码；其他直接加载二维码
        ready: {
          t: '是否加载完成',
          k: '',
          d: false
        },
        apiComplete: {
          t: '接口加载完成',
          k: '',
          d: true
        },
        limit: {
          t: '限制扫码时间',
          k: '',
          d: [1, 1, false]
        },
        //--；凌晨1点到早晨8点,第三个值代表在否是限制时间
        key: {
          t: '计时器key',
          k: '',
          d: 'scan_pay_code2_timmer_key'
        }
      }
    });
    var code2 = itou.dataModel.dataFactory.create('scan_pay_code2');
    code2.prototype.make = function () {
      var self = this,
        params = self.getJson(),
        num = 0,
        r = [];
      params = itou.formatParams(params);
      r.push(params.url);
      console.log(params);
      for (var i in params.data) {
        var str = '';
        if (num == 0) {
          str = '?';
        } else {
          str = '&';
        }
        r.push(str + i + '=' + params.data[i]);
        num += 1;
      }
      // self.data = {};
      console.log(r);
      return r.join('');
    };
    code2.prototype.heMaiMa = function (id, partner, uid, money) {
      var self = this,
        data = {};
      data.project_id = id;
      data.partner = partner;
      data.scene = 'scan_share_buy';
      data.share_uuid = uid;
      data.money = money;
      self.data = data;
      return self.make();
    };
    code2.prototype.projectMa = function (id, partner, pay_type) {
      //--生成方案码
      var self = this,
        data = {};
      data.project_id = id;
      data.partner = partner;
      data.scene = 'scan_fixed_project';
      data.pay_type = pay_type;
      var user_location = itou.localJson.getJson('__user_location_Province');
      user_location.location = user_location.location || {};
      data.province = escape(user_location.province);
      data.city = escape(user_location.city);
      data.lat = user_location.location.lat;
      data.lng = user_location.location.lng;
      self.data = data;
      return self.make();
    };
    code2.prototype.projectMa1 = function (id, partner) {
      //--生成方案码
      var self = this,
        data = {};
      data.tally_id = id;
      data.scene = 'scan_fixed_project';
      self.data = data;
      return self.make();
    };
    code2.prototype.gudingMa = function (id) {
      //--生成固定码
      var self = this,
        data = {};
      data.station_user_id = id;
      self.data = data;
      return self.make();
    };
    code2.prototype.yufuMa = function (id, uid, amount, callback_url, pay_type) {
      //--生成预付码
      var self = this,
        data = {};
      data.station_user_id = id;
      if (uid) {
        data.user_id = uid;
      }
      if (callback_url) {
        data.callback_url = callback_url;
      }
      if (amount) {
        data.amount = amount;
      }
      data.create_timestamp = new Date().getTime();
      data.scene = 'scan_store2';
      data.pay_type = pay_type;
      data.partner = 'itou';
      self.data = data;
      return self.make();
    };
    code2.prototype.showCode = function () {
      var self = this;
      self.loading = false;
      self.ready = true;
      self.src = self.srcTemp;
      if (config.isAPP) {
        self.data.shareMess = {
          type: 'image',
          image: self.src
        };
        Gray.plugin.define('self', [], function () {
          return self;
        });
        Gray.plugin.require('init.js');
        Gray.plugin.require('onmenushareappmessage.js'); //--微信分享给好友
        Gray.$plugin['init.js']().then(function () {
          Gray.$plugin['onmenushareappmessage.js']();
        });
      }
    };
    code2.prototype.getShowCode = function () {
      //--检查是否
      var self = this;
      if (!self.apiComplete) {
        return;
      }
      self.apiComplete = false;
      return itou.get({
        url: 'pay/ShowPayCode',
        data: self.data
      }).then(function (data) {
        self.apiComplete = true;
        if (data.show) {
          self.showCode();
          itou.outil.timmer.clearTimmer(self.key);
        }
      });
    };
    code2.prototype.start = function () {
      //--开始计时获取
      var self = this,
        key = self.key;
      self.timeout = 20;
      self.loading = true;
      itou.outil.timmer.newTimmer({
        key: key,
        timeout: 1000,
        fun: function fun() {
          self.timeout -= 1;
          if (self.timeout > 0) {
            if (self.timeout % 2 == 0) {
              self.getShowCode();
            }
          } else {
            self.loading = false;
            self.ready = false;
            itou.outil.timmer.clearTimmer(key);
          }
        }
      });
    };
    code2.prototype.checkLimit = function () {
      //--检查是否在限制时间
      var self = this,
        limit = self.limit,
        currHH = new Date().getHours();
      console.log(currHH);
      if (currHH >= limit[0] && currHH < limit[1]) {
        limit[2] = true;
        self.loading = false;
      } else {
        limit[2] = false;
        self.loading = true;
      }
      console.log(limit[2]);
      return limit[2];
    };
    code2.prototype.init = function (src) {
      var self = this;
      self.srcTemp = src;
      if (!self.checkLimit()) {
        if (self.mode == 'wait_loading') {
          self.start();
        } else {
          self.showCode();
        }
      }
    };
    return new code2();
  };
  var Auth = function Auth(Model) {//--静默授权功能
    //--废弃，不需要静默授权
  };
  var Project = function Project(Model) {
    //--方案按钮功能
    itou.dataModel.config({
      key: 'scan_pay_project',
      opts: {
        isYue: {
          t: '是否店内账本扣减',
          k: '',
          d: function d(data, me) {
            return (data.depute_info || {}).cash_type == 2;
          }
        },
        key: {
          t: '停售倒计时key',
          k: '',
          d: 'scan_pay_project_timmer_' + Math.floor(Math.random() * 100)
        },
        time: {
          t: '停售倒计时',
          k: 'countdown_time',
          d: 0
        },
        last: {
          t: '停售倒计时-格式化',
          k: '',
          d: ''
        },
        callback: {
          t: '倒计时结束时的回调函数',
          k: '',
          d: function d(data, me) {
            return me.callback || null;
          }
        },
        project_end: {
          t: '方案是否超时',
          k: '',
          d: 0
        }
      }
    });
    var project = itou.dataModel.dataFactory.create('scan_pay_project');
    project.prototype.init = function (data, callback) {
      //--数据初始化
      var self = this;
      self.callback = callback || self.callback;
      self.reload(data);
      var r = self.getJson();
      if (!r.isYue && self.time > 0) {
        self.formatTime();
        self.start(r);
      } else if (!r.isYue && self.time == 0 && self.pay_method == 'scan_pay' && self.callback) {
        self.callback();
      } else {
        self.project_end = 1;
      }
      return r;
    };
    project.prototype.formatTime = function () {
      var self = this,
        time = self.time;
      var HH = parseInt(time / 3600),
        NN = parseInt(time % 3600 / 60),
        SS = time % 3600 % 60,
        r = '';
      if (HH > 0) {
        r += HH + '时';
      }
      if (NN > 0) {
        r += NN + '分';
      }
      r += SS + '秒';
      self.last = r;
    };
    project.prototype.start = function (r) {
      //--开始倒计时
      var self = this,
        key = self.key;
      itou.outil.timmer.clearTimmer(key);
      itou.outil.timmer.newTimmer({
        key: key,
        timeout: 1000,
        fun: function fun() {
          if (self.time > 0) {
            self.time -= 1;
            self.formatTime();
          } else {
            itou.outil.timmer.clearTimmer(key);
            if (self.callback) {
              //--执行回调函数
              self.callback();
            }
          }
        }
      });
    };
    project.prototype.getOrderStatus = function (id) {
      //--开始倒计时
      var self = this;
      return itou.get({
        url: 'project/GetProjectStatusInfo',
        data: {
          project_id: id,
          partner: 'itou'
        }
      }).then(function (data) {
        self.project_end = data.project_end;
        return data;
      });
    };
    return new project();
  };
  var DoOrder = function DoOrder(Model) {
    //--预付定单功能
    itou.dataModel.config({
      key: 'scan_pay_doOrder',
      opts: {
        share_uuid: {
          t: '合买id',
          k: '',
          d: ''
        },
        station_user_id: {
          t: '店铺ID',
          k: '',
          d: ''
        },
        scene: {
          t: '场景',
          k: '',
          d: ''
        },
        project_id: {
          t: '方案Id',
          k: '',
          d: ''
        },
        partner: {
          t: '来源',
          k: '',
          d: ''
        },
        money: {
          t: '金额',
          k: '',
          d: ''
        },
        time: {
          t: '重新提交倒计时',
          k: '',
          d: 0
        },
        key: {
          t: '计时器Key',
          k: '',
          d: 'scan_pay_doOrder_timmer_key'
        },
        lng: {
          t: '经度',
          k: '',
          d: ''
        },
        lat: {
          t: '纬度',
          k: '',
          d: ''
        }
      }
    });
    var doOrder = itou.dataModel.dataFactory.create('scan_pay_doOrder');
    doOrder.prototype.getLocation = function () {
      var self = this;
      // if(!self.lat && !self.lng){
      // 	Gray.plugin.require("init.js");
      // 	Gray.plugin.require("getlocation.js");//--获取坐标
      // 	return Gray.$plugin["init.js"]()
      // 		.then(function(){
      // 			return Gray.$plugin["getlocation.js"]()
      // 				.then(function(data){
      // 					self.lng = data["wgs84"].long;
      // 					self.lat = data["wgs84"].lat;
      // 				});
      // 		});
      // }else{
      var defer = $.Deferred();
      defer.resolve();
      return defer.promise();
      // }
    };

    doOrder.prototype.start = function () {
      //--开始计时，防止重复提交
      var self = this;
      self.time = 30;
      itou.outil.timmer.newTimmer({
        key: self.key,
        timeout: 1000,
        fun: function fun() {
          if (self.time > 0) {
            self.time -= 1;
          } else {
            self.end();
          }
        }
      });
    };
    doOrder.prototype.end = function () {
      //--开始计时，防止重复提交
      var self = this;
      self.time = 0;
      itou.outil.timmer.clearTimmer(self.key);
    };
    doOrder.prototype["do"] = function (params) {
      console.info(this);
      var self = this;
      if (self.time > 0) {
        window.vm.showToast('请不要重复提交');
        return;
      } else {
        self.start();
      }
      return self.getLocation().then(function () {
        var data = self.getJson();
        data = $.extend({}, data, params);
        return itou.get({
          url: 'pay/preorder',
          data: data,
          formatResult: false
        }).then(function (rlt) {
          var errcode = rlt.errcode,
            outil = Model.outil;
          if (errcode == -12) {
            //--要求授权
            var url = Gray.$page.href || window.location.href,
              entrance = Model.entrance;
            // if(entrance.islogin){
            // 	if(entrance.pageModel == "fast"){
            // 		url += "&type=fast";
            // 	}
            // 	url += "&auto=true";
            // }
            // url += "&money=" + outil.numKey.num;
            itou.auth.getCode('snsapi_userinfo', url);
            return;
          } else if (errcode != 0) {
            //--错误处理
            self.end();
            outil.error(rlt);
            return;
          }
          var data = rlt.data,
            scene = data.scene,
            plugin = Model.plugin;
          // if(data.url){//--跳转到支付页面
          // 	Gray.$page.loadPage(data.url);
          // }else{
          // 	outil.error(rlt);
          // }
          plugin.data = data.pay_info;
          plugin.sign = data.sign;
          plugin.id = data.score_order_id;
          if (config.browser == 'wx' || config.browser == 'ali') {
            Gray.$plugin['init.js']().then(function () {
              Gray.plugin.define('self', [], function () {
                return plugin;
              });
              return Gray.$plugin['choosepay.js']();
            }).then(function (res) {
              // alert(JSON.stringify(res));
              self.end();
              // alert(config.browser);
              if (config.browser == 'wx') {
                self.doWxRes(res);
              } else if (config.browser == 'ali') {
                self.doAliRes(res);
              }
            });
          }
        });
      });
    };
    doOrder.prototype.doAliRes = function (res) {
      //--支付宝支付接口返回结果处理
      var self = this,
        plugin = Model.plugin,
        pageModel = Model.entrance ? Model.entrance.pageModel : null;
      if (res.resultCode == '9000') {
        var url = '/pay/scan/success/?score_order_id=' + plugin.id;
        url += '&sign=' + plugin.sign;
        Gray.$page.loadPage(url);
      } else if (res.resultCode == '4000') {
        itou.msg.toast = '订单支付失败';
        //pageModel? "": Model.entrance.pageModel = "project";
        if (!pageModel) {
          if (Model.entrance.scene == 'scan_share_buy') Model.entrance.pageModel = 'share_buy';else Model.entrance.pageModel = 'project';
        }
      } else if (res.resultCode == '6002') {
        itou.msg.toast = '网络连接出错';
        //pageModel? "": Model.entrance.pageModel = "project";
        if (!pageModel) {
          if (Model.entrance.scene == 'scan_share_buy') Model.entrance.pageModel = 'share_buy';else Model.entrance.pageModel = 'project';
        }
      } else if (res.resultCode == '6001') {
        //pageModel? "": Model.entrance.pageModel = "project";
        if (!pageModel) {
          if (Model.entrance.scene == 'scan_share_buy') Model.entrance.pageModel = 'share_buy';else Model.entrance.pageModel = 'project';
        }
      }
    };
    doOrder.prototype.doWxRes = function (res) {
      //--微信支付接口返回结果处理
      var self = this,
        plugin = Model.plugin,
        pageModel = Model.entrance ? Model.entrance.pageModel : null;
      // alert(JSON.stringify(res));
      if (res.err_msg == 'get_brand_wcpay_request:ok') {
        var url = '/pay/scan/success/?score_order_id=' + plugin.id;
        url += '&sign=' + plugin.sign;
        Gray.$page.loadPage(url);
      } else if (res.err_msg == 'get_brand_wcpay_request:fail') {
        itou.msg.toast = '订单支付失败';
        //pageModel? "": Model.entrance.pageModel = "project";
        if (!pageModel) {
          if (Model.entrance.scene == 'scan_share_buy') Model.entrance.pageModel = 'share_buy';else Model.entrance.pageModel = 'project';
        }
      } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
        //pageModel? "": Model.entrance.pageModel = "project";
        if (!pageModel) {
          if (Model.entrance.scene == 'scan_share_buy') Model.entrance.pageModel = 'share_buy';else Model.entrance.pageModel = 'project';
        }
      }
    };
    return new doOrder();
  };
  var Appoint = function Appoint(Model) {
    //--指定出票功能
    itou.dataModel.config({
      key: 'scan_pay_appoint_item',
      opts: {
        id: {
          t: '方案ID',
          k: 'lottery_id',
          d: ''
        },
        partner: {
          t: '来源',
          k: 'partner',
          d: 'itou'
        },
        endTime: {
          t: '结束时间',
          k: '',
          d: function d(data, me) {
            var t = data.EndTime;
            return t.Dateformat('MM-DD HH:NN');
          }
        },
        money: {
          t: '金额',
          k: 'LaunchMoney',
          d: 0
        },
        type: {
          t: '玩法',
          k: 'LotteryType_cn',
          d: ''
        },
        type1: {
          t: '玩法_英文',
          k: 'LotteryType',
          d: ''
        },
        s: {
          t: '是否选中',
          k: '',
          d: false
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('scan_pay_appoint_item');
    item.prototype.select = function () {
      //--选择/取消选择
      var self = this;
      self.s = !self.s;
      Model.appoint.compute(); //--执行计算
    };

    itou.dataModel.config({
      key: 'scan_pay_appoint',
      opts: {
        id: {
          t: '店铺ID',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('id') || 0;
          }
        },
        list: {
          t: '方案列表',
          k: '',
          d: []
        },
        loading: {
          t: '正在加载',
          k: '',
          d: false
        },
        isReady: {
          t: '是否加载完成',
          k: '',
          d: false
        },
        isShowContact: {
          t: '是否现实联系方式',
          k: '',
          d: false
        },
        station: {
          t: '店铺信息',
          k: '',
          d: {
            done: false,
            isShow: false,
            info: null
          }
        },
        result: {
          t: '计算结果',
          k: '',
          d: {
            money: 0,
            num: 0
          }
        } //--包括数量与总金额
      }
    });

    var appoint = itou.dataModel.dataFactory.create('scan_pay_appoint');
    appoint.prototype.showContact = function (isShow) {
      //--显示/隐藏联系方式
      var self = this;
      self.showcontact({
        vm: window.vm,
        station_user_id: self.id
      });
    };
    appoint.prototype.getList = function () {
      //--获取列表信息
      var self = this;
      self.loading = true;
      return itou.get({
        url: 'pay/unorderlist',
        data: {
          station_user_id: self.id
        }
      }).then(function (data) {
        var r = [],
          list = data.list;
        for (var i = 0, len = list.length; i < len; i++) {
          r.push(new item(list[i]));
        }
        self.list = self.list.concat(r); //--追加数据
        self.isReady = true;
        self.loading = false;
        if (window.vm.ascroll) {
          window.vm.ascroll.resetload();
        }
      });
    };
    appoint.prototype.doRefresh = function () {
      //--刷新页面信息
      var self = this;
      self.loading = true;
      self.list = [];
      self.getList();
    };
    appoint.prototype.compute = function () {
      //--选中后进行计算
      var self = this,
        list = self.list,
        r = {
          money: 0,
          num: 0
        };
      for (var i = 0, len = list.length; i < len; i++) {
        var item = list[i];
        if (item.s) {
          r.num += 1;
          r.money += item.money * 1;
        }
      }
      self.result = r;
    };
    appoint.prototype.getStationInfo = function () {
      //--获取店铺信息
      var self = this,
        station = self.station;
      if (station.done) {
        //--显示隐藏
        station.isShow = !station.isShow;
      } else {
        itou.get({
          //--通过接口，获取店铺信息
          url: 'shop',
          data: {
            station_user_id: self.id
          },
          rnd: false,
          notoken: true
        }).then(function (data) {
          station.done = true;
          station.isShow = true;
          var info = {};
          info.qq = data.station_qq;
          info.weixin = data.station_weixin;
          info.mobile = data.station_mobile;
          info.alipay = data.station_alipay;
          station.info = info;
        });
      }
    };
    appoint.prototype["do"] = function () {
      //--提交数据
      var self = this,
        list = self.list,
        d = {},
        doOrder = Model.doOrder;
      d.project_id = [];
      d.partner = [];
      for (var i = 0, len = list.length; i < len; i++) {
        var item = list[i];
        if (item.s) {
          d.project_id.push(item.id);
          d.partner.push(item.partner);
        }
      }
      d.partner = d.partner[0];
      d.station_user_id = self.id;
      d.money = self.result.money;
      d.scene = 'scan_appoint_project';
      doOrder["do"](d); //--生成预订订单
    };

    return new appoint();
  };
  var Advance = function Advance(Model) {
    //--预存票款功能
    itou.dataModel.config({
      key: 'scan_pay_advance',
      opts: {
        id: {
          t: '店铺ID',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('id') || 0;
          }
        },
        scene: {
          t: '场景',
          k: '',
          d: 'scan_store2'
        },
        isShowHelp: {
          t: '是否展示预存说明',
          k: '',
          d: false
        },
        station: {
          t: '店铺信息',
          k: '',
          d: {
            done: false,
            isShow: false,
            info: null
          }
        },
        user: {
          t: '用户信息',
          k: '',
          d: {
            done: false,
            isShow: false,
            info: null
          }
        },
        currTap: {
          t: '当前页签',
          k: '',
          d: 1
        } //--当前页签号
      }
    });

    var advance = itou.dataModel.dataFactory.create('scan_pay_advance');
    advance.prototype.changeTap = function (num) {
      //--切换页签
      var self = this;
      if (self.currTap != num) {
        self.currTap = num;
      }
    };
    advance.prototype.getStationInfo = function () {
      //--获取店铺信息
      var self = this,
        station = self.station;
      // return itou.get({//--通过接口，获取店铺信息
      // 		url: "shop",
      // 		data: {station_user_id: self.id}
      // 	})
      // 	.then(function(data){
      // 		station.done = true;
      // 		var info = {};
      // 		info.name = data.station_name;
      // 		info.img = data.station_img;
      // 		station.info = info;
      // 	});
      var data = Model.entrance.info.station_info;
      station.done = true;
      var info = {};
      self.id = data.station_user_id;
      info.name = data.station_name;
      info.img = data.station_img;
      station.info = info;
    };
    advance.prototype.getUserInfo = function () {
      //--获取店铺信息
      var self = this,
        user = self.user;
      // return itou.get({//--通过接口，获取店铺信息
      // 		url: "user/info",
      // 	})
      // 	.then(function(data){
      // 		user.done = true;
      // 		var info = {};
      // 		info.mobile = data.bind_mobile;
      // 		info.mobileHide = itou.outil.hideMobile(info.mobile);
      // 		user.info = info;
      // 	});
      var data = Model.entrance.info.user_info;
      user.done = true;
      var info = {};
      // info.mobile = data.bind_mobile;
      info.mobileHide = data.unique_name;
      info.id = data.user_id;
      user.info = info;
    };
    advance.prototype.init = function () {
      //--数据初始化
      var self = this;
      // return $.when(self.getStationInfo(), self.getUserInfo());
      self.getStationInfo();
      self.getUserInfo();
    };
    advance.prototype.showHelp = function (isShow) {
      //--显示/隐藏帮助
      var self = this;
      if (isShow == true || isShow == false) {
        self.isShowHelp = isShow;
      } else {
        self.isShowHelp = !self.isShowHelp;
      }
    };
    advance.prototype["do"] = function (money) {
      //--提交数据
      var self = this,
        d = {},
        doOrder = Model.doOrder;
      d.station_user_id = self.id || Model.entrance.station.id;
      d.money = money;
      d.scene = self.scene;
      if (self.scene == 'scan_store') {
        d.user_id = self.user.info.id;
      }
      doOrder["do"](d); //--生成预订订单
    };

    advance.prototype.doStore = function (money) {
      //--生成预存预付订单
      var self = this;
      self.scene = 'scan_store';
      self["do"](money);
    };
    advance.prototype.doFast = function (money) {
      //--生成快速付款预付订单
      var self = this;
      self.scene = 'scan_fast';
      self["do"](money);
    };
    return new advance();
  };
  var Fast = function Fast(Model) {
    //--快速付款功能
    //--直接沿用预付票款功能
    return Advance(Model);
  };
  var Outil = function Outil(Model) {
    //--工具箱功能
    itou.dataModel.config({
      key: 'scan_pay_outil',
      opts: {
        numKey: {
          t: '数字键盘',
          k: '',
          d: {}
        }
      }
    });
    var outil = itou.dataModel.dataFactory.create('scan_pay_outil');
    outil.prototype.createNumKey = function () {
      //--创建数字键盘对象
      var self = this;
      function numKey() {
        var self = this;
        self.max = 10000; //--最大数字
        self.min = 0.01; //--最小数字
        self.dot = 2; //--保留位数
        self.num = Gray.$page.getUrlParam('money') || ''; //--显示的数字
        self.isFocus = false; //--是否获得焦点
      }

      numKey.prototype.keypress = function (num, e) {
        //--数字键盘按钮功能
        // e.preventDefault();
        var self = this,
          oldNum = self.num;
        self.num += '' + num;
        if (isNaN(self.num)) {
          self.num = oldNum;
          return;
        }
        var n = self.num + '',
          arr = n.split('.');
        if (arr[1]) {
          self.num = arr[0] + '.' + arr[1].left(self.dot);
          // self.num *= 1;
        }

        if (self.num > self.max) {
          self.num = oldNum * 1;
        }
        if ((self.num + '').left(1) == 0 && !(self.num + '').has('.')) {
          //--去除左边的0
          self.num *= 1;
        }
      };
      numKey.prototype.back = function (e) {
        //--数字键盘退格功能
        // e.preventDefault();
        var self = this,
          num = self.num + '',
          len = num.length;
        num = num.left(len - 1);
        if (num) {
          self.num = num;
        } else {
          self.num = '';
        }
      };
      numKey.prototype.focus = function () {
        //--获得焦点
        var self = this;
        self.isFocus = true;
      };
      numKey.prototype.blur = function () {
        //--失去焦点
        var self = this;
        self.isFocus = false;
      };
      numKey.prototype.set = function (setting) {
        //--自定义设置
        var self = this;
        for (var i in self) {
          if (setting[i] || setting[i] == 0) {
            self[i] = setting[i];
          }
        }
      };
      self.numKey = new numKey();
    };
    outil.prototype.error = function (rlt, goIndex) {
      //--错误处理,goIndex:是否强制跳转主页
      var self = this,
        errcode = rlt.errcode,
        msg = rlt.msg;
      if (errcode != 0) {
        itou.msg.toast = msg;
        if (goIndex) {
          itou.outil.timmer.newTimmer({
            key: 'pay_scan_err_' + errcode,
            timeout: 3000,
            fun: function fun() {
              itou.page.back();
            }
          });
        }
      }
    };
    return new outil();
  };
  var PayRlt = function PayRlt(Model) {
    //--支付结果功能
    itou.dataModel.config({
      key: 'scan_pay_payRlt_item',
      opts: {
        id: {
          t: '方案ID',
          k: 'lottery_id',
          d: ''
        },
        partner: {
          t: '来源',
          k: 'partner',
          d: 'itou'
        },
        endTime: {
          t: '结束时间',
          k: '',
          d: function d(data, me) {
            var t = data.EndTime;
            return t.Dateformat('MM-DD HH:NN');
          }
        },
        money: {
          t: '金额',
          k: 'LaunchMoney',
          d: 0
        },
        type: {
          t: '玩法',
          k: 'LotteryType_cn',
          d: ''
        },
        cancel: {
          t: '是否撤单或拒接',
          k: 'cancel',
          d: ''
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('scan_pay_payRlt_item');
    itou.dataModel.config({
      key: 'scan_pay_payRlt',
      opts: {
        project_id: {
          t: '方案id号',
          k: '',
          d: 0
        },
        id: {
          t: '扫码付款方案ID',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('score_order_id') || 0;
          }
        },
        sign: {
          t: '扫码付款方案ID',
          k: '',
          d: function d() {
            return Gray.$page.getUrlParam('sign') || '';
          }
        },
        key: {
          t: '计时器标识',
          k: '',
          d: function d() {
            return 'scan_pay_payRlt_timmer_' + Math.floor(Math.random() * 1000);
          }
        },
        defer: {
          t: '链处理对象',
          k: '',
          d: function d() {
            return $.Deferred();
          }
        },
        rDefer: {
          t: '链处理对象',
          k: '',
          d: function d() {
            //--获取合买认购状态接口用到
            return $.Deferred();
          }
        },
        rText: {
          t: '文本描述',
          k: '',
          d: function d() {
            //--获取合买认购状态对应描述文本
            var r = {};
            r[-1] = ['参与未确认！请查看合买详情核实', 'r'];
            r[0] = ['正在参与中......', 'g'];
            r[1] = ['参与成功', 'g'];
            r[2] = ['参与失败！参与金额将返还到您的店内账本', 'r'];
            return r;
          }
        },
        buy_status: {
          t: '合买参与状态',
          k: '',
          d: 0
        },
        time: {
          t: '超时计时',
          k: '',
          d: 0
        },
        isReady: {
          t: '是否完成',
          k: '',
          d: false
        },
        status: {
          t: '付款状态',
          k: '',
          d: 0
        },
        scene: {
          t: '场景',
          k: '',
          d: 0
        },
        list: {
          t: '方案列表',
          k: '',
          d: []
        },
        partner: {
          t: '方案来源',
          k: '',
          d: ''
        },
        station: {
          t: '账单店铺信息',
          k: '',
          d: {}
        },
        user1: {
          t: '账单账户信息',
          k: '',
          d: {}
        },
        user: {
          t: '账户信息',
          k: '',
          d: {}
        },
        huodong: {
          t: '店铺活动',
          k: '',
          d: []
        } //--包括数量与总金额
      }
    });

    var payRlt = itou.dataModel.dataFactory.create('scan_pay_payRlt');
    payRlt.prototype.getOrder = function () {
      //--获取预付订单结果
      var self = this;
      return itou.get({
        url: 'pay/GetOrderDetail',
        data: {
          score_order_id: self.id,
          sign: self.sign
        },
        formatResult: false
      }).then(function (rlt) {
        var errcode = rlt.errcode,
          outil = Model.outil,
          defer = self.defer;
        self.isReady = true;
        itou.outil.timmer.clearTimmer(self.key);
        if (errcode != 0) {
          //--错误处理
          outil.error(rlt, true);
          return defer.promise();
        }
        var data = rlt.data,
          status = data.status;
        self.status = status;
        if (data.uuid_info && data.uuid_info.project_id) {
          self.project_id = data.uuid_info.project_id;
        }
        if (data.uuid_info && data.uuid_info.p_uuid) {
          self.p_uuid = data.uuid_info.p_uuid;
        }
        self.p_uuid = self.p_uuid || '0';
        if (data.share_buy_info && data.share_buy_info.s_num == 1) {
          sessionStorage.setItem('first_hemai', '1');
        }
        if (status == 'Not') {
          //--付款进行中
          if (self.time >= 60) {
            //--付款超时
            self.status = 'Overtime';
            self.time = 0;
          } else {
            itou.outil.timmer.newTimmer({
              key: self.key,
              timeout: 1000 * 10,
              fun: function fun() {
                self.time += 10;
                self.getOrder();
              }
            });
          }
        } else if (status == 'Cannel') {
          //--失败
          self.time = 0;
        } else if (status == 'Succeed') {
          //--成功
          self.time = 0;
          self.formatRlt(data);
          defer.resolve();
        }
        return defer.promise();
      });
    };
    payRlt.prototype.formatRlt = function (data) {
      //--处理返回结果
      var self = this,
        station = {};
      station.id = data.namespace;
      station.code = data.pay_code;
      station.money = data.amount;
      station.yue = data.remain;
      station.name = data.station_name;
      self.station = station; //--店铺信息
      self.scene = data.scene; //--场景
      self.user1 = data.user_info;
      var r = [],
        //--处理方案列表信息
        list = data.project_infos || [];
      for (var i = 0, len = list.length; i < len; i++) {
        var it = list[i];
        self.partner = it.partner;
        r.push(new item(it));
      }
      self.list = r;
    };
    payRlt.prototype.getUserInfo = function () {
      //--获取用户信息
      var self = this;
      if (self.scene == 'scan_store') {
        return itou.get({
          //--通过接口，获取店铺信息
          url: 'user/info'
        }).then(function (data) {
          self.user = data;
        });
      } else {
        var defer = $.Deferred();
        defer.resolve();
        return defer.promise();
      }
    };
    payRlt.prototype.getHuodong = function () {
      //--获取店铺活动
      var self = this;
      return itou.get({
        //--通过接口，获取店铺活动信息
        url: 'activity/doing',
        data: {
          station_user_id: self.station.id
        }
      }).then(function (data) {
        var list = data.list || [],
          l = [];
        for (var i = 0, len = list.length; i < len; i++) {
          var item = list[i],
            r = {};
          r.name = item.activity_name;
          r.title = item.activity_title;
          r.id = item.id;
          r.aid = item.aid;
          l.push(r);
          //--链接：/activity/receivebonus/illustrate/?id=店铺id&activity=活动id
        }

        self.huodong = l;
      });
    };
    payRlt.prototype.getReturn = function () {
      //--获取合买认购状态
      var self = this;
      return itou.get({
        url: 'pay/GetOrderReturn',
        data: {
          score_order_id: self.id,
          sign: self.sign
        }
      }).then(function (data) {
        var buy_status = data.buy_status,
          defer = self.rDefer;
        itou.outil.timmer.clearTimmer(self.key);
        if (buy_status == 0) {
          //--认购进行中
          if (self.time >= 90) {
            //--认购超时
            self.buy_status = -1;
            self.time = 0;
          } else {
            self.buy_status = buy_status;
            itou.outil.timmer.newTimmer({
              key: self.key,
              timeout: 1000 * 10,
              fun: function fun() {
                self.time += 10;
                self.getReturn();
              }
            });
          }
        } else {
          self.time = 0;
          self.buy_status = buy_status;
          defer.resolve();
        }
        return defer.promise();
      });
    };
    payRlt.prototype.init = function () {
      //--初始化
      var self = this;
      return self.getOrder()
      // .then(function(){
      // 	return self.getUserInfo();
      // })
      .then(function () {
        self.getReturn(); //--获取合买认购状态
        return self.getHuodong();
      });
    };
    return new payRlt();
  };
  var Center = function Center(Model) {
    //--控制中心功能
    itou.dataModel.config({
      key: 'scan_pay_center',
      opts: {
        code2Url: {
          t: '二维码页面链接',
          k: '',
          d: {
            // scan_fixed_project: '/pay/scan/projectma/', //--方案二维码页面链接
            // scan_store: '/pay/scan/savedma/', //--预存二维码页面链接
            // scan_store2: '/pay/scan/savedma/', //--预存二维码页面链接
            scan_fixed_project: '/pay/pay_plugin/',
            //--方案二维码页面链接
            scan_store: '/pay/pay_plugin/',
            //--预存二维码页面链接
            scan_store2: '/pay/pay_plugin/',
            //--预存二维码页面链接
            scan_share_buy: '/pay/scan/hm/'
          }
        },
        pageUrl: {
          t: '页面链接',
          k: '',
          d: {
            appoint: '/pay/scan/sedproject',
            //--指定付款页面链接
            // fast: "/pay/scan/savedmoney/",//--快速付款页面链接
            // advance: "/pay/scan/savedmoney/"//--预存票款页面链接
            fast: '/pay/scan/savedmoney',
            //--快速付款页面链接
            advance: '/pay/scan/savedmoney' //--预存票款页面链接
          }
        },

        uid: {
          t: '获取user_id',
          k: '',
          d: ''
        },
        isLogin: {
          t: '是否登录',
          k: '',
          d: false
        },
        isPayed: {
          t: '方案是否成功使用扫码付款',
          k: '',
          d: false
        },
        payType: {
          t: '扫码付支付类型',
          k: '',
          d: {
            ali: false,
            ali2: false,
            weixin: false,
            quick: false
          }
        }
      }
    });
    var center = itou.dataModel.dataFactory.create('scan_pay_center');
    center.prototype.getUser = function (params) {
      //--二维码页面跳转
      var self = this;
      return itou.get({
        url: 'user/info'
      }).then(function (data) {
        self.uid = data.uid;
      });
    };
    center.prototype.gotoMa = function (params) {
      //--二维码页面跳转
      var self = this,
        url = self.code2Url[params.key];
      url += '?id=' + params.id;
      if (params.partner) {
        url += '&partner=' + params.partner;
      }
      if (params.station_user_id) {
        url += '&station_user_id=' + params.station_user_id;
      }
      if (params.project_id) {
        url += '&project_id=' + params.project_id;
      }
      if (params.uuid) {
        url += '&uuid=' + params.uuid;
      }
      if (params.money) {
        url += '&money=' + params.money;
      }
      if (params.amount) {
        url += '&amount=' + params.amount;
      }
      if (params.cur_share) {
        url += '&cur_share=' + params.cur_share;
      }
      if (params.cur_assure) {
        url += '&cur_assure=' + params.cur_assure;
      }
      if (params.share_money) {
        url += '&share_money=' + params.share_money;
      }
      if (params.assure_money) {
        url += '&assure_money=' + params.assure_money;
      }
      url += '&back=' + window.backurl;
      if (params.key != 'scan_store') {
        //--预存码不需要uid
        if (!self.uid) {
          return self.getUser().then(function () {
            url += '&uid=' + self.uid;
            Gray.$page.loadPage(url);
          });
        } else {
          url += '&uid=' + self.uid;
        }
      }
      Gray.$page.loadPage(url);
    };
    center.prototype.gotoAppoint = function (station_user_id) {
      //--跳转到指定付款页面
      var self = this,
        url = self.pageUrl['appoint'];
      url += '?id=' + station_user_id;
      url += '&back=' + window.backurl;
      Gray.$page.loadPage(url);
    };
    center.prototype.gotoAdvance = function (station_user_id) {
      //--跳转到预付账款页面
      var self = this,
        url = self.pageUrl['advance'];
      url += '?id=' + station_user_id;
      url += '&back=' + window.backurl;
      Gray.$page.loadPage(url);
    };
    center.prototype.getLogin = function () {
      //--获取是否登录
      var self = this;
      return itou.get({
        url: 'user/islogin'
      }).then(function (data) {
        self.isLogin = data.is_login;
      });
    };
    center.prototype.canPay = function (data, formatResult) {
      //--店铺是否开通支付码
      formatResult = !!formatResult;
      var self = this;
      return itou.get({
        url: 'pay/CheckPay',
        data: data,
        formatResult: formatResult
      });
    };
    center.prototype.getPayed = function (id) {
      //--获取是否已经成功扫码付款
      var self = this;
      return itou.get({
        url: 'pay/checkProjectScanPay',
        data: {
          partner: 'itou',
          project_id: id
        }
      });
      // .then(function(data){
      // 	console.log(data)
      // });
    };

    center.prototype.getStation = function (id) {
      //--获取店铺信息
      var self = this;
      return itou.get({
        url: 'shop',
        data: {
          station_user_id: id
        }
      });
    };
    center.prototype.getUserInfo = function () {
      //--获取用户信息
      var self = this;
      return itou.get({
        url: 'user/info',
        data: {}
      });
    };
    center.prototype.getProjectUserInfo = function (id) {
      //--获取方案用户信息（包括澳客的方案）
      var self = this;
      return itou.get({
        url: 'project/userinfo',
        data: {
          tally_id: id
        }
      });
    };
    center.prototype.getPayTypes = function (station_user_id) {
      //--获取扫码付支付类型
      var self = this;
      return itou.get({
        url: 'pay/getPayTypes',
        data: {
          station_user_id: station_user_id
        }
      }).then(function (data) {
        var pay_types = data.pay_types;
        self.payType.ali = pay_types.indexOf('ali_public') > -1; //--支付宝
        self.payType.ali2 = pay_types.indexOf('ali_scan') > -1; //--支付宝2
        self.payType.weixin = pay_types.indexOf('weixin_public') > -1; //--微信
        self.payType.quick = pay_types.indexOf('quick_pay') > -1; //--快捷付款
        self.payType.union = pay_types.indexOf('union_pay') > -1; //--银闪付
      });
    };

    return new center();
  };
  var Plugin = function Plugin(Model) {
    //--支付插件对象
    var self = this;
    if (wx) {
      self.wx = wx;
    }
    self.data = null;
    self.id = null;
    self.sign = null;
    Gray.plugin.define('self', [], function () {
      return self;
    });
    Gray.plugin.require('init.js');
    Gray.plugin.require('choosepay.js'); //--支付插件
  };

  var Model = function Model() {
    //--单场数据原型
    itou.dataModel.config({
      //---单场数据对象
      key: 'zhibo_obj',
      opts: {
        maps: {
          t: '映射关系',
          k: '',
          d: {
            //--映射关系，用于执行初始化
            entrance: Entrance,
            code2: Code2,
            auth: Auth,
            project: Project,
            doOrder: DoOrder,
            appoint: Appoint,
            advance: Advance,
            fast: Fast,
            outil: Outil,
            payRlt: PayRlt,
            center: Center
          }
        },
        plugin: {
          t: '插件',
          k: '',
          d: function d(data, me) {
            return new Plugin(me);
          }
        },
        entrance: {
          t: '扫码入口功能',
          k: '',
          d: null
        },
        code2: {
          t: '生成二维码功能',
          k: '',
          d: null
        },
        auth: {
          t: '静默授权功能',
          k: '',
          d: null
        },
        project: {
          t: '方案按钮功能',
          k: '',
          d: null
        },
        doOrder: {
          t: '预付定单功能',
          k: '',
          d: null
        },
        appoint: {
          t: '指定出票功能',
          k: '',
          d: null
        },
        advance: {
          t: '预存票款功能',
          k: '',
          d: null
        },
        fast: {
          t: '快速付款功能',
          k: '',
          d: null
        },
        outil: {
          t: '工具对象',
          k: '',
          d: null
        },
        center: {
          t: '控制中心',
          k: '',
          d: null
        }
      }
    });
    var model = itou.dataModel.dataFactory.create('zhibo_obj'); //--单场对象构造函数创建
    model.prototype.init = function (modelList) {
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
    model.prototype.alipay_activity_time = function () {
      var end_time = new Date('3/1/2018 23:59:59');
      var now_time = new Date();
      if (end_time.getTime() - now_time.getTime() > 0) return true;else return false;
    };
    $.payscan = new model();
  };
  Model();
})();

/***/ })

/******/ });