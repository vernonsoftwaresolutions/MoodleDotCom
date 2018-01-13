import { Component, OnInit } from '@angular/core';
import { SearchSiteService } from './search-sites.service';

@Component({
  selector: 'app-search-sites',
  templateUrl: './search-sites.component.html',
  styleUrls: ['./search-sites.component.css']
})
export class SearchSitesComponent implements OnInit {
  sites: any = []

  constructor(private searchService: SearchSiteService) { }

  ngOnInit() {
    
    
  }

  searchByEmail(email: string){
    this.searchService.getAccountByEmail(email).subscribe(result => {
        console.log("returned result account ", result)
        //now lookup account
        this.getSitesByAccountId(result.id)
        
    })

  }
  getSitesByAccountId(accountId: string){
    this.searchService.getSitesPerAccount(accountId).subscribe(result => {
      console.log("returned result ", result)
      this.sites = result
    })
  }
}
