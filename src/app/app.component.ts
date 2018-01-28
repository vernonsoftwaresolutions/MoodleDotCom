import { Component } from '@angular/core';
import { LoginComponent } from './dialog/login.component';
import { DialogService } from 'ng2-bootstrap-modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialogService: DialogService) { }
  login(){
    const disposable = this.dialogService.addDialog(LoginComponent, {
      title: 'Login',
      message: 'Please provide your email'})
      .subscribe(() => {
          //We get dialog result
          disposable.unsubscribe();
      });
  }
}
