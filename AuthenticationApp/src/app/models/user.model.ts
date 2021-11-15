export class UserModel {

    constructor(){

    }

    public DisplayName:string = "";
    public About:string = "";
    public Age:number = 0;
    public Gender:gender = gender.None;
    public DateJoined:Date = new Date();
    public AvatarFilePath:string = "";
    public UserId:string = ""

}

export enum gender{
    None = 0, Male=1, Femail = 2
}