/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
import { Move } from './entities/move/move.entity';

@Injectable()
export class MoveService {
  constructor(
    @InjectRepository(Move) private readonly moveRepository: Repository<Move>
  ){}
  
  async create(createMoveDto: CreateMoveDto): Promise<InsertResult> {
    return await this.moveRepository.insert(createMoveDto);
  }

  async findAll() {
    return await this.moveRepository.find();
  }

  async findOne(id: number) {
    return await this.moveRepository.findOneBy({id: id});
  }

  async update(id: number, updateMoveDto: UpdateMoveDto) {
    return await this.moveRepository.update(id, updateMoveDto);
  }

  remove(id: number) {
    return this.moveRepository.delete(id);
  }
}
