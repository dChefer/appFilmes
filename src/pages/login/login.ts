import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formLogin: FormGroup;
  email: AbstractControl;
  senha: AbstractControl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private fire: AngularFireAuth) {
    this.inicializar();
  }

  inicializar() {
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(6)]],
    });
    this.email = this.formLogin.controls["email"];
    this.senha = this.formLogin.controls["senha"];
  }


  submitLogin() {
    if (!this.formLogin.valid) {
      let toast = this.toastCtrl.create({
        message: "Deu erro no Login!",
        duration: 3000,
        position: "top"
      });
      toast.present();

    } else {
      this.alert("Aeeeee \o/ TMJ!!");
      this.logar();
    }
  }

  logar(){
    this.fire.auth.signInWithEmailAndPassword(
      this.formLogin.value.email,
      this.formLogin.value.senha,
    )
    .then(data=>{
      this.alert("Chega mais coleguinha!");
      this.navCtrl.setRoot(TabsPage);
    })
    .catch(error=>{
      this.alert(error);
    })
  }
  alert(mensagem: string){
    this.alertCtrl.create({
      title: "FIQUE DE OLHO o_0",
      subTitle: mensagem,
      buttons: ["Fechar"]
    })
    .present();
  }

  registrarUsuario(){
    this.navCtrl.push("CadastroPage");
  }

  logarGoogle(){
    this.fire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider)
      .then(data=>{
        this.alert("Logado com Google");
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(error=>{
        this.alert(error);
      })
  }
}

