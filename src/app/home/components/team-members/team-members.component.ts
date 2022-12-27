import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceitAccount } from 'src/app/models/FaceitAccount';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent implements OnInit {
  @Input() listOfFriends: Observable<FaceitAccount[]>;

  constructor() {}

  ngOnInit(): void {}
}
