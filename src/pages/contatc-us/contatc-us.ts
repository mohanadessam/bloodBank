import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ContatcUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatc-us',
  templateUrl: 'contatc-us.html',
})
export class ContatcUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatcUsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
