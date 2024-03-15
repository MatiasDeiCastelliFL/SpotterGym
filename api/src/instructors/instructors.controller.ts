import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { InstructorPostBody } from './dto/create';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('instructors')
export class InstructorsController {
  @Get()
  index(): object {
    const response = {
      message: 'not found instructors',
    };
    return response;
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(
    @Body() body: InstructorPostBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('>> creating an instructor', body, file);
  }
}
