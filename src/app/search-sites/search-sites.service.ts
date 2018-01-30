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

  //get account by id
  getAccountById(id: string){
    let url = environment.getAccountsById.replace(':aid', id)
    return this.http.get(url)
    .map(res => res.json())
  }
  //create new site
  createSite(request: any, id: string){
    let url = environment.postSiteUrl.replace(':aid', id)
    return this.http.post(url, request)
    .map(res => res.json())
  }
  //get account by id
  deleteSite(accountId: string, siteId: string){
    let url = environment.deleteSiteUrl.replace(':aid', accountId).replace(':sid', siteId)
    return this.http.delete(url,{})
    .map(res => res.json())
  }
//deleteSiteUrl
}