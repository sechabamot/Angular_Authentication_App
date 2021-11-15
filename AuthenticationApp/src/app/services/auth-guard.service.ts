import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  
   async canActivate(){
    
    const authenticated = await this.auth.IsAuthenticated();
    console.log(authenticated);

    if (!authenticated) {
      
      this.router.navigate(['login']);
      return false;

    }

    return true;
  }
}
