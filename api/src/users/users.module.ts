import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { USER_REPOSITORY } from './user.repository';
import { MongooseUserRepository } from './infra/database/mongoose.users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './infra/database/user.schema';
import { User } from './user.entity';
import { Rol, RolSchema } from 'src/rol/schemas/Rol.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: User.name,
            schema: UserSchema,
         },
         {
            name: Rol.name,
            schema: RolSchema,
         },
      ]),
   ],
   controllers: [UsersController],
   providers: [
      UsersService,
      {
         provide: USER_REPOSITORY,
         useClass: MongooseUserRepository,
      },
   ],
   exports: [UsersService, USER_REPOSITORY],
})
export class UsersModule {}
