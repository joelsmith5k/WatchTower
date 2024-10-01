import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HockeyGoalie } from '../models/hockey-goalie.model';

@Injectable({ providedIn: 'root' })
export class HockeyGoalieService {
  private baseUrl = 'http://localhost:5127/api/';
  private entity = 'HockeyGoalie';
  constructor(private http: HttpClient) {}

  getHockeyGoalies(): Observable<HockeyGoalie[]> {
    return this.http.get<HockeyGoalie[]>(this.baseUrl + this.entity);
  }

  getHockeyGoaliesByLeague(leagueId: number): Observable<HockeyGoalie[]> {
    return this.http.get<HockeyGoalie[]>(
      this.baseUrl + this.entity + '/league/' + leagueId
    );
  }
}
