import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoveModule } from './move/move.module';

@Module({
  imports: [MoveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
