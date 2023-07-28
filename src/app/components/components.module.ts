import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [HeaderComponent, ChartsComponent],
  imports: [CommonModule, IonicModule, NgApexchartsModule],
  exports: [HeaderComponent, ChartsComponent],
})
export class ComponentsModule {}
