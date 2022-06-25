
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TournamentRequestsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
    headers: req.headers.set('authorization', 'b4c6651f-d22a-427d-8754-381a4f75220d'),
    withCredentials: true
    });

    return next.handle(modifiedReq);
  }
}