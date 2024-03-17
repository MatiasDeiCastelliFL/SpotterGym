import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
} from 'class-validator';

export class InstructorPostBody {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @Matches(
    /^\+?(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
    {
      message: 'phone not valid',
    },
  )
  phone: string;

  @MaxLength(150)
  description: string;

  @IsEmail()
  email: string;

  password: string;
}

export class CreateInstructorDTO {
  firstName: string;

  lastName: string;

  phone: string;

  description: string;

  email: string;

  password: string;

  image_url: string;
}
