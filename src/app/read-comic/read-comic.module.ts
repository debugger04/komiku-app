import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadComicPageRoutingModule } from './read-comic-routing.module';

import { ReadComicPage } from './read-comic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadComicPageRoutingModule
  ],
  declarations: [ReadComicPage]
})
export class ReadComicPageModule {}
