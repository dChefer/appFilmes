import { ListPage } from './../list/list';
import { FilmesProvider } from './../../providers/filmes/filmes';
import { FilmeProxie } from './../../proxie/filme';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the EditarFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-filme',
  templateUrl: 'editar-filme.html',
})
export class EditarFilmePage {
  form: FormGroup;
  genero: AbstractControl
  nome: AbstractControl
  classificacao: AbstractControl
  duracao: AbstractControl
  diretor: AbstractControl

  FilmeProxie: FilmeProxie;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public filmeProvider: FilmesProvider,
    private alertCtrl: AlertController,
    ) { 
      
      this.FilmeProxie = new FilmeProxie();
      this.FilmeProxie = this.navParams.get("filme");
      console.log(this.FilmeProxie.key);
      this.initialize();
  }

  initialize(){
    this.form = this.formBuilder.group({
      genero: [this.FilmeProxie.genero, Validators.required],
      nome: [this.FilmeProxie.nome, Validators.required],
      classificacao: [this.FilmeProxie.classificacao, Validators.required],
      duracao: [this.FilmeProxie.duracao, Validators.required],
      diretor: [this.FilmeProxie.diretor,Validators.required],
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
        message: "Campos em Branco!",
        duration: 3000,
        position: "top"
      });
      toast.present();
    }else{
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
      this.alert("Alteração Efetuada!");
      this.navCtrl.pop();
    })//retorna o data
    .catch(error=>{
      console.log(error);
      this.alert("Erro ao Editar Contato!");
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
 cancelar(){
   this.navCtrl.pop();
 }

}
