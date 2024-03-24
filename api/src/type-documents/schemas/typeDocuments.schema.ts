import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TypeDocumentDocument = HydratedDocument<TypeDocument>;
@Schema()
export class TypeDocument {
   @Prop({ lowercase: true })
   name: string;
   @Prop({ default: true })
   active: boolean;
}

export const TypeDocumentSchema = SchemaFactory.createForClass(TypeDocument);
