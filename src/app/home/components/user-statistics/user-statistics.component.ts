import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hub } from 'src/app/models/Hub';
import { GlobalTournament } from './../../../../../../csgo-backend/src/models/global-tournament';
import { FaceitAccount } from './../../../models/FaceitAccount';
import { Rank } from './../../../models/Rank';
import { Segment } from './../../../models/Segment';
import { UserStats } from './../../../models/UserStats';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss'],
})
export class UserStatisticsComponent implements OnInit {
  @Input() faceitAccount$: Observable<FaceitAccount>;
  @Input() userStats$: Observable<UserStats>;
  @Input() listOfFriends$: Observable<FaceitAccount[]>;
  @Input() segments$: Observable<Segment[]>;
  @Input() userHubs$: Observable<Hub[]>;
  @Input() globalRanks$: Observable<Rank[]>;
  @Input() tournaments$: Observable<GlobalTournament[]>;

  constructor() {}

  ngOnInit(): void {}
}
