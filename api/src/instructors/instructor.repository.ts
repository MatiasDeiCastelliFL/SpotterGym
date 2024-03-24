import { CreateInstructorDTO } from './dto/create.dto';
import { Instructor } from './infra/database/instructor.entity';

export const INSTRUCTOR_REPOSITORY = 'InstructorRepository';
export interface InstructorRepository {
   update(instructor: Instructor);
   findBy(params: object): Promise<Instructor[]>;
   findAll(): Promise<Instructor[]>;
   create(createInstructorDTO: CreateInstructorDTO);
}
