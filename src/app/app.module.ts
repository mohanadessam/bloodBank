import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RequiredPage } from '../pages/required/required';
import { ShowRequiredPage } from '../pages/show-required/show-required';
import { BloodBanksPage } from '../pages/blood-banks/blood-banks';

import { LocalNotifications } from '@ionic-native/local-notifications';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule , AngularFireDatabase  } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CallNumber } from '@ionic-native/call-number';

const config = {
    apiKey: "AIzaSyA7yorKyskuxUFKGFhpb0rqvDd2iwW39B4",
    authDomain: "bloodbank-ab5d8.firebaseapp.com",
    databaseURL: "https://bloodbank-ab5d8.firebaseio.com",
    projectId: "bloodbank-ab5d8",
    storageBucket: "",
    messagingSenderId: "712015942045"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      RequiredPage,
      ShowRequiredPage,
      BloodBanksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
       RequiredPage,
      ShowRequiredPage,
      BloodBanksPage
  ],
  providers: [
      LocalNotifications,
       CallNumber,
    StatusBar,
    SplashScreen,
      AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
