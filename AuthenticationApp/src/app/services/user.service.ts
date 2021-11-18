import { UpdateUser } from './../models/update-user.model';
import { Constants } from './../constants';
import { UserModel } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _api:string = Constants.API_BaseUrl;
  constructor(private _localStorage:LocalStorageService) {

  }

  async GetUser(userName:string){
    
    let user:UserModel = new UserModel();

    await axios(`${this._api}/User?email=${userName}`, {      
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${this._localStorage.getAuthenticationToken()}`,
      },
    }).then(function(respone){

      if(respone.status == 200){
          
        user = respone.data;

      }
      else{
        // user = null;
      }
        
    }).catch(function(error){
      console.log("Problem getting user......");
      console.log(error);
    })

    return user;
    
  }

  async UpdateUser(userName:string, update:UpdateUser){
    
    let result:string | null = null;

    await axios(`${this._api}/User/Update/User?email=${userName}`, {      
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${this._localStorage.getAuthenticationToken()}`,
      },
      data: update,
    }).then(function(respone){

      if(respone.status == 200){
        
      }
      if(respone.status == 409){
        result = "Could not update user";
      }
      if(respone.status == 500){
        result = "Somthing went wrong and it's not your fault";
      }
            
    }).catch(function(error){
      result = "Could not send request"
    })

    return result;
  }

}
