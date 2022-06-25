import { BehaviorSubject } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  register!: MenuItem[];
  items!: MenuItem[];

  signedIn$!: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    this.getRegisterLinks();
    this.getItemsLinks();

    this.authService.checkAuthStatus().subscribe(() => {});
  }

  getRegisterLinks() {
    return (this.register = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
        routerLinkActiveOptions: {
          exact: true,
        },
      },
      {
        label: 'Sign In',
        icon: 'pi pi-fw pi pi-sign-in',
        routerLink: ['/signin'],
      },
      {
        label: 'Sign Up',
        icon: 'pi pi-fw pi pi-user-plus',
        routerLink: ['/signup'],
      },
    ]);
  }

  getItemsLinks() {
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
