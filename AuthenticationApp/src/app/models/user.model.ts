export class UserModel {

    constructor(){

    }

    public displayName:string = "Uknown";
    public thougts:string = "The user signed in but did not share ary of their thoughts about the application.";
    public dateJoined:Date = new Date();
    public avatarFilePath:string = "";
    public userId:string | null = "";
    public guestType:GuestType = 3;
}

export enum GuestType{
    Recruiter = 1, Developer = 2, Other = 3
}