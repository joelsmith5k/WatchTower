import { Component } from '@angular/core';
import { HockeyLeagueService } from '../../../../services/hockey-league.service';
import { HockeyLeague } from '../../../../models/hockey-league.model';
import { NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hockey-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hockey-main.component.html',
  styleUrl: './hockey-main.component.scss'
})
export class HockeyMainComponent {

  public hockeyLeagues: HockeyLeague[] = [];
  constructor(private hockeyLeagueService: HockeyLeagueService) {};

  ngOnInit(): void {
    this.getData();
    console.log('enterd hockey main ng oninit');
  }

  private getData(): void {
    this.hockeyLeagueService.getHockeyLeagues().subscribe(
      (data) => {
        console.log(data);
        this.hockeyLeagues = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
