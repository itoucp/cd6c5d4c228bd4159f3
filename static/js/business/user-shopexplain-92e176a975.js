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
/******/ 	return __webpack_require__(__webpack_require__.s = 362);
/******/ })
/************************************************************************/
/******/ ({

/***/ 362:
/***/ (function(module, exports) {

/**
 * 微信C端 认证说明
 * by zhaoyf    2016-09-05
 */
$(function () {
  var info = function info(data) {
    //--店铺详情数据构造函数
    var self = this;
    self.name = data.station_name; //--店名
    self.isCert = !!(data.has_cert_info == '1'); //--认证状态
    self.isCertText = self.isCert ? '已认证' : '未认证'; //--认证状态文本
    self.isCertClass = self.isCert ? 'certokbg' : 'certnobg'; //--认证状态样式
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
    self.alipay = data.station_alipay; //--付款方式支付宝
    self.longitude = data.longitude; //--坐标经度
    self.latitude = data.latitude; //--坐标纬度
    self.id = data.station_user_id;
    self.mobile = data.station_mobile;
    self.cert_time = data.cert_time;
    var arr = self.cert_time.split(/[: -]/);
    self.date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]).Dateformat('yyyy年MM月DD日');
    var f = self.pingfen;
    var p = itou.outil.pingjia(f); //--获得评价
    self.pingjia = p;
    self.payment = {
      //--支付方式
      qq: data.services && data.services.payment_qq && data.services.payment_qq.qq_account ? data.services.payment_qq.qq_account : '',
      weixin: data.services && data.services.payment_weixin && data.services.payment_weixin.weixin_account ? data.services.payment_weixin.weixin_account : '',
      alipay: data.services && data.services.payment_alipay && data.services.payment_alipay.alipay_account ? data.services.payment_alipay.alipay_account : ''
    };
    self.showContact = false;
    itou.localJson.delJson('/project/detail/');
  };
  var model = function model() {
    var self = this;
    self.data = {};
    self.info = {};
    self.showBody = false;
    self.station_user_id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
    //--过渡：为将来用uuid完全替换数字id做准备
    self.station_uuid = Gray.$page.getUrlParam('station_uuid');
    self.is_subscribe = true;
    //--过渡：为将来用uuid完全替换数字id做准备
    itou.localJson.setJson('/user/shop/details/', {
      id: self.station_user_id,
      uuid: self.station_uuid
    });
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
        console.log(self.data);
        self.info = self.data;
        self.showBody = true;
      });
    };
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      data: new model(),
      created: function created() {
        var self = this,
          $data = self.$data;
        $data.getInfo();
      },
      methods: {
        // back: function(){
        //     history.back(-1);
        //     var prevPage = window.prevPage || "";
        //     switch(true){
        //         case prevPage && !prevPage.has("/user/shop/explain/"):
        //             Gray.$page.loadPage(prevPage);
        //             break;
        //         default:
        //             Gray.$page.loadPage("/");
        //     }
        // }
      }
    });
  };
});

/***/ })

/******/ });