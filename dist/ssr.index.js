(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-js-modal"] = factory();
	else
		root["vue-js-modal"] = factory();
})(global, function() {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("27d83796", content, false, context)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e783494", content, false, context)
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("17757f60", content, false, context)
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesServer; });


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Resizer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Resizer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Resizer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Resizer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Resizer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Resizer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.v--modal-block-scroll {\n  overflow: hidden;\n  width: 100vw;\n}\n.v--modal-overlay {\n  position: fixed;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n  width: 100%;\n  height: 100%;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n  margin-bottom: 2px;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active,\n.overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\n.overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\n.nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\n.nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Modal.vue?vue&type=template&id=524d3804&
var Modalvue_type_template_id_524d3804_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: _vm.overlayTransition } }, [
    _vm.visibility.overlay
      ? _c(
          "div",
          {
            ref: "overlay",
            class: _vm.overlayClass,
            attrs: {
              "aria-expanded": _vm.visibility.overlay.toString(),
              "data-modal": _vm.name
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "v--modal-background-click",
                on: {
                  mousedown: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.handleBackgroundClick($event)
                  },
                  touchstart: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.handleBackgroundClick($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "v--modal-top-right" },
                  [_vm._t("top-right")],
                  2
                ),
                _vm._v(" "),
                _c(
                  "transition",
                  {
                    attrs: { name: _vm.transition },
                    on: {
                      "before-enter": _vm.beforeTransitionEnter,
                      "after-enter": _vm.afterTransitionEnter,
                      "after-leave": _vm.afterTransitionLeave
                    }
                  },
                  [
                    _vm.visibility.modal
                      ? _c(
                          "div",
                          {
                            ref: "modal",
                            class: _vm.modalClass,
                            style: _vm.modalStyle
                          },
                          [
                            _vm._t("default"),
                            _vm._v(" "),
                            _vm.resizable && !_vm.isAutoHeight
                              ? _c("resizer", {
                                  attrs: {
                                    "min-width": _vm.minWidth,
                                    "min-height": _vm.minHeight
                                  },
                                  on: { resize: _vm.handleModalResize }
                                })
                              : _vm._e()
                          ],
                          2
                        )
                      : _vm._e()
                  ]
                )
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
Modalvue_type_template_id_524d3804_render._withStripped = true


// CONCATENATED MODULE: ./src/Modal.vue?vue&type=template&id=524d3804&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Resizer.vue?vue&type=template&id=fac49956&
var Resizervue_type_template_id_fac49956_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.className }, [])
}
var Resizervue_type_template_id_fac49956_staticRenderFns = []
Resizervue_type_template_id_fac49956_render._withStripped = true


// CONCATENATED MODULE: ./src/Resizer.vue?vue&type=template&id=fac49956&

