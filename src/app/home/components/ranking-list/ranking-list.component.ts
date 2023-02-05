import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rank } from 'src/app/models/Rank';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss'],
})
export class RankingListComponent implements OnInit {
  @Input() globalRanks$: Observable<Rank[]>;

  constructor() {}

  ngOnInit(): void {}
}
