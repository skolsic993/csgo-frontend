import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceitAccount } from '../models/FaceitAccount';
import { UserStats } from '../models/UserStats';
import { Hub } from './../models/Hub';

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

  public getPlayerById(id: string): Observable<FaceitAccount> {
    const url = 'http://localhost:1337/api/players';

    return this.http.get<FaceitAccount>(`${url}/${id}`);
  }

  public getFriendsFaceitAccount(ids: string[]): Observable<FaceitAccount[]> {
    const url = 'http://localhost:1337/api/friends';
    const properIds = ids.join('&&');

    return this.http.get<FaceitAccount[]>(`${url}/${properIds}`);
  }

  public getHubs(id: string): Observable<{ items: Hub[] }> {
    const url = 'http://localhost:1337/api/hubs';

    return this.http.get<{ items: Hub[] }>(`${url}/${id}`);
  }
}
