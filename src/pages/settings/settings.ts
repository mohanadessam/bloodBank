import { DonorsRegisterPage } from './../donors-register/donors-register';

import { Component } from '@angular/core';
import { Events,IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(private ev: Events,public navCtrl: NavController, public navParams: NavParams , private storage: Storage) {
   
    this.storage.get('toggle01').then((val) => {
     this.toggle01=val;
     if(val){
      this.x=0;
     }else{this.x=1;}
     console.log('Your x sittng cc is', this.x);
    });
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
  addDonors(){
    this.navCtrl.push(DonorsRegisterPage)
  }
}
