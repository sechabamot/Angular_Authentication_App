import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './shared/footer/footer.component';
import { AppNavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
