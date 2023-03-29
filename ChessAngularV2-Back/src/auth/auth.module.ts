/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get(process.env.JWT_SECRET),
        signOptions: {
          expiresIn: `${configService.get(process.env.JWT_EXPIRATION_TIME)}s`,
        }
      }),
    }),
    UserModule,
    PassportModule.register({defaultStrategy: 'bearer'}),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    ConfigService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
