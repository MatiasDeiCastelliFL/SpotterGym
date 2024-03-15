import { IsAlpha, IsEmail, IsMobilePhone, Length } from 'class-validator';
export class CreateInstructorDTO {
  @IsAlpha()
  @Length(3, 30)
  firstName: string;

  @IsAlpha()
  @Length(3, 30)
  lastName: string;

  @IsMobilePhone()
  phone: string;

  description: string;

  @IsEmail()
  email: string;

  @Length(8, 16)
  password: string;
}
