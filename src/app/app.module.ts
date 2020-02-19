import { AssistirFilmePage } from './../pages/assistir-filme/assistir-filme';
import { AddFilmesPage } from './../pages/add-filmes/add-filmes';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ContactPage } from '../pages/contact/contact';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FilmesProvider } from '../providers/filmes/filmes';
import { ListaProvider } from '../providers/lista/lista';


  const firebaseConfig = {
    apiKey: "AIzaSyAHHbQGg-qMs4u7jk2z-8zWVnD8xY_RFNs",
    authDomain: "appfilmes-a60a2.firebaseapp.com",
    databaseURL: "https://appfilmes-a60a2.firebaseio.com",
    projectId: "appfilmes-a60a2",
    storageBucket: "appfilmes-a60a2.appspot.com",
    messagingSenderId: "21112167621",
    appId: "1:21112167621:web:e83e0147c4fc42378ce4ac"
  };

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    LoginPage,
    ListPage,
    AddFilmesPage,
    AssistirFilmePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    LoginPage,
    ListPage,
    AddFilmesPage,
    AssistirFilmePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    FilmesProvider,
    ListaProvider
  ]
})
export class AppModule {}
