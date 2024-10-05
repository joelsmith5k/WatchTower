import { Component, Input } from '@angular/core';
import { HockeyGoalie } from '../../../models/hockey-goalie.model';
import { HockeyGoalService } from '../../../services/hockey-goal-service';
import { HockeyGoal } from '../../../models/hockey-goal.model';

@Component({
  selector: 'app-hockey-goalie-details',
  standalone: true,
  imports: [],
  templateUrl: './hockey-goalie-details.component.html',
  styleUrl: './hockey-goalie-details.component.scss',
})
export class HockeyGoalieDetailsComponent {
  @Input() hockeyGoalie?: HockeyGoalie;
  public hockeyGoals: HockeyGoal[] = [];

  constructor(private hockeyGoalService: HockeyGoalService) {}

  ngOnInit(): void {
    this.getHockeyGoals();
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
}
