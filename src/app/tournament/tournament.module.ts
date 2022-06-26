import { TournamentRequestsInterceptor } from './tournament-requests-interceptor';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { PickListModule } from 'primeng/picklist';
import { RippleModule } from 'primeng/ripple';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentSearchComponent } from './tournament-search/tournament-search.component';
import { AuthHttpInterceptor } from '../auth/auth-http-interceptor';
import { TournamentCardComponent } from './tournament-card/tournament-card.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TournamentSearchComponent, TournamentCardComponent],
  imports: [
    CommonModule, 
    TournamentRoutingModule, 
    SharedModule, 
    ButtonModule,
    AutoCompleteModule, 
    FormsModule, 
    PickListModule, 
    RippleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ]
})
export class TournamentModule {}
