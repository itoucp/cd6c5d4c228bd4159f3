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
/******/ 	return __webpack_require__(__webpack_require__.s = 211);
/******/ })
/************************************************************************/
/******/ ({

/***/ 211:
/***/ (function(module, exports) {

/**
 * 微信C端     竞彩足球——奖金优化
 * Created by 赵宇飞 on 2016/9/19.
 */
$(function () {
  itou.localJson.setJson('__confirm_prev_page', {
    key: '/jingcai/prizereview/'
  });
  var item = function item(data) {
    var self = this;
    self.guoguan = data.guoguan || ''; //--过关
    self.text = data.text || []; //--过关内容
    self.zhushu = data.zhushu || 0; //--注数
    self.money = data.money || 0; //--奖金金额
  };

  var apis = function apis(model) {
    //--接口对象构造函数
    var self = this;
    self.parent = model;
    self.saveFangan = function (data, act) {
      //--保存方案
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
  };
  var optimize = function optimize(model) {
    //--数据优化实例对象
    var self = this;
    self.parent = model;
    self.submitAction = '';
    var datas = itou.localJson.getJson('__Jingcai_Optimize'); //--获取缓存数据
    self.data = datas.data;
    self.apis = datas.api; //--做单接口所需数据
    self.peifulv = 1;
    self.isDanchang = false;
    if (self.data.lottery == 'danchang') {
      try {
        $.lottery.danchangConfig(); //--北单配置初始化
      } catch (e) {}
      self.peifulv = 0.65;
      self.isDanchang = true;
    }
    /**
    * 由于接口的需求，提交的数据中count和money需要使用原始的count和money，优化后的数量存在count_optimize中
    * 但现在的代码中，count和money已经直接参与计算，直接改动牵扯太广
    * 因此数据逻辑如此设计：
    * 使用self.oldData对象来存储原始的count和money，数据中的count和money功能不变，继续参与计算，
    * 再提交数据之前，将计算后的count存入count_optimize，然后将count和money更新到原始数据
    */
    self.oldData = {
      count: self.apis.conut,
      money: self.apis.money
    };
    console.log(self.apis);
    self.listInfo = {
      //--列表描述信息，投注花费 和 中奖最大值、最小值
      money: 0,
      max: 0,
      min: 0
    };
    if (!self.data || !self.apis) {
      Gray.$page.loadPage('/jingcai/');
      return;
    }
    console.log(self.data);
    self.apis.manner = 3; //--数据优化
    self.apis.wager_store_optimize = [];
    self.apis.m_ext = {
      prize_optimize_manner: 'avg'
    };
    self.items = []; //--格式化后的组合数据
    self.guoguan = {}; //--不同过关方式对应数据，数据形式：{"1":[item,item…………],"2":[item,item…………]}
    self.ggMaps = self.data.guoguan.each(function (v) {
      //--过关方式数字映射，2_1映射为2，3_1映射为3，以此类推
      return v.replace('_1', '') * 1;
    });
    self.ggMaps.sort(); //--过关映射排序
    self.minMoney = self.data.money;
    var zuhe = self.data.zuhe;
    for (var i = 0, len = zuhe.length; i < len; i++) {
      var item = self.formatItem(zuhe[i]); //--组合数据格式化
      self.items.push(item);
    }
    // console.log(self.items);
    self.moneys = []; //--所有总奖金集合，用于计算奖金最大值最小值
    self.ms = []; //--所有单注奖金集合，用于总注数找平
    self.mMaps = {}; //--单注奖金映射，用于总注数找平，奖金会被格式化为整数
    self.zhushu = []; //--所有注数集合，用于计算总注数
    self.list = []; //--投注数据列表
    // self.listInfo = {};
    self.listOrder = []; //--投注数据列表，排序后
    var info = self.parent.info;
    info.chang = self.data.changshu;
    info.guoguan = self.data.guoguan.join(',').replace(/_/g, '串');
    info.money = self.data.money;
    self.canHot = self.data.canHot; //--是否符合博冷波热的部分条件
    // self.parent.canHot = self.data.canHot;//--是否可以博冷博热
  };

  optimize.prototype.formatItem = function (item) {
    //--格式化缓存数据，计算各自概率、单注奖金
    var self = this,
      r = {};
    r.guoguan = item.length + '串1'; //--过关
    r.text = []; //--赛事组合
    r.gailv = 1; //--概率
    r.money = 2; //--单注奖金
    for (var i = 0, len = item.length; i < len; i++) {
      var saishi = item[i],
        text = [saishi[0], saishi[3], saishi[6], saishi[5]],
        //--主队名、选择项、no、玩法
        peilv = saishi[4],
        //--赔率
        pankou = saishi[1],
        //--盘口
        peifulv = saishi[2]; //--赔付率
      if (peilv < 0) {
        text.push(pankou);
      } //--让球胜平负盘口
      r.text.push(text);
      peilv = Math.abs(peilv); //console.log(peilv, peifulv);
      r.money = r.money * peilv; //--计算单注奖金
      r.gailv = r.gailv * (1 / peilv * peifulv); //--计算组合概率
    }

    r.money = r.money * self.peifulv;
    if (self.isDanchang) {
      if (r.money > 500 * Math.pow(10, 4)) {
        r.money = 500 * Math.pow(10, 4);
      }
    }
    return r;
  };
  optimize.prototype.doAvg = function () {
    //--进行平均优化
    var self = this,
      items = self.items,
      allMoney = self.data.money,
      //--总金额
      zhushu = allMoney / 2,
      //--总注数
      x = 0;
    self.list = [];
    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i],
        o = {
          index: null,
          guoguan: item.guoguan,
          //--过关
          text: item.text,
          //--组合
          zhushu: null,
          //--注数
          money: null,
          //--奖金
          m: item.money,
          //--单注奖金
          hot: 0 //--博冷博热排序用，默认0，博冷博热项为1
        };

      x += 1 / o.m;
      self.list.push(o);
    }
    var sMoney = zhushu / x; //--平均单注奖金金额
    self.list.forEach(function (v, i) {
      var _zhushu = Math.floor(sMoney / v.m);
      v.zhushu = _zhushu == 0 ? 1 : _zhushu;
      v.money = v.m * v.zhushu;
      v.index = i;
      self.moneys.push(v.money); //--各总奖金集合
      var m = (v.m * 1).toFixed(2);
      self.ms.push(m); //--单注奖金集合
      self.ms = self.ms.uniquelize(); //--数组元素唯一化
      if (!self.mMaps[m]) {
        //--创造映射
        self.mMaps[m] = [v];
      } else {
        self.mMaps[m].push(v);
      }
      self.zhushu.push(v.zhushu); //--注数集合
      var len = v.text.length;
      if (!self.guoguan[len]) {
        self.guoguan[len] = [];
      }
      self.guoguan[len].push(v); //--引用到对应过关中
    });

    self.dataTongbu();
    console.log(self);
    self.doZhushuXiuzheng(); //--注数找平
    if (self.parent.currAct == 'avg') {
      self.doOrder('avg');
    }
  };
  optimize.prototype.dataTongbu = function () {
    //--集合以及映射数据修正
    var self = this;
    self.moneys = [];
    self.ms = [];
    self.zhushu = [];
    self.mMaps = {};
    self.list.forEach(function (v) {
      v.money = v.m * v.zhushu;
      self.moneys.push(v.money); //--各总奖金集合
      var m = (v.m * 1).toFixed(2);
      self.ms.push(m); //--单注奖金集合
      self.ms = self.ms.uniquelize(); //--数组元素唯一化
      if (!self.mMaps[m]) {
        //--创造映射
        self.mMaps[m] = [v];
      } else {
        self.mMaps[m].push(v);
      }
      self.zhushu.push(v.zhushu); //--注数集合
    });
  };

  optimize.prototype.doZhushuXiuzheng = function () {
    //--执行注数修正，当平均优化后注数与原注数不一致时，将其修正到一样；
    /**
    * 平均算法优化：
    * 1、使用N元一次方程解出每个赔率组合对应的注数，有小数向下取整，但小于1的情况置为1。
    * 2、当处理注数不等于设定注，则从低赔到高赔循环增减注数至设定注，但当前注为1的时候不在操作。
    * 例如
    * 赔率从小到大注数为：3、3、2、1、1、1，多3注，则为2、2、1、1、1、1
    * 赔率从小到大注数为：3、3、2、1、1、1，少2注，则为4、4、2、1、1、1
    * 3、进一步优化规则：判断是否有低于本金的奖金组合，如果有则从最低奖金组合减少1注至目标奖金组合，循环直至目标奖金赔率组合高于本金，但如果最低奖金组合减1小于本金或为1后则不再进行操作。
    **/

    var self = this,
      ms = self.ms.slice(0),
      //--单注金额集合
      mMaps = self.mMaps,
      //--单注金额映射
      allMoney = self.data.money,
      //--总金额
      zs1 = allMoney / 2,
      //--总注数
      zhushu = self.zhushu,
      zs2 = zhushu.reduce(function (x, y) {
        return x + y;
      }, 0),
      //--实际注数
      diff = (zs1 - zs2).toFixed(0) * 1,
      cishu = 0; //--最大递归次数，防死循环
    console.log(mMaps);
    var _ms = ms.sort(function (a, b) {
        return a - b;
      }),
      //--排序
      step = diff / Math.abs(diff); //--加 或者减
    function todoAvg(diff) {
      //--找平，步骤2
      var doBreak = false; //--是否中止外循环
      for (var i = 0, len = _ms.length; i < len; i++) {
        var items = mMaps[_ms[i]];
        if (!doBreak && diff != 0 && items && itou.outil.is(items, 'Array')) {
          for (var m = 0, n = items.length; m < n; m++) {
            // console.log(items[m].zhushu, items[m].zhushu + step, doBreak, diff);
            if (items[m].zhushu + step <= 0) {
              //--注数不足
              doBreak = true; //--中止外循环
              break;
            }
            diff -= step;
            items[m].zhushu += step;
            items[m].money = items[m].m * items[m].zhushu;
            if (diff == 0) {
              break;
            }
          }
        } else if (doBreak || diff == 0) {
          break;
        }
      }
      if (diff != 0) {
        todoAvg(diff); //--递归找平
      }
    }

    todoAvg(diff); //--找平
    var _minArr = []; //--奖金小于本金的集合
    for (var i = 1, len = _ms.length; i < len; i++) {
      var items = mMaps[_ms[i]];
      for (var m = 0, n = items.length; m < n; m++) {
        if (items[m].money < allMoney) {
          _minArr.push(items[m]); //--获取奖金小于本金的的item
        }
      }
    }

    console.log(_minArr, allMoney);
    console.log(_minArr.length);
    var min = _ms[0]; //--获取最小单注奖金
    var items = mMaps[min]; //--奖金最小的item数组
    var item = items[0];
    if (_minArr.length >= 1 && item.money - allMoney > 0) {
      //--步骤三，优化
      var yhNum = 0; //--可以提供的优化数量
      for (var i = 0, len = items.length; i < len; i++) {
        //--计算可以提供的优化数量
        var item = items[i];
        var x = parseInt((item.money - allMoney) / item.m);
        yhNum += x;
      }
      var _yhNum = yhNum;
      for (var i = 0, len = _minArr.length; i < len; i++) {
        //--计算小于本金的item，得出总计需要多少注用来优化
        var item = _minArr[i];
        var num = Math.floor((allMoney - item.money) / item.m) * 1 + 1;
        if (yhNum > num) {
          yhNum -= num;
          item.zhushu = item.zhushu * 1 + num;
        } else {
          item.zhushu = item.zhushu * 1 + yhNum;
          yhNum = 0;
        }
        item.money = item.zhushu * item.m;
      }
      var useNum = _yhNum - yhNum,
        avgNum = Math.floor(useNum / items.length),
        //--平均数
        modNum = useNum % items.length; //--余数
      for (var i = 0, len = items.length; i < len; i++) {
        //--将优化数平均到奖金最低的item里
        var item = items[i];
        item.zhushu -= avgNum;
        if (i + 1 <= modNum) {
          item.zhushu -= 1;
        }
        item.money = item.zhushu * item.m;
      }
    }
    var zs = [],
      moneys = [];
    self.list.forEach(function (v, i) {
      zs.push(v.zhushu); //--注数集合
      moneys.push(v.money); //--各总奖金集合
    });

    self.zhushu = zs;
    self.moneys = moneys;
    /**
    xiuzheng(diff);
    function xiuzheng(diff){//--递归函数，修正平均优化所产生的差异
    cishu += 1;
    if(cishu > 500){//--超过最大递归次数，跳出
    self.dataTongbu();
    return;
    }
    var minMS = Math.min.apply(null, ms),//--最小单注金额
    items = mMaps[minMS.toFixed(2)];//console.log(minMS,items);
    // ms.splice(0, 1);
    var num = 0;
    for(var i = 0, len = items.length; i < len; i++){
    var z = items[i].zhushu;//console.log(z);
    if(diff < 0){
    diff += 1;//--差异修正
    items[i].zhushu = items[i].zhushu * 1 + 1;//--注数修正
    }else if(diff > 0){
    if(num < len){
    if(z > 1){
    diff -= 1;//--差异修正
    items[i].zhushu -= 1;//--注数修正
    }else if(z == 1){
    num += 1;//--不可修正数累加
    continue;//--跳出本次循环
    }
    }else{
    ms = Array.minus(ms, [minMS]);
    }
    }else if(diff == 0){
    self.dataTongbu();
    return;
    }
    }
    // console.log(num,len,diff,ms);
    if(num == len){ms = Array.minus(ms, [minMS]);}
    else if(len == 0){ms = Array.minus(ms, [minMS])}//--修正映射，移除空映射
    if(diff != 0 && ms.length > 0){
    xiuzheng(diff);//--递归执行
    }else{
    self.dataTongbu();
    }
    }
    */
  };

  optimize.prototype.doOrder = function (key) {
    //--排序
    var self = this,
      ms = self.ms.slice(0),
      //--单注金额集合
      mMaps = self.mMaps,
      //--单注金额映射
      allMoney = self.data.money,
      //--总金额
      ggMaps = self.ggMaps,
      num = 0; //--可优化注数
    self.listOrder = [];
    if (key == 'hot' || key == 'cold') {
      var minMS = key == 'hot' ? Math.min.apply(null, ms) : Math.max.apply(null, ms),
        //--最小(大)单注金额
        items = mMaps[minMS.toFixed(2)],
        //--最小（大）金额对象集合
        ms = Array.minus(ms, [minMS]); //--取差集，得出需要优化的数据
    }

    if (items) {
      for (var m = 0, n = items.length; m < n; m++) {
        var it = items[m];
        self.listOrder.push(it);
      }
    }
    ms.sort(function (a, b) {
      return a - b;
    });
    for (var x = 0, y = ggMaps.length; x < y; x++) {
      for (var i = 0, len = ms.length; i < len; i++) {
        var items = mMaps[ms[i]];
        // console.log(ms[i], items);
        // self.listOrder = self.listOrder.concat(items);
        for (var m = 0, n = items.length; m < n; m++) {
          var it = items[m];
          if (it.text.length == ggMaps[x]) {
            self.listOrder.push(it);
          }
        }
      }
    }
    // console.log(self.listOrder);
    // console.log(ms);
  };

  optimize.prototype.doHot = function (key) {
    //--博热\博冷
    var self = this,
      ms = self.ms.slice(0),
      //--单注金额集合
      mMaps = self.mMaps,
      //--单注金额映射
      minMS = key == 'hot' ? Math.min.apply(null, ms) : Math.max.apply(null, ms),
      //--最小(大)单注金额
      // minMS = minMS.toFixed(2),
      items = mMaps[minMS.toFixed(2)],
      //--最小（大）金额对象集合
      allMoney = self.data.money,
      //--总金额
      num = 0; //--可优化注数
    ms = Array.minus(ms, [minMS]); //--取差集，得出需要优化的数据
    // console.log(ms, mMaps, minMS, items, allMoney);
    for (var i = 0, len = ms.length; i < len; i++) {
      var objs = mMaps[ms[i]];
      for (var m = 0, n = objs.length; m < n; m++) {
        var it = objs[m];
        if (it.money > allMoney) {
          var m = it.m,
            zhushu = it.zhushu * 1,
            x = Math.ceil(allMoney / m) * 1; //--优化后注数
          num += zhushu - x;
          it.hot = 0; //--更新博冷搏热标志
          it.zhushu = x; //--更新注数
        }
      }
    }
    // console.log(num);
    var l = items.length,
      //--获得相同的金额的数量
      mod1 = num % l,
      //--计算余数
      num1 = (num - mod1) / l; //--计算平均每种投注的数量
    for (var m = 0, n = items.length; m < n; m++) {
      // if(num == 0){break;}
      var it = items[m];
      it.hot = 1; //--更新博冷搏热标志
      it.zhushu = it.zhushu * 1 + num1; //--更新注数
      if (m < mod1) {
        //--通过余数继续更新'
        it.zhushu = it.zhushu * 1 + 1; //--更新注数
      }
      // num -= 1;console.log(num);
    }

    self.dataTongbu();
    self.doOrder(key);
  };
  optimize.prototype.doFangan = function () {
    //--做单
    var self = this,
      model = self.parent,
      listInfo = self.listInfo,
      submitAction = self.submitAction;
    // console.log(self.list, self.data.type, self.apis.wager_type, self.data);
    if (self.data.lottery == 'basketball') {
      var r = $.lottery.jingcai.basketball.formatListToOptimize(self.list, self.data.type, self.apis.wager_type);
    } else {
      var r = $.lottery.jingcai.football.outil.formatListToOptimize(self.list, self.data.type, self.apis.wager_type);
    }
    // console.log(r);return;
    // console.log(self.apis);return;
    // self.apis.count = self.oldData.count;
    // self.apis.money = self.oldData.money;
    self.apis.count_optimize = listInfo.money / 2;
    self.apis.wager_store_optimize_json = JSON.stringify(r);
    self.apis.is_share_buy = '';
    // console.log(self.apis, JSON.stringify(self.apis));return;
    model.apis.saveFangan(self.apis, submitAction);
  };
  optimize.prototype.doSubmit = function () {
    //--提交店铺
    var self = this;
    self.submitAction = 'submit';
    self.doFangan();
  };
  optimize.prototype.doSave = function () {
    //--保存方案并执行跳转
    var self = this;
    self.submitAction = 'save';
    self.doFangan();
  };
  optimize.prototype.doHemai = function () {
    var self = this;
    self.submitAction = 'hemai';
    self.doFangan();
  };
  optimize.prototype.doAdd = function (key, index) {
    //--增加或者减少注数
    var self = this,
      listInfo = self.listInfo,
      list = self.list,
      item = list[index];
    key = key || 1;
    if (item) {
      var m = item.m,
        zhushu = item.zhushu * 1,
        max = (100000 - listInfo.money) / 2 + zhushu; //--最大注数;
      zhushu += key;
      if (zhushu < 0) {
        zhushu = 0;
      } else if (zhushu > max) {
        zhushu = max;
      }
      item.zhushu = zhushu;
      item.money = m * zhushu;
      self.dataTongbu();
    }
  };
  var jianpan = function jianpan(model) {
    var self = this;
    self.parent = model;
    self.currJianpan = '';
    self.firstKeyDown = false; //--是否点击了第一个按键
    self.data = {
      main: {
        //--金额键盘区对象
        min: null,
        num: null
      },
      sub: {
        //--单注键盘区对象
        index: null,
        num: null
      }
    };
  };
  jianpan.prototype.show = function (key, index) {
    //--显示小键盘
    var self = this,
      model = self.parent,
      optimize = model.optimize;
    self.currJianpan = key;
    self.firstKeyDown = false;
    if (key == 'main') {
      self.data.main.min = optimize.minMoney;
      self.data.main.num = optimize.data.money;
    } else if (key == 'sub') {
      var item = optimize.list[index];
      console.log(item);
      self.data.sub.index = index;
      self.data.sub.num = item.money.toFixed(2);
    }
  };
  jianpan.prototype.hide = function () {
    //--隐藏小键盘
    var self = this;
    self.currJianpan = '';
  };
  jianpan.prototype.doKeyDown = function (v) {
    //--数字键按钮功能
    var self = this,
      data = self.data;
    model = self.parent, optimize = model.optimize, listInfo = optimize.listInfo, currAct = model.currAct, type = self.currJianpan, num = (data[type].num + '' + v) * 1;
    if (type == 'main') {
      if (!self.firstKeyDown) {
        data[type].num = v;
      } else {
        data[type].num = num > 100000 ? 100000 : num; //--最大金额10万
      }
    } else if (type == 'sub') {
      var index = data[type].index,
        item = optimize.list[index],
        m = item.m,
        zhushu = item.zhushu;
      var max = (100000 - listInfo.money) / 2 + zhushu; //--最大注数
      if (!self.firstKeyDown) {
        data[type].num = v;
      } else {
        data[type].num = num > max * m ? Math.floor(max * m) * 1 : num;
      }
    }
    self.firstKeyDown = true;
  };
  jianpan.prototype.doKeyDel = function () {
    //--删除键按钮功能
    var self = this,
      data = self.data;
    model = self.parent, currAct = model.currAct, type = self.currJianpan;
    var num = (data[type].num + '').left((data[type].num + '').length - 1);
    if (!self.firstKeyDown) {
      data[type].num = 0;
    } else {
      data[type].num = num ? num * 1 : 0;
    }
    self.firstKeyDown = true;
  };
  jianpan.prototype.doSubmit = function () {
    //--小键盘确认
    var self = this,
      model = self.parent,
      optimize = model.optimize,
      currAct = model.currAct,
      type = self.currJianpan,
      data = self.data;
    if (type == 'main') {
      var min = data[type].min,
        num = data[type].num;
      if (num % 2 != 0) {
        model.vm.showToast('金额不小于' + min + '元且必须为2的整数');
        return;
      } else if (num < min) {
        model.vm.showToast('金额不小于' + min + '元且必须为2的整数');
        return;
      }
      optimize.data.money = num;
      model.info.money = num;
      optimize.apis.m_ext.prize_optimize_manner = 'avg';
      optimize.doAvg();
      if (currAct != 'avg') {
        optimize.apis.m_ext.prize_optimize_manner = currAct;
        optimize.doHot(currAct);
      }
    } else if (type == 'sub') {
      var index = data[type].index,
        num = data[type].num,
        item = optimize.list[index];
      m = item.m;
      var n = Math.ceil(num / m);
      item.zhushu = n;
      item.money = n * m;
      optimize.dataTongbu();
    }
    self.hide();
  };
  var model = function model() {
    var self = this;
    // self.localData = {t: "竞彩足球", v: "", service: "", num: 0, map: "jingcai"};
    // itou.localData.setData("__sys_lottery_type", {key: model.localData});
    self.prev = window.prevPage;
    self.showBody = false;
    //--todo:当上一页不是 投注页面 或者 方案详情页面 或者 提交彩站页面，则跳转到投注页面

    self.timmer = itou.outil.timmer;
    self.apis = new apis(self);
    self.currAct = 'avg'; //--当前优化方式
    self.vm = null;
    self.list = []; //--列表信息
    self.info = {
      //--页面信息，投注花费 和 过关
      chang: null,
      guoguan: null,
      money: null
    };
    self.canHot = true; //--是否可以博冷博热
    self.optimize = new optimize(self); //--奖金优化对象
    self.jianpan = new jianpan(self);
    self.showHelp = false;
    self.showList = false;
    self.listMsg = {};
    self.is_allow = false;
    self.hemai_allow = false;
    self.station_id = itou.localJson.getJson('__entry_info').station_id;
  };
  model.prototype.doShowList = function (key) {
    //--显示优化明细
    var self = this;
    if (self.currAct == key) {
      self.showList = true;
    }
  };
  model.prototype.doCloseList = function () {
    //--关闭优化明细
    var self = this,
      optimize = self.optimize;
    self.showList = false;
    if (self.currAct == 'avg') {
      optimize.apis.m_ext.prize_optimize_manner = 'avg';
      optimize.doAvg();
    } else if (self.currAct == 'hot') {
      optimize.apis.m_ext.prize_optimize_manner = 'hot';
      optimize.doAvg();
      optimize.doHot('hot');
    } else if (self.currAct == 'cold') {
      optimize.apis.m_ext.prize_optimize_manner = 'cold';
      optimize.doAvg();
      optimize.doHot('cold');
    }
  };
  model.prototype.getAllowUser = function () {
    var self = this;
    return itou.get({
      url: 'sharebuy/allowusesharebuy',
      data: {
        station_id: self.station_id
      }
    });
  };
  model.prototype.getHemaiStatus = function () {
    var self = this;
    return itou.get({
      url: 'sharebuy/issupport',
      data: {
        station_id: self.station_id
      }
    });
  };
  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      data: new model(),
      mounted: function mounted() {
        var self = this,
          $data = self.$data;
        $data.showBody = true;
      },
      created: function created() {
        var self = this,
          $data = self.$data,
          optimize = $data.optimize;
        optimize.doAvg(); //--执行平均优化
        $data.vm = self;
        if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
          $data.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
        }
        if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
          $data.getHemaiStatus().then(function (result) {
            self.hemai_allow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_id).status;
        }
      },
      computed: {
        listInfo: function listInfo() {
          //--列表描述信息，投注花费 和 中奖最大值、最小值
          var self = this,
            $data = self.$data,
            currAct = $data.currAct,
            optimize = $data.optimize,
            moneys = optimize.moneys,
            zhushu = optimize.zhushu,
            min = Math.min.apply(null, moneys),
            max = Math.max.apply(null, moneys),
            money = zhushu.reduce(function (x, y) {
              return x + y;
            }, 0) * 2;
          optimize.listInfo.min = min;
          optimize.listInfo.max = max;
          optimize.listInfo.money = money;
          if (!$data.listMsg[currAct]) {
            Vue.set($data.listMsg, currAct, {});
            Vue.set($data.listMsg[currAct], 'min', min);
            Vue.set($data.listMsg[currAct], 'max', max);
            Vue.set($data.listMsg[currAct], 'money', money);
          } else {
            $data.listMsg[currAct].min = min;
            $data.listMsg[currAct].max = max;
            $data.listMsg[currAct].money = money;
          }
          console.log($data.listMsg);
          if (optimize.canHot) {
            $data.canHot = min >= money;
          }
          return {
            min: min,
            max: max,
            money: money
          };
        },
        listTitle: function listTitle() {
          var self = this,
            $data = self.$data,
            currAct = $data.currAct,
            r;
          switch (currAct) {
            case 'avg':
              r = '平均优化明细';
              break;
            case 'hot':
              r = '博热优化明细';
              break;
            case 'cold':
              r = '博冷优化明细';
              break;
            default:
              r = '平均优化明细';
              break;
          }
          return r;
        }
      },
      methods: {
        // back: function(){
        // 	var self = this,
        // 		$data = self.$data;
        // 	if($data.optimize.data.lottery == "basketball"){
        // 		Gray.$page.loadPage("/jingcailanqiu/");
        // 	}else{
        // 		Gray.$page.loadPage("/jingcai/");
        // 	}
        // },
        doHot: function doHot(key) {
          //--博冷博热
          var self = this,
            $data = self.$data,
            optimize = $data.optimize;
          if (!$data.canHot) {
            return;
          }
          $data.currAct = key;
          optimize.apis.m_ext.prize_optimize_manner = key;
          optimize.doAvg();
          optimize.doHot(key);
        },
        doAvg: function doAvg() {
          //--平均优化
          var self = this,
            $data = self.$data,
            optimize = $data.optimize;
          $data.currAct = 'avg';
          optimize.apis.m_ext.prize_optimize_manner = 'avg';
          optimize.doAvg();
        },
        doFangan: function doFangan() {
          //--做单
          var self = this,
            $data = self.$data,
            optimize = $data.optimize;
          optimize.doFangan();
        },
        doShowHelp: function doShowHelp() {
          var self = this,
            $data = self.$data;
          $data.showHelp = !$data.showHelp;
        },
        doCloseList: function doCloseList() {
          var self = this,
            $data = self.$data;
          $data.doCloseList();
        },
        doShowList: function doShowList(key) {
          var self = this,
            $data = self.$data;
          $data.doShowList(key);
        },
        doSave: function doSave() {
          var self = this;
          self.optimize.doSave();
        },
        doSubmit: function doSubmit() {
          var self = this;
          self.optimize.doSubmit();
        },
        doHemai: function doHemai() {
          var self = this;
          self.optimize.doHemai();
        },
        checkSubmit: function checkSubmit() {
          //--检查数据并弹出提交按钮
          var self = this;
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
        }
      }
    });
  };
});

/***/ })

/******/ });