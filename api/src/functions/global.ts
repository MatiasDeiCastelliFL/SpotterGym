import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectId } from 'mongodb';

export class ParseMongoIdPipe implements PipeTransform<string, ObjectId> {
  transform(value: string): ObjectId {
    const isValid = ObjectId.isValid(value);
    if (!isValid) {
      throw new BadRequestException('Invalid MongoDB ObjectId');
    }
    return new ObjectId(value);
  }
}
