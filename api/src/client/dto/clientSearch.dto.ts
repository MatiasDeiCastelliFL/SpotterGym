import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class searchClients {
   @ApiProperty()
   @IsString()
   @IsOptional()
   name: string;
}
