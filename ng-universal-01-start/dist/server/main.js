(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_0, View_ɵangular_packages_router_router_l_Host_0, ɵangular_packages_router_router_lNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵangular_packages_router_router_l", function() { return RenderType_ɵangular_packages_router_router_l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_0", function() { return View_ɵangular_packages_router_router_l_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_Host_0", function() { return View_ɵangular_packages_router_router_l_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_lNgFactory", function() { return ɵangular_packages_router_router_lNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵangular_packages_router_router_lNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });

function View_ɵangular_packages_router_router_l_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵangular_packages_router_router_l_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], [], null, null)], null, null); }
var ɵangular_packages_router_router_lNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");



var appRoutes = [
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/header/header.component.ngfactory */ "./src/app/core/header/header.component.ngfactory.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, _core_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _core_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 6, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
            authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
        });
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _core_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/home/home.component.ngfactory */ "./src/app/core/home/home.component.ngfactory.js");
/* harmony import */ var _shopping_list_shopping_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-list/shopping-list.component.ngfactory */ "./src/app/shopping-list/shopping-list.component.ngfactory.js");
/* harmony import */ var _auth_signup_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component.ngfactory */ "./src/app/auth/signup/signup.component.ngfactory.js");
/* harmony import */ var _auth_signin_signin_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signin/signin.component.ngfactory */ "./src/app/auth/signin/signin.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth.interceptor */ "./src/app/shared/auth.interceptor.ts");
/* harmony import */ var _shared_logging_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/logging.interceptor */ "./src/app/shared/logging.interceptor.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shopping-list/shopping-list.module */ "./src/app/shopping-list/shopping-list.module.ts");
/* harmony import */ var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shopping_list_store_shopping_list_reducers__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shopping-list/store/shopping-list.reducers */ "./src/app/shopping-list/store/shopping-list.reducers.ts");
/* harmony import */ var _auth_store_auth_reducers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth/store/auth.reducers */ "./src/app/auth/store/auth.reducers.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngrx/effects */ "@ngrx/effects");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./auth/store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngrx/router-store */ "@ngrx/router-store");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





































