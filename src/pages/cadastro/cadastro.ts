import { LoginPage } from './../login/login';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  form: FormGroup;
  email: AbstractControl;
  senha: AbstractControl;
  confSenha: AbstractControl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private fire: AngularFireAuth) {
      this.inicializar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  inicializar(){
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(6)]],
      confSenha: ["", [Validators.required, Validators.minLength(6)]],
    });
    this.email = this.form.controls["email"];
    this.senha = this.form.controls["senha"];
    this.confSenha = this.form.controls["senha"];
    }

    formRegistro(){
        if (!this.form.valid) {
          let toast = this.toastCtrl.create({
            message: "Alguma coisa do Cadastro deu Errado!",
            duration: 3000,
            position: "top"
          });
          toast.present();
        }else if(this.form.value.senha != this.form.value.confSenha){
          let toast = this.toastCtrl.create({
            message: "Senhas não Conferem!",
            duration: 3000,
            position: "top"
          });
          toast.present();
        }
         else {
          let toast = this.toastCtrl.create({
            message: "Aeeee \o/ Cadastrado",
            duration: 3000,
            position: "top"
          });
          toast.present();
          this.registrar();
        }
      }
      registrar(){
        this.fire.auth.createUserWithEmailAndPassword(
          this.form.value.email,
          this.form.value.senha
        )
        .then(data=>{
          this.alert("Aeeee \o/ Cadastrado");
          this.navCtrl.setRoot(LoginPage);
        })
        .catch(error =>{
          this.alert(error);
        })
      }
      alert(mensagem: string){
        this.alertCtrl.create({
          title: "AVISO",
          subTitle: mensagem,
          buttons: ["Fechar"]
        })
        .present();
      }
    }
  


