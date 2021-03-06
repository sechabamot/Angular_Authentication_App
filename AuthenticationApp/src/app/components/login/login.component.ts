import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { AuthService } from './../../services/auth.service';
import { InputValidation, InputType } from './../../models/input-validation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:InputValidation = new InputValidation(InputType.Email, "");
  Password:InputValidation = new InputValidation(InputType.Password, "");

  constructor(private _authService:AuthService, private _localStorageService:LocalStorageService, private _router:Router) { }

  async ngOnInit(){
    this.redirectAuthenticatedUser();
  }

  async redirectAuthenticatedUser(){
    const result = await this._authService.IsAuthenticated()
    if(result){
      this._router.navigate(["home"]);
    }
  }

  async login(){

    if(this.loginFormIsValid()){

      const token = await this._authService.Authenticate(this.Email.Value, this.Password.Value);

      if(token != null && token != ""){
    
        this._localStorageService.storeAuthenticationToken(token);
        this._router.navigate(["home"]).then(()=>{
          window.location.reload();
        });
        
        this._localStorageService.storeUserName(this.Email.Value)

      }
      if(token == ""){
          alert("Wrong email or password.");
      }
      if(token == null){
        alert("Something went wrong and it's not your fault.");
      }

    }
    else
    {
      alert("Form not valid")
    }
  }

  loginFormIsValid(){
   
    if(this.Email.IsValid && this.Password.IsValid){
      return true;
    }
    else
    {
      return false;
    }

  }

}
