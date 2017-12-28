import { HomePage } from './../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoginPage } from './../login/login';

import { Component } from '@angular/core';
import { ModalController,Events,IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {NotificationsPage} from '../notifications/notifications';
import {AboutPage} from '../about/about';
import {ContatcUsPage} from '../contatc-us/contatc-us';
import {DevelopersPage} from '../developers/developers';
import { AngularFireDatabase } from 'angularfire2/database';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  toggle01: boolean = true;
  toggle02: boolean = false;
  val: boolean ;
  x:number = 1;
  signOut=false;
  logginIN= false;
  logginFb=false;

  constructor(private fb: Facebook ,public af:AngularFireDatabase,private toastCtrl: ToastController,public fire:AngularFireAuth,private ev: Events,public navCtrl: NavController, 
    public navParams: NavParams , private storage: Storage,public modalCtrl: ModalController) {
   
      fb.getLoginStatus().then(res=>{
        if(res.status==="connect"){
          this.logginIN = true;
        }else{
          this.logginIN= false;
        }
      }).catch(e =>{
        console.log('error : '+e);
      });

    this.storage.get('toggle01').then((val) => {
     this.toggle01=val;
     if(val){
      this.x=0;
     }else{this.x=1;}
     console.log('Your x sittng cc is', this.x);
    });
    

    
  }

login(){
  this.navCtrl.setRoot(LoginPage);
}
ionViewDidLoad() {
   
}
  toggleOne() {
    this.toggle01 = !this.toggle02;
    this.storage.set('toggle01', this.toggle01);
    this.storage.get('toggle01').then((val1) => {
      if(val1){
        this.x=0;
       }else{this.x=1;}
      console.log('Your val sittng tt is', val1);
      console.log('Your x sittng  tt is', this.x);
     this.publishEvent(val1);
    });
  }
  
  toggleTwo() {
    this.toggle02 = !this.toggle01;
  }
   publishEvent(v){
    this.ev.publish('v', v);
  }
 
  presentModal() {
    let modal = this.modalCtrl.create(NotificationsPage);
    modal.present();
  }
  aboutModal() {
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }
  contactModal() {
    let modal = this.modalCtrl.create(ContatcUsPage);
    modal.present();
  }
  developerModal() {
    let modal = this.modalCtrl.create(DevelopersPage);
    modal.present();
  }
  logout(){
    let toast = this.toastCtrl.create({
      message: 'تم تسجيل الخروج من الحساب ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    this.fire.auth.signOut().then(function() {
      toast.present();
    }, function(error) {
      console.log(error);
    });
  }
  logoutfb(){
    this.fb.logout().then(res=>{
    this.logginIN=false;
    this.storage.set('logginIN', this.logginIN);
    this.logginFb= false;
    }).catch(e=>{
      console.log(e);
    });
  }
}
