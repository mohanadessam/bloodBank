import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ShowRequiredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-required',
  templateUrl: 'show-required.html',
})
export class ShowRequiredPage {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  userData :AngularFireList<any>;

  state;
  userid="";

  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams ,public db:AngularFireDatabase
  ,private callNumber: CallNumber ,public alertCtrl: AlertController) {
    this.state=this.navParams.get("id");
      this.itemsRef = db.list('/required', ref => ref.orderByChild('decs'))
      
      this.items = this.itemsRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ 
          key: c.payload.key,
           name:c.payload.val().name,
           bloodtype:c.payload.val().bloodtype,
           age:c.payload.val().age,
           notes:c.payload.val().notes,
           location:c.payload.val().location,
           phone:c.payload.val().phone,
            time:c.payload.val().time,
            addedby:c.payload.val().addedby,
            hide:c.payload.val().hide,
            state:c.payload.val().state
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
  deleteConfirm(id){
    this.userData = this.db.list('/required')
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



call(phone){
  this.callNumber.callNumber(phone , true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}
  

}
