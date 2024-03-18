import { Get, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/Clients.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientMode: Model<Client>) {}
  @Get()
  async filter_client(name: string) {
    if (name) {
      const search = await this.clientMode.find({ name: name }).exec();
      if (search.length > 0) {
        return {
          status: HttpStatus.OK,
          search,
        };
      }
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'Client not found',
      };
    }
    const search = await this.clientMode
      .find()
      .populate('typeDocumentId')
      .exec();
    return {
      status: HttpStatus.OK,
      search,
    };
  }
}
