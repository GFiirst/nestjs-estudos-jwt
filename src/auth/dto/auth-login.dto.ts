import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class AuthLoginDTO{
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    password: string;
}