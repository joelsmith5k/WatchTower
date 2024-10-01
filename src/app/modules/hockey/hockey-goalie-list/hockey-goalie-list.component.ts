import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HockeyLeague } from '../../../models/hockey-league.model';
import { NgModule } from '@angular/core';
import { DataTableComponent } from '../../../shared/data-table/data-table.component';

import { HockeyGoalieService } from '../../../services/hockey-goalie.service';
import { HockeyGoalie } from '../../../models/hockey-goalie.model';
import { CustomColumn } from '../../../models/hockey-column-def';

@Component({
  selector: 'app-hockey-goalie-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, DataTableComponent],
  templateUrl: './hockey-goalie-list.component.html',
  styleUrl: './hockey-goalie-list.component.scss',
})
export class HockeyGoalieListComponent {
  @Input() hockeyLeague?: HockeyLeague;
  public hockeyGoalies: HockeyGoalie[] = [];
  public goalieTableHeaders = ['Goalie Code', 'First Name', 'Last Name'];
  public goalieTableProperties = ['goalieCode', 'firstName', 'lastName'];
  public tableDetails: CustomColumn[] = [
    { columnRef: 'goalieCode', columnHeader: 'Goalie Code' },
    { columnRef: 'firstName', columnHeader: 'First Name' },
    { columnRef: 'lastName', columnHeader: 'Last Name' },
    { columnRef: 'teamCode', columnHeader: 'Team' },
  ];

  constructor(private hockeyGoalieService: HockeyGoalieService) {}

  ngOnInit(): void {
    this.getHockeyGoalies();
  }

  private getHockeyGoalies(): void {
    this.hockeyGoalieService
      .getHockeyGoaliesByLeague(
        this.hockeyLeague?.leagueID ? this.hockeyLeague.leagueID : 0
      )
      .subscribe(
        (data) => {
          this.hockeyGoalies = data;
          this.hockeyGoalies.map((x) => (x.teamCode = x.hockeyTeam?.cityCode));
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}