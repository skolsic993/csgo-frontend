import { Component, OnInit } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Tournament } from 'src/app/models/Tournament';
import { TournamentService } from './../tournament.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
})
export class TournamentsComponent implements OnInit {
  public tournaments$: Observable<Tournament[]>;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.tournaments$ = this.tournamentService
      .getAllTournaments()
      .pipe(pluck('items'));
  }
}
