import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { PickListModule } from 'primeng/picklist';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { AuthHttpInterceptor } from '../auth/auth-http-interceptor';
import { TournamentCardComponent } from './tournament-card/tournament-card.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentHeaderCardComponent } from './tournament-header-card/tournament-header-card.component';
import { TournamentHeaderCardsComponent } from './tournament-header-cards/tournament-header-cards.component';
import { TournamentOrganizerComponent } from './tournament-organizer/tournament-organizer.component';
import { TournamentOverviewComponent } from './tournament-overview/tournament-overview.component';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentSearchComponent } from './tournament-search/tournament-search.component';
import { TournamentsBodyCardComponent } from './tournaments-body-card/tournaments-body-card.component';
import { TournamentsBodyComponent } from './tournaments-body/tournaments-body.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailsSegmentComponent } from './tournament-details-segment/tournament-details-segment.component';

@NgModule({
  declarations: [
    TournamentSearchComponent,
    TournamentCardComponent,
    TournamentOrganizerComponent,
    TournamentDetailsComponent,
    TournamentOverviewComponent,
    TournamentsComponent,
    TournamentHeaderCardsComponent,
    TournamentHeaderCardComponent,
    TournamentsBodyComponent,
    TournamentsBodyCardComponent,
    TournamentDetailsSegmentComponent,
  ],
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
    TabViewModule,
    BadgeModule,
    DividerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class TournamentModule {}
