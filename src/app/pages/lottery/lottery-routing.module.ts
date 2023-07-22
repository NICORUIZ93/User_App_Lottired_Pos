import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotteryPage } from './lottery.page';

const routes: Routes = [
  {
    path: '',
    component: LotteryPage
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then( m => m.SalePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotteryPageRoutingModule {}
