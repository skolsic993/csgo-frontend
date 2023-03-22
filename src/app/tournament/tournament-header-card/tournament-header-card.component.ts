import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-header-card',
  templateUrl: './tournament-header-card.component.html',
  styleUrls: ['./tournament-header-card.component.scss'],
})
export class TournamentHeaderCardComponent implements OnInit {
  @Input() background: string;
  @Input() image: string;
  @Input() icon: string;
  @Input() title: string;
  @Input() subtitle: string;

  constructor() {}

  ngOnInit(): void {}
}
