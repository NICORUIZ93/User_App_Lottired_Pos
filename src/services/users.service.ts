import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/user/listar', {
      headers: {
        Authorization: 'Basic ' + window.btoa('admin1' + ':' + 'admin1'),
        'Content-Type': 'application/json',
      },
    });
  }

  registerUser(user: User) {
    return this.http.post(this.url + '/user/guardar', user, {
      headers: {
        Authorization: 'Basic ' + window.btoa('admin1' + ':' + 'admin1'),
        'Content-Type': 'application/json',
      },
    });
  }

  deleteUser(id:number) {
    return this.http.delete(this.url + '/user/guardar/' + id, {
      headers: {
        Authorization: 'Basic ' + window.btoa('admin1' + ':' + 'admin1'),
        'Content-Type': 'application/json',
      },
    });
  }
}
