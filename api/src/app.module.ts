import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module'; // REVISAR
import { RolModule } from './rol/rol.module';
import { ClientModule } from './client/client.module';
import { TypeDocumentsModule } from './type-documents/type-documents.module';
import { InstructorsModule } from './instructors/instructors.module';
import * as dotenv from 'dotenv';
dotenv.config();
const features = [];
features.push(InstructorsModule);
features.push(RolModule);
features.push(ClientModule);
features.push(TypeDocumentsModule);
@Module({
  imports: [MongooseModule.forRoot(process.env.CONEXION_DB), ...features],
})
export class AppModule {}
