import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PORT } from './utils/common';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
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
      .addTag('index', 'Operaciones sobre la raíz')
      .addTag('Instructores', 'Operaciones sobre los instructores')
      .addTag('Roles', 'Operaciones sobre los roles definidos en el gimnasio')
      .addTag('Clientes', 'Operaciones sobre los clientes')
      .addTag(
         'Usuarios',
         'Operaciones para el control y acceso de los usuarios',
      )
      .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('documentation', app, document);
   app.enableCors();
   await app.listen(PORT || 3000);
}
bootstrap();
