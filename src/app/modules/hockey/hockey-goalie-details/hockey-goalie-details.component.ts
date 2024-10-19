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
  imports: [MatCardModule, CommonModule, MatTabsModule, DataTableComponent],
  templateUrl: './hockey-goalie-details.component.html',
  styleUrl: './hockey-goalie-details.component.scss',
})
export class HockeyGoalieDetailsComponent {
  @Input() hockeyGoalie?: HockeyGoalie;
  public hockeyGoals: HockeyGoal[] = [];
  public hockeyAssists: HockeyAssist[] = [];
  public hockeyGoalSummaryGridItems: HockeyGoalSummaryGridItem[] = [];
  public hockeyAssistSummaryGridItems: HockeyAssistSummaryGridItem[] = [];
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
          console.error('Error fetching hockeyGoalSummaryGridItems:', error);
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
          console.error('Error fetching hockeyAssistSummaryGridItems:', error);
        }
      );
  }

  public onHockeyGoalSummarySelected(selectedRow: HockeyGoalie): void {
    console.log('clicked on goal');
    console.log(selectedRow);
  }

  public onHockeyAssistSummarySelected(selectedRow: HockeyGoalie): void {
    console.log('clicked on assist');
    console.log(selectedRow);
  }
}
