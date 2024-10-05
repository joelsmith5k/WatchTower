import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HockeyGoalie } from '../../../models/hockey-goalie.model';
import { HockeyGoalService } from '../../../services/hockey-goal-service';
import { HockeyAssistService } from '../../../services/hockey-assist-service';
import { HockeyGoal } from '../../../models/hockey-goal.model';
import { HockeyAssist } from '../../../models/hockey-assist.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class FeatureModule {}
@Component({
  selector: 'app-hockey-goalie-details',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './hockey-goalie-details.component.html',
  styleUrl: './hockey-goalie-details.component.scss',
})
export class HockeyGoalieDetailsComponent {
  @Input() hockeyGoalie?: HockeyGoalie;
  public hockeyGoals: HockeyGoal[] = [];
  public hockeyAssists: HockeyAssist[] = [];

  constructor(
    private hockeyGoalService: HockeyGoalService,
    private hockeyAssistService: HockeyAssistService
  ) {}

  ngOnInit(): void {
    this.getHockeyGoals();
    this.getHockeyAssists();
  }

  private getHockeyGoals(): void {
    this.hockeyGoalService
      .getGoalsByHockeyGoalie(
        this.hockeyGoalie?.goalieID ? this.hockeyGoalie.goalieID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyGoals = data;
          console.log(this.hockeyGoals);
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
          console.log(this.hockeyAssists);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
