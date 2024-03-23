import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserBody {
   @ApiProperty({
      description: 'Correo electrónico del usuario',
      example: 'emanuel-gauler@spotter-gym.com.ar',
   })
   @IsNotEmpty({ message: 'email must be present' })
   @IsEmail()
   email: string;

   @ApiProperty({
      description: 'Contraseña del usuario',
      example: 'twreqt2537',
   })
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
