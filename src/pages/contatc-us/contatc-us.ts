import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  ,ViewController} from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import{HomePage} from '../home/home'
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';


@IonicPage()
@Component({
  selector: 'page-contatc-us',
  templateUrl: 'contatc-us.html',
})
export class ContatcUsPage {
  newFeedback :AngularFireList<any>;

  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams 
    , public viewCtrl: ViewController, public db:AngularFireDatabase,
    public alertCtrl: AlertController) {
     this.fire.auth.onAuthStateChanged(function(user){
        if(!user){
          navCtrl.setRoot(LoginPage);
        }
        console.log(user);
         });
    this.newFeedback = db.list('/Feedback');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatcUsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  sendfeedback(feedback_title,feedback_subject){

    let  d = new Date();
    let time = [d.getMonth()+1,
                d.getDate(),
                d.getFullYear()].join('/')+' '+
               [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
       this.newFeedback.push({
     feedback_title:feedback_title,
     feedback_subject:feedback_subject,
     decs:0- Date.now(),
     time:time
   }).then(newPerson =>{
    this. showAlert()
     },error => {
     console.log(error);
   }
 )
   }

   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'شكرا لك',
      subTitle: 'شاكرين تواصلك معنا وسنأخذ برأيك في عين الاعتبار',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.dismiss();
          }
        },
      ]
    });
    alert.present();
  }
}
