import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DonorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donors',
  templateUrl: 'donors.html',
})
export class DonorsPage {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  userData :AngularFireList<any>;
  state;
  userid="";
  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams , public db:AngularFireDatabase
    ,private callNumber: CallNumber,public storage: Storage,public alertCtrl: AlertController, public localNotifications:LocalNotifications) {
      this.state=this.navParams.get("id");
    this.itemsRef = db.list('/Donors', ref => ref.orderByChild('decs'))
    // this.itemsRef.snapshotChanges().subscribe(su=>{
    //   this.sendPush();
    // })
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key,
         name:c.payload.val().name,
         bloodtype:c.payload.val().bloodtype,
         note:c.payload.val().note,
         location:c.payload.val().location,
         phone:c.payload.val().phone,
          time:c.payload.val().time,
          hide:c.payload.val().hide,
          addedby:c.payload.val().addedby,
          state:c.payload.val().state,
          
         })
      );
      
    });
    this.fire.authState.subscribe(auth =>{
    if (auth) {
      this.userid=auth.uid;
      console.log(auth);
    }
      

 })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPage');
  }
  call(phone){
    this.callNumber.callNumber(phone , true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
  deleteConfirm(id){
  this.userData = this.db.list('/Donors')
    this.userData.update(id,{
      "hide":"1"
    })
  }
  delete(id) {
    let confirm = this.alertCtrl.create({
      title: 'متأكد من الحذف..؟',
      message: 'سيتم حذف البيانات التي ادخلتها هل انت متأكد',
      buttons: [
        {
          text: 'حذف',
          handler: () => {
            this.deleteConfirm(id);
          }
        },
        {
          text: 'الغاء',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  // sendPush(){

  //   this.localNotifications.schedule({
  //     id: 1,
  //       title:'مطلوب فصيلة ' ,
  //     text: 'يوجد شخص يحتاج الى التبرع بالدم يرجى التوجه الى مستشفى  ' ,
      
  //   });
    
  // }
}
