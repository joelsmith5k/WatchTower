import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HockeyLeague } from '../models/hockey-league.model';
import { HockeyTeam } from '../models/hockey-team.model';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class HockeyLeagueService {

  private baseUrl = environment.apiBaseUrl;
  private entity = 'HockeyLeague';
  constructor(private http: HttpClient) { }

  getHockeyLeagues(): Observable<HockeyLeague[]> {
    return this.http.get<HockeyLeague[]>(this.baseUrl + this.entity);
  }
}



  