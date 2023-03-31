import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/models/Tournament';

@Component({
  selector: 'app-tournaments-body-card',
  templateUrl: './tournaments-body-card.component.html',
  styleUrls: ['./tournaments-body-card.component.scss'],
})
export class TournamentsBodyCardComponent implements OnInit {
  @Input() tournament: Tournament;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToDetailsPage(id: string) {
    this.router.navigateByUrl(`/tournaments/${id}`);
  }
}
