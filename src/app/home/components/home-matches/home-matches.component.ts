import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-matches',
  templateUrl: './home-matches.component.html',
  styleUrls: ['./home-matches.component.scss'],
})
export class HomeMatchesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToMatches(): void {
    this.router.navigateByUrl('/matches');
  }
}
