import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoveModule } from './move/move.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { dbProperties } from './properties/db.properties';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dbProperties }),
    MoveModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
