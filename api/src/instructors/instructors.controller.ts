import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  InstructorPostBody,
  InstructorUpdateBody,
  ParamShowInstructor,
} from './dto/create.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { InstructorsService } from './instructors.service';

import * as dotenv from 'dotenv';
dotenv.config();
const HOST = `${process.env.PROTOCOL}://${process.env.DOMAIN}:${process.env.PORT}/instructors`;

@Controller('instructors')
export class InstructorsController {
  constructor(private instructors: InstructorsService) {}

  parse_(instructor: any) {
    const { firstName, lastName, phone, email, description, image_url } =
      instructor;
    return {
      data: {
        firstName,
        lastName,
        phone,
        email,
        description,
      },
      links: {
        self: `${HOST}/${instructor._id}`,
        image_url,
        reviews: `${HOST}/${instructor._id}/reviews`,
      },
    };
  }

  @Get()
  async index(): Promise<object> {
    const response = {
      message: 'not found instructors',
      data: null,
    };
    try {
      const instructors = await this.instructors.findAll();
      if (instructors.length) {
        response.message = 'instructors found';
        response.data = instructors.map((e) => this.parse_(e));
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
      const instructor = await this.instructors.create(body, file);
      return this.parse_(instructor);
    } catch (error) {
      console.error('>> CONTROLLER', error);

      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  async show(@Param() param: ParamShowInstructor) {
    try {
      const instructor = await this.instructors.findBy(param.id);
      if (!instructor) throw new NotFoundException('instructor not found');

      return this.parse_(instructor);
    } catch (error) {
      if (error.name === 'NotFoundException')
        throw new NotFoundException('instructor not found');

      throw new BadRequestException(error);
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo'))
  async update(
    @Param() param: ParamShowInstructor,
    @Body() body: InstructorUpdateBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const data = {};
    for (const k in body) {
      data[k] = body[k];
    }
    if (Object.entries(data).length === 0)
      throw new BadRequestException('no data to update');

    console.info(
      '>> PATCH CONTROLLER',
      param.id,
      Object.entries(data).map((e) => e.join(' => ')),
      file ? file : 'no photo',
    );

    const instructor = await this.instructors.update(param.id, body, file);

    console.info(
      'PATCH CONTROLLER [instructor]',
      instructor.firstName,
      instructor.lastName,
    );
    return {
      message: 'instructor updated',
      data: this.parse_(instructor),
    };
  }
}
