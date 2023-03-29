/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data/data-source';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    //app.use(cookieParser);
    app.enableCors();
    await app.listen(3000);
}

AppDataSource.initialize().then(async () => {
    bootstrap();
}).catch(error => console.log(error))
