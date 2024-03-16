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
    try {
      const instructors = await this.instructors.findAll();
      return instructors;
    } catch (error) {
      console.error('>> LISTING SERVICE', error);
      throw new Error(error);
    }
  }

  async create(_body: InstructorPostBody, file: Express.Multer.File) {
    file;
    const { email } = _body;
    const persisted = await this.instructors.findBy({ email });
    if (email === persisted[0].email)
      throw new Object({ message: 'email registrado' });
    else {
      const result = await this.instructors.create({
        ..._body,
        image_url: '',
      });

      console.info('>> CREATE SERVICE', result);
    }
  }
}
