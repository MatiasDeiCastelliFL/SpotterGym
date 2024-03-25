import {
   BadRequestException,
   Body,
   Controller,
   Get,
   NotFoundException,
   Param,
   Patch,
   Post,
   UploadedFile,
   UseInterceptors,
} from '@nestjs/common';
import {
   InstructorBodyData,
   InstructorUpdateBody,
   ParamShowInstructor,
   InstructorsOkResponse,
   InstructorPostBody,
   InstructorResponse,
} from './dto/create.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { InstructorsService } from './instructors.service';

import {
   ApiBadRequestResponse,
   ApiBody,
   ApiCreatedResponse,
   ApiInternalServerErrorResponse,
   ApiNotFoundResponse,
   ApiOkResponse,
   ApiTags,
} from '@nestjs/swagger';
import { SPOTTER_GYM_URL } from 'src/utils/common';

@ApiTags('Instructores')
@Controller('instructors')
export class InstructorsController {
   constructor(private instructors: InstructorsService) {}

   parse_(instructor: any) {
      const { firstName, lastName, phone, email, description, image_url } =
         instructor;
      return {
         data: {
            firstName,
            lastName,
            phone,
            email,
            description,
         },
         links: {
            self: `${SPOTTER_GYM_URL}/instructors/${instructor._id}`,
            image_url,
            reviews: `${SPOTTER_GYM_URL}/instructors/${instructor._id}/reviews`,
         },
      };
   }

   @Get()
   @ApiOkResponse({
      description:
         'Devuelve un objeto con la lista de los instructores registrados',
      type: InstructorsOkResponse,
   })
   @ApiInternalServerErrorResponse({
      description: 'Cuando surge un problema dentro del servidor',
   })
   async index(): Promise<object> {
      const response = {
         message: 'not found instructors',
         data: null,
      };
      try {
         const instructors = await this.instructors.findAll();
         if (instructors.length) {
            response.message = 'instructors found';
            response.data = instructors.map((e) => this.parse_(e));
         }
      } catch (error) {
         console.error(error);
         throw new BadRequestException(error);
      }
      return response;
   }

   @Post()
   @ApiBody({
      type: InstructorPostBody,
   })
   @ApiCreatedResponse({
      description:
         'Retorna un objeto con los datos del instructor registrado junto con sus enlaces',
      type: InstructorResponse,
   })
   @ApiBadRequestResponse({
      description:
         'En caso que algún dato no sea válido, responde indicando que dato no es válido',
   })
   @ApiInternalServerErrorResponse({
      description: 'Cuando surge algún problema interno',
   })
   @UseInterceptors(FileInterceptor('photo'))
   async create(
      @Body() body: InstructorBodyData,
      @UploadedFile() file: Express.Multer.File,
   ) {
      try {
         const instructor = await this.instructors.create(body, file);
         return this.parse_(instructor);
      } catch (error) {
         console.error('>> CONTROLLER', error);

         throw new BadRequestException(error.message);
      }
   }

   @Get('/:id')
   @ApiOkResponse({
      description: 'Retorna los datos del instructor con los enlaces',
      type: InstructorResponse,
   })
   @ApiNotFoundResponse({ description: 'En caso que el ID no se encuentre.' })
   async show(@Param() param: ParamShowInstructor) {
      try {
         const instructor = await this.instructors.findBy(param.id);
         if (!instructor) throw new NotFoundException('instructor not found');
         console.info(
            '>> GET',
            param.id,
            'CONTROLLER',
            instructor,
            SPOTTER_GYM_URL,
         );
         return this.parse_(instructor);
      } catch (error) {
         if (error.name === 'NotFoundException')
            throw new NotFoundException('instructor not found');

         throw new BadRequestException(error);
      }
   }

   @Patch(':id')
   @ApiOkResponse({
      description: 'Retorna los datos del instructor con los datos modificados',
      type: InstructorResponse,
   })
   @ApiNotFoundResponse({ description: 'En caso que el ID no se encuentre.' })
   @ApiBadRequestResponse({
      description: 'En caso que algún dato no sea válido',
   })
   @UseInterceptors(FileInterceptor('photo'))
   async update(
      @Param() param: ParamShowInstructor,
      @Body() body: InstructorUpdateBody,
      @UploadedFile() file: Express.Multer.File,
   ) {
      const data = {};
      for (const k in body) {
         data[k] = body[k];
      }
      if (Object.entries(data).length === 0)
         throw new BadRequestException('no data to update');

      console.info(
         '>> PATCH CONTROLLER',
         param.id,
         Object.entries(data).map((e) => e.join(' => ')),
         file ? file : 'no photo',
      );

      const instructor = await this.instructors.update(param.id, body, file);

      console.info(
         'PATCH CONTROLLER [instructor]',
         instructor.firstName,
         instructor.lastName,
      );
      return {
         message: 'instructor updated',
         data: this.parse_(instructor),
      };
   }
}
