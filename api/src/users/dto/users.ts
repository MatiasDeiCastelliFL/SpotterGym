import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserBody {
  @IsNotEmpty({ message: 'email must be present' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password must be present' })
  password: string;
}

export class UserResponse {
  id_: string;
  email: string;
  role: string;
}

export class UsersResponse {
  message: string;
  users: UserResponse[];

  static NoUsers(): UsersResponse {
    return {
      message: 'No users found',
      users: [],
    };
  }
}
