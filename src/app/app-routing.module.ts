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
    path: 'aboutrecipe',
    loadChildren: () => import('./aboutrecipe/aboutrecipe.module').then( m => m.AboutrecipePageModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then( m => m.IngredientsPageModule)
  },
  {
    path: 'cooksteps',
    loadChildren: () => import('./cooksteps/cooksteps.module').then( m => m.CookstepsPageModule)
  },
  {
    path: 'finalsteps',
    loadChildren: () => import('./finalsteps/finalsteps.module').then( m => m.FinalstepsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
