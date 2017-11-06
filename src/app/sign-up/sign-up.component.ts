import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  addForm: FormGroup;
  
  constructor(private signUpService: SignUpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      })
  }

  createUser(){
    if (this.addForm.valid) {
      var adduser = {
          firstName: this.addForm.controls['firstName'].value,
          lastName: this.addForm.controls['lastName'].value,          
          email: this.addForm.controls['email'].value,
          phoneNumber: this.addForm.controls['phoneNumber'].value,
          
      };
      console.log("about to add user")
      console.log(adduser);// adduser var contains all our form values. store it where you want 
      this.signUpService.postUser(adduser).subscribe(user => {
        alert("created user with id " + user.id);
      });
      this.addForm.reset();// this will reset our form values to null 
    }
  }
   
}
