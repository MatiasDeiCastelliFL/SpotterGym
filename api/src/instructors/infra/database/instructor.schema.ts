import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

@Schema()
class Instructor {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop()
  phone: string;
  @Prop()
  description: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop()
  image_url: string;
}

export type InstructorDocument = Instructor & Document;
export const InstructorSchema = SchemaFactory.createForClass(Instructor);
export type InstructorModel = Model<InstructorDocument>;
