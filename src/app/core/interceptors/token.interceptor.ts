import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { CookieKeys } from '../data/cookies.keys';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _cookieService: CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      this._cookieService.check(CookieKeys.token)
        ? request.clone({
            headers: request.headers.set(
              'Authorization',
              `Bearer ${this._cookieService.get(CookieKeys.token)}`
            ),
          })
        : request
    );
  }
}
