webpackJsonp([3],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionPageModule", function() { return AttentionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attention__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AttentionPageModule = /** @class */ (function () {
    function AttentionPageModule() {
    }
    AttentionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__attention__["a" /* AttentionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__attention__["a" /* AttentionPage */]),
            ],
        })
    ], AttentionPageModule);
    return AttentionPageModule;
}());

//# sourceMappingURL=attention.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttentionPage; });
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
 * Generated class for the AttentionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttentionPage = /** @class */ (function () {
    function AttentionPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.news = "toutiao";
        this.newsMap = [
            { value: "toutiao", name: "头条" },
            { value: "auto", name: "汽车" },
            { value: "money", name: "财经" },
            { value: "sports", name: "运动" },
            { value: "dy", name: "电影" },
            { value: "war", name: "军事" },
            { value: "ent", name: "娱乐" },
            { value: "tech", name: "教育" }
        ];
        this.picData = {
            code: undefined,
            msg: "",
            data: []
        };
        this.newsData = {
            code: undefined,
            msg: "",
            data: []
        };
    }
    AttentionPage.prototype.updatePicData = function () {
        var _this = this;
        this.http.request('https://www.apiopen.top/meituApi?page=1')
            .subscribe(function (res) {
            _this.picData = res.json();
            console.log(_this.picData);
        });
    };
    AttentionPage.prototype.updateNewsData = function () {
        var _this = this;
        this.http.request('https://www.apiopen.top/journalismApi')
            .subscribe(function (res) {
            _this.newsData = res.json();
            console.log(_this.newsData);
        });
    };
    AttentionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AttentionPage');
        this.http.request('https://www.apiopen.top/journalismApi')
            .subscribe(function (res) {
            _this.newsData = res.json();
            console.log(_this.newsData);
        });
    };
    AttentionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attention',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\myApp\src\pages\attention\attention.html"*/'<!--\n  Generated template for the AttentionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>关注</ion-title>\n    <ion-buttons end>\n    	<button ion-button clear only-icon>\n    		<ion-icon name="search"></ion-icon>\n    	</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <ion-segment [(ngModel)]="news">\n      <ion-segment-button *ngFor="let item of newsMap" [value]="item.value">{{item.name}}</ion-segment-button>\n    </ion-segment>  \n  </div>\n  <div [ngSwitch]="news">\n    <div *ngFor="let item1 of newsMap">\n      <ion-list *ngSwitchCase="item1.value">\n        <ion-item *ngFor="let item2 of newsData.data[item1.value]">\n          <h2 text-wrap>{{item2.title}}</h2><br>\n          <p align-self-end>{{item2.source}}</p>\n          <ion-thumbnail item-end *ngIf="item2.picInfo.length!=0">\n            <img [src]="item2.picInfo[0].url" alt="">\n          </ion-thumbnail>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  \n	<!-- <ion-card *ngFor="let pic of picData.data">\n		<img [src]="pic.url" alt="">\n		<ion-list>\n			<ion-item>{{pic.publishedAt}}</ion-item>\n		</ion-list>\n	</ion-card> -->\n\n</ion-content>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\myApp\src\pages\attention\attention.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
    ], AttentionPage);
    return AttentionPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=attention.js.map

/***/ })

});
//# sourceMappingURL=3.js.map