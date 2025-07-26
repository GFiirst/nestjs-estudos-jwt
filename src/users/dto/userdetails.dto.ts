import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class userDto{

    @IsNotEmpty()
    @MaxLength(30)
    username: string;

    @IsEmail()
    @MaxLength(100)
    email:string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    password: string;

}