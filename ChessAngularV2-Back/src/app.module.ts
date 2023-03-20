/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoveModule } from './move/move.module';
import { dbProperties } from './properties/db.properties';

@Module({
  imports: [TypeOrmModule.forRoot({...dbProperties}), MoveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
