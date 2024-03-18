import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
} from 'class-validator';

export class InstructorPostBody {
  @IsNotEmpty({ message: 'firstname must be present' })
  firstName: string;

  @IsNotEmpty({ message: 'lastname must be present' })
  lastName: string;

  @IsOptional()
  @Matches(
    /^\+?(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
    {
      message: 'phone not valid',
    },
  )
  phone: string;

  @MaxLength(150, { message: "description can't exceed 150 characters" })
  description: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password must be present' })
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

export class ParamShowInstructor {
  @IsMongoId({ message: 'must be a valid id' })
  id: string;
}

export class InstructorUpdateBody {
  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  @Matches(
    /^\+?(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
    {
      message: 'phone not valid',
    },
  )
  phone: string;

  @IsOptional()
  @MaxLength(150, { message: "description can't exceed 150 characters" })
  description: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  password: string;
}
