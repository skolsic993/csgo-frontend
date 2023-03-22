import { TournamentRequestsInterceptor } from './tournament-requests-interceptor';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { PickListModule } from 'primeng/picklist';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentSearchComponent } from './tournament-search/tournament-search.component';
import { AuthHttpInterceptor } from '../auth/auth-http-interceptor';
import { TournamentCardComponent } from './tournament-card/tournament-card.component';
import { ButtonModule } from 'primeng/button';
import { TournamentOrganizerComponent } from './tournament-organizer/tournament-organizer.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentOverviewComponent } from './tournament-overview/tournament-overview.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentHeaderCardsComponent } from './tournament-header-cards/tournament-header-cards.component';
import { TournamentHeaderCardComponent } from './tournament-header-card/tournament-header-card.component';

@NgModule({
  declarations: [TournamentSearchComponent, TournamentCardComponent, TournamentOrganizerComponent, TournamentDetailsComponent, TournamentOverviewComponent, TournamentsComponent, TournamentHeaderCardsComponent, TournamentHeaderCardComponent],
  imports: [
    CommonModule, 
    TournamentRoutingModule, 
    SharedModule, 
    ButtonModule,
    AutoCompleteModule, 
    FormsModule, 
    PickListModule, 
    RippleModule,
    ChipModule,
    TabViewModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ]
})
export class TournamentModule {}
