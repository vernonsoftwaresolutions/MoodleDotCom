import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../dialog/confirm.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 44.9477204;
    lng: number = -93.0873056;
    contactEmail = "contact@vssolutions.com"
    address = "214 4th St E, St Paul, MN 55101"
    phoneNumber = "+1 (314) 680 0219"
    constructor(private dialogService: DialogService) { }
    ngOnInit() {
    }

    openSignUp() {
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

    openMail(name:string, email:string, subject:string, message:string){
        window.location.href = "mailto:"+this.contactEmail+"?subject="+subject+"&body="+message;
    }

}
