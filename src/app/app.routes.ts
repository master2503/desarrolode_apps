import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'otra-pagina',
    loadComponent: () => import('./paginas/otra-pagina/otra-pagina.page').then( m => m.OtraPaginaPage)
  },
  {
    path: 'eliminados',
    loadComponent: () => import('./paginas/eliminados/eliminados.page').then( m => m.EliminadosPage)
  },
  {
    path: 'personajes',
    loadComponent: () => import('./paginas/personajes/personajes.page').then( m => m.PersonajesPage)
  },
];
