import { AddFilmesPage } from './../add-filmes/add-filmes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FilmesProvider } from '../../providers/filmes/filmes';
import firebase from "firebase";
import { AssistirFilmePage } from '../assistir-filme/assistir-filme';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  filmes: Observable<any>;
  usuario: any;
  genero: string;
  filmesBusca:Observable<any>;
  shownGroup = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public filmeProvider: FilmesProvider,
    private alertCtrl: AlertController,
  ) {
    this.usuario = firebase.auth().currentUser;
    //console.log(this.usuario);
    this.filmes = new Observable<any>();
    this.filmes = this.filmeProvider.buscarTodos();
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };


  irParaCadastro() {
    this.navCtrl.push(AddFilmesPage);
  }

  editarFilme(filme: any) {
    this.navCtrl.push("EditarFilmePage", { filme: filme });
    console.log(filme);
  }

  confirmarExcluir(key: string) {
    this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Você vai me excluir? :(',
      buttons: [{
        text: "Sim",
        handler: () => {
          this.excluirFilme(key);
        }
      },
      {
        text: "Não"
      }
      ]
    })
      .present();

  }
  excluirFilme(key: string) {
    console.log(key);
    this.filmeProvider.excluir(key)
      .then(() => {
        this.alert("Foi bom enquanto durou!!");
      })
      .catch(() => {
        this.alert("Erro ao Excluir");
      });
  }

  alert(mensagem: string) {
    this.alertCtrl.create({
      title: 'AVISO',
      subTitle: mensagem,
      buttons: ['OK']
    })
      .present();
  }

  buscar(){
  this.filmesBusca = this.filmeProvider.buscarGenero(this.genero);
  }

  assistir(filme: any){
    this.navCtrl.push(AssistirFilmePage, {filme:filme});
    console.log(filme)
  }

}