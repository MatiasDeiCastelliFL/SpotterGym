import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InstructorBodyData, InstructorUpdateBody } from './dto/create.dto';
import {
   INSTRUCTOR_REPOSITORY,
   InstructorRepository,
} from './instructor.repository';
import { INSTRUCTOR_STORAGE, InstructorStorage } from './instructor.storage';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class InstructorsService {
   async update(
      id: string,
      body: InstructorUpdateBody,
      file: Express.Multer.File,
   ) {
      const instructors = await this.instructors.findBy({ _id: id });
      const instructor = instructors[0];
      if (!instructor) {
         const message = 'instructor not found';
         throw new Error(message);
      }

      for (const [attr, value] of Object.entries(body)) {
         instructor[attr] = value;
      }
      if (file) {
         const image_url = await this.storage.upload(file);
         instructor.image_url = image_url;
      }
      console.info(
         '>> UPDATE SERVICE',
         Object.entries(body).map((e) => e.join(' => ')),
      );
      return await this.instructors.update(instructor);
   }
   async findBy(id: string) {
      const instructors = await this.instructors.findBy({ _id: id });
      console.log('SHOW SERVICE', instructors);
      return instructors[0];
   }
   constructor(
      @Inject(INSTRUCTOR_REPOSITORY) private instructors: InstructorRepository,
      @Inject(INSTRUCTOR_STORAGE) private storage: InstructorStorage,
      private users: UsersService,
   ) {}
   async findAll() {
      try {
         const instructors = await this.instructors.findAll();
         return instructors;
      } catch (error) {
         console.error('>> LISTING SERVICE', error);
         throw new Error(error);
      }
   }

   async create(_body: InstructorBodyData, file: Express.Multer.File) {
      const { email } = _body;
      try {
         const user = await this.users.recovery_from(email);
         if (user) {
            console.log('>> CREATE SERVICE [ persisted:', user.email, ']');
            const message = 'email registrado';
            if (user && email === user.email) throw new Error(message);
         } else {
            console.log('>> CREATE SERVICE [ no persisted ]', _body);
         }

         _body.password = await bcrypt.hash(_body.password, 10);
         const image_url = await this.storage.upload(file);
         const result = await this.instructors.create({
            ..._body,
            image_url,
         });
         await this.users.create_instructor_with({
            email,
            password: _body.password,
            user_id: result._id,
         });
         console.info('>> CREATE SERVICE [ result:', result, ']');
         return result;
      } catch (error: any) {
         console.error('>> CREATE SERVICE [ error: ', error, ']');
         throw new Object(error);
      }
   }
}
