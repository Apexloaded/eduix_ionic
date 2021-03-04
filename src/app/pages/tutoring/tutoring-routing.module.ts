import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutoringPage } from './tutoring.page';

const routes: Routes = [
  {
    path: '',
    component: TutoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutoringPageRoutingModule {}
