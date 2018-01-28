import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SignUpService {

  constructor(private http: Http) { }

  // Get all posts from the API
  postAccount(account: any) {
    //todo-add some sort of loading animation
    return this.http.post(environment.postAccountUrl, account)
      .map(res => res.json());
  }


}
