import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComicPage } from './search-comic.page';

const routes: Routes = [
  {
    path: '',
    component: SearchComicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchComicPageRoutingModule {}
