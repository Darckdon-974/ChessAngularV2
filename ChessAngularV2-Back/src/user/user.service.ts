/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ){}

    async getById(id:number) {
        const user = await this.usersRepository.findOne({
            where: {
                id: id
            }
        });
        if (user) {
            return user;
        }
        throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
    }

    async createUser(userData: CreateUserDto) {
        console.log("Bienvenue dans le service User")
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.insert(newUser);
        console.log(newUser);
        return newUser;
    }

    async getByUsername(username: string) {
        const user = await this.usersRepository.findOne({
            where: {
                username: username
            }
        });
        if (user) {
            return user;
        }
        throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
}
