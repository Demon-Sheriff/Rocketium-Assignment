const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const path = require('path');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));  

app.use(express.json());
app.use('/api', dataRoutes); // use middleware

module.exports = app;

