import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HockeyLeagueService } from '../../../services/hockey-league.service';
import { HockeyLeague } from '../../../models/hockey-league.model';
import { HockeyHeaderComponent } from '../hockey-header/hockey-header.component';
import { NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hockey-main',
  standalone: true,
  imports: [CommonModule, HockeyHeaderComponent],
  templateUrl: './hockey-main.component.html',
  styleUrl: './hockey-main.component.scss',
})
export class HockeyMainComponent {
  public hockeyLeagues: HockeyLeague[] = [];
  public selectedLeague?: HockeyLeague = undefined;
  public isLeagueSelected: boolean = false;
  public showGoalies: boolean = false;
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
}
