import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequiredPage } from './required';

@NgModule({
  declarations: [
    RequiredPage,
  ],
  imports: [
    IonicPageModule.forChild(RequiredPage),
  ],
})
export class RequiredPageModule {}
