import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // The document title is managed by I18nService so it follows the language.
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '**', redirectTo: '' },
];
