import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { TournamentOrganizerComponent } from './tournament-organizer/tournament-organizer.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: TournamentsComponent }],
  },
  {
    path: ':id',
    component: TournamentOrganizerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
