import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {

  @Input()
  public _userAuthenticated = false;
  
  constructor(private _authService:AuthService, private _router:Router) {
    
  }

  ngOnInit(){
  }

  signOut(){
    console.log("clicked")
    this._authService.SignOut();
    window.location.reload();
  }
  
}
