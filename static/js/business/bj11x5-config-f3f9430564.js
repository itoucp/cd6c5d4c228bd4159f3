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
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ({

/***/ 156:
/***/ (function(module, exports) {

/**
 * 微信C端 北京11选5设置
 * by zhaoyf    2016-08-18
 */
(function () {
  var config = {
    r1: {
      //--任1
      name: '前一',
      intro: '选号与第一位开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 13,
      //--单注奖金
      lotNum: 1,
      //--开奖号码数
      selNum: 1 //--单注号码数
    },

    r2: {
      //--任2
      name: '任选二',
      intro: '选号与任意两个开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 6,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 2 //--单注号码数
    },

    r3: {
      //--任3
      name: '任选三',
      intro: '选号与任意三个开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 19,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 3 //--单注号码数
    },

    r4: {
      //--任4
      name: '任选四',
      intro: '选号与任意四个开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 78,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 4 //--单注号码数
    },

    r5: {
      //--任5
      name: '任选五',
      intro: '选号与五个开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 540,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 5 //--单注号码数
    },

    r6: {
      //--任6
      name: '任选六',
      intro: '选号包含五个开奖号码',
      money: 2,
      //--单注金额
      bonus: 90,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 6 //--单注号码数
    },

    r7: {
      //--任7
      name: '任选七',
      intro: '选号包含五个开奖号码',
      money: 2,
      //--单注金额
      bonus: 26,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 7 //--单注号码数
    },

    r8: {
      //--任8
      name: '任选八',
      intro: '选号包含五个开奖号码',
      money: 2,
      //--单注金额
      bonus: 9,
      //单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 8 //--单注号码数
    },

    q2: {
      //--前2
      name: '前二组选',
      intro: '选号与前两位开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 65,
      //--单注奖金
      lotNum: 2,
      //--开奖号码数
      selNum: 2 //--单注号码数
    },

    qz2: {
      //--前2
      name: '前二直选',
      intro: '选号与前两位开奖号码相同，且顺序一致',
      money: 2,
      //--单注金额
      bonus: 130,
      //--单注奖金
      lotNum: 2,
      //--开奖号码数
      selNum: 2 //--单注号码数
    },

    q3: {
      //--前3
      name: '前三组选',
      intro: '选号与前三位开奖号码相同',
      money: 2,
      //--单注金额
      bonus: 195,
      //--单注奖金
      lotNum: 3,
      //--开奖号码数
      selNum: 3 //--单注号码数
    },

    qz3: {
      //--前3
      name: '前三直选',
      intro: '选号与前三位开奖号码相同，且顺序一致',
      money: 2,
      //--单注金额
      bonus: 1170,
      //--单注奖金
      lotNum: 3,
      //--开奖号码数
      selNum: 3 //--单注号码数
    },

    lx2: {
      //--乐选2
      name: '乐选二',
      intro: '',
      money: 6,
      //--单注金额
      bonus: 201,
      //--单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 2 //--单注号码数
    },

    lx3: {
      //--乐选3
      name: '乐选三',
      intro: '',
      money: 6,
      //--单注金额
      bonus: 1384,
      //--单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 3 //--单注号码数
    },

    lx4: {
      //--乐选4
      name: '乐选四',
      intro: '',
      money: 10,
      //--单注金额
      bonus: 154,
      //--单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 4 //--单注号码数
    },

    lx5: {
      //--乐选5
      name: '乐选五',
      intro: '',
      money: 14,
      //--单注金额
      bonus: 1080,
      //--单注奖金
      lotNum: 5,
      //--开奖号码数
      selNum: 5 //--单注号码数
    }
  };

  $.lottery.select11_5.config({
    lottery_type: {
      t: '北京11选5',
      //--彩种名称
      v: 'BJSYY',
      //--彩种键值
      service: '9:00-23:00',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'bj11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 42 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '浙江11选5',
      //--彩种名称
      v: 'ZJSYY',
      //--彩种键值
      service: '8:30-22:30',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'zj11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 42 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '广东11选5',
      //--彩种名称
      v: 'GDSYY',
      //--彩种键值
      service: '9:10-23:10',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'gd11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 42 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '河北11选5',
      //--彩种名称
      v: 'HBSYY',
      //--彩种键值
      service: '8:30-22:30',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'hb11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 30 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '山东11选5',
      //--彩种名称
      v: 'SYY',
      //--彩种键值
      service: '8:40-23:00',
      //--营业时间
      num: 43,
      //--彩期数量
      map: 'sd11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 43 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '福建11选5',
      //--彩种名称
      v: 'FJSYY',
      //--彩种键值
      service: '8:09-23:09',
      //--营业时间
      num: 45,
      //--彩期数量
      map: 'fj11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 45 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '内蒙古11选5',
      //--彩种名称
      v: 'NMGSYY',
      //--彩种键值
      service: '9:05-23:05',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'nmg11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 42 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '上海11选5',
      //--彩种名称
      v: 'SHSYY',
      //--彩种键值
      service: '9:00-23:59',
      //--营业时间
      num: 45,
      //--彩期数量
      map: 'sh11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 15 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '安徽11选5',
      //--彩种名称
      v: 'AHSYY',
      //--彩种键值
      service: '8:40-22:00',
      //--营业时间
      num: 40,
      //--彩期数量
      map: 'ah11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 40 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '湖北11选5',
      //--彩种名称
      v: 'HUBSYY',
      //--彩种键值
      service: '8:35-21:35',
      //--营业时间
      num: 40,
      //--彩期数量
      map: 'hub11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 40 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '广西11选5',
      //--彩种名称
      v: 'GXSYY',
      //--彩种键值
      service: '9:00-24:00',
      //--营业时间
      num: 45,
      //--彩期数量
      map: 'gx11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 45 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '辽宁11选5',
      //--彩种名称
      v: 'LNSYY',
      //--彩种键值
      service: '8:38-22:28',
      //--营业时间
      num: 41,
      //--彩期数量
      map: 'ln11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 15 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '山西11选5',
      //--彩种名称
      v: 'SXSYY',
      //--彩种键值
      service: '8:25-00:05',
      //--营业时间
      num: 47,
      //--彩期数量
      map: 'sx11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 47 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '江苏11选5',
      //--彩种名称
      v: 'JSSYY',
      //--彩种键值
      service: '8:25-22:05',
      //--营业时间
      num: 41,
      //--彩期数量
      map: 'js11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 41 //--多期购买最大期数'
      },

      lexuan: ['lx2', 'lx3', 'lx4', 'lx5'] //--包含的乐选玩法
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '江西11选5',
      //--彩种名称
      v: 'JXSYY',
      //--彩种键值
      service: '09:10-23:10',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'jx11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 20 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '吉林11选5',
      //--彩种名称
      v: 'JLSYY',
      //--彩种键值
      service: '08:30-21:30',
      //--营业时间
      num: 39,
      //--彩期数量
      map: 'jl11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 39 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '台湾11选5',
      //--彩种名称
      v: 'TWSYY',
      //--彩种键值
      service: '9:00-23:00',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'tw11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 42 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '天津11选5',
      //--彩种名称
      v: 'TJSYY',
      //--彩种键值
      service: '9:00-00:00',
      //--营业时间
      num: 45,
      //--彩期数量
      map: 'tj11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 30 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '甘肃11选5',
      //--彩种名称
      v: 'GSSYY',
      //--彩种键值
      service: '10:11-23:11',
      //--营业时间
      num: 39,
      //--彩期数量
      map: 'gs11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 10 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '云南11选5',
      //--彩种名称
      v: 'YNSYY',
      //--彩种键值
      service: '9:00-23:00',
      //--营业时间
      num: 42,
      //--彩期数量
      map: 'yn11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 20 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '贵州11选5',
      //--彩种名称
      v: 'GZSYY',
      //--彩种键值
      service: '9:00-22:20',
      //--营业时间
      num: 40,
      //--彩期数量
      map: 'gz11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 20 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '黑龙江11选5',
      //--彩种名称
      v: 'HLJSYY',
      //--彩种键值
      service: '8:04-22:44',
      //--营业时间
      num: 44,
      //--彩期数量
      map: 'hlj11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 44 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '陕西11选5',
      //--彩种名称
      v: 'SHXSYY',
      //--彩种键值
      service: '8:30-22:50',
      //--营业时间
      num: 44,
      //--彩期数量
      map: 'shx11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 15 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '新疆11选5',
      //--彩种名称
      v: 'XJSYY',
      //--彩种键值
      service: '10:00-02:00',
      //--营业时间
      num: 48,
      //--彩期数量
      map: 'xj11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 48 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });

  $.lottery.select11_5.config({
    lottery_type: {
      t: '宁夏11选5',
      //--彩种名称
      v: 'NXSYY',
      //--彩种键值
      service: '9:05-22:05',
      //--营业时间
      num: 39,
      //--彩期数量
      map: 'nx11x5',
      //--映射关系
      duoqi: {
        //--多期购买设定
        can: true,
        //--是否可以多期购买
        max: 39 //--多期购买最大期数'
      }
    },

    config: config //--玩法配置
  });
})();

/***/ })

/******/ });