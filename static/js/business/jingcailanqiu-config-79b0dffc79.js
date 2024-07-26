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
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
/******/ })
/************************************************************************/
/******/ ({

/***/ 223:
/***/ (function(module, exports) {

/**
 * 微信C端     竞彩篮球设置js
 * Created by zhaoyf on 2016-12-16 09:55:58.
 */
(function () {
  var config = {
    SportteryWL: {
      //--竞彩篮球胜负
      single: {
        '客胜': '0',
        '主胜': '3'
      },
      mixed: {
        '客胜': '20',
        '主胜': '23'
      }
    },
    SportteryHWL: {
      //--竞彩篮球让分胜负
      single: {
        '客胜': '0',
        '主胜': '3'
      },
      mixed: {
        '客胜': '30',
        '主胜': '33'
      }
    },
    SportteryBS: {
      //--竞彩篮球大小分
      single: {
        '大分': '3',
        '小分': '0'
      },
      mixed: {
        '大分': '43',
        '小分': '40'
      }
    },
    SportteryWS: {
      //--竞彩篮球胜分差,*h代表主胜，*g代表客胜
      single: {
        '1-5*h': '01',
        '6-10*h': '02',
        '11-15*h': '03',
        '16-20*h': '04',
        '21-25*h': '05',
        '26+*h': '06',
        '1-5*g': '11',
        '6-10*g': '12',
        '11-15*g': '13',
        '16-20*g': '14',
        '21-25*g': '15',
        '26+*g': '16'
      },
      mixed: {
        '1-5*h': '01',
        '6-10*h': '02',
        '11-15*h': '03',
        '16-20*h': '04',
        '21-25*h': '05',
        '26+*h': '06',
        '1-5*g': '11',
        '6-10*g': '12',
        '11-15*g': '13',
        '16-20*g': '14',
        '21-25*g': '15',
        '26+*g': '16'
      }
    }
  };
  itou.setting.setData('jingcailq_config_opts', config);
  if ($.lottery) {
    $.lottery.jingcai.basketball.config(config);
  }
})();

/***/ })

/******/ });