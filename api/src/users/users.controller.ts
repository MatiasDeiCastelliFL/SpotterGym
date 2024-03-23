import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserBody as UserBodyDTO, UsersResponse } from './dto/users';
import { JWT_SECRET } from 'src/utils/common';
import { sign } from 'jsonwebtoken';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  @Get()
  index(): UsersResponse {
    return UsersResponse.NoUsers();
  }

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
      console.error('>> SIGN IN ERROR:', error);
      throw new BadRequestException(error);
    }
  }
}
