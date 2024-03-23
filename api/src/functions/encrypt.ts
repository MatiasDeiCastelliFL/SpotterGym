import { HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

export const hassPass = async (pass: string) => {
  return await bcrypt.hash(pass, 10);
};

export const descriptPass = async (
  schema: Model<any>,
  email: string,
  pass: string,
) => {
  const userSearch = await schema
    .findOne({ email: email })
    .populate('typeRolId')
    .exec();
  if (!userSearch) {
    return {
      status: HttpStatus.NOT_FOUND,
      message: 'Credentials incorrect',
    };
  }
  const comparePass = await bcrypt.compare(pass, userSearch.pass);
  if (comparePass) {
    const user = userSearch.toJSON();
    delete user.pass;
    return {
      status: HttpStatus.OK,
      message: 'access granted',
      user,
    };
  } else {
    return {
      status: HttpStatus.OK,
      message: 'Credentials incorrect',
    };
  }
};
