import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
  state;
  constructor(public navCtrl: NavController, public navParams: NavParams , private db:AngularFireDatabase
    ,private callNumber: CallNumber) {
      this.state=this.navParams.get("id");
    this.itemsRef = db.list('/Donors', ref => ref.orderByChild('decs'))
    
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key,
         name:c.payload.val().name,
         bloodtype:c.payload.val().bloodtype,
         note:c.payload.val().note,
         location:c.payload.val().location,
         phone:c.payload.val().phone,
          time:c.payload.val().time,
          state:c.payload.val().state,
         })
      );
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPage');
  }
  call(phone){
    this.callNumber.callNumber(phone , true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
}
