import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tutoring',
    loadChildren: () => import('./pages/tutoring/tutoring.module').then( m => m.TutoringPageModule)
  },
  {
    path: 'courses',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/courses-details/courses-details.module').then( m => m.CoursesDetailsPageModule)
      }
    ]
  },
  {
    path: 'school',
    loadChildren: () => import('./pages/school/school.module').then( m => m.SchoolPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
