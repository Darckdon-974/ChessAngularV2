/* eslint-disable prettier/prettier */
import { Request } from 'express';
import { User } from '../../user/entity/user.entity'

export interface RequestWithUser extends Request {
    id: number;
    user: User;
    password: string;
}