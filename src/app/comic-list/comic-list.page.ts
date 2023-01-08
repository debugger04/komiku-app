import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.page.html',
  styleUrls: ['./comic-list.page.scss'],
})
export class ComicListPage implements OnInit {
  comics: any[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly komikuService: KomikuService) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        this.comicList(params['id']);
      }
    });
  }

  comicList(kategori: string): void {
    this.komikuService.comicList(kategori).subscribe({
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
