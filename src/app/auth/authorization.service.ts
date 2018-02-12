import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthorizationService {

  constructor(private http: Http) { }

  // Get all posts from the API
  postToken(code: string) {
    //todo-add some sort of loading animation
    let body = new URLSearchParams();
    body.set("grant_type", "authorization_code")
    body.set("client_id", environment.clientId)
    body.set("code", code)
    body.set("redirect_uri", environment.redirctUrl)

    console.log("created body ", body)
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded'); 
    let options = new RequestOptions({
        // Have to make a URLSearchParams with a query string
        headers: myHeaders
    });
    console.log("created options ", options)

    return this.http.post(environment.tokenUrl,body.toString(), options)
      .map(res => res.json());
  }


}
