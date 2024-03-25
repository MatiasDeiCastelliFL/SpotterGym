import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInstructorDTO } from 'src/instructors/dto/create.dto';
import { InstructorRepository } from 'src/instructors/instructor.repository';
import { Instructor } from './instructor.entity';
import { InstructorModel } from './instructor.schema';

@Injectable()
export class MongoInstructorRepository implements InstructorRepository {
   constructor(
      @InjectModel(Instructor.name) private instructorsModel: InstructorModel,
   ) {}
   async findBy(params: object = {}): Promise<Instructor[]> {
      const instructors = await this.instructorsModel.find(params).exec();
      return instructors;
   }
   async findAll(criteria: object = {}): Promise<Instructor[]> {
      const instructors = await this.instructorsModel.find(criteria).exec();
      return instructors;
   }
   async create(instructor: CreateInstructorDTO) {
      return await this.instructorsModel.create(instructor);
   }
   async update(instructor: Instructor) {
      const result = await this.instructorsModel.findById(instructor._id);
      for (const attr in instructor) {
         result[attr] = instructor[attr];
      }
      return await result.save();
   }
}
