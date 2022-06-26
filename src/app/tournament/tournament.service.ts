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
  private url: string = 'https://counter-strike-backend.herokuapp.com/api/tournaments'

  constructor(private http: HttpClient) {}

  searchTournaments(credentials: any): Observable<Tournament[]> {
    return this.http.get<TournamentResponse>(`${this.url}/${credentials.name}`)
      .pipe(pluck('items'));
  }
}
