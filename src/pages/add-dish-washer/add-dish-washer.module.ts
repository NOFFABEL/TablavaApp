import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDishWasherPage } from './add-dish-washer';

@NgModule({
  declarations: [
    AddDishWasherPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDishWasherPage),
  ],
})
export class AddDishWasherPageModule {}
