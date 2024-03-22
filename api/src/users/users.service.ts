import { Inject, Injectable } from '@nestjs/common';
import { UserBody } from './dto/users';
import { USER_REPOSITORY, UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private repository: UserRepository) {}
  async sign_in_with(data: UserBody) {
    const { email, password } = data;
    const users = await this.repository.find({ email });
    const user = users[0];
    if (!user) throw new Error('Invalid Credentials');
    if (not_validated(password, user)) throw new Error('Invalid Credentials');

    const { id, role } = user;
    const result = { id, email: user.email, role };
    return result;
  }
}
function not_validated(password: string, user: User) {
  console.info('>> COMPARE PASSWORD', password, user.password);
  return false;
}
