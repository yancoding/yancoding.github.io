webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_message__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mine_mine__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tabRoots = [
            {
                root: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */],
                tabTitle: "主页",
                tabIcon: "home"
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_1__message_message__["a" /* MessagePage */],
                tabTitle: "消息",
                tabIcon: "notifications"
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_2__mine_mine__["a" /* MinePage */],
                tabTitle: "我的",
                tabIcon: "person"
            },
        ];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab *ngFor="let tabRoot of tabRoots" [root]="tabRoot.root" tabTitle="{{tabRoot.tabTitle}}" tabIcon="{{tabRoot.tabIcon}}"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.message = [{
                profile_image: "http://wimg.spriteapp.cn/profile/large/2018/02/07/5a7b1171a0797_mini.jpg",
                name: "木棉花的春天丶",
                message: "为什么美国人从不给手机贴膜，中国人却一定要贴？",
                time: "10:08",
                total: "1"
            }, {
                profile_image: "http://wimg.spriteapp.cn/profile/large/2017/03/01/58b6ed2126d85_mini.jpg",
                name: "搞笑内涵侠",
                message: "有这样的老师，就是不放学也值了",
                time: "23:56",
                total: "3"
            }, {
                profile_image: "http://wimg.spriteapp.cn/profile/large/2016/10/07/57f7b339ed872_mini.jpg",
                name: "孤独的时候给我打电话",
                message: "这扣篮碉堡了，算分不",
                time: "13:32",
                total: "6"
            }];
    }
    MessagePage.prototype.delete = function (i) {
        this.message.splice(i, 1);
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\app\src\pages\message\message.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      消息\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n    <ion-item-sliding *ngFor="let item of message; let i = index">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{item.profile_image}}" alt="">\n        </ion-avatar>\n        <div>\n          <h2>{{item.name}}</h2>\n          <p>{{item.message}}</p>\n        </div>\n        <div item-end>\n          <p>{{item.time}}</p>\n          <ion-badge>{{item.total}}</ion-badge>\n        </div>\n      </ion-item>\n      <ion-item-options slide="right">\n        <!-- <button ion-button>置顶</button> -->\n        <button ion-button color="danger" (click)="delete(i)">删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\app\src\pages\message\message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinePage = /** @class */ (function () {
    function MinePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mine',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\app\src\pages\mine\mine.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      我的\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="http://wimg.spriteapp.cn/profile/large/2016/10/07/57f7b339ed872_mini.jpg" alt="">\n          </ion-avatar>\n          <div>\n            <h2>yancoding</h2>\n            <ion-note><p>简介：一言不发</p></ion-note>\n          </div>\n        </ion-item>\n      </ion-card>\n      <ion-item-divider color="light">设置</ion-item-divider>\n      <ion-item>\n        <ion-label>夜间模式</ion-label>\n        <ion-toggle></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>大字体</ion-label>\n        <ion-toggle></ion-toggle>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\app\src\pages\mine\mine.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MinePage);
    return MinePage;
}());

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.data = [{
                id: 0,
                type: 1,
                page: 1,
                title: "推荐",
                data: []
            }, {
                id: 1,
                type: 2,
                page: 1,
                title: "文字",
                data: []
            }, {
                id: 2,
                type: 3,
                page: 1,
                title: "图片",
                data: []
            }];
        this.home = 0;
        this.requestData(0);
        this.requestData(1);
        this.requestData(2);
    }
    // 请求数据并push到data
    HomePage.prototype.requestData = function (index) {
        var _this = this;
        var url = "https://www.apiopen.top/satinApi?type=" + this.data[index].type + "&page=" + this.data[index].page;
        this.http.request(url)
            .subscribe(function (res) {
            var reqData = res.json().data;
            for (var i = 0; i < reqData.length; i++) {
                _this.data[index].data.push(reqData[i]);
            }
        });
        console.log(this.data[index].data);
    };
    // 图片模态框
    HomePage.prototype.presentModal = function (url) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], { url: url });
        modal.present();
    };
    // 下拉刷新
    HomePage.prototype.doRefresh = function (index, refresher) {
        this.data[index].page = 1;
        this.data[index].data = [];
        this.requestData(index);
        console.log(refresher.deltaY);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    // 上拉加载
    HomePage.prototype.doInfinite = function (index, infiniteScroll) {
        this.data[index].page++;
        this.requestData(index);
        setTimeout(function () {
            infiniteScroll.complete();
        }, 2000);
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-title>主页</ion-title> -->\n    <ion-segment [(ngModel)]="home">\n      <ion-segment-button *ngFor="let item of data" [value]="item.id">{{item.title}}</ion-segment-button>\n    </ion-segment>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- 上拉刷新 -->\n  <ion-refresher (ionRefresh)="doRefresh(home,$event)"\n  pullMax="400">\n    <ion-refresher-content\n    inactiveText="..."\n    pullingIcon="arrow-dropdown"\n    pullingText="下拉刷新"\n    refreshingSpinner="circles"\n    refreshingText="刷新..."\n    ></ion-refresher-content>\n  </ion-refresher>\n  <!-- 主页内容 -->\n  <div *ngIf="data[home].data == undefined" style="text-align: center">\n    <ion-note>暂无数据</ion-note>\n  </div>\n  <div [(ngSwitch)]="home">\n    <div *ngFor="let case of data">\n      <div *ngSwitchCase="case.id">\n        <ion-card *ngFor="let item of case.data">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{item.profile_image}}" alt="">\n            </ion-avatar>\n            <div>{{item.name}}</div>\n            <ion-note>\n              {{item.passtime}}\n            </ion-note>\n          </ion-item>\n          <ion-item>\n            <div text-wrap>{{item.text}}</div>\n          </ion-item>\n          <ion-item *ngIf="item.cdn_img!=null" class="img-container" (click)="presentModal(item.cdn_img)">\n            <img src="{{item.cdn_img}}" alt="">\n            <ion-fab right bottom *ngIf="item.height>240">\n              <button ion-fab mini round>长图</button>\n            </ion-fab>\n          </ion-item>\n          <ion-row>\n            <ion-col>\n              <button ion-button clear color="dark">\n                <ion-icon name="share-alt"></ion-icon>\n                {{item.repost}}\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button clear color="dark">\n                <ion-icon name="text"></ion-icon>\n                {{item.comment}}\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button clear color="dark">\n                <ion-icon name="thumbs-up"></ion-icon>\n                {{item.love}}\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n        \n      \n    </div>\n    \n  </div>\n      \n  <!-- 下拉加载更多 -->\n  <ion-infinite-scroll (ionInfinite)="doInfinite(home,$event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.url = params.get("url");
        console.log(this.url);
    }
    ModalPage.prototype.ionViewDidLoad = function () {
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\app\src\pages\modal\modal.html"*/'<ion-content navPop>\n\n	<img src="{{url}}" alt="" style="display: inline-block;">\n\n</ion-content>'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\app\src\pages\modal\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_message_message__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mine_mine__["a" /* MinePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__["a" /* ModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Personal\Desktop\project\ionic\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Personal\Desktop\project\ionic\app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map