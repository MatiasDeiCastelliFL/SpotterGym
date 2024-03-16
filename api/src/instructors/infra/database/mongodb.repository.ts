import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInstructorDTO } from 'src/instructors/dto/create';
import { Instructor } from 'src/instructors/instructor.entity';
import { InstructorRepository } from 'src/instructors/instructor.repository';
import { InstructorModel } from 'src/instructors/instructor.schema';

@Injectable()
export class MongoInstructorRepository implements InstructorRepository {
  constructor(
    @InjectModel(Instructor.name) private instructorsModel: InstructorModel,
  ) {}
  async findBy(criteria: object = {}): Promise<Instructor[]> {
    const result = await this.instructorsModel.find(criteria).exec();
    return result;
  }
  async findAll(): Promise<Instructor[]> {
    const instructors = await this.instructorsModel.find().exec();
    return instructors;
  }
  async create(instructor: CreateInstructorDTO) {
    return await this.instructorsModel.create(instructor);
  }
}
