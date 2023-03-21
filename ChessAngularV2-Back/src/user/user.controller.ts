/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Body, Get, Post, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async createUser(
        @Body('username') login: string,
        @Body('password') password: string,
    ){
        return await this.userService.createUser(login, password);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }
}
