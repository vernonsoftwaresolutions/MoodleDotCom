import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { SearchSiteService } from '../search-sites/search-sites.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
export interface DeleteModel {
  title: string;
  message: string;
  accountId: string;
  siteId: string;
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

                    </form>

                    <div class="modal-footer">
                    <button (click)="deleteSite()" class="btn btn-primary danger mb-2"><i [ngClass]="{'fa fa-spinner fa-spin': deleteLoading == 1}"></i>  Confirm</button>
                   </div>
                 </div>
              </div>`
})
export class DeleteComponent extends DialogComponent<DeleteModel, boolean> implements DeleteModel {
  title: string;
  message: string;
  accountId: string;
  siteId: string;
  public notFound: boolean = false;
  public deleteLoading = 0;

  constructor(dialogService: DialogService, 
    private searchService: SearchSiteService, private router: Router) {
    super(dialogService);
  }
  deleteSite(){
    this.deleteLoading = 1;
    this.searchService.deleteSite(this.accountId, this.siteId).subscribe(result => {
        this.close();  
        console.log("successfully triggered delete")
    })
  }


}
