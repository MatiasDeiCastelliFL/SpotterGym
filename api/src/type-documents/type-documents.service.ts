import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TypeDocument } from './schemas/typeDocuments.schema';
import { Model } from 'mongoose';
import {
  UpdatingTypeDocuments,
  createTypeDocuments,
} from './dto/typeDocuments.dto';

@Injectable()
export class TypeDocumentsService {
  constructor(
    @InjectModel(TypeDocument.name)
    private typeDocumentModel: Model<TypeDocument>,
  ) {}
  async filterTypeDocuments(name: string) {
    if (name) {
      const searchTypeDocuments = this.typeDocumentModel.find().exec();
      if (!searchTypeDocuments) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Type documents not found',
        };
      }
      return {
        status: HttpStatus.OK,
        searchTypeDocuments,
      };
    }
    return this.typeDocumentModel.find().exec();
  }
  async postTypeDocuments(createType: createTypeDocuments) {
    const searchTypeDocuments = await this.typeDocumentModel
      .findOne({
        name: createType.name.toLowerCase(),
      })
      .exec();
    if (searchTypeDocuments) {
      return {
        status: HttpStatus.CONFLICT,
        message: 'The type of document to be created already exists',
      };
    }
    (await this.typeDocumentModel.create({ name: createType.name })).save();
    return {
      status: HttpStatus.CREATED,
      message: 'document type was added correctly',
    };
  }
  async updateTypeDocuments(id: string, updateType: UpdatingTypeDocuments) {
    const searchTypeDocuments = await this.typeDocumentModel
      .findOne({
        name: updateType.name.toLowerCase(),
      })
      .exec();
    if (searchTypeDocuments) {
      return {
        status: HttpStatus.CONFLICT,
        message: `The name ${updateType.name.toLowerCase()} to be updated is already registered `,
      };
    }
    const searchType = await this.typeDocumentModel.findOne({ _id: id });
    if (!searchType) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'type Document not found',
      };
    }
    await this.typeDocumentModel.findByIdAndUpdate(
      { _id: id },
      { name: updateType.name.toLowerCase() },
    );
    return {
      status: HttpStatus.OK,
      message: 'document type updated successfully',
    };
  }
}
