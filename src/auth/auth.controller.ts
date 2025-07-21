import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() authLogin: AuthLoginDTO){
        return this.authService.login(authLogin);       
    }
}
