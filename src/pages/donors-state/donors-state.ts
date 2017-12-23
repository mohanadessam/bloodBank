import { DonorsPage } from './../donors/donors';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DonorsStatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donors-state',
  templateUrl: 'donors-state.html',
})
export class DonorsStatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsStatePage');
  }
  selectState(id){
    this.navCtrl.push(DonorsPage,{
      id:id
    });   
    }
}
