import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolModule } from './rol/rol.module';
import * as dotenv from 'dotenv';
dotenv.config();
const feacture = [RolModule];
@Module({
  imports: [MongooseModule.forRoot(process.env.CONEXION_DB), ...feacture],
})
export class AppModule {}
