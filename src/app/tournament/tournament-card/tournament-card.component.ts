import { Component, Input, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/Tournament';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent implements OnInit {

  @Input() tournament!: Tournament;

  constructor() { }

  ngOnInit(): void {
  }

}
