import { TournamentRequestsInterceptor } from './tournament-requests-interceptor';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentSearchComponent } from './tournament-search/tournament-search.component';
import { AuthHttpInterceptor } from '../auth/auth-http-interceptor';

@NgModule({
  declarations: [TournamentSearchComponent],
  imports: [CommonModule, TournamentRoutingModule, SharedModule, AutoCompleteModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ]
})
export class TournamentModule {}
