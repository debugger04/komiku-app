import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const check = this.checkUserLoggedIn();
    if (check) {
      this.router.navigateByUrl('/read-comic/2');
    } else {
      this.router.navigateByUrl('/login')
    }
  }

  checkUserLoggedIn(): boolean {
    if (localStorage.getItem('user_id')) {
      return true;
    }
    return false;
  }
}
