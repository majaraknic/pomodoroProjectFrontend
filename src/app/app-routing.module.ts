import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginAndRegistrationComponent } from './login-and-registration/login-and-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService as AuthGuard, AuthGuardService } from './auth/auth-guard.service';
import { TeamComponent } from './team/team.component';


// if user is logged in -> let him through, if not redirect him to /login (like the example bellow)

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: '/dashboard'},
  { path:'users', component: UserComponent},
  { 
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard] 
  },
  { path:'login', component: LoginAndRegistrationComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'teams', component: TeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
