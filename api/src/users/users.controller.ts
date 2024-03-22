import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserBody as UserBodyDTO, UsersResponse } from './dto/users';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  @Get()
  index(): UsersResponse {
    return UsersResponse.NoUsers();
  }

  @Post('sign-in')
  login(@Body() data: UserBodyDTO) {
    const { email, password } = data;
    console.info('>> sign in with', email, 'and', password);

    try {
      const result = this.service.sign_in_with(data);
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
