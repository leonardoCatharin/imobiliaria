import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'imovel',
    loadChildren: () => import('./imovel/imovel.module').then( m => m.ImovelPageModule)
  },
  {
    path: 'componentesadicionais',
    loadChildren: () => import('./componentesadicionais/componentesadicionais.module').then( m => m.ComponentesadicionaisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
