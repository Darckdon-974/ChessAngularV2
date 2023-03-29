/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './interface/tokenPayload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    public async register(registrationData: RegisterDto) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        console.log(hashedPassword);
        try {
            const createUser = await this.usersService.createUser({
                ...registrationData,
                password: hashedPassword
            });
            console.log(createUser);
            return createUser;
        } catch (error) {
            if (error) {
                throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    public async getAuthenticatedUser(username: string, plainTextePassword: string) {
        try {
            const user = await this.usersService.getByUsername(username);
            await this.verifyPassword(plainTextePassword, user.password);
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextePassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(
            plainTextePassword,
            hashedPassword
        );
        if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    public getCookieWithJwtToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(process.env.JWT_EXPIRATION_TIME)}`;
    }

    public getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
}
