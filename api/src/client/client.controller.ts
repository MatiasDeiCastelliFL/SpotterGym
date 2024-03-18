import { Controller, Get, Query } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly serviceClients: ClientService) {}
  @Get()
  async getClient(@Query('name') name: string) {
    return this.serviceClients.filter_client(name);
  }
}
