import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceitAccount } from './../../../models/FaceitAccount';
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

  constructor() {}

  ngOnInit(): void {}
}
