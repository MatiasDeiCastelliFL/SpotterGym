import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { createClient } from './dto/clients.dto';
import { FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';
import { uploadCloudinary } from 'src/functions/uploadImage';
import { updateClient } from './dto/clientsUpdate.dto';
import { ParseMongoIdPipe } from 'src/functions/global';
import { SeaerchAccess } from './dto/clientAccess.dto';
import { RecoverClientsEmail, recoverClients } from './dto/recover.dto';
import { Response } from 'express';
import {
  ApiBody,
  ApiConsumes,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  PostClients,
  schemaClient,
  searchRequired,
} from './documents/documents';
@Controller('client')
@ApiTags('Clientes')
export class ClientController {
  constructor(private readonly serviceClients: ClientService) {}
  @Get()
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 404,
    description:
      'The answers you may receive:<ul><br/><li class="colorText">Client not found.</li></ul><br/>',
  })
  @ApiResponse({
    status: 200,
    description:
      'The answers you may receive:<ul><br/><li>[ ] = indicates that there is no client loaded.</li><br/><li>Will return all clients in an array.</li><br/><li>Will return a particular client if the name was specified.</li></ul><br/>',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Enter the name of the client to search (Optional)',
  })
  async getClient(@Query('name') name: string) {
    return this.serviceClients.filter_client(name);
  }
  @Post()
  @ApiBody(PostClients())
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: 'Client created successfully',
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: schemaClient(),
          required: searchRequired(schemaClient()),
        },
      },
    },
  })
  @ApiResponse({
    status: 409,
    description:
      '\nIt will return an array with errors that are as follows:<ul><br/><li>email already exists.</li><br/><li>Select a rol correctly.</li><br/><li>phone already exists.</li><br/><li>Select a typeDocuments correctly</li></ul><br/>',
  })
  @UseInterceptors(FileInterceptor('file'))
  async create_clients(
    @Body() createClients: createClient,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      const sendImage = await uploadCloudinary(file);
      return await this.serviceClients.post_clients(createClients, sendImage);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to upload file');
    }
  }
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update_clients(
    @Param('id', new ParseMongoIdPipe()) id: string,
    @Body() updateClients: updateClient,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return await this.serviceClients.update_clients(id, updateClients, file);
  }

  @Post('login')
  @UseInterceptors(NoFilesInterceptor())
  async login_clients(@Body() access: SeaerchAccess) {
    return await this.serviceClients.login(access);
  }
  @Get('active/:id')
  async activeAcount(@Param('id', new ParseMongoIdPipe()) id: string) {
    return await this.serviceClients.activeAccount(id);
  }
  @Get('active/email/:id')
  async activeAcountEmail(
    @Param('id', new ParseMongoIdPipe()) id: string,
    @Res() res: Response,
  ) {
    const responseData = await this.serviceClients.activeAccountEmail(id);

    if (responseData.status == HttpStatus.OK) {
      res.redirect(
        `https://spotter-gym.vercel.app/activada?firstName=${responseData.user.name}&lastName=${responseData.user.lastName}&email=${responseData.user.email}`,
      );
    } else {
      console.log('llegue2');
      throw new HttpException(
        'No se pudo activar la cuenta',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('desactive/:id')
  async desactiveAcount(@Param('id', new ParseMongoIdPipe()) id: string) {
    return await this.serviceClients.desactiveAcount(id);
  }
  @Post('recovered')
  @UseInterceptors(NoFilesInterceptor())
  async recover(@Body() email: RecoverClientsEmail) {
    return await this.serviceClients.recover(email);
  }
  @Post('recovered/pass/:id')
  @UseInterceptors(NoFilesInterceptor())
  async recoverPass(
    @Param('id', new ParseMongoIdPipe()) id: string,
    @Body() BodyPass: recoverClients,
  ) {
    return this.serviceClients.recoverPassword(id, BodyPass);
  }
}
