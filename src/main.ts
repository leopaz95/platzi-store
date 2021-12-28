import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Si no está en el DTO, lo descarta
      forbidNonWhitelisted: true, //Aca si no está en el DTO, te da error
    }),
  );
  await app.listen(3000);
}
bootstrap();
