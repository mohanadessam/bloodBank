import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { StatePage } from '../state/state';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  email="";
  password="";
  state;
  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  Rgister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password).then(user=>{
      this.navCtrl.setRoot(StatePage);
    }).catch(function(error){
      console.log(error);
    })
    console.log(this.email +" "+this.password);
  }

}
