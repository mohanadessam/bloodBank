import { Component } from '@angular/core';
import { RequiredPage } from '../required/required';
import { ShowRequiredPage } from '../show-required/show-required';
import { BloodBanksPage } from '../blood-banks/blood-banks';
//import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { SettingsPage } from '../settings/settings';
import {Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  x:number = 2;
  constructor(private ev: Events,public navCtrl: NavController, public navParams: NavParams , private storage: Storage) {
    this.ev.subscribe('v', v => {
      if(v){
        this.x=0;
        console.log('Your x sub is', this.x);
       }else{
         this.x=1;
        console.log('Your x sub is', this.x);
      }
    })
    this.storage.get('toggle01').then((val) => {
     if(val){
      this.x=0;
     }else{this.x=1;}
     console.log('Your x home is', this.x);
    });
  }
    required(){
    this.navCtrl.push(RequiredPage);
    }
    showRequried(){
        this.navCtrl.push(ShowRequiredPage);
    }
    bloodBanks(){
         this.navCtrl.push(BloodBanksPage);
    }
}
