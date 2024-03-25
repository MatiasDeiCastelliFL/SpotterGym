import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type clientDocument = HydratedDocument<Client>;
@Schema()
export class Client {
   @Prop({ lowercase: true })
   firstName: string;
   @Prop({ lowercase: true })
   lastName: string;
   @Prop()
   nroDocuments: string;
   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TypeDocument' })
   typeDocumentId: string;
   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Rol' })
   typeRolId: string;
   @Prop()
   phone: number;
   @Prop()
   email: string;
   @Prop()
   birthDate: string;
   @Prop()
   image: string;
   @Prop()
   pass: string;
   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Routines' })
   routines: mongoose.Types.ObjectId[];
   @Prop({ default: false })
   active: boolean;
}
export const clientSchema = SchemaFactory.createForClass(Client);
