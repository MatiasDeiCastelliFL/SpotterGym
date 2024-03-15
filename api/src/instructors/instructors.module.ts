import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Instructor } from './instructor.entity';
import { InstructorSchema } from './instructor.schema'

@Module({
  imports: [
    MongooseModule.forFeature({
      name: Instructor.name,
      schema: InstructorSchema,
    }),
  ],
  controllers: [InstructorsController],
  providers: [
    InstructorsService,
    { provide: InstructorRepository, useClass: MongooInstructorRepository },
  ],
})
export class InstructorsModule {}
