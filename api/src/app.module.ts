import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { InstructorsModule } from './instructors/instructors.module';
import * as dotenv from 'dotenv';
dotenv.config();
const feacture = [UserModule, InstructorsModule];
@Module({
  imports: [MongooseModule.forRoot(process.env.CONEXION_DB), ...feacture],
})
export class AppModule {}
