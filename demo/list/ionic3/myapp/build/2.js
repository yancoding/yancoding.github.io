webpackJsonp([2],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoveryPageModule", function() { return DiscoveryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discovery__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscoveryPageModule = /** @class */ (function () {
    function DiscoveryPageModule() {
    }
    DiscoveryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__discovery__["a" /* DiscoveryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discovery__["a" /* DiscoveryPage */]),
            ],
        })
    ], DiscoveryPageModule);
    return DiscoveryPageModule;
}());

//# sourceMappingURL=discovery.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(194);
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
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiscoveryPage = /** @class */ (function () {
    function DiscoveryPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.discovery = "text";
        this.textData = {
            code: undefined,
            msg: "",
            data: []
        };
        this.picData = {
            code: undefined,
            msg: "",
            data: []
        };
        this.videoData = null;
    }
    DiscoveryPage.prototype.updateTextData = function () {
        var _this = this;
        this.http.request('https://www.apiopen.top/satinApi?type=2&page=1')
            .subscribe(function (res) {
            _this.textData = res.json();
        });
    };
    DiscoveryPage.prototype.updatePicData = function () {
        var _this = this;
        this.http.request('https://www.apiopen.top/satinApi?type=3&page=1')
            .subscribe(function (res) {
            _this.picData = res.json();
        });
    };
    DiscoveryPage.prototype.updateVideoData = function () {
        var _this = this;
        this.http.request('https://www.apiopen.top/satinApi?type=4&page=1')
            .subscribe(function (res) {
            _this.videoData = res.json();
        });
    };
    DiscoveryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DiscoveryPage');
        this.http.request('https://www.apiopen.top/satinApi?type=2&page=1')
            .subscribe(function (res) {
            _this.textData = res.json();
        });
    };
    DiscoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discovery',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\myApp\src\pages\discovery\discovery.html"*/'<!--\n  Generated template for the DiscoveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>发现</ion-title>\n    <ion-segment [(ngModel)]="discovery">\n      <ion-segment-button value="text" (click)="updateTextData()">文字</ion-segment-button>\n      <ion-segment-button value="picture" (click)="updatePicData()">图片</ion-segment-button>\n      <ion-segment-button value="video">视频</ion-segment-button>\n    </ion-segment>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <div [ngSwitch]="discovery">\n    <ion-list *ngSwitchCase="\'text\'">\n      <ion-card ion-item *ngFor="let item of textData.data">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="item.profile_image" alt="">\n          </ion-avatar>\n          <h2>{{item.name}}</h2>\n          <ion-note>{{item.created_at}}</ion-note>\n        </ion-item>\n        <ion-card-content>\n          <p text-wrap>{{item.text}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>{{item.love}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="thumbs-down"></ion-icon>\n              <div>{{item.hate}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="share-alt"></ion-icon>\n              <div>{{item.repost}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="text"></ion-icon>\n              <div>{{item.comment}}</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'picture\'">\n      <ion-card ion-item *ngFor="let item of picData.data">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="item.profile_image" alt="">\n          </ion-avatar>\n          <h2>{{item.name}}</h2>\n          <ion-note>{{item.created_at}}</ion-note>\n        </ion-item>\n        <img [src]="item.cdn_img" alt="" style="height: 50%">\n        <ion-card-content>\n          <p text-wrap>{{item.text}}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>{{item.love}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="thumbs-down"></ion-icon>\n              <div>{{item.hate}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="share-alt"></ion-icon>\n              <div>{{item.repost}}</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear icon-start small color="dark">\n              <ion-icon name="text"></ion-icon>\n              <div>{{item.comment}}</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'video\'">\n      视频\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\myApp\src\pages\discovery\discovery.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
    ], DiscoveryPage);
    return DiscoveryPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=discovery.js.map

/***/ })

});
//# sourceMappingURL=2.js.map