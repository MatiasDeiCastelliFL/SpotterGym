import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Schema()
class User {
   @Prop({ lowercase: true, required: true })
   email: string;

   @Prop({ required: true })
   password: string;

   @Prop({ required: true, unique: true })
   role_name: string;

   @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
   user_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
type UserDocument = User & Document;
export type UserModel = Model<UserDocument>;
