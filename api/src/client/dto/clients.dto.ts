import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class createClient {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  pass: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNotEmpty()
  @IsString()
  nroDocument: string;
  @IsNotEmpty()
  typeDocuments: string;
  @IsNotEmpty()
  @IsString()
  birthDate: string;
  @IsNotEmpty()
  @IsString()
  role: string;
}
