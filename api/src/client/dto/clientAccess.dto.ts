import { IsNotEmpty, IsString } from 'class-validator';
export class SeaerchAccess {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsNotEmpty()
  pass: string;
}
