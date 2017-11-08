import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuccessComponent } from '../dialog/success.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  addForm: FormGroup;

  constructor(private signUpService: SignUpService,
    private dialogService: DialogService,
     private formBuilder: FormBuilder) { }

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

  createUser(){
    if (this.addForm.valid) {
      const adduser = {
          firstName: this.addForm.controls['firstName'].value,
          lastName: this.addForm.controls['lastName'].value,
          email: this.addForm.controls['email'].value,
          phoneNumber: this.addForm.controls['phoneNumber'].value,
          companyName: this.addForm.controls['companyName'].value,

      };
      console.log('about to add user');
      console.log(adduser); // adduser var contains all our form values. store it where you want
      this.signUpService.postUser(adduser).subscribe(user => {
            const disposable = this.dialogService.addDialog(SuccessComponent, {
              title: 'Successfully Created Moodel Instance',
              message: 'Moodle instance ' + user.companyName + ' was succesfully created for user ' + user.firstName})
              .subscribe(() => {
                  //We get dialog result
                  disposable.unsubscribe();
              });
      });
      this.addForm.reset(); // this will reset our form values to null
    }
  }

}
