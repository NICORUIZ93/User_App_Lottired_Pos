import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotteryPageRoutingModule } from './lottery-routing.module';

import { LotteryPage } from './lottery.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotteryPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LotteryPage],
})
export class LotteryPageModule {}
