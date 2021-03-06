import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User{
  constructor(
    public userId:string,
    public fullName:string,
    public email:string
  ){}
}

export class Team {
  constructor(
    public teamName:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {}

  headers = new HttpHeaders()
            .set("Token", localStorage.getItem('token') || '');

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/user', {headers: this.headers});
  }

  getTeams() 
  {
    return this.httpClient.get<Team[]>('http://localhost:8080/team', {headers: this.headers});
  }

  registerUser(user){
    return this.httpClient.post('http://localhost:8080/user/register', user);
  }

  loginUser(user){
    return this.httpClient.post('http://localhost:8080/user/login', user);

  }

  createTeam(team){
    return this.httpClient.post('http://localhost:8080/team', team);
  }

  updateUser(user){
    return this.httpClient.put('http://localhost:8080/user', {headers: this.headers});
  }

}