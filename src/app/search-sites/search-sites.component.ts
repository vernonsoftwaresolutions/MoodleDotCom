import { Component, OnInit } from '@angular/core';
import { SearchSiteService } from './search-sites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-sites',
  templateUrl: './search-sites.component.html',
  styleUrls: ['./search-sites.component.css']
})
export class SearchSitesComponent implements OnInit {
  sub: any

  sites: any = []
  account: any = {}
  private id: any

  constructor(private searchService: SearchSiteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      //lookup sites and account in parallel
      this.getSitesByAccountId(this.id)
      this.getAccountId(this.id)
    });

  }
  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
  

  getAccountId(accountId: string){
    this.searchService.getAccountById(accountId).subscribe(result => {
        console.log("returned result account ", result)
        this.account = result;        
    })

  }
  getSitesByAccountId(accountId: string){
    this.searchService.getSitesPerAccount(accountId).subscribe(result => {
      console.log("returned result ", result)
      this.sites = result
    })
  
  }

  createSite(siteName: string){
    //create request 
    let request = {
      email: this.account.email,
      url: "https://" + siteName,
      clientName: this.account.companyName,
      siteName: siteName
    }
    this.searchService.createSite(request, this.account.id).subscribe(result => {
      console.log("returned result ", result)
      //refresh sites
      this.getSitesByAccountId(this.account.id)
    })
  }
}
