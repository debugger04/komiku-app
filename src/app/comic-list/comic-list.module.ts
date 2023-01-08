import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicListPageRoutingModule } from './comic-list-routing.module';

import { ComicListPage } from './comic-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicListPageRoutingModule
  ],
  declarations: [ComicListPage]
})
export class ComicListPageModule {}
