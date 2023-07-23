import { HttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Observable } from 'rxjs';
import { IconsMenu } from 'src/interfaces';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  iconMenus: Observable<IconsMenu[]>;
  constructor(
    private homeService: HomeService,
    private platform: Platform,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getIconMenu();
    console.log(this.platform);
    this.httpClient
      .get('http://localhost:8080/TEST', { responseType: 'text' })
      .subscribe({
        next: (value) => {
          console.log(value);
        },
      });
  }

  getIconMenu() {
    this.iconMenus = this.homeService.getIconMenu();
  }
}
