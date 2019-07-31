import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/httpclient.service';
import { LoginAndRegistrationComponent } from './login-and-registration/login-and-registration.component';
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuardService } from './auth/auth-guard.service';
// import { AuthService } from './auth/auth.service';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginAndRegistrationComponent,
    DashboardComponent,
    TeamComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // AuthGuardService,
    // AuthService
  ],
  providers: [
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
