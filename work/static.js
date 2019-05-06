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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/static_edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/static_edit.js":
/*!*******************************!*\
  !*** ./src/js/static_edit.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_static_edit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/static_edit.scss */ "./src/scss/static_edit.scss");
/* harmony import */ var _scss_static_edit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_static_edit_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_static_block_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/static_block.scss */ "./src/scss/static_block.scss");
/* harmony import */ var _scss_static_block_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_static_block_scss__WEBPACK_IMPORTED_MODULE_1__);
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText;
var Button = wp.components.Button;


registerBlockType('poeticagency/static', {
  title: __('POETIC AGENCY STATIC'),
  icon: 'id-alt',
  category: 'poeticagency',
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    mediaId: {
      type: 'number'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    }
  },
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var getImageButton = function getImageButton(openEvent) {
      if (attributes.imageUrl) {
        return wp.element.createElement("img", {
          src: attributes.imageUrl,
          onClick: openEvent,
          className: "image"
        });
      } else {
        return wp.element.createElement("div", {
          className: className
        }, wp.element.createElement(Button, {
          onClick: openEvent,
          className: "button button-large"
        }, "Pick an image"));
      }
    };

    return wp.element.createElement("div", {
      className: "container"
    }, wp.element.createElement(MediaUpload, {
      onSelect: function onSelect(media) {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url,
          mediaId: media.id
        });
      },
      type: "image",
      value: attributes.imageID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return getImageButton(open);
      }
    }), wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          title: content
        });
      },
      value: attributes.title,
      placeholder: "Your card title",
      className: "heading"
    }), wp.element.createElement(RichText, {
      onChange: function onChange(content) {
        return setAttributes({
          body: content
        });
      },
      value: attributes.body,
      multiline: "p",
      placeholder: "Your card text"
    }));
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;

    var cardImage = function cardImage(src, alt) {
      if (!src) return null;
      return wp.element.createElement("img", {
        className: "card__image wp-image-".concat(attributes.mediaId),
        src: src,
        alt: alt
      });
    };

    return wp.element.createElement("div", {
      className: "card"
    }, cardImage(attributes.imageUrl, attributes.imageAlt), wp.element.createElement("div", {
      className: "card__content"
    }, wp.element.createElement("h3", {
      className: "card__title"
    }, attributes.title), wp.element.createElement("div", {
      className: "card__body"
    }, attributes.body)));
  }
});

/***/ }),

