import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { userDto } from './dto/userdetails.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
        
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    listUsers(){
        return this.userRepository.find()
    }

    async createUser(newData: userDto){

        const existingUser = await this.userRepository.findOne({
            where: { email: newData.email },
        });

        if(existingUser){
            throw new BadRequestException("User email already beeing used;")
        }

        const {username, email, password} = newData;
        
        const saltRounds = +process.env.BCRYPT_SALT!; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = this.userRepository.create({
            email,
            username,
            password: hashedPassword,
        });
        return this.userRepository.save(newUser);
    }
}
