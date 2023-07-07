import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ToastService } from './toast.service';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.url;
  user = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService
  ) {}

  signin(data: any) {
    this.user = data;
    this.http.post(this.url + '/authentication/sign-in', this.user).subscribe({
      next: (value: any) => {
        localStorage.setItem('auth_token', value.token);
      },
      error: (err) => {
        this.toastService.showToast(err.name, err.message, Status.danger);
        console.log(err);
      },
      complete: () => {
        this.toastService.showToast(
          'Este es el titulo de la notificacion!!!',
          'Este el el cuerpo del mensaje',
          Status.success
        );
        this.router.navigate(['/sales']);
      },
    });
  }

  signup(data: any): Observable<any> {
    return this.http.post(this.url + '/authentication/sign-up', data);
  }

  logout() {
    this.http.post(this.url + '/authentication/sign-in', {});
  }

  getToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/authentication/sign-in', this.user).subscribe(
        (data: any) => {
          localStorage.setItem('auth_token', data.token);
          resolve(data.token ? true : false);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
