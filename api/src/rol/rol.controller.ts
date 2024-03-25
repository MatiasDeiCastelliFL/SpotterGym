import {
   Body,
   Controller,
   Get,
   Param,
   Patch,
   Post,
   Query,
   UseInterceptors,
} from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRol, UpdatingRole } from './dto/rol.dto/rol.dto';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { ParseMongoIdPipe } from 'src/functions/global';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('rol')
export class RolController {
   constructor(private readonly ServiceRol: RolService) {}
   @Get('')
   async filter_rol(@Query('name') name: string) {
      return await this.ServiceRol.getRol(name);
   }

   @Post()
   @UseInterceptors(NoFilesInterceptor())
   CreateRol(@Body() rol: CreateRol) {
      return this.ServiceRol.postRol(rol);
   }
   @Patch(':id')
   @UseInterceptors(NoFilesInterceptor())
   update_rol(
      @Body() rolUpdating: UpdatingRole,
      @Param('id', new ParseMongoIdPipe()) id: string,
   ) {
      return this.ServiceRol.updateRole(id, rolUpdating);
   }
}
