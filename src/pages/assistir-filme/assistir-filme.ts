import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FilmeProxie } from '../../proxie/filme';
import { Observable } from 'rxjs/Observable';
import { FilmesProvider } from '../../providers/filmes/filmes';

/**
 * Generated class for the AssistirFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assistir-filme',
  templateUrl: 'assistir-filme.html',
})
export class AssistirFilmePage {
  filme:Observable<any>;
  FilmeProxie: FilmeProxie;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public filmesProvider:FilmesProvider) {

  this.FilmeProxie = new FilmeProxie();
  this.filme = new Observable<any>();
  this.filme = this.navParams.get("filme");
  this.presentLoading();
  }

  ionViewDidLoad() {
    console.log('AssistirFilmePage');
    
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Prepare a pipoca!! Que ja vai começar...",
      duration: 5000
    });
    loader.present();
  }

}
