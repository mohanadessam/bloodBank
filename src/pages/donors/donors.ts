import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

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
  constructor(public navCtrl: NavController, public navParams: NavParams , private db:AngularFireDatabase) {
    this.itemsRef = db.list('/Donors', ref => ref.orderByChild('decs'))
    
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key,
         name:c.payload.val().name,
         bloodtype:c.payload.val().bloodtype,
         active:c.payload.val().active,
         location:c.payload.val().location,
         phone:c.payload.val().phone,
          time:c.payload.val().time
         })
      );
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsPage');
  }

}
