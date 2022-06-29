import { TournamentOrganizerComponent } from './tournament-organizer/tournament-organizer.component';
import { TournamentSearchComponent } from './tournament-search/tournament-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TournamentSearchComponent,
  },
  {
    path: ':id',
    component: TournamentOrganizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
