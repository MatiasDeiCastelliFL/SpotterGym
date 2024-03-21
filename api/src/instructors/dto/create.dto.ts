import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  Matches,
  MaxLength,
} from 'class-validator';

export class InstructorBodyData {
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

  @IsEmail()
  email: string;

  @MaxLength(150, { message: "description can't exceed 150 characters" })
  description: string;

  @IsNotEmpty({ message: 'password must be present' })
  @IsStrongPassword()
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

class InstructorData {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  description: string;
}

class InstructorLinks {
  self: string;
  image_url: string;
  reviews: string;
}

class InstructorResponse {
  @ApiProperty({ type: [InstructorData] })
  data: InstructorData[];

  @ApiProperty()
  links: InstructorLinks;
}

export class InstructorsOkResponse {
  @ApiProperty()
  message: string;
  @ApiProperty({ type: [InstructorResponse] })
  data: InstructorData[];
}

export class InstructorPostBody extends PartialType(InstructorBodyData) {
  @ApiProperty({
    description: 'Binario de la foto de perfil',
  })
  photo: object;
}
