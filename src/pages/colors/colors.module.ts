import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColorsPage } from './colors';

@NgModule({
  declarations: [
    ColorsPage,
  ],
  imports: [
    IonicPageModule.forChild(ColorsPage),
  ],
})
export class ColorsPageModule {}
