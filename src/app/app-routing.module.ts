import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'matches',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./match/match.module').then((mod) => mod.MatchModule),
  },
  {
    path: 'tournaments',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./tournament/tournament.module').then(
        (mod) => mod.TournamentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
