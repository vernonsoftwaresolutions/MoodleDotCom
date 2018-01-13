import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchSiteService {

  constructor(private http: Http) { }
  
  ngOnInit() {
  }

  // Get all sites by accountid from the API
  getSitesPerAccount(accountId: string) {
    //create url
    let url = environment.getSitesByAccount.replace(':aid', accountId)

    console.log('created url ', url)

    return this.http.get(url)
      .map(res => res.json());
  }
  // get account by email
  getAccountByEmail(email: string){
    //create url
    let url = environment.getAccountsByEmail.replace(':email', email)
    console.log('created url ', url)
    return this.http.get(url)
    .map(res => res.json());
  }

}