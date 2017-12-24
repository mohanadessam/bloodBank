import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonorsStatePage } from './donors-state';

@NgModule({
  declarations: [
    DonorsStatePage,
  ],
  imports: [
    IonicPageModule.forChild(DonorsStatePage),
  ],
})
export class DonorsStatePageModule {}
