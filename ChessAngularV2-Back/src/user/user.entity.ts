/* eslint-disable prettier/prettier */
import { IUser } from "@shared/user.interface";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}