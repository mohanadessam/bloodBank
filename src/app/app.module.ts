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
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { DonorsPage } from '../pages/donors/donors'
import { DonorsRegisterPage } from '../pages/donors-register/donors-register';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule , AngularFireDatabase  } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';
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
      BloodBanksPage,
      SettingsPage,
      TabsPage,
      AnimatesDirective,
      DonorsPage,
      DonorsRegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot()
    
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
       RequiredPage,
      ShowRequiredPage,
      BloodBanksPage,
      TabsPage,
      HomePage,
      SettingsPage,
      DonorsPage,
      DonorsRegisterPage
  ],
  providers: [
      LocalNotifications,
   
    StatusBar,
    SplashScreen,
      AngularFireDatabase,
      AnimationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
