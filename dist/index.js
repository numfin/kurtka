module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Component.ts":
/*!*********************************!*\
  !*** ./src/client/Component.ts ***!
  \*********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
class Component {
    constructor() {
        this.key = Symbol();
        this.props = {};
        this.node = () => null;
    }
    render() {
        return null;
    }
    update() {
        return this.node();
    }
}


/***/ }),

/***/ "./src/client/Kurtka.ts":
/*!******************************!*\
  !*** ./src/client/Kurtka.ts ***!
  \******************************/
/*! exports provided: Kurtka */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kurtka", function() { return Kurtka; });
/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNode */ "./src/client/createNode.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/client/Component.ts");


const Kurtka = {
    createNode: _createNode__WEBPACK_IMPORTED_MODULE_0__["createNode"],
    Component: _Component__WEBPACK_IMPORTED_MODULE_1__["Component"],
};


/***/ }),

/***/ "./src/client/createApp.ts":
/*!*********************************!*\
  !*** ./src/client/createApp.ts ***!
  \*********************************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
function createApp(app, parent) {
    parent === null || parent === void 0 ? void 0 : parent.replaceWith(app());
    return app;
}


/***/ }),

/***/ "./src/client/createNode.ts":
/*!**********************************!*\
  !*** ./src/client/createNode.ts ***!
  \**********************************/
/*! exports provided: createNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
/* harmony import */ var _client_nodeHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/client/nodeHtml */ "./src/client/nodeHtml.ts");
/* harmony import */ var _client_nodeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/client/nodeComponent */ "./src/client/nodeComponent.ts");


function createNode(tag, attrs, ...children) {
    if (typeof tag === "function") {
        return Object(_client_nodeComponent__WEBPACK_IMPORTED_MODULE_1__["createNodeComponent"])(tag, attrs);
    }
    return Object(_client_nodeHtml__WEBPACK_IMPORTED_MODULE_0__["createNodeHtml"])(tag, attrs, children);
}


/***/ }),

/***/ "./src/client/helpers.ts":
/*!*******************************!*\
  !*** ./src/client/helpers.ts ***!
  \*******************************/
/*! exports provided: iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
function iterate(items, each) {
    const keyMap = new Map();
    return () => {
        return items.map((item, i) => {
            if (keyMap.has(item)) {
                return keyMap.get(item);
            }
            const renderFn = each(item, i);
            keyMap.set(item, renderFn);
            return renderFn;
        });
    };
}


/***/ }),

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/*! exports provided: Kurtka, createApp, iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kurtka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kurtka */ "./src/client/Kurtka.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kurtka", function() { return _Kurtka__WEBPACK_IMPORTED_MODULE_0__["Kurtka"]; });

/* harmony import */ var _createApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createApp */ "./src/client/createApp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _createApp__WEBPACK_IMPORTED_MODULE_1__["createApp"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/client/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["iterate"]; });






/***/ }),

/***/ "./src/client/makeReactive.ts":
/*!************************************!*\
  !*** ./src/client/makeReactive.ts ***!
  \************************************/
/*! exports provided: makeReactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeReactive", function() { return makeReactive; });
function makeReactive(source, reactFn) {
    if (Array.isArray(source)) {
        source.forEach((item, index) => {
            source[index] = makeReactive(item, reactFn);
        });
        return new Proxy(source, {
            set(target, key, value) {
                target[key] = makeReactive(value, reactFn);
                if (key !== "length") {
                    reactFn();
                }
                return true;
            },
            deleteProperty(target, key) {
                if (target[key]) {
                    target.splice(key, 1);
                    delete target[key];
                    reactFn();
                    return true;
                }
                return false;
            },
        });
    }
    else if (typeof source === "object") {
        Object.entries(source).forEach(([k, v]) => {
            source[k] = makeReactive(v, reactFn);
        });
        return new Proxy(source, {
            set(target, key, value) {
                target[key] = makeReactive(value, reactFn);
                reactFn();
                return true;
            },
        });
    }
    else {
        return source;
    }
}


/***/ }),

/***/ "./src/client/nodeComponent.ts":
/*!*************************************!*\
  !*** ./src/client/nodeComponent.ts ***!
  \*************************************/
/*! exports provided: createNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNodeComponent", function() { return createNodeComponent; });
/* harmony import */ var _makeReactive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeReactive */ "./src/client/makeReactive.ts");

