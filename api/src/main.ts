import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { PORT } from './utils/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Spotter Gym Rest API Documentation')
    .setDescription('Documentación de la REST Api de Spotter Gym')
    .addServer(`http://localhost:${PORT}/`, 'Local Server')
    .addServer('https://spottter-gym.onrender.com/', 'Develop Server')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.use(express.urlencoded({ extended: true }));
  app.enableCors();
  await app.listen(PORT || 3000);
}
bootstrap();
