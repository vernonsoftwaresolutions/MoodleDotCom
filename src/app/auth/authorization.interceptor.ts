import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("adding values to requsts")
    req = req.clone({
      setHeaders: {
        Authorization: `${localStorage.get('idToken')}`
      }
    });

    return next.handle(req);
  }
}