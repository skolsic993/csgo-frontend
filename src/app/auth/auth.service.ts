import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './../models/User';

interface SignUpCredentials {
  name: string;
  email: string;
  nick: string;
  password: string;
  passwordConfirmation: string;
}

interface AuthCheckResponse {
  authenticated: boolean;
  name: string;
  nick: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private rootUrl = 'http://localhost:1337/api';
  public signedIn$ = new BehaviorSubject<null | boolean>(null);
  public user$ = new BehaviorSubject<User>(null);
  public nick$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  emailAvailable(email: string) {
    return this.http.post<User>(`${this.rootUrl}/user`, {
      email,
    });
  }

  signup(credentials: SignUpCredentials) {
    return this.http
      .post<User>(`${this.rootUrl}/auth/signup`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  signin(credentials: SignUpCredentials) {
    return this.http
      .post<User>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  checkAuthStatus(): Observable<AuthCheckResponse> {
    return this.http
      .get<AuthCheckResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated, nick }) => {
          this.nick$.next(nick);
          this.signedIn$.next(authenticated);
        })
      );
  }
}
