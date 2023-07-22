import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sales } from '../models/sales.model';
import { IconsMenu } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getSalesData(): Observable<IconsMenu[]> {
    return this.http.get<IconsMenu[]>('../assets/data/lottery.json');
  }
}
