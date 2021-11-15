import { Component, OnInit } from '@angular/core';
import { InputValidation, InputType } from 'src/app/models/input-validation.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  Email:InputValidation = new InputValidation(InputType.Email, "");
  Password:InputValidation = new InputValidation(InputType.Password, "");

  ngOnInit(): void {
    
  }

  async signUp(){

    if(this.signUpFormIsValid()){
      let result = await this._authService.SignUp(this.Email.Value, this.Password.Value);
      if(result){
        alert("Registered");
      }else{
        alert("Fail to register")
      }
    }
    else
    {
      alert("Sign up form not valid")
    }
  }

  signUpFormIsValid(){
   
    if(this.Email.IsValid && this.Password.IsValid){
      return true;
    }
    else
    {
      return false;
    }

  }
}
