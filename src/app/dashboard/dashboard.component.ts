import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/httpclient.service';
import {Router} from "@angular/router"
import redirectTo from '../helpers/redirectTo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams: string[];

  teamName: string = "";

  error: string = "";

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {

  }

  onGetTeamsSubmit() {
    this.httpClientService.getTeams().subscribe(response => {
      this.handleSuccessfulResponse(response)
    }, err => {
      console.log('err', err)
      redirectTo(err) && this.router.navigate(['/login'])
    });
  }

  handleSuccessfulResponse(response) {
    this.teams = response;
  }

  onCreateTeamSubmit() {
    console.log(this.teamName)

      const teamCreateObj = {
        name: this.teamName
    }
    this.httpClientService.createTeam(teamCreateObj)
    .subscribe(response => {
      if (response === null) {
        this.router.navigate(['/teams'])
      }
      console.log('response', response)

    }, err => {
      console.log('error:', err);
      // TODO: don't use error.error (change the response)
      redirectTo(err) && this.router.navigate(['/login'])
    });
  }

}
