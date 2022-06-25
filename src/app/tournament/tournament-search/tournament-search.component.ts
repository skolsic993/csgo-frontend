import { TournamentService } from './../tournament.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private tournamentService: TournamentService,
  ) {}

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
  

  ngOnInit(): void {}

  filterTournament(event: any): void {
    this.getSuggestedTournamentsByName(event.query);

    this.tournamentService.searchTournaments({ name: event.query})
  }

  selected(event: any): void { 
    this.tournamentService.searchTournaments(event.name)
  }

  getSuggestedTournamentsByName(query: string): void {
    let filtered: TournamentSearchTemplate[] = [];
    
    for (let i = 0; i < this.suggestedTournaments.length; i++) {
      let country = this.suggestedTournaments[i];
      country.name.toLowerCase().indexOf(query.toLowerCase()) === 0 && filtered.push(country)
    }

    this.filteredTournaments = filtered;

    this.tournamentService.searchTournaments({ name: query });
  }

}
