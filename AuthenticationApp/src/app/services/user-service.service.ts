import { UserModel } from './../models/user.model';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _localStorage:LocalStorageService) {

   }

   async getUser(userName:string){
    
    let user:UserModel | null = null;

    await axios({

    })

    return user;
    
   }

}
