import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartService } from '../../../services/charts.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { Observable } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('charts') chart: ChartComponent;
  chartOptions: Observable<ChartOptions[]>;

  constructor(private chartService: ChartService) {}
  ngOnInit(): void {
    this.chartOptions = this.chartService.getChartsData();
  }
}
