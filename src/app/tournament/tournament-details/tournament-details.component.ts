import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from './../../../../../csgo-reacty/src/models/Tournament';
import { TournamentService } from './../tournament.service';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.scss'],
})
export class TournamentDetailsComponent implements OnInit {
  public tournament$: Observable<Tournament>;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.tournament$ = this.tournamentService.getTournamentDetails(
      'ffffb42e-fce8-4beb-9f6d-feeb1e0cb6b7'
    );
  }
}
