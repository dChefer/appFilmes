import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {
  itens: any[] = [];

  constructor(public http: HttpClient) {
   
  }

  getLista(){
    return this.itens;
  }
  
  adicionar(item:any){
    this.itens.push(item);
  }

  remover(filme: any){
    this.itens.forEach((item,index)=>{
      if(item == filme){
        this.itens.splice(index,1);
      }
    });
  }

}