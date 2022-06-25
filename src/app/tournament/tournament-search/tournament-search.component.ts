import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-search',
  templateUrl: './tournament-search.component.html',
  styleUrls: ['./tournament-search.component.scss']
})
export class TournamentSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  text!: string;

    results!: string[];

    search(event: any) {
        console.log(event)
    }

}
