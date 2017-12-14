import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ColorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colors',
  templateUrl: 'colors.html',
})
export class ColorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
