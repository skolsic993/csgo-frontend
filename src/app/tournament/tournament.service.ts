import { Tournament } from './../models/Tournament';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private url: string = 'https://counter-strike-backend.herokuapp.com/api/tournaments'

  constructor(private http: HttpClient) {}

  searchTournaments(credentials: any) {
    this.http.get<Tournament>(`${this.url}`, { params: { name: credentials.name} })
    .subscribe((res) => {
      console.log(res)
    })
  }

}
