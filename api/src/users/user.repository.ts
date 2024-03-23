import { Rol } from 'src/rol/schemas/Rol.schema';
import { User } from './user.entity';

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository {
  recovery_role_from(arg0: string): Promise<Rol>;
  create(data: User): Promise<void>;
  find(params: object): Promise<User[]>;
}
