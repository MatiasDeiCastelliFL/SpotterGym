import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rol } from './schemas/Rol.schema';
import { Model } from 'mongoose';
import { CreateRol, UpdatingRole } from './dto/rol.dto/rol.dto';

@Injectable()
export class RolService {
   constructor(@InjectModel(Rol.name) private rolModel: Model<Rol>) {}
   async getRol(name: string) {
      if (name) {
         const searchRol = await this.rolModel
            .find({ name: name.toLowerCase() })
            .exec();
         if (searchRol.length > 0) {
            return {
               status: HttpStatus.OK,
               searchRol,
            };
         } else {
            return {
               status: HttpStatus.NOT_FOUND,
               message: 'Rol not found',
            };
         }
      }
      return await this.rolModel.find().exec();
   }
   async postRol(body: CreateRol) {
      const searchRol = await this.rolModel
         .findOne({
            name: body.name.toLowerCase(),
         })
         .exec();
      if (searchRol) {
         return {
            status: HttpStatus.CONFLICT,
            message: 'role is already registered',
         };
      } else {
         (await this.rolModel.create({ name: body.name })).save();
         return {
            status: HttpStatus.CREATED,
            message: 'Rol created successfully',
         };
      }
   }

   async updateRole(id: string, updateRole: UpdatingRole) {
      const search = await this.rolModel
         .findOne({
            name: updateRole.name.toLowerCase(),
         })
         .exec();
      if (search) {
         return {
            status: HttpStatus.NOT_FOUND,
            message: `The name ${updateRole.name.toLowerCase()} to be updated is already registered `,
         };
      }
      await this.rolModel.findByIdAndUpdate(
         { _id: id },
         { name: updateRole.name.toLowerCase() },
      );
      return {
         status: HttpStatus.OK,
         message: 'role updated successfully',
      };
   }
}
