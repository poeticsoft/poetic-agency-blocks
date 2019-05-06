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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/dynamic_edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/dynamic_edit.js":
/*!********************************!*\
  !*** ./src/js/dynamic_edit.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_dynamic_edit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/dynamic_edit.scss */ "./src/scss/dynamic_edit.scss");
/* harmony import */ var _scss_dynamic_edit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_dynamic_edit_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/dynamic_block.scss */ "./src/scss/dynamic_block.scss");
/* harmony import */ var _scss_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1__);
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks/
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-data/
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;


registerBlockType('poeticagency/dynamic', {
  title: __('POETIC AGENCY DYNAMIC'),
  icon: 'id-alt',
  category: 'poeticagency',
  edit: withSelect(function (select) {
    return {
      posts: select('core').getEntityRecords('postType', 'post')
    };
  })(function (props) {
    if (!props.posts) {
      return 'Loading...';
    }

    if (props.posts.length === 0) {
      return 'No posts';
    }

    var className = props.className;
    var post = props.posts[0];
    return wp.element.createElement("a", {
      className: className,
      href: post.link
    }, post.title.rendered);
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return null;
  }
});

/***/ }),

/***/ "./src/scss/dynamic_block.scss":
/*!*************************************!*\
  !*** ./src/scss/dynamic_block.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/dynamic_edit.scss":
/*!************************************!*\
  !*** ./src/scss/dynamic_edit.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2R5bmFtaWNfZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9keW5hbWljX2Jsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZHluYW1pY19lZGl0LnNjc3MiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIndpdGhTZWxlY3QiLCJkYXRhIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJlZGl0Iiwic2VsZWN0IiwicG9zdHMiLCJnZXRFbnRpdHlSZWNvcmRzIiwicHJvcHMiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJwb3N0IiwibGluayIsInJlbmRlcmVkIiwic2F2ZSIsImF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7SUFFUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxpQjtJQUNBRSxVLEdBQWVKLEVBQUUsQ0FBQ0ssSSxDQUFsQkQsVTtBQUVSO0FBQ0E7QUFFQUYsaUJBQWlCLENBQ2Ysc0JBRGUsRUFFZjtBQUNFSSxPQUFLLEVBQUVQLEVBQUUsQ0FBQyx1QkFBRCxDQURYO0FBRUVRLE1BQUksRUFBRSxRQUZSO0FBR0VDLFVBQVEsRUFBRSxjQUhaO0FBSUVDLE1BQUksRUFBRUwsVUFBVSxDQUFDLFVBQVNNLE1BQVQsRUFBaUI7QUFDaEMsV0FBTztBQUNIQyxXQUFLLEVBQUVELE1BQU0sQ0FBQyxNQUFELENBQU4sQ0FBZUUsZ0JBQWYsQ0FBZ0MsVUFBaEMsRUFBNEMsTUFBNUM7QUFESixLQUFQO0FBR0QsR0FKZSxDQUFWLENBSUgsVUFBU0MsS0FBVCxFQUFnQjtBQUVqQixRQUFJLENBQUVBLEtBQUssQ0FBQ0YsS0FBWixFQUFtQjtBQUNmLGFBQU8sWUFBUDtBQUNIOztBQUVELFFBQUlFLEtBQUssQ0FBQ0YsS0FBTixDQUFZRyxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGFBQU8sVUFBUDtBQUNIOztBQUVELFFBQUlDLFNBQVMsR0FBR0YsS0FBSyxDQUFDRSxTQUF0QjtBQUNBLFFBQUlDLElBQUksR0FBR0gsS0FBSyxDQUFDRixLQUFOLENBQWEsQ0FBYixDQUFYO0FBRUEsV0FBTztBQUFHLGVBQVMsRUFBR0ksU0FBZjtBQUNHLFVBQUksRUFBR0MsSUFBSSxDQUFDQztBQURmLE9BRUhELElBQUksQ0FBQ1YsS0FBTCxDQUFXWSxRQUZSLENBQVA7QUFJRCxHQXJCSyxDQUpSO0FBMEJFQyxNQTFCRixzQkEwQnVCO0FBQUEsUUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBRW5CLFdBQVEsSUFBUjtBQUNEO0FBN0JILENBRmUsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNWQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJkeW5hbWljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvZHluYW1pY19lZGl0LmpzXCIpO1xuIiwiLy8gaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9kZXNpZ25lcnMtZGV2ZWxvcGVycy9kZXZlbG9wZXJzL3R1dG9yaWFscy9ibG9jay10dXRvcmlhbC9jcmVhdGluZy1keW5hbWljLWJsb2Nrcy9cclxuLy8gaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9kZXNpZ25lcnMtZGV2ZWxvcGVycy9kZXZlbG9wZXJzL3BhY2thZ2VzL3BhY2thZ2VzLWRhdGEvXHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbmltcG9ydCAnLi4vc2Nzcy9keW5hbWljX2VkaXQuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc2Nzcy9keW5hbWljX2Jsb2NrLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUgKFxyXG4gICdwb2V0aWNhZ2VuY3kvZHluYW1pYycsIFxyXG4gIHtcclxuICAgIHRpdGxlOiBfXygnUE9FVElDIEFHRU5DWSBEWU5BTUlDJyksXHJcbiAgICBpY29uOiAnaWQtYWx0JyxcclxuICAgIGNhdGVnb3J5OiAncG9ldGljYWdlbmN5JywgICAgXHJcbiAgICBlZGl0OiB3aXRoU2VsZWN0KGZ1bmN0aW9uKHNlbGVjdCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcG9zdHM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnKVxyXG4gICAgICB9O1xyXG4gICAgfSkoZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcbiAgICAgIGlmICghIHByb3BzLnBvc3RzKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvcHMucG9zdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ05vIHBvc3RzJztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcclxuICAgICAgdmFyIHBvc3QgPSBwcm9wcy5wb3N0c1sgMCBdO1xyXG5cclxuICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXsgcG9zdC5saW5rIH0+XHJcbiAgICAgICAgeyBwb3N0LnRpdGxlLnJlbmRlcmVkIH1cclxuICAgICAgPC9hPlxyXG4gICAgfSksXHJcbiAgICBzYXZlKHsgYXR0cmlidXRlcyB9KSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9