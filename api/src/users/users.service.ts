import { compare } from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { UserBody } from './dto/users';
import { USER_REPOSITORY, UserRepository } from './user.repository';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class UsersService {
   constructor(@Inject(USER_REPOSITORY) private repository: UserRepository) {}

   async list_user_with(params: object) {
      return await this.repository.find(params);
   }

   async create_user_with(params: {
      email: string;
      password: string;
      user_id: string;
      role_name: string;
   }) {
      const { email, password, user_id, role_name } = params;
      const role = await this.repository.recovery_role_from(role_name);
      if (role) {
         const user_data = {
            email,
            password,
            user_id,
            role_name,
         };
         console.info('>> CREATE USER SERVICE', user_data);
         this.repository.create(user_data);
      } else {
         throw new Error('Rol no existe');
      }
   }

   async create_admin_with(params: {
      email: string;
      password: string;
      user_id: string;
   }) {
      this.create_user_with({ ...params, role_name: 'propietario' });
   }

   async create_client_with(params: {
      email: string;
      password: string;
      user_id: string;
   }) {
      this.create_user_with({
         ...params,
         role_name: 'cliente',
      });
   }

   async create_instructor_with(params: {
      email: string;
      password: string;
      user_id: string;
   }) {
      this.create_user_with({
         ...params,
         role_name: 'profesor',
      });
   }

   async sign_in_with(data: UserBody) {
      const { email, password } = data;
      const users = await this.repository.find({ email });
      const user = users[0];
      if (!user) throw new Error('Invalid Credentials');
      if ((await compare(password.trim(), user.password)) === false) {
         throw new Error('Invalid Credentials');
      }

      try {
         const { user_id, role_name } = user;
         const result = { user_id, email: user.email, role_name };
         return result;
      } catch (error) {
         console.error('>> SIGN-IN SERVICE', error);
      }
   }

   async recovery_from(email: string) {
      const users = await this.repository.find({ email });
      return users[0];
   }
}
