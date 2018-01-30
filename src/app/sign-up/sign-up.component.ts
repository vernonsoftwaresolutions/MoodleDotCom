import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuccessComponent } from '../dialog/success.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  addForm: FormGroup;
  registerLoading: any = 0;

  constructor(private signUpService: SignUpService,
    private dialogService: DialogService,
     private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      companyName: ['', Validators.required],
      // isTosRead: [false, Validators.pattern('true')],
      });
  }

  createAccount(){
    if (this.addForm.valid) {
      this.registerLoading = 1;
      const addAccount = {
          firstName: this.addForm.controls['firstName'].value,
          lastName: this.addForm.controls['lastName'].value,
          email: this.addForm.controls['email'].value,
          phoneNumber: this.addForm.controls['phoneNumber'].value,
          companyName: this.addForm.controls['companyName'].value,

      };
      console.log(addAccount); // adduser var contains all our form values. store it where you want
      this.signUpService.postAccount(addAccount).subscribe(account => {
            const disposable = this.dialogService.addDialog(SuccessComponent, {
              title: 'Successfully Created Site',
              message: 'Moodle site ' + account.companyName + ' was succesfully created for account ' + account.firstName})
              .subscribe(() => {
                  //We get dialog result
                  this.router.navigate(['/search', account.id]);

                  disposable.unsubscribe();
              });
          // this.registerLoading = 0;
          // this.addForm.reset(); // this will reset our form values to null

      });

    }
  }

}
