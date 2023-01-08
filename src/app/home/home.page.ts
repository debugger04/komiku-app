import { Component, OnInit } from '@angular/core';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  comics: any[] = [];

  constructor(private readonly komikuService: KomikuService) {}

  ngOnInit(): void {
    this.getAllComic();

  }

  getAllComic(): void {
    this.komikuService.getAllComics().subscribe({
      next: (result) => {
        this.comics = result.data;
      }
    })
  }

  logout(): void {
    this.komikuService.logout();
  }
}
