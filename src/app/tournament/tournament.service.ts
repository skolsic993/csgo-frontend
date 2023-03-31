import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Tournament } from './../models/Tournament';

interface TournamentResponse {
  start: number;
  end: number;
  items: Tournament[];
}

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  getAllTournaments(): Observable<{ items: Tournament[] }> {
    const url = 'http://localhost:1337/api/tournaments';

    return this.http.get<{ items: Tournament[] }>(`${url}`);
  }

  getTournamentDetails(id: string): Observable<Tournament> {
    const url = 'http://localhost:1337/api/tournaments';

    return this.http.get<Tournament>(`${url}/${id}/details`);
  }

  searchTournaments(credentials: any): Observable<Tournament[]> {
    const url: string =
      'https://counter-strike-backend.herokuapp.com/api/tournaments';

    return this.http
      .get<TournamentResponse>(`${url}/${credentials.name}`)
      .pipe(pluck('items'));
  }

  getOrganizer(id: string) {
    const url =
      'https://counter-strike-backend.herokuapp.com/api/tournaments/organizer';

    return this.http.get<any>(`${url}/${id}`);
  }
}
