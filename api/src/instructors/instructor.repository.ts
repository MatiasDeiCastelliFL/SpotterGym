import { CreateInstructorDTO } from './dto/create';
import { Instructor } from './instructor.entity';

export const INSTRUCTOR_REPOSITORY = 'InstructorRepository';
export interface InstructorRepository {
  findAll(): Promise<Instructor[]>;
  create(createInstructorDTO: CreateInstructorDTO);
}
