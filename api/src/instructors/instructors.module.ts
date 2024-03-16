import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Instructor } from './instructor.entity';
import { InstructorSchema } from './instructor.schema';
import { INSTRUCTOR_REPOSITORY } from './instructor.repository';
import { MongoInstructorRepository } from './infra/database/mongodb.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Instructor.name,
        schema: InstructorSchema,
      },
    ]),
  ],
  providers: [
    InstructorsService,
    { provide: INSTRUCTOR_REPOSITORY, useClass: MongoInstructorRepository },
  ],
  controllers: [InstructorsController],
})
export class InstructorsModule {}
