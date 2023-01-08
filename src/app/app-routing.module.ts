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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'read-comic',
    loadChildren: () => import('./read-comic/read-comic.module').then( m => m.ReadComicPageModule)
  },
  {
    path: 'my-favorite',
    loadChildren: () => import('./my-favorite/my-favorite.module').then( m => m.MyFavoritePageModule)
  },
  {
    path: 'search-comic',
    loadChildren: () => import('./search-comic/search-comic.module').then( m => m.SearchComicPageModule)
  },
  {
    path: 'comic-list',
    loadChildren: () => import('./comic-list/comic-list.module').then( m => m.ComicListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
