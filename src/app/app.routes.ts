import { Routes } from '@angular/router';

/**
 * Establezco como ruta default que se vea la galería dentro de home
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.HomeComponent);
    },
  },
];
