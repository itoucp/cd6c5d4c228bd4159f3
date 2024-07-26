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
/******/ 	return __webpack_require__(__webpack_require__.s = 352);
/******/ })
/************************************************************************/
/******/ ({

/***/ 352:
/***/ (function(module, exports) {

/**
 * 微信C端 余额明细
 * by zhaouf    2016-08-17
 */
$(function () {
  //--时间弹窗
  // var opt = {
  //     lang:'zh', //语言
  //     preset: 'date', // 日期形式
  //     theme: 'ios', //主题，这里仿ios
  //     display: 'bottom', //对话框的显示方式
  //     dateFormat: 'yy-mm-dd', //日期格式
  //     setText: '确定',
  //     cancelText: '取消',
  //     dateOrder: 'yymmdd', //面板中排列顺序，年月日
  //     dayText: '日', monthText: '月', yearText: '年', //面板中年月日文字
  //     minDate: new Date(((new Date()).getFullYear() - 3)+'-01-01'), //开始年份
  //     maxDate: new Date() //结束年份
  // };

  // $('#sdate').mobiscroll().date(opt);
  // $('#edate').mobiscroll().date(opt);

  var search = function search() {
    //--查询条件对象构造函数
    var self = this;
    self.summary = {
      '': '全部类型',
      StationIn: '加',
      StationOut: '减'
    };
    self.sub_summary = null;
    var sub_summary = {
      StationIn: {
        //--入项
        '': '全部订单',
        ScanStore: '店内扫码-加',
        StationVip: '手工添加-加',
        PrizeIn: '奖金添加-加',
        StationAward: '店内奖励-加',
        ReturnScore: '撤单返还-加',
        StationPay: '店内补偿-加',
        DrawIn: '清账返还-加',
        Other: '其他添加-加'
      },
      StationOut: {
        //--出项
        '': '全部订单',
        BuyProject: '出票扣减-减',
        BankOut: '清账扣减-减',
        Other: '手工扣减-减'
      }
    };
    self.curr = {
      //--当前选中的项
      summary: Gray.$page.getUrlParam('summary') ? Gray.$page.getUrlParam('summary') : '',
      sub_summary: Gray.$page.getUrlParam('sub_summary') ? Gray.$page.getUrlParam('sub_summary') : ''
    };
    self.time = {
      //--开始时间和截止时间
      stime: new Date().DateAdd('d', -7).Dateformat('yyyy-MM-DD'),
      etime: new Date().Dateformat('yyyy-MM-DD')
    };
    self.showBar = null; //--当前展示的搜索条

    self.getSubSummary = function () {
      //--根据收支类型。创建子列表数据
      var summary = self.curr.summary;
      if (summary == '') {
        self.sub_summary = $.extend({}, sub_summary.StationIn, sub_summary.StationOut);
      } else {
        self.sub_summary = sub_summary[summary];
      }
    };
    self.getSubSummary();
  };
  var list = function list(data) {
    var self = this; //console.log(data.deal_time);
    var arr = data.deal_time.split(/[: -]/);
    self.date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]).Dateformat('MM-DD');
    self.date = self.date + ' ' + arr[3] + ':' + arr[4];
    self.money = data.amount;
    self.remain_score = data.remain_score;
    self.no = data.detail_id > 0 ? data.detail_id : '';
    self.project = data.extend_id;
    self.source_id = data.source_id;
    self.sub_summary = data.sub_summary_cn;
    self.remark = data.remark;
  };
  var info = function info(data) {
    var self = this;
    self.name = data.station_name; //--店名
    self.isCert = !!(data.has_cert_info == '1'); //--认证状态
    self.money = data.remain_score || 0 .toFixed(2); //--余额
    self.mobile = data.station_mobile;
    self.weixin = data.station_weixin;
    self.qq = data.station_qq;
    self.alipay = data.station_alipay;
    self.payment = {
      qq: data.services && data.services.payment_qq && data.services.payment_qq.qq_account ? data.services.payment_qq.qq_account : '',
      weixin: data.services && data.services.payment_weixin && data.services.payment_weixin.weixin_account ? data.services.payment_weixin.weixin_account : '',
      alipay: data.services && data.services.payment_alipay && data.services.payment_alipay.alipay_account ? data.services.payment_alipay.alipay_account : ''
    };
  };
  var model = function model() {
    var self = this;
    self.station_user_id = Gray.$page.getUrlParam('id') || itou.localJson.getJson('/user/shop/details/').id;
    self.back_url = Gray.$page.getUrlParam('back') || '/';
    self.list = [];
    self.info = {};
    self.search = new search();
    self.page = 1;
    self.limit = 20;
    self.hasNext = false;
    self.moneyText = null;
    self.timeText = null;
    self.changeSummary = function (key) {
      //--切换查询条件大类
      self.search.curr.summary = key;
      self.search.getSubSummary();
    };
    self.getList = function () {
      //--获取列表
      return itou.get({
        url: 'shop/balanceorderlist?',
        data: {
          station_user_id: self.station_user_id,
          page: self.page,
          limit: self.limit,
          stime: self.search.time.stime,
          etime: self.search.time.etime,
          summary: self.search.curr.summary,
          sub_summary: self.search.curr.sub_summary
        }
      }).then(function (data) {
        var l = data.list;
        if (l.length == 0 && self.page != 1) {
          //--非第一页接口返回空，直接终止执行
          return;
        }
        self.timeText = new Date(data.stime).Dateformat('yyyy-MM-DD') + '~' + new Date(data.etime).Dateformat('yyyy-MM-DD');
        // self.moneyText = "加：" + (data.in_count || 0) + "笔，" + (data.total_in.toFixed(2) || 0) + "，减：" + (data.out_count || 0) + "笔，" + (data.total_out.toFixed(2) || 0);
        self.hasNext = data.page * self.limit < data.count;
        if (!l) {
          return;
        }
        if (self.page == 1) {
          self.list = [];
        }
        for (var i = 0; i < l.length; i++) {
          self.list.push(new list(l[i]));
        }
      });
    };
    self.getListInfo = function () {
      //--获取列表增减金额数据
      return itou.get({
        url: 'shop/balanceOrderStat',
        data: {
          station_user_id: self.station_user_id,
          stime: self.search.time.stime,
          etime: self.search.time.etime,
          summary: self.search.curr.summary,
          sub_summary: self.search.curr.sub_summary
        }
      }).then(function (data) {
        self.moneyText = '加：' + (data.in_count || 0) + '笔，' + (data.in_money.toFixed(2) || 0) + '，减：' + (data.out_count || 0) + '笔，' + (data.out_money.toFixed(2) || 0);
      });
    };
    self.getInfo = function () {
      //--获取店铺信息
      return itou.get({
        url: 'shop',
        data: {
          station_user_id: self.station_user_id
        },
        rnd: false,
        notoken: true
      }).then(function (data) {
        self.info = new info(data);
      });
    };
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      data: new model(),
      created: function created() {
        this.doRefresh();
        this.$data.getInfo();
      },
      mounted: function mounted() {
        var now = new Date();
        var yyyy = now.getFullYear(),
          month = now.getMonth(),
          date = now.getDate();
        var minDate = new Date(yyyy, month - 3, date, 0, 0, 0);
        var opt = {
          lang: 'zh',
          //语言
          preset: 'date',
          // 日期形式
          theme: 'ios',
          //主题，这里仿ios
          display: 'bottom',
          //对话框的显示方式
          dateFormat: 'yy-mm-dd',
          //日期格式
          setText: '确定',
          cancelText: '取消',
          dateOrder: 'yymmdd',
          //面板中排列顺序，年月日
          dayText: '日',
          monthText: '月',
          yearText: '年',
          //面板中年月日文字
          minDate: minDate,
          //开始年份
          maxDate: new Date() //结束年份
        };

        $('#sdate').mobiscroll().date(opt);
        $('#edate').mobiscroll().date(opt);
      },
      computed: {},
      methods: {
        // back: function(){//--返回
        //     Gray.$page.loadPage(this.back_url);
        // },
        dochangeSummary: function dochangeSummary(key) {
          //--点击大类，切换到小类
          var self = this,
            $data = self.$data;
          this.changeSummary(key);
          $data.search.showBar = 'sub_summary';
        },
        showSearchBar: function showSearchBar(key) {
          //--切换搜索条
          var self = this,
            $data = self.$data;
          if (key != 'dp') {
            $data.search.showBar = $data.search.showBar == key ? null : key;
          } else {
            self.showcontact({
              vm: self,
              station_user_id: self.station_user_id
            });
          }
        },
        hideSearchBar: function hideSearchBar() {
          //--隐藏搜索条
          var self = this,
            $data = self.$data;
          $data.search.showBar = null;
        },
        searchFromSubSummary: function searchFromSubSummary(val) {
          //--点击小类，进行搜索
          var self = this,
            $data = self.$data;
          $data.search.curr.sub_summary = val;
          self.hideSearchBar();
          self.doRefresh();
        },
        doSearch: function doSearch() {
          var self = this;
          try {
            var stime = self.$refs.sdate.value,
              etime = self.$refs.edate.value;
            self.search.time.stime = stime;
            self.search.time.etime = etime;
            var sArr = stime.split('-'),
              eArr = etime.split('-');
            var sDate = new Date(sArr[0], sArr[1] - 1, sArr[2], 0, 0, 0),
              eDate = new Date(eArr[0], eArr[1] - 1, eArr[2], 0, 0, 0);
            var d30 = 30 * 3600 * 24 * 1000;
            if (eDate - sDate > d30) {
              self.showToast('时间间隔不能超过30天');
              return;
            }
          } catch (error) {}
          myDrap.opts.loadUpFn(myDrap);
        },
        doRefresh: function doRefresh() {
          var self = this,
            $data = self.$data;
          $data.page = 1;
          $data.list = [];
          self.hideSearchBar();
          self.$data.getListInfo();
          return $data.getList();
        },
        loadNext: function loadNext() {
          var self = this,
            $data = self.$data;
          var defer = $.Deferred();
          console.log($data.hasNext);
          if ($data.hasNext == false) {
            defer.resolve();
            return defer.promise();
          }
          $data.page += 1;
          return $data.getList();
        },
        gotoProject: function gotoProject(item) {
          var id = item.project;
          id = id.split('-')[0];
          var source_id = item.source_id;
          if (id && id != '0' && !isNaN(id) && source_id != 3) {
            itou.localJson.setJson('/project/detail/', {
              id: id
            });
            Gray.$page.loadPage('/project/detail/?back=' + this.backurl);
          }
        }
      }
    });
    var myDrap = $('.balance_orderlist').dropload({
      scrollArea: window,
      autoLoad: false,
      domDown: {
        // 下方DOM
        domClass: 'dropload-down',
        domRefresh: '',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
      },
      loadDownFn: function loadDownFn(me) {
        me.lock();
        vm.loadNext().then(function () {
          me.unlock();
          me.resetload();
          console.log('loadDownFn------end');
        });
        me.resetload();
      },
      loadUpFn: function loadUpFn(me) {
        me.lock();
        vm.doRefresh().then(function () {
          me.unlock();
          me.resetload();
        });
        me.resetload();
      }
    });
  };
});

/***/ })

/******/ });