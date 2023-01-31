import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookstepsPageRoutingModule } from './cooksteps-routing.module';

import { CookstepsPage } from './cooksteps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookstepsPageRoutingModule
  ],
  declarations: [CookstepsPage]
})
export class CookstepsPageModule {}
