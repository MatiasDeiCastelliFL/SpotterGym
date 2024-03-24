// patch.decorator.ts

import { Get, Patch, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
   ApiBody,
   ApiConsumes,
   ApiParam,
   ApiQuery,
   ApiResponse,
} from '@nestjs/swagger';
import { PostClients, schemaClient, searchRequired } from './documents'; // Asegúrate de importar el esquema correcto

export const PatchClientInteceptor = (
   response200: string,
   response409: string,
) => {
   return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
   ) => {
      Patch(':id')(target, propertyKey, descriptor);
      UseInterceptors(FileInterceptor('file'))(target, propertyKey, descriptor);
      ApiConsumes('multipart/form-data')(target, propertyKey, descriptor);
      ApiResponse({
         status: 200,
         description: response200,
         content: {
            'multipart/form-data': {
               schema: {
                  type: 'object',
                  properties: schemaClient(), // Asegúrate de que esta función devuelva el esquema correcto
               },
            },
         },
      })(target, propertyKey, descriptor);
      ApiResponse({
         status: 409,
         description: response409,
      })(target, propertyKey, descriptor);
   };
};

export const CreateClientInterceptor = (
   response201: string,
   response409: string,
) => {
   // se retorna una funcion flecha con las siguientes propiedades target:any, propertyKey:string, descriptor:PropertyDescriptor
   return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
   ) => {
      Post()(target, propertyKey, descriptor);
      ApiBody(PostClients())(target, propertyKey, descriptor);
      ApiConsumes('multipart/form-data')(target, propertyKey, descriptor);
      ApiResponse({
         status: 201,
         description: response201,
         content: {
            'multipart/form-data': {
               schema: {
                  type: 'object',
                  properties: schemaClient(),
                  required: searchRequired(schemaClient()),
               },
            },
         },
      })(target, propertyKey, descriptor);
      ApiResponse({
         status: 409,
         description: response409,
      });
      UseInterceptors(FileInterceptor('file'))(target, propertyKey, descriptor);
   };
};

export const FilterClientInterceptor = (
   response404: string,
   response200: string,
) => {
   return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
   ) => {
      Get()(target, propertyKey, descriptor);
      ApiConsumes('multipart/form-data')(target, propertyKey, descriptor);
      ApiQuery({
         name: 'name',
         required: false,
         description: 'Enter the name of the client to search (Optional)',
      })(target, propertyKey, descriptor);
      ApiResponse({
         status: 200,
         description: response200,
      })(target, propertyKey, descriptor);
      ApiResponse({
         status: 404,
         description: response404,
      })(target, propertyKey, descriptor);
   };
};

export const ClientActived = (
   response400: string,
   response200: string,
   response404: string,
) => {
   return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
   ) => {
      Get('active/:id')(target, propertyKey, descriptor);
      ApiConsumes('multipart/form-data')(target, propertyKey, descriptor);
      ApiParam({
         name: 'id',
         required: true,
         description: 'Id del cliente a activar',
      })(target, propertyKey, descriptor);
      ApiResponse({ status: 200, description: response200 })(
         target,
         propertyKey,
         descriptor,
      );
      ApiResponse({ status: 400, description: response400 })(
         target,
         propertyKey,
         descriptor,
      );
      ApiResponse({ status: 404, description: response404 })(
         target,
         propertyKey,
         descriptor,
      );
   };
};
export const ClientDesactivated = (
   response400: string,
   response200: string,
   response404: string,
) => {
   return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
   ) => {
      Get('desactive/:id')(target, propertyKey, descriptor);
      ApiConsumes('multipart/form-data')(target, propertyKey, descriptor);
      ApiParam({
         name: 'id',
         description: 'Id del cliente a desactivar',
         required: true,
      })(target, propertyKey, descriptor);
      ApiResponse({ status: 200, description: response200 })(
         target,
         propertyKey,
         descriptor,
      );
      ApiResponse({ status: 400, description: response400 })(
         target,
         propertyKey,
         descriptor,
      );
      ApiResponse({ status: 404, description: response404 })(
         target,
         propertyKey,
         descriptor,
      );
   };
};
