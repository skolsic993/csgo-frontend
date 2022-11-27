import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceitAccount } from '../models/FaceitAccount';
import { UserStats } from '../models/UserStats';

@Injectable({
  providedIn: 'root',
})
export class HomeStatisticsServiceService {
  constructor(private http: HttpClient) {}

  public getUserStatistics(nick: string): Observable<FaceitAccount> {
    const url = 'http://localhost:1337/api/nickname';

    return this.http.get<FaceitAccount>(`${url}/${nick}`);
  }

  public getStats(id: string): Observable<UserStats> {
    const url = 'http://localhost:1337/api/stats';

    return this.http.get<UserStats>(`${url}/${id}`);
  }
}
