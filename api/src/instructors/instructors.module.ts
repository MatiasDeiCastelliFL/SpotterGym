import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Instructor } from './infra/database/instructor.entity';
import { InstructorSchema } from './infra/database/instructor.schema';
import { INSTRUCTOR_REPOSITORY } from './instructor.repository';
import { MongoInstructorRepository } from './infra/database/mongodb.repository';
import { INSTRUCTOR_STORAGE } from './instructor.storage';
import { CloudinaryStorage } from './infra/storage/cloudinary.storage';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: Instructor.name,
            schema: InstructorSchema,
         },
      ]),
      UsersModule,
   ],
   providers: [
      InstructorsService,
      { provide: INSTRUCTOR_REPOSITORY, useClass: MongoInstructorRepository },
      { provide: INSTRUCTOR_STORAGE, useClass: CloudinaryStorage },
      UsersService,
   ],
   controllers: [InstructorsController],
})
export class InstructorsModule {}
