import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HockeyGoal } from '../models/hockey-goal.model';
import { HockeyGoalSummaryGridItem } from '../models/hockey-goal-summary-grid-item';
import { HockeyGoalPieChartItem } from '../models/hockey-goal-pie-chart-item copy';

@Injectable({ providedIn: 'root' })
export class HockeyGoalService {
  private baseUrl = 'http://localhost:5127/api/';
  private entity = 'HockeyGoal';
  constructor(private http: HttpClient) {}

  getHockeyGoals(): Observable<HockeyGoal[]> {
    return this.http.get<HockeyGoal[]>(this.baseUrl + this.entity);
  }

  getGoalsByHockeyGoalie(goalieId: number): Observable<HockeyGoal[]> {
    return this.http.get<HockeyGoal[]>(
      this.baseUrl + this.entity + '/goalie/' + goalieId
    );
  }

  getGoalSummaryGridItems(
    goalieId: number
  ): Observable<HockeyGoalSummaryGridItem[]> {
    return this.http.get<HockeyGoalSummaryGridItem[]>(
      this.baseUrl + this.entity + '/goalie/' + goalieId + '/aggregate'
    );
  }

  getGoalPieChartData(goalieId: number): Observable<HockeyGoalPieChartItem[]> {
    return this.http.get<HockeyGoalPieChartItem[]>(
      this.baseUrl + this.entity + '/goalie/' + goalieId + '/pieChartData'
    );
  }
}
