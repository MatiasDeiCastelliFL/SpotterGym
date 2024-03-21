import { Get, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createClient } from './dto/clients.dto';
import { TypeDocument } from 'src/type-documents/schemas/typeDocuments.schema';
import { Client } from './schemas/Clients.schema';
import { Rol } from 'src/rol/schemas/Rol.schema';
import { updateClient } from './dto/clientsUpdate.dto';
import { uploadCloudinary } from 'src/functions/uploadImage';
import { descriptPass, hassPass } from 'src/functions/encrypt';
import { SeaerchAccess } from './dto/clientAccess.dto';
import { RecoverClientsEmail, recoverClients } from './dto/recover.dto';
import { recoverPass, send } from 'src/functions/nodemailer';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientMode: Model<Client>,
    @InjectModel(TypeDocument.name) private typeDoc: Model<TypeDocument>,
    @InjectModel(Rol.name) private typeRol: Model<Rol>,
  ) {}
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
      .populate('typeDocumentId typeRolId')
      .exec();
    return {
      status: HttpStatus.OK,
      search,
    };
  }
  async post_clients(createClients: createClient, image: string) {
    const searchClientEmail = await this.clientMode.findOne({
      email: createClients.email,
    });
    const searchClientPhone = await this.clientMode.findOne({
      phone: createClients.phone,
    });
    const searchClientType = await this.typeDoc.findOne({
      name: createClients.typeDocuments,
    });
    const searchRolClient = await this.typeRol.findOne({
      name: createClients.role,
    });
    if (
      searchClientEmail ||
      searchClientPhone ||
      !searchClientType ||
      !searchRolClient
    ) {
      const error = [];
      if (searchClientEmail) {
        error.push('email already exists');
      }
      if (!searchRolClient) {
        error.push('Select a rol correctly');
      }
      if (searchClientPhone) {
        error.push('phone already exists');
      }
      if (!searchClientType) {
        error.push('Select a type correctly');
      }
      return {
        status: HttpStatus.CONFLICT,
        error,
      };
    }
    const password = await hassPass(createClients.pass);
    try {
      const client = await this.clientMode.create({
        firstName: createClients.name,
        lastName: createClients.lastName,
        email: createClients.email,
        phone: createClients.phone,
        image: image,
        nroDocuments: createClients.nroDocument,
        typeDocumentId: searchClientType,
        birthDate: createClients.birthDate,
        typeRolId: searchRolClient,
        pass: password,
      });
      await send(client.id, client.email);
      client.save();
      return {
        status: HttpStatus.CREATED,
        message: 'client created successfully',
      };
    } catch (error) {
      console.log(error);
    }
  }
  async update_clients(
    id: string,
    updateClients?: updateClient,
    file?: Express.Multer.File,
  ) {
    const error = [];
    if (file) {
      const sendImage = await uploadCloudinary(file);
      updateClients['image'] = sendImage;
    }
    const searchClient = await this.clientMode.findOne({ _id: id });
    if (
      updateClients.email &&
      searchClient &&
      updateClients.email != searchClient.email
    ) {
      const searchEmail = await this.clientMode
        .findOne({
          $and: [{ email: updateClients.email }, { _id: { $ne: id } }],
        })
        .exec();
      if (searchEmail) {
        error.push('email already exists');
      }
    }

    if (
      updateClients.phone &&
      searchClient.phone &&
      Number(updateClients.phone) != searchClient.phone
    ) {
      const searchPhone = await this.clientMode
        .findOne({
          $and: [{ phone: updateClients.phone }, { _id: { $ne: id } }],
        })
        .exec();
      if (searchPhone) {
        error.push('phone already exists');
      }
    }
    if (updateClients.pass) {
      updateClients['pass'] = await hassPass(updateClients.pass);
    }
    if (error.length > 0) {
      return {
        status: HttpStatus.CONFLICT,
        error,
      };
    } else {
      const clientUpdate = await this.clientMode
        .findByIdAndUpdate(id, updateClients)
        .exec();
      clientUpdate.save();
      return {
        status: HttpStatus.OK,
        message: 'account updated successfully',
      };
    }
  }

  async login(access: SeaerchAccess) {
    return await descriptPass(this.clientMode, access.email, access.pass);
  }
  async recover(params: RecoverClientsEmail) {
    const searchClient = await this.clientMode
      .findOne({
        email: params.email,
      })
      .exec();

    if (!searchClient) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'Email incorrect',
      };
    } else {
      await recoverPass(searchClient.id, searchClient.email);
      return {
        status: HttpStatus.OK,
        message: 'Email sending successfully',
      };
    }
  }
  async recoverPassword(id: string, recoverClient: recoverClients) {
    const searchClient = await this.clientMode
      .findOne({
        _id: id,
      })
      .exec();

    if (recoverClient.passNew == recoverClient.passValidate) {
      const passworAdd = await hassPass(recoverClient.passNew);
      searchClient.pass = passworAdd;
      searchClient.save();
      return {
        status: HttpStatus.OK,
        message: 'Password changed successfully ',
      };
    } else {
      return {
        status: HttpStatus.CONFLICT,
        message: 'Passwords do not match',
      };
    }
  }
  async activeAccount(id: string) {
    const searchClient = await this.clientMode
      .findOne({
        _id: id,
      })
      .exec();

    if (!searchClient) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'id incorrect',
      };
    }
    if (!searchClient.active) {
      searchClient.active = true;
      searchClient.save();
      return {
        status: HttpStatus.OK,
        message: 'account successfully activated',
      };
    } else {
      return {
        status: HttpStatus.CONFLICT,
        message: 'the account is already activated',
      };
    }
  }
  async desactiveAcount(id: string) {
    const searchClient = await this.clientMode
      .findOne({
        _id: id,
      })
      .exec();

    if (!searchClient) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'Id incorrect',
      };
    }

    if (searchClient.active) {
      searchClient.active = false;
      searchClient.save();
      return {
        status: HttpStatus.OK,
        message: 'account successfully deactivate',
      };
    } else {
      return {
        status: HttpStatus.CONFLICT,
        message: 'the account is already deactivate',
      };
    }
  }
}
