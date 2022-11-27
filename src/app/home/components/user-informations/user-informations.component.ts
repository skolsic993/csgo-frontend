import { Component, Input, OnInit } from '@angular/core';
import { FaceitAccount } from './../../../models/FaceitAccount';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss'],
})
export class UserInformationsComponent implements OnInit {
  @Input() faceitAccount: FaceitAccount;

  constructor() {}

  ngOnInit(): void {}
}
