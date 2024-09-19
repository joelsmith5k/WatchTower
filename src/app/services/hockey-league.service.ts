import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HockeyLeague } from '../models/hockey-league.model'; // Import the model
import { HockeyTeam } from '../models/hockey-team.model'; // Import the model

@Injectable({
  providedIn: 'root',
})
export class HockeyLeagueService {

  private baseUrl = 'http://localhost:5127/api/';
  private entity = 'HockeyLeague';

  constructor(private http: HttpClient) {}

  getHockeyLeagues(): Observable<HockeyLeague[]> {
    return this.http.get<HockeyLeague[]>(this.baseUrl + this.entity);
  }
}



  