function createNodeComponent(C, attrs) {
    const component = new C(attrs);
    if (component.state) {
        component.state = Object(_makeReactive__WEBPACK_IMPORTED_MODULE_0__["makeReactive"])(component.state, () => component.update());
    }
    component.node = component.render();
    return component.node;
}


/***/ }),

/***/ "./src/client/nodeHtml.ts":
/*!********************************!*\
  !*** ./src/client/nodeHtml.ts ***!
  \********************************/
/*! exports provided: createNodeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNodeHtml", function() { return createNodeHtml; });
function createNodeHtml(tag, attrs, childrens) {
    const rootEl = document.createElement(tag);
    if (attrs) {
        const { events, style, class: classList, ...attributes } = attrs;
        Object.assign(rootEl, attributes);
        Object.assign(rootEl.style, style);
        if (classList) {
            rootEl.classList.add(classList);
        }
        Object.entries(events || {}).forEach(([event, handler]) => {
            rootEl.addEventListener(event, (...args) => handler(...args));
        });
    }
    return function renderHtml() {
        const nodeIndexes = new Map();
        const nodeValues = [];
        function addNode(node) {
            nodeIndexes.set(node, nodeIndexes.size);
            nodeValues.push(node);
        }
        childrens.forEach((nodeFn) => {
            if (typeof nodeFn !== "function") {
                return addNode(String(nodeFn));
            }
            const node = nodeFn();
            if (node instanceof HTMLElement) {
                addNode(node);
            }
            else if (Array.isArray(node)) {
                for (let item of node) {
                    addNode(item());
                }
            }
            else {
                addNode(String(node));
            }
        });
        const buffer = new Set();
        let length = rootEl.childNodes.length;
        for (let rootIndex = 0; rootIndex < length; rootIndex++) {
            const rootItem = rootEl.childNodes.item(rootIndex);
            const isText = rootItem.nodeType === document.TEXT_NODE;
            const rootValue = isText ? rootItem.textContent : rootItem;
            if (isText && !rootValue) {
                rootItem.remove();
                continue;
            }
            if (nodeIndexes.has(rootValue)) {
                if (!buffer.has(rootItem)) {
                    const index = nodeValues.indexOf(rootValue);
                    if (index > rootIndex) {
                        const max = index - rootIndex;
                        for (let i = rootIndex; i < max; i++) {
                            const value = nodeValues[i];
                            const node = typeof value === "string"
                                ? document.createTextNode(value)
                                : value;
                            rootEl.insertBefore(node, rootItem);
                            length += 1;
                        }
                        rootIndex += max;
                    }
                }
                buffer.add(rootItem);
            }
            else {
                rootItem.remove();
                rootIndex -= 1;
                length -= 1;
            }
        }
        for (let item of nodeValues.slice(buffer.size)) {
            const node = typeof item === "string" ? document.createTextNode(item) : item;
            rootEl.appendChild(node);
        }
        return rootEl;
    };
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9LdXJ0a2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jcmVhdGVBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jcmVhdGVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbWFrZVJlYWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbm9kZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L25vZGVIdG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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QUFJLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEdBQ1IsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNKLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jbGllbnQvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IGltcGxlbWVudHMgS3VydGthLkNvbXBvbmVudCB7XG4gIGtleSA9IFN5bWJvbCgpO1xuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIHN0YXRlPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIG5vZGU6IEt1cnRrYS5Ob2RlID0gKCkgPT4gbnVsbCE7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuICByZW5kZXIoKTogS3VydGthLk5vZGUge1xuICAgIHJldHVybiBudWxsITtcbiAgfVxuICB1cGRhdGUoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLm5vZGUoKSBhcyBhbnk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9jcmVhdGVOb2RlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IEt1cnRrYSA9IHtcbiAgY3JlYXRlTm9kZSxcbiAgQ29tcG9uZW50LFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoYXBwOiBLdXJ0a2EuTm9kZSwgcGFyZW50OiBFbGVtZW50KSB7XG4gIHBhcmVudD8ucmVwbGFjZVdpdGgoYXBwKCkgYXMgYW55KTtcbiAgcmV0dXJuIGFwcDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5vZGVIdG1sIH0gZnJvbSBcIn4vY2xpZW50L25vZGVIdG1sXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2RlQ29tcG9uZW50IH0gZnJvbSBcIn4vY2xpZW50L25vZGVDb21wb25lbnRcIjtcbmltcG9ydCB7IFRhZ3MgfSBmcm9tIFwifi9jbGllbnQvVGFnc1wiO1xuaW1wb3J0IHsgQXR0cnMgfSBmcm9tIFwifi9jbGllbnQvQXR0cnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGU8VCBleHRlbmRzIEF0dHJzPihcbiAgdGFnOiBUYWdzIHwgKG5ldyAocDogVCkgPT4gS3VydGthLkNvbXBvbmVudCksXG4gIGF0dHJzOiBULFxuICAuLi5jaGlsZHJlbjogS3VydGthLk5vZGVbXVxuKTogS3VydGthLk5vZGUge1xuICBpZiAodHlwZW9mIHRhZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVDb21wb25lbnQodGFnLCBhdHRycyk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZU5vZGVIdG1sKHRhZywgYXR0cnMsIGNoaWxkcmVuKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpdGVyYXRlPFQgZXh0ZW5kcyB1bmtub3duPihcbiAgaXRlbXM6IFRbXSxcbiAgZWFjaDogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIpID0+IEt1cnRrYS5Ob2RlXG4pOiAoKSA9PiBLdXJ0a2EuTm9kZVtdIHtcbiAgY29uc3Qga2V5TWFwID0gbmV3IE1hcCgpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYgKGtleU1hcC5oYXMoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGtleU1hcC5nZXQoaXRlbSk7XG4gICAgICB9XG4gICAgICBjb25zdCByZW5kZXJGbiA9IGVhY2goaXRlbSwgaSk7XG4gICAgICBrZXlNYXAuc2V0KGl0ZW0sIHJlbmRlckZuKTtcbiAgICAgIHJldHVybiByZW5kZXJGbjtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImV4cG9ydCB7IEt1cnRrYSB9IGZyb20gXCIuL0t1cnRrYVwiO1xuXG5leHBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwiLi9jcmVhdGVBcHBcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVyc1wiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZWFjdGl2ZTxUIGV4dGVuZHMgYW55Pihzb3VyY2U6IFQsIHJlYWN0Rm46IEZ1bmN0aW9uKTogVCB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICBzb3VyY2UuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBzb3VyY2VbaW5kZXhdID0gbWFrZVJlYWN0aXZlKGl0ZW0sIHJlYWN0Rm4pO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJveHkoc291cmNlLCB7XG4gICAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXkgYXMgbnVtYmVyXSA9IG1ha2VSZWFjdGl2ZSh2YWx1ZSwgcmVhY3RGbik7XG4gICAgICAgIGlmIChrZXkgIT09IFwibGVuZ3RoXCIpIHtcbiAgICAgICAgICByZWFjdEZuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk8VD4odGFyZ2V0OiBUW10sIGtleTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSkge1xuICAgICAgICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmVhY3RGbigpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIikge1xuICAgIE9iamVjdC5lbnRyaWVzKHNvdXJjZSkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICBzb3VyY2Vba10gPSBtYWtlUmVhY3RpdmUodiwgcmVhY3RGbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm94eShzb3VyY2UgYXMgYW55LCB7XG4gICAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gbWFrZVJlYWN0aXZlKHZhbHVlLCByZWFjdEZuKTtcbiAgICAgICAgcmVhY3RGbigpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXR0cnMgfSBmcm9tIFwiLi9BdHRyc1wiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4vbWFrZVJlYWN0aXZlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlQ29tcG9uZW50PFQgZXh0ZW5kcyBBdHRycz4oXG4gIEM6IG5ldyAoYXR0cnM6IFQpID0+IEt1cnRrYS5Db21wb25lbnQsXG4gIGF0dHJzOiBUXG4pOiBLdXJ0a2EuTm9kZSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDKGF0dHJzKTtcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xuICAgIGNvbXBvbmVudC5zdGF0ZSA9IG1ha2VSZWFjdGl2ZShjb21wb25lbnQuc3RhdGUsICgpID0+IGNvbXBvbmVudC51cGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnQubm9kZSA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgcmV0dXJuIGNvbXBvbmVudC5ub2RlO1xufVxuIiwiaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuL1RhZ3NcIjtcbmltcG9ydCB7IEF0dHJzIH0gZnJvbSBcIi4vQXR0cnNcIjtcblxudHlwZSBOb2RlSFRNTCA9IEt1cnRrYS5Ob2RlIHwgc3RyaW5nIHwgbnVtYmVyO1xudHlwZSBDaGlsZHJlbiA9IE5vZGVIVE1MIHwgKCgpID0+IEt1cnRrYS5Ob2RlW10pO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUh0bWwoXG4gIHRhZzogVGFncyxcbiAgYXR0cnM6IEF0dHJzLFxuICBjaGlsZHJlbnM6IENoaWxkcmVuW11cbik6IEt1cnRrYS5Ob2RlIHtcbiAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAoYXR0cnMpIHtcbiAgICBjb25zdCB7IGV2ZW50cywgc3R5bGUsIGNsYXNzOiBjbGFzc0xpc3QsIC4uLmF0dHJpYnV0ZXMgfSA9IGF0dHJzO1xuICAgIE9iamVjdC5hc3NpZ24ocm9vdEVsLCBhdHRyaWJ1dGVzKTtcbiAgICBPYmplY3QuYXNzaWduKChyb290RWwgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLCBzdHlsZSk7XG4gICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMoZXZlbnRzIHx8IHt9KS5mb3JFYWNoKChbZXZlbnQsIGhhbmRsZXJdKSA9PiB7XG4gICAgICByb290RWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKC4uLmFyZ3MpID0+IGhhbmRsZXIoLi4uYXJncykpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiByZW5kZXJIdG1sKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBub2RlSW5kZXhlczogTWFwPE5vZGUgfCBzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgbm9kZVZhbHVlczogKE5vZGUgfCBzdHJpbmcpW10gPSBbXTtcbiAgICBmdW5jdGlvbiBhZGROb2RlKG5vZGU6IE5vZGUgfCBzdHJpbmcpIHtcbiAgICAgIG5vZGVJbmRleGVzLnNldChub2RlLCBub2RlSW5kZXhlcy5zaXplKTtcbiAgICAgIG5vZGVWYWx1ZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlbnMuZm9yRWFjaCgobm9kZUZuKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG5vZGVGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhZGROb2RlKFN0cmluZyhub2RlRm4pKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlRm4oKTtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgYWRkTm9kZShub2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG5vZGUpIHtcbiAgICAgICAgICBhZGROb2RlKGl0ZW0oKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE5vZGUoU3RyaW5nKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1ZmZlcjogU2V0PE5vZGU+ID0gbmV3IFNldCgpO1xuXG4gICAgbGV0IGxlbmd0aCA9IHJvb3RFbC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb290SW5kZXggPSAwOyByb290SW5kZXggPCBsZW5ndGg7IHJvb3RJbmRleCsrKSB7XG4gICAgICBjb25zdCByb290SXRlbSA9IHJvb3RFbC5jaGlsZE5vZGVzLml0ZW0ocm9vdEluZGV4KTtcbiAgICAgIGNvbnN0IGlzVGV4dCA9IHJvb3RJdGVtLm5vZGVUeXBlID09PSBkb2N1bWVudC5URVhUX05PREU7XG4gICAgICBjb25zdCByb290VmFsdWUgPSBpc1RleHQgPyByb290SXRlbS50ZXh0Q29udGVudCA6IHJvb3RJdGVtO1xuICAgICAgaWYgKGlzVGV4dCAmJiAhcm9vdFZhbHVlKSB7XG4gICAgICAgIHJvb3RJdGVtLnJlbW92ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlSW5kZXhlcy5oYXMocm9vdFZhbHVlISkpIHtcbiAgICAgICAgaWYgKCFidWZmZXIuaGFzKHJvb3RJdGVtKSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gbm9kZVZhbHVlcy5pbmRleE9mKHJvb3RWYWx1ZSEpO1xuICAgICAgICAgIGlmIChpbmRleCA+IHJvb3RJbmRleCkge1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gaW5kZXggLSByb290SW5kZXg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm9vdEluZGV4OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlVmFsdWVzW2ldO1xuICAgICAgICAgICAgICBjb25zdCBub2RlID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpXG4gICAgICAgICAgICAgICAgICA6IHZhbHVlO1xuICAgICAgICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKG5vZGUsIHJvb3RJdGVtKTtcbiAgICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290SW5kZXggKz0gbWF4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBidWZmZXIuYWRkKHJvb3RJdGVtISk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290SXRlbS5yZW1vdmUoKTtcbiAgICAgICAgcm9vdEluZGV4IC09IDE7XG4gICAgICAgIGxlbmd0aCAtPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpdGVtIG9mIG5vZGVWYWx1ZXMuc2xpY2UoYnVmZmVyLnNpemUpKSB7XG4gICAgICBjb25zdCBub2RlID1cbiAgICAgICAgdHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtKSA6IGl0ZW07XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiByb290RWw7XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9