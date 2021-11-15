import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private authenticationToken:string = "x-authenticationToken";
  private userName:string = "x-userName"

  constructor() {

  }

  storeUserName(userName:string){
    localStorage.setItem(this.userName, this.userName)
  }

  getUserName(){
    return window.localStorage.getItem(this.userName)
  }
  forgetAuthenticatedUser(){
    window.localStorage.clear();
    // window.localStorage.removeItem(this.authenticationToken);
    // window.localStorage.removeItem(this.userName);
    console.log("storage cleared")
  }
  getAuthenticationToken(){
    return window.localStorage.getItem(this.authenticationToken) ?? "";
  }
  storeAuthenticationToken(token:string){
    window.localStorage.setItem(this.authenticationToken, token)
  }   

}
