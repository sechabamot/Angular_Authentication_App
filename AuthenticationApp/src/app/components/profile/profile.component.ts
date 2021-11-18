import { UpdateUser } from './../../models/update-user.model';
import { LocalStorageService } from './../../services/local-storage.service';
import { UserService} from '../../services/user.service';
import { UserModel, GuestType } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _inputAvartar:HTMLInputElement;
  _canUpdate:boolean = false;
 
  private _userProfile:UserModel = new UserModel();
  UpdateUserProfile:UpdateUser = new UpdateUser("","", GuestType.Other);

  DisplayName:string = "";
  Thoughts:string = "";
  AvatarUrl:string = "";

  UserMadeChanges: boolean = false;
  InputStatus:string = "input-disabled"


  public get CanUpdate(){
    return this._canUpdate;  
  };
  public set CanUpdate(value:boolean){
    this._canUpdate = value;
    if(!value){
      this.InputStatus = "input-disabled";
      this.GetProfile()
    }else{
      this.InputStatus = "input-enabled";
    }
  };

  constructor(private _userService:UserService, private _loccalStorage:LocalStorageService) {
    this._inputAvartar = document.createElement("input")
   }

  async ngOnInit(){
    await this.GetProfile();
  }

  async GetProfile(){

    let profile = await this._userService.GetUser("sechabamot@gmail.com");
    
    this._userProfile = profile;
    this.UpdateUserProfile = new UpdateUser(profile.displayName, profile.thougts, profile.guestType);

  }
  
  ResetView(){

    this.CanUpdate = false;
    this.UserMadeChanges = false;

  }

  MadeChanges(){
    this.UserMadeChanges = true;
  }

  UploadNewImage(imgPreviewId:string){

    this._inputAvartar.type = "file";
    this._inputAvartar.accept = "image/*";
    
    this._inputAvartar.addEventListener("change", () => {

      let reader = new FileReader();
      reader.onload = function(event){
        
        let value = this.result as string;
        document.getElementById(imgPreviewId)?.setAttribute("src", value);  

      };

      let files = this._inputAvartar.files as FileList;
      reader.readAsDataURL(files[0]);
      
      this.MadeChanges();
    })  

    this._inputAvartar.dispatchEvent(new MouseEvent("click")); 



  }

  async UpdateProfile(){

    if(this.UserMadeChanges){
      let result = await this._userService.UpdateUser("sechabamot@gmail.com", this.UpdateUserProfile);
      if(result == null){
        
        alert("Update Successfull")
        await this.GetProfile()
        this.ResetView()

      }else{
        alert("Update Failed")
      }
    }
  }

}
