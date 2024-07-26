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
/******/ 		68: 0
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
/******/ 	deferredModules.push([229,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_model_chatroom_websocket_chatroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/**
 * 微信C端		竞彩篮球比分直播
 * by zhaoyf	2019年11月27日16:50:09
 */

(function () {
  var statusMaps = {
    //--竞彩足球状态信息设置，status与状态的对应关系
    '-1': '无直播',
    0: '未知',
    1: '未开始',
    2: '完场(加)',
    3: '暂停',
    4: '加时',
    5: '延期',
    6: '推迟',
    7: '取消',
    8: '弃赛',
    9: '中断',
    10: '待定',
    11: '腰斩',
    12: '进行中',
    13: '上半场',
    14: '下半场',
    15: '中场',
    16: '等待加时赛',
    17: '加时赛中场',
    18: '等待点球后决胜',
    19: '加时',
    20: '加时上半场',
    21: '加时下半场',
    22: '第一节',
    23: '第一节完',
    24: '点球',
    25: '第二节',
    26: '第二节完',
    27: '第三节',
    28: '第三节完',
    29: '第四节',
    30: '第四节完',
    31: '按计划进行',
    32: '已经在计划中但比赛时间未确定',
    33: '完场',
    34: '完场(点球)'
  };
  var Item = function Item(itemData) {
    if (!(this instanceof Item)) {
      return new Item(itemData);
    }
    var self = this,
      data = itemData.matchInfo,
      issueInfo = itemData.issueInfo; //--期次信息
    self.num = issueInfo.num; //--编号
    self.matchId = data.matchId; //--比赛ID
    self.team = {
      //--队伍名称
      host: data.homeTeamName,
      guest: data.awayTeamName
    };
    self.matchTime = String(data.matchTime).Dateformat('HH:NN');
    self.league = data.tournamentName; //--赛事名称
    self.leagueId = data.tournamentName;
    // self.leagueId = data.tournamentId;
    self.isShow = true;
    self.isReverse = data.isReverse == 'true'; //--是否主客反
    self.status = {};
    self.score = {};
    self.formatScore(data); //--处理比分数据
    self.event = {
      curr: 0,
      currid: '',
      text: {
        '0': '',
        '1': ''
      },
      status: '',
      icon: ''
    };
    self.formatEvent(itemData.liveTextInfo); //--处理事件数据
  };
  // Item.prototype.onMessage = function(msg){
  // 	var self = this;
  // 	if(msg.eventType == 1){
  // 		self.formatScore(msg.data);
  // 	}
  // 	if(msg.eventType == 2){
  // 		self.formatEvent(msg.data);
  // 	}
  // };
  Item.prototype.onScoreChange = function (key) {
    //--比分变化
    var self = this;
    self.score[key + 'Color'] = '';
    console.log('onScoreChange', key);
    window.setTimeout(function () {
      self.score[key + 'Color'] = 'jinqiunum';
    }, 0);
  };
  Item.prototype.formatScore = function (data) {
    //--处理比分和状态信息
    var self = this,
      statusCode = Number(data.statusCode);
    //--完场和其他异常状态，展示红色；否则展示黑色
    self.status.code = statusCode;
    self.status.color = statusCode > 1 && statusCode < 12 ? 'red' : 'black';
    self.isLive = statusCode < 33 && statusCode > 11;
    self.unStart = statusCode <= 1;
    self.status.text = data.statusName;
    //--小节和比赛加时，追加剩余时间
    // if ([1, 3, 5, 7, 10, 18, 20, 22, 24].indexOf(statusCode) >= 0) {
    if ([19, 22, 25, 27, 29].indexOf(statusCode) >= 0) {
      self.status.text += ' ' + data.minutes;
    }
    var scoreFull = String(data.scoreFull).split(':'); //--全场比分
    self.score.hostColor = '';
    self.score.guestColor = '';
    if (!!self.score.host && self.score.host != String(scoreFull[1] || '')) {
      self.onScoreChange('host');
    }
    if (!!self.score.guest && self.score.guest != String(scoreFull[0] || '')) {
      self.onScoreChange('guest');
    }
    self.score.host = String(scoreFull[1] || ''); //--主队比分
    self.score.guest = String(scoreFull[0] || ''); //--客队比分
    self.score.all = String(Number(scoreFull[0]) + Number(scoreFull[1])); //--总分
    self.score.diff = scoreFull[1] - scoreFull[0]; //--分差
    self.score.diff = self.score.diff > 0 ? '+' + self.score.diff : String(self.score.diff);
    self.score['1rd'] = data.score1 ? data.score1.split(':') : null; //--第一节比分
    self.score['2rd'] = data.score2 ? data.score2.split(':') : null; //--第二节比分
    self.score['3rd'] = data.score3 ? data.score3.split(':') : null; //--第三节比分
    self.score['4rd'] = data.score4 ? data.score4.split(':') : null; //--第四节比分
    self.score['ot'] = data.scoreOverTime ? data.scoreOverTime.split(':') : null; //--加时阶段比分
  };

  Item.prototype.formatEvent = function (liveTextInfo) {
    var self = this,
      data = liveTextInfo,
      event = self.event,
      code = self.status.code;
    if (event.currid && liveTextInfo.id == event.currid) {
      return;
    } //--事件防重复
    event.currid = liveTextInfo.id;
    event.team = data.teamType == 1 ? 'host' : 'guest'; //--得分队伍类型，0：客队 1：主队
    event.curr = Math.abs(event.curr - 1); //--切换当前事件
    event.text[event.curr] = data.description || '直播信号等待中'; //--事件描述
    event.status = data.description ? 'started' : ''; //--状态
    event.icon = data.description ? 'livewordicon_start' : 'livewordicon_un'; //--图标class名
    event.isShow = code > 11 || code == 2; //--除未开始、延期；其他展示事件信息
    if ([33, 2, 10].indexOf(Number(code)) > -1) {
      //--完场、完场（加）、待定 算作完场状态
      event.text[event.curr] = '比赛已结束，点击查看全场比赛直播';
      event.status = 'end';
      event.icon = 'livewordicon_end'; //--图标
    }
  };

  //--处理websocket非推送的文字直播消息
  Item.prototype.formatWsEvent = function (data) {
    console.log('++++++++++文字直播++++++++++');
    var self = this,
      event = self.event,
      code = self.status.code;
    if (event.currid && data.id == event.currid) {
      return;
    } //--事件防重复
    event.currid = data.id;
    event.team = data.teamSide == 1 ? 'host' : 'guest'; //--主客队 1:主队 2:客队1：主队
    event.curr = Math.abs(event.curr - 1); //--切换当前事件
    event.text[event.curr] = data.descChs || '直播信号等待中'; //--事件描述
    event.status = data.description ? 'started' : ''; //--状态
    event.icon = data.description ? 'livewordicon_start' : 'livewordicon_un'; //--图标class名
    event.isShow = code > 11 || code == 2; //--除未开始、延期；其他展示事件信息
    if ([33, 2, 10].indexOf(Number(code)) > -1) {
      //--完场、完场（加）、待定 算作完场状态
      event.text[event.curr] = '比赛已结束，点击查看全场比赛直播';
      event.status = 'end';
      event.icon = 'livewordicon_end'; //--图标
    }

    if (self.status.text) {
      var text = self.status.text.split(' ')[0];
      var _code = self.status.code;
      if ([19, 22, 25, 27, 29].indexOf(_code) >= 0) {
        self.status.text = text + ' ' + data.eventTime;
      }
    }
  };
  Item.prototype.formatWsScore = function (data) {
    console.log('++++++++++比赛状态，比分变更事件++++++++++');
    var self = this,
      statusCode = Number(data.gameState);
    //--完场和其他异常状态，展示红色；否则展示黑色
    self.status.code = statusCode;
    self.status.color = statusCode > 1 && statusCode < 12 ? 'red' : 'black';
    self.isLive = statusCode < 33 && statusCode > 11;
    self.unStart = statusCode <= 1;
    var text = statusMaps[statusCode];
    var text1 = self.status.text.split(' ')[0];
    if (text != text1) {
      self.status.text = text;
    }
    //--小节和比赛加时，追加剩余时间
    // if ([22, 25, 27, 29, 19].indexOf(statusCode) >= 0) {
    //     self.status.text += ' ' + Math.floor(data.gameTime/60);
    // }
    var awayTeamScores = JSON.parse(data.awayTeamScores);
    var homeTeamScores = JSON.parse(data.homeTeamScores);
    //--主队总分
    var scoreHost = homeTeamScores.reduce(function (x, y) {
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      return x + y;
    });
    //--客队总分
    var scoreGuest = awayTeamScores.reduce(function (x, y) {
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      return x + y;
    });
    self.score.hostColor = '';
    self.score.guestColor = '';
    if (!!self.score.host && self.score.host != scoreHost) {
      self.onScoreChange('host');
    }
    if (!!self.score.guest && self.score.guest != scoreGuest) {
      self.onScoreChange('guest');
    }
    self.score.host = String(scoreHost || ''); //--主队比分
    self.score.guest = String(scoreGuest || ''); //--客队比分
    self.score.all = String(Number(scoreHost) + Number(scoreGuest)); //--总分
    self.score.diff = scoreHost - scoreGuest; //--分差
    self.score.diff = self.score.diff > 0 ? '+' + self.score.diff : String(self.score.diff);
    var rounds = ['1rd', '2rd', '3rd', '4rd', 'ot'];
    rounds.forEach(function (round, i) {
      if (homeTeamScores[i] >= 0 && awayTeamScores[i] >= 0) {
        //--第n节比分
        self.score[round] = [awayTeamScores[i], homeTeamScores[i]];
      } else {
        self.score[round] = null;
      }
    });
  };
  var model = function model() {
    if (!(this instanceof model)) {
      return new model();
    }
    var self = this;
    self.search = new itou.publicObj.search(); //--检索对象
    // self.ws = itou.jdd_websocket;
    // self.wsParams = {
    //     key: 'jdd_basket/match/list',
    //     url: 'dec?app=com.jdd.itou&token=',
    //     topic: '/topic/basketball/event',
    //     onMessage: function (rlt) {
    //         self.handleWsMessage(rlt);
    //     }
    // };
    self.ws = new _js_model_chatroom_websocket_chatroom_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    self.search.show = self.search.start;
    self.currPage = {
      key: 'jingcailq'
    };
    self.maps = {}; //--matchId：item形式的映射数据
    self.group = [{
      opts: []
    }]; //--检索对象的筛选项
    self.days = {};
    self.status = 'init';
    self.liveGoal = {
      loading: false,
      doRefresh: function doRefresh() {
        self.liveGoal.loading = true;
        self.getList().then(function () {
          self.liveGoal.loading = false;
        });
      }
    };
  };
  model.prototype.getList = function () {
    var self = this;
    return itou.get({
      url: 'basket/match/list/4',
      data: {
        lotteryCode: 91
      },
      // showErr: true, //--接口超时是否跳转错误页面
      jdd: 'itou',
      apiType: 'match' //--使用接口的类型
    }).then(function (data) {
      var opts = self.group[0].opts,
        myIds = {},
        dataNum = 0,
        days = {};
      // data = {};
      // self.wsParams.data = [];
      self.status = 'init';
      for (var i in data) {
        //--
        // self.wsParams.data.push({lotteryId: '91', issue: i, source: '2'});
        var items = data[i],
          myItems = [];
        items.forEach(function (element) {
          var item = new Item(element),
            leagueId = item.leagueId;
          myItems.push(item);
          self.maps[item.matchId] = item;
          if (!myIds[leagueId]) {
            myIds[leagueId] = true;
            opts.push({
              id: leagueId,
              val: item.league
            });
          }
        });
        days[i] = {
          title: i + ' ' + String(i).Dateformat('周ww'),
          isShow: true,
          list: myItems
        };
        dataNum += days[i].list.length;
      }
      self.days = days;
      self.search.init({
        //--检索对象数据初始化
        group: self.group,
        callback: function callback(arr) {
          self.doSearch(arr);
        }
      });
      self.status = dataNum ? 'ok' : 'noData';
      // self.ws.connect(self.wsParams);
      self.ws.open({
        name: 'jdd_score',
        group: 'jingcailanqiu'
      }, {
        onmessage: function onmessage(data) {
          // console.log(data);
          var rlt = (data === null || data === void 0 ? void 0 : data.js) || {};
          var className = rlt.className;
          if (className) {
            var type = className.split('.').pop();
            var map = {
              GameDO: 1,
              GameFoulDO: 2,
              GameSubstituteDO: 3,
              GameGoalDO: 4,
              GamePeriodDO: 5,
              GameEventDO: 6
            };
            if (map[type]) {
              rlt.gamingEventType = map[type];
            }
          }
          self.handleWsMessage(rlt);
        }
      });
      self.scrollToLive();
    });
  };
  model.prototype.doSearch = function (arr) {
    //--执行筛选，控制隐显
    var self = this,
      maps = self.maps,
      query = arr[0]; //--检索条件
    for (var i in maps) {
      var item = maps[i];
      item.isShow = query.indexOf(item.leagueId) >= 0;
    }
    self.scrollToLive();
  };
  model.prototype.scrollToLive = function () {
    $('.livescoremain').scrollTop(0);
    window.setTimeout(function () {
      var lives = $('[data-live]').eq(0);
      if (lives.offset()) {
        var top = lives.offset().top - 100;
        console.log(top);
        $('.livescoremain').scrollTop(top);
      } else {
        var unstart = $('[data-unstart]').eq(0);
        if (unstart.offset()) {
          var top = unstart.offset().top - 100;
          console.log(top);
          $('.livescoremain').scrollTop(top);
        }
      }
    }, 200);
  };
  model.prototype.handleWsMessage = function (rlt) {
    var self = this,
      maps = self.maps;
    var data = rlt.data,
      gamingEventType = rlt.gamingEventType;
    var eventsTypeText = {
      1: '比赛状态，比分变更事件',
      2: '犯规事件',
      3: '换人事件',
      4: '进球事件',
      5: '节次事件',
      6: '文字直播事件'
    };
    console.log('==========', '你有新的消息', '==========');
    console.log('消息类型', gamingEventType, eventsTypeText[gamingEventType]);
    //--文字直播和比分变化
    if (gamingEventType == 1 || gamingEventType == 6) {
      console.log('handleWsMessage', data);
      var id = data.gameId || data.id,
        item = maps[id];
      if (item) {
        if (gamingEventType == 1) {
          //--比分变化
          item.formatWsScore(data);
        } else if (gamingEventType == 6) {
          //--文字直播
          item.formatWsEvent(data);
        }
      }
    }
  };
  var data = model();
  data.getList();
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#body',
      data: data,
      mounted: function mounted() {
        var self = this;
        if (self.$refs.gameadv) {
          //--玩蜂游戏推广广告
          var id = itou.localJson.getJson('/user/shop/details/').id || '';
          self.$refs.gameadv.init({
            shopid: id,
            ad_options: 'livescore',
            type: 'min',
            page: '比分直播-篮彩'
          }, function (url) {
            // itou.baiduHm('比分直播-篮彩', '广告标签：玩蜂1');//--百度统计
            return url + '&from=livescore';
          });
        }
      },
      beforeDestroy: function beforeDestroy() {
        try {
          this.ws.close('jdd_score');
        } catch (error) {
          console.warn(error);
        }
      },
      methods: {
        doRefresh: function doRefresh() {
          data.getList();
          this.ascroll.resetload();
        },
        "goto": function goto(key, canback) {
          if (key == this.currPage.key) {
            return;
          }
          var r = {};
          r['jingcai_end'] = '/livescore/jingcai/end/';
          r['jingcai'] = '/livescore/jingcai/';
          r['jingcailq_end'] = '/livescore/jingcailq/end/';
          r['jingcailq'] = '/livescore/jingcailq/';
          r['zucai_end'] = '/livescore/zucai/end/';
          r['zucai'] = '/livescore/zucai/';
          r['danchang_end'] = '/livescore/danchang/end/';
          r['danchang'] = '/livescore/danchang/';
          var self = this,
            url = r[key],
            back = self.backpaths[0] || '/';
          if (canback) {
            back = self.backurl;
          } else {
            back = encodeURIComponent(back);
          }
          url += '?back=' + back;
          Gray.$page.loadPage(url);
        },
        toWords: function toWords(id) {
          var url = '/livescore/jingcailq/livewords/?matchId=' + id;
          url += '&back=' + backurl;
          Gray.$page.loadPage(url);
        },
        toMatch: function toMatch(matchid) {
          debugger;
          Gray.$page.loadPage('/match/jingcailanqiu/history/?matchid=' + matchid + '&lottStyle=jclq&back=' + window.backurl);
        }
      }
    });
  };
})();

/***/ })

/******/ });