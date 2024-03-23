import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { TypeDocumentsService } from './type-documents.service';
import {
  UpdatingTypeDocuments,
  createTypeDocuments,
} from './dto/typeDocuments.dto';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { ParseMongoIdPipe } from 'src/functions/global';

@Controller('type-documents')
export class TypeDocumentsController {
  constructor(private readonly ServiceTypeDoc: TypeDocumentsService) {}
  @Get()
  async filter_type_documents(@Query('name') name: string) {
    return await this.ServiceTypeDoc.filterTypeDocuments(name);
  }
  @Post()
  @UseInterceptors(NoFilesInterceptor())
  async create_type_documents(@Body() createType: createTypeDocuments) {
    return await this.ServiceTypeDoc.postTypeDocuments(createType);
  }
  @Patch(':id')
  @UseInterceptors(NoFilesInterceptor())
  async update_type_document(
    @Body() typeDocument: UpdatingTypeDocuments,
    @Param('id', new ParseMongoIdPipe()) id: string,
  ) {
    return await this.ServiceTypeDoc.updateTypeDocuments(id, typeDocument);
  }
}
