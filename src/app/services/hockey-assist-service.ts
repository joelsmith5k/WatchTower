import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HockeyAssist } from '../models/hockey-assist.model';
import { HockeyAssistSummaryGridItem } from '../models/hockey-assist-summary-grid-item';

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

  getAssistSummaryGridItems(
    goalieId: number
  ): Observable<HockeyAssistSummaryGridItem[]> {
    return this.http.get<HockeyAssistSummaryGridItem[]>(
      this.baseUrl + this.entity + '/goalie/' + goalieId + '/aggregate'
    );
  }
}
