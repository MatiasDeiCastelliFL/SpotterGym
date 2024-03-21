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
@Controller('client')
export class ClientController {
  constructor(private readonly serviceClients: ClientService) {}
  @Get()
  async getClient(@Query('name') name: string) {
    return this.serviceClients.filter_client(name);
  }
  @Post()
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
