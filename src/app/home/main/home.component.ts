import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, pluck } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { FaceitAccount } from 'src/app/models/FaceitAccount';
import { Hub } from 'src/app/models/Hub';
import { Rank } from 'src/app/models/Rank';
import { HomeStatisticsServiceService } from '../home-statistics-service.service';
import { GlobalTournament } from './../../../../../csgo-backend/src/models/global-tournament';
import { Segment } from './../../models/Segment';
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
  public segments$: Observable<Segment[]>;
  public listOfFriends$: Observable<FaceitAccount[]>;
  public userHubs$: Observable<Hub[]>;
  public globalRanks$: Observable<Rank[]>;
  public tournaments$: Observable<GlobalTournament[]>;

  constructor(
    public authService: AuthService,
    private homeStatisticsService: HomeStatisticsServiceService,
    private router: Router
  ) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    //this.authService.checkAuthStatus().subscribe();

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

    this.userHubs$ = this.faceitAccount$.pipe(
      switchMap((response: FaceitAccount) => {
        return this.getUserHubs(response.player_id);
      }),
      shareReplay(),
      pluck('items')
    );

    this.tournaments$ = this.getTournaments().pipe(
      shareReplay(),
      pluck('items')
    );

    this.globalRanks$ = this.faceitAccount$.pipe(
      switchMap((response: FaceitAccount) => {
        return this.getGlobalRanks(response.games?.csgo.region);
      }),
      shareReplay(),
      pluck('items')
    );

    this.segments$ = this.userStats$.pipe(pluck('segments'));

    this.listOfFriends$ = this.faceitAccount$.pipe(
      pluck('friends_ids'),
      switchMap((ids: string[]) => {
        return this.getFriendsAccount(ids);
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

  public getPlayer(id: string): Observable<FaceitAccount> {
    return this.homeStatisticsService.getPlayerById(id);
  }

  public getFriendsAccount(ids: string[]): Observable<FaceitAccount[]> {
    return this.homeStatisticsService.getFriendsFaceitAccount(ids);
  }

  public getUserHubs(id: string): Observable<{ items: Hub[] }> {
    return this.homeStatisticsService.getHubs(id);
  }

  public getGlobalRanks(id: string): Observable<{ items: Rank[] }> {
    return this.homeStatisticsService.getRanks(id);
  }

  public getTournaments(): Observable<{ items: GlobalTournament[] }> {
    return this.homeStatisticsService.getGlobalTournaments();
  }
}