// CONCATENATED MODULE: ./src/utils/index.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateId = function () {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function () {
    return (index++).toString();
  };
}();
var inRange = function inRange(from, to, value) {
  if (value < from) {
    return from;
  }

  if (value > to) {
    return to;
  }

  return value;
};
var utils_createModalEvent = function createModalEvent() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    id: generateId(),
    timestamp: Date.now(),
    canceled: false
  }, args);
};
var getMutationObserver = function getMutationObserver() {
  if (typeof window !== 'undefined') {
    var prefixes = ['', 'WebKit', 'Moz', 'O', 'Ms'];

    for (var i = 0; i < prefixes.length; i++) {
      var name = prefixes[i] + 'MutationObserver';

      if (name in window) {
        return window[name];
      }
    }
  }

  return false;
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Resizer.vue?vue&type=script&lang=js&

/* harmony default export */ var Resizervue_type_script_lang_js_ = ({
  name: 'VueJsModalResizer',
  props: {
    minHeight: {
      type: Number,
      default: 0
    },
    minWidth: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      clicked: false,
      size: {}
    };
  },
  mounted: function mounted() {
    this.$el.addEventListener('mousedown', this.start, false);
  },
  computed: {
    className: function className() {
      return {
        'vue-modal-resizer': true,
        clicked: this.clicked
      };
    }
  },
  methods: {
    start: function start(event) {
      this.clicked = true;
      window.addEventListener('mousemove', this.mousemove, false);
      window.addEventListener('mouseup', this.stop, false);
      event.stopPropagation();
      event.preventDefault();
    },
    stop: function stop() {
      this.clicked = false;
      window.removeEventListener('mousemove', this.mousemove, false);
      window.removeEventListener('mouseup', this.stop, false);
      this.$emit('resize-stop', {
        element: this.$el.parentElement,
        size: this.size
      });
    },
    mousemove: function mousemove(event) {
      this.resize(event);
    },
    resize: function resize(event) {
      var el = this.$el.parentElement;

      if (el) {
        var width = event.clientX - el.offsetLeft;
        var height = event.clientY - el.offsetTop;
        width = inRange(this.minWidth, window.innerWidth, width);
        height = inRange(this.minHeight, window.innerHeight, height);
        this.size = {
          width: width,
          height: height
        };
        el.style.width = width + 'px';
        el.style.height = height + 'px';
        this.$emit('resize', {
          element: el,
          size: this.size
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Resizer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Resizervue_type_script_lang_js_ = (Resizervue_type_script_lang_js_); 
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/Resizer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(5)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Resizer_component = normalizeComponent(
  src_Resizervue_type_script_lang_js_,
  Resizervue_type_template_id_fac49956_render,
  Resizervue_type_template_id_fac49956_staticRenderFns,
  false,
  injectStyles,
  null,
  "7989c24c"
  
)

Resizer_component.options.__file = "src/Resizer.vue"
/* harmony default export */ var Resizer = (Resizer_component.exports);
// CONCATENATED MODULE: ./src/parser.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var floatRegexp = '[-+]?[0-9]*.?[0-9]+';
var types = [{
  name: 'px',
  regexp: new RegExp("^".concat(floatRegexp, "px$"))
}, {
  name: '%',
  regexp: new RegExp("^".concat(floatRegexp, "%$"))
}, {
  name: 'px',
  regexp: new RegExp("^".concat(floatRegexp, "$"))
}];

var getType = function getType(value) {
  if (value === 'auto') {
    return {
      type: value,
      value: 0
    };
  }

  for (var i = 0; i < types.length; i++) {
    var type = types[i];

    if (type.regexp.test(value)) {
      return {
        type: type.name,
        value: parseFloat(value)
      };
    }
  }

  return {
    type: '',
    value: value
  };
};

var parseNumber = function parseNumber(value) {
  switch (_typeof(value)) {
    case 'number':
      return {
        type: 'px',
        value: value
      };

    case 'string':
      return getType(value);

    default:
      return {
        type: '',
        value: value
      };
  }
};
var validateNumber = function validateNumber(value) {
  if (typeof value === 'string') {
    var _value = parseNumber(value);

    return (_value.type === '%' || _value.type === 'px') && _value.value > 0;
  }

  return value >= 0;
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Modal.vue?vue&type=script&lang=js&
function Modalvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Modalvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } return target; }

function Modalvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'VueJsModal',
  props: {
    name: {
      required: true,
      type: String
    },
    delay: {
      type: Number,
      default: 0
    },
    resizable: {
      type: Boolean,
      default: false
    },
    adaptive: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: [Boolean, String],
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    reset: {
      type: Boolean,
      default: false
    },
    overlayTransition: {
      type: String,
      default: 'overlay-fade'
    },
    transition: {
      type: String
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    classes: {
      type: [String, Array],
      default: 'v--modal'
    },
    minWidth: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    minHeight: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    maxWidth: {
      type: Number,
      default: Infinity
    },
    maxHeight: {
      type: Number,
      default: Infinity
    },
    width: {
      type: [Number, String],
      default: 600,
      validator: validateNumber
    },
    height: {
      type: [Number, String],
      default: 300,
      validator: function validator(value) {
        return value === 'auto' || validateNumber(value);
      }
    },
    pivotX: {
      type: Number,
      default: 0.5,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    },
    pivotY: {
      type: Number,
      default: 0.5,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    }
  },
  components: {
    Resizer: Resizer
  },
  data: function data() {
    return {
      visible: false,
      visibility: {
        modal: false,
        overlay: false
      },
      shift: {
        left: 0,
        top: 0
      },
      modal: {
        width: 0,
        widthType: 'px',
        height: 0,
        heightType: 'px',
        renderedHeight: 0
      },
      window: {
        width: 0,
        height: 0
      },
      mutationObserver: null
    };
  },
  created: function created() {
    this.setInitialSize();
  },
  beforeMount: function beforeMount() {
    var _this = this;

    src.event.$on('toggle', this.handleToggleEvent);
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();

    if (this.scrollable && !this.isAutoHeight) {
      console.warn("Modal \"".concat(this.name, "\" has scrollable flag set to true ") + "but height is not \"auto\" (".concat(this.height, ")"));
    }

    if (this.isAutoHeight) {
      var MutationObserver = getMutationObserver();

      if (MutationObserver) {
        this.mutationObserver = new MutationObserver(function (mutations) {
          _this.updateRenderedHeight();
        });
      }
    }

    if (this.clickToClose) {
      window.addEventListener('keyup', this.handleEscapeKeyUp);
    }
  },
  beforeDestroy: function beforeDestroy() {
    src.event.$off('toggle', this.handleToggleEvent);
    window.removeEventListener('resize', this.handleWindowResize);

    if (this.clickToClose) {
      window.removeEventListener('keyup', this.handleEscapeKeyUp);
    }

    if (this.scrollable) {
      document.body.classList.remove('v--modal-block-scroll');
    }
  },
  computed: {
    isAutoHeight: function isAutoHeight() {
      return this.modal.heightType === 'auto';
    },
    position: function position() {
      var window = this.window,
          shift = this.shift,
          pivotX = this.pivotX,
          pivotY = this.pivotY,
          trueModalWidth = this.trueModalWidth,
          trueModalHeight = this.trueModalHeight;
      var maxLeft = window.width - trueModalWidth;
      var maxTop = window.height - trueModalHeight;
      var left = shift.left + pivotX * maxLeft;
      var top = shift.top + pivotY * maxTop;
      return {
        left: parseInt(inRange(0, maxLeft, left)),
        top: parseInt(inRange(0, maxTop, top))
      };
    },
    trueModalWidth: function trueModalWidth() {
      var window = this.window,
          modal = this.modal,
          adaptive = this.adaptive,
          minWidth = this.minWidth,
          maxWidth = this.maxWidth;
      var value = modal.widthType === '%' ? window.width / 100 * modal.width : modal.width;
      var max = Math.min(window.width, maxWidth);
      return adaptive ? inRange(minWidth, max, value) : value;
    },
    trueModalHeight: function trueModalHeight() {
      var window = this.window,
          modal = this.modal,
          isAutoHeight = this.isAutoHeight,
          adaptive = this.adaptive,
          maxHeight = this.maxHeight;
      var value = modal.heightType === '%' ? window.height / 100 * modal.height : modal.height;

      if (isAutoHeight) {
        return this.modal.renderedHeight;
      }

      var max = Math.min(window.height, maxHeight);
      return adaptive ? inRange(this.minHeight, max, value) : value;
    },
    overlayClass: function overlayClass() {
      return {
        'v--modal-overlay': true,
        scrollable: this.scrollable && this.isAutoHeight
      };
    },
    modalClass: function modalClass() {
      return ['v--modal-box', this.classes];
    },
    modalStyle: function modalStyle() {
      return {
        top: this.position.top + 'px',
        left: this.position.left + 'px',
        width: this.trueModalWidth + 'px',
        height: this.isAutoHeight ? 'auto' : this.trueModalHeight + 'px'
      };
    }
  },
  watch: {
    visible: function visible(value) {
      var _this2 = this;

      if (value) {
        this.visibility.overlay = true;
        setTimeout(function () {
          _this2.visibility.modal = true;

          _this2.$nextTick(function () {
            _this2.addDraggableListeners();

            _this2.callAfterEvent(true);
          });
        }, this.delay);
      } else {
        this.visibility.modal = false;
        setTimeout(function () {
          _this2.visibility.overlay = false;

          _this2.$nextTick(function () {
            _this2.removeDraggableListeners();

            _this2.callAfterEvent(false);
          });
        }, this.delay);
      }
    }
  },
  methods: {
    handleToggleEvent: function handleToggleEvent(name, state, params) {
      if (this.name === name) {
        var nextState = typeof state === 'undefined' ? !this.visible : state;
        this.toggle(nextState, params);
      }
    },
    setInitialSize: function setInitialSize() {
      var modal = this.modal;
      var width = parseNumber(this.width);
      var height = parseNumber(this.height);
      modal.width = width.value;
      modal.widthType = width.type;
      modal.height = height.value;
      modal.heightType = height.type;
    },
    handleEscapeKeyUp: function handleEscapeKeyUp(event) {
      if (event.which === 27 && this.visible) {
        this.$modal.hide(this.name);
      }
    },
    handleWindowResize: function handleWindowResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    createModalEvent: function createModalEvent() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return utils_createModalEvent(Modalvue_type_script_lang_js_objectSpread({
        name: this.name,
        ref: this.$refs.modal
      }, args));
    },
    handleModalResize: function handleModalResize(event) {
      this.modal.widthType = 'px';
      this.modal.width = event.size.width;
      this.modal.heightType = 'px';
      this.modal.height = event.size.height;
      var size = this.modal.size;
      this.$emit('resize', this.createModalEvent({
        size: size
      }));
    },
    toggle: function toggle(nextState, params) {
      var reset = this.reset,
          scrollable = this.scrollable,
          visible = this.visible;

      if (visible === nextState) {
        return;
      }

      var beforeEventName = visible ? 'before-close' : 'before-open';

      if (beforeEventName === 'before-open') {
        if (document.activeElement && document.activeElement.tagName !== 'BODY' && document.activeElement.blur) {
          document.activeElement.blur();
        }

        if (reset) {
          this.setInitialSize();
          this.shift.left = 0;
          this.shift.top = 0;
        }

        if (scrollable) {
          document.body.classList.add('v--modal-block-scroll');
        }
      } else {
        if (scrollable) {
          document.body.classList.remove('v--modal-block-scroll');
        }
      }

      var stopEventExecution = false;

      var stop = function stop() {
        stopEventExecution = true;
      };

      var beforeEvent = this.createModalEvent({
        stop: stop,
        state: nextState,
        params: params
      });
      this.$emit(beforeEventName, beforeEvent);

      if (!stopEventExecution) {
        this.visible = nextState;
      }
    },
    getDraggableElement: function getDraggableElement() {
      var selector = typeof this.draggable !== 'string' ? '.v--modal-box' : this.draggable;
      return selector ? this.$refs.overlay.querySelector(selector) : null;
    },
    handleBackgroundClick: function handleBackgroundClick() {
      if (this.clickToClose) {
        this.toggle(false);
      }
    },
    callAfterEvent: function callAfterEvent(state) {
      if (state) {
        this.connectObserver();
      } else {
        this.disconnectObserver();
      }

      var eventName = state ? 'opened' : 'closed';
      var event = this.createModalEvent({
        state: state
      });
      this.$emit(eventName, event);
    },
    addDraggableListeners: function addDraggableListeners() {
      var _this3 = this;

      if (!this.draggable) {
        return;
      }

      var dragger = this.getDraggableElement();

      if (dragger) {
        var startX = 0;
        var startY = 0;
        var cachedShiftX = 0;
        var cachedShiftY = 0;

        var getPosition = function getPosition(event) {
          return event.touches && event.touches.length > 0 ? event.touches[0] : event;
        };

        var handleDraggableMousedown = function handleDraggableMousedown(event) {
          var target = event.target;

          if (target && target.nodeName === 'INPUT') {
            return;
          }

          var _getPosition = getPosition(event),
              clientX = _getPosition.clientX,
              clientY = _getPosition.clientY;

          document.addEventListener('mousemove', handleDraggableMousemove);
          document.addEventListener('touchmove', handleDraggableMousemove);
          document.addEventListener('mouseup', handleDraggableMouseup);
          document.addEventListener('touchend', handleDraggableMouseup);
          startX = clientX;
          startY = clientY;
          cachedShiftX = _this3.shift.left;
          cachedShiftY = _this3.shift.top;
        };

        var handleDraggableMousemove = function handleDraggableMousemove(event) {
          var _getPosition2 = getPosition(event),
              clientX = _getPosition2.clientX,
              clientY = _getPosition2.clientY;

          _this3.shift.left = cachedShiftX + clientX - startX;
          _this3.shift.top = cachedShiftY + clientY - startY;
          event.preventDefault();
        };

        var handleDraggableMouseup = function handleDraggableMouseup(event) {
          document.removeEventListener('mousemove', handleDraggableMousemove);
          document.removeEventListener('touchmove', handleDraggableMousemove);
          document.removeEventListener('mouseup', handleDraggableMouseup);
          document.removeEventListener('touchend', handleDraggableMouseup);
          event.preventDefault();
        };

        dragger.addEventListener('mousedown', handleDraggableMousedown);
        dragger.addEventListener('touchstart', handleDraggableMousedown);
      }
    },
    removeDraggableListeners: function removeDraggableListeners() {},
    updateRenderedHeight: function updateRenderedHeight() {
      if (this.$refs.modal) {
        this.modal.renderedHeight = this.$refs.modal.getBoundingClientRect().height;
      }
    },
    connectObserver: function connectObserver() {
      if (this.mutationObserver) {
        this.mutationObserver.observe(this.$refs.overlay, {
          childList: true,
          attributes: true,
          subtree: true
        });
      }
    },
    disconnectObserver: function disconnectObserver() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
    },
    beforeTransitionEnter: function beforeTransitionEnter() {
      this.connectObserver();
    },
    afterTransitionEnter: function afterTransitionEnter() {},
    afterTransitionLeave: function afterTransitionLeave() {}
  }
});
// CONCATENATED MODULE: ./src/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Modal.vue



function Modal_injectStyles (context) {
  
  var style0 = __webpack_require__(7)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Modal_component = normalizeComponent(
  src_Modalvue_type_script_lang_js_,
  Modalvue_type_template_id_524d3804_render,
  staticRenderFns,
  false,
  Modal_injectStyles,
  null,
  "f02c7e6e"
  
)

Modal_component.options.__file = "src/Modal.vue"
/* harmony default export */ var Modal = (Modal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Dialog.vue?vue&type=template&id=04e76afe&
var Dialogvue_type_template_id_04e76afe_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "modal",
    {
      attrs: {
        name: "dialog",
        height: "auto",
        classes: ["v--modal", "vue-dialog", this.params.class],
        width: _vm.width,
        "pivot-y": 0.3,
        adaptive: true,
        clickToClose: _vm.clickToClose,
        transition: _vm.transition
      },
      on: {
        "before-open": _vm.beforeOpened,
        "before-close": _vm.beforeClosed,
        opened: function($event) {
          _vm.$emit("opened", $event)
        },
        closed: function($event) {
          _vm.$emit("closed", $event)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "dialog-content" },
        [
          _vm.params.title
            ? _c("div", {
                staticClass: "dialog-c-title",
                domProps: { innerHTML: _vm._s(_vm.params.title || "") }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.params.component
            ? _c(
                _vm.params.component,
                _vm._b(
                  { tag: "component" },
                  "component",
                  _vm.params.props,
                  false
                )
              )
            : _c("div", {
                staticClass: "dialog-c-text",
                domProps: { innerHTML: _vm._s(_vm.params.text || "") }
              })
        ],
        1
      ),
      _vm._v(" "),
      _vm.buttons
        ? _c(
            "div",
            { staticClass: "vue-dialog-buttons" },
            _vm._l(_vm.buttons, function(button, i) {
              return _c(
                "button",
                {
                  key: i,
                  class: button.class || "vue-dialog-button",
                  style: _vm.buttonStyle,
                  attrs: { type: "button" },
                  domProps: { innerHTML: _vm._s(button.title) },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.click(i, $event)
                    }
                  }
                },
                [_vm._v("\n      " + _vm._s(button.title) + "\n    ")]
              )
            })
          )
        : _c("div", { staticClass: "vue-dialog-buttons-none" })
    ]
  )
}
var Dialogvue_type_template_id_04e76afe_staticRenderFns = []
Dialogvue_type_template_id_04e76afe_render._withStripped = true


// CONCATENATED MODULE: ./src/Dialog.vue?vue&type=template&id=04e76afe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Dialog.vue?vue&type=script&lang=js&
/* harmony default export */ var Dialogvue_type_script_lang_js_ = ({
  name: 'VueJsDialog',
  props: {
    width: {
      type: [Number, String],
      default: 400
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'fade'
    }
  },
  data: function data() {
    return {
      params: {},
      defaultButtons: [{
        title: 'CLOSE'
      }]
    };
  },
  computed: {
    buttons: function buttons() {
      return this.params.buttons || this.defaultButtons;
    },
    buttonStyle: function buttonStyle() {
      return {
        flex: "1 1 ".concat(100 / this.buttons.length, "%")
      };
    }
  },
  methods: {
    beforeOpened: function beforeOpened(event) {
      window.addEventListener('keyup', this.onKeyUp);
      this.params = event.params || {};
      this.$emit('before-opened', event);
    },
    beforeClosed: function beforeClosed(event) {
      window.removeEventListener('keyup', this.onKeyUp);
      this.params = {};
      this.$emit('before-closed', event);
    },
    click: function click(i, event) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';
      var button = this.buttons[i];

      if (button && typeof button.handler === 'function') {
        button.handler(i, event, {
          source: source
        });
      } else {
        this.$modal.hide('dialog');
      }
    },
    onKeyUp: function onKeyUp(event) {
      if (event.which === 13 && this.buttons.length > 0) {
        var buttonIndex = this.buttons.length === 1 ? 0 : this.buttons.findIndex(function (button) {
          return button.default;
        });

        if (buttonIndex !== -1) {
          this.click(buttonIndex, event, 'keypress');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Dialogvue_type_script_lang_js_ = (Dialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Dialog.vue



function Dialog_injectStyles (context) {
  
  var style0 = __webpack_require__(9)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Dialog_component = normalizeComponent(
  src_Dialogvue_type_script_lang_js_,
  Dialogvue_type_template_id_04e76afe_render,
  Dialogvue_type_template_id_04e76afe_staticRenderFns,
  false,
  Dialog_injectStyles,
  null,
  "7b80da5c"
  
)

Dialog_component.options.__file = "src/Dialog.vue"
/* harmony default export */ var Dialog = (Dialog_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ModalsContainer.vue?vue&type=template&id=437c4752&
var ModalsContainervue_type_template_id_437c4752_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "modals-container" } },
    _vm._l(_vm.modals, function(modal) {
      return _c(
        "modal",
        _vm._g(
          _vm._b(
            {
              key: modal.id,
              on: {
                closed: function($event) {
                  _vm.remove(modal.id)
                }
              }
            },
            "modal",
            modal.modalAttrs,
            false
          ),
          modal.modalListeners
        ),
        [
          _c(
            modal.component,
            _vm._g(
              _vm._b(
                {
                  tag: "component",
                  on: {
                    close: function($event) {
                      _vm.$modal.hide(modal.modalAttrs.name)
                    }
                  }
                },
                "component",
                modal.componentAttrs,
                false
              ),
              _vm.$listeners
            )
          )
        ],
        1
      )
    })
  )
}
var ModalsContainervue_type_template_id_437c4752_staticRenderFns = []
ModalsContainervue_type_template_id_437c4752_render._withStripped = true


// CONCATENATED MODULE: ./src/ModalsContainer.vue?vue&type=template&id=437c4752&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ModalsContainer.vue?vue&type=script&lang=js&
function ModalsContainervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ModalsContainervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } return target; }

function ModalsContainervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var PREFIX = '_dynamic_modal_';
/* harmony default export */ var ModalsContainervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      modals: []
    };
  },
  created: function created() {
    this.$root._dynamicContainer = this;
  },
  methods: {
    add: function add(component) {
      var _this = this;

      var componentAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var modalAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var modalListeners = arguments.length > 3 ? arguments[3] : undefined;
      var id = generateId();
      var name = modalAttrs.name || PREFIX + id;
      this.modals.push({
        id: id,
        modalAttrs: ModalsContainervue_type_script_lang_js_objectSpread({}, modalAttrs, {
          name: name
        }),
        modalListeners: modalListeners,
        component: component,
        componentAttrs: componentAttrs
      });
      this.$nextTick(function () {
        _this.$modal.show(name);
      });
    },
    remove: function remove(id) {
      for (var i in this.modals) {
        if (this.modals[i].id === id) {
          this.modals.splice(i, 1);
          return;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/ModalsContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ModalsContainervue_type_script_lang_js_ = (ModalsContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/ModalsContainer.vue





/* normalize component */

var ModalsContainer_component = normalizeComponent(
  src_ModalsContainervue_type_script_lang_js_,
  ModalsContainervue_type_template_id_437c4752_render,
  ModalsContainervue_type_template_id_437c4752_staticRenderFns,
  false,
  null,
  null,
  "390c5dd7"
  
)

ModalsContainer_component.options.__file = "src/ModalsContainer.vue"
/* harmony default export */ var ModalsContainer = (ModalsContainer_component.exports);
// CONCATENATED MODULE: ./src/index.js



var defaultComponentName = 'Modal';
var unmountedRootErrorMessage = '[vue-js-modal] In order to render dynamic modals, a <modals-container> ' + 'component must be present on the page';
var Plugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true;
    this.event = new Vue();
    this.rootInstance = null;
    this.componentName = options.componentName || defaultComponentName;
    Vue.prototype.$modal = {
      show: function show(modal, paramsOrProps, params) {
        var events = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (typeof modal === 'string') {
          Plugin.event.$emit('toggle', modal, true, paramsOrProps);
          return;
        }

        var root = params && params.root ? params.root : Plugin.rootInstance;
        var container = getModalsContainer(Vue, options, root);

        if (container) {
          container.add(modal, paramsOrProps, params, events);
          return;
        }

        console.warn(unmountedRootErrorMessage);
      },
      hide: function hide(name, params) {
        Plugin.event.$emit('toggle', name, false, params);
      },
      toggle: function toggle(name, params) {
        Plugin.event.$emit('toggle', name, undefined, params);
      }
    };
    Vue.component(this.componentName, Modal);

    if (options.dialog) {
      Vue.component('VDialog', Dialog);
    }

    if (options.dynamic) {
      Vue.component('ModalsContainer', ModalsContainer);
      Vue.mixin({
        beforeMount: function beforeMount() {
          if (Plugin.rootInstance === null) {
            Plugin.rootInstance = this.$root;
          }
        }
      });
    }
  }
};

function getModalsContainer(Vue, options, root) {
  if (!root._dynamicContainer && options.injectModalsContainer) {
    var modalsContainer = document.createElement('div');
    document.body.appendChild(modalsContainer);
    new Vue({
      parent: root,
      render: function render(h) {
        return h(ModalsContainer);
      }
    }).$mount(modalsContainer);
  }

  return root._dynamicContainer;
}

/* harmony default export */ var src = __webpack_exports__["default"] = (Plugin);

/***/ })
/******/ ]);
});