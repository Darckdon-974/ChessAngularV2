/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateMoveDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(login:string, password:string) {
        const user = await this.userService.getUser(login, password);
        return user ?? null;
    }

    async login(user: CreateMoveDto) {
        const payload = { username: user.username};
        if (this.validateUser(user.username, user.password)!= null) {
            return { access_token: this.jwtService.sign(payload) };
        }
        else {
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
