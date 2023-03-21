import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FaceitAccount } from './../../../models/FaceitAccount';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss'],
})
export class UserInformationsComponent implements OnInit {
  @Input() faceitAccount: FaceitAccount;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public signout(): void {
    this.authService.signout().subscribe();
    this.router.navigateByUrl('/signin');
  }
}
