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
import {NotificationsPage} from '../pages/notifications/notifications'
import {AboutPage} from '../pages/about/about';
import {ContatcUsPage} from '../pages/contatc-us/contatc-us';
import {DevelopersPage} from '../pages/developers/developers';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule , AngularFireDatabase  } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';
const config = {
  apiKey: "AIzaSyDpm6RSasGMMukDKHOj_-PieESRRxcD22w",
  authDomain: "bloodbank-iq.firebaseapp.com",
  databaseURL: "https://bloodbank-iq.firebaseio.com",
  projectId: "bloodbank-iq",
  storageBucket: "bloodbank-iq.appspot.com",
  messagingSenderId: "732771519936"
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
      DonorsRegisterPage,
      NotificationsPage,
      DevelopersPage,
      AboutPage,
      ContatcUsPage
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
      DonorsRegisterPage,
      NotificationsPage,
      DevelopersPage,
      AboutPage,
      ContatcUsPage
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
