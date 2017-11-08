import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export interface SucessModal {
  title: string;
  message: string;
}
@Component({
    selector: 'confirm',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Action Successful'}}</h4>
                   </div>
                   <div class="modal-body">
                     <p>{{message || 'Success!'}}</p>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="OK()">OK</button>
                   </div>
                 </div>
              </div>`
})
export class SuccessComponent extends DialogComponent<SucessModal, boolean> implements SucessModal {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  OK() {
    // we set close the dialog
    this.close();
  }
}
