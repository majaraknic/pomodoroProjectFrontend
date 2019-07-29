import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {

    const token = localStorage.getItem('token');

    if (
      !this.auth.isAuthenticated()
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}