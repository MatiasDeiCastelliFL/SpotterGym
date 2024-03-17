import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Instructor } from './instructor.entity';
import { InstructorSchema } from './instructor.schema';
import { INSTRUCTOR_REPOSITORY } from './instructor.repository';
import { MongoInstructorRepository } from './infra/database/mongodb.repository';
import { INSTRUCTOR_STORAGE } from './instructor.storage';
import { CloudinaryStorage } from './infra/storage/cloudinary.storage';

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
    { provide: INSTRUCTOR_STORAGE, useClass: CloudinaryStorage },
  ],
  controllers: [InstructorsController],
})
export class InstructorsModule {}
