import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tutoring',
        loadChildren: () => import('../pages/tutoring/tutoring.module').then(m => m.TutoringPageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../pages/courses/courses.module').then(m => m.CoursesPageModule)
      },
      {
        path: 'school',
        loadChildren: () => import('../pages/school/school.module').then(m => m.SchoolPageModule)
      },
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
