import {
   Body,
   Controller,
   Get,
   HttpException,
   HttpStatus,
   Param,
   Post,
   Query,
   Res,
   UploadedFile,
   UseInterceptors,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { createClient } from './dto/clients.dto';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { uploadCloudinary } from 'src/functions/uploadImage';
import { updateClient } from './dto/clientsUpdate.dto';
import { ParseMongoIdPipe } from 'src/functions/global';
import { SeaerchAccess } from './dto/clientAccess.dto';
import { RecoverClientsEmail, recoverClients } from './dto/recover.dto';
import { Response } from 'express';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import {
   ClientActived,
   ClientDesactivated,
   CreateClientInterceptor,
   FilterClientInterceptor,
   PatchClientInteceptor,
} from './documents/decorators';
import { searchClients } from './dto/clientSearch.dto';
@Controller('client')
@ApiTags('Clientes')
export class ClientController {
   constructor(private readonly serviceClients: ClientService) {}

   @FilterClientInterceptor(
      'The answers you may receive:<ul><br/><li class="colorText">Client not found.</li></ul><br/>',
      'The answers you may receive:<ul><br/><li>[ ] = indicates that there is no client loaded.</li><br/><li>Will return all clients in an array.</li><br/><li>Will return a particular client if the name was specified.</li></ul><br/>',
   )
   async getClient(@Query() searchClient: searchClients) {
      return this.serviceClients.filter_client(searchClient.name);
   }
   @CreateClientInterceptor(
      'Client created successfully',
      '\nIt will return an array with errors that are as follows:<ul><br/><li>email already exists.</li><br/><li>select a rol correctly.</li><br/><li>phone already exists.</li><br/><li>Select a typeDocuments correctly</li></ul><br/>',
   )
   async create_clients(
      @Body() createClients: createClient,
      @UploadedFile() file: Express.Multer.File,
   ) {
      try {
         const sendImage = await uploadCloudinary(file);
         return await this.serviceClients.post_clients(
            createClients,
            sendImage,
         );
      } catch (error) {
         console.log(error);
         throw new Error('Failed to upload file');
      }
   }
   @PatchClientInteceptor(
      '\nWill return an array with the following possible answers:<ul><br/><li>Account updated successfully.</li><br/><li>data is maintained.</li></ul><br/>',
      '\nIt will return an array with errors that are as follows:<ul><br/><li>email already exists.</li><br/><li>phone already exists.</li><br/><li>number the document already exists.</li></ul><br/>',
   )
   async update_clients(
      @Param('id', new ParseMongoIdPipe()) id: string,
      @Body() updateClients: updateClient,
      @UploadedFile() file?: Express.Multer.File,
   ) {
      return await this.serviceClients.update_clients(id, updateClients, file);
   }
   @ClientActived(
      'Id incorrect',
      'Account successfully activated',
      'The account is already activated',
   )
   async activeAcount(@Param('id', new ParseMongoIdPipe()) id: string) {
      return await this.serviceClients.activeAccount(id);
   }
   @ClientDesactivated(
      'Id incorrect',
      'Account successfully deactivate',
      'The account is already deactivate',
   )
   async desactiveAcount(@Param('id', new ParseMongoIdPipe()) id: string) {
      return await this.serviceClients.desactiveAcount(id);
   }

   @Post('login')
   @UseInterceptors(NoFilesInterceptor())
   @ApiExcludeEndpoint()
   async login_clients(@Body() access: SeaerchAccess) {
      return await this.serviceClients.login(access);
   }
   @Get('active/email/:id')
   @ApiExcludeEndpoint()
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
         throw new HttpException(
            'No se pudo activar la cuenta',
            HttpStatus.NOT_FOUND,
         );
      }
   }
   @Post('recovered')
   @UseInterceptors(NoFilesInterceptor())
   @ApiExcludeEndpoint()
   async recover(@Body() email: RecoverClientsEmail) {
      return await this.serviceClients.recover(email);
   }
   @Post('recovered/pass/:id')
   @UseInterceptors(NoFilesInterceptor())
   @ApiExcludeEndpoint()
   async recoverPass(
      @Param('id', new ParseMongoIdPipe()) id: string,
      @Body() BodyPass: recoverClients,
   ) {
      return this.serviceClients.recoverPassword(id, BodyPass);
   }
}
