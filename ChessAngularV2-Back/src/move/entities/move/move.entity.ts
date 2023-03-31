/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IMove } from '../../../../../shared/interfaces/move.interface';

@Entity('move')
export class Move implements IMove {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'name', nullable: false})
  name: string;

  @Column({nullable:true})
  description: string;

  @Column({nullable:true})
  url: string;
}
