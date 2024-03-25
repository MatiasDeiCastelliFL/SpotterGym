import {
   BadRequestException,
   Body,
   Controller,
   ForbiddenException,
   Get,
   Post,
   Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
   UserBody as UserBodyDTO,
   UserResponse,
   UsersResponse,
} from './dto/users';
import { JWT_SECRET } from 'src/utils/common';
import { sign } from 'jsonwebtoken';
import {
   ApiBadRequestResponse,
   ApiCreatedResponse,
   ApiForbiddenResponse,
   ApiOkResponse,
   ApiTags,
} from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('users')
export class UsersController {
   constructor(private service: UsersService) {}

   @ApiOkResponse({
      description:
         'Retorna una lista de los usuarios registrados en el sistema',
      content: {
         'application/json': {
            schema: {
               type: 'object',
               properties: {
                  message: {
                     type: 'string',
                     example: 'Usuarios registrados',
                  },
                  users: {
                     type: 'array',
                     items: {
                        type: 'object',
                        properties: {
                           email: {
                              type: 'string',
                              example: 'emanuel-gauler@spotter-gym.com.ar',
                           },
                           user_id: {
                              type: 'string',
                              example: '65fe2a8667bb7d6b0afe191e',
                           },
                           role_name: { type: 'string', example: 'cliente' },
                        },
                     },
                  },
               },
            },
         },
      },
   })
   @Get()
   async index(@Query() params: UserResponse): Promise<UsersResponse> {
      const response = UsersResponse.NoUsers();
      const result = await this.service.list_user_with(params);
      if (result.length) {
         response.message = 'Usuarios registrados';
         const users = result.map((e) => {
            const { email, user_id, role_name } = e;
            return UserResponse.from({ email, user_id, role_name });
         });
         response.users = users;
      }
      console.log('>> USERS CONTROLLER LISTING');
      return response;
   }

   @ApiCreatedResponse({
      description: 'Retorna un mensaje y el token de acceso al sistema',
      content: {
         'application/json': {
            schema: {
               type: 'object',
               properties: {
                  message: { type: 'string', example: 'Acceso garantizado' },
                  token: {
                     type: 'string',
                     example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmZTJhODY2N2JiN2Q2YjBhZmUxOTFlIiwicm9sZV9uYW1lIjoiY2xpZW50ZSIsImlhdCI6MTUxNjIzOTAyMn0.442YBdadlaBf-1YO23LsCYxH0UQtAeUQ-UFb5CDOxS0',
                  },
               },
            },
         },
      },
   })
   @ApiBadRequestResponse({
      description: 'Cuando falta algún dato en el mensaje de la solicitud',
      content: {
         'application/json': {
            schema: {
               type: 'object',
               properties: {
                  message: {
                     type: 'string',
                     example: 'faltan datos para verificar el usuario',
                  },
               },
            },
         },
      },
   })
   @ApiForbiddenResponse({
      description: 'Cuando las credenciales no son válidas',
      content: {
         'application/json': {
            schema: {
               type: 'object',
               properties: {
                  message: { type: 'string', example: 'Acceso no autorizado' },
               },
            },
         },
      },
   })
   @Post('sign-in')
   async login(@Body() data: UserBodyDTO) {
      try {
         const result = await this.service.sign_in_with(data);
         const token = sign(result, JWT_SECRET, {
            algorithm: 'HS256',
         });
         console.warn('>> USER', data.email, 'GRANTED');
         return {
            message: 'Acceso garantisado',
            token,
         };
      } catch (error) {
         console.error('>> SIGN IN ERROR:', error.message);
         if (error.message == 'Invalid Credentials') {
            throw new ForbiddenException({ message: 'Acceso no autorizado' });
         } else {
            throw new BadRequestException(error);
         }
      }
   }
}
