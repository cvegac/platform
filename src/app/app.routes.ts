import { Routes } from '@angular/router';
import { PublicGuard, PrivateGuard } from './auth/guards';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [PublicGuard],
    loadComponent: () =>
      import('./auth/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    canActivate: [PublicGuard],
    loadComponent: () =>
      import('./auth/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'dashboard',
    canActivate: [PrivateGuard],
    loadComponent: () =>
      import('./dashboard/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/pages/welcome/welcome.component').then(
            (m) => m.WelcomeComponent
          ),
      },
      {
        path: 'welcome',
        loadComponent: () =>
          import('./dashboard/pages/welcome/welcome.component').then(
            (m) => m.WelcomeComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
