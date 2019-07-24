import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginAndRegistrationComponent } from './login-and-registration/login-and-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// if user is logged in -> let him through, if not redirect him to /login (like the example bellow)

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: '/dashboard'},
  { path:'users', component: UserComponent},
  { path:'login', component: LoginAndRegistrationComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'teams', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
