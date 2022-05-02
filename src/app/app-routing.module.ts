import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'quizlanding',
    loadChildren: () => import('./quiz/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'in-progress',
    loadChildren: () => import('./quiz/in-progress/in-progress.module').then( m => m.InProgressPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./content/overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'course-landing',
    loadChildren: () => import('./course-landing/course-landing.module').then( m => m.CourseLandingPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
