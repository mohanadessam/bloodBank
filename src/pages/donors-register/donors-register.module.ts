import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsRegisterPage } from './donors-register';

@NgModule({
  declarations: [
    DonorsRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsRegisterPage),
  ],
})
export class DonorsRegisterPageModule {}
