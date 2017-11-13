import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../dialog/confirm.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private dialogService: DialogService) { }
  ngOnInit() {
  }

  openSignUp() {
    console.log('hi');
    const disposable = this.dialogService.addDialog(ConfirmComponent, {
        title: 'Confirm title',
        message: 'Confirm message'})
        .subscribe((isConfirmed) => {
            //We get dialog result
            if (isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(() => {
        disposable.unsubscribe();
    }, 10000);
}

}
