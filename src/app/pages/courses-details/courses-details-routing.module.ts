import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesDetailsPage } from './courses-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesDetailsPageRoutingModule {}
