import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IconsMenu } from 'src/interfaces';
import { HomeService } from '../../../services/home.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;
  iconMenus: Observable<IconsMenu[]>;
  constructor(
    private homeService: HomeService,
    private platform: Platform,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getIconMenu();
    console.log(this.platform.platforms());
    this.username = localStorage.getItem('username');
  }

  getIconMenu() {
    this.iconMenus = this.homeService.getIconMenu();
  }
}
