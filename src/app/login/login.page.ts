import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { KomikuService } from '../services/komiku.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";

  constructor(private readonly komikuService: KomikuService, private toastController: ToastController, private readonly router: Router) { }

  ngOnInit() {
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

  login(): void {
    this.komikuService.login(this.username, this.password).subscribe({
      next: (data) => {
        if (data.result == 'success') {
          localStorage.setItem('user_id', data.data.user_id);
          this.presentToast('success', 'Successfully logged in!');
          this.router.navigateByUrl('/home')
        } else {
          this.presentToast('failed', 'Username or Password is incorrect!');
        }
      }
    })
  }

}
