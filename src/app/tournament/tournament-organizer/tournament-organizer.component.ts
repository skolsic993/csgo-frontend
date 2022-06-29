import { TournamentService } from './../tournament.service';
import { pluck } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-organizer',
  templateUrl: './tournament-organizer.component.html',
  styleUrls: ['./tournament-organizer.component.scss']
})
export class TournamentOrganizerComponent implements OnInit {

  id!: string;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService
  ) { }

  ngOnInit(): void {
    this.getIdParameterFromRoute();

    this.getTournamentOrganizerById(this.id);
  }

  getTournamentOrganizerById(id: string) {
    this.tournamentService.getOrganizer(id).subscribe((value) => {
      console.log(value)
    })
  }

  getIdParameterFromRoute(): void {
    this.route.params.pipe(
      pluck('id')
    ).subscribe((id) => {
      this.id = id;
    })
  }

}
