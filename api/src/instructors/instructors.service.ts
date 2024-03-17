import { Inject, Injectable } from '@nestjs/common';
import { InstructorPostBody } from './dto/create';
import {
  INSTRUCTOR_REPOSITORY,
  InstructorRepository,
} from './instructor.repository';
import { INSTRUCTOR_STORAGE, InstructorStorage } from './instructor.storage';

@Injectable()
export class InstructorsService {
  constructor(
    @Inject(INSTRUCTOR_REPOSITORY) private instructors: InstructorRepository,
    @Inject(INSTRUCTOR_STORAGE) private storage: InstructorStorage,
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
    try {
      const persisted = await this.instructors.findBy({ email });
      if (persisted.length) {
        console.log('>> CREATE SERVICE [ persisted:', persisted[0].email, ']');
        const message = 'email registrado';
        if (persisted.length && email === persisted[0].email)
          throw new Error(message);
      } else {
        console.log('>> CREATE SERVICE [ no persisted ]');
      }

      const image_url = await this.storage.upload(file);
      const result = await this.instructors.create({
        ..._body,
        image_url,
      });
      console.info('>> CREATE SERVICE [ result:', result, ']');
      return result;
    } catch (error: any) {
      console.error('>> CREATE SERVICE [ error: ', error, ']');
      throw new Object(error);
    }
  }
}
