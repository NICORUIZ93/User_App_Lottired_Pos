import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage  {
  constructor(private router: Router) {
  }

  

  signin() {
    this.router.navigate(['/tabs']);
  }
}
