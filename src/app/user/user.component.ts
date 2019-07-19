import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import redirectTo from '../helpers/redirectTo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:string[];

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
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

}
