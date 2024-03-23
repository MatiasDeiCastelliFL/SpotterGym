import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createTypeDocuments {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
export type UpdatingTypeDocuments = createTypeDocuments;
