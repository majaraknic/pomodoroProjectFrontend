import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import redirectTo from '../helpers/redirectTo';
import { Router, /*CanActivate*/ } from '@angular/router';
//import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:string[];

  teamId: string = "";

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    // private auth: AuthService
  ) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(response => {
      this.handleSuccessfulResponse(response)
    }, err => {
      console.log('err', err)
      redirectTo(err) && this.router.navigate(['/login'])
    });
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  onUpdateUserSubmit() {
    console.log(this.teamId)

      const userUpdateObj = {
        teamId: this.teamId
    }
    this.httpClientService.updateUser(userUpdateObj)
    .subscribe(response => {
      if (response === null) {
        this.router.navigate(['/users'])
      }
      console.log('response', response)

    }, err => {
      console.log('error:', err);
      // TODO: don't use error.error (change the response)
      redirectTo(err) && this.router.navigate(['/login'])
    });
  }

  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //     return true;
  // }

}
