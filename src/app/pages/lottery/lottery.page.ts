import { IconsMenu } from 'src/interfaces';
import { SalesService } from './../../../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.page.html',
  styleUrls: ['./lottery.page.scss'],
})
export class LotteryPage implements OnInit {
  saleMenu: Observable<IconsMenu[]>;
  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.saleMenu = this.salesService.getSalesData();
  }
}
