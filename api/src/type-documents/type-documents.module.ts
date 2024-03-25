import { Module } from '@nestjs/common';
import { TypeDocumentsController } from './type-documents.controller';
import { TypeDocumentsService } from './type-documents.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
   TypeDocument,
   TypeDocumentSchema,
} from './schemas/typeDocuments.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: TypeDocument.name,
            schema: TypeDocumentSchema,
         },
      ]),
   ],
   controllers: [TypeDocumentsController],
   providers: [TypeDocumentsService],
})
export class TypeDocumentsModule {}
