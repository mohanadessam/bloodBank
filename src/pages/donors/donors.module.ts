import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsPage } from './donors';

@NgModule({
  declarations: [
    DonorsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsPage),
  ],
})
export class DonorsPageModule {}
