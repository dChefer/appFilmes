import { FilmeProxie } from './../../proxie/filme';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from "firebase";

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmesProvider {

  private PATH = "filmes/";
  private user: string;

  constructor(private db: AngularFireDatabase) {
  
    this.user = firebase.auth().currentUser.uid;
    console.log(this.user);
  }

  salvar(filme: FilmeProxie) {
    return new Promise((resolve, reject) => {
      if (filme.key) {
        console.log(filme);
        this.db.list(this.PATH).update(
          filme.key, {
            genero: filme.genero,
            nome: filme.nome,
            duracao: filme.duracao,
            classificacao:filme.classificacao,
            diretor:filme.diretor
        })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH).push({
          genero: filme.genero,
          nome: filme.nome,
          duracao: filme.duracao,
          classificacao:filme.classificacao,
          diretor:filme.diretor,
          responsavel: this.user
        })
          .then(() => resolve())
      }
    });
  }

  buscarTodos() {
    return this.db.list(this.PATH,
      //ref=>ref.orderByChild("responsavel").equalTo(this.user)
      ).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }
  buscarGenero(genero:string) {
    return this.db.list(this.PATH,
      ref=>ref.orderByChild("genero").equalTo(genero)
      ).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  buscar(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges().map(c => ({
      key: c.payload.key, ...c.payload.val()
    }));
  }

  excluir(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}