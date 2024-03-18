import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolModule } from './rol/rol.module';
import { ClientModule } from './client/client.module';
import { TypeDocumentsModule } from './type-documents/type-documents.module';
import * as dotenv from 'dotenv';
dotenv.config();
const feacture = [RolModule, ClientModule, TypeDocumentsModule];
@Module({
  imports: [MongooseModule.forRoot(process.env.CONEXION_DB), ...feacture],
})
export class AppModule {}
