import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Observable } from 'rxjs';
import { IconsMenu } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  iconMenus: Observable<IconsMenu[]>;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getIconMenu();
  }

  getIconMenu() {
    this.iconMenus = this.homeService.getIconMenu();
  }
}
