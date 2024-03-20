import { SPOTTER_GYM_URL } from 'src/utils/common';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
} from 'class-validator';

export class InstructorPostBody {
  @ApiProperty({ description: 'Nombre del instructor' })
  @IsNotEmpty({ message: 'firstname must be present' })
  firstName: string;

  @ApiProperty({ description: 'Apellido del instructor' })
  @IsNotEmpty({ message: 'lastname must be present' })
  lastName: string;

  @ApiProperty({
    description: 'Número de teléfono, según el formato Argentino',
  })
  @IsOptional()
  @Matches(
    /^\+?(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
    {
      message: 'phone not valid',
    },
  )
  phone: string;

  @ApiProperty({
    description: 'correo electrónico del instructor',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'Información o comentario sobre sí mismo, el instructor puede incluir expectativas',
  })
  @MaxLength(150, { message: "description can't exceed 150 characters" })
  description: string;

  @ApiProperty({ description: 'contraseña para acceder' })
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
  @ApiProperty({
    description: 'Nombre nuevo del instructor',
    type: String,
    required: false,
  })
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

class InstructorLinks {
  @ApiProperty({
    description: 'URL a si mismo',
    example: `${SPOTTER_GYM_URL}/instructors/65f648e6ac3afe33ea674dab`,
  })
  self: string;
  @ApiProperty({
    description: 'URL a la image de perfil',
    example:
      'https://res.cloudinary.com/dak9eesq1/image/upload/v1710797244/rre7itjwj10k8blsbhho.webp',
  })
  image_url: string;
  @ApiProperty({
    description: 'URL para listar las reseñas',
    example: `${SPOTTER_GYM_URL}/instructors/65f648e6ac3afe33ea674dab/reviews`,
  })
  reviews: string;
}

class InstructorBodyResponse extends OmitType(InstructorPostBody, [
  'password',
] as const) {}

export class InstructorSuccessResponse {
  @ApiProperty({ type: InstructorBodyResponse })
  data: InstructorBodyResponse;

  @ApiProperty({ type: InstructorLinks })
  links: InstructorLinks;
}
