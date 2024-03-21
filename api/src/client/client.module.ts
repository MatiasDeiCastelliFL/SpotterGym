import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, clientSchema } from './schemas/Clients.schema';
import {
  TypeDocument,
  TypeDocumentSchema,
} from 'src/type-documents/schemas/typeDocuments.schema';
import { Rol, RolSchema } from 'src/rol/schemas/Rol.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Client.name,
        schema: clientSchema,
      },
      {
        name: TypeDocument.name,
        schema: TypeDocumentSchema,
      },
      {
        name: Rol.name,
        schema: RolSchema,
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
