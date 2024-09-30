import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HockeyLeague } from '../../../models/hockey-league.model';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-hockey-goalie-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './hockey-goalie-list.component.html',
  styleUrl: './hockey-goalie-list.component.scss',
})
export class HockeyGoalieListComponent {
  @Input() hockeyLeague?: HockeyLeague = undefined;
}
