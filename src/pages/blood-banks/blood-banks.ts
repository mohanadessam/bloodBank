import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { RequiredPage } from '../required/required';
/**
 * Generated class for the BloodBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blood-banks',
  templateUrl: 'blood-banks.html',
})
export class BloodBanksPage {
notification ={
  id:0,
  name:""

}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notification.id = this.navParams.get("id");
    this.notification.name = this.navParams.get("name");
    // alert(this.notification.name);
    
  }

 

}
