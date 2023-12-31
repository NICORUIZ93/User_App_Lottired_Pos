import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getNewsData(): Observable<News[]> {
    return this.http.get<News[]>(environment.url + '/notifications');
  }
}
