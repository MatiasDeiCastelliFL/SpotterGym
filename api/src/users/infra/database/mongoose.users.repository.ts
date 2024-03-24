import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/user.entity';
import { UserRepository } from 'src/users/user.repository';
import { UserModel } from './user.schema';
import { Rol } from 'src/rol/schemas/Rol.schema';
import { Model } from 'mongoose';

@Injectable()
export class MongooseUserRepository implements UserRepository {
   constructor(
      @InjectModel(User.name) private users: UserModel,
      @InjectModel(Rol.name) private roles: Model<Rol>,
   ) {}

   async recovery_role_from(role_name: string): Promise<Rol> {
      const role = await this.roles.find({ name: role_name }).exec();
      console.info('>> USER REPOSITORY WITH ROLE', role);
      return role[0];
   }

   async create(data: User) {
      const user = await this.users.create(data);
      console.info('>> USER REPOSITORY', data, user);
   }

   async find(params: object = {}): Promise<User[]> {
      const users = await this.users.find(params).exec();
      console.info('>> USERS REPOSITORY', params, users);
      return users;
   }
}
