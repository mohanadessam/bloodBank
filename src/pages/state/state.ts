import { HomePage } from './../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/take';
import { ShowRequiredPage } from '../show-required/show-required';

/**
 * Generated class for the StatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-state',
  templateUrl: 'state.html',
})
export class StatePage {
  state;
  constructor(public fire:AngularFireAuth,public af:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');
  }
  selectState(id){
    this.navCtrl.push(ShowRequiredPage,{
      id:id
    });   
    }
    
  }

