import { CreateInstructorDTO } from 'src/instructors/dto/create';
import { Instructor } from 'src/instructors/instructor.entity';
import { InstructorRepository } from 'src/instructors/instructor.repository';

export class MongoInstructorRepository implements InstructorRepository {
  findAll(): Promise<Instructor[]> {
    throw new Error('Method not implemented.');
  }
  create(createInstructorDTO: CreateInstructorDTO) {
    createInstructorDTO;
    throw new Error('Method not implemented.');
  }
}
