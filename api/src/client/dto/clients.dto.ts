import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class createClient {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MinLength(4)
  lastName: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  @ApiProperty()
  pass: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  phone: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nroDocument: string;
  @IsNotEmpty()
  @ApiProperty()
  typeDocuments: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  birthDate: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  role: string;
  @IsOptional()
  @ApiProperty({ type: 'file', format: 'string' })
  file?: Express.Multer.File;
}
