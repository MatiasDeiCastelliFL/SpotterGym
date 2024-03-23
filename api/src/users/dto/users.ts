import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserBody {
   @ApiProperty({
      description: 'Correo electrónico del usuario',
      example: 'emanuel-gauler@spotter-gym.com.ar',
   })
   @IsNotEmpty({ message: 'El correo electrónico debe estar presente' })
   @IsEmail()
   email: string;

   @ApiProperty({
      description: 'Contraseña del usuario',
      example: 'twreqt2537',
   })
   @IsNotEmpty({ message: 'La contraseña debe estar presente' })
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
         message: 'Usuarios no encontrados',
         users: [],
      };
   }
}
