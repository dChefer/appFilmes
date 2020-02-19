webpackJsonp([6],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, formBuilder, alertCtrl, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.inicializar();
    }
    LoginPage.prototype.inicializar = function () {
        this.formLogin = this.formBuilder.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            senha: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]],
        });
        this.email = this.formLogin.controls["email"];
        this.senha = this.formLogin.controls["senha"];
    };
    LoginPage.prototype.submitLogin = function () {
        if (!this.formLogin.valid) {
            var toast = this.toastCtrl.create({
                message: "Deu erro no Login!",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else {
            this.alert("Aeeeee \o/ TMJ!!");
            this.logar();
        }
    };
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.formLogin.value.email, this.formLogin.value.senha)
            .then(function (data) {
            _this.alert("Chega mais coleguinha!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            _this.alert(error);
        });
    };
    LoginPage.prototype.alert = function (mensagem) {
        this.alertCtrl.create({
            title: "FIQUE DE OLHO o_0",
            subTitle: mensagem,
            buttons: ["Fechar"]
        })
            .present();
    };
    LoginPage.prototype.registrarUsuario = function () {
        this.navCtrl.push("CadastroPage");
    };
    LoginPage.prototype.logarGoogle = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.GoogleAuthProvider)
            .then(function (data) {
            _this.alert("Logado com Google");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            _this.alert(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/login/login.html"*/'<ion-content padding>\n\n    <img src="../assets/imgs/pipoca2.png" alt="logo">\n    <form [formGroup]="formLogin" (submit)="submitLogin()">\n        <div class="slide-inter ion-padding ">\n            <ion-item>\n                <ion-label class="email" style="color: #fff">E-mail</ion-label>\n                <ion-input type="text" formControlName="email"></ion-input>\n            </ion-item>\n            <small *ngIf="email.hasError(\'email\')  && email.touched" ion-text color="turq">\n                    *Formato de Email Inválido!\n                 </small>\n            <ion-item>\n                <ion-label class="senha" style="color: #fff">Senha</ion-label>\n                <ion-input type="password" formControlName="senha"></ion-input>\n            </ion-item>\n            <small *ngIf="senha.hasError(\'required\') && senha.touched" ion-text color="turq">\n                    *Campo Obrigatório\n                </small>\n            <small *ngIf="senha.hasError(\'minlength\')" ion-text color="danger">\n                        *Campo deve conter minimo 6caracteres!\n                    </small>\n        </div>\n        <button ion-button type="submit" color="gold" (click)="logar()">\n                <ion-icon name="log-in"> Entrar</ion-icon>\n            </button>\n\n        <button ion-button type="button" color="jeans" (click)="registrarUsuario()">\n            <ion-icon name="add-circle"> Cadastrar</ion-icon>\n        </button>\n    </form>\n    <br>\n    <br>\n    <br>\n    <h2>Logar com:</h2>\n    <button ion-button full color="danger" (click)="logarGoogle()">\n      <ion-icon name="logo-google" >oogle</ion-icon>\n    </button>\n\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistirFilmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proxie_filme__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_filmes_filmes__ = __webpack_require__(65);
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
 * Generated class for the AssistirFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssistirFilmePage = /** @class */ (function () {
    function AssistirFilmePage(navCtrl, navParams, loadingCtrl, filmesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.filmesProvider = filmesProvider;
        this.FilmeProxie = new __WEBPACK_IMPORTED_MODULE_2__proxie_filme__["a" /* FilmeProxie */]();
        this.filme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]();
        this.filme = this.navParams.get("filme");
        this.presentLoading();
    }
    AssistirFilmePage.prototype.ionViewDidLoad = function () {
        console.log('AssistirFilmePage');
    };
    AssistirFilmePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Prepare a pipoca!! Que ja vai começar...",
            duration: 5000
        });
        loader.present();
    };
    AssistirFilmePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assistir-filme',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/assistir-filme/assistir-filme.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Asssistindo: {{this.filme.nome}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="loading">\n        <h3 data-text="Loading...">Loading...</h3>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/assistir-filme/assistir-filme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_filmes_filmes__["a" /* FilmesProvider */]])
    ], AssistirFilmePage);
    return AssistirFilmePage;
}());

//# sourceMappingURL=assistir-filme.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmeProxie; });
var FilmeProxie = /** @class */ (function () {
    function FilmeProxie() {
    }
    return FilmeProxie;
}());

