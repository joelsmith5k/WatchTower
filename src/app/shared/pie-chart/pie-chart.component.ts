import { Component } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  @Input() chartInfo: any;
  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.chart = this.chartInfo;
  }
}
