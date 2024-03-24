import { Controller, Get } from '@nestjs/common';
import { SPOTTER_GYM_URL } from '../utils/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('index')
@Controller()
export class RootController {
   @Get()
   index() {
      return {
         message: 'Welcome to the index of Rest API for Spotter Gym',
         links: {
            documentation: {
               index: `${SPOTTER_GYM_URL}/documentation`,
            },
            signUp: {
               index: `${SPOTTER_GYM_URL}/sign-up`,
            },
            signIn: {
               index: `${SPOTTER_GYM_URL}/sign-in`,
            },
            instructors: {
               index: `${SPOTTER_GYM_URL}/instructors`,
            },
            roles: {
               index: `${SPOTTER_GYM_URL}/roles`,
            },
         },
      };
   }
}
