export const swaggerDocument = {
  openapi: '3.0.3',
  info: {
    title: 'UCPL Club Backend',
    version: '0.1.0',
    description: 'API foundation for the University of Cincinnati powerlifting club backend.'
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local development server'
    }
  ],
  tags: [
    { name: 'Health', description: 'Health and status endpoints' },
    { name: 'Auth', description: 'Authentication and user session endpoints' },
    { name: 'Users', description: 'User management endpoints' },
    { name: 'Members', description: 'Member profile endpoints' },
    { name: 'Events', description: 'Event endpoints' },
    { name: 'News', description: 'News article endpoints' },
    { name: 'Gallery', description: 'Gallery item endpoints' },
    { name: 'Records', description: 'Powerlifting record endpoints' }
  ],
  paths: {
    '/health': {
      get: {
        tags: ['Health'],
        summary: 'Health check',
        responses: {
          '200': {
            description: 'Server is healthy',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string' }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' },
                  fullName: { type: 'string' }
                },
                required: ['email', 'password']
              }
            }
          }
        },
        responses: {
          '201': { description: 'User created successfully' }
        }
      }
    },
    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Authenticate a user and return a JWT token',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' }
                },
                required: ['email', 'password']
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Authentication successful',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    token: { type: 'string' }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/users': {
      get: {
        tags: ['Users'],
        summary: 'List all users',
        responses: { '200': { description: 'Users retrieved successfully' } }
      },
      post: {
        tags: ['Users'],
        summary: 'Create a user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' },
                  fullName: { type: 'string' }
                },
                required: ['email', 'password']
              }
            }
          }
        },
        responses: { '201': { description: 'User created successfully' } }
      }
    },
    '/users/{id}': {
      get: {
        tags: ['Users'],
        summary: 'Get a user by id',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: { '200': { description: 'User found' }, '404': { description: 'User not found' } }
      }
    },
    '/members': {
      get: {
        tags: ['Members'],
        summary: 'List all members',
        responses: { '200': { description: 'Members retrieved successfully' } }
      },
      post: {
        tags: ['Members'],
        summary: 'Create a member',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  userId: { type: 'integer' },
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  weightClass: { type: 'string' },
                  pronouns: { type: 'string' },
                  bio: { type: 'string' }
                },
                required: ['userId', 'firstName', 'lastName']
              }
            }
          }
        },
        responses: { '201': { description: 'Member created successfully' } }
      }
    },
    '/members/{id}': {
      get: {
        tags: ['Members'],
        summary: 'Get a member by id',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: { '200': { description: 'Member found' }, '404': { description: 'Member not found' } }
      }
    },
    '/events': {
      get: {
        tags: ['Events'],
        summary: 'List all events',
        responses: { '200': { description: 'Events retrieved successfully' } }
      },
      post: {
        tags: ['Events'],
        summary: 'Create an event',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' },
                  date: { type: 'string', format: 'date-time' },
                  location: { type: 'string' },
                  organizerId: { type: 'integer' }
                },
                required: ['title', 'date']
              }
            }
          }
        },
        responses: { '201': { description: 'Event created successfully' } }
      }
    },
    '/events/{id}': {
      get: {
        tags: ['Events'],
        summary: 'Get an event by id',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: { '200': { description: 'Event found' }, '404': { description: 'Event not found' } }
      }
    },
    '/news': {
      get: {
        tags: ['News'],
        summary: 'List all news articles',
        responses: { '200': { description: 'News articles retrieved successfully' } }
      },
      post: {
        tags: ['News'],
        summary: 'Create a news article',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  content: { type: 'string' },
                  authorId: { type: 'integer' }
                },
                required: ['title', 'content']
              }
            }
          }
        },
        responses: { '201': { description: 'News article created successfully' } }
      }
    },
    '/news/{id}': {
      get: {
        tags: ['News'],
        summary: 'Get a news article by id',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: { '200': { description: 'News article found' }, '404': { description: 'News article not found' } }
      }
    },
    '/gallery-items': {
      get: {
        tags: ['Gallery'],
        summary: 'List all gallery items',
        responses: { '200': { description: 'Gallery items retrieved successfully' } }
      },
      post: {
        tags: ['Gallery'],
        summary: 'Create a gallery item',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  imageUrl: { type: 'string' },
                  description: { type: 'string' }
                },
                required: ['title', 'imageUrl']
              }
            }
          }
        },
        responses: { '201': { description: 'Gallery item created successfully' } }
      }
    },
    '/gallery-items/{id}': {
      get: {
        tags: ['Gallery'],
        summary: 'Get a gallery item by id',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: { '200': { description: 'Gallery item found' }, '404': { description: 'Gallery item not found' } }
      }
    },
    '/records': {
      get: {
        tags: ['Records'],
        summary: 'List all records',
        responses: { '200': { description: 'Records retrieved successfully' } }
      },
      post: {
        tags: ['Records'],
        summary: 'Create a record',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  athleteName: { type: 'string' },
                  federation: { type: 'string' },
                  liftType: { type: 'string' },
                  weight: { type: 'integer' },
                  weightClass: { type: 'integer' },
                  sex: { type: 'string', enum: ['MALE', 'FEMALE'] },
                  date: { type: 'string', format: 'date-time' }
                },
                required: ['athleteName', 'federation', 'liftType', 'weight', 'weightClass', 'sex', 'date']
              }
            }
          }
        },
        responses: { '201': { description: 'Record created successfully' } }
      }
    },
    '/records/{id}': {
      get: {
        tags: ['Records'],
        summary: 'Get a record by id',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' }
          }
        ],
        responses: { '200': { description: 'Record found' }, '404': { description: 'Record not found' } }
      }
    }
  }
};
