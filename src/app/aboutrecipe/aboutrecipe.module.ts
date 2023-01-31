import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutrecipePageRoutingModule } from './aboutrecipe-routing.module';

import { AboutrecipePage } from './aboutrecipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutrecipePageRoutingModule
  ],
  declarations: [AboutrecipePage]
})
export class AboutrecipePageModule {}
