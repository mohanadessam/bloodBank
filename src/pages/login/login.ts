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
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';
// import { async } from 'q';
import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  email="";
  password="";
  alert;
  userData:AngularFireList<any>;
  state:Observable<any[]>;
  signIN=0;
  logginIN= false;
  user:any;

  constructor(private fb: Facebook ,private toastCtrl: ToastController,public db:AngularFireDatabase,public alertCtrl: AlertController,public storage: Storage,public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    fb.getLoginStatus().then(res=>{
      if(res.status==="connect"){
        this.logginIN = true;
      }else{
        this.logginIN= false;
      }
    }).catch(e =>{
      console.log('error : '+e);
    });
  }

  ionViewDidLoad() {
 

   
  }
  // fblogin(){
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  //   .then(res=>{
  //     if(res.status==="connected"){
  //       this.logginIN = true;
  //       this.storage.set('logginIN', this.logginIN);
  //       this.getDetails(res.authResponse.userID);
  //       this.navCtrl.setRoot(HomePage);
  //     }else{
  //       this.logginIN=false;
  //     }
  //   })
  //   .catch(e => console.log('Error logging into Facebook', e));
  // }
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
  facebookLogin2(){ 
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 
    this.fire.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(user =>{
      this.navCtrl.setRoot(HomePage);
    });
    
}
// logout(){
//   this.fb.logout().then(res=>{
//   this.logginIN=false;
//   this.storage.set('logginIN', this.logginIN);
//   }).catch(e=>{
//     console.log(e);
//   });
// }
  
  googleLogin(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    this.fire.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(user =>{
      toast.present();
      this.navCtrl.setRoot(HomePage);
    });
  }

  getDetails(id){
    this.fb.api("/"+id+"/?fields=id,email,name,picture,gender",['public_profile']).then(res=>{
      console.log(res);
      this.user = res;
    }).catch(e=>{
      console.log(e);
    });
    }


    facebookLogin(): Promise<any> {
      let toast = this.toastCtrl.create({
        message: 'اهلا بك مجددا  ',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      }); 

      return this.fb.login(['email'])
        .then( response => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
          this.fire.auth.signInWithCredential(facebookCredential)
            .then( success => { 
              this.navCtrl.setRoot(HomePage);
              console.log("Firebase success: " + JSON.stringify(success)); 
            });
        }).catch((error) => { console.log(error) });
    }
}
