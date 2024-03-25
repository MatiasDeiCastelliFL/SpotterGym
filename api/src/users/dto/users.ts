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
   user_id: string;
   email: string;
   role_name: string;

   static from(params: UserResponse) {
      const user_response = new UserResponse();
      user_response.email = params.email;
      user_response.user_id = params.user_id;
      user_response.role_name = params.role_name;
      return user_response;
   }
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
