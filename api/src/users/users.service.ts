import { Inject, Injectable } from '@nestjs/common';
import { UserBody } from './dto/users';
import { USER_REPOSITORY, UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private repository: UserRepository) {}

  async create_instructor_with(params: {
    email: string;
    password: string;
    id: any;
  }) {
    const { email, password, id } = params;
    const instructor_role =
      await this.repository.recovery_role_from('profesor');
    const user_data = {
      email,
      password,
      user_id: id,
      role_name: instructor_role.name,
    };
    console.info('>> CREATE USER SERVICE', user_data);
    this.repository.create(user_data);
  }

  async sign_in_with(data: UserBody) {
    const { email, password } = data;
    const users = await this.repository.find({ email });
    const user = users[0];
    if (!user) throw new Error('Invalid Credentials');
    if (not_validated(password, user.password))
      throw new Error('Invalid Credentials');

    const { user_id, role_name } = user;
    const result = { user_id, email: user.email, role_name };
    return result;
  }

  async recovery_from(email: string) {
    const users = await this.repository.find({ email });
    return users[0];
  }
}

function not_validated(password: string, user_password: string) {
  console.info('>> COMPARE PASSWORD', password, user_password);
  return false;
}