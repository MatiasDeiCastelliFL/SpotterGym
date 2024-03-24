import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { Rol, RolSchema } from './schemas/Rol.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: Rol.name,
            schema: RolSchema,
         },
      ]),
   ],
   controllers: [RolController],
   providers: [RolService],
})
export class RolModule {}
