import { Injectable } from '@nestjs/common';
import { InstructorStorage } from 'src/instructors/instructor.storage';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary';
import * as dotenv from 'dotenv';
import { createReadStream } from 'streamifier';
dotenv.config();

@Injectable()
export class CloudinaryStorage implements InstructorStorage {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUDNAME,
      api_key: process.env.CLOUDINARY_APIKEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
  }
  async upload(_file: Express.Multer.File): Promise<string> {
    const result = await new Promise<
      UploadApiResponse | UploadApiErrorResponse
    >((resolve, reject) => {
      const uploader = cloudinary.uploader.upload_stream((error, result) => {
        if (error) reject(error);
        return resolve(result);
      });
      createReadStream(_file.buffer).pipe(uploader);
    });
    return result.secure_url;
  }
}
