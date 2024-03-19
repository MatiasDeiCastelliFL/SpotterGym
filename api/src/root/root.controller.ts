import { Controller, Get } from '@nestjs/common';
import { SPOTTER_GYM_URL } from '../utils/common';

@Controller()
export class RootController {
  @Get()
  index() {
    return {
      message: 'Welcome to the index of Rest API for Spotter Gym',
      links: {
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
