import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) },
  { path: 'characters', loadComponent: () => import('./pages/characters.component').then(m => m.CharactersComponent) },
  { path: 'schools', loadComponent: () => import('./pages/schools.component').then(m => m.SchoolsComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery.component').then(m => m.GalleryComponent) },
  { path: 'timeline', loadComponent: () => import('./pages/timeline.component').then(m => m.TimelineComponent) },
  { path: 'games', loadComponent: () => import('./pages/games.component').then(m => m.GamesComponent) },
  { path: 'gwent', loadComponent: () => import('./pages/gwent.component').then(m => m.GwentComponent) },
  { path: '**', redirectTo: '' }
];
