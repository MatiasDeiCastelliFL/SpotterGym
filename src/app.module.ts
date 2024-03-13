import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
dotenv.config();
const feacture = [UserModule];
@Module({
  imports: [MongooseModule.forRoot(process.env.CONEXION_DB), ...feacture],
})
export class AppModule {}
