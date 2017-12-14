import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { DonorsPage } from '../donors/donors'
/**
 * Generated class for the DonorsRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donors-register',
  templateUrl: 'donors-register.html',
})
export class DonorsRegisterPage {
  register :AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams , public db:AngularFireDatabase ) {
    this.register = db.list('/Donors');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonorsRegisterPage');
  }
  addDonors(name , bloodtype , phone , location , note){

   let  d = new Date();
   let time = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
      this.register.push({
    name:name,
    bloodtype:bloodtype,
    note:note,
    phone:phone,
    location:location,
   
    decs:0- Date.now(),
    time:time
  }).then(newPerson =>{
    this.navCtrl.push(DonorsPage , {
      name :name,
      bloodtype:bloodtype,
      note:note,
      phone:phone,
      location:location,
      
      time:time
    })
  },error => {
    console.log(error);
  }
)
  }
}
