import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class updateClient {
   @IsString()
   @IsOptional()
   @ApiProperty()
   firstName?: string;
   @IsString()
   @IsOptional()
   @ApiProperty()
   lastName?: string;
   @IsOptional()
   @ApiProperty()
   email?: string;
   @IsString()
   @IsOptional()
   @ApiProperty()
   pass?: string;
   @IsOptional()
   @ApiProperty()
   phone?: string;
   @IsString()
   @IsOptional()
   @ApiProperty()
   nroDocuments?: string;
   @IsString()
   @IsOptional()
   @ApiProperty()
   typeDocumentId?: string;
   @IsString()
   @IsOptional()
   @ApiProperty()
   birthDate?: string;
   @IsOptional()
   @ApiProperty({ type: 'file', format: 'string' })
   file?: Express.Multer.File;
}
