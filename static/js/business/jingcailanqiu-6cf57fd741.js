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
/******/ 	return __webpack_require__(__webpack_require__.s = 225);
/******/ })
/************************************************************************/
/******/ ({

/***/ 225:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 微信C端		竞彩篮球投注页面
 * Created by zhaoyf on 2016/12/13.
 */
(function () {
  itou.localJson.setJson('__confirm_prev_page', {
    key: '/jingcailanqiu/'
  });
  var page = function page(model) {
    //--页面列表数据对象
    var self = this,
      selected = model.selected,
      basketball = $.lottery.jingcai.basketball,
      $config = basketball.$config;
    self.parent = model;
    self.showBody = false; //--是否展示页面信息
    self.list = []; //--赛事列表列表信息//--元素形式：{t: "8月10日  周四 共4场比赛", items: [item1, item2, item3 …………]}
    self.maps = {}; //--列表数据映射
    var gameModel = $.lottery.jingcai.basketball.gameModel(); //--行玩法对象构造函数

    self.item = function (data) {
      //--创建行数据对象
      var parent = self,
        self = this;
      self.parent = parent; //--父对象为page
      self.data = data;
      self.hasLoadMore = false; //--是否已经加载更多玩法
      self.selectedMore = 0; //--已经选择的更多玩法数（玩法数量）
      self.info = null; //--基本信息
      self.info = self.formatInfo(data);
      self.team = null; //--队伍信息
      self.team = self.formatTeam(data);
      self.game = null; //--玩法信息
      self.game = new gameModel(self); //--创建玩法对象
      // self.game.init(data);//--选项数据初始化
    };

    self.item.prototype.formatInfo = function (data) {
      //--格式化行基础信息
      var self = this,
        info = {};
      info.no = data.no || ''; //--编号
      info.betid = []; //--所有玩法的bet_id
      info.id = data.id || 0; //--唯一标识
      info.saishi = data.saishi || ''; //--所属赛事
      info.saishiColor = data.saishiColor || '#666'; //--所属赛事背景颜色
      //info.fontColor = data.fontColor || "#000";  //--所属赛事字体颜色
      info.fontColor = '#fff';
      info.endTime = data.endTime; //--投注结束时间
      try {
        info.bisaiTime = data.bisaiTime.toDate(); //--比赛时间
      } catch (error) {
        info.bisaiTime = data.bisaiTime; //--比赛时间
      }

      info.sort = data.sort; //--排列顺序
      info.pankou = data.pankou || 0; //--盘口，即让球数
      info.fenjie = data.fenjie || 0; //--分界值，即大小球分界值
      info.isShow = false; //--是否展开更多选项
      info.selectMore = false; //--是否选择了更多玩法
      info.selectNum = null; //--选择了几种玩法
      var d = info.endTime.split(/-| |:/);
      var D = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
      if (D.Dateformat) {
        info.endTime = D.Dateformat('HH:NN');
      }
      return info;
    };
    self.item.prototype.formatTeam = function (data) {
      var self = this,
        team = {};
      team.host = {
        name: data.hostName || '',
        //--主队名称
        rank: data.hostRank && data.hostRank != '0' ? data.hostRank : '-',
        //--主队排名
        saishi: data.hostSaishi //--所属赛事
      };

      team.guest = {
        name: data.guestName || '',
        //--客队名称
        rank: data.guestRank && data.guestRank != '0' ? data.guestRank : '-',
        //--客队排名
        saishi: data.guestSaishi //--所属赛事
      };

      team.reversion = data.reversion == '1'; //--主客场是否逆转
      return team;
    };
    self.item.prototype.loadMore = function (isInit) {
      //--行加载更多玩法,isInit是否是初始数据加载，isInit=true则不弹出弹窗
      var me = this;
      var page = self,
        model = page.parent,
        apis = model.apis,
        selected = model.selected,
        currItem = model.currItem,
        no = me.info.no,
        data = {
          serial_no: no,
          bet_id: me.info.betid[0]
        };
      if (me.hasLoadMore && !isInit) {
        currItem.init(me);
        return;
      }
      var s = selected.list ? selected.list[no] : [];
      apis.loadMore(data).then(function (data) {
        data = data[no];
        if (data) {
          me.data = data;
          me.hasLoadMore = true;
          me.game.init(data, s);
          // console.log(me.game);
          if (!isInit) {
            currItem.init(me);
          }
        }
      });
    };
    self.item.prototype.optSelect = function (key, selectedList) {
      //--行选择选项，会被主页面选择事件和当前赛事弹窗的选择事件调用
      /**
       * selectedList：selected对象的list属性拷贝，可为空；
       * 为空时，作为主页面赛事选项点击事件，用来在主页面进行选定数据同步
       * 不为空时，值应该是selected对象的list属性的拷贝，在当前赛事弹窗用作为临时数据，用以确认后同步数据
       */
      var me = this,
        no = me.info.no,
        page = self,
        model = page.parent,
        cache = model.cache,
        selected = model.selected,
        maps = model.maps,
        num = 0,
        changciMax = model.setting.changci.max,
        m = maps.lotteryMaps.codeToGame; //--编号与玩法映射关系
      if (selected.guoguan.length == 0) {
        //--修改自动过关状态
        cache.autocomplete = true;
      }
      cache.optSelect = true;
      selectedList = !selectedList ? selected.list : selectedList; //console.log(selectedList);
      // console.log("selectedList = ", selectedList);
      for (var i in selectedList) {
        if (selectedList[i].length > 0) {
          num += 1; //console.log(i);
        } else {
          delete selectedList[i];
        }
      }
      selectedList[no] = selectedList && selectedList[no] ? selectedList[no] : [];
      var s = selectedList[no],
        //--该行选中的数据
        g = m[key]; //--玩法
      if (g && me.game[g].peilv && (me.game[g].peilv.host && me.game[g].peilv.host[key] || me.game[g].peilv.guest && me.game[g].peilv.guest[key] || me.game[g].peilv[key])) {
        if (g != 'SportteryWS') {
          var opt = me.game[g].peilv[key];
        } else {
          var opt = me.game[g].peilv.guest[key] || me.game[g].peilv.host[key];
        }
        if (!opt.s && num >= changciMax && s.length == 0) {
          model.vm.showToast('最多选择' + changciMax + '场比赛。');
          return false;
        }
        opt.s = !opt.s;
        if (!opt.s) {
          //--移除选择项
          selectedList[no] = Array.minus(selectedList[no], [key]);
        } else {
          //--追加选择项
          s.push(key);
        }
      } else {
        return false;
      }
      selectedList[no] = selectedList[no].uniquelize(); //--数据唯一化
      if (selectedList[no].length == 0) {
        delete selectedList[no]; //--移除空的选项
      }
      // console.log(selectedList, selected.list, model.currItem.selectedList);
      return true;
    };
    self.item.prototype.doSelect = function (key) {
      //--主页面赛事选项选择事件
      var page = self,
        model = page.parent,
        m = model.maps.lotteryMaps.codeToGame,
        g = m[key],
        game = this.game[g];
      selected = model.selected;
      if (g == 'SportteryWS') {
        var peilv = game.peilv.host[key] || game.peilv.guest[key];
        peilv = peilv.v || '未受注';
      } else {
        var peilv = game.peilv[key].v || '未受注';
      }
      var peilv = this.game.getPeilv(key) || '未受注';
      if (peilv == '未受注') {
        return;
      }
      this.optSelect(key); //--主页面选定赛事选项
      selected.compute(); //--计算选项
    };
  };

  page.prototype.getList = function (act) {
    //--页面加载数据，act：init=初次加载，refresh=刷新
    var self = this,
      model = self.parent,
      apis = model.apis,
      cache = model.cache,
      selected = model.selected;
    if (act == 'refresh') {
      cache.apis = {};
    }
    return apis.getList().then(function (data) {
      // console.log(data);
      var r = $.lottery.jingcai.basketball.formatFromApi(data);
      self.list.splice(0, self.list.length); //--清空源列表数据
      r.each(function (val) {
        var day = {},
          //--赛事天 数据对象
          itemsOrderBySort = {};
        day.t = val.t;
        day.isShow = val.isShow;
        day.items = []; //--赛事数据数组
        val.items.each(function (v) {
          var item = new self.item(v),
            //--赛事数据实例化
            s = selected.list ? selected.list[item.info.no] : []; //--当前行数据被选中的数据集合
          // console.log(s);
          item.game.init(v, s); //--赛事选项赔率数据初始化
          //console.log(item, v);
          // day.items.push(item);
          var sort = item.info.sort;
          if (!itemsOrderBySort[sort]) {
            itemsOrderBySort[sort] = [];
          }
          itemsOrderBySort[sort].push(item); //--将生成的行数据以sort为key存入json，用来实现以sort排序
          self.maps[item.info.no] = item; //--赛事映射
        });

        for (var ii in itemsOrderBySort) {
          var items = itemsOrderBySort[ii]; //--赛事实例化
          // day.items.push(item);
          day.items = day.items.concat(items);
        }
        self.list.push(day);
      });
      self.showBody = true;
    });
  };
  page.prototype.showDays = function (index) {
    //--展开或者折叠某天赛事
    var self = this;
    self.list[index].isShow = !self.list[index].isShow;
  };
  var selected = function selected(model) {
    //--页面选定的数据
    var self = this;
    self.parent = model;
    self.max = {
      beishu: 50000,
      //--最大投注倍数
      money: 100000,
      //--最大单注金额
      allMoney: 2000000,
      //--最大倍投金额
      saishi: 11,
      //--最多选择赛事数量
      guoguan: 5 //--最多过关数
    };

    self.showType = ''; //--当前展示的选择模板（guoguan || dantuo）
    self.beishu = 1; //--倍数
    self.list = {}; //--页面列表选择的数据
    self.guoguan = []; //--页面选择的过关方式
    self.dan = []; //--页面选择的胆
    self.danMaxNum = 0; //--最多设胆数
    self.slist = []; //--已经选择的选项和玩法列表，用来选胆
    self.glist = {
      //--过关列表，用来选过关方式
      base: [],
      //--单一过关串法
      more: [] //--混合过关串法
    };

    self.result = {
      //--用来显示计算结果
      isEnough: false,
      //--是否足够
      guoguan: '选择过关',
      //--过关提示
      zhushu: 0,
      //--注数
      money: 0,
      //--花费金额
      jiangjin: 0,
      //--最大奖金
      intro: ''
    };
    self.data = {
      sNum: 0,
      //--选择的赛事总数
      dan: [],
      //--胆，no数组
      tuo: [],
      //--拖，no数组
      danguan: true,
      //--是否可以玩单关
      hasWs: false,
      //--是否选择胜分差玩法
      hasDan: false,
      //--是否选胆
      dNum: 0,
      //--胆数量
      canYouhua: false //--是否可以优化
    };
  };

  selected.prototype.clear = function () {
    //--清空所选数据
    var self = this;
    for (var i in self.list) {
      delete self.list[i];
    }
    self.beishu = 1;
    self.guoguan.splice(0, self.guoguan.length);
    self.dan.splice(0, self.dan.length);
    self.compute();
  };
  selected.prototype.compute = function () {
    //--选定后的计算
    var self = this,
      model = self.parent,
      setting = self.parent.setting;
    cache = model.cache, page = model.page, maps = page.maps, m = model.maps.lotteryMaps.codeToGame; //--编号与玩法映射关系
    cache.selectedSycn(); //--修正选择数据
    self.danSycn(); //--胆数据同步
    // cache.doSycn();//--同步缓存数据
    //--所有计算延时0.5秒
    itou.outil.timmer.newTimmer({
      key: '__jingcailanqiu_compute',
      fun: function fun() {
        itou.outil.timmer.clearTimmer('__jingcailanqiu_compute');
        // console.log("selected.doCompute", JSON.stringify(self.guoguan));
        doCompute();
        // console.log("selected.doCompute", JSON.stringify(self.guoguan));
        cache.doSycn(); //--同步缓存数据
        //--调用票数计算组件，计算票数量
        try {
          if (self.result.isEnough) {
            var data = $.lottery.jingcai.basketball.formatSelectedToApiFangan(self);
            model.vm.$refs.ticket_num.doCompute(data, 900);
          }
        } catch (error) {
          console.error(error);
        }
      },
      timeout: 100
    });
    function doCompute() {
      //--执行计算
      var obj = {},
        list = self.list,
        sNum = 0,
        //--选择的赛事总数
        dan = self.data.dan,
        //--胆，no数组
        tuo = self.data.tuo,
        //--拖，no数组
        isEnough = false,
        //--是否足够进行计算
        danguan = true,
        //--是否可以玩单关
        hasWs = false,
        //--是否选择胜分差玩法
        pObj = {
          num: 0
        }; //--玩法	
      dan.splice(0, dan.length);
      tuo.splice(0, tuo.length); //console.log("list = ", list);	
      for (var i in list) {
        //console.log(i);
        var opts = list[i],
          item = maps[i];
        if (opts.length > 0) {
          var selectNum = 0,
            selectNumobj = {};
          sNum += 1; //--总的选择赛事条数
          if (self.dan.contains(i)) {
            //--是否包含在胆中
            dan.push(i); //--胆
          } else {
            tuo.push(i); //--拖
          }

          opts.each(function (val) {
            var g = m[val]; //--玩法名字
            if ((g == 'SportteryWS' || g == 'SportteryWL') && !selectNumobj[g]) {
              selectNum += 1;
              selectNumobj[g] = true;
            }
            if (danguan) {
              //--是否可以单关
              danguan = item.game[g].danguan;
            }
            if (g == 'SportteryWS') {
              //--是否包含胜分差玩法
              hasWs = true;
            }
            if (!pObj[g]) {
              pObj.num += 1;
              pObj[g] = true;
            }
          });
          item.info.selectNum = selectNum ? '+' + selectNum : null;
        } else {
          delete list[i];
        }
      }
      danguan = danguan && (sNum == 1 || pObj.num == 1);
      isEnough = danguan && sNum >= 1 || !danguan && sNum >= 2; //--是否足够
      if (isEnough) {
        self.result.intro = '';
      } else if (sNum == 0) {
        self.result.intro = '红色框选项可投单关，至少选择一场比赛';
      } else if (sNum == 1) {
        self.result.intro = '红色框选项可投单关，至少选择二场比赛';
      }
      self.result.isEnough = isEnough; //--是否足够
      self.data.sNum = sNum; //--赛事数
      self.data.danguan = danguan; //--是否可单管
      self.data.hasWs = hasWs; //--是否含有胜分差
      var max = hasWs ? 4 : 8; //--最大过关串法
      var guoguan = max < sNum ? max : sNum; //--最大过关串法
      // console.log(hasWs, guoguan, max, sNum, danguan);
      getGuoguan(guoguan, danguan, sNum);
      self.data.dNum = dan.length; //--胆数量
      self.data.hasDan = dan.length > 0; //--是否含胆
      if (self.guoguan.length == 0) {
        self.result.guoguan = '选择过关';
      } else {
        self.result.guoguan = self.guoguan[0].replace(/1_1/g, '单关').replace(/_/g, '串');
        if (self.guoguan.length > 1) {
          self.result.guoguan = self.result.guoguan + '..';
        }
      }
      if (self.data.hasDan) {
        self.result.guoguan = self.result.guoguan + '(<span class="fontred font12">胆</span>)';
      }
      if (self.result.isEnough) {
        if (setting.zhushu.model == '0') {
          var zhushu = $.lottery.jingcai.getZhushu(self.format('zhushu'));
        } else if (setting.zhushu.model == '1') {
          var zhushu = $.lottery.jingcai.getZhushu1(self.format('zhushu'));
        }
        self.result.zhushu = zhushu;
        self.result.money = zhushu * 2;
      }
      var r = $.lottery.jingcai.basketball.jiangjin.compute(self);
      // $.lottery.jingcai.basketball.formatSelectedToApiFangan(self);
      self.data.canYouhua = self.canYouhua();
      // console.log(self);
    }

    function getGuoguan(guoguan, danguan, sNum) {
      //--获取可选过关串法
      var $guoguan = $.lottery.jingcai.$guoguan,
        setting = model.setting;
      self.glist.base.splice(0, self.glist.base.length);
      self.glist.more.splice(0, self.glist.more.length);
      for (var i = danguan ? 1 : 2; i <= guoguan; i++) {
        var more = $guoguan[i];
        for (var x in more) {
          if (danguan || more[x][0] != '1') {
            //--可以单关，或者是不包含单关的过关方式
            if (x == '1') {
              self.glist.base.push(i + '_1');
            } else if (more[x][0] != '1') {
              if (setting.guoguan.model == 'all') {
                //--全部混合过关模式
                self.glist.more.push(i + '_' + x);
              } else if (setting.guoguan.model == 'max-only') {
                //--最大混合过关模式
                if (guoguan >= sNum) {
                  //--更多过关保留与场次一致最高过关串法，场次数超过最高过关串法则相应串关方式不显示
                  if (i == guoguan) {
                    self.glist.more.push(i + '_' + x);
                  }
                }
              }
            }
          }
        }
      }
      // console.log("selected.getGuoguan", JSON.stringify(self.guoguan));
      // console.log(cache.autocomplete, self.guoguan.length <= 1, self.result.isEnough)
      if ((cache.autocomplete || cache.optSelect) && self.guoguan.length <= 1 && self.result.isEnough) {
        //--自动完成过关选择
        self.guoguan.splice(0, 1); //console.log(guoguan);
        self.guoguan.push(guoguan + '_1');
      }
      cache.optSelect = false;
    }
  };
  selected.prototype.canYouhua = function () {
    //--是否支持奖金优化
    var self = this,
      selected = self,
      result = self.result,
      guoguan = self.guoguan,
      money = result.zhushu * self.beishu * 2;
    if (result.zhushu == 1) {
      return false;
    } else if (!self.data.dan.length && guoguan.length > 0 && result.zhushu <= 500 && money <= 100000) {
      var r = true;
      for (var i = 0, len = guoguan.length; i < len; i++) {
        var a = guoguan[i].split('_');
        if (a[1] != '1') {
          r = false;
          break;
        }
      }
      return r;
    } else {
      return false;
    }
  };
  selected.prototype.getSlist = function () {
    //--点击设胆的时候，获取列表信息
    var self = this,
      selected = self,
      model = self.parent,
      page = model.page,
      maps = page.maps;
    self.slist = [];
    for (var i in self.list) {
      var it = new item({
        no: i,
        opts: self.list[i]
      });
      self.slist.push(it);
    }
    //--点击设胆的时候，在进行处理
    function item(data) {
      //--行对象构造函数
      /**
       * data = {
       * 		no: $no,
       * 		opts: $selected.list[$no]
       * }
       */
      var self = this,
        no = data.no,
        it = maps[no],
        opts = data.opts,
        gameOpts = {},
        b = it.game.baseModel,
        //--模板
        c = it.game.lotteryConfig; //--设置
      self.no = no;
      // console.log(data);
      self.hostName = it.team.host.name; //--主队名
      self.guestName = it.team.guest.name; //--客队名
      self.s = selected.dan.contains(no); //--是否被设置为胆
      self.game = {};
      opts.each(function (val) {
        //-获取所选选项名数组
        for (var i in c) {
          if (!gameOpts[i]) {
            gameOpts[i] = [];
          }
          var mixed = c[i].mixed;
          if (mixed[val]) {
            gameOpts[i].push(mixed[val]);
          }
        }
      });
      for (var i in b) {
        //--获取各玩法盘口，选中值
        if (i == 'SportteryWS') {
          var bi = b[i].host.slice(0).concat(b[i].guest.slice(0));
        } else {
          var bi = b[i].slice(0);
        }
        var obj = {};
        bi = Array.intersect(bi, gameOpts[i]);
        obj.opts = [];
        obj.pankou = it.game[i].pankou;
        obj.opts = obj.opts.concat(bi);
        self.game[i] = obj;
      }
    }
    item.prototype.doSelect = function () {
      //--设胆
      var self = this,
        no = self.no;
      // console.log("操作——执行设胆", JSON.stringify(selected.dan), "最多蛇胆个数：", selected.danMaxNum, selected);
      if (selected.dan.contains(no)) {
        selected.dan = Array.minus(selected.dan, [no]);
      } else {
        if (selected.dan.length >= selected.danMaxNum) {
          selected.dan.length = selected.danMaxNum;
          model.vm.showToast('设胆个数不能超过最小过关场数');
          return;
        }
        selected.dan.push(no);
      }
      self.s = selected.dan.contains(no); //--是否被设置为胆
      selected.compute();
    };
  };
  selected.prototype.moreInit = function () {
    //--更多玩法数据初始化，当页面加载时，已选择的赛事自动加载更多玩法数据
    var self = this,
      model = self.parent,
      page = model.page,
      maps = page.maps;
    for (var i in self.list) {
      var s = self.list[i];
      if (s.length > 0) {
        var item = maps[i];
        if (item) {
          item.loadMore(true);
        } else {
          delete self.list[i];
        }
      } else {
        delete self.list[i];
      }
    }
  };
  selected.prototype.show = function (key) {
    //--显示当前的选择模板
    var self = this,
      model = self.parent,
      keyboard = model.keyboard,
      pingce = model.pingce;
    keyboard.close();
    pingce.close();
    self.showType = key;
    if (key == 'dantuo') {
      self.getSlist();
      // console.log(self.slist);
    }
  };

  selected.prototype.close = function () {
    //--关闭当前选择模板
    var self = this;
    self.showType = '';
  };
  selected.prototype.selectGuoguan = function (key) {
    //--选择过关方式
    var self = this,
      model = self.parent,
      setting = model.setting,
      maxGuoguan = setting.guoguan.max,
      //--最多可选的过关串个数
      cache = model.cache,
      page = model.page;
    if (self.guoguan.contains(key)) {
      // self.guoguan = Array.minus(self.guoguan, [key]);
      for (var i = self.guoguan.length - 1; i >= 0; i--) {
        if (self.guoguan[i] == key) {
          self.guoguan.splice(i, 1);
        }
      }
    } else {
      var len = self.guoguan.length;
      if (len >= maxGuoguan) {
        model.vm.showToast('过关方式不能超过' + maxGuoguan + '个');
        return;
      } else {
        self.guoguan.push(key);
      }
    }
    cache.autocomplete = false; //--切换自动过关状态
    self.compute();
  };
  selected.prototype.danSycn = function () {
    //--胆信息同步
    /**
    用来同步选项更新后的胆信息。
    如果某个赛事已经没有被选择的玩法，则从胆列表中清除掉；
    如果胆的数量多于最低过关串的数量，则清空整个胆列表
    注意：关于设胆，n串1为从所选列表中选出n个赛事，设胆的赛事为必选项
        x串y（复合过关），为从所选列表中选出x个赛事，设胆的赛事为必选项，然后从这些组合中拆分y所代表的玩法
     */
    var self = this,
      model = self.parent,
      s = []; //--被选中的赛事，no数组
    for (var i in self.list) {
      s.push(i);
    }
    var dan = Array.intersect(self.dan, s); //--获取交集
    var len = self.dan.length;
    self.dan.splice(0, len);
    dan.each(function (val) {
      self.dan.push(val);
    });
    var guoguan = self.guoguan.each(function (val) {
      return val.left(1) * 1;
    }).sort();
    var min = guoguan[0] || 0; //--最小过关串法
    // self.danMaxNum = min; console.log("最多设胆数：", min);
    if (self.dan.length > min) {
      //--如果胆数量多余最小串法，则清空胆列表
      var len = self.dan.length;
      self.dan.splice(0, len);
    }
  };
  selected.prototype.format = function (key) {
    //--格式化数据，通过key获得格式化数据
    var self = this;
    switch (key) {
      case 'zhushu':
        //--注数计算，格式化选中数据，为注数计算提供数据
        return self.formatForZhushu();
        break;
    }
  };
  selected.prototype.formatForZhushu = function () {
    //--格式化数据，为注数计算提供数据
    var self = this,
      jingcai = $.lottery.jingcai,
      // $guoguan = jingcai.$guoguan,
      maps = jingcai.basketball.maps.codeToGame,
      o = {};
    o.guoguan = self.guoguan;
    o.selectNum = []; //--各个赛事被选中的项的数量，数组
    o.dan = []; //--各个胆赛事被选中的项的数量，数组
    o.tuo = []; //--各个拖赛事被选中的项的数量，数组
    o.Dan = []; //--各个胆赛事被选中玩法的项的数量，二位数组
    o.Tuo = []; //--各个拖赛事被选中玩法的项的数量，二位数组
    // console.log(self.data.dan, JSON.stringify(self.data.dan));
    // console.log(self.list);
    self.data.dan.each(function (val) {
      var s = self.list[val];
      if (s.length > 0) {
        o.selectNum.push(s.length);
        o.dan.push(s.length);
        var ob = {};
        s.each(function (v) {
          var t = maps[v];
          if (!ob[t]) {
            ob[t] = 1;
          } else {
            ob[t] += 1;
          }
        });
        var a = [];
        for (var i in ob) {
          a.push(ob[i]);
        }
        o.Dan.push(a);
      }
    });
    self.data.tuo.each(function (val) {
      var s = self.list[val];
      if (s.length > 0) {
        o.selectNum.push(s.length);
        o.tuo.push(s.length);
        var ob = {};
        s.each(function (v) {
          var t = maps[v];
          if (!ob[t]) {
            ob[t] = 1;
          } else {
            ob[t] += 1;
          }
        });
        var a = [];
        for (var i in ob) {
          a.push(ob[i]);
        }
        o.Tuo.push(a);
      }
    });
    // console.log(o);
    return o;
  };
  selected.prototype.doSubmit = function () {
    //--提交店铺
    var self = this;
    //--渠道动作埋点
    itou.channelHm.setBuriedPoints('project_next');
    self.doSaveFangan('submit');
  };
  selected.prototype.doSave = function () {
    //--保存方案并执行跳转
    var self = this;
    //--渠道动作埋点
    itou.channelHm.setBuriedPoints('project_save');
    self.doSaveFangan('save');
  };
  selected.prototype.doHemai = function () {
    var self = this;
    //--渠道动作埋点
    itou.channelHm.setBuriedPoints('project_sharebuy');
    itou.get({
      url: 'user/info',
      data: {
        token: itou.getToken()
      },
      noToast: true
    }).then(function (result) {
      //self.submitAction = "hemai";
      if (self.result.jiangjin.toFixed(2)) {
        itou.sessionData.setData('__hemai_pingce', {
          num: self.result.jiangjin.toFixed(2)
        });
      }
      self.doSaveFangan('hemai');
    });
  };
  selected.prototype.checkData = function () {
    var self = this,
      model = self.parent;
    if (self.guoguan.length == 0) {
      model.vm.showToast('请选择过关方式');
      return false;
    }
    if (self.result.money > 100000) {
      model.vm.showToast('单倍方案金额不能超过10万元');
      return false;
    }
    // if (self.result.money * self.beishu > 2000000) {
    //     model.vm.showToast('方案金额不能超过200万');
    //     return false;
    // }
    if (self.result.money * self.beishu > 200000) {
      model.vm.showToast('方案金额不能超过20万');
      return false;
    }
    return true;
  };
  selected.prototype.doSaveFangan = function (act) {
    //--保存方案
    var self = this,
      model = self.parent;
    if (!self.checkData()) {
      return;
    }
    var r = $.lottery.jingcai.basketball.formatSelectedToApiFangan(self);
    // console.log(r);
    model.apis.saveFangan(r, act);
  };
  var cache = function cache(model) {
    //--页面缓存数据
    var self = this;
    self.parent = model;
    self.isAutoCache = true; //--是否开启页面自动缓存
    self.hasSync = false; //--是否已经和selected对象、search对象同步数据
    self.apis = {}; //--页面缓存的接口数据
    self.selected = {
      //--页面缓存的选择数据
      beishu: 1,
      list: {},
      guoguan: [],
      dan: []
    };
    self.search = []; //--页面缓存的筛选数据

    self.autocomplete = false; //--是否自动完成过关方式
    self.optSelect = false; //--是否通过点击选项触发计算
    // self.init();
  };

  cache.prototype.init = function () {
    //--缓存数据初始化
    var self = this,
      prev = window.prevPage,
      model = self.parent,
      selected = model.selected;
    if (self.isAutoCache) {
      self.loadApis();
    }
    if (self.isAutoCache && prev && !prev.has('/project/detail/') && !prev.has('/user/shop/details/') && prev != window.config.base_url) {
      //--读取缓存数据
      self.loadSearch();
      self.loadSelected();
    }
    self.doSycn();
  };
  cache.prototype.doSycn = function () {
    //--和selected对象、search对象同步数据
    var self = this,
      model = self.parent,
      selected = model.selected,
      search = model.search;
    if (!self.hasSync) {
      //--首次数据同步，建立对象映射关系
      self.hasSync = true;
      selected.list = self.selected.list;
      selected.guoguan = self.selected.guoguan;
      selected.dan = self.selected.dan;
      selected.beishu = self.selected.beishu || 1;
      search.selected = self.search;
    } else {
      self.selected.beishu = selected.beishu;
      self.saveApis();
      self.saveSearch();
      self.saveSelected();
    }
  };
  cache.prototype.saveApis = function () {
    //--缓存接口数据
    var self = this,
      apis = self.apis;
    itou.sessionData.setData('__basketball_apis_autoCache', apis);
  };
  cache.prototype.saveSelected = function () {
    //--缓存选择数据
    var self = this,
      selected = self.selected;
    // console.log("cache.saveSelected", JSON.stringify(selected));
    itou.sessionData.setData('__basketball_selected_autoCache', selected);
  };
  cache.prototype.saveSearch = function () {
    //--缓存筛选数据
    var self = this,
      search = self.search;
    itou.sessionData.setData('__basketball_search_autoCache', {
      search: search
    });
  };
  cache.prototype.loadApis = function () {
    //--读取接口缓存数据
    var self = this,
      apis = itou.sessionData.getData('__basketball_apis_autoCache') || self.apis;
    self.apis = apis || {};
  };
  cache.prototype.loadSelected = function () {
    //--读取选择缓存数据
    var self = this,
      selected = itou.sessionData.getData('__basketball_selected_autoCache') || self.selected;
    // console.log("cache.loadSelected", JSON.stringify(selected));
    selected = selected.list ? selected : self.selected;
    self.selected = selected || {};
  };
  cache.prototype.loadSearch = function () {
    //--读取筛选缓存数据
    var self = this,
      search = itou.sessionData.getData('__basketball_search_autoCache').search || self.search;
    self.search = search || [];
  };
  cache.prototype.selectedSycn = function () {
    //--同步并整理选择数据
    var self = this,
      model = self.parent,
      page = model.page,
      maps = page.maps,
      selected = self.selected,
      list = selected.list,
      dan = selected.dan,
      guoguan = selected.guoguan,
      sNum = 0; //--已选择的赛事数量
    for (var i in list) {
      //--移除已经不存在的赛事选择项
      if (!maps[i]) {
        delete list[i];
      } else {
        sNum += 1;
      }
    }
    for (var i = guoguan.length - 1; i >= 0; i--) {
      //--移除超过赛事数量的过关方式
      var n = guoguan[i].left(1) * 1;
      if (n > sNum) {
        guoguan.splice(i, 1);
      }
    }
  };
  var pingce = function pingce(model) {
    //--奖金评测
    var self = this;
    self.parent = model;
    self.max = 0;
    self.min = 0;
    self.hasDan = true;
    self.list = []; //--奖金评测数据呈现列表
    self.isShow = false;
  };
  pingce.prototype.doPingce = function (reget) {
    //--执行奖金评测
    var self = this;
    if (self.isShow && !reget) {
      self.isShow = false;
      return;
    }
    self.show();
    self.getData(reget).then(function (data) {
      // console.log(data);
      self.parent.pingceLoading = 'done';
      self.formatDataFromApi(data);
      // console.log(self);
    });
  };

  pingce.prototype.getData = function (reget) {
    //--获取奖金评测数据
    var self = this,
      model = self.parent,
      apis = model.apis,
      selected = model.selected;
    if (reget) {
      //--是否忽略缓存重新获取
      var key = itou.outil.autocache.getKey('evaluate');
      delete Gray.$cache[key];
    }
    var r = $.lottery.jingcai.basketball.formatSelectedToApi(selected);
    return apis.getJiangjin(r);
  };
  pingce.prototype.show = function () {
    //--显示奖金评测弹窗
    var self = this,
      model = self.parent,
      selected = model.selected,
      keyboard = model.keyboard;
    selected.close();
    keyboard.close();
    self.isShow = true;
  };
  pingce.prototype.close = function () {
    //--关闭奖金评测弹窗
    var self = this;
    self.isShow = false;
  };
  pingce.prototype.formatDataFromApi = function (data) {
    //--处理奖金测评数据
    var self = this,
      model = self.parent,
      selected = model.selected;
    var self = this,
      hrm = data.data.hrm,
      o = self;
    o.list = [];
    if (data.code != '200') {
      if (data.data.msg) {
        itou.msg.toast = data.data.msg;
      }
      return;
    }
    o.max = 0;
    o.min = 0;
    o.hasDan = true;
    for (var i in hrm) {
      o.hasDan = !(i == '0'); //--是否是胆拖投注
      var a = hrm[i];
      for (var ii in a) {
        var b = a[ii],
          obj = {};
        o.max = o.max > b.max ? o.max : b.max; //--获取最大奖金
        o.min = o.min == 0 ? b.min : o.min < b.min ? o.min : b.min; //--获取最小金额
        obj.dan = i;
        obj.tuo = ii;
        obj.max = b.max;
        obj.min = b.min;
        o.list.push(obj);
        selected.result.jiangjin = o.max;
      }
    }
    //console.log(o);
  };

  var youhua = function youhua(model) {
    //--奖金优化，将选中的数据转为优化页面可以使用的数据
    var self = this;
    self.parent = model;
  };
  youhua.prototype.doYouhua = function () {
    //--将选中的数据，格式化成奖金优化所需形式
    var self = this,
      model = self.parent;
    if (!model.selected.data.canYouhua) {
      return;
    }
    ;
    var baseSetting = itou.baseSetting,
      simplify = itou.simplify;
    if (baseSetting.simplify && !simplify.youhua) {
      vm.showMsgBox('很抱歉，欧洲杯期间奖金优化功能暂时关闭！');
      return;
    }
    var page = model.page,
      selected = model.selected,
      list = selected.list,
      //--选中列表
      guoguan = selected.guoguan,
      //--过关方式
      zhushu = selected.result.zhushu,
      //--注数
      changshu = 0,
      //--場數
      maps = page.maps,
      $maps = $.lottery.jingcai.basketball.maps,
      codeToGame = $maps.codeToGame,
      mixedToSingle = $maps.mixedToSingle,
      $config = $.lottery.jingcai.basketball.$config,
      type = 'single',
      r = [];
    var m = '';
    for (var i in list) {
      //--格式化选中数据，获取主队名称、各选定项赔率、以及让球数
      var o = {},
        item = maps[i],
        a = list[i];
      o.hostname = item.team.host.name; //--主队名
      o.pankou = item.info.pankou; //--让球数
      o.fenjie = item.info.fenjie; //--大小球分界值
      o.opts = []; //--所有选项
      o.peifulv = {}; //--赔付率
      a.each(function (val) {
        var pflv = 0; //--临时数据，用于计算赔付率
        var bei = 1; //--乘数，默认1，让球胜平负时为 -1
        // console.log(m, codeToGame[val]);
        if (m != '' && m != codeToGame[val]) {
          type = 'mixed';
        }
        m = codeToGame[val];
        if (m == 'SportteryBS' || m == 'SportteryHWL') {
          bei = -1;
        }
        var t = $config[m].mixed[val];
        // if(m == "SportteryWS"){
        // 	var peilv = item.game[m].peilv.host[val].v || item.game[m].peilv.guest[val].v || 1;
        // }else{
        // 	var peilv = item.game[m].peilv[val].v;
        // }
        var peilv = item.game.getPeilv(val);
        peilv = peilv * bei; //--获取赔率
        o.opts.push([t, peilv, m, i]); //--选项（胜、平、负等）、对应赔率，玩法，对应no
        pflv += 1 / Math.abs(peilv);
        if (pflv > 0) {
          o.peifulv[m] = 1 / pflv; //--赔付率
        }
      });

      if (o.opts.length > 0) {
        r.push(o);
      }
    }
    changshu = r.length;
    // console.log(r);
    var zuhe = [];
    for (var i = 0, len = guoguan.length; i < len; i++) {
      //--获得场次组合
      var a = guoguan[i].split('_'),
        l = a[0],
        z = r.combination(l);
      zuhe = zuhe.concat(z);
    }
    // console.log(zuhe);

    // var allZuhe = getZuhes([], zuhe[9].slice(0));
    // console.log(allZuhe);
    var allZuhe = [];
    for (var i = 0, len = zuhe.length; i < len; i++) {
      allZuhe = allZuhe.concat(getZuhes([], zuhe[i].slice(0)));
    }
    // console.log(allZuhe);//document.write(JSON.stringify(allZuhe));

    var data = {
      lottery: 'basketball',
      //--彩种
      changshu: changshu,
      //--场数
      money: selected.result.zhushu * selected.beishu * 2,
      //--总金额
      guoguan: guoguan,
      //--过关
      type: type,
      //--投注方式：混合或单一
      zuhe: allZuhe,
      //--所有组合
      canHot: guoguan.length == 1 && guoguan[0] == changshu + '_1' //--是否可以博冷博热
    };
    // console.log(guoguan.length == 1, guoguan[0] == changshu + "_1", self.evaluate.min >= self.result.zhushu * 2);

    var r = $.lottery.jingcai.basketball.formatSelectedToApiFangan(selected);
    itou.localJson.setJson('__Jingcai_Optimize', {
      data: data,
      api: r
    }); //--保存缓存数据
    Gray.$page.loadPage('/jingcai/prizereview/?back=' + window.backurl);

    /**
     * 递归函数，用来获取所有组合
     */
    function getZuhes(r, arr) {
      var a = arr[0],
        name = a.hostname,
        pankou = a.pankou,
        fenjie = a.fenjie,
        peifulv = a.peifulv,
        opts = a.opts,
        b = [name, pankou],
        //--队名、盘口
        c = []; //console.log(r,b, opts);
      for (var i = 0, len = opts.length; i < len; i++) {
        var d = b.slice(0);
        d[2] = peifulv[opts[i][2]]; //--获得赔付率
        d = d.concat(opts[i]);
        if (d[5] == 'SportteryBS') {
          d[1] = fenjie;
        }
        c.push(d);
      }
      var e = [];
      if (r.length == 0) {
        r = c;
        for (var i = 0, len = r.length; i < len; i++) {
          r[i] = [r[i]];
        }
      } else {
        // console.log(r, c);
        for (var i = 0, len = r.length; i < len; i++) {
          for (var ii = 0, l = c.length; ii < l; ii++) {
            //console.log(r[i])
            var f = r[i].slice(0);
            f.push(c[ii].slice(0));
            e.push(f);
          }
        }
        r = e;
      }
      arr.splice(0, 1);
      if (arr.length == 0) {
        return r;
      } else {
        return getZuhes(r, arr);
      }
    }
  };
  var apis = function apis(model) {
    //--接口对象，负责调用各种借口
    var self = this;
    self.parent = model;
    var cache = model.cache,
      __apis = cache.apis;
    self.getAdvLive = function () {
      return itou.get({
        url: 'adv/getnotice',
        data: {},
        formatResult: false
      });
    };
    self.getAllowUser = function () {
      return itou.get({
        url: 'sharebuy/allowusesharebuy',
        data: {
          station_id: self.parent.station_id
        }
      });
    };
    self.getHemaiStatus = function () {
      return itou.get({
        url: 'sharebuy/issupport',
        data: {
          station_id: self.parent.station_id
        }
      });
    };
    self.getAdertisingStatus = function () {
      return itou.get({
        url: 'adv/adinfo',
        data: {
          aid: 1,
          pid: 2,
          station_id: self.parent.station_id
        },
        formatResult: false
      });
    };
    self.getAdvNum = function () {
      return itou.get({
        url: 'adv/clickstat',
        data: {
          aid: 1,
          pid: 2,
          station_id: self.parent.station_id
        },
        formatResult: false
      });
    };
    self.getList = function () {
      //--读取页面列表数据
      if (cache.isAutoCache && __apis['pageList']) {
        //--列表数据缓存存在，读取缓存
        var data = __apis['pageList'],
          defer = $.Deferred();
        defer.resolve(data);
        return defer.promise();
      } else {
        //--从接口读取缓存数据
        // console.log(JSON.stringify(cache.search));
        var cacheSearch = cache.search || [];
        var league_name = [];
        var single_support = 2;
        var danguan = [];
        var _iterator = _createForOfIteratorHelper(cacheSearch),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cacheSearch$i = _step.value;
            if ((cacheSearch$i === null || cacheSearch$i === void 0 ? void 0 : cacheSearch$i.indexOf('dg')) === 0) {
              danguan.push(cacheSearch$i.replace(/\D/g, ''));
            } else {
              league_name.push(cacheSearch$i);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (danguan.length == 1) {
          single_support = danguan[0];
        }
        return itou.get({
          url: 'match/selectlist',
          data: {
            hide_more: 1,
            league_name: league_name,
            single_support: single_support,
            jc_type: 'basket',
            station_user_id: itou.localJson.getJson('/user/shop/details/').id,
            station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
          },
          rnd: false,
          notoken: true,
          showErr: true //--接口超时是否跳转错误页面
        }).then(function (data) {
          cache.apis['pageList'] = data;
          cache.saveApis();
          return data;
        });
      }
    };
    self.getSearch = function () {
      //--读取检索选项数据
      if (cache.isAutoCache && __apis['pageSearch']) {
        //--数据缓存存在，读取缓存
        var data = __apis['pageSearch'],
          defer = $.Deferred();
        defer.resolve(data);
        return defer.promise();
      } else {
        //--从接口读取数据
        return itou.get({
          url: 'match/leaguequerylist',
          data: {
            jc_type: 'basket'
            // station_user_id: itou.localJson.getJson("/user/shop/details/").id,
            // station_uuid: itou.localJson.getJson("/user/shop/details/").uuid
          }
        }).then(function (data) {
          cache.apis['pageSearch'] = data;
          cache.saveApis();
          return data;
        });
      }
    };
    self.getCount = function () {
      //--获取最近7天比赛结果数量
      if (cache.isAutoCache && __apis['menuCount']) {
        //--数据缓存存在，读取缓存
        var data = __apis['menuCount'],
          defer = $.Deferred();
        defer.resolve(data);
        return defer.promise();
      } else {
        //--从接口读取数据
        return itou.get({
          url: 'match/finishcount',
          data: {
            jc_type: 'basket'
          },
          rnd: false,
          notoken: true
        }).then(function (data) {
          cache.apis['menuCount'] = data;
          cache.saveApis();
          return data;
        });
      }
    };
    self.loadMore = function (data) {
      //--赛事加载更多选项，获取胜负、胜分差赔率
      /**
       * data = {
              serial_no: no,
              bet_id: betid
          }
       */
      data = $.extend(data, {
        jc_type: 'basket'
      });
      return itou.get({
        url: 'match/selectmore',
        data: data
      });
    };
    self.saveFangan = function (data, act) {
      //--保存方案
      // console.log(JSON.stringify(data));
      return itou.outil.saveProject(data, act);
    };
    self.getDefaultStation = function (data) {
      //--获取默认店铺
      return itou.get({
        url: 'shop/getMyRecommStation',
        data: {
          lottery_type: data.lottery_type,
          money: data.money
        }
      });
    };
    self.getJiangjin = function (data) {
      //--获取奖金，这个异步加载要在点击选择赛事后，延时调用
      var token = itou.getToken(),
        t = Math.floor(Math.random() * 1000);
      model.pingceLoading = 'doing'; //--评测接口正在进行
      return itou.get({
        // url: "evaluate/?token=" + token + "&t=" + t,
        url: 'evaluate',
        data: JSON.stringify(data),
        type: 'POST',
        processData: false,
        formatResult: false,
        autocache: true
      });
    };
  };
  var keyboard = function keyboard(model) {
    //--弹出键盘对象
    var self = this;
    self.parent = model;
    self.isShow = false; //--是否显示弹出键盘
    self.hasKeyDown = false; //--弹出后是否点击过数字键盘
    self.topKey = [10, 20, 50, 100, 500]; //--顶部快捷按钮
  };

  keyboard.prototype.close = function () {
    //--关闭弹出键盘
    var self = this;
    self.isShow = false;
  };
  keyboard.prototype.show = function () {
    //--显示/关闭弹出键盘
    var self = this,
      model = self.parent,
      selected = model.selected,
      pingce = model.pingce;
    selected.close();
    pingce.close();
    if (!self.isShow) {
      self.isShow = true;
      self.hasKeyDown = false;
    } else {
      self.isShow = false;
    }
  };
  keyboard.prototype.topKeyDown = function (key) {
    //--顶部按钮点击事件
    var self = this,
      model = self.parent,
      selected = model.selected;
    if (isNaN(key)) {
      return;
    }
    self.hasKeyDown = false;
    selected.beishu = key * 1;
    self.close();
    selected.compute();
  };
  keyboard.prototype.numKeyDown = function (key) {
    //--数字按钮点击事件
    var self = this,
      model = self.parent,
      selected = model.selected,
      beishu = selected.beishu,
      max = selected.max.beishu;
    if (isNaN(key)) {
      return;
    }
    if (!self.hasKeyDown) {
      self.hasKeyDown = true;
      beishu = key;
    } else {
      beishu = beishu + '' + key;
    }
    beishu = beishu == 0 ? 1 : beishu * 1;
    if (beishu > max) {
      beishu = max;
    }
    if (beishu != selected.beishu) {
      selected.beishu = beishu * 1;
      selected.compute();
    }
  };
  keyboard.prototype.delKeyDown = function () {
    //--删除按钮点击事件
    var self = this,
      model = self.parent,
      selected = model.selected,
      beishu = selected.beishu + '',
      max = selected.max.beishu,
      len = beishu.length;
    if (len <= 1) {
      var bs = 1;
    } else {
      var bs = beishu.left(len - 1) * 1;
    }
    if (bs == 1) {
      self.hasKeyDown = false;
    }
    if (bs > max) {
      bs = max;
    }
    if (beishu != bs) {
      selected.beishu = bs * 1;
      selected.compute();
    }
  };
  var search = function search(model) {
    //--页面检索对象
    var self = this;
    self.parent = model;
    self.isShow = false; //--是否展示检索框；
    self.opts = []; //--赛事检索选项
    self.danguan = []; //--单关检索选项
    self.selected = []; //--选定的检索项
  };

  search.prototype.init = function () {
    //--页面检索数据初始化
    var self = this,
      model = self.parent,
      apis = model.apis;
    self.danguan = [
    // { t: '全部', v: '2', s: self.selected.contains('dg2') }, //--通过缓存数据判断选中状态
    {
      t: '仅单关',
      v: '1',
      s: self.selected.contains('dg1')
    }, {
      t: '非单关',
      v: '0',
      s: self.selected.contains('dg0')
    }];
    apis.getSearch().then(function (data) {
      var list = data.league_list;
      list.each(function (val) {
        //--格式化检索项
        var opt = {
          t: val,
          s: self.selected.contains(val)
        };
        self.opts.push(opt);
      });
    });
  };
  search.prototype.show = function () {
    //--显示隐藏检索弹窗
    var self = this;
    self.isShow = !self.isShow;
  };
  search.prototype.doSelect = function (type, opt) {
    //--选择或者取消选项
    opt.s = !opt.s; //--复选
  };

  search.prototype.clear = function () {
    var self = this,
      model = self.parent,
      cache = model.cache;
    self.selected.splice(0, self.selected.length);
    self.cancel();
    cache.saveSearch(); //--保存缓存
  };

  search.prototype.cancel = function () {
    //--取消检索事件
    var self = this;
    self.opts.each(function (opt) {
      //--重置各选项的选择状态
      var t = opt.t;
      if (self.selected.contains(t)) {
        opt.s = true;
      } else {
        opt.s = false;
      }
    });
    self.danguan.each(function (opt) {
      //--重置各选项的选择状态
      var v = opt.v;
      if (self.selected.contains('dg' + v)) {
        opt.s = true;
      } else {
        opt.s = false;
      }
    });
    self.isShow = false;
  };
  search.prototype.ok = function () {
    //--确认检索事件
    var self = this,
      model = self.parent,
      cache = model.cache;
    self.selected.splice(0, self.selected.length);
    self.opts.each(function (opt) {
      //--同步个选项的选中状态
      var t = opt.t;
      if (opt.s) {
        self.selected.push(t);
      }
    });
    self.danguan.each(function (opt) {
      //--同步个选项的选中状态
      var v = opt.v;
      if (opt.s) {
        self.selected.push('dg' + v);
      }
    });
    cache.saveSearch(); //--保存缓存
    // console.log(cache.search, self.selected);
    self.show();
    self.doSearch(); //--执行检索
  };

  search.prototype.doSearch = function () {
    //--执行检索
    var self = this,
      model = self.parent,
      cache = model.cache,
      page = model.page;
    delete cache.apis['pageList']; //--删除缓存数据
    page.getList(); //--重新加载页面数据
  };

  var currItem = function currItem(model) {
    //--当前展示的赛事信息
    var self = this,
      selected = model.selected,
      selectedList = $.extend(true, {}, selected.list);
    self.parent = model;
    self.isShow = false; //--是否显示当前赛事弹窗
    self.item = null; //--当前赛事行数据对象
    self.selectedList = selectedList;
  };
  currItem.prototype.init = function (item) {
    var self = this,
      model = self.parent,
      selected = model.selected,
      selectedList = $.extend(true, {}, selected.list);
    // console.log(selectedList, selected.list);
    self.item = item;
    self.selectedList = selectedList;
    self.show();
  };
  currItem.prototype.show = function () {
    //--展示或隐藏当前赛事弹窗
    var self = this;
    self.isShow = !self.isShow;
  };
  currItem.prototype.cancel = function () {
    //--取消当前赛事弹窗，并取消所有操作
    var self = this,
      model = self.parent,
      selected = model.selected;
    self.item.game.init(null, selected.list[self.item.info.no]); //--同步选中状态
    self.show(); //--关闭弹窗
  };

  currItem.prototype.ok = function () {
    //--确认选择，并更新数据到列表
    var self = this,
      item = self.item,
      no = item.info.no,
      model = self.parent,
      selected = model.selected;
    // selected.list = $.extend(true, selected.list, self.selectedList);
    var sArr = self.selectedList[no];
    if (sArr && sArr.length > 0) {
      selected.list[no] = sArr;
    } else {
      delete selected.list[no];
      item.info.selectNum = null; //--清空更多玩法选择数量
    }

    selected.compute(); //--计算选项
    self.show(); //--关闭弹窗
  };

  currItem.prototype.doSelect = function (key) {
    //--选项选择事件
    var self = this,
      item = self.item,
      selectedList = self.selectedList,
      model = self.parent,
      m = model.maps.lotteryMaps.codeToGame,
      g = m[key],
      game = item.game[g];
    selected = model.selected;
    if (g == 'SportteryWS') {
      var peilv = game.peilv.host[key] || game.peilv.guest[key];
      peilv = peilv.v || '未受注';
    } else {
      var peilv = game.peilv[key].v || '未受注';
    }
    var peilv = item.game.getPeilv(key) || '未受注';
    if (peilv == '未受注') {
      return;
    }
    if (item) {
      item.optSelect(key, selectedList);
    }
  };
  currItem.prototype.selectAll = function (type) {
    //--胜分差，主胜比分和客胜比分;type: host || guest;
    var self = this,
      item = self.item,
      no = item.info.no,
      selectedList = self.selectedList,
      sArr = selectedList[no] || [],
      maps = $.lottery.jingcai.basketball.maps.SportteryWS;
    // console.log(selectedList, item);
    if (type != 'host' && type != 'guest') {
      return;
    }
    var mArr = maps[type];
    var minus = Array.minus(mArr, sArr); //--取差集
    // console.log("mArr = ", mArr);
    // console.log("sArr = ", sArr);
    // console.log("minus = ", minus);
    if (minus.length == 0) {
      //--已经全部选中
      mArr.each(function (val) {
        //--取消选择
        self.doSelect(val);
      });
    } else {
      minus.each(function (val) {
        //--全部选中
        self.doSelect(val);
      });
    }
  };
  var help = function help(model) {
    //--页面弹窗帮助
    var self = this;
    self.parent = model;
    self.isShow = null; //--是否显示弹窗帮助
    self.info = {
      host: null,
      //--主队名称
      guest: null,
      //--客队名称
      pankou: null //--盘口
    };
  };

  help.prototype.show = function (no, type) {
    //--显示隐藏让球弹窗帮助
    var self = this;
    if (!self.isShow) {
      var model = self.parent,
        page = model.page,
        maps = page.maps,
        item = maps[no];
      if (item) {
        //--获取赛事主队、客队、盘口信息
        self.info.host = item.team.host.name; //--主队名
        self.info.guest = item.team.guest.name; //--客队名
        self.info.pankou = type == 'HWL' ? item.info.pankou : item.game.SportteryBS.pankou; //--盘口
        if (type == 'HWL' && self.info.pankou > 0) {
          self.info.pankou = '+' + self.info.pankou;
        }
      }
      self.isShow = type;
    } else {
      self.isShow = null;
    }
  };
  var menu = function menu(model) {
    //--页面弹出菜单
    var self = this;
    self.parent = model;
    self.isShow = false;
    self.menuList = []; //--最近几天比赛结果列表
  };

  menu.prototype.show = function () {
    //--显示/隐藏弹出菜单
    var self = this;
    self.isShow = !self.isShow;
  };
  menu.prototype.close = function () {
    //--隐藏弹出菜单
    var self = this;
    self.isShow = false;
  };
  menu.prototype.init = function () {
    //--弹出菜单数据初始化
    var self = this,
      model = self.parent,
      apis = model.apis;
    apis.getCount() //--读取接口数据
    .then(function (data) {
      self.getMenuList(data);
    });
  };
  menu.prototype.getMenuList = function (data) {
    //--处理接口数据，格式化成页面呈现形式
    var self = this,
      date = new Date();
    for (var i in data) {
      var o = {};
      o.v = data[i];
      o.i = i;
      var diff = (i + ' 00:00:00').toDate().DateDiff('d', date);
      switch (true) {
        case diff >= 0 && diff < 1:
          o.t = '今日';
          break;
        case diff >= 1 && diff < 2:
          o.t = '昨日';
          break;
        default:
          o.t = (i + ' 00:00:00').Dateformat('mm月dd日');
      }
      self.menuList.push(o);
      if (self.menuList.length >= 3) {
        break;
      }
    }
  };
  var maps = function maps(model) {
    //--映射关系对象
    var self = this;
    self.parent = model;
    self.lotteryMaps = $.lottery.jingcai.basketball.maps;
    // console.log(self);
  };

  var model = function model() {
    var self = this;
    self.setting = itou.lotterySetting.jingcailanqiu; //--竞彩篮球投注设置
    self.maps = new maps(self); //--映射关系对象
    self.page = new page(self); //--页面列表数据对象
    self.pingce = new pingce(self); //--奖金评测对象
    self.youhua = new youhua(self); //--奖金优化对象
    self.keyboard = new keyboard(self); //--弹出键盘对象
    self.search = new search(self); //--检索对象
    self.cache = new cache(self); //--页面缓存对象
    self.selected = new selected(self); //--页面选定数据对象
    self.currItem = new currItem(self); //--当前展示赛事对象
    self.apis = new apis(self); //--接口对象
    self.help = new help(self); //--页面帮助弹窗对象
    self.menu = new menu(self); //--页面弹出菜单对象

    self.vm = null; //--Vue实例对象

    self.localData = {
      t: '竞彩篮球',
      v: '',
      service: '',
      num: 0,
      map: 'jingcai'
    };
    itou.localData.setData('__sys_lottery_type', {
      key: self.localData
    });
    self.showOpenMsg = false; //--是否显示页面第一次打开时的提示信息

    self.cache.init(); //--缓存对象数据初始化
    self.search.init(); //--检索对象数据初始化
    self.menu.init(); //--弹出菜单对象数据初始化
    self.advertising_data = {
      dest_url: '',
      show: false
    };
    self.station_id = itou.localJson.getJson('__entry_info').station_id;
    self.is_allow = false;
    self.hemai_allow = false;
    self.pingceLoading = 'done'; //--奖金评测接口调用状态

    if ($.paijiang) {
      var sid = Gray.$page.getUrlParam('station_id') || '';
      $.paijiang.init({
        dataType: 'lottery',
        sid: sid
      });
      $.paijiang.apis.getInfo({
        lottery_type: 'jclq',
        station_user_id: sid
      });
      self.paijiang = $.paijiang;
    } else {
      self.paijiang = {};
    }
    self.grcmdNum = {};
  };

  //--获取彩种匹配赛事匹配的推荐数量
  model.prototype.getBetMatchGrcmdNum = function () {
    var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息
    var self = this;
    return itou.get({
      url: 'recommend/getBetMatchGrcmdNum',
      data: {
        lottery_style: 'jclq',
        station_uid: shop.id
      },
      rnd: false,
      notoken: true,
      noToast: true
    }).then(function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      self.grcmdNum = data;
      if (Object.keys(data).length > 0) {
        itou.baiduHm('投注页', '推单入口展示'); //--百度统计
      }
    });
  };

  model.prototype.getAdvertising = function () {
    var self = this;
    self.apis.getAdertisingStatus().then(function (result) {
      var defer = $.Deferred();
      if (result.data.toString()) {
        self.advertising_data.dest_url = result.data.dest_url;
        var time = localStorage.getItem('advertising_time'); //itou.localJson.getJson('advertising_time');
        var d = new Date();
        var now_time = d.getTime();
        if (!time) {
          self.advertising_data.show = true;
          //itou.localJson.setJson('advertising_time', now_time);
        } else if (now_time - time > 86400000) {
          self.advertising_data.show = true;
        }
        defer.resolve();
      }
      return defer.promise();
    });
  };
  var config = {
    domDown: {
      initialCall: function initialCall() {
        var me = this;
        if (me.dom) {
          me.dom.innerHTML = '<div class="dropload-load"></div>';
        }
      },
      domNoData: function domNoData() {
        var me = this;
        if (me.dom) {
          me.dom.innerHTML = '<div class="dropload-load">没有更多数据了</div>';
        }
      }
    }
  };
  Vue.use(window.Drapload, config);
  window.pageLoad = function () {
    //--页面逻辑入口函数
    var vm = new Vue({
      el: '#vue2_el',
      data: new model(),
      computed: {
        pingceStatus: function pingceStatus() {
          //--奖金评测接口调用状态
          var self = this,
            pingceLoading = self.pingceLoading,
            key = 'pingce_status_key',
            r = {};
          r.status = pingceLoading;
          // console.log(pingceLoading);
          itou.outil.timmer.clearTimmer(key);
          if (pingceLoading == 'doing') {
            itou.outil.timmer.newTimmer({
              key: key,
              timeout: 5000,
              fun: function fun() {
                // console.log(pingceLoading == "doing");
                itou.outil.timmer.clearTimmer(key);
                if (pingceLoading == 'doing') {
                  self.pingceLoading = 'error';
                  r.status = pingceLoading;
                }
              }
            });
          }
          return r;
        },
        pingce_list_max_desc: function pingce_list_max_desc() {
          return _.orderBy(this.pingce.list, 'max', 'desc');
        }
      },
      beforeDestroy: function beforeDestroy() {
        var self = this;
        if (self.position) {
          self.position.init({
            //--重定位功能初始化
            daysData: self.page.list,
            //--日期数据对象
            openkey: 'isShow',
            //--是否展示的键值名
            type: 'danchang',
            //--类型
            el: '#scrollBody'
          });
          self.position.setPosition();
        }
      },
      mounted: function mounted() {
        var self = this,
          $data = self.$data;
        var hasOpened = itou.sessionData.getData('__jingcai_hasOpened');
        if (!hasOpened.key) {
          $data.showOpenMsg = true; //--显示页面第一次打开时的提示信息，3秒后隐藏
          window.setTimeout(function () {
            $data.showOpenMsg = false;
          }, 3000);
          itou.sessionData.setData('__jingcai_hasOpened', {
            key: true
          });
        }
      },
      created: function created() {
        var self = this,
          $data = self.$data,
          page = $data.page,
          cache = $data.cache,
          selected = $data.selected;
        $data.vm = self;
        //$data.getAdvertising();
        // console.log(self.showToast);
        $data.getBetMatchGrcmdNum();
        page.getList('init').then(function () {
          $data.selected.moreInit();
        }).then(function () {
          // cache.selectedSycn();//--修正选择数据
          selected.compute(); //---初始计算
        }).then(function () {
          if (self.position && (prevPage.has('/match2/') || prevPage.has('/confirm/') || prevPage.has('/hm/add/') || prevPage.has('/jingcai/prizereview/') || prevPage.has('/project/detail/'))) {
            self.position.init({
              //--重定位功能初始化
              daysData: self.page.list,
              //--日期数据对象
              openkey: 'isShow',
              //--是否展示的键值名
              type: 'danchang',
              //--类型
              el: '#scrollBody'
            });
            self.position["do"]();
          }
        });
        if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
          $data.apis.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
        }
        if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
          $data.apis.getHemaiStatus().then(function (result) {
            self.hemai_allow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_id).status;
        }
      },
      methods: {
        doSearch: function doSearch() {
          this.search.ok();
          //--滚动到最顶部
          if (this.$refs.gotoview) {
            this.$refs.gotoview.scrollIntoView({
              block: 'center'
            });
          }
        },
        // back: function(){
        // 	Gray.$page.loadPage("/");
        // },
        close_adv: function close_adv() {
          var self = this;
          self.advertising_data.show = false;
          var d = new Date();
          var now_time = d.getTime();
          localStorage.setItem('advertising_time', now_time);
          //itou.localJson.setJson('advertising_time', now_time);
        },

        look_adv_details: function look_adv_details() {
          var self = this,
            $data = self.$data;
          $data.apis.getAdvNum().then(function (result) {
            Gray.$page.loadPage(self.advertising_data.dest_url);
          });
        },
        gotoMatch: function gotoMatch(item, pageName) {
          //--查看战绩分析
          var matchid = item.info.id;
          if (!matchid || matchid == '0') {
            return;
          }
          if (pageName == 'recommend') {
            itou.baiduHm('投注页', '推单入口点击'); //--百度统计
          } else {
            itou.baiduHm('投注页', '赛事分析点击'); //--百度统计
          }

          var url = '/match/jingcailanqiu/history/';
          if (pageName == 'recommend') {
            url = '/match/jingcailanqiu/recommend/';
          }
          url += '?matchid=' + matchid + '&lottStyle=jclq&back=' + window.backurl;
          url = itou.bsrc.inherit(url);
          if (item.team.reversion) {
            var msg = '<span class=\'fontred\'>您将要打开的数据页面中，主客场位置与当前投注页相反，</span>投注时请确认主客队位置，一旦提交，我们将按照您的所选选项执行。<br />';
            vm.showMsgBox(msg, '重要提醒', 'beforeGotoMatch_close', '确定');
            vm.$on('msgbox_close', function (msg) {
              if (msg == 'beforeGotoMatch_close') {
                Gray.$page.loadPage(url);
              }
            });
          } else {
            Gray.$page.loadPage(url);
          }
        },
        doRefresh: function doRefresh() {
          //--下拉刷新
          var self = this,
            $data = self.$data,
            page = $data.page,
            cache = $data.cache,
            search = $data.search,
            selected = $data.selected;
          delete cache.apis['pageList']; //--删除缓存数据
          selected.clear(); //--清空选择数据
          $data.getBetMatchGrcmdNum();
          //--清空选中的筛选项
          search.clear();
          page.getList() //--重新加载页面数据
          .then(function () {
            self.ascroll.hasData();
            self.ascroll.resetload();
          });
        },
        doSave: function doSave() {
          var self = this;
          self.selected.doSave();
        },
        doSubmit: function doSubmit() {
          var self = this;
          self.selected.doSubmit();
        },
        doHemai: function doHemai() {
          var self = this;
          self.selected.doHemai();
        },
        checkSubmit: function checkSubmit() {
          //--检查数据并弹出提交按钮
          var self = this;
          if (!self.selected.checkData()) {
            return;
          }
          itou.outil.checkLogin().then(function (is_login) {
            if (is_login) {
              self.$refs.submitlayer.init({
                //--唤起提交按钮弹层
                vm: self,
                is_allow: self.is_allow,
                hemai_allow: self.hemai_allow,
                doSave: self.doSave,
                doSubmit: self.doSubmit,
                doHemai: self.doHemai
              });
            }
          });
        },
        /**
         * @function doClearSelected
         * @description 弹窗提示，清空选项
         */
        doClearSelected: function doClearSelected() {
          var _this = this;
          var noWarning = itou.localData.getData('__tz_del_warn').noWarning || 0;
          if (noWarning != 1) {
            this.$refs.layer.alert.warning({
              text: "\u662F\u5426\u6E05\u7A7A\u5DF2\u6295\u6CE8\u9009\u9879\uFF1F",
              checkbox: {
                checked: noWarning == 1,
                fun: function fun() {
                  noWarning ^= 1;
                },
                text: '不再提示，直接清空。'
              },
              buttons: [{
                text: '否'
              }, {
                text: '是',
                fun: function fun() {
                  _this.unSelectAll();
                  // this.act.currAction = '';
                  itou.localData.setData('__tz_del_warn', {
                    noWarning: noWarning
                  });
                }
              }]
            });
          } else {
            this.unSelectAll();
            // this.act.currAction = '';
          }
        },
        /**
         * @function unSelectAll
         * @description 清空选中的选项
         */
        unSelectAll: function unSelectAll() {
          var sList = this.selected.list || {};
          var maps = this.page.maps;
          for (var x in sList) {
            var item = maps[x];
            if (item && item.game) {
              for (var y in item.game) {
                var game = item.game[y];
                if (game !== null && game !== void 0 && game.peilv) {
                  for (var z in game.peilv) {
                    game.peilv[z].s = false;
                  }
                }
              }
            }
          }
          this.selected.showType = '';
          this.pingce.isShow = false;
          this.keyboard.isShow = false;
          this.selected.clear(); //--清空选择数据
          this.$refs.layer.tip.succesTop({
            text: '投注选项已清空'
          });
        }
      }
    });
  };
})();

/***/ })

/******/ });