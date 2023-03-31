import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: TournamentsComponent }],
  },
  {
    path: ':id',
    component: AppLayoutComponent,
    children: [{ path: '', component: TournamentDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
