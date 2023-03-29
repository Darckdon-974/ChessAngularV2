/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Body, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common/decorators';
import { RegisterDto } from './dto/register.dto';
import { RequestWithUser } from './interface/requestWithUser.interface';
import { AuthService } from './auth.service';
import { AuthenticationGuard } from './guard/auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() registrationData: RegisterDto) {
        console.log("Bienvenue dans le controlleur")
        return  await this.authService.register(registrationData);
    }

    @UseGuards(AuthenticationGuard)
    @Get()
    authenticate(@Req() request: RequestWithUser) {
        const user = request.user;
        user.password = undefined;
        return user;
    }

    @HttpCode(200)
    @UseGuards(AuthenticationGuard)
    @Post('/log-in')
    async logIn(@Req() request: RequestWithUser, @Res() response: Response) {
        const user = request;
        const cookie = this.authService.getCookieWithJwtToken(user.id);
        response.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return response.send(user);
    }

    @UseGuards(AuthenticationGuard)
    @Post('/log-out')
    async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
        response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return response.sendStatus(200);
    }
}
