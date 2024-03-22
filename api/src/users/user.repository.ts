import { User } from './user.entity';

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository {
  find(params: object): Promise<User[]>;
}
