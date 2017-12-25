import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { ShowRequiredPage } from '../show-required/show-required';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-required',
  templateUrl: 'required.html',
})
export class RequiredPage {
 required :AngularFireList<any>;
 uid;
 name=""
  bloodtype=""
  age=""
  phone=""
  location=""
  notes=""
   state=""
  constructor(public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams , public db:AngularFireDatabase , public localNotifications:LocalNotifications) {
    fire.auth.onAuthStateChanged(function(user){
   if(!user){
     navCtrl.setRoot(LoginPage);
   }
   console.log(user);
    });
    this.required = db.list('/required'); 
    this.fire.authState.subscribe(auth =>{
      if (auth) {
        this.uid=auth.uid;
        console.log(auth);
      }
        
  
   })
    this.localNotifications.on("click" ,(notification ,state) =>{
      
        this.navCtrl.push(ShowRequiredPage 
        )
      })
  }

  addRequired( name , bloodtype ,age , phone , location , state , notes){
   let  d = new Date();
   let time = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
      this.required.push({
    "name":name,
    "bloodtype":bloodtype,
    "age":age,
    "phone":phone,
    "location":location,
    "notes":notes,
    "decs":0- Date.now(),
    "time":time,
    "state":state,
    "hide":"0",
    "addedby":this.uid,
  }).then(newPerson =>{
    this.navCtrl.push(ShowRequiredPage)
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
