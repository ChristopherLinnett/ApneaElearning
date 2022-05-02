import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailContentPage } from './detail-content.page';

const routes: Routes = [
  {
    path: '',
    component: DetailContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailContentPageRoutingModule {}
