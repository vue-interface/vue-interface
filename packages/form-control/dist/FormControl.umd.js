(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormControl"] = factory();
	else
		root["FormControl"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4461":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill
// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript() {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript'); // for chrome

    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript;
    } // for other browsers with native support for currentScript


    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript;
    } // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace


    try {
      throw new Error();
    } catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
          ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
          stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
          scriptLocation = stackDetails && stackDetails[1] || false,
          line = stackDetails && stackDetails[2] || false,
          currentLocation = document.location.href.replace(document.location.hash, ''),
          pageSource,
          inlineScriptSourceRegExp,
          inlineScriptSource,
          scripts = document.getElementsByTagName('script'); // Live NodeList collection

      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }

      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        } // If src matches, return the script tag


        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        } // If inline source matches, return the script tag


        if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
          return scripts[i];
        }
      } // If no match, return null


      return null;
    }
  }

  ;
  return getCurrentScript;
});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/css/FormControl.css
var FormControl = __webpack_require__("4461");

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/camelCase.js
function camelCase(string) {
  if (!string) {
    return string;
  }

  string = string.replace(/(?:(^.)|([-_\s]+.))/g, function (match) {
    return match.charAt(match.length - 1).toUpperCase();
  });
  return string.charAt(0).toLowerCase() + string.substring(1);
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/capitalize.js
function capitalize(string) {
  return string.split(' ').map(function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }).join(' ');
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isObject.js
function isObject(subject) {
  return !!subject && subject.constructor === Object;
}
;
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/now.js
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return Date.now();
};

/* harmony default export */ var src_now = (now);
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isSymbol.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isSymbol(value) {
  return _typeof(value) === 'symbol';
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/toNumber.js


/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/* harmony default export */ var src_toNumber = (toNumber);
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/debounce.js



/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = src_toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(src_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = src_now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(src_now());
  }

  function debounced() {
    var time = src_now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ var src_debounce = (debounce);
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/deepExtend.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import 'core-js/features/object/assign';

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/

function deepExtend(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        deepExtend(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return deepExtend.apply(void 0, [target].concat(sources));
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/first.js
function first(array) {
  return array && array.length ? array[0] : undefined;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isArray.js
// import 'core-js/features/array/is-array';
function isArray(value) {
  return Array.isArray(value);
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/matches.js

function matches(properties) {
  return function (subject) {
    for (var i in properties) {
      if (isObject(properties[i])) {
        return subject[i] ? matches(properties[i])(subject[i]) : false;
      } else if (!subject || subject[i] !== properties[i]) {
        return false;
      }
    }

    return true;
  };
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isNull.js
function isNull(value) {
  return value === null;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isString.js
function isString(value) {
  return typeof value === 'string';
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isUndefined.js
function isUndefined(value) {
  return typeof value === 'undefined';
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/get.js




function get(object, path, defaultValue) {
  var value = (isString(path) ? path.split('.') : !isArray(path) ? [path] : path).reduce(function (a, b) {
    return a[b];
  }, object);
  return !isUndefined(value) && !isNull(value) ? value : !isUndefined(defaultValue) ? defaultValue : value;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/property.js

function property(path) {
  return function (object) {
    return get(object, path);
  };
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isFunction.js
function isFunction(value) {
  return value instanceof Function;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/matchesProperty.js

function matchesProperty(path, value) {
  return function (subject) {
    return get(subject, path) === value;
  };
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/predicate.js






function predicate(value) {
  if (isObject(value)) {
    value = matches(value);
  } else if (isArray(value)) {
    value = matchesProperty(value[0], value[1]);
  } else if (!isFunction(value)) {
    value = property(value);
  }

  return value;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/find.js


function find(subject, value) {
  return first(subject.filter(function (object) {
    return predicate(value)(object);
  }));
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isNumber.js
function isNumber(value) {
  return typeof value === 'number' || (value ? value.toString() === '[object Number]' : false);
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isNumeric.js


function isNumeric(value) {
  return isNumber(value) || !!value && !isArray(value) && !!value.toString().match(/^-?[\d.,]+$/);
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/key.js

function key_key(value) {
  return isNumeric(value) ? parseFloat(value) : value;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/findIndex.js


function findIndex(subject, value) {
  for (var i in subject) {
    if (predicate(value)(subject[i])) {
      return key_key(i);
    }
  }

  return -1;
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isBoolean.js
function isBoolean_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isBoolean_typeof = function _typeof(obj) { return typeof obj; }; } else { isBoolean_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isBoolean_typeof(obj); }

function isBoolean(subject) {
  return typeof subject === 'boolean' || isBoolean_typeof(subject) === 'object' && subject !== null && typeof subject.valueOf() === 'boolean';
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/kebabCase.js
function kebabCase(str) {
  return str && str.replace ? str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace(/_/g, '-').toLowerCase() : null;
}
;
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/prefix.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function prefix_prefix(subject, prefix) {
  var delimeter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  var prefixer = function prefixer(value, key) {
    var string = (key || value).toString().replace(new RegExp("^".concat(prefix).concat(delimeter, "?")), '');
    return [prefix, string].filter(function (value) {
      return !!value;
    }).join(delimeter);
  };

  if (isBoolean(subject)) {
    return subject;
  }

  if (isObject(subject)) {
    return Object.fromEntries(Object.entries(subject).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [prefixer(key), value];
    }));
  }

  return subject && prefixer(subject);
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/readFile.js

function readFile(src, progress) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    if (isFunction(progress)) {
      reader.onprogress = function (e) {
        if (e.lengthComputable) {
          progress(parseInt(e.loaded / e.total * 100, 10));
        }
      };
    }

    reader.onload = resolve;
    reader.onerror = reject;
    reader.onabort = reject;
    reader.readAsDataURL(src);
  });
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/script.js
var LOADED_SCRIPTS = {};

function script_element(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('charset', 'utf-8');
  return script;
}

function append(script) {
  if (document.querySelector('head')) {
    document.querySelector('head').appendChild(script);
  } else {
    document.querySelector('body').appendChild(script);
  }

  return script;
}

function script(url) {
  if (LOADED_SCRIPTS[url] instanceof Promise) {
    return LOADED_SCRIPTS[url];
  } else if (LOADED_SCRIPTS[url] || document.querySelector("script[src=\"".concat(url, "\"]"))) {
    return new Promise(function (resolve, reject) {
      resolve(LOADED_SCRIPTS[url]);
    });
  }

  LOADED_SCRIPTS[url] = new Promise(function (resolve, reject) {
    try {
      append(script_element(url)).addEventListener('load', function (event) {
        resolve(LOADED_SCRIPTS[url] = event);
      });
    } catch (e) {
      reject(e);
    }
  });
  return LOADED_SCRIPTS[url];
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/sequence.js
function sequence(fns) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var results = [];
  var promise = fns.reduce(function (p, fn) {
    return p.then(function () {
      return Promise.resolve(fn.apply(void 0, args)).then(function (response) {
        results.push(response);
        return response;
      });
    });
  }, Promise.resolve());
  return promise.then(function () {
    return results;
  });
}
;
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/transitionDuration.js
function transitionDuration(el) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0s';
  var duration = getComputedStyle(el).transitionDuration || getComputedStyle(el).animationDuration;
  var numeric = parseFloat(duration, 10) || 0;
  var unit = duration.match(/m?s/);

  switch (unit && unit[0]) {
    case 's':
      return numeric * 1000;

    default:
      return numeric;
  }
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/transition.js

function transition(el, defaultValue) {
  if (!el) {
    return Promise.resolve(null);
  }

  return new Promise(function (resolve) {
    var delay = transitionDuration(el, defaultValue);
    setTimeout(function () {
      return resolve(delay);
    }, delay);
  });
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/unit.js
/* harmony default export */ var unit = (function (value) {
  var uom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  return value !== null && value !== undefined && value !== false && isFinite(value) ? "".concat(value).concat(uom) : value;
});
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/index.js


































// CONCATENATED MODULE: ./node_modules/@vue-interface/shadowable/index.js

/* harmony default export */ var shadowable = ({
  props: {
    /**
     * The shadow size.
     *
     * @property {Boolean|String}
     */
    shadow: {
      type: [Boolean, String],
      validate: function validate(value) {
        return value === true || ['shadow-sm', 'shadow-lg'].indexOf(prefix_prefix(value, this.shadowableClassPrefix)) !== -1;
      }
    },

    /**
     * The shadow class prefix.
     *
     * @property {String}
     */
    shadowableClassPrefix: {
      type: String,
      default: 'shadow'
    }
  },
  computed: {
    shadowableClass: function shadowableClass() {
      return this.shadow === true ? this.shadowableClassPrefix : prefix_prefix(this.shadow, this.shadowableClassPrefix);
    }
  }
});
// CONCATENATED MODULE: ./src/FormControl.js
function FormControl_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var src_FormControl = ({
  inheritAttrs: false,
  mixins: [shadowable],
  props: {
    /**
     * Show type activity indicator.
     *
     * @param {Boolean}
     */
    activity: {
      type: Boolean,
      default: false
    },

    /**
     * An array of event names that correlate with callback functions
     *
     * @param {Array}
     * @default ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste']
     */
    bindEvents: {
      type: Array,
      default: function _default() {
        return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
      }
    },

    /**
     * Is the form control a custom styled component.
     *
     * @param {Boolean}
     * @default false
     */
    custom: {
      type: Boolean,
      default: false
    },

    /**
     * The default class name assigned to the control element
     *
     * @param {String}
     * @default 'form-control'
     */
    defaultControlClass: {
      type: String,
      default: 'form-control'
    },

    /**
     * The field's default value.
     *
     * @param
     * @default null
     */
    defaultValue: {
      default: null
    },

    /**
     * An inline field validation error.
     *
     * @param {Boolean|String}
     */
    error: [Boolean, String],

    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     *
     * @param {Object|Boolean}
     * @default {}
     */
    errors: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     *
     * @param {String|Array}
     */
    feedback: [String, Array],

    /**
     * Add form-group wrapper to input
     *
     * @param {Boolean}
     * @default true
     */
    group: {
      type: Boolean,
      default: true
    },

    /**
     * Some instructions to appear under the field label
     *
     * @param {Number|String}
     */
    helpText: [Number, String],

    /**
     * Hide the label for browsers, but leave it for screen readers.
     *
     * @param {Boolean}
     */
    hideLabel: Boolean,

    /**
     * The activity indicator type.
     *
     * @param {String}
     */
    indicator: {
      type: String,
      default: 'spinner'
    },

    /**
     * The activity indicator size.
     *
     * @param {String}
     */
    indicatorSize: String,

    /**
     * Display the form field inline
     *
     * @param {Boolean}
     */
    inline: Boolean,

    /**
     * The invalid property
     *
     * @param {Boolean}
     */
    invalid: Boolean,

    /**
     * Use the legacy (Bootstrap 4) classes (if applicable).
     *
     * @param Boolean
     */
    legacy: Boolean,

    /**
     * The value of label element. If no value, no label will appear.
     *
     * @param {Number|String}
     */
    label: [Number, String],

    /**
     * The default label class assigned to the label element
     *
     * @param {String|Object}
     */
    labelClass: [Object, String],

    /**
     * Should the control look like a pill.
     *
     * @param {Boolean}
     */
    pill: Boolean,

    /**
     * Should the control look like plaintext.
     *
     * @param {Boolean}
     */
    plaintext: Boolean,

    /**
     * The size of the form control
     *
     * @param {String}
     */
    size: {
      type: String,
      default: 'md',
      validate: function validate(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    },

    /**
     * Additional margin/padding classes for fine control of spacing
     *
     * @param {String}
     */
    spacing: String,

    /**
     * The valid property
     *
     * @param {String}
     */
    valid: Boolean,

    /**
     * The field value.
     *
     * @property Mixed
     */
    value: {
      default: null
    }
  },
  directives: {
    bindEvents: {
      bind: function bind(el, binding, vnode) {
        function onInput() {
          vnode.context.isEmpty = !el.value;

          if (el.value) {
            vnode.context.currentValue = el.value;
          }

          setSelectedIndex();
          return onInput;
        }

        function setSelectedIndex() {
          // Set the data-selected-index attribute if necessary.
          if (el.selectedIndex >= -1) {
            el.setAttribute('data-selected-index', el.selectedIndex);
          } else {
            el.removeAttribute('data-selected-index');
          }
        } // Add the has-focus class from the form control


        el.addEventListener('focus', function () {
          vnode.context.hasFocus = true;
        }); // Remove the has-focus class from the form control

        el.addEventListener('blur', function () {
          vnode.context.hasFocus = false;
        }); // Remove the has-focus class from the form control

        el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', onInput());
        vnode.context.hasChanged = !!el.value; // Bubble the native events up to the vue component.

        vnode.context.bindEvents.forEach(function (name) {
          el.addEventListener(name, function (event) {
            vnode.context.$emit(name, event);
          });
        });

        if (el.tagName === 'SELECT') {
          var opt = el.querySelector('[value=""]');

          if (opt && opt.value === el.value) {
            vnode.context.defaultEmpty = true;
          }
        }
      }
    }
  },
  methods: {
    blur: function blur() {
      if (this.getInputField()) {
        this.getInputField().blur();
      }
    },
    focus: function focus() {
      if (this.getInputField()) {
        this.getInputField().focus();
      }
    },
    getInputField: function getInputField() {
      return this.$el.querySelector('.form-control, input, select, textarea');
    },
    getFieldErrors: function getFieldErrors() {
      var errors = this.error || this.errors;

      if (isObject(this.errors)) {
        errors = this.errors[this.$attrs.name || this.$attrs.id];
      }

      return !errors || Array.isArray(errors) || isObject(errors) ? errors : [errors];
    },
    onInput: function onInput(e) {
      this.$emit('input', e.target.value);
      this.$emit('update:value', e.target.value);
    }
  },
  computed: {
    id: function id() {
      return this.$attrs.id || Math.random().toString(36).substring(2, 15);
    },
    componentName: function componentName() {
      return this.$options.name;
    },
    controlAttributes: function controlAttributes() {
      var _this = this;

      return Object.keys(this.$attrs).concat([['id', this.id], ['class', this.controlClasses]]).reduce(function (carry, key) {
        if (Array.isArray(key)) {
          carry[key[0]] = key[1];
        } else {
          carry[key] = _this[key] || _this.$attrs[key];
        }

        return carry;
      }, {});
    },
    controlClass: function controlClass() {
      return this.custom ? this.customControlClass : this.defaultControlClass;
    },
    controlSizeClass: function controlSizeClass() {
      return prefix_prefix(this.size, this.controlClass);
    },
    customControlClass: function customControlClass() {
      return 'custom-control';
    },
    formGroupClasses: function formGroupClasses() {
      var _ref;

      var name = kebabCase(this.componentName);
      return _ref = {}, FormControl_defineProperty(_ref, name, !!name), FormControl_defineProperty(_ref, prefix_prefix(this.size, name), !!this.size), FormControl_defineProperty(_ref, prefix_prefix(name, 'custom'), this.custom), FormControl_defineProperty(_ref, prefix_prefix(this.size, prefix_prefix(name, 'custom')), this.custom && this.size), FormControl_defineProperty(_ref, 'default-empty', this.defaultEmpty), FormControl_defineProperty(_ref, 'form-group', this.group), FormControl_defineProperty(_ref, 'has-activity', this.activity), FormControl_defineProperty(_ref, 'has-changed', this.hasChanged), FormControl_defineProperty(_ref, 'has-focus', this.hasFocus), FormControl_defineProperty(_ref, 'is-empty', this.isEmpty), FormControl_defineProperty(_ref, 'is-invalid', !!(this.invalid || this.invalidFeedback)), FormControl_defineProperty(_ref, 'is-valid', !!(this.valid || this.validFeedback)), _ref;
    },
    controlClasses: function controlClasses() {
      var _ref2;

      return _ref2 = {}, FormControl_defineProperty(_ref2, this.controlClass, !!this.controlClass), FormControl_defineProperty(_ref2, this.controlSizeClass, !!this.controlSizeClass), FormControl_defineProperty(_ref2, 'form-control-icon', !!this.$slots.icon), FormControl_defineProperty(_ref2, 'is-valid', !!(this.valid || this.validFeedback)), FormControl_defineProperty(_ref2, 'is-invalid', !!(this.invalid || this.invalidFeedback)), FormControl_defineProperty(_ref2, this.pillClasses, this.pill), FormControl_defineProperty(_ref2, this.plaintextClass, this.plaintext), FormControl_defineProperty(_ref2, this.spacing, !!this.spacing), FormControl_defineProperty(_ref2, this.shadowableClassName, !!this.shadow), _ref2;
    },
    hasDefaultSlot: function hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback: function invalidFeedback() {
      if (this.error) {
        return this.error;
      }

      var errors = this.getFieldErrors();
      return Array.isArray(errors) ? errors.filter(function (error) {
        return error && typeof error === 'string';
      }).join('<br>') : errors;
    },
    pillClasses: function pillClasses() {
      return 'rounded rounded-pill';
    },
    plaintextClass: function plaintextClass() {
      return 'form-control-plaintext';
    },
    validFeedback: function validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
    }
  },
  watch: {
    value: function value(_value) {
      this.currentValue = _value;
    },
    currentValue: function currentValue() {
      this.hasChanged = true;
    }
  },
  mounted: function mounted() {
    if (this.value === null && this.defaultValue !== null) {
      this.$emit('input', this.defaultValue);
    }
  },
  data: function data() {
    return {
      currentValue: this.value || this.defaultValue,
      defaultEmpty: false,
      hasChanged: false,
      hasFocus: false,
      isEmpty: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_mainvue_type_script_lang_js_ = (src_FormControl);
// CONCATENATED MODULE: ./main.vue?vue&type=script&lang=js&
 /* harmony default export */ var mainvue_type_script_lang_js_ = (lib_vue_loader_options_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./main.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=FormControl.umd.js.map