import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticationToken:string = "";
  readonly baseUrl:string = "https://localhost:44351/api";

  constructor(private _localStorage:LocalStorageService) 
  {
    this.authenticationToken = this._localStorage.getAuthenticationToken() ?? "";
    
  }

  async IsAuthenticated(){    
        
    let result = false;
    console.log("Authenticating....")
    console.log(this._localStorage.getAuthenticationToken())

    await axios({
        method: "get",
        url: `${this.baseUrl}/user/authenticated`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${this._localStorage.getAuthenticationToken()}`,
        },
      }).then(function (response) {
        console.log("Authentication result");
        console.log(response);
        if(response.status == 200){
          result = true;
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log("Authentication: Fail");
        console.log(error);
      })

    return result;
  }
  
  async Authenticate(email:string, password:string) {
    
    let result:string | null = null;
    console.log("Signing In....")

    await axios({
      method: "post",
      url: `${this.baseUrl}/user/authenticate`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
      }
    }).then(function (response) {
      console.log("Sign In result.........");
      console.log(response);
      if(response.status == 200){
        result = response.data as string;
      }
      if(response.status == 401){
        result = "";
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log("Sign In Failed..........");
      console.log(error);
    })

    return result;    
  }

  async SignUp(email:string, password:string) {
    
    let result:boolean = false;
    console.log("Signing Up....")

    await axios({
      method: "post",
      url: `${this.baseUrl}/user/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
      }
    }).then(function (response) {
      console.log("Sign up result.........");
      console.log(response);
      if(response.status == 200){
        result = true;
      }
      if(response.status == 409){
        result = false;
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log("Sign Up Failed..........");
      console.log(error);
    })

    return result;        
  }

  SignOut(){
    this._localStorage.forgetAuthenticatedUser();
  }
}
