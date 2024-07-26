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
/******/ 		115: 0
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
/******/ 	deferredModules.push([274,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

/**
 * 微信C端 排列3和3D通用配置
 * by	zhaoyf	2017-04-17 13:38:42
 */
(function () {
  var vm2;
  var number_computer = __webpack_require__(46);
  var P3 = function P3() {
    var self = this;
    var $base = {
      //--基础数据
      ball: {
        //--选号功能，普通投注 和 和值投注 选项选择范围 
        normal: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //--普通投注
        np7_b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        //--新七星彩后区
        sum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] //--和值投注
      },

      zhushu: {
        //--和值投注选项与注数映射关系
        '0': {
          P: 1,
          C: 0
        },
        '1': {
          P: 3,
          C: 1
        },
        '2': {
          P: 6,
          C: 2
        },
        '3': {
          P: 10,
          C: 2
        },
        '4': {
          P: 15,
          C: 4
        },
        '5': {
          P: 21,
          C: 5
        },
        '6': {
          P: 28,
          C: 6
        },
        '7': {
          P: 36,
          C: 8
        },
        '8': {
          P: 45,
          C: 10
        },
        '9': {
          P: 55,
          C: 11
        },
        '10': {
          P: 63,
          C: 13
        },
        '11': {
          P: 69,
          C: 14
        },
        '12': {
          P: 73,
          C: 14
        },
        '13': {
          P: 75,
          C: 15
        },
        '14': {
          P: 75,
          C: 15
        },
        '15': {
          P: 73,
          C: 14
        },
        '16': {
          P: 69,
          C: 14
        },
        '17': {
          P: 63,
          C: 13
        },
        '18': {
          P: 55,
          C: 11
        },
        '19': {
          P: 45,
          C: 10
        },
        '20': {
          P: 36,
          C: 8
        },
        '21': {
          P: 28,
          C: 6
        },
        '22': {
          P: 21,
          C: 5
        },
        '23': {
          P: 15,
          C: 4
        },
        '24': {
          P: 10,
          C: 2
        },
        '25': {
          P: 6,
          C: 2
        },
        '26': {
          P: 3,
          C: 1
        },
        '27': {
          P: 1,
          C: 0
        }
      },
      wagerType: {
        //--投注类型映射关系
        'P': '普通',
        //--直选普通
        'PS': '和值',
        //--直选和值
        'C': '机选',
        //--组选机选
        'C3': '组3',
        //--组3
        'C6': '组6',
        //--组6
        'C3C6': '组3组6',
        //--组3组6
        'CS': '和值',
        //--组选和值
        'CD3': '组3单式' //--组3单式
      }
    };

    var $config = {
      //--玩法配置数据
      ball: {
        //--选号功能，选项配置数据
        //--直选功能配置
        P: [$base.ball.normal.slice(0), $base.ball.normal.slice(0), $base.ball.normal.slice(0)],
        //--普通投注
        PS: $base.ball.sum.slice(0),
        //--和值投注
        //--组选功能配置
        C: $base.ball.normal.slice(0),
        //--普通投注选项配置
        CS: $base.ball.sum.slice(1, 27),
        //--和值投注选项配置
        CD3: [$base.ball.normal.slice(0), $base.ball.normal.slice(0)] //--组3单式
      }
    };

    Array.prototype.random = function (len) {
      //--从数组中随机取出指定长度数组,不重复
      function rnd(s, e) {
        //--随机整数，s:起点,e:终点
        return s + Math.floor(Math.random() * (e - s));
      }
      var self = this,
        arr = self.slice(0),
        r = [];
      for (var i = 1; i <= len; i++) {
        var l = arr.length,
          num = rnd(0, l);
        r.push(arr[num]);
        arr.splice(num, 1);
      }
      return r;
    };
    Object.defineProperty(Array.prototype, 'random', {
      enumerable: false //--禁止遍历
    });

    var Qicheng = function Qicheng(Model) {
      /**
      * 结构要求：包含 当前彩期信息、期程倒计时、 锁定倒计时属性、 获取数据倒计时
      * 		还需要 数据获取方法、彩期切换方法、 锁定计时方法
      * 功能要求：期程倒计时 小于 300秒时 开始 定期期程获取，获取数据倒计时 为 随机20~30的整数， 期程倒计时 和 获取数据倒计时 取二者中小的进行计时，计时结束，获取启程数据，如果启程切换，则执行彩旗切换方法和锁定计时方法
      */
      var key = Model.key;
      itou.dataModel.config({
        //--缓存数据对象
        key: key + '_qicheng',
        opts: {
          no: {
            t: '当前期程',
            k: 'lottery_no',
            d: ''
          },
          end_time: {
            t: '截止时间',
            k: '',
            d: function d(qichengData, me) {
              try {
                var eTime = qichengData.itou_end_time,
                  diff = new Date().Dateformat('yyyy-mm-dd 00:00').toDate().DateDiff('d', eTime.toDate());
                if (diff == 0) {
                  var str = '今天 HH:NN';
                } else if (diff == 1) {
                  var str = '明天 HH:NN';
                } else {
                  var str = 'mm-dd HH:NN';
                }
                return eTime.Dateformat(str);
              } catch (error) {
                // console.error(error.message);
                return qichengData.itou_end_time;
              }
            }
          },
          remain_second: {
            t: '距截止时间（秒）',
            k: 'remain_second',
            d: ''
          },
          lockNum: {
            t: '锁定提交时间',
            k: 'start_remain_second',
            d: ''
          },
          sys_pause: {
            t: '系统暂停销售',
            k: '',
            d: false
          },
          pool_prize: {
            t: '上一期奖池',
            k: '',
            d: function d(qichengData, me) {
              try {
                var num = qichengData.prize_info.pool_prize,
                  num1 = Math.pow(10, 8),
                  num2 = Math.pow(10, 4);
                if (num / num1 >= 1) {
                  num = (num / num1).toFixed(1) + '亿';
                } else if (num / num2 >= 1) {
                  num = (num / num2).toFixed(1) + '万';
                } else {
                  num = (num * 1).toFixed(1) + '元';
                }
              } catch (error) {
                var num = 0 .toFixed(1) + '元';
              }
              // num = num.toFixed(2);
              return num;
            }
          }
        }
      });
      var qicheng = itou.dataModel.dataFactory.create(key + '_qicheng'); //--期程对象构造函数创建
      qicheng.prototype.init = function () {
        var self = this;
        Model.selecter.hand.miss.get();
        return self.get().then(function (data) {
          self.reload(data);
        })
        // .then(function(){
        // 	return Model.selecter.hand.miss.get();
        // })
        .then(function () {
          self.start();
        });
      };
      qicheng.prototype.get = function () {
        //--获取当前期程信息
        return itou.get({
          url: 'shuzi/infocurrent',
          data: {
            lottery_type: key,
            station_user_id: itou.localJson.getJson('/user/shop/details/').id,
            station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
          },
          showErr: true //--接口超时是否跳转错误页面
        });
      };

      qicheng.prototype.start = function () {
        var self = this;
        if (self.remain_second == '' || self.remain_second < 0) {
          if (key == 'P7') {
            //--老七星彩无彩期时，锁定页面
            self.sys_pause = true;
            return;
          }
          itou.msg.toast = '无法获取当前期程，请稍后再试';
          return;
        }
        if (self.remain_second > 300) {
          itou.outil.timmer.newTimmer({
            key: key + '_qicheng',
            fun: function fun() {
              self.remain_second -= 120;
              self.start();
            },
            timeout: 120 * 1000
          });
        } else if (self.remain_second <= 300) {
          var rnd = Math.floor(Math.random() * 10) + 20;
          rnd = rnd > self.remain_second ? self.remain_second + 1 : rnd;
          itou.outil.timmer.newTimmer({
            key: key + '_qicheng',
            fun: function fun() {
              self.get().then(function (data) {
                if (!itou.outil.is(data, 'Object')) {
                  itou.msg.toast = '无法获取当前期程，请稍后再试';
                  return;
                }
                if (data.lottery_no != self.no) {
                  self.change(data);
                } else {
                  self.remain_second = data.remain_second;
                  self.start();
                }
              });
            },
            timeout: rnd * 1000
          });
        }
        if (self.lockNum > 0) {
          //--锁定按钮倒计时
          itou.outil.timmer.newTimmer({
            key: key + '_qicheng_lock',
            fun: function fun() {
              self.lockNum -= 1;
              if (self.lockNum == 0) {
                itou.outil.timmer.clearTimmer(key + '_qicheng_lock');
              }
            },
            timeout: 1 * 1000
          });
        }
      };
      qicheng.prototype.change = function (data) {
        //--切换彩期
        var self = this;
        data = data || {}; //--apic错误收集，容错处理
        window.vm.showToast('第' + self.no + '期已截止，当前在售期为' + data.lottery_no + '期！');
        self.reload(data);
        Model.selecter.hand.miss.get();
        self.start();
      };
      var QC = new qicheng();
      QC.init();
      return QC;
    };
    var Cache = function Cache(Model) {
      //--创建缓存逻辑对象
      /**
      * 结构要求：包含 号码篮缓存数据
      * 		还要有 保存、清空方法
      */
      var key = Model.key;
      itou.dataModel.config({
        //--缓存数据对象
        key: key + '_cache',
        opts: {
          data: {
            t: '缓存中的数据',
            k: '',
            d: function d() {
              var docopy = Gray.$page.getUrlParam('docopy') || null; //--是否是复制选号
              if (docopy) {
                var copy = itou.sessionData.getData('__p3_nums_copy');
                itou.sessionData.setData('_' + key + '_lan_cache', copy);
                return copy;
              } else {
                itou.sessionData.setData('__p3_nums_copy', {});
                return itou.sessionData.getData('_' + key + '_lan_cache');
              }
            }
          },
          list: {
            t: '号码篮列表',
            k: '',
            d: function d(cacheData, me) {
              return me.data.list || [];
            }
          },
          beishu: {
            t: '投注倍数',
            k: '',
            d: function d(cacheData, me) {
              return me.data.beishu || 1;
            }
          },
          type: {
            t: '投注方式，直选或组选',
            k: '',
            d: function d(cacheData, me) {
              return me.getType();
            }
          }
        }
      });
      var cache = itou.dataModel.dataFactory.create(key + '_cache'); //--缓存对象构造函数创建
      cache.prototype.getType = function () {
        var self = this,
          list = self.list,
          wt = null;
        for (var i = list.length - 1; i >= 0; i--) {
          var type = list[i].wt.has('C') ? 'C' : 'P';
          if (!wt) {
            wt = type;
          } else if (wt != type) {
            list.splice(i, 1);
          }
        }
        return wt || 'P';
      };
      cache.prototype.save = function () {
        //--保持缓存数据
        var self = this,
          lan = Model.lan;
        self.list = lan.list;
        self.zhui = lan.zhui;
        self.beishu = lan.beishu;
        self.type = self.getType();
        var Json = self.getJson();
        delete Json.data;
        itou.sessionData.setData('_' + key + '_lan_cache', Json);
      };
      return new cache();
    };
    var Compute = function Compute(Model) {
      //--创建计算逻辑对象
      /**
      * 结构要求：无自带属性， 只有一个计算方法，根据 参数type（计算模式），对selected.hand、selected.random、 lan对象进行操作，并处理计算结果
      */
      var key = Model.key;
      itou.dataModel.config({
        key: key + '_compute',
        opts: {}
      });
      var compute = itou.dataModel.dataFactory.create(key + '_compute'); //--计算逻辑对象构造函数创建
      /**
      * 从M个不同元素中选N个元素的排列数（区分元素排列先后顺序）
      * @param m
      * @param n
      * @returns 排列数
      */
      compute.prototype.A = function (m, n) {
        var arr = [];
        for (var i = 0; i < n; i++) {
          arr.push(m - i);
        }
        var fun = new Function('return ' + arr.join('*'));
        return fun();
      };
      /**
      * 从M个不同元素中选N个元素的组合数（不区分元素排列先后顺序）
      * @param m
      * @param n
      * @returns {number} 组合数
      */
      compute.prototype.C = function (m, n) {
        var self = this;
        return self.A(m, n) / self.A(n, n);
      };
      compute.prototype.zhushu = function (wager) {
        //--计算煮熟
        var self = this,
          zhushu = 0,
          wt = wager.wt,
          ball = wager.ball;
        var params = {
          pt: wt,
          selected: {
            nums: ball
          },
          multiple: 1
        };
        if (wt == 'C') {
          // zhushu = 1;
        } else if (wt == 'P') {
          // zhushu = 1;
          // for(var i = 0, len = ball.length; i < len; i++){
          // 	zhushu *= ball[i].length;
          // }
        } else if (wt == 'PS' || wt == 'CS') {
          // var mapZhushu = $base.zhushu;
          // ball.forEach(function(element) {
          // 	zhushu += mapZhushu[element * 1][wt.replace("S", "")] * 1;
          // }, this);
        } else if (wt.has('C3') || wt.has('C6')) {
          // if(wt.has("C3")){
          // 	var dan = ball[0],
          // 		tuo = ball[1];
          // 	if(2 - dan.length <= 0){
          // 		zhushu = 1 * 2;
          // 	}else{
          // 		zhushu += self.C(tuo.length, (2 - dan.length)) * 2;
          // 	}
          // }
          // if(wt.has("C6")){
          // 	var dan = ball[0],
          // 		tuo = ball[1];
          // 	zhushu += self.C(tuo.length, (3 - dan.length))
          // }
          params.selected.nums = ball[1].concat(ball[0]);
          params.selected.abs = ball[0];
        } else if (wt == 'CD3') {
          // if(itou.outil.is(ball[0], 'Array') && itou.outil.is(ball[1], 'Array')){//--拆成单式之前（投注页），计算注数
          // 	var count = 0;
          // 	var zh = ball.getZuhes(),
          // 		len = zh.length;
          // 	// console.log(zh);
          // 	for(var i = 0; i < len; i++){
          // 		zh[i].length == 2 && zh[i][0] != zh[i][1]? count++: '';
          // 	}
          // 	return count;
          // }
          // //--拆成单式之后（号码篮），计算注数
          // return 1
        }
        // return zhushu;
        var pt = Model.result.lottery_type.toLowerCase();
        if (pt == '3d') {
          pt = 'd3';
        }
        if (pt == 'np7') {
          pt = 'p7';
        }
        return number_computer[pt](params).count;
      };
      compute.prototype.money = function () {
        //--计算彩金
        var self = this,
          r = 0;
        if (Model.isLan) {
          var lan = Model.lan,
            list = lan.list;
          list.forEach(function (wager) {
            r += self.zhushu(wager);
          }, this);
          lan.zhushu = r;
          lan.money = r * lan.beishu * 2;
        } else {
          var hand = Model.selecter.hand,
            wager = hand.wager;
          var zhushu = self.zhushu(wager);
          hand.isEnough = zhushu != 0;
          hand.money = zhushu * 2;
        }
      };
      return new compute();
    };
    var Selecter = function Selecter(Model) {
      //--创建选择操作逻辑对象
      /**
      * 结构要求：包含 选球区域数据（直选、组选）、miss（遗漏）、hand 和 random 四个逻辑对象，以及 当前逻辑状态 type（默认：P），用来切换 直选 和 组选 显示、计算逻辑。
      * hand对象，要求包含 遗漏数据（红、蓝）、是否显示遗漏、 选号数据（红、蓝）、选胆数据（红、蓝） 和 计算结果；
      * 		还需要 clear清空方法，选球方法、选胆方法，这3个方法执行后，调用compute对象的计算方法，需要注明计算模式（wagerType的键值 || lan）
      * 		还需要 提交号码篮方法
      * random对象，需要包含 随机注数、 随机类型（P || C）、 随机结果属性
      * 		还需要 执行随机选号方法、清空方法、提交号码篮方法
      * 单注数据格式：p: {wt: "P", ball: [[$num, $num, $num, ………………], [$num, $num, $num, ………………], [$num, $num, $num, ………………]]}
      * 				PS: {wt: "PS", ball: [$num, $num, ………………]}
      * 				C: {wt: "C", ball: [$num, $num, $num]}
      * 				C3: {wt: "C3", ball: [[$num, $num], [$num, $num, $num]]}//--前为胆，后为托。不设胆时，数组长度为1
      * 				C6: {wt: "C6", ball: [[$num, $num], [$num, $num, $num]]}//--前为胆，后为托。不设胆时，数组长度为1
      * 				C3C6: {wt: "C3C6", ball: [[$num, $num], [$num, $num, $num]]}//--前为胆，后为托。不设胆时，数组长度为1
      * 				CS: {wt: "CS", ball: [$num, $num, ………………]}
      */
      var key = Model.key;
      //--遗漏数据对象
      itou.dataModel.config({
        key: key + '_miss',
        opts: {
          lottery_type: {
            t: '彩种',
            k: 'lottery_type',
            d: ''
          },
          no: {
            t: '彩期',
            k: 'lottery_no',
            d: ''
          },
          result: {
            t: '彩果',
            k: 'lottery_result',
            d: ''
          },
          num: {
            t: '遗漏数量',
            k: '',
            d: function d(missData, me) {
              //--通过missData， 得出 {P: [[], [], []], C: []}形式的结果
              var P = [missData.P_1, missData.P_2, missData.P_3],
                C = missData.C,
                r = {
                  P: [[], [], []],
                  C: []
                }; //--P = 直选， C = 组选。
              if (key == 'P5') {
                P = [missData.P_1, missData.P_2, missData.P_3, missData.P_4, missData.P_5];
                r.P = [[], [], [], [], []];
              } else if (key == 'P7' || key == 'NP7') {
                P = [missData.P_1, missData.P_2, missData.P_3, missData.P_4, missData.P_5, missData.P_6, missData.P_7];
                r.P = [[], [], [], [], [], [], []];
              }
              P.forEach(function (element, index) {
                var p_i = r.P[index];
                element.forEach(function (missOpts) {
                  p_i.push(missOpts.gap);
                }, this);
              }, this);
              if (C) {
                C.forEach(function (element) {
                  r.C.push(element.gap);
                }, this);
              }
              return r;
            }
          }
        }
      });
      var miss = itou.dataModel.dataFactory.create(key + '_miss'); //--手选功能对象构造函数创建
      miss.prototype.get = function () {
        //--从接口获取遗漏信息
        var self = this;
        return itou.get({
          url: 'shuzi/chart',
          data: {
            lottery_type: key
          }
        }).then(function (data) {
          self.reload(data);
        });
      };
      itou.dataModel.config({
        key: key + '_hand',
        opts: {
          wt: {
            t: '玩法',
            k: '',
            d: function d() {
              if (Model.cache.type == 'C') {
                return 'C3C6';
              } else {
                return 'P';
              }
            }
          },
          //--P || PS || C3 || C6 || C3C6 || CS
          wt1: {
            t: '玩法',
            k: '',
            d: function d(selecter, me) {
              return me.wt;
            }
          },
          //--切换玩法时存储临时数据
          wager: {
            t: '玩法',
            k: '',
            d: function d(selecter, me) {
              return selecter.createWager(me.wt);
            }
          },
          editIndex: {
            t: '编辑的号码在号码篮的index',
            k: '',
            d: function d(data, me) {
              var prevPage = window.prevPage,
                cache = Model.cache,
                //--缓存数据
                list = cache.list,
                len = list.length,
                i = 0,
                r = -1;
              //--页面如果不是从号码篮返回，则直接返回-1
              if (!(prevPage.has('/confirm/') && prevPage.has('/basket/'))) {
                return r;
              }
              while (i < len) {
                //--检查所有选号，获取正在编辑的号码index
                if (list[i].edit) {
                  r = i;
                  break;
                }
                i++;
              }
              if (r > -1) {
                //--查到正在编辑的号码
                me.wager = list[r]; //--号码复制到手选区
                window.setTimeout(function () {
                  //--稍做延时后，去重、计算
                  Model.compute.money();
                }, 200);
              }
              return r; //--返回结果index，如果没有正在编辑的，返回-1
            }
          },

          showMiss: {
            t: '是否显示遗漏',
            k: '',
            d: false
          },
          miss: {
            t: '遗漏数据',
            k: '',
            d: function d(data, me) {
              return new miss();
            }
          },
          isEnough: {
            t: '是否足够',
            k: '',
            d: false
          },
          money: {
            t: '彩金',
            k: '',
            d: 0
          },
          maxDan: {
            t: '最大设胆数',
            k: '',
            d: '2'
          },
          message: {
            t: '底部提示',
            k: '',
            d: function d() {
              return {
                P: '每位至少选择1个号码',
                PS: '至少选择1个号码',
                CS: '至少选择1个号码',
                C3C6: '至少选择2个号码',
                C3: '至少选择2个号码',
                C6: '至少选择3个号码',
                CD3: '每位至少选择1个不同的号码'
              };
            }
          },
          minNum: {
            t: '最少选号个数',
            k: '',
            d: function d() {
              return {
                P: [1, 1, 1, 1, 1, 1, 1],
                PS: 1,
                CS: 1,
                C3C6: 2,
                C3: 2,
                C6: 3,
                CD3: [1, 1]
              };
            }
          }
        }
      });
      var hand = itou.dataModel.dataFactory.create(key + '_hand'); //--手选对象构造函数创建
      hand.prototype.isEmpty = function () {
        //--手选选项数据是否为空
        var self = this,
          wager = self.wager,
          wt = wager.wt,
          ball = wager.ball,
          r = true,
          l = 0;
        if (wt == 'P' || wt == 'CD3' || wt.has('C3') || wt.has('C6')) {
          ball.forEach(function (element) {
            l += element.length;
          }, this);
          r = l == 0;
        } else {
          r = ball.length == 0;
        }
        return r;
      };
      hand.prototype.autoSelect = function () {
        //--手选自动选择
        var self = this,
          compute = Model.compute,
          wager = self.wager,
          wt = wager.wt,
          ball = wager.ball,
          Ball = Model.selecter.ball;
        if (wt == 'P') {
          //--普通直选
          Ball.P.forEach(function (b, index) {
            ball.splice(index, 1, b.random(1));
          }, this);
        } else if (wt == 'CD3') {
          //--组三单式
          while (ball[0][0] == ball[1][0]) {
            Ball.CD3.forEach(function (b, index) {
              ball.splice(index, 1, b.random(1));
            }, this);
          }
        } else if (wt.has('C3') || wt.has('C6')) {
          //--组三组六
          var len = wt.has('C6') ? 3 : 2;
          ball.splice(1, 1, Ball.C.random(len));
        } else if (Ball[wt]) {
          //--和值
          wager.ball = Ball[wt].random(1);
        }
        compute.money();
      };
      hand.prototype.doShowMiss = function () {
        //--显示/隐藏遗漏
        var self = this;
        self.showMiss = !self.showMiss;
      };
      hand.prototype.wagerCheck = function () {
        //--检查选择数据，去除重复号码
        var self = this,
          wt = self.wt,
          wager = self.wager,
          pt = ['PS', 'C', 'CS'],
          //--普通一维投注
          dt = ['C3', 'C6', 'C3C6']; //--胆拖投注
        if (wt == 'P') {
          // self.wager.ball[0] = self.wager.ball[0].uniquelize();//--去重复
          // self.wager.ball[1] = self.wager.ball[1].uniquelize();//--去重复
          // self.wager.ball[2] = self.wager.ball[2].uniquelize();//--去重复
          for (var i = 0, len = self.wager.ball.length; i < len; i++) {
            self.wager.ball[i] = self.wager.ball[i].uniquelize(); //--去重复
          }
        } else if (pt.indexOf(wt) > -1) {
          self.wager.ball = wager.ball.uniquelize(); //--去重
        } else if (dt.indexOf(wt) > -1) {
          var dan = wager.ball[0],
            tuo = wager.ball[1];
          for (var i = tuo.length - 1; i >= 0; i--) {
            //--除去胆拖重合的数字
            var num = tuo[i];
            if (dan.indexOf(num) > -1) {
              tuo.splice(i, 1);
            }
          }
          self.wager.ball[0] = dan.uniquelize(); //--去重复
          self.wager.ball[1] = tuo.uniquelize(); //--去重复
        }

        return self.wager;
      };
      hand.prototype.doSelect = function (params) {
        //--执行选择事件
        /**
        * @params: {type: "dan || tuo ", num: @num, index: @index};
        */
        var self = this,
          wt = self.wt,
          wager = self.wagerCheck(),
          compute = Model.compute,
          pt = ['PS', 'C', 'CS'],
          //--普通一维投注
          dt = ['C3', 'C6', 'C3C6']; //--胆拖投注
        var num = params.num;
        if (wt == 'P' || wt == 'CD3') {
          //--普通直选|组3单式
          var index = params.index || 0,
            ws = wager.ball[index],
            wIndex = ws.indexOf(num);
          if (wIndex > -1) {
            ws.splice(wIndex, 1);
          } else {
            ws.push(num);
          }
          ws.sort(function (a, b) {
            return a - b;
          });
          wager.ball.splice(index, 1, ws);
        } else if (pt.indexOf(wt) > -1) {
          //--普通和值、组选和值、组选机选
          var index = wager.ball.indexOf(num);
          if (index > -1) {
            wager.ball.splice(index, 1);
          } else {
            wager.ball.push(num);
          }
          wager.ball.sort(function (a, b) {
            return a - b;
          });
        } else if (dt.indexOf(wt) > -1) {
          //--组选
          var type = params.type || 'tuo',
            //--胆拖投注类型，dan || tuo，默认 tuo
            dan = wager.ball[0],
            //--胆选中项
            tuo = wager.ball[1],
            //--托选中项
            dIndex = dan.indexOf(num),
            //--胆index
            tIndex = tuo.indexOf(num); //--拖index
          if (type == 'tuo') {
            if (dIndex == -1 && tIndex == -1) {
              tuo.push(num);
            }
            if (dIndex > -1) {
              dan.splice(dIndex, 1);
            }
            if (tIndex > -1) {
              tuo.splice(tIndex, 1);
            }
          } else {
            if (wt == 'C3') {
              self.maxDan = 1;
            } else {
              self.maxDan = 2;
            }
            var max = self.maxDan;
            if (dIndex == -1 && tIndex == -1) {
              if (dan.length >= max) {
                // vm2.showToast("最多设置" + max + "个胆");
                return;
              } else {
                dan.push(num);
              }
            } else if (dIndex > -1) {
              dan.splice(dIndex, 1);
              if (tuo.indexOf(num) == -1) {
                tuo.push(num);
              }
            } else if (tIndex > -1) {
              if (dan.length >= max) {
                return;
              }
              tuo.splice(tIndex, 1);
              if (dan.indexOf(num) == -1) {
                if (dan.length >= max) {
                  // vm2.showToast("最多设置" + max + "个胆");
                  return;
                } else {
                  dan.push(num);
                }
              }
            }
          }
          dan.sort();
          tuo.sort();
          wager.ball.splice(0, 1, dan);
          wager.ball.splice(1, 1, tuo);
        }
        compute.money();
      };
      hand.prototype.addToLan = function () {
        //--添加到号码栏
        var self = this,
          lan = Model.lan,
          wager = self.wager,
          wt = self.wt,
          pt = ['PS', 'C', 'CS'],
          //--普通一维投注
          dt = ['C3', 'C6', 'C3C6'],
          //--胆拖投注
          min = self.minNum[wt],
          msg = self.message[wt],
          key = '__p33d_addToLan_btn_delay',
          delay = 300;
        if (self.isEmpty()) {
          self.autoSelect();
          return;
        }
        if (self.doing) {
          //--防止重复提交
          return;
        }
        self.doing = true; //--防重复标记
        itou.outil.timmer.newTimmer({
          //--延时重置防重复标记
          key: key,
          timeout: delay,
          fun: function fun() {
            self.doing = false;
            itou.outil.timmer.clearTimmer(key);
          }
        });
        if (self.editIndex > -1) {
          //--有号码正在编辑
          lan.list[self.editIndex] = self.wager;
          Model.cache.save();
          return true;
        }
        if (wt == 'P') {
          var ball = wager.ball,
            enough = true;
          for (var i = 0, len = ball.length; i < len; i++) {
            if (ball[i].length < min[i]) {
              enough = false;
              break;
            }
          }
          if (!enough) {
            vm2.showToast(msg);
            return;
          }
        } else if (wt == 'CD3') {
          if (!self.isEnough) {
            window.vm.showToast(msg);
            return;
          }
        } else if (pt.indexOf(wt) > -1) {
          if (wager.ball.length < min) {
            vm2.showToast(msg);
            return;
          }
        } else if (dt.indexOf(wt) > -1) {
          if (wager.ball[0].length + wager.ball[1].length < min) {
            vm2.showToast(msg);
            return;
          }
        }
        if (wager.wt == 'C3C6' && wager.ball[0].length + wager.ball[1].length == 2) {
          wager.wt = 'C3';
          wager.text = '组3';
        }
        if (wager.wt == 'CD3') {
          var ball = wager.ball,
            zh = ball.getZuhes(),
            len = zh.length;
          // console.log(zh);
          for (var i = 0; i < len; i++) {
            if (zh[i].length == 2 && zh[i][0] != zh[i][1]) {
              var _wager = {
                wt: wager.wt,
                text: wager.text,
                ball: [zh[i][0], zh[i][0], zh[i][1]]
              };
              lan.list.push(_wager);
            }
          }
        } else {
          lan.list = lan.list.concat(self.wager);
        }
        Model.cache.save();
        return true;
      };
      itou.dataModel.config({
        key: key + '_random',
        opts: {
          // wt: {t: "玩法", k: "", d: "P"},//--P || PS || C3 || C6 || C3C6 || CS
        }
      });
      var random = itou.dataModel.dataFactory.create(key + '_random'); //--机选对象构造函数创建
      random.prototype["do"] = function (num) {
        var self = this,
          type = Model.lan.type,
          ball = $base.ball.normal,
          ball_np7 = $base.ball.np7_b,
          r = [];
        for (var i = 0; i < num; i++) {
          var wager = Model.selecter.createWager(type); //--创建投注数据模板
          if (type == 'P') {
            wager.ball.forEach(function (element, i) {
              //--普通直选投注
              if (key == 'NP7' && i >= 6) {
                element[0] = ball_np7.random(1)[0];
              } else {
                element[0] = ball.random(1)[0];
              }
            }, this);
          } else {
            //--组选随机禁止出现豹子，但是可以两个重号，因此先随机两个不同的数，再随机一个号，避免出现豹子（Array.random函数随机结果不会有重号）
            wager.ball = wager.ball.concat(ball.random(2)).concat(ball.random(1));
            wager.ball.sort();
          }
          r.push(wager);
        }
        return r;
      };
      itou.dataModel.config({
        key: key + '_selecter',
        opts: {
          ball: {
            t: '选择区域配置',
            k: '',
            d: function d() {
              var num = key.replace(/\D/g, '');
              $config.ball.P.splice(0);
              for (var i = 0; i < num; i++) {
                $config.ball.P.push($base.ball.normal.slice(0));
              }
              if (key == 'NP7') {
                //--新七星彩
                $config.ball.P.splice(-1, 1, $base.ball.np7_b); //--新七星彩后区
              }

              return $config.ball;
            }
          },
          hand: {
            t: '手选对象',
            k: '',
            d: function d(data, me) {
              return new hand(me);
            }
          },
          random: {
            t: '机选对象',
            k: '',
            d: function d(data, me) {
              return new random(me);
            }
          }
        }
      });
      var selecter = itou.dataModel.dataFactory.create(key + '_selecter'); //--计算逻辑对象构造函数创建
      selecter.prototype.createWager = function (wt) {
        //--根据投注类型，创建空的选项数据
        var wagerModel = {
          //--不同玩法选择数据原型
          P: {
            wt: 'P',
            ball: [[], [], []]
          },
          PS: {
            wt: 'PS',
            ball: []
          },
          C: {
            wt: 'C',
            ball: []
          },
          C3: {
            wt: 'C3',
            ball: [[], []]
          },
          //--前为胆，后为托。不设胆时，数组长度为1
          C6: {
            wt: 'C6',
            ball: [[], []]
          },
          //--前为胆，后为托。不设胆时，数组长度为1
          C3C6: {
            wt: 'C3C6',
            ball: [[], []]
          },
          //--前为胆，后为托。不设胆时，数组长度为1
          CS: {
            wt: 'CS',
            ball: []
          },
          CD3: {
            wt: 'CD3',
            ball: [[], []]
          } //--组3单式，前为重复号码，后为非重复号码
        };

        var key = Model.key;
        if (key == 'P5') {
          wagerModel.P.ball = [[], [], [], [], []];
        } else if (key == 'P7' || key == 'NP7') {
          wagerModel.P.ball = [[], [], [], [], [], [], []];
        }
        var r = wagerModel[wt] || null;
        if (r) {
          var ball = r.ball.slice(0);
          for (var i = 0, len = ball.length; i < len; i++) {
            if (ball[i]) {
              ball[i] = ball[i].slice(0);
            }
          }
          r.ball = ball;
          r.text = $base.wagerType[wt] || null;
        }
        return r;
      };
      selecter.prototype.changeWT = function (wt) {
        //--切换投注方式（直选，组选）
        var self = this,
          oldType = self.hand.wt.has('C') ? 'C' : 'P',
          //--判断是直选还是组选
          newType = wt.has('C') ? 'C' : 'P';
        if (oldType != newType && Model.lan.list.length > 0) {
          self.hand.wt1 = wt; //--临时存储数据
          var msg = '不支持直选和组选混合投注，切换玩法将清空已选择号码，是否仍要切换？',
            title = '玩法切换提醒';
          vm2.showConfirmBox(msg, title, '', '__selecter_changeWT_ok', '是', '否');
        } else {
          self.hand.wt = wt;
          self.hand.wager = self.createWager(wt);
        }
        Model.compute.money();
      };
      selecter.prototype.clear = function () {
        var self = this;
        self.hand.wager = self.createWager(self.hand.wt);
        Model.compute.money();
      };
      selecter.prototype.init = function () {
        //--对象初始化，用于设置对话框事件监听
        var self = this;
        if (vm2) {
          vm2.$on('msgbox_ok', function (msg) {
            if (msg == '__selecter_changeWT_ok') {
              //--弹窗点击确定是执行
              Model.lan.clear();
              var wt = self.hand.wt1,
                newType = wt.has('C') ? 'C' : 'P';
              self.hand.wt = wt;
              self.hand.wager = self.createWager(wt);
              Model.lan.type = newType;
              Model.cache.type = newType;
            }
          });
        }
      };
      selecter.prototype.addToLan = function () {
        //--手选、机选通用添加到号码篮功能
        var self = this;
        if (self.hand.addToLan()) {
          Gray.$page.loadPage('/confirm/basket/p33d/?back=' + vm2.backurl);
        }
      };
      selecter.prototype.gotoLan = function () {
        //--手选、机选通用添加到号码篮功能
        var self = this;
        Gray.$page.loadPage('/confirm/basket/p33d/?back=' + vm2.backurl);
      };
      var _selecter = new selecter();
      return _selecter;
    };
    var Lan = function Lan(Model) {
      //--创建号码篮逻辑对象
      /**
      * 结构要求：包含 选号列表信息、倍数、总金额、 是否追加
      * 		还需要 单个删除、清空方法、追加方法
      * 功能要求：页面加载后，从缓存对象获取号码篮信息
      */
      //--号码篮数据对象
      var key = Model.key;
      itou.dataModel.config({
        key: key + '_lan',
        opts: {
          currShow: {
            t: '当前显示模式，lan || random',
            k: '',
            d: 'lan'
          },
          zhushu: {
            t: '注数',
            k: '',
            d: 0
          },
          beishu: {
            t: '投注倍数',
            k: '',
            d: function d() {
              return Model.cache.beishu || 1;
            }
          },
          maxBeishu: {
            t: '最多投注倍数',
            k: '',
            d: 10000
          },
          money: {
            t: '总彩金',
            k: '',
            d: 0
          },
          maxMoney: {
            t: '最多总彩金',
            k: '',
            d: 1000000
          },
          maxBall: {
            t: '最多行数',
            k: '',
            d: 200
          },
          type: {
            t: '投注类型，直选或组选',
            k: '',
            d: function d() {
              return Model.cache.type || 'P';
            }
          },
          list: {
            t: '号码篮选号列表',
            k: '',
            d: function d() {
              return Model.cache.list || [];
            }
          }
        }
      });
      var lan = itou.dataModel.dataFactory.create(key + '_lan'); //--选号功能对象构造函数创建
      lan.prototype.beishuAdd = function (num) {
        //--倍数增减
        var self = this,
          compute = Model.compute;
        self.beishu *= 1;
        self.beishu += num;
        if (self.beishu * 1 < 1) {
          self.beishu = 1;
        } else if (self.beishu * 1 > self.maxBeishu) {
          self.beishu = self.maxBeishu;
        }
        compute.money(); //--计算号码篮彩金
        Model.cache.save();
      };
      lan.prototype.del = function (index) {
        //--删除号码篮某一行
        var self = this,
          compute = Model.compute,
          cache = Model.cache,
          ball = self.list[index];
        self.list.splice(index, 1);
        compute.money(); //--计算号码篮彩金
        cache.save();
      };
      lan.prototype.clear = function () {
        //--清空号码篮
        var self = this,
          cache = Model.cache,
          compute = Model.compute;
        self.list.splice(0);
        compute.money();
        // compute.money("lan");//--计算金额
        cache.save();
      };
      lan.prototype.random = function (num) {
        //--机选指定注数号码
        var self = this,
          maxBall = self.maxBall,
          last = maxBall - self.list.length,
          selecter = Model.selecter,
          cache = Model.cache,
          compute = Model.compute;
        if (last == 0) {
          vm2.showToast('最多添加' + maxBall + '行数据');
          return;
        } else if (num > last) {
          num = last;
        }
        var balls = selecter.random["do"](num); //--生成随机号码
        self.list = self.list.concat(balls);
        compute.money();
        cache.save();
        try {
          window.setTimeout(function () {
            $('body').scrollTop(999999);
          }, 100);
        } catch (error) {
          console.error(error.message);
        }
      };
      return new lan();
    };
    var Result = function Result(Model) {
      //--创建做单数据处理对象
      /**
      * 结构要求：无自带属性，需要处理号码篮数据方法，返回做单数据
      */
      var key = Model.key;
      itou.dataModel.config({
        //--做单内容数据对象
        key: key + '_wager',
        opts: {
          wt: {
            t: '玩法',
            k: '',
            d: function d(wagerData, me) {
              return wagerData.wt || 'P'; //--P = 直选
            }
          },

          c: {
            t: '注数',
            k: '',
            d: function d(wagerData, me) {
              var compute = Model.compute;
              try {
                return compute.zhushu(wagerData);
              } catch (error) {
                console.error(error.message);
                return 1;
              }
            }
          },
          m: {
            t: '金额',
            k: '',
            d: function d(wagerData, me) {
              var compute = Model.compute;
              try {
                return compute.zhushu(wagerData) * 2;
              } catch (error) {
                console.error(error.message);
                return 1 * 2;
              }
            }
          },
          wager: {
            t: '投注单内容',
            k: '',
            d: function d(wagerData, me) {
              var wt = wagerData.wt,
                pt = ['PS', 'C', 'CS', 'CD3'],
                //--普通一维投注
                dt = ['C3', 'C6', 'C3C6']; //--胆拖投注
              ball = wagerData.ball, r = '';
              if (wt == 'P') {
                r = [];
                ball.forEach(function (element) {
                  r.push(element.join(','));
                }, this);
                r = r.join('|');
              } else if (pt.indexOf(wt) > -1) {
                r = ball.join(',');
              } else if (dt.indexOf(wt) > -1) {
                if (ball[0].length > 0 && ball[1].length > 0) {
                  r = [];
                  ball.forEach(function (element) {
                    r.push(element.join(','));
                  }, this);
                  r = r.join('$');
                } else {
                  r = ball[0].join(',') + ball[1].join(',');
                }
              }
              return r;
            }
          },
          abs: {
            t: '胆数据',
            k: '',
            d: function d(wagerData, me) {
              var wt = wagerData.wt,
                pt = ['PS', 'C', 'CS', 'CD3'],
                //--普通一维投注
                dt = ['C3', 'C6', 'C3C6']; //--胆拖投注
              ball = wagerData.ball, r = '';
              if (dt.indexOf(wt) > -1) {
                r = ball[0].join(',');
              }
              return r;
            }
          },
          multiple: {
            t: '倍数',
            k: '',
            d: function d(wagerData, me) {
              var lan = Model.lan;
              return lan.beishu;
            }
          }
        }
      });
      var wager = itou.dataModel.dataFactory.create(key + '_wager'); //--做单内容对象构造函数创建

      itou.dataModel.config({
        //--做单数据对象
        key: key + '_result',
        opts: {
          lottery_type: {
            t: '采种',
            k: '',
            d: function d() {
              return key;
            }
          },
          wager_type: {
            t: '玩法',
            k: '',
            d: function d(lanData, me) {
              var lan = lanData;
              return lan.type || 'P'; //--P = 直选， PA = 追加
            }
          },

          lottery_no: {
            t: '才气',
            k: '',
            d: function d(lanData, me) {
              return Model.qicheng.no;
            }
          },
          manner: {
            t: '投注方式',
            k: '',
            d: function d(lanData, me) {
              return [];
            }
          },
          count: {
            t: '注数',
            k: '',
            d: function d(lanData, me) {
              return lanData.zhushu * lanData.beishu;
            }
          },
          money: {
            t: '金额',
            k: 'money',
            d: 0
          },
          wager_store: {
            t: '投注单内容',
            k: '',
            d: function d(lanData, me) {
              var r = [],
                hasDan = false,
                hasTuo = false;
              lanData.list.forEach(function (element) {
                var wg = new wager(element).getJson();
                if (wg.wt == 'C3' && wg.abs == wg.wager) {
                  wg.abs = '';
                }
                if (wg.abs == '') {
                  hasTuo = true;
                } else {
                  hasDan = true;
                }
                r.push(wg);
              }, this);
              if (hasTuo) {
                me.manner.push(0);
              }
              if (hasDan) {
                me.manner.push(1);
              }
              return r;
            }
          },
          hasEmpty: {
            t: '投注是否有空行',
            k: '',
            d: function d(lanData, me) {
              var r = false;
              var wager_store = me.wager_store;
              for (var i = 0, len = wager_store.length; i < len; i++) {
                var wager = wager_store[i].wager;
                if (!wager || wager == '|') {
                  r = true;
                }
              }
              return r;
            }
          },
          wager_store_json: {
            t: '投注单内容_json字符串',
            k: '',
            d: function d(lanData, me) {
              var wager_store = me.wager_store;
              me.wager_store = [];
              return JSON.stringify(wager_store);
            }
          }
        }
      });
      var result = itou.dataModel.dataFactory.create(key + '_result'); //--期程对象构造函数创建
      return new result();
    };

    /**
    * 创建整个逻辑对象
    * @key: 采种，排3 或者是 3D， value："P3" || "3D"
    */
    self.create = function (key, vm) {
      vm2 = vm;
      // _createQicheng(_config)
      itou.dataModel.config({
        key: key + '_model',
        opts: {
          key: {
            t: '页面类型，排三或3D',
            k: '',
            d: function d(data, me) {
              return key;
            }
          },
          cache: {
            t: '缓存对象',
            k: '',
            d: function d(data, me) {
              return Cache(me);
            }
          },
          compute: {
            t: '计算逻辑对象',
            k: '',
            d: function d(data, me) {
              return Compute(me);
            }
          },
          selecter: {
            t: '选择逻辑对象',
            k: '',
            d: function d(data, me) {
              return Selecter(me);
            }
          },
          qicheng: {
            t: '当前期程对象',
            k: '',
            d: function d(data, me) {
              return Qicheng(me);
            }
          },
          lan: {
            t: '号码篮对象',
            k: '',
            d: function d(data, me) {
              return Lan(me);
            }
          },
          result: {
            t: '做单数据对象',
            k: '',
            d: function d(data, me) {
              return Result(me);
            }
          },
          isReady: {
            t: '是否就绪',
            k: '',
            d: true
          },
          isLan: {
            t: '是否是号码篮',
            k: '',
            d: function d(data, me) {
              var href = Gray.$page.href || window.location.href;
              if (href.toLowerCase().has('/confirm/basket/p33d/')) {
                //--号码篮
                var isLan = true;
              } else {
                var isLan = false;
              }
              return isLan;
            }
          },
          isInit: {
            t: '是否初始化完成',
            k: '',
            d: function d(data, me) {
              me.compute.money('lan');
              return true;
            }
          }
        }
      });
      var model = itou.dataModel.dataFactory.create(key + '_model'); //--期程对象构造函数创建
      return model;
    };
  };
  window.P3 = new P3();
})();

/***/ })

/******/ });