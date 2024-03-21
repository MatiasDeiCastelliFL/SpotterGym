import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
  IsOptional,
} from 'class-validator';

export class updateClient {
  @IsString()
  @MinLength(4)
  @IsOptional()
  name?: string;
  @IsString()
  @MinLength(4)
  @IsOptional()
  lastName?: string;
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsString()
  @IsOptional()
  @IsStrongPassword()
  pass?: string;
  @IsString()
  @IsOptional()
  phone?: string;
  @IsString()
  @IsOptional()
  nroDocument?: string;
  @IsString()
  @IsOptional()
  typeDocuments?: string;
  @IsString()
  @IsOptional()
  birthDate?: string;
}
