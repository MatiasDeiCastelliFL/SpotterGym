import { IsString, IsNotEmpty, MinLength } from 'class-validator';
export class CreateRol {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;
}

export type UpdatingRole = CreateRol;
