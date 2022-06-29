import { Observable, pluck } from 'rxjs';
import { Tournament } from './../models/Tournament';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface TournamentResponse {
  start: number;
  end: number;
  items: Tournament[];
}

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) {}

  searchTournaments(credentials: any): Observable<Tournament[]> {
    const url: string = 'https://counter-strike-backend.herokuapp.com/api/tournaments'

    return this.http.get<TournamentResponse>(`${url}/${credentials.name}`)
      .pipe(pluck('items'));
  }

  getOrganizer(id: string) {
    const url = 'https://counter-strike-backend.herokuapp.com/api/tournaments/organizer';

    return this.http.get<any>(`${url}/${id}`);
  }
}
