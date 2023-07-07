import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Sales } from '../models/sales.model';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getSalesData(): Observable<Sales[]> {
    return this.http.get<Sales[]>(this.url + '/sales');
  }
}
