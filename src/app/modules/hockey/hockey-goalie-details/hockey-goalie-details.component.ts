import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { HockeyGoalie } from '../../../models/hockey-goalie.model';
import { HockeyGoalService } from '../../../services/hockey-goal-service';
import { HockeyAssistService } from '../../../services/hockey-assist-service';
import { HockeyGoal } from '../../../models/hockey-goal.model';
import { HockeyGoalSummaryGridItem } from '../../../models/hockey-goal-summary-grid-item';
import { HockeyAssistSummaryGridItem } from '../../../models/hockey-assist-summary-grid-item';
import { HockeyAssist } from '../../../models/hockey-assist.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../../../shared/data-table/data-table.component';
import { CustomColumn } from '../../../models/custom-column.model';
import { PieChartComponent } from '../../../shared/pie-chart/pie-chart.component';
import { ChartType } from 'angular-google-charts';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class FeatureModule {}
@Component({
  selector: 'app-hockey-goalie-details',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatTabsModule,
    DataTableComponent,
    PieChartComponent,
  ],
  templateUrl: './hockey-goalie-details.component.html',
  styleUrl: './hockey-goalie-details.component.scss',
})
export class HockeyGoalieDetailsComponent {
  @Input() hockeyGoalie?: HockeyGoalie;
  public hockeyGoals: HockeyGoal[] = [];
  public hockeyAssists: HockeyAssist[] = [];
  public hockeyGoalSummaryGridItems: HockeyGoalSummaryGridItem[] = [];
  public hockeyAssistSummaryGridItems: HockeyAssistSummaryGridItem[] = [];
  public hockeyGoalPieChartData: [string, number][] = [];
  public pieChartInfo: any;
  public goalTableDetails: CustomColumn[] = [
    { columnRef: 'firstName', columnHeader: 'First Name' },
    { columnRef: 'lastName', columnHeader: 'Last Name' },
    { columnRef: 'cityCode', columnHeader: 'Default Team' },
    { columnRef: 'goalCount', columnHeader: 'Total Goals' },
  ];
  public assistTableDetails: CustomColumn[] = [
    { columnRef: 'firstName', columnHeader: 'First Name' },
    { columnRef: 'lastName', columnHeader: 'Last Name' },
    { columnRef: 'cityCode', columnHeader: 'Default Team' },
    { columnRef: 'assistCount', columnHeader: 'Total Assists' },
  ];

  constructor(
    private hockeyGoalService: HockeyGoalService,
    private hockeyAssistService: HockeyAssistService
  ) {}

  ngOnInit(): void {
    this.getHockeyGoalPieChartItems();
    this.getHockeyGoals();
    this.getHockeyAssists();
    this.getHockeyGoalSummaryGridItems();
    this.getHockeyAssistSummaryGridItems();
  }

  private getHockeyGoals(): void {
    this.hockeyGoalService
      .getGoalsByHockeyGoalie(
        this.hockeyGoalie?.goalieID ? this.hockeyGoalie.goalieID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyGoals = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  private getHockeyAssists(): void {
    this.hockeyAssistService
      .getAssistsByHockeyGoalie(
        this.hockeyGoalie?.goalieID ? this.hockeyGoalie.goalieID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyAssists = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  private getHockeyGoalSummaryGridItems(): void {
    this.hockeyGoalService
      .getGoalSummaryGridItems(
        this.hockeyGoalie?.goalieID ? this.hockeyGoalie.goalieID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyGoalSummaryGridItems = data;
        },
        (error) => {
          console.error('Error fetching Goals:', error);
        }
      );
  }

  private getHockeyAssistSummaryGridItems(): void {
    this.hockeyAssistService
      .getAssistSummaryGridItems(
        this.hockeyGoalie?.goalieID ? this.hockeyGoalie.goalieID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyAssistSummaryGridItems = data;
        },
        (error) => {
          console.error('Error fetching Assists:', error);
        }
      );
  }

  private getHockeyGoalPieChartItems(): void {
    this.hockeyGoalService
      .getGoalPieChartData(
        this.hockeyGoalie?.goalieID ? this.hockeyGoalie.goalieID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyGoalPieChartData = data.map((item) => [
            item.positionCode,
            item.goalCount,
          ]);
          this.pieChartInfo = {
            type: ChartType.PieChart,
            data: this.hockeyGoalPieChartData,
            options: {
              title: 'Goals By Position',
              is3D: false,
              pieHole: 0.4,
              colors: [
                '#1E90FF', // Dodger Blue
                '#A9A9A9', // Dark Gray
                '#90EE90', // Light Green
                '#40E0D0', // Turquoise
                '#000000', // Black
                '#D3D3D3', // Light Gray
                '#4682B4', // Steel Blue
                '#5F9EA0', // Cadet Blue
              ],
            },
            width: 500,
            height: 300,
          };
        },
        (error) => {
          console.error('Error fetching Position', error);
        }
      );
  }

  public onHockeyGoalSummarySelected(selectedRow: HockeyGoalie): void {
    console.log("");
  }

  public onHockeyAssistSummarySelected(selectedRow: HockeyGoalie): void {
    console.log("");
  }
}
