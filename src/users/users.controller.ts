import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from './dto/userdetails.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    listUsers(){
        return this.usersService.listUsers()
    }

    @Post()
    createUser(@Body() createUserDetails:userDto){
        return this.usersService.createUser(createUserDetails)
    }
}
