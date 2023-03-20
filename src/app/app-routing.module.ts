import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/main/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
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
