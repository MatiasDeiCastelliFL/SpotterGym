import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

class User {
  @Prop({ lowercase: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true })
  role_id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  user_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
type UserDocument = User & Document;
export type UserModel = Model<UserDocument>;
