import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalstepsPageRoutingModule } from './finalsteps-routing.module';

import { FinalstepsPage } from './finalsteps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalstepsPageRoutingModule
  ],
  declarations: [FinalstepsPage]
})
export class FinalstepsPageModule {}
