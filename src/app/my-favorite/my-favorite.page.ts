import { Component, OnInit } from '@angular/core';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
})
export class MyFavoritePage implements OnInit {
  comics: any[] = [];

  constructor(private readonly komikuService: KomikuService) { }

  ngOnInit() {
    this.getAllFavorite();
  }

  getAllFavorite(): void {
    const user_id = localStorage.getItem('user_id') as string;
    this.komikuService.getFavorites(user_id).subscribe({
      next: (res: any) => {
        this.comics = res.data
      }
    })
  }

  logout(): void {
    this.komikuService.logout();
  }

}
