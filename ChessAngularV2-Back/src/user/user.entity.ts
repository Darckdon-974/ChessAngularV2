/* eslint-disable prettier/prettier */
import { IUser } from "@shared/user.interface";
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User implements IUser {
    @PrimaryColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}