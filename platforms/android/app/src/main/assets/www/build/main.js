webpackJsonp([4],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(156);
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
                message: "Erro ao Logar!",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else {
            this.alert("Logado com Sucesso!");
            this.logar();
        }
    };
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.formLogin.value.email, this.formLogin.value.senha)
            .then(function (data) {
            _this.alert("Seja Bem-Vindo");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            _this.alert(error);
        });
    };
    LoginPage.prototype.alert = function (mensagem) {
        this.alertCtrl.create({
            title: "AVISO",
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
            selector: 'page-login',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/login/login.html"*/'<ion-content padding>\n\n    <img src="../assets/imgs/pipoca2.png" alt="logo">\n    <form [formGroup]="formLogin" (submit)="submitLogin()">\n        <div class="slide-inter ion-padding ">\n            <ion-item>\n                <ion-label class="email" style="color: #fff">E-mail</ion-label>\n                <ion-input type="text" formControlName="email"></ion-input>\n            </ion-item>\n            <small *ngIf="email.hasError(\'email\')  && email.touched" ion-text>\n                    *Formato de Email Inválido!\n                 </small>\n            <ion-item>\n                <ion-label class="senha" style="color: #fff">Senha</ion-label>\n                <ion-input type="password" formControlName="senha"></ion-input>\n            </ion-item>\n            <small *ngIf="senha.hasError(\'required\') && senha.touched" ion-text>\n                    *Campo Obrigatório\n                </small>\n            <small *ngIf="senha.hasError(\'minlength\')" ion-text>\n                        *Campo deve conter minimo 6caracteres!\n                    </small>\n        </div>\n        <button ion-button type="submit" (click)="logar()">\n                <ion-icon name="log-in"> Entrar</ion-icon>\n            </button>\n\n        <button ion-button type="button" (click)="registrarUsuario()">\n            <ion-icon name="add-circle"> Cadastrar</ion-icon>\n        </button>\n    </form>\n    <br>\n    <br>\n    <br>\n    <h2>Logar com:</h2>\n    <button ion-button full color="danger" (click)="logarGoogle()">\n      <ion-icon name="logo-google" >oogle</ion-icon>\n    </button>\n\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title style="text-align: center">Lista de Filmes </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-fab bottom right>\n        <button ion-fab color="primary">\n            <ion-icon name="add-circle"></ion-icon>\n    </button>\n    </ion-fab>\n\n\n    <ion-item>\n        <ion-label style="color:black">\n            Busca de Filme:\n        </ion-label>\n        <ion-input type="text" name="nome" style="color:black"></ion-input>\n    </ion-item>\n    <button ion-button type="search">\n            <ion-icon name="search">Buscar</ion-icon>\n    </button>\n\n    <ion-card class="card">\n        <!--Imagem do filmes se Der Certo-->\n        <img src="/assets/imgs/fundoLogin.jpg" />\n        <ion-card-content class="content">\n            <ion-card-title>\n                Nome do Filme\n            </ion-card-title>\n            <p>\n                Aqui coloca a Descrição do filme!!\n                <ion-label>Duração</ion-label>\n            </p>\n            <button ion-button color="warning">\n                            <ion-icon name="create"></ion-icon>\n                        </button>\n            <button ion-button color="danger">\n                            <ion-icon name="trash"></ion-icon>\n                        </button>\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n        <!--Imagem do filmes se Der Certo-->\n        <ion-card-content>\n            <ion-card-title>\n                Nome do Filme\n            </ion-card-title>\n            <p>\n                Aqui coloca a Descrição do filme!!\n                <ion-label>Duração</ion-label>\n            </p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePage = /** @class */ (function () {
    function CreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePage');
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/create/create.html"*/'<ion-header color="primary">\n    <ion-navbar>\n        <ion-title style="text-align: center">Adicionar Filme</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <form>\n        <p>Adicionar um novo Filme</p>\n        <ion-item>\n            <ion-label class="email" style="color: #fff">Filme</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label style="color: #fff">Gênero</ion-label>\n            <ion-select>\n                <ion-option value="acao">Ação</ion-option>\n                <ion-option value="acao">Comedia</ion-option>\n                <ion-option value="acao">Desenho</ion-option>\n                <ion-option value="acao">Terror</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label class="class" style="color: #fff">Classificação Etaria</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label class="dura" style="color: #fff">Duração</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label class="Descricao" style="color: #fff">Descrição</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <button ion-button type="cancel">\n            <ion-icon name="backspace"> Cancelar</ion-icon>\n    </button>\n        <button ion-button type="submit" color="gold">\n        <ion-icon name="add-circle"> Salvar </ion-icon>\n    </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/create/create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(245);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__list_list__["a" /* ListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__create_create__["a" /* CreatePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Lista" tabIcon="md-list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Add Filme" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		448,
		0
	],
	"../pages/create/create.module": [
		451,
		3
	],
	"../pages/list/list.module": [
		449,
		2
	],
	"../pages/login/login.module": [
		450,
		1
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
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Infomações\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <div class="card">\n            <div class="face face1">\n                <div class="content">\n                    <img src="/assets/imgs/icon.png">\n                    <h4>Informarções</h4>\n                </div>\n            </div>\n            <div class="face face2">\n                <div class="content">\n                    <p>\n                        Programa gratuito para catalogar seus filmes e ter maior controle sobre os títulos presentes no disco rígido.<br> A aplicação é totalmente em português e faz uso de bancos de dados, garantindo a disponibilidade do maior número de títulos possível.\n                        Permite que o usuário catalogue a coleção de filmes. Além de possuir uma interface simples.\n\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="card">\n            <div class="face face1">\n                <div class="content">\n                    <img src="/assets/imgs/win.png">\n                    <h4>Alunos</h4>\n                </div>\n            </div>\n            <div class="face face2">\n                <div class="content">\n                    <p>\n                            <ion-icon name="person"> Alessandro Haymann</ion-icon>  \n                            <br>\n                            <ion-icon name="person"> Dalmar C. Guimaraẽs</ion-icon>    \n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_create__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(389);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_create__["a" /* CreatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_create__["a" /* CreatePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(249);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map