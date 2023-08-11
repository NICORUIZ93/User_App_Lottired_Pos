import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/login.model';
import { Register } from 'src/models/register.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.url;
  user = [];

  constructor(private http: HttpClient, private router: Router) {}

  signin(data: Login) {
    this.http.post(this.url + '/auth/login', data).subscribe({
      next: (value: any) => {
        localStorage.setItem('auth_token', value.token);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.router.navigate(['/tabs']);
      },
    });
  }

  signup(data: Register) {
    this.http.post(this.url + '/auth/register', data).subscribe({
      next: (value: any) => {
        localStorage.setItem('auth_token', value.token);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.router.navigate(['/login/signin']);
      },
    });
  }

  logout() {
    this.http.post(this.url + '/authentication/logout', {});
  }

  getToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/auth/login', this.user).subscribe(
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
