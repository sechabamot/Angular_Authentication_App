import { GuestType } from "./user.model";

export class UpdateUser {

    constructor(dName:string, thoughts:string, userType:GuestType){
        this.displayName = dName;
        this.thougts = thoughts;
        this.userType = userType;
    }

    public displayName:string;
    public thougts:string;
    public userType:GuestType;
    
}
