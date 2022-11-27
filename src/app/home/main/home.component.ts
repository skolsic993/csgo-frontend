import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { FaceitAccount } from 'src/app/models/FaceitAccount';
import { HomeStatisticsServiceService } from '../home-statistics-service.service';
import { UserStats } from './../../models/UserStats';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public signedIn$: BehaviorSubject<boolean | null>;
  public faceitAccount$: Observable<FaceitAccount>;
  public userStats$: Observable<UserStats>;

  constructor(
    public authService: AuthService,
    private homeStatisticsService: HomeStatisticsServiceService
  ) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    this.authService.checkAuthStatus().subscribe();

    this.faceitAccount$ = this.authService.nick$.pipe(
      switchMap((nick: string) => {
        return this.getUserByNickname(nick).pipe(
          map((response: FaceitAccount) => ({
            ...response,
            faceit_url: response.faceit_url.replace('{lang}', 'en'),
          }))
        );
      }),
      shareReplay()
    );

    this.userStats$ = this.faceitAccount$.pipe(
      switchMap((response: FaceitAccount) => {
        return this.getUserStatistics(response.player_id);
      }),
      shareReplay()
    );
  }

  public getUserByNickname(nick: string): Observable<FaceitAccount> {
    return this.homeStatisticsService.getUserStatistics(nick);
  }

  public getUserStatistics(id: string): Observable<UserStats> {
    return this.homeStatisticsService.getStats(id);
  }
}
