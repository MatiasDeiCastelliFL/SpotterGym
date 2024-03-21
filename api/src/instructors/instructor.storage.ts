export interface InstructorStorage {
  upload(file: Express.Multer.File): Promise<string>;
}

export const INSTRUCTOR_STORAGE = 'InstructorStorage';