//# sourceMappingURL=filme.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-filmes/add-filmes.module": [
		502,
		5
	],
	"../pages/assistir-filme/assistir-filme.module": [
		504,
		4
	],
	"../pages/cadastro/cadastro.module": [
		503,
		1
	],
	"../pages/editar-filme/editar-filme.module": [
		506,
		0
	],
	"../pages/list/list.module": [
		505,
		3
	],
	"../pages/login/login.module": [
		507,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_filmes_add_filmes__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(271);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__add_filmes_add_filmes__["a" /* AddFilmesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Lista" tabIcon="md-list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Add Filme" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/contact/contact.html"*/'<ion-content>\n    <div class="container">\n        <div class="card">\n            <div class="face face1">\n                <div class="content">\n                    <img src="/assets/imgs/icon.png">\n                    <h4>Informarções</h4>\n                </div>\n            </div>\n            <div class="face face2">\n                <div class="content">\n                    <p>\n                        Programa gratuito para catalogar seus filmes e ter maior controle sobre os títulos presentes no disco rígido.<br> A aplicação é totalmente em português e faz uso de bancos de dados, garantindo a disponibilidade do maior número\n                        de títulos possível. Permite que o usuário catalogue a coleção de filmes. Além de possuir uma interface simples.\n\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="card">\n            <div class="face face1">\n                <div class="content">\n                    <img src="/assets/imgs/win.png">\n                    <h4>Alunos</h4>\n                </div>\n            </div>\n            <div class="face face2">\n                <div class="content">\n                    <p>\n                        <ion-icon name="person"> Alessandro Haymann</ion-icon>\n                        <br>\n                        <ion-icon name="person"> Dalmar C. Guimaraẽs</ion-icon>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_assistir_filme_assistir_filme__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_add_filmes_add_filmes__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_filmes_filmes__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_lista_lista__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyAHHbQGg-qMs4u7jk2z-8zWVnD8xY_RFNs",
    authDomain: "appfilmes-a60a2.firebaseapp.com",
    databaseURL: "https://appfilmes-a60a2.firebaseio.com",
    projectId: "appfilmes-a60a2",
    storageBucket: "appfilmes-a60a2.appspot.com",
    messagingSenderId: "21112167621",
    appId: "1:21112167621:web:e83e0147c4fc42378ce4ac"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_add_filmes_add_filmes__["a" /* AddFilmesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_assistir_filme_assistir_filme__["a" /* AssistirFilmePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-filmes/add-filmes.module#AddFilmesPageModule', name: 'AddFilmesPage', segment: 'add-filmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assistir-filme/assistir-filme.module#AssistirFilmePageModule', name: 'AssistirFilmePage', segment: 'assistir-filme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-filme/editar-filme.module#EditarFilmePageModule', name: 'EditarFilmePage', segment: 'editar-filme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_add_filmes_add_filmes__["a" /* AddFilmesPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_assistir_filme_assistir_filme__["a" /* AssistirFilmePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_15__providers_filmes_filmes__["a" /* FilmesProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_lista_lista__["a" /* ListaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(315);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ListaProvider = /** @class */ (function () {
    function ListaProvider(http) {
        this.http = http;
        this.itens = [];
    }
    ListaProvider.prototype.getLista = function () {
        return this.itens;
    };
    ListaProvider.prototype.adicionar = function (item) {
        this.itens.push(item);
    };
    ListaProvider.prototype.remover = function (filme) {
        var _this = this;
        this.itens.forEach(function (item, index) {
            if (item == filme) {
                _this.itens.splice(index, 1);
            }
        });
    };
    ListaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ListaProvider);
    return ListaProvider;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FilmesProvider = /** @class */ (function () {
    function FilmesProvider(db) {
        this.db = db;
        this.PATH = "filmes/";
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid;
        console.log(this.user);
    }
    FilmesProvider.prototype.salvar = function (filme) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (filme.key) {
                console.log(filme);
                _this.db.list(_this.PATH).update(filme.key, {
                    genero: filme.genero,
                    nome: filme.nome,
                    duracao: filme.duracao,
                    classificacao: filme.classificacao,
                    diretor: filme.diretor
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH).push({
                    genero: filme.genero,
                    nome: filme.nome,
                    duracao: filme.duracao,
                    classificacao: filme.classificacao,
                    diretor: filme.diretor,
                    responsavel: _this.user
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    FilmesProvider.prototype.buscarTodos = function () {
        return this.db.list(this.PATH).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    FilmesProvider.prototype.buscarGenero = function (genero) {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("genero").equalTo(genero); }).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    FilmesProvider.prototype.buscar = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges().map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
    };
    FilmesProvider.prototype.excluir = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    FilmesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FilmesProvider);
    return FilmesProvider;
}());

//# sourceMappingURL=filmes.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_filmes_add_filmes__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_filmes_filmes__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assistir_filme_assistir_filme__ = __webpack_require__(153);
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
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, filmeProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filmeProvider = filmeProvider;
        this.alertCtrl = alertCtrl;
        this.shownGroup = null;
        this.usuario = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser;
        //console.log(this.usuario);
        this.filmes = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]();
        this.filmes = this.filmeProvider.buscarTodos();
    }
    ListPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    ListPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    ListPage.prototype.irParaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__add_filmes_add_filmes__["a" /* AddFilmesPage */]);
    };
    ListPage.prototype.editarFilme = function (filme) {
        this.navCtrl.push("EditarFilmePage", { filme: filme });
        console.log(filme);
    };
    ListPage.prototype.confirmarExcluir = function (key) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Você vai me excluir? :(',
            buttons: [{
                    text: "Sim",
                    handler: function () {
                        _this.excluirFilme(key);
                    }
                },
                {
                    text: "Não"
                }
            ]
        })
            .present();
    };
    ListPage.prototype.excluirFilme = function (key) {
        var _this = this;
        console.log(key);
        this.filmeProvider.excluir(key)
            .then(function () {
            _this.alert("Foi bom enquanto durou!!");
        })
            .catch(function () {
            _this.alert("Erro ao Excluir");
        });
    };
    ListPage.prototype.alert = function (mensagem) {
        this.alertCtrl.create({
            title: 'AVISO',
            subTitle: mensagem,
            buttons: ['OK']
        })
            .present();
    };
    ListPage.prototype.buscar = function () {
        this.filmesBusca = this.filmeProvider.buscarGenero(this.genero);
    };
    ListPage.prototype.assistir = function (filme) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__assistir_filme_assistir_filme__["a" /* AssistirFilmePage */], { filme: filme });
        console.log(filme);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/list/list.html"*/'<ion-content padding>\n    <ion-fab bottom right>\n        <button ion-fab color="jeans" (click)="irParaCadastro()">\n        <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-fab>\n    <ion-item class="usuario">\n        <h2>\n            <img *ngIf="usuario.photoURL != null" class="photo" [src]="usuario.photoURL"> Usuário:{{usuario.displayName}}\n        </h2>\n    </ion-item>\n\n    <ion-item type="item">\n        <ion-label>\n            Busca por Genero:\n        </ion-label>\n        <ion-select [(ngModel)]="genero">\n            <ion-option value="acao">Ação</ion-option>\n            <ion-option value="anime">Anime</ion-option>\n            <ion-option value="comedia">Comédia</ion-option>\n            <ion-option value="drama">Drama</ion-option>\n            <ion-option value="romance">Romance</ion-option>\n            <ion-option value="suspense">Suspense</ion-option>\n            <ion-option value="terror">Terror</ion-option>\n        </ion-select>\n    </ion-item>\n    <button ion-button full color="jeans" (click)="buscar()">Buscar</button>\n\n    <ion-list>\n        <h3>Lista de Filmes</h3>\n        <ion-item-sliding *ngFor="let filme of filmes |async; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n            <ion-item>\n                <h3>\n                    Filme: {{filme.nome}}\n                    <ion-icon item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'">\n                    </ion-icon>\n                </h3>\n                <div *ngIf="isGroupShown(i)">Gênero: {{filme.genero}}</div>\n                <div *ngIf="isGroupShown(i)">Duração: {{filme.duracao}} min</div>\n                <div *ngIf="isGroupShown(i)">Diretor: {{filme.diretor}}</div>\n                <div *ngIf="isGroupShown(i)">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col>\n                            </ion-col>\n                            <ion-col>\n                                <div>\n                                    <button ion-button icon-end color="jeans" (click)="assistir(filme)">\n                    Assistir \n                    <ion-icon name="videocam"></ion-icon>\n                  </button>\n                                </div>\n                            </ion-col>\n                            <ion-col>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="secondary" (click)="editarFilme(filme)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n                <button ion-button color="danger" (click)="confirmarExcluir(filme.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <h3>Itens encontrados:</h3>\n    <ion-list>\n        <ion-item *ngFor="let filmesBusca of filmesBusca |async">\n            <ion-label>{{filmesBusca.nome}}</ion-label>\n            <ion-label>{{filmesBusca.classificacao}} anos</ion-label>\n        </ion-item>\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_filmes_filmes__["a" /* FilmesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFilmesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proxie_filme__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filmes_filmes__ = __webpack_require__(65);
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
 * Generated class for the AddFilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFilmesPage = /** @class */ (function () {
    function AddFilmesPage(navCtrl, navParams, toastCtrl, formBuilder, filmeProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.filmeProvider = filmeProvider;
        this.alertCtrl = alertCtrl;
        this.initialize();
        this.FilmeProxie = new __WEBPACK_IMPORTED_MODULE_1__proxie_filme__["a" /* FilmeProxie */]();
    }
    AddFilmesPage.prototype.initialize = function () {
        this.form = this.formBuilder.group({
            genero: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            nome: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            classificacao: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            duracao: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            diretor: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
        this.genero = this.formBuilder["genero"];
        this.nome = this.form.controls["nome"];
        this.classificacao = this.formBuilder["classificacao"];
        this.duracao = this.formBuilder["duracao"];
        this.diretor = this.formBuilder["diretor"];
    };
    AddFilmesPage.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* ListPage */]);
    };
    AddFilmesPage.prototype.submitForm = function () {
        if (!this.form.valid) {
            var toast = this.toastCtrl.create({
                message: "Campos em Branco",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else {
            this.cadastrar();
        }
    };
    AddFilmesPage.prototype.cadastrar = function () {
        var _this = this;
        this.FilmeProxie.genero = this.form.value["genero"],
            this.FilmeProxie.nome = this.form.value["nome"],
            this.FilmeProxie.classificacao = this.form.value["classificacao"],
            this.FilmeProxie.duracao = this.form.value["duracao"],
            this.FilmeProxie.diretor = this.form.value["diretor"],
            this.filmeProvider.salvar(this.FilmeProxie)
                .then(function (data) {
                console.log(data);
                _this.alert("Aeee\o/ Bora assistir!");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* ListPage */]);
            }) //retorna o data
                .catch(function (error) {
                console.log(error);
                _this.alert("Erro ao Cadastrar!");
            });
    };
    AddFilmesPage.prototype.alert = function (mensagem) {
        this.alertCtrl.create({
            title: 'Aviso',
            subTitle: mensagem,
            buttons: ['OK']
        })
            .present();
    };
    AddFilmesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-filmes',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/add-filmes/add-filmes.html"*/'<ion-content padding>\n    <img src="../assets/imgs/pipoca2.png" alt="logo">\n    <form [formGroup]="form" (submit)="submitForm()">\n        <p>Adicionar um novo Filme</p>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="videocam">\n                    Nome do Filme\n                </ion-icon>\n            </ion-label>\n            <ion-input type="text" formControlName="nome"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="keypad">\n                    Gênero\n                </ion-icon>\n            </ion-label>\n            <ion-select formControlName="genero">\n                <ion-option value="acao">Ação</ion-option>\n                <ion-option value="anime">Anime</ion-option>\n                <ion-option value="comedia">Comédia</ion-option>\n                <ion-option value="drama">Drama</ion-option>\n                <ion-option value="romance">Romance</ion-option>\n                <ion-option value="suspense">Suspense</ion-option>\n                <ion-option value="terror">Terror</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="funnel">\n                    Classificação\n                </ion-icon>\n            </ion-label>\n            <ion-select formControlName="classificacao">\n                <ion-option value="livre">Livre</ion-option>\n                <ion-option value="10">10 anos</ion-option>\n                <ion-option value="12">12 anos</ion-option>\n                <ion-option value="14">14 anos</ion-option>\n                <ion-option value="16">16 anos</ion-option>\n                <ion-option value="18">18 anos</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="alarm">\n                    Duração\n                </ion-icon>\n            </ion-label>\n            <ion-input type="text" formControlName="duracao" style="text-align: left;"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="person">\n                    Diretor\n                </ion-icon>\n            </ion-label>\n            <ion-input type="text" formControlName="diretor"></ion-input>\n        </ion-item>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                </ion-col>\n                <ion-col>\n                    <button ion-button type="submit" color="gold">\n            <ion-icon name="log-in"> Salvar </ion-icon>\n          </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button type="cancel" color="danger" (click)="voltar()">\n                        <ion-icon name="backspace"> Cancelar</ion-icon>\n          </button>\n                </ion-col>\n                <ion-col>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </form>\n\n\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/add-filmes/add-filmes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_filmes_filmes__["a" /* FilmesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], AddFilmesPage);
    return AddFilmesPage;
}());

//# sourceMappingURL=add-filmes.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map