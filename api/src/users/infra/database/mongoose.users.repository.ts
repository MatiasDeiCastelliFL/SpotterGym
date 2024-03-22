import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/user.entity';
import { UserRepository } from 'src/users/user.repository';
import { UserModel } from './user.schema';

@Injectable()
export class MongooseUserRepository implements UserRepository {
  constructor(@InjectModel(User.name) private users: UserModel) {}
  async find(params: object = {}): Promise<User[]> {
    console.info('>> USERS REPOSITORY', params);
    const user = await this.users.find(params).exec();
    console.info('>> USERS REPOSITORY', user);
    const roles = ['client', 'instructor', 'admin'];
    const role = roles[Math.floor(Math.random() * 12) % 3];
    return [
      {
        id: 'abcd1234',
        role,
        email: 'emanuel@spt.com',
        password: 'qwerty532',
      },
    ];
  }
}