/***/ "./src/scss/static_block.scss":
/*!************************************!*\
  !*** ./src/scss/static_block.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/static_edit.scss":
/*!***********************************!*\
  !*** ./src/scss/static_edit.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXRpY19lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0YXRpY19ibG9jay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0YXRpY19lZGl0LnNjc3MiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImVkaXRvciIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJCdXR0b24iLCJjb21wb25lbnRzIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwic291cmNlIiwic2VsZWN0b3IiLCJib2R5IiwidHlwZSIsIm1lZGlhSWQiLCJpbWFnZUFsdCIsImF0dHJpYnV0ZSIsImltYWdlVXJsIiwiZWRpdCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZXMiLCJnZXRJbWFnZUJ1dHRvbiIsIm9wZW5FdmVudCIsIm1lZGlhIiwiYWx0IiwidXJsIiwiaWQiLCJpbWFnZUlEIiwib3BlbiIsImNvbnRlbnQiLCJzYXZlIiwiY2FyZEltYWdlIiwic3JjIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFn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RyxrQkFBQXVCLE9BQU87QUFBQSxlQUFJVCxhQUFhLENBQUM7QUFBRVIsY0FBSSxFQUFFaUI7QUFBUixTQUFELENBQWpCO0FBQUEsT0FEcEI7QUFFRSxXQUFLLEVBQUdwQixVQUFVLENBQUNHLElBRnJCO0FBR0UsZUFBUyxFQUFDLEdBSFo7QUFJRSxpQkFBVyxFQUFDO0FBSmQsTUFuQkYsQ0FERjtBQTRCRCxHQXZGSDtBQXdGRWtCLE1BeEZGLHVCQXdGdUI7QUFBQSxRQUFkckIsVUFBYyxTQUFkQSxVQUFjOztBQUVuQixRQUFNc0IsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFNUixHQUFOLEVBQWM7QUFFOUIsVUFBRyxDQUFDUSxHQUFKLEVBQVMsT0FBTyxJQUFQO0FBRVQsYUFDRTtBQUNFLGlCQUFTLGlDQUE0QnZCLFVBQVUsQ0FBQ0ssT0FBdkMsQ0FEWDtBQUVFLFdBQUcsRUFBR2tCLEdBRlI7QUFHRSxXQUFHLEVBQUdSO0FBSFIsUUFERjtBQU9ELEtBWEQ7O0FBYUEsV0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0lPLFNBQVMsQ0FBQ3RCLFVBQVUsQ0FBQ1EsUUFBWixFQUFzQlIsVUFBVSxDQUFDTSxRQUFqQyxDQURiLEVBRUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBOEJOLFVBQVUsQ0FBQ0gsS0FBekMsQ0FERixFQUVFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSUcsVUFBVSxDQUFDRyxJQURmLENBRkYsQ0FGRixDQURGO0FBV0Q7QUFsSEgsQ0FGZSxDQUFqQixDOzs7Ozs7Ozs7OztBQ1ZBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InN0YXRpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3N0YXRpY19lZGl0LmpzXCIpO1xuIiwiXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuZWRpdG9yO1xyXG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmltcG9ydCAnLi4vc2Nzcy9zdGF0aWNfZWRpdC5zY3NzJztcclxuaW1wb3J0ICcuLi9zY3NzL3N0YXRpY19ibG9jay5zY3NzJztcclxuXHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSAoXHJcbiAgJ3BvZXRpY2FnZW5jeS9zdGF0aWMnLCBcclxuICB7XHJcbiAgICB0aXRsZTogX18oJ1BPRVRJQyBBR0VOQ1kgU1RBVElDJyksXHJcbiAgICBpY29uOiAnaWQtYWx0JyxcclxuICAgIGNhdGVnb3J5OiAncG9ldGljYWdlbmN5JyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBzb3VyY2U6ICd0ZXh0JyxcclxuICAgICAgICBzZWxlY3RvcjogJy5jYXJkX190aXRsZSdcclxuICAgICAgfSxcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgc291cmNlOiAnY2hpbGRyZW4nLFxyXG4gICAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX2JvZHknXHJcbiAgICAgIH0sXHJcbiAgICAgIG1lZGlhSWQ6IHtcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZUFsdDoge1xyXG4gICAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXHJcbiAgICAgICAgc2VsZWN0b3I6ICcuY2FyZF9faW1hZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlVXJsOiB7XHJcbiAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcclxuICAgICAgICBzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVkaXQoeyBcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBhdHRyaWJ1dGVzLFxyXG4gICAgICBzZXRBdHRyaWJ1dGVzXHJcbiAgICB9KSB7XHJcblxyXG4gICAgICBjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgaWYoYXR0cmlidXRlcy5pbWFnZVVybCkge1xyXG5cclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgIHNyYz17IGF0dHJpYnV0ZXMuaW1hZ2VVcmwgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUGljayBhbiBpbWFnZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE1lZGlhVXBsb2FkXHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXsgbWVkaWEgPT4geyBcclxuICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgXHJcbiAgICAgICAgICAgICAgICBpbWFnZUFsdDogbWVkaWEuYWx0LCBcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBtZWRpYS51cmwgLFxyXG4gICAgICAgICAgICAgICAgbWVkaWFJZDogbWVkaWEuaWRcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmltYWdlSUQgfVxyXG4gICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IGdldEltYWdlQnV0dG9uKG9wZW4pIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGxhaW5UZXh0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IGNvbnRlbnQgfSkgfVxyXG4gICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY2FyZCB0aXRsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSkgfVxyXG4gICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XHJcbiAgICAgICAgICAgIG11bHRpbGluZT1cInBcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY2FyZCB0ZXh0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xyXG5cclxuICAgICAgY29uc3QgY2FyZEltYWdlID0gKHNyYywgYWx0KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKCFzcmMpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYGNhcmRfX2ltYWdlIHdwLWltYWdlLSR7IGF0dHJpYnV0ZXMubWVkaWFJZCB9YCB9XHJcbiAgICAgICAgICAgIHNyYz17IHNyYyB9XHJcbiAgICAgICAgICAgIGFsdD17IGFsdCB9XHJcbiAgICAgICAgICAvPiBcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIHsgY2FyZEltYWdlKGF0dHJpYnV0ZXMuaW1hZ2VVcmwsIGF0dHJpYnV0ZXMuaW1hZ2VBbHQpIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj57IGF0dHJpYnV0ZXMudGl0bGUgfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYm9keVwiPlxyXG4gICAgICAgICAgICAgIHsgYXR0cmlidXRlcy5ib2R5IH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==