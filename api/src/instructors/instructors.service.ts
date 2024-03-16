import { Inject, Injectable } from '@nestjs/common';
import { InstructorPostBody } from './dto/create';
import {
  INSTRUCTOR_REPOSITORY,
  InstructorRepository,
} from './instructor.repository';

@Injectable()
export class InstructorsService {
  constructor(
    @Inject(INSTRUCTOR_REPOSITORY) private instructors: InstructorRepository,
  ) {}
  async findAll() {
    console.log('>> LISTING SERVICE');
    try {
      return await this.instructors.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(_body: InstructorPostBody) {
    console.log('>> CREATE SERVICE', _body);
    try {
      await this.instructors.create({
        ..._body,
        image_url: '',
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
