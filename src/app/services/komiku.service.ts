import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KomikuService {
  private baseUrl = 'https://ubaya.fun/hybrid/160419014/komik_api/';

  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  login(username: string, password: string): Observable<any> {
    let body: HttpParams = new HttpParams().append('user_id', username).append('user_password', password);
    return this.http.post(this.baseUrl+'login.php', body);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  getAllComics(): Observable<any> {
    return this.http.get(this.baseUrl+'komiklist.php');
  }

  getCategory(): Observable<any> {
    return this.http.get(this.baseUrl+'kategori.php');
  }

  comicList(kategori_id: string): Observable<any> {
    let params = new HttpParams().append('kategori', kategori_id);
    return this.http.post(this.baseUrl+'komiklist.php', params);
  }

  getFavorites(user: string): Observable<any> {
    let param = new HttpParams().append('user_id', user);
    return this.http.post(this.baseUrl+'showFavorit.php', param);
  }

  getComicRead(id: string): Observable<any> {
    let param = new HttpParams().append('komik', id);
    return this.http.post(this.baseUrl+'gambar.php', param);
  }

  addToFavorites(komik_id: string, user_id: string): Observable<any> {
    let param = new HttpParams().append('komik_id', komik_id).append('user_id', user_id);
    return this.http.post(this.baseUrl+'favorit.php', param);
  }

  searchComic(name: string): Observable<any> {
    let param = new HttpParams().append('cari', name);
    return this.http.post(this.baseUrl+'cari.php', param);
  }

  setRating(id: string): Observable<any> {
    let param = new HttpParams().append('komik_id', id);
    return this.http.post(this.baseUrl+'showView.php', param);
  }

  addComment(komik_id: string, user_id: string, comment: string): Observable<any> {
    let param = new HttpParams().append('komik_id', komik_id).append('user_id', user_id).append('komentar', comment);
    return this.http.post(this.baseUrl+'addKomentar.php', param);
  }
  
  showComment(komik_id: string): Observable<any> {
    let params = new HttpParams().append('komik_id', komik_id);
    return this.http.post(this.baseUrl+'showKomentar.php', params);
  }

  addRating(rating: number, komik_id: string, user_id: string): Observable<any> {
    let params = new HttpParams().append('rating', rating).append('komik_id', komik_id).append('user_id', user_id);
    return this.http.post(this.baseUrl+'addRating.php', params);
  }

}
