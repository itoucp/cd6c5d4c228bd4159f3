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
/******/ 	return __webpack_require__(__webpack_require__.s = 275);
/******/ })
/************************************************************************/
/******/ ({

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

/**
 * 微信C端		排33D开奖结果
 * by	zhaoyf	2017-03-30 11:08:58
 */
(function () {
  var Detail = function Detail(Model, item) {
    //--开奖详情数据原型
    itou.dataModel.config({
      //--缓存数据对象
      key: 'P3_prize_detail',
      opts: {
        no: {
          t: '彩旗',
          k: '',
          d: function d(itemData, me) {
            return item.no;
          }
        },
        desc: {
          t: '浆果描述',
          k: '',
          d: function d(itemData, me) {
            return item.desc;
          }
        },
        sample: {
          t: '试机号',
          k: '',
          d: function d(itemData, me) {
            return item.sample;
          }
        },
        date: {
          t: '开奖时间',
          k: '',
          d: function d(itemData, me) {
            return item.date;
          }
        },
        result: {
          t: '奖果',
          k: '',
          d: function d(itemData, me) {
            var rlt = item.result,
              r = {};
            rlt.forEach(function (element, index) {
              r[index] = element;
            }, this);
            return r;
          }
        },
        sale: {
          t: '销售额',
          k: '',
          d: function d(itemData, me) {
            return item.sale;
          }
        },
        prize: {
          t: '奖金',
          k: '',
          d: function d(itemData, me) {
            return item.prize;
          }
        },
        pool: {
          t: '奖金',
          k: '',
          d: function d(itemData, me) {
            return item.pool;
          }
        }
      }
    });
    var detail = itou.dataModel.dataFactory.create('P3_prize_detail'); //--页面数据对象构造函数创建
    detail.prototype.close = function () {
      //--关闭详情显示
      Model.currDeatil = {};
      Model.isShowDetail = false;
    };
    return detail;
  };
  var Item = function Item(Model) {
    //--行数据原型
    itou.dataModel.config({
      //--缓存数据对象
      key: 'P3_prize_item',
      opts: {
        no: {
          t: '彩旗',
          k: 'lottery_no',
          d: ''
        },
        desc: {
          t: '浆果描述',
          k: 'lottery_result_desc',
          d: ''
        },
        sample: {
          t: '试机号',
          k: '',
          d: function d(itemData, me) {
            return itemData.sample.replace(/;/g, '');
          }
        },
        date: {
          t: '开奖时间',
          k: '',
          d: function d(itemData, me) {
            try {
              // console.debug(typeof itemData.prize_time, itemData.prize_time);
              var date = (itemData.prize_time + '').Dateformat('mm月dd日|周ww').split('|');
              return {
                day: date[0],
                weekday: date[1]
              };
            } catch (error) {
              console.error(error.message);
              return {
                day: itemData.prize_time,
                weekday: null
              };
            }
          }
        },
        result: {
          t: '奖果',
          k: '',
          d: function d(itemData, me) {
            var result = itemData.lottery_result;
            result = result.split(';');
            return result;
          }
        },
        sale: {
          t: '销售额',
          k: '',
          d: function d(itemData, me) {
            var sale = itemData.sale;
            return isNaN(sale) || sale == 0 ? '- -' : parseFloat(sale).toLocaleString();
          }
        },
        pool: {
          t: '奖池',
          k: '',
          d: function d(itemData, me) {
            var pool = itemData.pool_prize;
            return isNaN(pool) || pool == 0 ? '- -' : parseFloat(pool).toLocaleString();
          }
        },
        prize: {
          t: '奖金',
          k: '',
          d: function d(itemData, me) {
            var r = [],
              prize = itemData.prize_list || {},
              prizeModel = {
                '1': {
                  prize_level_name: '一等奖',
                  prize: '',
                  hit_num: '--'
                },
                '2': {
                  prize_level_name: '二等奖',
                  prize: '',
                  hit_num: '--'
                },
                '3': {
                  prize_level_name: '三等奖',
                  prize: '',
                  hit_num: '--'
                },
                '4': {
                  prize_level_name: '四等奖',
                  prize: '',
                  hit_num: '--'
                },
                '5': {
                  prize_level_name: '五等奖',
                  prize: '',
                  hit_num: '--'
                },
                '6': {
                  prize_level_name: '六等奖',
                  prize: '',
                  hit_num: '--'
                }
              };
            if (Model.type == 'NP7') {
              for (var i in prizeModel) {
                if (!prize[i]) {
                  prize[i] = prizeModel[i];
                }
              }
            }
            for (i in prize) {
              var element = prize[i];
              var name = element.prize_level_name;
              if (name == '直选' || me.desc && name.replace(/\D/g, '') && name.replace(/\D/g, '') == me.desc.replace(/\D/g, '') || Model.type == 'P5' || Model.type == 'P7' || Model.type == 'NP7') {
                r.push({
                  name: name || '- -',
                  hit: element.hit_num + '注' || false,
                  money: element.prize || '- -'
                });
              }
            }
            if (r.length < 2 && !(Model.type == 'P5' || Model.type == 'P7' || Model.type == 'NP7')) {
              r.push({
                name: '- -',
                hit: '- -',
                money: '- -'
              });
            }
            return r;
          }
        },
        detailModel: {
          t: '详情数据原型',
          k: '',
          d: function d(itemData, me) {
            return Detail(Model, me);
          }
        },
        detail: {
          t: '开奖详情',
          k: '',
          d: function d(itemData, me) {
            return new me.detailModel();
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('P3_prize_item'); //--页面数据对象构造函数创建
    item.prototype.showDetail = function () {
      //--显示当前开奖详情
      var self = this;
      if (Model.type == 'P5') {
        return;
      }
      Model.currDeatil = self.detail;
      Model.isShowDetail = true;
    };
    return item;
  };
  var Page = function Page() {
    //--页面数据原型
    itou.dataModel.config({
      //--缓存数据对象
      key: 'P3_prize_page',
      opts: {
        type: {
          t: '玩法（排3、3D）',
          k: '',
          d: function d() {
            var type = Gray.$page.getUrlParam('type') || 'P3';
            return type;
          }
        },
        title: {
          t: '标题',
          k: '',
          d: function d(pageData, me) {
            var r = '';
            switch (me.type) {
              case 'P3':
                r = '排列三';
                break;
              case '3D':
                r = '福彩3D';
                break;
              case 'P5':
                r = '排列五';
                break;
              case 'P7':
                r = '七星彩';
                break;
              case 'NP7':
                r = '七星彩';
                break;
              default:
                r = '福彩3D';
                break;
            }
            return r;
          }
        },
        intro: {
          t: '开奖时间简介',
          k: '',
          d: function d(pageData, me) {
            var r = '';
            switch (me.type) {
              case 'P3':
                r = '每天21:35开奖';
                break;
              case '3D':
                r = '每天21:15开奖';
                break;
              case 'P5':
                r = '每天21:35开奖';
                break;
              case 'P7':
                r = '每周二、五、日 21:35 开奖';
                break;
              case 'NP7':
                r = '每周二、五、日 21:35 开奖';
                break;
              default:
                r = '每天21:15开奖';
                break;
            }
            return r;
          }
        },
        isReady: {
          t: '是否就绪',
          k: '',
          d: true
        },
        isShowDetail: {
          t: '是否显示详情',
          k: '',
          d: false
        },
        currDeatil: {
          t: '当前显示的详情',
          k: '',
          d: {}
        },
        itemModel: {
          t: '当前显示的详情',
          k: '',
          d: function d(pageData, me) {
            return Item(me);
          }
        },
        list: {
          t: '开奖列表',
          k: '',
          d: function d(pageData, me) {
            var r = [];
            pageData.list.forEach(function (element) {
              var item = new me.itemModel(element);
              r.push(item);
            }, this);
            return r;
          }
        }
      }
    });
    var page = itou.dataModel.dataFactory.create('P3_prize_page'); //--页面数据对象构造函数创建
    page.prototype.getList = function () {
      var self = this;
      console.debug(self);
      return itou.get({
        url: 'shuzi/prizelist',
        data: {
          lottery_type: self.type
        },
        showErr: true //--接口超时是否跳转错误页面
      }).then(function (data) {
        self.reload(data);
      });
    };
    return page;
  };
  var Model = Page();
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: new Model(),
      mounted: function mounted() {
        var self = this;
        self.$data.getList();
      },
      methods: {
        doRefresh: function doRefresh() {
          var self = this;
          return self.$data.getList() //--获取赛事列表
          .then(function () {
            self.ascroll.resetload();
          });
        }
      }
    });
  };
})();

/***/ })

/******/ });