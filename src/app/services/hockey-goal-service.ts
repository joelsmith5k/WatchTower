import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HockeyGoal } from '../models/hockey-goal.model';

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
}
