import { TournamentService } from './../tournament.service';
import { pluck } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organizer } from 'src/app/models/Organizer';

@Component({
  selector: 'app-tournament-organizer',
  templateUrl: './tournament-organizer.component.html',
  styleUrls: ['./tournament-organizer.component.scss'],
})
export class TournamentOrganizerComponent implements OnInit {
  id!: string;
  organizer!: Organizer;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService
  ) {}

  ngOnInit(): void {
    this.getIdParameterFromRoute();

    this.getTournamentOrganizerById(this.id);
  }

  getTournamentOrganizerById(id: string): void {
    this.tournamentService.getOrganizer(id).subscribe((value: Organizer) => {
      this.organizer = value;
    });
  }

  getIdParameterFromRoute(): void {
    this.route.params.pipe(pluck('id')).subscribe((id) => {
      this.id = id;
    });
  }
}
