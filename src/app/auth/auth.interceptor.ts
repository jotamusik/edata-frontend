import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthInterceptorClass implements HttpInterceptor {
  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    if (this.auth.getUserToken() != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.auth.getUserToken()}`
        }
      });
    }
    return next.handle(request).catch(err => {
      if (err.status === 401 || err.status === 403) {
        return of(null);
      } else {
        return throwError(err);
      }
    });
  }
}

export let AuthInterceptor = {
  provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorClass, multi: true
};
