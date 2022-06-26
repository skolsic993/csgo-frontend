import { Observable, of } from 'rxjs';
import { TournamentService } from './../tournament.service';
import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/Tournament';

interface TournamentSearchTemplate {
  name: string,
  code: string
}

@Component({
  selector: 'app-tournament-search',
  templateUrl: './tournament-search.component.html',
  styleUrls: ['./tournament-search.component.scss']
})
export class TournamentSearchComponent implements OnInit {

  $tournaments?: Observable<Tournament[]> = of([]);

  suggestedTournaments: TournamentSearchTemplate[] = [
    {"name": "Winter", "code": "WI"}, 
    {"name": "Major", "code": "MJ"}, 
    {"name": "Cup", "code": "CU"},
    {"name": "Cologne", "code": "CO"},
    {"name": "Challenger", "code": "ES"},
    {"name": "ESL", "code": "ES"},
    {"name": "Blast", "code": "BL"}, 
    {"name": "Spanish", "code": "SP"}, 
    {"name": "Adria", "code": "AD"}
  ]

  selectedTournaments!: TournamentSearchTemplate[];
  filteredTournaments!: TournamentSearchTemplate[];
  selectedTournament!: TournamentSearchTemplate;

  constructor(
    private tournamentService: TournamentService,
  ) {}
  
  ngOnInit(): void {}

  filterTournament(event: any): void {
    this.getSuggestedTournamentsByName(event.query);

    this.$tournaments = this.tournamentService.searchTournaments({ name: event.query});
  }

  selected(event: any): void { 
    this.$tournaments = this.tournamentService.searchTournaments({name: event.name})
  }

  getSuggestedTournamentsByName(query: string): void {
    let filtered: TournamentSearchTemplate[] = [];
    
    for (let i = 0; i < this.suggestedTournaments.length; i++) {
      let country = this.suggestedTournaments[i];
      country.name.toLowerCase().indexOf(query.toLowerCase()) === 0 && filtered.push(country)
    }

    this.filteredTournaments = filtered;
  }

}
