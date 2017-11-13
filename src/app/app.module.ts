import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './dialog/confirm.component';
import { SuccessComponent } from './dialog/success.component';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpService } from './sign-up/sign-up.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchSitesComponent } from './search-sites/search-sites.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'search',
    component: SearchSitesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ConfirmComponent,
    SuccessComponent,
    LandingPageComponent,
    SearchSitesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BootstrapModalModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app

  ],
  entryComponents: [
    ConfirmComponent,
    SuccessComponent
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
