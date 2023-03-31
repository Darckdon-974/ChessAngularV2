/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(
        @Body('username') login: string,
        @Body('password') password: string,
    ) {
        return await this.authService.login({ username: login, password: password })
    }
}
