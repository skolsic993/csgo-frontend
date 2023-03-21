import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.checkAuthStatus().subscribe();

    return this.authService.signedIn$.pipe(
      skipWhile((value: boolean | null) => value === null),
      take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/signin');
        }
      })
    );
  }
}
