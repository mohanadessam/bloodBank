import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequiredPage } from '../required/required';
import { ShowRequiredPage } from '../show-required/show-required';
import { BloodBanksPage } from '../blood-banks/blood-banks';
//import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  
  constructor(public navCtrl: NavController ) {
      
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
