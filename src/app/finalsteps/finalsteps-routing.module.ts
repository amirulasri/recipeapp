import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalstepsPage } from './finalsteps.page';

const routes: Routes = [
  {
    path: '',
    component: FinalstepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalstepsPageRoutingModule {}
