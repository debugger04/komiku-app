import { Component, OnInit } from '@angular/core';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-search-comic',
  templateUrl: './search-comic.page.html',
  styleUrls: ['./search-comic.page.scss'],
})
export class SearchComicPage implements OnInit {
  comicName: string = '';
  comics: any[] = [];

  constructor(private readonly komikuService: KomikuService) { }

  ngOnInit() {
  }

  searchComic(): void {
    this.komikuService.searchComic(this.comicName).subscribe({
      next: (res: any) => {
        if (res.result == 'success') {
          this.comics = res.data;
        }
      }
    });
  }

  logout(): void {
    this.komikuService.logout();
  }
  
}
