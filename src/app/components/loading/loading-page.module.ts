import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPageRoutingModule } from './loading-page-routing.module';

import { LoadingPage } from './loading-page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoadingPageRoutingModule],
  declarations: [LoadingPage],
})
export class LoadingPagePageModule {}
