import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodBanksPage } from './blood-banks';

@NgModule({
  declarations: [
    BloodBanksPage,
  ],
  imports: [
    IonicPageModule.forChild(BloodBanksPage),
  ],
})
export class BloodBanksPageModule {}
