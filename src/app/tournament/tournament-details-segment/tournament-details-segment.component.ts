import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-details-segment',
  templateUrl: './tournament-details-segment.component.html',
  styleUrls: ['./tournament-details-segment.component.scss'],
})
export class TournamentDetailsSegmentComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() background: string;

  constructor() {}

  ngOnInit(): void {}
}
