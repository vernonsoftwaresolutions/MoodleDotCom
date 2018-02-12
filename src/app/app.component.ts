import { Component } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialogService: DialogService) { }
  login(){
    // const disposable = this.dialogService.addDialog(LoginComponent, {
    //   title: 'Login',
    //   message: 'Please provide your email'})
    //   .subscribe(() => {
    //       //We get dialog result
    //       disposable.unsubscribe();
    //   });
    let url = environment.loginUrl + "/login?response_type=code&client_id=" + 
    environment.clientId + "&redirect_uri=" + environment.redirctUrl
    window.location.replace(url)
  }
}
