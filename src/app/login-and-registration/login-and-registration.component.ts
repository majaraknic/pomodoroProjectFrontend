import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/httpclient.service';
import { Router } from "@angular/router"
import redirectTo from '../helpers/redirectTo';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login-and-registration',
  templateUrl: './login-and-registration.component.html',
  styleUrls: ['./login-and-registration.component.css']
})
export class LoginAndRegistrationComponent implements OnInit {

  email: string = "";
  fullName: string = "";
  password: string = "";
  passwordConfirmation: string = "";
  error: string = "";

  loginEmail: string = "";
  loginPassword: string = "";

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log(this.email, this.password, this.passwordConfirmation, this.fullName)

    const userRegistrationObj = {
      email: this.email,
      fullName: this.fullName,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    }

    this.httpClientService.registerUser(userRegistrationObj)
      .subscribe(response => {
        if (response === null) {
          this.router.navigate(['/dashboard'])
        }
        console.log('response', response)

      }, err => {
        console.log('error:', err);
        // TODO: don't use error.error (change the response)
        this.error = err.error.message;
      });

  }

  onLoginFormSubmit() {
    console.log(this.loginEmail, this.loginPassword)

    const userLoginObj = {
      email: this.loginEmail,
      password: this.loginPassword
    }

    this.httpClientService.loginUser(userLoginObj)
      .subscribe((response: { success: string, token: string }) => {

        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard'])

      }, err => {
        console.log('error:', err);
        redirectTo(err) && this.router.navigate(['/login'])

        // make a reusable function which takes an error object and checks if status code is 401;
        // if so, redirect to login.
      });
  }

}
