import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HockeyLeague } from '../../../models/hockey-league.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-hockey-header',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './hockey-header.component.html',
  styleUrl: './hockey-header.component.scss',
})
export class HockeyHeaderComponent {
  @Input() hockeyLeagues: HockeyLeague[] = [];
  @Output() clearLeagueSelection = new EventEmitter<any>();
  @Output() leagueSelectionChange = new EventEmitter<any>();
  @Output() showGoaliesChange = new EventEmitter<any>();

  public isLeagueSelected: boolean = false;
  public showGoalies: boolean = false;

  onSelectLeague(item: any) {
    this.leagueSelectionChange.emit(item);
    this.isLeagueSelected = true;
  }

  onShowGoalies() {
    this.isLeagueSelected = false;
    this.showGoalies = true;
    this.showGoaliesChange.emit(true);
  }

  onClearLeagueSelection() {
    this.clearLeagueSelection.emit(true);
    this.showGoalies = false;
    this.isLeagueSelected = false;
  }
}
