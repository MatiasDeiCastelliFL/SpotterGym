import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { updateClient } from 'src/client/dto/clientsUpdate.dto';

export class ParseMongoIdPipe implements PipeTransform<string, ObjectId> {
  transform(value: string): ObjectId {
    const isValid = ObjectId.isValid(value);
    if (!isValid) {
      throw new BadRequestException('Invalid MongoDB ObjectId');
    }
    return new ObjectId(value);
  }
}

export const create_object_client = (
  arrayList: string[],
  objectUpdate: updateClient,
) => {
  const client = {};
  for (const item of arrayList) {
    if (objectUpdate[item]) {
      client[item] = objectUpdate[item];
    }
  }
  return client;
};
