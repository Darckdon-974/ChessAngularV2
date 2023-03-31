import { Module } from '@nestjs/common';
import { MoveService } from './move.service';
import { MoveController } from './move.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Move } from './entities/move/move.entity';

@Module({
  controllers: [MoveController],
  imports: [TypeOrmModule.forFeature([Move])],
  providers: [MoveService],
})
export class MoveModule {}
