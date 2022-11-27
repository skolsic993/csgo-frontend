import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceitAccount } from './../../../models/FaceitAccount';
import { UserStats } from './../../../models/UserStats';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss'],
})
export class UserStatisticsComponent implements OnInit {
  @Input() faceitAccount$: Observable<FaceitAccount>;
  @Input() userStats$: Observable<UserStats>;

  constructor() {}

  ngOnInit(): void {}
}
