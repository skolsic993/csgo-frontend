import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hub } from 'src/app/models/Hub';

@Component({
  selector: 'app-user-hubs',
  templateUrl: './user-hubs.component.html',
  styleUrls: ['./user-hubs.component.scss'],
})
export class UserHubsComponent implements OnInit {
  @Input() userHubs$: Observable<Hub[]>;

  constructor() {}

  ngOnInit(): void {}
}
