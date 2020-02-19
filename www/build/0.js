webpackJsonp([0],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarFilmePageModule", function() { return EditarFilmePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_filme__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarFilmePageModule = /** @class */ (function () {
    function EditarFilmePageModule() {
    }
    EditarFilmePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar_filme__["a" /* EditarFilmePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_filme__["a" /* EditarFilmePage */]),
            ],
        })
    ], EditarFilmePageModule);
    return EditarFilmePageModule;
}());

//# sourceMappingURL=editar-filme.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarFilmePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_filmes_filmes__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proxie_filme__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
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
 * Generated class for the EditarFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarFilmePage = /** @class */ (function () {
    function EditarFilmePage(navCtrl, navParams, toastCtrl, formBuilder, filmeProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.filmeProvider = filmeProvider;
        this.alertCtrl = alertCtrl;
        this.FilmeProxie = new __WEBPACK_IMPORTED_MODULE_2__proxie_filme__["a" /* FilmeProxie */]();
        this.FilmeProxie = this.navParams.get("filme");
        console.log(this.FilmeProxie.key);
        this.initialize();
    }
    EditarFilmePage.prototype.initialize = function () {
        this.form = this.formBuilder.group({
            genero: [this.FilmeProxie.genero, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            nome: [this.FilmeProxie.nome, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            classificacao: [this.FilmeProxie.classificacao, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            duracao: [this.FilmeProxie.duracao, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            diretor: [this.FilmeProxie.diretor, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
        });
        this.genero = this.formBuilder["genero"];
        this.nome = this.form.controls["nome"];
        this.classificacao = this.formBuilder["classificacao"];
        this.duracao = this.formBuilder["duracao"];
        this.diretor = this.formBuilder["diretor"];
    };
    EditarFilmePage.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* ListPage */]);
    };
    EditarFilmePage.prototype.submitForm = function () {
        if (!this.form.valid) {
            var toast = this.toastCtrl.create({
                message: "Campos em Branco!",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else {
            this.cadastrar();
        }
    };
    EditarFilmePage.prototype.cadastrar = function () {
        var _this = this;
        this.FilmeProxie.genero = this.form.value["genero"],
            this.FilmeProxie.nome = this.form.value["nome"],
            this.FilmeProxie.classificacao = this.form.value["classificacao"],
            this.FilmeProxie.duracao = this.form.value["duracao"],
            this.FilmeProxie.diretor = this.form.value["diretor"],
            this.filmeProvider.salvar(this.FilmeProxie)
                .then(function (data) {
                console.log(data);
                _this.alert("Alteração Efetuada!");
                _this.navCtrl.pop();
            }) //retorna o data
                .catch(function (error) {
                console.log(error);
                _this.alert("Erro ao Editar Contato!");
            });
    };
    EditarFilmePage.prototype.alert = function (mensagem) {
        this.alertCtrl.create({
            title: 'Aviso',
            subTitle: mensagem,
            buttons: ['OK']
        })
            .present();
    };
    EditarFilmePage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    EditarFilmePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-editar-filme',template:/*ion-inline-start:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/editar-filme/editar-filme.html"*/'<ion-content padding>\n    <img src="../assets/imgs/pipoca2.png" alt="logo">\n    <form [formGroup]="form" (submit)="submitForm()">\n        <p>Editar Filme</p>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="videocam">\n                    Nome do Filme\n                </ion-icon>\n            </ion-label>\n            <ion-input type="text" formControlName="nome"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="keypad">\n                    Gênero\n                </ion-icon>\n            </ion-label>\n            <ion-select formControlName="genero">\n                <ion-option value="acao">Ação</ion-option>\n                <ion-option value="anime">Anime</ion-option>\n                <ion-option value="comedia">Comédia</ion-option>\n                <ion-option value="drama">Drama</ion-option>\n                <ion-option value="romance">Romance</ion-option>\n                <ion-option value="suspense">Suspense</ion-option>\n                <ion-option value="terror">Terror</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="funnel">\n                    Classificação\n                </ion-icon>\n            </ion-label>\n            <ion-select formControlName="classificacao">\n                <ion-option value="livre">Livre</ion-option>\n                <ion-option value="10">10 anos</ion-option>\n                <ion-option value="12">12 anos</ion-option>\n                <ion-option value="14">14 anos</ion-option>\n                <ion-option value="16">16 anos</ion-option>\n                <ion-option value="18">18 anos</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="alarm">\n                    Duração\n                </ion-icon>\n            </ion-label>\n            <ion-input type="text" formControlName="duracao" style="text-align: left;"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="person">\n                    Diretor\n                </ion-icon>\n            </ion-label>\n            <ion-input type="text" formControlName="diretor"></ion-input>\n        </ion-item>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                </ion-col>\n                <ion-col>\n                    <button ion-button type="submit" color="gold">\n                      <ion-icon name="log-in"> Salvar </ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button type="cancel" color="danger" (click)="voltar()">\n                        <ion-icon name="backspace"> Cancelar</ion-icon>\n          </button>\n                </ion-col>\n                <ion-col>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/dalmar/Faculdade/Mobile/appFilmes/src/pages/editar-filme/editar-filme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__providers_filmes_filmes__["a" /* FilmesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], EditarFilmePage);
    return EditarFilmePage;
}());

//# sourceMappingURL=editar-filme.js.map

/***/ })

});
//# sourceMappingURL=0.js.map