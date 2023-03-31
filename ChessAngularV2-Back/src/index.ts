/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AppDataSource } from "./data-source";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000);
}

AppDataSource.initialize().then(async () => {
    bootstrap();
}).catch(error => console.log(error))
