import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchComicPageRoutingModule } from './search-comic-routing.module';

import { SearchComicPage } from './search-comic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchComicPageRoutingModule
  ],
  declarations: [SearchComicPage]
})
export class SearchComicPageModule {}
