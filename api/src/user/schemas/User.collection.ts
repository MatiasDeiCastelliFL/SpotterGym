import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type userDocument = User & mongoose.Document;
@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: false })
  image: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  salary: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  pass: string;
  @Prop({ required: true })
  nroDocument: string;
  @Prop({ default: true })
  active: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
