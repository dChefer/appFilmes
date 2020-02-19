import { ListPage } from './../list/list';
import { FilmeProxie } from './../../proxie/filme';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FilmesProvider } from '../../providers/filmes/filmes';

/**
 * Generated class for the AddFilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-filmes',
  templateUrl: 'add-filmes.html',
})
export class AddFilmesPage {
  form: FormGroup;
  genero: AbstractControl
  nome: AbstractControl
  classificacao: AbstractControl
  duracao: AbstractControl
  diretor: AbstractControl

  FilmeProxie:FilmeProxie;

  constructor(
  public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public filmeProvider: FilmesProvider,
    private alertCtrl: AlertController,
    ) { 
      this.initialize();
      this.FilmeProxie = new FilmeProxie();
  }

  initialize(){
    this.form = this.formBuilder.group({
      genero: ["", Validators.required],
      nome: ["", Validators.required],
      classificacao: ["", Validators.required],
      duracao: ["", Validators.required],
      diretor: ["",Validators.required],
    });
    this.genero = this.formBuilder["genero"];
    this.nome = this.form.controls["nome"];
    this.classificacao = this.formBuilder["classificacao"];
    this.duracao = this.formBuilder["duracao"];
    this.diretor = this.formBuilder["diretor"];
   

  }
  voltar(){
    this.navCtrl.push(ListPage);
  }

  submitForm(){
    if(!this.form.valid){
      let toast = this.toastCtrl.create({
        message: "Campos em Branco",
        duration: 3000,
        position: "top"
      });
      toast.present();
    }
    else{
      this.cadastrar();
      
    }
  }

  cadastrar(){ 
    this.FilmeProxie.genero = this.form.value["genero"],
    this.FilmeProxie.nome = this.form.value["nome"],
    this.FilmeProxie.classificacao = this.form.value["classificacao"],
    this.FilmeProxie.duracao = this.form.value["duracao"],
    this.FilmeProxie.diretor = this.form.value["diretor"],

    this.filmeProvider.salvar(this.FilmeProxie)
    .then(data =>{
      console.log(data);
      this.alert("Aeee\o/ Bora assistir!");
      this.navCtrl.push(ListPage);
    })//retorna o data
    .catch(error=>{
      console.log(error);
      this.alert("Erro ao Cadastrar!");
    });
  }

  alert(mensagem:string){
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: mensagem,
      buttons: ['OK']
    })
    .present();
  }

}
