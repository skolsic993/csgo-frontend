import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface AuthCheckResponse {
  authenticated: boolean;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://counter-strike-backend.herokuapp.com/api';
  signedIn$ = new BehaviorSubject<null | boolean>(null);

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
        tap((response) => {
          this.signedIn$.next(true);
        })
      );
  }

  signin(credentials: SignUpCredentials) {
    return this.http
      .post<User>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap((response) => {
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

  checkAuthStatus() {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http
      .get<AuthCheckResponse>(`${this.rootUrl}/auth/signedin`, {headers: headers})
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }
}
