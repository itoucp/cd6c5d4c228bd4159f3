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
/******/ 	return __webpack_require__(__webpack_require__.s = 171);
/******/ })
/************************************************************************/
/******/ ({

/***/ 171:
/***/ (function(module, exports) {

/**
 * 微信C端     北京单场设置js
 * Created by 赵宇飞 on 2016/9/26.
 */
$(function () {
  var opts = {
    //--北京单场配置信息
    WDL: {
      //--胜平负
      single: {
        '胜': '3',
        '平': '1',
        '负': '0'
      } //--单一投注对应编码
    },

    WL: {
      //--胜平负
      single: {
        '胜': '3',
        '负': '0'
      } //--单一投注对应编码
    },

    Score: {
      //--比分玩法对应编码
      single: {
        //--单一投注对应编码
        '1:0': '10',
        '2:0': '20',
        '2:1': '21',
        '3:0': '30',
        '3:1': '31',
        '3:2': '32',
        '4:0': '40',
        '4:1': '41',
        '4:2': '42',
        '胜其他': '43',
        '0:0': '00',
        '1:1': '11',
        '2:2': '22',
        '3:3': '33',
        '平其他': '44',
        '0:1': '01',
        '0:2': '02',
        '1:2': '12',
        '0:3': '03',
        '1:3': '13',
        '2:3': '23',
        '0:4': '04',
        '1:4': '14',
        '2:4': '24',
        '负其他': '34'
      }
    },
    TotalGoals: {
      //--总进球玩法对应编码
      single: {
        //--单一投注对应编码
        '0球': '0',
        '1球': '1',
        '2球': '2',
        '3球': '3',
        '4球': '4',
        '5球': '5',
        '6球': '6',
        '7+': '7'
      }
    },
    OverUnder: {
      single: {
        //--北京单场上下盘单双
        '上单': '3',
        '上双': '2',
        '下单': '1',
        '下双': '0'
      }
    },
    HalfFull: {
      //--半全场玩法对应编码
      single: {
        //--单一投注对应编码
        '胜/胜': '33',
        '胜/平': '31',
        '胜/负': '30',
        '平/胜': '13',
        '平/平': '11',
        '平/负': '10',
        '负/胜': '03',
        '负/平': '01',
        '负/负': '00'
      }
    }
  };
  opts.WDL.mixed = opts.WDL.single;
  opts.WL.mixed = opts.WL.single;
  opts.Score.mixed = opts.Score.single;
  opts.TotalGoals.mixed = opts.TotalGoals.single;
  opts.OverUnder.mixed = opts.OverUnder.single;
  opts.HalfFull.mixed = opts.HalfFull.single;
  itou.setting.setData('danchang_config_opts', opts);
  if ($.lottery) {
    $.lottery.danchangConfig = function () {
      $.lottery.jingcai.football.config(opts);
    };
  }
});

/***/ })

/******/ });