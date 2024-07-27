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
/******/ 		150: 0
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
/******/ 	deferredModules.push([311,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var _toConsumableArray = __webpack_require__(6);
var _defineProperty = __webpack_require__(1);
/**
 * 微信C端		双色球和大乐透通用配置
 * by zhaoyf	2017-03-22 13:46:45
 */
(function () {
  var number_computer = __webpack_require__(46);
  var SSQ = function SSQ() {
    //--双色球实例化函数
    var self = this,
      _default = {
        //--双色球与大乐透默认配置
        SSQ: {
          //--双色球配置信息
          ball: {
            //--选号范围
            red: 33,
            //--红球范围
            blue: 16 //--蓝球范围
          },

          select: {
            //--选择数量
            red: 6,
            //--红球选择数量
            blue: 1 //--篮球选择数量
          },

          key: 'SSQ',
          //--唯一键值
          danzhu: 2,
          //--单注彩金
          zhuijia: false,
          //--是否可追加
          beilv: (2 + 1) / 2 //--追加时彩金倍率
        },

        SuperLotto: {
          //--大乐透配置信息
          ball: {
            //--选号范围
            red: 35,
            //--红球范围
            blue: 12 //--蓝球范围
          },

          select: {
            //--选择数量
            red: 5,
            //--红球选择数量
            blue: 2 //--篮球选择数量
          },

          key: 'SuperLotto',
          //--唯一键值
          danzhu: 2,
          //--单注彩金
          zhuijia: true,
          //--是否可追加
          beilv: (2 + 1) / 2 //--追加时彩金倍率
        },

        KL8: {
          //--双色球配置信息
          ball: {
            //--选号范围
            red: 80,
            //--红球范围
            blue: 0 //--蓝球范围
          },

          select: {
            //--选择数量
            red: 5,
            //--红球选择数量
            blue: 0 //--篮球选择数量
          },

          key: 'KL8',
          //--唯一键值
          wt: {
            //--自玩法
            1: {
              wt: 'X1',
              text: '选一',
              bonus: '4.6元'
            },
            2: {
              wt: 'X2',
              text: '选二',
              bonus: '19元'
            },
            3: {
              wt: 'X3',
              text: '选三',
              bonus: '53元'
            },
            4: {
              wt: 'X4',
              text: '选四',
              bonus: '100元'
            },
            5: {
              wt: 'X5',
              text: '选五',
              bonus: '1000元'
            },
            6: {
              wt: 'X6',
              text: '选六',
              bonus: '3000元'
            },
            7: {
              wt: 'X7',
              text: '选七',
              bonus: '1万元'
            },
            8: {
              wt: 'X8',
              text: '选八',
              bonus: '5万元'
            },
            9: {
              wt: 'X9',
              text: '选九',
              bonus: '30万'
            },
            10: {
              wt: 'X10',
              text: '选十',
              bonus: '500万'
            }
          },
          danzhu: 2,
          //--单注彩金
          zhuijia: false,
          //--是否可追加
          beilv: (2 + 1) / 2 //--追加时彩金倍率
        }
      };

    self.config = function (key, params) {
      //--设置自定义配置
      _default[key] = _default[key] || {};
      _default[key] = $.extend({}, _default[key], params);
    };
    var outil = {};
    outil.createBall = function (num) {
      //--创建可选的红球和蓝球
      var r = [];
      for (var i = 1; i <= num; i++) {
        var ball = ('0' + i).right(2);
        r.push(ball);
      }
      return r;
    };
    Array.prototype.random = function (len) {
      //--从数组中随机取出指定长度数组
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

    var _createQicheng = function _createQicheng(_config, Model) {
      //--创建期程逻辑对象
      /**
      * 结构要求：包含 当前彩期信息、期程倒计时、 锁定倒计时属性、 获取数据倒计时
      * 		还需要 数据获取方法、彩期切换方法、 锁定计时方法
      * 功能要求：期程倒计时 小于 300秒时 开始 定期期程获取，获取数据倒计时 为 随机20~30的整数， 期程倒计时 和 获取数据倒计时 取二者中小的进行计时，计时结束，获取启程数据，如果启程切换，则执行彩旗切换方法和锁定计时方法
      */
      var key = _config.key;
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
                console.error(error.message);
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
          pool_prize: {
            t: '上一期奖池',
            k: '',
            d: function d(qichengData, me) {
              try {
                var num = qichengData.prize_info.pool_prize,
                  num1 = Math.pow(10, 8),
                  num2 = Math.pow(10, 4);
                if (num / num1 > 1) {
                  num = (num / num1).toFixed(1) + '亿';
                } else if (num / num2 > 1) {
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
            lottery_type: _config.key,
            station_user_id: itou.localJson.getJson('/user/shop/details/').id,
            station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
          },
          apiType: 'itApi',
          showErr: true //--接口超时是否跳转错误页面
        });
      };

      qicheng.prototype.start = function () {
        var self = this;
        if (self.remain_second == '' || self.remain_second < 0) {
          itou.msg.toast = '无法获取当前期程，请稍后再试';
          return;
        }
        if (self.remain_second > 300) {
          itou.outil.timmer.newTimmer({
            key: _config.key + '_qicheng',
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
            key: _config.key + '_qicheng',
            fun: function fun() {
              self.get().then(function (data) {
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
            key: _config.key + '_qicheng_lock',
            fun: function fun() {
              self.lockNum -= 1;
              if (self.lockNum == 0) {
                itou.outil.timmer.clearTimmer(_config.key + '_qicheng_lock');
              }
            },
            timeout: 1 * 1000
          });
        }
      };
      qicheng.prototype.change = function (data) {
        //--切换彩期
        var self = this;
        window.vm.showToast('第' + self.no + '期已截止，当前在售期为' + data.lottery_no + '期！');
        self.reload(data);
        Model.selecter.hand.miss.get();
        self.start();
      };
      var QC = new qicheng();
      QC.init();
      return QC;
    };
    var _createCache = function _createCache(_config, Model) {
      //--创建缓存逻辑对象
      /**
      * 结构要求：包含 号码篮缓存数据
      * 		还要有 保存、清空方法
      */
      var key = _config.key;
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
                var copy = itou.sessionData.getData('__dlt_nums_copy');
                itou.sessionData.setData('_' + key + '_lan_cache', copy);
                return copy;
              } else {
                itou.sessionData.setData('__dlt_nums_copy', {});
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
          zhui: {
            t: '是否追加',
            k: '',
            d: function d(cacheData, me) {
              return me.data.zhui || false;
            }
          },
          wt: {
            t: '子玩法',
            k: '',
            d: function d(cacheData, me) {
              return me.data.wt || 'X10';
            }
          }
        }
      });
      var cache = itou.dataModel.dataFactory.create(key + '_cache'); //--缓存对象构造函数创建
      cache.prototype.save = function () {
        //--保持缓存数据
        var self = this,
          lan = Model.lan;
        self.list = lan.list;
        self.zhui = lan.zhui;
        self.beishu = lan.beishu;
        self.wt = lan.wt;
        var Json = self.getJson();
        delete Json.data;
        itou.sessionData.setData('_' + key + '_lan_cache', Json);
      };
      return new cache();
    };
    var _createCompute = function _createCompute(_config, Model) {
      //--创建计算逻辑对象
      /**
      * 结构要求：无自带属性， 只有一个计算方法，根据 参数type（计算模式），对selected.hand、selected.random、 lan对象进行操作，并处理计算结果
      */
      var key = _config.key;
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
      //--计算选号注数
      compute.prototype.zhushu = function (ball) {
        // var self = this,
        // 	rDan = ball.dan.red,
        // 	rTuo = ball.tuo.red,
        // 	bDan = ball.dan.blue,
        // 	bTuo = ball.tuo.blue,
        // 	rMin = _config.select["red"],//--最少选球数
        // 	bMin = _config.select["blue"];//--最少选球数
        // var rNum = self.C(rTuo.length, rMin - rDan.length),
        // 	bNum = self.C(bTuo.length, bMin - bDan.length);
        // return rNum * bNum;
        // console.log(Model.result.lottery_type)
        var params = {
          multiple: 1,
          selected: {
            nums: [ball.tuo.red, ball.tuo.blue],
            abs: [ball.dan.red, ball.dan.blue]
          }
        };
        var type = Model.result.lottery_type.toLowerCase();
        if (type == 'ssq') {
          return number_computer.ssq(params).count;
        } else if (type == 'kl8') {
          params.sNum = _defineProperty({}, type, {
            r: _config.select.red,
            b: _config.select.blue
          });
          var r = number_computer.kl8(params);
          this.kl8Bonus = r.bonus;
          return r.count;
        } else {
          return number_computer.dlt(params).count;
        }
      };
      //--结果初始化
      compute.prototype.init = function (type) {
        var self = this;
        if (type == 'lan') {
          self.lanInit();
        }
      };
      //--号码篮计算结果初始化
      //--用于读取缓存后初始化结果 或者 清空后初始化结果
      compute.prototype.lanInit = function () {
        var self = this,
          lan = Model.lan,
          list = lan.list;
        self.money('lan'); //--计算号码栏彩金
      };
      //--计算彩金
      compute.prototype.money = function (type) {
        var self = this;
        if (type == 'lan') {
          var lan = Model.lan,
            list = lan.list;
          lan.zhushu = 0;
          lan.bonus = 0;
          list.forEach(function (element) {
            lan.zhushu += self.zhushu(element); //--计算每行选号珠输
            console.log(self.kl8Bonus);
            lan.bonus += self.kl8Bonus; //--计算每行选号珠输
          }, this);
          lan.money = lan.beishu * lan.zhushu * 2 * (lan.zhui && lan.canZhui ? lan.beilv : 1);
        } else if (type == 'hand') {
          var hand = Model.selecter.hand,
            rMin = Model.selecter.ball.num.red,
            bMin = Model.selecter.ball.num.blue,
            result = hand.result;
          result.redNum = hand.dan.red.length + hand.tuo.red.length;
          result.blueNum = hand.dan.blue.length + hand.tuo.blue.length;
          result.isEnough = result.redNum >= rMin && result.blueNum >= bMin;
          var zhushu = self.zhushu({
            dan: hand.dan,
            tuo: hand.tuo
          });
          result.money = zhushu * 2;
        }
      };
      return new compute();
    };
    var _createSelecter = function _createSelecter(_config, Model) {
      //--创建选择操作逻辑对象
      /**
      * 结构要求：包含 选球区域数据（红、蓝）、hand 和 random 三个逻辑对象，以及 当前逻辑状态 type（默认：hand），用来切换 手选 和 机选 显示、计算逻辑。
      * hand对象，要求包含 遗漏数据（红、蓝）、是否显示遗漏、 选号数据（红、蓝）、选胆数据（红、蓝） 和 计算结果；
      * 		还需要 clear清空方法，选球方法、选胆方法，这3个方法执行后，调用compute对象的计算方法，需要注明计算模式（selected || random || lan）
      * 		还需要 提交号码篮方法
      * random对象，需要包含 随机注数、 随机设置（红蓝球的胆和拖）属性、 是否有随机设置属性、随机结果属性、 计算结果属性
      * 		还需要 设置胆托方法、执行随机选号方法、清空方法、提交号码篮方法
      * 单注数据格式：{tuo: {red: [], blue: []}, dan: {red: [], blue: []}}
      */
      var key = _config.key,
        ball = _config.ball,
        red = outil.createBall(ball.red),
        //--获得红球选项值
        blue = outil.createBall(ball.blue); //--获得蓝球选项值
      function settingInit() {
        //--机选设置初始化
        var r = {};
        r.tuo = {
          red: red.slice(0),
          blue: blue.slice(0)
        };
        r.dan = {
          red: [],
          blue: []
        };
        return r;
      }
      //--红蓝球数据对象
      itou.dataModel.config({
        key: key + '_ball',
        opts: {
          red: {
            t: '红球区域数据对象',
            k: '',
            d: function d() {
              return red;
            }
          },
          blue: {
            t: '蓝球区域数据对象',
            k: '',
            d: function d() {
              return blue;
            }
          },
          num: {
            t: '单注选球数量',
            k: '',
            d: function d() {
              var r = {};
              // console.warn(_config)
              r.red = _config.select.red; //--红球数量
              r.blue = _config.select.blue; //--蓝球数量
              // console.warn(r);
              return r;
            }
          }
        }
      });
      var ball = itou.dataModel.dataFactory.create(key + '_ball'); //--选球区域数据构造函数创建
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
              //--通过missData 和 红（蓝）球选项值， 最终计算出{red: {"01": $num, "02": $num …………}, blue: {"01": $num, "02": $num …………}}形式的数据
              if (me.lottery_type == 'KL8') {
                var rMiss = missData.X,
                  r = {
                    red: {},
                    blue: {}
                  };
                red.forEach(function (element) {
                  r.red[element] = rMiss[element * 1].gap;
                }, this);
                return r;
              }
              var rMiss = missData.P[1],
                bMiss = missData.P[2],
                r = {
                  red: {},
                  blue: {}
                };
              red.forEach(function (element) {
                r.red[element] = rMiss[element * 1].gap;
              }, this);
              blue.forEach(function (element) {
                r.blue[element] = bMiss[element * 1].gap;
              }, this);
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
          },
          apiType: 'itApi'
        }).then(function (data) {
          self.reload(data);
        });
      };
      //--手选区域逻辑对象
      itou.dataModel.config({
        key: key + '_hand',
        opts: {
          parent: {
            t: '父对象——selecter对象',
            k: '',
            d: function d(data) {
              return data.parent;
            }
          },
          danMax: {
            t: '最大可设胆数',
            k: '',
            d: function d() {
              var r = {
                red: _config.select['red'] - 1,
                blue: _config.select['blue'] - 1
              };
              return r;
            }
          },
          miss: {
            t: '遗漏数据',
            k: '',
            d: function d() {
              return new miss();
            }
          },
          showMiss: {
            t: '显示遗漏数据',
            k: '',
            d: false
          },
          dan: {
            t: '胆数据',
            k: '',
            d: function d() {
              return {
                red: [],
                blue: []
              };
            }
          },
          tuo: {
            t: '拖数据',
            k: '',
            d: function d() {
              return {
                red: [],
                blue: []
              };
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
                me.dan = list[r].dan; //--号码复制到手选区
                me.tuo = list[r].tuo;
                window.setTimeout(function () {
                  //--稍做延时后，去重、计算
                  me.dereplication();
                }, 200);
              }
              return r; //--返回结果index，如果没有正在编辑的，返回-1
            }
          },

          result: {
            t: '计算条件和结果',
            k: '',
            d: function d() {
              var r = {};
              r.isEnough = false; //--选球是否足够单注
              r.redNum = 0; //--选择的红球数量
              r.blueNum = 0; //--选择的蓝球数量
              r.money = 0; //--彩金
              return r;
            }
          }
        }
      });
      var hand = itou.dataModel.dataFactory.create(key + '_hand'); //--手选功能对象构造函数创建
      //--更换规定的选球数
      hand.prototype.changeSelectNum = function (type, num) {
        var self = this;
        if (_config.select[type]) {
          if (_config.select[type] == num) {
            return;
          }
          // self.clear();
          _config.select[type] = num;
          self.parent.ball.num[type] = num;
          self.danMax['red'] = num - 1; //--更新最大可设胆数
        }

        self.dereplication();
      };
      //--一键全拖：将剩下未选中的号码全部选中为拖
      hand.prototype.tuoAll = function () {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'red';
        var self = this;
        var ball = self.parent.ball[type] || [];
        var dan = self.dan[type] || [];
        var tuo = self.tuo[type] || [];
        for (var i = 0, len = ball.length; i < len; i++) {
          var num = ball[i];
          if (dan.indexOf(num) == -1 && tuo.indexOf(num) == -1) {
            tuo.push(num);
          }
        }
        self.dereplication();
      };
      hand.prototype.doShowMiss = function () {
        //--显示/隐藏遗漏
        var self = this;
        self.showMiss = !self.showMiss;
      };
      hand.prototype.dereplication = function () {
        //--数据去重复化，同色胆拖不可重复，若重复则保留胆
        var self = this,
          redDan = self.dan.red,
          redTuo = self.tuo.red,
          blueDan = self.dan.blue,
          blueTuo = self.tuo.blue;
        for (var i = redTuo.length - 1; i >= 0; i--) {
          if (redDan.indexOf(redTuo[i]) > -1) {
            redTuo.splice(i, 1);
          }
        }
        for (var i = blueTuo.length - 1; i >= 0; i--) {
          if (blueDan.indexOf(blueTuo[i]) > -1) {
            blueTuo.splice(i, 1);
          }
        }
        Model.compute.money('hand'); //--计算手选区域结果
      };

      hand.prototype.hit = function (ball, color) {
        //--触发点击事件，点一下选中，第二下设胆，第三下取消
        var self = this,
          dan = self.dan[color],
          //--胆选中项
          tuo = self.tuo[color],
          //--拖选中项
          dIndex = dan.indexOf(ball),
          //--所选球的index
          tIndex = tuo.indexOf(ball); //--所选球的index
        if (tIndex > -1) {
          self.longHit(ball, color);
        } else {
          self.shortHit(ball, color);
        }
      };
      hand.prototype.shortHit = function (ball, color) {
        //--单机红球、蓝球
        var self = this,
          dan = self.dan[color],
          //--胆选中项
          tuo = self.tuo[color],
          //--拖选中项
          dIndex = dan.indexOf(ball),
          //--所选球的index
          tIndex = tuo.indexOf(ball); //--所选球的index
        if (dIndex > -1) {
          dan.splice(dIndex, 1); //--取消胆选中状态
        } else if (tIndex > -1) {
          tuo.splice(tIndex, 1); //--取消拖选中状态
        } else if (tIndex == -1) {
          tuo.push(ball); //--设置拖选中状态
        } else {
          return;
        }
        self.dereplication();
      };
      hand.prototype.longHit = function (ball, color) {
        //--长按红球、蓝球进行设胆
        var self = this,
          max = _config.select[color] - 1,
          dan = self.dan[color],
          //--胆选中项
          tuo = self.tuo[color],
          //--拖选中项
          dIndex = dan.indexOf(ball),
          //--所选球的index
          tIndex = tuo.indexOf(ball); //--所选球的index
        if (max == 0) {
          //--双色球蓝球禁止设胆
          return;
        }
        if (dan.length >= max && dIndex == -1) {
          //--超过最大选胆数
          var _selecter = Model.selecter;
          var blueNum = _selecter.ball.num.blue; //--规定的蓝球数
          if (!blueNum) {
            window.vm.showToast('当前玩法最多设' + max + '个胆');
          } else {
            window.vm.showToast((color == 'red' ? '红' : '蓝') + '球最多设' + max + '个胆');
          }
          return;
        }
        if (dIndex > -1) {
          dan.splice(dIndex, 1); //--取消胆选中状态
          tuo.push(ball);
        }
        if (dIndex == -1) {
          dan.push(ball); //--设置胆选中状态
        }

        self.dereplication();
      };
      hand.prototype.clear = function () {
        //--清空首选区域选号
        var self = this,
          dan = self.dan,
          //--胆选中项
          tuo = self.tuo; //--拖选中项
        dan.red.splice(0); //--清空所有选中项
        tuo.red.splice(0);
        dan.blue.splice(0);
        tuo.blue.splice(0);
        self.dereplication();
      };
      hand.prototype.clearDan = function () {
        //--清空首选区域的设胆
        var self = this,
          dan = self.dan,
          //--胆选中项
          tuo = self.tuo; //--拖选中项
        tuo.red = [].concat(_toConsumableArray(tuo.red), _toConsumableArray(dan.red));
        dan.red.splice(0); //--清空所有选中项
        tuo.blue = [].concat(_toConsumableArray(tuo.blue), _toConsumableArray(dan.blue));
        dan.blue.splice(0);
        self.dereplication();
      };
      hand.prototype.addToLan = function () {
        //--将选择的数据添加到号码篮
        var self = this,
          lan = Model.lan,
          cache = Model.cache,
          key = '__ssq_addToLan_btn_delay',
          delay = 300;
        if (self.dan.red.length == 0 && self.tuo.red.length == 0 && self.dan.blue.length == 0 && self.tuo.blue.length == 0) {
          //--随机一条
          var r = self.parent.random["do"](1, 'lan'); //--没有选任何胆拖，自动随机一条
          self.tuo = r[0].tuo;
          self.dan = r[0].dan;
          self.dereplication();
          return false;
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
        if (!self.result.isEnough) {
          var _selecter2 = Model.selecter;
          var redNum = _selecter2.ball.num.red; //--规定的红球数
          var blueNum = _selecter2.ball.num.blue; //--规定的蓝球数
          var redText = blueNum ? '红球' : '号码';
          var _r = [];
          _r.push("\u81F3\u5C11\u9009".concat(redNum, "\u4E2A").concat(redText));
          if (blueNum) {
            _r.push("".concat(blueNum, "\u4E2A\u84DD\u7403"));
          }
          window.vm.showToast('请' + _r.join(''));
          return false;
        } else if (self.result.money > lan.maxMoney) {
          window.vm.showToast('金额不能超过' + lan.maxMoney / 10000 + '万元');
          return false;
        }
        self.dan.red.sort();
        self.dan.blue.sort();
        self.tuo.red.sort();
        self.tuo.blue.sort();
        if (self.editIndex == -1) {
          //--没有号码正在编辑
          var maxBall = lan.maxBall,
            last = maxBall - lan.list.length;
          if (last == 0) {
            window.vm.showToast('最多添加' + maxBall + '行数据');
            return false;
          }
          lan.list.push({
            dan: self.dan,
            tuo: self.tuo
          });
        } else {
          //--号码正在编辑
          lan.list[self.editIndex] = {
            dan: self.dan,
            tuo: self.tuo
          };
        }
        cache.save();
        return true;
      };
      //--机选区域逻辑对象
      itou.dataModel.config({
        key: key + '_random',
        opts: {
          parent: {
            t: '父对象——selecter对象',
            k: '',
            d: function d(data) {
              return data.parent;
            }
          },
          zhushu: {
            t: '随机注数',
            k: '',
            d: 5
          },
          max: {
            t: '最大随机注数',
            k: '',
            d: 100
          },
          setting: {
            t: '随机选号设置',
            k: '',
            d: function d() {
              return settingInit();
            }
          },
          hasSetting: {
            t: '是否有随机选号设置',
            k: '',
            d: false
          },
          balls: {
            t: '随机选择的数据',
            k: '',
            d: function d() {
              return [];
            }
          },
          showSetting: {
            t: '是否显示',
            k: '',
            d: false
          }
        }
      });
      var random = itou.dataModel.dataFactory.create(key + '_random'); //--机选功能对象构造函数创建
      random.prototype.dereplication = function () {
        //--数据去重复化，同色胆拖不可重复，若重复则保留胆
        var self = this,
          redDan = self.setting.dan.red,
          redTuo = self.setting.tuo.red,
          blueDan = self.setting.dan.blue,
          blueTuo = self.setting.tuo.blue;
        for (var i = redTuo.length - 1; i >= 0; i--) {
          if (redDan.indexOf(redTuo[i]) > -1) {
            redTuo.splice(i, 1);
          }
        }
        for (var i = blueTuo.length - 1; i >= 0; i--) {
          if (blueDan.indexOf(blueTuo[i]) > -1) {
            blueTuo.splice(i, 1);
          }
        }
      };
      random.prototype.shortHit = function (ball, color) {
        //--轻点红球、蓝球
        var self = this,
          min = _config.select[color],
          //--最少选球数
          all = _config.ball[color],
          //--球总数
          dan = self.setting.dan[color],
          //--胆选中项
          tuo = self.setting.tuo[color],
          //--拖选中项
          dIndex = dan.indexOf(ball),
          //--所选球的index
          tIndex = tuo.indexOf(ball); //--所选球的index
        if (dIndex > -1) {
          dan.splice(dIndex, 1); //--取消胆选中状态
          tuo.push(ball); //--设置拖选中状态
        } else if (tIndex > -1 && dan.length + tuo.length <= min) {
          var _selecter3 = Model.selecter;
          var blueNum = _selecter3.ball.num.blue; //--规定的蓝球数
          if (!blueNum) {
            var wt = '';
            if (Model.wt) {
              wt = Model.wt.text;
            }
            window.vm.showToast(wt + 'X球出现号码设置上限' + (all - min));
          } else {
            window.vm.showToast('X球出现号码设置上限' + (all - min));
          }
          return;
        } else if (tIndex > -1) {
          tuo.splice(tIndex, 1); //--取消拖选中状态
        } else if (tIndex == -1) {
          tuo.push(ball); //--设置拖选中状态
        }

        self.dereplication();
      };
      random.prototype.longHit = function (ball, color) {
        //--长按红球、蓝球
        var self = this,
          max = _config.select[color],
          //--最大设胆数
          dan = self.setting.dan[color],
          //--胆选中项
          tuo = self.setting.tuo[color],
          //--拖选中项
          dIndex = dan.indexOf(ball),
          //--所选球的index
          tIndex = tuo.indexOf(ball); //--所选球的index
        if (dan.length >= max && dIndex == -1) {
          //--超过最大选胆数
          var _selecter4 = Model.selecter;
          var blueNum = _selecter4.ball.num.blue; //--规定的蓝球数
          if (!blueNum) {
            var wt = '';
            if (Model.wt) {
              wt = Model.wt.text;
            }
            window.vm.showToast(wt + '最多设' + max + '个胆');
          } else {
            window.vm.showToast((color == 'red' ? '红' : '蓝') + '球最多设' + max + '个胆');
          }
          return;
        }
        if (tIndex > -1) {
          tuo.splice(tIndex, 1); //--取消拖选中状态
        }

        if (dIndex == -1) {
          dan.push(ball); //--设置胆选中状态
        }

        self.dereplication();
      };
      random.prototype.show = function () {
        //--显示/隐藏智能机选
        var self = this;
        self.showSetting = !self.showSetting;
      };
      random.prototype.doSetting = function () {
        //--机选设置
        var self = this;
        if (!Model.isLan) {
          //--非号码篮智能随机
          self["do"]();
        } else {
          //--号码篮智能随机
          Model.lan.random(self.zhushu, 'lan-selecter');
        }
        self.getHasSetting();
        self.show();
        try {
          window.vm.numkeyboard.close();
        } catch (error) {
          console.error(error.message);
        }
      };
      random.prototype.resetSetting = function () {
        //--机选设置初始化
        var self = this;
        self.setting = settingInit();
        self.zhushu = 5;
        self.hasSetting = false;
      };
      random.prototype.getHasSetting = function () {
        //--判断是否进行了设置
        var self = this,
          s = self.setting;
        self.hasSetting = s.dan.red.length == 0 || s.dan.blue.length == 0 || s.tuo.red.length == red.length || s.tuo.blue.length == blue.length;
      };
      random.prototype.clear = function () {
        //--清空机选结果
        var self = this;
        self.balls.splice(0);
      };
      /**
      * 执行机选，根据操作类型返回执行结果
      * @num:随机条数，可不填；如果指定数量参数，则忽略原本注数设置
      * @type: 随机场景;	
      * 		selecter = 选号页面执行只能机选，应用场景：选号页智能机选功能
      * 		selecter-nosetting = 选号页面执行机选，应用场景：选号页普通机选机选功能
      * 		lan = 号码篮页面执行机选(不套用智能机选设置)，数据不存入机选对象，应用场景：选号页“下一步”机选1条，号码篮机选1条
      * 		lan-selecter = 号码栏只能机选，套用设置，但数据不存入机选对象，应用场景：号码篮页智能机选功能
      */
      random.prototype["do"] = function (num, type) {
        var self = this,
          rMin = _config.select.red,
          //--最少选球数
          rDan = self.setting.dan.red,
          //--胆选中项
          rTuo = self.setting.tuo.red,
          //--拖选中项
          bMin = _config.select.blue,
          //--最少选球数
          bDan = self.setting.dan.blue,
          //--胆选中项
          bTuo = self.setting.tuo.blue,
          //--拖选中项
          z = num || self.zhushu,
          R = [];
        type = type ? type : 'selecter';
        for (var i = 1; i <= z; i++) {
          if (type == 'selecter' && self.balls.length >= 500) {
            window.vm.showToast('最大不能超过500条');
            break;
          }
          var r = {
            dan: {
              red: [],
              blue: []
            },
            tuo: {
              red: [],
              blue: []
            }
          };
          if (type == 'selecter' || type == 'lan-selecter') {
            var rNum = rMin - rDan.length,
              bNum = bMin - bDan.length;
            rNum = rNum < 0 ? 0 : rNum;
            bNum = bNum < 0 ? 0 : bNum;
            r.tuo.red = rDan.concat(rTuo.random(rNum)).sort();
            r.tuo.blue = bDan.concat(bTuo.random(bNum)).sort();
          } else {
            r.tuo.red = red.random(rMin).sort();
            r.tuo.blue = blue.random(bMin).sort();
          }
          if (type == 'selecter' || type == 'selecter-nosetting') {
            self.balls.push(r);
          } else {
            R.push(r);
          }
        }
        if (type == 'selecter') {
          return self.balls;
        } else {
          return R;
        }
      };
      random.prototype.zhushuAdd = function (num) {
        //--注数处理
        var self = this;
        if (isNaN(num) || num == 0) {
          return;
        }
        self.zhushu *= 1;
        self.zhushu += num;
        if (self.zhushu > self.max) {
          self.zhushu = self.max;
        } else if (self.zhushu < 1) {
          self.zhushu = 1;
        }
      };
      random.prototype.delBalls = function (index) {
        //--删除指定行
        var self = this;
        self.balls.splice(index, 1);
      };
      random.prototype.addToLan = function () {
        //--将选择的数据添加到号码篮
        var self = this,
          lan = Model.lan,
          cache = Model.cache;
        if (self.balls.length == 0) {
          self["do"](5, 'selecter-nosetting'); //--自动随机5条
          return false;
        }
        lan.list = lan.list.concat(self.balls);
        cache.save();
        return true;
      };
      //--选择操作逻辑对象
      itou.dataModel.config({
        key: key + '_selecter',
        opts: {
          currShow: {
            t: '当前显示模式，hand || random',
            k: '',
            d: 'hand'
          },
          ball: {
            t: '红蓝球数据对象',
            k: '',
            d: function d() {
              return new ball();
            }
          },
          hand: {
            t: '手选区域数据对象',
            k: '',
            d: function d(data, me) {
              return new hand({
                parent: me
              });
            }
          },
          random: {
            t: '机选区域数据对象',
            k: '',
            d: function d(data, me) {
              return new random({
                parent: me
              });
            }
          }
        }
      });
      var selecter = itou.dataModel.dataFactory.create(key + '_selecter'); //--选号功能对象构造函数创建
      selecter.prototype.show = function (type) {
        var self = this;
        self.currShow = type;
        if (type == 'random' && self.random.balls.length == 0) {
          self.random["do"](5, 'selecter-nosetting');
        }
      };
      selecter.prototype.clear = function () {
        //--手选、机选通用清除功能
        var self = this;
        self[self.currShow].clear();
      };
      selecter.prototype.addToLan = function () {
        //--手选、机选通用添加到号码篮功能
        var self = this;
        if (self[self.currShow].addToLan()) {
          Gray.$page.loadPage('/confirm/basket/dlt/?back=' + window.vm.backurl);
        }
      };
      selecter.prototype.gotoLan = function () {
        //--手选、机选通用添加到号码篮功能
        var self = this;
        Gray.$page.loadPage('/confirm/basket/dlt/?back=' + window.vm.backurl);
      };
      return new selecter();
    };
    var _createLan = function _createLan(_config, Model) {
      //--创建号码篮逻辑对象
      /**
      * 结构要求：包含 选号列表信息、倍数、总金额、 是否追加
      * 		还需要 单个删除、清空方法、追加方法
      * 功能要求：页面加载后，从缓存对象获取号码篮信息
      */
      //--号码篮数据对象
      var key = _config.key;
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
          bonus: {
            t: '奖金',
            k: '',
            d: function d() {
              return 0;
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
            d: function d() {
              if (key == 'KL8') {
                return 500000;
              }
              return 1000000;
            }
          },
          maxBall: {
            t: '最多行数',
            k: '',
            d: 500
          },
          canZhui: {
            t: '是否可以追加',
            k: '',
            d: function d() {
              return _config.zhuijia;
            }
          },
          zhui: {
            t: '是否追加',
            k: '',
            d: function d() {
              return Model.cache.zhui || false;
            }
          },
          beilv: {
            t: '追加倍率',
            k: '',
            d: function d() {
              return _config.beilv;
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
        compute.money('lan'); //--计算号码篮彩金
        Model.cache.save();
      };
      lan.prototype.setZhui = function () {
        var self = this,
          compute = Model.compute;
        self.zhui = !self.zhui;
        compute.money('lan'); //--计算号码篮彩金
        Model.cache.save();
      };
      lan.prototype.del = function (index) {
        //--删除号码篮某一行
        var self = this,
          compute = Model.compute,
          cache = Model.cache,
          ball = self.list[index];
        self.list.splice(index, 1);
        compute.money('lan'); //--计算号码篮彩金
        cache.save();
      };
      lan.prototype.clear = function () {
        //--清空号码篮
        var self = this,
          cache = Model.cache,
          compute = Model.compute;
        self.list.splice(0);
        compute.money('lan');
        // compute.money("lan");//--计算金额
        cache.save();
      };
      lan.prototype.random = function (num, type) {
        //--机选指定注数号码
        var self = this,
          maxBall = self.maxBall,
          last = maxBall - self.list.length,
          selecter = Model.selecter,
          cache = Model.cache,
          compute = Model.compute;
        if (last == 0) {
          window.vm.showToast('最多添加' + maxBall + '行数据');
          return;
        } else if (num > last) {
          num = last;
        }
        var balls = selecter.random["do"](num, type); //--生成随机号码
        self.zhushu += balls.length;
        self.list = self.list.concat(balls);
        compute.money('lan'); //--计算金额
        cache.save();
        try {
          window.setTimeout(function () {
            $('body').scrollTop(999999);
          }, 100);
        } catch (error) {
          console.error(error.message);
        }
      };
      lan.prototype.show = function (type) {
        var self = this;
        self.currShow = type;
      };
      return new lan();
    };
    var _createResult = function _createResult(_config, Model) {
      //--创建做单数据处理对象
      /**
      * 结构要求：无自带属性，需要处理号码篮数据方法，返回做单数据
      */
      var key = _config.key;
      itou.dataModel.config({
        //--做单内容数据对象
        key: key + '_wager',
        opts: {
          wt: {
            t: '玩法',
            k: '',
            d: function d(wagerData, me) {
              var lan = Model.lan;
              if (key == 'KL8') {
                var wt = itou.localData.getData('kl8-wt').wt;
                if (wt && !isNaN(wt)) {
                  return _config.wt[wt].wt || 'X10';
                } else {
                  return 'X10';
                }
              }
              return lan.canZhui && lan.zhui ? 'PA' : 'P'; //--P = 直选， PA = 追加
            }
          },

          c: {
            t: '注数',
            k: 'zhushu',
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
            k: 'money',
            d: function d(wagerData, me) {
              var lan = Model.lan;
              return me.c * (me.wt == 'PA' ? lan.beilv : 1) * 2;
            }
          },
          wager: {
            t: '投注单内容',
            k: '',
            d: function d(wagerData, me) {
              var r = '',
                b = '';
              if (wagerData.dan.red.length > 0) {
                r += wagerData.dan.red.join(',') + '$';
              }
              r += wagerData.tuo.red.join(',');
              if (wagerData.dan.blue.length > 0) {
                b += wagerData.dan.blue.join(',') + '$';
              }
              b += wagerData.tuo.blue.join(',');
              if (key == 'KL8') {
                return r;
              }
              return r + '|' + b;
            }
          },
          abs: {
            t: '胆数据',
            k: '',
            d: function d(wagerData, me) {
              var r = '',
                b = '';
              if (wagerData.dan.red.length > 0) {
                r += wagerData.dan.red.join(',');
              }
              if (wagerData.dan.blue.length > 0) {
                b += wagerData.dan.blue.join(',');
              }
              if (key == 'KL8') {
                return r;
              }
              return r + '|' + b;
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
              return _config.key;
            }
          },
          wager_type: {
            t: '玩法',
            k: '',
            d: function d(lanData, me) {
              var lan = lanData;
              if (key == 'KL8') {
                var wt = itou.localData.getData('kl8-wt').wt;
                if (wt && !isNaN(wt)) {
                  return _config.wt[wt].wt || 'X10';
                } else {
                  return 'X10';
                }
              }
              return lan.canZhui && lan.zhui ? 'PA' : 'P'; //--P = 直选， PA = 追加
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
                if (wg.abs == '|') {
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
    * @key: 采种，双色球 或者是 大乐透， value："SuperLotto" || "SSQ"
    */
    self.create = function (key) {
      var _config = _default[key],
        href = Gray.$page.href || window.location.href;
      if (href.toLowerCase().has('/confirm/basket/dlt/')) {
        //--号码篮
        var isLan = true;
      } else {
        var isLan = false;
      }
      if (key == 'KL8') {
        var wt = itou.localData.getData('kl8-wt').wt || 5;
        _config.select.red = wt;
      }
      // _createQicheng(_config)
      itou.dataModel.config({
        key: key + '_model',
        opts: {
          config: {
            t: '配置信息',
            k: '',
            d: function d(data, me) {
              return _config;
            }
          },
          cache: {
            t: '缓存对象',
            k: '',
            d: function d(data, me) {
              return _createCache(_config, me);
            }
          },
          compute: {
            t: '计算逻辑对象',
            k: '',
            d: function d(data, me) {
              return _createCompute(_config, me);
            }
          },
          selecter: {
            t: '选择逻辑对象',
            k: '',
            d: function d(data, me) {
              return _createSelecter(_config, me);
            }
          },
          qicheng: {
            t: '当前期程对象',
            k: '',
            d: function d(data, me) {
              return _createQicheng(_config, me);
            }
          },
          lan: {
            t: '号码篮对象',
            k: '',
            d: function d(data, me) {
              return _createLan(_config, me);
            }
          },
          result: {
            t: '做单数据对象',
            k: '',
            d: function d(data, me) {
              return _createResult(_config, me);
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
  window.SSQ = new SSQ();
})();

/***/ })

/******/ });