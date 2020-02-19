webpackJsonp([1],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(155);
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
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, toastCtrl, formBuilder, alertCtrl, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.inicializar();
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.inicializar = function () {
        this.form = this.formBuilder.group({
            email: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            senha: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
            confSenha: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
        });
        this.email = this.form.controls["email"];
        this.senha = this.form.controls["senha"];
        this.confSenha = this.form.controls["senha"];
    };
    CadastroPage.prototype.formRegistro = function () {
        if (!this.form.valid) {
            var toast = this.toastCtrl.create({
                message: "Alguma coisa do Cadastro deu Errado!",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else if (this.form.value.senha != this.form.value.confSenha) {
            var toast = this.toastCtrl.create({
                message: "Senhas não Conferem!",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Aeeee \o/ Cadastrado",
                duration: 3000,
                position: "top"
            });
            toast.present();
            this.registrar();
        }
    };
    CadastroPage.prototype.registrar = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.form.value.email, this.form.value.senha)
            .then(function (data) {
            _this.alert("Aeeee \o/ Cadastrado");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            _this.alert(error);
        });
    };
    CadastroPage.prototype.alert = function (mensagem) {
        this.alertCtrl.create({
            title: "AVISO",
            subTitle: mensagem,
            buttons: ["Fechar"]
        })
            .present();
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/cadastro/cadastro.html"*/'<ion-content padding>\n\n    <img src="../assets/imgs/pipoca2.png" alt="logo">\n    <form [formGroup]="form" (submit)="formRegistro()">\n        <ion-list>\n            <ion-item>\n                <ion-label class="senha" style="color: #fff">E-mail</ion-label>\n                <ion-input typ="text" formControlName="email"></ion-input>\n            </ion-item>\n            <small *ngIf="email.hasError(\'email\')  && email.touched" ion-text color="turq">\n      *Formato de Email Inválido!\n    </small>\n            <ion-item>\n                <ion-label class="senha" style="color: #fff">Senha</ion-label>\n                <ion-input typ="password" formControlName="senha"></ion-input>\n            </ion-item>\n            <small *ngIf="senha.hasError(\'required\') && senha.touched" ion-text color="turq">\n                *Campo Obrigatório\n            </small>\n            <small *ngIf="senha.hasError(\'minlength\')" ion-text color="turq">\n                *Campo deve conter minimo 6 caracteres!\n            </small>\n            <ion-item>\n                <ion-label class="confSenha" style="color: #fff">Confirmar Senha</ion-label>\n                <ion-input typ="password" formControlName="confSenha"></ion-input>\n            </ion-item>\n            <small *ngIf="confSenha.hasError(\'required\') && confSenha.touched" ion-text color="turq">\n                *Campo Obrigatório\n            </small>\n            <small *ngIf="confSenha.hasError(\'minlength\')" ion-text color="turq">\n                *Campo deve conter minimo 6 caracteres!\n            </small>\n        </ion-list>\n        <button ion-button full color="gold" type="submit" (click)="registrar()">\n                <ion-icon name="checkbox"> Registrar</ion-icon>\n            </button>\n    </form>\n\n</ion-content>turq'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ })

});
//# sourceMappingURL=1.js.map