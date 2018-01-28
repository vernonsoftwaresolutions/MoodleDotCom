import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { SearchSiteService } from '../search-sites/search-sites.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
export interface LoginModel {
  title: string;
  message: string;
}
@Component({
    selector: 'confirm',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Confirm'}}</h4>
                   </div>
                   <div class="modal-body">
                     <p>{{message || 'Are you sure?'}}</p>
                   </div>
                   
                   <form class="form-inline">

                
                    <div class="form-group mx-sm-3 mb-2" id="emaildiv">
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email" #email>
                    </div>

                    <button (click)="login(email.value)" class="btn btn-primary mb-2">Login</button>
                    </form>

                    <div class="modal-footer">
                     <button type="button" class="btn btn-default"  >Cancel</button>
                   </div>
                 </div>
              </div>`
})
export class LoginComponent extends DialogComponent<LoginModel, boolean> implements LoginModel {
  title: string;
  message: string;
  public notFound: boolean = false;

  constructor(dialogService: DialogService, 
    private searchService: SearchSiteService, private router: Router) {
    super(dialogService);
  }
  login(email) {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.searchService.getAccountByEmail(email).subscribe(result => {
        console.log("returned result account ", result)
        //now lookup account      
        this.close();  
        this.router.navigate(['/search', result.id]);

    })
  
  }


}
