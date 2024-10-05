import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HockeyLeagueService } from '../../services/hockey-league.service';
import { HockeyLeague } from '../../models/hockey-league.model';
import { HockeyHeaderComponent } from './hockey-header/hockey-header.component';
import { HockeyGoalieListComponent } from './hockey-goalie-list/hockey-goalie-list.component';
import { HockeyGoalieDetailsComponent } from './hockey-goalie-details/hockey-goalie-details.component';
import { NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HockeyGoalie } from '../../models/hockey-goalie.model';

@Component({
  selector: 'app-hockey-main',
  standalone: true,
  imports: [CommonModule, HockeyHeaderComponent, HockeyGoalieListComponent, HockeyGoalieDetailsComponent],
  templateUrl: './hockey-main.component.html',
  styleUrl: './hockey-main.component.scss',
})
export class HockeyMainComponent {
  public hockeyLeagues: HockeyLeague[] = [];
  public selectedLeague?: HockeyLeague = undefined;
  public selectedGoalie?: HockeyGoalie = undefined;
  public isLeagueSelected: boolean = false;
  public showGoalies: boolean = false;
  public showGoalieDetails: boolean = false;
  constructor(private hockeyLeagueService: HockeyLeagueService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.hockeyLeagueService.getHockeyLeagues().subscribe(
      (data) => {
        this.hockeyLeagues = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  public onLeagueSelect(selection: any) {
    this.selectedLeague = selection;
    this.isLeagueSelected = true;
  }

  public onShowGoalies() {
    this.showGoalies = true;
    this.isLeagueSelected = false;
  }

  public onClearLeagueSelection() {
    this.selectedLeague = undefined;
    this.isLeagueSelected = false;
    this.showGoalies = false;
  }

  public onShowHockeyGoalieDetails(item: any): void {
    console.log(item);
    this.showGoalieDetails = true;
    this.selectedGoalie = item;

  }

  public onClearHockeyGoalieSelection(): void {
    this.showGoalieDetails = false;
    this.selectedGoalie = undefined;
  }
}
