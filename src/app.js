const express = require('express');
const app = express();

const dataRoutes = require('./routes/dataRoutes');

app.use('/api', dataRoutes); // use middleware
module.exports = app;

