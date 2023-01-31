import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookstepsPage } from './cooksteps.page';

const routes: Routes = [
  {
    path: '',
    component: CookstepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookstepsPageRoutingModule {}
