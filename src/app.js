const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Your API Title",
        version: "1.0.0",
        description: "Your API Description"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local server"
        }
      ]
    },
    apis: [path.join(__dirname, 'src/routes/*.js')] // Path to the API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  

app.use(express.json());
app.use('/api', dataRoutes); // use middleware

module.exports = app;

