import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HockeyAssist } from '../models/hockey-assist.model';

@Injectable({ providedIn: 'root' })
export class HockeyAssistService {
  private baseUrl = 'http://localhost:5127/api/';
  private entity = 'HockeyAssist';
  constructor(private http: HttpClient) {}

  getHockeyAssists(): Observable<HockeyAssist[]> {
    return this.http.get<HockeyAssist[]>(this.baseUrl + this.entity);
  }

  getAssistsByHockeyGoalie(goalieId: number): Observable<HockeyAssist[]> {
    return this.http.get<HockeyAssist[]>(
      this.baseUrl + this.entity + '/goalie/' + goalieId
    );
  }
}
