import { createClient } from '../dto/clients.dto';

export const PostClients = () => {
  return {
    description: 'Used to create a client',
    type: createClient,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'file',
          description:
            'It is not mandatory but you can add the profile photo of the client who is registering',
        },
        name: {
          type: 'string',
          description:
            'The name to be entered cannot be empty, it must have a minimum of 3 characters',
        },
        lastName: {
          type: 'string',
          description:
            'The lastName to be entered cannot be empty, it must have a minimum of 4 characters',
        },
        email: {
          type: 'string',
          description:
            'The email to be entered must meet the requirements of a gmail or hotmail, etc.',
        },
        pass: {
          type: 'string',
          description:
            'The pass to be entered cannot be empty and must be at least 8 characters with a lowercase letter, a capital letter and a special character.',
        },
        phone: {
          type: 'string',
          description:
            'The phone number of the person entering must only contain a number and cannot be empty.',
        },
        nroDocuments: {
          type: 'string',
          description: 'The document number cannot be empty.',
        },
        typeDocuments: {
          type: 'string',
          description:
            'the name of the typeDocuments added must be one that is registered in typeDocuments',
        },
        birthDate: {
          type: 'string',
          description:
            'The birthday date cannot be empty and must be sent in the format 03/01/2024',
        },
        role: {
          type: 'string',
          description:
            'The name of the added role must be one that is registered in roles.',
        },
      },
      required: [
        'name',
        'lastName',
        'email',
        'pass',
        'phone',
        'nroDocuments',
        'typeDocuments',
        'birthDate',
        'role',
      ],
    },
  };
};

export const schemaClient = () => {
  return {
    name: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string', format: 'email' },
    pass: { type: 'string' },
    phone: { type: 'string' },
    nroDocument: { type: 'string' },
    typeDocuments: { type: 'string' },
    birthDate: { type: 'string' },
    role: { type: 'string' },
    file: { type: 'string', format: 'file' },
  };
};

export const searchRequired = (seaerchObject: object) => {
  const arrayRequired = [];
  for (const key in seaerchObject) {
    if (key != 'file') {
      arrayRequired.push(key);
    }
  }
  return arrayRequired;
};
