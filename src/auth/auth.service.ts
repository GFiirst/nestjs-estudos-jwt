import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { JwtPayloads } from 'types';
import { access } from 'fs';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
    ){}

    async login (authLoginDto: AuthLoginDTO){

        const existingUser = await this.userRepository.findOne({
            where: {
                email: authLoginDto.email
            }
        })

        if(!existingUser){
            throw new UnauthorizedException("Email or password invalid")
        }

        const validatePass = await bcrypt.compare(authLoginDto.password, existingUser.password)

        if(!validatePass) {
            throw new UnauthorizedException("Email or password invalid!")
        }

        const payload: JwtPayloads = {
            sub: existingUser.id,
            email: existingUser.email
        }
        
        return {
            access_token: await this.jwtService.signAsync(payload,{
                secret: process.env.JWT_SECRET
            })
        }
    }
}
