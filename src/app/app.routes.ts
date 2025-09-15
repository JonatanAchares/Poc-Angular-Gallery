// src/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'gallery',
    loadComponent: () => {
      return import('./components/gallery/gallery').then((m) => m.GalleryComponent);
    },
  },
  {
    path: 'favorites',
    loadComponent: () => {
      return import('./components/favorites/favorites').then((m) => m.FavoritesComponent);
    },
  },
  {
    path: '**',
    redirectTo: '',
  }
];