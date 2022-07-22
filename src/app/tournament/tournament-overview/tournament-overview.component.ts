import { Organizer } from './../../../../../csgo-backend/src/models/organizer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-overview',
  templateUrl: './tournament-overview.component.html',
  styleUrls: ['./tournament-overview.component.scss']
})
export class TournamentOverviewComponent implements OnInit {

  @Input() organizer: Organizer;

  constructor() { }

  ngOnInit(): void {
  }

  getFaceitUrl(): string {
    const faceitUrl = this.organizer?.faceit_url;
    const newFaceitUrl = faceitUrl?.replace('{lang}', 'en');
  
    return newFaceitUrl;
  }

}
