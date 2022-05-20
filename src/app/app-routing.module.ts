import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './users/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./users/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'quizlanding',
    loadChildren: () =>
      import('./quiz/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'in-progress',
    loadChildren: () =>
      import('./quiz/in-progress/in-progress.module').then(
        (m) => m.InProgressPageModule
      ),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./content/overview/overview.module').then(
        (m) => m.OverviewPageModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'course-landing',
    loadChildren: () =>
      import('./course-landing/course-landing.module').then(
        (m) => m.CourseLandingPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
