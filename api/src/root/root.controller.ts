import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  index() {
    return 'Index of Rest API for Spotter Gym';
  }
}
