import { Component, OnInit } from '@angular/core';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: any[] = [];

  constructor(private readonly komikuService: KomikuService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.komikuService.getCategory().subscribe({
      next: (res: any) => {
        this.categories = res.data;
      }
    });
  }
  
  logout(): void {
    this.komikuService.logout();
  }

}
