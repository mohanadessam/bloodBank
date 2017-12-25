import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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
  // name="";
  email="";
  password="";
  state;
  msg="";
  constructor(private toastCtrl: ToastController,public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  Rgister(){
    let email_already_in_use = this.toastCtrl.create({
      message: 'هذا المستخدم موجود مسبقاً ..!',
      duration: 3000,
      position: 'top'
      
    });
    let weak_password = this.toastCtrl.create({
      message: 'كلمة المرور ضعيفة ..!',
      duration: 3000,
      position: 'top'
    });
    let invalid_email = this.toastCtrl.create({
      message: 'تأكد من البريد الالكتروني بشكل صحيح ..!',
      duration: 3000,
      position: 'top'
    });
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password).then(user=>{
      this.navCtrl.setRoot(HomePage);
    }).catch(function(error){
      console.log(error);
      console.log(error.code);
      if (error.code=="auth/email-already-in-use") {
        email_already_in_use.present();
      }
      if (error.code=="auth/weak-password") {
        weak_password.present();
      }
      if (error.code=="auth/invalid-email") {
        invalid_email.present();
      }

    })
    console.log(this.email +" "+this.password);
  }
  emailAlreadyInUse() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: "المستخدم موجود",
      buttons: ['حسناً']
    });
    alert.present();
  }

}
