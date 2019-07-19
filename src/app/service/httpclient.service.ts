import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User{
  constructor(
    public userId:string,
    public fullName:string,
    public email:string,
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

  registerUser(user){
    return this.httpClient.post('http://localhost:8080/user/register', user);
  }

  loginUser(user){
    return this.httpClient.post('http://localhost:8080/user/login', user);

  }

  createTeam(team){
    return this.httpClient.post('http://localhost:8080/team', team);
  }

}