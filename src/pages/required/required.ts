import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { ShowRequiredPage } from '../show-required/show-required';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'rxjs/Observable';
// import { BloodBanksPage } from '../blood-banks/blood-banks';

/**
 * Generated class for the RequiredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-required',
  templateUrl: 'required.html',
})
export class RequiredPage {
 required :AngularFireList<any>;
  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams , public db:AngularFireDatabase , public localNotifications:LocalNotifications) {
    fire.auth.onAuthStateChanged(function(user){
   if(!user){
     navCtrl.setRoot(LoginPage);
   }
   console.log(user);
    });
    this.required = db.list('/required'); 
    this.localNotifications.on("click" ,(notification ,state) =>{
      
        this.navCtrl.push(ShowRequiredPage 
        )
      })
  }

  addRequired( name , bloodtype ,age , phone , location , notes){
   let  d = new Date();
   let time = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
      this.required.push({
    name:name,
    bloodtype:bloodtype,
    age:age,
    phone:phone,
    location:location,
    notes:notes,
    decs:0- Date.now(),
    time:time
  }).then(newPerson =>{
    this.navCtrl.push(ShowRequiredPage , {
      name :name,
      bloodtype:bloodtype,
      age:age,
      phone:phone,
      location:location,
      notes:notes,
      time:time
    })
  },error => {
    console.log(error);
  }
)

   this.localNotifications.schedule({
  id: 1,
    title:'مطلوب فصيلة ' +bloodtype ,
  text: 'يوجد شخص يحتاج الى التبرع بالدم يرجى التوجه الى مستشفى  ' + location,
  
});
  }


}
