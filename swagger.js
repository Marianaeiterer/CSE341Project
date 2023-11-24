const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Library API',
    description: 'Library API',
  },

  host: 'localhost:3000',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFile, doc);
