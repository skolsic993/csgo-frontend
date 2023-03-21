import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tournament',
  templateUrl: './home-tournament.component.html',
  styleUrls: ['./home-tournament.component.scss'],
})
export class HomeTournamentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToTournament(): void {
    this.router.navigateByUrl('/tournaments');
  }
}
