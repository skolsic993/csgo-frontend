import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/models/Tournament';

@Component({
  selector: 'app-tournaments-body',
  templateUrl: './tournaments-body.component.html',
  styleUrls: ['./tournaments-body.component.scss'],
})
export class TournamentsBodyComponent implements OnInit {
  @Input() tournaments$: Observable<Tournament[]>;

  constructor() {}

  ngOnInit(): void {}
}
