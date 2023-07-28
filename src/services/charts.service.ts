import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChartOptions } from 'src/app/components/charts/charts.component';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getChartsData(): Observable<ChartOptions[]> {
    return this.http.get<ChartOptions[]>('../assets/data/charts.json');
  }
}
