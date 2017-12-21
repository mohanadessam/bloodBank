import { StatePage } from './../state/state';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {RegistrationPage} from '../registration/registration';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email="";
  password="";
  alert;
  userData:AngularFireList<any>
  constructor(private toastCtrl: ToastController,public db:AngularFireDatabase,public alertCtrl: AlertController,public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    // fire.auth.onAuthStateChanged(function(user){
    //   if(user){

    //     navCtrl.push(HomePage);
       
    //   }
    //   console.log(user);
    //    });
  }

  ionViewDidLoad() {
    // this.fire.authState.take(1).subscribe(data=>{
    //   this.userData = this.db.list(`users/${data.uid}`);
    //   console.log(data.uid)
    // })

   
  }
  Login(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 
  
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then(user =>{
      toast.present();
        this.navCtrl.setRoot(HomePage);
   
    }).catch(error=>{
      this.showAlert();
    })
      
  }
  showAlert() {
    this.alert = this.alertCtrl.create({
      title: 'خطا ',
      subTitle: ' ! يرجى التاكد من الايميل و كلمة السر الخاصة بك ',
      buttons: ['حسنا ']
    });
    this.alert.present();
  }
  register(){
  this.navCtrl.push(RegistrationPage);
  }
  skip(){
  this.navCtrl.setRoot(TabsPage);
  }
  facebookLogin(){ 
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(user =>{
      toast.present();
      console.log(user);
    });
  }
  googleLogin(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user =>{
      toast.present();
      console.log(user);
    });
  }
}
