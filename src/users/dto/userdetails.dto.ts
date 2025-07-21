import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class userDto{

    @IsNotEmpty()
    username: string;

    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    password: string;

}