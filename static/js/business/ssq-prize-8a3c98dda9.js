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
/******/ 	return __webpack_require__(__webpack_require__.s = 312);
/******/ })
/************************************************************************/
/******/ ({

/***/ 312:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 微信C端		大乐透开奖结果
 * by	zhaoyf	2017-03-30 11:08:58
 */
(function () {
  var Detail = function Detail(Model, item) {
    //--开奖详情数据原型
    itou.dataModel.config({
      //--缓存数据对象
      key: 'SSQ_prize_detail',
      opts: {
        no: {
          t: '彩旗',
          k: '',
          d: function d(itemData, me) {
            return item.no;
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
            return item.result;
          }
        },
        sale: {
          t: '销售额',
          k: '',
          d: function d(itemData, me) {
            return item.sale;
          }
        },
        pool: {
          t: '奖池',
          k: '',
          d: function d(itemData, me) {
            return item.pool;
          }
        },
        kl8Prize: {
          t: '奖金',
          k: '',
          d: function d(itemData, me) {
            if (Model.type != 'KL8') {
              return [];
            }
            var r = [],
              prize = itemData,
              wt = {
                '11': '选一中一',
                '22': '选二中二',
                '32': '选三中二',
                '33': '选三中三',
                '42': '选四中二',
                '43': '选四中三',
                '44': '选四中四',
                '53': '选五中三',
                '54': '选五中四',
                '55': '选五中五',
                '63': '选六中三',
                '64': '选六中四',
                '65': '选六中五',
                '66': '选六中六',
                '70': '选七全不中',
                '74': '选七中四',
                '75': '选七中五',
                '76': '选七中六',
                '77': '选七中七',
                '80': '选八全不中',
                '84': '选八中四',
                '85': '选八中五',
                '86': '选八中六',
                '87': '选八中七',
                '88': '选八中八',
                '90': '选九全不中',
                '94': '选九中四',
                '95': '选九中五',
                '96': '选九中六',
                '97': '选九中七',
                '98': '选九中八',
                '99': '选九中九',
                '100': '选十全不中',
                '105': '选十中五',
                '106': '选十中六',
                '107': '选十中七',
                '108': '选十中八',
                '109': '选十中九',
                '110': '选十中十'
              };
            var keys = Object.keys(wt).sort(function (a, b) {
                return b - a;
              }),
              key_map = {
                '110': {
                  id: '210',
                  name: '选十中十派奖'
                },
                '99': {
                  id: '209',
                  name: '选九中九派奖'
                }
              };
            var _iterator = _createForOfIteratorHelper(keys),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var k = _step.value;
                var $prize = {
                  name: prize[k] ? prize[k].prize_level_name : wt[k],
                  hit: prize[k] ? prize[k].hit_num : '- -',
                  money: prize[k] ? prize[k].prize : '- -'
                };
                // 在 选十中十、选十中九 各自下面分别加一个 选十中十派奖(210)、选九中九派奖(209)
                r.push($prize);
                if (key_map[k]) {
                  var once_key = key_map[k].id;
                  if (prize[once_key]) {
                    r.push({
                      name: prize[once_key] ? prize[once_key].prize_level_name : key_map[k].name,
                      hit: prize[once_key] ? prize[once_key].hit_num : '- -',
                      money: prize[once_key] ? prize[once_key].prize : '- -'
                    });
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return r;
          }
        },
        prize: {
          t: '奖金',
          k: '',
          d: function d(itemData, me) {
            if (Model.type == 'KL8') {
              return me.kl8Prize;
            }
            var r = [],
              prize = itemData,
              canZhui = Model.type == 'SuperLotto',
              maps = ['', '一', '二', '三', '四', '五', '六', '', '', '', '', '', '', '七', '八', '九'];
            for (var i = 1; i <= 15; i++) {
              if (i > 6 && i < 13) {
                continue;
              }
              if (!canZhui && i >= 13) {
                continue;
              } //--双色球不存在七八九等奖
              var p = {};
              p.name = prize[i] ? prize[i].prize_level_name : maps[i] + '等奖';
              p.hit = prize[i] ? prize[i].hit_num : '- -';
              p.money = prize[i] ? prize[i].prize : '- -';
              if (canZhui && i < 3) {
                p.name += '(追加)';
                p.hit += '(' + (prize[i + 6] ? prize[i + 6].hit_num : '- -') + ')';
                p.money += '(' + (prize[i + 6] ? prize[i + 6].prize : '- -') + ')';
              }
              p.money += '元';
              r.push(p);
            }
            // 追加派奖展示内容
            var keys = ['25', '26'];
            var prizeAdd = [];
            for (var i = 0; i < keys.length; i++) {
              var prizeKeys = {};
              prizeKeys.name = prize[keys[i]] ? prize[keys[i]].prize_level_name.replace('追加', '') : keys[i] == '25' ? '一等奖派奖' : '二等奖派奖';
              prizeKeys.hit = prize[keys[i]] ? prize[keys[i]].hit_num : '0';
              prizeKeys.money = prize[keys[i]] ? prize[keys[i]].prize + '元' : '0元';
              prizeAdd.push(prizeKeys);
            }
            var prizeNums25 = prizeAdd[0]['money'].replace('元', '');
            var prizeNums26 = prizeAdd[1]['money'].replace('元', '');
            if (prizeNums25 > 0 && prizeNums26 > 0) {
              //一等奖二等奖有追加奖品
              r.splice(1, 0, prizeAdd[0]);
              r.splice(3, 0, prizeAdd[1]);
            } else {
              if (prizeNums25 <= 0 && prizeNums26 > 0) {
                //一等奖不展示一等奖派奖
                r.splice(2, 0, prizeAdd[1]);
              } else if (prizeNums26 <= 0 && prizeNums25 > 0) {
                r.splice(1, 0, prizeAdd[0]);
              }
            }

            // 双色球追加派奖展示内容
            prizeAdd = [];
            if (prize[7]) {
              var _prize$;
              var _prizeKeys = {};
              _prizeKeys.name = prize[7].prize_level_name;
              _prizeKeys.hit = ((_prize$ = prize[7]) === null || _prize$ === void 0 ? void 0 : _prize$.hit_num) || '0';
              _prizeKeys.money = prize[7] ? prize[7].prize + '元' : '0元';
              prizeAdd.push(_prizeKeys);
              var prizeNums7 = prizeAdd[0]['money'].replace('元', '');
              if (prizeNums7 > 0) {
                //一等奖有追加奖品
                r.splice(1, 0, prizeAdd[0]);
              }
            }
            return r;
          }
        }
      }
    });
    var detail = itou.dataModel.dataFactory.create('SSQ_prize_detail'); //--页面数据对象构造函数创建
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
      key: 'SSQ_prize_item',
      opts: {
        no: {
          t: '彩旗',
          k: 'lottery_no',
          d: ''
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
            var result = itemData.lottery_result || '',
              def = {
                SSQ: {
                  red: ['- -', '- -', '- -', '- -', '- -', '- -'],
                  blue: ['- -']
                },
                SuperLotto: {
                  red: ['- -', '- -', '- -', '- -', '- -'],
                  blue: ['- -', '- -']
                },
                KL8: {
                  red: new Array(20).fill('- -'),
                  blue: []
                }
              };
            result = result.split('|');
            return {
              red: result[0] ? result[0].split(',') : def[Model.type].red,
              blue: result[1] ? result[1].split(',') : def[Model.type].blue
            };
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
            return pool == '-1' ? '- -' : parseFloat(pool).toLocaleString();
          }
        },
        prize: {
          t: '奖金',
          k: '',
          d: function d(itemData, me) {
            var r = [],
              prize = itemData.prize_list || [];
            function fmtMoney(money) {
              if (money >= 10000) {
                return (money / 10000).toFixed(2) + '万元';
              } else {
                return (money / 1).toFixed(2) + '元';
              }
            }
            if (Model.type == 'KL8') {
              r.push({
                name: prize[110] ? prize[110].prize_level_name || '选十中十' : '选十中十',
                hit: prize[110] ? prize[110].hit_num + '注' : '- -',
                money: prize[110] ? fmtMoney(prize[110].prize) : '- -'
              });
              r.push({
                name: prize[99] ? prize[99].prize_level_name || '选九中九' : '选九中九',
                hit: prize[99] ? prize[99].hit_num + '注' : '- -',
                money: prize[99] ? fmtMoney(prize[99].prize) : '- -'
              });
            } else {
              r.push({
                name: prize[1] ? prize[1].prize_level_name || '一等奖' : '一等奖',
                hit: prize[1] ? prize[1].hit_num + '注' : '- -',
                money: prize[1] ? (prize[1].prize / 10000).toFixed(2) + '万元' : '- -'
              });
              r.push({
                name: prize[2] ? prize[2].prize_level_name || '二等奖' : '二等奖',
                hit: prize[2] ? prize[2].hit_num + '注' : '- -',
                money: prize[2] ? (prize[2].prize / 10000).toFixed(2) + '万元' : '- -'
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
            var prize = itemData.prize_list;
            return new me.detailModel(prize);
          }
        }
      }
    });
    var item = itou.dataModel.dataFactory.create('SSQ_prize_item'); //--页面数据对象构造函数创建
    item.prototype.showDetail = function () {
      //--显示当前开奖详情
      var self = this;
      Model.currDeatil = self.detail;
      Model.isShowDetail = true;
    };
    return item;
  };
  var Page = function Page() {
    //--页面数据原型
    itou.dataModel.config({
      //--缓存数据对象
      key: 'SSQ_prize_page',
      opts: {
        type: {
          t: '玩法（大乐透、双色球）',
          k: '',
          d: function d() {
            var type = Gray.$page.getUrlParam('type') || 'SuperLotto';
            return type;
          }
        },
        title: {
          t: '标题',
          k: '',
          d: function d(pageData, me) {
            var maps = {
              SuperLotto: '大乐透',
              SSQ: '双色球',
              KL8: '快乐8'
            };
            return maps[me.type];
          }
        },
        intro: {
          t: '开奖时间简介',
          k: '',
          d: function d(pageData, me) {
            return me.type == 'SuperLotto' ? '每周一、三、六21:35开奖' : '每周二、四、日21:15开奖';
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
    var page = itou.dataModel.dataFactory.create('SSQ_prize_page'); //--页面数据对象构造函数创建
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