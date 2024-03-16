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
  async index(): Promise<object> {
    const response = {
      message: 'not found instructors',
      data: null,
    };
    try {
      const instructors = await this.instructors.findAll();
      if (0 < instructors.length) {
        response.message = 'instructors found';
        response.data = instructors;
      }
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
    return response;
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  async create(
    @Body() body: InstructorPostBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      await this.instructors.create(body, file);
    } catch (error) {
      console.error('>> CONTROLLER', error);
      throw new BadRequestException(error.message);
    }
  }
}