var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _core_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _shopping_list_shopping_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ShoppingListComponentNgFactory"], _auth_signup_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SignupComponentNgFactory"], _auth_signin_signin_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["SigninComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, new _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"](p1_0), new _shared_logging_interceptor__WEBPACK_IMPORTED_MODULE_16__["LoggingInterceptor"]()]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_f"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadAllModules"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_18__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_20__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_18__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_18__["PreloadAllModules"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], function () { return [[{ path: "", component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"] }, { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" }, { path: "shopping-list", component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_22__["ShoppingListComponent"] }], [{ path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"] }, { path: "signin", component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_24__["SigninComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_27__["ShoppingListModule"], _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_27__["ShoppingListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_28__["AuthRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_28__["AuthRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_module__WEBPACK_IMPORTED_MODULE_29__["AuthModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_29__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_30__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_30__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManagerDispatcher"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_h"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_v"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_j"], { shoppingList: _shopping_list_store_shopping_list_reducers__WEBPACK_IMPORTED_MODULE_31__["shoppingListReducer"], auth: _auth_store_auth_reducers__WEBPACK_IMPORTED_MODULE_32__["authReducer"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_k"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_j"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_i"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["combineReducers"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_q"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_r"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_x"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_q"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["META_REDUCERS"], function (p0_0, p1_0) { return [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_z"](p0_0), _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_y"](p1_0)]; }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_r"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_r"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["USER_PROVIDED_META_REDUCERS"], [], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_w"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["META_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["USER_PROVIDED_META_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["createReducerFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_i"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_store_store_p"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManagerDispatcher"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["REDUCER_FACTORY"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["State"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["State"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StateObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["State"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StateObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["EffectSources"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["EffectSources"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_f"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_f"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["EffectSources"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["Actions"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["Actions"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["ScannedActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_34__["AuthEffects"], _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_34__["AuthEffects"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_d"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_a"], [_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_34__["AuthEffects"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_b"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_b"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["EffectSources"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_f"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_33__["ɵngrx_modules_effects_effects_d"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreFeatureModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["RouterStateSerializer"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["DefaultRouterStateSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["ɵngrx_modules_router_store_router_store_a"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["ROUTER_CONFIG"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["ɵngrx_modules_router_store_router_store_b"], [_ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["ɵngrx_modules_router_store_router_store_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["StoreRouterConnectingModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["StoreRouterConnectingModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["RouterStateSerializer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_35__["ROUTER_CONFIG"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_36__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_36__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (authState) {
            return authState.authenticated;
        }));
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");



var authRoutes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/auth/signin/signin.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_SigninComponent, View_SigninComponent_0, View_SigninComponent_Host_0, SigninComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SigninComponent", function() { return RenderType_SigninComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SigninComponent_0", function() { return View_SigninComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SigninComponent_Host_0", function() { return View_SigninComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponentNgFactory", function() { return SigninComponentNgFactory; });
/* harmony import */ var _signin_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component.css.shim.ngstyle */ "./src/app/auth/signin/signin.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_SigninComponent = [_signin_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SigninComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SigninComponent, data: {} });

function View_SigninComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 24, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSignin(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, [["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mail"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "input", [["class", "form-control"], ["id", "email"], ["name", "email"], ["ngModel", ""], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "input", [["class", "form-control"], ["id", "password"], ["name", "password"], ["ngModel", ""], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sign In"]))], function (_ck, _v) { var currVal_14 = "email"; var currVal_15 = ""; _ck(_v, 13, 0, currVal_14, currVal_15); var currVal_23 = "password"; var currVal_24 = ""; _ck(_v, 22, 0, currVal_23, currVal_24); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 19, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).valid; _ck(_v, 25, 0, currVal_25); }); }
function View_SigninComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-signin", [], null, null, null, View_SigninComponent_0, RenderType_SigninComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SigninComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-signin", _signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], View_SigninComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(store) {
        this.store = store;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["TrySignin"]({ username: email, password: password }));
    };
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/auth/signup/signup.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_SignupComponent, View_SignupComponent_0, View_SignupComponent_Host_0, SignupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SignupComponent", function() { return RenderType_SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupComponent_0", function() { return View_SignupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupComponent_Host_0", function() { return View_SignupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponentNgFactory", function() { return SignupComponentNgFactory; });
/* harmony import */ var _signup_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component.css.shim.ngstyle */ "./src/app/auth/signup/signup.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_SignupComponent = [_signup_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SignupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SignupComponent, data: {} });

function View_SignupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 24, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSignup(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, [["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mail"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "input", [["class", "form-control"], ["id", "email"], ["name", "email"], ["ngModel", ""], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "input", [["class", "form-control"], ["id", "password"], ["name", "password"], ["ngModel", ""], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sign Up"]))], function (_ck, _v) { var currVal_14 = "email"; var currVal_15 = ""; _ck(_v, 13, 0, currVal_14, currVal_15); var currVal_23 = "password"; var currVal_24 = ""; _ck(_v, 22, 0, currVal_23, currVal_24); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 19, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_25 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).valid; _ck(_v, 25, 0, currVal_25); }); }
function View_SignupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-signup", [], null, null, null, View_SignupComponent_0, RenderType_SignupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SignupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-signup", _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], View_SignupComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(store) {
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["TrySignup"]({ username: email, password: password }));
    };
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: TRY_SIGNUP, SIGNUP, TRY_SIGNIN, SIGNIN, LOGOUT, SET_TOKEN, TrySignup, TrySignin, Signup, Signin, Logout, SetToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNUP", function() { return TRY_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNIN", function() { return TRY_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignup", function() { return TrySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignin", function() { return TrySignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToken", function() { return SetToken; });
var TRY_SIGNUP = 'TRY_SIGNUP';
var SIGNUP = 'SIGNUP';
var TRY_SIGNIN = 'TRY_SIGNIN';
var SIGNIN = 'SIGNIN';
var LOGOUT = 'LOGOUT';
var SET_TOKEN = 'SET_TOKEN';
var TrySignup = /** @class */ (function () {
    function TrySignup(payload) {
        this.payload = payload;
        this.type = TRY_SIGNUP;
    }
    return TrySignup;
}());

var TrySignin = /** @class */ (function () {
    function TrySignin(payload) {
        this.payload = payload;
        this.type = TRY_SIGNIN;
    }
    return TrySignin;
}());

var Signup = /** @class */ (function () {
    function Signup() {
        this.type = SIGNUP;
    }
    return Signup;
}());

var Signin = /** @class */ (function () {
    function Signin() {
        this.type = SIGNIN;
    }
    return Signin;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());

var SetToken = /** @class */ (function () {
    function SetToken(payload) {
        this.payload = payload;
        this.type = SET_TOKEN;
    }
    return SetToken;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "@ngrx/effects");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.authSignup = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_SIGNUP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (authData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]()
                .createUserWithEmailAndPassword(authData.username, authData.password));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.getIdToken());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (token) {
            return [
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_5__["SIGNUP"]
                },
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_5__["SET_TOKEN"],
                    payload: token
                }
            ];
        }));
        this.authSignin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["TRY_SIGNIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
            return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (authData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]()
                .signInWithEmailAndPassword(authData.username, authData.password));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.getIdToken());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (token) {
            _this.router.navigate(['/']);
            return [
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_5__["SIGNIN"]
                },
                {
                    type: _auth_actions__WEBPACK_IMPORTED_MODULE_5__["SET_TOKEN"],
                    payload: token
                }
            ];
        }));
        this.authLogout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.router.navigate(['/']);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignup", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authSignin", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authLogout", void 0);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.reducers.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/store/auth.reducers.ts ***!
  \*********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    token: null,
    authenticated: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP"]):
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNIN"]):
            return __assign({}, state, { authenticated: true });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]):
            return __assign({}, state, { token: null, authenticated: false });
        case (_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_TOKEN"]):
            return __assign({}, state, { token: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/core/header/header.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_HeaderComponent = [];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "a", [["routerLink", "/signup"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "a", [["routerLink", "/signin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Login"]))], function (_ck, _v) { var currVal_2 = "/signup"; _ck(_v, 2, 0, currVal_2); var currVal_5 = "/signin"; _ck(_v, 6, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_3, currVal_4); }); }
function View_HeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "a", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLogout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Logout"]))], null, null); }
function View_HeaderComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "li", [["appDropdown", ""], ["class", "dropdown"]], [[2, "open", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).toggleOpen() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "a", [["class", "dropdown-toggle"], ["role", "button"], ["style", "cursor: pointer;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Manage "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "span", [["class", "caret"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 6, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "a", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSaveData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Save Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "a", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onFetchData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Fetch Data"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isOpen; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 32, "nav", [["class", "navbar navbar-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 31, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["class", "navbar-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "a", [["class", "navbar-brand"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recipe Book"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 26, "div", [["class", "collapse navbar-collapse"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 14, "ul", [["class", "nav navbar-nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 6, "li", [["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "a", [["routerLink", "/recipes"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recipes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 6, "li", [["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "a", [["routerLink", "/shopping-list"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Shopping List"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 10, "ul", [["class", "nav navbar-nav navbar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 9, 0, currVal_3); var currVal_6 = "/recipes"; _ck(_v, 13, 0, currVal_6); var currVal_7 = "active"; _ck(_v, 16, 0, currVal_7); var currVal_10 = "/shopping-list"; _ck(_v, 20, 0, currVal_10); var currVal_11 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).transform(_co.authState)).authenticated; _ck(_v, 24, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).transform(_co.authState)).authenticated; _ck(_v, 28, 0, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).transform(_co.authState)).authenticated; _ck(_v, 31, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_4, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).href; _ck(_v, 19, 0, currVal_8, currVal_9); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recipes/store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");

// import { HttpEvent, HttpEventType } from '@angular/common/http';



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.authState = this.store.select('auth');
    };
    HeaderComponent.prototype.onSaveData = function () {
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_3__["StoreRecipes"]());
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_3__["FetchRecipes"]());
    };
    HeaderComponent.prototype.onLogout = function () {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"]());
    };
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/core/home/home.component.css.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/core/home/home.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/core/home/home.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/core/home/home.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/core/home/home.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_HomeComponent = [_home_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Welcome to the Recipe Book"]))], null, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css.shim.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_RecipeDetailComponent, View_RecipeDetailComponent_0, View_RecipeDetailComponent_Host_0, RecipeDetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecipeDetailComponent", function() { return RenderType_RecipeDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeDetailComponent_0", function() { return View_RecipeDetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeDetailComponent_Host_0", function() { return View_RecipeDetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponentNgFactory", function() { return RecipeDetailComponentNgFactory; });
/* harmony import */ var _recipe_detail_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-detail.component.css.shim.ngstyle */ "./src/app/recipes/recipe-detail/recipe-detail.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _recipe_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_RecipeDetailComponent = [_recipe_detail_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RecipeDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RecipeDetailComponent, data: {} });

function View_RecipeDetailComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [["class", "list-group-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " - ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; var currVal_1 = _v.context.$implicit.amount; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_RecipeDetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "img", [["class", "img-responsive"], ["style", "max-height: 300px;"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 15, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 14, "div", [["appDropdown", ""], ["class", "btn-group"]], [[2, "open", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).toggleOpen() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "button", [["class", "btn btn-primary dropdown-toggle"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Manage Recipe "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "span", [["class", "caret"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 9, "ul", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "a", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onAddToShoppingList() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To Shopping List"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "a", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEditRecipe() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Edit Recipe"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "a", [["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDeleteRecipe() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Delete Recipe"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "ul", [["class", "list-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_RecipeDetailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 35, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).transform(_co.recipeState)).recipes[_co.id].ingredients; _ck(_v, 35, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.recipeState)).recipes[_co.id].imagePath; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_co.recipeState)).recipes[_co.id].name, ""); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform(_co.recipeState)).recipes[_co.id].name; _ck(_v, 8, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isOpen; _ck(_v, 12, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).transform(_co.recipeState)).recipes[_co.id].description; _ck(_v, 29, 0, currVal_4); }); }
function View_RecipeDetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipe-detail", [], null, null, null, View_RecipeDetailComponent_0, RenderType_RecipeDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipe_detail_component__WEBPACK_IMPORTED_MODULE_4__["RecipeDetailComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecipeDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-recipe-detail", _recipe_detail_component__WEBPACK_IMPORTED_MODULE_4__["RecipeDetailComponent"], View_RecipeDetailComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shopping-list/store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");
/* harmony import */ var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");






var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipeState = _this.store.select('recipes');
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        var _this = this;
        this.store.select('recipes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (recipeState) {
            _this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddIngredients"](recipeState.recipes[_this.id].ingredients));
        });
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRecipe"](this.id));
        this.router.navigate(['/recipes']);
    };
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_RecipeEditComponent, View_RecipeEditComponent_0, View_RecipeEditComponent_Host_0, RecipeEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecipeEditComponent", function() { return RenderType_RecipeEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeEditComponent_0", function() { return View_RecipeEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeEditComponent_Host_0", function() { return View_RecipeEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponentNgFactory", function() { return RecipeEditComponentNgFactory; });
/* harmony import */ var _recipe_edit_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-edit.component.css.shim.ngstyle */ "./src/app/recipes/recipe-edit/recipe-edit.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_RecipeEditComponent = [_recipe_edit_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RecipeEditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RecipeEditComponent, data: {} });

function View_RecipeEditComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "row"], ["style", "margin-top: 10px;"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "col-xs-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "col-xs-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "amount"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [["class", "col-xs-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDeleteIngredient(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["X"]))], function (_ck, _v) { var currVal_7 = _v.context.index; _ck(_v, 1, 0, currVal_7); var currVal_15 = "name"; _ck(_v, 8, 0, currVal_15); var currVal_23 = "amount"; _ck(_v, 16, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 12, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); }); }
function View_RecipeEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 60, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 59, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 58, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "button", [["class", "btn btn-success"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 9, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [["for", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "name"], ["id", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 9, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "label", [["for", "imagePath"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Image URL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, [["imagePath", 1]], null, 5, "input", [["class", "form-control"], ["formControlName", "imagePath"], ["id", "imagePath"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "img", [["class", "img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 9, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "label", [["for", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "description"], ["id", "description"], ["rows", "6"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 10, "div", [["class", "col-xs-12"], ["formArrayName", "ingredients"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RecipeEditComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "button", [["class", "btn btn-success"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onAddIngredient() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Ingredient"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.recipeForm; _ck(_v, 4, 0, currVal_7); var currVal_16 = "name"; _ck(_v, 21, 0, currVal_16); var currVal_24 = "imagePath"; _ck(_v, 32, 0, currVal_24); var currVal_33 = "description"; _ck(_v, 46, 0, currVal_33); var currVal_41 = "ingredients"; _ck(_v, 51, 0, currVal_41); var currVal_42 = _co.getControls(); _ck(_v, 55, 0, currVal_42); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = !_co.recipeForm.valid; _ck(_v, 9, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).value; _ck(_v, 37, 0, currVal_25); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPending; _ck(_v, 43, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassPending; _ck(_v, 50, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); }); }
function View_RecipeEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipe-edit", [], null, null, null, View_RecipeEditComponent_0, RenderType_RecipeEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__["RecipeEditComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecipeEditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-recipe-edit", _recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__["RecipeEditComponent"], View_RecipeEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");






var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateRecipe"]({
                index: this.id,
                updatedRecipe: this.recipeForm.value
            }));
        }
        else {
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["AddRecipe"](this.recipeForm.value));
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.initForm = function () {
        var _this = this;
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        if (this.editMode) {
            this.store.select('recipes')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function (recipeState) {
                var recipe = recipeState.recipes[_this.id];
                recipeName = recipe.name;
                recipeImagePath = recipe.imagePath;
                recipeDescription = recipe.description;
                if (recipe['ingredients']) {
                    for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                        var ingredient = _a[_i];
                        recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ingredient.amount, [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]+[0-9]*$/)
                            ])
                        }));
                    }
                }
            });
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.prototype.getControls = function () {
        return this.recipeForm.get('ingredients').controls;
    };
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_RecipeItemComponent, View_RecipeItemComponent_0, View_RecipeItemComponent_Host_0, RecipeItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecipeItemComponent", function() { return RenderType_RecipeItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeItemComponent_0", function() { return View_RecipeItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeItemComponent_Host_0", function() { return View_RecipeItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponentNgFactory", function() { return RecipeItemComponentNgFactory; });
/* harmony import */ var _recipe_item_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-item.component.css.shim.ngstyle */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recipe_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_RecipeItemComponent = [_recipe_item_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RecipeItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RecipeItemComponent, data: {} });

function View_RecipeItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "a", [["class", "list-group-item clearfix"], ["routerLinkActive", "active"], ["style", "cursor: pointer;"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "pull-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h4", [["class", "list-group-item-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [["class", "list-group-item-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["class", "img-responsive"], ["style", "max-height: 50px;"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, _co.index); _ck(_v, 1, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _co.recipe.name; _ck(_v, 8, 0, currVal_4); var currVal_5 = _co.recipe.description; _ck(_v, 10, 0, currVal_5); var currVal_6 = _co.recipe.imagePath; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.recipe.name, ""); _ck(_v, 12, 0, currVal_6, currVal_7); }); }
function View_RecipeItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipe-item", [], null, null, null, View_RecipeItemComponent_0, RenderType_RecipeItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecipeItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-recipe-item", _recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"], View_RecipeItemComponent_Host_0, { recipe: "recipe", index: "index" }, {}, []);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_RecipeListComponent, View_RecipeListComponent_0, View_RecipeListComponent_Host_0, RecipeListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecipeListComponent", function() { return RenderType_RecipeListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeListComponent_0", function() { return View_RecipeListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeListComponent_Host_0", function() { return View_RecipeListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponentNgFactory", function() { return RecipeListComponentNgFactory; });
/* harmony import */ var _recipe_list_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-list.component.css.shim.ngstyle */ "./src/app/recipes/recipe-list/recipe-list.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipe_item_recipe_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-item/recipe-item.component.ngfactory */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ngfactory.js");
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_RecipeListComponent = [_recipe_list_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RecipeListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RecipeListComponent, data: {} });

function View_RecipeListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipe-item", [], null, null, null, _recipe_item_recipe_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RecipeItemComponent_0"], _recipe_item_recipe_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RecipeItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_3__["RecipeItemComponent"], [], { recipe: [0, "recipe"], index: [1, "index"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; var currVal_1 = _v.context.index; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_RecipeListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [["class", "btn btn-success"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNewRecipe() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Recipe"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_RecipeListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform(_co.recipeState)).recipes; _ck(_v, 8, 0, currVal_0); }, null); }
function View_RecipeListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipe-list", [], null, null, null, View_RecipeListComponent_0, RenderType_RecipeListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecipeListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-recipe-list", _recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], View_RecipeListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipeState = this.store.select('recipes');
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_RecipeStartComponent, View_RecipeStartComponent_0, View_RecipeStartComponent_Host_0, RecipeStartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecipeStartComponent", function() { return RenderType_RecipeStartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeStartComponent_0", function() { return View_RecipeStartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipeStartComponent_Host_0", function() { return View_RecipeStartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponentNgFactory", function() { return RecipeStartComponentNgFactory; });
/* harmony import */ var _recipe_start_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-start.component.css.shim.ngstyle */ "./src/app/recipes/recipe-start/recipe-start.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipe_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_RecipeStartComponent = [_recipe_start_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RecipeStartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RecipeStartComponent, data: {} });

function View_RecipeStartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please select a Recipe!"]))], null, null); }
function View_RecipeStartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipe-start", [], null, null, null, View_RecipeStartComponent_0, RenderType_RecipeStartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipe_start_component__WEBPACK_IMPORTED_MODULE_2__["RecipeStartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecipeStartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-recipe-start", _recipe_start_component__WEBPACK_IMPORTED_MODULE_2__["RecipeStartComponent"], View_RecipeStartComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecipesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesRoutingModule", function() { return RecipesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");






var recipesRoutes = [
    { path: '', component: _recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"], children: [
            { path: '', component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_4__["RecipeStartComponent"] },
            { path: 'new', component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
            { path: ':id', component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailComponent"] },
            { path: ':id/edit', component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
        ] },
];
var RecipesRoutingModule = /** @class */ (function () {
    function RecipesRoutingModule() {
    }
    return RecipesRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipes.component.css.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/recipes/recipes.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/recipes/recipes.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_RecipesComponent, View_RecipesComponent_0, View_RecipesComponent_Host_0, RecipesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RecipesComponent", function() { return RenderType_RecipesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipesComponent_0", function() { return View_RecipesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RecipesComponent_Host_0", function() { return View_RecipesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponentNgFactory", function() { return RecipesComponentNgFactory; });
/* harmony import */ var _recipes_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.component.css.shim.ngstyle */ "./src/app/recipes/recipes.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipe_list_recipe_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-list/recipe-list.component.ngfactory */ "./src/app/recipes/recipe-list/recipe-list.component.ngfactory.js");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_RecipesComponent = [_recipes_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RecipesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RecipesComponent, data: {} });

function View_RecipesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "col-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-recipe-list", [], null, null, null, _recipe_list_recipe_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RecipeListComponent_0"], _recipe_list_recipe_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RecipeListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__["RecipeListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "col-md-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); _ck(_v, 6, 0); }, null); }
function View_RecipesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-recipes", [], null, null, null, View_RecipesComponent_0, RenderType_RecipesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RecipesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-recipes", _recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"], View_RecipesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/recipes/recipes.module.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RecipesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModuleNgFactory", function() { return RecipesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.module */ "./src/app/recipes/recipes.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _recipes_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes.component.ngfactory */ "./src/app/recipes/recipes.component.ngfactory.js");
/* harmony import */ var _recipe_start_recipe_start_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-start/recipe-start.component.ngfactory */ "./src/app/recipes/recipe-start/recipe-start.component.ngfactory.js");
/* harmony import */ var _recipe_edit_recipe_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component.ngfactory */ "./src/app/recipes/recipe-edit/recipe-edit.component.ngfactory.js");
/* harmony import */ var _recipe_detail_recipe_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component.ngfactory */ "./src/app/recipes/recipe-detail/recipe-detail.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recipes-routing.module */ "./src/app/recipes/recipes-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _store_recipe_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/recipe.reducers */ "./src/app/recipes/store/recipe.reducers.ts");
/* harmony import */ var _store_recipe_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/recipe.effects */ "./src/app/recipes/store/recipe.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "@ngrx/effects");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var RecipesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_recipes_module__WEBPACK_IMPORTED_MODULE_1__["RecipesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _recipes_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RecipesComponentNgFactory"], _recipe_start_recipe_start_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RecipeStartComponentNgFactory"], _recipe_edit_recipe_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RecipeEditComponentNgFactory"], _recipe_detail_recipe_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _recipes_routing_module__WEBPACK_IMPORTED_MODULE_12__["RecipesRoutingModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_12__["RecipesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_m"], function () { return [{}]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["STORE_FEATURES"], function () { return [{ key: "recipes", reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["combineReducers"], metaReducers: [], initialState: undefined }]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_n"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["STORE_FEATURES"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_l"], function () { return [_store_recipe_reducers__WEBPACK_IMPORTED_MODULE_14__["recipeReducer"]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_o"], function (p0_0) { return [p0_0]; }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_l"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["FEATURE_REDUCERS"], function (p0_0, p0_1, p0_2) { return [_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_u"](p0_0, p0_1, p0_2)]; }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_l"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_o"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073873408, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreFeatureModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ɵngrx_modules_store_store_n"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["FEATURE_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _store_recipe_effects__WEBPACK_IMPORTED_MODULE_15__["RecipeEffects"], _store_recipe_effects__WEBPACK_IMPORTED_MODULE_15__["RecipeEffects"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_effects_effects_e"], function (p0_0) { return [_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_effects_effects_a"](p0_0)]; }, [_store_recipe_effects__WEBPACK_IMPORTED_MODULE_15__["RecipeEffects"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_effects_effects_c"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_effects_effects_c"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_effects_effects_b"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_effects_effects_e"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreFeatureModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _recipes_module__WEBPACK_IMPORTED_MODULE_1__["RecipesModule"], _recipes_module__WEBPACK_IMPORTED_MODULE_1__["RecipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[{ path: "", component: _recipes_component__WEBPACK_IMPORTED_MODULE_18__["RecipesComponent"], children: [{ path: "", component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_19__["RecipeStartComponent"] }, { path: "new", component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_20__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }, { path: ":id", component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_21__["RecipeDetailComponent"] }, { path: ":id/edit", component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_20__["RecipeEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    return RecipesModule;
}());



/***/ }),

/***/ "./src/app/recipes/store/recipe.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.actions.ts ***!
  \*************************************************/
/*! exports provided: SET_RECIPES, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE, STORE_RECIPES, FETCH_RECIPES, SetRecipes, AddRecipe, UpdateRecipe, DeleteRecipe, StoreRecipes, FetchRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECIPES", function() { return SET_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECIPE", function() { return ADD_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECIPE", function() { return UPDATE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RECIPE", function() { return DELETE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_RECIPES", function() { return STORE_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES", function() { return FETCH_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecipes", function() { return SetRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipe", function() { return AddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRecipe", function() { return UpdateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecipe", function() { return DeleteRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRecipes", function() { return StoreRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipes", function() { return FetchRecipes; });
var SET_RECIPES = 'SET_RECIPES';
var ADD_RECIPE = 'ADD_RECIPE';
var UPDATE_RECIPE = 'UPDATE_RECIPE';
var DELETE_RECIPE = 'DELETE_RECIPE';
var STORE_RECIPES = 'STORE_RECIPES';
var FETCH_RECIPES = 'FETCH_RECIPES';
var SetRecipes = /** @class */ (function () {
    function SetRecipes(payload) {
        this.payload = payload;
        this.type = SET_RECIPES;
    }
    return SetRecipes;
}());

var AddRecipe = /** @class */ (function () {
    function AddRecipe(payload) {
        this.payload = payload;
        this.type = ADD_RECIPE;
    }
    return AddRecipe;
}());

var UpdateRecipe = /** @class */ (function () {
    function UpdateRecipe(payload) {
        this.payload = payload;
        this.type = UPDATE_RECIPE;
    }
    return UpdateRecipe;
}());

var DeleteRecipe = /** @class */ (function () {
    function DeleteRecipe(payload) {
        this.payload = payload;
        this.type = DELETE_RECIPE;
    }
    return DeleteRecipe;
}());

var StoreRecipes = /** @class */ (function () {
    function StoreRecipes() {
        this.type = STORE_RECIPES;
    }
    return StoreRecipes;
}());

var FetchRecipes = /** @class */ (function () {
    function FetchRecipes() {
        this.type = FETCH_RECIPES;
    }
    return FetchRecipes;
}());



/***/ }),

/***/ "./src/app/recipes/store/recipe.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.effects.ts ***!
  \*************************************************/
/*! exports provided: RecipeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEffects", function() { return RecipeEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "@ngrx/effects");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeEffects = /** @class */ (function () {
    function RecipeEffects(actions$, httpClient, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.store = store;
        this.recipeFetch = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (action) {
            return _this.httpClient.get('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (recipes) {
            console.log(recipes);
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return {
                type: _store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["SET_RECIPES"],
                payload: recipes
            };
        }));
        this.recipeStore = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_store_recipe_actions__WEBPACK_IMPORTED_MODULE_4__["STORE_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store.select('recipes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_a) {
            var action = _a[0], state = _a[1];
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', state.recipes, { reportProgress: true });
            return _this.httpClient.request(req);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])(),
        __metadata("design:type", Object)
    ], RecipeEffects.prototype, "recipeFetch", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RecipeEffects.prototype, "recipeStore", void 0);
    return RecipeEffects;
}());



/***/ }),

/***/ "./src/app/recipes/store/recipe.reducers.ts":
/*!**************************************************!*\
  !*** ./src/app/recipes/store/recipe.reducers.ts ***!
  \**************************************************/
/*! exports provided: recipeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeReducer", function() { return recipeReducer; });
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialState = {
    recipes: [
        new _recipe_model__WEBPACK_IMPORTED_MODULE_0__["Recipe"]('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Meat', 1),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('French Fries', 20)
        ]),
        new _recipe_model__WEBPACK_IMPORTED_MODULE_0__["Recipe"]('Big Fat Burger', 'What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Buns', 2),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Meat', 1)
        ])
    ]
};
function recipeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["SET_RECIPES"]):
            return __assign({}, state, { recipes: action.payload.slice() });
        case (_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_RECIPE"]):
            return __assign({}, state, { recipes: state.recipes.concat([action.payload]) });
        case (_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RECIPE"]):
            var recipe = state.recipes[action.payload.index];
            var updatedRecipe = __assign({}, recipe, action.payload.updatedRecipe);
            var recipes = state.recipes.slice();
            recipes[action.payload.index] = updatedRecipe;
            return __assign({}, state, { recipes: recipes });
        case (_recipe_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_RECIPE"]):
            var oldRecipes = state.recipes.slice();
            oldRecipes.splice(action.payload, 1);
            return __assign({}, state, { recipes: oldRecipes });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/auth.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(store) {
        this.store = store;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log('Intercepted!', req);
        // const copiedReq = req.clone({headers: req.headers.set('', '')});
        return this.store.select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (authState) {
            var copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
            return next.handle(copiedReq);
        }));
        // return null;
    };
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/logging.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/logging.interceptor.ts ***!
  \***********************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);

var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (event) {
            console.log('Logging interceptor', event);
        }));
    };
    return LoggingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_ShoppingEditComponent, View_ShoppingEditComponent_0, View_ShoppingEditComponent_Host_0, ShoppingEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShoppingEditComponent", function() { return RenderType_ShoppingEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShoppingEditComponent_0", function() { return View_ShoppingEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShoppingEditComponent_Host_0", function() { return View_ShoppingEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponentNgFactory", function() { return ShoppingEditComponentNgFactory; });
/* harmony import */ var _shopping_edit_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-edit.component.css.shim.ngstyle */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ShoppingEditComponent = [_shopping_edit_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShoppingEditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShoppingEditComponent, data: {} });

function View_ShoppingEditComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDelete() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Delete"]))], null, null); }
function View_ShoppingEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { slForm: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 39, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 38, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 37, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, [[1, 4], ["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "div", [["class", "col-sm-5 form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "label", [["for", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 7, "input", [["class", "form-control"], ["id", "name"], ["name", "name"], ["ngModel", ""], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 12, "div", [["class", "col-sm-2 form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "label", [["for", "amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 9, "input", [["class", "form-control"], ["id", "amount"], ["name", "amount"], ["ngModel", ""], ["pattern", "^[1-9]+[0-9]*$"], ["required", ""], ["type", "number"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 6, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "button", [["class", "btn btn-success"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShoppingEditComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Clear"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 14, 0, currVal_15); var currVal_16 = "name"; var currVal_17 = ""; _ck(_v, 17, 0, currVal_16, currVal_17); var currVal_27 = ""; _ck(_v, 26, 0, currVal_27); var currVal_28 = "^[1-9]+[0-9]*$"; _ck(_v, 27, 0, currVal_28); var currVal_29 = "amount"; var currVal_30 = ""; _ck(_v, 30, 0, currVal_29, currVal_30); var currVal_33 = _co.editMode; _ck(_v, 38, 0, currVal_33); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).required ? "" : null); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).pattern : null); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 23, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_31 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).valid; _ck(_v, 35, 0, currVal_31); var currVal_32 = (_co.editMode ? "Update" : "Add"); _ck(_v, 36, 0, currVal_32); }); }
function View_ShoppingEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shopping-edit", [], null, null, null, View_ShoppingEditComponent_0, RenderType_ShoppingEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingEditComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShoppingEditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shopping-edit", _shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingEditComponent"], View_ShoppingEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");





var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(store) {
        this.store = store;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('shoppingList')
            .subscribe(function (data) {
            if (data.editedIngredientIndex > -1) {
                _this.editedItem = data.editedIngredient;
                _this.editMode = true;
                _this.slForm.setValue({
                    name: _this.editedItem.name,
                    amount: _this.editedItem.amount
                });
            }
            else {
                _this.editMode = false;
            }
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateIngredient"]({ ingredient: newIngredient }));
        }
        else {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddIngredient"](newIngredient));
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteIngredient"]());
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["StopEdit"]());
        this.subscription.unsubscribe();
    };
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_ShoppingListComponent, View_ShoppingListComponent_0, View_ShoppingListComponent_Host_0, ShoppingListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShoppingListComponent", function() { return RenderType_ShoppingListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShoppingListComponent_0", function() { return View_ShoppingListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShoppingListComponent_Host_0", function() { return View_ShoppingListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponentNgFactory", function() { return ShoppingListComponentNgFactory; });
/* harmony import */ var _shopping_list_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-list.component.css.shim.ngstyle */ "./src/app/shopping-list/shopping-list.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopping_edit_shopping_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component.ngfactory */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ngfactory.js");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ShoppingListComponent = [_shopping_list_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShoppingListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShoppingListComponent, data: {} });

function View_ShoppingListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["class", "list-group-item"], ["style", "cursor: pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEditItem(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " (", ") "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; var currVal_1 = _v.context.$implicit.amount; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ShoppingListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "col-xs-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-shopping-edit", [], null, null, null, _shopping_edit_shopping_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ShoppingEditComponent_0"], _shopping_edit_shopping_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ShoppingEditComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingEditComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "ul", [["class", "list-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ShoppingListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform(_co.shoppingListState)).ingredients; _ck(_v, 7, 0, currVal_0); }, null); }
function View_ShoppingListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shopping-list", [], null, null, null, View_ShoppingListComponent_0, RenderType_ShoppingListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shopping_list_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingListComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShoppingListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shopping-list", _shopping_list_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingListComponent"], View_ShoppingListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "@ngrx/store");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(store) {
        this.store = store;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.shoppingListState = this.store.select('shoppingList');
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["StartEdit"](index));
    };
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
var ShoppingListModule = /** @class */ (function () {
    function ShoppingListModule() {
    }
    return ShoppingListModule;
}());



/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.actions.ts ***!
  \**************************************************************/
/*! exports provided: ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
var ADD_INGREDIENT = 'ADD_INGREDIENT';
var ADD_INGREDIENTS = 'ADD_INGREDIENTS';
var UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
var DELETE_INGREDIENT = 'DELETE_INGREDIENT';
var START_EDIT = 'START_EDIT';
var STOP_EDIT = 'STOP_EDIT';
var AddIngredient = /** @class */ (function () {
    function AddIngredient(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
    return AddIngredient;
}());

var AddIngredients = /** @class */ (function () {
    function AddIngredients(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
    return AddIngredients;
}());

var UpdateIngredient = /** @class */ (function () {
    function UpdateIngredient(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
    return UpdateIngredient;
}());

var DeleteIngredient = /** @class */ (function () {
    function DeleteIngredient() {
        this.type = DELETE_INGREDIENT;
    }
    return DeleteIngredient;
}());

var StartEdit = /** @class */ (function () {
    function StartEdit(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
    return StartEdit;
}());

var StopEdit = /** @class */ (function () {
    function StopEdit() {
        this.type = STOP_EDIT;
    }
    return StopEdit;
}());



/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.reducers.ts":
/*!***************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.reducers.ts ***!
  \***************************************************************/
/*! exports provided: shoppingListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingListReducer", function() { return shoppingListReducer; });
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var initialState = {
    ingredients: [
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Apples', 5),
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function shoppingListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_INGREDIENT"]:
            return __assign({}, state, { ingredients: state.ingredients.concat([action.payload]) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_INGREDIENTS"]:
            return __assign({}, state, { ingredients: state.ingredients.concat(action.payload) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_INGREDIENT"]:
            var ingredient = state.ingredients[state.editedIngredientIndex];
            var updatedIngredient = __assign({}, ingredient, action.payload.ingredient);
            var ingredients = state.ingredients.slice();
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return __assign({}, state, { ingredients: ingredients, editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_INGREDIENT"]:
            var oldIngredients = state.ingredients.slice();
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return __assign({}, state, { ingredients: oldIngredients, editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__["START_EDIT"]:
            var editedIngredient = __assign({}, state.ingredients[action.payload]);
            return __assign({}, state, { editedIngredient: editedIngredient, editedIngredientIndex: action.payload });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__["STOP_EDIT"]:
            return __assign({}, state, { editedIngredient: null, editedIngredientIndex: -1 });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _app_recipes_recipes_module_ngfactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/recipes/recipes.module.ngfactory.js */ "./src/app/recipes/recipes.module.ngfactory.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_4__["AppServerModule"]; });





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}

var LAZY_MODULE_MAP = { "./recipes/recipes.module#RecipesModule": _app_recipes_recipes_module_ngfactory_js__WEBPACK_IMPORTED_MODULE_1__["RecipesModuleNgFactory"] };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/talles/Documents/Cursos/Angular6-Udemy/ng-universal-01-start/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ngrx/effects":
/*!********************************!*\
  !*** external "@ngrx/effects" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngrx/effects");

/***/ }),

/***/ "@ngrx/router-store":
/*!*************************************!*\
  !*** external "@ngrx/router-store" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngrx/router-store");

/***/ }),

/***/ "@ngrx/store":
/*!******************************!*\
  !*** external "@ngrx/store" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngrx/store");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map