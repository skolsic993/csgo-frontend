import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentSearchComponent } from './tournament-search/tournament-search.component';

@NgModule({
  declarations: [TournamentSearchComponent],
  imports: [CommonModule, TournamentRoutingModule, SharedModule],
})
export class TournamentModule {}
