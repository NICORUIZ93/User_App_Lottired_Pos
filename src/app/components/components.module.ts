import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FingerprintComponent } from './fingerprint/fingerprint.component';

@NgModule({
  declarations: [HeaderComponent, ChartsComponent, FingerprintComponent],
  imports: [CommonModule, IonicModule, NgApexchartsModule],
  exports: [HeaderComponent, ChartsComponent, FingerprintComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
