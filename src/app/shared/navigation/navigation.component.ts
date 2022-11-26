import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public register!: MenuItem[];
  public items!: MenuItem[];

  signedIn$!: BehaviorSubject<boolean | null>;

  constructor(
    private authService: AuthService,
    private primengConfig: PrimeNGConfig
  ) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getRegisterLinks();
    this.getItemsLinks();

    this.authService.checkAuthStatus().subscribe(() => {});
  }

  public getRegisterLinks() {
    return (this.register = [
      {
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
        routerLinkActiveOptions: {
          exact: true,
        },
      },
      {
        icon: 'pi pi-fw pi pi-sign-in',
        routerLink: ['/signin'],
      },
      {
        icon: 'assets/images/user-icon.png',
        routerLink: ['/signup'],
      },
    ]);
  }

  public getItemsLinks() {
    return (this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
        routerLinkActiveOptions: {
          exact: true,
        },
      },
      {
        label: 'Matches',
        icon: 'pi pi-fw pi-table',
        routerLink: ['/matches'],
      },
      {
        label: 'Tournaments',
        icon: 'pi pi-fw pi-table',
        routerLink: ['/tournaments'],
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-fw pi pi-sign-out',
        routerLink: ['/signout'],
      },
    ]);
  }
}
