import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IconsMenu } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getIconMenu() {
    return this.http.get<IconsMenu[]>('/assets/data/activities.json');
  }
}
