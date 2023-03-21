/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: 'MaSuperClefSecrete',
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
