import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class recoverClients {
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  passNew: string;
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  passValidate: string;
}

export class RecoverClientsEmail {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
