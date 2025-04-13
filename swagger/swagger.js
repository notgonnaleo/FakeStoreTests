const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FakeStore API',
      version: '1.0.0',
      description: 'A simple FakeStore API implementation',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
    ],
  },
  apis: [
    path.join(__dirname, '../routes/*.js')
  ],
};

const specs = swaggerJsdoc(options);
module.exports = specs;