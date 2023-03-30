/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoveModule } from './move/move.module';
import { dbProperties } from './properties/db.properties';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MoveModule, AuthModule, UserModule, TypeOrmModule.forRoot({...dbProperties, autoLoadEntities: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
