import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './dialog/confirm.component';
import { SuccessComponent } from './dialog/success.component';
import { LoginComponent } from './dialog/login.component';
import { DeleteComponent } from './dialog/delete.component';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpService } from './sign-up/sign-up.service';
import { SearchSiteService } from './search-sites/search-sites.service';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchSitesComponent } from './search-sites/search-sites.component';

//angular google maps
import { AgmCoreModule } from '@agm/core';

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
    path: 'search/:id',
    component: SearchSitesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ConfirmComponent,
    LoginComponent,
    DeleteComponent,
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
    RouterModule.forRoot(ROUTES), // Add routes to the app
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZymo_1zNz2Y8LvKrCw4w2K_56dTBKQcs'
    })
  ],
  entryComponents: [
    ConfirmComponent,
    LoginComponent,
    DeleteComponent,
    SuccessComponent
  ],
  providers: [SignUpService, SearchSiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
