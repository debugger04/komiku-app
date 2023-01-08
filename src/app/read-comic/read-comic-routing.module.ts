import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadComicPage } from './read-comic.page';

const routes: Routes = [
  {
    path: ':id',
    component: ReadComicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadComicPageRoutingModule {}
