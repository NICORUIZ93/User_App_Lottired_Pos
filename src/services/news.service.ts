import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getNewsData(): Observable<News[]> {
    return this.http.get<News[]>(this.url + '/news');
  }
}
