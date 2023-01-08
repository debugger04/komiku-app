import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-read-comic',
  templateUrl: './read-comic.page.html',
  styleUrls: ['./read-comic.page.scss'],
})
export class ReadComicPage implements OnInit {
  pages: any = {};
  currrentId: string = '';
  comment: string = '';
  comments: any[] = [];
  rating: number = 0;

  constructor(private readonly komikuService: KomikuService, private readonly route: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        this.getComic(params['id']);
        this.currrentId = params['id'];
        this.setRating(params['id']);
        this.showComments(params['id']);
      }
    });
  }

  async presentToast(type: string, message: string) {
    let icon = '';
    let color = ''
    if (type == 'success') {
      icon = 'checkmark-circle-outline';
      color = 'success';
    } else {
      icon = 'close-circle-outline';
      color = 'danger';
    }
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      icon: icon,
      color: color,
    });

    await toast.present();
  }

  getComic(id: string): void {
    this.komikuService.getComicRead(id).subscribe({
      next: (res: any) => {
        if (res.result == 'success') {
          this.pages = res.data[0];
        }
      }
    })
  }

  addFavorites(): void {
    const user_id: string = localStorage.getItem('user_id') || '';
    this.komikuService.addToFavorites(this.currrentId, user_id).subscribe({
      next: (res: any) => {
        if (res.result == 'success') {
          this.presentToast('success', 'Successfully added to favorites!');
        } else {
          this.presentToast('failed', 'Failed, already in your favorites list!');
        }
      }
    });
  }

  logout(): void {
    this.komikuService.logout();
  }

  setRating(id: string): void {
    this.komikuService.setRating(id).subscribe();
  }

  addComments(): void {
    const user_id: string = localStorage.getItem('user_id') || '';
    this.komikuService.addComment(this.currrentId, user_id, this.comment).subscribe({
      next: (res) => {
        if (res.result == 'success') {
          this.presentToast('success', 'Successfully comment!');
          this.showComments(this.currrentId);
          this.comment = '';
        } else {
          this.presentToast('failed', 'Failed to send comment!');
        }
      }
    });
  }

  showComments(komik_id: string): void {
    this.komikuService.showComment(komik_id).subscribe({
      next: (res) => {
        this.comments = res.data;
      }
    });
  }

  addRating(): void {
    const user_id: string = localStorage.getItem('user_id') || '';
    if (this.rating < 1) {
      this.presentToast('failed', 'Minimal rate number is 1!');
    } else if (this.rating > 5) {
      this.presentToast('failed', 'Maximal rate number is 5!');
    } else {
      this.komikuService.addRating(this.rating, this.currrentId, user_id).subscribe({
        next: (res) => {
          if (res.result == 'success') {
            this.presentToast('success', 'Successfully rated this comic!');
          } else {
            this.presentToast('failed', 'Failed to rate this comic!');
          }
        }
      });
    }
  }

}
