webpackJsonp([1],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]),
            ],
        })
    ], MessagePageModule);
    return MessagePageModule;
}());

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\myApp\src\pages\message\message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>消息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://cms-bucket.nosdn.127.net/2018/10/10/87721bba79894968bc716db28e926846.jpeg" alt="">\n      </ion-avatar>\n      <div>\n        <h2>极客工坊</h2>\n        <p>XX:哈哈，笑死了</p>\n      </div>\n      <div item-end>\n        <p>14:22</p>\n        <ion-badge>23</ion-badge>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://cms-bucket.nosdn.127.net/2018/10/10/87721bba79894968bc716db28e926846.jpeg" alt="">\n      </ion-avatar>\n      <div>\n        <h2>极客工坊</h2>\n        <p>XX:哈哈，笑死了</p>\n      </div>\n      <div item-end>\n        <p>14:22</p>\n        <ion-badge>23</ion-badge>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://cms-bucket.nosdn.127.net/2018/10/10/87721bba79894968bc716db28e926846.jpeg" alt="">\n      </ion-avatar>\n      <div>\n        <h2>极客工坊</h2>\n        <p>XX:哈哈，笑死了</p>\n      </div>\n      <div item-end>\n        <p>14:22</p>\n        <ion-badge>23</ion-badge>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\myApp\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=1.js.map