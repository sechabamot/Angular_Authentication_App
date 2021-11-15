import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class AppNavbarComponent implements OnInit {

  @Input()
  public _userAuthenticated = false;

  constructor(private _authService:AuthService){}
  
  ngOnInit(): void {
    this.isUserAuthenticated()  
  }


  async isUserAuthenticated(){
    this._userAuthenticated = await this._authService.IsAuthenticated();
  }

  signOut(){
    this._authService.SignOut();
  }
}
