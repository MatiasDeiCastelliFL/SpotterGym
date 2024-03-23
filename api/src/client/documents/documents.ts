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
        firstName: {
          type: 'string',
          description:
            'The firstName to be entered cannot be empty, it must have a minimum of 3 characters',
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
        typeDocumentId: {
          type: 'string',
          description:
            'the name of the typeDocuments added must be one that is registered in typeDocuments',
        },
        birthDate: {
          type: 'string',
          description:
            'The birthday date cannot be empty and must be sent in the format 03/01/2024',
        },
        typeRolId: {
          type: 'string',
          description:
            'The name of the added role must be one that is registered in roles.',
        },
      },
      required: [
        'firstName',
        'lastName',
        'email',
        'pass',
        'phone',
        'typeDocumentId',
        'nroDocuments',
        'birthDate',
        'typeRolId',
      ],
    },
  };
};

export const schemaClient = () => {
  return {
    firstName: {
      type: 'string',
      description: 'This is where the name will be entered.',
    },
    lastName: {
      type: 'string',
      description: 'This is where the lastName will be entered.',
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'This is where the email will be entered.',
    },
    pass: {
      type: 'string',
      description: 'This is where the pass will be entered.',
    },
    phone: {
      type: 'string',
      description: 'This is where the phone will be entered.',
    },
    nroDocuments: {
      type: 'string',
      description: 'This is where the nro document will be entered.',
    },
    typeDocumentId: {
      type: 'string',
      description: 'This is where the type documents will be entered.',
    },
    birthDate: {
      type: 'string',
      description: 'This is where the birthDate will be entered.',
    },
    typeRolId: {
      type: 'string',
      description: 'This is where the role will be entered.',
    },
    file: {
      type: 'string',
      format: 'file',
      description: 'This is where the file will be entered.',
    },
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
