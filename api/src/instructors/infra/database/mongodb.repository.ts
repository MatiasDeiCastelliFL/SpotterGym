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
  findAll(): Promise<Instructor[]> {
    return this.instructorsModel.find();
  }
  create(instructor: CreateInstructorDTO) {
    this.instructorsModel.create(instructor);
  }
}
