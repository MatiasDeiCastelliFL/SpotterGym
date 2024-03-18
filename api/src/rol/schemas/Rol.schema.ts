import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RolDocument = HydratedDocument<Rol>;
@Schema()
export class Rol {
  @Prop({ lowercase: true })
  name: string;
  @Prop({ default: true })
  active: boolean;
}

export const RolSchema = SchemaFactory.createForClass(Rol);
