import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { InstructorPostBody } from './dto/create';
import { FileInterceptor } from '@nestjs/platform-express';
import { InstructorsService } from './instructors.service';

@Controller('instructors')
export class InstructorsController {
  constructor(private instructors: InstructorsService) {}
  @Get()
  index(): object {
    const response = {
      message: 'not found instructors',
      data: null,
    };
    try {
      response.data = this.instructors.findAll();
      if (0 === response.data.length) response.message = 'instructors found';
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
    return response;
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  create(
    @Body() body: InstructorPostBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('>> creating an instructor', body, file);

    try {
      this.instructors.create(body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
