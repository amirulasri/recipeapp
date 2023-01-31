import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutrecipePage } from './aboutrecipe.page';

const routes: Routes = [
  {
    path: '',
    component: AboutrecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutrecipePageRoutingModule {}
